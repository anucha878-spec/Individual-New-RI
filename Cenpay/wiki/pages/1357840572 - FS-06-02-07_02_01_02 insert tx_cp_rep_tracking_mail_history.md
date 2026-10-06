# FS-06-02-07_02_01_02 insert tx_cp_rep_tracking_mail_history

- **Page ID:** 1357840572
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/FS-06-02-07_02_01_02+insert+tx_cp_rep_tracking_mail_history
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-06 RE ทะเบียน > 03-06-02 รายงานทะเบียน > FS-06-02-07 หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม > FS-06-02-07_02 รายละเอียดเงื่อนไขปุ่ม > FS-06-02-07_02_01 ยืนยัน > FS-06-02-07_02_01_02 insert tx_cp_rep_tracking_mail_history
- **Depth:** 8

---

| **No.** | **Field** | **Data Source** |
|---|---|---|
| 1 | id | Auto Running No. |
| 2 | tx_cp_rep_id | [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_idที่ส่งมาจากหน้าจอ [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325859072) |
| 3 | mail_created_date | วันที่สร้างข้อมูล |
| 4 | mail_round | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_round + 1 เงื่อนไข tx_cp_rep_id = [tx_cp_rep_id No.2](#FS-06-02-07_02_01_02inserttx_cp_rep_tracking_mail_history-tx_cp_rep_id) |
| 5 | mail_type_code | Fix : "LB04" |
| 6 | mail_no | เรียกใช้ Process [FS-06-02-07_02_01_01 สร้างเลขที่จดหมาย](/pages/viewpage.action?pageId=1357840719) |
| 7 | policy_no | [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep).policy_noที่ส่งมาจากหน้าจอ [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325859072) |
| 8 | sent_mail_method | Fix : "จดหมาย" |
| 9 | sent_mail_status | ตรวจสอบ วิธีการส่งจดหมาย กรณีเท่ากับ "ส่งด้วยตนเอง" Fix : "สำเร็จ"กรณีเท่ากับ "ส่งผ่าน vendor"Fix : "รอดำเนินการ" |
| 10 | mail_return_date | Fix : null |
| 11 | mail_return_reason | Fix : null |
| 12 | mail_type_print | Fix : "Manual" |
| 13 | print_by | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |
| 14 | print_by_fullname | ผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี) |
| 15 | created_by | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |
| 16 | created_date | วันที่และเวลาสร้างข้อมูล |
| 17 | barcode_reference_text | ให้สร้าง barcode โดยอ้างอิง Process [รูปแบบการสร้าง Barcode](/pages/viewpage.action?pageId=796524812) และใช้ข้อมูลประกอบดังนี้กรมธรรม์ = [policy_no No. 7](#FS-06-02-07_02_01_02inserttx_cp_rep_tracking_mail_history-A_policy_no)YYMM = ปีและเดือนที่ทำรายการเลขที่หนังสือ = [mail_no No. 6](#FS-06-02-07_02_01_02inserttx_cp_rep_tracking_mail_history-A_mail_no)ประเภทใบแจ้ง = ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value).value โดยเงื่อนไข group = 'LETTER_FORM' และ name = 'LetterCodeSystem' และ active_flag = 'A' |
| 18 | reference_month_year | ให้สร้าง ข้อมูลอ้างอิงเดือน ปี ดังนี้MM-X-YYYYMM = เดือนที่สร้างข้อมูล 2 หลักX = '-'YYYY = ปี พศ ที่สร้างข้อมูล 4 หลักเช่น **01-2569** |
| 19 | reference_rind | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 11 digit กรณีที่ไม่ครบ 11 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 11 digit |
| 20 | sent_mail_status_code | ตรวจสอบ วิธีการส่งจดหมาย กรณีเท่ากับ "ส่งด้วยตนเอง" Fix : "S"กรณีเท่ากับ "ส่งผ่าน vendor"Fix : "W" |
| 21 | mail_type_print_code | Fix : "MAN" |
| 22 | print_pending_flag | ตรวจสอบ วิธีการส่งจดหมาย กรณีเท่ากับ "ส่งด้วยตนเอง" Fix : "N"กรณีเท่ากับ "ส่งผ่าน vendor"Fix : "Y" |
| 23 | returned_document_no | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 6 digit กรณีที่ไม่ครบ 6 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 6 digit |
| 24 | system_soruce | Fix : "Cenpay" |
| 24 | delivery_method | Fix : "จดหมาย" |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source)
- [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325859072)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [FS-06-02-07_02_01_01 สร้างเลขที่จดหมาย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357840719)
- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
- [FS-06-02-03 หน้าจอค้นหารายงานทะเบียนคงเหลือเงินผลประโยชน์ค้างรับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325859072)
- [รูปแบบการสร้าง Barcode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=796524812)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
