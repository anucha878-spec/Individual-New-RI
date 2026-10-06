# cf_running_pattern

- **Page ID:** 1279197811
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_running_pattern
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_running_pattern | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-28 | Description | ข้อมูล running pattern ในระบบ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | pattern | Varchar | 20 | N | pattern ของ running |   |   |   |   |   |   | B25680701 |   | patcharat.vo | 2025-08-28 |   |
| 2 |   | module | Varchar | 20 | N | module ที่ใช้นับ running |   |   |   |   |   |   | payment |   | patcharat.vo | 2025-08-28 |   |
| 3 |   | digit | Numeric | 1,0 | N | จำนวนหลัก digit |   |   |   |   |   |   | 5 |   | patcharat.vo | 2025-08-28 |   |
| 4 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 5 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |
| 6 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 7 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |

ตัวอย่างข้อมูล : [cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)

---

## Hyperlinks บนหน้านี้

- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
