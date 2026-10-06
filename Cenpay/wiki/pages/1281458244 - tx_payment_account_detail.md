# tx_payment_account_detail

- **Page ID:** 1281458244
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_account_detail
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_account_detail | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-05 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินสำหรับให้ทางฝ่ายบัญชีตรวจสอบรายละเอียดการจ่าย |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FORIEGN_KEY | payment_account_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment_account |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 | FORIEGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 4 |   | verify_type | Varchar | 1 | N | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) |   |   |   |   |   |   | T หรือ F |   | ariya.pi | T : ถูกต้องF : ไม่ถูกต้อง |
| 5 |   | transaction_status | Varchar | 10 | N | สถานะการทำรายการ (Transaction Level) |   |   |   |   |   |   | COR |   | ariya.pi | Code สถานะทำรายการ (Transaction Level) 3 ตำแหน่ง อ้างอิง XXX |
| 6 |   | incorrect_cause | Varchar | 10 | Y | สาเหตุการไม่อนุมัติ |   |   |   |   |   |   | ICD |   | ariya.pi | Code สาเหตุการไม่อนุมัติ (ฝ่ายบัญชี) 3 ตำแหน่ง อ้างอิง XXX |
| 7 |   | verify_status_code | Varchar | 10 | N | สถานะการตรวจสอบ |   |   |   |   |   |   | WAV |   | ariya.pi | Code สถานะการตรวจสอบ 3 ตำแหน่ง อ้างอิง XXX |
| 8 |   | payment_status | Varchar | 10 | Y | สถานะการจ่าย |   |   |   |   |   |   | WAA |   | ariya.pi | Code สถานะการจ่าย (บัญชี) 3 ตำแหน่ง อ้างอิง XXX |
| 9 |   | batch_payment_no | Varchar | 30 | Y | เลขที่ทำจ่ายทางการเงิน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 10 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 11 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 12 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 13 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| ปรับเพิ่มเติมสำหรับการแสดงเอกสารแนบจากระบบต้นทาง (R2) โดย ariya.pi เมื่อ 05/01/2569 |
| 14 |   | payment_doc_id | int8 |   | Y | อ้างอิง Running ID จาก tx_payment_doc |   |   |   |   |   |   |   |   | ariya.pi | กรณีที่มีเอกสารอ้างอิงจากระบบต้นทางจะมีข้อมูลอ้างอิงที่ Field ดังกล่าว |
