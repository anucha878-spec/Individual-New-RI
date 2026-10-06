# cf_service_limit

- **Page ID:** 1279197813
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_limit
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_service_limit
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_service_limit | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-28 | Description | ข้อมูลยอดเงินสำหรับ Service ต่างๆ ที่กำหนดในระบบ Payment |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | service_code | Varchar | 5 | N | รหัสอ้างอิง service |   |   |   |   |   |   | S001 |   | anocha.su | 2025-09-11 |   |
| 2 |   | service | Varchar | 20 | N | service (format ธนาคาร) |   |   |   |   |   |   | BBL_MCL |   | patcharat.vo | 2025-08-28 |   |
| 3 |   | bank_code | Varchar | 20 | Y | รหัสธนาคาร |   |   |   |   |   |   | BBL |   | patcharat.vo | 2025-08-28 |   |
| 4 |   | limit_amount | Numeric | 16,2 | N | จำนวนยอดเงินที่จำกัดระดับ Transaction |   |   |   |   |   |   | 1,000,000,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 5 |   | batch_limit_amount | Numeric | 16,2 | N | จำนวนยอดเงินที่จำกัดระดับ Batch |   |   |   |   |   |   | 1,000,000,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 6 |   | batch_limit_transaction | Numeric | 5,0 | N | จำนวน Transaction ที่จำกัดระดับ Batch |   |   |   |   |   |   | 3,000 |   | patcharat.vo | 2025-08-28 |   |
| 7 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 8 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |
| 9 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 10 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |

ตัวอย่างข้อมูล : [cf_service_limit_data](/display/RDSCPENH/cf_service_limit_data)

---

## Hyperlinks บนหน้านี้

- [cf_service_limit_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_limit_data)
