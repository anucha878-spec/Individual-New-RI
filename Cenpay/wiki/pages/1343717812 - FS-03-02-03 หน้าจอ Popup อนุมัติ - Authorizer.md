# FS-03-02-03 หน้าจอ Popup อนุมัติ - Authorizer

- **Page ID:** 1343717812
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343717812
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-03 AC ตรวจจ่าย บัญชี > 03-03-02 ตรวจสอบและอนุมัติรายการโอนเงินเข้ากองทุน (10ปี) > FS-03-02-03 หน้าจอ Popup อนุมัติ - Authorizer
- **Depth:** 5

---

### /*<![CDATA[*/ div.rbtoc1784797115570 {padding: 0px;} div.rbtoc1784797115570 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797115570 li {margin-left: 0px;padding-left: 0px;} /*]]>*/ [หน้าจอหลัก](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-หน้าจอหลัก) [Screen Overview](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-ScreenOverview) [วัตถุประสงค์ (Objective)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-วัตถุประสงค์(Objective)) [ผู้ใช้งาน (Target Users)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-ผู้ใช้งาน(TargetUsers)) [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-เงื่อนไขก่อนการทำงาน(Pre-Condition)) [การกระทำกับหน้าจอ (Actions)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-การกระทำกับหน้าจอ(Actions)) [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-เงื่อนไขหลังการทำงาน(Post-Condition)) [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-การจัดการข้อผิดพลาด(ExceptionalHandling)) [ตารางคำอธิบาย](#FS-03-02-03หน้าจอPopupอนุมัติ-Authorizer-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1336082667/image2026-7-17%209%3A27%3A7.png?version=1&modificationDate=1784255228024&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่ออนุมัติรายการโอนเงินเข้ากองทุน 10 ปี

### ผู้ใช้งาน (Target Users)

- ผู้อนุมัติฝ่ายบัญชี (Authorizer)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ผู้อนุมัติฝ่ายบัญชี (Authorizer)

### การกระทำกับหน้าจอ (Actions)

- กดปุ่ม "อนุมัติ" เพื่ออนุมัติรายการโอนเงินเข้ากองทุน 10 ปี

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม อนุมัติ ระบบจะแสดงหน้าจอ Popup ให้ยืนยันการทำรายการ

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อผู้ใช้งานกดปุ่มค้นหา ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| NoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Labelเลขธุรกรรม แสดงข้อมูลเลขธุรกรรม 2Labelจำนวนรายการจ่าย แสดงข้อมูลจำนวนรายการจ่าย 3Labelจำนวนเงินสุทธิ แสดงข้อมูลจำนวนเงินสุทธิ 4ButtonยกเลิกEnable 5ButtonอนุมัติDisableเมื่อกดปุ่ม ระบบจะตรวจสอบรายการเลขธุรกรรมที่เลือกระบบจะตรวจสอบสถานะดำเนินการของเลขธุรกรรมกรณีสถานะดำเนินการเป็น รออนุมัติระบบจะแสดงแจ้งเตือน "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะดำเนินการดังนี้เคลียร์ Checkbox ที่เลือกไว้ ปรับสถานะดำเนินการจากสถานะ รออนุมัติ เปลี่ยนเป็น จ่ายสำเร็จRefresh หน้าจอกรณีสถานะดำเนินการไม่เป็น รออนุมัติระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว"เมื่อกด ตกลง ให้ปิดการแจ้งเตือน และ Refresh หน้าจอ | Component NameComponent TypeEventValidation Rules/ActionData SourceRemark เลขธุรกรรมLabelOn Initial [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).batch_fund_no จำนวนรายการจ่ายLabelOn Initial [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).transection_total จำนวนเงินสุทธิLabelOn Initial [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).transection_paid ** ไม่มีรายการนำเข้าจากประกันภัยกลุ่ม **LabelOn Initial ตรวจสอบข้อมูลจาก [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund).group_claim_flagกรณีข้อมูลเป็น Y : ไม่แสดงข้อความกรณีข้อมูลเป็น N : ให้แสดงข้อความ ** ไม่มีรายการนำเข้าจากประกันภัยกลุ่ม ** ตัวอักษรสีแดง ยกเลิกButtonOn Clickเมื่อกดปุ่มให้ดำเนินการดังนี้ปิดหน้าจอ Popup แล้วกลับสู่ [FS-03-02-01 หน้าจอรายการโอนเงินเข้ากองทุน (10ปี)](/pages/viewpage.action?pageId=1343717808)Refresh หน้าจอด้วยเงื่อนไขการค้นหาเดิม อนุมัติButtonOn Initialอ้างอิงเงื่อนไขตาม Visible และ Invisible Visibleแสดงปุ่มเฉพาะสถานะดำเนินการเป็น "รออนุมัติ" เท่านั้น Invisibleซ่อนปุ่มเมื่อสถานะดำเนินการไม่เป็น "รออนุมัติ" On Clickเมื่อกดปุ่มให้ดำเนินการดังนี้บันทึกข้อมูลในระบบ และเปลี่ยนสถานะรายการเป็น "จ่ายสำเร็จ"**การบันทึกข้อมูล** บันทึกข้อมูลเข้าสู่ EDW**การบันทึกข้อมูล : ผลการตรวจสอบ** **Step 4.1 :** ระบบจะส่งข้อมูลเข้า EDW 4.1.1 ตรวจสอบรายการตาม Event Code ภายใต้ Batch (อ้างอิง Event Code จาก [Initial Data page 2](/display/RDSADW/Initial+Data+page+2))Mapping ข้อมูลevent_codeevent_code_nameRemarkตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯCP_ACC_13ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ 4.1.2 สร้าง System Key โดย Format ของ System_key คือ eventCode_{batch_payment_no}_{วันที่เวลาส่งข้อมูลyyyyMMddHHmmss}ตัวอย่างเช่น PM_FIN_01_B25680901001_202509151401594.1.3 ส่งข้อมูล Process Log (ระดับ Event Code หรือ Voucher) ที่ Process: [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงิน, รายการไม่ผ่านตรวจสอบ และค่าธรรมเนียมธนาคาร](/pages/viewpage.action?pageId=1284571785)โดยมี Input ดังนี้ อ้างอิงตาราง [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log)filedmapping datasystemfix : PAYMENTMGbranch_nofix : 0001event_groupfix : EPอ้างอิง [cf_event_group](/display/RDSADW/cf_event_group)event_codeEvent Code จากข้อ 6.1.1system_keySystem Key จากข้อ 6.1.2payment_date[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_daterequest_payment_date[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_dateaccounting_dateวันที่ปัจจุบันentry_dateวันที่ปัจจุบันoperation_approved_usernameusername ที่ทำรายการoperation_approved_fullnameดึงข้อมูลจาก [msa_nbs_03 ดึงข้อมูล Nbs User](/pages/viewpage.action?pageId=780435778) ตรวจสอบข้อมูล userinputdescriptionConditionusernameusername ผู้ทำรายการusers.username = @usernameoutputDescriptionfullnameชื่อ-นามสกุลcreated_dateวันและเวลาปัจจุบันcreated_byusername ที่ทำรายการและ outputfieldmapping dataedw_process_log_id[tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).iddashboard_edw_id-4.1.4 บันทึกข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) (ระดับ Transaction) โดยแยกตาม event_codeธุรกรรม[tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group RemarkสินไหมEHดึงข้อมูลระดับ Claim ที่ตาราง [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction)where [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idmapping ข้อมูลที่ตาราง1.[tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2.[tx_paymentmg_rider](/display/RDSADW/tx_paymentmg_rider)updated by patcha.vo 16/06/69CtaxEEระดับ Tax ที่ตาราง [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction)where [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idรอ edw ปรับให้รองรับ ctaxDepositECระดับ Deposit ที่ตาราง [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction)where [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idตรวจสอบ [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).statusstatusmapping dataREJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noYอื่นๆให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noNupdated by patcha.vo 30/06/69อื่นๆ-ระดับ Transaction [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)mapping ข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) **Step 4.2** : บันทึกข้อมูลเข้าสู่ตารางที่เกี่ยวข้องดังนี้4.2.1 บันทึกข้อมูลที่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)ตรวจสอบ event_code จาก **Step 4.1.1** ให้สร้างรายการตามจำนวน event_codefielddescriptionmapping databatch_payment_idรหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).idapproved_typeประเภทการอนุมัติบันทึกเป็น อนุมัติจ่ายและบันทึกบัญชีpayment_channelช่องทางการจ่าย[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channelbatch_payment_typeประเภทการจ่าย[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_typeserviceService (Format ธนาคาร)[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_codebank_account_noเลขที่บัญชี[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description where[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000'request_payment_dateวันที่ Request จ่ายเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_datepaid_dateวันที่จ่ายเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_dateposting_dateวันที่บันทึกบัญชีบันทึกวันที่ปัจจุบันtotal_transactionจำนวนรายการรวมสุทธิจำนวน transaction แยกตาม event_codetotal_amountจำนวนเงินรวมสุทธิ[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountจำนวน amount แยกตาม event_codevoucher_statusสถานะดำเนินการกรณีกลุ่มธุรกรรมเป็น Online Payment [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).transaction_group = 'OP'บันทึก PEA - รออนุมัติกรณีกลุ่มธุรกรรมอื่นๆบันทึก EDP - EDW Processingverify_dateวันและเวลาที่ตรวจสอบบันทึกวันและเวลาปัจจุบันverify_byชื่อผู้ตรวจสอบบันทึก username ที่ทำรายการedw_system_keyEDW System Keyได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.2**event_codeevent code ของบัญชีได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.1**created_dateวันและเวลาที่แก้ไขบันทึกวันและเวลาปัจจุบันcreated_byผู้แก้ไขบันทึก username ที่ทำรายการ4.2.3 อัปเดตข้อมูลสถานะระดับ Payment Header ที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)ด้วยเงื่อนไข [tx_payment_header](/display/RDSCPENH/tx_payment_header).id หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).id — updated by patcha 31/03/69 ([issues/60434](https://redmine.ochi.link/issues/60434))fielddescriptionmappingRemarkstatusสถานะดำเนินการตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APUตรวจสอบการ Split Batch[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก PEA - รออนุมัติ updated by patcha.vo 25/06/69updated_dateวันและเวลาที่แก้ไขบันทึกวันและเวลาปัจจุบัน updated_byผู้แก้ไขบันทึก username ที่ทำรายการ 4.2.3 อัปเดตข้อมูลสถานะระดับ Batch Payment ที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)และตาราง [lg_batch_status](/display/RDSCPENH/lg_batch_status)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingRemarkbatch_payment_no@batch ที่กำลังดำเนินการ incorrect_transactionจำนวนรายการรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก incorrect_amountจำนวนเงินรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก net_transactionจำนวนรายการรวมสุทธิ (total_transaction - incorrect_transaction) net_amountจำนวนเงินรวมสุทธิ (total_amount - incorrect_amount) batch_statusตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APU Fix : 'PEA' - รออนุมัติupdated by patcha.vo 25/06/69checker_dateวันและเวลาที่แก้ไขรายการ checker_byUsername ผู้แก้ไขรายการ updated_dateวันและเวลาที่แก้ไขรายการ updated_byUsername ผู้แก้ไขรายการ 4.2.4 บันทึกข้อมูลที่ตาราง [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl)fielddescriptionmappingIdid ของ Record auto generateRunning IDpayment_dashboard_idรหัสอ้างอิงข้อมูลตาราง tx_payment_dashboard[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).idpayment_detail_idรหัสอ้างอิงข้อมูลตาราง tx_payment_detail[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idcreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก username ที่ทำรายการ บันทึกข้อมูล SUN BookingUpdate ข้อมูลในตาราง [Landing ข้อมูลเข้าสู่หน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์](/pages/viewpage.action?pageId=1354662663) โดยเงื่อนไขดังนี้**การบันทึกข้อมูล** Mapping Data เพื่อแสดงในหน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์ Mapping****[tx_payment_account](/display/RDSCPENH/tx_payment_account)****TableFieldConditionNameData TypeDescriptionExampleMandatory (Y/N)Remark Data Config : Msun_pathVarcharSun Path A หรือ MY Data Config : CenpaysystemVarcharระบบงานCenpayY [cf_list_of_value](/display/RDSCP/Table+%3A+cf_list_of_value)namevalue = 'IF10Y'payment_typeVarcharกลุ่มธุรกรรมย่อยAPUYCode รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)batch_fund_no approve_batch_noVarcharเลขที่ Batch ปฎิบัติการ Y ref_approve_batch_noVarcharเลขที่ Batch ปฎิบัติการ (อ้างอิง) **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_date entry_dateDateวันที่อนุมัติ 2 ของฝ่ายปฎิบัติการ2025-09-04Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_name approverVarcharผู้อนุมัติรายการ Y [Table : ms_status](/display/RDSCP/Table+%3A+ms_status) status_code = 'COR'batch_statusVarcharสถานะการทำรายการ (Batch Level)ICAYCode สถานะทำรายการ (Batch Level) 3 ตำแหน่ง อ้างอิง XXX reconcile_statusVarcharสถานะ ReconcileSYCode สถานะ Reconcile 1 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_total number_of_recordNumericจำนวนรายการ1Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid total_amountNumericจำนวนเงิน Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)payment_channel_codeTBpayment_channel_codeVarcharช่องทางการจ่ายเงินTBY payment_due_dateDateวันครบกำหนดชำระเงิน2025-09-04**N**ปรับเป็น Nullable[tx_batch_fund](/display/RDSCPENH/tx_batch_fund)request_payment_date request_payment_dateDateวันที่จ่ายเงิน2025-09-04Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_reference_no reference_numberVarcharReference Number EDW Y source_reference_numberVarcharReference Number EDW กรณี Reverse Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_date transaction_dateDateวันที่รายการลงบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_date account_approve_dateTimestampวันเวลาที่อนุมัติ2025-06-30 14:30:45Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_name account_approverVarcharผู้อนุมัติบันทึกบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)batch_status account_approve_statusVarcharสถานะอนุมัติรายการWAVYCode สถานะอนุมัติรายการ (บัญชี) 3 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)posting_date posting_dateDatePosting Date Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid dr_amountNumericDr. Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid cr_amountNumericCr. Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid source_amountNumericยอดเงินที่ได้จากข้อมูลปฎิบัติการ Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid edw_amountNumericยอดเงินที่ได้จากทางบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)event_code[cf_event_code](/display/RDSADW/cf_event_code).event_code = 'CP_ACC_13'event_codeVarcharรหัสธุรกรรม Y account_typeVarcharประเภท Reverseใส่ Reverse สำหรับรายการ Reverse**N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_system_key edw_system_keyVarcharข้อมูล Unique ของรายการธุรกรรมที่นำเข้า **N** content_idVarcharid อ้างอิงการเปิด Sun Booking **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)dashboard_edw_id edw_dashboard_idInt8Dashboard ID สำหรับอ้างที่ระบบ EDW **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)sun_status sun_statusVarcharสถานะส่ง SUNSUCCESS**N** edw_statusVarcharสถานะระบบ EDWWAIT_SENDTOADW**N** edw_content_idVarcharid อ้างอิงการเปิด EDW Booking **N** Mapping Data เพื่อแสดงข้อมูลในหน้าจอ Support Booking |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | เลขธุรกรรม |   | แสดงข้อมูลเลขธุรกรรม |   |   |
| 2 | Label | จำนวนรายการจ่าย |   | แสดงข้อมูลจำนวนรายการจ่าย |   |   |
| 3 | Label | จำนวนเงินสุทธิ |   | แสดงข้อมูลจำนวนเงินสุทธิ |   |   |
| 4 | Button | ยกเลิก | Enable |   |   |   |
| 5 | Button | อนุมัติ | Disable | เมื่อกดปุ่ม ระบบจะตรวจสอบรายการเลขธุรกรรมที่เลือกระบบจะตรวจสอบสถานะดำเนินการของเลขธุรกรรมกรณีสถานะดำเนินการเป็น รออนุมัติระบบจะแสดงแจ้งเตือน "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะดำเนินการดังนี้เคลียร์ Checkbox ที่เลือกไว้ ปรับสถานะดำเนินการจากสถานะ รออนุมัติ เปลี่ยนเป็น จ่ายสำเร็จRefresh หน้าจอกรณีสถานะดำเนินการไม่เป็น รออนุมัติระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว"เมื่อกด ตกลง ให้ปิดการแจ้งเตือน และ Refresh หน้าจอ |   |   |
| Component Name | Component Type | Event | Validation Rules/Action | Data Source | Remark |
| เลขธุรกรรม | Label | On Initial |   | [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).batch_fund_no |   |
| จำนวนรายการจ่าย | Label | On Initial |   | [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).transection_total |   |
| จำนวนเงินสุทธิ | Label | On Initial |   | [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).transection_paid |   |
| ** ไม่มีรายการนำเข้าจากประกันภัยกลุ่ม ** | Label | On Initial |   | ตรวจสอบข้อมูลจาก [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund).group_claim_flagกรณีข้อมูลเป็น Y : ไม่แสดงข้อความกรณีข้อมูลเป็น N : ให้แสดงข้อความ ** ไม่มีรายการนำเข้าจากประกันภัยกลุ่ม ** ตัวอักษรสีแดง |   |
| ยกเลิก | Button | On Click | เมื่อกดปุ่มให้ดำเนินการดังนี้ปิดหน้าจอ Popup แล้วกลับสู่ [FS-03-02-01 หน้าจอรายการโอนเงินเข้ากองทุน (10ปี)](/pages/viewpage.action?pageId=1343717808)Refresh หน้าจอด้วยเงื่อนไขการค้นหาเดิม |   |   |
| อนุมัติ | Button | On Initial | อ้างอิงเงื่อนไขตาม Visible และ Invisible |   |   |
|   |   | Visible | แสดงปุ่มเฉพาะสถานะดำเนินการเป็น "รออนุมัติ" เท่านั้น |   |   |
|   |   | Invisible | ซ่อนปุ่มเมื่อสถานะดำเนินการไม่เป็น "รออนุมัติ" |   |   |
|   |   | On Click | เมื่อกดปุ่มให้ดำเนินการดังนี้บันทึกข้อมูลในระบบ และเปลี่ยนสถานะรายการเป็น "จ่ายสำเร็จ" | **การบันทึกข้อมูล** บันทึกข้อมูลเข้าสู่ EDW**การบันทึกข้อมูล : ผลการตรวจสอบ** **Step 4.1 :** ระบบจะส่งข้อมูลเข้า EDW 4.1.1 ตรวจสอบรายการตาม Event Code ภายใต้ Batch (อ้างอิง Event Code จาก [Initial Data page 2](/display/RDSADW/Initial+Data+page+2))Mapping ข้อมูลevent_codeevent_code_nameRemarkตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯCP_ACC_13ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ 4.1.2 สร้าง System Key โดย Format ของ System_key คือ eventCode_{batch_payment_no}_{วันที่เวลาส่งข้อมูลyyyyMMddHHmmss}ตัวอย่างเช่น PM_FIN_01_B25680901001_202509151401594.1.3 ส่งข้อมูล Process Log (ระดับ Event Code หรือ Voucher) ที่ Process: [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงิน, รายการไม่ผ่านตรวจสอบ และค่าธรรมเนียมธนาคาร](/pages/viewpage.action?pageId=1284571785)โดยมี Input ดังนี้ อ้างอิงตาราง [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log)filedmapping datasystemfix : PAYMENTMGbranch_nofix : 0001event_groupfix : EPอ้างอิง [cf_event_group](/display/RDSADW/cf_event_group)event_codeEvent Code จากข้อ 6.1.1system_keySystem Key จากข้อ 6.1.2payment_date[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_daterequest_payment_date[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_dateaccounting_dateวันที่ปัจจุบันentry_dateวันที่ปัจจุบันoperation_approved_usernameusername ที่ทำรายการoperation_approved_fullnameดึงข้อมูลจาก [msa_nbs_03 ดึงข้อมูล Nbs User](/pages/viewpage.action?pageId=780435778) ตรวจสอบข้อมูล userinputdescriptionConditionusernameusername ผู้ทำรายการusers.username = @usernameoutputDescriptionfullnameชื่อ-นามสกุลcreated_dateวันและเวลาปัจจุบันcreated_byusername ที่ทำรายการและ outputfieldmapping dataedw_process_log_id[tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).iddashboard_edw_id-4.1.4 บันทึกข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) (ระดับ Transaction) โดยแยกตาม event_codeธุรกรรม[tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group RemarkสินไหมEHดึงข้อมูลระดับ Claim ที่ตาราง [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction)where [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idmapping ข้อมูลที่ตาราง1.[tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2.[tx_paymentmg_rider](/display/RDSADW/tx_paymentmg_rider)updated by patcha.vo 16/06/69CtaxEEระดับ Tax ที่ตาราง [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction)where [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idรอ edw ปรับให้รองรับ ctaxDepositECระดับ Deposit ที่ตาราง [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction)where [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idตรวจสอบ [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).statusstatusmapping dataREJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noYอื่นๆให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noNupdated by patcha.vo 30/06/69อื่นๆ-ระดับ Transaction [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)mapping ข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) **Step 4.2** : บันทึกข้อมูลเข้าสู่ตารางที่เกี่ยวข้องดังนี้4.2.1 บันทึกข้อมูลที่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)ตรวจสอบ event_code จาก **Step 4.1.1** ให้สร้างรายการตามจำนวน event_codefielddescriptionmapping databatch_payment_idรหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).idapproved_typeประเภทการอนุมัติบันทึกเป็น อนุมัติจ่ายและบันทึกบัญชีpayment_channelช่องทางการจ่าย[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channelbatch_payment_typeประเภทการจ่าย[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_typeserviceService (Format ธนาคาร)[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_codebank_account_noเลขที่บัญชี[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description where[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000'request_payment_dateวันที่ Request จ่ายเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_datepaid_dateวันที่จ่ายเงิน[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_dateposting_dateวันที่บันทึกบัญชีบันทึกวันที่ปัจจุบันtotal_transactionจำนวนรายการรวมสุทธิจำนวน transaction แยกตาม event_codetotal_amountจำนวนเงินรวมสุทธิ[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountจำนวน amount แยกตาม event_codevoucher_statusสถานะดำเนินการกรณีกลุ่มธุรกรรมเป็น Online Payment [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).transaction_group = 'OP'บันทึก PEA - รออนุมัติกรณีกลุ่มธุรกรรมอื่นๆบันทึก EDP - EDW Processingverify_dateวันและเวลาที่ตรวจสอบบันทึกวันและเวลาปัจจุบันverify_byชื่อผู้ตรวจสอบบันทึก username ที่ทำรายการedw_system_keyEDW System Keyได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.2**event_codeevent code ของบัญชีได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.1**created_dateวันและเวลาที่แก้ไขบันทึกวันและเวลาปัจจุบันcreated_byผู้แก้ไขบันทึก username ที่ทำรายการ4.2.3 อัปเดตข้อมูลสถานะระดับ Payment Header ที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)ด้วยเงื่อนไข [tx_payment_header](/display/RDSCPENH/tx_payment_header).id หรือ [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).id — updated by patcha 31/03/69 ([issues/60434](https://redmine.ochi.link/issues/60434))fielddescriptionmappingRemarkstatusสถานะดำเนินการตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APUตรวจสอบการ Split Batch[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก PEA - รออนุมัติ updated by patcha.vo 25/06/69updated_dateวันและเวลาที่แก้ไขบันทึกวันและเวลาปัจจุบัน updated_byผู้แก้ไขบันทึก username ที่ทำรายการ 4.2.3 อัปเดตข้อมูลสถานะระดับ Batch Payment ที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)และตาราง [lg_batch_status](/display/RDSCPENH/lg_batch_status)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingRemarkbatch_payment_no@batch ที่กำลังดำเนินการ incorrect_transactionจำนวนรายการรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก incorrect_amountจำนวนเงินรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก net_transactionจำนวนรายการรวมสุทธิ (total_transaction - incorrect_transaction) net_amountจำนวนเงินรวมสุทธิ (total_amount - incorrect_amount) batch_statusตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APU Fix : 'PEA' - รออนุมัติupdated by patcha.vo 25/06/69checker_dateวันและเวลาที่แก้ไขรายการ checker_byUsername ผู้แก้ไขรายการ updated_dateวันและเวลาที่แก้ไขรายการ updated_byUsername ผู้แก้ไขรายการ 4.2.4 บันทึกข้อมูลที่ตาราง [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl)fielddescriptionmappingIdid ของ Record auto generateRunning IDpayment_dashboard_idรหัสอ้างอิงข้อมูลตาราง tx_payment_dashboard[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).idpayment_detail_idรหัสอ้างอิงข้อมูลตาราง tx_payment_detail[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idcreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก username ที่ทำรายการ บันทึกข้อมูล SUN BookingUpdate ข้อมูลในตาราง [Landing ข้อมูลเข้าสู่หน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์](/pages/viewpage.action?pageId=1354662663) โดยเงื่อนไขดังนี้**การบันทึกข้อมูล** Mapping Data เพื่อแสดงในหน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์ Mapping****[tx_payment_account](/display/RDSCPENH/tx_payment_account)****TableFieldConditionNameData TypeDescriptionExampleMandatory (Y/N)Remark Data Config : Msun_pathVarcharSun Path A หรือ MY Data Config : CenpaysystemVarcharระบบงานCenpayY [cf_list_of_value](/display/RDSCP/Table+%3A+cf_list_of_value)namevalue = 'IF10Y'payment_typeVarcharกลุ่มธุรกรรมย่อยAPUYCode รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)batch_fund_no approve_batch_noVarcharเลขที่ Batch ปฎิบัติการ Y ref_approve_batch_noVarcharเลขที่ Batch ปฎิบัติการ (อ้างอิง) **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_date entry_dateDateวันที่อนุมัติ 2 ของฝ่ายปฎิบัติการ2025-09-04Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_name approverVarcharผู้อนุมัติรายการ Y [Table : ms_status](/display/RDSCP/Table+%3A+ms_status) status_code = 'COR'batch_statusVarcharสถานะการทำรายการ (Batch Level)ICAYCode สถานะทำรายการ (Batch Level) 3 ตำแหน่ง อ้างอิง XXX reconcile_statusVarcharสถานะ ReconcileSYCode สถานะ Reconcile 1 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_total number_of_recordNumericจำนวนรายการ1Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid total_amountNumericจำนวนเงิน Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)payment_channel_codeTBpayment_channel_codeVarcharช่องทางการจ่ายเงินTBY payment_due_dateDateวันครบกำหนดชำระเงิน2025-09-04**N**ปรับเป็น Nullable[tx_batch_fund](/display/RDSCPENH/tx_batch_fund)request_payment_date request_payment_dateDateวันที่จ่ายเงิน2025-09-04Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_reference_no reference_numberVarcharReference Number EDW Y source_reference_numberVarcharReference Number EDW กรณี Reverse Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_date transaction_dateDateวันที่รายการลงบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_date account_approve_dateTimestampวันเวลาที่อนุมัติ2025-06-30 14:30:45Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)authorizer_name account_approverVarcharผู้อนุมัติบันทึกบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)batch_status account_approve_statusVarcharสถานะอนุมัติรายการWAVYCode สถานะอนุมัติรายการ (บัญชี) 3 ตำแหน่ง อ้างอิง XXX [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)posting_date posting_dateDatePosting Date Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid dr_amountNumericDr. Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid cr_amountNumericCr. Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid source_amountNumericยอดเงินที่ได้จากข้อมูลปฎิบัติการ Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)transection_paid edw_amountNumericยอดเงินที่ได้จากทางบัญชี Y [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)event_code[cf_event_code](/display/RDSADW/cf_event_code).event_code = 'CP_ACC_13'event_codeVarcharรหัสธุรกรรม Y account_typeVarcharประเภท Reverseใส่ Reverse สำหรับรายการ Reverse**N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)edw_system_key edw_system_keyVarcharข้อมูล Unique ของรายการธุรกรรมที่นำเข้า **N** content_idVarcharid อ้างอิงการเปิด Sun Booking **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)dashboard_edw_id edw_dashboard_idInt8Dashboard ID สำหรับอ้างที่ระบบ EDW **N** [tx_batch_fund](/display/RDSCPENH/tx_batch_fund)sun_status sun_statusVarcharสถานะส่ง SUNSUCCESS**N** edw_statusVarcharสถานะระบบ EDWWAIT_SENDTOADW**N** edw_content_idVarcharid อ้างอิงการเปิด EDW Booking **N** Mapping Data เพื่อแสดงข้อมูลในหน้าจอ Support Booking |   |
| Mapping ข้อมูล | event_code | event_code_name | Remark |
| ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ | CP_ACC_13 | ตั้งจ่าย โอนเงินเกิน 10 ปีเข้ากองทุนฯ |   |
| filed | mapping data |
| system | fix : PAYMENTMG |
| branch_no | fix : 0001 |
| event_group | fix : EPอ้างอิง [cf_event_group](/display/RDSADW/cf_event_group) |
| event_code | Event Code จากข้อ 6.1.1 |
| system_key | System Key จากข้อ 6.1.2 |
| payment_date | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date |
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
| field | mapping data |
| edw_process_log_id | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).id |
| dashboard_edw_id | - |
| ธุรกรรม | [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group |   | Remark |
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
| field | description | mapping data |
| batch_payment_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id |
| approved_type | ประเภทการอนุมัติ | บันทึกเป็น อนุมัติจ่ายและบันทึกบัญชี |
| payment_channel | ช่องทางการจ่าย | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channel |
| batch_payment_type | ประเภทการจ่าย | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_type |
| service | Service (Format ธนาคาร) | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_code |
| bank_account_no | เลขที่บัญชี | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description where[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' |
| request_payment_date | วันที่ Request จ่ายเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_date |
| paid_date | วันที่จ่ายเงิน | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_date |
| posting_date | วันที่บันทึกบัญชี | บันทึกวันที่ปัจจุบัน |
| total_transaction | จำนวนรายการรวมสุทธิ | จำนวน transaction แยกตาม event_code |
| total_amount | จำนวนเงินรวมสุทธิ | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountจำนวน amount แยกตาม event_code |
| voucher_status | สถานะดำเนินการ | กรณีกลุ่มธุรกรรมเป็น Online Payment [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).transaction_group = 'OP'บันทึก PEA - รออนุมัติกรณีกลุ่มธุรกรรมอื่นๆบันทึก EDP - EDW Processing |
| verify_date | วันและเวลาที่ตรวจสอบ | บันทึกวันและเวลาปัจจุบัน |
| verify_by | ชื่อผู้ตรวจสอบ | บันทึก username ที่ทำรายการ |
| edw_system_key | EDW System Key | ได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.2** |
| event_code | event code ของบัญชี | ได้จาก input ของ process ส่งข้อมูลเข้า edw **Step 4.1.1** |
| created_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |
| field | description | mapping | Remark |
| status | สถานะดำเนินการ | ตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APUตรวจสอบการ Split Batch[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก PEA - รออนุมัติ | updated by patcha.vo 25/06/69 |
| ตรวจสอบ | Condition |
| กรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan) | Fix : 'UNP' จ่ายไม่สำเร็จ |
| กรณีไม่มีข้อมูลที่ lookup เช่น APU | ตรวจสอบการ Split Batch[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก PEA - รออนุมัติ |
| updated_date | วันและเวลาที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |   |
| updated_by | ผู้แก้ไข | บันทึก username ที่ทำรายการ |   |
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) |
| Field | Mapping | Remark |
| batch_payment_no | @batch ที่กำลังดำเนินการ |   |
| incorrect_transaction | จำนวนรายการรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก |   |
| incorrect_amount | จำนวนเงินรวมที่ไม่ถูกต้อง/รายการที่ยกเลิก |   |
| net_transaction | จำนวนรายการรวมสุทธิ (total_transaction - incorrect_transaction) |   |
| net_amount | จำนวนเงินรวมสุทธิ (total_amount - incorrect_amount) |   |
| batch_status | ตรวจสอบ Transaction ที่ไม่สร้าง Voucher จ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = PM_FIN_01 [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_type [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 71000ตรวจสอบConditionกรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan)Fix : 'UNP' จ่ายไม่สำเร็จกรณีไม่มีข้อมูลที่ lookup เช่น APU Fix : 'PEA' - รออนุมัติ | updated by patcha.vo 25/06/69 |
| ตรวจสอบ | Condition |
| กรณีมีข้อมูลที่ lookup เช่น NLO,NLN (New loan) | Fix : 'UNP' จ่ายไม่สำเร็จ |
| กรณีไม่มีข้อมูลที่ lookup เช่น APU | Fix : 'PEA' - รออนุมัติ |
| checker_date | วันและเวลาที่แก้ไขรายการ |   |
| checker_by | Username ผู้แก้ไขรายการ |   |
| updated_date | วันและเวลาที่แก้ไขรายการ |   |
| updated_by | Username ผู้แก้ไขรายการ |   |
| field | description | mapping |
| Id | id ของ Record auto generate | Running ID |
| payment_dashboard_id | รหัสอ้างอิงข้อมูลตาราง tx_payment_dashboard | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |
| payment_detail_id | รหัสอ้างอิงข้อมูลตาราง tx_payment_detail | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| created_date | วันและเวลาที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |
| Mapping | ****[tx_payment_account](/display/RDSCPENH/tx_payment_account)**** |
| Table | Field | Condition | Name | Data Type | Description | Example | Mandatory (Y/N) | Remark |
|   |   | Data Config : M | sun_path | Varchar | Sun Path | A หรือ M | Y |   |
|   |   | Data Config : Cenpay | system | Varchar | ระบบงาน | Cenpay | Y |   |
| [cf_list_of_value](/display/RDSCP/Table+%3A+cf_list_of_value) | name | value = 'IF10Y' | payment_type | Varchar | กลุ่มธุรกรรมย่อย | APU | Y | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | batch_fund_no |   | approve_batch_no | Varchar | เลขที่ Batch ปฎิบัติการ |   | Y |   |
|   |   |   | ref_approve_batch_no | Varchar | เลขที่ Batch ปฎิบัติการ (อ้างอิง) |   | **N** |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | authorizer_date |   | entry_date | Date | วันที่อนุมัติ 2 ของฝ่ายปฎิบัติการ | 2025-09-04 | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | authorizer_name |   | approver | Varchar | ผู้อนุมัติรายการ |   | Y |   |
| [Table : ms_status](/display/RDSCP/Table+%3A+ms_status) |   | status_code = 'COR' | batch_status | Varchar | สถานะการทำรายการ (Batch Level) | ICA | Y | Code สถานะทำรายการ (Batch Level) 3 ตำแหน่ง อ้างอิง XXX |
|   |   |   | reconcile_status | Varchar | สถานะ Reconcile | S | Y | Code สถานะ Reconcile 1 ตำแหน่ง อ้างอิง XXX |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_total |   | number_of_record | Numeric | จำนวนรายการ | 1 | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_paid |   | total_amount | Numeric | จำนวนเงิน |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | payment_channel_code | TB | payment_channel_code | Varchar | ช่องทางการจ่ายเงิน | TB | Y |   |
|   |   |   | payment_due_date | Date | วันครบกำหนดชำระเงิน | 2025-09-04 | **N** | ปรับเป็น Nullable |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | request_payment_date |   | request_payment_date | Date | วันที่จ่ายเงิน | 2025-09-04 | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | edw_reference_no |   | reference_number | Varchar | Reference Number EDW |   | Y |   |
|   |   |   | source_reference_number | Varchar | Reference Number EDW กรณี Reverse |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | edw_date |   | transaction_date | Date | วันที่รายการลงบัญชี |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | authorizer_date |   | account_approve_date | Timestamp | วันเวลาที่อนุมัติ | 2025-06-30 14:30:45 | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | authorizer_name |   | account_approver | Varchar | ผู้อนุมัติบันทึกบัญชี |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | batch_status |   | account_approve_status | Varchar | สถานะอนุมัติรายการ | WAV | Y | Code สถานะอนุมัติรายการ (บัญชี) 3 ตำแหน่ง อ้างอิง XXX |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | posting_date |   | posting_date | Date | Posting Date |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_paid |   | dr_amount | Numeric | Dr. |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_paid |   | cr_amount | Numeric | Cr. |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_paid |   | source_amount | Numeric | ยอดเงินที่ได้จากข้อมูลปฎิบัติการ |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | transection_paid |   | edw_amount | Numeric | ยอดเงินที่ได้จากทางบัญชี |   | Y |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | event_code | [cf_event_code](/display/RDSADW/cf_event_code).event_code = 'CP_ACC_13' | event_code | Varchar | รหัสธุรกรรม |   | Y |   |
|   |   |   | account_type | Varchar | ประเภท Reverse | ใส่ Reverse สำหรับรายการ Reverse | **N** |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | edw_system_key |   | edw_system_key | Varchar | ข้อมูล Unique ของรายการธุรกรรมที่นำเข้า |   | **N** |   |
|   |   |   | content_id | Varchar | id อ้างอิงการเปิด Sun Booking |   | **N** |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | dashboard_edw_id |   | edw_dashboard_id | Int8 | Dashboard ID สำหรับอ้างที่ระบบ EDW |   | **N** |   |
| [tx_batch_fund](/display/RDSCPENH/tx_batch_fund) | sun_status |   | sun_status | Varchar | สถานะส่ง SUN | SUCCESS | **N** |   |
|   |   |   | edw_status | Varchar | สถานะระบบ EDW | WAIT_SENDTOADW | **N** |   |
|   |   |   | edw_content_id | Varchar | id อ้างอิงการเปิด EDW Booking |   | **N** |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [FS-03-02-01 หน้าจอรายการโอนเงินเข้ากองทุน (10ปี)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343717808)
- [Initial Data page 2](http://wiki.thaisamut.co.th/display/RDSADW/Initial+Data+page+2)
- [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงิน, รายการไม่ผ่านตรวจสอบ และค่าธรรมเนียมธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571785)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [cf_event_group](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_group)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
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
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [Landing ข้อมูลเข้าสู่หน้าจอตรวจจ่าย/อนุมัติจ่ายเงินผลประโยชน์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1354662663)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [Table : ms_status](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+ms_status)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [cf_event_code](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_code)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1336082667/image2026-7-17%209%3A27%3A7.png?version=1&modificationDate=1784255228024&api=v2
