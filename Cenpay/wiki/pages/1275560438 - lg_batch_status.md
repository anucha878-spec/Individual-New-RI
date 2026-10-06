# lg_batch_status

- **Page ID:** 1275560438
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 99. LG - Table Log > lg_batch_status
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | lg_process_status | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลประวัติสถานะดำเนินการระดับ Batch การเงิน |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | batch_payment_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 3 |   | batch_status | Varchar | 20 | N | สถานะดำเนินการ |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | รอดำเนินการ |   | patcharat.vo | 2025-08-14 |   |
| 4 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 5 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
