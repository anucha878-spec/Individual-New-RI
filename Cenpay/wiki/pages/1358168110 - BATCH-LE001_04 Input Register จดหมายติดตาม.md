# BATCH-LE001_04 Input Register จดหมายติดตาม

- **Page ID:** 1358168110
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1358168110
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE001 Batch BH048 : Auto สร้างจดหมาย LB04 (จดหมายติดตาม) > BATCH-LE001_04 Input Register จดหมายติดตาม
- **Depth:** 5

---

- Header Level (ข้อมูลสรุปกลุ่มจดหมาย)InputValueletterCodeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCodeSystem' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameAbbrดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCode' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameFullดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterName' and active_flag = 'A'ข้อมูลที่นำมาใช้: valuetotalLetterFix : 1importDatesystemDatesystemSourceFix : "Cenpay"
- Detail Level (ข้อมูลรายละเอียดจดหมายรายฉบับ ส่งเป็น *ArrayList[{Object}]* ) (สำหรับจดหมายติดตามให้ส่งแค่ 1 รายการ)InputValuebarcodeNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_Save)documentNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_Save)periodให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906**policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_Save)ข้อมูล titleName, beneficiaryName, beneficiarySurnameให้ใช้ข้อมูลจาก Table [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured) โดยใช้เงื่อนไข [tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_Select)titleNameinsured_titlefirstNameinsured_namelastNameinsured_surnameข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE001_04InputRegisterจดหมายติดตาม-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)address[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).addresshouseNo[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).house_nobuilding[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).buildingvillage[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).villagealley[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).alleyroad[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).roadsubdistrict[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).sub_districtdistrict[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).districtprovince[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).provincezipcode[tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).post_codesendDateให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604**

---

## Hyperlinks บนหน้านี้

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
