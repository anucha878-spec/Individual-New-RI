# tx_fund_transaction_detail

- **Page ID:** 1340244349
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_fund_transaction_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > Insurance Fund > tx_fund_transaction_detail
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_fund_transaction_detail | Data Source | Batch Process ประมวลผลรายเดือนClaim System (การเรียกร้องสินไหมประกันภัยเดี่ยว)SQL (การเรียกร้องสินไหมประกันภัยกลุ่ม)Benefit Register (รายการทะเบียนรอจ่ายใหม่) |
| Project Name | Cenpay | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E. A.D. = คริสต์ศักราช B.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-12 | Description | ข้อมูลรายละเอียดการจ่ายระดับ Batch |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
| 2 | FK | batch_fund_no | Varchar | 16 | N | Batch เลขธุรกรรม |   |   |   |   |   |   | IF-TB-20260601-01 |   | anocha.su | 2026-05-12 |   |
| 3 |   | transaction_no | Varchar | 20 | N | เลขธุรกรรมอ้างอิง |   |   |   |   |   |   | NPC25081300001 |   | anocha.su | 2026-05-12 |   |
| 4 |   | policy_no | Varchar | 20 | N | เลขกรมธรรม์ |   |   |   |   |   |   | 1529892 |   | anocha.su | 2026-05-12 |   |
| 5 |   | policy_type | Varchar | 10 | N | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORD |   | anocha.su | 2026-05-12 |   |
| 6 |   | plan_code |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 7 |   | rider_code |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 8 |   | sales_channel_code |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 9 |   | claim_channel |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 10 |   | claim_register_date |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 11 |   | claim _type |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 12 |   | event_code |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 13 |   | branch_register |   |   |   |   |   |   |   |   |   |   | branche-claim: 8200fax claim: -web&api claim: - |   |   |   |   |
| 14 |   | overdue_type | Varchar | 5 | N | ประเภทเงินเกินกำหนด |   |   |   |   |   |   | OMTRA ตัวอย่างข้อมูล อ้างอิงข้อมูล: [2.14 Event : CP_ACC_13 : ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ](/pages/viewpage.action?pageId=882606277)overdue_typename_typeAccount codeoverdue_descriptionOMTRAoverdue_maturity_amount21010005ครบกำหนดสัญญาค้างจ่ายOSVVAoverdue_survivor_amount21010010เงินทรงชีพค้างจ่ายOFNRAoverdue_finance_reward_amount21010020 เงินสมนาคุณค้างจ่ายACCPSaccrued_pension21010025เงินบำนาญค้างจ่ายACPSRaccrued_policy_surrender21030000เงินค่าเวนคืนกรมธรรม์ค้างจ่ายOASRAoverdue_auto_surrender_amount21050000เงินเวนคืนกรมธรรม์อัตโนมัติค้างจ่ายORTNAoverdue_return_amount21060001เงินจ่ายคืนค้างจ่ายRTPMOreturnprem_overdue21530000เบี้ยประกันภัยคืนค้างจ่ายWTLNAwaiting_loan_amount23560064บัญชีพักรอชำระหนี้สินOCLFAoverdue_life_amount21020005สินไหมประกันชีวิตค้างจ่ายOCPSAoverdue_pension_amount21020006สินไหมประกันชีวิตบำนาญค้างจ่ายOCACAoverdue_acc_amount21020010สินไหมประกันชีวิตอุบัติเหตุค้างจ่ายOCCLAoverdue_child_amount21020015สินไหมคุ้มครองบุตรค้างจ่ายOCFRAoverdue_funeral_amount21020020เงินช่วยเหลือค่าทำศพค้างจ่ายOCRTAoverdue_rt_amount21020025สินไหมคืนเบี้ยค้างจ่ายOCANAoverdue_accn_amount21040005สินไหมทดแทนอุบัติเหตุค้างจ่ายOCADAoverdue_accnd_amount21040012สินไหมอุบัติเหตุไม่เสียชีวิตค้างจ่ายOCTPAoverdue_tpd_amount21040010สินไหมทุพพลภาพค้างจ่ายOCHCAoverdue_hc_amount21050005สินไหมประกันสุขภาพค้างจ่ายOCEXGoverdue_exgratia21020022Ex-gratia ค้างจ่าย |   |   |   |   |
| overdue_type | name_type | Account code | overdue_description |
| OMTRA | overdue_maturity_amount | 21010005 | ครบกำหนดสัญญาค้างจ่าย |
| OSVVA | overdue_survivor_amount | 21010010 | เงินทรงชีพค้างจ่าย |
| OFNRA | overdue_finance_reward_amount | 21010020 | เงินสมนาคุณค้างจ่าย |
| ACCPS | accrued_pension | 21010025 | เงินบำนาญค้างจ่าย |
| ACPSR | accrued_policy_surrender | 21030000 | เงินค่าเวนคืนกรมธรรม์ค้างจ่าย |
| OASRA | overdue_auto_surrender_amount | 21050000 | เงินเวนคืนกรมธรรม์อัตโนมัติค้างจ่าย |
| ORTNA | overdue_return_amount | 21060001 | เงินจ่ายคืนค้างจ่าย |
| RTPMO | returnprem_overdue | 21530000 | เบี้ยประกันภัยคืนค้างจ่าย |
| WTLNA | waiting_loan_amount | 23560064 | บัญชีพักรอชำระหนี้สิน |
| OCLFA | overdue_life_amount | 21020005 | สินไหมประกันชีวิตค้างจ่าย |
| OCPSA | overdue_pension_amount | 21020006 | สินไหมประกันชีวิตบำนาญค้างจ่าย |
| OCACA | overdue_acc_amount | 21020010 | สินไหมประกันชีวิตอุบัติเหตุค้างจ่าย |
| OCCLA | overdue_child_amount | 21020015 | สินไหมคุ้มครองบุตรค้างจ่าย |
| OCFRA | overdue_funeral_amount | 21020020 | เงินช่วยเหลือค่าทำศพค้างจ่าย |
| OCRTA | overdue_rt_amount | 21020025 | สินไหมคืนเบี้ยค้างจ่าย |
| OCANA | overdue_accn_amount | 21040005 | สินไหมทดแทนอุบัติเหตุค้างจ่าย |
| OCADA | overdue_accnd_amount | 21040012 | สินไหมอุบัติเหตุไม่เสียชีวิตค้างจ่าย |
| OCTPA | overdue_tpd_amount | 21040010 | สินไหมทุพพลภาพค้างจ่าย |
| OCHCA | overdue_hc_amount | 21050005 | สินไหมประกันสุขภาพค้างจ่าย |
| OCEXG | overdue_exgratia | 21020022 | Ex-gratia ค้างจ่าย |
| 15 |   | overdue_description | Varchar | 255 | N | รายละเอียดประเภทเงินเกินกำหนด |   |   |   |   |   |   | ครบกำหนดสัญญาค้างจ่าย ตัวอย่างข้อมูล อ้างอิงข้อมูล: [2.14 Event : CP_ACC_13 : ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ](/pages/viewpage.action?pageId=882606277)overdue_typename_typeAccount codeoverdue_descriptionOMTRAoverdue_maturity_amount21010005ครบกำหนดสัญญาค้างจ่ายOSVVAoverdue_survivor_amount21010010เงินทรงชีพค้างจ่ายOFNRAoverdue_finance_reward_amount21010020 เงินสมนาคุณค้างจ่ายACCPSaccrued_pension21010025เงินบำนาญค้างจ่ายACPSRaccrued_policy_surrender21030000เงินค่าเวนคืนกรมธรรม์ค้างจ่ายOASRAoverdue_auto_surrender_amount21050000เงินเวนคืนกรมธรรม์อัตโนมัติค้างจ่ายORTNAoverdue_return_amount21060001เงินจ่ายคืนค้างจ่ายRTPMOreturnprem_overdue21530000เบี้ยประกันภัยคืนค้างจ่ายWTLNAwaiting_loan_amount23560064บัญชีพักรอชำระหนี้สินOCLFAoverdue_life_amount21020005สินไหมประกันชีวิตค้างจ่ายOCPSAoverdue_pension_amount21020006สินไหมประกันชีวิตบำนาญค้างจ่ายOCACAoverdue_acc_amount21020010สินไหมประกันชีวิตอุบัติเหตุค้างจ่ายOCCLAoverdue_child_amount21020015สินไหมคุ้มครองบุตรค้างจ่ายOCFRAoverdue_funeral_amount21020020เงินช่วยเหลือค่าทำศพค้างจ่ายOCRTAoverdue_rt_amount21020025สินไหมคืนเบี้ยค้างจ่ายOCANAoverdue_accn_amount21040005สินไหมทดแทนอุบัติเหตุค้างจ่ายOCADAoverdue_accnd_amount21040012สินไหมอุบัติเหตุไม่เสียชีวิตค้างจ่ายOCTPAoverdue_tpd_amount21040010สินไหมทุพพลภาพค้างจ่ายOCHCAoverdue_hc_amount21050005สินไหมประกันสุขภาพค้างจ่ายOCEXGoverdue_exgratia21020022Ex-gratia ค้างจ่าย |   |   |   |   |
| overdue_type | name_type | Account code | overdue_description |
| OMTRA | overdue_maturity_amount | 21010005 | ครบกำหนดสัญญาค้างจ่าย |
| OSVVA | overdue_survivor_amount | 21010010 | เงินทรงชีพค้างจ่าย |
| OFNRA | overdue_finance_reward_amount | 21010020 | เงินสมนาคุณค้างจ่าย |
| ACCPS | accrued_pension | 21010025 | เงินบำนาญค้างจ่าย |
| ACPSR | accrued_policy_surrender | 21030000 | เงินค่าเวนคืนกรมธรรม์ค้างจ่าย |
| OASRA | overdue_auto_surrender_amount | 21050000 | เงินเวนคืนกรมธรรม์อัตโนมัติค้างจ่าย |
| ORTNA | overdue_return_amount | 21060001 | เงินจ่ายคืนค้างจ่าย |
| RTPMO | returnprem_overdue | 21530000 | เบี้ยประกันภัยคืนค้างจ่าย |
| WTLNA | waiting_loan_amount | 23560064 | บัญชีพักรอชำระหนี้สิน |
| OCLFA | overdue_life_amount | 21020005 | สินไหมประกันชีวิตค้างจ่าย |
| OCPSA | overdue_pension_amount | 21020006 | สินไหมประกันชีวิตบำนาญค้างจ่าย |
| OCACA | overdue_acc_amount | 21020010 | สินไหมประกันชีวิตอุบัติเหตุค้างจ่าย |
| OCCLA | overdue_child_amount | 21020015 | สินไหมคุ้มครองบุตรค้างจ่าย |
| OCFRA | overdue_funeral_amount | 21020020 | เงินช่วยเหลือค่าทำศพค้างจ่าย |
| OCRTA | overdue_rt_amount | 21020025 | สินไหมคืนเบี้ยค้างจ่าย |
| OCANA | overdue_accn_amount | 21040005 | สินไหมทดแทนอุบัติเหตุค้างจ่าย |
| OCADA | overdue_accnd_amount | 21040012 | สินไหมอุบัติเหตุไม่เสียชีวิตค้างจ่าย |
| OCTPA | overdue_tpd_amount | 21040010 | สินไหมทุพพลภาพค้างจ่าย |
| OCHCA | overdue_hc_amount | 21050005 | สินไหมประกันสุขภาพค้างจ่าย |
| OCEXG | overdue_exgratia | 21020022 | Ex-gratia ค้างจ่าย |
|   |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
|   |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |
|   |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
|   |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |

---

## Hyperlinks บนหน้านี้

- [2.14 Event : CP_ACC_13 : ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=882606277)
- [2.14 Event : CP_ACC_13 : ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=882606277)
