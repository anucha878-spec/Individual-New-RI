# PY04-03 - Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 683475216
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=683475216

---

TOC
[ [Objectives](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-Objectives) ] [ [Process Overview](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-ProcessOverview) ] [ [Preconditions](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-Preconditions) ] [ [Input](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-Input) ] [ [Process Description](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-ProcessDescription) ] [ [Post-conditions](#PY04-03-GenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร-Post-conditions) ]

## Objectives

- <อธิบายวัตถุประสงค์ของ process นี้>
1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีประเภทการโอน**"โอนปกติ (Basic)"** ระบบจะ Generate File เป็น TEXT

## Process Overview

<อธิบายภาพรวมของ process นี้>

## Preconditions

- <เงื่อนไขที่ต้องเกิดขึ้นก่อนที่จะดำเนินการ process นี้> 1. เป็นรายการทำจ่ายที่ Generate File SAP แล้ว

## Input

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_SMC06_DDMMYYYY_HH24MM.txtไฟล์ที่ชื่อไฟล์ตัวอย่างจำนวนรายการ1OCEANIN_SMC06_DDMMYYYY_HH24MM.txt_1.txtOCEANIN_SMC06_11032022_134646_1.txt30002OCEANIN_SMC06_DDMMYYYY_HH24MM.txt_2.txtOCEANIN_SMC06_11032022_134646_2.txt2400OCEANIN_SMC06 =เป็น Format ของธนาคารDDMMYYYY = วันที่ Generate FileHH24MM = เวลา Generate FileEx. OCEANIN_SMC06_13062019_0822 |
|---|---|
| ไฟล์ที่ | ชื่อไฟล์ | ตัวอย่าง | จำนวนรายการ |
| 1 | OCEANIN_SMC06_DDMMYYYY_HH24MM.txt_1.txt | OCEANIN_SMC06_11032022_134646_1.txt | 3000 |
| 2 | OCEANIN_SMC06_DDMMYYYY_HH24MM.txt_2.txt | OCEANIN_SMC06_11032022_134646_2.txt | 2400 |
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ตัวคั่นสำหรับแต่ละฟิลด์จะเป็น ~ |
| ตัวอย่างไฟล์ | ตัวอย่าง : [OCEANIN_SMC06_13062019_0822.txt](/download/attachments/683475216/OCEANIN_SMC06_13062019_0822.txt?version=1&modificationDate=1568774447843&api=v2)รายละเอียดของ Format : [Common File Format for SMART_Standard.pdf](/download/attachments/683475216/Common%20File%20Format%20for%20SMART_Standard.pdf?version=1&modificationDate=1568774460474&api=v2) |

**2.Mapping Data ตามรายละเอียดนี้**
**ขั้นตอนการ Mapping Data ดังนี้**
1.ดึงข้อมูลจาก Table ดังนี้
**ดึงข้อมูลจาก Table**

| Table Name | Table Relations | Conditions | Description of Conditions | Remark |
|---|---|---|---|---|
| [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH) |   | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID =@BATCH_PAYMENT_ID | รหัส BATCH ปฏิบัติการ | รับค่ามาจากหน้าจอ |
| [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BATCH_PAYMENT_ID = [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TRANSFER_TYPE_CODE = 'B' | ประเภทการโอน เป็น ****"โอนปกติ (Basic)" |   |
|   |   | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).STATUS_CODE in ('T009','T010') | สถานะการจ่ายเงิน | รายการหลังจาก Gen SAP (ครั้งแรก)T009 =รอ Download File ทำจ่ายรายการที่หลังตรวจสอบ Format เลขที่บัญชี (ครั้งที่ 2.....n)T010 =Download File ทำจ่ายสำเร็จ |
| [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER) | Left Join [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ID = [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).ID | [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).data_status='A' | รหัสข้อมูล - Auto Increment |   |

2.นำรายการจากข้อ 1 เพื่อ Generate File ดังนี้

|   | Text Field Name | Description | Length | Set Value | Business Rule |
|---|---|---|---|---|---|
| **Header Record** |   |   |   |   |   |
| 1 | Record Type | รหัสระบุ Record | 3 | '001' | Mandatory |
| 2 | Company Id | รหัสบริษัท | 20 | @Company Id | Mandatoryex. 'OCEANIN' |
| 3 | Company Tax Id | รหัสภาษีบริษัท | 15 | @CompanyTaxId | Mandatoryex.'0107555000210' |
| 4 | Company Account | บัญชีบริษัท | 20 | @CompanyAccount | Mandatoryex.9250025955 |
| 5 | Customer Batch Reference | การอ้างอิงแบทช์ลูกค้า | 25 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO@Company Id | Mandatory |
| 6 | Batch Broadcast message |   | 5 | ค่าว่าง | Optional |
| 7 | File Date | วันที่Generate File | 8 | System Date | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 8 | File Timestamp | เวลา Generate File | 6 | Time of System Date | MandatoryFormat :HH24MMSS |
| Ex. Header : 001~OCEANIN~0107555000210~9250025955~OCEANIN~~13062019~082241 |
| **Details Record** |   |   |   |   |   |
| 1 | Record Type | รหัสระบุ Record | 3 | '003' | Mandatory |
| 2 | Company Id | รหัสบริษัท | 20 | @Company Id | Mandatoryex.'OCEANIN' |
| 3 | Credit Sequence Number | Running No | 6 | Auto Running | Mandatory |
| 4 | Product code | Code ของธนาคาร | 5 | 'SMC06' | Mandatory |
| 5 | Client Account Number | เลขที่บัญชีผู้รับเงิน/ผู้รับประโยชน์ | 25 | ให้นำ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNTปรับแก้เมื่อ Go live ได้ประมาณ 1 เดือน ให้กำหนดรูปแบบตามเงื่อนไขของแต่ละธนาคาร ตามลิงค์ [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909) **CR **เมื่อวันที่22/02/2564** :เงื่อนไขที่แก้มีตามลิงค์นี้>>**[ธนาคาแจ้งขอเปลี่ยนแปลงรูปแบบการกำหนดเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850854005) | Mandatoryอักขระ 11 ตัวFormat : 0 ตามด้วย เลขที่บัญชีผู้รับเงิน/ผู้รับประโยชน์ |
| 6 | Value date | วันที่โอนเงินให้ผู้รับ | 8 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 7 | Value time | เวลาคิดมูลค่าสำหรับการชำระเงิน | 6 | ค่าว่าง | OptionalFormat :HH24MMSS |
| 8 | Credit Currency | รหัสสกุลเงิน | 3 | 'THB' | MandatoryCurrency Code will be THB |
| 9 | Internal Reference | หมายเลขอ้างอิงลูกค้า | 18 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).PAYMENT_NO[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TRAN_IDPOLICY_NOปรับเพิ่มที่โครงการ Prompt Pay 02/06/2023ให้ระบบตรวจสอบว่าฟิลด์ "Product code" เป็น "SMC06" หรือไม่ ถ้า ใช่ ให้ระบบดำเนินการตรวจสอบจำนวนเงินที่มากกว่าสองล้าน (> 2000000) ให้ทำการ Split หลายรายการรายการField : Internal Referenceตัวอย่างจำนวนเงิน1PY_TRANSACTION.PAYMENT_NO+"_1"PY-20230512-00014_12,000,000.002PY_TRANSACTION.PAYMENT_NO+"_2"PY-20230512-00014_22,000,000.003PY_TRANSACTION.PAYMENT_NO+"_3"PY-20230512-00014_340,000.00 | Conditionalเป็นข้อมูลของฝั่ง Payment ที่อ้างอิงถึงลูกค้า อาจเป็น เลขที่กรมธรรม์ /เลขที่อ้างอิงรายการจ่าย |
| รายการ | Field : Internal Reference | ตัวอย่าง | จำนวนเงิน |
| 1 | PY_TRANSACTION.PAYMENT_NO+"_1" | PY-20230512-00014_1 | 2,000,000.00 |
| 2 | PY_TRANSACTION.PAYMENT_NO+"_2" | PY-20230512-00014_2 | 2,000,000.00 |
| 3 | PY_TRANSACTION.PAYMENT_NO+"_3" | PY-20230512-00014_3 | 40,000.00 |
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
| 22 | WHT Form Type |   | 1 | ค่าว่าง | Conditional |
| 23 | WHT serial no. |   | 14 | ค่าว่าง | Conditional |
| 24 | WHT book no. |   | 14 | ค่าว่าง | Conditional |
| 25 | WHT Running No. |   | 6 | ค่าว่าง | Conditional |
| 26 | BahtNet Payment type code |   | 3 | ค่าว่าง | Conditional |
| 27 | BOT service type of payment |   | 2 | '04' | Mandatory |
| 28 | No. of WHT Details |   | 2 | ค่าว่าง | Conditional |
| 29 | Total WHT Amount |   | 16 | ค่าว่าง | Conditional |
| 30 | No. Of Invoice Details |   | 6 | ค่าว่าง | Conditional |
| 31 | Total Invoice Amount |   | 16 | ค่าว่าง | Conditional |
| 32 | Total DiTotal Discount Amountscount Amount |   | 16 | ค่าว่าง | Conditional |
| 33 | Payee charge code | รหัสค่าธรรมเนียมผู้รับเงิน | 3 | กรณี ประเภทการเจ่าย เป็น สินไหมมรณกรรม (CL_D) ให้Set Value 'BEN'กรณีประเภทการจ่าย ไม่เป็น สินไหมมรณกรรม (CL_D) ให้Set Value 'OUR' | Mandatoryกรณีเป็นผู้รับประโยชน์ ให้ Set 'BEN'กรณีเป็นผู้รับเงิน(ผู้เอาประกัน) ให้ Set OUR |
| 34 | Payment Net amount (Credit amount) | จำนวนเงินจ่ายสุทธิ | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| 35 | WHT Pay Type |   | 1 | ค่าว่าง |   |
| 36 | WHT Remark |   | 40 | ค่าว่าง |   |
| 37 | WHT Deduct Date |   | 8 | ค่าว่าง |   |
| 38 | Receiving Bank Code | รหัสธนาคารที่รับเงิน | 3 | [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).bot_bank_code | Mandatoryใช้เลขที่อ้างอิงธนาคาร |
| 39 | Receiving Branch Code | รหัสสาขาธนาคารที่รับเงิน | 4 | ให้นำ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNTปรับแก้เมื่อ Go live ได้ประมาณ 1 เดือน ให้กำหนดรูปแบบตามเงื่อนไขของแต่ละธนาคาร ตามลิงค์ [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909) **CR **เมื่อวันที่22/02/2564** :เงื่อนไขที่แก้มีตามลิงค์นี้>>**[ธนาคาแจ้งขอเปลี่ยนแปลงรูปแบบการกำหนดเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850854005) | MandatoryFormat : 0 ตามด้วย 3 ตัวแรก ของเลขที่บัญชี |
| 40 | WHT Signatory |   | 1 | ค่าว่าง |   |
| 41 | Service Code |   | 30 | ค่าว่าง |   |
| 42 | Beneficiary Code |   | 30 | ค่าว่าง |   |
| 43 | Payee1 ID Card |   | 15 | ค่าว่าง |   |
| 44 | Payee Name | คำนำหน้าชื่อ - นามสกุลผู้รับเงิน | 100 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME | Mandatoryอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space , |
| ` $ ( ) _ - + = \ : ; / . Space , |
| 45 | Payee Address 1 |   | 50 | ค่าว่าง | Optionalอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| 46 | Payee Address 2 |   | 50 | ค่าว่าง |
| 47 | Payee Address 3 |   | 50 | ค่าว่าง |
| 48 | Payee Address 4 |   | 50 | ค่าว่าง |
| 49 | Dispatch Address 1 |   | 50 | ค่าว่าง |
| 50 | Dispatch Address 2 |   | 50 | ค่าว่าง |
| 51 | Dispatch Address 3 |   | 50 | ค่าว่าง |
| 52 | Dispatch Address 4 |   | 50 | ค่าว่าง |
| 53 | Payee Tax ID |   | 15 | ค่าว่าง | Conditional |
| 54 | Payee Fax Number |   | 20 | ค่าว่าง | Conditional |
| 55 | Payee Mobile Phone Number |   | 20 | ค่าว่าง | Conditional |
| 56 | Payee E-mail Address |   | 70 | ค่าว่าง | Conditional อนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| Ex. Details Record : 003~OCEANIN~1~SMC06~05492057765~14062019~~THB~1247805~14062019~~~~~~~~~Y~~~~~~~~04~~~~~~OUR~1500000~~~~073~0000~~~~~นางดลฤทัย ปาสาทิกา~~~~~~~~~~~~ |
| **Footer Details** |   |   |   |   |   |
| 1 | Record Identifier | รหัสระบุ Record | 3 | '100' | Mandatory |
| 2 | Total No. of Credits | จำนวนรายการทำจ่ายทั้งหมด | 6 | Count of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TRAN_ID | Mandatory |
| 3 | Total Amount | จำนวนเงินทำจ่ายทั้งหมด | 16 | Sum of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| Ex. Footer Details : 100~272~260982758 |

  - Post-conditions
  - <สิ่งที่จะเกิดขึ้นหรือเป็นผลมาจากการทำ process นี้>

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [OCEANIN_SMC06_13062019_0822.txt](http://wiki.thaisamut.co.th/download/attachments/683475216/OCEANIN_SMC06_13062019_0822.txt?version=1&modificationDate=1568774447843&api=v2)
- [Common File Format for SMART_Standard.pdf](http://wiki.thaisamut.co.th/download/attachments/683475216/Common%20File%20Format%20for%20SMART_Standard.pdf?version=1&modificationDate=1568774460474&api=v2)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909)
- [ธนาคาแจ้งขอเปลี่ยนแปลงรูปแบบการกำหนดเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850854005)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [>>หลักการบันทึกรหัสสาขา และเลขที่บัญชี<<](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=758415909)
- [ธนาคาแจ้งขอเปลี่ยนแปลงรูปแบบการกำหนดเลขที่บัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850854005)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/683475216/OCEANIN_SMC06_13062019_0822.txt?version=1&modificationDate=1568774447843&api=v2
- http://wiki.thaisamut.co.th/download/attachments/683475216/Common%20File%20Format%20for%20SMART_Standard.pdf?version=1&modificationDate=1568774460474&api=v2
