# tx_exception_log

- **Page ID:** 1344405737
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_exception_log
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_exception_log
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_exception_log | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-28 | Description | ข้อมูล Exception การจ่าย API Payment จากระบบ PayM |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |   | transaction_no | Varchar | 20 | N | อ้างอิง transaction_no ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) หรือ [tx_payment_detail_split](/display/RDSCPENH/tx_payment_detail_split) |   |   |   |   |   |   | 202605200001 |   | patcha.vo | 2026-05-28 |   |
| 2 |   | batch_oper_no | Varchar | 30 | N | อ้างอิง batch_oper_no ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) |   |   |   |   |   |   | PC-TB-CLN-20220325-00001 |   | patcha.vo | 2026-07-01 |   |
| 3 |   | exception | Varchar | 1000 | N | ข้อมูล Exception Message |   |   |   |   |   |   |   |   | patcha.vo | 2026-05-28 |   |
| 4 |   | type | Varchar |   | N | BANKALONE |   |   |   |   |   |   |   |   | patcha.vo | 2026-06-24 |   |
| 5 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-28 |   |
| 6 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcha.vo |   | patcha.vo | 2026-05-28 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
