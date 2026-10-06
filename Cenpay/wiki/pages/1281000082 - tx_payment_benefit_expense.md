# tx_payment_benefit_expense

- **Page ID:** 1281000082
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_expense
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_benefit_expense
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_benefit_expense | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดจำนวนเงินหักของการจ่ายเงินทุกประเภทการจ่ายที่กำหนดไว้ ที่มีเข้ามาในระบบ Centralized Payment |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

***หากมีการแก้ไข ต้องปรับที่ตาราง** [tx_payment_edw](/display/RDSCPENH/tx_payment_edw) **ด้วยเสมอ**

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | loan_amount | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 4 |   | loan_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 5 |   | apl_amount | Numeric | (15,2) | Y | เงินกู้ APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 6 |   | apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 7 |   | apl_compound_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับทบต้น APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 8 |   | premlife_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 9 |   | premlife_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 10 |   | premacc_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 11 |   | premacc_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 12 |   | service_income_amount | Numeric | (15,2) | Y | รายได้ค่าบริการกรมธรรม์ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 13 |   | health_examination_amount | Numeric | (15,2) | Y | ค่าตรวจสุขภาพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 14 |   | agent_clawback | Numeric | (15,2) | Y | ลูกหนี้ตัวแทน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 15 |   | deposit_amount | Numeric | (15,2) | Y | เงินฝากเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 16 |   | claim_life_amount | Numeric | (15,2) | Y | สินไหมสุขภาพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 17 |   | claim_accn_amount | Numeric | (15,2) | Y | สินไหมทดแทน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 18 |   | total_amount | Numeric | (15,2) | Y | รวมรายการหัก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 19 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 20 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 21 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 22 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 23 |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 24 |   | overdue_apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ค้างรับ APL |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 25 |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 26 |   | overdue_return_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 27 |   | overdue_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยค้างชำระ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 28 |   | new_policy_prem_amount | Numeric | (15,2) | Y | ทำประกันเคสใหม่ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 29 |   | other_policy_prem_amount | Numeric | (15,2) | Y | ชำระเบี้ยประกันภัยกรมธรรม์อื่น |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 30 |   | stamp_duty | Numeric | (15,2) | Y | อากรสแตมป์ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 31 |   | overdue_loan_daily_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 32 |   | overdue_apl_daily_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 33 |   | interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   | patcha.vo | ***PH1R2** |
| 34 |   | loan_compound_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH1R2** |
| 35 |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH1R2** |
| 36 |   | accrued_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยสุทธิ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 37 |   | claim_accn_n_death_amount | Numeric | (15,2) | Y | สินไหมอุบัติเหตุไม่เสียชีวิต |   |   |   |   |   |   | 0.00 |   | ariya.pi | เพิ่มตามรายละเอียดเงิน |

---

## Hyperlinks บนหน้านี้

- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
