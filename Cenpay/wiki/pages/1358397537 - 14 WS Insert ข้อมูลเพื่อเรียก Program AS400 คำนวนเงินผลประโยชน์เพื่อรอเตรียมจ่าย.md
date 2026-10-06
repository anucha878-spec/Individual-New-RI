# 14 WS Insert ข้อมูลเพื่อเรียก Program AS400 คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย

- **Page ID:** 1358397537
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1358397537
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 14 WS Insert ข้อมูลเพื่อเรียก Program AS400 คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย
- **Depth:** 5

---

[ [Overview](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Overview) ] [ [Protocol](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Protocol) ] [ [Operation](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Operation) ] [ [Input](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Input) ] [ [Process](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Process) ] [ [Output](#id-14WSInsertข้อมูลเพื่อเรียกProgramAS400คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย-Output) ]

## Overview

Insert ข้อมูลเพื่อเรียก Program AS400 คำนวนเงินผลประโยชน์เพื่อรอเตรียมจ่าย

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
|   | processDate | Date | วันที่ทำรายการ |   | Required |
|   | maxDueDate | Date | วันที่ครบกำหนดที่ระบุ |   | Required |
|   | processStatus | String | Header ID | A | Required |
|   | callDate | Timestamp |   | วันที่และเวลาปัจจุบัน | Required |
|   | callUser | String | ผู้ใช้งาน | System | Required |
|   | callSystem | String | ระบบที่เรียก | Cenpay | Required |
| **Detail** |
| **List<Transaction> กำหนด Limit ไม่เกิน 50** |
|   | policyType | String | ประเภทกรมธรรม์ | O: OrdinaryI : Industry (รวม I และ G)P: PA | Required |
|   | benefitType | String | ประเภทผลประโยชน์ | ประเภทผลประโยชน์MAP = เงินครบสัญญาSBP = เงินทรงชีพPPY = เงินบำนาญ | Required |

## Process

**DB: AS400**
1. สำหรับข้อมูล [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT) ให้จัดการบันทึกข้อมูล ตามนี้
  1. เตรียมข้อมูลจากรายการ Input โดยการวน Insert ตาม Detail ที่ได้
  2. บันทึกข้อมูลลง [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPPTRBT ( BTPSDT, BTMXDT, BTSTAS, BTCRDT, BTCRUS, BTCRSY, BTPOTY, BTBFTP) VALUES ( :processDate, :maxDueDate, :processStatus, :callDate, :callUser, :callSystem, :policyType, :benefitType);]]>
  3. กรณี Insert ข้อมูล **ไม่สำเร็จ**
    1. ให้หยุดทำงาน
      1. Rollback การบันทึกข้อมูลทั้งหมดReturn Output ดังนี้
      2. Return Output ดังนี้
        1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **FALSE**
        2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  4. กรณี Insert ข้อมูล **สำเร็จ**
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
- [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT)
- [MBFLIB.BFPPTRBT](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPPTRBT)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
