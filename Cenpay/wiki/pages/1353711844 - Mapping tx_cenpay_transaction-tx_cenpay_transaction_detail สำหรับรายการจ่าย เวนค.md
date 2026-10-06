# Mapping tx_cenpay_transaction/tx_cenpay_transaction_detail สำหรับรายการจ่าย เวนคืน และ เวนคืนกรมบังคับคดี

- **Page ID:** 1353711844
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1353711844
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-10 กระบวนการส่งเข้า EDW โดยบันทึกข้อมูลที่ Process log > Mapping tx_cenpay_transaction/tx_cenpay_transaction_detail สำหรับรายการจ่าย เวนคืน และ เวนคืนกรมบังคับคดี
- **Depth:** 5

---

# Mapping**[tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)**

| Name | Description | Value |
|---|---|---|
| id | Relate จาก [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).id | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).id |
| approve_date | วันที่ ACC อนุมัติรายการ | [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve).approved_date |
| policy_no | เลขที่กรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| expected_paid_date | วันที่รับเงินหรือจ่ายเงิน | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).request_payment_date |
| payment_due_date | วันที่ครบรอบจ่าย(Policy Premium Due Date) | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_due_date |
| channel_code | ช่องทางการขาย | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).channel_code |
| branch_code | สาขาต้นสังกัดกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).branch_code |
| branch_service | สาขาบริการ | Fix "0001" |
| **ข้อมูลการจ่าย** |
| pay_type | ประเภทการจ่าย | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_type |
| payment_channel | ช่องทางการจ่าย | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_channel |
| transfer_type | ประเภทการโอน | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).transfer_type |
| pay_amount | ยอดเงินจ่ายสุทธิ | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).total_net_amount |
| **ข้อมูลกรมธรรม์** |
| policy_type | ประเภทกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_type |
| policy_status_nbs | สถานะกรมธรรม์ NBS | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_status_code |
| policy_status_as400 | สถานะกรมธรรม์ AS400 | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_status_code |
| payment_mode | mode ของแบบประกันของสัญญาหลัก | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| policy_age | อายุ ณ วันเริ่มทำประกัน | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).insured_entry_age |
| policy_sex | เพศ (MALE, FEMALE) | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).insured_gender |
| monthly_premium | เบี้ยรายงวดของสัญญาหลัก | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| plan_code | รหัสแบบประกันสัญญาหลัก | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code |
| commencement_date | วันที่เริ่มกรมธรรม์ของสัญญาหลัก | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date |
| policy_coverage_term | ระยะเวลาประกัน | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).coverage_term |
| policy_payment_term | ระยะเวลาชำระเบี้ย | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).payment_term |
| sum_assured | ทุนประกัน | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_insure |
| fully_paid_date | วันที่ชำระครบ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).fully_paid_date |
| maturity_date | วันที่ครบกำหนดสัญญาของสัญญาหลัก | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).maturity_date |

# Mapping **[tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)**

แยก Mapping [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

## 1. **เงินครบกำหนดตามรอบ (due_date)** โดยจะดูจาก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw) ที่มี rd_type = 'Receive' และ rd_payment_type = 'BENEFIT' โดย Grouping ตาม due_date เพื่อวน Mapping ลง [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

| Name | Description | Value |
|---|---|---|
| tx_cenpay_transaction_id | id อ้างอิงจาก [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction) | [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).id |
| policy_no | เลขกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| transaction_type | 1 สัญญาหลัก / 2 สัญญาเพิ่มเติม | Fix 1 |
| product_code | 1 ใส่ Product Code / 2 ใส่ Rider Code | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code |
| commencement_date | วันที่เริ่มสัญญาหลัก หรือ สัญญาเพิ่มเติม | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date |
| payment_mode | mode ของแบบประกันของสัญญาหลักตาม Business Rule | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| yearly_premium | เบี้ยประกันรายปี | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount * (12 / [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode) |
| amount | เบี้ยประกันชำระตามโหมด | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| **ข้อมูลการจ่าย** |
| payment_due_date | วันครบกำหนดจ่ายเงิน | [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |
| survivor_amount | เงินทรงชีพ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_type = 'NM' และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_payment_name = 'SURVIVOR' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |
| finance_reward_amount | เงินสมนาคุณ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_type = 'NM' และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_payment_name = 'FINANCEREWARD' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |
| overdue_survivor_amount | เงินทรงชีพค้างจ่าย | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_type = 'OV' และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_payment_name = 'SURVIVOR' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |
| overdue_finance_reward_amount | เงินสมนาคุณค้างจ่าย | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_type = 'OV' และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_payment_name = 'FINANCEREWARD' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |
| interest_amount | ดอกเบี้ยจ่ายตามเงื่อนไข | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_amount) ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).due_date |

## 2. **เงืนเวนคืนกรมธรรม์** จะบันทึกจาก [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive).surrender_amount เมื่อมีค่ามากกว่า 0.00 ลง [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

| Name | Description | Value |
|---|---|---|
| tx_cenpay_transaction_id | id อ้างอิงจาก [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction) | [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).id |
| policy_no | เลขกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| transaction_type | 1 สัญญาหลัก / 2 สัญญาเพิ่มเติม | Fix 1 |
| product_code | 1 ใส่ Product Code / 2 ใส่ Rider Code | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code |
| commencement_date | วันที่เริ่มสัญญาหลัก หรือ สัญญาเพิ่มเติม | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date |
| payment_mode | mode ของแบบประกันของสัญญาหลักตาม Business Rule | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| yearly_premium | เบี้ยประกันรายปี | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount * (12 / [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode) |
| amount | เบี้ยประกันชำระตามโหมด | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| **ข้อมูลการจ่าย** |
| surrender_amount | วันครบกำหนดจ่ายเงิน | [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive),surrender_amount |

## 3. **เงินคืนเบี้ยประกันและส่วนลดเบี้ยประกัน (rider และ slip_no)** โดยจะดูจาก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw) ที่มี amount_type in ('RETN','DISC') และ rd_payment_type = 'PREMIUM' โดย Grouping ตาม rider_id และ slip_no เพื่อวน Mapping ลง [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

| Name | Description | Value |
|---|---|---|
| tx_cenpay_transaction_id | id อ้างอิงจาก [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction) | [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).id |
| policy_no | เลขกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| transaction_type | 1 สัญญาหลัก / 2 สัญญาเพิ่มเติม | ถ้า rider_id = 0 ให้บันทึก 1 ถ้า rider_id <> 0 ให้บันทึก 2 |
| product_code | 1 ใส่ Product Code / 2 ใส่ Rider Code | ถ้า rider_id = 0 ให้บันทึก [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code ถ้า rider_id <> 0 ให้บันทึก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id |
| commencement_date | วันที่เริ่มสัญญาหลัก หรือ สัญญาเพิ่มเติม | ถ้า rider_id = 0 ให้บันทึก [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date ถ้า rider_id <> 0 ให้บันทึก [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider).rider_start_date จาก [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider),rider_id = [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id |
| payment_mode | mode ของแบบประกันของสัญญาหลักตาม Business Rule | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| yearly_premium | เบี้ยประกันรายปี | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount * (12 / [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode) |
| amount | เบี้ยประกันชำระตามโหมด | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| rider_type | ชนิดแบบประกัน | ถ้า [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_group = 'L' ให้บันทึก 'O' นอกเหนือจากนั้น ให้บันทึก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_group |
| **ข้อมูลการจ่าย** |
| slip_no | เลขที่ใบเสร็จ | [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw),slip_no |
| returnprem | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_first + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_first) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'LF' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnprem_nextyear | คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_next + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_next) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'LF' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnrprem_pay_once | คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_first + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_first) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'L1' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnacc | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_first + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_first) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'AC' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnacc_nextyear | คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_next + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_next) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'AC' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnrider | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_first + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_first) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'HB' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| returnrider_nextyear | คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_next + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_next) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'HB' and amount_type = 'RETN' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |
| prem_discount_nextyear | ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_next + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).amount_extra_next) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).premium_type = 'LF' and amount_type = 'DISC' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).rider_id และ [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).slip_no |

## 4. **เงืนกู้ PL และ APL (loan_no)** โดยจะดูจาก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw) ที่มี rd_type = 'Deduct' และ rd_payment_type = 'LOAN' โดย Grouping ตาม loan_no เพื่อวน Mapping ลง [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

| Name | Description | Value |
|---|---|---|
| tx_cenpay_transaction_id | id อ้างอิงจาก [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction) | [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).id |
| policy_no | เลขกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| transaction_type | 1 สัญญาหลัก / 2 สัญญาเพิ่มเติม | Fix 1 |
| product_code | 1 ใส่ Product Code / 2 ใส่ Rider Code | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code |
| commencement_date | วันที่เริ่มสัญญาหลัก หรือ สัญญาเพิ่มเติม | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date |
| payment_mode | mode ของแบบประกันของสัญญาหลักตาม Business Rule | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| yearly_premium | เบี้ยประกันรายปี | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount * (12 / [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode) |
| amount | เบี้ยประกันชำระตามโหมด | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| **ข้อมูลการจ่าย** |
| loan_no | เลขที่สัญญาเงินกู้ | [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| loan_amount | เงินกู้ประกันชีวิต | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).printcipal_remain) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'PL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| loan_interest_amount | ดอกเบี้ยรับ - เงินกู้ประกันชีวิต | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).accured_interest_amont + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).accured_income_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'PL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| pl_compound_interest_amount | ดอกเบี้ยรับทบต้น - เงินกู้ประกัน | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).compound_interest_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'PL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| apl_amount | เงินกู้ประกันชีวิตอัตโนมัติ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).printcipal_remain) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'APL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| apl_interest_amount | ดอกเบี้ยรับ - เงินกู้ประกันชีวิตอัตโนมัติ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).accured_interest_amont + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).accured_income_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'APL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |
| apl_compound_interest_amount | ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).compound_interest_amount) ตามเงื่อนไข [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_type = 'APL' ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).loan_no |

## 5. **เบี้ยค้าง (deposit_no)** โดยจะดูจาก [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw) ที่มี amount_type is null และ rd_payment_type = 'PREMIUM' โดย Grouping ตาม deposit_no เพื่อวน Mapping ลง [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail) ดังนี้

| Name | Description | Value |
|---|---|---|
| tx_cenpay_transaction_id | id อ้างอิงจาก [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction) | [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).id |
| policy_no | เลขกรมธรรม์ | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).policy_no |
| transaction_type | 1 สัญญาหลัก / 2 สัญญาเพิ่มเติม | Fix 1 |
| product_code | 1 ใส่ Product Code / 2 ใส่ Rider Code | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).product_code |
| commencement_date | วันที่เริ่มสัญญาหลัก หรือ สัญญาเพิ่มเติม | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).commencement_date |
| payment_mode | mode ของแบบประกันของสัญญาหลักตาม Business Rule | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode |
| yearly_premium | เบี้ยประกันรายปี | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount * (12 / [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).monthly_mode) |
| amount | เบี้ยประกันชำระตามโหมด | [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy).premium_amount |
| **ข้อมูลการจ่าย** |
| deposit_no | เลขที่รับฝาก | [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).deposit_no |
| deposit_amount | เงืนฝากเบี้ยประกัน | sum([tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).outstanding_prem + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).outstanding_extra_prem + [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).int_outstanding_prem - [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).discount_outstanding_prem) ที่ Grouping ตาม [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw).deposit_no |

---

## Hyperlinks บนหน้านี้

- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_benefit_receive](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_receive)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider)
- [tx_payment_rider](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_cenpay_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction_detail)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
- [tx_payment_edw](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_edw)
