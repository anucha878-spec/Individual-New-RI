# FS-01-03 หน้าจอ Popup Split Batch Operation

- **Page ID:** 1276117772
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117772
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-01 รับรายการ > FS-01-03 หน้าจอ Popup Split Batch Operation
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797118658 {padding: 0px;} div.rbtoc1784797118658 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797118658 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-01-03หน้าจอPopupSplitBatchOperation-หน้าจอหลัก)
- [Screen Overview](#FS-01-03หน้าจอPopupSplitBatchOperation-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-01-03หน้าจอPopupSplitBatchOperation-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-01-03หน้าจอPopupSplitBatchOperation-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-01-03หน้าจอPopupSplitBatchOperation-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-01-03หน้าจอPopupSplitBatchOperation-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-01-03หน้าจอPopupSplitBatchOperation-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-01-03หน้าจอPopupSplitBatchOperation-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-01-03หน้าจอPopupSplitBatchOperation-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1267335451/image2025-8-6%2016%3A54%3A8.png?version=1&modificationDate=1754474049447&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อแยกรายการธุรกรรมตามธนาคารปลายทาง ก่อนการเลือกวิธีการจ่าย และ Service การทำจ่าย
- เพื่อให้ผู้ใช้งานสามารถดูข้อมูลสรุปรายการที่เลือกแยก Batch ฝ่ายปฎิบัติการ

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ผู้ใช้งานจะต้องกดปุ่ม Split Batch ที่หน้าจอหลัก
  - รายการที่จะสามารถ Split Batch ได้จะต้องมีสถานะดำเนินการเป็น รอยืนยัน
  - ระบบจะตรวจสอบธนาคารปลายทางทั้งหมดภายใต้ Batch และแสดงจำนวนรายการ และจำนวนเงินแยกตามธนาคารปลายทาง

### การกระทำกับหน้าจอ (Actions)

- ยกเลิก Split Batch
- ยืนยัน Split Batch

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - กรณียกเลิก ระบบจะล้างข้อมูลที่กรอกในหน้าจอนี้ทั้งหมด และกลับไปยังหน้าจอหลัก
  - กรณีบันทึก ระบบจะสร้างรายการ Batch ปฎิบัติการย่อยแยกตามธนาคารปลายทางที่เลือก
    - ระบบจะปรับสถานะดำเนินการของ Batch เดิมเป็น **Split Batch**
    - ระบบจะสร้างรายการ Batch Split ที่มีเลขลำดับและจำนวนทั้งหมดต่อท้าย Batch Number ปฎิบัติการเดิม และสถานะดำเนินการเป็น **รอยืนยัน**

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณียกเลิก ระบบจะแสดง Popup ข้อความแจ้งเตือน "ยกเลิกการ Split Batch"
  - กรณีบันทึก ระบบจะแสดง Popup ข้อความแจ้งเตือน "ยืนยันการ Split Batch"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| **ส่วนแสดงข้อมูล Split Batch**NoComponent TypeComponent NameAction / Data ValueExampleRemark การเรียงลำดับข้อมูลเรียงตามจำนวนรายการ Transaction จากมากไปน้อย 1Check Box ค่าเริ่มต้นเป็น Uncheck 2Labelธนาคารปลายทางที่ต้องการแยกแสดงข้อมูล ธนาคารปลายทางที่ต้องการแยก ที่มีอยู่ใน Batch ฝ่ายปฎิบัติการ3 3Labelจำนวนรายการแสดงข้อมูล จำนวนรายการ ที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฎิบัติการ30 4Labelจำนวนเงินแสดงข้อมูล จำนวนเงิน ที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฎิบัติการแสดงรูปแบบ จำนวนเงินรวม : x บาท150,000.00 **ส่วนแสดงข้อมูลรวมรายการ**NoComponent TypeComponent NameAction / Data ValueExampleRemark1Labelจำนวนรายการรวมแสดงข้อมูล จำนวนรายการ ภายใต้ Batch Number ฝ่ายปฎิบัติการ ที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคาร30 2Labelจำนวนเงินรวมแสดงข้อมูล จำนวนเงิน ภายใต้ Batch Number ฝ่ายปฎิบัติการ ที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคารแสดงรูปแบบ จำนวนเงินรวม : x บาท150,000.00 **ส่วนแสดงปุ่ม**NoComponent TypeComponent NameAction / Data ValueExampleRemark1ButtonยกเลิกEnable : เสมอกรณีมีรายการ Split Batch แล้ว ให้แสดงแจ้งเตือน "ยกเลิกการ Split Batch"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลงให้กลับสู่หน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400) โดยล้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้ 2Buttonบันทึกเงื่อนไขปุ่มตรวจสอบDisableกรณีไม่มีการเลือก CheckboxEnableกรณีมีการเลือก Checkboxให้แสดงแจ้งเตือน "ยืนยันการ Split Batch"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลงให้สร้างรายการ Batch ฝ่ายปฎิบัติการย่อย แยกตามธนาคารปลายทางที่ต้องการแยกโดยรายการ Batch เดิมให้สถานะดำเนินการเป็น Split Batchสร้างรายการ Batch ใหม่ให้สถานะดำเนินการเป็น รอยืนยันกรณีรายการที่เลือกธนาคารปลายทาง Batch ที่สร้างใหม่แสดงชื่อธนาคารต่อท้ายชื่อรายการธุรกรรมเดิมตัวอย่างเช่น เงินจ่ายคืนทันที_BBLกรณีรายการที่ไม่ได้เลือกธนาคารปลายทางจะรวมเป็น Batch Otherตัวอย่างเช่น เงินจ่ายคืนทันที_Otherสร้างเลขที่ Batch ปฎิบัติการใหม่โดยแสดงเลขที่ และจำนวน Batch ที่ Split ทั้งหมดต่อท้ายเลขที่ Batch ปฎิบัติการเดิมตัวอย่างเช่น Batch ปฎิบัติการเดิม PY-TP-CLN-20250701-00001Batch ปฎิบัติการใหม่ ที่สามารถ Split ได้ทั้งหมด 3 Batch จะเป็น PY-TP-CLN-20250701-00001_1-3และกลับสู่หน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400) โดยล้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้ | **เงื่อนไขการแสดงข้อมูล** ดึงข้อมูลรายการจ่ายภายใต้ Batch ปฎิบัติการ โดยกรุ๊ปข้อมูลตามธนาคารปลายทาง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksCheck BoxCheck BoxOn InitialDefault Value: Uncheckอ้างอิงตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickแสดง Checked หรือ Unchecked ธนาคารปลายทางที่ต้องการแยกLabelOn Initialแสดงข้อมูลธนาคารปลายทางที่มีอยู่ใน Batch ฝ่ายปฏิบัติการ1.ตรวจสอบข้อมูลธนาคารภายใต้ batch [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id 2.แสดงข้อมูลชื่อธนาคารจาก bot_bank_code [01. WS สำหรับดึงข้อมูลธนาคารจาก CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475193)where output.id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id จำนวนรายการLabelOn Initialแสดงข้อมูลจำนวนรายการที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฏิบัติการจำนวนรายการgroup by [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id จำนวนเงินLabelOn Initialแสดงข้อมูลจำนวนเงินที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฏิบัติการFormat: จำนวนเงินรวม : x บาทข้อมูลเรียงตามจำนวนรายการจากมากไปน้อย[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountgroup by [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id จำนวนรายการรวมLabelOn Initialแสดงข้อมูลจำนวนรายการทั้งหมดภายใต้ Batch Number ฝ่ายปฏิบัติการที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคาร[tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).total_transaction จำนวนเงินรวมLabelOn Initialแสดงข้อมูลจำนวนเงินภายใต้ Batch Number ฝ่ายปฏิบัติการที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคารFormat: จำนวนเงินรวม : x บาท[tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).total_amount ยกเลิกButtonOn InitialEnable: เสมอ Enableตลอดเวลา Disable- On ClickAction: ไม่ทำการบันทึกข้อมูลใด ๆPopup: แสดง Popup แจ้งเตือน "ยกเลิกการ Split Batch"เมื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1276117765) โดยล้างรายการ Checkbox ที่เลือกไว้และคงเงื่อนไขการค้นหาเดิมอ้างอิง [01. Error Message](/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Message con_py_003ยกเลิกการ Split Batch บันทึกButtonOn Initialอ้างอิงตามเงื่อนไข Enable และ Disable Enableกรณีมีการเลือก Checkbox Disableกรณีไม่มีการเลือก Checkbox On ClickPopup: แสดง Popup แจ้งเตือน "ยืนยันการ Split Batch"มื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้:1. สร้างรายการ Batch ปฏิบัติการย่อยแยกตามธนาคารปลายทางที่เลือก2. ปรับสถานะดำเนินการของ Batch เดิมเป็น Split Batch3. สร้างรายการ Batch ใหม่ให้สถานะดำเนินการเป็น "รอยืนยัน"4. กลับสู่หน้าจอ [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1276117765) โดยล้างรายการ Checkbox ที่เลือกไว้และคงเงื่อนไขการค้นหาเดิมอ้างอิง [01. Error Message](/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagecon_py_004ยืนยันการ Split Batcherr_py_005ไม่สามารถ Split Batch ได้ เนื่องจากมีธนาคารปลายทางที่ต้องการแยกเพียงธนาคารเดียว1. ตรวจสอบข้อมูลธนาคารภายใต้ batch กรณีธนาคารมีแค่ 1 ธนาคาร ให้แสดงแจ้งเตือน"ไม่สามารถ Split Batch ได้ เนื่องจากมีธนาคารปลายทางที่ต้องการแยกเพียงธนาคารเดียว" - err_py_0052. สร้าง Batch Number ฝ่ายปฎิบัติการ แบบรายการที่ถูก Split Batch**กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-20เลข Batch ปฎิบัติการ-CP-TB-20250904-0000121Underscoreแทน Space_22Sequence numberลำดับรายการที่ Split123Dashขีดคั่น-24Total Split Batchจำนวนรายการทั้งหมดที่ถูก Split Batch2ผลลัพธ์ CP-TB-20250904-00001_1-23. Insert ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) ดังนี้fieldmapping datapayment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).idbatch_oper_no@Batch Number ฝ่ายปฎิบัติการ แบบรายการที่ถูก Split Batchtotal_transactionบันทึก จำนวนรายการ ที่ถูก Split total_amountบันทึก จำนวนเงิน ที่ถูก Splitbatch_statusบันทึก 'PEN' - รอยืนยันcreated_dateบันทึกวันและเวลาปัจจุบันcreated_byบันทึก username ที่ทำรายการsplit_bank_name1.รายการที่ Checkbox จากการเลือกธนาคารให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_abbr_name2. รายการที่ไม่ได้ Checkboxให้บันทึก Other3. Update สถานะ Batch เดิมที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) ดังนี้fieldmapping datastatusบันทึก 'BAS' - Batch Splitupdated_dateบันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ4. Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail)fieldmapping datapayment_header_split_id[tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).idupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ |
| **ส่วนแสดงข้อมูล Split Batch** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
|   |   | การเรียงลำดับข้อมูล | เรียงตามจำนวนรายการ Transaction จากมากไปน้อย |   |   |
| 1 | Check Box |   | ค่าเริ่มต้นเป็น Uncheck |   |   |
| 2 | Label | ธนาคารปลายทางที่ต้องการแยก | แสดงข้อมูล ธนาคารปลายทางที่ต้องการแยก ที่มีอยู่ใน Batch ฝ่ายปฎิบัติการ | 3 |   |
| 3 | Label | จำนวนรายการ | แสดงข้อมูล จำนวนรายการ ที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฎิบัติการ | 30 |   |
| 4 | Label | จำนวนเงิน | แสดงข้อมูล จำนวนเงิน ที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฎิบัติการแสดงรูปแบบ จำนวนเงินรวม : x บาท | 150,000.00 |   |
| **ส่วนแสดงข้อมูลรวมรายการ** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | จำนวนรายการรวม | แสดงข้อมูล จำนวนรายการ ภายใต้ Batch Number ฝ่ายปฎิบัติการ ที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคาร | 30 |   |
| 2 | Label | จำนวนเงินรวม | แสดงข้อมูล จำนวนเงิน ภายใต้ Batch Number ฝ่ายปฎิบัติการ ที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคารแสดงรูปแบบ จำนวนเงินรวม : x บาท | 150,000.00 |   |
| **ส่วนแสดงปุ่ม** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ยกเลิก | Enable : เสมอกรณีมีรายการ Split Batch แล้ว ให้แสดงแจ้งเตือน "ยกเลิกการ Split Batch"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลงให้กลับสู่หน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400) โดยล้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้ |   |   |
| 2 | Button | บันทึก | เงื่อนไขปุ่มตรวจสอบDisableกรณีไม่มีการเลือก CheckboxEnableกรณีมีการเลือก Checkboxให้แสดงแจ้งเตือน "ยืนยันการ Split Batch"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลงให้สร้างรายการ Batch ฝ่ายปฎิบัติการย่อย แยกตามธนาคารปลายทางที่ต้องการแยกโดยรายการ Batch เดิมให้สถานะดำเนินการเป็น Split Batchสร้างรายการ Batch ใหม่ให้สถานะดำเนินการเป็น รอยืนยันกรณีรายการที่เลือกธนาคารปลายทาง Batch ที่สร้างใหม่แสดงชื่อธนาคารต่อท้ายชื่อรายการธุรกรรมเดิมตัวอย่างเช่น เงินจ่ายคืนทันที_BBLกรณีรายการที่ไม่ได้เลือกธนาคารปลายทางจะรวมเป็น Batch Otherตัวอย่างเช่น เงินจ่ายคืนทันที_Otherสร้างเลขที่ Batch ปฎิบัติการใหม่โดยแสดงเลขที่ และจำนวน Batch ที่ Split ทั้งหมดต่อท้ายเลขที่ Batch ปฎิบัติการเดิมตัวอย่างเช่น Batch ปฎิบัติการเดิม PY-TP-CLN-20250701-00001Batch ปฎิบัติการใหม่ ที่สามารถ Split ได้ทั้งหมด 3 Batch จะเป็น PY-TP-CLN-20250701-00001_1-3และกลับสู่หน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400) โดยล้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้ |   |   |
| เงื่อนไขปุ่ม | ตรวจสอบ |
| Disable | กรณีไม่มีการเลือก Checkbox |
| Enable | กรณีมีการเลือก Checkboxให้แสดงแจ้งเตือน "ยืนยันการ Split Batch"เมื่อกดยกเลิกให้แสดงหน้าจอเดิมเมื่อกดตกลงให้สร้างรายการ Batch ฝ่ายปฎิบัติการย่อย แยกตามธนาคารปลายทางที่ต้องการแยกโดยรายการ Batch เดิมให้สถานะดำเนินการเป็น Split Batchสร้างรายการ Batch ใหม่ให้สถานะดำเนินการเป็น รอยืนยันกรณีรายการที่เลือกธนาคารปลายทาง Batch ที่สร้างใหม่แสดงชื่อธนาคารต่อท้ายชื่อรายการธุรกรรมเดิมตัวอย่างเช่น เงินจ่ายคืนทันที_BBLกรณีรายการที่ไม่ได้เลือกธนาคารปลายทางจะรวมเป็น Batch Otherตัวอย่างเช่น เงินจ่ายคืนทันที_Otherสร้างเลขที่ Batch ปฎิบัติการใหม่โดยแสดงเลขที่ และจำนวน Batch ที่ Split ทั้งหมดต่อท้ายเลขที่ Batch ปฎิบัติการเดิมตัวอย่างเช่น Batch ปฎิบัติการเดิม PY-TP-CLN-20250701-00001Batch ปฎิบัติการใหม่ ที่สามารถ Split ได้ทั้งหมด 3 Batch จะเป็น PY-TP-CLN-20250701-00001_1-3และกลับสู่หน้าจอ [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400) โดยล้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้ |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Check Box | Check Box | On Initial | Default Value: Uncheckอ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | แสดง Checked หรือ Unchecked |   |   |
| ธนาคารปลายทางที่ต้องการแยก | Label | On Initial | แสดงข้อมูลธนาคารปลายทางที่มีอยู่ใน Batch ฝ่ายปฏิบัติการ | 1.ตรวจสอบข้อมูลธนาคารภายใต้ batch [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id 2.แสดงข้อมูลชื่อธนาคารจาก bot_bank_code [01. WS สำหรับดึงข้อมูลธนาคารจาก CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475193)where output.id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id |   |
| จำนวนรายการ | Label | On Initial | แสดงข้อมูลจำนวนรายการที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฏิบัติการ | จำนวนรายการgroup by [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id |   |
| จำนวนเงิน | Label | On Initial | แสดงข้อมูลจำนวนเงินที่แยกตามธนาคารปลายทางจาก Batch ฝ่ายปฏิบัติการFormat: จำนวนเงินรวม : x บาทข้อมูลเรียงตามจำนวนรายการจากมากไปน้อย | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amountgroup by [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_id |   |
| จำนวนรายการรวม | Label | On Initial | แสดงข้อมูลจำนวนรายการทั้งหมดภายใต้ Batch Number ฝ่ายปฏิบัติการที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคาร | [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).total_transaction |   |
| จำนวนเงินรวม | Label | On Initial | แสดงข้อมูลจำนวนเงินภายใต้ Batch Number ฝ่ายปฏิบัติการที่ถูกแยกรายการตามธนาคารปลายทางของทุกธนาคารFormat: จำนวนเงินรวม : x บาท | [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).total_amount |   |
| ยกเลิก | Button | On Initial | Enable: เสมอ |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | Action: ไม่ทำการบันทึกข้อมูลใด ๆPopup: แสดง Popup แจ้งเตือน "ยกเลิกการ Split Batch"เมื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้กลับสู่หน้าจอ [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1276117765) โดยล้างรายการ Checkbox ที่เลือกไว้และคงเงื่อนไขการค้นหาเดิม | อ้างอิง [01. Error Message](/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Message con_py_003ยกเลิกการ Split Batch |   |
| Alert Code | Alert Message |
| con_py_003 | ยกเลิกการ Split Batch |
| บันทึก | Button | On Initial | อ้างอิงตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | กรณีมีการเลือก Checkbox |   |   |
|   |   | Disable | กรณีไม่มีการเลือก Checkbox |   |   |
|   |   | On Click | Popup: แสดง Popup แจ้งเตือน "ยืนยันการ Split Batch"มื่อกดยกเลิกใน Popup ให้แสดงหน้าจอเดิมเมื่อกดตกลงใน Popup ให้ดำเนินการดังนี้:1. สร้างรายการ Batch ปฏิบัติการย่อยแยกตามธนาคารปลายทางที่เลือก2. ปรับสถานะดำเนินการของ Batch เดิมเป็น Split Batch3. สร้างรายการ Batch ใหม่ให้สถานะดำเนินการเป็น "รอยืนยัน"4. กลับสู่หน้าจอ [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1276117765) โดยล้างรายการ Checkbox ที่เลือกไว้และคงเงื่อนไขการค้นหาเดิม | อ้างอิง [01. Error Message](/display/RDSCPENH/01.+Error+Message)Alert CodeAlert Messagecon_py_004ยืนยันการ Split Batcherr_py_005ไม่สามารถ Split Batch ได้ เนื่องจากมีธนาคารปลายทางที่ต้องการแยกเพียงธนาคารเดียว1. ตรวจสอบข้อมูลธนาคารภายใต้ batch กรณีธนาคารมีแค่ 1 ธนาคาร ให้แสดงแจ้งเตือน"ไม่สามารถ Split Batch ได้ เนื่องจากมีธนาคารปลายทางที่ต้องการแยกเพียงธนาคารเดียว" - err_py_0052. สร้าง Batch Number ฝ่ายปฎิบัติการ แบบรายการที่ถูก Split Batch**กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-20เลข Batch ปฎิบัติการ-CP-TB-20250904-0000121Underscoreแทน Space_22Sequence numberลำดับรายการที่ Split123Dashขีดคั่น-24Total Split Batchจำนวนรายการทั้งหมดที่ถูก Split Batch2ผลลัพธ์ CP-TB-20250904-00001_1-23. Insert ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) ดังนี้fieldmapping datapayment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).idbatch_oper_no@Batch Number ฝ่ายปฎิบัติการ แบบรายการที่ถูก Split Batchtotal_transactionบันทึก จำนวนรายการ ที่ถูก Split total_amountบันทึก จำนวนเงิน ที่ถูก Splitbatch_statusบันทึก 'PEN' - รอยืนยันcreated_dateบันทึกวันและเวลาปัจจุบันcreated_byบันทึก username ที่ทำรายการsplit_bank_name1.รายการที่ Checkbox จากการเลือกธนาคารให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_abbr_name2. รายการที่ไม่ได้ Checkboxให้บันทึก Other3. Update สถานะ Batch เดิมที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) ดังนี้fieldmapping datastatusบันทึก 'BAS' - Batch Splitupdated_dateบันทึกวันและเวลาปัจจุบันupdated_by บันทึก username ที่ทำรายการ4. Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และนำข้อมูลที่ Update มา Insert ที่ตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail)fieldmapping datapayment_header_split_id[tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).idupdated_dateบันทึกวันและเวลาปัจจุบันupdated_byบันทึก username ที่ทำรายการ |   |
| Alert Code | Alert Message |
| con_py_004 | ยืนยันการ Split Batch |
| err_py_005 | ไม่สามารถ Split Batch ได้ เนื่องจากมีธนาคารปลายทางที่ต้องการแยกเพียงธนาคารเดียว |
| ตำแหน่ง | ข้อมูล | เงื่อนไข | ตัวอย่าง |
| 1-20 | เลข Batch ปฎิบัติการ | - | CP-TB-20250904-00001 |
| 21 | Underscore | แทน Space | _ |
| 22 | Sequence number | ลำดับรายการที่ Split | 1 |
| 23 | Dash | ขีดคั่น | - |
| 24 | Total Split Batch | จำนวนรายการทั้งหมดที่ถูก Split Batch | 2 |
| field | mapping data |
| payment_header_id | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |
| batch_oper_no | @Batch Number ฝ่ายปฎิบัติการ แบบรายการที่ถูก Split Batch |
| total_transaction | บันทึก จำนวนรายการ ที่ถูก Split |
| total_amount | บันทึก จำนวนเงิน ที่ถูก Split |
| batch_status | บันทึก 'PEN' - รอยืนยัน |
| created_date | บันทึกวันและเวลาปัจจุบัน |
| created_by | บันทึก username ที่ทำรายการ |
| split_bank_name | 1.รายการที่ Checkbox จากการเลือกธนาคารให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_abbr_name2. รายการที่ไม่ได้ Checkboxให้บันทึก Other |
| field | mapping data |
| status | บันทึก 'BAS' - Batch Split |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |
| field | mapping data |
| payment_header_split_id | [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).id |
| updated_date | บันทึกวันและเวลาปัจจุบัน |
| updated_by | บันทึก username ที่ทำรายการ |

---

## Hyperlinks บนหน้านี้

- [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)
- [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [01. WS สำหรับดึงข้อมูลธนาคารจาก CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475193)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117765)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117765)
- [01. Error Message](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1267335451/image2025-8-6%2016%3A54%3A8.png?version=1&modificationDate=1754474049447&api=v2
