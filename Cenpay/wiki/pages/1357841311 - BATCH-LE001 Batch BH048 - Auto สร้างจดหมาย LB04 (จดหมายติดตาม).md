# BATCH-LE001 Batch BH048 : Auto สร้างจดหมาย LB04 (จดหมายติดตาม)

- **Page ID:** 1357841311
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357841311
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE001 Batch BH048 : Auto สร้างจดหมาย LB04 (จดหมายติดตาม)
- **Depth:** 4

---

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch Auto สร้างจดหมาย LB04 (จดหมายติดตาม) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | มีความสัมพันธ์กับกระบวนการดังนี้[Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ](/pages/viewpage.action?pageId=1356726484) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกวันที่ 1 ของทุกเดือน และ ทุกวันที่ 1 ของทุกเดือน เวลา 04:00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | การส่งจดหมายครั้งที่วันที่ส่งจดหมายสถานะรายการทะเบียนเงินผลประโยชน์ค้างรับส่งจดหมายครั้งที่ 1ทุกวันที่ 1 ของทุกเดือนมีสถานะรายการเป็น รอดำเนินการ หลังวันที่ตั้งทะเบียนเช็คคืน 2 เดือนส่งจดหมายครั้งที่ 2ทุกวันที่ 1 ของเดือน 11มีสถานะรายการเป็น รอดำเนินการ วันที่ตั้งทะเบียนเช็คคืนเป็นปีก่อนหน้า flag จดหมายตีกลับ ครั้งล่าสุดส่งจดหมายครั้งที่ 3ทุกวันที่ 1 ของทุกเดือนมีสถานะรายการเป็น รอดำเนินการ ก่อนวันที่ส่งเข้ากองทุน 3 เดือน |
| การส่งจดหมายครั้งที่ | วันที่ส่งจดหมาย | สถานะรายการทะเบียนเงินผลประโยชน์ค้างรับ |
| ส่งจดหมายครั้งที่ 1 | ทุกวันที่ 1 ของทุกเดือน | มีสถานะรายการเป็น รอดำเนินการ หลังวันที่ตั้งทะเบียนเช็คคืน 2 เดือน |
| ส่งจดหมายครั้งที่ 2 | ทุกวันที่ 1 ของเดือน 11 | มีสถานะรายการเป็น รอดำเนินการ วันที่ตั้งทะเบียนเช็คคืนเป็นปีก่อนหน้า flag จดหมายตีกลับ ครั้งล่าสุด |
| ส่งจดหมายครั้งที่ 3 | ทุกวันที่ 1 ของทุกเดือน | มีสถานะรายการเป็น รอดำเนินการ ก่อนวันที่ส่งเข้ากองทุน 3 เดือน |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ระบบสร้างรายการบันทึกข้อมูลการส่งจดหมายติดตาม และเลขที่จดหมายในทะเบียนสร้างข้อมูลจดหมายเป็น PDF เพื่อส่งเข้าระบบ DMS |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**ระบบ Cenpay เรียก [Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ](/pages/viewpage.action?pageId=1356726484)**Process Description (กระบวนการ)**Insert ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuebatch_codeรหัส BatchFix "BH048"batch_detailรายละเอียด BatchFix "Batch Auto สร้างจดหมาย LB04 (จดหมายติดตาม)"total_recordจำนวนรายการทั้งหมดNULLprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน ManualNULLparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลNULLstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ ErrorNULLprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดNULLcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดNULLcreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดNULLดึงข้อมูลการส่งจดหมายติดตาม ที่รอ Auto สร้างจดหมาย LB04 (จดหมายติดตาม) ให้ดึงข้อมูลที่ [DB : benefitbank](/display/RDSCPENH/01.+DB+%3A+benefitbank) *** กรณีตรวจพบว่ามีการสร้างข้อมูลจดหมาย Manual และเลือกวิธีการส่งจดหมายเป็นส่งให้ Vender จากหน้าจอ [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](/pages/viewpage.action?pageId=1325859072) เป็นวันเดียวกันกับวันที่ Batch BH048 ทำงาน ให้ข้ามรายการนั้นๆ เนื่องจากจะซ้ำกับการส่ง Manual <![CDATA[-- ส่งจดหมายครั้งที่ 1 ทุกวันที่ 1 ของทุกเดือน -- มีสถานะรายการเป็น รอดำเนินการ หลังวันที่ตั้งทะเบียนเช็คคืน 2 เดือน select rep.id, &#39;letter_1&#39; as letter_type from tx_cp_rep rep where rep.status_code = &#39;PND&#39; -- batch รันเฉพาะวันที่ 1 ของเดือน and extract(day from current_date) = 1 and current_date &gt;= rep.cp_rep_date + interval &#39;2 months&#39; and current_date &lt; rep.cp_rep_date + interval &#39;3 months&#39; union all -- ส่งจดหมายครั้งที่ 2 ทุกวันที่ 1 ของเดือน 11 -- มีสถานะรายการเป็น รอดำเนินการ วันที่ตั้งทะเบียนเช็คคืนเป็นปีก่อนหน้า flag จดหมายตีกลับ ครั้งล่าสุด&quot; และดึงข้อมูลถึง เดือน 11 ของปีที่แล้วเท่านั้น select rep.id, &#39;letter_2&#39; as letter_type from tx_cp_rep rep left join lateral ( select his.mail_return_date from tx_cp_rep_tracking_mail_history his where his.tx_cp_rep_id = rep.id order by his.id desc limit 1 ) last_mail on true where rep.status_code = &#39;PND&#39; and extract(day from current_date) = 1 and extract(month from current_date) = 11 and last_mail.mail_return_date is not null and rep.cp_rep_date &gt;= current_date - interval &#39;1 year&#39; and rep.cp_rep_date &lt; current_date union all -- ส่งจดหมายครั้งที่ 3 ทุกวันที่ 1 ของทุกเดือน -- มีสถานะรายการเป็น รอดำเนินการ ก่อนวันที่ส่งเข้ากองทุน 3 เดือน select rep.id, &#39;letter_3&#39; as letter_type from tx_cp_rep rep where rep.status_code = &#39;PND&#39; -- batch รันเฉพาะวันที่ 1 ของเดือน and extract(day from current_date) = 1 -- oic_repending_date ต้องอยู่ในเดือนอีก 3 เดือนข้างหน้า and rep.oic_repending_date &gt;= date_trunc(&#39;month&#39;, current_date + interval &#39;3 months&#39;) and rep.oic_repending_date &lt; date_trunc(&#39;month&#39;, current_date + interval &#39;4 months&#39;) ]]> บันทึกข้อมูลจดหมาย ที่ table [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history) ดังนี้**No.****Field****Data Source**1idAuto Running No.2tx_cp_rep_id[tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)3mail_created_dateวันที่สร้างข้อมูล4mail_round[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_round + 1 เงื่อนไข tx_cp_rep_id = [tx_cp_rep_id No.2](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-tx_cp_rep_id)5mail_type_codeFix : "LB04"6mail_noเรียกใช้ Process [FS-06-02-07_02_01_01 สร้างเลขที่จดหมาย](/pages/viewpage.action?pageId=1357840719)7policy_no[tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep).policy_no [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)8sent_mail_methodFix : "จดหมาย"9sent_mail_statusFix : "สำเร็จ"10mail_return_dateFix : null11mail_return_reasonFix : null12mail_type_printFix : "Auto"13print_byผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co)14print_by_fullnameผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี)15created_byผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co)16created_dateวันที่และเวลาสร้างข้อมูล 17barcode_reference_textให้สร้าง barcode โดยอ้างอิง Process [รูปแบบการสร้าง Barcode](/pages/viewpage.action?pageId=796524812) และใช้ข้อมูลประกอบดังนี้กรมธรรม์ = [policy_no No. 7](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_policy_no)YYMM = ปีและเดือนที่ทำรายการเลขที่หนังสือ = [mail_no No. 6](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_mail_no)ประเภทใบแจ้ง = ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value).value โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCodeSystem' และ active_flag = 'A18reference_month_yearให้สร้าง ข้อมูลอ้างอิงเดือน ปี ดังนี้MM-X-YYYYMM = เดือนที่สร้างข้อมูล 2 หลักX = '-'YYYY = ปี พศ ที่สร้างข้อมูล 4 หลักเช่น **01-2569** 19reference_rind[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 11 digit กรณีที่ไม่ครบ 11 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 11 digit 20sent_mail_status_codeFix : "S" 21mail_type_print_codeFix : "AUT" 22print_pending_flagFix : "Y"23returned_document_no[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 6 digit กรณีที่ไม่ครบ 6 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 6 digit24system_soruceFix : "Cenpay"24delivery_methodFix : "จดหมาย"25is_print_flagFix : "Y"บันทึกข้อมูลจดหมาย ที่ table [tx_cp_rep_source](/display/RDSCPENH/03_17+tx_cp_rep_source) field mail_no ดังนี้No.FieldData SourceCondition [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = [tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)1mail_noinput [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) 2updated_byLogin User 3updated_by_fullnameLogin User 4updated_datesystemDate บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก โดยเรียกใช้ API [03. API บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก](/pages/viewpage.action?pageId=1347060188) โดยส่ง Input ดังนี้ Header Level (ข้อมูลสรุปกลุ่มจดหมาย)InputValueletterCodeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCodeSystem' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameAbbrดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCode' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameFullดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterName' and active_flag = 'A'ข้อมูลที่นำมาใช้: valuetotalLetterFix : 1importDatesystemDatesystemSourceFix : "Cenpay"Detail Level (ข้อมูลรายละเอียดจดหมายรายฉบับ ส่งเป็น *ArrayList[{Object}]* ) (สำหรับจดหมายติดตามให้ส่งแค่ 1 รายการ)InputValuebarcodeNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)documentNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)periodให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906**policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)ข้อมูล titleName, beneficiaryName, beneficiarySurnameให้ใช้ข้อมูลจาก Table [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured) โดยใช้เงื่อนไข [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)titleNameinsured_titlefirstNameinsured_namelastNameinsured_surnameข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)address[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).addresshouseNo[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).house_nobuilding[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).buildingvillage[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).villagealley[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).alleyroad[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).roadsubdistrict[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).sub_districtdistrict[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).districtprovince[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).provincezipcode[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).post_codesendDateให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604**สร้างจดหมายเป็น File PDF เพื่อใช้ส่งเข้าระบบ DMS โดยเรียกใช้ Process [02-05-18 Process Generate จดหมายติดตาม](/pages/viewpage.action?pageId=1337721172) โดยส่ง Input ดังนี้InputValueข้อมูล beneficiaryName, beneficiarySurnameให้ใช้ข้อมูลจาก Table [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured) โดยใช้เงื่อนไข [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select)beneficiaryNameinsured_namebeneficiarySurnameinsured_surnameข้อมูล address1, address2 และ address3 ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)address1house_no + ' ' + building + ' ' + [หมู่ (ถ้ามี) ให้ใช้ 'หมู่ ' + village+ ' ' ] + [ซอย (ถ้ามี) ให้ใช้ 'ซอย' + alley + ' ' ] + [ถนน (ถ้ามี) ให้ใช้ 'ถนน' + road + ' ' ]address2[แขวง/ตำบล ให้ใช้ {'แขวง' กรณีกรุงเทพ นอกนั้น 'ตำบล'} + sub_district + ' ' ] + [เขต/อำเภอ ให้ใช้ {'เขต' กรณีกรุงเทพ นอกนั้น 'อำเภอ'} + district + ' ' ]address3[จังหวัด ให้ใช้ 'จังหวัด' + province + ' '] + post_codebarcode[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)barcodeReferenceTextตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-10Fix : "C-RETURNED" **C-RETURNED**11ค่าว่าง 12-18[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) **03-2569**19ค่าว่าง 20-23Fix : "RIND" **RIND**24Fix : "-" -25-35 [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) **00098070666**mailNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)ข้อมูล plan_nameให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy) โดยใช้เงื่อนไข [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)planNameplan_namephoneดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'phone' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueส่งเอกสารเข้าระบบ DMS โดยอ้างอิงรายละเอียด [02-05-05 Process การบันทึก/แสดงข้อมูลเอกสาร ในระบบ DMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1307115563)Input ParameterMapping Field@documentTypeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCode' และ active_flag = 'A'ข้อมูลที่นำมาใช้ value@mapIndexIndex_codeMappingMAIL_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)POLICY_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)@fileNameชื่อไฟล์ตามจริง@updateByUserName@Username ที่ทำรายการ@updateBySourceSystem Data Config = 'CENPAY'@branchCodeสาขาของ user ที่ทำรายการ@documentStatusData Config = 'APPROVE' Update ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดนับจากจำนวนรายการบันทึกคำร้องที่สร้างสำเร็จstatusสถานะการทำงานของ Batchกรณี Error บันทึก Fกรณีสำเร็จ บันทึก Serror_messageรายละเอียดของการทำงานที่ Errorกรณี Error บันทึก Exception Messageprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"**Post-condition (เงื่อนไขหลังการทำงาน)**ระบบ Email Noti จะหยิบข้อมูลจดหมายติดตาม ไปนำส่งให้ Vender เพื่อนำส่งให้ลูกค้า |
| Field | Description | Value |
| batch_code | รหัส Batch | Fix "BH048" |
| batch_detail | รายละเอียด Batch | Fix "Batch Auto สร้างจดหมาย LB04 (จดหมายติดตาม)" |
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
| **No.** | **Field** | **Data Source** |
| 1 | id | Auto Running No. |
| 2 | tx_cp_rep_id | [tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| 3 | mail_created_date | วันที่สร้างข้อมูล |
| 4 | mail_round | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_round + 1 เงื่อนไข tx_cp_rep_id = [tx_cp_rep_id No.2](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-tx_cp_rep_id) |
| 5 | mail_type_code | Fix : "LB04" |
| 6 | mail_no | เรียกใช้ Process [FS-06-02-07_02_01_01 สร้างเลขที่จดหมาย](/pages/viewpage.action?pageId=1357840719) |
| 7 | policy_no | [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep).policy_no [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| 8 | sent_mail_method | Fix : "จดหมาย" |
| 9 | sent_mail_status | Fix : "สำเร็จ" |
| 10 | mail_return_date | Fix : null |
| 11 | mail_return_reason | Fix : null |
| 12 | mail_type_print | Fix : "Auto" |
| 13 | print_by | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |
| 14 | print_by_fullname | ผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี) |
| 15 | created_by | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |
| 16 | created_date | วันที่และเวลาสร้างข้อมูล |
| 17 | barcode_reference_text | ให้สร้าง barcode โดยอ้างอิง Process [รูปแบบการสร้าง Barcode](/pages/viewpage.action?pageId=796524812) และใช้ข้อมูลประกอบดังนี้กรมธรรม์ = [policy_no No. 7](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_policy_no)YYMM = ปีและเดือนที่ทำรายการเลขที่หนังสือ = [mail_no No. 6](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_mail_no)ประเภทใบแจ้ง = ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value).value โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCodeSystem' และ active_flag = 'A |
| 18 | reference_month_year | ให้สร้าง ข้อมูลอ้างอิงเดือน ปี ดังนี้MM-X-YYYYMM = เดือนที่สร้างข้อมูล 2 หลักX = '-'YYYY = ปี พศ ที่สร้างข้อมูล 4 หลักเช่น **01-2569** |
| 19 | reference_rind | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 11 digit กรณีที่ไม่ครบ 11 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 11 digit |
| 20 | sent_mail_status_code | Fix : "S" |
| 21 | mail_type_print_code | Fix : "AUT" |
| 22 | print_pending_flag | Fix : "Y" |
| 23 | returned_document_no | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 6 digit กรณีที่ไม่ครบ 6 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 6 digit |
| 24 | system_soruce | Fix : "Cenpay" |
| 24 | delivery_method | Fix : "จดหมาย" |
| 25 | is_print_flag | Fix : "Y" |
| No. | Field | Data Source | Condition |
|   |   |   | [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = [tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| 1 | mail_no | input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |   |
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
| barcodeNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| documentNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| period | ให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906** |
| policyNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| ข้อมูล titleName, beneficiaryName, beneficiarySurnameให้ใช้ข้อมูลจาก Table [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured) โดยใช้เงื่อนไข [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| titleName | insured_title |
| firstName | insured_name |
| lastName | insured_surname |
| ข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| address | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).address |
| houseNo | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).house_no |
| building | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).building |
| village | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).village |
| alley | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).alley |
| road | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).road |
| subdistrict | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).sub_district |
| district | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).district |
| province | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).province |
| zipcode | [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).post_code |
| sendDate | ให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604** |
| Input | Value |
| ข้อมูล beneficiaryName, beneficiarySurnameให้ใช้ข้อมูลจาก Table [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured) โดยใช้เงื่อนไข [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Select) |
| beneficiaryName | insured_name |
| beneficiarySurname | insured_surname |
| ข้อมูล address1, address2 และ address3 ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| address1 | house_no + ' ' + building + ' ' + [หมู่ (ถ้ามี) ให้ใช้ 'หมู่ ' + village+ ' ' ] + [ซอย (ถ้ามี) ให้ใช้ 'ซอย' + alley + ' ' ] + [ถนน (ถ้ามี) ให้ใช้ 'ถนน' + road + ' ' ] |
| address2 | [แขวง/ตำบล ให้ใช้ {'แขวง' กรณีกรุงเทพ นอกนั้น 'ตำบล'} + sub_district + ' ' ] + [เขต/อำเภอ ให้ใช้ {'เขต' กรณีกรุงเทพ นอกนั้น 'อำเภอ'} + district + ' ' ] |
| address3 | [จังหวัด ให้ใช้ 'จังหวัด' + province + ' '] + post_code |
| barcode | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| barcodeReferenceText | ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-10Fix : "C-RETURNED" **C-RETURNED**11ค่าว่าง 12-18[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) **03-2569**19ค่าว่าง 20-23Fix : "RIND" **RIND**24Fix : "-" -25-35 [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) **00098070666** |
| ตำแหน่ง | ข้อมูล | เงื่อนไข | ตัวอย่าง |
| 1-10 | Fix : "C-RETURNED" |   | **C-RETURNED** |
| 11 | ค่าว่าง |   |   |
| 12-18 | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_month_year จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |   | **03-2569** |
| 19 | ค่าว่าง |   |   |
| 20-23 | Fix : "RIND" |   | **RIND** |
| 24 | Fix : "-" |   | - |
| 25-35 | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).reference_rind จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |   | **00098070666** |
| mailNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| policyNo | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| ข้อมูล plan_nameให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy) โดยใช้เงื่อนไข [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| planName | plan_name |
| phone | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'phone' and active_flag = 'A'ข้อมูลที่นำมาใช้: value |
| Input Parameter | Mapping Field |
| @documentType | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCode' และ active_flag = 'A'ข้อมูลที่นำมาใช้ value |
| @mapIndex | Index_codeMappingMAIL_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save)POLICY_NO[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| Index_code | Mapping |
| MAIL_NO | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
| POLICY_NO | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001BatchBH048:Autoสร้างจดหมายLB04(จดหมายติดตาม)-A_Save) |
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

- [Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1356726484)
- [Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1356726484)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [DB : benefitbank](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+DB+%3A+benefitbank)
- [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325859072)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [FS-06-02-07_02_01_01 สร้างเลขที่จดหมาย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357840719)
- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
- [รูปแบบการสร้าง Barcode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=796524812)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/03_17+tx_cp_rep_source)
- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source)
- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [03. API บันทึกข้อมูลจดหมายส่งออกระบบงานภายนอก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1347060188)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [02-05-18 Process Generate จดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337721172)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [tx_cp_rep_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_21+tx_cp_rep_insured)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [tx_cp_rep_policy_address](http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy)
- [tx_cp_rep_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_19+tx_cp_rep_policy)
- [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [02-05-05 Process การบันทึก/แสดงข้อมูลเอกสาร ในระบบ DMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1307115563)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
