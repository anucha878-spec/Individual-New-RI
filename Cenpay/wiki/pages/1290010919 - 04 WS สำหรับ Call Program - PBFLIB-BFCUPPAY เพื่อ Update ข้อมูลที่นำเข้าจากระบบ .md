# 04 WS สำหรับ Call Program : PBFLIB/BFCUPPAY เพื่อ Update ข้อมูลที่นำเข้าจากระบบ Cenpay เข้าระบบ AS400

- **Page ID:** 1290010919
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290010919
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 04 WS สำหรับ Call Program : PBFLIB/BFCUPPAY เพื่อ Update ข้อมูลที่นำเข้าจากระบบ Cenpay เข้าระบบ AS400
- **Depth:** 5

---

[ [Overview](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Overview) ] [ [Protocol](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Protocol) ] [ [Operation](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Operation) ] [ [Input](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Input) ] [ [Process](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Process) ] [ [Output](#id-04WSสำหรับCallProgram:PBFLIB/BFCUPPAYเพื่อUpdateข้อมูลที่นำเข้าจากระบบCenpayเข้าระบบAS400-Output) ]

## Overview

ws สำหรับ Call Program : PBFLIB/BFCUPPAY เพื่อ Update ข้อมูลที่ตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400
Path : "/QSYS.LIB/PBFLIB.LIB/BFCUPPAY.PGM"
เพื่อ Update ข้อมูลที่ตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400

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
| paymentType | String | ประเภทเงิน | APU**ตัวอย่าง**APU("เงินจ่ายคืนทันที APL/APU"),RPU("เงินจ่ายคืนทันที RPU"),PSP("เวนคืนกรมธรรม์"),FLP("Freelook"),PPY("เงินบำนาญ"),SBP("เงินทรงชีพ"),FRP("เงินสมนาคุณ"),MAP("ครบกำหนดสัญญา"),UWC("บอกล้าง Underwrite"),LEP("เวนคืนกรมบังคับคดี"),TFP("โอนเงินเข้ากองทุน (10 ปี)"),RBP("เงินผลประโยชน์จากทะเบียนรอจ่ายใหม่"),NLN("กู้ใหม่"),NLO("กู้เพิ่ม"); | Required |
| headerID | String | ID ของตาราง Header | CNPAY202510000000001 | Required |

## Process

**DB: AS400**
1. เรียก Program : [PBFLIB_BFCUPPAY](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCUPPAY) เพื่อ Update ข้อมูลที่ตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR เข้าสู่ตารางที่เกี่ยวข้องบนระบบ AS400 โดยส่ง Parameter ดังนี้ParameterDescriptionValuePIBTYPประเภทเงินผลประโยชน์paymentTypePIHDIDHeader IDheaderID

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>
Response ที่ได้จาก Program AS400

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| status | Boolean | สถานะการทำรายการหากบันทึกสำเร็จ = TRUEหากบันทึกไม่สำเร็จ = FALSE | TRUE |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [PBFLIB_BFCUPPAY](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCUPPAY)
