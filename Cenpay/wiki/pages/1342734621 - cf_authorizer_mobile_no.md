# cf_authorizer_mobile_no

- **Page ID:** 1342734621
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_authorizer_mobile_no
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_authorizer_mobile_no | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-22 | Description | ข้อมูลเบอร์โทรศัพท์ที่ใช้ในการส่งยืนยัน OTP สำหรับ API Payment |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | varchar | 20 | N | id |   |   |   |   |   |   | 1 |   | patcha.vo | 2026-05-22 |   |
| 2 |   | username | varchar | 50 | N | username ระบบ nbs เฉพาะ role authorizer |   |   |   |   |   |   | patcha.vo |   | patcha.vo | 2026-05-22 |   |
| 3 |   | mobile_no | varchar | 255 | Y | เบอร์โทรศัพท์ที่ encrypt |   |   |   |   |   |   |   |   | patcha.vo | 2026-05-22 |   |
| 4 |   | status | varchar | 1 | N | สถานะการใช้งานA - ActiveI - Inactive |   |   |   |   |   |   | A |   | patcha.vo | 2026-05-22 |   |
| 5 |   | created_date | timestamptz |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-04-05 14:50:19.872 +0700 |   | patcha.vo | 2026-05-22 |   |
| 6 |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | system |   | patcha.vo | 2026-05-22 |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-22 |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcha.vo | 2026-05-22 |   |
