# 03_09 tx_request_free_look

- **Page ID:** 1305412593
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_09+tx_request_free_look
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_09 tx_request_free_look
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_free_look | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-12-11 | Description | เก็บข้อมูลสำหรับขอ Free Look |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | flag_epolicy | boolean |   | Y | กรณีเป็น e-policy - TRUE เป็น e-policy - FALSE ไม่ใช่ e-policy |   |   |   |   |   |   | TRUE |   |   |   |
| 4 |   | receive_email_date | date |   | Y | วันที่ลูกค้าได้รับอีเมล |   |   |   |   |   |   | 16/09/2568 |   |   |   |
| 5 |   | flag_policy | boolean |   | Y | กรณีได้รับเล่มกรมธรรม์ - TRUE ได้รับเล่มกรมธรรม์ - FALSE ไม่ได้รับเล่มกรมธรรม์ |   |   |   |   |   |   | FALSE |   |   |   |
| 6 |   | receive_policy_date | date |   | Y | วันที่รับเล่มกรมธรรม์ |   |   |   |   |   |   | 16/09/2568 |   |   |   |
| 7 |   | flag_fee_waive | boolean |   | Y | ยกเว้นค่าธรรมเนียมบริการกรมธรรม์ - TRUE ยกเว้นค่าธรรมเนียมบริการกรมธรรม์ - FALSE ไม่ยกเว้นค่าธรรมเนียมบริการกรมธรรม์ |   |   |   |   |   |   | FALSE |   |   |   |
| 8 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 9 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 10 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 11 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 12 |   | flag_case_5_type_agent | boolean |   | Y | TRUE = กรณีผู้รับผลประโยชน์เป็นตัวแทน และบุคคล 5 ประเภทFALSE = ผู้รับผลประโยชน์ไม่ใช่ตัวแทน |   |   |   |   |   |   | FALSE |   |   |   |
| **Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 02/07/2026** |
| 13 |   | med_flag | varchar | 1 | Y | Y : ตรวจสุขภาพN : ไม่ตรวจสุขภาพ |   |   |   |   |   |   | Y |   |   |   |
| 14 |   | policy_format_confirm | varchar | 1 | Y | Y = ไม่ได้ออกเล่มกรมธรรม์ สำหรับกรณีที่เป็น e-policy ไม่เท่า Y = ออกเล่มกรมธรรม์ สำหรับกรณีที่เป็น e-policy และได้ออกเล่มกรมธรรม์ |   |   |   |   |   |   | Y |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
