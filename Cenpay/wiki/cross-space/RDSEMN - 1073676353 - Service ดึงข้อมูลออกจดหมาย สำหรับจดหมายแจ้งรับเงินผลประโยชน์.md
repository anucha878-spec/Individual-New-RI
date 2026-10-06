# Service ดึงข้อมูลออกจดหมาย สำหรับจดหมายแจ้งรับเงินผลประโยชน์

- **Space:** `RDSEMN` — E-Mail Notification
- **Page ID:** 1073676353
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1073676353

---

[ [Overview](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Overview) ] [ [Protocol](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Protocol) ] [ [Operation](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Operation) ] [ [Input](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Input) ] [ [Process](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Process) ] [ [Output](#Serviceดึงข้อมูลออกจดหมายสำหรับจดหมายแจ้งรับเงินผลประโยชน์-Output) ]

## Overview

service สำหรับดึงข้อมูลออกจดหมาย เพื่อใช้สำหรับการออกจดหมาย LB01, LB02, **LB03** เพิ่ม parameter `letter_date_to` (Optional) รองรับดึงข้อมูลแบบช่วงวันที่ สำหรับ Batch LB03 (22.07.2026)

## Protocol

Icon
<SOAP>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <bulk>

## Input

| Name | Type | Description | Required/Optional | Example | Validation |
|---|---|---|---|---|---|
| letter_date | String | วันที่ออกจดหมายที่ต้องการข้อมูล (วันที่เริ่มต้น กรณีดึงแบบช่วงวันที่) | Required | 25660627 |   |
| letter_date_to | String | วันที่ออกจดหมายสิ้นสุด (Optional — ถ้าไม่ระบุ ระบบจะดึงข้อมูลเฉพาะวันเดียวตาม letter_date เหมือนเดิม; ถ้าระบุ จะดึงข้อมูลแบบช่วงวันที่ letter_date ถึง letter_date_to) | Optional | 25660630 |   |
| letter_type | String | ประเภทจดหมายผลประโยชน์94 = จดหมายแจ้งรับเงินผลประโยชน์ แบบมีเลขบัญชีธนาคาร/พร้อมเพย์95 = จดหมายแจ้งรับเงินผลประโยชน์ แบบไม่มีเลขบัญชีธนาคาร/พร้อมเพย์**69 = จดหมายแจ้งรับเงินผลประโยชน์ (LB03)** | Required | 94 |   |
| gen_status | String | สถานะ Gen รายการจดหมายI = InprogressC = ComplateD = Delete/cancel | Optional | C |   |

## Process

**SQL Statement สำหรับดึงข้อมูลกรมธรรม์**
<![CDATA[SELECT LTTYPE,LTOTYP,LTLTIL,LTTITL,LTNAME,LTSURN,LTADDR,LTTUMB,LTDIST,LTPROV, LTZIPP,LTIDBC,LTDATE,&quot;LTBRN#&quot;,LTBRAN,LTGNYY,LTRUNN,LTNBRY,&quot;LTPOL#&quot;, LTPLAN, LTPTYP,LTBTYP,LTDUDT,LTYYMM,LTTOAM,LTMTAM,LTBOAM,LTRFAM,LTINAM,LTTAAM, LTPLAM,LTPIAM,LTAPAM,LTAIAM,LTPMAM,LTINPM,LTTSAM,LTTRCH,LTBANK,LTBANB, LTBANN,LTPPNN,LTPPNM,LTSTAS,LTCRDT,LTCRTM,LTCRBY FROM OLIS.OLPLTBNF WHERE LTTYPE = @letter_type AND LTSTAS = @gen_status AND LTDATE BETWEEN @letter_date AND COALESCE(@letter_date_to, @letter_date)]]>

## Output

| **Attribute Name** | **Data Type** | **Description** | **Example** |
|---|---|---|---|
| LTTYPE | String | ประเภทจดหมายผลประโยชน์สำหรับเก็บรหัสจดหมายใหม่ | 94 |
| LTOTYP | String | ประเภทใบแจ้ง สำหรับเก็บรหัสจดหมายเดิม | 23 |
| LTLTIL | String | คำนำหน้าชื่อ(จ่าหน้าซอง) | คุณ |
| LTTITL | String | คำนำหน้าชื่อ | คุณ |
| LTNAME | String | ชื่อผู้เอาประกัน | กุ้ง |
| LTSURN | String | นามสกุลผู้เอาประกัน | กร้ามกราม |
| LTADDR | String | ที่อยู่ (บรรทัดที่ 1) | 24/555 |
| LTTUMB | String | ตำบล | คลองสาน |
| LTDIST | String | อำเภอ | คลองสาน |
| LTPROV | String | จังหวัด | กรุงเทพมหานคร |
| LTZIPP | String | รหัสไปรษณีย์ | 10600 |
| LTIDBC | String | ID Barcode จดหมายตีกลับ | 100000055866060000000194 |
| LTDATE | Numeric | วันที่ออกจดหมาย | 25660627 |
| LTBRN# | String | รหัสสาขา (4 หลัก) | 0116 |
| LTBRAN | String | ชื่อสาขา | อโศก |
| LTGNYY | String | ปี YY พุทธศักราช ที่ออกจดหมาย | 66 |
| LTRUNN | String | Running Number | 00000001 |
| LTNBRY | String | เลขที่หนังสือ | 0116/66/00000001 |
| LTPOL# | String | เลขที่กรมธรรม์ | 0000558 |
| LTPLAN | String | ชื่อแบบประกัน | ซีเนียร์ แฮปปี้ 2 |
| LTPTYP | String | ประเภทกรมธรรม์ | ORD |
| LTBTYP | String | ประเภทเงินผลประโยชน์เงินครบกำหนดสัญญา เงินทรงชีพเงินสมนาคุณ | เงินครบกำหนดสัญญา |
| LTDUDT | Numeric | วันที่รับเงินผลประโยชน์ | 25660712 |
| LTYYMM | Numeric | ปีที่ / เดือนที่ ของงวดรับผลประโยชน์ | 6607 |
| LTTOAM | Numeric | ยอดเงินผลประโยชน์สุทธิ | 98600.00 |
| LTMTAM | Numeric | เงินครบสัญญา | 100000.00 |
| LTBOAM | Numeric | เงินสมนาคุณ | 0.00 |
| LTRFAM | Numeric | เงินทรงชีพ | 0.00 |
| LTINAM | Numeric | ดอกเบี้ยจ่ายตามเงื่อนไข | 0.00 |
| LTTAAM | Numeric | รวมรายการรับเงิน | 100000.00 |
| LTPLAM | Numeric | เงินกู้ | 0.00 |
| LTPIAM | Numeric | ดอกเบี้ยเงินกู้ | 0.00 |
| LTAPAM | Numeric | เงินกู้ APL | 0.00 |
| LTAIAM | Numeric | ดอกเบี้ย เงินกู้ APL | 0.00 |
| LTPMAM | Numeric | เบี้ยประกันภัยค้างชำระ | 1400.00 |
| LTINPM | Numeric | ดอกเบี้ยเบี้ยประกันภัยค้างชำระ | 0.00 |
| LTTSAM | Numeric | รวมรายการหัก | 1400.00 |
| LTTRCH | String | ประเภทการโอนเงินกรณีมีบัญชีเงินฝากธนาคาร = B กรณีพร้อมเพย์ ID = P | B |
| LTBANK | String | ชื่อธนาคาร | ธนาคารกรุงไทย จำกัด (มหาชน) |
| LTBANB | String | สาขา | สาขาโคกกลอย |
| LTBANN | String | เลขที่บัญชีธนาคาร | 8111019179 |
| LTPPNN | String | เลขที่ Prompt Pay | 1234567891234 |
| LTPPNM | String | ชื่อบัญชี Prompt pay | นายกุ้ง กร้ามกราม |
| LTSTAS | String | สถานะ Gen รายการจดหมายI = Inprogress C = Complate D = Delete/cancel | C |
| LTCRDT | Numeric | CREATE DATE | 25660627 |
| LTCRTM | Numeric | CREATE TIME | 142003 |
| LTCRBY | String | CREATE BY | OLIS20 |
| LTBFTY | String | Sub business type |   |
| LTPSAM | Numeric | ประเภทเงินบำนาญประเภทเงินผลประโยชน์Sub TypeDescriptionPPY (เงินบำนาญ) A1บำนาญปีแรก งวดแรกANบำนาญงวดต่อ SUเวนคืน-บำนาญ ประเภทอื่นๆBlank |   |
| ประเภทเงินผลประโยชน์ | Sub Type | Description |
| PPY (เงินบำนาญ) | A1 | บำนาญปีแรก งวดแรก |
| AN | บำนาญงวดต่อ |   |
| SU | เวนคืน-บำนาญ |   |
| ประเภทอื่นๆ | Blank |   |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
