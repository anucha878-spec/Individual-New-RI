# PM_BH_006 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)

- **Page ID:** 1344700752
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1344700752
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-99 กระบวนการ Batch > PM_BH_006 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)
- **Depth:** 5

---

## TOC

[ [TOC](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-TOC) ] [ [Objectives](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-Objectives) ] [ [Process Overview](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-ProcessOverview) ] [ [Pre-conditions](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-Pre-conditions) ] [ [Process Description](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-ProcessDescription) ] [ [Post-conditions & Error Handling](#PM_BH_006Batchส่งข้อมูลเข้าEDWบันทึกค่าธรรมเนียมธนาคารAPIPayment(รายวัน)-Post-conditions&ErrorHandling) ]

# Objectives

- `เพื่อสร้าง Voucher จ่ายค่าธรรมเนียมของรายการ API Payment`

# Process Overview

- `Batch Process นี้จะทำงานทุกวันเวลา 22:00 น.`
- นำ Transaction ของค่าธรรมเนียมของ API ส่งเข้า EDW โดยจัดกลุ่มตามธนาคาร อ้างอิง[เงื่อนไขบันทึกบัญชี ค่าธรรมเนียมธนาคาร](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193)

# Pre-conditions

- `ต้องมีรายการ Transaction ของการจ่าย API Payment ที่เป็นวันที่จ่ายวันปัจจุบัน และสถานะการจ่ายเป็นจ่ายสำเร็จ`
- `Batch สามารถเชื่อมต่อกับฐานข้อมูลของระบบ Payment Management และสามารถเรียกใช้งาน Web Service ของ EDW ได้`

# Process Description

1. ``ตรวจสอบข้อมูล Transaction ที่``วันที่จ่าย Paid Date เป็นวันปัจจุบัน และสถานะรายการของ Transaction มีสถานะเป็นจ่ายสำเร็จ
  1. กรณีไม่ใช่การซ่อมข้อมูล วันที่ประมวลผลจะเป็นวันที่ปัจจุบัน
  2. กรณีมีการซ่อมข้อมูล วันที่ประมวลผล จะรับ Input วันที่ให้แทนวันที่ปัจจุบัน
  3. เงื่อนไขดังนี้TableCondition[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date = @วันที่ประมวลผล [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_type = 'A' --update by patcha.vo 01/07/69 [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status = PAI
2. ส่งข้อมูล Process Log (ระดับ Event Code หรือ Voucher) ที่ Process [02_62_04 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม บันทึกค่าธรรมเนียมธนาคาร (ตามรอบที่ธนาคารตัดเงิน)](/pages/viewpage.action?pageId=1285881936)
  1. กำหนดข้อมูลข้อมูล @owner_usernameดึงข้อมูลจาก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'OWNER' and [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '10000'@owner_fullnameดึงข้อมูลจาก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'OWNER' and [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '10000@bank_noบันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code --update by patcha.vo 01/07/69 and [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' - Bank Account ของ บริษัท
  2. โดยมี Input ดังนี้ อ้างอิงตาราง [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)systemmapping databranchNoFix : 0001entryDateวันที่ประมวลผลsystemFix : PAYMENTMGeventCodeFix : PM_FIN_03mappingBeginDateวันที่ประมวลผลsystemKeyสร้าง System Key โดย Format ของ System_key คือ eventCode_API_{วันที่เวลาส่งข้อมูลyyyyMMddHHmmss}ตัวอย่างเช่น PM_FIN_03_API_20250915140159userLoginName@owner_usernameaccountingDateวันที่ประมวลผลoperationApprovedUsername@owner_usernameoperationApprovedFullName@owner_fullnameoperationApprovedDateวันที่ประมวลผลpaymentDateวันที่ประมวลผลrequestPaymentDateวันที่ประมวลผล
  3. บันทึกข้อมูลที่ตาราง [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction) (ระดับ Transaction) ทุกรายการตามเงื่อนไขข้อ 2.
    1. อัปเดต field ดังนี้fieldmapping dataedw_fee_flag Fix : Ycompany_bank_code @bank_no *กรณี API มีเงื่อนไขการ fix เลขบัญชีธนาคาร เนื่องจากทดสอบต้องใช้เลขบัญชีตาม test case scenarioprocess_date วันที่ประมวลผลcompany_transfer_date วันที่ประมวลผลpayment_serviceบันทึก [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service where [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_idbot_bank_codeบันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description_eng where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = Config ธนาคาร and [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '56000' - Bank Account ของ บริษัท
3. Insert ข้อมูลที่ตาราง [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard) ตามจำนวนกลุ่มของธนาคารจากข้อ 2
  1. fielddescriptionmapping databatch_payment_idรหัสอ้างอิงข้อมูลการจ่ายระดับ Batchบันทึก NULLapproved_typeประเภทการอนุมัติบันทึก APAR - อนุมัติและบันทึกบัญชีpayment_channelช่องทางการจ่ายบันทึก NULLbatch_payment_typeประเภทการจ่ายบันทึก NULLserviceService (Format ธนาคาร)บันทึก NULLbank_account_noเลขที่บัญชี@bank_norequest_payment_dateวันที่ Request จ่ายเงินบันทึกวันที่ประมวลผลpaid_dateวันที่ลูกค้าได้รับเงินบันทึกวันที่ประมวลผลpayment_dateวันที่ตัดเงินจากบัญชีบริษัทบันทึกวันที่ประมวลผลposting_dateวันที่บันทึกบัญชีบันทึกวันที่ประมวลผลtotal_transactionจำนวนรายการรวมสุทธิจำนวน transaction ของจำนวนรายการค่าธรรมเนียมที่ได้จากข้อ 1total_amountจำนวนเงินรวมสุทธิSum([tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).fee_amount) ของจำนวนรายการค่าธรรมเนียมที่ได้จากข้อ 1voucher_statusสถานะดำเนินการบันทึก EDP - EDW Processingverify_dateวันและเวลาที่ตรวจสอบบันทึกวันที่ประมวลผลverify_byชื่อผู้ตรวจสอบ@owner_fullnameedw_system_keyEDW System Keyได้จาก input ของ process ส่งข้อมูลเข้า edw ข้อ 2bevent_codeevent code ของบัญชีได้จาก input ของ process ส่งข้อมูลเข้า edw ข้อ 2bcreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง@owner_username
4. Insert ข้อมูลที่ตาราง [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl)
  1. fielddescriptionmappingIdid ของ Record auto generateRunning IDpayment_dashboard_idรหัสอ้างอิงข้อมูลตาราง tx_payment_dashboard[tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard).idpayment_detail_idรหัสอ้างอิงข้อมูลตาราง tx_payment_detail[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).idcreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง@owner_username
5. บันทึกข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)
  1. batch_code = PM_BH_006
  2. กรณี Run Batch Manual จากหน้าจอ [FS-09-01 หน้าจอ Batch Manual Process](/pages/viewpage.action?pageId=1290404320) ให้ข้ามการบันทึกข้อมูลนี้ FieldDescriptionMapping databatch_idรหัส BatchAuto generatebatch_codeรหัส BatchBatch Codestatusสถานะการ Run BatchF - กรณี Batch Failerror_messageข้อความกรณี Run Batch Failบันทึกข้อความกรณีมี Error ที่ Run Batch Processtypeประเภทการ Run BatchA - Autocreated_datedวันที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก System
    - Insert ข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)

# Post-conditions & Error Handling

- `Post-conditions (Success):`
- `Post-conditions (Failure) & Error Handling:`
  - กรณีเรียก`Web Service ไม่สำเร็จ (e.g., HTTP 5xx, Timeout):`
    - `Action`: ระบบจะบันทึก `Log` ข้อผิดพลาดของทั้งกลุ่ม (chunk) ที่เรียกไม่สำเร็จ และข้ามไปทำงานกลุ่มถัดไป
  - `กรณี Database Update ไม่สำเร็จ:`
    - `Action: ระบบจะพยายาม Rollback การเปลี่ยนแปลงสำหรับรายการนั้น และบันทึก Log ข้อผิดพลาดร้ายแรง`

---

## Hyperlinks บนหน้านี้

- [เงื่อนไขบันทึกบัญชี ค่าธรรมเนียมธนาคาร](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [02_62_04 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม บันทึกค่าธรรมเนียมธนาคาร (ตามรอบที่ธนาคารตัดเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1285881936)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
- [FS-09-01 หน้าจอ Batch Manual Process](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404320)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
