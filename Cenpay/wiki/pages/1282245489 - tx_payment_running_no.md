# tx_payment_running_no

- **Page ID:** 1282245489
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_running_no
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_running_no
- **Depth:** 4

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_running_no | Data Source | - |
| Project Name | Centralized Payment | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-08 | Description | ข้อมูล running no ในระบบ |
| Updated By |   | **Updated Date (yyyy-mm-dd)** |   |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | prefix | Varchar | 20 | N | key ที่ใช้นับ running |   |   |   |   |   |   | B25680701 |   | ariya.pi | 2025-09-08 |   |
| 2 |   | running_no | Int8 |   | N | running no. |   |   |   |   |   |   | 1 |   | ariya.pi | 2025-09-08 |   |
| 3 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | ariya.pi | 2025-09-08 |   |
| 4 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | ariya.pi |   | ariya.pi | 2025-09-08 |   |
| 5 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | ariya.pi | 2025-09-08 |   |
| 6 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | ariya.pi |   | ariya.pi | 2025-09-08 |   |
