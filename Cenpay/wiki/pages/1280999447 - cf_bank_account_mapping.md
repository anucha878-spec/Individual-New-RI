# cf_bank_account_mapping

- **Page ID:** 1280999447
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_bank_account_mapping
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_bank_account_mapping | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-03 | Description | ข้อมูลธนาคาร |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | batch_payment_type | Varchar | 20 | N | ประเภท Batch การจ่าย |   |   |   |   |   |   | B |   | patcharat.vo | 2025-09-03 |   |
| 2 | PRIMARY KEY | service | Varchar | 20 | N | Service (Format ธนาคาร) |   |   |   |   |   |   | BBL_MCL |   | patcharat.vo | 2025-09-03 |   |
| 3 | PRIMARY KEY | bank_account | Varchar | 20 | N | ธนาคารต้นทางของบริษัท |   |   |   |   |   |   | BBL_01 |   | patcharat.vo | 2025-09-03 |   |
| 4 |   | is_active | Boolean |   | N | ใช้งาน / ไม่ใช้งาน |   |   |   |   |   |   | true |   | patcharat.vo | 2025-09-03 |   |
| 5 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-09-03 |   |
| 6 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-09-03 |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-09-03 |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-09-03 |   |
| 9 |   | payment_channel_type | Varchar | 15 | Y | ประเภทการจ่าย |   |   |   |   |   |   | cheque_com |   | patcharat.vo | 2026-01-26 |   |
| 10 |   | cheque_expired | Numeric | 4 | Y | วันที่เช็คหมดอายุ |   |   |   |   |   |   | 180 |   | patcharat.vo | 2026-01-26 |   |

อ้างอิงข้อมูล : [cf_bank_account_mapping_data](/display/RDSCPENH/cf_bank_account_mapping_data)

---

## Hyperlinks บนหน้านี้

- [cf_bank_account_mapping_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping_data)
