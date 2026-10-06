# cf_mapping_update_status_event

- **Page ID:** 1324155067
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_update_status_event
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > cf_mapping_update_status_event
- **Depth:** 4

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_mapping_update_status_event | Data Source | - |
| Project Name | Centralized Payment | Data Security | เก็บข้อมูล Mapping การเปลี่ยนสถานะระหว่างระบบ Cenpay กับระบบปลายทางที่ต้องการอัพเดตสถานะ |
| Version | 1.0 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-03-04 | Description | Mapping การเปลี่ยนสถานะระหว่างระบบ Cenpay กับระบบปลายทางที่ต้องการอัพเดตสถานะ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |   | payment_status | Varchar | 10 | N | สถานะการจ่าย |   |   |   |   |   | WPP |   | ariya.pi | 2026-03-04 |   |
| 2 |   | target_system | Varchar | 10 | N | ระบบปลายทาง |   |   |   |   |   | PSP_FLP |   | ariya.pi | 2026-03-04 |   |
| 3 |   | update_status | Varchar | 10 | N | สถานะระบบปลายทาง |   |   |   |   |   | แจ้งผลการตรวจสอบ |   | ariya.pi | 2026-03-04 |   |
| 4 |   | active_flag | Varchar | 1 | N | ใช้งานหรือไม่ใช้งาน |   |   |   |   |   | WAV |   | ariya.pi | 2026-03-04 |   |
| 5 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   | 2026-03-04 08:00:00 |   | ariya.pi | 2026-03-04 |   |
| 6 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   | ariya.pi |   | ariya.pi | 2026-03-04 |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   | 2026-03-04 08:00:00 |   | ariya.pi | 2026-03-04 |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   | ariya.pi |   | ariya.pi | 2026-03-04 |   |

อ้างอิงข้อมูล : [cf_mapping_update_status_event_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_update_status_event_data)

---

## Hyperlinks บนหน้านี้

- [cf_mapping_update_status_event_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_update_status_event_data)
