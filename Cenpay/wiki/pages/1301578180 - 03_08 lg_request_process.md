# 03_08 lg_request_process

- **Page ID:** 1301578180
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_08+lg_request_process
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_08 lg_request_process
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | lg_request_process | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-24 | Description | เก็บข้อมูล Log Process ข้อมูลคำร้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | status_code | varchar | 10 | N | สถานะรายการ | ระบุจากหน้าจอ |   | cf_list_of_value | DRT = ฉบับร่าง CDM = เอกสารครบ REJ = ส่งกลับแก้ไขRJO = ส่งกลับแก้ไข (ปฏิบัติการ)WAV = รอตรวจสอบ CAN = ยกเลิก |   |   | CDM |   |   |   |
| 4 |   | remark | varchar | 255 | Y | หมายเหตุ | ระบุจากหน้าจอ |   |   |   |   |   |   |   |   |   |
| 5 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 6 |   | created_by_fullname | varchar | 150 | N | ผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี) | ระบุจากหน้าจอ |   |   |   |   |   | สมชาย ใจดี |   |   |   |
| 7 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
