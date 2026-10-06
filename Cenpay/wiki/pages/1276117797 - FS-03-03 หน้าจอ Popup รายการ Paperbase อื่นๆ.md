# FS-03-03 หน้าจอ Popup รายการ Paperbase อื่นๆ

- **Page ID:** 1276117797
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117797
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-03 Paperbase Payment - Maker > FS-03-03 หน้าจอ Popup รายการ Paperbase อื่นๆ
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797121320 {padding: 0px;} div.rbtoc1784797121320 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797121320 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-หน้าจอหลัก)
- [Screen Overview](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-ตารางคำอธิบาย)
  - [Field](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-Field)
  - [Mapping](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-Mapping)
  - [Field](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-Field.1)
  - [Mapping](#FS-03-03หน้าจอPopupรายการPaperbaseอื่นๆ-Mapping.1)

# หน้าจอหลัก

Mode Edit
![img](/download/attachments/1271529528/image2025-10-7%2015%3A10%3A56.png?version=1&modificationDate=1759824657283&api=v2)
Mode View
![img](/download/attachments/1271529528/image2025-10-7%2015%3A11%3A22.png?version=1&modificationDate=1759824683104&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลรายการ Paperbase อื่นๆ
- เพื่อให้ผู้ใช้งานสามารถยกเลิก Paperbase อื่นๆ และระบุเหตุผลการยกเลิก
- เพื่อให้ผู้ใช้งานสามารถดูประวัติสถานะ
- เพื่อให้ผู้ใช้งานสามารถบันทึกจ่าย Paperbase อื่นๆ

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ผู้ใช้งานจะต้องกดปุ่ม แก้ไข ที่หน้าจอหลัก
  - รายการ Batch ที่เลือกจะต้องมีช่องทางการจ่ายเป็น อื่นๆ และสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่
  - รายการ Paperbase อื่นๆ จะมีสถานะเป็น รอบันทึกจ่าย

### การกระทำกับหน้าจอ (Actions)

- เลือกรายการบันทึกจ่าย
- ยกเลิกรายการ Paperbase
- ดูประวัติสถานะ
- ปิดหน้าจอรายการ Paperbase อื่นๆ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ระบบสามารถแสดงข้อมูลรายการ Paperbase อื่นๆ ภายใต้ Batch การเงินได้อย่างถูกต้อง
  - เมื่อกดปุ่มยกเลิก ระบบจะเปิดหน้าจอยกเลิกเช็ค เพื่อให้ระบุสาเหตุการยกเลิกเช็ค
  - เมื่อกดปุ่มประวัติสถานะ ระบบจะเปิดหน้าจอประวัติสถานะที่มีการเปลี่ยนแปลง
  - เมื่อเลือกรายการและกดปุ่มบันทึกจ่าย ระบบจะปรับสถานะรายการที่เลือกเป็น บันทึกจ่าย กรณีสถานะเป็นบันทึกจ่ายหรือยกเลิกครบทุกรายการ ระบบจะส่งข้อมูลไปยังหน้าจอ [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ หรือสถานะเช็ค ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และกลับสู่หน้าจอหลัก
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| **ส่วนแสดงข้อมูล Batch**1 การเรียงลำดับข้อมูลเรียงลำดับจากชื่อผู้รับเงินจากน้อยไปมาก 2 Sort Columnสถานะ 3 Concurrent Userกรณีมีการเลือกดำเนินการบันทึกจ่ายยกเลิกให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง 4 Font Colorกรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column 5 Row Colorกรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง NoComponent TypeComponent NameAction / Data ValueExampleRemark1LabelBatch Numberแสดงข้อมูล Batch Number ฝ่ายการเงินที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)P25680701001 2LabelRequest Payment Dateแสดงข้อมูล Request Payment Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)01/07/2568 3Labelช่องทางการจ่ายเงินแสดงข้อมูลช่องทางการจ่ายเงิน ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูลช่องทางการจ่ายเงิน ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล ช่องทางการจ่ายเงินโอนเงินไปต่างประเทศ 4LabelPaid Dateแสดงข้อมูล Paid Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)05/07/2568 5LabelServiceแสดงข้อมูล Service ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูล Service ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Serviceโอนเงินไปต่างประเทศ 6LabelBank Accountแสดงข้อมูล Bank Account ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดง Bank Account ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank AccountKBANK 718-1-01369-3 7Buttonบันทึกจ่ายเงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขแสดงมีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน ยืนยันบันทึกจ่ายเมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะเปลี่ยนสถานะของรายการที่เลือกเป็นบันทึกจ่าย เคลียร์ Checkbox และ Refresh หน้าจอตรวจสอบสถานะของเช็คทุกรายการภายใต้ Batch กรณีเป็นบันทึกจ่าย หรือ ถูกต้อง หรือ ยกเลิก ทุกรายการ ให้บันทึกสถานะดำเนินการของ Batch เป็น บันทึกสำเร็จ ส่วนแสดงข้อมูลรายการเช็คNoComponent TypeComponent NameAction / Data ValueExampleRemark1Check Box เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไข 2Buttonยกเลิกการจ่ายเงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-005_01 หน้าจอ Popup ยกเลิกเช็ค/Paperbase อื่นๆ](/pages/viewpage.action?pageId=1271529539) 3Labelชื่อ-สกุลผู้รับเงินแสดงคำนำหน้า ชื่อ สกุล ของผู้รับเงินนายไทยสมุทร ประกันชีวิต 4Labelจำนวนเงินแสดงจำนวนเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก15,000.00 5Labelสถานะแสดงสถานะตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล สถานะดำเนินการระดับ Transaction 6Labelเหตุผลการแก้ไข/การส่งกลับ/ยกเลิกแสดงข้อมูลเหตุผลการแก้ไข/การส่งกลับ/ยกเลิก ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล เหตุผลการแก้ไข/การส่งกลับ/ยกเลิกกรณีไม่มีข้อมูลให้แสดง - 7ButtonประวัติสถานะEnable : เสมอเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](/pages/viewpage.action?pageId=1269858892) **ส่วนแสดงปุ่ม**NoComponent TypeComponent NameAction / Data ValueExampleRemark1ButtonปิดEnable : เสมอเมื่อกดปุ่มระบบจะปิดหน้าจอ Popup และกลับสู่หน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) | tablecondition[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id = @id[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service <> 'CHE_COM'[tx_payment_detail](/display/RDSCPENH/tx_payment_detail)[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_id = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in @statusStatus TransactionDescriptionRemarkWAPรอจ่าย APPบันทึกจ่าย CANยกเลิก CORถูกต้อง WEFรอการแก้ไข PAIจ่ายเงินสำเร็จ FAIจ่ายไม่สำเร็จ BAPธนาคารกำลังโอนเงินCPENH Ph1 rm#XXX Edited by jitin.kh 02/04/2569Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksBatch NumberLabelOn Initialแสดง Batch Number ที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no ช่องทางการจ่ายเงินLabelOn Initialแสดงช่องทางการจ่ายเงินที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channel ServiceLabelOn Initialแสดง Service ตาม Configuration Data ที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_code Request Date PaymentLabelOn Initialแสดง Request Date Payment ที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_date Paid DateLabelOn Initialแสดง Paid Date ที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_date Bank AccountLabelOn Initialแสดง Bank Account ที่เลือกจากหน้าจอหลัก[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code บันทึกจ่ายButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableกรณีมีการเลือก Checkbox Disableกรณีไม่มีการเลือก Checkbox On ClickValidation: กรณีสถานะดำเนินการไม่ใช่ รอจ่าย หรือ รอการแก้ไข จะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : wrn_py_012 : กรุณาเลือกรายการที่สถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไขAction: หากสถานะถูกต้อง จะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : con_com_002 ("ยืนยันการบันทึกข้อมูลหรือไม่")เมื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้ตรวจสอบสถานะที่ทำรายการ กรณีพบข้อมูลสถานะ Temp ของรายการที่เลือกเปลี่ยนสถานะบนหน้าจอ ไม่ตรงกับ Database" ระบบจะดำเนินการแสดง Popup แจ้งเตือนตามเงื่อนไข เมื่อกดปิด Popup ระบบจะทำการ Refresh หน้าจอและแสดงข้อมูลด้วยเงื่อนไขการค้นหาเดิมหากมีการเลือก Checkbox ทั้งหมดในตาราง ระบบจะปรับสถานะดำเนินการของ Batch เป็น บันทึกสำเร็จบันทึกข้อมูลที่ระบุในฐานข้อมูลกลับสู่หน้าจอ [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1276117791) โดยคงเงื่อนไขการค้นหาเดิมตรวจสอบสถานะ เงื่อนไขดังนี้ สถานะ Temp ของรายการที่เลือกเปลี่ยนสถานะบนหน้าจอ ไม่ตรงกับ Database ในตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).statusกรณีสถานะไม่ตรงกับ Database ระบบจะดำเนินการแสดง Popup แจ้งเตือน [err_py_003](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) : เนื่องจากสถานะบางรายการถูกเปลี่ยนแปลง กรุณาตรวจสอบข้อมูลและทำรายการใหม่อีกครั้งกรณีสถานะตรงกับ Database ให้ดำเนินการต่อในขั้นตอนต่อไป อัปเดตข้อมูลในตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และ [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เงื่อนไขดังนี้NOTE :: เมื่อบันทึก/อัปเดตข้อมูลในตารางนี้ ต้องบันทึก Transection ใหม่ในตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เสมอFieldMappingId@Id ที่ทำรายการstatus[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)*updated_dateUsername ผู้แก้ไขรายการupdated_byวันและเวลาที่แก้ไขรายการบันทึกข้อมูลในตาราง [tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) เงื่อนไขดังนี้[tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) FieldMappingIdid ของ Record auto generatepayment_detail_id[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).idstatus[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)*print_cheque_round*null*cheque_no*null*cheque_version*null*cheque_reason*null*batch_payment_id[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).idcreated_dateวันและเวลาที่แก้ไขรายการcreated_byUsername ผู้แก้ไขรายการupdated_dateวันและเวลาที่แก้ไขรายการupdated_byUsername ผู้แก้ไขรายการ ตรวจสอบข้อมูลสถานะของทุกรายการภายใต้ batch_payment_no ที่ทำรายการช่องทางการจ่ายเงิน : เช็คบริษัทกรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้จบการทำงานกรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูลช่องทางการจ่ายเงิน : อื่นๆกรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้จบการทำงานกรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูลอัปเดตข้อมูลในตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) และ [lg_batch_status](/display/RDSCPENH/lg_batch_status) เงื่อนไขดังนี้[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingId@Id ที่ทำรายการbatch_status[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'CHC' where parent_id = '12000' *(บักทึกสำเร็จ)*updated_dateUsername ผู้แก้ไขรายการupdated_byวันและเวลาที่แก้ไขรายการ Check BoxCheck BoxOn Initialอ้างอิงตามเงื่อนไข Visible และ Invisible Visibleแสดงปุ่ม เมื่อสถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) Invisibleซ่อนปุ่ม เมื่อสถานะดำเนินการไม่เป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) ยกเลิกการจ่ายButtonOn Initialอ้างอิงตามเงื่อนไข Visible และ Invisible Visibleแสดงปุ่ม เมื่อสถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) Invisibleซ่อนปุ่ม เมื่อสถานะดำเนินการไม่เป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) On Clickเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-03-05 หน้าจอ Popup ยกเลิกเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117802) ชื่อ-สกุลผู้รับเงินLabelOn Initialแสดงชื่อ-สกุลของผู้รับเงิน[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payee_short_title + payee_first_name + payee_last_name จำนวนเงินLabelOn InitialแสดงจำนวนเงินFormat: จำนวนเงิน ทศนิยม 2 ตำแหน่ง[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).amount สถานะLabelOn Initialแสดงสถานะตาม Configuration Data ข้อมูลสถานะดำเนินการระดับ Transaction[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).status เหตุผลการแก้ไข/การส่งกลับ/ยกเลิกLabelOn Initialแสดงเหตุผลการแก้ไข, การส่งกลับ, การยกเลิก หากมีข้อมูล[tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status).cheque_reason (select max(Id) from [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status) where payment_detail_id = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).id and batch_payment_id = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id) ประวัติสถานะButtonOn Clickเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-03-07 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117808) ปิดButtonOn Clickปิดหน้าจอ และกลับสู่ [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1276117791) โดยคงเงื่อนไขการค้นหาเดิม |
| **ส่วนแสดงข้อมูล Batch** |
| 1 |   | การเรียงลำดับข้อมูล | เรียงลำดับจากชื่อผู้รับเงินจากน้อยไปมาก |   |   |
| 2 |   | Sort Column | สถานะ |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการบันทึกจ่ายยกเลิกให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| 4 |   | Font Color | กรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column |   |   |
| 5 |   | Row Color | กรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number | แสดงข้อมูล Batch Number ฝ่ายการเงินที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) | P25680701001 |   |
| 2 | Label | Request Payment Date | แสดงข้อมูล Request Payment Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 01/07/2568 |   |
| 3 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงิน ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูลช่องทางการจ่ายเงิน ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล ช่องทางการจ่ายเงิน | โอนเงินไปต่างประเทศ |   |
| 4 | Label | Paid Date | แสดงข้อมูล Paid Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 05/07/2568 |   |
| 5 | Label | Service | แสดงข้อมูล Service ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูล Service ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service | โอนเงินไปต่างประเทศ |   |
| 6 | Label | Bank Account | แสดงข้อมูล Bank Account ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดง Bank Account ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account | KBANK 718-1-01369-3 |   |
| 7 | Button | บันทึกจ่าย | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขแสดงมีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน ยืนยันบันทึกจ่ายเมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะเปลี่ยนสถานะของรายการที่เลือกเป็นบันทึกจ่าย เคลียร์ Checkbox และ Refresh หน้าจอตรวจสอบสถานะของเช็คทุกรายการภายใต้ Batch กรณีเป็นบันทึกจ่าย หรือ ถูกต้อง หรือ ยกเลิก ทุกรายการ ให้บันทึกสถานะดำเนินการของ Batch เป็น บันทึกสำเร็จ |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไข |
| ส่วนแสดงข้อมูลรายการเช็ค |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Check Box |   | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไข |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | รอจ่าย หรือ รอการแก้ไข |
| 2 | Button | ยกเลิกการจ่าย | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-005_01 หน้าจอ Popup ยกเลิกเช็ค/Paperbase อื่นๆ](/pages/viewpage.action?pageId=1271529539) |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | รอจ่าย หรือ รอการแก้ไข |
| 3 | Label | ชื่อ-สกุลผู้รับเงิน | แสดงคำนำหน้า ชื่อ สกุล ของผู้รับเงิน | นายไทยสมุทร ประกันชีวิต |   |
| 4 | Label | จำนวนเงิน | แสดงจำนวนเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 15,000.00 |   |
| 5 | Label | สถานะ | แสดงสถานะตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล สถานะดำเนินการระดับ Transaction |   |   |
| 6 | Label | เหตุผลการแก้ไข/การส่งกลับ/ยกเลิก | แสดงข้อมูลเหตุผลการแก้ไข/การส่งกลับ/ยกเลิก ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล เหตุผลการแก้ไข/การส่งกลับ/ยกเลิกกรณีไม่มีข้อมูลให้แสดง - |   |   |
| 7 | Button | ประวัติสถานะ | Enable : เสมอเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](/pages/viewpage.action?pageId=1269858892) |   |   |
| **ส่วนแสดงปุ่ม** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ปิด | Enable : เสมอเมื่อกดปุ่มระบบจะปิดหน้าจอ Popup และกลับสู่หน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) |   |   |
| table | condition |
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id = @id[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service <> 'CHE_COM' |
| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_id = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).status in @statusStatus TransactionDescriptionRemarkWAPรอจ่าย APPบันทึกจ่าย CANยกเลิก CORถูกต้อง WEFรอการแก้ไข PAIจ่ายเงินสำเร็จ FAIจ่ายไม่สำเร็จ BAPธนาคารกำลังโอนเงินCPENH Ph1 rm#XXX Edited by jitin.kh 02/04/2569 |
| Status Transaction | Description | Remark |
| WAP | รอจ่าย |   |
| APP | บันทึกจ่าย |   |
| CAN | ยกเลิก |   |
| COR | ถูกต้อง |   |
| WEF | รอการแก้ไข |   |
| PAI | จ่ายเงินสำเร็จ |   |
| FAI | จ่ายไม่สำเร็จ |   |
| BAP | ธนาคารกำลังโอนเงิน | CPENH Ph1 rm#XXX Edited by jitin.kh 02/04/2569 |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Batch Number | Label | On Initial | แสดง Batch Number ที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |   |
| ช่องทางการจ่ายเงิน | Label | On Initial | แสดงช่องทางการจ่ายเงินที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).payment_channel |   |
| Service | Label | On Initial | แสดง Service ตาม Configuration Data ที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).service_code |   |
| Request Date Payment | Label | On Initial | แสดง Request Date Payment ที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).request_payment_date |   |
| Paid Date | Label | On Initial | แสดง Paid Date ที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_date |   |
| Bank Account | Label | On Initial | แสดง Bank Account ที่เลือกจากหน้าจอหลัก | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code |   |
| บันทึกจ่าย | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | กรณีมีการเลือก Checkbox |   |   |
|   |   | Disable | กรณีไม่มีการเลือก Checkbox |   |   |
|   |   | On Click | Validation: กรณีสถานะดำเนินการไม่ใช่ รอจ่าย หรือ รอการแก้ไข จะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : wrn_py_012 : กรุณาเลือกรายการที่สถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไขAction: หากสถานะถูกต้อง จะแสดง Popup ข้อความแจ้งเตือน [01. Error Message](/display/RDSCPENH/01.+Error+Message) : con_com_002 ("ยืนยันการบันทึกข้อมูลหรือไม่")เมื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้ตรวจสอบสถานะที่ทำรายการ กรณีพบข้อมูลสถานะ Temp ของรายการที่เลือกเปลี่ยนสถานะบนหน้าจอ ไม่ตรงกับ Database" ระบบจะดำเนินการแสดง Popup แจ้งเตือนตามเงื่อนไข เมื่อกดปิด Popup ระบบจะทำการ Refresh หน้าจอและแสดงข้อมูลด้วยเงื่อนไขการค้นหาเดิมหากมีการเลือก Checkbox ทั้งหมดในตาราง ระบบจะปรับสถานะดำเนินการของ Batch เป็น บันทึกสำเร็จบันทึกข้อมูลที่ระบุในฐานข้อมูลกลับสู่หน้าจอ [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1276117791) โดยคงเงื่อนไขการค้นหาเดิม | ตรวจสอบสถานะ เงื่อนไขดังนี้ สถานะ Temp ของรายการที่เลือกเปลี่ยนสถานะบนหน้าจอ ไม่ตรงกับ Database ในตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).statusกรณีสถานะไม่ตรงกับ Database ระบบจะดำเนินการแสดง Popup แจ้งเตือน [err_py_003](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) : เนื่องจากสถานะบางรายการถูกเปลี่ยนแปลง กรุณาตรวจสอบข้อมูลและทำรายการใหม่อีกครั้งกรณีสถานะตรงกับ Database ให้ดำเนินการต่อในขั้นตอนต่อไป อัปเดตข้อมูลในตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และ [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เงื่อนไขดังนี้NOTE :: เมื่อบันทึก/อัปเดตข้อมูลในตารางนี้ ต้องบันทึก Transection ใหม่ในตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เสมอFieldMappingId@Id ที่ทำรายการstatus[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)*updated_dateUsername ผู้แก้ไขรายการupdated_byวันและเวลาที่แก้ไขรายการบันทึกข้อมูลในตาราง [tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) เงื่อนไขดังนี้[tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) FieldMappingIdid ของ Record auto generatepayment_detail_id[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).idstatus[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)*print_cheque_round*null*cheque_no*null*cheque_version*null*cheque_reason*null*batch_payment_id[tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).idcreated_dateวันและเวลาที่แก้ไขรายการcreated_byUsername ผู้แก้ไขรายการupdated_dateวันและเวลาที่แก้ไขรายการupdated_byUsername ผู้แก้ไขรายการ ตรวจสอบข้อมูลสถานะของทุกรายการภายใต้ batch_payment_no ที่ทำรายการช่องทางการจ่ายเงิน : เช็คบริษัทกรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้จบการทำงานกรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูลช่องทางการจ่ายเงิน : อื่นๆกรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้จบการทำงานกรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูลอัปเดตข้อมูลในตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) และ [lg_batch_status](/display/RDSCPENH/lg_batch_status) เงื่อนไขดังนี้[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingId@Id ที่ทำรายการbatch_status[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'CHC' where parent_id = '12000' *(บักทึกสำเร็จ)*updated_dateUsername ผู้แก้ไขรายการupdated_byวันและเวลาที่แก้ไขรายการ |   |
| NOTE :: เมื่อบันทึก/อัปเดตข้อมูลในตารางนี้ ต้องบันทึก Transection ใหม่ในตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เสมอ |
| Field | Mapping |
| Id | @Id ที่ทำรายการ |
| status | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)* |
| updated_date | Username ผู้แก้ไขรายการ |
| updated_by | วันและเวลาที่แก้ไขรายการ |
| [tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) |
| Field | Mapping |
| Id | id ของ Record auto generate |
| payment_detail_id | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).id |
| status | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'APP' where parent_id = '11000' *(บักทึกจ่าย)* |
| print_cheque_round | *null* |
| cheque_no | *null* |
| cheque_version | *null* |
| cheque_reason | *null* |
| batch_payment_id | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id |
| created_date | วันและเวลาที่แก้ไขรายการ |
| created_by | Username ผู้แก้ไขรายการ |
| updated_date | วันและเวลาที่แก้ไขรายการ |
| updated_by | Username ผู้แก้ไขรายการ |
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) |
| Field | Mapping |
| Id | @Id ที่ทำรายการ |
| batch_status | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'CHC' where parent_id = '12000' *(บักทึกสำเร็จ)* |
| updated_date | Username ผู้แก้ไขรายการ |
| updated_by | วันและเวลาที่แก้ไขรายการ |
| Check Box | Check Box | On Initial | อ้างอิงตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | แสดงปุ่ม เมื่อสถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) |   |   |
|   |   | Invisible | ซ่อนปุ่ม เมื่อสถานะดำเนินการไม่เป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) |   |   |
| ยกเลิกการจ่าย | Button | On Initial | อ้างอิงตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | แสดงปุ่ม เมื่อสถานะดำเนินการเป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) |   |   |
|   |   | Invisible | ซ่อนปุ่ม เมื่อสถานะดำเนินการไม่เป็น รอจ่าย หรือ รอการแก้ไข หรือ ถูกต้อง (updated by patcha.vo [issues/60449](https://redmine.ochi.link/issues/60449)) |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-03-05 หน้าจอ Popup ยกเลิกเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117802) |   |   |
| ชื่อ-สกุลผู้รับเงิน | Label | On Initial | แสดงชื่อ-สกุลของผู้รับเงิน | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payee_short_title + payee_first_name + payee_last_name |   |
| จำนวนเงิน | Label | On Initial | แสดงจำนวนเงินFormat: จำนวนเงิน ทศนิยม 2 ตำแหน่ง | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).amount |   |
| สถานะ | Label | On Initial | แสดงสถานะตาม Configuration Data ข้อมูลสถานะดำเนินการระดับ Transaction | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).status |   |
| เหตุผลการแก้ไข/การส่งกลับ/ยกเลิก | Label | On Initial | แสดงเหตุผลการแก้ไข, การส่งกลับ, การยกเลิก หากมีข้อมูล | [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status).cheque_reason (select max(Id) from [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status) where payment_detail_id = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).id and batch_payment_id = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id) |   |
| ประวัติสถานะ | Button | On Click | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [FS-03-07 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117808) |   |   |
| ปิด | Button | On Click | ปิดหน้าจอ และกลับสู่ [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1276117791) โดยคงเงื่อนไขการค้นหาเดิม |   |   |

---

## Hyperlinks บนหน้านี้

- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-005_01 หน้าจอ Popup ยกเลิกเช็ค/Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271529539)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858892)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117791)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [err_py_003](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status)
- [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [issues/60449](https://redmine.ochi.link/issues/60449)
- [issues/60449](https://redmine.ochi.link/issues/60449)
- [issues/60449](https://redmine.ochi.link/issues/60449)
- [issues/60449](https://redmine.ochi.link/issues/60449)
- [FS-03-05 หน้าจอ Popup ยกเลิกเช็ค](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117802)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status)
- [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [FS-03-07 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117808)
- [FS-03-01 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117791)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1271529528/image2025-10-7%2015%3A10%3A56.png?version=1&modificationDate=1759824657283&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1271529528/image2025-10-7%2015%3A11%3A22.png?version=1&modificationDate=1759824683104&api=v2
