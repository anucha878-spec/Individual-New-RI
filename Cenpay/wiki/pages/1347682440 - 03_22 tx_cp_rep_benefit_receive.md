# 03_22 tx_cp_rep_benefit_receive

- **Page ID:** 1347682440
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_22+tx_cp_rep_benefit_receive
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_22 tx_cp_rep_benefit_receive
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_cp_rep_benefit_receive | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-06-10 | Description | ข้อมูลรายละเอียดรายการับ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_cp_rep_id | numeric | 10,0 | N | PK table tx_cp_rep |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | maturity_amount | numeric | 15,2 | Y | เงินครบสัญญา : เงินครบกำหนดสัญญา |   |   |   |   |   |   | 31500.00 |   |   |   |
| 4 |   | overdue_maturity_amount | numeric | 15,2 | Y | เงินครบสัญญา : เงินครบกำหนดสัญญาค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 5 |   | finance_reward_amount | numeric | 15,2 | Y | เงินสมนาคุณ : เงินสมนาคุณ |   |   |   |   |   |   | 0.00 |   |   |   |
| 6 |   | overdue_finance_reward_amount | numeric | 15,2 | Y | เงินสมนาคุณ : เงินสมนาคุณค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 7 |   | survivor_amount | numeric | 15,2 | Y | เงินทรงชีพ : เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   |   |   |
| 8 |   | overdue_survivor_amount | numeric | 15,2 | Y | เงินทรงชีพ : เงินทรงชีพค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 9 |   | dividend_amount | numeric | 15,2 | Y | เงินปันผล |   |   |   |   |   |   | 0.00 |   |   |   |
| 10 |   | loan_amount | numeric | 15,2 | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   |   |   |
| 11 |   | pension_amount | numeric | 15,2 | Y | เงินบำนาญ : เงินบำนาญ |   |   |   |   |   |   | 0.00 |   |   |   |
| 12 |   | overdue_pension_amount | numeric | 15,2 | Y | เงินบำนาญ : เงินบำนาญค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 13 |   | repending_amount**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----**return_amount | numeric | 15,2 | Y | เงินจ่ายคืนทันที : เงินจ่ายคืน |   |   |   |   |   |   | 0.00 |   |   |   |
| 14 |   | overdue_repending_amount**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****overdue_return_amount | numeric | 15,2 | Y | เงินจ่ายคืนทันที : เงินจ่ายคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 15 |   | waiting_loan_amount | numeric | 15,2 | Y | เงินจ่ายคืนทันที : บัญชีพักรอชำระหนี้สิน |   |   |   |   |   |   | 0.00 |   |   |   |
| 16 |   | surrender_amount | numeric | 15,2 | Y | เงินเวนคืนกรมธรรม์ : เงินเวนคืนกรมธรรม์ |   |   |   |   |   |   | 0.00 |   |   |   |
| 17 |   | overdue_surrender_amount | numeric | 15,2 | Y | เงินเวนคืนกรมธรรม์ : เงินเวนคืนกรมธรรม์ค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 18 |   | auto_surrender_amount | numeric | 15,2 | Y | เงินเวนคืนอัตโนมัติ : เงินเวนคืนอัตโนมัติ |   |   |   |   |   |   | 0.00 |   |   |   |
| 19 |   | overdue_auto_surrender_amount | numeric | 15,2 | Y | เงินเวนคืนอัตโนมัติ : เงินเวนคืนกรมธรรม์อัตโนมัติค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 20 |   | rependingprem_first_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnprem_first_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 21 |   | rependingprem_next_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnprem_next_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 22 |   | rependingrprem_pay_once**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnrprem_pay_once | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   |   |   |
| 23 |   | rependingacc_first_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----************returnacc_first_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 24 |   | rependingacc_next_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnacc_next_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 25 |   | rependingacc_pay_once**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnacc_pay_once | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   |   |   |
| 26 |   | rependingrider_first_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnrider_first_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 27 |   | rependingrider_next_year**-**---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****returnrider_next_year | numeric | 15,2 | Y | คืนเบี้ยประกัน : คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 28 |   | discount_prem_first_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 29 |   | discount_prem_next_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 30 |   | discount_acc_first_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
| 31 |   | discount_acc_next_year | numeric | 15,2 | Y | ส่วนลดเบี้ยประกัน : ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
| 32 |   | interest_prem_amount | numeric | 15,2 | Y | ดอกเบี้ยเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   |   |   |
| 33 |   | interest_amount | numeric | 15,2 | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   |   |   |
| 34 |   | interest_loan_amount | numeric | 15,2 | Y | ดอกเบี้ยเงินกู้ประกันชีวิต PL |   |   |   |   |   |   | 0.00 |   |   |   |
| 35 |   | interest_apl_amount | numeric | 15,2 | Y | ดอกเบี้ยเงินกู้ประกันชีวิตอัตโนมัติ APL |   |   |   |   |   |   | 0.00 |   |   |   |
| 36 |   | claim_amount | numeric | 15,2 | Y | สินไหม (รองรับข้อมูลจากระบบเช็คคืน) |   |   |   |   |   |   | 0.00 |   |   |   |
| 37 |   | other_amount | numeric | 15,2 | Y | อื่นๆ (รองรับข้อมูลจากระบบเช็คคืน) |   |   |   |   |   |   | 0.00 |   |   |   |
| 38 |   | **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----**overdue_return_prem_amount | numeric | 15,2 | Y | เงินเบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
| 39 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | [Ocean.co](http://Ocean.co) |   |   |   |
| 40 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 41 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | [Ocean.co](http://Ocean.co) |   |   |   |
| 42 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [Ocean.co](http://Ocean.co)
- [Ocean.co](http://Ocean.co)
