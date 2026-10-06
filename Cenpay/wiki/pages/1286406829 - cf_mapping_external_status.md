# cf_mapping_external_status

- **Page ID:** 1286406829
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_external_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_mapping_external_status
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_mapping_external_status | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-23 | Description | ข้อมูล Mapping สถานะดำเนินการ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | mapping_code | Varchar | 5 | N | รหัสอ้างอิงของ Record |   |   |   |   |   |   | MPC01 |   | patcharat.vo | 2025-11-04 |   |
| 2 |   | voucher_status | Varchar | 3 | Y | สถานะดำเนินการระดับ Voucher |   |   |   |   |   |   | APP |   | patcharat.vo | 2025-11-04 |   |
| 3 |   | transaction_status | Varchar | 3 | N | สถานะดำเนินการระดับ Transection |   |   |   |   |   |   | WAS |   | patcharat.vo | 2025-11-04 |   |
| 4 |   | target_status | Varchar | 3 | N | สถานะดำเนินการระดับ Transection ที่ส่งกลับไปต้นทาง |   |   |   |   |   |   | WCP |   | patcharat.vo | 2025-11-04 |   |
| 5 |   | is_active | Boolean |   | N | สถานะการใช้งาน |   |   |   |   |   |   | TRUE |   | anocha.su | 2025-09-23 |   |
| 6 |   | is_post_payment | Boolean |   | N | สถานะการบันทึกบัญชี |   |   |   |   |   |   | TRUE |   | anocha.su | 2025-09-23 |   |
| 7 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-23 |   |
| 8 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-23 |   |
| 9 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-23 |   |
| 10 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-23 |   |
| 11 |   | system_source | Varchar | 10 | N | ระบบต้นทาง |   |   |   |   |   |   | cenpaypaymentrequest |   | patcharat.vo | 2026-02-26 |   |

อ้างอิงข้อมูลที่ [cf_mapping_external_status_data](/display/RDSCPENH/cf_mapping_external_status_data)

---

## Hyperlinks บนหน้านี้

- [cf_mapping_external_status_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_external_status_data)
