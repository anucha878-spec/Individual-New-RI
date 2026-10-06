# BATCH-LE002_04 Input Register จดหมายติดตาม

- **Page ID:** 1357841345
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357841345
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE002 Batch BH049 : Manual สร้างจดหมาย LB04 (จดหมายติดตาม) > BATCH-LE002_04 Input Register จดหมายติดตาม
- **Depth:** 5

---

- Header Level (ข้อมูลสรุปกลุ่มจดหมาย)InputValueletterCodeดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCodeSystem' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameAbbrดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterCode' and active_flag = 'A'ข้อมูลที่นำมาใช้: valueletterNameFullดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'LETTER_FORM' and name = 'LetterName' and active_flag = 'A'ข้อมูลที่นำมาใช้: valuetotalLetterFix : 1importDatesystemDatesystemSourceFix : "Cenpay"
- Detail Level (ข้อมูลรายละเอียดจดหมายรายฉบับ ส่งเป็น *ArrayList[{Object}]* ) (สำหรับจดหมายติดตามให้ส่งแค่ 1 รายการ)InputValuebarcodeNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).barcode_reference_text จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)documentNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).returned_document_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)periodให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักเช่น **256906**policyNo[tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).policy_no จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)titleName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_title จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)firstName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)lastName[tx_cp_rep_insured](/display/RDSCPENH/03_21+tx_cp_rep_insured).insured_name จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)ข้อมูลที่อยู่ให้ใช้ข้อมูลจาก Table [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address) โดยใช้เงื่อนไข [tx_cp_rep_policy_address](/display/RDSCPENH/03_20+tx_cp_rep_policy_address).tx_cp_rep_id = [tx_cp_rep_id](#BATCH-LE002_04InputRegisterจดหมายติดตาม-A_tx_cp_rep_id) จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source#BATCH-LE002_02updatetx_cp_rep_source-A_Select)addressaddresshouseNohouse_nobuildingbuildingvillagevillagealleyalleyroadroadsubdistrictsub_districtdistrictdistrictprovinceprovincezipcodepost_codesendDateให้สร้าง ข้อมูลอ้างอิงปี เดือน ดังนี้YYYYMMDDYYYY = ปี พศ ที่สร้างข้อมูล 4 หลักMM = เดือนที่สร้างข้อมูล 2 หลักDD = วันที่ที่สร้างข้อมูล 2 หลักเช่น **25690604**

---

## Hyperlinks บนหน้านี้

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
