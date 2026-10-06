# 03_12 tx_request_cal_policy_value

- **Page ID:** 1316552921
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_12+tx_request_cal_policy_value
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_12 tx_request_cal_policy_value
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_cal_policy_value | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | kanawoot.ou | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-01-30 | Description | เก็บข้อมูล Main Program for calculating policy value ที่จำเป็นสำหรับส่งคำร้องให้ระบบ AS400 |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | calculate_id | varchar | 2530 | N | Calculate ID (ยอดคำนวณเงินบวก, ส่วนลดเบี้ยประกัน) |   |   |   |   |   |   | PSP112372120251122_0001 |   | thidarat.ph |   |
| 4 |   | policy_age_years | Int8 | 255 | Y | ปีที่เวนคืน |   |   |   |   |   |   | 26 |   |   |   |
| 5 |   | policy_age_months | Int8 | 20 | Y | เดือนที่เวนคืน |   |   |   |   |   |   | 1 |   |   |   |
| 6 |   | policy_age_days | Int8 | 20 | Y | จำนวนวันที่เวนคืน |   |   |   |   |   |   | 10 |   |   |   |
| 7 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 8 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 9 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 10 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 11 |   | prem_from_date | date |   | Y | วันที่คิดเบี้ยค้างชำระ จาก |   |   |   |   |   |   | 2024-06-21 |   |   |   |
| 12 |   | prem_to_date | date |   | Y | วันที่คิดเบี้ยค้างชำระ ถึง |   |   |   |   |   |   | 2024-06-21 |   |   |   |
| 13 |   | apl_interest_from_date | date |   | Y | APL วันที่คำนวณดอกเบี้ย จาก |   |   |   |   |   |   | 2024-06-21 |   |   |   |
| 14 |   | apl_interest_to_date | date |   | Y | APL วันที่คำนวณดอกเบี้ย ถึง |   |   |   |   |   |   | 2024-06-21 |   |   |   |
| 15 |   | overdue_prem_life_amount | numeric | 15,2 | Y | เบี้ยประกันชีวิต ค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
| 16 |   | overdue_prem_acc_amount | numeric | 15,2 | Y | เบี้ยประกันอุบัติเหตุ ค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
| 17 |   | overdue_prem_hc_amount | numeric | 15,2 | Y | เบี้ยประกันสุขภาพ ค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
| 18 |   | overdue_prem_other_amount | numeric | 15,2 | Y | เบี้ยประกันอื่น ๆ ค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
| 19 |   | overdue_prem_extra_amount | numeric | 15,2 | Y | เบี้ยประกันพิเศษ ค้างชำระ รวมกัน (ชีวิต,อบ.,สุขภาพ) |   |   |   |   |   |   | 0.00 |   |   |   |
| 20 |   | overdue_interest_amount | numeric | 15,2 | Y | ดอกเบี้ย เบี้ยประกัน ค้างชำระ สุทธิ |   |   |   |   |   |   | 0.00 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
