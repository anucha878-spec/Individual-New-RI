# 03_00_05 Pop up แสดงข้อมูลรายละเอียด(support booking)

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 912556232
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=912556232

---

# TOC

/*<![CDATA[*/ div.rbtoc1784798160369 {padding: 0px;} div.rbtoc1784798160369 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784798160369 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [TOC](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-TOC)
  - [Objectives](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-Objectives)
  - [Process Overview](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ProcessOverview)
  - [Preconditions](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-Preconditions)
  - [Process Description](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ProcessDescription)
    - [สรุปการทำงานและการแสดงผลของ Support Booking ในแต่ละ Dashboard](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-สรุปการทำงานและการแสดงผลของSupportBookingในแต่ละDashboard)
    - [ที่มาของข้อมูลเอกสาร Support Booking](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ที่มาของข้อมูลเอกสารSupportBooking)
    - [ข้อกำหนดของเอกสาร Support Booking ในรูปแบบ .csv File](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ข้อกำหนดของเอกสารSupportBookingในรูปแบบ.csvFile)
    - [ตัวอย่างการแสดงข้อมูลเอกสาร Support Booking สำหรับ Accounting](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ตัวอย่างการแสดงข้อมูลเอกสารSupportBookingสำหรับAccounting)
    - [ตารางคำอธิบาย เอกสาร Support Booking สำหรับ Accounting](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ตารางคำอธิบายเอกสารSupportBookingสำหรับAccounting)
    - [หน้าจอแสดง Support Booking แบบ Popup](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-หน้าจอแสดงSupportBookingแบบPopup)
    - [ตารางคำอธิบาย เอกสาร Support Booking สำหรับ Financial](#id-03_00_05Popupแสดงข้อมูลรายละเอียด(supportbooking)-ตารางคำอธิบายเอกสารSupportBookingสำหรับFinancial)

## Objectives

- เพื่อแสดงข้อมูล Support Booking ประกอบด้วย
  - ข้อมูลที่แสดงใน Popup รายละเอียดรายการธุรกรรมที่หน้า Dashboard EDW ได้แก่
    - Payment - Financial
    - Manual - Financial
  - ข้อมูลในรูปแบบ .csv file ของรายละเอียดรายการธุรกรรมที่หน้า Dashboard EDW ได้แก่
    - Daily - Accounting
    - Payment - Accounting
    - Payment - Financial
    - Monthly - Accounting
    - Manual - Accounting
    - Manual - Financial

## Process Overview

- Export ข้อมูล support booking ในรูปแบบ .csv file
- Display Data รายละเอียดการจ่ายเงินในรูปแบบ Popup window

## Preconditions

- กดปุ่ม ไอคอนเอกสารที่คอลัมน์ "รายละเอียด" จากหน้าจอ Dashboard EDW.

## Process Description

**สรุปการทำงานและการแสดงผลของ Support Booking ในแต่ละ Dashboard**

### สรุปการทำงานและการแสดงผลของ Support Booking ในแต่ละ Dashboard

| No | Dashboard Type | User Type | Download csv File | Popup WindowsSupport Booking | PV | RV | Manual Oper | Manual Upload | Manual Upload | Remark |
|---|---|---|---|---|---|---|---|---|---|---|
| **V1** | **V2** | **V3** | **FT** | **FT2** |
| 1. | Dashboard Daily | ACCOUTING | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) |   |
| 2. | Dashboard Monthly | ACCOUTING | ![img](/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) |   |
| 3. | Dashboard Payment | ACCOUTING | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![img](/download/attachments/1044840806/error.png?version=1&modificationDate=1721041404585&api=v2) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) |   |
| 4. | Dashboard Payment | FINANCIAL | ![img](/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) | ![(error)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/error.png) |   |
| 5. | Dashboard Manual | ACCOUTING | ![img](/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2) | ![img](/download/attachments/1044840806/error.png?version=1&modificationDate=1721041404585&api=v2) | ![img](/download/attachments/1044840806/error.png?version=1&modificationDate=1721041404585&api=v2) | ![img](/download/attachments/1044840806/error.png?version=1&modificationDate=1721041404585&api=v2) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) |   |
| 6. | Dashboard Manual | FINANCIAL | ![img](/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2) | ![img](/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) | ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png) |   |

### ที่มาของข้อมูลเอกสาร Support Booking

1. เอกสาร Support Booking ที่แสดงตามธุรกรรม (ระบบต้นทางส่งข้อมูลเข้าEDW) ประกอบด้วย
3. เอกสาร Support Booking ตามการบันทึกบัญชีแบบ Manual Upload ประกอบด้วย
  - ข้อมูลมาจากการ Upload file.csv ผ่าน Function Manual Upload
    1. [03_00_07_02_01 - Template (File Format-Specificfield-keyin) Accounting](/pages/viewpage.action?pageId=960955053)
    2. [03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467)
4. เอกสาร Support Booking ตามการบันทึกบัญชีของข้อมูลที่มาจาก Manual Oper แยกเงื่อนไขการแสดง ตามประเภทการประมวลผลดังนี้
  - ธุรกรรมที่ผ่านการอัพโหลดไฟล์ข้อมูล
    - [03_14_04_01 รายการธุรกรรมที่อัพโหลดไฟล์ข้อมูล](/pages/viewpage.action?pageId=958890106)
  - ธุรกรรมที่ผ่านการกดนำเข้าข้อมูล
    - [03_14_04_02 รายการธุรกรรมที่กดนำเข้าข้อมูล](/pages/viewpage.action?pageId=959217848)
  - ธุรกรรมที่ระบบหน้าบ้านส่งข้อมูลเข้ามาอัตโนมัติ
    - [03_14_04_03 รายการธุรกรรมที่ระบบหน้าบ้านส่งข้อมูลเข้ามา](/pages/viewpage.action?pageId=989626553)
**ข้อกำหนดของเอกสาร Support Booking ในรูปแบบ .csv File**

### ข้อกำหนดของเอกสาร Support Booking ในรูปแบบ .csv File

- สำหรับข้อมูลที่เป็น text กำหนดให้ใส่ Double Quote แสดงค่าใน .csv file
- สำหรับข้อมูลที่เป็นตัวเลข ไม่ต้องใส่ Double Quote
- กำหนดกั้น CSV ด้วย ","
- อ่านข้`อมูลด้วย Encoding UTF-8 with BOM`
- `**Format** ของการแสดงผล`
  - `กรณีข้อมูลเป็นรูปแบบวันที่ (Date)`
    - `แสดงข้อมูลในรูปแบบ DD/MM/YYYY เป็นปี พศ.`
  - กรณีข้อมูลเป็นรูปแบบอื่น
    - แสดงข้อมูลตามเงื่อนไขการแสดงบนหน้าจอ
  - `การ Masking ข้อมูลโดยอ้างอิงรูปแบบการแสดงผลค่าฟิลด์ของแต่ละ Event ตามตาราง [cf_masking_event](/display/RDSADW/cf_masking_event) สำหรับธุรกรรมตามเงื่อนไขดังนี้``[![img](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)ADW-13025](http://jira.thaisamut.co.th/browse/ADW-13025) (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) Added by jitin.kh 03/03/2568`
    - `รูปแบบการนำเข้า`
      - ธุรกรรมที่ผ่านการอัพโหลดไฟล์ข้อมูลผ่านหน้าจอ`Manual Oper`
      - ธุรกรรมที่ผ่านการกดนำเข้าข้อมูลผ่านหน้าจอ Manual Oper
      - ธุรกรรมที่ระบบหน้าบ้านส่งข้อมูลเข้ามาอัตโนมัติ
    - `User Payment Type`
      - `Accounting`
    - `Dashboard Type`
      - `Daily`
      - `Payment`
      - `Monthly`
      - `Manual`
- `การกำหนดชื่อไฟล์` `File Name :``Dashboard``กำหนดให้ใช้เลขเอกสาร(Reference Number) ของรายการธุรกรรม``Daily - Accounting``Payment - Accounting``Monthly - Accounting``Manual - Accounting``กำหนดให้ใช้ "Support_Booking_"` `ตามด้วยเลขเอกสาร(Reference Number) ของรายการธุรกรรม``Payment - Financial``Manual - Financial`
**ตัวอย่างการแสดงข้อมูลเอกสาร Support Booking สำหรับ Accounting**

### ตัวอย่างการแสดงข้อมูลเอกสาร Support Booking สำหรับ Accounting

![img](/download/attachments/912556232/image2025-1-9%2014%3A44%3A0.png?version=1&modificationDate=1736408639987&api=v2)

### ตารางคำอธิบาย เอกสาร Support Booking สำหรับ Accounting

| ตารางคำอธิบาย Report Field ตามธุรกรรม |
|---|
| **No.** |   | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
| **Report Header 1** |
| 1. | EDW 5.2 R3ปรับเงื่อน Header ให้แสดงชื่อผู้พิมพ์เอกสารและ วันเวลาที่พิมพ์เอกสาร Update by nattapong.che on 9/1/68 | ผู้พิมพ์เอกสาร : User Login FullName | Dynamic Text |   | แสดงชื่อผู้สั่งพิมพ์รายงานแสดงข้อความ "ผู้พิมพ์เอกสาร : " และ แทนค่าด้วย ชื่อผู้พิมพ์จาก User Loginรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : **ผู้พิมพ์เอกสาร : ธรรมรัตน์ อุดมสวัสดิสุข** | Daily - AccountingPayment - AccountingMonthly - AccountingManual - Accounting | 1 | 1 |
| 2. | EDW 5.2 R3ปรับเงื่อน Header ให้แสดงชื่อผู้พิมพ์เอกสารและ วันเวลาที่พิมพ์เอกสาร Update by nattapong.che on 9/1/68 | วันที่พิมพ์เอกสาร : DD/MM/YYYYเวลา : HH:MM:SS น. | Dynamic Text |   | แสดงวันที่และเวลาสั่งพิมพ์รายงานแสดงข้อความ "วันที่พิมพ์เอกสาร : " และ แทนค่า "DD/MM/YYYY" ด้วย System Dateและแสดงข้อความ "เวลา : " และ แทนค่า "HH:MM:SS" ด้วย System Time และ แสดงข้อความ "น."รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ. ตัวอย่าง :**วันที่พิมพ์เอกสาร : 10/07/2567 เวลา : 12:02:51 น.** | Daily - AccountingPayment - AccountingMonthly - AccountingManual - Accounting | 2 | 1 |
| **Report Header 2 (อ้างอิงตามรายการธุรกรรมย่อย)** |
| **กำหนดเป็นคอลัมน์แบบ Dynamic เปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน |

**หน้าจอแสดง Support Booking แบบ Popup**

### หน้าจอแสดง Support Booking แบบ Popup

![img](/download/attachments/912556232/image2024-8-7%2010%3A59%3A37.png?version=1&modificationDate=1723003177128&api=v2)
**ตัวอย่างรูปแบบ Support Booking สำหรับ Financial**
**PV (สำหรับจ่ายเงิน)**
Supporting_จ่ายในประเทศ_NoWHT
![img](/download/attachments/912556232/image2024-8-7%2010%3A59%3A43.png?version=1&modificationDate=1723003183243&api=v2)
**กำหนดเป็นคอลัมน์แบบ Dynamic เปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน
Supporting_จ่ายในประเทศ_WHT
![img](/download/attachments/912556232/image2024-8-7%2011%3A1%3A34.png?version=1&modificationDate=1723003293690&api=v2)
**กำหนดเป็นคอลัมน์แบบ Dynamic เปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน
Supporting_จ่ายต่างประเทศ
![img](/download/attachments/912556232/image2024-8-5%2015%3A18%3A43.png?version=1&modificationDate=1722845923010&api=v2) **กำหนดเป็นคอลัมน์แบบ Dynamic เปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน
**RV (สำหรับรับเงิน)**
Supporting_รับเงิน
![img](/download/attachments/912556232/image2024-8-5%2015%3A16%3A37.png?version=1&modificationDate=1722845796663&api=v2)
**กำหนดเป็นคอลัมน์แบบ Dynamic เปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน
**ตารางคำอธิบาย เอกสาร Support Booking สำหรับ Financial**
**ตัวอย่างการแสดงข้อมูลเอกสาร Support Booking สำหรับ Financial**

### ตารางคำอธิบาย เอกสาร Support Booking สำหรับ Financial

| ตารางคำอธิบาย Report Field ตามธุรกรรม |
|---|
| **No.** |   | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
|   |   | ![img](/download/thumbnails/984711252/image2024-7-18%2015%3A56%3A14.png?version=1&modificationDate=1721292977080&api=v2) | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable | Payment - FinancialManual - Financial |   |   |
|   |   |   |   | Enable | ตลอดเวลา |   |   |   |
|   |   |   |   | Disable | - |   |   |   |
|   |   |   |   | On Click | Export support booking ในรูปแบบ .csv fileตรวจสอบรูปแบบไฟล์ csv อ้างอิงตามข้อมูลจาก รูปแบบไฟล์ข้อมูล csvmapping ข้อมูล และรูปแบบการจัดวางตำแหน่ง ตามตารางด้านล่าง |   |   |   |
| **Report Header 1** |
| 1. | EDW 5.2 R3 ปรับเงื่อน Header ให้แสดงชื่อผู้พิมพ์เอกสาร และ วันเวลาที่พิมพ์เอกสาร Update by nattapong.che on 9/1/68 | ผู้พิมพ์เอกสาร : User Login FullName | Dynamic Text |   | แสดงชื่อผู้สั่งพิมพ์รายงานแสดงข้อความ "ผู้พิมพ์เอกสาร : " และ แทนค่าด้วย ชื่อผู้พิมพ์จาก User Loginรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : **ผู้พิมพ์เอกสาร : ธรรมรัตน์ อุดมสวัสดิสุข** | Payment - FinancialManual - Financial | 1 | 1 |
| 2. | EDW 5.2 R3ปรับเงื่อน Header ให้แสดงชื่อผู้พิมพ์เอกสารและ วันเวลาที่พิมพ์เอกสาร Update by nattapong.che on 9/1/68 | วันที่พิมพ์เอกสาร : DD/MM/YYYYเวลา : HH:MM:SS น. | Dynamic Text |   | แสดงวันที่และเวลาสั่งพิมพ์รายงานแสดงข้อความ "วันที่พิมพ์เอกสาร : " และ แทนค่า "DD/MM/YYYY" ด้วย System Dateและแสดงข้อความ "เวลา : " และ แทนค่า "HH:MM:SS" ด้วย System Time และ แสดงข้อความ "น."รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ. ตัวอย่าง :**วันที่พิมพ์เอกสาร : 10/07/2567 เวลา : 12:02:51 น.** | Payment - FinancialManual - Financial | 2 | 1 |
| **Report Header 2** |
| 1 |   | บริษัทไทยสมุทรประกันชีวิต จำกัด (มหาชน) | Dynamic Text |   | Fix ค่า "บริษัทไทยสมุทรประกันชีวิต จำกัด (มหาชน)"รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "บริษัทไทยสมุทรประกันชีวิต จำกัด (มหาชน)" เป็นตัวหนาและมีสีดำตรงกลางรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : **บริษัทไทยสมุทรประกันชีวิต จำกัด (มหาชน)** | Payment - FinancialManual - Financial | 3 | 1 |
| 2. |   | ชื่อรายงาน | Dynamic Text |   | หากเป็นธุรกรรม Financial ให้ดำเนินการดังนี้ กรณีเป็นธุรกรรม RV ให้ Fix ค่า "เอกสารนำส่งรายการทำรับเงิน"กรณีเป็นธุรกรรม PV ให้ Fix ค่า "เอกสารนำส่งรายการทำจ่ายเงิน"หากเป็น ธุรกรรมอื่น ให้แสดงชือ รายงาน หรือตามที่กำหนดแต่ละธุรกรรมย่อยรูปแบบการแสดงผลบนหน้าจอชื่อรายงาน แสดงเป็นตัวหนาและมีสีดำตรงกลางรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : **เอกสารนำส่งรายการรับเงิน** | Payment - FinancialManual - Financial | 4 | 1 |
| 5. |   | "รหัสภาษีบริษัท :" + เลขรหัสภาษีบริษัท |   |   | Fix ค่า "บริษัทไทยสมุทรประกันชีวิต จำกัด (มหาชน)"กำหนดให้อ่านค่ารหัสภาษีบริษัทจาก WIKI : [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)(ข้อ 7 รายละเอียดข้อมูลรหัสภาษีบริษัทใช้สำหรับแสดงข้อมูล Popup รายละเอียดการรับ (Support Booking) การเงิน) [select config1 from cf_adwpc_catalog where type = 'TAXID_COMPANY'](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รหัสภาษีบริษัท :" เป็นตัวหนาและมีสีดำแสดงรหัสภาษีบริษัท เป็นตัวหนาและมีสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : **รหัสภาษีบริษัท : 0107555000210** | Payment - FinancialManual - Financial | 5 | 1 |
| 6. |   | บัญชีธนาคารบริษัท |   |   | Fix หัวคอลัมน์ "บัญชีธนาคารบริษัท"รับค่าจากระบบงานต้นทาง โดยจะกำหนดให้ส่ง ชื่อบัญชีธนาคาร,เลขบัญชีธนาคารรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "บัญชีธนาคารบริษัท" เป็นตัวหนาและมีสีดำแสดงชื่อบัญชีธนาคาร และเลขที่บัญชีธนาคารเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :บัญชีธนาคารบริษัทธนาคารกรุงเทพ จำกัด (มหาชน) เลขที่ 9250025955 | Payment - FinancialManual - Financial | 6 | 1 |
| บัญชีธนาคารบริษัท |
| ธนาคารกรุงเทพ จำกัด (มหาชน) เลขที่ 9250025955 |
| 7. |   | เลขที่แบทช์ทำจ่าย |   |   | Fix หัวคอลัมน์ "เลขที่แบทช์ทำจ่าย"รับค่าจากระบบงานต้นทาง โดยจะกำหนดให้ส่ง เลขที่แบทช์ทำจ่ายแสดงเลขที่แบทช์ทำจ่าย หากไม่มีให้แสดง - รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่แบทช์ทำจ่าย " เป็นตัวหนาและมีสีดำแสดงเลขที่แบทช์ทำจ่าย เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :เลขที่แบทช์ทำจ่ายPY-TB-20211105-00001 | Payment - FinancialManual - Financial | 6 | 2 |
| เลขที่แบทช์ทำจ่าย |
| PY-TB-20211105-00001 |
| 8. |   | จำนวนรายการ |   |   | Fix หัวคอลัมน์ "จำนวนรายการ"แสดง จำนวนรายการ ตามการคำนวณรายการทั้งหมดของแต่ละบัญชีธนาคารบริษัท (คำนวณตามเงื่อนไขของ Function EDW)รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนรายการ" เป็นตัวหนาและมีสีดำแสดงจำนวนรายการ เป็นตัวอักษรสีดำตรงกลางรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :จำนวนรายการ 8 | Payment - FinancialManual - Financial | 6 | 3 |
| จำนวนรายการ |
| 8 |
| 9. |   | จำนวนเงิน |   |   | Fix หัวคอลัมน์ "จำนวนเงิน"แสดง จำนวนเงิน ตาม คำนวณเงินทั้งหมดของแต่ละบัญชีธนาคารบริษัท (คำนวณตามเงื่อนไขของ Function EDW)รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงิน" เป็นตัวหนาและมีสีดำแสดงจำนวนเงิน เป็นตัวอักษรสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :จำนวนเงิน40,500.00 | Payment - FinancialManual - Financial | 6 | 4 |
| จำนวนเงิน |
| 40,500.00 |
| 10. |   | รวมจำนวน |   |   | แสดงจำนวนรายการธุรกรรมทั้งหมดตามเลขเอกสาร Reference numberแสดงข้อความ "รวมจำนวน :" + จำนวนรายการ + "รายการ"รูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รวมจำนวน :" และ "รายการ" เป็นตัวหนาและมีสีดำแสดง"จำนวนรายการ" เป็นตัวหนาและมีสีฟ้าชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง **รวมจำนวน : 1 รายการ** | Payment - FinancialManual - Financial | 7 | 1 |
| 10. | Update By Lalita.hu 12/11/2567:ADW-12643 | จำนวนเงินรวมทั้งหมดจำนวนเงินทั้งหมด |   |   | แสดงจำนวนยอดการจ่ายสุทธิ ทั้งหมดตามเลขเอกสาร Reference numberแสดงข้อความ "จำนวนเงินทั้งหมด :" + จำนวนเงินและทศนิยม 2 ตำแหน่งรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงินทั้งหมด :" เป็นตัวหนาและมีสีดำ"แสดงจำนวนเงินและทศนิยม 2 ตำแหน่ง" เป็นตัวหนาและมีสีฟ้าชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง**จำนวนเงินทั้งหมด : 40,500.00 บาท** | Payment - FinancialManual - Financial | 7 | 2 |

**Report Header เป็นเพียงข้อมูลเบื้องต้น หากแต่ละธุรกรรมมีข้อมูลที่ต้องการแสดง Dynamic เพิ่มเติม สามารถเปลี่ยนแปลงตามต้องการ/ความเหมาะสมของแต่ละระบบงาน**
****Report Detail ให้อ้างอิงตาม Spec ของธุรกรรมย่อย****
Report Detail Supporting_จ่ายในประเทศ_NoWHT

| **Report Detail Supporting_จ่ายในประเทศ_NoWHT** |
|---|
| **No.** | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
| 1. | ประเภทธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 1 |
| 2. | รายการธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "รายการธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รายการธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงรายการธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 2 |
| 3. | เลขที่ธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่ธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่ธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่ธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :650001002255 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 3 |
| 4. | Request/Payment Date | Dynamic Text | On initial | Fix หัวคอลัมน์ "วันที่ Request/Payment Date"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วันที่ Request/Payment Date" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวันที่ Request/Payment Date เป็นตัวอักษรสีดำตรงกลางแสดงข้อมูลในรูปแบบ: DD/MM/YYYY เป็นปี พศ.รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ.ตัวอย่าง :22/11/2567 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 4 |
| 5. | ชื่อ-สกุล | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อ-สกุลผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อ-สกุลผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อ-สกุลผู้รับเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : นายเฉลิม กวัดแกว่ง | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 5 |
| 6. | เลขที่อ้างอิง | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่อ้างอิง"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่อ้างอิง" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่อ้างอิง เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : APP1212 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 6 |
| 7. | วิธีการจ่ายเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "วิธีการจ่ายเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วิธีการจ่ายเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวิธีการจ่ายเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : โอนเงิน-ปกติ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 7 |
| 8. | ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : นายเฉลิม กวัดแกว่ง | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 8 |
| 9. | ชื่อธนาคารของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อธนาคารของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อธนาคารของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อธนาคารของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 9 |
| 10. | สาขาธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "สาขาธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "สาขาธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงสาขาธนาคารเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ท่าชนะ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 10 |
| 11. | เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 015312334271 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 11 |
| 12. | จำนวนเงินสุทธิ | Dynamic Text | On initial | Fix หัวคอลัมน์ "จำนวนเงินสุทธิ"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงินสุทธิ" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินสุทธิเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 12 |
| 13. | ปีกรมธรรม์ประกันภัย | Dynamic Text | On initial | Fix หัวคอลัมน์ "ปีกรมธรรม์ประกันภัย"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ปีกรมธรรม์ประกันภัย" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงปีกรมธรรม์ประกันภัยเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 1 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 13 |
| 14. | จำนวนทุนประกันภัย | Dynamic Text | On initial | Fix หัวคอลัมน์ "จำนวนทุนประกันภัย"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนทุนประกันภัย" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนทุนประกันภัยเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 14 |
| 15. | ชื่อผู้ให้บริการรับชำระเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อผู้ให้บริการรับชำระเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อผู้ให้บริการรับชำระเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อผู้ให้บริการรับชำระเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ธนาคารกสิกรไทย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 15 |
| 16. | ค่าธรรมเนียมธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "ค่าธรรมเนียมธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ค่าธรรมเนียมธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงค่าธรรมเนียมธนาคารเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 16 |
| 17. | Cost Center | Dynamic Text | On initial | Fix หัวคอลัมน์ "Cost Center"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "Cost Center" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงCost Centerเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 830021-ฝ่ายขายช่องทางตัวแทน | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 17 |

Report Detail Supporting_จ่ายในประเทศ_WHT

| **Report Detail Supporting_จ่ายในประเทศ_WHT** |
|---|
| **No.** | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
| 1. | ประเภทธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csv แสดงข้อมูลในรูปแบบ: Textตัวอย่าง : สินไหม | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 1 |
| 2. | ประเภทของเงินจ่าย | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทของเงินจ่าย"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทของเงินจ่าย" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทของเงินจ่ายเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : สินไหมสุขภาพ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 2 |
| 3. | เลขที่อ้างอิง | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่อ้างอิง"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่อ้างอิง" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่อ้างอิงเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 2567/05/0695 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 3 |
| 4. | Request/Payment Date | Dynamic Text | On initial | Fix หัวคอลัมน์ "วันที่ Request/Payment Date"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วันที่ Request/Payment Date" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวันที่ Request/Payment Date เป็นตัวอักษรสีดำตรงกลางแสดงข้อมูลในรูปแบบ: DD/MM/YYYY เป็นปี พศ.รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ.ตัวอย่าง :22/11/2567 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 4 |
| 5. | ชื่อสถานพยาบาล | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อสถานพยาบาล"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อสถานพยาบาล " เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อสถานพยาบาล เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : กรุงเทพ จันทบุรี | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 5 |
| 6. | วิธีการจ่ายเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "วิธีการจ่ายเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วิธีการจ่ายเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวิธีการจ่ายเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : โอนเงิน-ปกติ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 6 |
| 7. | ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : นายเฉลิม กวัดแกว่ง | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 7 |
| 8. | ชื่อธนาคารของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อธนาคารของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อธนาคารของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อธนาคารของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 9 |
| 9. | สาขาธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "สาขาธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "สาขาธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงสาขาธนาคารเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ท่าชนะ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 9 |
| 10. | เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 015312334271 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 10 |
| 11. | WHT Gross1 | Dynamic Text | On initial | Fix หัวคอลัมน์ "WHT Gross1"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "WHT Gross1" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินWHT Gross1 เป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลข และทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 11 |
| 12. | WHT Amount1 | Dynamic Text | On initial | Fix หัวคอลัมน์ "WHT Amount1"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "WHT Amount1" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินWHT Amount1 เป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลข และทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 12 |
| 13. | จำนวนเงินสุทธิ | Dynamic Text | On initial | Fix หัวคอลัมน์ "จำนวนเงินสุทธิ"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงินสุทธิ" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินสุทธิเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 13 |
| 14. | ชื่อผู้เสียภาษี | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อผู้เสียภาษี"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อผู้เสียภาษี" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อผู้เสียภาษีเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : บริษัท วัฒนเวช จำกัด | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 14 |
| 15. | ที่อยู่ผู้เสียภาษี(1) | Dynamic Text | On initial | Fix หัวคอลัมน์ "ที่อยู่ผู้เสียภาษี(1)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ที่อยู่ผู้เสียภาษี(1)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงที่อยู่ผู้เสียภาษี(1)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : เลขที่ 2 ซ.ศูนย์วิจัย 7 ถ.เพชรบุรตัดใหม่ แขวงบางกะปิ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 15 |
| 16. | ที่อยู่ผู้เสียภาษี(2) | Dynamic Text | On initial | Fix หัวคอลัมน์ "ที่อยู่ผู้เสียภาษี(2)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ที่อยู่ผู้เสียภาษี(2)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงที่อยู่ผู้เสียภาษี(2)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : เขตห้วยขวาง กรุงเทพฯ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 16 |
| 17. | ที่อยู่ผู้เสียภาษี(3) | Dynamic Text | On initial | Fix หัวคอลัมน์ "ที่อยู่ผู้เสียภาษี(3)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ที่อยู่ผู้เสียภาษี(2)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงที่อยู่ผู้เสียภาษี(2)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 10310 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 17 |
| 18. | เลขที่ประจำตัวผู้เสียภาษี | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่ประจำตัวผู้เสียภาษี"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่ประจำตัวผู้เสียภาษี" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่ประจำตัวผู้เสียภาษีเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 015312334271 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 18 |
| 19. | ประเภทภาษี(ภงด.3/ภงด.53) | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทภาษี(ภงด.3/ภงด.53)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทภาษี(ภงด.3/ภงด.53)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทภาษี(ภงด.3/ภงด.53)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 53 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 19 |
| 20. | WHT Type(service) | Dynamic Text | On initial | Fix หัวคอลัมน์ "WHT Type(service)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "WHT Type(service)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงWHT Type(service)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 64 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 20 |

Report Detail Supporting_จ่ายต่างประเทศ_NoWHT

| **Report Detail Supporting_จ่ายต่างประเทศ_NoWHT** |
|---|
| **No.** | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
| 1. | ประเภทธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 1 |
| 2. | ประเภทของเงินจ่าย | Dynamic Text | On initial | Fix หัวคอลัมน์ "รายการธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รายการธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงรายการธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 2 |
| 3. | Request/Payment Date | Dynamic Text | On initial | Fix หัวคอลัมน์ "วันที่ Request/Payment Date"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วันที่ Request/Payment Date" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวันที่ Request/Payment Date เป็นตัวอักษรสีดำตรงกลางแสดงข้อมูลในรูปแบบ: DD/MM/YYYY เป็นปี พศ.รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ.ตัวอย่าง :22/11/2567 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 3 |
| 4. | ชื่อผู้เอาประกันภัยต่อ | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อผู้เอาประกันภัยต่อ "Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อผู้เอาประกันภัยต่อ " เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อ-สกุลผู้รับเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : The Dai-ichi life insurance | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 4 |
| 5. | ที่อยู่ผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ที่อยู่ผู้รับเงิน "Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ที่อยู่ผู้รับเงิน " เป็นตัวหนาและมีสีดำ ตรงกลางแสดงที่อยู่ผู้รับเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 6 Kanda-Surugadai 3-chome Chiyoda-ku Tokyo 101-8703 JAPAN | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 5 |
| 6. | เลขที่อ้างอิง | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่อ้างอิง"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่อ้างอิง" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่อ้างอิง เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : APP1212 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 6 |
| 7. | ปีที่มีผลบังคับใช้ตามสัญญาประกันต่อ | Dynamic Text | On initial | Fix หัวคอลัมน์ "ปีที่มีผลบังคับใช้ตามสัญญาประกันต่อ"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ปีที่มีผลบังคับใช้ตามสัญญาประกันต่อ" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงปีที่มีผลบังคับใช้ตามสัญญาประกันต่อ เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 5 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 7 |
| 7. | วิธีการจ่ายเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "วิธีการจ่ายเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วิธีการจ่ายเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวิธีการจ่ายเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : โอนเงิน-ปกติ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 7 |
| 8. | จำนวนเงินสุทธิ | Dynamic Text | On initial | Fix หัวคอลัมน์ "จำนวนเงินสุทธิ"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงินสุทธิ" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินสุทธิเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 8 |
| 9. | สกุลเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "สกุลเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "สกุลเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงสกุลเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : THB | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 9 |
| 10. | วิธีการจ่ายเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "วิธีการจ่ายเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วิธีการจ่ายเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวิธีการจ่ายเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : โอนเงิน-ปกติ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 10 |
| 11. | ชื่อบัญชีธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อบัญชีธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อบัญชีธนาคา" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อบัญชีธนาคาร เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : The Dai-ichi life insurance | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 11 |
| 12. | ชื่อธนาคารของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อธนาคารของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อธนาคารของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อธนาคารของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : MIZUHO Bank | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 12 |
| 13. | สาขาธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "สาขาธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "สาขาธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงสาขาธนาคารเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : Tokyo | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 13 |
| 14. | ที่อยู่ธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "ที่อยู่ธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ที่อยู่ธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงที่อยู่ธนาคาร เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : Kanda-Ekimae Branch 6-3 Kanda Kajicho 3-chome Chiyoda-ku Tokyo 101-0045 JAPAN | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 14 |
| 15. | เลขที่บัญชีธนาคาร/พร้อมเพย์ | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่บัญชีธนาคาร/พร้อมเพย์"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่บัญชีธนาคาร/พร้อมเพย์" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่บัญชีธนาคาร/พร้อมเพย์ เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 015312334271 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 15 |
| 16. | รหัสธนาคาร (SWIFT CODE) | Dynamic Text | On initial | Fix หัวคอลัมน์ "รหัสธนาคาร (SWIFT CODE)"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รหัสธนาคาร (SWIFT CODE)" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงรหัสธนาคาร (SWIFT CODE)เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : MHCBJPJ6 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 16 |

Report Detail Supporting_รับเงิน

| **Report Detail Supporting_รับเงิน** |
|---|
| **No.** | **Component Name/Field Name** | **Type** | **Event** | **Description/ข้อมูลที่จะใส่ใน field** | **Dashboard** | **Row Position** | **Column Position** |
| 1. | ประเภทธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "ประเภทธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ประเภทธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงประเภทธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 1 |
| 2. | รายการรับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "รายการรับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "รายการรับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงรายการธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : รับฝากเบี้ย | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 2 |
| 3. | เลขที่ธุรกรรม | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่ธุรกรรม"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่ธุรกรรม" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่ธุรกรรมเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง :650001002255 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 3 |
| 4. | Receipt Date | Dynamic Text | On initial | Fix หัวคอลัมน์ "Receipt Date"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "Receipt Date" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวันที่ Receipt Date เป็นตัวอักษรสีดำตรงกลางแสดงข้อมูลในรูปแบบ: DD/MM/YYYY เป็นปี พศ.รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ.ตัวอย่าง :22/11/2567 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 4 |
| 5. | ชื่อ-สกุล | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อ-สกุลผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อ-สกุลผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อ-สกุลผู้รับเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : นายเฉลิม กวัดแกว่ง | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 5 |
| 6. | เลขที่อ้างอิง | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่อ้างอิง"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่อ้างอิง" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่อ้างอิง เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : APP1212 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 6 |
| 7. | จำนวนเงินสุทธิ | Dynamic Text | On initial | Fix หัวคอลัมน์ "จำนวนเงินสุทธิ"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "จำนวนเงินสุทธิ" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงจำนวนเงินสุทธิเป็นตัวเลขและทศนิยม 2 ตำแหน่งสีดำชิดขวารูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: ตัวเลขและทศนิยม 2 ตำแหน่งตัวอย่าง : 100,000.00 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 7 |
| 8. | ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : นายเฉลิม กวัดแกว่ง | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 8 |
| 9. | ชื่อธนาคารของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "ชื่อธนาคารของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "ชื่อธนาคารของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงชื่อธนาคารของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 9 |
| 10. | สาขาธนาคาร | Dynamic Text | On initial | Fix หัวคอลัมน์ "สาขาธนาคาร"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "สาขาธนาคาร" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงสาขาธนาคารเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ท่าชนะ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 10 |
| 11. | เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเรดิต ของผู้รับเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่บัญชี ธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงินเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : 015312334271 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 11 |
| 12. | วิธีการจ่ายเงิน | Dynamic Text | On initial | Fix หัวคอลัมน์ "วิธีการจ่ายเงิน"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "วิธีการจ่ายเงิน" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวิธีการจ่ายเงิน เป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : โอนเงิน-ปกติ | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 12 |
| 13. | Payment Date | Dynamic Text | On initial | Fix หัวคอลัมน์ "Payment Date"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "Payment Date" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงวันที่ Payment Date เป็นตัวอักษรสีดำตรงกลางแสดงข้อมูลในรูปแบบ: DD/MM/YYYY เป็นปี พศ.รูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Text DD/MM/YYYY เป็นปี พศ.ตัวอย่าง :22/11/2567 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 13 |
| 14. | เลขที่เช็ค | Dynamic Text | On initial | Fix หัวคอลัมน์ "เลขที่เช็ค"Format การแสดงผลรูปแบบการแสดงผลบนหน้าจอแสดงข้อความ "เลขที่เช็ค" เป็นตัวหนาและมีสีดำ ตรงกลางแสดงเลขที่เช็คเป็นตัวอักษรสีดำชิดซ้ายรูปแบบไฟล์ข้อมูล csv : อ้างอิงตามมาตรฐานไฟล์ csvแสดงข้อมูลในรูปแบบ: Textตัวอย่าง : ข111452 | Payment - FinancialManual - Financial | 8 เป็นต้นไป | 14 |

---

## Hyperlinks บนหน้านี้

- [05_10 สรุประบบและรายละเอียดกลุ่มธุรกรรมที่หน้า Dashboard Daily](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693758)
- [05_114 สรุประบบและรายละเอียดธุรกรรมที่หน้า Dashboard Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=880738817)
- [05_25 ระบบและรายละเอียดที่จะแสดงที่หน้า Dashboard Monthly](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=847053120)
- [05_125 สรุประบบและรายละเอียดธุรกรรมที่หน้า Dashboard Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=953549089)
- [03_00_07_02_01 - Template (File Format-Specificfield-keyin) Accounting](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=960955053)
- [03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467)
- [03_14_04_01 รายการธุรกรรมที่อัพโหลดไฟล์ข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=958890106)
- [03_14_04_02 รายการธุรกรรมที่กดนำเข้าข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=959217848)
- [03_14_04_03 รายการธุรกรรมที่ระบบหน้าบ้านส่งข้อมูลเข้ามา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989626553)
- [cf_masking_event](http://wiki.thaisamut.co.th/display/RDSADW/cf_masking_event)
- [ADW-13025](http://jira.thaisamut.co.th/browse/ADW-13025)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [select config1 from cf_adwpc_catalog where type = 'TAXID_COMPANY'](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1044840806/check.png?version=1&modificationDate=1721041258918&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1044840806/error.png?version=1&modificationDate=1721041404585&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2025-1-9%2014%3A44%3A0.png?version=1&modificationDate=1736408639987&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2024-8-7%2010%3A59%3A37.png?version=1&modificationDate=1723003177128&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2024-8-7%2010%3A59%3A43.png?version=1&modificationDate=1723003183243&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2024-8-7%2011%3A1%3A34.png?version=1&modificationDate=1723003293690&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2024-8-5%2015%3A18%3A43.png?version=1&modificationDate=1722845923010&api=v2
- http://wiki.thaisamut.co.th/download/attachments/912556232/image2024-8-5%2015%3A16%3A37.png?version=1&modificationDate=1722845796663&api=v2
