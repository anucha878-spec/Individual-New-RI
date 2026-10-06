# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (KTB)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 892403997
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=892403997

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KTB)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KTB)-ProcessOverview) ] [ [Preconditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KTB)-Preconditions) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KTB)-ProcessDescription) ] [ [Post-conditions](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(KTB)-Post-conditions) ]

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

| File name: | OCEANIN_KTB_ddmmyyyy_hhmmss.txtOCEANIN_KTB_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_KTB_21092021_100040.txt![(star)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) กรณีที่มีรายการมากกว่า 3000 รายการ จะต้องแยกไฟล์ใหม่ ชื่อไฟล์ใหม่ให้เติม _1 ดังนี้ OCEANIN_KTB_21092021_100040_1.txtและ ตอนดาวน์โหลดจะโหลดเป็น zip file โดยให้ใช้ชื่อเดียวกับชื่อของ file แรก ดังนี้ OCEANIN_KTB_21092021_100040.ZIP |
|---|---|
| File type: | .txt |
| File encoding: | TIS-620 |
| Data separate: |   |
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

| **Header** |
|---|
|   | **Field_File** | **Type** | **Length** | **Field_Col** | **Status** |
| 1 | File Type | Varchar | 2 | FIX: 10 | M |
| 2 | Record Type | Varchar | 1 | FIX: 1 | M |
| 3 | Batch Number | Varchar | 6 | Ex: Batchที1 ใส่ 000001 Batchที2 ใส่ 000002 **มีได้สูงสุด 999,999Batch ใน 1 File** | M |
| 4 | Bank Code | Varchar | 3 | FIX: 006 | M |
| 5 | Total_Transaction_Batch | Varchar | 7 | จำนวนรายการทั้งหมดใน Batch1 มีได้สูงสุด 999 Transactionsเช่น 00000013 มีจำนวน transaction 13 รายการ | M |
| 6 | Total_Amount | Varchar | 19 | ยอดเงินรวมทั้งหมดใน batch รวม ทศนิยมเช่น 2,000 บาท เก็บเป็น 200000 | M |
| 7 | Effective Date | Varchar | 8 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATEรูปแบบ เป็น ddMMyyyy เช่น 05112015 | M |
| 8 | Transaction Code | Varchar | 1 | FIX : C โดยที่ c = credit, d = debit | M |
| 9 | Receiver No | Varchar | 8 | FIX : 0 | O |
| 10 | Company ID | Varchar | 16 | Company ID on KTB Corporate Online ex. ipay000657FIX: OCLI001637 | O |
| 11 | User ID | Varchar | 20 | User ID(Group Maker) on KTB Corporate Onlineเป็น space | O |
| 12 | Fillers | Varchar | 407 | 0 หรือ เคาะSpace | O |
| 13 | Carriage ReturnLine Feed | Varchar | 2 | เป็นคำสั่ง ปิดบรรทัดและขึ้นบรรทัดใหม่**เมือเปิดด้วย Notepad Cursorจะอยู่ที􀃉คอลัมน์ 499** | M |

| **Detail** |
|---|
|   | **Field_file** | **Type** | **Length** | **Filed_Col** | **Status** |
| 1 | File Type | Varchar | 2 | FIX : 10 | M |
| 2 | Record Type | Varchar | 1 | FIX : 2 | M |
| 3 | Batch No. | Varchar | 6 | Running Number ex. Batch 1 = 000001, Batch 2 = 000002 | M |
| 4 | Receiving Bank | Varchar | 3 | รหัสธนาคารปลายทาง KTB (FIX : 006) | M |
| 5 | Receiving Branch Code | Varchar | 4 | 0+ค่า 3 หลักแรกของ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNTหมายเหตุ : กรณีเลขบัญชีปลายทางที่ไม่ใช่ธ.กรุงไทยและมีจำนวนมากกว่า 11 หลักให้ระบุเลขบัญชีที่เกินใน Columnนี้ และเติม 0 ข้างหน้าจนครบ 4 หลัก | M |
| 6 | Receiving Account | Varchar | 11 | บัญชีที่รับเงิน [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).BANK_ACCOUNTกรณี เลขที่บัญชีปลายทาง (ให้ระบุข้อมูลชิดขวาและเติม 0 ข้างหน้ากรณีเลขที่บัญชีไม่ครบ 11 หลัก)กรณีเกิน ให้เอาตัวที่เกินไปใส่ใน field ก่อนหน้า | M |
| 7 | Sending Bank Code | Varchar | 3 | FIX : 006 | M |
| 8 | Sending Branch Code | Varchar | 4 | 0+3 digitsแรก ของ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).COMPANY_BANK_ACCOUNT py_company_bank.bank_account เติม 0 ข้างหน้าจนครบ 4 หลัก | M |
| 9 | Sending Account | Varchar | 11 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).COMPANY_BANK_ACCOUNT py_company_bank.bank_account | M |
| 10 | Effective Date | Varchar | 8 | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATEFomat = ddMMyyyy ex. 05112015 | M |
| 11 | Service Type | Varchar | 2 | กำหนดค่าตามประเภทรายการ ex 06 (คืนภาษี)FIX: 02 | M |
| 12 | Clearing House Code | Varchar | 2 | FIX: 00 | M |
| 13 | Amount | Varchar | 17 | จะนวนเงินที่โอนให้กับบัญชีปลายทาง รวมเศษสตางค์ [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNTเช่น จำนวนเงินที่โอน 465.20 จะบันทึกเป็น 46520 | M |
| 14 | Receiver Info | Varchar | 8 | Abbreviation of activities ค่าเป็น 0 หรือ space (ใส่ทุกตำแหน่ง) FIX: 00000000 | O |
| 15 | Receiver ID | Varchar | 10 | ค่าเป็น 0 หรือ space FIX: 0000000000 | O |
| 16 | Receiver Name | Varchar | 100 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).TITLE\|\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).NAME\|" "\|[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).SNAME | M |
| 17 | Sender Name | Varchar | 100 | (Right Pad) FIX: OCEANIN | M |
| 18 | Other Info 1 | Varchar | 40 | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).REF_NO PY_TRANSACTION.ref_no_bank (ชิดขวา) | O |
| 19 | DDA Ref 1 | Varchar | 18 | รองรับรหัสอ้างอิง DDR Ref 1 จำนวน 18 digits (ถ้ามี) | O |
| 20 | Reserve Field | Varchar | 2 | เคาะ space | M |
| 21 | DDA Ref 2 | Varchar | 18 | รองรับรหัสอ้างอิง DDR Ref 2 จำนวน 18 digits (ถ้ามี) | O |
| 22 | Reserve Field | Varchar | 2 | เคาะ space | M |
| 23 | Other Info 2 | Varchar | 20 | ข้อมูลอื่นๆ 2 | O |
| 24 | Ref Running Number | Varchar | 6 | เลขอ้างอิงโดยธนาคาร (running number) | O |
| 25 | Status | Varchar | 2 | FIX: 09 | M |
| 26 | E-mail | Varchar | 40 | ค่าว่าง | O |
| 27 | Mobile Phone | Varchar | 20 | ค่าว่าง | O |
| 28 | Receiving Sub-Branch Code | Varchar | 4 | รหัสสาขาย่อยปลายทาง (ถ้ามี) | O |
| 29 | Fillers | Varchar | 34 | ค่าว่าง | O |
| 30 | Carriage Return Line Feed | Varchar | 2 | เป็นคำสังปิดบรรทัดและขึนบรรทัดใหม่ | M |

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
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
