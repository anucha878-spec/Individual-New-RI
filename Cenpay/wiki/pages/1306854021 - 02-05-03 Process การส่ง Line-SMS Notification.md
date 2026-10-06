# 02-05-03 Process การส่ง Line/SMS Notification

- **Page ID:** 1306854021
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854021
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-03 Process การส่ง Line/SMS Notification
- **Depth:** 4

---

1. เตรียมข้อความจากเงื่อนไขดังนี้
อ้างอิง Sheet : [https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403](https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403)
[Step การสร้าง Template SMS](/pages/viewpage.action?pageId=1001751467)

| **no** | sms_code | sms_name | condition | variable | **message** | example |
|---|---|---|---|---|---|---|
| 1 | PR_REGISTER | แจ้งลูกค้ารับเรื่อง | [02-05-03_01 Notification แจ้งลูกค้ารับเรื่อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854103) | variabledescription$(var1)รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**ขอรับเงินผลประโยชน์$(var2)เลขกรมธรรม์ | บริษัท ไทยสมุทรฯ ได้ทำการรับเรื่อง$(var1) กธ. $(var2) เรียบร้อยเเล้ว อยู่ระหว่างการพิจารณา โดยผลพิจารณาจะเเจ้งให้ทราบอีกครั้ง สอบถามข้อมูลเพิ่มเติมโทร 1503 | บริษัท ไทยสมุทรฯ ได้ทำการรับเรื่องเวนคืนกรมธรรม์ กธ. xxxxxxx เรียบร้อยเเล้ว อยู่ระหว่างการพิจารณา โดยผลพิจารณาจะเเจ้งให้ทราบอีกครั้ง สอบถามข้อมูลเพิ่มเติมโทร 1503 |
| variable | description |
| $(var1) | รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**ขอรับเงินผลประโยชน์ |
| $(var2) | เลขกรมธรรม์ |
| 2 | PR_CANCEL | แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ | [02-05-03_02 Notification แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854045) | variabledescription$(var1)รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**ขอรับเงินผลประโยชน์$(var2)เลขกรมธรรม์$(var3)จำนวนเงิน | ไทยสมุทรฯ ไม่สามารถทำรายการ$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ได้ หากมีข้อสงสัยติดต่อ ศูนย์ลูกค้าสัมพันธ์ 1503 | ไทยสมุทรฯ ไม่สามารถทำรายการเวนคืนกรมธรรม์ กรมธรรม์ xxxxxxx จำนวน xxxxxxx บาท ได้ หากมีข้อสงสัยติดต่อ ศูนย์ลูกค้าสัมพันธ์ 1503 |
| variable | description |
| $(var1) | รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**ขอรับเงินผลประโยชน์ |
| $(var2) | เลขกรมธรรม์ |
| $(var3) | จำนวนเงิน |

2.ดึงข้อมูลเบอร์โทรศัพท์ และเลขที่บัตรประชาชน

| table | field | condition |
|---|---|---|
| [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured) | insured_card_noinsured_phone_number | [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).tx_request_id = [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id |

3. เรียก MSA สำหรับส่ง LineOA ตามเลขที่บัตรประชาชน [Internal service: สำหรับส่ง Line Notification ด้วย CardNo (เลขที่บัตรประชาชน)](/pages/viewpage.action?pageId=1001390280)

| Input | Mapping data |
|---|---|
| cardNo | ข้อมูลเลขที่บัตรประชาชนที่ได้จากข้อ 2. |
| text | ข้อความ line message ที่ได้จากข้อ 1. |
| createBy | benefitregister |

- กรณี Response Code = 200 (ส่งสำเร็จ) ให้จบการทำงาน
- กรณี Response Code = 400 (ส่งไม่สำเร็จ) ให้ส่งข้อความด้วย SMS
4. เรียก MSA สำหรับส่ง SMS ตามเบอร์โทรศัพท์
- กรณี mobile_no เป็นค่าว่างหรือ null ให้จบการทำงาน
- กรณี mobile_no มีข้อมูล ให้ส่งข้อความโดยกำหนด Input ดังนี้ [web service ส่ง sms และเก็บประวัติการส่งไว้ที่ระบบ CSMS](/pages/viewpage.action?pageId=478707936)

| Input | Mapping data |
|---|---|
| sms_category | [cf_notification](/display/RDSCPENH/cf_notification).noti_code |
| msg_template | ข้อความ sms message ที่ได้จากข้อ 1. |
| mobile_no | ข้อมูลเบอร์โทรศัพท์ที่ได้จากข้อ 2. |
| sent_date | วันและเวลาปัจจุบัน |

---

## Hyperlinks บนหน้านี้

- [https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403](https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403)
- [Step การสร้าง Template SMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001751467)
- [02-05-03_01 Notification แจ้งลูกค้ารับเรื่อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854103)
- [02-05-03_02 Notification แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854045)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [Internal service: สำหรับส่ง Line Notification ด้วย CardNo (เลขที่บัตรประชาชน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001390280)
- [web service ส่ง sms และเก็บประวัติการส่งไว้ที่ระบบ CSMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=478707936)
- [cf_notification](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification)
