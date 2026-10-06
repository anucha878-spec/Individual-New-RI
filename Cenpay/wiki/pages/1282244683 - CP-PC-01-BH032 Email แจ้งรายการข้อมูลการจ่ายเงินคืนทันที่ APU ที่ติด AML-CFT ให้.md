# CP-PC-01-BH032 Email แจ้งรายการข้อมูลการจ่ายเงินคืนทันที่ APU ที่ติด AML/CFT ให้กับทางทีมสำนักกำกับ, สำนักกฎหมาย และฝ่ายปฎิบัติการให้ทราบ

- **Page ID:** 1282244683
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282244683
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-01 กระบวนการ Batch > CP-PC-01-BH032 Email แจ้งรายการข้อมูลการจ่ายเงินคืนทันที่ APU ที่ติด AML/CFT ให้กับทางทีมสำนักกำกับ, สำนักกฎหมาย และฝ่ายปฎิบัติการให้ทราบ
- **Depth:** 5

---

### Batch ส่ง Email แจ้งรายการข้อมูลการจ่ายเงินคืนทันที่ APU ที่ติด AML/CFT ให้กับทางทีมสำนักกำกับ, สำนักกฎหมาย และฝ่ายปฎิบัติการให้ทราบ

### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | วัตถุประสงค์ (Objective) | สำหรับแจ้งรายการข้อมูลการจ่ายเงินคืนทันที่ APU ที่ติด AML/CFT ให้กับทางทีมสำนักกำกับ, สำนักกฎหมาย และฝ่ายปฎิบัติการให้ทราบ |
| 2 | ผู้ใช้งาน (Target Users) | ทีมสำนักกำกับ, ทีมสำนักกฎหมาย และฝ่ายปฎิบัติการ |
| 3 | อธิบายรายละเอียด (Description) | กระบวนการ**SRS****FS****SCHEDULE SEND**08.00 น.เริ่ม Batch ตามเวลาที่กำหนดคือ 08:00 น.เริ่มบันทึกข้อมูล Log : Process ที่ lg_batch_process และบันทึกข้อมูลที่ lg_batch_trans ดังนี้**lg_batch_process** Mapping FieldDescriptionValuebatch_codeรหัส BatchFix "BH032"total_recordจำนวนรายการทั้งหมดไม่ระบุข้อมูลprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน Manualไม่ระบุข้อมูลparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลไม่ระบุข้อมูลstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" **lg_batch_trans** Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนFix "GET AML EMAIL"policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" ดึงข้อมูลจาก tx_aml_cis_email_tracking ด้วยเงื่อนไข ref_type = 'AML' และ email_status = 'W' เชื่อมกับตาราง tx_payment ด้วย tx_payment.id = payment_id และดึงข้อมูล ชื่อประเภทกรมธรรม์ และชื่อประเภทการจ่ายจาก cf_list_of_value Update log ตามกรณีดังนี้ กรณีดึงข้อมูลสำเร็จ 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดจำนวนข้อมูลรายการ AML/CFT ที่ดึงได้updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" กรณีดึงข้อมูลสำเร็จ และไม่พบข้อมูล 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดFix 0statusสถานะการทำงานของ BatchFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่มีข้อมูลติด AML/CFT ที่ต้องส่ง Email"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที กรณีดึงข้อมูลไม่สำเร็จ 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "F"error_messageรายละเอียดของการทำงานที่ Errorระบุ error ตามที่ได้process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "F"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่สามารถดึงข้อมูล AML/CFT เพื่อส่ง Email ได้"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที เริ่มบันทึก Log ของกระบวนการถัดไปที่ lg_batch_trans Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนFix "PREPARE EMAIL"policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" ทำการเตรียมข้อมูล Email ตามรูปแบบ Email ที่กำหนดไว้ด้านล่าง จากนั้นทำการส่ง Email ตามที่กำหนด และบันทึกผลการส่ง Email ตามที่ได้กลับเข้าตาราง tx_aml_cis_email_tracking ตามรายการที่ดึงมา ดังนี้กรณีส่ง Email สำเร็จupdate ข้อมูลที่ tx_aml_cis_email_tracking ตาม id ที่ส่ง Email ด้วยข้อมูล email_status = 'S' และ email_date = systemDateupdate ข้อมูลที่ lg_batch_trans และ log_batch_process Update 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "S"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" กรณีส่ง Email ไม่สำเร็จupdate ข้อมูลที่ tx_aml_cis_email_tracking ตาม id ที่ส่ง Email ด้วยข้อมูล email_status = 'F'update ข้อมูลที่ lg_batch_trans และ log_batch_process Update 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "F"error_messageรายละเอียดของการทำงานที่ Errorระบุ error ตามที่ได้process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "F"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่สามารถส่ง Email ได้สำเร็จ"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" **Sender**centralized payment @ocean.co.th (@mailSender)value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailSender'**To**[sujit.vo@ocean.co.th](mailto:sujit.vo@ocean.co.th), [areeya.su@ocean.co.th (@mailTo)](mailto:areeya.su@ocean.co.th)value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailTo'**CC**[sanit.sa@ocean.co.th](mailto:sanit.sa@ocean.co.th), [paween.se@ocean.co.th](mailto:paween.se@ocean.co.th), [wipawan.wa@ocean.co.th](mailto:wipawan.wa@ocean.co.th), [manutnit.ch@ocean.co.th](mailto:manutnit.ch@ocean.co.th), [nattha.ra@ocean.co.th](mailto:nattha.ra@ocean.co.th), [yaovalak.su@ocean.co.th](mailto:yaovalak.su@ocean.co.th), [alisa.ju@ocean.co.th](mailto:alisa.ju@ocean.co.th) (@mailCC)value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailCC'**Subject**แจ้งขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT) (@mailSubject)value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailSubject'**Description**เรียน ท่านผู้อำนวยการฝ่ายปฏิบัติการประกันชีวิตเรื่อง แจ้งขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT)ขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT)วันที่ขออนุมัติ (@systemDate) เวลา : (@systemTime) จำนวนรายการทั้งหมด : (@totalRecord)ลำดับเลขที่กรมธรรม์ประเภทกรมธรรม์ประเภทการจ่ายจำนวนเงินผลประโยชน์สุทธิประเภท AML/CFT1 (@ลำดับ)7473319 (@policyNo)สามัญ (@policyType)เงินครบสัญญา (@paymentType)100,000.00 (@amount)FreezeHR[002](@amlInfoSource)28473319สามัญเงินทรงชีพ5,000.00HR[002]39473319อุตสาหกรรมเงินสมนาคุณ6,000.00HR[002]ขอแสดงความนับถือฝ่ายปฏิบัติการฯCentralized Payment - Benefitให้สร้างรูปแบบ Email ตาม SRS โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้ (@systemDate) แทนด้วยวันที่ของ System รูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 05/06/2568(@systemTime) แทนด้วยเวลาของ System รูปแบบ HH:mm:ss ตัวอย่างเช่น 10:30:33(@totalRecord) แทนด้วยจำนวนข้อมูลที่หาได้จาก tx_aml_cis_email_tracking ที่จำเป็นต้องส่ง email แจ้งเตือนวนลูปข้อมูลที่หาได้จาก tx_aml_cis_email_tracking และ tx_payment และ cf_list_of_value เพื่อระบุข้อมูลในแต่ละแถวจนครบจำนวน(@ลำดับ) แสดงลำดับข้อมูลโดยเริ่มจาก 1 (@policyNo) ข้อมูล policyNo จาก tx_aml_cis_email_tracking (@policyType) ข้อมูล policyType จาก tx_aml_cis_email_tracking และ cf_list_of_value (@paymentType) ข้อมูล paymentType จาก tx_aml_cis_email_tracking และ cf_list_of_value (@amount) ข้อมูล totalNetAmount จาก tx_aml_cis_email_tracking และ tx_payment (@amlInfoSource) ข้อมูล amlInfoSource จาก tx_aml_cis_email_tracking และ tx_payment |
| กระบวนการ | **SRS** | **FS** |
| **SCHEDULE SEND** | 08.00 น. | เริ่ม Batch ตามเวลาที่กำหนดคือ 08:00 น.เริ่มบันทึกข้อมูล Log : Process ที่ lg_batch_process และบันทึกข้อมูลที่ lg_batch_trans ดังนี้**lg_batch_process** Mapping FieldDescriptionValuebatch_codeรหัส BatchFix "BH032"total_recordจำนวนรายการทั้งหมดไม่ระบุข้อมูลprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน Manualไม่ระบุข้อมูลparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลไม่ระบุข้อมูลstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" **lg_batch_trans** Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนFix "GET AML EMAIL"policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" ดึงข้อมูลจาก tx_aml_cis_email_tracking ด้วยเงื่อนไข ref_type = 'AML' และ email_status = 'W' เชื่อมกับตาราง tx_payment ด้วย tx_payment.id = payment_id และดึงข้อมูล ชื่อประเภทกรมธรรม์ และชื่อประเภทการจ่ายจาก cf_list_of_value Update log ตามกรณีดังนี้ กรณีดึงข้อมูลสำเร็จ 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดจำนวนข้อมูลรายการ AML/CFT ที่ดึงได้updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" กรณีดึงข้อมูลสำเร็จ และไม่พบข้อมูล 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดFix 0statusสถานะการทำงานของ BatchFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่มีข้อมูลติด AML/CFT ที่ต้องส่ง Email"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที กรณีดึงข้อมูลไม่สำเร็จ 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "F"error_messageรายละเอียดของการทำงานที่ Errorระบุ error ตามที่ได้process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "F"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่สามารถดึงข้อมูล AML/CFT เพื่อส่ง Email ได้"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที เริ่มบันทึก Log ของกระบวนการถัดไปที่ lg_batch_trans Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนFix "PREPARE EMAIL"policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" ทำการเตรียมข้อมูล Email ตามรูปแบบ Email ที่กำหนดไว้ด้านล่าง จากนั้นทำการส่ง Email ตามที่กำหนด และบันทึกผลการส่ง Email ตามที่ได้กลับเข้าตาราง tx_aml_cis_email_tracking ตามรายการที่ดึงมา ดังนี้กรณีส่ง Email สำเร็จupdate ข้อมูลที่ tx_aml_cis_email_tracking ตาม id ที่ส่ง Email ด้วยข้อมูล email_status = 'S' และ email_date = systemDateupdate ข้อมูลที่ lg_batch_trans และ log_batch_process Update 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "S"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" กรณีส่ง Email ไม่สำเร็จupdate ข้อมูลที่ tx_aml_cis_email_tracking ตาม id ที่ส่ง Email ด้วยข้อมูล email_status = 'F'update ข้อมูลที่ lg_batch_trans และ log_batch_process Update 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "F"error_messageรายละเอียดของการทำงานที่ Errorระบุ error ตามที่ได้process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "F"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่สามารถส่ง Email ได้สำเร็จ"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" |
| Field | Description | Value |
| batch_code | รหัส Batch | Fix "BH032" |
| total_record | จำนวนรายการทั้งหมด | ไม่ระบุข้อมูล |
| process_source | Batch Run โดยวิธี Auto (A) หรือ Manual (M) | Fix "A" |
| branch_code | สาขาที่รัน Manual | ไม่ระบุข้อมูล |
| parameter_url | parameter ที่ระบุเพื่อส่งให้ batch ประมวลผล | ไม่ระบุข้อมูล |
| status | สถานะการทำงานของ Batch | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| master_ref_no | เลขธุรกรรม หรือขั้นตอน | Fix "GET AML EMAIL" |
| policy_type | ประเภทกรมธรรม์ | ไม่ระบุข้อมูล |
| policy_no | เลขกรมธรรม์ | ไม่ระบุข้อมูล |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | จำนวนข้อมูลรายการ AML/CFT ที่ดึงได้ |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | Fix 0 |
| status | สถานะการทำงานของ Batch | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ไม่มีข้อมูลติด AML/CFT ที่ต้องส่ง Email" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | ระบุ error ตามที่ได้ |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงานของ Batch | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ไม่สามารถดึงข้อมูล AML/CFT เพื่อส่ง Email ได้" |
| process_end_date | ระยะเวลาที่ Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| master_ref_no | เลขธุรกรรม หรือขั้นตอน | Fix "PREPARE EMAIL" |
| policy_type | ประเภทกรมธรรม์ | ไม่ระบุข้อมูล |
| policy_no | เลขกรมธรรม์ | ไม่ระบุข้อมูล |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงานของ Batch | Fix "S" |
| process_end_date | ระยะเวลาที่ Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | ระบุ error ตามที่ได้ |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงานของ Batch | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ไม่สามารถส่ง Email ได้สำเร็จ" |
| process_end_date | ระยะเวลาที่ Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| **Sender** | centralized payment @ocean.co.th (@mailSender) | value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailSender' |
| **To** | [sujit.vo@ocean.co.th](mailto:sujit.vo@ocean.co.th), [areeya.su@ocean.co.th (@mailTo)](mailto:areeya.su@ocean.co.th) | value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailTo' |
| **CC** | [sanit.sa@ocean.co.th](mailto:sanit.sa@ocean.co.th), [paween.se@ocean.co.th](mailto:paween.se@ocean.co.th), [wipawan.wa@ocean.co.th](mailto:wipawan.wa@ocean.co.th), [manutnit.ch@ocean.co.th](mailto:manutnit.ch@ocean.co.th), [nattha.ra@ocean.co.th](mailto:nattha.ra@ocean.co.th), [yaovalak.su@ocean.co.th](mailto:yaovalak.su@ocean.co.th), [alisa.ju@ocean.co.th](mailto:alisa.ju@ocean.co.th) (@mailCC) | value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailCC' |
| **Subject** | แจ้งขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT) (@mailSubject) | value ที่ได้จาก cf_list_of_value ด้วยเงงื่อนไข group = 'CPH_AML_CFT_EMAIL' และ name = 'mailSubject' |
| **Description** | เรียน ท่านผู้อำนวยการฝ่ายปฏิบัติการประกันชีวิตเรื่อง แจ้งขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT)ขอพิจารณารายการเตรียมจ่ายเงินกรณีพิเศษ (AMLO/CFT)วันที่ขออนุมัติ (@systemDate) เวลา : (@systemTime) จำนวนรายการทั้งหมด : (@totalRecord)ลำดับเลขที่กรมธรรม์ประเภทกรมธรรม์ประเภทการจ่ายจำนวนเงินผลประโยชน์สุทธิประเภท AML/CFT1 (@ลำดับ)7473319 (@policyNo)สามัญ (@policyType)เงินครบสัญญา (@paymentType)100,000.00 (@amount)FreezeHR[002](@amlInfoSource)28473319สามัญเงินทรงชีพ5,000.00HR[002]39473319อุตสาหกรรมเงินสมนาคุณ6,000.00HR[002]ขอแสดงความนับถือฝ่ายปฏิบัติการฯCentralized Payment - Benefit | ให้สร้างรูปแบบ Email ตาม SRS โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้ (@systemDate) แทนด้วยวันที่ของ System รูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 05/06/2568(@systemTime) แทนด้วยเวลาของ System รูปแบบ HH:mm:ss ตัวอย่างเช่น 10:30:33(@totalRecord) แทนด้วยจำนวนข้อมูลที่หาได้จาก tx_aml_cis_email_tracking ที่จำเป็นต้องส่ง email แจ้งเตือนวนลูปข้อมูลที่หาได้จาก tx_aml_cis_email_tracking และ tx_payment และ cf_list_of_value เพื่อระบุข้อมูลในแต่ละแถวจนครบจำนวน(@ลำดับ) แสดงลำดับข้อมูลโดยเริ่มจาก 1 (@policyNo) ข้อมูล policyNo จาก tx_aml_cis_email_tracking (@policyType) ข้อมูล policyType จาก tx_aml_cis_email_tracking และ cf_list_of_value (@paymentType) ข้อมูล paymentType จาก tx_aml_cis_email_tracking และ cf_list_of_value (@amount) ข้อมูล totalNetAmount จาก tx_aml_cis_email_tracking และ tx_payment (@amlInfoSource) ข้อมูล amlInfoSource จาก tx_aml_cis_email_tracking และ tx_payment |
| ลำดับ | เลขที่กรมธรรม์ | ประเภทกรมธรรม์ | ประเภทการจ่าย | จำนวนเงินผลประโยชน์สุทธิ | ประเภท AML/CFT |
| 1 (@ลำดับ) | 7473319 (@policyNo) | สามัญ (@policyType) | เงินครบสัญญา (@paymentType) | 100,000.00 (@amount) | FreezeHR[002](@amlInfoSource) |
| 2 | 8473319 | สามัญ | เงินทรงชีพ | 5,000.00 | HR[002] |
| 3 | 9473319 | อุตสาหกรรม | เงินสมนาคุณ | 6,000.00 | HR[002] |

---

## Hyperlinks บนหน้านี้

- [sujit.vo@ocean.co.th](http://wiki.thaisamut.co.thmailto:sujit.vo@ocean.co.th)
- [areeya.su@ocean.co.th (@mailTo)](http://wiki.thaisamut.co.thmailto:areeya.su@ocean.co.th)
- [sanit.sa@ocean.co.th](http://wiki.thaisamut.co.thmailto:sanit.sa@ocean.co.th)
- [paween.se@ocean.co.th](http://wiki.thaisamut.co.thmailto:paween.se@ocean.co.th)
- [wipawan.wa@ocean.co.th](http://wiki.thaisamut.co.thmailto:wipawan.wa@ocean.co.th)
- [manutnit.ch@ocean.co.th](http://wiki.thaisamut.co.thmailto:manutnit.ch@ocean.co.th)
- [nattha.ra@ocean.co.th](http://wiki.thaisamut.co.thmailto:nattha.ra@ocean.co.th)
- [yaovalak.su@ocean.co.th](http://wiki.thaisamut.co.thmailto:yaovalak.su@ocean.co.th)
- [alisa.ju@ocean.co.th](http://wiki.thaisamut.co.thmailto:alisa.ju@ocean.co.th)
