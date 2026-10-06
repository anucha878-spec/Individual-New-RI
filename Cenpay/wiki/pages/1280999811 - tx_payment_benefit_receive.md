# tx_payment_benefit_receive

- **Page ID:** 1280999811
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_benefit_receive
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_benefit_receive | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดจำนวนเงินรับของการจ่ายเงินทุกประเภทการจ่ายที่กำหนดไว้ ที่มีเข้ามาในระบบ Centralized Payment |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

***หากมีการแก้ไข ต้องปรับที่ตาราง** [tx_payment_edw](/display/RDSCPENH/tx_payment_edw) **ด้วยเสมอ**

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญา |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 4 |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 5 |   | finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 6 |   | surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 7 |   | auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 8 |   | return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันที |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 9 |   | returnprem_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 10 |   | returnprem_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 11 |   | returnrprem_pay_once | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 12 |   | returnacc_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 13 |   | returnacc_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 14 |   | returnrider_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 15 |   | returnrider_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 16 |   | interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 17 |   | pension_amount | Numeric | (15,2) | Y | บำนาญ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 18 |   | dividend_amount | Numeric | (15,2) | Y | เงินปันผล |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 19 |   | cenpay_cheque_return | Numeric | (15,2) | Y | เช็คคืนจ่ายตามเงื่อนไขกธ. |   |   |   |   |   |   | 0.00 |   | ariya.pi | Drop Field เนื่องจากไม่ใช้แล้ว สำหรับ Ph1R1 โดย ariya.pi เมื่อ 9/12/2568 |
| 20 |   | overdue_return_amount_bbl | Numeric | (15,2) | Y | รับคืนฯBBL |   |   |   |   |   |   | 0.00 |   | ariya.pi |
| 21 |   | cenpay_reject_amount | Numeric | (15,2) | Y | โอนไม่ผ่านฯcen pay |   |   |   |   |   |   | 0.00 |   | ariya.pi |
| 22 |   | total_amount | Numeric | (15,2) | Y | รวมรายการรับ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 23 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 24 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 25 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 26 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| **ปรับเพิ่มข้อมูลรายการเงินรับค้างจ่าย สำหรับ CR Ph1R1 09/12/2568 โดย ariya.pi** |
| 27 |   | overdue_maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญาค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 28 |   | overdue_survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 29 |   | overdue_finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 30 |   | overdue_surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 31 |   | overdue_auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 32 |   | overdue_return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันทีค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 33 |   | overdue_pension_amount | Numeric | (15,2) | Y | บำนาญค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| **ปรับเพิ่มข้อมูลรายการเงินรับค้างจ่าย สำหรับ CR Ph1R1 15/12/2568 โดย ariya.pi** |
| 34 |   | waiting_loan_amount | Numeric | (15,2) | Y | บัญชีพักรอชำระหนี้สิน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 35 |   | returnacc_pay_once | Numeric | (15,2) | Y | เงินคืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 36 |   | accrued_premium -->overdue_return_prem_amount | Numeric | (15,2) | Y | เงินเบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 37 |   | discount_prem_first_year -->premlife_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 38 |   | discount_prem_next_year -->premlife_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 39 |   | discount_acc_first_year -->premacc_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 40 |   | discount_acc_next_year -->premacc_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 41 |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 42 |   | interest_loan_amount -->loan_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 43 |   | interest_apl_amount -->apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 44 |   | loan_amount | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |

---

## Hyperlinks บนหน้านี้

- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
