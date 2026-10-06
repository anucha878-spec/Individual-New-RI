# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (KBANK)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 892403960
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=892403960

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KBANK)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KBANK)-ProcessOverview) ] [ [Preconditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KBANK)-Preconditions) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KBANK)-ProcessDescription) ] [ [Post-conditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KBANK)-Post-conditions) ]

## Objectives

- <อธิบายวัตถุประสงค์ของ process นี้>
1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารกสิกร KBANK

## Process Overview

<อธิบายภาพรวมของ process นี้>

## Preconditions

- <เงื่อนไขที่ต้องเกิดขึ้นก่อนที่จะดำเนินการ process นี้> 1. เป็นรายการทำจ่ายที่ Generate File SAP แล้ว

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_KBANK_ddmmyyyy_hhmmss.txtOCEANIN_KBANK_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_KBANK_21092021_100040.txt![(star)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) กรณีที่มีรายการมากกว่า 3000 รายการ จะต้องแยกไฟล์ใหม่ ชื่อไฟล์ใหม่ให้เติม _1 ดังนี้ OCEANIN_KBANK_21092021_100040_1.txtและ ตอนดาวน์โหลดจะโหลดเป็น zip file โดยให้ใช้ชื่อเดียวกับชื่อของ file แรก ดังนี้ OCEANIN_KBANK_21092021_100040.ZIP |
|---|---|
| File type: | .txt |
| File encoding: | TIS-620 |
| Data separate: | - |
| ตัวอย่างไฟล์ | ตัวอย่าง :รายละเอียดของ Format : |

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

| Header |
|---|
|   | Field_File | Filed_Col |
| 1 | Part Identifier | FIX = H |
| 2 | Product Type | FIX = PCT |
| 3 | Batch Ref. | ค่าว่าง |
| 4 | Trans-No | 000000 |
| 5 | Filler | ค่าว่าง |
| 6 | Acct-No | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).COMPANY_BANK_ACCOUNT[py_company_bank](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK).bank_account |
| 7 | Filler | ค่าว่าง |
| 8 | Amount | sum จำนวนเงินด้านล่าง |
| 9 | Filler | ค่าว่าง |
| 10 | Trans-Date | Format วันที่ =(yyMMdd) ปีเดือนวัน = 150120 new Date() วันที่ upload ข้อมูลให้ธนาคาร |
| 11 | Filler | ค่าว่าง |
| 12 | Name | FIX = 'OCEANIN' |
| 13 | Effective-Date | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATEFormat วันที่ =(yyMMdd) ปีเดือนวัน = 150120 |
| 14 | Total Credit Items | จำนวนรายการ เช่น 000000000000000199 หมายถึง 199 รายการ |
| 15 | Charges For A/C Of | N |
| 16 | Customer Branch # | ค่าว่าง |

| Detail |
|---|
|   | Field_File | Filed_Col |
| 1 | Part Identifier | D |
| 2 | Trans-No | หมายเลขรายการเช่น (running number)000001000002000003 |
| 3 | Filler | ค่าว่าง |
| 4 | Acct-No | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNT |
| 5 | Filler | ค่าว่าง |
| 6 | Amount | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT |
| 7 | Filler | ค่าว่าง |
| 8 | Trans-Date | Format วันที่ = (yyMMdd)ปีเดือนวัน = 150120new Date() วันที่ upload ข้อมูลให้ธนาคาร |
| 9 | Filler | ค่าว่าง |
| 10 | Full_name | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME |
| 11 | Effective-date | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATEFormat วันที่ = (yyMMdd)ปีเดือนวัน = 150120 |
| 12 | Tax Info | 000 |
| 13 | Bene. Ref # | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).REF_NO [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).REF_NO_BANK |

  - Post-conditions
  - <สิ่งที่จะเกิดขึ้นหรือเป็นผลมาจากการทำ process นี้>

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
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
- [py_company_bank](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
