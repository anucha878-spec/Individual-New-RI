# RI ↔ Cenpay/PayM — อัปเดตจาก Redmine 19 ส.ค. 2026

บันทึกที่มาของข้อมูลที่ใช้ปรับ `Presentation.html` (สไลด์ "เส้นทางจริงฝั่ง RI" และ "งานที่ยังเดินอยู่ (Redmine)")

**ดึงเมื่อ:** 2026-08-19 · Redmine REST API + Confluence space `RDSADW` ผ่าน Playwright session ของ `anucha.pi`

---

## WBS แม่

**#90110 — G9 : จ่ายประกันภัยต่อ จากระบบ Manual RI**
Project 20220161 - Centralized Payment: Enhancement & Integration · parent #63259
Status **Resolved** · คืบหน้า **76%** · Suthanee Saelim · created 2026-07-30, updated 2026-08-19

> นี่คือ WBS ที่คุมงาน RI → Cenpay ทั้งก้อน ใบ #93943 / #93953 / #93955 เป็นลูกของใบนี้

**#93073 — [E2E Cenpay]** (UR Internal IT · parent #14272) — เป็นแม่ของ #93290

---

## สรุปเส้นทางข้อมูลที่ยืนยันแล้ว

ฝั่งที่คุยกับ Cenpay/PayM คือ **Manual RI ผ่านหน้าจอ EDW-RI** ใน repo `msa-adwetl` (ไม่ใช่ core RI ยิงตรง)

```
EDW-RI-SD005  ตรวจสอบ + Offset ข้อมูล Actual RI → "รอพิจารณาอนุมัติเข้า EDW"
              เขียน tx_ri_actual_offset
      ↓
EDW-RI-SD007/SD008  พิจารณาอนุมัติข้อมูลเข้า EDW
                    ← จุด Generate เลขอ้างอิง + ส่งเข้า PayM
      ↓
PayM (msa-paymentmg)  tx_payment_detail.oper_ref_no = เลขของรอบล่าสุด
      ↓
SyncPayRiBatchService  ดึงสถานะกลับ โดยอ่านเลขจาก tx_ri_actual_offset.batch_oper_no
```

### กติกา 3 ข้อ

1. **เฉพาะขาจ่ายที่ไปถึง PayM** — `net_amount < 0` เท่านั้น
   ขารับ (`net_amount > 0`) ไม่ส่ง PayM จึงไม่มีเลขอ้างอิงโดยดีไซน์
2. **Generate เลขใหม่ทุกครั้งที่ส่งเข้า PayM และทับเลขเดิม**
   ส่งใหม่ = PayM ทิ้งรายการเก่า (เจ้าของงานยืนยัน 14/08/2026)
3. **แหล่งความจริงเดียวคือ `tx_ri_actual_offset.batch_oper_no`**
   `tx_ri_offset_transaction` ของแถวขาจ่ายมี **0 แถว** (ตารางนั้นเกิดจากไฟล์ Kryo ขา EDW เท่านั้น)

### รูปแบบเลขอ้างอิง

`tx_ri_actual_offset.batch_oper_no` — spec EDW-RI-SD007 (suthanee.sa 14/08/2026), อ้างอิง "02-02-00 สร้าง Running No"

| ส่วน | ค่า |
|---|---|
| ชื่อระบบ | `RI` |
| ช่องทางการจ่าย | `TB` |
| วันที่สร้างรายการ | `YYYYMMDD` |
| Running | 5 ตำแหน่ง เริ่ม `00001` |

ตัวอย่าง `RI-TB-20260818-00001` · running key ที่ `tx_running_no` = `H_RI_TB/YYYYMMDD`

> ⚠️ **ชื่อคอลัมน์ทำให้เข้าใจผิดได้** — คอลัมน์ชื่อ `batch_oper_no` แต่ถูกส่งเข้า PayM เป็น **`operRefNo`** (ระดับรายการ) ไม่ใช่ `batchOperNo` ระดับ Batch · ยืนยันจาก dev log #93290 และผลทดสอบที่ PayM `tx_payment_detail.oper_ref_no`

### สถานะฝ่ายการเงิน `tx_ri_actual_offset.process_status_paym`

- **กด/ส่งซ้ำได้:** ค่าว่าง หรือ id ในชุด `12 / 15 / 18` (`PayMTargetStatusEnum.SELECTABLE_FOR_FINANCE_IDS`)
- **`13`** = กำลังทำจ่าย (อยู่ในชุดที่ระบบ poll) → ปุ่ม disable กันจ่ายซ้ำ
- spec (แก้ 19/08/2026) ระบุชื่อสถานะที่ให้ส่งซ้ำได้ **4 อัน**:
  ส่งข้อมูลเข้าระบบ PayM ไม่สำเร็จ · ไม่ผ่านการตรวจสอบ (ฝ่ายการเงิน) · จ่ายเงินไม่สำเร็จ · **ระงับการจ่าย**
- ⚠️ โค้ดมี 3 id แต่ spec ลิสต์ 4 ชื่อ — ถ้า "ระงับการจ่าย" เป็น id ใหม่ ต้องเพิ่มเข้า enum

---

## รายละเอียดแต่ละใบ

### #93290 — เปลี่ยนขั้นตอนการ Generate batch_oper_no

`Task` · **Resolved** · UR Internal IT · parent #93073
Suthanee Saelim (author + assignee) · created 2026-08-14, updated 2026-08-18 · attachments 9 รูป

**Description**
> ยกเลิก จากหน้า http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=983269499 (SD005)
> เพิ่มในหน้า http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856045 (SD007)

**สาระจาก Dev Log (Supakit Singwieng · 2026-08-18 12:50)**

| | เดิม | ใหม่ (ตาม spec) |
|---|---|---|
| จุด gen | ปุ่ม "ส่งขออนุมัติ" ที่ SD005 | ปุ่ม "พิจารณาอนุมัติเข้าฝ่ายการเงิน" ที่ SD007/SD008 |
| ความถี่ | ครั้งเดียวตลอดชีวิตรายการ (เขียนเฉพาะตอน NULL) | **gen ใหม่ทุกครั้งที่กด** (wiki 989856045 บรรทัด 426) |
| ผล | PayM ได้เลขของรอบแรกเสมอ | PayM ได้เลขของรอบล่าสุดเสมอ |

เงื่อนไขที่ทดสอบผ่าน: ขาจ่ายกดปุ่ม → gen + ทับ + ส่ง PayM · ขารับกดปุ่ม → ไม่ gen · ปุ่ม "อนุมัติข้อมูลเข้า EDW" → ไม่ gen · แถวที่มีเลขเดิมจาก SD005 → ทับได้ · แถวที่ยังไม่มีเลข → กดได้ (เดิมกดไม่ได้)

**ไฟล์ที่แก้ (repo `msa-adwetl`)**

| ไฟล์ | สิ่งที่ทำ |
|---|---|
| `resources/v1/ReinsurerResource.java` | ลบบล็อก gen ใน `submitForApproveActualOffset` (SD005) |
| `components/service/manualri/RiFinanceApproveService.java` | gen ใน `approveOne` — หลัง `claimForFinance` สำเร็จ (atomic) และเฉพาะขาจ่าย · เซ็ตค่าลง entity ด้วย (`RiPaymLandingBeanBuilder` อ่าน `offset.getBatchOperNo()` ไปเป็น `operRefNo`) |
| `jdbi/dao/TxRiActualOffsetDao.java` | `updateBatchOperNoIfAbsent` → `updateBatchOperNo` (ตัดเงื่อนไข `AND batch_oper_no IS NULL` ที่มาจาก #90122/#90123) |
| `src/main/js/containers/Reinsurance/RI-SD008/ListTab.js` | `isFinanceSelectable` — ลบเงื่อนไข `!!data.batchOperNo` (ไม่งั้นไม่มีแถวไหนกดได้เลยแบบเงียบ ๆ) เหลือเช็คสถานะการเงิน |
| `components/service/paymentmg/SyncPayRiBatchService.java` | `collectBatchOperNo` — เปลี่ยนจากอ่าน `tx_ri_offset_transaction` (ขาจ่าย 0 แถว) เป็นอ่าน `tx_ri_actual_offset.batch_oper_no` |
| ลบทิ้ง | `TxRiOffsetTransactionDao.findBatchOperNoByActualOffsetIds` · `jdbi/entities/RiOffsetBatchOperBean.java` · field `txRunningNoService` ที่ `ReinsurerResource` |

**Commit (Git Ticket #5939 · `https://10.100.2.187:8443/tickets/msa-adwetl.git/5939`)**

| commit | วันที่ | สาระ |
|---|---|---|
| `bdeccca524` | 18 ส.ค. 12:42 | เอา `RiFinanceApproveServiceTest` ออกจาก ticket |
| `b6d1a29fc6` | 14 ส.ค. 15:32 | gen `batch_oper_no` ที่ปุ่มพิจารณาอนุมัติเข้าการเงิน (EDW-RI-SD007) |
| `7a70434c32` | 14 ส.ค. 14:47 | เปลี่ยนขั้นตอนการ Generate `batch_oper_no` |

**ผลทดสอบ end-to-end** (local: `msa-adwetl` :2033 → DB dev `11.100.8.51` · `msa-paymentmg` :2112 → DB `11.100.8.107`) — กดปุ่มจริง 2 ครั้งที่แถว id 500:

| จุดตรวจ | ก่อน | ครั้งที่ 1 | ครั้งที่ 2 |
|---|---|---|---|
| `tx_ri_actual_offset.batch_oper_no` | `RI-TB-20260813-00002` | `RI-TB-20260818-00001` | `RI-TB-20260818-00002` |
| `tx_running_no` (`H_RI_TB/20260818`) | ไม่มีแถว | 1 | 2 |
| PayM `tx_payment_detail.oper_ref_no` | — | `…-00001` (header 1381) | `…-00002` (header 1382) |
| `process_status_paym` | NULL | 13 | 13 |

**ข้อจำกัดที่ระบุไว้ในใบ:** ยังไม่ทดสอบบน SIT · unit test `RiFinanceApproveServiceTest` (6 เคสผ่าน) ถูกเอาออกจาก ticket ตามที่ทีมสั่ง ดูย้อนหลังได้ที่ commit `b6d1a29fc6` · ไม่มี changeSet liquibase และไม่แก้ config yml · `tx_ri_offset_transaction.batch_oper_no` ของขา actual→EDW จะเป็น NULL (ผลข้างเคียงที่ยอมรับแล้ว) · SD008 ยังไม่มีคอลัมน์ "เลขอ้างอิง" ที่จอจริง (wiki ลิสต์ไว้แต่ไม่ใช่คำสั่งของใบนี้)

---

### #93953 — ปรับหน้าจอ EDW-RI-SD007 หน้าจอพิจารณาข้อมูล Actual RI เข้า EDW

`WBS` · **New** · parent #90110 · author Suthanee Saelim → assignee Supakit Singwieng
created 2026-08-19 08:53 · start 2026-08-19 · attachments 5 รูป · wiki pageId **989856045**

1. ตัดปุ่ม "พิจารณาอนุมัติเข้าฝ่ายการเงิน" ออก
2. ตัด popup "พิจารณาอนุมัติเข้าฝ่ายการเงิน" ออก
3. "Check box" ให้แสดงเฉพาะรายการสถานะ "รอพิจารณาอนุมัติเข้า EDW" เหมือนเดิม
4. เพิ่มการแสดง **สถานะฝ่ายการเงิน** ใน Datagrid
5. เพิ่มเงื่อนไขกรณีการกดปุ่ม **"อนุมัติเข้า EDW"**

**ที่ wiki (แก้ suthanee.sa 19/08/2026) ระบุเพิ่มว่า** คอลัมน์ "สถานะฝ่ายการเงิน" (`tx_ri_actual_offset.process_status_paym`) ให้เปลี่ยนเป็น **ปุ่มส่งข้อมูลเข้า PayM ซ้ำ** เมื่อสถานะเป็น ส่งข้อมูลเข้าระบบ PayM ไม่สำเร็จ / ไม่ผ่านการตรวจสอบ (ฝ่ายการเงิน) / จ่ายเงินไม่สำเร็จ / ระงับการจ่าย — "เมื่อกดปุ่มแล้วให้ส่งข้อมูลไปยังฝั่ง PayM เท่านั้น เพราะค่าเหล่านี้จะเกิดจากรายการที่ `net_amount < 0`" และ "\*\* ในทุกครั้งที่มีการส่งข้อมูลเข้า PayM จะต้องมีการ Generate `batch_oper_no` ใหม่ทุกครั้ง"

---

### #93955 — ปรับหน้าจอ EDW-RI-SD005 หน้าจอตรวจสอบข้อมูล Actual RI

`WBS` · **New** · parent #90110 · author Suthanee Saelim → assignee Supakit Singwieng
created 2026-08-19 08:56 · attachments 2 รูป · wiki pageId **983269499**

1. ตัดการ Gen เลขอ้างอิงออก
2. เพิ่มเงื่อนไขในขั้นตอนการ Offset ข้อมูล

**เงื่อนไข Offset ใหม่ตาม wiki** (`#PYAM Suthanee.sa 19/08/2026`) — ทำงานคู่กับ #93943:

1. ตอน Offset ใหม่ทุกครั้ง ให้ตรวจ `tx_ri_summary.tx_ri_actual_offset_id_old` ว่ามีค่าหรือไม่
   ถ้ามี ให้ใช้ค่าใดก็ได้ (ตามหลักต้องเท่ากัน) ไปค้นหา `tx_ri_actual_offset.tx_ri_actual_offset_id`
2. ยกค่าต่อไปนี้จากแถวเดิมมาใช้กับรายการ offset ใหม่:
   `process_status_paym` · `batch_oper_no` · `remark_paym`
3. หลัง Update `tx_ri_summary.tx_ri_actual_offset_id` ด้วย ID ใหม่ → เซ็ต `tx_ri_summary.tx_ri_actual_offset_id_old` = **NULL**
4. แถว `tx_ri_actual_offset` ที่เป็นตัวเก่า → `process_status_paym` = **"ยกเลิกข้อมูล"** และ `batch_oper_no`, `remark_paym` = **NULL**

---

### #93943 — [DB][msa-adwetl] Alter Table tx_ri_summary

`WBS` · **New** · parent #90110 · author Suthanee Saelim → assignee Supakit Singwieng
created 2026-08-19 08:23 · ไม่มี attachment / journal

**Description**
> เพิ่ม Field
> - `tx_ri_actual_offset_id_old`

เป็น prerequisite ของเงื่อนไข Offset ใน #93955 ข้างบน

---

## ⚠️ ประเด็นที่ต้องเคลียร์

1. **จุด Generate ขัดกันเอง** — #93290 (Resolved 18 ส.ค.) เพิ่งย้าย gen ไปไว้ที่ปุ่ม "พิจารณาอนุมัติเข้าฝ่ายการเงิน" ของ SD007
   แล้ว #93953 (สร้าง 19 ส.ค.) สั่ง **ตัดปุ่มนั้นออก**
   ⇒ จุด gen ต้องย้ายอีกรอบไปอยู่กับปุ่ม "อนุมัติเข้า EDW" และ/หรือปุ่มบนคอลัมน์สถานะฝ่ายการเงิน
   **ต้องยืนยันว่าใบไหนเป็นข้อสรุปสุดท้ายก่อนเขียนเคสทดสอบเรื่องเลขอ้างอิง**
2. **wiki SD007 ยังมีคำอธิบายปุ่ม "พิจารณาอนุมัติเข้าการเงิน" ค้างอยู่** ในหัวข้อ Actions และ Screen EDW-RI-SD007-03 ทั้งที่ #93953 สั่งตัดออก — spec ยังไม่ถูกล้าง
3. **`SELECTABLE_FOR_FINANCE_IDS` มี 3 id (12/15/18) แต่ spec ลิสต์ชื่อสถานะ 4 อัน** ("ระงับการจ่าย" เพิ่ม 19/08/2026)
4. **SD008 จริงยังไม่มีคอลัมน์ "เลขอ้างอิง"** ทั้งที่ wiki ลิสต์ field mapping ไว้แล้ว (`tx_ri_actual_offset.batch_oper_no`)
5. **`batch_oper_no` vs `batchOperNo`** — ต้องยืนยันกับทีม Cenpay ว่าฝั่ง RI ใช้อะไรเป็น `batchOperNo` ระดับ Batch เพราะเลข `RI-TB-…` ถูกใช้เป็น `operRefNo`

---

## หมายเหตุเรื่องการดึงข้อมูล

- Confluence นี้ใช้ selector **`.wiki-content`** ไม่ใช่ `#main-content` (ตัวหลังไม่มีใน DOM ที่ fetch มา — ได้ 0 ตัวอักษร)
- ต้องใช้ `textContent` ไม่ใช่ `innerText` เพราะ document ที่ parse ด้วย `DOMParser` ไม่ได้ render (innerText คืนค่าว่าง)
- หน้าจอ EDW-RI อยู่ใน space `RDSADW` (โครงการ Accounting Data Warehouse) path: `Home > Current Version > 03. User Interface Specification > EDW Phase3 > Reinsurance > 1) Screen_RI` — **ไม่อยู่ใน mirror `Cenpay/wiki/` (RDSCPENH) และไม่อยู่ใน `wiki/` (RDSINRI)**
