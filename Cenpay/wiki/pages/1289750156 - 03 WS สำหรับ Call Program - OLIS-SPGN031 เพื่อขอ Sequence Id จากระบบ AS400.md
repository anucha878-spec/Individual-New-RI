# 03 WS สำหรับ Call Program : OLIS/SPGN031 เพื่อขอ Sequence Id จากระบบ AS400

- **Page ID:** 1289750156
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1289750156
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 03 WS สำหรับ Call Program : OLIS/SPGN031 เพื่อขอ Sequence Id จากระบบ AS400
- **Depth:** 5

---

[ [Overview](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Overview) ] [ [Protocol](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Protocol) ] [ [Operation](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Operation) ] [ [Input](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Input) ] [ [Process](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Process) ] [ [Output](#id-03WSสำหรับCallProgram:OLIS/SPGN031เพื่อขอSequenceIdจากระบบAS400-Output) ]

## Overview

ws สำหรับ Call Program : OLIS/SPGN031 เพื่อขอ Sequence Id จากระบบ AS400
Path : "/QSYS.LIB/OLIS.LIB/SPGN031C.PGM"
เพื่อรอ Update ข้อมูลที่ระบบ AS400 บนตาราง MBFLIB.BFPPAYHD และ MBFLIB.BFPPAYTR

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
| system | String | ชื่อระบบ | CNPAY | Required |
| table | String | ชื่อไฟล์ที่จะ Generate | BFPPAYHD | Required |
| year | Numeric | ปีปัจจุบัน (ค.ศ.) | ปีคศ 4 หลัก 2025 | Required |
| month | Enum | เดือนปัจจุบัน | เดือน เป็นตัวเลข 9 | Required |
| totalKey | Numeric | จำนวนรายการที่ต้องการจองเลข PK | 1 | Required |

## Process

**DB: AS400**
1. เรียก Program : [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP) เพื่อขอ Seq โดยส่ง Parameter ดังนี้ParameterDescriptionValuePISYSชื่อระบบsystemPIFILชื่อไฟล์ที่จะ GeneratetablePIYERปีปัจจุบัน (ค.ศ.)yearPIMONเดือนปัจจุบันmonth PIGRPกลุ่มที่จะ Generateกรณีที่ groupGen ไม่ใช่ Null ส่ง groupGen กรณีอื่นๆ ส่ง ""PINRECจำนวนรายการที่ต้องการจองเลข PKtotalKey
2. Mapping ข้อมูล Result ที่ได้จากการเรียก Program AS400 โดยแยกกรณีดังนี้
  1. กรณีที่ totalKey = 1**Name**TypeValueprimaryFlagStringFix "T"seqGroupStartStringNullseqStartNumericNullseqGroupEndStringNullseqEndNumericNullseqPrimaryKeyStringPORNO จาก [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
  2. กรณีที่ totalKey > 1**Name**TypeValueprimaryFlagStringFix "F"seqGroupStartStringPOGRP1 จาก [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)seqStartNumericPONRC1 จาก [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)seqGroupEndStringPOGRP2 จาก [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)seqEndNumericPONRC2 จาก [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)seqPrimaryKeyStringNull

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>
Response ที่ได้จาก Program AS400

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| primaryFlag | String | บอกว่าเป็นการหยิบ Key แบบ primary หรือ setถ้า "T" คือ การหยิบ Key แบบ primaryถ้า "F" คือ การหยิบ Key แบบ set | T |
| seqGroupStart | String | กลุ่มของ Sequence ID เริ่มต้น (กรณีที่ร้องขอ Sequence ID มากกว่า 1) | 1 |
| seqStart | Numeric | เลข Sequence ID เริ่มต้น (กรณีที่ร้องขอ Sequence ID มากกว่า 1) | 999 |
| seqGroupEnd | String | กลุ่มของ Sequence ID สิ้นสุด (กรณีที่ร้องขอ Sequence ID มากกว่า 1) | 2 |
| seqEnd | Numeric | เลข Sequence ID สิ้นสุด (กรณีที่ร้องขอ Sequence ID มากกว่า 1) | 999 |
| seqPrimaryKey | String | Sequence ID พร้อมใช้งาน (กรณีที่ร้องขอ Sequence ID เพียงแค่ 1) | CNPAY202510000000010 |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
- [OLIS/SPGN031](http://wiki.thaisamut.co.th/pages/viewpage.action?title=OLIS_SPGN031R&spaceKey=APP)
