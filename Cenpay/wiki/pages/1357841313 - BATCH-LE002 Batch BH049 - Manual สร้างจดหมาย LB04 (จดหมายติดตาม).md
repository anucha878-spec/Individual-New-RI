# BATCH-LE002 Batch BH049 : Manual สร้างจดหมาย LB04 (จดหมายติดตาม)

- **Page ID:** 1357841313
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357841313
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE002 Batch BH049 : Manual สร้างจดหมาย LB04 (จดหมายติดตาม)
- **Depth:** 4

---

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | รายการที่รอสร้างจดหมายจะเป็นข้อมูลที่เลือกรายการเลือกวิธีการส่งจดหมายเป็น ส่งผ่าน vendor ที่หน้าจอ [FS-06-02-07 หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](/pages/viewpage.action?pageId=1357611064) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกๆ วัน เวลา 18:00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | รหัสประเภทการพิมพ์ เท่ากับ "Manual"flag การพิมพ์ Manual เท่ากับ "Y"flag การพิมพ์จดหมาย เท่ากับ "N" |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ระบบสร้างรายการบันทึกข้อมูลการส่งจดหมายติดตาม และเลขที่จดหมายในทะเบียนสร้างข้อมูลจดหมายเป็น PDF เพื่อส่งเข้าระบบ DMS |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**เลือกรายการเลือกวิธีการส่งจดหมายเป็น ส่งผ่าน vendor ที่หน้าจอ [FS-06-02-07 หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](/pages/viewpage.action?pageId=1357611064)**Process Description (กระบวนการ)**Insert ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuebatch_codeรหัส BatchFix "BH049"batch_detailรายละเอียด BatchFix "Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม)"total_recordจำนวนรายการทั้งหมดNULLprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน ManualNULLparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลNULLstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ ErrorNULLprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดNULLcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดNULLcreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดNULLดึงข้อมูลการส่งจดหมายติดตาม ที่รอ Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม) ให้ดึงข้อมูลที่ [DB : benefitbank](/display/RDSCPENH/01.+DB+%3A+benefitbank) <![CDATA[select distinct rei.insured_title, rei.insured_name, rei.insured_surname, mhr.* from tx_cp_rep_tracking_mail_history mhr left join tx_cp_rep_insured rei on mhr.tx_cp_rep_id = rei.tx_cp_rep_id left join tx_cp_rep_policy rpo on mhr.tx_cp_rep_id = rpo.tx_cp_rep_id where mhr.mail_type_print_code = &#39;MAN&#39; and mhr.print_pending_flag = &#39;Y&#39; and mhr.is_print_flag = &#39;N&#39;]]> บันทึกข้อมูลจดหมาย ที่ table [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history) ดังนี้No.FieldData SourceCondition [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)1sent_mail_status_code Fix : "S" 1sent_mail_status Fix : "สำเร็จ" 2updated_byLogin User 3updated_by_fullnameLogin User 4updated_datesystemDate บันทึกข้อมูลจดหมาย ที่ table [tx_cp_rep_source](/display/RDSCPENH/03_17+tx_cp_rep_source) ดังนี้No.FieldData SourceCondition [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)1mail_no input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) 2updated_byLogin User 3updated_by_fullnameLogin User 4updated_datesystemDate บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก โดยเรียกใช้ API [03. API บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก](/pages/viewpage.action?pageId=1347060188) โดยส่ง Input ดังนี้ Header Level (ข้อมูลสรุปกลุ่มจดหมาย)InputValueletterCodeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCodeSystem' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameAbbrดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCode' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameFullดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterName' and active_flag = 'A'ข้อมูลที่นำมาใช้: valuetotalLetterFix : 1importDatesystemDatesystemSourceFix : "Cenpay"Detail Level (ข้อมูลรายละเอียดจดหมายรายฉบับ ส่งเป็น *ArrayList[{Object}]* ) (สำหรับจดหมายติดตามให้ส่งแค่ 1 รายการ)InputValuebarcodeNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)documentNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)periodให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906**policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)titleName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_title จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)firstName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)lastName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)ข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)addressaddresshouseNohouse_nobuildingbuildingvillagevillagealleyalleyroadroadsubdistrictsub_districtdistrictdistrictprovinceprovincezipcodepost_codesendDateให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604**สร้างจดหมายเป็น File PDF เพื่อใช้ส่งเข้าระบบ DMS โดยเรียกใช้ Process [02-05-18 Process Generate จดหมายติดตาม](/pages/viewpage.action?pageId=1337721172) โดยส่ง Input ดังนี้InputValuebeneficiaryName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)beneficiarySurname[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_surname จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)ข้อมูล address1, address2 และ address3 ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)address1house_no + ' ' + building + ' ' + [หมู่ (ถ้ามี) ให้ใช้ 'หมู่ ' + village+ ' ' ] + [ซอย (ถ้ามี) ให้ใช้ 'ซอย' + alley + ' ' ] + [ถนน (ถ้ามี) ให้ใช้ 'ถนน' + road + ' ' ]address2[แขวง/ตำบล ให้ใช้ {'แขวง' กรณีกรุงเทพ นอกนั้น 'ตำบล'} + sub_district + ' ' ] + [เขต/อำเภอ ให้ใช้ {'เขต' กรณีกรุงเทพ นอกนั้น 'อำเภอ'} + district + ' ' ]address3[จังหวัด ให้ใช้ 'จังหวัด' + province + ' '] + post_codebarcode[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)barcodeReferenceTextตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-10Fix : "C-RETURNED" **C-RETURNED**11ค่าว่าง 12-18[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) **03-2569**19ค่าว่าง 20-23Fix : "RIND" **RIND**24Fix : "-" -25-35 [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) **00098070666**mailNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)planName[tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy).plan_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)phoneดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'phone' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueส่งเอกสารเข้าระบบ DMS โดยอ้างอิงรายละเอียด [02-05-05 Process การบันทึก/แสดงข้อมูลเอกสาร ในระบบ DMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1307115563)Input ParameterMapping Field@documentTypeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCode' และ active_flag = 'A'ข้อมูลที่นำมาใช้ value@mapIndexIndex_codeMappingMAIL_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)POLICY_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)@fileNameชื่อไฟล์ตามจริง@updateByUserName@Username ที่ทำรายการ@updateBySourceSystem Data Config = 'CENPAY'@branchCodeสาขาของ user ที่ทำรายการ@documentStatusData Config = 'APPROVE' Update ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดนับจากจำนวนรายการบันทึกคำร้องที่สร้างสำเร็จstatusสถานะการทำงานของ Batchกรณี Error บันทึก Fกรณีสำเร็จ บันทึก Serror_messageรายละเอียดของการทำงานที่ Errorกรณี Error บันทึก Exception Messageprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"**Post-condition (เงื่อนไขหลังการทำงาน)**ระบบ Email Noti จะหยิบข้อมูลจดหมายติดตาม ไปนำส่งให้ Vender เพื่อนำส่งให้ลูกค้า |
| Field | Description | Value |
| batch_code | รหัส Batch | Fix "BH049" |
| batch_detail | รายละเอียด Batch | Fix "Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม)" |
| total_record | จำนวนรายการทั้งหมด | NULL |
| process_source | Batch Run โดยวิธี Auto (A) หรือ Manual (M) | Fix "A" |
| branch_code | สาขาที่รัน Manual | NULL |
| parameter_url | parameter ที่ระบุเพื่อส่งให้ batch ประมวลผล | NULL |
| status | สถานะการทำงานของ Batch | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | NULL |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | NULL |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | NULL |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | NULL |
| No. | Field | Data Source | Condition |
|   |   |   | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| 1 | sent_mail_status_code | Fix : "S" |   |
| 1 | sent_mail_status | Fix : "สำเร็จ" |   |
| 2 | updated_by | Login User |   |
| 3 | updated_by_fullname | Login User |   |
| 4 | updated_date | systemDate |   |
| No. | Field | Data Source | Condition |
|   |   |   | [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| 1 | mail_no | input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |   |
| 2 | updated_by | Login User |   |
| 3 | updated_by_fullname | Login User |   |
| 4 | updated_date | systemDate |   |
| Input | Value |
| letterCode | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCodeSystem' and active_flag = 'A'ข้อมูลที่นำมาใช้: value |
| letterNameAbbr | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCode' and active_flag = 'A'ข้อมูลที่นำมาใช้: value |
| letterNameFull | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterName' and active_flag = 'A'ข้อมูลที่นำมาใช้: value |
| totalLetter | Fix : 1 |
| importDate | systemDate |
| systemSource | Fix : "Cenpay" |
| Input | Value |
| barcodeNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| documentNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| period | ให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906** |
| policyNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| titleName | [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_title จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| firstName | [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| lastName | [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| ข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| address | address |
| houseNo | house_no |
| building | building |
| village | village |
| alley | alley |
| road | road |
| subdistrict | sub_district |
| district | district |
| province | province |
| zipcode | post_code |
| sendDate | ให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604** |
| Input | Value |
| beneficiaryName | [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| beneficiarySurname | [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_surname จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| ข้อมูล address1, address2 และ address3 ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE002BatchBH049:Manualสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| address1 | house_no + ' ' + building + ' ' + [หมู่ (ถ้ามี) ให้ใช้ 'หมู่ ' + village+ ' ' ] + [ซอย (ถ้ามี) ให้ใช้ 'ซอย' + alley + ' ' ] + [ถนน (ถ้ามี) ให้ใช้ 'ถนน' + road + ' ' ] |
| address2 | [แขวง/ตำบล ให้ใช้ {'แขวง' กรณีกรุงเทพ นอกนั้น 'ตำบล'} + sub_district + ' ' ] + [เขต/อำเภอ ให้ใช้ {'เขต' กรณีกรุงเทพ นอกนั้น 'อำเภอ'} + district + ' ' ] |
| address3 | [จังหวัด ให้ใช้ 'จังหวัด' + province + ' '] + post_code |
| barcode | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| barcodeReferenceText | ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-10Fix : "C-RETURNED" **C-RETURNED**11ค่าว่าง 12-18[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) **03-2569**19ค่าว่าง 20-23Fix : "RIND" **RIND**24Fix : "-" -25-35 [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) **00098070666** |
| ตำแหน่ง | ข้อมูล | เงื่อนไข | ตัวอย่าง |
| 1-10 | Fix : "C-RETURNED" |   | **C-RETURNED** |
| 11 | ค่าว่าง |   |   |
| 12-18 | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |   | **03-2569** |
| 19 | ค่าว่าง |   |   |
| 20-23 | Fix : "RIND" |   | **RIND** |
| 24 | Fix : "-" |   | - |
| 25-35 | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |   | **00098070666** |
| mailNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| policyNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| planName | [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy).plan_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| phone | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'phone' and active_flag = 'A'ข้อมูลที่นำมาใช้: value |
| Input Parameter | Mapping Field |
| @documentType | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCode' และ active_flag = 'A'ข้อมูลที่นำมาใช้ value |
| @mapIndex | Index_codeMappingMAIL_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)POLICY_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| Index_code | Mapping |
| MAIL_NO | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| POLICY_NO | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| @fileName | ชื่อไฟล์ตามจริง |
| @updateByUserName | @Username ที่ทำรายการ |
| @updateBySourceSystem | Data Config = 'CENPAY' |
| @branchCode | สาขาของ user ที่ทำรายการ |
| @documentStatus | Data Config = 'APPROVE' |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | นับจากจำนวนรายการบันทึกคำร้องที่สร้างสำเร็จ |
| status | สถานะการทำงานของ Batch | กรณี Error บันทึก Fกรณีสำเร็จ บันทึก S |
| error_message | รายละเอียดของการทำงานที่ Error | กรณี Error บันทึก Exception Message |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |

---

## Hyperlinks บนหน้านี้

- [FS-06-02-07 หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357611064)
- [FS-06-02-07 หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357611064)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [DB : benefitbank](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+DB+%3A+benefitbank)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/03_17+tx_cp_rep_source)
- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [03. API บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1347060188)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [02-05-18 Process Generate จดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337721172)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [02-05-05 Process การบันทึก/แสดงข้อมูลเอกสาร ในระบบ DMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1307115563)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
