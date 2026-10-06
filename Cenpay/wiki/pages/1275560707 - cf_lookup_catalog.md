# cf_lookup_catalog

- **Page ID:** 1275560707
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_lookup_catalog
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_lookup_catalog | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูล Configuration ของระบบ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record กำหนดตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) |   |   |   |   |   |   | 10001 |   | patcharat.vo | 2025-08-13 |   |
| 2 |   | description | Varchar | 255 | N | คำอธิบายภาษาไทย |   |   |   |   |   |   | ช่วงวันที่ใน Search Criteria |   | patcharat.vo | 2025-08-13 |   |
| 3 |   | description_eng | Varchar | 255 | Y | คำอธิบายภาษาอังกฤษ |   |   |   |   |   |   |   |   | patcharat.vo | 2025-08-13 |   |
| 4 |   | lookup_key | Varchar | 20 | Y | key สำหรับบันทึกในระบบ |   |   |   |   |   |   | CRITERIA_DAY |   | patcharat.vo | 2025-08-13 |   |
| 5 |   | config | Varchar | 255 | Y | ค่า configuration |   |   |   |   |   |   | 120 |   | patcharat.vo | 2025-08-13 |   |
| 6 |   | seq_no | Numeric | 3,0 | N | ลำดับ |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-13 |   |
| 7 |   | parent_id | Int8 |   | N | Id ของหัวข้อ Catalog |   |   |   |   |   |   | 10000 |   | patcharat.vo | 2025-08-13 |   |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-13 |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-13 |   |
| 10 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-13 |   |
| 11 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-13 |   |

อ้างอิงข้อมูลที่ [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data)

---

## Hyperlinks บนหน้านี้

- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
