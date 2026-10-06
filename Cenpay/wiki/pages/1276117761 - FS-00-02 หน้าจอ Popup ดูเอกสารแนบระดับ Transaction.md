# FS-00-02 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction

- **Page ID:** 1276117761
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117761
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-00 หน้าจอกลาง > FS-00-02 หน้าจอ Popup ดูเอกสารแนบระดับ Transaction
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797117471 {padding: 0px;} div.rbtoc1784797117471 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797117471 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-หน้าจอหลัก)
- [Screen Overview](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-00-02หน้าจอPopupดูเอกสารแนบระดับTransaction-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1267859665/image2025-8-5%209%3A46%3A21.png?version=1&modificationDate=1754361982356&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อดูเอกสารแนบจากข้อมูลต้นทาง รายธุรกรรม

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน
  - ผู้ใช้งานจะต้องกดปุ่ม ดูเอกสารแนบ ที่หน้าจอหลัก
  - ระบบจะต้องมีรายการเอกสารที่มาจากข้อมูลต้นทาง

### การกระทำกับหน้าจอ (Actions)

- ดูเอกสารผ่านระบบ DMS
- ปิดหน้าจอดูเอกสารแนบระดับ Transaction

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - หน้าจอจะแสดงข้อมูลเอกสารแนบจากข้อมูลต้นทาง
  - ระบบจะเชื่อมต่อระบบ DMS เพื่อเปิดหน้าจอแสดงข้อมูลเอกสารได้

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีไม่มีเอกสารระดับ Transaction ระบบจะแสดงตารางผลลัพธ์ว่างเปล่า และแสดงข้อความที่ตาราง "ไม่พบข้อมูล"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| ส่วนแสดงข้อมูลผลการค้นหา1 การเรียงลำดับข้อมูล1.เรียงตามวันและเวลาที่ทำรายการจากเก่าไปใหม่ No Component NameAction / Data ValueExampleRemark1ButtonดูเอกสารEnable : เสมอ เมื่อกดปุ่มระบบจะเปิดหน้าจอ DMS โดยแสดงหน้าจอใหม่ 2Labelชื่อไฟล์แสดงชื่อเอกสาร ที่ระบุจากต้นทางเอกสารแนบ1.pdf 3Labelวันและเวลาที่ทำรายการแสดงวันและเวลาที่ทำรายการ ที่ระบุจากต้นทางแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน30/06/2568 21.00 4Labelผู้ทำรายการแสดงข้อมูล username ผู้ทำรายการที่ระบุจากต้นทางkanokporn.ch 5ButtonปิดEnable : เสมอ เมื่อกดปุ่มระบบจะปิดหน้าจอ Popup | **แสดงข้อมูล** เงื่อนไขการดึงข้อมูลเอกสารระดับ Transactionหน้าจอเงื่อนไขแสดงรายการเอกสาร[FS-00-01 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1276117756)[tx_document](/display/RDSCPENH/tx_document).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id[FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117788)[tx_document](/display/RDSCPENH/tx_document).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id[tx_document](/display/RDSCPENH/tx_document).doc_id in ('PAYM1','PAYM2')Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarkดูเอกสารButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Click ระบบจะเปิดหน้าจอระบบ DMS โดย ดึง @document_id จากตาราง [tx_document](/display/RDSCPENH/tx_document).dms_document_id เงื่อนไขดังนี้และเปิดที่ url : [https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=@document_id#SearchDocument](https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=100000#SearchDocument) ชื่อไฟล์LabelOn Initialแสดงชื่อเอกสาร ที่ระบุจากต้นทางแสดงชื่อเอกสารจาก [tx_document](/display/RDSCPENH/tx_document).doc_name วันและเวลาที่ทำรายการLabelOn Initialแสดงวันและเวลาที่ทำรายการที่ระบุจากต้นทาง โดยแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน[tx_document](/display/RDSCPENH/tx_document).created_date[tx_document](/display/RDSCPENH/tx_document).document_upload_dateupdated by patcha.vo 17/06/69ผู้ทำรายการLabelOn Initialแสดงข้อมูล username ผู้ทำรายการที่ระบุจากต้นทาง[tx_document](/display/RDSCPENH/tx_document).created_by ปิดButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable - On Clickปิดหน้าจอ Popup |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |   | การเรียงลำดับข้อมูล | 1.เรียงตามวันและเวลาที่ทำรายการจากเก่าไปใหม่ |   |   |
| No |   | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ดูเอกสาร | Enable : เสมอ เมื่อกดปุ่มระบบจะเปิดหน้าจอ DMS โดยแสดงหน้าจอใหม่ |   |   |
| 2 | Label | ชื่อไฟล์ | แสดงชื่อเอกสาร ที่ระบุจากต้นทาง | เอกสารแนบ1.pdf |   |
| 3 | Label | วันและเวลาที่ทำรายการ | แสดงวันและเวลาที่ทำรายการ ที่ระบุจากต้นทางแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |
| 4 | Label | ผู้ทำรายการ | แสดงข้อมูล username ผู้ทำรายการที่ระบุจากต้นทาง | kanokporn.ch |   |
| 5 | Button | ปิด | Enable : เสมอ เมื่อกดปุ่มระบบจะปิดหน้าจอ Popup |   |   |
| หน้าจอ | เงื่อนไขแสดงรายการเอกสาร |
| [FS-00-01 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1276117756) | [tx_document](/display/RDSCPENH/tx_document).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| [FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117788) | [tx_document](/display/RDSCPENH/tx_document).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id[tx_document](/display/RDSCPENH/tx_document).doc_id in ('PAYM1','PAYM2') |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remark |
| ดูเอกสาร | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | ระบบจะเปิดหน้าจอระบบ DMS โดย ดึง @document_id จากตาราง [tx_document](/display/RDSCPENH/tx_document).dms_document_id เงื่อนไขดังนี้และเปิดที่ url : [https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=@document_id#SearchDocument](https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=100000#SearchDocument) |   |   |
| ชื่อไฟล์ | Label | On Initial | แสดงชื่อเอกสาร ที่ระบุจากต้นทาง | แสดงชื่อเอกสารจาก [tx_document](/display/RDSCPENH/tx_document).doc_name |   |
| วันและเวลาที่ทำรายการ | Label | On Initial | แสดงวันและเวลาที่ทำรายการที่ระบุจากต้นทาง โดยแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | [tx_document](/display/RDSCPENH/tx_document).created_date[tx_document](/display/RDSCPENH/tx_document).document_upload_date | updated by patcha.vo 17/06/69 |
| ผู้ทำรายการ | Label | On Initial | แสดงข้อมูล username ผู้ทำรายการที่ระบุจากต้นทาง | [tx_document](/display/RDSCPENH/tx_document).created_by |   |
| ปิด | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | ปิดหน้าจอ Popup |   |   |

---

## Hyperlinks บนหน้านี้

- [FS-00-01 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117756)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117788)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=@document_id#SearchDocument](https://intranet-api.ochi.link/thaisamut/web/dms/index.html?documentId=100000#SearchDocument)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1267859665/image2025-8-5%209%3A46%3A21.png?version=1&modificationDate=1754361982356&api=v2
