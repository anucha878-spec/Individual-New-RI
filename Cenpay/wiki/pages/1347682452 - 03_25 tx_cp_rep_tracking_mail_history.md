# 03_25 tx_cp_rep_tracking_mail_history

- **Page ID:** 1347682452
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_25 tx_cp_rep_tracking_mail_history
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_cp_rep_tracking_mail_history | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-06-10 | Description | ข้อมูลการส่งจดหมายติดตาม |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_cp_rep_id | numeric | 10,0 | N | PK table tx_cp_rep |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | mail_created_date | date |   | Y | วันที่สร้างจดหมาย |   |   |   |   |   |   | 2026-09-16 |   |   |   |
| 4 |   | mail_round | numeric | 3,0 | Y | จดหมายครั้งที่ |   |   |   |   |   |   | 1 |   |   |   |
| 5 |   | mail_type_code | varchar | 10 | Y | ประเภทจดหมาย |   |   |   |   |   |   | LB04 |   |   |   |
| 6 |   | mail_no | varchar | 20 | N | เลขที่จดหมาย |   |   |   |   |   |   | CR 000764/2569 |   |   |   |
| 7 |   | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | 1529892 |   |   |   |
| 8 |   | sent_mail_method | varchar | 20 | Y | วิธีการจัดส่ง |   |   |   |   |   |   | จดหมาย |   |   |   |
| 9 |   | sent_mail_status | varchar | 20 | Y | สถานะจดหมาย |   |   |   |   |   |   | รอดำเนินการสำเร็จกรณี Auto เป็นขั้นตอนการส่งเอกสารเข้า DMSกรณี Manual เป็นขั้นตอนการพิมพ์ Manual ที่หน้าจอ [หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](/pages/viewpage.action?pageId=1327924254)ตีกลับ |   |   |   |
| 10 |   | mail_return_date | date |   | Y | วันที่จดหมายตีกลับ |   |   |   |   |   |   | 2026-09-16 |   |   |   |
| 11 |   | mail_return_reason | varchar | 255 | Y | สาเหตุที่จดหมายตีกลับ |   |   |   |   |   |   | จ่าหน้าไม่ชัดเจน |   |   |   |
| 12 |   | mail_type_print | varchar | 10 | Y | ประเภทการพิมพ์ |   |   |   |   |   |   | AutoManual |   |   |   |
| 13 |   | print_by | varchar | 50 | Y | ผู้พิมพ์จดหมายกรณี Manual (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 14 |   | print_by_fullname | varchar | 150 | Y | ผู้พิมพ์จดหมายกรณี Manual (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี) |   |   |   |   |   |   | สมชาย ใจดี |   |   |   |
| 15 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 16 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 17 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 18 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 20/07/2026 ----** |
| 19 |   | barcode_reference_text | varchar | 24 | Y | ข้อมูล barcode |   |   |   |   |   |   | 021713698656011123451201อ้างอิง [รูปแบบการสร้าง Barcode](/pages/viewpage.action?pageId=796524812) |   |   |   |
| 20 |   | reference_month_year | varchar | 7 | Y | เดือน-ปี พศ สำหรับติดตามเอกสาร |   |   |   |   |   |   |   |   |   |   |
| 21 |   | reference_rind | varchar | 11 | Y | หมายเลขอ้างอิง สำหรับติดตามเอกสาร |   |   |   |   |   |   | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id 11 digit กรณีที่ไม่ครบ 11 digit ให้นำเลข 0 มาต่อด้านหน้าจนครบ 11 digit |   |   |   |
| 22 |   | sent_mail_status_code | varchar | 1 | Y | รหัสสถานะจดหมาย |   |   |   |   |   |   | W : รอดำเนินการS : สำเร็จR = ตีกลับ |   |   |   |
| 23 |   | mail_type_print_code | varchar | 3 | Y | รหัสประเภทการพิมพ์ |   |   |   |   |   |   | AUT : AutoMAN : Manual |   |   |   |
| 24 |   | print_pending_flag | varchar | 1 | Y | เก็บข้อมูล flag การพิมพ์ Manual จากหน้าจอ [หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](/pages/viewpage.action?pageId=1327924254) เพื่อรอ [BATCH-LE002 Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม)](/pages/viewpage.action?pageId=1357841313) มาอ่านข้อมูล |   |   |   |   |   |   | Y : Pending Print N : Not Pending |   |   |   |
| 25 |   | returned_document_no | varchar | 6 | Y | เลขที่หนังสือ ใน barcode_reference_text |   |   |   |   |   |   | 000001 |   |   |   |
| 26 |   | system_soruce | varchar | 10 | Y | ระบบต้นทาง |   |   |   |   |   |   | Cenpay |   |   |   |
| 27 |   | delivery_method | varchar | 10 | Y | วิธีการจัดส่ง |   |   |   |   |   |   | จดหมาย |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1327924254)
- [รูปแบบการสร้าง Barcode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=796524812)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [หน้าจอ pop-up ยืนยันการส่งจดหมายติดตาม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1327924254)
- [BATCH-LE002 Batch Manual สร้างจดหมาย LB04 (จดหมายติดตาม)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1357841313)
