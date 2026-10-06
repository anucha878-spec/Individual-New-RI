# 10 WS สำหรับ Call Program : PBFLIB_BFCCLPVL เพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ

- **Page ID:** 1333395518
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1333395518
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 10 WS สำหรับ Call Program : PBFLIB_BFCCLPVL เพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ
- **Depth:** 5

---

[ [Overview](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Overview) ] [ [Protocol](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Protocol) ] [ [Operation](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Operation) ] [ [Input](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Input) ] [ [Process](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Process) ] [ [Output](#id-10WSสำหรับCallProgram:PBFLIB_BFCCLPVLเพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินประเภทต่างๆ-Output) ]

## Overview

ws สำหรับ Call Program : PBFLIB_BFCCLPVL เพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินการจ่ายเงินประเภทต่างๆ
Path : "/QSYS.LIB/PBFLIB.LIB/BFCCLPVL.PGM"
เพื่อให้ได้ข้อมูล Cal ID ในการใช้เรียกข้อมูลต่อไป

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <add>

## Input

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| paymentType | Enum | ประเภทคำร้อง | PSP**ตัวอย่าง**APU("เงินจ่ายคืนทันที APL/APU"), RPU("เงินจ่ายคืนทันที RPU"), PSP("เวนคืนกรมธรรม์"), FLP("Freelook"), PPY("เงินบำนาญ"), SBP("เงินทรงชีพ"), FRP("เงินสมนาคุณ"), MAP("ครบกำหนดสัญญา"), UWC("บอกล้าง Underwrite"), LEP("เวนคืนกรมบังคับคดี"), TFP("โอนเงินเข้ากองทุน (10 ปี)"), RBP("เงินผลประโยชน์จากทะเบียนรอจ่ายใหม่"), NLN("กู้ใหม่"), NLO("กู้เพิ่ม"); | Required |
| policyNo | String | เลขที่กรมธรรม์ | 1123721 | Required |
| policyType | Enum | ประเภทกรมธรรม์ | ORD = สามัญIND = อุตสาหกรรม (ปช.)GOV = อุตสาหกรรม (ขพ.)PA = ประกันอุบัติเหตุUL = ยูนิตลิ้งค์ | Required |
| effectiveDate | Date | วันที่มีผลบังคับ | Convert to YYYYDDMM 20251122 (ค.ศ.) | Required |

## Process

**DB: AS400**
1. เรียก Program : [PBFLIB_BFCCLPVL](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCCLPVL) เพื่อคำนวนยอดเงินที่จะใช้สำหรับการจ่ายเงินการจ่ายเงินประเภทต่างๆ โดยส่ง Parameter ดังนี้ParameterDescriptionValuePIRQTYประเภทคำร้องpaymentTypePIPOLCเลขที่กรมธรรม์policyNoPIPOLTประเภทกรมธรรม์policyTypePIEFDTวันที่มีผลบังคับeffectiveDate

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>
Response ที่ได้จาก Program AS400

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| calID | String | Key ที่ได้จากการคำนวน | PSP112372120251122_0001 |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [PBFLIB_BFCCLPVL](http://wiki.thaisamut.co.th/display/APP/PBFLIB_BFCCLPVL)
