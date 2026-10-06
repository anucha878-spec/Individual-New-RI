# PY-000-FC-001 หน้าจอ Popup Support Booking

- **Page ID:** 1266811431
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811431
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-000 : หน้าจอกลาง > PY-000-FC-001 หน้าจอ Popup Support Booking
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

![img](/download/attachments/1266811442/image2026-5-20%208%3A38%3A57.png?version=1&modificationDate=1779241137663&api=v2)
SupportBooking_จ่ายในประเทศ_WHT
![img](/download/attachments/1266811442/image2026-5-20%208%3A38%3A59.png?version=1&modificationDate=1779241139655&api=v2)
SupportBooking_รับเงิน
![img](/download/attachments/1266811442/image2026-2-4%2010%3A26%3A24.png?version=1&modificationDate=1770175584896&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลการจ่ายรายธุรกรรม
- เพื่อให้ผู้ใช้งานสามารถดูเอกสารแนบภายใต้ธุรกรรม
- เพื่อให้ผู้ใช้งานสามารถ Export File สำหรับรายงาน Support Booking

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน
  - ผู้ใช้งานจะต้องกดปุ่ม รายละเอียด ที่หน้าจอหลัก
    - กรณีเข้าใช้งานจากหน้าจอดังนี้ ให้แสดง รูปแบบ Support Booking จ่ายในประเทศ WHT เท่านั้น
      1. [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400)
      2. [PY-002-FC-001 หน้าจอค้นหา Generate Batch Payment](/pages/viewpage.action?pageId=1267859518)
      3. [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)
      4. [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](/pages/viewpage.action?pageId=1269858922)
      5. [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)

### การกระทำกับหน้าจอ (Actions)

- Export รายงาน Support Booking
- ดูเอกสารแนบระดับ Transaction

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - หน้าจอจะแสดงข้อมูล Support Booking แยกตามประเภทรายงานได้อย่างถูกต้อง
  - ผู้ใช้งานสามารถ Export Report Support Booking ตามการแสดงผลบนหน้าจอได้
  - ผู้ใช้งานสามารถกดดูเอกสารแนบจากฝ่ายปฎิบัติการ ระดับ Transaction ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีรายการธุรกรรมจากต้นทางไม่ตรงกับประเภทของ Support Booking ระบบจะแสดงแจ้งเตือน "ไม่สามารถแสดง Support Booking ได้เนื่องจากประเภทธุรกรรมไม่ถูกต้อง"

### รายละเอียดส่วนการแสดงผลข้อมูล

ตัวอย่างจากโครงการ EDW : [03_00_05 Pop up แสดงข้อมูลรายละเอียด(support booking)](/pages/viewpage.action?pageId=912556232)

| **ส่วน Title** |
|---|
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Title | Title | No.ประเภท Support BookingTitle1Support Booking จ่ายในประเทศ WHTรายละเอียดรายการทำจ่ายเงิน2Support Booking รับเงินรายละเอียดรายการทำรับเงิน |   |   |
| No. | ประเภท Support Booking | Title |
| 1 | Support Booking จ่ายในประเทศ WHT | รายละเอียดรายการทำจ่ายเงิน |
| 2 | Support Booking รับเงิน | รายละเอียดรายการทำรับเงิน |
| **ส่วนปุ่ม Export** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | Export | Export CSV ตามรูปแบบไฟล์ ดังนี้No.[ตัวอย่างเอกสาร/รายงาน](/pages/viewpage.action?pageId=1255703325)Example File .csv1[Supporting_จ่ายในประเทศ_WHT](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=1207935566#gid=1207935566)**อ้างอิงการแสดง column และข้อมูลตามหน้าจอ**[จ่ายในประเทศ_WHT_Support_Booking_EDP202508130002.csv](/download/attachments/1266811446/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8_WHT_Support_Booking_EDP202508130002.csv?version=1&modificationDate=1758615790684&api=v2)2[Supporting_รับเงิน](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=793194074#gid=793194074)**อ้างอิงการแสดง column และข้อมูลตามหน้าจอ**[รับเงิน_Support_Booking_ECP202509010006.csv](/download/attachments/1266811446/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99_Support_Booking_ECP202509010006.csv?version=1&modificationDate=1758615817675&api=v2) |   |   |
| No. | [ตัวอย่างเอกสาร/รายงาน](/pages/viewpage.action?pageId=1255703325) | Example File .csv |
| 1 | [Supporting_จ่ายในประเทศ_WHT](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=1207935566#gid=1207935566) | **อ้างอิงการแสดง column และข้อมูลตามหน้าจอ**[จ่ายในประเทศ_WHT_Support_Booking_EDP202508130002.csv](/download/attachments/1266811446/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8_WHT_Support_Booking_EDP202508130002.csv?version=1&modificationDate=1758615790684&api=v2) |
| 2 | [Supporting_รับเงิน](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=793194074#gid=793194074) | **อ้างอิงการแสดง column และข้อมูลตามหน้าจอ**[รับเงิน_Support_Booking_ECP202509010006.csv](/download/attachments/1266811446/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99_Support_Booking_ECP202509010006.csv?version=1&modificationDate=1758615817675&api=v2) |
| **ส่วนหัวข้อเอกสาร** |
| 1 | Label | ชื่อบริษัท | แสดงข้อมูลจาก [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลชื่อบริษัท |   |   |
| 2 | Label | ชื่อรายงาน | No.ประเภท Support Bookingชื่อรายงาน1Support Booking จ่ายในประเทศ WHTเอกสารนำส่งรายการทำจ่ายเงิน2Support Booking รับเงินเอกสารนำส่งรายการทำรับเงิน |   |   |
| No. | ประเภท Support Booking | ชื่อรายงาน |
| 1 | Support Booking จ่ายในประเทศ WHT | เอกสารนำส่งรายการทำจ่ายเงิน |
| 2 | Support Booking รับเงิน | เอกสารนำส่งรายการทำรับเงิน |
| **ส่วนแสดงข้อมูลบริษัท** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงินกรณีไม่มีข้อมูลให้แสดง - | BAT2568070100001 |   |
| 2 | Label | รหัสภาษีบริษัท | แสดงข้อมูลจาก [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลรหัสภาษีบริษัท | 0107555000210 |   |
| 3 | Label | บัญชีธนาคารบริษัท | แสดงข้อมูล บัญชีธนาคารบริษัท ที่ฝ่ายการเงินระบุ กรณีไม่มีข้อมูลให้แสดง - | ธนาคารกรุงเทพ จำกัด (มหาชน) เลขที่ 9250025955 |   |
| 4 | Label | Batch Number ฝ่ายปฎิบัติการ | แสดงข้อมูล Batch Number ฝ่ายปฎิบัติการ ที่ระบุข้อมูลจากต้นทาง | PY-TB-20240701-00001 |   |
| 5 | Label | จำนวนรายการ | แสดงจำนวนรายการรวมภายใต้ Batch สำหรับทำจ่ายแสดงรูปแบบเป็นตัวเลข | 1 |   |
| 6 | Label | จำนวนเงิน | แสดงจำนวนเงินรวมภายใต้ Batch สำหรับทำจ่ายแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 10,000.00 |   |
| **ส่วนแสดงข้อมูลรวมรายการ** |
| 1 | Label | รวมจำนวน | แสดงจำนวนรายการรวมภายใต้ Batch สำหรับทำจ่ายแสดงรูปแบบเป็นตัวเลข | 1 |   |
| 2 | Label | จำนวนเงินทั้งหมด | แสดงจำนวนเงินรวมภายใต้ Batch สำหรับทำจ่ายแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 10,000.00 |   |
| **ส่วนแสดงข้อมูล Support Booking ในประเทศ Withholding Tax** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงินกรณีไม่มีข้อมูลให้แสดง - | BAT-25680701-00001 |   |
| 2 | Label | ประเภทธุรกรรม | แสดงข้อมูล ประเภทธุรกรรม ที่ระบุข้อมูลจากต้นทาง | สินไหม |   |
| 3 | Label | ประเภทของเงินจ่าย | แสดงข้อมูล ประเภทของเงินจ่าย ที่ระบุข้อมูลจากต้นทาง | สินไหมสุขภาพ |   |
| 4 | Label | เลขที่ธุรกรรม | แสดงข้อมูล เลขที่อ้างอิง ที่ระบุข้อมูลจากต้นทาง | เลขที่เอกสารบัญชี |   |
| 5 | Label | Request Payment Date | แสดงข้อมูล Request Payment Date ที่ระบุข้อมูลจากต้นทาง | 13/7/2567 |   |
| 6 | Label | ชื่อผู้รับเงิน | แสดงข้อมูล ชื่อสถานพยาบาล/ ชื่อผู้เอาประกัน/ ชื่อตัวแทน ที่ระบุข้อมูลจากต้นทาง | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   |
| 7 | Label | เลขที่อ้างอิง | แสดงข้อมูล เลขกรมธรรม์ หรือ รหัสตัวแทน หรือ ตามรูปแบบใน Support Booking เดิมธุรกรรมเลขที่อ้างอิง1 เงินจ่ายคืนทันที APU2 เงินจ่ายคืนทันที RPU3 เวนคืนกรมธรรม์4 Freelook5 ครบกำหนดสัญญา6 เงินทรงชีพ7 เช็คคืนตามเงื่อนไขกรมธรรม์8 เงินบำนาญ11 บอกล้าง Underwrite12 กู้ใหม่13 กู้เพิ่มเลขกรมธรรม์9 จ่ายรายได้รายวัน10 จ่ายรายได้รายงวดรหัสตัวแทน14 บันทึกจ่าย WHTตามรูปแบบใน Support Booking เดิม | 3265258 |   |
| ธุรกรรม | เลขที่อ้างอิง |
| 1 เงินจ่ายคืนทันที APU2 เงินจ่ายคืนทันที RPU3 เวนคืนกรมธรรม์4 Freelook5 ครบกำหนดสัญญา6 เงินทรงชีพ7 เช็คคืนตามเงื่อนไขกรมธรรม์8 เงินบำนาญ11 บอกล้าง Underwrite12 กู้ใหม่13 กู้เพิ่ม | เลขกรมธรรม์ |
| 9 จ่ายรายได้รายวัน10 จ่ายรายได้รายงวด | รหัสตัวแทน |
| 14 บันทึกจ่าย WHT | ตามรูปแบบใน Support Booking เดิม |
| 8 | Label | วิธีการจ่ายเงิน | แสดงข้อมูล วิธีการจ่ายเงิน ที่ระบุข้อมูลจากต้นทาง | โอนเงิน-ปกติ |   |
| 9 | Label | ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | แสดงข้อมูล ชื่อบัญชีธนาคาร/พร้อมเพย์ ที่ระบุข้อมูลจากต้นทาง | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   |
| 10 | Label | เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | แสดงข้อมูล เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ที่ระบุข้อมูลจากต้นทาง | 0938844455 |   |
| 11 | Label | ชื่อธนาคารของผู้รับเงิน | แสดงข้อมูล ชื่อธนาคารของผู้รับเงิน ที่ระบุข้อมูลจากต้นทาง | ธนาคารกรุงเทพ จำกัด (มหาชน) |   |
| 12 | Label | สาขาธนาคาร | แสดงข้อมูล สาขาธนาคาร ที่ระบุข้อมูลจากต้นทาง | อโศก |   |
| 13 | Label | WHT Gross1 | แสดงข้อมูล WHT Gross1 ที่ระบุข้อมูลจากต้นทาง | 10513 |   |
| 14 | Label | WHT Amount1 | แสดงข้อมูล WHT Amount1 ที่ระบุข้อมูลจากต้นทาง | 315.39 |   |
| 15 | Label | จำนวนเงินสุทธิ | แสดงข้อมูล จำนวนเงินสุทธิ ที่ระบุข้อมูลจากต้นทางแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 10197.61 |   |
| 16 | Label | ชื่อผู้เสียภาษี | แสดงข้อมูล ชื่อผู้เสียภาษี ที่ระบุข้อมูลจากต้นทาง | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   |
| 17 | Label | ที่อยู่ผู้เสียภาษี(1) | แสดงข้อมูล ที่อยู่ผู้เสียภาษี(1) ที่ระบุข้อมูลจากต้นทาง | 1308/9 ถนนมิตรภาพ ต.ในเมือง อ.เมือง นครราชสีมา |   |
| 18 | Label | ที่อยู่ผู้เสียภาษี(2) | แสดงข้อมูล ที่อยู่ผู้เสียภาษี(2) ที่ระบุข้อมูลจากต้นทางกรณีไม่มีข้อมูลให้แสดง - | - |   |
| 19 | Label | Email | แสดงข้อมูล ที่อยู่ Email ของผู้รับเงิน | Abc@gmail.com |   |
| 20 | Label | เลขที่ประจำตัวผู้เสียภาษี | แสดงข้อมูล เลขที่ประจำตัวผู้เสียภาษี ที่ระบุข้อมูลจากต้นทาง | 0305535001462 |   |
| 21 | Label | ประเภทภาษี (ภงด.3/ภงด.53) | แสดงข้อมูล ประเภทภาษี (ภงด.3/ภงด.53) ที่ระบุข้อมูลจากต้นทาง | 53 |   |
| 22 | Label | WHT Type (service) | แสดงข้อมูล WHT Type (service) ที่ระบุข้อมูลจากต้นทาง | 64 |   |
| 23 | Label | Voucher Number WHT | แสดงข้อมูล Voucher Number WHT สำหรับรายการหักภาษี ณ ที่จ่าย |   | ปรับเพิ่มจากธุรกรรม Online PaymentAdded By Patcha.vo 22/04/69อ้างอิง Email : Re: [MOM][Online Payment] : หารือการรับ-ส่งข้อมูลการจ่ายจากระบบ Online Payment ให้ระบบ Payment Management |
| 24 | Button | เอกสารแนบ | Enable : ตลอดเวลา เมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction](/pages/viewpage.action?pageId=1267859662) |   |   |
| **ส่วนแสดงข้อมูล Support Booking รับเงิน** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงินกรณีไม่มีข้อมูลให้แสดง - | BAT-25680701-00001 |   |
| 2 | Label | ประเภทธุรกรรม | แสดงข้อมูล ประเภทธุรกรรม ที่ระบุข้อมูลจากต้นทาง | ประกันภัยต่อ |   |
| 3 | Label | รายการรับเงิน | แสดงข้อมูล รายการรับเงิน ที่ระบุข้อมูลจากหน้าจอรออนุมัติบันทึกบัญชี | รับคืนเงินฝากเบี้ยประกันให้ลูกค้า - Format ไม่ผ่าน |   |
| 4 | Label | เลขที่ธุรกรรม | แสดงข้อมูล เลขที่ธุรกรรม ที่ระบุข้อมูลจากต้นทาง | 67072500001 |   |
| 5 | Label | Receipt Date | แสดงข้อมูล Receipt Date ที่ระบุข้อมูลจากหน้าจอรออนุมัติบันทึกบัญชี | 26/07/2567 |   |
| 6 | Label | ชื่อ-สกุล | แสดงข้อมูล ชื่อ-สกุล ที่ระบุข้อมูลจากต้นทาง | น.ส.ขวัญใจ ขจรศักดิ์โกศล |   |
| 7 | Label | เลขที่อ้างอิง | แสดงข้อมูล เลขที่อ้างอิง ที่ระบุข้อมูลจากต้นทาง | 670001073389 |   |
| 8 | Label | จำนวนเงินสุทธิ | แสดงข้อมูล จำนวนเงินสุทธิ ที่ระบุข้อมูลจากต้นทางแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 1,000.00 |   |
| 9 | Label | วิธีการจ่ายเงิน | แสดงข้อมูล วิธีการจ่ายเงิน ที่ระบุข้อมูลจากต้นทาง | โอนเงิน-ปกติ |   |
| 10 | Label | ชื่อบัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต | แสดงข้อมูล ชื่อบัญชีธนาคาร/พร้อมเพย์ ที่ระบุข้อมูลจากต้นทาง | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   |
| 11 | Label | เลขที่บัญชี ธนาคาร/พร้อมเพย์/บัตรเครดิต ของผู้รับเงิน | แสดงข้อมูล เลขที่บัญชีธนาคาร/พร้อมเพย์/บัตรเครดิต ที่ระบุข้อมูลจากต้นทาง | 0938844455 |   |
| 12 | Label | ชื่อธนาคารของผู้รับเงิน | แสดงข้อมูล ชื่อธนาคารของผู้รับเงิน ที่ระบุข้อมูลจากต้นทาง | ธนาคารกรุงเทพ จำกัด (มหาชน) |   |
| 13 | Label | สาขาธนาคาร | แสดงข้อมูล สาขาธนาคาร ที่ระบุข้อมูลจากต้นทาง | อโศก |   |
| 14 | Label | Payment Date | แสดงข้อมูล Payment Date ที่ระบุข้อมูลจากต้นทาง | 26/07/2567 |   |
| 15 | Label | เลขที่เช็ค | แสดงข้อมูล เลขที่เช็ค ที่ระบุจากหน้าจอระบุข้อมูลเช็ค | - |   |
| 16 | Button | เอกสารแนบ | Enable : ตลอดเวลา เมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction](/pages/viewpage.action?pageId=1267859662) |   |   |

---

## Hyperlinks บนหน้านี้

- [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)
- [PY-002-FC-001 หน้าจอค้นหา Generate Batch Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859518)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [9. Mapping Support Booking](http://wiki.thaisamut.co.th/display/RDSCPENH/9.+Mapping+Support+Booking)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [03_00_05 Pop up แสดงข้อมูลรายละเอียด(support booking)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=912556232)
- [ตัวอย่างเอกสาร/รายงาน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1255703325)
- [Supporting_จ่ายในประเทศ_WHT](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=1207935566#gid=1207935566)
- [จ่ายในประเทศ_WHT_Support_Booking_EDP202508130002.csv](http://wiki.thaisamut.co.th/download/attachments/1266811446/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8_WHT_Support_Booking_EDP202508130002.csv?version=1&modificationDate=1758615790684&api=v2)
- [Supporting_รับเงิน](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=793194074#gid=793194074)
- [รับเงิน_Support_Booking_ECP202509010006.csv](http://wiki.thaisamut.co.th/download/attachments/1266811446/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99_Support_Booking_ECP202509010006.csv?version=1&modificationDate=1758615817675&api=v2)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859662)
- [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859662)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1266811442/image2026-5-20%208%3A38%3A57.png?version=1&modificationDate=1779241137663&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1266811442/image2026-5-20%208%3A38%3A59.png?version=1&modificationDate=1779241139655&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1266811442/image2026-2-4%2010%3A26%3A24.png?version=1&modificationDate=1770175584896&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1266811446/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8_WHT_Support_Booking_EDP202508130002.csv?version=1&modificationDate=1758615790684&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1266811446/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99_Support_Booking_ECP202509010006.csv?version=1&modificationDate=1758615817675&api=v2
