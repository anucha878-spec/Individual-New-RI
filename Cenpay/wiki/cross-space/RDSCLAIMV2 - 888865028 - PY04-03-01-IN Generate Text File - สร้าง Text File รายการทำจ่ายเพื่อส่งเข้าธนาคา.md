# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (BBL)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 888865028
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=888865028

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL)-ProcessOverview) ] [ [Preconditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL)-Preconditions) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL)-ProcessDescription) ] [ [Post-conditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(BBL)-Post-conditions) ]

## Objectives

- <อธิบายวัตถุประสงค์ของ process นี้>
1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารกรุงเทพ BBL

## Process Overview

<อธิบายภาพรวมของ process นี้>

## Preconditions

- <เงื่อนไขที่ต้องเกิดขึ้นก่อนที่จะดำเนินการ process นี้> 1. เป็นรายการทำจ่ายที่ Generate File SAP แล้ว

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_PYR02_ddmmyyyy_hhmmss.txtOCEANIN_PYR02_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_PYR02_21092021_100040.txt![(star)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) กรณีที่มีรายการมากกว่า 3000 รายการ จะต้องแยกไฟล์ใหม่ ชื่อไฟล์ใหม่ให้เติม _1 ดังนี้ OCEANIN_PYR02_21092021_100040_1.txtและ ตอนดาวน์โหลดจะโหลดเป็น zip file โดยให้ใช้ชื่อเดียวกับชื่อของ file แรก ดังนี้ OCEANIN_PYR02_21092021_100040.ZIP |
|---|---|
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ตัวคั่นสำหรับแต่ละฟิลด์จะเป็น ~ |
| ตัวอย่างไฟล์ | ตัวอย่าง : [BBL-25620703172526.txt](/download/attachments/888865028/BBL-25620703172526.txt?version=1&modificationDate=1629278757781&api=v2)รายละเอียดของ Format : [Common File Format for Payroll.xls](/download/attachments/888865028/Common%20File%20Format%20for%20Payroll.xls?version=1&modificationDate=1629278703777&api=v2) |

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

| Header-001 |
|---|
| **Sr. No.** | **Field Name** | **Description** | **Type** | **Length** | **Field_Col** | **Business Rule** | **Product** | **Special Character allow** |
| 1 | Record Type |   | Varchar | 3 | FIX : 001 | M | All |   |
| 2 | Company Id |   | Varchar | 20 | FIX :OCEANIN | M | All |   |
| 3 | Company Tax Id |   | Varchar | 15 |   | M | All |   |
| 4 | Company Account |   | Varchar | 20 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).COMPANY_BANK_ACCOUNTpy_company_bank.bank_account | M | All |   |
| 5 | Customer Batch Reference |   | Varchar | 25 | FIX :00001FIX:OCEANIN | M | All |   |
| 6 | Batch Broadcast message |   | Varchar | 5 | ค่าว่าง | O | All |   |
| 7 | File Date |   | Varchar | 8 | Format ddMMyyyy (new Date())(วันที่นำส่ง text file upload ให้ธนาคาร) | M | All |   |
| 8 | File Timestamp |   | Varchar | 6 | (new Date()) HH24MMSS format. | M | All |   |
|   |
| **Details Record - 003** |
| **Sr. No.** | **Field Name** |   | **Type** | **Length** | **Field_Col** | **Status** | **Product** | **Special Character allow** |
| 1 | Record Type |   | Varchar | 3 | FIX :003 | M | All |   |
| 2 | Company Id |   | Varchar | 20 | FIX :OCEANIN | M | All |   |
| 3 | Credit Sequence Number |   | Numeric | 6 | Running serial number in the filestarts with 1 and incremented by 1 such as 1,2,3,4,... | M | All |   |
| 4 | Product code |   | Varchar | 5 | FIX :PYR02 | M | All |   |
| 5 | Beneficiary Account Number |   | Varchar | 25 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT | M | All for wire payment services |   |
| 6 | Value date |   | Varchar | 8 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE | M | All |   |
| 7 | Value time |   | Varchar | 6 | time_stamp ตอนที่สร้าง record นี้Format : HH24MISS(ระบุหรือไม่ระบุก็ได้) | O | All |   |
| 8 | Credit Currency |   | Varchar | 3 | FIX :THB | M | All |   |
| 9 | Internal Reference |   | Varchar | 18 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).REF_NOPY_TRANSACTION.payment_noPY_TRANSACTION.ref_no_bank | C | All |   |
| 10 | Pre-advice date |   | Varchar | 8 | ค่าว่าง | O | All |   |
| 11 | Delivery Method |   | Varchar | 2 | ค่าว่าง | C | For Chq Pmt only |   |
| 12 | Dispatch To |   | Varchar | 2 | ค่าว่าง | C | For Chq Pmt only |   |
| 13 | Cheque deposit Required |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 14 | Copy ID card Present |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 15 | WHT Present |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 16 | Invoice Details Present |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 17 | VAT Present |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 18 | Receipt Present |   | Varchar | 1 | ค่าว่าง | C | For Chq Pmt only |   |
| 19 | Credit Advice Required |   | Varchar | 1 | FIX :Y | M | All |   |
| 20 | Cheque drawn on location |   | Varchar | 4 | ค่าว่าง | C | For Chq Pmt only |   |
| 21 | Dispatch Branch Code |   | Varchar | 4 | ค่าว่าง | C | For Chq Pmt only |   |
| 22 | WHT Form Type |   | Varchar | 1 | ค่าว่าง | C | All except BP & PYR |   |
| 23 | WHT serial no. |   | Varchar | 14 | ค่าว่าง | C | All except BP & PYR |   |
| 24 | WHT book no. |   | Varchar | 14 | ค่าว่าง | C | All except BP & PYR | space |
| 25 | WHT Running No. |   | Varchar | 10 | ค่าว่าง | C | All except BP & PYR |   |
| 26 | BahtNet Payment type code |   | Varchar | 3 | ค่าว่าง | C | Only for BAHTNET |   |
| 27 | BOT service type of payment |   | Varchar | 2 | ค่าว่าง | C | Only for SMART |   |
| 28 | No. of WHT Details |   | Varchar | 2 | ค่าว่าง | C | All except BP & PYR |   |
| 29 | Total WHT Amount |   | Numeric | 16 | ค่าว่าง | C | All except BP & PYR |   |
| 30 | No. Of Invoice Details |   | Numeric | 6 | ค่าว่าง | C | All except BP & PYR |   |
| 31 | Total Invoice Amount |   | Numeric | 16 | ค่าว่าง | C | All except BP & PYR |   |
| 32 | Total Discount Amount |   | Numeric | 16 | ค่าว่าง | C | All except BP & PYR |   |
| 33 | Payee charge code |   | Varchar | 3 | FIX :OUR | M | All |   |
| 34 | Payment Net amount (Credit amount) |   | Varchar | 16 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT | M | All |   |
| 35 | WHT Pay Type |   | Varchar | 1 | ค่าว่าง | C | All except BP & PYR |   |
| 36 | WHT Remark |   | Varchar | 40 | ค่าว่าง | C | All except BP & PYR |   |
| 37 | WHT Deduct Date |   | Varchar | 8 | ค่าว่าง | C | All except BP & PYR |   |
| 38 | Receiving Bank Code |   | Varchar | 3 | 002 | M | All for wire payment services |   |
| 39 | Receiving Branch Code |   | Varchar | 4 | 0+ 3 หลักแรกของ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT | M | All for wire payment services |   |
| 40 | WHT Signatory |   | Varchar | 1 | ค่าว่าง | C | All except BP & PYR |   |
| 41 | Service Code |   | Varchar | 30 | ค่าว่าง | C | Applicable to BP only |   |
| 42 | Beneficiary Code |   | Varchar | 30 | ค่าว่าง | C | All |   |
| 43 | Payee1 ID Card |   | Varchar | 15 | ค่าว่าง | C | For Chq Pmt only |   |
| 44 | Payee Name |   | Varchar | 100 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME | M | All | ` $ ( ) _ - + = \ : ; / . Space , |
| 45 | Payee Address 1 |   | Varchar | 70 | ค่าว่าง | O | All | ` $ ( ) _ - + = \ : ; / . Space ! # [ ] { } ? \| ^ |
| 46 | Payee Address 2 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 47 | Payee Address 3 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 48 | Payee Address 4 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 49 | Dispatch Address 1 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 50 | Dispatch Address 2 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 51 | Dispatch Address 3 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 52 | Dispatch Address 4 |   | Varchar | 70 | ค่าว่าง | O | All |   |
| 53 | Payee Tax ID |   | Varchar | 15 | ค่าว่าง | C | All |   |
| 54 | Payee Fax Number |   | Varchar | 20 | ค่าว่าง | C | All |   |
| 55 | Payee Mobile Phone Number |   | Varchar | 20 | ค่าว่าง | C | All |   |
| 56 | Payee E-mail Address |   | Varchar | 70 | ค่าว่าง | C | All | ` $ ( ) _ - + = \ : ; / . Space @ # % ^ * \| " ? |
|   |
| **Footer Details - 100** |
| **Sr. No.** | **Field Name** |   | **Type** | **Length** | **Remarks** | **Status** | **Product** | **Special Character Not allow** |
| 1 | Record Identifier |   | Varchar | 3 | FIX :100 | M | All |   |
| 2 | Total No. of Credits |   | Varchar | 6 | จำนวนรายการที่ส่งข้อมุล ตัวเลขสุดท้ายของ running number | M | All |   |
| 3 | Total Amount |   | Varchar | 16 | sum จำนวนเงินรวมด้านบน | M | All |   |
|   |

  - Post-conditions
  - <สิ่งที่จะเกิดขึ้นหรือเป็นผลมาจากการทำ process นี้>

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [BBL-25620703172526.txt](http://wiki.thaisamut.co.th/download/attachments/888865028/BBL-25620703172526.txt?version=1&modificationDate=1629278757781&api=v2)
- [Common File Format for Payroll.xls](http://wiki.thaisamut.co.th/download/attachments/888865028/Common%20File%20Format%20for%20Payroll.xls?version=1&modificationDate=1629278703777&api=v2)
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
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/888865028/BBL-25620703172526.txt?version=1&modificationDate=1629278757781&api=v2
- http://wiki.thaisamut.co.th/download/attachments/888865028/Common%20File%20Format%20for%20Payroll.xls?version=1&modificationDate=1629278703777&api=v2
