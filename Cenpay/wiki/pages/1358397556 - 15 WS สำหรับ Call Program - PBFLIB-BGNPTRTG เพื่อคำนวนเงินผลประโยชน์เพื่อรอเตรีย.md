# 15 WS สำหรับ Call Program : PBFLIB/BGNPTRTG เพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย

- **Page ID:** 1358397556
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1358397556
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 15 WS สำหรับ Call Program : PBFLIB/BGNPTRTG เพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย
- **Depth:** 5

---

[ [Overview](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Overview) ] [ [Protocol](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Protocol) ] [ [Operation](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Operation) ] [ [Input](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Input) ] [ [Process](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Process) ] [ [Output](#id-15WSสำหรับCallProgram:PBFLIB/BGNPTRTGเพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Output) ]

## Overview

ws สำหรับ Call Program : PBFLIB/BGNPTRTG เพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย
Path : "/QSYS.LIB/PBFLIB.LIB/BGNPTRTG.PGM"
เพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย

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
| processDate | String | วันที่ทำรายการ |   | Required |
| policyType | String | ประเภทกรมธรรม์ | O: OrdinaryI : Industry (รวม I และ G)P: PA | Not Required |
| benefitType | String | ประเภทผลประโยชน์ | MAP = ครบกำหนดสัญญาSBP = เงินทรงชีพPPY = เงินบำนาญ | Not Required |
| subType | String | ประเภทย่อยของผลประโยชน์ | ประเภทเงินSub TypeDescription**บำนาญ (PPY)** A1บำนาญงวดแรกANบำนาญงวดต่อSUบำนาญ - เวนคืน**ทรงชีพ (SBP)** OVเงินทรงชีพฝากสะสมMTเงินทรงชีพพร้อมครบสัญญา' 'เงินทรงตามรอบปรกติ | Not Required |
| ประเภทเงิน | Sub Type | Description |
| **บำนาญ (PPY)** | A1 | บำนาญงวดแรก |
| AN | บำนาญงวดต่อ |
| SU | บำนาญ - เวนคืน |
| **ทรงชีพ (SBP)** | OV | เงินทรงชีพฝากสะสม |
| MT | เงินทรงชีพพร้อมครบสัญญา |
| ' ' | เงินทรงตามรอบปรกติ |

## Process

**DB: AS400**
1. เรียก Program : [Process Trigger create payment transaction](http://wiki.thaisamut.co.th/display/RDSAS400/Process+Trigger+create+payment+transaction) เพื่อคำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย และ Update ข้อมูลที่ตาราง [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT) บนระบบ AS400 โดยส่ง Parameter ดังนี้ParameterDescriptionValueBTPSDTวันที่ทำรายการ:processDateBTPOTYประเภทกรมธรรม์:policyTypeBTBFTPประเภทผลประโยชน์:benefitTypeBTSBTYประเภทย่อยของผลประโยชน์:subType

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>
Response ที่ได้จาก Program AS400

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| status | Boolean | สถานะการทำรายการหากบันทึกสำเร็จ = TRUEหากบันทึกไม่สำเร็จ = FALSE | TRUE |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [Process Trigger create payment transaction](http://wiki.thaisamut.co.th/display/RDSAS400/Process+Trigger+create+payment+transaction)
- [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT)
