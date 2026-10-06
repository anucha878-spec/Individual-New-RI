# RI ↔ Cenpay/PayM — Sub-Category สำหรับจัดกลุ่มทดสอบ

**ขอบเขต:** Manual RI (หน้าจอ EDW-RI, repo `msa-adwetl`) → PayM/Cenpay (`msa-paymentmg`) → ดึงสถานะกลับ
**ที่มา:** `RI-CENPAY-REDMINE-2026-08-19.md` · `Presentation.html` · wiki `RDSADW` (SD005 pageId 983269499, SD007 pageId 989856045) · `RDSCPENH` (02 WS Landing, 01 WS payment-verification) · Redmine #90110 / #93290 / #93943 / #93953 / #93955
**จัดทำ:** 21 ส.ค. 2026 · **อัปเดต:** 9 ก.ย. 2026 จากผล SIT

> 📌 **ผล SIT ออกแล้ว** — ดู `RI-CENPAY-SIT-RESULT-2026-09-09.md` (63 เคส: Passed 53 / Failed 1 / Cancelled 7 / Not Start 2)
> **H01 และ H03 ปิดแล้ว** ตามผล SIT · H02 / H04 / H05 / H06 ยังค้าง

รหัสเคส: `RI-CP-<หมวด><ลำดับ>` เช่น `RI-CP-C05-02`

| หมวด | ชื่อกลุ่ม | Sub-cat | เจ้าของหลัก | สถานะพร้อมทดสอบ |
|---|---|---|---|---|
| **A** | Pre-condition & Master Data | 8 | Cenpay + RI | ⬜ ต้องเคลียร์ก่อนเริ่ม |
| **B** | ต้นทาง — หน้าจอ Manual RI | 5 | RI (msa-adwetl) | 🟢 SIT ผ่าน (flow #93953 คือข้อสรุป) |
| **C** | Interface ขาออก — 02 WS Landing | 9 | RI ↔ PayM | 🟢 พร้อม |
| **D** | กลไกฝั่ง Cenpay | 5 | Cenpay | 🟢 พร้อม |
| **E** | ขากลับ — 01 WS payment-verification | 5 | RI | 🔴 ยังไม่มีตัวเรียกฝั่ง RI |
| **F** | Negative & Boundary | 4 | RI ↔ PayM | 🟢 พร้อม |
| **G** | Non-Functional | 3 | ทั้งสองฝั่ง | 🟡 หลังฟังก์ชันผ่าน |
| **H** | รอข้อสรุป (ยังล็อกเคสไม่ได้) | 6 | Suthanee / Cenpay | 🟡 เหลือ 4 ข้อ (H01/H03 ปิดแล้ว) |

---

## A · Pre-condition & Master Data

> ถ้าข้อใดไม่ตรง รายการตกตั้งแต่ยิงเข้า — ต้องติ๊กครบก่อนเปิดรอบทดสอบ

| Sub-cat | ขอบเขต | จุดตรวจ | ผู้รับผิดชอบ |
|---|---|---|---|
| **A01** | Lookup catalog | `cf_lookup_catalog` มี **13008 (EI)** · **14030 (RIP)** · **72069 (EI↔RIP)** และ active ใน env UAT | Cenpay |
| **A02** | รหัสธนาคาร | `bankId` ↔ `botBankCode` ↔ `bankAbbrName` ใช้ชุดเดียวกับ Cenpay (ไม่ใช่รหัสภายใน RI) | RI + Cenpay |
| **A03** | Running pattern | `cf_running_pattern` ของกลุ่ม EI (ฝั่ง Cenpay) · `tx_running_no` key `H_RI_TB/YYYYMMDD` (ฝั่ง RI) | ทั้งสองฝั่ง |
| **A04** | Service / Bank Account / GL mapping | ธุรกรรม RI ผูกบัญชีบริษัท + ผังบัญชีถูกต้อง | Cenpay + บัญชี |
| **A05** | `accReferenceNo` | รูปแบบเลขอ้างอิงบัญชี RI ที่ EDW/SUN รับรู้ | RI + บัญชี |
| **A06** | DMS | เอกสารแนบอัปโหลดจริง · `dmsDocId` เปิดดูได้จากหน้าจอ Cenpay | RI |
| **A07** | User / สิทธิ์ / บัญชีทดสอบ | ผู้อนุมัติฝั่ง RI (user จริง) · maker–checker ฝั่ง Cenpay · บัญชี UAT ที่โอนได้จริง (KTB API / BBL) หรือข้อตกลง mock | ทั้งสองฝั่ง |
| **A08** | DB prerequisite | `tx_ri_summary.tx_ri_actual_offset_id_old` ถูก alter แล้ว (**#93943**) — ไม่มีคอลัมน์นี้ = ทดสอบ B02 ไม่ได้ | RI |

---

## B · ต้นทาง — หน้าจอ Manual RI (msa-adwetl)

| Sub-cat | ขอบเขต | เคสหลัก | เกณฑ์ผ่าน |
|---|---|---|---|
| **B01** | SD005 — Offset ครั้งแรก | Offset ข้อมูล Actual RI ปกติ | เขียน `tx_ri_actual_offset` · สถานะ "รอพิจารณาอนุมัติเข้า EDW" · **ไม่ gen เลขอ้างอิงที่จอนี้** (#93955) |
| **B02** | SD005 — Offset ใหม่ทับรายการเดิม | summary ที่มี `tx_ri_actual_offset_id_old` มีค่า | แถวใหม่ยกค่า `process_status_paym` / `batch_oper_no` / `remark_paym` มาจากแถวเดิม · `..._id_old` = NULL หลังอัปเดต · แถวเดิม → `process_status_paym` = "ยกเลิกข้อมูล" และ `batch_oper_no`, `remark_paym` = NULL |
| **B03** | Generate เลขอ้างอิง | รูปแบบ · running · การทับเลข · ขาจ่าย/ขารับ | รูปแบบ `RI-TB-YYYYMMDD-00001` · running เดินที่ `tx_running_no` · **gen ใหม่ทับทุกครั้งที่ส่ง** · **เฉพาะ `net_amount < 0`** — ขารับไม่ gen แต่ปุ่มยังกดได้ (ไม่ถูกตีตกผิดขา) |
| **B04** | สถานะฝ่ายการเงิน `process_status_paym` | กดได้ / กดไม่ได้ | ว่าง หรือ id **12 / 15 / 18** → กด/ส่งซ้ำได้ · **13** (กำลังทำจ่าย) → ปุ่ม disable กันจ่ายซ้ำ · ✅ ยืนยันแล้ว: กดได้ 4 id **12/15/18/20** · กดไม่ได้ 13/14/16/17/19 และ `-` |
| **B05** | SD007/SD008 — UI & Flow (**#93953**) | ตัดปุ่ม + เพิ่มคอลัมน์ | ไม่มีปุ่ม/popup "พิจารณาอนุมัติเข้าฝ่ายการเงิน" · checkbox แสดงเฉพาะสถานะ "รอพิจารณาอนุมัติเข้า EDW" · datagrid มีคอลัมน์ "สถานะฝ่ายการเงิน" ที่กลายเป็นปุ่มส่งซ้ำเข้า PayM เมื่อสถานะเป็นเคส fail · ปุ่ม "อนุมัติเข้า EDW" เป็นตัวส่งเข้า PayM |

---

## C · Interface ขาออก — `POST /thaisamut/rs/paymentmg/v2/payment-batch/landing`

| Sub-cat | ขอบเขต | ข้อมูลที่ต้องจัด | ผลที่คาดหวัง |
|---|---|---|---|
| **C01** | รหัสประจำระบบ | Source System `Re Insurance` · `transactionGroup=EI` · `transactionType=RIP` · `source_type=RI` (เอกสาร) | Cenpay รู้จักรายการ · เอกสารลง `tx_document` |
| **C02** | Header — ยอดและจำนวน | `totalTransaction` = จำนวน detail จริง · `totalAmount` = ผลรวม `amount` | 200 Success รับเข้าหน้าจอรับรายการ |
| **C03** | Header — เลขอ้างอิง & ผู้อนุมัติ | `batchOperNo` ไม่ซ้ำ · `approvedBy` เป็น user จริง · `approvedDate` · `accReferenceNo` · `tax=WHT` · `requestPaymentDate` | ไม่ 409 · แสดงผู้อนุมัติถูก |
| **C04** | Detail — ผู้รับเงิน | นิติบุคคล: ชื่อบริษัทใน `payeeFirstName` เว้น `payeeLastName` · `mobileNo` / `email` สำหรับแจ้งผล | ชื่อผู้รับถูกทั้งบนหน้าจอและบนเช็ค |
| **C05** | Detail — บัญชีรับเงิน | โอน: `bankId` `bankName` `bankAbbrName` `botBankCode` `bankAccountNo` `bankBranch` ครบ · พร้อมเพย์: `promptpayType` **I** และ **M** + `promptpayNo` | เข้าคิวทำจ่ายได้ทั้ง 2 รูปแบบ |
| **C06** | Detail — จำนวนเงิน & ภาษี | มี WHT: `whtAmount` `whtRate` `taxType=53` `taxNo` 13 หลัก `taxName` `taxAddress1/2` `whtType` `invoiceNo` · ไม่มี WHT: `whtAmount=0` | ยอดสุทธิถูก · หนังสือรับรองหัก ณ ที่จ่ายถูก · จ่ายเต็มจำนวนกรณีไม่มี WHT |
| **C07** | Detail — ข้อมูลกรมธรรม์ | `policyNo` · `policyType` (ORD/IND/GOV/PA/UL/GRP/PAG) · `productCode` · `branchSourceCode/RegisterCode/ServiceCode` · `channelCode` · `policyStartDate` · `paymentMode` · `premiumAnnualAmount` · `premiumModeAmount` | แสดงรายละเอียดกรมธรรม์ครบบนหน้าจอตรวจอนุมัติ |
| **C08** | Detail — เอกสารแนบ | `documentName` · `dmsDocId` (**เอกสารจริงใน DMS**) · `documentUploadDate` · `documentUploadBy` | เปิดเอกสารได้ตอนตรวจอนุมัติ |
| **C09** | เช็คคืน–จ่ายใหม่ | `previousTransactionType` + `previousbatchOperNo` | ผูกกับรายการเดิมได้ |

---

## D · กลไกฝั่ง Cenpay

| Sub-cat | ขอบเขต | เคสหลัก | ผลที่คาดหวัง |
|---|---|---|---|
| **D01** | Batch Split | 3 รายการ ยอดละ 100,000 | **PEN** ไม่แยก Batch · ทุกรายการ **WCF** |
| | | 1 รายการ ยอด 5,000,000 | **PEN** (ไม่ Split เพราะมีรายการเดียว) |
| | | 4 รายการ: 2 รายการเกิน 2 ล้าน + 2 รายการไม่เกิน | **BAS** + เกิด Batch ย่อย 2 ชุด รูปแบบ `CP-TB-YYYYMMDD-00001_1-2` |
| **D02** | ช่องทางการจ่าย | TRB โอนปกติ · TRE โอนด่วน · PMP พร้อมเพย์ · BKC เช็คธนาคาร · COM เช็คบริษัท · API รหัสรับเงิน · **OVR โอนต่างประเทศ** · **BHT Bahtnet** · OTH | แต่ละช่องทางเดินได้ · เช็คได้เลขเช็ค + วันออก/หมดอายุ |
| **D03** | Maker–Checker | ตรวจ → อนุมัติ → ยืนยันโอน | สิทธิ์แยกกันจริง · ข้ามขั้นไม่ได้ |
| **D04** | ปลายทางจ่ายเงิน | จ่ายสำเร็จ (บัญชี UAT ที่โอนได้จริง) | สถานะจ่ายสำเร็จ + SMS/Email แจ้งผล |
| | | จ่ายไม่สำเร็จ (เลขบัญชีผิด / บัญชีปิด) | สถานะ reject + Auto Mail + RI รับสถานะกลับได้ |
| **D05** | บันทึกฝั่ง PayM | `tx_payment_detail.oper_ref_no` | = เลขของรอบล่าสุด · ส่งซ้ำ = `payment_header_id` ใหม่ · เลขเก่าไม่ปรากฏฝั่ง PayM |

---

## E · ขากลับ — `POST /thaisamut/rs/paymentmg/v2/payment-verification`

> Cenpay **ไม่ push** สถานะกลับ — RI ต้องเรียกถามเอง · ถ้าส่วนนี้ไม่พร้อม ทดสอบได้แค่ครึ่งทาง

| Sub-cat | ขอบเขต | จุดตรวจ |
|---|---|---|
| **E01** | เรียกด้วย `operRefNo` | ได้ `batchOperNo` `batchOperStatus` `transactionStatus` `targetStatus` `chequeNo` `chequeIssueDate` `chequeExpiryDate` `paidDate` `batchPaymentNo` `reason` (กรณี reject) |
| **E02** | Limit 300 รายการ/ครั้ง | เกิน 300 ต้องแบ่งรอบเรียกได้ถูกต้อง ไม่ตกรายการ |
| **E03** | Status mapping | ตาราง `targetStatus` Cenpay → สถานะภายใน RI ครบทุกค่า ไม่มี unmapped |
| **E04** | `SyncPayRiBatchService` | อ่านเลขจาก **`tx_ri_actual_offset.batch_oper_no`** (ไม่ใช่ `tx_ri_offset_transaction` ที่ขาจ่ายมี 0 แถว) · poll เฉพาะสถานะในชุดที่กำหนด (รวม 13) |
| **E05** | หน้าจอ / Job ฝั่ง RI | มี Job หรือหน้าจอเรียกเป็นรอบ · QA เห็นสถานะอัปเดตกลับจริงบนหน้าจอ |

---

## F · Negative & Boundary

| Sub-cat | เคส | ผลที่คาดหวัง |
|---|---|---|
| **F01** | ตัด field บังคับ (เช่นไม่ส่ง `approvedBy`) | **400 Bad Request** |
| **F02** | ยิง `batchOperNo` เดิมซ้ำ | **409 Conflict** ไม่เกิดข้อมูลซ้ำ |
| **F03** | `totalAmount` / `totalTransaction` ไม่ตรงผลรวม detail | ไม่รับ หรือแจ้ง error ชัดเจน |
| **F04** | ข้อมูลไม่สอดคล้อง: ช่องทาง = โอน แต่ข้อมูลธนาคารไม่ครบ · พร้อมเพย์ไม่ระบุ I/M · `dmsDocId` เป็นเลขสมมติ | ไม่รับ หรือติดที่ขั้นตรวจสอบ — ต้องพิสูจน์ว่าไม่หลุดไปทำจ่าย |

---

## G · Non-Functional

| Sub-cat | ขอบเขต | จุดตรวจ |
|---|---|---|
| **G01** | Batch ใหญ่ | รายการจำนวนมากใน 1 Batch — เวลาตอบสนอง + ไม่ timeout · ทดสอบคู่กับ limit 300 ของ E02 |
| **G02** | Concurrency / กดซ้ำเร็ว | กดส่ง PayM ซ้อนกัน — running no ไม่ชน · ไม่จ่ายซ้ำ (สถานะ 13 ต้อง disable ได้จริง) |
| **G03** | Atomicity | gen เลขเกิดหลัง `claimForFinance` สำเร็จเท่านั้น — ถ้า PayM ล้ม ต้องไม่เหลือเลขค้างที่ทำให้สถานะเพี้ยน |

---

## H · รอข้อสรุป — ยังล็อกเคสไม่ได้ (บล็อก)

| Sub-cat | ประเด็น | ต้องได้คำตอบจาก | กระทบเคส |
|---|---|---|---|
| ~~**H01**~~ ✅ | **ปิดแล้ว (SIT 9 ก.ย. 2026)** — จุด gen อยู่ที่ปุ่ม **"พิจารณาอนุมัติข้อมูลเข้า EDW"** + ปุ่มบนคอลัมน์ "สถานะฝ่ายการเงิน" (ส่งซ้ำ) ตาม #93953 · เดิม: **จุด Generate เลขอ้างอิงขัดกันเอง** — #93290 (Resolved 18 ส.ค.) ย้าย gen ไปปุ่ม "พิจารณาอนุมัติเข้าฝ่ายการเงิน" SD007 แต่ #93953 (19 ส.ค.) สั่งตัดปุ่มนั้นออก ⇒ ต้องย้ายไปปุ่ม "อนุมัติเข้า EDW" / ปุ่มบนคอลัมน์สถานะการเงิน | **Suthanee Saelim** ว่าใบไหนคือข้อสรุป | B03 · B05 · D05 |
| **H02** | `batch_oper_no` vs `batchOperNo` — เลข `RI-TB-…` ถูกส่งเป็น **`operRefNo`** ระดับรายการ แล้วอะไรคือ `batchOperNo` ระดับ Batch | ทีม Cenpay | C03 · E01 |
| ~~**H03**~~ ✅ | **ปิดแล้ว (SIT 9 ก.ย. 2026)** — "ระงับการจ่าย" = **id 20** เป็น id ใหม่จริง · ชุดที่กดได้ = **12 / 15 / 18 / 20** (ปุ่มแดงตัวอักษรขาว) · กดไม่ได้ = 13/14/16/17 (ตัวอักษรฟ้า) · 19 จ่ายสำเร็จ (สีปกติ) · `-` = NULL · อ้าง wiki `961216654` v.14 | ปิด — U-06/07/08 Passed | B04 |
| **H04** | SD008 จริงยังไม่มีคอลัมน์ "เลขอ้างอิง" ทั้งที่ wiki ลิสต์ field mapping ไว้ | Suthanee / Supakit | B05 |
| **H05** | การจ่ายต่างประเทศ — ใช้ OVR/BHT และต้องมี field เพิ่ม (SWIFT ฯลฯ) หรือไม่ · spec ปัจจุบันไม่ระบุ | RI + Cenpay | D02 |
| **H06** | **แผน UAT ยังไม่มีแถวของ RI** — `Plan UAT Cenpay.xlsx` (Lot 2 / Lot 3, 17/08–16/09/2026) ไม่มีรายการประกันภัยต่อ | PM / ผู้คุมแผน UAT | ทั้งรอบ |

---

## ลำดับการรันที่แนะนำ

```
A (ทั้งหมด)  →  H02 เคลียร์  →  B ✅SIT  →  C  →  D  →  E  →  F  →  G
 pre-cond       ปลดบล็อก        ต้นทาง    ขาออก  Cenpay  ขากลับ  negative  NFR
```

- **A ต้องเขียว 100% ก่อนแตะ C** — ไม่งั้นทุกเคสตกที่ master data ปนกับ bug จริง แยกไม่ออก
- ~~B03 / B05 อย่าเขียนเคสละเอียดก่อน H01 จบ~~ → **H01 จบแล้ว** จุด gen นิ่งที่ปุ่ม "พิจารณาอนุมัติข้อมูลเข้า EDW" · เขียนเคสละเอียดได้แล้ว
- **เคสที่ SIT ปิดไม่ลง (U-17 / U-26 / U-29) ต้องยกมาทำใน UAT หรือขอ dev test** — สาเหตุคือทำให้ PayM ตอบ error จากหน้าจอไม่ได้ ไม่ใช่ว่าโปรแกรมถูก
- **F02 (409) รันท้ายชุด** เพราะเผาเลข `batchOperNo` ทิ้งไปหนึ่งเลข
- **E เป็นตัวตัดสินว่าเป็น end-to-end หรือ one-way** — ถ้า E05 ไม่พร้อม ให้ประกาศตั้งแต่ต้นรอบว่าทดสอบได้ถึง D เท่านั้น
