# lg_bankapi_node_status

- **Page ID:** 1344701049
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_bankapi_node_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 99. LG - Table Log > lg_bankapi_node_status
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | lg_bankapi_node_status | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-29 | Description | ประวัติการเปลี่ยนสถานะ Bank API Node |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | node_id | varchar | 64 | N | รหัสโหนด (machine name) bankapialone-dev-01bankapialone-prod-01bankapialone-prod-02 |   |   |   |   |   |   | bankapialone-dev-01 |   | patcha.vo | 2026-05-29 |   |
| 2 |   | from_status | varchar | 16 | N | สถานะเดิมUP\|DOWN\|UNKNOWN |   |   |   |   |   |   | UP |   | patcha.vo | 2026-05-29 |   |
| 3 |   | to_status | varchar | 16 | N | สถานะใหม่UP\|DOWN\|UNKNOWN |   |   |   |   |   |   | DOWN |   | patcha.vo | 2026-05-29 |   |
| 4 |   | detected_date | timestamp |   | N | วันที่/เวลาที่ตรวจพบการเปลี่ยนสถานะ |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-29 |   |
| 5 |   | created_date | timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | 2026-05-29 | 2026-05-29 |   |
| 6 |   | created_by | Varchar |   | N | ผู้สร้าง |   |   |   |   |   |   | patcha.vo |   | 2026-05-29 | 2026-05-29 |   |
