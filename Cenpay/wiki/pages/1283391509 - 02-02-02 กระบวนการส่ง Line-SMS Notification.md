# 02-02-02 กระบวนการส่ง Line/SMS Notification

- **Page ID:** 1283391509
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1283391509
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-02 กระบวนการส่ง Line/SMS Notification
- **Depth:** 4

---

# **Input**

| Input | Description | Required |
|---|---|---|
| sms_code | รหัส SMS หรือ Line ที่ต้องการส่งแจ้งเตือน | Y |
| [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment) | ข้อมูลรายการจ่าย | Y |
| [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy) | ข้อมูลกรมธรรม์ของรายการจ่าย | Y |

# **กระบวนการ**

1. เตรียมข้อความจากเงื่อนไขดังนี้
อ้างอิง Sheet : [https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403](https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403)
[Step การสร้าง Template SMS](/pages/viewpage.action?pageId=1001751467)

| **no** | sms_code | sms_name | condition | variable | **message** | example |
|---|---|---|---|---|---|---|
| 1Ph2 | CP_REGISTER | แจ้งลูกค้ารับเรื่อง | [02-06-01 SMS แจ้งลูกค้ารับเรื่อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503763) | - | บริษัท ไทยสมุทรฯ ได้ทำการรับเรื่อง การขอจ่ายเงินผลประโยชน์เรียบร้อยแล้ว จะดำเนินการพิจารณา และแจ้งผลการพิจารณาให้รับทราบ หากมีข้อสงสัยติดต่อ 1503 | บริษัท ไทยสมุทรฯ ได้ทำการรับเรื่อง การขอจ่ายเงินผลประโยชน์เรียบร้อยแล้ว จะดำเนินการพิจารณา และแจ้งผลการพิจารณาให้รับทราบ หากมีข้อสงสัยติดต่อ 1503 |
| 2 | CP_TRANSFER_SUCCESS | แจ้งลูกค้ากรณีอนุมัติ | [02-06-02 SMS แจ้งลูกค้ากรณีอนุมัติ](/pages/viewpage.action?pageId=1288503769) | variabledescription$(var1)รายการธุรกรรมครบกำหนดสัญญาทรงชีพสมนาคุณจ่ายคืนทันทีจ่ายเวนคืนกรมธรรม์$(var2)เลขกรมธรรม์$(var3)จำนวนเงิน$(var4)ชื่อธนาคาร$(var5)เลขบัญชีธนาคาร$(var6)วันที่จ่าย | ไทยสมุทรฯ โอนเงิน$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ธนาคาร$(var4) $(var5) วันที่ $(var6) สอบถามโทร. 1503 -->ปรับโดยการตัดคำว่า ธนาคาร ออกจาก Message อ้างอิงตาม RM : #48043 โดย ariya.pi เมื่อ 02/02/2569ไทยสมุทรฯ โอนเงิน $(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท $(var4) $(var5) วันที่ $(var6) สอบถามโทร. 1503 | ไทยสมุทรฯ โอนเงิน เงินคืนทันที กรมธรรม์ XXXXXXX จำนวน xxxxxxx บาท ธนาคารกรุงเทพ XXX0453 วันที่ 06/08/68 สอบถามโทร. 1503 |
| variable | description |
| $(var1) | รายการธุรกรรมครบกำหนดสัญญาทรงชีพสมนาคุณจ่ายคืนทันทีจ่ายเวนคืนกรมธรรม์ |
| $(var2) | เลขกรมธรรม์ |
| $(var3) | จำนวนเงิน |
| $(var4) | ชื่อธนาคาร |
| $(var5) | เลขบัญชีธนาคาร |
| $(var6) | วันที่จ่าย |
| 3 | CP_TRANSFER_FAIL | แจ้งลูกค้ากรณีโอนไม่ผ่าน | [02-06-03 SMS แจ้งลูกค้ากรณีโอนไม่ผ่าน](/pages/viewpage.action?pageId=1288503772) | ไทยสมุทรฯ ไม่สามารถโอนเงิน$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ธนาคาร$(var4) $(var5) ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 -->ปรับโดยการตัดคำว่า ธนาคาร ออกจาก Message อ้างอิงตาม RM : #48043 โดย ariya.pi เมื่อ 02/02/2569ไทยสมุทรฯ ไม่สามารถโอนเงิน $(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท $(var4) $(var5) ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 | ไทยสมุทรฯ ไม่สามารถโอนเงิน เงินคืนทันที กรมธรรม์ XXXXXXX จำนวน xxxxxxx บาท ธนาคารกรุงเทพ XXX0453 ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 |
| 4 | CP_FORMAT_REJECT | แจ้งลูกค้ากรณี Format ไม่ผ่าน | [02-06-04 SMS แจ้งลูกค้ากรณี Format ไม่ผ่าน](/pages/viewpage.action?pageId=1288503775) | ไทยสมุทรฯ ไม่สามารถโอนเงิน$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ธนาคาร$(var4) $(var5) ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 -->ปรับโดยการตัดคำว่า ธนาคาร ออกจาก Message อ้างอิงตาม RM : #48043 โดย ariya.pi เมื่อ 02/02/2569ไทยสมุทรฯ ไม่สามารถโอนเงิน $(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท $(var4) $(var5) ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 | ไทยสมุทรฯ ไม่สามารถโอนเงิน เงินคืนทันที กรมธรรม์ XXXXXXX จำนวน xxxxxxx บาท ธนาคารกรุงเทพ XXX0453 ได้ กรุณาติดต่อกับสาขา หรือ ศูนย์ลูกค้าสัมพันธ์ 1503 |
| 5Ph2 | CP_TRANSFER_FAIL_CCC | แจ้งลูกค้ากรณีโอนไม่ผ่าน และเข้าระบบ CCC | [02-06-05 SMS แจ้งลูกค้ากรณีโอนไม่ผ่าน และเข้าระบบ CCC](/pages/viewpage.action?pageId=1288503778) | ไทยสมุทรฯ ไม่สามารถโอนเงิน$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ได้ กรุณาติดต่อกับสาขาด้วยตนเอง | ไทยสมุทรฯ ไม่สามารถโอนเเงินครบกำหนดสัญญา กรมธรรม์ XXXXXXX จำนวน xxxxxxx บาท ได้ กรุณาติดต่อกับสาขาด้วยตนเอง |
| 6Ph1R2 | CP_CANCEL | แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ | [02-06-06 Notification แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ](/pages/viewpage.action?pageId=1304592551) | variabledescription$(var1)รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์$(var2)เลขกรมธรรม์$(var3)จำนวนเงิน | ไทยสมุทรฯ ไม่สามารถทำการจ่ายเงิน$(var1) กรมธรรม์ $(var2) จำนวน $(var3) บาท ได้ หากมีข้อสงสัยติดต่อ ศูนย์ลูกค้าสัมพันธ์ 1503 | ไทยสมุทรฯ ไม่สามารถทำการจ่ายเงินเวนคืนกรมธรรม์ กรมธรรม์ XXXXXXX จำนวน xxxxxxx บาท ได้ หากมีข้อสงสัยติดต่อ ศูนย์ลูกค้าสัมพันธ์ 1503 |
| variable | description |
| $(var1) | รายการธุรกรรมเวนคืนกรมธรรม์ยกเลิกกรมธรรม์ |
| $(var2) | เลขกรมธรรม์ |
| $(var3) | จำนวนเงิน |

2.ดึงข้อมูลเบอร์โทรศัพท์ และเลขที่บัตรประชาชน

| table | field | condition |
|---|---|---|
| [tx_payment_policy](/display/RDSCPENH/tx_payment_policy) | insured_card_nomobile_no | [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).payment_id = [tx_payment](/display/RDSCPENH/tx_payment).id |

3. เรียก MSA สำหรับส่ง LineOA ตามเลขที่บัตรประชาชน [Internal service: สำหรับส่ง Line Notification ด้วย CardNo (เลขที่บัตรประชาชน)](/pages/viewpage.action?pageId=1001390280)

| Input | Mapping data |
|---|---|
| cardNo | ข้อมูลเลขที่บัตรประชาชนที่ได้จากข้อ 2. |
| text | ข้อความ line message ที่ได้จากข้อ 1. |
| createBy | benefitbank --> Fix "cenpay" **ปรับแก้การระบุข้อมูล createBy ให้ถูกต้องตามที่ config ไว้ในระบบ Line OA ที่ [CF_LINEOA_NOTIFICATION_CHANNEL](http://wiki.thaisamut.co.th/display/RDSLINEOA/CF_LINEOA_NOTIFICATION_CHANNEL)field : channel****แก้โดย ariya.pi เมื่อ 30/1/2569 อ้างอิง RM :** [https://redmine.ochi.link/issues/46790](https://redmine.ochi.link/issues/46790) |

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

- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403](https://docs.google.com/spreadsheets/d/1vT1Ete0BsFwT4KOGa9FgSJIveZX4SeMCg1uNWU7aT6k/edit?gid=716732403#gid=716732403)
- [Step การสร้าง Template SMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001751467)
- [02-06-01 SMS แจ้งลูกค้ารับเรื่อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503763)
- [02-06-02 SMS แจ้งลูกค้ากรณีอนุมัติ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503769)
- [02-06-03 SMS แจ้งลูกค้ากรณีโอนไม่ผ่าน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503772)
- [02-06-04 SMS แจ้งลูกค้ากรณี Format ไม่ผ่าน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503775)
- [02-06-05 SMS แจ้งลูกค้ากรณีโอนไม่ผ่าน และเข้าระบบ CCC](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503778)
- [02-06-06 Notification แจ้งลูกค้ากรณีปฎิเสธหรือยกเลิกรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1304592551)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [Internal service: สำหรับส่ง Line Notification ด้วย CardNo (เลขที่บัตรประชาชน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001390280)
- [CF_LINEOA_NOTIFICATION_CHANNEL](http://wiki.thaisamut.co.th/display/RDSLINEOA/CF_LINEOA_NOTIFICATION_CHANNEL)
- [https://redmine.ochi.link/issues/46790](https://redmine.ochi.link/issues/46790)
- [web service ส่ง sms และเก็บประวัติการส่งไว้ที่ระบบ CSMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=478707936)
- [cf_notification](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification)
