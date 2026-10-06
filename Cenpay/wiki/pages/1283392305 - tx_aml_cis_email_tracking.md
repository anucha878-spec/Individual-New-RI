# tx_aml_cis_email_tracking

- **Page ID:** 1283392305
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_aml_cis_email_tracking
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_aml_cis_email_tracking
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_aml_cis_email_tracking | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-11 | Description | เก็บข้อมูลธุรกรรมที่มีการติด AML/CFT หรือ CIS เพื่อรอส่ง Email แจ้งเตือนฝ่ายที่เกี่ยวข้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | ref_type | Varchar | 10 | N | ประเภทรายการ |   |   |   |   |   |   | AMLCIS |   | ariya.pi |   |
| 4 |   | oper_ref_no | Varchar | 16 | N | เลขธุรกรรม |   |   |   |   |   |   | CPAPU25090200001 |   | ariya.pi |   |
| 5 |   | payment_type | Varchar | 10 | N | ประเภทรายการจ่าย |   |   |   |   |   |   | APU |   | ariya.pi | Code สถานะ Batch ปฎิบัติการ 3 ตำแหน่ง อ้างอิง XXX |
| 6 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | ข0181320 |   | ariya.pi |   |
| 7 |   | policy_type | Varchar | 3 | N | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORD |   | ariya.pi |   |
| 8 |   | email_status | Varchar | 1 | N | สถานะการส่ง Email |   |   |   |   |   |   | W |   | ariya.pi | W : WaitingS : SuccessF : FailN : No Need |
| 9 |   | email_date | Timestamp |   | Y | วันเวลาที่ส่ง Email |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 10 |   | update_status | Varchar |   | Y | สถานะการ Update ข้อมูล |   |   |   |   |   |   | W |   | ariya.pi | W : WaitingS : SuccessF : FailN : No Need |
| 11 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 12 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 13 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 14 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
