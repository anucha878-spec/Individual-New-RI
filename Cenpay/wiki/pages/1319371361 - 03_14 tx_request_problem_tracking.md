# 03_14 tx_request_problem_tracking

- **Page ID:** 1319371361
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_14 tx_request_problem_tracking
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_document | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | kanawoot.ou | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-02-11 | Description | เก็บข้อมูลรายการคำร้องที่ส่งไปยังระบบอื่นๆ ไม่สำเร็จ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | process_code | varchar | 2 | N | รหัสอ้างอิง process ที่ดำเนินการไม่สำเร็จ อ้างอิงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A' |   |   |   |   |   |   | AS |   |   |   |
| 4 |   | status_code | varchar | 10 | N | สถานะรายการ |   |   | [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value) group = 'REQUEST_STATUS' |   |   |   | CDM |   |   |   |
| 5 |   | exception_date | timestamp |   | N | วันที่ดำเนินการไม่สำเร็จ |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 6 |   | retry_success_date | timestamp |   | Y | วันที่ Retry Process สำเร็จ |   |   |   |   |   |   | 2024-06-21 19:32:06.512 +0700 |   |   |   |
| 7 |   | retry_status_code | varchar | 1 | N | รหัสสถานะ Retry Processอ้างอิงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_STATUS' และ active_flag = 'A' |   |   |   |   |   |   | S |   |   |   |
| 8 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 9 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 10 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 11 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
