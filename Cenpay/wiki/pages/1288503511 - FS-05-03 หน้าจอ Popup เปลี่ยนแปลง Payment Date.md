# FS-05-03 หน้าจอ Popup เปลี่ยนแปลง Payment Date

- **Page ID:** 1288503511
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288503511
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-05 หน้าจออนุมัติจ่ายและบันทึกบัญชี > FS-05-03 หน้าจอ Popup เปลี่ยนแปลง Payment Date
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797124455 {padding: 0px;} div.rbtoc1784797124455 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797124455 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-หน้าจอหลัก)
- [Screen Overview](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-05-03หน้าจอPopupเปลี่ยนแปลงPaymentDate-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1282245377/image2025-9-8%2016%3A33%3A24.png?version=1&modificationDate=1757324007787&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อให้ผู้ใช้งานสามารถเปลี่ยนแปลงข้อมูล Payment Date

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Authorizer)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่การเงิน (Authorizer)
  - ผู้ใช้งานจะต้องกดปุ่ม Calendar ของคอลัมน์ Payment Date ที่หน้าจอหลัก
  - รายการที่เลือกจะต้องมีสถานะดำเนินการเป็น รออนุมัติ

### การกระทำกับหน้าจอ (Actions)

- ระบุข้อมูล Payment Date
- ยกเลิกบันทึกข้อมูล
- ยืนยันบันทึกข้อมูล

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - กรณียกเลิก ระบบจะล้างข้อมูลที่กรอกในหน้าจอนี้ทั้งหมด และกลับไปยังหน้าจอหลัก
  - กรณีบันทึก
    - ส่งอัปเดตข้อมูล Payment Date กลับไปยังหน้าจอหลัก

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูลสถานะดำเนินการ" และกลับสู่หน้าจอหลัก
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| ส่วนแสดงข้อมูลผลการค้นหาNo Component TypeComponent NameAction / Data ValueExampleRemark1CalendarPayment Date*แสดง Required Fieldแสดงวันที่ให้เลือก โดยไม่จำกัดช่วงวันที่ (ไม่รองรับการระบุเอง) 2ButtonยกเลิกEnable : เสมอระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) 3ButtonบันทึกEnable : เสมอให้แสดงแจ้งเตือน "ยืนยันการบันทึกข้อมูลหรือไม่"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลง ให้ตรวจสอบสถานะดำเนินการ ต้องเป็น "รออนุมัติ"กรณีสถานะดำเนินการเป็น รออนุมัติระบบบันทึกข้อมูลเข้าสู่ระบบและปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731)กรณีสถานะดำเนินการ ไม่เท่ากับ รออนุมัติให้แสดงแจ้งเตือน [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)"ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูลสถานะดำเนินการ"ระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) | Component NameTypeEventAction/Validation/Default ValueData SourceRemarksReference Number ฝ่ายการเงินLabelOn Initialแสดง Reference Number ฝ่ายการเงินหากไม่มีข้อมูลจะแสดงเป็น "-"[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).fin_reference_no Payment DateButtonOn Initialแสดงข้อมูลวันที่ Payment Date[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_date On Clickแสดงตัวเลือกวันที่ให้เลือกได้ โดยไม่จำกัดวันที่ล่วงหน้าหรือวันที่ย้อนหลัง ยกเลิกButtonOn Clickระบบจะล้างข้อมูลที่ระบุในหน้าจอนี้ทั้งหมด และกลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833) บันทึกButtonOn Initialแสดงข้อมูลตามเงื่อนไข Enable และ Disable Enableเปิดใช้งานปุ่มเมื่อเปลี่ยนแปลงวันที่ (ข้อมูลที่เลือกไม่ตรงกับ Data Source : Payment Date) Disableปิดใช้งานปุ่มเมื่อไม่มีการเปลี่ยนแปลงวันที่ On ClickAction: ตรวจสอบข้อมูลก่อนบันทึก หากระบุข้อมูลไม่ครบ ระบบจะแสดงข้อความแจ้งเตือน “กรุณาระบุ” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxหากข้อมูลถูกต้อง ระบบจะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) : con_com_002 (“ยืนยันการบันทึกข้อมูลหรือไม่”)เมื่อกดตกลง ให้ตรวจสอบสถานะดำเนินการ ต้องเป็น "รออนุมัติ"กรณีสถานะดำเนินการเป็น รออนุมัติ ระบบบันทึกข้อมูลเข้าสู่ระบบและปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)กรณีสถานะดำเนินการ ไม่เท่ากับ รออนุมัติ ให้แสดงแจ้งเตือน [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)"ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูลสถานะดำเนินการ" ระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)เมื่อกดยกเลิกใน Popup ให้กลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833)เมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้บันทึกข้อมูลเข้าสู่ระบบกลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833) และนำข้อมูล ไปแสดงในคอลัมน์ "Payment Date"บันทึกข้อมูลเข้าสู่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) เงื่อนไขดังนี้[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) FieldMappingbatch_payment_idBatch ที่ทำรายการ payment_datePayment Date ที่เลือกจากหน้าจอ updated_dateUsername ผู้แก้ไขรายการ updated_byวันและเวลาที่แก้ไขรายการบันทึกข้อมูลเข้าสู่ระบบโดยเรียกใช้ [WS สำหรับ Update Dashboard](/pages/viewpage.action?pageId=1288176545)**Input Data** Payment - Mapping FieldWS - Parameter NameDescriptionExampleMandatory[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).fin_reference_noreferenceNumberReference Number ของ EDWEGP25680402003 MData Config = 'PAYMENT_DATE'actionเหตุการณ์ที่ต้องการ UpdatePAYMENT_DATEM Data Config = 'A'valueค่าของข้อมูลที่ Update ที่ไม่ใช่วันที่AM[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_datedateValueค่าของข้อมูลที่ Update ที่เป็นวันที่'2025-01-01'M |
| ส่วนแสดงข้อมูลผลการค้นหา |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Calendar | Payment Date* | แสดง Required Fieldแสดงวันที่ให้เลือก โดยไม่จำกัดช่วงวันที่ (ไม่รองรับการระบุเอง) |   |   |
| 2 | Button | ยกเลิก | Enable : เสมอระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) |   |   |
| 3 | Button | บันทึก | Enable : เสมอให้แสดงแจ้งเตือน "ยืนยันการบันทึกข้อมูลหรือไม่"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลง ให้ตรวจสอบสถานะดำเนินการ ต้องเป็น "รออนุมัติ"กรณีสถานะดำเนินการเป็น รออนุมัติระบบบันทึกข้อมูลเข้าสู่ระบบและปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731)กรณีสถานะดำเนินการ ไม่เท่ากับ รออนุมัติให้แสดงแจ้งเตือน [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)"ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูลสถานะดำเนินการ"ระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) |   |   |
| Component Name | Type | Event | Action/Validation/Default Value | Data Source | Remarks |
| Reference Number ฝ่ายการเงิน | Label | On Initial | แสดง Reference Number ฝ่ายการเงินหากไม่มีข้อมูลจะแสดงเป็น "-" | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).fin_reference_no |   |
| Payment Date | Button | On Initial | แสดงข้อมูลวันที่ Payment Date | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_date |   |
|   |   | On Click | แสดงตัวเลือกวันที่ให้เลือกได้ โดยไม่จำกัดวันที่ล่วงหน้าหรือวันที่ย้อนหลัง |   |   |
| ยกเลิก | Button | On Click | ระบบจะล้างข้อมูลที่ระบุในหน้าจอนี้ทั้งหมด และกลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833) |   |   |
| บันทึก | Button | On Initial | แสดงข้อมูลตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | เปิดใช้งานปุ่มเมื่อเปลี่ยนแปลงวันที่ (ข้อมูลที่เลือกไม่ตรงกับ Data Source : Payment Date) |   |   |
|   |   | Disable | ปิดใช้งานปุ่มเมื่อไม่มีการเปลี่ยนแปลงวันที่ |   |   |
|   |   | On Click | Action: ตรวจสอบข้อมูลก่อนบันทึก หากระบุข้อมูลไม่ครบ ระบบจะแสดงข้อความแจ้งเตือน “กรุณาระบุ” – เป็นตัวอักษรสีแดง ด้านล่าง Textboxหากข้อมูลถูกต้อง ระบบจะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) : con_com_002 (“ยืนยันการบันทึกข้อมูลหรือไม่”)เมื่อกดตกลง ให้ตรวจสอบสถานะดำเนินการ ต้องเป็น "รออนุมัติ"กรณีสถานะดำเนินการเป็น รออนุมัติ ระบบบันทึกข้อมูลเข้าสู่ระบบและปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)กรณีสถานะดำเนินการ ไม่เท่ากับ รออนุมัติ ให้แสดงแจ้งเตือน [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)"ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูลสถานะดำเนินการ" ระบบปิดหน้าจอ กลับสู่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)เมื่อกดยกเลิกใน Popup ให้กลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833)เมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้บันทึกข้อมูลเข้าสู่ระบบกลับสู่หน้าจอ [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833) และนำข้อมูล ไปแสดงในคอลัมน์ "Payment Date" | บันทึกข้อมูลเข้าสู่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) เงื่อนไขดังนี้[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) FieldMappingbatch_payment_idBatch ที่ทำรายการ payment_datePayment Date ที่เลือกจากหน้าจอ updated_dateUsername ผู้แก้ไขรายการ updated_byวันและเวลาที่แก้ไขรายการบันทึกข้อมูลเข้าสู่ระบบโดยเรียกใช้ [WS สำหรับ Update Dashboard](/pages/viewpage.action?pageId=1288176545)**Input Data** Payment - Mapping FieldWS - Parameter NameDescriptionExampleMandatory[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).fin_reference_noreferenceNumberReference Number ของ EDWEGP25680402003 MData Config = 'PAYMENT_DATE'actionเหตุการณ์ที่ต้องการ UpdatePAYMENT_DATEM Data Config = 'A'valueค่าของข้อมูลที่ Update ที่ไม่ใช่วันที่AM[tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_datedateValueค่าของข้อมูลที่ Update ที่เป็นวันที่'2025-01-01'M |   |
| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) |
| Field | Mapping |
| batch_payment_id | Batch ที่ทำรายการ |
| payment_date | Payment Date ที่เลือกจากหน้าจอ |
| updated_date | Username ผู้แก้ไขรายการ |
| updated_by | วันและเวลาที่แก้ไขรายการ |
| Payment - Mapping Field | WS - Parameter Name | Description | Example | Mandatory |
| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).fin_reference_no | referenceNumber | Reference Number ของ EDW | EGP25680402003 | M |
| Data Config = 'PAYMENT_DATE' | action | เหตุการณ์ที่ต้องการ Update | PAYMENT_DATE | M |
| Data Config = 'A' | value | ค่าของข้อมูลที่ Update ที่ไม่ใช่วันที่ | A | M |
| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_date | dateValue | ค่าของข้อมูลที่ Update ที่เป็นวันที่ | '2025-01-01' | M |

---

## Hyperlinks บนหน้านี้

- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560833)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [err_py_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560833)
- [FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560833)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [WS สำหรับ Update Dashboard](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176545)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1282245377/image2025-9-8%2016%3A33%3A24.png?version=1&modificationDate=1757324007787&api=v2
