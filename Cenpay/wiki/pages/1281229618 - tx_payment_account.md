# tx_payment_account

- **Page ID:** 1281229618
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_account
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_account | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-04 | Description | เก็บข้อมูลรายละเอียดรายการจ่ายที่รอให้ทางฝ่ายบัญชีอนุมัติตรวจจ่าย |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 |   | sun_path | Varchar | 1 | N | Sun Path |   |   |   |   |   |   | A หรือ M |   | ariya.pi |   |
| 3 |   | system | Varchar | 50 | N | ระบบงาน |   |   |   |   |   |   | Cenpay |   | ariya.pi |   |
| 4 |   | payment_type | Varchar | 10 | N | กลุ่มธุรกรรมย่อย |   |   |   |   |   |   | APU |   | ariya.pi | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | approve_batch_no | Varchar | 30 | N | เลขที่ Batch ปฎิบัติการ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 6 |   | ref_approve_batch_no | Varchar | 30 | Y | เลขที่ Batch ปฎิบัติการ (อ้างอิง) |   |   |   |   |   |   |   |   | ariya.pi |   |
| 7 |   | entry_date | Date |   | N | วันที่อนุมัติ 2 ของฝ่ายปฎิบัติการ |   |   |   |   |   |   | 2025-09-04 |   | ariya.pi |   |
| 8 |   | approver | Varchar | 50 --> 100 | N | ผู้อนุมัติรายการ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 9 |   | batch_status | Varchar | 10 | N | สถานะการทำรายการ (Batch Level) |   |   |   |   |   |   | ICA |   | ariya.pi | Code สถานะทำรายการ (Batch Level) 3 ตำแหน่ง อ้างอิง XXX |
| 10 |   | reconcile_status | Varchar | 10 | N | สถานะ Reconcile |   |   |   |   |   |   | S |   | ariya.pi | Code สถานะ Reconcile 1 ตำแหน่ง อ้างอิง XXX |
| 11 |   | number_of_record | Numeric | 10 | N | จำนวนรายการ |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 12 |   | total_amount | Numeric | (15,2) | N | จำนวนเงิน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 13 |   | payment_channel_code | Varchar | 10 | N | ช่องทางการจ่ายเงิน |   |   |   |   |   |   | TB |   | ariya.pi |   |
| 14 |   | payment_due_date | Date |   | N --> Y | วันครบกำหนดชำระเงิน |   |   |   |   |   |   | 2025-09-04 |   | ariya.pi | ปรับเป็น Nullable |
| 15 |   | request_payment_date | Date |   | N | วันที่จ่ายเงิน |   |   |   |   |   |   | 2025-09-04 |   | ariya.pi |   |
| 16 |   | reference_number | Varchar | 20 | N | Reference Number EDW |   |   |   |   |   |   |   |   | ariya.pi |   |
| 17 |   | source_reference_number | Varchar | 20 | N | Reference Number EDW กรณี Reverse |   |   |   |   |   |   |   |   | ariya.pi |   |
| 18 |   | transaction_date | Date |   | N | วันที่รายการลงบัญชี |   |   |   |   |   |   |   |   | ariya.pi |   |
| 19 |   | account_approve_date | Timestamp |   | N | วันเวลาที่อนุมัติ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 20 |   | account_approver | Varchar | 50 –> 100 | N | ผู้อนุมัติบันทึกบัญชี |   |   |   |   |   |   |   |   | ariya.pi |   |
| 21 |   | account_approve_status | Varchar | 10 | N | สถานะอนุมัติรายการ |   |   |   |   |   |   | WAV |   | ariya.pi | Code สถานะอนุมัติรายการ (บัญชี) 3 ตำแหน่ง อ้างอิง XXX |
| 22 |   | posting_date | Date |   | N | Posting Date |   |   |   |   |   |   |   |   | ariya.pi |   |
| 23 |   | dr_amount | Numeric | (15,2) | N | Dr. |   |   |   |   |   |   |   |   | ariya.pi |   |
| 24 |   | cr_amount | Numeric | (15,2) | N | Cr. |   |   |   |   |   |   |   |   | ariya.pi |   |
| 25 |   | source_amount | Numeric | (15,2) | N | ยอดเงินที่ได้จากข้อมูลปฎิบัติการ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 26 |   | edw_amount | Numeric | (15,2) | N | ยอดเงินที่ได้จากทางบัญชี |   |   |   |   |   |   |   |   | ariya.pi |   |
| 27 |   | event_code | Varchar | 25 | N | รหัสธุรกรรม |   |   |   |   |   |   |   |   | ariya.pi |   |
| 28 |   | account_type | Varchar | 10 | Y | ประเภท Reverse |   |   |   |   |   |   | ใส่ Reverse สำหรับรายการ Reverse |   | ariya.pi |   |
| 29 |   | edw_system_key | Varchar | 50 | Y | ข้อมูล Unique ของรายการธุรกรรมที่นำเข้า |   |   |   |   |   |   |   |   | ariya.pi |   |
| 30 |   | content_id | Varchar | 50 | Y | id อ้างอิงการเปิด Sun Booking |   |   |   |   |   |   |   |   | ariya.pi |   |
| 31 |   | edw_dashboard_id | Int8 |   | Y | Dashboard ID สำหรับอ้างที่ระบบ EDW |   |   |   |   |   |   |   |   | ariya.pi |   |
| 32 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 33 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 34 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 35 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 36 |   | sun_status | Varchar | 100 20 | Y | สถานะส่ง SUN |   |   |   |   |   |   | SUCCESS |   | ariya.pi |   |
| 37 |   | edw_status | Varchar | 100 | Y | สถานะระบบ EDW |   |   |   |   |   |   | WAIT_SENDTOADW |   | ariya.pi |   |
| 38 |   | edw_content_id | Varchar | 50 | Y | id อ้างอิงการเปิด EDW Booking |   |   |   |   |   |   |   |   | ariya.pi |   |
