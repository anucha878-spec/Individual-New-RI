# ms_bankapi_node

- **Page ID:** 1344701019
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 00. MS - Table Master > ms_bankapi_node
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | ms_bankapi_node | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-29 | Description | สถานะปัจจุบันของ Bank API Node |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | node_id | varchar | 64 | N | รหัสโหนด (machine name) bankapialone-dev-01bankapialone-prod-01bankapialone-prod-02 |   |   |   |   |   |   | bankapialone-dev-01 |   | patcha.vo | 2026-05-29 |   |
| 2 |   | current_status | varchar | 16 | N | สถานะปัจจุบันUP\|DOWN\|UNKNOWN |   |   |   |   |   |   | UP |   | patcha.vo | 2026-05-29 |   |
| 3 |   | last_seen_date | timestamp |   | N | วันที่/เวลา heartbeat ล่าสุด |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-29 |   |
| 4 |   | last_checked_date | timestamp |   | N | วันที่/เวลา watchdog ตรวจล่าสุด |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-29 |   |
| 5 |   | created_date | timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | 2026-05-29 | 2026-05-29 |   |
| 6 |   | created_by | Varchar |   | N | ผู้สร้าง |   |   |   |   |   |   | patcha.vo |   | 2026-05-29 | 2026-05-29 |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขล่าสุด |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-29 |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขล่าสุด |   |   |   |   |   |   | patcha.vo |   | patcha.vo | 2026-05-29 |   |
