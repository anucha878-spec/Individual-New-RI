# 03_24 tx_cp_rep_mapping_reqno

- **Page ID:** 1347682455
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_24+tx_cp_rep_mapping_reqno
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_24 tx_cp_rep_mapping_reqno
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_cp_rep_mapping_reqno | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-06-10 | Description | ข้อมูล mapping รายการรอจ่ายใหม่กับเลขที่รับเรื่อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_cp_rep_id | numeric | 10,0 | N | PK table tx_cp_rep |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | 1529892 |   |   |   |
| 4 |   | payment_type | varchar | 10 | Y | ประเภทการจ่าย |   |   | [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)REP_PAYMENT_TYPE |   |   |   | APU |   |   |   |
| 5 |   | request_no | varchar | 20 | Y | เลขที่รับเรื่อง |   |   |   |   |   |   | R2568-02/0116/00003 |   |   |   |
| 6 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 7 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
