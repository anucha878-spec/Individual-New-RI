# 08 WS Trigger Transaction file ข้อมูลคำร้อง เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400

- **Page ID:** 1321599632
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599632
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 08 WS Trigger Transaction file ข้อมูลคำร้อง เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400
- **Depth:** 5

---

[ [Overview](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Overview) ] [ [Protocol](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Protocol) ] [ [Operation](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Operation) ] [ [Input](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Input) ] [ [Process](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Process) ] [ [Output](#id-08WSTriggerTransactionfileข้อมูลคำร้องเข้าสู่ตารางที่เกี่ยวข้องบนระบบAS400-Output) ]

## Overview

WS Trigger Transaction file ข้อมูลคำร้องเพื่อหมุนข้อมูลเข้า Table รับเรื่องคำร้องระบบ AS400
Path : "/QSYS.LIB/PBFLIB.LIB/BFCUPREQ.PGM"

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry>

## Input

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| eventType | Enum | Event Type เหตุการณ์(ประเภทคำร้อง) | PSP**ตัวอย่าง**APU("เงินจ่ายคืนทันที APL/APU"),RPU("เงินจ่ายคืนทันที RPU"),PSP("เวนคืนกรมธรรม์"),FLP("Freelook"),PPY("เงินบำนาญ"),SBP("เงินทรงชีพ"),FRP("เงินสมนาคุณ"),MAP("ครบกำหนดสัญญา"),UWC("บอกล้าง Underwrite"),LEP("เวนคืนกรมบังคับคดี"),TFP("โอนเงินเข้ากองทุน (10 ปี)"),RBP("เงินผลประโยชน์จากทะเบียนรอจ่ายใหม่"),NLN("กู้ใหม่"),NLO("กู้เพิ่ม"); | Required |
| headerID | String | ID ของตาราง Header | CNPAY202510000000001 | Required |

## Process

**DB: AS400**
1. เรียก Program : [PBFLIB_BFCUPREQ](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCUPREQ) Trigger Transaction file ข้อมูลคำร้อง เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400 โดยส่ง Parameter ดังนี้ParameterDescriptionValuePIBTYPประเภทเงินผลประโยชน์eventTypePIHDIDHeader IDheaderID
  1. กรณี Program Trigger ข้อมูล **ไม่สำเร็จ**
    1. Return Output ดังนี้
      1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **FALSE**
      2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  2. กรณี Program Trigger ข้อมูล **สำเร็จ**
    1. Return Output ดังนี้
      1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **TRUE**
      2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ)

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| status | Boolean | สถานะการทำรายการหากบันทึกสำเร็จ = **TRUE**หากบันทึกไม่สำเร็จ = **FALSE** | TRUE |
| remark | varchar (255) | หมายเหตุ หรือ Error Message กรณีทำรายการไม่สำเร็จหากบันทึกสำเร็จ = ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ)หากบันทึกไม่สำเร็จ = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ) | บันทึกข้อมูลสำเร็จ |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [PBFLIB_BFCUPREQ](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCUPREQ)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
