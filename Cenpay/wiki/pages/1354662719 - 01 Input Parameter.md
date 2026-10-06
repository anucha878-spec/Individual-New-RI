# 01 Input Parameter

- **Page ID:** 1354662719
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/01+Input+Parameter
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Cenpay > WS Landing ข้อมูลเข้าสู่หน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์ > 01 Input Parameter
- **Depth:** 5

---

### Input Parameter

| Name | Data Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| sun_path | Varchar | Sun Path | A หรือ M | Y |   |
| system | Varchar | ระบบงาน | Cenpay | Y |   |
| payment_type | Varchar | กลุ่มธุรกรรมย่อย | APU | Y | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| approve_batch_no | Varchar | เลขที่ Batch ปฎิบัติการ |   | Y |   |
| ref_approve_batch_no | Varchar | เลขที่ Batch ปฎิบัติการ (อ้างอิง) |   | **N** |   |
| entry_date | Date | วันที่อนุมัติ 2 ของฝ่ายปฎิบัติการ | 2025-09-04 | Y |   |
| approver | Varchar | ผู้อนุมัติรายการ |   | Y |   |
| batch_status | Varchar | สถานะการทำรายการ (Batch Level) | ICA | Y | Code สถานะทำรายการ (Batch Level) 3 ตำแหน่ง อ้างอิง XXX |
| reconcile_status | Varchar | สถานะ Reconcile | S | Y | Code สถานะ Reconcile 1 ตำแหน่ง อ้างอิง XXX |
| number_of_record | Numeric | จำนวนรายการ | 1 | Y |   |
| total_amount | Numeric | จำนวนเงิน |   | Y |   |
| payment_channel_code | Varchar | ช่องทางการจ่ายเงิน | TB | Y |   |
| payment_due_date | Date | วันครบกำหนดชำระเงิน | 2025-09-04 | **N** | ปรับเป็น Nullable |
| request_payment_date | Date | วันที่จ่ายเงิน | 2025-09-04 | Y |   |
| reference_number | Varchar | Reference Number EDW |   | Y |   |
| source_reference_number | Varchar | Reference Number EDW กรณี Reverse |   | Y |   |
| transaction_date | Date | วันที่รายการลงบัญชี |   | Y |   |
| account_approve_date | Timestamp | วันเวลาที่อนุมัติ | 2025-06-30 14:30:45 | Y |   |
| account_approver | Varchar | ผู้อนุมัติบันทึกบัญชี |   | Y |   |
| account_approve_status | Varchar | สถานะอนุมัติรายการ | WAV | Y | Code สถานะอนุมัติรายการ (บัญชี) 3 ตำแหน่ง อ้างอิง XXX |
| posting_date | Date | Posting Date |   | Y |   |
| dr_amount | Numeric | Dr. |   | Y |   |
| cr_amount | Numeric | Cr. |   | Y |   |
| source_amount | Numeric | ยอดเงินที่ได้จากข้อมูลปฎิบัติการ |   | Y |   |
| edw_amount | Numeric | ยอดเงินที่ได้จากทางบัญชี |   | Y |   |
| event_code | Varchar | รหัสธุรกรรม |   | Y |   |
| account_type | Varchar | ประเภท Reverse | ใส่ Reverse สำหรับรายการ Reverse | **N** |   |
| edw_system_key | Varchar | ข้อมูล Unique ของรายการธุรกรรมที่นำเข้า |   | **N** |   |
| content_id | Varchar | id อ้างอิงการเปิด Sun Booking |   | **N** |   |
| edw_dashboard_id | Int8 | Dashboard ID สำหรับอ้างที่ระบบ EDW |   | **N** |   |
| sun_status | Varchar | สถานะส่ง SUN | SUCCESS | **N** |   |
| edw_status | Varchar | สถานะระบบ EDW | WAIT_SENDTOADW | **N** |   |
| edw_content_id | Varchar | id อ้างอิงการเปิด EDW Booking |   | **N** |   |
