# cf_secret_key

- **Page ID:** 1289749302
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_secret_key
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_secret_key
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_secret_key | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-10-07 | Description | ข้อมูล key ที่ใช้ในการ encrypt file ธนาคาร |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | bank_code | varchar | 20 | N | รหัสของธนาคาร |   |   |   |   |   |   | BBL |   | patcharat.vo | 2025-10-07 |   |
| 2 |   | public_key | varchar | 2000 | N | key ที่ใช้ในการ encrypt |   |   |   |   |   |   | - |   | patcharat.vo | 2025-10-07 |   |
| 3 |   | private_key | varchar | 2000 | Y | key ที่ใช้ในการ decrypt |   |   |   |   |   |   | - |   | patcharat.vo | 2025-10-07 |   |
| 4 |   | status | varchar | 1 | N | สถานะการใช้งานA - ActiveI - Inactive |   |   |   |   |   |   | Y |   | patcharat.vo | 2025-10-07 |   |
| 5 |   | created_date | timestamptz |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-04-05 14:50:19.872 +0700 |   | patcharat.vo | 2025-10-07 |   |
| 6 |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | system |   | patcharat.vo | 2025-10-07 |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-10-07 |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-10-07 |   |
