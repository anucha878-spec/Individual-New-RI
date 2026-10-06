# tx_mapping_reject_record

- **Page ID:** 1275560675
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_mapping_reject_record
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_mapping_reject_record | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลผู้รับเงินไม่ผ่านตรวจสอบ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | batch_payment_id | Int8 |   | N | อ้างอิง Id ของตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-09-29 |   |
| 3 |   | payment_detail_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่ายระดับ Transaction |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 4 |   | document_id | Int8 |   | N | รหัสอ้างอิงข้อมูลเอกสาร | [tx_document](/display/RDSCPENH/tx_document).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 5 |   | reject_type | Varchar | 1 | N | ประเภทผลการตรวจสอบไม่ผ่าน |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | อัปโหลดผลจากธนาคาร |   | patcharat.vo | 2025-08-14 |   |
| 6 |   | remark | Varchar | 500 | Y | หมายเหตุ format ไม่ผ่าน |   |   |   |   |   |   |   |   | patcharat.vo | 2025-0-26 |   |
| 7 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 9 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
