# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (SCB) (ORFT)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 942866433
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=942866433

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)(ORFT)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)(ORFT)-ProcessOverview) ] [ [Precondition](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)(ORFT)-Precondition) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)(ORFT)-ProcessDescription) ]

## Objectives

1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารไทยพานิชย์ (SCB) เพื่อโอนให้ธนาคารอื่น (ORFT)

## Process Overview

1. เมื่อมีการส่งรายการโอนเงินให้ ลูกค้าเข้าระบบ Claim payment เรียบร้อยแล้ว
2. ดาวน์โหลด Text file เพื่อส่งให้ธนาคาร

## Precondition

1. เป็นรายการที่ทำการโอนเงินให้ลูกค้า แบบด่วนผ่านธนาคาร SCB ไปยัง ธนาคารอื่น

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_SCB_ORFT_ddmmyyyy_hhmmss.txtOCEANIN_SCB_ORFT =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_SCB_ORFT_21092021_100040.txt |
|---|---|
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ไม่มี |
| ตัวอย่างไฟล์ | ตัวอย่าง : [https://drive.google.com/file/d/1k19eq_OI2d2lrVuJPQJEH_BWBz6w9Iyx/](https://drive.google.com/file/d/1k19eq_OI2d2lrVuJPQJEH_BWBz6w9Iyx/view?usp=sharing)รายละเอียดของ Format : [https://docs.google.com/spreadsheets/d/1KRLCTtPkDFWickdAqNcGeKbVGCegsn--1tJ0OTctfnc/](https://docs.google.com/spreadsheets/d/1KRLCTtPkDFWickdAqNcGeKbVGCegsn--1tJ0OTctfnc/edit?usp=sharing) |

**2.Mapping Data ตามรายละเอียดนี้**
****

| Record Type | FLD | FIELD NAME | DATA TYPE | LENGTH | POSITION | Mandatory | Remark for Import File | **Mapping field** |
|---|---|---|---|---|---|---|---|---|
| From | To |
| 001 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "001" | Fix "001" |
| Header | 2 | Company Id | C | 12 | 4 | 15 | Y | S1 Corporate ID | fix CBZ2271 |
|   | 3 | Description | C | 32 | 16 | 47 | Y | Customer Reference of Description | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO EX.Deposit_Pay----> D20220602001 |
|   | 4 | Message/File Date | D | 8 | 48 | 55 | Y | Date of generate/extract data | วันที่ดาวน์โหลดไฟล์ |
|   | 5 | Message/File Time | T | 6 | 56 | 61 | Y | Time of generate/extract data | เวลาที่ดาวน์โหลดไฟล์ |
|   | 6 | Channel ID | C | 3 | 62 | 64 | Y | Fix "BCM" | Fix "BCM" |
|   |   |   |   | 64 |   |   |   |   |   |
| 002 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "002" |   |
| Debit Detail | 2 | Product Code | C | 3 | 4 | 6 | Y | Product Code |   |
|   |   |   |   |   |   |   |   | RFT : Promptpay actual account ใช้ code นี้ | RFT |
|   |   |   |   |   |   |   |   | PPY : Prompt Pay |   |
|   | 3 | Value Date | D | 8 | 7 | 14 | Y | วันที่โอนเงิน | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE |
|   | 4 | Tax ID | C | 13 | 15 | 27 | N | Tax ID | 0107555000210 |
|   | 5 | Debit Account No | C | 25 | 28 | 52 | Y | From A/C no. | [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK).bank_accountSCB_ORFT 0642023333 |
|   | 6 | Account Type of Debit Account | N | 2 | 53 | 54 | N | "0" + 4th Digit of A/C no. | 02fix 0 ตัวแรก และ เลขบัญชีหลักที่ 4 |
|   | 7 | Debit Branch Code | N | 4 | 55 | 58 | N | "0" + 1st to 3rd Digit of A/C no. | 0064fix 0 ตัวแรก และ เลขบัญชีหลักที่ 1-3 |
|   | 8 | Debit Currency | C | 3 | 59 | 61 | Y | รองรับทั้ง THB และ FCD | THB |
|   | 9 | Debit Amount | A | 16 | 62 | 77 | Y | Debit Amount = Sum (Credit Amount) which related Debit record | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT |
|   | 10 | Internal Reference | C | 8 | 78 | 85 | Y | For ref. By Credit Record | สำหรับ Ref กับCredit |
|   | 11 | No. of Credits | N | 6 | 86 | 91 | Y | Total count credit record | จำนวน Record ของ รายการที่ทำจ่ายใน textfile นี้ |
|   | 12 | Fee Debit Account | C | 15 | 92 | 106 | Y | บัญชีที่จ่ายค่าธรรมเนียมFee A/C no. | [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK).bank_accountSCB_ORFT 0642023333 |
|   | 13 | Account Type (Fee) | N | 2 | 107 | 108 | N | "0" + 4th Digit of Fee A/C no. | 02fix 0 ตัวแรก และ เลขบัญชีหลักที่ 4 |
|   | 14 | Debit Branch Code (Fee) | N | 4 | 109 | 112 | N | "0" + 1st to 3rd Digit of Fee A/C no. | 0064fix 0 ตัวแรก และ เลขบัญชีหลักที่ 1-3 |
|   | 15 | Transaction Reference | C | 32 | 113 | 144 | N |   | Space |
|   |   |   |   | 144 |   |   |   |   |   |
| 003 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "003" |   |
| Credit Detail | 2 | Credit Sequence Number | N | 6 | 4 | 9 | Y | Credit seq. restart from 1 for each Debit | ลำดับรายการเริ่มต้นที่ 1 |
|   | 3 | Credit Account | C | 25 | 10 | 34 | Y | Actual credit account base on account passbook and accept only numericเลขที่บัญชีผู้รับเงินเลขบัญชีผู้รับเงิน จะต้องมีการ ตัดตัวเลข โดยมีรายละเอียดดังนี้ [Link](https://docs.google.com/spreadsheets/d/1lapbHy8h2qyxfvj3Cnyhvxe411dW53hryeqjXSKL8jc/edit?hl=th&forcehl=1#gid=1390912075)Update By nattapong.che on 01/08/2024 UR20240204 ปรับเพิ่มการตัดเลขที่บัญชีธนาคารมิซูโฮ เนื่องจากมีตัวอักษรในเลขที่บัญชีทำการตรวจสอบเงื่อนไขการบันทึกเลขที่บัญชี ตาม[หลักการบันทึกเลขที่บัญชีสำหรับโอนต่างธนาคาร ของธนาคารไทยพาณิชย์ (ORFT)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1179189384) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).bank_account |
|   | 4 | Beneficiary Name | C | 70 | 35 | 104 | N | Accept both Thai and English character | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).bank_account_name |
|   | 5 | Credit Amount | A | 16 | 105 | 120 | Y | Cannot be zero and not over than 50,000 THB | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT |
|   | 6 | Credit Currency | C | 3 | 121 | 123 | Y | รองรับทั้ง THB และ FCD | THB |
|   | 7 | Receiving Bank Name | C | 35 | 124 | 158 | N | ชื่อธนาคารผู้รับเงิน | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_CODEแล้วนำ Bankcode ไปหา ที่ [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).bank_abbr_name |
|   | 8 | Receiving Bank Code | N | 4 | 159 | 162 | N | รหัสธนาคารผู้รับ (ยกเลิกการเป็น mandatory เนื่องจากการโอน Prompt Pay ไม่จำเป็นต้องใช้ Field นี้) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_CODEแล้วนำ Bankcode ไปหา ที่ [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER).bot_bank_code |
|   | 9 | CID No. / Tax ID | C | 13 | 163 | 175 | N | รหัสบัตรประชาชน หรือ Tax ID |   |
|   | 10 | Mobile No. | C | 10 | 176 | 185 | N | เบอร์โทรศัพท์ |   |
|   | 11 | Internal Reference | C | 8 | 186 | 193 | Y | Ref. To Debit record | จำนวนรายการของ Debit (โดยปกติจะเท่ากับ1) |
|   | 12 | Transaction Remark | C | 32 | 194 | 225 | N | Remark for each beneficiary | ใช้ Ref กับไฟล์ขาคืน |
|   | 13 | Proxy Type | C | 3 | 226 | 228 | N | ประเภท Proxy สำหรับรายการ Promptpay มีค่าดังนี้ - TAX = Tax ID - NAT = National ID - MOB = Mobile No. |   |
|   | 14 | Filler | C | 46 | 229 | 274 | N | Space |   |
|   |   |   |   | 274 |   |   |   |   |   |
| 999 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "999" |   |
| Trailer | 2 | Total No. of Debits | N | 6 | 4 | 9 | Y | Total count all Debit rec. | จำนวนรายการของ Debit (โดยปกติจะเท่ากับ1) |
|   | 3 | Total No. of Credits | N | 6 | 10 | 15 | Y | Total count all Credit rec. | จำนวน Record ของ รายการที่ทำจ่ายใน textfile นี้ (Credit) |
|   | 4 | Total Amount | N | 16 | 16 | 31 | Y | Total Amount | จำนวนเงินทั้งหมด |
|   |   |   |   | 31 |   |   |   |   |   |

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [https://drive.google.com/file/d/1k19eq_OI2d2lrVuJPQJEH_BWBz6w9Iyx/](https://drive.google.com/file/d/1k19eq_OI2d2lrVuJPQJEH_BWBz6w9Iyx/view?usp=sharing)
- [https://docs.google.com/spreadsheets/d/1KRLCTtPkDFWickdAqNcGeKbVGCegsn--1tJ0OTctfnc/](https://docs.google.com/spreadsheets/d/1KRLCTtPkDFWickdAqNcGeKbVGCegsn--1tJ0OTctfnc/edit?usp=sharing)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK)
- [Link](https://docs.google.com/spreadsheets/d/1lapbHy8h2qyxfvj3Cnyhvxe411dW53hryeqjXSKL8jc/edit?hl=th&forcehl=1#gid=1390912075)
- [หลักการบันทึกเลขที่บัญชีสำหรับโอนต่างธนาคาร ของธนาคารไทยพาณิชย์ (ORFT)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1179189384)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BANK_MASTER](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BANK_MASTER)
