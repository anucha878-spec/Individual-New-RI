# tx_payment_confirm

- **Page ID:** 1281229301
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_confirm
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_confirm
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_confirm | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินที่ทำจ่ายไม่สำเร็จ เพื่อมาตรวจสอบข้อมูลและยืนยันการจ่ายใหม่ด้วยข้อมูลที่ถูกต้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | payment_status | Varchar | 10 | N | สถานะธุรกรรมการจ่าย |   |   |   |   |   |   | TRF |   | ariya.pi | อ้างอิง สถานะธุรกรรมจ่าย (ปฎิบัติการ) 3 ตำแหน่งที่ XXX |
| 4 |   | payment_account | Varchar | 10 | Y | บัญชีตั้งฐาน(transfer_type) |   |   |   |   |   |   | B |   | ariya.pi |   |
| 5 |   | cis_bank_acc_no | Varchar | 50 | Y | เลขที่บัญชีจาก CIS |   |   |   |   |   |   |   |   | ariya.pi | ข้อมูลจาก CIS |
| 6 |   | cis_account | Varchar | 100 | Y | บัญชี CIS(transfer_type) |   |   |   |   |   |   | P |   | ariya.pi | ข้อมูลจาก CIS |
| 7 |   | cis_bank_id | Varchar | 100 | Y | รหัสธนาคาร |   |   |   |   |   |   | 5 |   | ariya.pi | ข้อมูลจาก CIS |
| 8 |   | cis_bank_acc_issuer | Varchar | 100 | Y | ชื่อธนาคาร |   |   |   |   |   |   | กสิกร |   | ariya.pi | ข้อมูลจาก CIS |
| 9 |   | cis_bank_acc_branch | Varchar | 100 | Y | สาขาธนาคาร |   |   |   |   |   |   | ติวานนท์ |   | ariya.pi | ข้อมูลจาก CIS |
| 10 |   | cis_tel_no | Varchar | 100 | Y | เบอร์โทรศัพท์จาก CIS |   |   |   |   |   |   | 0989893432 |   | ariya.pi | ข้อมูลจาก CIS |
| 11 |   | sla_date | Numeric | 2 | N | ระยะเวลาติดตาม |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 12 |   | transfer_status | Varchar | 10 | N | สถานะยืนยันการโอนเงิน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 13 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 14 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 15 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 16 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 17 |   | payment_due_date | Date |   | Y | วันที่ครบกำหนดรับเงิน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 18 |   | actual_payment_date | Date |   | Y | วันที่จ่ายเงิน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 19 |   | payment_channel_code | Varchar | 10 | Y | รหัสช่องทางการจ่ายเงิน |   |   |   |   |   |   | TB |   | ariya.pi |   |
| 20 |   | payment_channel | Varchar | 5 | Y | ช่องทางการจ่ายเงิน |   |   |   |   |   |   | TC |   | ariya.pi |   |
| 21 |   | bank_acc_no | Varchar | 100 | Y | เลขบัญชีธนาคารรับเงิน |   |   |   |   |   |   | 5950191145 |   | ariya.pi |   |
| 22 |   | bank_acc_name | Varchar | 255 | Y | ชื่อบัญชีรับเงิน |   |   |   |   |   |   | นางดีคิว ไอบีซี |   | ariya.pi |   |
| 23 |   | bank_id | Numeric | 15 | Y | รหัสธนาคารรับเงิน |   |   |   |   |   |   | 5 |   | ariya.pi |   |
| 24 |   | bank_acc_issuer | Varchar | 255 | Y | ชื่อธนาคารรับเงิน |   |   |   |   |   |   | ธนาคารกรุงไทย จำกัด (มหาชน) |   | ariya.pi |   |
| 25 |   | bank_acc_branch | Varchar | 255 | Y | สาขาธนาคารรับเงิน |   |   |   |   |   |   | บิ๊กซีเชียงราย |   | ariya.pi |   |
| 26 |   | payee_title | Varchar | 50 | Y | คำนำหน้าชื่อผู้รับเงิน |   |   |   |   |   |   | นาย |   | ariya.pi |   |
| 27 |   | payee_first_name | Varchar | 100 | Y | ชื่อผู้รับเงิน |   |   |   |   |   |   | รับเงิน |   | ariya.pi |   |
| 28 |   | payee_last_name | Varchar | 100 | Y | นามสกุลผู้รับเงิน |   |   |   |   |   |   | แทนคุณ |   | ariya.pi |   |
| 29 |   | account_relation_name | Varchar | 50 | Y | ความสัมพันธ์ของบัญชีรับเงินผลประโยชน์กับผู้เอาประกัน |   |   |   |   |   |   | ผู้เอาประกันผู้รับผลประโยชน์ |   | ariya.pi |   |
