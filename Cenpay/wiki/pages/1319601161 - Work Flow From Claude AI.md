# Work Flow From Claude AI

- **Page ID:** 1319601161
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Work+Flow+From+Claude+AI
- **Path:** Home > Functional Specification > 02. Process Specification. > API Payment > Work Flow From Claude AI
- **Depth:** 4

---

**Work Flow**
![img](/download/attachments/1319601161/image2026-5-12%2016%3A45%3A10.png?version=1&modificationDate=1778579111559&api=v2)
**Description**

### ภาพรวมระบบ

Diagram นี้แสดง **Payment Flow** ของระบบโอนเงินแบบ Batch ผ่าน KTB Direct Credit โดยมี 5 Actor/Component หลัก ได้แก่:

| Component | บทบาท |
|---|---|
| **Operator (Authorizer)** | ผู้ใช้งานฝั่ง Back Office ที่ trigger กระบวนการ |
| **msa-paymentmg** | Payment Management Service — orchestrator หลัก |
| **msa-bank-payment-gateway (Stand Alone)** | Gateway สำหรับสื่อสารกับธนาคาร |
| **msa-otp (external)** | OTP Service |
| **Bank API (KTB DirectCredit)** | API ของธนาคารกรุงไทย |
| **paymentmg /callbacks endpoint** | Endpoint รับ callback ผลลัพธ์จาก Gateway |

| Step | Work Flow |
|---|---|
| Step 1 — Fetch Payer Mobile จาก Gateway Config | `msa-paymentmg` เรียก `GET /config/payer-mobile` พร้อม mTLS (Mutual TLS) ไปยัง Gateway เพื่อดึงเบอร์โทรศัพท์ของผู้โอนที่ลงทะเบียนไว้ใน configGateway อ่านค่าจาก `dev.yml` หรือ external text fileResponse กลับมาเป็น `{ mobile_no, masked, source: "config" }`**จุดสังเกต**: เบอร์โทรถูก mask ก่อนส่ง — ออกแบบมาเพื่อ data privacy |
| Step 2 — Request + Verify OTP | `msa-paymentmg` จัดการ OTP Flow เองทั้งหมด ไม่ผ่าน Gateway:**POST /otp/request** ส่ง `{ mobile_no, refCode }` ไปยัง `msa-otp`ระบบส่ง SMS OTP ไปหา OperatorOperator กรอก OTP กลับมา**POST /otp/verify** ส่ง `{ refCode, code }` เพื่อยืนยันได้รับ `{ verified: true }` กลับมาหลังจาก verify สำเร็จ `msa-paymentmg` persist `batchFinanceNo` และ N รายการในสถานะ **PENDING** พร้อม generate `transRefNo` + `requestUID` + `channel` ให้แต่ละ item |
| Step 3 — Submit Batch (Synchronous Accept, Async Processing) | กระบวนการ Submit มี 2 Phase:**Phase A — Auth:**`POST /auth/token` ด้วย mTLS ทุกครั้งก่อน call (fresh per call, short TTL Bearer token)**Phase B — Submit:**`POST /payments (Bearer)` พร้อม payload: `{ batchFinanceNo, bank, callbackUrl, items[1..20] }`Gateway **validate + log + enqueue** รายการเข้า queueResponse: `202 Accepted { batchFinanceNo, callbackNo, accepted: N }`**Design Pattern**: ระบบใช้ **Async Processing Pattern** — accept ทันทีแล้วค่อย process ในพื้นหลัง ทำให้ client ไม่ต้อง block รอผล |
| Step 4 — Gateway Processes Items ต่อธนาคาร (Sequential, Per Item Loop) | Gateway ดำเนินการแต่ละ item ใน **loop แบบ sequential** (ไม่ใช่ parallel):**ก่อน Loop:**ขอ `POST /token` จาก Bank API — fresh per batch, ใช้แล้วทิ้ง**แต่ละ Item:**`resolve ChannelAdapter(bank, item.channel)` — เลือก adapter ตาม channel ของ item**Account Inquiry** — ถามธนาคารว่า account ปลายทาง active หรือไม่ **Alt Branch — Account Status:**สถานะการดำเนินการ**Account Active** (IC001/EV033/EV006)`POST fundtransfer { resendFlag: "N" }` → รอผล IC000/EM001/EM066/ET001**Account Inactive****Skip transfer** และ mark item เป็น `ACCOUNT_INACTIVE` ทันที **หลัง Process แต่ละ Item:**Log ผลลัพธ์พร้อม `batchFinanceNo``POST /callbacks/payment-result` ไปยัง `paymentmg /callbacks endpoint` พร้อม: `{ batchFinanceNo, transRefNo, channel, status, code, sysRefNo }`**Callback Alt Branch:**กรณีการดำเนินการ**Callback 2xx**`paymentmg` update row เป็น terminal status**Callback 5xx / timeout / paymentmg down**Gateway retry 3 ครั้ง (backoff 5s/15s/30s) — ถ้ายังไม่สำเร็จ บันทึกเฉพาะใน audit log |
| สถานะ | การดำเนินการ |
| **Account Active** (IC001/EV033/EV006) | `POST fundtransfer { resendFlag: "N" }` → รอผล IC000/EM001/EM066/ET001 |
| **Account Inactive** | **Skip transfer** และ mark item เป็น `ACCOUNT_INACTIVE` ทันที |
| กรณี | การดำเนินการ |
| **Callback 2xx** | `paymentmg` update row เป็น terminal status |
| **Callback 5xx / timeout / paymentmg down** | Gateway retry 3 ครั้ง (backoff 5s/15s/30s) — ถ้ายังไม่สำเร็จ บันทึกเฉพาะใน audit log |
| Step 5 — Pull-Fallback Recovery (Lost Callback Handling) | **กลไกนี้คือ Safety Net** สำหรับกรณีที่ callback หาย (network failure, service restart ฯลฯ):`msa-paymentmg` ทำ **scheduled scan ทุก 30 วินาที** ดังนี้:หารายการที่ยัง `PENDING` เกิน SLA (เช่น 2 นาที)`GET /payments/inquiry?transRefNo=...&bank=...&channel=...` ไปถาม GatewayGateway ส่ง `POST inquiry { transRefNo }` ไปถาม Bank API**Alt Branch — Bank Response:**กรณีการดำเนินการ**Bank knows**ได้รับ `200 { tranStatusCode, sysRefNo, source: "bank" }`**Bank not found** (EY034/EV035)scan audit log ของวันนั้นด้วย `transRefNo` → ได้ `200 { status, source: "log" }` หรือ `404 NOT_SUBMITTED` สุดท้าย `msa-paymentmg` **persist final status** ให้ record |
| กรณี | การดำเนินการ |
| **Bank knows** | ได้รับ `200 { tranStatusCode, sysRefNo, source: "bank" }` |
| **Bank not found** (EY034/EV035) | scan audit log ของวันนั้นด้วย `transRefNo` → ได้ `200 { status, source: "log" }` หรือ `404 NOT_SUBMITTED` |

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1319601161/image2026-5-12%2016%3A45%3A10.png?version=1&modificationDate=1778579111559&api=v2
