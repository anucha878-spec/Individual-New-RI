# 02-04-14 Process ส่งข้อมูลเข้า EDW สร้าง Voucher จ่ายเงิน,Format ไม่ผ่าน,ค่าธรรมเนียมธนาคาร

- **Page ID:** 1314947283
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1314947283
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-14 Process ส่งข้อมูลเข้า EDW สร้าง Voucher จ่ายเงิน,Format ไม่ผ่าน,ค่าธรรมเนียมธนาคาร
- **Depth:** 4

---

**1.เตรียมข้อมูลสำหรับส่งเข้า EDW**
1.เตรียมข้อมูลสำหรับส่งเข้า EDW

| No. | เตรียมข้อมูล | เงื่อนไข |
|---|---|---|
| 1 | Event Code | ตรวจสอบและจัดกลุ่มรายการตาม Event Code ภายใต้ Batch (อ้างอิง Event Code จาก [Initial Data page 2](/display/RDSADW/Initial+Data+page+2))event_codeเงื่อนไขตรวจสอบรายการระดับ TransactionPM_FIN_01Phase/ReleaseConditionPh1R1สร้างรายการอนุมัติบันทึกบัญชี (format ไม่ผ่าน)กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิกPh1R2 + New Loan Ph1และ Ph2,Ph3ตรวจสอบ Transaction ที่ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01ไม่ส่งข้อมูลไปยัง EDWกรณีไม่มีข้อมูลที่ lookup เช่น APUสร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิก[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('CAN','REJ')[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('REJ','CAN')PM_FIN_02รายการอนุมัติจ่ายและบันทึกบัญชีกรณีมีรายการ Transaction ที่ Format ผ่าน[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status not in ('REJ','CAN')PM_FIN_03รายการค่าธรรมเนียม[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).fee_amount > 0 |
| event_code | เงื่อนไข | ตรวจสอบรายการระดับ Transaction |
| PM_FIN_01 | Phase/ReleaseConditionPh1R1สร้างรายการอนุมัติบันทึกบัญชี (format ไม่ผ่าน)กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิกPh1R2 + New Loan Ph1และ Ph2,Ph3ตรวจสอบ Transaction ที่ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01ไม่ส่งข้อมูลไปยัง EDWกรณีไม่มีข้อมูลที่ lookup เช่น APUสร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิก[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('CAN','REJ') | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('REJ','CAN') |
| Phase/Release | Condition |
| Ph1R1 | สร้างรายการอนุมัติบันทึกบัญชี (format ไม่ผ่าน)กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิก |
| Ph1R2 + New Loan Ph1และ Ph2,Ph3 | ตรวจสอบ Transaction ที่ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01ไม่ส่งข้อมูลไปยัง EDWกรณีไม่มีข้อมูลที่ lookup เช่น APUสร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิก[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('CAN','REJ') |
| ตรวจสอบ | Condition |
| กรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan) | ไม่สร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01ไม่ส่งข้อมูลไปยัง EDW |
| กรณีไม่มีข้อมูลที่ lookup เช่น APU | สร้าง Voucher รายการไม่ผ่านตรวจสอบ - PM_FIN_01กรณีมีรายการ Transaction ที่สถานะเป็นปฎิเสธหรือยกเลิก[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in ('CAN','REJ') |
| PM_FIN_02 | รายการอนุมัติจ่ายและบันทึกบัญชีกรณีมีรายการ Transaction ที่ Format ผ่าน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status not in ('REJ','CAN') |
| PM_FIN_03 | รายการค่าธรรมเนียม | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).fee_amount > 0 |
| 2 | System Key | โดย Format ของ System_key คือ eventCode_{batch_payment_no}_{วันที่เวลาส่งข้อมูลyyyyMMddHHmmss}ตัวอย่างเช่น PM_FIN_01_B25680901001_20250915140159 |
| 3 | Payment Date | 1.ตรวจสอบ [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service2.ดึงข้อมูลวันที่สำหรับคำนวณ [cf_service_fee](/display/RDSCPENH/cf_service_fee).cal_payment_date_edwwhere [cf_service_fee](/display/RDSCPENH/cf_service_fee).service = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service3. คำนวณและบันทึก [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date + [cf_service_fee](/display/RDSCPENH/cf_service_fee).cal_payment_date_edw4. ตรวจสอบรายการวันหยุดโดยใช้**MSA Service :** GET:/thaisamut/rs/mastersetting/v1/holiday/{year}/{type} โดยส่งพารามิเตอร์ ปี (ค.ศ.) (YYYY) และ ประเภทของวันหยุด (Fix "HQ") โดยผลลัพธ์จะ return รายการวันหยุดมาให้ เทียบว่าต้องไม่ตรงกับวันหยุดและวันหยุดเสาร์และอาทิตย์ ถ้าตรงให้ -1 วันจนกว่าจะไม่ตรงวันหยุดและวันหยุดเสาร์และอาทิตย์อ้างอิงเงื่อนไข : [เงื่อนไขบันทึกบัญชี ค่าธรรมเนียมธนาคาร_17042025](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193) |

**2.บันทึกข้อมูลที่ตาราง tx_payment_dashboard**
2.บันทึกข้อมูลที่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)
ตรวจสอบ event_code จากข้อ 3.2 ให้สร้างรายการตามจำนวน event_code

| field | description | mapping data |
|---|---|---|
| batch_payment_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id |
| approved_type | ประเภทการอนุมัติ | ตรวจสอบ event_codeกรณี event_code = 'PM_FIN_01' หรือ 'PM_FIN_03'บันทึก APAR - อนุมัติและบันทึกบัญชีกรณี event_code = 'PM_FIN_02'บันทึก APAC - อนุมัติจ่ายและบันทึกบัญชี |
| payment_channel | ช่องทางการจ่าย | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channel |
| batch_payment_type | ประเภทการจ่าย | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_type |
| service | Service (Format ธนาคาร) | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_code |
| bank_account_no | เลขที่บัญชี | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description where[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' |
| request_payment_date | วันที่ Request จ่ายเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_date |
| paid_date | วันที่ลูกค้าได้รับเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_dateแก้ไขจาก issue : [https://redmine.ochi.link/issues/56309](https://redmine.ochi.link/issues/56309) |
| payment_date | วันที่ตัดเงินจากบัญชีบริษัท | Payment Date จากข้อ 1.แก้ไขจาก issue : [https://redmine.ochi.link/issues/56309](https://redmine.ochi.link/issues/56309) |
| posting_date | วันที่บันทึกบัญชี | บันทึกวันที่ทำรายการ |
| total_transaction | จำนวนรายการรวมสุทธิ | จำนวน transaction แยกตาม event_code |
| total_amount | จำนวนเงินรวมสุทธิ | จำนวน amount แยกตาม event_codeกรณี event_code in ('PM_FIN_01','PM_FIN_02')[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountกรณี event_code = 'PM_FIN_03' - ค่าธรรมเนียมบันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).fee_amount |
| voucher_status | สถานะดำเนินการ | กรณีกลุ่มธุรกรรมเป็น Online Payment [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).transaction_group = 'OP'บันทึก PEA - รออนุมัติกรณีกลุ่มธุรกรรมอื่นๆบันทึก EDP - EDW Processing |
| verify_date | วันและเวลาที่ตรวจสอบ | บันทึกวันและเวลาปัจจุบัน |
| verify_by | ชื่อผู้ตรวจสอบ | บันทึก username ที่ทำรายการ |
| edw_system_key | EDW System Key | System Key จากข้อ 1 |
| event_code | event code ของบัญชี | Event Code จากข้อ 1 |
| created_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |

**3. อัปเดตข้อมูลสถานะระดับ Transaction ที่ตาราง tx_payment_detail**
3. อัปเดตข้อมูลสถานะระดับ Transaction ที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail)
ด้วยเงื่อนไข [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_id = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id

| field | description | mapping data |
|---|---|---|
| status | สถานะ | กรณีสถานะเดิมเป็น REJ,CAN ไม่ต้องอัปเดตสถานะกรณีสถานะเดิมไม่เป็น REJ,CAN ให้อัปเดตสถานะเป็น WAF - รออนุมัติ |
| updated_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| updated_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |

**4. อัปเดตข้อมูลสถานะระดับ Payment Header**
4. อัปเดตข้อมูลสถานะระดับ Payment Header ที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)ด้วยเงื่อนไข [tx_payment_header](/display/RDSCPENH/tx_payment_header).batch_payment_no = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).batch_payment_no = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no
ด้วยเงื่อนไข [tx_payment_header](/display/RDSCPENH/tx_payment_header).id หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).id — updated by patcha 31/03/69 ([issues/60434](https://redmine.ochi.link/issues/60434))

| field | description | mapping |
|---|---|---|
| status | สถานะดำเนินการ | ตรวจสอบการ Split Batch[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก PEA - รออนุมัติ |
| updated_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| updated_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |

**5.insert ข้อมูลที่ตาราง tx_payment_detail_mapping_etl**
5.insert ข้อมูลที่ตาราง [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl)

| field | description | mapping |
|---|---|---|
| Id | id ของ Record auto generate | Running ID |
| payment_dashboard_id | รหัสอ้างอิงข้อมูลตาราง tx_payment_dashboard | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |
| payment_detail_id | รหัสอ้างอิงข้อมูลตาราง tx_payment_detail | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| created_date | วันและเวลาที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |

**6.ส่งข้อมูลเข้า EDW**
6.ส่งข้อมูลเข้า EDW
6.1 ตรวจสอบกลุ่มธุรกรรม
- กรณีเป็นกลุ่มธุรกรรม Online Payment [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group = 'OP' ข้ามการส่งข้อมูลเข้า EDW
- กรณีเป็นกลุ่มธุรกรรมอื่นๆ ให้ดำเนินการข้อถัดไป
6.2 ส่งข้อมูล Process Log (ระดับ Event Code หรือ Voucher) ที่ Process [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงินผลประโยชน์ และรายการไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1284571785)
โดยมี Input ดังนี้ อ้างอิงตาราง [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log)

| filed | mapping data |
|---|---|
| system | fix : PAYMENTMG |
| branch_no | fix : 0001 |
| event_group | fix : EPอ้างอิง [cf_event_group](/display/RDSADW/cf_event_group) |
| event_code | Event Code จากข้อ 1 |
| system_key | System Key จากข้อ 1 |
| payment_date | Payment Date จากข้อ 1 |
| request_payment_date | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date |
| accounting_date | วันที่ปัจจุบัน |
| entry_date | วันที่ปัจจุบัน |
| operation_approved_username | username ที่ทำรายการ |
| operation_approved_fullname | ดึงข้อมูลจาก [msa_nbs_03 ดึงข้อมูล Nbs User](/pages/viewpage.action?pageId=780435778) ตรวจสอบข้อมูล userinputdescriptionConditionusernameusername ผู้ทำรายการusers.username = @usernameoutputDescriptionfullnameชื่อ-นามสกุล |
| input | description | Condition |
| username | username ผู้ทำรายการ | users.username = @username |
| output | Description |
| fullname | ชื่อ-นามสกุล |
| created_date | วันและเวลาปัจจุบัน |
| created_by | username ที่ทำรายการ |

และ output

| field | mapping data |
|---|---|
| edw_process_log_id | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).id |
| dashboard_edw_id | - |

6.3 บันทึกข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) โดยแยกตาม event_code

| ธุรกรรม | [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group |   | Remark |
|---|---|---|---|
| สินไหม | EH | ดึงข้อมูลระดับ Claim ที่ตาราง [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction)where [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idmapping ข้อมูลที่ตาราง1.[tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2.[tx_paymentmg_rider](/display/RDSADW/tx_paymentmg_rider) | updated by patcha.vo 16/06/69 |
| Ctax | EE | ระดับ Tax ที่ตาราง [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction)where [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id | รอ edw ปรับให้รองรับ ctax |
| Deposit | EC | ระดับ Deposit ที่ตาราง [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction)where [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idตรวจสอบ [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).statusstatusmapping dataREJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noYอื่นๆให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN | updated by patcha.vo 30/06/69 |
| status | mapping data |
| REJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุ | ให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noY |
| รายการที่ | deposit_no | deposit_no_flag |
| 1 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_no | N |
| 2 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_no | Y |
| อื่นๆ | ให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN |
| รายการที่ | deposit_no | deposit_no_flag |
| 1 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_no | N |
| อื่นๆ | - | ระดับ Transaction [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)mapping ข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) |   |

6.4 update table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)

| field | description | mapping |
|---|---|---|
| status | สถานะดำเนินการ | PEA - รออนุมัติ |
| updated_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| updated_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |

---

## Hyperlinks บนหน้านี้

- [Initial Data page 2](http://wiki.thaisamut.co.th/display/RDSADW/Initial+Data+page+2)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_service_fee](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee)
- [cf_service_fee](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_service_fee](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee)
- [เงื่อนไขบันทึกบัญชี ค่าธรรมเนียมธนาคาร_17042025](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [https://redmine.ochi.link/issues/56309](https://redmine.ochi.link/issues/56309)
- [https://redmine.ochi.link/issues/56309](https://redmine.ochi.link/issues/56309)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงินผลประโยชน์ และรายการไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571785)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [cf_event_group](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_group)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [msa_nbs_03 ดึงข้อมูล Nbs User](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=780435778)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction)
- [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_paymentmg_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_rider)
- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction)
- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
