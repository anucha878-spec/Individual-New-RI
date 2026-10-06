# 02 WS Insert ข้อมูลเพื่อรอ Update ข้อมูลที่ระบบ AS400 บนตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR

- **Page ID:** 1286963782
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1286963782
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 02 WS Insert ข้อมูลเพื่อรอ Update ข้อมูลที่ระบบ AS400 บนตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR
- **Depth:** 5

---

[ [Overview](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Overview) ] [ [Protocol](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Protocol) ] [ [Operation](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Operation) ] [ [Input](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Input) ] [ [Process](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Process) ] [ [Output](#id-02WSInsertข้อมูลเพื่อรอUpdateข้อมูลที่ระบบAS400บนตารางMBFLIB.BFPPAYHDและMBFLIB.BFPPAYTR-Output) ]

## Overview

Insert ข้อมูลเพื่อรอ Update ข้อมูลที่ระบบ AS400 บนตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry>

## Input

|   | Name | Type | Description | Example | Validation |
|---|---|---|---|---|---|
| **Header** |
|   | totalRecord | Numeric (8,0) | จำนวนรายการทั้งหมด | 10 | Required |
|   | totalAmount | Numeric (14,2) | จำนวนเงินทั้งหมด | 10000.00 | Required |
|   | headerID | String | Header ID | CNPAY202510000000010 | Required |
| **Detail** |
| **List<Transaction> กำหนด Limit ไม่เกิน 50** |
|   | headerID | String | Header ID | CNPAY202510000000010 | Required |
|   | transactionID | String | Transaction ID | APUTR202510000000010 | Required |
|   | tagID | String | Tag ID-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568เพิ่มเพื่อใช้เป็น Key ในการ Update ข้อมูลแทน 4 Keys ที่ลบไป |   | Required |
|   | policyNo | String | เลขที่กรมธรรม์-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 1024430 | Required |
|   | dueDate | Date | APU = วันที่ปิดบัญชี SBP = วันที่ครบรอบจ่าย MAP = วันที่ครบสัญญา-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 20250926 | Required |
|   | paymentType | enum | ประเภทเงินผลประโยชน์APU**ตัวอย่าง**APU("เงินจ่ายคืนทันที APL/APU"),RPU("เงินจ่ายคืนทันที RPU"),PSP("เวนคืนกรมธรรม์"),FLP("Freelook"),PPY("เงินบำนาญ"),SBP("เงินทรงชีพ"),FRP("เงินสมนาคุณ"),MAP("ครบกำหนดสัญญา"),UWC("บอกล้าง Underwrite"),LEP("เวนคืนกรมบังคับคดี"),TFP("โอนเงินเข้ากองทุน (10 ปี)"),RBP("เงินผลประโยชน์จากทะเบียนรอจ่ายใหม่"),NLN("กู้ใหม่"),NLO("กู้เพิ่ม"); | APU | Required |
|   | modeTransaction | enum | โหมดการทำงานตามประเภทเงินผลประโยชน์01 = อัพเดทข้อมูลเตรียมจ่าย A > B(Batch) 02 = อัพเดทข้อมูลสถานะการจ่าย B > C, F, D(Batch) \| F > B(Manual) 03 = อัพเดทข้อมูลสถานะเช็ค (ทำงานเฉพาะสถานะ C) | 01 | Required |
|   | refNo | Numeric (3,0) | เลขอ้างอิง-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 2 | Required |
|   | endorseNo | String | เลขที่สลักหลัง-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | '' | Required |
|   | paymentStatus | enum | สถานะการจ่ายA = ActiveB = เตรียมจ่ายC = จ่ายสำเร็จ --> ยกเลิกโดย ariya.pi เมื่อ 08/01/2569D = ยกเลิกF = จ่ายไม่สำเร็จR = เรียกคืนE = จ่ายสำเร็จ --> ปรับเพิ่มโดย ariya.pi เมื่อ 08/01/2569V = บัญชีตรวจจ่าย --> ปรับเพิ่มโดย ariya.pi เมื่อ 08/01/2569W = รอยกเลิก --> ปรับเพิ่มโดย ariya.pi เมื่อ 12/02/2569 | B | Required |
|   | accountingDate | Date | วันที่เข้าบัญชี อ้างอิงตาม 5 กระบวนการดังนี้ 1. กระบวนการ Batch031 --> ส่งวันที่เข้าบัญชี : systemDate สำหรับสถานะ 'B'2. กระบวนการยกเลิกรายการ --> ส่งวันที่ยกเลิก : systemDate สำหรับสถานะ 'D'3. กระบวนการ Batch037 --> ส่งวันที่ยืนยันจ่าย : [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).py_approved_date สำหรับการจ่ายเงินสำเร็จ สถานะ 'C'4. กระบวนการ Batch037 --> ส่งวันที่ทราบผลการโอนไม่ผ่าน : [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).py_record_date สำหรับการจ่ายเงินไม่สำเร็จ สถานะ 'F'5. กระบวนการยืนยันการโอน --> ส่งวันที่เข้าบัญชี : systemDate สำหรับสถานะ 'B'-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/25686. กระบวนการตรวจจ่ายบัญชี -> ส่งวันที่ postingDate สำหรับสถานะ 'V' – by patcha.vo 20/01/69 | 20250926 | Not Required |
|   | paymentRound | Numeric (2,0) | รอบการจ่าย | 1 | Not Required |
|   | confirmPaymentDate | Timestamp | วันที่ยืนยันการจ่าย-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 20250926 | Not Required |
|   | paymentChannel | enum | ประเภทการจ่าย 13 = Cheque 14 = โอนเงินผ่านบัญชีธนาคาร 15 = พร้อมเพย์ | 14 | Not Required |
|   | paidDate | Date | วันที่จ่าย-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 20250926 | Not Required |
|   | accountNo | String | รายละเอียดการจ่าย 1 13(CQ) = เลขที่เช็ค 14(TR) = เลขที่บัญชี 15(PP) = เลขที่พร้อมเพย์ | 110093443204 | Not Required |
|   | bankName | String | รายละเอียดการจ่าย 2 ชื่อธนาคาร | กสิกรไทย | Not Required |
|   | bankBranch | String | รายละเอียดการจ่าย 3 ชื่อสาขาของธนาคาร | อโศก | Not Required |
|   | titleName | String | คำนำหน้า | นาง | Not Required |
|   | name | String | ชื่อ | ทดสอบ | Not Required |
|   | surname | String | นามสกุล | สอบสวนดี | Not Required |
|   | paymentAmount | Numeric (14,2) | ยอดเงินที่จ่าย | 10000.00 | Required |
|   | chequeStatus | enum | สถานะเช็ค01= รอตรวจสอบ 02= รออนุมัติ 03=อนุมัติ 04=ส่งกลับแก้ไข 05=ปฎิเสธ 06=ยกเลิก | 1 | Not Required |
|   | unTransferDate | Date | วันที่ทราบผลโอนไม่ผ่าน-- ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 | 20250926 | Not Required |
|   | createdDate | Timestamp | วันที่สร้างรายการ | 20250926 | Required |
|   | createdBy | String | ผู้สร้างรายการ | System | Required |
|   | createdProgram | String | โปรแกรมสร้างรายการ | BH031 | Required |

## Process

**DB: AS400**
1. สำหรับข้อมูล [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD) ให้ทำการเรียก Insert ข้อมูล ลง Table : [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD) ตามนี้
  1. บันทึกข้อมูลลง [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPPAYHD ( BHHDID, BHTTRC, BHTTAM) VALUES ( :headerID, :totalRecord, :totalAmount);]]>
  2. กรณี Insert ข้อมูล **ไม่สำเร็จ**
    1. ให้หยุดทำงาน
    2. Return Output ดังนี้
      1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **FALSE**
      2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  3. กรณี Insert ข้อมูล **สำเร็จ**
    1. ให้ดำเนินการ บันทึก **Transaction file**ที่ข้อ 2
2. สำหรับข้อมูล LIST<Transaction> ให้ทำการวนเรียก Insert ข้อมูล ลง Table : [MBFLIB.BFPPAYTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYTR) จนครบตามนี้
  1. บันทึกข้อมูลลง [MBFLIB.BFPPAYTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYTR) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPPAYTR ( BTTRID, BHHDID, --ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 BTTGID, --BTPOLC, --BTDUDT, BTBFTY, BTMODE, --BTREFN, --BTENNO, BTPSTS, --BTACDT, BTPSTD, BTROUD, --BTCFDT, BTPAY, --BTPADT, BTPDL1, BTPDL2, BTPDL3, BTACTI, BTACNM, BTACSN, BTPYAM, BTCQFG, --BTFADT, BTCRDT, BTCRUS, BTCPGM) VALUES ( :transactionID, :headerID, --ปรับแก้ตาม กระบวนการแก้ไขกระบวนการนำเข้าข้อมูลการจ่ายเงินเพื่อบ้นทึก Update ข้อมูลที่ระบบ AS400 โดย ariya.pi เมือ 16/12/2568 :tagID, --:policyNo, --:dueDate, :paymentType, :modeTransaction, --:refNo, --:endorseNo, :paymentStatus, :accountingDate, :paymentRound, --:confirmPaymentDate, :paymentChannel, --:paidDate, :accountNo, :bankName, :bankBranch, :titleName, :name, :surname, :paymentAmount, :chequeStatus, --:unTransferDate, :createdDate, :createdBy, :createdProgram);]]>
  2. กรณี Insert ข้อมูล **ไม่สำเร็จ**
    1. ให้หยุดทำงาน
      1. Rollback การบันทึกข้อมูลทั้งหมดReturn Output ดังนี้
      2. Return Output ดังนี้
        1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **FALSE**
        2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  3. กรณี Insert ข้อมูล **สำเร็จ**
    1. Return Output ดังนี้
      1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **TRUE**
      2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ)

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| status | Boolean | สถานะการทำรายการหากบันทึกสำเร็จ = TRUEหากบันทึกไม่สำเร็จ = FALSE | TRUE |
| remark | varchar (255) | หมายเหตุ หรือ Error Message กรณีทำรายการไม่สำเร็จหากบันทึกสำเร็จ = 'บันทึกข้อมูลเรียบร้อยแล้ว'หากบันทึกไม่สำเร็จ ='บันทึกข้อมูลไม่สำเร็จ' | บันทึกข้อมูลเรียบร้อยแล้ว |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD)
- [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD)
- [MBFLIB.BFPPAYHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYHD)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [MBFLIB.BFPPAYTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYTR)
- [MBFLIB.BFPPAYTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPAYTR)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
