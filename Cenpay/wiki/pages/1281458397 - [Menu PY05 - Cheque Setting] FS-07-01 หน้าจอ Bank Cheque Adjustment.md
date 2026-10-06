# [Menu PY05 : Cheque Setting] FS-07-01 หน้าจอ Bank Cheque Adjustment

- **Page ID:** 1281458397
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281458397
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-07 จัดการเช็คธนาคาร > [Menu PY05 : Cheque Setting] FS-07-01 หน้าจอ Bank Cheque Adjustment
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797127784 {padding: 0px;} div.rbtoc1784797127784 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797127784 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY05:ChequeSetting]FS-07-01หน้าจอBankChequeAdjustment-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1272905959/image2025-10-2%2014%3A16%3A50.png?version=1&modificationDate=1759389446929&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อบันทึกผลการจ่ายเช็คระดับรายการธุรกรรม

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการธนาคารที่สร้างไว้มาแสดงที่หน้าจอ

### การกระทำกับหน้าจอ (Actions)

- กดปุ่ม "New Template" เพื่อสร้างรายการ Template เช็ค
- กดปุ่ม ![img](/download/thumbnails/1271988611/2023-03-14_095435.png?version=1&modificationDate=1754366386044&api=v2) "แก้ไข" เพื่อแก้ไขรายการ Template เช็ค
- กดปุ่ม ![img](/download/thumbnails/1271988611/%E0%B8%96%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B0.png?version=1&modificationDate=1754366408559&api=v2) "ลบ" เพื่อลบรายการ Template เช็ค

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม New Template ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) เพื่อใช้ในการเพิ่มรูปแบบเช็คของรายการธนาคารใหม่
  - เมื่อผู้ใช้งานกดปุ่ม แก้ไข ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) เพื่อใช้ในการแก้ไขรูปแบบเช็คของรายการธนาคารที่เลือก
  - เมื่อผู้ใช้งานกดปุ่ม ลบ ระบบจะแจ้งเตือนยืนยันการลบข้อมูลรูปแบบเช็คของรายการธนาคารที่เลือก

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ต้องการแก้ไขข้อมูลหลังจากลบรายการธนาคารแล้ว ระบบจะแสดงแจ้งเจือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ต้องการลบข้อมูลหลังจากลบรายการธนาคารแล้ว ระบบจะแสดงแจ้งเจือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อเข้าสู่หน้าจอ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| NoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1ButtonNew TemplateEnableEnable : เสมอเมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) | Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksNew TemplateButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickเมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | New Template | Enable | Enable : เสมอเมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) |   |   |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| New Template | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1271988612) |   |   |
| ส่วนแสดงข้อมูล1 การเรียงข้อมูลเรียงตามตัวอักษรของรายการธนาคารเรียงตามตัวอักษรของรูปแบบเช็คธนาคาร NoComponent TypeComponent NameAction / Data ValueExampleRemark1Buttonแก้ไขEnable : เสมอตรวจสอบการลบข้อมูลรูปแบบเช็คกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)กรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง"เมื่อกด ตกลง ระบบจะปิดหน้าจอ Popup แจ้งเตือนและ Refresh หน้าจอ ![img](/download/thumbnails/1273266511/2023-03-14_095435.png?version=1&modificationDate=1754366854780&api=v2) 2ButtonลบEnable : เสมอตรวจสอบการลบข้อมูลรูปแบบเช็คกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะดำเนินการดังนี้ลบข้อมูล Template ที่เลือก และ Refresh หน้าจอกรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง"เมื่อกด ตกลง ระบบจะปิดหน้าจอ Popup แจ้งเตือนและ Refresh หน้าจอ![img](/download/thumbnails/1273266511/%E0%B8%96%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B0.png?version=2&modificationDate=1754366870752&api=v2) 3Labelวันที่ทำรายการแสดงข้อมูลวันที่บันทึก Templateแสดงรูปแบบเป็น วว/ดด/ปปปป ชช:นน (ปี พ.ศ.)07/07/2568 4Labelรายการธนาคารแสดงข้อมูลรายการธนาคารธนาคารกรุงศรีอยุธยา จำกัด (มหาชน) 5Labelรูปแบบแสดงข้อมูลรูปแบบของรายการเช็คธนาคารTemplate 01 6Labelหมายเหตุแสดงข้อมูลหมายเหตุกรณีไม่มีข้อมูลให้แสดง -ใช้สำหรับสั่งจ่ายนิติบุคคล 7Labelสถานะการใช้งานแสดงข้อมูลจาก [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะรายการเปิดใช้งานไม่ใช้งานเปิดใช้งาน | **เงื่อนไขการแสดงข้อมูล** TableCondition[cf_cheque_header](/display/RDSCPENH/cf_cheque_header)[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).active_status in ('Y', 'N')Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksแก้ไขButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickตรวจสอบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะเปิด [FS-07-02 หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1281458399)กรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : err_py_002 "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" เมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-07-01 หน้าจอ Bank Cheque Adjustment](/pages/viewpage.action?pageId=1281458397) และ Refresh หน้าจอใหม่[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_code ลบButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickตรวจสอบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : con_com_004 "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะลบข้อมูล Template ที่เลือก และ Refresh หน้าจอกรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : err_py_002 "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" เมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-07-01 หน้าจอ Bank Cheque Adjustment](/pages/viewpage.action?pageId=1281458397) และ Refresh หน้าจอใหม่ตรวจสอบข้อมูลโดยใช้ template_code ของธนาคารที่ต้องการลบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeDelete ข้อมูลออกจากตาราง [cf_cheque_header](/display/RDSCPENH/cf_cheque_header) และ [cf_cheque_detail](/display/RDSCPENH/cf_cheque_detail) วันที่ทำรายการLabelOn Initialแสดงวันที่ทำรายการ โดยแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).updated_by รายการธนาคารLabelOn Initialแสดงข้อมูลรายการธนาคารแสดงข้อมูล [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description_eng ด้วยเงื่อนไขดังนี้ [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config = [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).bank_account_code รูปแบบLabelOn Initialแสดงข้อมูลรูปแบบของรายการเช็คธนาคาร[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).bank_title หมายเหตุLabelOn Initialแสดงข้อมูลหมายเหตุ[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).remark สถานะการใช้งานLabelOn Initialแสดงข้อมูลสถานะการใช้งาน[cf_cheque_header](/display/RDSCPENH/cf_cheque_header).active_status |
| ส่วนแสดงข้อมูล |
| 1 |   | การเรียงข้อมูล | เรียงตามตัวอักษรของรายการธนาคารเรียงตามตัวอักษรของรูปแบบเช็คธนาคาร |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | แก้ไข | Enable : เสมอตรวจสอบการลบข้อมูลรูปแบบเช็คกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)กรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง"เมื่อกด ตกลง ระบบจะปิดหน้าจอ Popup แจ้งเตือนและ Refresh หน้าจอ | ![img](/download/thumbnails/1273266511/2023-03-14_095435.png?version=1&modificationDate=1754366854780&api=v2) |   |
| 2 | Button | ลบ | Enable : เสมอตรวจสอบการลบข้อมูลรูปแบบเช็คกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะดำเนินการดังนี้ลบข้อมูล Template ที่เลือก และ Refresh หน้าจอกรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง"เมื่อกด ตกลง ระบบจะปิดหน้าจอ Popup แจ้งเตือนและ Refresh หน้าจอ | ![img](/download/thumbnails/1273266511/%E0%B8%96%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B0.png?version=2&modificationDate=1754366870752&api=v2) |   |
| 3 | Label | วันที่ทำรายการ | แสดงข้อมูลวันที่บันทึก Templateแสดงรูปแบบเป็น วว/ดด/ปปปป ชช:นน (ปี พ.ศ.) | 07/07/2568 |   |
| 4 | Label | รายการธนาคาร | แสดงข้อมูลรายการธนาคาร | ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน) |   |
| 5 | Label | รูปแบบ | แสดงข้อมูลรูปแบบของรายการเช็คธนาคาร | Template 01 |   |
| 6 | Label | หมายเหตุ | แสดงข้อมูลหมายเหตุกรณีไม่มีข้อมูลให้แสดง - | ใช้สำหรับสั่งจ่ายนิติบุคคล |   |
| 7 | Label | สถานะการใช้งาน | แสดงข้อมูลจาก [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะรายการเปิดใช้งานไม่ใช้งาน | เปิดใช้งาน |   |
| Table | Condition |
| [cf_cheque_header](/display/RDSCPENH/cf_cheque_header) | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).active_status in ('Y', 'N') |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| แก้ไข | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | ตรวจสอบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะเปิด [FS-07-02 หน้าจอ Popup แก้ไขรูปแบบเช็ค](/pages/viewpage.action?pageId=1281458399)กรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : err_py_002 "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" เมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-07-01 หน้าจอ Bank Cheque Adjustment](/pages/viewpage.action?pageId=1281458397) และ Refresh หน้าจอใหม่ | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_code |   |
| ลบ | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | ตรวจสอบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeกรณีพบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : con_com_004 "ยืนยันทำรายการหรือไม่"เมื่อกด ยกเลิก ให้ปิดการแจ้งเตือนเมื่อกด ตกลง ระบบจะลบข้อมูล Template ที่เลือก และ Refresh หน้าจอกรณีไม่พบข้อมูล เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : err_py_002 "เนื่องจากรายการธนาคารที่ทำรายการโดนลบข้อมูลแล้ว กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง" เมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-07-01 หน้าจอ Bank Cheque Adjustment](/pages/viewpage.action?pageId=1281458397) และ Refresh หน้าจอใหม่ | ตรวจสอบข้อมูลโดยใช้ template_code ของธนาคารที่ต้องการลบข้อมูล [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_codeDelete ข้อมูลออกจากตาราง [cf_cheque_header](/display/RDSCPENH/cf_cheque_header) และ [cf_cheque_detail](/display/RDSCPENH/cf_cheque_detail) |   |
| วันที่ทำรายการ | Label | On Initial | แสดงวันที่ทำรายการ โดยแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).updated_by |   |
| รายการธนาคาร | Label | On Initial | แสดงข้อมูลรายการธนาคาร | แสดงข้อมูล [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description_eng ด้วยเงื่อนไขดังนี้ [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '18000' where [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config = [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).bank_account_code |   |
| รูปแบบ | Label | On Initial | แสดงข้อมูลรูปแบบของรายการเช็คธนาคาร | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).bank_title |   |
| หมายเหตุ | Label | On Initial | แสดงข้อมูลหมายเหตุ | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).remark |   |
| สถานะการใช้งาน | Label | On Initial | แสดงข้อมูลสถานะการใช้งาน | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).active_status |   |

---

## Hyperlinks บนหน้านี้

- [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)
- [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)
- [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)
- [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)
- [หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988612)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [FS-07-02 หน้าจอ Popup แก้ไขรูปแบบเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281458399)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [FS-07-01 หน้าจอ Bank Cheque Adjustment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281458397)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [FS-07-01 หน้าจอ Bank Cheque Adjustment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281458397)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_detail)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1272905959/image2025-10-2%2014%3A16%3A50.png?version=1&modificationDate=1759389446929&api=v2
