# 03_02 tx_request_policy

- **Page ID:** 1301578131
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_02 tx_request_policy
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_policy | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-24 | Description | เก็บข้อมูลกรมธรรม์ของรายการคำร้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ | ระบุจากหน้าจอ |   |   |   |   |   | 1529892 |   |   |   |
| 4 |   | policy_type | varchar | 20 | N | ประเภทกรมธรรม์ | AS400 |   |   | O = สามัญI = อุตสาหกรรมG = อุตสาหกรรมU = Unit linkedP = อุบัติเหตุ |   |   | O |   |   |   |
| 5 |   | plan_code | varchar |   | Y | รหัสแบบประกัน | AS400 |   |   |   |   |   | P01 |   |   |   |
| 6 |   | plan_name | varchar | 100 | Y | ชื่อแบบประกัน | AS400 |   |   |   |   |   | โอเชี่ยนไลฟ์ สมาร์ท พลัส 19/9 |   |   |   |
| 7 |   | issue_date | date |   | Y | วันที่รับรู้กรมธรรม์ | AS400 |   |   |   |   |   | 2020-05-07 |   |   |   |
| 8 |   | policy_commence_date | date |   | Y | วันเริ่มต้นสัญญา | AS400 |   |   |   |   |   | 2020-05-07 |   |   |   |
| 9 |   | policy_maturity_date | date |   | Y | วันครบกำหนดสัญญา | AS400 |   |   |   |   |   | 2027-05-07 |   |   |   |
| 10 |   | branch_source_code | numericvarchar | 4,04 | Y | รหัสสาขาต้นสังกัด | AS400 |   |   |   |   |   | 0116 |   |   |   |
| 11 |   | branch_source_name | varchar | 50 | Y | ชื่อสาขาต้นสังกัด | AS400 |   |   |   |   |   | อโศก |   |   |   |
| 12 |   | sale_channel_code | varchar | 27 | Y | รหัสช่องทางการขาย 7 digit | AS400 |   |   |   |   |   | 2072805 |   |   |   |
| 13 |   | sale_channel_name | varchar | 20 | Y | ช่องทางการขาย | AS400 |   |   |   |   |   | Agent |   |   |   |
| 14 |   | last_payment | varchar | 20 | Y | งวดชำระเบี้ยล่าสุด | AS400 |   |   |   |   |   | 1 |   |   |   |
| 15 |   | agent_code | varchar | 20 | Y | รหัสตัวแทน | AS400 |   |   |   |   |   | 5600125 |   |   |   |
| 16 |   | agent_title | varchar | 50 | Y | คำนำหน้าชื่อตัวแทน | AS400 |   |   |   |   |   | นาย |   |   |   |
| 17 |   | agent_name | varchar | 100 | Y | ชื่อตัวแทน | AS400 |   |   |   |   |   | ไทยสมุทร |   |   |   |
| 18 |   | agent_surname | varchar | 100 | Y | นามสกุลตัวแทน | AS400 |   |   |   |   |   | ประกันชีวิต |   |   |   |
| 19 |   | agent_phone_number | numericvarchar | 10,010 | Y | เบอร์โทรศัพท์ตัวแทน | AS400 |   |   |   |   |   | 0932474847 |   |   |   |
| 20 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 21 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 22 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 23 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
