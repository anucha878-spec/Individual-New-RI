# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (BBL-PromptPay)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 968983094
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=968983094

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-PromptPay)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-PromptPay)-ProcessOverview) ] [ [Precondition](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-PromptPay)-Precondition) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL-PromptPay)-ProcessDescription) ]

## Objectives

1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารกรุงเทพ (PromptPay)

## Process Overview

1. เมื่อมีการส่งรายการโอนเงินให้ เข้าระบบ Claim payment เรียบร้อยแล้ว
2. ดาวน์โหลด Text file เพื่อส่งให้ธนาคาร

## Precondition

1. เป็นรายการที่ทำการรวบรวมคำสั่งซื้อกองทุนเพื่อทำการโอนเงินให้กับ บลจ

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_BBL_PromptPay_ddmmyyyy_hhmmss.txtไฟล์ที่ชื่อไฟล์ตัวอย่างจำนวนรายการ1OCEANIN_BBL_PromptPay_ddmmyyyy_hhmmss_1.txtOCEANIN_BBL_PromptPay_11032022_134646_1.txt30002OCEANIN_BBL_PromptPay_ddmmyyyy_hhmmss_2.txtOCEANIN_BBL_PromptPay_11032022_134646_2.txt2400 OCEANIN_BBL_PromptPay_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_BBL_PromptPay_11032022_134646.txt |
|---|---|
| ไฟล์ที่ | ชื่อไฟล์ | ตัวอย่าง | จำนวนรายการ |
| 1 | OCEANIN_BBL_PromptPay_ddmmyyyy_hhmmss_1.txt | OCEANIN_BBL_PromptPay_11032022_134646_1.txt | 3000 |
| 2 | OCEANIN_BBL_PromptPay_ddmmyyyy_hhmmss_2.txt | OCEANIN_BBL_PromptPay_11032022_134646_2.txt | 2400 |
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ตัวคั่นสำหรับแต่ละฟิลด์จะเป็น ~ |
| ตัวอย่างไฟล์ | ตัวอย่าง : [https://drive.google.com/drive/folders/1ZwsazdoNODmij1hgeBULRVTfp3Ymno5t](https://drive.google.com/drive/folders/1ZwsazdoNODmij1hgeBULRVTfp3Ymno5t)รายละเอียดของ Format :[https://docs.google.com/spreadsheets/d/1Q_QcwxJAPBZWBw6W_MwkPUh3dG6JpXZO/edit#gid=822827157](https://docs.google.com/spreadsheets/d/1Q_QcwxJAPBZWBw6W_MwkPUh3dG6JpXZO/edit#gid=822827157) |

**ขั้นตอนการ Mapping Data ดังนี้**
1.ดึงข้อมูลจาก Table ดังนี้
**ดึงข้อมูลจาก Table**

| Table Name | Table Relations | Conditions | Description of Conditions | Remark |
|---|---|---|---|---|
| [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH) |   | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID =@BATCH_PAYMENT_ID | รหัส BATCH ปฏิบัติการ | รับค่ามาจากหน้าจอ |
| [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BATCH_PAYMENT_ID = [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_ID | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).STATUS_CODE in ('T009','T010') | สถานะการจ่ายเงิน | รายการหลังจาก Gen SAP (ครั้งแรก)T009 =รอ Download File ทำจ่ายรายการที่หลังตรวจสอบ Format เลขที่บัญชี (ครั้งที่ 2.....n)T010 =Download File ทำจ่ายสำเร็จ |
| [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER) | Left Join [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ID = [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).ID | [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).data_status='A' | รหัสข้อมูล - Auto Increment |   |

2.นำรายการจากข้อ 1 เพื่อ Generate File ดังนี้ >>> Mapping ใหม่

| # | คำอธิบาย Column "Type" |
|---|---|
| 1 | "A" under Data Type section represents Alpha Numeric data type |
| 2 | "N" under Data Type section = Numeric data type |

|   | Text Field Name | Description | Type | Length | Set Value | Business Rule |
|---|---|---|---|---|---|---|
| **Header Record** |   |   |   |   |   |   |
| 1 | Record Type | รหัสระบุ Record | A | 3 | '001' | Mandatory |
| 2 | Company Id | รหัสบริษัท | A | 20 | @Company Id | Mandatoryex. 'OCEANIN' |
| 3 | Company Tax Id | รหัสภาษีบริษัท | A | 15 | @CompanyTaxId | Mandatoryex.'0107555000210' |
| 4 | Company Account | บัญชีบริษัท | A | 20 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).COMPANY_BANK_ACCOUNT[PY_COMPANY_BANK](/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK).BANK_ACCOUNT | Mandatoryex.9253004924 |
| 5 | Customer Batch Reference | การอ้างอิงแบทช์ลูกค้า | A | 25 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO@Company Id | Mandatory |
| 6 | Batch Broadcast message |   | A | 5 | ค่าว่าง | Optional |
| 7 | File Date | วันที่Generate File | N | 8 | System Date | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 8 | File Timestamp | เวลา Generate File | N | 6 | Time of System Date | MandatoryFormat :HH24MMSS |
| Ex. Header : 001~OCEANIN~0107555000210~9253004924~OCEANIN~~13062019~082241 |
| **Details Record** |   |   |   |   |   |   |
| 1 | Record Type | รหัสระบุ Record | A | 3 | '003' | Mandatory |
| 2 | Company Id | รหัสบริษัท | A | 20 | @Company Id | Mandatoryex.'OCEANIN' |
| 3 | Credit Sequence Number | Running No | N | 6 | Running serial number in the filestarts with 1 and incremented by 1 such as 1,2,3,4,... | Mandatory |
| 4 | Product code | Code ของธนาคาร | A | 5 | 'PPP06' | Mandatory |
| 5 | Client Account Number | เลขที่บัญชีผู้รับเงิน/ผู้รับประโยชน์ | A | 25 | 1.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).prompt_type = I ให้กำหนด "I"ตามด้วย [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).IDENTIFICATION_NO [PY_TRANSACTION](/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT [![img](http://jira.thaisamut.co.th/images/icons/issuetypes/exclamation.png)PBLMG-5390](http://jira.thaisamut.co.th/browse/PBLMG-5390) - เลขที่พร้อมเพย์ของลูกค้าใน Text file นำส่งธนาคารแสดงไม่ถูกต้อง [PY-TP-20240305-00001] (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) 2.กรณีที่ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).prompt_type = M ให้กำหนด "M"ตามด้วย [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).PAYEE_TEL_NO [PY_TRANSACTION](/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT | Mandatory |
| 6 | Value date | วันที่โอนเงินให้ผู้รับ | N | 8 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE | MandatoryFormat : DDMMYYYY(ค.ศ.) |
| 7 | Value time | เวลาคิดมูลค่าสำหรับการชำระเงิน | N | 6 | ค่าว่าง | OptionalFormat :HH24MMSS |
| 8 | Credit Currency | รหัสสกุลเงิน | A | 3 | 'THB' | MandatoryCurrency Code will be THB |
| 9 | Internal Reference | หมายเลขอ้างอิงลูกค้า | A | 18 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).ref_no_bankปรับเพิ่มที่โครงการ Prompt Pay 02/06/2023ให้ระบบตรวจสอบว่าฟิลด์ "Product code" เป็น "PPP06" หรือไม่ ถ้า ใช่ ให้ระบบดำเนินการตรวจสอบจำนวนเงินที่มากกว่าสองล้าน (> 2000000) ให้ทำการ Split หลายรายการรายการField : Internal Referenceตัวอย่างจำนวนเงิน1PY_TRANSACTION.ref_no_bank+"_1"PY-20230512-00014_12,000,000.002PY_TRANSACTION.ref_no_bank+"_2"PY-20230512-00014_22,000,000.003PY_TRANSACTION.ref_no_bank+"_3"PY-20230512-00014_340,000.00 | Conditionalเป็นข้อมูลของฝั่ง Payment ที่อ้างอิงถึงลูกค้า อาจเป็น เลขที่กรมธรรม์ /เลขที่อ้างอิงรายการจ่าย |
| รายการ | Field : Internal Reference | ตัวอย่าง | จำนวนเงิน |
| 1 | PY_TRANSACTION.ref_no_bank+"_1" | PY-20230512-00014_1 | 2,000,000.00 |
| 2 | PY_TRANSACTION.ref_no_bank+"_2" | PY-20230512-00014_2 | 2,000,000.00 |
| 3 | PY_TRANSACTION.ref_no_bank+"_3" | PY-20230512-00014_3 | 40,000.00 |
| 10 | Pre-advice date | วันที่แจ้งไปยังผู้รับเงิน / ผู้รับผลประโยชน์ | N | 8 | ค่าว่าง | OptionalFormat : DDMMYYYY(ค.ศ.) |
| 11 | Delivery Method |   | N | 2 | ค่าว่าง | Conditional |
| 12 | Dispatch To |   | N | 2 | ค่าว่าง | Conditional |
| 13 | Cheque deposit Required |   | A | 1 | ค่าว่าง | Conditional |
| 14 | Copy ID card Present |   | A | 1 | ค่าว่าง | Conditional |
| 15 | WHT Present |   | A | 1 | ค่าว่าง | Conditional |
| 16 | Invoice Details Present |   | A | 1 | ค่าว่าง | Conditional |
| 17 | VAT Present |   | A | 1 | ค่าว่าง | Conditional |
| 18 | Receipt Present |   | A | 1 | ค่าว่าง | Conditional |
| 19 | Credit Advice Required |   | A | 1 | 'Y' | MandatoryThis shall have value as Y/N. |
| 20 | Cheque drawn on location |   | A | 4 | ค่าว่าง | Conditional |
| 21 | Dispatch Branch Code |   | A | 4 | ค่าว่าง | Conditional |
| 22 | WHT Form Type |   | N | 1 | ค่าว่าง | Conditional |
| 23 | WHT serial no. |   | A | 14 | ค่าว่าง | Conditional |
| 24 | WHT book no. |   | A | 14 | space | Conditional |
| 25 | WHT Running No. |   | N | 6 | ค่าว่าง | Conditional |
| 26 | BahtNet Payment type code |   | A | 3 | ค่าว่าง | Conditional |
| 27 | BOT service type of payment |   | A | 2 | '04' | Mandatory |
| 28 | No. of WHT Details |   | N | 2 | ค่าว่าง | Conditional |
| 29 | Total WHT Amount |   | N | 16 | ค่าว่าง | Conditional |
| 30 | No. Of Invoice Details |   | N | 6 | ค่าว่าง | Conditional |
| 31 | Total Invoice Amount |   | N | 16 | ค่าว่าง | Conditional |
| 32 | Total DiTotal Discount Amountscount Amount |   | N | 16 | ค่าว่าง | Conditional |
| 33 | Payee charge code | รหัสค่าธรรมเนียมผู้รับเงิน | A | 3 | 'OUR' | ประเภทการหักค่าธรรมเนียม OUR = บริษัทรับภาระ BEN = ผู้รับเงินรับภาระ |
| 34 | Payment Net amount (Credit amount) | จำนวนเงินจ่ายสุทธิ | N | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| 35 | WHT Pay Type |   | N | 1 | ค่าว่าง |   |
| 36 | WHT Remark |   | A | 40 | ค่าว่าง |   |
| 37 | WHT Deduct Date |   | N | 8 | ค่าว่าง |   |
| 38 | Receiving Bank Code | รหัสธนาคารที่รับเงิน | N | 3 | ค่าว่าง | Optional |
| 39 | Receiving Branch Code | รหัสสาขาธนาคารที่รับเงิน | N | 4 | ค่าว่าง | Optional |
| 40 | WHT Signatory |   | A | 1 | ค่าว่าง |   |
| 41 | Service Code |   | A | 30 | ค่าว่าง |   |
| 42 | Beneficiary Code |   | N | 30 | ค่าว่าง |   |
| 43 | Payee1 ID Card |   | N | 15 | ค่าว่าง |   |
| 44 | Payee Name | คำนำหน้าชื่อ - นามสกุลผู้รับเงิน | A | 100 | กำหนด คำนำหน้าชื่อ - นามสกุลผู้รับเงิน[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAMEกรณีเกิน 100 ตัวอักษร ให้ ตัด เอาแค่ 100 ตัวเท่านั้น | Mandatoryอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space , |
| ` $ ( ) _ - + = \ : ; / . Space , |
| 45 | Payee Address 1 |   | A | 50 | ค่าว่าง | Optionalอนุญาติให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| 46 | Payee Address 2 |   | A | 50 | ค่าว่าง |
| 47 | Payee Address 3 |   | A | 50 | ค่าว่าง |
| 48 | Payee Address 4 |   | A | 50 | ค่าว่าง |
| 49 | Dispatch Address 1 |   | A | 50 | ค่าว่าง |
| 50 | Dispatch Address 2 |   | A | 50 | ค่าว่าง |
| 51 | Dispatch Address 3 |   | A | 50 | ค่าว่าง |
| 52 | Dispatch Address 4 |   | A | 50 | ค่าว่าง |
| 53 | Payee Tax ID |   | A | 15 | ค่าว่าง | Conditional |
| 54 | Payee Fax Number |   | A | 20 | ค่าว่าง | Conditional |
| 55 | Payee Mobile Phone Number |   | A | 20 | ค่าว่าง | Conditional |
| 56 | Payee E-mail Address |   | A | 70 | ค่าว่าง | Conditionalอนุญาตให้ใช้อักขระพิเศษ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
| Ex. Details Record : 003~OCEANIN~1~PPP06~I1500954541961~14062019~~THB~1247805~14062019~~~~~~~~~Y~~~~~~~~04~~~~~~OUR~1500000~~~~073~0000~~~~~นางดลฤทัย ปาสาทิกา~~~~~~~~~~~~ |
| **Footer Details** |   |   |   |   |   |   |
| 1 | Record Identifier | รหัสระบุ Record | A | 3 | '100' | Mandatory |
| 2 | Total No. of Credits | จำนวนรายการทำจ่ายทั้งหมด | N | 6 | Count of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TRAN_ID | Mandatory |
| 3 | Total Amount | จำนวนเงินทำจ่ายทั้งหมด | N | 16 | Sum of [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT x 100 | Mandatory2 หลักสุดท้าย คือ ทศนิยม 2 ตำแหน่ง |
| Ex. Footer Details : 100~272~260982758 |

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [https://drive.google.com/drive/folders/1ZwsazdoNODmij1hgeBULRVTfp3Ymno5t](https://drive.google.com/drive/folders/1ZwsazdoNODmij1hgeBULRVTfp3Ymno5t)
- [https://docs.google.com/spreadsheets/d/1Q_QcwxJAPBZWBw6W_MwkPUh3dG6JpXZO/edit#gid=822827157](https://docs.google.com/spreadsheets/d/1Q_QcwxJAPBZWBw6W_MwkPUh3dG6JpXZO/edit#gid=822827157)
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
- [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PBLMG-5390](http://jira.thaisamut.co.th/browse/PBLMG-5390)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
