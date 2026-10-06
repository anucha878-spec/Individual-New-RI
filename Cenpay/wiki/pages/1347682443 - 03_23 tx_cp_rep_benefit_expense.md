# 03_23 tx_cp_rep_benefit_expense

- **Page ID:** 1347682443
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_23+tx_cp_rep_benefit_expense
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_23 tx_cp_rep_benefit_expense
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_cp_rep_benefit_expense | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-06-10 | Description | ข้อมูลรายละเอียดรายการหัก |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_cp_rep_id | numeric | 10,0 | N | PK table tx_cp_rep |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | loan_amount | numeric | 15,2 | Y | เงินกู้ประกันชีวิต |   |   |   |   |   |   | 0.00 |   |   |   |
| 4 |   | apl_amount | numeric | 15,2 | Y | เบี้ยประกันภัยอัตโนมัติ |   |   |   |   |   |   | 0.00 |   |   |   |
| 5 |   | loan_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยเงินกู้ประกันชีวิต |   |   |   |   |   |   | 0.00 |   |   |   |
| 6 |   | apl_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยเบี้ยประกันภัยอัตโนมัติ APL |   |   |   |   |   |   | 0.00 |   |   |   |
| 7 |   | overdue_loan_daily_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยเงินกู้ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   |   |   |
| 8 |   | overdue_apl_daily_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยเงินกู้ APL ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   |   |   |
| 9 |   | interest_prem_amount | numeric | 15,2 | Y | ดอกเบี้ยเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   |   |   |
| 10 |   | overdue_apl_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยค้างรับ APL |   |   |   |   |   |   | 0.00 |   |   |   |
| 11 |   | apl_compound_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยทบต้นค้างรับ APL |   |   |   |   |   |   | 0.00 |   |   |   |
| 12 |   | overdue_prem_amount | numeric | 15,2 | Y | เบี้ยประกันภัยค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
| 13 |   | new_policy_prem_amount | numeric | 15,2 | Y | เบี้ยประกันภัยเคสใหม่ |   |   |   |   |   |   | 0.00 |   |   |   |
| 14 |   | other_policy_prem_amount | numeric | 15,2 | Y | ชำระเบี้ยประกันภัยกรมธรรม์อื่น |   |   |   |   |   |   | 0.00 |   |   |   |
| 15 |   | premlife_discount_first_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 16 |   | premlife_discount_next_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 17 |   | premacc_discount_first_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 18 |   | premacc_discount_next_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 19 |   | interest_amount | numeric | 15,2 | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   |   |   |
| 20 |   | service_income_amount | numeric | 15,2 | Y | ค่าธรรมเนียม |   |   |   |   |   |   | 0.00 |   |   |   |
| 21 |   | health_examination_amount | numeric | 15,2 | Y | ค่าตรวจสุขภาพ |   |   |   |   |   |   | 0.00 |   |   |   |
| 22 |   | agent_clawback | numeric | 15,2 | Y | ลูกหนี้ตัวแทน |   |   |   |   |   |   | 0.00 |   |   |   |
| 23 |   | survivor_amount | numeric | 15,2 | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   |   |   |
| 24 |   | claim_health_amount | numeric | 15,2 | Y | สินไหมสุขภาพ |   |   |   |   |   |   | 0.00 |   |   |   |
| 25 |   | claim_accn_amount | numeric | 15,2 | Y | สินไหมทดแทน |   |   |   |   |   |   | 0.00 |   |   |   |
| 26 |   | overdue_repending_prem_amount**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****overdue_return_prem_amount | numeric | 15,2 | Y | เบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 27 |   | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----****deposit_amount | numeric | 15,2 | Y | เงินฝากเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   |   |   |
| 28 |   | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----****stamp_duty | numeric | 15,2 | Y | อากรสแตมป์ |   |   |   |   |   |   | 0.00 |   |   |   |
| 29 |   | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----****loan_compound_interest_amount | numeric | 15,2 | Y | ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต |   |   |   |   |   |   | 0.00 |   |   |   |
| 30 |   | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----****accrued_prem_amount | numeric | 15,2 | Y | เบี้ยประกันภัยสุทธิ |   |   |   |   |   |   | 0.00 |   |   |   |
| 31 |   | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----****claim_accn_death_amount | numeric | 15,2 | Y | สินไหมอุบัติเหตุไม่เสียชีวิต |   |   |   |   |   |   | 0.00 |   |   |   |
| 32 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | [Ocean.co](http://Ocean.co) |   |   |   |
| 33 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 34 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | [Ocean.co](http://Ocean.co) |   |   |   |
| 35 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [Ocean.co](http://Ocean.co)
- [Ocean.co](http://Ocean.co)
