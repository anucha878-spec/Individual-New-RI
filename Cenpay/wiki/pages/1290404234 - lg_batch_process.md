# lg_batch_process

- **Page ID:** 1290404234
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 99. LG - Table Log > lg_batch_process
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | lg_batch_process | Data Source | Payment Management |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-10-09 | Description | ข้อมูลประวัติการ Run Batch Auto/Manual |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | batch_id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-10-09 |   |
| 2 |   | batch_code | Varchar | 20 | N | ชื่อ Batch |   |   |   |   |   |   | - |   | patcharat.vo | 2025-10-09 |   |
| 3 |   | status | Varchar | 1 | N | สถานะการ Run BatchI - In Progress S - Success F - Fail |   |   |   |   |   |   | In Progress |   | patcharat.vo | 2025-10-09 |   |
| 4 |   | type | Varchar | 1 | N | ประเภทการ Run BatchA - Auto M - Manaul |   |   |   |   |   |   | Auto |   | patcharat.vo | 2025-10-09 |   |
| 5 |   | error_message | Varchar | 500 | Y | ข้อความกรณี Run Batch Fail |   |   |   |   |   |   | - |   | patcharat.vo | 2025-10-09 |   |
| 6 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-10-09 |   |
| 7 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-10-09 |   |
| 8 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-10-09 |   |
| 9 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-10-09 |   |
