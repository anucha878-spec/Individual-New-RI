# tx_payment_edw

- **Page ID:** 1304985914
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_edw
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_edw | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-03-30 | Description | เก็บข้อมูลการจ่าย ตามเงื่อนไขการส่งข้อมูลเข้า EDW |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 3 |   | rd_type | Varchar | 20 | N | ประเภทเงิน รับ หรือ หัก |   |   |   |   |   |   | ReceiveDeduct |   | ariya.pi |   |
| 4 |   | rd_payment_type | Varchar | 20 | N | กลุ่มของเงินรับ หรือ หัก |   |   |   |   |   |   | ประเภทกรรับBENEFITPREMIUMประเภทการหักLOANPREMIUMCLAIMAGENT |   | ariya.pi |   |
| 5 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | ข0181320 |   | ariya.pi |   |
| 6 |   | policy_type | Varchar | 3 | N | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORDINDPAUL |   | ariya.pi |   |
| 7 |   | rider_id | Numeric | 3 | Y | รหัส Rider |   |   |   |   |   |   | ใช้กับ PREMIUM และ PREMIUM (AS400)1 |   | ariya.pi |   |
| 8 |   | rider_group | Varchar | 1 | Y | กลุ่ม Rider |   |   |   |   |   |   | ใช้กับ PREMIUML : ชีวิตH : สุขภาพA : อุบัติเหตO : Others |   | ariya.pi |   |
| 9 |   | loan_type | Varchar | 3 | Y | ประเภทเงินกู้ |   |   |   |   |   |   | ใช้กับ LOANPLAPL |   | ariya.pi |   |
| 10 |   | loan_no | Varchar | 50 | Y | เลขที่สัญญา |   |   |   |   |   |   | ใช้กับ LOAN |   | ariya.pi |   |
| 11 |   | loan_date | Date |   | Y | วันที่กู้ |   |   |   |   |   |   | ใช้กับ LOAN |   | ariya.pi |   |
| 12 |   | interest_overdue_date | Date |   | Y | วันที่เริ่มค้างชำระดอกเบี้ย |   |   |   |   |   |   | ใช้กับ LOAN และ PREMIUM |   | ariya.pi |   |
| 13 |   | interest_date_to | Date |   | Y | วันที่ชำระดอกเบี้ยถึงล่าสุด |   |   |   |   |   |   | ใช้กับ LOAN และ PREMIUM |   | ariya.pi |   |
| 14 |   | start_date | Date |   | Y | วันที่เริ่มคิดดอกเบี้ย หรือเบี้ยค้างเริ่ม |   |   |   |   |   |   | ใช้กับ LOAN และ PREMIUM |   | ariya.pi |   |
| 15 |   | end_date | Date |   | Y | วันที่คิดดอกเบี้ยถึงหรือเบี้ยค้างถึง |   |   |   |   |   |   | ใช้กับ LOAN และ PREMIUM |   | ariya.pi |   |
| 16 |   | payment_mode | Varchar | 2 | Y | Mode การรับชำระ |   |   |   |   |   |   | ใช้กับ PREMIUM13612 |   | ariya.pi |   |
| 17 |   | premium_type | Varchar | 2 | Y | ประเภทเบี้ย AS400 |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)LFL1ACA1HBH1 |   | ariya.pi |   |
| 18 |   | register_no | Varchar | 25 | Y | เลขที่รับเรื่องสินไหม/เลขที่ตรวจสอบสิทธิ์ |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 19 |   | claim_no | Varchar | 25 | Y | เลขที่สินไหม |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 20 |   | claim_type | Varchar | 10 | Y | ประเภทสินไหม |   |   |   |   |   |   | ใช้กับ CLAIMDeathCL สินไหมมรณกรรมAccDeath สินไหมมรณกรรมอุบัติเหตุ,ผิดธรรมชาติPerDis สินไหมทุพพลภาพสิ้นเชิงถาวรVisionDis สินไหมสูญเสียอวัยวะและสายตาTempDis สินไหมทุพพลภาพชั่วคราว(ชดเชยรายสัปดาห์)CompDis สินไหมชดเชยการรักษาพยาบาลSurgeon สินไหมชดเชยการผ่าตัดHealth สินไหมค่ารักษาพยาบาลCompHealth สินไหมค่าชดเชยรายวันLethal สินไหมคุ้มครองโรคร้ายแรงPBDeath สินไหมผลประโยชน์ผู้ชำระเบี้ยประกันภัย PB (กรณีเสียชีวิต)PBLive สินไหมผลประโยชน์ผู้ชำระเบี้ยประกันภัย PB (กรณีทุพพลภาพสิ้นเชิงถาวร)WP สินไหมยกเว้นการชำระเบี้ยประกันภัยChildCL สินไหมคุ้มครองบุตรBoneDis สินไหมผลประโยชน์กระดูกชิ้นใหญ่แตกหักFNDeath สินไหมค่าปลงศพConso สินไหมชดเชยเงินปลอบขวัญ |   | ariya.pi |   |
| 21 |   | request_date | Date |   | Y | วันและเวลาที่เรียกร้องสินไหม/รับเรื่องสินไหม |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 22 |   | claim_event_date | Date |   | Y | วันและเวลาที่เกิดเหตุ |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 23 |   | claim_status | Varchar | 10 | Y | สถานะการพิจารณาสินไหม |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 24 |   | approve_date | Date |   | Y | วันที่อนุมัติรายการสินไหม |   |   |   |   |   |   | ใช้กับ CLAIM |   | ariya.pi |   |
| 25 |   | due_date | Date |   | Y | วันที่ครบจ่าย |   |   |   |   |   |   | ใช้กับ BENEFIT |   | ariya.pi |   |
| 26 |   | due_type | Varchar | 2 | Y | ประเภทครบจ่าย |   |   |   |   |   |   | ใช้กับ BENEFITNM ตามรอบOV เกินรอบ |   | ariya.pi |   |
| 27 |   | due_payment_name | Varchar | 20 | Y | ชื่อเงินครบจ่าย |   |   |   |   |   |   | ใช้กับ BENEFIT - MATURITY (เงินครบ) - SURVIVOR (เงินทรงชัพ) - FINANCEREWARD (เงินสมนาคุณ) |   | ariya.pi |   |
| 28 |   | amount_type | Varchar | 4 | Y | ประเภทเงิน |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)PREMDISC |   | ariya.pi |   |
| 29 |   | agent_code | Varchar | 7 | Y | รหัสตัวแทน |   |   |   |   |   |   | ใช้กับ CLAWBACK |   | ariya.pi |   |
| 30 |   | clawback_no | Varchar | 20 | Y | เลขธุรกรรมลูกหนี้ตัวแทน |   |   |   |   |   |   | ใช้กับ CLAWBACK |   | ariya.pi |   |
| 31 |   | slip_no | Varchar | 14 | Y | เลขที่ใบเสร็จ |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400) |   | ariya.pi |   |
| **เงินอ้างอิง** |
| 32 |   | contract_principal | Numeric | (15,2) | Y | ยอดเงินต้นตั้งต้นตามสัญญา |   |   |   |   |   |   | ใช้กับ LOAN0.00 |   | ariya.pi |   |
| 33 |   | printcipal_remain | Numeric | (15,2) | Y | ยอดเงินต้นคงเหลือตามสัญญา |   |   |   |   |   |   | ใช้กับ LOAN0.00 |   | ariya.pi |   |
| 34 |   | compound_interest_amount | Numeric | (15,2) | Y | ยอดดอกเบี้ยทบต้นคงเหลือตามสัญญา |   |   |   |   |   |   | ใช้กับ LOAN0.00 |   | ariya.pi |   |
| 35 |   | accured_interest_amont | Numeric | (15,2) | Y | ยอดดอกเบี้ยค้างรับตามสัญญา |   |   |   |   |   |   | ใช้กับ LOAN0.00 |   | ariya.pi |   |
| 36 |   | accured_income_amount | Numeric | (15,2) | Y | ยอดดอกเบี้ยไม่เต็มวัน |   |   |   |   |   |   | ใช้กับ LOAN0.00 |   | ariya.pi |   |
| 37 |   | outstanding_prem | Numeric | (15,2) | Y | เบี้ยค้างรายสัญญา |   |   |   |   |   |   | ใช้กับ PREMIUM0.00 |   | ariya.pi |   |
| 38 |   | outstanding_extra_prem | Numeric | (15,2) | Y | เบี้ยพิเศษรายสัญญา |   |   |   |   |   |   | ใช้กับ PREMIUM0.00 |   | ariya.pi |   |
| 39 |   | int_outstanding_prem | Numeric | (15,2) | Y | ดอกเบี้ย เบี้ยค้างรับ |   |   |   |   |   |   | ใช้กับ PREMIUM0.00 |   | ariya.pi |   |
| 40 |   | discount_outstanding_prem | Numeric | (15,2) | Y | ส่วนลด เบี้ยล่วงหน้า |   |   |   |   |   |   | ใช้กับ PREMIUM0.00 |   | ariya.pi |   |
| 41 |   | request_amount | Numeric | (15,2) | Y | จำนวนเงินเรียกร้องสินไหม |   |   |   |   |   |   | ใช้กับ CLAIM0.00 |   | ariya.pi |   |
| 42 |   | approve_amount | Numeric | (15,2) | Y | จำนวนเงินอนุมัติสินไหม |   |   |   |   |   |   | ใช้กับ CLAIM0.00 |   | ariya.pi |   |
| 43 |   | due_amount | Numeric | (15,2) | Y | เงินจ่ายตามรอบ |   |   |   |   |   |   | ใช้กับ BENEFIT0.00 |   | ariya.pi |   |
| 44 |   | due_interest | Numeric | (15,2) | Y | ดอกเบี้ยเงินจ่ายตามรอบ |   |   |   |   |   |   | ใช้กับ BENEFIT0.00 |   | ariya.pi |   |
| 45 |   | amount_first | Numeric | (15,2) | Y | เงิน ปีแรก |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)0.00 |   | ariya.pi |   |
| 46 |   | amount_extra_first | Numeric | (15,2) | Y | เงิน พิเศษปีแรก |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)0.00 |   | ariya.pi |   |
| 47 |   | amount_next | Numeric | (15,2) | Y | เงิน ปีต่อ |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)0.00 |   | ariya.pi |   |
| 48 |   | amount_extra_next | Numeric | (15,2) | Y | เงิน พิเศษปีต่อ |   |   |   |   |   |   | ใช้กับ PREMIUM (AS400)0.00 |   | ariya.pi |   |
| 49 |   | clawback_amount | Numeric | (15,2) | Y | เงิน เรียกคืนตัวแทน |   |   |   |   |   |   | ใช้กับ CLAWBACK0.00 |   | ariya.pi |   |
| **Update information** |
| 50 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 51 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   | ariya.pi |   |
| 52 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 53 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | patcharat.vo |   | ariya.pi |   |
| 54 |   | cal_id | Varchar | 30 | Y | เลขที่อ้างอิงคำนวนที่ระบบ AS400 |   |   |   |   |   |   |   |   | ariya.pi |   |
| 55 |   | application_no | Varchar | 14 | Y | เลขที่ใบคำขอ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 56 |   | deposit_no | Varchar | 14 | Y | เลขที่รับฝาก |   |   |   |   |   |   |   |   | ariya.pi |   |
| 57 |   | temp_deposit_no | Varchar | 14 | Y | เลขที่รับฝาก Dummy |   |   |   |   |   |   |   |   | ariya.pi |   |

เดิม

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   | 1 |   |   |   |
| 3 | FOREIGN_KEY | receive_id | Int8 |   | N | [tx_payment_benefit_receive](/display/RDSCPENH/tx_payment_benefit_receive).id |   |   |   |   |   |   | 1 |   |   |   |
| 4 | FOREIGN_KEY | expense_id | Int8 |   | N | [tx_payment_benefit_expense](/display/RDSCPENH/tx_payment_benefit_expense).id |   |   |   |   |   |   | 1 |   |   |   |
| 5 | FOREIGN_KEY | rider_id | Int8 |   | N | [tx_payment_rider](/display/RDSCPENH/tx_payment_rider).rider_id |   |   |   |   |   |   | 1 |   |   |   |
| **อ้างอิง column ตามตาราง** [tx_payment_benefit_receive](/display/RDSCPENH/tx_payment_benefit_receive) |
| 6 |   | maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญา |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 7 |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 8 |   | finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 9 |   | surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 10 |   | auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 11 |   | return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันที |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 12 |   | returnprem_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 13 |   | returnprem_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 14 |   | returnrprem_pay_once | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 15 |   | returnacc_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 16 |   | returnacc_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 17 |   | returnrider_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 18 |   | returnrider_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 19 |   | interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 20 |   | pension_amount | Numeric | (15,2) | Y | บำนาญ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 21 |   | dividend_amount | Numeric | (15,2) | Y | เงินปันผล |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 22 |   | overdue_maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญาค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 23 |   | overdue_survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 24 |   | overdue_finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 25 |   | overdue_surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 26 |   | overdue_auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 27 |   | overdue_return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันทีค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 28 |   | overdue_pension_amount | Numeric | (15,2) | Y | บำนาญค้างจ่าย |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 29 |   | waiting_loan_amount | Numeric | (15,2) | Y | บัญชีพักรอชำระหนี้สิน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 30 |   | returnacc_pay_once | Numeric | (15,2) | Y | เงินคืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 31 |   | overdue_return_prem_amount | Numeric | (15,2) | Y | เงินเบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 32 |   | discount_prem_first_year -->premlife_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 33 |   | discount_prem_next_year -->premlife_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 34 |   | discount_acc_first_year -->premacc_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 35 |   | discount_acc_next_year -->premacc_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 36 |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 37 |   | interest_loan_amount -->loan_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 38 |   | interest_apl_amount -->apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 39 |   | loan_amount | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| **อ้างอิง Column ตามตาราง** [tx_payment_benefit_expense](/display/RDSCPENH/tx_payment_benefit_expense) |
| 40 |   | loan_amount | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 41 |   | loan_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 42 |   | apl_amount | Numeric | (15,2) | Y | เงินกู้ APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 43 |   | apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 44 |   | apl_compound_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับทบต้น APL |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 45 |   | premlife_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 46 |   | premlife_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 47 |   | premacc_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 48 |   | premacc_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 49 |   | service_income_amount | Numeric | (15,2) | Y | รายได้ค่าบริการกรมธรรม์ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 50 |   | health_examination_amount | Numeric | (15,2) | Y | ค่าตรวจสุขภาพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 51 |   | agent_clawback | Numeric | (15,2) | Y | ลูกหนี้ตัวแทน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 52 |   | deposit_amount | Numeric | (15,2) | Y | เงินฝากเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 53 |   | claim_life_amount | Numeric | (15,2) | Y | สินไหมสุขภาพ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 54 |   | claim_accn_amount | Numeric | (15,2) | Y | สินไหมทดแทน |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 55 |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 56 |   | overdue_apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ค้างรับ APL |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 57 |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 58 |   | overdue_return_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 59 |   | overdue_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยค้างชำระ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 60 |   | new_policy_prem_amount | Numeric | (15,2) | Y | ทำประกันเคสใหม่ |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 61 |   | other_policy_prem_amount | Numeric | (15,2) | Y | ชำระเบี้ยประกันภัยกรมธรรม์อื่น |   |   |   |   |   |   | 0.00 |   | patcharat.vo | ***PH1R2** |
| 62 |   | stamp_duty | Numeric | (15,2) | Y | อากรสแตมป์ |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 63 |   | overdue_loan_daily_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| 64 |   | overdue_apl_daily_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL ค้างรับระหว่างวัน |   |   |   |   |   |   | 0.00 |   | ariya.pi | ***PH2 New Loan** |
| **Update information** |
| 65 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
| 66 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |
| 67 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
| 68 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   | 1 |   |   |   |
| 3 | FOREIGN_KEY | receive_id | Int8 |   | N | [tx_payment_benefit_receive](/display/RDSCPENH/tx_payment_benefit_receive).id |   |   |   |   |   |   | 1 |   |   |   |
| 4 | FOREIGN_KEY | expense_id | Int8 |   | N | [tx_payment_benefit_expense](/display/RDSCPENH/tx_payment_benefit_expense).id |   |   |   |   |   |   | 1 |   |   |   |
| 5 | FOREIGN_KEY | rider_id | Int8 |   | N | [tx_payment_rider](/display/RDSCPENH/tx_payment_rider).rider_id |   |   |   |   |   |   | 1 |   |   |   |
| **อ้างอิง column ตามตาราง** [tx_payment_benefit_receive](/display/RDSCPENH/tx_payment_benefit_receive) |
|   |   | maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญา |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันที |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnprem_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnprem_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnrprem_pay_once | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnacc_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnacc_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnacc_pay_once | Numeric | (15,2) | Y | เงินคืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnrider_first_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | returnrider_next_year | Numeric | (15,2) | Y | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยจ่ายตามเงื่อนไข |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | pension_amount | Numeric | (15,2) | Y | บำนาญ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | dividend_amount | Numeric | (15,2) | Y | เงินปันผล |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญาค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันทีค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_pension_amount | Numeric | (15,2) | Y | บำนาญค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | waiting_loan_amount | Numeric | (15,2) | Y | บัญชีพักรอชำระหนี้สิน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_premium | Numeric | (15,2) | Y | เงินเบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | discount_prem_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | discount_prem_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | discount_acc_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | discount_acc_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_loan_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_apl_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | recieve_total_amount | Numeric | (15,2) | Y | รวมรายการรับ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | loan_amonth | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   |   | **PH2 New Loan** |
| **อ้างอิง Column ตามตาราง** [tx_payment_benefit_expense](/display/RDSCPENH/tx_payment_benefit_expense) |
|   |   | loan_amount | Numeric | (15,2) | Y | เงินกู้ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | loan_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | apl_amount | Numeric | (15,2) | Y | เงินกู้ APL |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | apl_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ APL |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | apl_compound_interest_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับทบต้น APL |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | premlife_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรง เบี้ยประกันชีวิต - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | premlife_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | premacc_discount_first_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | premacc_discount_next_year | Numeric | (15,2) | Y | ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | service_income_amount | Numeric | (15,2) | Y | รายได้ค่าบริการกรมธรรม์ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | health_examination_amount | Numeric | (15,2) | Y | ค่าตรวจสุขภาพ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | agent_clawback | Numeric | (15,2) | Y | ลูกหนี้ตัวแทน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | deposit_amount | Numeric | (15,2) | Y | เงินฝากเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | claim_life_amount | Numeric | (15,2) | Y | สินไหมสุขภาพ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | claim_accn_amount | Numeric | (15,2) | Y | สินไหมทดแทน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_prem_amount | Numeric | (15,2) | Y | ดอกเบี้ยรับ - ชำระเบี้ย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | interest_apl_amout | Numeric | (15,2) | Y | ดอกเบี้ยเงินกู้ค้างรับ APL |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | deposit_amount | Numeric | (15,2) | Y | เงินฝากเบี้ยประกัน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_prem_return_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_prem_amount | Numeric | (15,2) | Y | เบี้ยประกันภัยค้างชำระ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | new_policy_prem_amount | Numeric | (15,2) | Y | ทำประกันเคสใหม่ |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | other_policy_prem_amount | Numeric | (15,2) | Y | ชำระเบี้ยประกันภัยกรมธรรม์อื่น |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | expense_total_amount | Numeric | (15,2) | Y | รวมรายการหัก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | stamp_duty | Numeric | (15,2) | Y | ค่าอากรสแคมป์ |   |   |   |   |   |   | 0.00 |   |   | **PH2 New Loan** |
|   |
|   |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
|   |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |
|   |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
|   |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_payment_benefit_expense](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_expense)
- [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider)
- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_payment_benefit_expense](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_expense)
- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_payment_benefit_expense](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_expense)
- [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider)
- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_payment_benefit_expense](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_expense)
