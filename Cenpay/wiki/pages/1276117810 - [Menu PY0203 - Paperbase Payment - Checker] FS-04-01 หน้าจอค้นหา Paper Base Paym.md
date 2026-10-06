# [Menu PY0203 : Paperbase Payment - Checker] FS-04-01 หน้าจอค้นหา Paper Base Payment - Checker

- **Page ID:** 1276117810
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117810
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-04 Paperbase Payment - Checker > [Menu PY0203 : Paperbase Payment - Checker] FS-04-01 หน้าจอค้นหา Paper Base Payment - Checker
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797122732 {padding: 0px;} div.rbtoc1784797122732 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797122732 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY0203:PaperbasePayment-Checker]FS-04-01หน้าจอค้นหาPaperBasePayment-Checker-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1271529577/image2025-8-21%2013%3A40%3A48.png?version=1&modificationDate=1755758448631&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลประเภทการจ่าย PaperBase Payment ที่ส่งตรวจสอบจาก Maker
- เพื่อให้ผู้ใช้งานสามารถค้นหาและดูข้อมูลการจ่ายระดับ Batch ได้ตามเงื่อนไขที่กำหนด
- เพื่อให้ผู้ใช้งานสามารถตรวจสอบรายการ PaperBase
- เพื่อให้ผู้ใช้งานสามารถดูรายละเอียดรายการธุรกรรมภายใต้ Batch การเงิน

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Checker)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการ Paperbase Payment ที่มาจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)

### การกระทำกับหน้าจอ (Actions)

- ล้างเงื่อนไขการค้นหาข้อมูล
- ค้นหาข้อมูล Batch การเงินประเภทการจ่าย Paper Base Payment
- ดูรายละเอียด Support Booking
- ตรวจสอบรายการเช็ค
- ดูข้อมูลรายการเช็ค
- ดูเอกสารแนบระดับ Batch

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม ค้นหา หน้าจอจะแสดงรายการ Batch การเงินที่ตรงตามเงื่อนไขการค้นหา และจัดเรียงตามช่องทางการจ่าย, Service, Paid Date, Bank Account
  - เมื่อผู้ใช้งานกดปุ่ม ล้างเงื่อนไข เงื่อนไขการค้นหาทั้งหมดจะถูก Reset เป็นค่าเริ่มต้น
  - เมื่อผู้ใช้งานกดปุ่มรายละเอียด, ตรวจสอบ, ดูข้อมูล, เอกสารแนบ ระบบจะนำผู้ใช้งานไปยังหน้าจอที่เกี่ยวข้องได้อย่างถูกต้อง

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง เมื่อกดปุ่มค้นหาระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล"
  - กรณีระบุวันที่ในเงื่อนไขการค้นหาไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" ใต้ Text Box
  - กรณีไม่มีข้อมูลตามเงื่อนไขการค้นหา ระบบจะแสดงตารางผลลัพธ์ว่างเปล่า และแสดงข้อความที่ตาราง "ไม่พบข้อมูล"
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อผู้ใช้งานกดปุ่มค้นหา ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| NoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Text BoxBatch Number ฝ่ายการเงินว่างแสดง Placeholder Format เป็น ช่องทางการจ่าย (ตัวอักษรภาษาอังกฤษ 3 หลัก) - วันที่บันทึกรายการตรวจสอบ (Format: ปปปปดดวว เป็น พ.ศ.) - Sequence number (5 หลัก)ระบุได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลข 0-9 เท่านั้นBAT-25680701-00001 2Drop Down Listช่องทางการจ่ายเงินทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลช่องทางการจ่ายเงินโอนเงิน 3Date PickerRequest Payment Date จากว่างDate Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox01/07/2568 4Date PickerRequest Payment Date ถึงว่างDate Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox31/07/2568 5Date PickerPaid Date จากว่างDate Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox01/07/2568 6Date PickerPaid Date ถึงว่างDate Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox31/07/2568 7Multiple Drop Downสถานะดำเนินการรอการตรวจสอบผลแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะดำเนินการระดับ Batchค่าเริ่มต้นสถานะ : รอการตรวจสอบผล กำลังดำเนินการ 8Drop DownService ทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Service กรณีมีการเลือก Service ให้ตรวจสอบความสัมพันธ์กับ Bank Accountกรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Bank Account BBL_MCL 9Drop DownBank Accountทั้งหมดแสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Bank Accountกรณีมีการเลือก Bank Account ให้ตรวจสอบความสัมพันธ์กับ Service กรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Service BBL 925-0-02595-5 10Buttonล้างเงื่อนไขdisableกดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุ และกลับไปเป็นเงื่อนไขเริ่มต้น![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A36%3A55.png?version=1&modificationDate=1741099015272&api=v2) 11Buttonค้นหาenableกดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุการค้นหา ถ้ามีหลายเงื่อนไข ใช้ “AND” Condition ในการค้นหาแสดงรายการตามเงื่อนไขที่ค้นหากรณีค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ตารางแสดง “ไม่พบข้อมูล”![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A40%3A7.png?version=1&modificationDate=1741099207746&api=v2) | Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksBatch Number ฝ่ายการเงินText BoxOn InitialDefault Value: ค่าว่าง Enableตลอดเวลา Disable- On Change- Validationระบุได้เฉพาะตัวอักษรภาษาอังกฤษ สัญลักษณ์ '-' (Hyphen : ขีดกลาง), '_' (Underscore : ขีดล่าง), '/' (Slash) และตัวเลข 0-9 เท่านั้น ช่องทางการจ่ายเงินDrop Down ListOn Initialแสดงข้อมูลตามเงื่อนไข Default Value On Clickแสดงข้อมูลจาก Configuration Data ส่วนข้อมูลของการจ่ายเงิน[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '16000' and lookup_key in ('COM', 'OTH') order by seq_no asc แสดงรายการธุรกรรมจากข้อมูล [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).desciption where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงินตรวจสอบการแสดงข้อมูลตาม Version ดังนี้Phase/Release[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).configPh1R1V1Ph1R2 + New Loan Ph1Ph2,Ph3V1,V2 [https://redmine.ochi.link/issues/49105](https://redmine.ochi.link/issues/49105)[https://redmine.ochi.link/issues/47132](https://redmine.ochi.link/issues/47132)Request Payment Date จากDate PickerOn InitialDefault Value: ว่าง On Changeแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Request Payment Date จาก และ Request Payment Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) Request Payment Date ถึงDate PickerOn InitialDefault Value: ว่าง On Changeแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Request Payment Date จาก และ Request Payment Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) Paid Date จากDate PickerOn InitialDefault Value: ว่าง On Changeแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Issue Date จาก และ Issue Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) Paid Date ถึงDate PickerOn InitialDefault Value: ว่าง On Changeแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Issue Date จาก และ Issue Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) สถานะดำเนินการDrop Down ListOn InitialDefault Value: รอการตรวจสอบผล[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '12000' and lookup_key = ('PEC') On Clickแสดงข้อมูลจาก Configuration Data ส่วนข้อมูลสถานะดำเนินการระดับ Batch[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '12000' and [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key in @status order by seq_no asc @statusDescriptionPECรอการตรวจสอบผลPEAรออนุมัติ ServiceDrop Down ListOn InitialDefault Value: ทั้งหมดค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).batch_payment_type = Pแสดง service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Servicesupdate by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) On Clickแสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Serviceแสดงข้อมูลด้วยเงื่อนไข [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_keyแสดง Service จากการเลือก ช่องทางการจ่าย จาก search criteriaหาข้อมูลประเภทการจ่ายจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = @ช่องทางการจ่าย lookup_key จาก search criteriaand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '69000' - ประเภทการจ่าย Mapping Serviceแสดง Service จากการเลือกช่องทางการจ่าย [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config แสดงชื่อ Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' - servicesกรณีช่องทางการจ่ายเงิน = 'เช็คบริษัท' หรือ 'อื่นๆ' ให้ทำการ Group by **Service**กรณีไม่มีการเลือกช่องทางการจ่ายจาก search criteria ให้แสดง service ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' Bank AccountDrop Down ListOn InitialDefault Value: ทั้งหมด On Clickแสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Bank Account ของบริษัทแสดงข้อมูลด้วยเงื่อนไข [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config + ' ' + [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description ตัวอย่าง KBANK 718-1-01369-3ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).bank_account [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).service = @service lookup_key จาก search_criteriaแสดง Bank Account จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config และ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Accountตัวอย่างเช่น BBL 925-0-02595-5กรณีไม่มีการเลือก service ให้แสดง bank account ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account ล้างเงื่อนไขButtonOn Clickระบบจะทำการล้างเงื่อนไขที่ระบุและกลับไปเป็นเงื่อนไขเริ่มต้น ค้นหาButtonOn ClickValidation:หากไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง ระบบจะแสดง Popup แจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล"หากไม่มีข้อมูลตามเงื่อนไข จะแสดงข้อความ "ไม่พบข้อมูล" ในตาราง |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Text Box | Batch Number ฝ่ายการเงิน | ว่าง | แสดง Placeholder Format เป็น ช่องทางการจ่าย (ตัวอักษรภาษาอังกฤษ 3 หลัก) - วันที่บันทึกรายการตรวจสอบ (Format: ปปปปดดวว เป็น พ.ศ.) - Sequence number (5 หลัก)ระบุได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลข 0-9 เท่านั้น | BAT-25680701-00001 |   |
| 2 | Drop Down List | ช่องทางการจ่ายเงิน | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลช่องทางการจ่ายเงิน | โอนเงิน |   |
| 3 | Date Picker | Request Payment Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 4 | Date Picker | Request Payment Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 5 | Date Picker | Paid Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 6 | Date Picker | Paid Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 7 | Multiple Drop Down | สถานะดำเนินการ | รอการตรวจสอบผล | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะดำเนินการระดับ Batchค่าเริ่มต้นสถานะ : รอการตรวจสอบผล | กำลังดำเนินการ |   |
| 8 | Drop Down | Service | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Service กรณีมีการเลือก Service ให้ตรวจสอบความสัมพันธ์กับ Bank Accountกรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Bank Account | BBL_MCL |   |
| 9 | Drop Down | Bank Account | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Bank Accountกรณีมีการเลือก Bank Account ให้ตรวจสอบความสัมพันธ์กับ Service กรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Service | BBL 925-0-02595-5 |   |
| 10 | Button | ล้างเงื่อนไข | disable | กดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุ และกลับไปเป็นเงื่อนไขเริ่มต้น | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A36%3A55.png?version=1&modificationDate=1741099015272&api=v2) |   |
| 11 | Button | ค้นหา | enable | กดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุการค้นหา ถ้ามีหลายเงื่อนไข ใช้ “AND” Condition ในการค้นหาแสดงรายการตามเงื่อนไขที่ค้นหากรณีค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ตารางแสดง “ไม่พบข้อมูล” | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A40%3A7.png?version=1&modificationDate=1741099207746&api=v2) |   |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Batch Number ฝ่ายการเงิน | Text Box | On Initial | Default Value: ค่าว่าง |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | - |   |   |
|   |   | Validation | ระบุได้เฉพาะตัวอักษรภาษาอังกฤษ สัญลักษณ์ '-' (Hyphen : ขีดกลาง), '_' (Underscore : ขีดล่าง), '/' (Slash) และตัวเลข 0-9 เท่านั้น |   |   |
| ช่องทางการจ่ายเงิน | Drop Down List | On Initial | แสดงข้อมูลตามเงื่อนไข Default Value |   |   |
|   |   | On Click | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลของการจ่ายเงิน | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '16000' and lookup_key in ('COM', 'OTH') order by seq_no asc แสดงรายการธุรกรรมจากข้อมูล [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).desciption where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '**16000**' - ช่องทางการจ่ายเงินตรวจสอบการแสดงข้อมูลตาม Version ดังนี้Phase/Release[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).configPh1R1V1Ph1R2 + New Loan Ph1Ph2,Ph3V1,V2 | [https://redmine.ochi.link/issues/49105](https://redmine.ochi.link/issues/49105)[https://redmine.ochi.link/issues/47132](https://redmine.ochi.link/issues/47132) |
| Phase/Release | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config |
| Ph1R1 | V1 |
| Ph1R2 + New Loan Ph1Ph2,Ph3 | V1,V2 |
| Request Payment Date จาก | Date Picker | On Initial | Default Value: ว่าง |   |   |
|   |   | On Change | แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Request Payment Date จาก และ Request Payment Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) |   |   |
| Request Payment Date ถึง | Date Picker | On Initial | Default Value: ว่าง |   |   |
|   |   | On Change | แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Request Payment Date จาก และ Request Payment Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) |   |   |
| Paid Date จาก | Date Picker | On Initial | Default Value: ว่าง |   |   |
|   |   | On Change | แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Issue Date จาก และ Issue Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) |   |   |
| Paid Date ถึง | Date Picker | On Initial | Default Value: ว่าง |   |   |
|   |   | On Change | แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)ตรวจสอบ Issue Date จาก และ Issue Date ถึงหากระบุเกิน 120 วันจะแสดงข้อความ “ระบุช่วงวันที่ได้ไม่เกิน 120 วัน” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxกรณีระบุวันที่จากมากกว่าวันที่ถึง หรือ ระบุเพียงวันที่ใดวันที่หนึ่งจะแสดงข้อความ "ระบุช่วงวันที่ไม่ถูกต้อง" เป็นตัวอักษรสีแดง ใต้ Text Box-- update by patcha.vo 19/01/69 [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)-- update by patcha.vo 23/01/69 [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510) |   |   |
| สถานะดำเนินการ | Drop Down List | On Initial | Default Value: รอการตรวจสอบผล | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '12000' and lookup_key = ('PEC') |   |
|   |   | On Click | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูลสถานะดำเนินการระดับ Batch | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description where parent_id = '12000' and [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key in @status order by seq_no asc @statusDescriptionPECรอการตรวจสอบผลPEAรออนุมัติ |   |
| @status | Description |
| PEC | รอการตรวจสอบผล |
| PEA | รออนุมัติ |
| Service | Drop Down List | On Initial | Default Value: ทั้งหมด | ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).batch_payment_type = Pแสดง service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**17000**' - Services | update by patcha.vo 29/05/69[https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045) |
|   |   | On Click | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Serviceแสดงข้อมูลด้วยเงื่อนไข [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key | แสดง Service จากการเลือก ช่องทางการจ่าย จาก search criteriaหาข้อมูลประเภทการจ่ายจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = @ช่องทางการจ่าย lookup_key จาก search criteriaand [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '69000' - ประเภทการจ่าย Mapping Serviceแสดง Service จากการเลือกช่องทางการจ่าย [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config แสดงชื่อ Service จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption_eng[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).servicewhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' - servicesกรณีช่องทางการจ่ายเงิน = 'เช็คบริษัท' หรือ 'อื่นๆ' ให้ทำการ Group by **Service**กรณีไม่มีการเลือกช่องทางการจ่ายจาก search criteria ให้แสดง service ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**15000**' |   |
| Bank Account | Drop Down List | On Initial | Default Value: ทั้งหมด |   |   |
|   |   | On Click | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Bank Account ของบริษัทแสดงข้อมูลด้วยเงื่อนไข [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config + ' ' + [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description ตัวอย่าง KBANK 718-1-01369-3 | ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).bank_account [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).service = @service lookup_key จาก search_criteriaแสดง Bank Account จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config และ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciptionwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Accountตัวอย่างเช่น BBL 925-0-02595-5กรณีไม่มีการเลือก service ให้แสดง bank account ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account |   |
| ล้างเงื่อนไข | Button | On Click | ระบบจะทำการล้างเงื่อนไขที่ระบุและกลับไปเป็นเงื่อนไขเริ่มต้น |   |   |
| ค้นหา | Button | On Click | Validation:หากไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง ระบบจะแสดง Popup แจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล"หากไม่มีข้อมูลตามเงื่อนไข จะแสดงข้อความ "ไม่พบข้อมูล" ในตาราง |   |   |
| ส่วนแสดงข้อมูลผลการค้นหา1 การเรียงลำดับข้อมูล1.เรียงตามตัวอักษร ของช่องทางการจ่าย 2.เรียงตามตัวอักษร ของ Service 3.เรียงตามวันที่ล่าสุดไปยังเก่าที่สุด ของ Paid Date 4.เรียงตามตัวอักษร ของ Bank Account 2 Sort Columnช่องทางการจ่ายServicePaid DateBank Account 3 Concurrent Userกรณีมีการเลือกดำเนินการยกเลิกรายการส่งตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง NoComponent TypeComponent NameAction / Data ValueExampleRemark1Buttonรายละเอียดแสดงปุ่มตลอดเวลาเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-002 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1266811431) 2Buttonตรวจสอบเงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอการตรวจสอบผลแสดงรอการตรวจสอบผลเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode Edit 3LabelBatch Number ฝ่ายการเงินแสดงข้อมูล Batch Number ฝ่ายการเงินBAT-25680701-00001 4Labelช่องทางการจ่ายเงินแสดงข้อมูลช่องทางการจ่ายเงินที่ระบุข้อมูลจากต้นทาง โอนเงิน 5LabelServiceแสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service 6LabelBank Accountแสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account 7LabelRequest Payment Dateแสดงวันที่ Request Payment Dateแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - 8LabelPaid dateแสดงวันที่จ่ายแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง -04/07/2568 9Hyperlinkจำนวนรายการรวมแสดงจำนวนรายการรวมภายใต้ Batch การเงินเมื่อกด Hyperlink ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode View201 10Labelจำนวนเงินรวมแสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก 2,100,000.00 11Labelจำนวนรายการรวมที่ไม่ถูกต้องแสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง -2 12Labelจำนวนเงินรวมที่ไม่ถูกต้องแสดงจำนวนเงินรวมที่ไม่ถูกต้อง ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง -500,000.00 13Labelจำนวนรายการรวมสุทธิแสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง -199 14Labelจำนวนเงินรวมสุทธิแสดงจำนวนเงินรวมสุทธิ ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง -1,600,000.00 15Buttonเอกสารแนบแสดงปุ่มตลอดเวลา เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1267859648) 16Labelสถานะดำเนินการแสดงสถานะดำเนินการตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลสถานะดำเนินการระดับ Batchรอตรวจสอบ 17Labelชื่อผู้ทำรายการแสดง username ชื่อผู้ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง -Ladda.wa 18Labelวันและเวลาที่ทำรายการแสดง วันและเวลาที่ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน30/06/2568 21.00 19Labelชื่อผู้ตรวจสอบแสดง username ชื่อผู้ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง - Ladda.wa 20Labelวันและเวลาที่ตรวจสอบแสดงวันและเวลาที่ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน30/06/2568 21.00 | TableCondition[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_type = 'P'[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel = @ช่องทางการจ่ายเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date between @Request Payment Date จาก and @Request Payment Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date between @Paid Date จาก and @Paid Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code = Service[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code = Bank Account[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no = @Batch Number ฝ่ายการเงิน หรือ [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no = @Batch Number ฝ่ายการเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status = สถานะดำเนินการกรณีไม่ได้ระบุสถานะดำเนินการให้แสดง [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).status in @status@statusDescriptionPECรอการตรวจสอบผลPEAรออนุมัติ Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksรายละเอียดButtonOn Clickเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-00-01 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117756) ตรวจสอบButtonOn Initialแสดงข้อมูลตามเงื่อนไข Visible และ Invisible Visibleแสดงเมื่อสถานะดำเนินการเป็น "รอการตรวจสอบผล" Invisibleซ่อนเมื่อสถานะดำเนินการไม่เป็น "รอการตรวจสอบผล" On Clickเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1276117812) Batch Number ฝ่ายการเงินLabelOn Initialแสดง Batch Number ฝ่ายการเงินหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no ช่องทางการจ่ายเงินLabelOn Initialแสดงข้อมูลช่องทางการจ่ายเงินที่ระบุจากต้นทางหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel ServiceLabelOn Initialแสดง Service จาก Configuration Dataหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code Bank AccountLabelOn Initialแสดง Bank Account จาก Configuration Dataหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code Request Payment DateLabelOn Initialแสดงวันที่ Request Payment Date ที่ระบุจากต้นทางแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date Paid DateLabelOn Initialแสดงวันที่จ่ายหากไม่มีข้อมูลจะแสดงเป็น "-"แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date จำนวนรายการรวมLabelOn Initialแสดงจำนวนรายการรวมภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_transaction On Clickเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1276117812) (Mode View) จำนวนเงินรวมLabelOn Initialแสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_amount จำนวนรายการรวมที่ไม่ถูกต้องLabelOn Initialแสดงจำนวนรายการที่ไม่ถูกต้องภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_transaction จำนวนเงินรวมที่ไม่ถูกต้องLabelOn Initialแสดงจำนวนเงินรวมของรายการที่ไม่ถูกต้องภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_amount จำนวนรายการรวมสุทธิLabelOn Initialแสดงจำนวนรายการรวมสุทธิภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transaction จำนวนเงินรวมสุทธิLabelOn Initialแสดงจำนวนเงินรวมสุทธิภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amount เอกสารLabelOn Initialเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117763) สถานะดำเนินการButtonOn Clickแสดงสถานะดำเนินการจาก Configuration Data[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status ชื่อผู้ทำรายการLabelOn Initialแสดง username ชื่อผู้ทำรายการล่าสุดหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).maker_date วันและเวลาที่ทำรายการLabelOn Initialแสดงวันและเวลาที่ทำรายการล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นนหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).maker_by ชื่อผู้ตรวจสอบLabelOn Initialแสดง username ชื่อผู้ทำรายการตรวจสอบล่าสุดหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).checker_date วันและเวลาที่ตรวจสอบLabelOn Initialแสดงวันและเวลาที่ทำรายการตรวจสอบล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นนหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).checker_by |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |   | การเรียงลำดับข้อมูล | 1.เรียงตามตัวอักษร ของช่องทางการจ่าย 2.เรียงตามตัวอักษร ของ Service 3.เรียงตามวันที่ล่าสุดไปยังเก่าที่สุด ของ Paid Date 4.เรียงตามตัวอักษร ของ Bank Account |   |   |
| 2 |   | Sort Column | ช่องทางการจ่ายServicePaid DateBank Account |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการยกเลิกรายการส่งตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | รายละเอียด | แสดงปุ่มตลอดเวลาเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-002 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1266811431) |   |   |
| 2 | Button | ตรวจสอบ | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอการตรวจสอบผลแสดงรอการตรวจสอบผลเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode Edit |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอการตรวจสอบผล |
| แสดง | รอการตรวจสอบผล |
| 3 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงิน | BAT-25680701-00001 |   |
| 4 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงินที่ระบุข้อมูลจากต้นทาง | โอนเงิน |   |
| 5 | Label | Service | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service |   |   |
| 6 | Label | Bank Account | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account |   |   |
| 7 | Label | Request Payment Date | แสดงวันที่ Request Payment Dateแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - |   |   |
| 8 | Label | Paid date | แสดงวันที่จ่ายแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - | 04/07/2568 |   |
| 9 | Hyperlink | จำนวนรายการรวม | แสดงจำนวนรายการรวมภายใต้ Batch การเงินเมื่อกด Hyperlink ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode View | 201 |   |
| 10 | Label | จำนวนเงินรวม | แสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 2,100,000.00 |   |
| 11 | Label | จำนวนรายการรวมที่ไม่ถูกต้อง | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง - | 2 |   |
| 12 | Label | จำนวนเงินรวมที่ไม่ถูกต้อง | แสดงจำนวนเงินรวมที่ไม่ถูกต้อง ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 500,000.00 |   |
| 13 | Label | จำนวนรายการรวมสุทธิ | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง - | 199 |   |
| 14 | Label | จำนวนเงินรวมสุทธิ | แสดงจำนวนเงินรวมสุทธิ ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 1,600,000.00 |   |
| 15 | Button | เอกสารแนบ | แสดงปุ่มตลอดเวลา เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1267859648) |   |   |
| 16 | Label | สถานะดำเนินการ | แสดงสถานะดำเนินการตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลสถานะดำเนินการระดับ Batch | รอตรวจสอบ |   |
| 17 | Label | ชื่อผู้ทำรายการ | แสดง username ชื่อผู้ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง - | Ladda.wa |   |
| 18 | Label | วันและเวลาที่ทำรายการ | แสดง วันและเวลาที่ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |
| 19 | Label | ชื่อผู้ตรวจสอบ | แสดง username ชื่อผู้ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง - | Ladda.wa |   |
| 20 | Label | วันและเวลาที่ตรวจสอบ | แสดงวันและเวลาที่ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |
| Table | Condition |
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_type = 'P'[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel = @ช่องทางการจ่ายเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date between @Request Payment Date จาก and @Request Payment Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date between @Paid Date จาก and @Paid Date ถึง[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code = Service[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code = Bank Account[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no = @Batch Number ฝ่ายการเงิน หรือ [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no = @Batch Number ฝ่ายการเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status = สถานะดำเนินการกรณีไม่ได้ระบุสถานะดำเนินการให้แสดง [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).status in @status@statusDescriptionPECรอการตรวจสอบผลPEAรออนุมัติ |
| @status | Description |
| PEC | รอการตรวจสอบผล |
| PEA | รออนุมัติ |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| รายละเอียด | Button | On Click | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-00-01 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117756) |   |   |
| ตรวจสอบ | Button | On Initial | แสดงข้อมูลตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | แสดงเมื่อสถานะดำเนินการเป็น "รอการตรวจสอบผล" |   |   |
|   |   | Invisible | ซ่อนเมื่อสถานะดำเนินการไม่เป็น "รอการตรวจสอบผล" |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1276117812) |   |   |
| Batch Number ฝ่ายการเงิน | Label | On Initial | แสดง Batch Number ฝ่ายการเงินหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no |   |
| ช่องทางการจ่ายเงิน | Label | On Initial | แสดงข้อมูลช่องทางการจ่ายเงินที่ระบุจากต้นทางหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).payment_channel |   |
| Service | Label | On Initial | แสดง Service จาก Configuration Dataหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code |   |
| Bank Account | Label | On Initial | แสดง Bank Account จาก Configuration Dataหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).bank_account_code |   |
| Request Payment Date | Label | On Initial | แสดงวันที่ Request Payment Date ที่ระบุจากต้นทางแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).request_payment_date |   |
| Paid Date | Label | On Initial | แสดงวันที่จ่ายหากไม่มีข้อมูลจะแสดงเป็น "-"แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).paid_date |   |
| จำนวนรายการรวม | Label | On Initial | แสดงจำนวนรายการรวมภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_transaction |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1276117812) (Mode View) |   |   |
| จำนวนเงินรวม | Label | On Initial | แสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).total_amount |   |
| จำนวนรายการรวมที่ไม่ถูกต้อง | Label | On Initial | แสดงจำนวนรายการที่ไม่ถูกต้องภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_transaction |   |
| จำนวนเงินรวมที่ไม่ถูกต้อง | Label | On Initial | แสดงจำนวนเงินรวมของรายการที่ไม่ถูกต้องภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).incorrect_amount |   |
| จำนวนรายการรวมสุทธิ | Label | On Initial | แสดงจำนวนรายการรวมสุทธิภายใต้ Batch การเงินหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_transaction |   |
| จำนวนเงินรวมสุทธิ | Label | On Initial | แสดงจำนวนเงินรวมสุทธิภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).net_amount |   |
| เอกสาร | Label | On Initial | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117763) |   |   |
| สถานะดำเนินการ | Button | On Click | แสดงสถานะดำเนินการจาก Configuration Data | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status |   |
| ชื่อผู้ทำรายการ | Label | On Initial | แสดง username ชื่อผู้ทำรายการล่าสุดหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).maker_date |   |
| วันและเวลาที่ทำรายการ | Label | On Initial | แสดงวันและเวลาที่ทำรายการล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นนหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).maker_by |   |
| ชื่อผู้ตรวจสอบ | Label | On Initial | แสดง username ชื่อผู้ทำรายการตรวจสอบล่าสุดหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).checker_date |   |
| วันและเวลาที่ตรวจสอบ | Label | On Initial | แสดงวันและเวลาที่ทำรายการตรวจสอบล่าสุดในรูปแบบ วว/ดด/ปปปป (ปี พ.ศ.) ชช.นนหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).checker_by |   |

---

## Hyperlinks บนหน้านี้

- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [https://redmine.ochi.link/issues/49105](https://redmine.ochi.link/issues/49105)
- [https://redmine.ochi.link/issues/47132](https://redmine.ochi.link/issues/47132)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [https://redmine.ochi.link/issues/44264](https://redmine.ochi.link/issues/44264)
- [https://redmine.ochi.link/issues/45510](https://redmine.ochi.link/issues/45510)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [https://redmine.ochi.link/issues/77045](https://redmine.ochi.link/issues/77045)
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
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [PY-002-FC-002 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811431)
- [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858926)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858926)
- [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859648)
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
- [FS-00-01 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117756)
- [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117812)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [FS-04-02 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117812)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [FS-00-03 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117763)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1271529577/image2025-8-21%2013%3A40%3A48.png?version=1&modificationDate=1755758448631&api=v2
