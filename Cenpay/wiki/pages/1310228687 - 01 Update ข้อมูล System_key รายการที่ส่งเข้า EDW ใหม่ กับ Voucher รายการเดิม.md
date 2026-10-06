# 01 Update ข้อมูล System_key รายการที่ส่งเข้า EDW ใหม่ กับ Voucher รายการเดิม

- **Page ID:** 1310228687
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310228687
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-11 กระบวนการซ่อมข้อมูลและส่งเข้า EDW - PaymentMG > 01 Update ข้อมูล System_key รายการที่ส่งเข้า EDW ใหม่ กับ Voucher รายการเดิม
- **Depth:** 5

---

### Objectives

- Trigger ส่งข้อมูลประมวลผล EDW ใหม่ จะให้ผูก system key รายการที่ส่งเข้า EDW ใหม่ กับรายการ dashboard_id เดิม

### Input Parameter

| Input Name | Description | Condition | Example | Remark |
|---|---|---|---|---|
| edw_process_log_id | EDW Process Log Id | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).id | 125398 |   |
| edw_system_key | EDW System Key | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).system_key | PM_FIN_02_B25681225004_20251225084158 |   |
| event_code | event_code |   | PM_FIN_02 |   |

**Process Description**
1. **Verify Data :** นำข้อมูล Input Parameter มาตรวจสอบข้อมูลใน [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log) Mapping Data[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)[tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log)edw_process_log_ididedw_system_keysystem_keyevent_codeevent_codeกรณี [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log).status พบข้อมูลไม่เท่ากับ EDW Processing หรือ ข้อมูลบัญชีไม่ถูกต้อง ให้จบการทำงานกรณี [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log).status พบข้อมูลเป็น EDW Processing หรือ ข้อมูลบัญชีไม่ถูกต้อง ให้ดำเนินการดังนี้เตรียมข้อมูลสำหรับส่งเข้า EDW No.เตรียมข้อมูลเงื่อนไข1Event Codeให้ใช้ข้อมูลจาก Input Parameter2System Keyให้ใช้ข้อมูลจาก Input Parameter3Payment Dateให้ใช้ข้อมูลจาก [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log).payment_date โดยค้นหาข้อมูลจาก System Key ที่ได้จาก Input Parameterส่งข้อมูล Process Log (ระดับ Event Code หรือ Voucher) ที่ Process : [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงินผลประโยชน์ และรายการไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571785) โดยมี Input ดังนี้ อ้างอิงตาราง [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)*หมายเหตุ ส่งข้อมูลเข้า EDW ด้วยข้อมูลเดิมทั้งหมด เพื่อต้องการ System Key ตัวใหม่*filedmapping datasystemfix : PAYMENTMGbranch_nofix : 0001event_groupfix : EPอ้างอิง [cf_event_group](/display/RDSADW/cf_event_group)event_codeEvent Code จากข้อ isystem_keySystem Key จากข้อ ipayment_datePayment Date จากข้อ irequest_payment_date[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_dateaccounting_dateวันที่ปัจจุบันentry_dateวันที่ปัจจุบันoperation_approved_usernameusername ที่ทำรายการoperation_approved_fullnameดึงข้อมูลจาก [msa_nbs_03 ดึงข้อมูล Nbs User](/pages/viewpage.action?pageId=780435778) ตรวจสอบข้อมูล userinputdescriptionConditionusernameusername ผู้ทำรายการusers.username = @usernameoutputDescriptionfullnameชื่อ-นามสกุลcreated_dateวันและเวลาปัจจุบันcreated_byusername ที่ทำรายการและ outputfieldmapping dataedw_process_log_id[tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).iddashboard_edw_id-บันทึกข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) (ระดับ Transaction) โดยแยกตาม event_codeดำเนินการต่อในข้อ **2. Update Data**
2. **Update Data :**ดำเนินการอัปเดตข้อมูล System Key ในตารางที่เกี่ยวข้องดังนี้
  1. **Table** : [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)*********ค้นหารายการที่ต้องการอัปเดตด้วย Input Parameter [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).edw_system_key*fieldmapping dataedw_system_key'edw_system_key' ข้อมูลใหม่ที่ได้จาก (ii.) ของข้อ 1.voucher_statusEDW Processing

---

## Hyperlinks บนหน้านี้

- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [02_62_01 Process การนำเข้าและบันทึกข้อมูลลงระบบ EDW รายการธุรกรรม จ่ายเงินผลประโยชน์ และรายการไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571785)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [cf_event_group](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_group)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [msa_nbs_03 ดึงข้อมูล Nbs User](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=780435778)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
