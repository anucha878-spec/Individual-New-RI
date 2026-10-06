# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (BBL-eWHT)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 969703678
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=969703678

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-eWHT)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-eWHT)-ProcessOverview) ] [ [Precondition](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-eWHT)-Precondition) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-eWHT)-ProcessDescription) ]

## Objectives

1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารกรุงเทพ (BBL-e-WHT)

## Process Overview

1. เมื่อมีการส่งรายการโอนเงินให้ เข้าระบบ Claim payment เรียบร้อยแล้ว
2. ดาวน์โหลด Text file เพื่อส่งให้ธนาคาร

## Precondition

1. เป็นรายการที่ทำการรวบรวมคำสั่งซื้อกองทุนเพื่อทำการโอนเงินให้กับ บลจ

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_BBL_e-WHT_ddmmyyyy_hhmmss.txtOCEANIN_BBL_PromptPay_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_BBL_e-WHT_11032022_134646.txt |
|---|---|
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ตัวคั่นสำหรับแต่ละฟิลด์จะเป็น ~ |
| ตัวอย่างไฟล์ | ตัวอย่าง : [https://drive.google.com/drive/folders/17fSDOdKrp9piIHltYKftjfyMXweLylVi](https://drive.google.com/drive/folders/17fSDOdKrp9piIHltYKftjfyMXweLylVi)รายละเอียดของ Format : [https://docs.google.com/spreadsheets/d/1C2qvhPWyVPMn4rkd-gTlrURe9Z6ZgeKj/edit#gid=220513044](https://docs.google.com/spreadsheets/d/1C2qvhPWyVPMn4rkd-gTlrURe9Z6ZgeKj/edit#gid=220513044) |

**ขั้นตอนการ Mapping Data ดังนี้**
1.ดึงข้อมูลจาก Table ดังนี้
**ดึงข้อมูลจาก Table**

| Table Name | Table Relations | Conditions | Description of Conditions | Remark |
|---|---|---|---|---|
| [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH) |   | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID =@BATCH_PAYMENT_ID | รหัส BATCH ปฏิบัติการ | รับค่ามาจากหน้าจอ |
| [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BATCH_PAYMENT_ID = [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).STATUS_CODE in ('T009','T010') | สถานะการจ่ายเงิน | รายการหลังจาก Gen SAP (ครั้งแรก)T009 =รอ Download File ทำจ่ายรายการที่หลังตรวจสอบ Format เลขที่บัญชี (ครั้งที่ 2.....n)T010 =Download File ทำจ่ายสำเร็จ |
| [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER) | Left Join [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ID = [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).ID | [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).data_status='A' | รหัสข้อมูล - Auto Increment |   |

2.นำรายการจากข้อ 1 เพื่อ Generate File ดังนี้ >>> Mapping ใหม่

|   | Text Field Name | Description | Length | Set Value | Business Rule |
|---|---|---|---|---|---|
| **Header Record -001** |
| 1 | Record Type | รหัสระบุ Record | 3 | '001' | Mandatory |
| 2 | Company Id | รหัสบริษัท | 20 | @Company Id | Mandatoryex. 'OCEANIN' |
| 3 | Company Tax Id | รหัสภาษีบริษัท | 15 | @CompanyTaxId | Mandatoryex.'0107555000210' |
| 4 | Company Account | บัญชีบริษัท | 20 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).COMPANY_BANK_ACCOUNT | Mandatoryex.9250025955 |
| 5 | Customer Batch Reference | การอ้างอิงแบทช์ลูกค้า | 25 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO | Mandatoryex.C20220530001 |
| 6 | Batch Broadcast message |   | 5 | ค่าว่าง | Optional |
| 7 | File Date | วันที่Generate File | 8 | System Date | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 8 | File Timestamp | เวลา Generate File | 6 | Time of System Date | MandatoryFormat :HH24MMSS |
| Ex. Header : 001~OCEANIN~0107555000210~9250025955~C20220530001~~13062019~082241 |
| **Details Record - 003** |
| 1 | Record Type | รหัสระบุ Record | 3 | '003' | Mandatory |
| 2 | Company Id | รหัสบริษัท | 20 | @Company Id | Mandatoryex.'OCEANIN' |
| 3 | Credit Sequence Number | Running No | 6 | Running serial number in the filestarts with 1 and incremented by 1 such as 1,2,3,4,... | Mandatory |
| 4 | Product code | Code ของธนาคาร | 5 | 'SMC06' | Mandatory |
| 5 | Client Account Number | เลขที่บัญชีผู้รับเงิน/ผู้รับประโยชน์ | 25 | ให้นำ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT มาจัดรูปแบบเป็น 11 หลักตามเงื่อนไขของแต่ละธนาคาร ตามลิงค์ คลิกดูลิงก์ >> [หลักการบันทึกรหัสสาขา และเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909) << | Mandatory |
| 6 | Value date | วันที่โอนเงินให้ผู้รับ | 8 | วันที่โอนเงินจากหน้าจอ[PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 7 | Value time | เวลาคิดมูลค่าสำหรับการชำระเงิน | 6 | ค่าว่าง | OptionalFormat :HH24MMSS |
| 8 | Credit Currency | รหัสสกุลเงิน | 3 | 'THB' | MandatoryCurrency Code will be THB |
| 9 | Internal Reference | หมายเลขอ้างอิงลูกค้า | 18 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).ref_no_bank | Conditionalเป็นข้อมูลของฝั่ง Payment ที่อ้างอิงถึงลูกค้า อาจเป็น เลขที่กรมธรรม์ /เลขที่อ้างอิงรายการจ่าย |
| 10 | Pre-advice date | วันที่แจ้งไปยังผู้รับเงิน / ผู้รับผลประโยชน์ | 8 | ค่าว่าง | OptionalFormat : DDMMYYYY(ค.ศ.) |
| 11 | Delivery Method |   | 2 | ค่าว่าง | Conditional |
| 12 | Dispatch To |   | 2 | ค่าว่าง | Conditional |
| 13 | Cheque deposit Required |   | 1 | ค่าว่าง | Conditional |
| 14 | Copy ID card Present |   | 1 | ค่าว่าง | Conditional |
| 15 | WHT Present |   | 1 | ค่าว่าง | Conditional |
| 16 | Invoice Details Present |   | 1 | ค่าว่าง | Conditional |
| 17 | VAT Present |   | 1 | ค่าว่าง | Conditional |
| 18 | Receipt Present |   | 1 | ค่าว่าง | Conditional |
| 19 | Credit Advice Required |   | 1 | 'Y' | MandatoryThis shall have value as Y/N. |
| 20 | Cheque drawn on location |   | 4 | ค่าว่าง | Conditional |
| 21 | Dispatch Branch Code |   | 4 | ค่าว่าง | Conditional |
| 22 | WHT Form Type |   | 1 | ประเภทการจดทะเบียนภาษี (WHT Form Type)[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).wht_form_type | ConditionalCodeDescription1ภ.ง.ด. 1 ก2ภ.ง.ด. 1 ก พิเศษ3ภ.ง.ด. 24ภ.ง.ด. 35ภ.ง.ด. 2 ก6ภ.ง.ด. 3 ก7ภ.ง.ด. 53 |
| Code | Description |
| 1 | ภ.ง.ด. 1 ก |
| 2 | ภ.ง.ด. 1 ก พิเศษ |
| 3 | ภ.ง.ด. 2 |
| 4 | ภ.ง.ด. 3 |
| 5 | ภ.ง.ด. 2 ก |
| 6 | ภ.ง.ด. 3 ก |
| 7 | ภ.ง.ด. 53 |
| 23 | WHT serial no. |   | 14 | Auto Running ตามรูปแบบนี้ YYYYMMxxxxYYYY =ปี พ.ศ ที่ทำรายการ 4 หลักMM = เลขเดือน 2 หลัก xxxx = Running Number 4 หลัก | Conditional |
| 24 | WHT book no. |   | 14 | ค่าว่าง | Conditional |
| 25 | WHT Running No. |   | 6 | Auto Running of WHT book no. | Conditional |
| 26 | BahtNet Payment type code |   | 3 | ค่าว่าง | Conditional |
| 27 | BOT service type of payment |   | 2 | '04' | Mandatory |
| 28 | No. of WHT Details |   | 2 | ให้ตรวจสอบตามเงื่อนไขดังนี้1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax เป็น Null หรือ เป็น 0 ให้ กำหนด เป็น ค่าว่าง2.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax ไม่เป็น Null และ เป็น 0 ให้ กำหนด เป็น 1 | Conditional |
| 29 | Total WHT Amount |   | 16 | ให้ตรวจสอบตามเงื่อนไขดังนี้1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax เป็น Null หรือ เป็น 0 ให้ กำหนด เป็น ค่าว่าง 02.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax ไม่เป็น Null และ เป็น 0 ให้ กำหนด เป็น [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| 30 | No. Of Invoice Details |   | 6 | ให้ตรวจสอบตามเงื่อนไขดังนี้1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax เป็น Null หรือ เป็น 0 ให้ กำหนด เป็น ค่าว่าง2.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax ไม่เป็น Null และ เป็น 0 ให้ กำหนด เป็น 1 | Conditional |
| 31 | Total Invoice Amount |   | 16 | ให้ตรวจสอบตามเงื่อนไขดังนี้1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax เป็น Null หรือ เป็น 0 ให้ กำหนด เป็น ค่าว่าง 02.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax ไม่เป็น Null และ เป็น 0 ให้ กำหนด เป็น [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Conditional2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| 32 | Total Discount Amount |   | 16 | ค่าว่าง | Conditional |
| 33 | Payee charge code | รหัสค่าธรรมเนียมผู้รับเงิน | 3 | 'OUR' | ประเภทการหักค่าธรรมเนียม OUR = บริษัทรับภาระ BEN = ผู้รับเงินรับภาระ |
| 34 | Payment Net amount (Credit amount) | จำนวนเงินจ่ายสุทธิ | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| 35 | WHT Pay Type |   | 1 | กำหนด เป็น 3 | Mandatoryข้อมูลดังนี้1 - ออกให้ครั้งเดียว (Pays tax for recipient one time) 2 - ออกให้ตลอดไป (Pays tax for recipient every time) 3 - หัก ณ ที่จ่าย (Deducts tax at source) 4 - อื่นๆ (โปรดระบุ) (Other (specify)) |
| 36 | WHT Remark |   | 40 | ค่าว่าง |   |
| 37 | WHT Deduct Date |   | 8 | วันที่โอนเงินจากหน้าจอ[PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE | Conditionalวันเดียวกับ value date |
| 38 | Receiving Bank Code | รหัสธนาคารที่รับเงิน | 3 | [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).bot_bank_code | Optional |
| 39 | Receiving Branch Code | รหัสสาขาธนาคารที่รับเงิน | 4 | ให้นำ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNTมาตรวจสอบตามเงื่อนไขของแต่ละธนาคาร ตามลิงค์ [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909) | Optional |
| 40 | WHT Signatory |   | 1 | กำหนด เป็น B |   |
| 41 | Service Code |   | 30 | ค่าว่าง |   |
| 42 | Beneficiary Code |   | 30 | ค่าว่าง |   |
| 43 | Payee1 ID Card |   | 15 | ค่าว่าง |   |
| 44 | Payee Name | คำนำหน้าชื่อ - นามสกุลผู้รับเงิน | 100 | 1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE เป็น Null และ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME เป็น Nullให้กำหนด ชื่อผู้รับเงิน [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME2.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE เป็น Null และ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME ไม่เป็น Nullให้กำหนด ชื่อและนามสกุลผู้รับเงิน [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME 3.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE ไม่เป็น Null และ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME ไม่เป็น Nullให้กำหนด กำหนด คำนำหน้าชื่อ - นามสกุลผู้รับเงิน[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME4.กรณีเกิน 100 ตัวอักษร ให้ ตัด เอาแค่ 100 ตัวเท่านั้น | Mandatoryอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space , |
| ` $ ( ) _ - + = \ : ; / . Space , |
| 45 | Payee Address 1 |   | 50 | 1.กำหนดให้รูปแบบข้อมูลที่อยู่ตามนี้เรียงข้อมูลตามลำดับColumnDescriptionรูปแบบ1payee_add_noบ้านเลขที่ ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"บ้านเลขที่ "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_add_no\|ตามด้วยข้อมูลต่อไป2payee_block_noหมู่ที่ ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่ที่ "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_block_no\|ตามด้วยข้อมูลต่อไป3payee_village_buildingหมู่บ้าน/อาคาร ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_village_building\|ตามด้วยข้อมูลต่อไป4payee_sub_streetซอย ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"ซอย "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป5payee_streetถนน ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป6payee_sub_district_nameตำบล ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป7payee_district_nameอำเภอ ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป8payee_province_nameจังหวัด ผู้รับเงินกรณีมีข้อมูล ให้ใช้ข้อมูลนี้ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_province_name \|ตามด้วยข้อมูลต่อไป2.กรณีข้อมูล เกิน 50 ตัวอักษร ให้ ตัด เอาแค่ 50 ตัว ข้อมูลที่เหลือ ให้ใส่ในช่อง Payee Address 2 | Optionalอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| เรียงข้อมูลตามลำดับ | Column | Description | รูปแบบ |
| 1 | payee_add_no | บ้านเลขที่ ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"บ้านเลขที่ "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_add_no\|ตามด้วยข้อมูลต่อไป |
| 2 | payee_block_no | หมู่ที่ ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่ที่ "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_block_no\|ตามด้วยข้อมูลต่อไป |
| 3 | payee_village_building | หมู่บ้าน/อาคาร ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_village_building\|ตามด้วยข้อมูลต่อไป |
| 4 | payee_sub_street | ซอย ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"ซอย "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป |
| 5 | payee_street | ถนน ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป |
| 6 | payee_sub_district_name | ตำบล ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป |
| 7 | payee_district_name | อำเภอ ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้"หมู่บ้าน/อาคาร "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION). \|ตามด้วยข้อมูลต่อไป |
| 8 | payee_province_name | จังหวัด ผู้รับเงิน | กรณีมีข้อมูล ให้ใช้ข้อมูลนี้ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_province_name \|ตามด้วยข้อมูลต่อไป |
| ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| 46 | Payee Address 2 |   | 50 | นำข้อมูลที่อยู่ที่เหลือจาก Payee Address 1 มาใส่ กรณีข้อมูล เกิน 50 ตัวอักษร ให้ ตัด เอาแค่ 50 ตัว ข้อมูลที่เหลือ ให้ใส่ในช่อง Payee Address 3 |
| 47 | Payee Address 3 |   | 50 | นำข้อมูลที่อยู่ที่เหลือจาก Payee Address 2 มาใส่กรณีข้อมูล เกิน 50 ตัวอักษร ให้ ตัด เอาแค่ 50 ตัว เท่านั้น |
| 48 | Payee Address 4 |   | 50 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_zip_code |
| 49 | Dispatch Address 1 |   | 50 | ค่าว่าง |
| 50 | Dispatch Address 2 |   | 50 | ค่าว่าง |
| 51 | Dispatch Address 3 |   | 50 | ค่าว่าง |
| 52 | Dispatch Address 4 |   | 50 | ค่าว่าง |
| 53 | Payee Tax ID |   | 15 | เลขที่บัตรของผู้รับเงิน[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).IDENTIFICATION_NO | Conditional |
| 54 | Payee Fax Number |   | 20 | ค่าว่าง | Conditional |
| 55 | Payee Mobile Phone Number |   | 20 | ค่าว่าง | Conditional |
| 56 | Payee E-mail Address |   | 70 | ข้อมูลอีเมล์ของผู้รับเงิน[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).payee_email | Conditionalอนุญาตให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| Ex. Details Record : 003~OCEANIN~3~SMC06~02222222222~01102020~~THB~REF3~01102020~~~~~~~~~Y~~~7~003~~~~04~3~6000~3~300000~~OUR~315000~3~~01102020~014~0222~B~~~~บริษัท เมโทรซิสเต็มส์คอร์ปอเรชั่น จำกัด (มหาชน)~400 ถ เฉลิมพระเกียรติ ร 9 แขวงหนองบอน เขตประเวศ ~กรุงเทพฯ ~~10250~~~~~0107538000347~~~test3@email.com |
| **WHT Details - 005** |
| 1 | Record Identifier | รหัสระบุ Record | 3 | กำหนด 005 | Mandatory |
| 2 | Internal Reference | หมายเลขอ้างอิงลูกค้า | 20 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)[.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)ref_no_bank | Mandatory |
| 3 | Credit Sequence No. |   | 6 | auto running ภายใต้ Record Type 003 | Conditional |
| 4 | WHT Amount |   | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).amount_withholding_tax x100 | Mandatory |
| 5 | E-WHT Income Type |   | 2 | กำหนดเป็น 21 | Mandatoryข้อมูล '01' to '99' ตาม Config เอกสารจากฝ่ายการเงิน คลิกเพื่อดูตัวอย่างข้อมูล **E-WHT Income Type STD**01 = เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40(1)02 = ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40(2)03 = ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3)04 = ดอกเบี้ย ฯลฯ ตามมาตรา 40(4)(ก)05 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 3006 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2507 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2308 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2009 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 1510 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 1011 = เงินปันผล ฯลฯ ตามมาตรา 40 (4)(ข) ที่ไม่ได้รับเครดิตภาษี12 = ค่าเช่า ตามมาตรา 40(5)13 = เงินได้จากวิชาชีพอิสระ ตามมาตรา 40(6)14 = ค่ารับเหมา ตามมาตรา 40(7)15 = ค่าจ้างทาของ ตามมาตรา 40(8)16 = รางวัลในการประกวด แข่งขัน ชิงโชค ตามมาตรา 40(8)17 = ค่าแสดงของนักแสดงสาธารณะ ตามมาตรา 40(8)18 = ค่าโฆษณา ตามมาตรา 40(8)19 = รางวัลส่วนลดหรือประโยชน์จากการส่งเสริมการขาย ตามมาตรา 40(8)20 = ค่าขนส่ง ตามมาตรา 40(8)21 = ค่าบริการอื่นๆ ตามมาตรา 40(8)22 = เบี้ยประกันวินาศภัย ตามมาตรา 40(8)23 = ค่าซื้อสินค้าพืชไร่ ตามมาตรา 40(8)98 = เงินได้อื่นๆ ที่มี WHT (If income type is not matched with the above and WHT amount is not equal to 0, then this income type code “098” is used)99 = เงินได้อื่นๆ ที่ไม่มี WHT (If income type is not matched with the above and WHT amount is equal to 0, then this income type code “099” is used) |
| **E-WHT Income Type STD** |
| 01 = เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40(1) |
| 02 = ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40(2) |
| 03 = ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) |
| 04 = ดอกเบี้ย ฯลฯ ตามมาตรา 40(4)(ก) |
| 05 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 30 |
| 06 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 25 |
| 07 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 23 |
| 08 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 20 |
| 09 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 15 |
| 10 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 10 |
| 11 = เงินปันผล ฯลฯ ตามมาตรา 40 (4)(ข) ที่ไม่ได้รับเครดิตภาษี |
| 12 = ค่าเช่า ตามมาตรา 40(5) |
| 13 = เงินได้จากวิชาชีพอิสระ ตามมาตรา 40(6) |
| 14 = ค่ารับเหมา ตามมาตรา 40(7) |
| 15 = ค่าจ้างทาของ ตามมาตรา 40(8) |
| 16 = รางวัลในการประกวด แข่งขัน ชิงโชค ตามมาตรา 40(8) |
| 17 = ค่าแสดงของนักแสดงสาธารณะ ตามมาตรา 40(8) |
| 18 = ค่าโฆษณา ตามมาตรา 40(8) |
| 19 = รางวัลส่วนลดหรือประโยชน์จากการส่งเสริมการขาย ตามมาตรา 40(8) |
| 20 = ค่าขนส่ง ตามมาตรา 40(8) |
| 21 = ค่าบริการอื่นๆ ตามมาตรา 40(8) |
| 22 = เบี้ยประกันวินาศภัย ตามมาตรา 40(8) |
| 23 = ค่าซื้อสินค้าพืชไร่ ตามมาตรา 40(8) |
| 98 = เงินได้อื่นๆ ที่มี WHT (If income type is not matched with the above and WHT amount is not equal to 0, then this income type code “098” is used) |
| 99 = เงินได้อื่นๆ ที่ไม่มี WHT (If income type is not matched with the above and WHT amount is equal to 0, then this income type code “099” is used) |
| 6 | WHT Deduct Rate | อัตราภาษี | 4 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)[.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)rate_tax x 100 | Conditional |
| 7 | Income Type Amount | จำนวนเงิน ก่อนหัก ภาษี | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)[.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)amount_approve x 100 | Mandatory |
| Ex. Details Record :005~REF3_1~1~3000~15~0300~100000 005~REF3_2~2~3000~03~0300~100000 005~REF3_3~3~0~99~0000~100000 |
| **Invoice with E-WHT Details - 009** |
| 1 | Record Identifier | รหัสระบุ Record |   | กำหนด 009 | Mandatory |
| 2 | Invoice Number + PO Number + Invoice Date | เลขที่ใบ Invoice |   | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).invoice_number | Mandatory |
| 3 | Invoice Amount | จำนวนเงิน บนใบ Invoice |   | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)[.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)amount_approve x 100 | Mandatory |
| 4 | Invoice Description | รายละเอียด Invoice |   | ค่าว่าง | Optional |
| 5 | VAT Amount | จำนวนเงิน Vat |   | ค่าว่าง | Optional |
| 6 | Internal Reference | หมายเลขอ้างอิงลูกค้า |   | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)[.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)ref_no_bank | Mandatory |
| 7 | E-WHT Income Type | ประเภทการหักภาษี |   | กำหนดเป็น 21 | Mandatoryข้อมูล '01' to '99' ตาม Config เอกสารจากฝ่ายการเงิน คลิกเพื่อดูตัวอย่างข้อมูล **E-WHT Income Type STD**01 = เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40(1)02 = ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40(2)03 = ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3)04 = ดอกเบี้ย ฯลฯ ตามมาตรา 40(4)(ก)05 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 3006 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2507 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2308 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 2009 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 1510 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 1011 = เงินปันผล ฯลฯ ตามมาตรา 40 (4)(ข) ที่ไม่ได้รับเครดิตภาษี12 = ค่าเช่า ตามมาตรา 40(5)13 = เงินได้จากวิชาชีพอิสระ ตามมาตรา 40(6)14 = ค่ารับเหมา ตามมาตรา 40(7)15 = ค่าจ้างทาของ ตามมาตรา 40(8)16 = รางวัลในการประกวด แข่งขัน ชิงโชค ตามมาตรา 40(8)17 = ค่าแสดงของนักแสดงสาธารณะ ตามมาตรา 40(8)18 = ค่าโฆษณา ตามมาตรา 40(8)19 = รางวัลส่วนลดหรือประโยชน์จากการส่งเสริมการขาย ตามมาตรา 40(8)20 = ค่าขนส่ง ตามมาตรา 40(8)21 = ค่าบริการอื่นๆ ตามมาตรา 40(8)22 = เบี้ยประกันวินาศภัย ตามมาตรา 40(8)23 = ค่าซื้อสินค้าพืชไร่ ตามมาตรา 40(8)98 = เงินได้อื่นๆ ที่มี WHT (If income type is not matched with the above and WHT amount is not equal to 0, then this income type code “098” is used)99 = เงินได้อื่นๆ ที่ไม่มี WHT (If income type is not matched with the above and WHT amount is equal to 0, then this income type code “099” is used) |
| **E-WHT Income Type STD** |
| 01 = เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40(1) |
| 02 = ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40(2) |
| 03 = ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) |
| 04 = ดอกเบี้ย ฯลฯ ตามมาตรา 40(4)(ก) |
| 05 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 30 |
| 06 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 25 |
| 07 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 23 |
| 08 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 20 |
| 09 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 15 |
| 10 = เงินปันผล ฯลฯ ตามมาตรา 40(4)(ข) ที่ได้รับเครดิตภาษีอัตราร้อยละ 10 |
| 11 = เงินปันผล ฯลฯ ตามมาตรา 40 (4)(ข) ที่ไม่ได้รับเครดิตภาษี |
| 12 = ค่าเช่า ตามมาตรา 40(5) |
| 13 = เงินได้จากวิชาชีพอิสระ ตามมาตรา 40(6) |
| 14 = ค่ารับเหมา ตามมาตรา 40(7) |
| 15 = ค่าจ้างทาของ ตามมาตรา 40(8) |
| 16 = รางวัลในการประกวด แข่งขัน ชิงโชค ตามมาตรา 40(8) |
| 17 = ค่าแสดงของนักแสดงสาธารณะ ตามมาตรา 40(8) |
| 18 = ค่าโฆษณา ตามมาตรา 40(8) |
| 19 = รางวัลส่วนลดหรือประโยชน์จากการส่งเสริมการขาย ตามมาตรา 40(8) |
| 20 = ค่าขนส่ง ตามมาตรา 40(8) |
| 21 = ค่าบริการอื่นๆ ตามมาตรา 40(8) |
| 22 = เบี้ยประกันวินาศภัย ตามมาตรา 40(8) |
| 23 = ค่าซื้อสินค้าพืชไร่ ตามมาตรา 40(8) |
| 98 = เงินได้อื่นๆ ที่มี WHT (If income type is not matched with the above and WHT amount is not equal to 0, then this income type code “098” is used) |
| 99 = เงินได้อื่นๆ ที่ไม่มี WHT (If income type is not matched with the above and WHT amount is equal to 0, then this income type code “099” is used) |
| Ex. Invoice with E-WHT Details :****009~C1~100000~~7000~REF3_1~15009~C2~100000~~7000~REF3_2~03009~C3~100000~~7000~REF3_3~99 |
| **Footer Details** |
| 1 | Record Identifier | รหัสระบุ Record | 3 | กำหนด '100' | Mandatory |
| 2 | Total No. of Credits | จำนวนรายการทำจ่ายทั้งหมด | 6 | Count of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TRAN_ID | Mandatory |
| 3 | Total Amount | จำนวนเงินทำจ่ายทั้งหมด | 16 | Sum of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| Ex. Footer Details : 100~3~561000 |

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [https://drive.google.com/drive/folders/17fSDOdKrp9piIHltYKftjfyMXweLylVi](https://drive.google.com/drive/folders/17fSDOdKrp9piIHltYKftjfyMXweLylVi)
- [https://docs.google.com/spreadsheets/d/1C2qvhPWyVPMn4rkd-gTlrURe9Z6ZgeKj/edit#gid=220513044](https://docs.google.com/spreadsheets/d/1C2qvhPWyVPMn4rkd-gTlrURe9Z6ZgeKj/edit#gid=220513044)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [หลักการบันทึกรหัสสาขา และเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [.](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
