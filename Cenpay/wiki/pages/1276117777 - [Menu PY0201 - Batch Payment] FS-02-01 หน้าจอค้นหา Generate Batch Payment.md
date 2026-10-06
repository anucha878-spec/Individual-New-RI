# [Menu PY0201 : Batch Payment] FS-02-01 หน้าจอค้นหา Generate Batch Payment

- **Page ID:** 1276117777
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117777
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-02 Generate Batch Payment > [Menu PY0201 : Batch Payment] FS-02-01 หน้าจอค้นหา Generate Batch Payment
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797120566 {padding: 0px;} div.rbtoc1784797120566 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797120566 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY0201:BatchPayment]FS-02-01หน้าจอค้นหาGenerateBatchPayment-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1267859523/image2025-8-21%2013%3A39%3A15.png?version=1&modificationDate=1755758355502&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลประเภทการจ่าย Batch Payment ที่รวมข้อมูลช่องทางการจ่ายและ Request Payment Date เดียวกันมาจากหน้าจอรับรายการ
- เพื่อให้ผู้ใช้งานสามารถค้นหาและดูข้อมูลการจ่ายระดับ Batch ได้ตามเงื่อนไขที่กำหนด
- เพื่อให้ผู้ใช้งานสามารถเลือกรายการสำหรับ Generate txt file ตามธนาคารที่กำหนด
- เพื่อให้ผู้ใช้งานสามารถเลือกยกเลิกรายการ Batch การเงิน
- เพื่อให้ผู้ใช้งานสามารถเลือกบันทึกผลการตรวจสอบรายการ Batch การเงินเพื่อส่งไปรออนุมัติและบันทึกบัญชี
- เพื่อให้ผู้ใช้งานสามารถเลือกบันทึกรายการธุรกรรมที่ไม่ถูกต้องสำหรับส่งไปรออนุมัติและบันทึกบัญชี
- เพื่อให้ผู้ใช้งานสามารถดูรายละเอียดรายการธุรกรรมภายใต้ Batch การเงิน

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการ Batch การเงินที่มาจากหน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)

### การกระทำกับหน้าจอ (Actions)

- ล้างเงื่อนไขการค้นหาข้อมูล
- ค้นหาข้อมูล Batch การเงินประเภทการจ่าย Batch Payment
- เลือกรายการเพื่อ Generate txt file ธนาคาร
- เลือกรายการเพื่อ ยกเลิก Batch การเงิน
- ดูรายละเอียด Support Booking
- บันทึกผลการตรวจสอบ
- บันทึกรายการไม่ผ่านตรวจสอบ
- ดูเอกสารแนบระดับ Batch

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม ค้นหา หน้าจอจะแสดงรายการ Batch การเงินที่ตรงตามเงื่อนไขการค้นหา และจัดเรียงตามช่องทางการจ่าย, Service, Paid Date, Bank Account
  - เมื่อผู้ใช้งานกดปุ่ม ล้างเงื่อนไข เงื่อนไขการค้นหาทั้งหมดจะถูก Reset เป็นค่าเริ่มต้น
  - เมื่อผู้ใช้งานกดปุ่ม รายละเอียด, บันทึกผลการตรวจสอบ, บันทึกรายการไม่ผ่านตรวจสอบ ระบบจะนำผู้ใช้งานไปยังหน้าจอที่เกี่ยวข้องได้
  - เมื่อผู้ใช้งาน เลือกรายการ และกดปุ่ม Generate Batch Payment ระบบจะ Generate txt,csv file ของรายการที่เลือก ไปวางที่ Share path ที่กำหนด
  - เมื่อผู้ใช้งาน เลือกรายการ และกดปุ่ม ยกเลิกรายการระบบจะยกเลิกรายการ Batch ที่เลือก
  - เมื่อผู้ใช้งานกดปุ่ม Export Report ระบบจะสร้างรายงาน Batch Payment ตามข้อมูลผลการค้นหาวางไว้ที่ Share Path ที่กำหนด

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง เมื่อกดปุ่มค้นหาระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล"
  - กรณีระบุวันที่ในเงื่อนไขการค้นหาไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" ใต้ Text Box
  - กรณีไม่มีข้อมูลตามเงื่อนไขการค้นหา ระบบจะแสดงตารางผลลัพธ์ว่างเปล่า และแสดงข้อความที่ตาราง "ไม่พบข้อมูล"
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีผู้ใช้งานเลือก Generate Batch Payment ที่สถานะดำเนินการไม่ใช่ กำลังดำเนินการ หรือรอดำเนินการใหม่ ระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่"
  - กรณีผู้ใช้งานเลือก ยกเลิกรายการ ที่สถานะดำเนินการไม่ใช่ กำลังดำเนินการ หรือ รอการตรวจสอบผล ระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล"
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อผู้ใช้งานกดปุ่มค้นหา ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| **เงื่อนไขการค้นหา******NoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Text BoxBatch Number ฝ่ายการเงินว่างแสดง Placeholder Format เป็น ช่องทางการจ่าย (ตัวอักษรภาษาอังกฤษ 3 หลัก) - วันที่บันทึกรายการตรวจสอบ (Format: ปปปปดดวว เป็น พ.ศ.) - Sequence number (5 หลัก)ระบุได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลข 0-9 เท่านั้นBAT-25680701-00001 2Drop Down Listช่องทางการจ่ายเงินทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลช่องทางการจ่ายเงินโอนเงิน 3Date PickerRequest Payment Date จากว่างDate Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox01/07/2568 4Date PickerRequest Payment Date ถึงว่างDate Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox31/07/2568 5Date PickerPaid Date จากว่างDate Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox01/07/2568 6Date PickerPaid Date ถึงว่างDate Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox31/07/2568 7Multiple Drop Downสถานะดำเนินการกำลังดำเนินการ และรอดำเนินการใหม่แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะดำเนินการระดับ Batchค่าเริ่มต้นสถานะ : กำลังดำเนินการ และรอดำเนินการใหม่ กำลังดำเนินการ 8Drop DownService ทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Service กรณีมีการเลือก Service ให้ตรวจสอบความสัมพันธ์กับ Bank Accountกรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Bank Account BBL_MCL 9Drop DownBank Accountทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Bank Accountกรณีมีการเลือก Bank Account ให้ตรวจสอบความสัมพันธ์กับ Service กรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Service BBL 925-0-02595-5 8Buttonล้างเงื่อนไขdisableกดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุ และกลับไปเป็นเงื่อนไขเริ่มต้น![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A36%3A55.png?version=1&modificationDate=1741099015272&api=v2) 9Buttonค้นหาenableกดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุการค้นหา ถ้ามีหลายเงื่อนไข ใช้ “AND” Condition ในการค้นหาแสดงรายการตามเงื่อนไขที่ค้นหากรณีค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ตารางแสดง “ไม่พบข้อมูล”![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A40%3A7.png?version=1&modificationDate=1741099207746&api=v2) | **เงื่อนไขการค้นหา** Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksBatch Number ฝ่ายการเงินText BoxOn InitialDefault Value: ค่าว่าง Enableตลอดเวลา Disable- On Change - Validationระบุได้เฉพาะตัวอักษรภาษาอังกฤษ สัญลักษณ์ '-' (Hyphen : ขีดกลาง), '_' (Underscore : ขีดล่าง), '/' (Slash) และตัวเลข 0-9 เท่านั้น ช่องทางการจ่ายเงินDrop Down ListOn InitialDefault Value: แสดง "ทั้งหมด" Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลช่องทางการจ่ายเงินแสดงรายการธุรกรรมจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงินand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key in ('TRB','TRE','PMP','BKC')update by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) Enableตลอดเวลา Disable- On Change - Request Payment Date จากDate Range PickerOn InitialDefault Value: ค่าว่างแสดงวันที่ในรูปแบบ วัน/เดือน/ปี พ.ศ. (DD/MM/YYYY)สามารถพิมพ์ข้อมูล หรือ เลือกวันที่จาก Date Pickerเมื่อกดไอคอน ![img](http://wiki.thaisamut.co.th/download/thumbnails/715948205/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%84%E0%B8%AA%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88@2x%20copy.png?version=1&modificationDate=1585530278630&api=v2)แสดงตัวเลือกเป็น Date Picker โดย default เป็นวันปัจจุบัน Enableตลอดเวลา Disable- On Changeหากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 Validationตรวจสอบ Request Payment Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง Request Payment Date ถึงDate Range PickerOn InitialDefault Value: ค่าว่าง Enableตลอดเวลา Disable- On Changeหากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 Validationตรวจสอบ Request Payment Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง Paid Date จากDate Range PickerOn InitialDefault Value: ค่าว่าง Enableตลอดเวลา Disable- On Changeหากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 Validationตรวจสอบ Paid Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง Paid Date ถึงDate Range PickerOn InitialDefault Value: ค่าว่าง Enableตลอดเวลา Disable- On Changeหากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 Validationตรวจสอบ Paid Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วัน สถานะดำเนินการDrop DownOn InitialDefault Value: แสดง "กำลังดำเนินการ" , "รอดำเนินการใหม่" , "รอการตรวจสอบผล" และ " ส่งกลับไปตรวจสอบ" Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลสถานะดำเนินการแสดงสถานะดำเนินการจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**12000**' - สถานะดำเนินการระดับ Batchand [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key in @status@statusDescriptionPROกำลังดำเนินการPECรอการตรวจสอบผลREJส่งกลับไปตรวจสอบWARรอดำเนินการใหม่PEAรออนุมัติCANยกเลิกรายการAPRอนุมัติPEAรออนุมัติ SUPจ่ายสำเร็จINPจ่ายสำเร็จบางส่วนUNPจ่ายไม่สำเร็จ[https://redmine.ochi.link/issues/57945](https://redmine.ochi.link/issues/57945) Enableตลอดเวลา Disable- On Change- Validation- ServicesDrop Down ListOn InitialDefault Value: แสดง "ทั้งหมด"Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Servicesค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).batch_payment_type = Bแสดง service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Services ยกเลิก แสดง Service จากการเลือก ช่องทางการจ่าย จาก search criteriaหาข้อมูลประเภทการจ่ายจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = @ช่องทางการจ่าย lookup_key จาก search criteriaand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '69000' - ประเภทการจ่าย Mapping Serviceแสดง Service จากการเลือกช่องทางการจ่าย [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config แสดงชื่อ Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' - servicesกรณีช่องทางการจ่ายเงิน = 'เช็คบริษัท' หรือ 'อื่นๆ' ให้ทำการ Group by **Service**กรณีไม่มีการเลือกช่องทางการจ่ายจาก search criteria ให้แสดง service ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' updated by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) Enableตลอดเวลา Disable- Validation- On Clickกรณีมีการเลือก Services ที่ไม่สัมพันธ์กับ Bank Account ให้เคลียร์ข้อมูล Bank Account เป็นค่าว่าง Bank AccountDrop Down ListOn InitialDefault Value: แสดง "ทั้งหมด"Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Bank Accountค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).bank_account [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).service = @service lookup_key จาก search_criteriaแสดง Bank Account จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config และ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Accountตัวอย่างเช่น BBL 925-0-02595-5กรณีไม่มีการเลือก service ให้แสดง bank account ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account Enableตลอดเวลา Disable- Validation- On Clickกรณีมีการเลือก Bank Account ที่ไม่สัมพันธ์กับServices ให้เคลียร์ข้อมูล Services เป็นค่าว่าง ล้างเงื่อนไขButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickกดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุและกลับไปเป็นเงื่อนไขเริ่มต้น ค้นหาButtonOn Clickอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickกดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุ • การค้นหาถ้ามีหลายเงื่อนไขจะใช้ "AND" Condition • หากไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง ระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล" • หากค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไข ตารางจะแสดงข้อความ "ไม่พบข้อมูล"อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messageinf_com_004ไม่พบข้อมูลwrn_com_003กรุณาระบุเงื่อนไขการค้นหาข้อมูล |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Text Box | Batch Number ฝ่ายการเงิน | ว่าง | แสดง Placeholder Format เป็น ช่องทางการจ่าย (ตัวอักษรภาษาอังกฤษ 3 หลัก) - วันที่บันทึกรายการตรวจสอบ (Format: ปปปปดดวว เป็น พ.ศ.) - Sequence number (5 หลัก)ระบุได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลข 0-9 เท่านั้น | BAT-25680701-00001 |   |
| 2 | Drop Down List | ช่องทางการจ่ายเงิน | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลช่องทางการจ่ายเงิน | โอนเงิน |   |
| 3 | Date Picker | Request Payment Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 4 | Date Picker | Request Payment Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 5 | Date Picker | Paid Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 6 | Date Picker | Paid Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 7 | Multiple Drop Down | สถานะดำเนินการ | กำลังดำเนินการ และรอดำเนินการใหม่ | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะดำเนินการระดับ Batchค่าเริ่มต้นสถานะ : กำลังดำเนินการ และรอดำเนินการใหม่ | กำลังดำเนินการ |   |
| 8 | Drop Down | Service | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Service กรณีมีการเลือก Service ให้ตรวจสอบความสัมพันธ์กับ Bank Accountกรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Bank Account | BBL_MCL |   |
| 9 | Drop Down | Bank Account | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Bank Accountกรณีมีการเลือก Bank Account ให้ตรวจสอบความสัมพันธ์กับ Service กรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Service | BBL 925-0-02595-5 |   |
| 8 | Button | ล้างเงื่อนไข | disable | กดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุ และกลับไปเป็นเงื่อนไขเริ่มต้น | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A36%3A55.png?version=1&modificationDate=1741099015272&api=v2) |   |
| 9 | Button | ค้นหา | enable | กดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุการค้นหา ถ้ามีหลายเงื่อนไข ใช้ “AND” Condition ในการค้นหาแสดงรายการตามเงื่อนไขที่ค้นหากรณีค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ตารางแสดง “ไม่พบข้อมูล” | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A40%3A7.png?version=1&modificationDate=1741099207746&api=v2) |   |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Batch Number ฝ่ายการเงิน | Text Box | On Initial | Default Value: ค่าว่าง |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | - |   |   |
|   |   | Validation | ระบุได้เฉพาะตัวอักษรภาษาอังกฤษ สัญลักษณ์ '-' (Hyphen : ขีดกลาง), '_' (Underscore : ขีดล่าง), '/' (Slash) และตัวเลข 0-9 เท่านั้น |   |   |
| ช่องทางการจ่ายเงิน | Drop Down List | On Initial | Default Value: แสดง "ทั้งหมด" Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลช่องทางการจ่ายเงิน | แสดงรายการธุรกรรมจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงินand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key in ('TRB','TRE','PMP','BKC') | update by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | - |   |   |
| Request Payment Date จาก | Date Range Picker | On Initial | Default Value: ค่าว่างแสดงวันที่ในรูปแบบ วัน/เดือน/ปี พ.ศ. (DD/MM/YYYY)สามารถพิมพ์ข้อมูล หรือ เลือกวันที่จาก Date Pickerเมื่อกดไอคอน ![img](http://wiki.thaisamut.co.th/download/thumbnails/715948205/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%84%E0%B8%AA%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88@2x%20copy.png?version=1&modificationDate=1585530278630&api=v2)แสดงตัวเลือกเป็น Date Picker โดย default เป็นวันปัจจุบัน |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | หากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 |   |   |
|   |   | Validation | ตรวจสอบ Request Payment Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง |   |
| Alert Code | Alert Message |
| wrn_com_006 | ระบุช่วงวันที่ได้ไม่เกิน 120 วัน |
| wrn_com_007 | ระบุช่วงวันที่ไม่ถูกต้อง |
| Request Payment Date ถึง | Date Range Picker | On Initial | Default Value: ค่าว่าง |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | หากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 |   |   |
|   |   | Validation | ตรวจสอบ Request Payment Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง |   |
| Alert Code | Alert Message |
| wrn_com_006 | ระบุช่วงวันที่ได้ไม่เกิน 120 วัน |
| wrn_com_007 | ระบุช่วงวันที่ไม่ถูกต้อง |
| Paid Date จาก | Date Range Picker | On Initial | Default Value: ค่าว่าง |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | หากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 |   |   |
|   |   | Validation | ตรวจสอบ Paid Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วันwrn_com_007ระบุช่วงวันที่ไม่ถูกต้อง |   |
| Alert Code | Alert Message |
| wrn_com_006 | ระบุช่วงวันที่ได้ไม่เกิน 120 วัน |
| wrn_com_007 | ระบุช่วงวันที่ไม่ถูกต้อง |
| Paid Date ถึง | Date Range Picker | On Initial | Default Value: ค่าว่าง |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | หากพิมพ์เป็นปี ค.ศ. ระบบจะ convert ให้เป็นปี พ.ศ.โดยอัตโนมัติหากพิมพ์เป็น 20082563 หรือ 20082020 ระบบจะ convert และแสดงเป็น 20/08/2563 |   |   |
|   |   | Validation | ตรวจสอบ Paid Date จากและถึง1.หากระบุเกิน 120 วัน จะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" เป็นตัวอักษรสีแดง ใต้ Text Box2.กรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_com_006ระบุช่วงวันที่ได้ไม่เกิน 120 วัน |   |
| Alert Code | Alert Message |
| wrn_com_006 | ระบุช่วงวันที่ได้ไม่เกิน 120 วัน |
| สถานะดำเนินการ | Drop Down | On Initial | Default Value: แสดง "กำลังดำเนินการ" , "รอดำเนินการใหม่" , "รอการตรวจสอบผล" และ " ส่งกลับไปตรวจสอบ" Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลสถานะดำเนินการ | แสดงสถานะดำเนินการจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**12000**' - สถานะดำเนินการระดับ Batchand [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key in @status@statusDescriptionPROกำลังดำเนินการPECรอการตรวจสอบผลREJส่งกลับไปตรวจสอบWARรอดำเนินการใหม่PEAรออนุมัติCANยกเลิกรายการAPRอนุมัติPEAรออนุมัติ SUPจ่ายสำเร็จINPจ่ายสำเร็จบางส่วนUNPจ่ายไม่สำเร็จ | [https://redmine.ochi.link/issues/57945](https://redmine.ochi.link/issues/57945) |
| @status | Description |
| PRO | กำลังดำเนินการ |
| PEC | รอการตรวจสอบผล |
| REJ | ส่งกลับไปตรวจสอบ |
| WAR | รอดำเนินการใหม่ |
| PEA | รออนุมัติ |
| CAN | ยกเลิกรายการ |
| APR | อนุมัติ |
| PEA | รออนุมัติ |
| SUP | จ่ายสำเร็จ |
| INP | จ่ายสำเร็จบางส่วน |
| UNP | จ่ายไม่สำเร็จ |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | - |   |   |
|   |   | Validation | - |   |   |
| Services | Drop Down List | On Initial | Default Value: แสดง "ทั้งหมด"Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Services | ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).batch_payment_type = Bแสดง service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Services ยกเลิก แสดง Service จากการเลือก ช่องทางการจ่าย จาก search criteriaหาข้อมูลประเภทการจ่ายจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = @ช่องทางการจ่าย lookup_key จาก search criteriaand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '69000' - ประเภทการจ่าย Mapping Serviceแสดง Service จากการเลือกช่องทางการจ่าย [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config แสดงชื่อ Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' - servicesกรณีช่องทางการจ่ายเงิน = 'เช็คบริษัท' หรือ 'อื่นๆ' ให้ทำการ Group by **Service**กรณีไม่มีการเลือกช่องทางการจ่ายจาก search criteria ให้แสดง service ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' | updated by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | Validation | - |   |   |
|   |   | On Click | กรณีมีการเลือก Services ที่ไม่สัมพันธ์กับ Bank Account ให้เคลียร์ข้อมูล Bank Account เป็นค่าว่าง |   |   |
| Bank Account | Drop Down List | On Initial | Default Value: แสดง "ทั้งหมด"Drop Down List : แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Bank Account | ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).bank_account [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).service = @service lookup_key จาก search_criteriaแสดง Bank Account จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config และ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Accountตัวอย่างเช่น BBL 925-0-02595-5กรณีไม่มีการเลือก service ให้แสดง bank account ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | Validation | - |   |   |
|   |   | On Click | กรณีมีการเลือก Bank Account ที่ไม่สัมพันธ์กับServices ให้เคลียร์ข้อมูล Services เป็นค่าว่าง |   |   |
| ล้างเงื่อนไข | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | กดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุและกลับไปเป็นเงื่อนไขเริ่มต้น |   |   |
| ค้นหา | Button | On Click | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | กดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุ • การค้นหาถ้ามีหลายเงื่อนไขจะใช้ "AND" Condition • หากไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง ระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล" • หากค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไข ตารางจะแสดงข้อความ "ไม่พบข้อมูล" | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messageinf_com_004ไม่พบข้อมูลwrn_com_003กรุณาระบุเงื่อนไขการค้นหาข้อมูล |   |
| Alert Code | Alert Message |
| inf_com_004 | ไม่พบข้อมูล |
| wrn_com_003 | กรุณาระบุเงื่อนไขการค้นหาข้อมูล |
| **เงื่อนไขปุ่ม**NoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1ButtonGenerate Batch PaymentDisableกรณีไม่มีการเลือก Checkbox ระบบจะ Disable ปุ่มกรณีมีการเลือก Checkbox ระบบจะ Enable ปุ่มเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Batch การเงินที่เลือกระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ทุกรายการระบบจะแสดงแจ้งเตือน "ยืนยัน Generate Batch Payment"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะGenerate txt file ตาม Bank Account ที่เลือก โดยการ [6. Generate txt,csv file ธนาคาร](/pages/viewpage.action?pageId=1267860406) และวางไว้ที่ Share Path ที่กำหนดเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น รอการตรวจสอบผล และ Refresh หน้าจอกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือน 2ButtonยกเลิกรายการDisableกรณีไม่มีการเลือก Checkbox ระบบจะ Disable ปุ่มกรณีมีการเลือก Checkbox ระบบจะ Enable ปุ่มเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Checkbox Batch การเงินที่เลือกรายการระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีเลือกรายการที่ถูก Split Batch ให้ตรวจสอบการเลือกทุกรายการภายใต้ Batch หลัก หากเลือกไม่ครบทุกรายการ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการ Batch Split ให้ครบถ้วน"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "ยืนยันยกเลิกรายการ"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น ยกเลิก และ Refresh หน้าจอ | **เงื่อนไขปุ่ม** Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksGenerate Batch PaymentButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableกรณีมีการเลือก Checkbox และสถานะดำเนินการของรายการที่เลือกเป็น กำลังดำเนินการ หรือรอดำเนินการใหม่ Disableกรณีไม่มีการเลือก Checkbox หรือมีการเลือก Checkbox แต่สถานะดำเนินการของรายการที่เลือก**ไม่เป็น** กำลังดำเนินการ หรือรอดำเนินการใหม่ On Clickเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Batch การเงินที่เลือกระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ทุกรายการระบบจะแสดงแจ้งเตือน "ยืนยัน Generate Batch Payment"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะGenerate txt file ตาม Bank Account ที่เลือก โดยการ [6. Generate txt,csv file ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267860406) และวางไว้ที่ Share Path ที่กำหนดเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น รอการตรวจสอบผล และ Refresh หน้าจอกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนอ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagecon_py_005ยืนยัน Generate Batch Paymentwrn_py_005กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ 1. Generate Text file ธนาคาร ที่ Process [02-04-03 Process Generate Txt File ธนาคาร](/pages/viewpage.action?pageId=1283129600)2. Insert ข้อมูลที่ตาราง [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank) ดังนี้fielddescriptionmapping databatch_payment_idเลขที่อ้างอิง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idfile_nameชื่อไฟล์ข้อมูลชื่อไฟล์จากข้อ 1.serviceService (format ธนาคาร)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_codetextข้อมูลในไฟล์ข้อมูล text จากข้อ 1.roundครั้งที่จำนวนครั้งที่บันทึกล่าสุด +1net_transactionจำนวนรายการรวมสุทธิ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transactionnet_amountจำนวนเงินรวมสุทธิ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amountcreated_dateวันที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก username ที่ทำรายการ3. Update ข้อมูลที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)fieldmapping databatch_statusบันทึก 'PEC' - รอการตรวจสอบผลupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ4. Insert ข้อมูลที่ตาราง [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)fielddescriptionmapping databatch_payment_idรหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idbatch_statusสถานะดำเนินการระดับ Batch[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_statuscreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง บันทึก username ที่ทำรายการ5.Update ข้อมูลที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) — updated by patcha 31/03/69 ([issues/60434](https://redmine.ochi.link/issues/60434))fieldmapping datastatusตรวจสอบการ Split Batch[tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEC' - รอการตรวจสอบผลupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ6.Update ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)กรณีมีข้อมูลการ Split อัปเดตรายการที่ถูก Splitfieldmapping datastatusบันทึก 'PEC' - รอการตรวจสอบผลupdated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ7.Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)fieldmapping datastatusบันทึก 'WVF' - รอตรวจสอบเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิกupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ **ตัวอย่าง**สถานะ กรณี Generate Batch Payment Batch PaymentPayment HeaderPayment Header SplitPayment Detailกรณีมีการ Split Batch OperPEC - รอการตรวจสอบผลBAS - Batch SplitPEC WVF - รอตรวจสอบกรณีไม่มีการ Split Batch OperPEC PEC -WVF ยกเลิกรายการButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableกรณีมีการเลือก Checkbox และสถานะดำเนินการของรายการที่เลือกเป็น กำลังดำเนินการ หรือรอการตรวจสอบผล Disableกรณีไม่มีการเลือก Checkbox หรือมีการเลือก Checkbox แต่สถานะดำเนินการของรายการที่เลือก**ไม่เป็น** กำลังดำเนินการ หรือรอการตรวจสอบผล On Clickเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Checkbox Batch การเงินที่เลือกรายการระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีเลือกรายการที่ถูก Split Batch ให้ตรวจสอบการเลือกทุกรายการภายใต้ Batch หลัก หากเลือกไม่ครบทุกรายการ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการ Batch Split ให้ครบถ้วน"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "ยืนยันยกเลิกรายการ"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น ยกเลิก และ Refresh หน้าจออ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_py_004กรุณาเลือกรายการ Batch Split ให้ครบถ้วนwrn_py_008กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลcon_py_006ยืนยันยกเลิกรายการ 1. Update ข้อมูลที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)fieldmapping databatch_statusบันทึก 'CAN' - ยกเลิกรายการupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ2. Insert ข้อมูลที่ตาราง [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)fielddescriptionmapping databatch_payment_idรหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idbatch_statusสถานะดำเนินการระดับ Batch[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_statuscreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง บันทึก username ที่ทำรายการ3. Update ข้อมูลที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header)fieldmapping datastatusตรวจสอบการ Split Batch [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEN' - รอยืนยันbatch_payment_noบันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434))updated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ4.Update ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)กรณีมีข้อมูลการ Split อัปเดตรายการที่ถูก Splitfieldmapping datastatusบันทึก 'PEN' - รอยืนยันbatch_payment_noบันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434))updated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ5.Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)fieldmapping datastatusบันทึก 'WCF' - รอยืนยันเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิกupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ **ตัวอย่าง**สถานะ กรณียกเลิกรายการ Batch Payment Batch PaymentPayment HeaderPayment Header SplitPayment Detailกรณีมีการ Split Batch OperCAN - ยกเลิกBAS - Batch SplitPEN - รอยืนยันWCF - รอยืนยันกรณีไม่มีการ Split Batch OperCANPEN-WCF |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | Generate Batch Payment | Disable | กรณีไม่มีการเลือก Checkbox ระบบจะ Disable ปุ่มกรณีมีการเลือก Checkbox ระบบจะ Enable ปุ่มเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Batch การเงินที่เลือกระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ทุกรายการระบบจะแสดงแจ้งเตือน "ยืนยัน Generate Batch Payment"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะGenerate txt file ตาม Bank Account ที่เลือก โดยการ [6. Generate txt,csv file ธนาคาร](/pages/viewpage.action?pageId=1267860406) และวางไว้ที่ Share Path ที่กำหนดเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น รอการตรวจสอบผล และ Refresh หน้าจอกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือน |   |   |
| 2 | Button | ยกเลิกรายการ | Disable | กรณีไม่มีการเลือก Checkbox ระบบจะ Disable ปุ่มกรณีมีการเลือก Checkbox ระบบจะ Enable ปุ่มเมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Checkbox Batch การเงินที่เลือกรายการระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีเลือกรายการที่ถูก Split Batch ให้ตรวจสอบการเลือกทุกรายการภายใต้ Batch หลัก หากเลือกไม่ครบทุกรายการ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการ Batch Split ให้ครบถ้วน"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "ยืนยันยกเลิกรายการ"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น ยกเลิก และ Refresh หน้าจอ |   |   |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Generate Batch Payment | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | กรณีมีการเลือก Checkbox และสถานะดำเนินการของรายการที่เลือกเป็น กำลังดำเนินการ หรือรอดำเนินการใหม่ |   |   |
|   |   | Disable | กรณีไม่มีการเลือก Checkbox หรือมีการเลือก Checkbox แต่สถานะดำเนินการของรายการที่เลือก**ไม่เป็น** กำลังดำเนินการ หรือรอดำเนินการใหม่ |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Batch การเงินที่เลือกระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ ทุกรายการระบบจะแสดงแจ้งเตือน "ยืนยัน Generate Batch Payment"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะGenerate txt file ตาม Bank Account ที่เลือก โดยการ [6. Generate txt,csv file ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267860406) และวางไว้ที่ Share Path ที่กำหนดเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น รอการตรวจสอบผล และ Refresh หน้าจอกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือน | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagecon_py_005ยืนยัน Generate Batch Paymentwrn_py_005กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ 1. Generate Text file ธนาคาร ที่ Process [02-04-03 Process Generate Txt File ธนาคาร](/pages/viewpage.action?pageId=1283129600)2. Insert ข้อมูลที่ตาราง [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank) ดังนี้fielddescriptionmapping databatch_payment_idเลขที่อ้างอิง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idfile_nameชื่อไฟล์ข้อมูลชื่อไฟล์จากข้อ 1.serviceService (format ธนาคาร)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_codetextข้อมูลในไฟล์ข้อมูล text จากข้อ 1.roundครั้งที่จำนวนครั้งที่บันทึกล่าสุด +1net_transactionจำนวนรายการรวมสุทธิ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transactionnet_amountจำนวนเงินรวมสุทธิ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amountcreated_dateวันที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก username ที่ทำรายการ3. Update ข้อมูลที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)fieldmapping databatch_statusบันทึก 'PEC' - รอการตรวจสอบผลupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ4. Insert ข้อมูลที่ตาราง [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)fielddescriptionmapping databatch_payment_idรหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idbatch_statusสถานะดำเนินการระดับ Batch[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_statuscreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง บันทึก username ที่ทำรายการ5.Update ข้อมูลที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) — updated by patcha 31/03/69 ([issues/60434](https://redmine.ochi.link/issues/60434))fieldmapping datastatusตรวจสอบการ Split Batch[tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEC' - รอการตรวจสอบผลupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ6.Update ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)กรณีมีข้อมูลการ Split อัปเดตรายการที่ถูก Splitfieldmapping datastatusบันทึก 'PEC' - รอการตรวจสอบผลupdated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ7.Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)fieldmapping datastatusบันทึก 'WVF' - รอตรวจสอบเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิกupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ **ตัวอย่าง**สถานะ กรณี Generate Batch Payment Batch PaymentPayment HeaderPayment Header SplitPayment Detailกรณีมีการ Split Batch OperPEC - รอการตรวจสอบผลBAS - Batch SplitPEC WVF - รอตรวจสอบกรณีไม่มีการ Split Batch OperPEC PEC -WVF |   |
| Alert Code | Alert Message |
| con_py_005 | ยืนยัน Generate Batch Payment |
| wrn_py_005 | กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่ |
| field | description | mapping data |
| batch_payment_id | เลขที่อ้างอิง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| file_name | ชื่อไฟล์ | ข้อมูลชื่อไฟล์จากข้อ 1. |
| service | Service (format ธนาคาร) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code |
| text | ข้อมูลในไฟล์ | ข้อมูล text จากข้อ 1. |
| round | ครั้งที่ | จำนวนครั้งที่บันทึกล่าสุด +1 |
| net_transaction | จำนวนรายการรวมสุทธิ | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transaction |
| net_amount | จำนวนเงินรวมสุทธิ | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amount |
| created_date | วันที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |
| field | mapping data |
| batch_status | บันทึก 'PEC' - รอการตรวจสอบผล |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | description | mapping data |
| batch_payment_id | รหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| batch_status | สถานะดำเนินการระดับ Batch | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status |
| created_date | วันและเวลาที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | ตรวจสอบการ Split Batch[tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEC' - รอการตรวจสอบผล |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | บันทึก 'PEC' - รอการตรวจสอบผล |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | บันทึก 'WVF' - รอตรวจสอบเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิก |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
|   | Batch Payment | Payment Header | Payment Header Split | Payment Detail |
| กรณีมีการ Split Batch Oper | PEC - รอการตรวจสอบผล | BAS - Batch Split | PEC | WVF - รอตรวจสอบ |
| กรณีไม่มีการ Split Batch Oper | PEC | PEC | - | WVF |
| ยกเลิกรายการ | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | กรณีมีการเลือก Checkbox และสถานะดำเนินการของรายการที่เลือกเป็น กำลังดำเนินการ หรือรอการตรวจสอบผล |   |   |
|   |   | Disable | กรณีไม่มีการเลือก Checkbox หรือมีการเลือก Checkbox แต่สถานะดำเนินการของรายการที่เลือก**ไม่เป็น** กำลังดำเนินการ หรือรอการตรวจสอบผล |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะตรวจสอบรายการ Checkbox Batch การเงินที่เลือกรายการระบบจะตรวจสอบสถานะดำเนินการของทุก Batchกรณีสถานะดำเนินการไม่เป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีเลือกรายการที่ถูก Split Batch ให้ตรวจสอบการเลือกทุกรายการภายใต้ Batch หลัก หากเลือกไม่ครบทุกรายการ ระบบจะแสดงแจ้งเตือน "กรุณาเลือกรายการ Batch Split ให้ครบถ้วน"เมื่อกด ตกลง ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนกรณีสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลระบบจะแสดงแจ้งเตือน "ยืนยันยกเลิกรายการ"เมื่อกด ยกเลิก ให้ค้างการเลือก Checkbox เดิมไว้ และปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะเคลียร์ Checkbox ที่เลือกไว้ปรับสถานะดำเนินการของ Batch เป็น ยกเลิก และ Refresh หน้าจอ | อ้างอิง [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagewrn_py_004กรุณาเลือกรายการ Batch Split ให้ครบถ้วนwrn_py_008กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผลcon_py_006ยืนยันยกเลิกรายการ 1. Update ข้อมูลที่ตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)fieldmapping databatch_statusบันทึก 'CAN' - ยกเลิกรายการupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ2. Insert ข้อมูลที่ตาราง [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)fielddescriptionmapping databatch_payment_idรหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idbatch_statusสถานะดำเนินการระดับ Batch[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_statuscreated_dateวันและเวลาที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้าง บันทึก username ที่ทำรายการ3. Update ข้อมูลที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header)fieldmapping datastatusตรวจสอบการ Split Batch [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEN' - รอยืนยันbatch_payment_noบันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434))updated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ4.Update ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split)กรณีมีข้อมูลการ Split อัปเดตรายการที่ถูก Splitfieldmapping datastatusบันทึก 'PEN' - รอยืนยันbatch_payment_noบันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434))updated_date บันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ5.Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)fieldmapping datastatusบันทึก 'WCF' - รอยืนยันเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิกupdated_date บันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ **ตัวอย่าง**สถานะ กรณียกเลิกรายการ Batch Payment Batch PaymentPayment HeaderPayment Header SplitPayment Detailกรณีมีการ Split Batch OperCAN - ยกเลิกBAS - Batch SplitPEN - รอยืนยันWCF - รอยืนยันกรณีไม่มีการ Split Batch OperCANPEN-WCF |   |
| Alert Code | Alert Message |
| wrn_py_004 | กรุณาเลือกรายการ Batch Split ให้ครบถ้วน |
| wrn_py_008 | กรุณาเลือกรายการที่สถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอการตรวจสอบผล |
| con_py_006 | ยืนยันยกเลิกรายการ |
| field | mapping data |
| batch_status | บันทึก 'CAN' - ยกเลิกรายการ |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | description | mapping data |
| batch_payment_id | รหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| batch_status | สถานะดำเนินการระดับ Batch | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status |
| created_date | วันและเวลาที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | ตรวจสอบการ Split Batch [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ Splitบันทึก 'PEN' - รอยืนยัน |
| batch_payment_no | บันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434)) |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | บันทึก 'PEN' - รอยืนยัน |
| batch_payment_no | บันทึก Null — updated by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434)) |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | mapping data |
| status | บันทึก 'WCF' - รอยืนยันเฉพาะรายการที่สถานะไม่เป็น 'CAN' ยกเลิก |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
|   | Batch Payment | Payment Header | Payment Header Split | Payment Detail |
| กรณีมีการ Split Batch Oper | CAN - ยกเลิก | BAS - Batch Split | PEN - รอยืนยัน | WCF - รอยืนยัน |
| กรณีไม่มีการ Split Batch Oper | CAN | PEN | - | WCF |
| **ผลการค้นหา******ส่วนแสดงข้อมูลผลการค้นหา1 การเรียงลำดับข้อมูล1.เรียงตามตัวอักษร ของช่องทางการจ่าย 2.เรียงตามตัวอักษร ของ Service 3.เรียงตามวันที่ล่าสุดไปยังเก่าที่สุด ของ Paid Date 4.เรียงตามตัวอักษร ของ Bank Account 2 Sort Columnช่องทางการจ่ายServicePaid DateBank Account 3 Concurrent UserกรณีมีการเลือกดำเนินการGenerate Batch Paymentยกเลิกรายการบันทึกผลการตรวจสอบบันทึกรายการไม่ผ่านตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง 4 Font Colorกรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column 5 Row Colorกรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง NoComponent TypeComponent NameAction / Data ValueExampleRemark1Check Box เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น กำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผลแสดงกำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผล 2ButtonรายละเอียดEnable : เสมอ เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-000-FC-001 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1266811431) 3Buttonบันทึกผลการตรวจสอบเงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอการตรวจสอบผลแสดงรอการตรวจสอบผลเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-003-FC-002 หน้าจอ Popup บันทึกผลการตรวจสอบ](/pages/viewpage.action?pageId=1267859537) 4Buttonบันทึกรายการไม่ผ่านตรวจสอบเงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น ส่งกลับไปตรวจสอบแสดงส่งกลับไปตรวจสอบเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-003-FC-003 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1267859545) 5LabelBatch Number ฝ่ายการเงินแสดงข้อมูล Batch Number ฝ่ายการเงินBAT-25680701-00001 6Labelช่องทางการจ่ายเงินแสดงข้อมูลช่องทางการจ่ายเงินที่ระบุข้อมูลจากต้นทาง โอนเงิน 7LabelServiceแสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service 8LabelBank Accountแสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account 9LabelRequest Payment Dateแสดงวันที่ Request Payment Dateแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - 10LabelPaid dateแสดงวันที่จ่ายแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง -04/07/2568 11Labelจำนวนรายการรวมแสดงจำนวนรายการรวมภายใต้ Batch การเงิน201 12Labelจำนวนเงินรวมแสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก 2,100,000.00 13Hyperlinkจำนวนรายการรวมที่ไม่ถูกต้องแสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง -เมื่อกด Hyperlink ให้ระบบเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1272251019)2 14Labelจำนวนเงินรวมที่ไม่ถูกต้องแสดงจำนวนเงินรวมที่ไม่ถูกต้อง ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง -500,000.00 15Labelจำนวนรายการรวมสุทธิแสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง -199 16Labelจำนวนเงินรวมสุทธิแสดงจำนวนเงินรวมสุทธิ ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง -1,600,000.00 17ButtonเอกสารแนบEnable : เสมอเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-000-FC-003 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1267859648) 18Labelสถานะดำเนินการแสดงสถานะดำเนินการตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลสถานะดำเนินการระดับ Batch 19Labelวันและเวลาที่ Generate Fileแสดง วันและเวลาที่ Generate File ล่าสุดกรณีไม่มีข้อมูลให้แสดง - แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน30/06/2568 21.00 20Labelชื่อผู้ทำรายการแสดง username ชื่อผู้ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง -Ladda.wa 21Labelครั้งที่แสดงครั้งที่ Generate file txt ธนาคารกรณีไม่มีข้อมูลให้แสดง -1 | **ผลการค้นหา** TableCondition[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_type = 'B' [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel = @ช่องทางการจ่ายเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date between @Request Payment Date จากand @Request Payment Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date between @Paid Date จาก and @Paid Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code = Service[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code = Bank Account[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no = @Batch Number ฝ่ายการเงินหรือ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no = @Batch Number ฝ่ายการเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status = สถานะดำเนินการกรณีไม่ได้ระบุสถานะดำเนินการให้แสดง [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).status in @status@statusDescriptionPROกำลังดำเนินการPECรอการตรวจสอบผลREJส่งกลับไปตรวจสอบWARรอดำเนินการใหม่PEAรออนุมัติCANยกเลิกรายการAPRอนุมัติPEAรออนุมัติ SUPจ่ายสำเร็จINPจ่ายสำเร็จบางส่วนUNPจ่ายไม่สำเร็จ [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank)[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).batch_payment_id = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_date order by desc limit 1Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksCheck BoxCheck BoxOn Initialอ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible Enableตลอดเวลา Disable - Visibleสถานะดำเนินการเป็น กำลังดำเนินการ, รอดำเนินการใหม่, รอการตรวจสอบผล Invisibleสถานะดำเนินการไม่เป็น กำลังดำเนินการ, รอดำเนินการใหม่, รอการตรวจสอบผล On Clickแสดง Checked หรือ Unchecked รายละเอียดButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickเปิดหน้าจอ [FS-00-01 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1276117756) บันทึกผลการตรวจสอบButtonOn Initialอ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible Visibleสถานะดำเนินการเป็น รอการตรวจสอบผล Invisibleสถานะดำเนินการไม่เป็น รอการตรวจสอบผล Enableตลอดเวลา Disable- On Clickเปิดหน้าจอ [FS-02-02 หน้าจอ Popup บันทึกผลการตรวจสอบ](/pages/viewpage.action?pageId=1276117780) บันทึกรายการไม่ผ่านตรวจสอบButtonOn Initialอ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible Visibleสถานะดำเนินการเป็น ส่งกลับไปตรวจสอบ Invisibleสถานะดำเนินการไม่เป็น ส่งกลับไปตรวจสอบ Enableตลอดเวลา Disable- On Clickเปิดหน้าจอ [FS-02-03 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117782) Batch Number ฝ่ายการเงินLabelOn Initialแสดงข้อมูล Batch Number ฝ่ายการเงินตรวจสอบข้อมูล [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_split_noกรณีมีข้อมูล ให้แสดง [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_split_noกรณีไม่มีข้อมูล ให้แสดง [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no ช่องทางการจ่ายเงินLabelOn Initialแสดงข้อมูลช่องทางการจ่ายเงินที่ระบุจากต้นทางแสดงช่องทางการจ่ายเงินจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)[.lookup_key =](/display/RDSCPENH/tx_payment_header)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channelwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงิน ServiceLabelOn Initialแสดง Service ตาม Configuration Dataแสดง Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)[.lookup_key =](/display/RDSCPENH/tx_payment_header)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channelwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Service Bank AccountLabelOn Initialแสดง Bank Account ตาม Configuration Dataแสดงบัญชีธนาคารบริษัทจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config + [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' - Bank Account ของบริษัท Request Payment DateLabelOn Initialแสดงวันที่ Request Payment Date ในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) หากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date Paid dateLabelOn Initialแสดงวันที่จ่ายในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) หากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date จำนวนรายการรวมLabelOn Initialแสดงจำนวนรายการรวมภายใต้ Batch การเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_transaction จำนวนเงินรวมLabelOn Initialแสดงจำนวนเงินรวมภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_amount จำนวนรายการรวมที่ไม่ถูกต้องHyperlinkOn Initialแสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินหากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_transaction On Click กรณีจำนวนรายการรวมไม่ถูกต้องไม่เป็น null หรือมากกว่า 0 ระบบจะเปิดหน้าจอ [FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117788) จำนวนเงินรวมที่ไม่ถูกต้องLabelOn Initialแสดงจำนวนเงินรวมที่ไม่ถูกต้องภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง หากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_amount จำนวนรายการรวมสุทธิLabelOn Initialแสดงจำนวนรายการรวมสุทธิภายใต้ Batch การเงิน หากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transaction จำนวนเงินรวมสุทธิLabelOn Initialแสดงจำนวนเงินรวมสุทธิภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง หากไม่มีข้อมูลให้แสดง "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amount เอกสารแนบButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickส่งข้อมูลเลข Batch Number ฝ่ายการเงิน และเปิดหน้าจอ [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1276117763) สถานะดำเนินการLabelOn Initialแสดงสถานะดำเนินการตาม Configuration Dataแสดงสถานะดำเนินการจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000' - สถานะดำเนินการระดับ Batch วันและเวลาที่ Generate FileLabelOn Initialแสดงวันและเวลาที่ Generate File ล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน หากไม่มีข้อมูลให้แสดง "-"[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_date ชื่อผู้ทำรายการLabelOn Initialแสดง username ชื่อผู้ทำรายการล่าสุด หากไม่มีข้อมูลให้แสดง "-"[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_by ครั้งที่LabelOn Initialแสดงครั้งที่ Generate file txt ธนาคาร หากไม่มีข้อมูลให้แสดง "-"[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).round |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |   | การเรียงลำดับข้อมูล | 1.เรียงตามตัวอักษร ของช่องทางการจ่าย 2.เรียงตามตัวอักษร ของ Service 3.เรียงตามวันที่ล่าสุดไปยังเก่าที่สุด ของ Paid Date 4.เรียงตามตัวอักษร ของ Bank Account |   |   |
| 2 |   | Sort Column | ช่องทางการจ่ายServicePaid DateBank Account |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการGenerate Batch Paymentยกเลิกรายการบันทึกผลการตรวจสอบบันทึกรายการไม่ผ่านตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| 4 |   | Font Color | กรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column |   |   |
| 5 |   | Row Color | กรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Check Box |   | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น กำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผลแสดงกำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผล |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น กำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผล |
| แสดง | กำลังดำเนินการ, รอดำเนินการใหม่,รอการตรวจสอบผล |
| 2 | Button | รายละเอียด | Enable : เสมอ เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-000-FC-001 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1266811431) |   |   |
| 3 | Button | บันทึกผลการตรวจสอบ | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอการตรวจสอบผลแสดงรอการตรวจสอบผลเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-003-FC-002 หน้าจอ Popup บันทึกผลการตรวจสอบ](/pages/viewpage.action?pageId=1267859537) |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอการตรวจสอบผล |
| แสดง | รอการตรวจสอบผล |
| 4 | Button | บันทึกรายการไม่ผ่านตรวจสอบ | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น ส่งกลับไปตรวจสอบแสดงส่งกลับไปตรวจสอบเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-003-FC-003 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1267859545) |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น ส่งกลับไปตรวจสอบ |
| แสดง | ส่งกลับไปตรวจสอบ |
| 5 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงิน | BAT-25680701-00001 |   |
| 6 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงินที่ระบุข้อมูลจากต้นทาง | โอนเงิน |   |
| 7 | Label | Service | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service |   |   |
| 8 | Label | Bank Account | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account |   |   |
| 9 | Label | Request Payment Date | แสดงวันที่ Request Payment Dateแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - |   |   |
| 10 | Label | Paid date | แสดงวันที่จ่ายแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - | 04/07/2568 |   |
| 11 | Label | จำนวนรายการรวม | แสดงจำนวนรายการรวมภายใต้ Batch การเงิน | 201 |   |
| 12 | Label | จำนวนเงินรวม | แสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 2,100,000.00 |   |
| 13 | Hyperlink | จำนวนรายการรวมที่ไม่ถูกต้อง | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง -เมื่อกด Hyperlink ให้ระบบเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1272251019) | 2 |   |
| 14 | Label | จำนวนเงินรวมที่ไม่ถูกต้อง | แสดงจำนวนเงินรวมที่ไม่ถูกต้อง ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 500,000.00 |   |
| 15 | Label | จำนวนรายการรวมสุทธิ | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง - | 199 |   |
| 16 | Label | จำนวนเงินรวมสุทธิ | แสดงจำนวนเงินรวมสุทธิ ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 1,600,000.00 |   |
| 17 | Button | เอกสารแนบ | Enable : เสมอเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-000-FC-003 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1267859648) |   |   |
| 18 | Label | สถานะดำเนินการ | แสดงสถานะดำเนินการตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลสถานะดำเนินการระดับ Batch |   |   |
| 19 | Label | วันและเวลาที่ Generate File | แสดง วันและเวลาที่ Generate File ล่าสุดกรณีไม่มีข้อมูลให้แสดง - แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |
| 20 | Label | ชื่อผู้ทำรายการ | แสดง username ชื่อผู้ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง - | Ladda.wa |   |
| 21 | Label | ครั้งที่ | แสดงครั้งที่ Generate file txt ธนาคารกรณีไม่มีข้อมูลให้แสดง - | 1 |   |
| Table | Condition |
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_type = 'B' [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel = @ช่องทางการจ่ายเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date between @Request Payment Date จากand @Request Payment Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date between @Paid Date จาก and @Paid Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code = Service[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code = Bank Account[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no = @Batch Number ฝ่ายการเงินหรือ[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no = @Batch Number ฝ่ายการเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status = สถานะดำเนินการกรณีไม่ได้ระบุสถานะดำเนินการให้แสดง [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).status in @status@statusDescriptionPROกำลังดำเนินการPECรอการตรวจสอบผลREJส่งกลับไปตรวจสอบWARรอดำเนินการใหม่PEAรออนุมัติCANยกเลิกรายการAPRอนุมัติPEAรออนุมัติ SUPจ่ายสำเร็จINPจ่ายสำเร็จบางส่วนUNPจ่ายไม่สำเร็จ |
| @status | Description |
| PRO | กำลังดำเนินการ |
| PEC | รอการตรวจสอบผล |
| REJ | ส่งกลับไปตรวจสอบ |
| WAR | รอดำเนินการใหม่ |
| PEA | รออนุมัติ |
| CAN | ยกเลิกรายการ |
| APR | อนุมัติ |
| PEA | รออนุมัติ |
| SUP | จ่ายสำเร็จ |
| INP | จ่ายสำเร็จบางส่วน |
| UNP | จ่ายไม่สำเร็จ |
| [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank) | [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).batch_payment_id = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id[tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_date order by desc limit 1 |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Check Box | Check Box | On Initial | อ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | Visible | สถานะดำเนินการเป็น กำลังดำเนินการ, รอดำเนินการใหม่, รอการตรวจสอบผล |   |   |
|   |   | Invisible | สถานะดำเนินการไม่เป็น กำลังดำเนินการ, รอดำเนินการใหม่, รอการตรวจสอบผล |   |   |
|   |   | On Click | แสดง Checked หรือ Unchecked |   |   |
| รายละเอียด | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | เปิดหน้าจอ [FS-00-01 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1276117756) |   |   |
| บันทึกผลการตรวจสอบ | Button | On Initial | อ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible |   |   |
|   |   | Visible | สถานะดำเนินการเป็น รอการตรวจสอบผล |   |   |
|   |   | Invisible | สถานะดำเนินการไม่เป็น รอการตรวจสอบผล |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | เปิดหน้าจอ [FS-02-02 หน้าจอ Popup บันทึกผลการตรวจสอบ](/pages/viewpage.action?pageId=1276117780) |   |   |
| บันทึกรายการไม่ผ่านตรวจสอบ | Button | On Initial | อ้างอิงตามเงื่อนไข Enable, Disable, Visible และ Invisible |   |   |
|   |   | Visible | สถานะดำเนินการเป็น ส่งกลับไปตรวจสอบ |   |   |
|   |   | Invisible | สถานะดำเนินการไม่เป็น ส่งกลับไปตรวจสอบ |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | เปิดหน้าจอ [FS-02-03 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117782) |   |   |
| Batch Number ฝ่ายการเงิน | Label | On Initial | แสดงข้อมูล Batch Number ฝ่ายการเงิน | ตรวจสอบข้อมูล [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_split_noกรณีมีข้อมูล ให้แสดง [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_split_noกรณีไม่มีข้อมูล ให้แสดง [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |   |
| ช่องทางการจ่ายเงิน | Label | On Initial | แสดงข้อมูลช่องทางการจ่ายเงินที่ระบุจากต้นทาง | แสดงช่องทางการจ่ายเงินจากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)[.lookup_key =](/display/RDSCPENH/tx_payment_header)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channelwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงิน |   |
| Service | Label | On Initial | แสดง Service ตาม Configuration Data | แสดง Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)[.lookup_key =](/display/RDSCPENH/tx_payment_header)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channelwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Service |   |
| Bank Account | Label | On Initial | แสดง Bank Account ตาม Configuration Data | แสดงบัญชีธนาคารบริษัทจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config + [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' - Bank Account ของบริษัท |   |
| Request Payment Date | Label | On Initial | แสดงวันที่ Request Payment Date ในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) หากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date |   |
| Paid date | Label | On Initial | แสดงวันที่จ่ายในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) หากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date |   |
| จำนวนรายการรวม | Label | On Initial | แสดงจำนวนรายการรวมภายใต้ Batch การเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_transaction |   |
| จำนวนเงินรวม | Label | On Initial | แสดงจำนวนเงินรวมภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_amount |   |
| จำนวนรายการรวมที่ไม่ถูกต้อง | Hyperlink | On Initial | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินหากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_transaction |   |
|   |   | On Click | กรณีจำนวนรายการรวมไม่ถูกต้องไม่เป็น null หรือมากกว่า 0 ระบบจะเปิดหน้าจอ [FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](/pages/viewpage.action?pageId=1276117788) |   |   |
| จำนวนเงินรวมที่ไม่ถูกต้อง | Label | On Initial | แสดงจำนวนเงินรวมที่ไม่ถูกต้องภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง หากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_amount |   |
| จำนวนรายการรวมสุทธิ | Label | On Initial | แสดงจำนวนรายการรวมสุทธิภายใต้ Batch การเงิน หากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transaction |   |
| จำนวนเงินรวมสุทธิ | Label | On Initial | แสดงจำนวนเงินรวมสุทธิภายใต้ Batch การเงินในรูปแบบทศนิยม 2 ตำแหน่ง หากไม่มีข้อมูลให้แสดง "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amount |   |
| เอกสารแนบ | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | ส่งข้อมูลเลข Batch Number ฝ่ายการเงิน และเปิดหน้าจอ [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1276117763) |   |   |
| สถานะดำเนินการ | Label | On Initial | แสดงสถานะดำเนินการตาม Configuration Data | แสดงสถานะดำเนินการจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000' - สถานะดำเนินการระดับ Batch |   |
| วันและเวลาที่ Generate File | Label | On Initial | แสดงวันและเวลาที่ Generate File ล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน หากไม่มีข้อมูลให้แสดง "-" | [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_date |   |
| ชื่อผู้ทำรายการ | Label | On Initial | แสดง username ชื่อผู้ทำรายการล่าสุด หากไม่มีข้อมูลให้แสดง "-" | [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).created_by |   |
| ครั้งที่ | Label | On Initial | แสดงครั้งที่ Generate file txt ธนาคาร หากไม่มีข้อมูลให้แสดง "-" | [tx_generate_file_bank](/display/RDSCPENH/tx_generate_file_bank).round |   |

---

## Hyperlinks บนหน้านี้

- [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [https://redmine.ochi.link/issues/57945](https://redmine.ochi.link/issues/57945)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [6. Generate txt,csv file ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267860406)
- [6. Generate txt,csv file ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267860406)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [02-04-03 Process Generate Txt File ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1283129600)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [PY-000-FC-001 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811431)
- [PY-003-FC-002 หน้าจอ Popup บันทึกผลการตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859537)
- [PY-003-FC-003 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859545)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-002-FC-005 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272251019)
- [PY-000-FC-003 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859648)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [FS-00-01 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117756)
- [FS-02-02 หน้าจอ Popup บันทึกผลการตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117780)
- [FS-02-03 หน้าจอ Popup บันทึกรายการไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117782)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [.lookup_key =](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [.lookup_key =](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [FS-02-05 หน้าจอ Popup ดูรายการที่ไม่ผ่านตรวจสอบ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117788)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117763)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)
- [tx_generate_file_bank](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1267859523/image2025-8-21%2013%3A39%3A15.png?version=1&modificationDate=1755758355502&api=v2
