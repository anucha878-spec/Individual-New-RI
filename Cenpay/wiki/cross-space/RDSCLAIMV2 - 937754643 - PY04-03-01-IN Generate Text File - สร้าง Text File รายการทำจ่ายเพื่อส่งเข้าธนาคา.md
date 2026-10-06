# PY04-03-01-IN Generate Text File - สร้าง Text File รายการทำจ่ายเพื่อส่งเข้าธนาคาร (SCB)

- **Space:** `RDSCLAIMV2` — Claim System Version2 (Phase 1.1)
- **Page ID:** 937754643
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937754643

---

TOC
[ [Objectives](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)-Objectives) ] [ [Process Overview](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)-ProcessOverview) ] [ [Precondition](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)-Precondition) ] [ [Process Description](#PY04-03-01-INGenerateTextFile-สร้างTextFileรายการทำจ่ายเพื่อส่งเข้าธนาคาร(SCB)-ProcessDescription) ]

## Objectives

1. สร้าง File รายการทำจ่ายเพื่อส่งเข้าธนาคาร กรณีเป็นบัญชี ธนาคารไทยพานิชย์ (SCB)

## Process Overview

1. เมื่อมีการส่งรายการโอนเงินให้ บลจ.เข้าระบบ Claim payment เรียบร้อยแล้ว
2. ดาวน์โหลด Text file เพื่อส่งให้ธนาคาร

## Precondition

1. เป็นรายการที่ทำการรวบรวมคำสั่งซื้อกองทุนเพื่อทำการโอนเงินให้กับ บลจ

## Process Description

**Step 1. รับParameter****จากหน้าจอ** [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
**Step 2. Generate **Text**File ดังนี้**
**1. รายละเอียด Text file ที่สร้างและที่เก็บ Text file กำหนดรูปแบบไฟล์ txt ตามรูปแบบ ดังนี**

| File name: | OCEANIN_SCB_DCP_ddmmyyyy_hhmmss.txtOCEANIN_SCB_DCP_ =เป็น Format ของธนาคารddmmyyyy = วันที่ Generate Filehhmmss = เวลา Generate FileEx. OCEANIN_SCB_DCP_11032022_134646.txt |
|---|---|
| File type: | .txt |
| File encoding: | UTF-8 |
| Data separate: | ตัวคั่นสำหรับแต่ละฟิลด์จะเป็น ~ |
| ตัวอย่างไฟล์ | ตัวอย่าง : [https://drive.google.com/drive/u/0/folders/1CC5Cw4u2TIVPBRLcPFmTwwcD4j_a6m4a](https://drive.google.com/drive/u/0/folders/1CC5Cw4u2TIVPBRLcPFmTwwcD4j_a6m4a)รายละเอียดของ Format : [https://docs.google.com/spreadsheets/d/17t-A7_orjW3NrMd2oFTzHVhZNpnlXFL9/edit#gid=1699100102](https://docs.google.com/spreadsheets/d/17t-A7_orjW3NrMd2oFTzHVhZNpnlXFL9/edit#gid=1699100102) |

**2.Mapping Data ตามรายละเอียดนี้**

| **Record Type** | **FLD** | **FIELD NAME** | **DATA TYPE** | **LENGTH** | **POSITION** | **Mandatory** | **Remark for Import File** | **Mapping field** |
|---|---|---|---|---|---|---|---|---|
| **From** | **To** |   |   |
| 001 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "001" | 001 |
| Header | 2 | Company Id | C | 12 | 4 | 15 | Y | SCB Company Id | fix CBZ2271 |
|   | 3 | Customer Reference | C | 32 | 16 | 47 | Y | Customer Reference or Description *(can use only first 12 digit) | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO EX.UL----> U20220601001 |
|   | 4 | Message/File Date | D | 8 | 48 | 55 | Y | Date of generate/extract data |   |
|   | 5 | Message/File Time | T | 6 | 56 | 61 | Y | Time of generate/extract data |   |
|   | 6 | Channel Id | C | 3 | 62 | 64 | Y | Fix "BCM" | BCM |
|   | 7 | Batch Reference | C | 32 | 65 | 96 | N | Batch Reference or Description *(can use only first 12 digit) | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).BATCH_PAYMENT_NO EX.UL----> U20220601001 |
| 002 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "002" | 002 |
| Debit Detailข้อมูลบัญชีบริษัท | 2 | Product Code | C | 3 | 4 | 6 | Y | Product CodeBNT : BahtnetDCP: Direct Credit | DCP |
|   | 3 | Value Date | D | 8 | 7 | 14 | Y | วันที่โอนเงินหรือวันที่บนหน้าเช็ค ** MCP,MCL,BNT,DDP,XMQ,XDQ,CCP,PA4,PA5,PA6 :have to be bank working day. | [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH).TRANSFER_DATE |
|   | 4 | Debit Account No | C | 25 | 15 | 39 | Y | บัญชีที่หักเงินต้น (Debit Account). | [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK).bank_account(รับฝากสนญ.ใช้บัญชีโอนออก SCB_ORFT 0642023333) |
|   | 5 | Account Type of Debit Account | N | 2 | 40 | 41 | N | "0" + 4th Digit of A/C no. | fix 0 ตัวแรก และ เลขบัญชีหลักที่ 4)(รับฝากสนญ. = 02) |
|   | 6 | Debit Branch Code | N | 4 | 42 | 45 | N | "0" + 1st to 3rd Digit of A/C no. | fix 0 ตัวแรก และ เลขบัญชีหลักที่ 1-3 (รับฝากสนญ. = 0064) |
|   | 7 | Debit Currency | C | 3 | 46 | 48 | Y | Fix "THB" | THB |
|   | 8 | Debit Amount | A | 16 | 49 | 64 | Y | Total Credit amount (Sum of Credit Amount (003-4) which related to this Debit record (002-9)) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT |
|   | 9 | Internal Reference | C | 8 | 65 | 72 | Y | For reference by Credit Record (003-6) | สำหรับ Ref กับ Debit |
|   | 10 | No. of Credits | N | 6 | 73 | 78 | Y | Total count Credit record (003) which releated to this Debit record (002-9) | จำนวน Credit ทั้งหมด โดยจะสัมพันธ์กับ Debit(รับฝากสนญ = จำนวน Record ของ รายการที่ทำจ่ายใน textfile นี้) |
|   | 11 | Fee Debit Account | C | 15 | 79 | 93 | Y | บัญชีที่หักค่าธรรมเนียม Fee A/C no. (Should be same as field no 4) | (รับฝากสนญ.ใช้บัญชีโอนออก SCB_ORFT 0642023333) |
|   | 12 | Filler | C | 9 | 94 | 102 | N | * Space |   |
|   | 13 | Media Clearing Cycle (Filler) | C | 1 | 103 | 103 | N | * Space untill ITMX implement (01/06/2007) Cycle for Media Clearing (Validate only MCL , PA4 , PA5 , PA6) Blank = Next Day 2=Same Day Afternoon | รับฝากสนญ. ใช้ 2 |
|   | 14 | Account Type (Fee) | N | 2 | 104 | 105 | N | "0" + 4th Digit of Fee A/C no. | fix 0 ตัวแรก และ เลขบัญชีหลักที่ 4)(รับฝากสนญ. = 02) |
|   | 15 | Debit Branch Code (Fee) | N | 4 | 106 | 109 | N | "0" + 1st to 3rd Digit of Fee A/C no. | fix 0 ตัวแรก และ เลขบัญชีหลักที่ 1-3 (รับฝากสนญ. = 0064) |
|   |   |   |   | 109 |   |   |   |   |   |
| 003 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "003" |   |
| Credit Detail | 2 | Credit Sequence Number | N | 6 | 4 | 9 | Y | Credit seq. start from 1 for each Debit (sample first record = 000001, Secord Record = 000002 ) | จำนวนรายการ |
| ข้อมูลบัญชีผู้รับเงิน | 3 | Credit Account | C | 25 | 10 | 34 | N | * Actual credit account base on Account Passbook * Only numeric (*** For MCP,CCP,DDP,XMQ,XDQ -> Not Mandatory) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).bank_account เลขที่บัญชีของ บลจ.(รับฝากสนญ=เลขบัญชีผู้รับเงิน) |
|   | 4 | Credit Amount | A | 16 | 35 | 50 | Y | * Can not be Zero. | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).AMOUNT |
|   | 5 | Credit Currency | C | 3 | 51 | 53 | Y | Fix "THB" | THB |
|   | 6 | Internal Reference | C | 8 | 54 | 61 | Y | Ref. To Debit record (002-9) | 00000001กรณีโอนเงินให้ บลจ 1 บลจ.ต่อ 1 แบตการจ่าย(กรณีโอนให้ลูกค้า จะ ref กับ Debit) |
|   | 7 | WHT Present | C | 1 | 62 | 62 | Y | Print WHT (Y/N) ? ( SCB Provide service Print WHT or not ?? : If Not "N" , IF YES "Y") | N |
|   | 8 | Invoice Details Present | C | 1 | 63 | 63 | Y | Print Inv (Y/N) ? Customers will Provide Invoices information or not? :if not "N" การแสดงรายละเอียด Invoice ใน Credit Advice เท่านั้น | N |
|   | 9 | Credit Advice Required | C | 1 | 64 | 64 | Y | Print Credit Advice (Y/N) ? (Hard Code "Y") | Y |
|   | 10 | Delivery Mode | C | 1 | 65 | 65 | N | * Mandatory for : MCP, DDP, CCP and All Product which want to present (WHT,INV, Credit Advice)* Delivery document method to Beneficiary. (WHT, Invoice , Credit Advice) (M-Mail, C-Counter, P-Pickup, S-SCBBusinessNet) เป็นการระบุให้ Bene. รับเอกสาร (WHT, Invoice, Credit Advice) ผ่านช่องทางใด (M:Mail=> Send by Registered mail) (P:Pickup => Send by messenger to Customer) (C:Counter=> Receiving pickup at SCB branch) (S:SCBBusinessNet=> Send back to SCBBusinessNet )\** MCP, DDP, CCP : Can not use "S" , for Prodcut DCP, MCL, PAY will use "S" | S |
|   | 11 | Pickup Location | C | 4 | 66 | 69 | N | * Mandatory if Delivery Mode = "C"Pickup Location Counter (Chq., WHT, Inv) see Pickup Location sheet | space |
|   | 12 | WHT Form Type | N | 2 | 70 | 71 | N | Mandatory if WHT Details present.01 = ภงด 1 ก02 = ภงด 203 = ภงด 353 = ภงด 53for Product DCP, MCL, BNT, PAY will sent value = "00" (2 zero) | 00 |
|   | 13 | WHT Tax Running No. | C | 14 | 72 | 85 | N | เลขที่บน WHT Form (n/a will sent " " = 14 Spaces) | space |
|   | 14 | WHT Attach No. | N | 6 | 86 | 91 | N | ลำดับที่บน WHT Form (n/a will sent "000000" = 6 zero) | (รับฝากสนญ = 000000) |
|   | 15 | No. of WHT Details | N | 2 | 92 | 93 | N | Mandatory if WHT Details present. Count WHT rec(005) which releated to this Credit record (003-2). (n/a will sent "00" = 2 zero) | (รับฝากสนญ = 00) |
|   | 16 | Total WHT Amount | A | 16 | 94 | 109 | N | Mandatory if WHT Details present. Sum of WHT amt(005-5) which releated to this Credit record (003-2). (n/a will sent "0000000000000000" = 16 zero) | (รับฝากสนญ = 0000000000000000) |
|   | 17 | No. of Invoice Details | N | 6 | 110 | 115 | N | Mandatory if Invoice Details present. Count Invoice. Rec(006) which releated to this Credit Record (003-2). (n/a will sent "000000" = 6 zero) | (รับฝากสนญ = 000000) |
|   | 18 | Total Invoice Amount | A | 16 | 116 | 131 | N | Mandatory if Invoice Details present. Sum of Invoice amount(006-6) which releated to this Credit Record (003-2). (n/a will sent "0000000000000000" = 16 zero) | (รับฝากสนญ = 0000000000000000) |
|   | 19 | WHT Pay Type | N | 1 | 132 | 132 | N | Mandatory if WHT Details present. (1 : ผู้จ่ายออกครั้งเดียว, 2 : ออกให้ตลอดไป, 3 : หักภาษี ณ ที่จ่าย 4. อื่นๆ (n/a will sent "0" = 1 zero) | (รับฝากสนญ = 0) |
| Accept Thai&English | 20 | WHT Remark | C | 40 | 133 | 172 | N | Mandatory if WHT Details present and WHT Pay Type(003-19) is 4 (n/a will sent 40 spaces) | (รับฝากสนญ =space) |
|   | 21 | WHT Deduct Date | D | 8 | 173 | 180 | N | Mandatory if WHT Details present. วันที่จ่ายภาษีบน WHT Form (YYYYMMDD) ** Use this field to generate WHT summary report | (รับฝากสนญ =space) |
|   | 22 | Receiving Bank Code | N | 3 | 181 | 183 | Y | * "MCP", "CCP", "DDP", "XMQ", "XDQ","PAY","PA2","PA3" , "DCP" have to be = "014" | FIX : 014 |
|   | 23 | Receiving Bank Name | C | 35 | 184 | 218 | N | Receiving bank name | FIX : SIAM COMMERCIAL BANK |
|   | 24 | Receiving Branch Code | N | 4 | 219 | 222 | N | *Mandatory For MCL, BNT, MCP, CCP, DDP , PA4 , PA5 , PA6 * MCP/DDP Default : "0111" (รัชโยธิน) ** input actaul branch code base on Passbook |   |
|   | 25 | Receiving Branch Name | C | 35 | 223 | 257 | N | Receiving branch name | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).bank_branch |
|   | 26 | WHT Signatory | C | 1 | 258 | 258 | N | Mandatory if WHT Details present. B-Bank, C-Corporate. (if Corpoaret Check sent C-Corporate). | (รับฝากสนญ =space) |
|   | 27 | Beneficiary Notification | C | 1 | 259 | 259 | N | แจ้งยอดการโอนเงินให้ Bene. ทราบโดยวิธี F-Fax, S-SMS, E-Email , N-None. | N |
|   | 28 | Customer Reference Number | C | 20 | 260 | 279 | N | Mandatory if Product Code is MCP,DDP or CCP. (recommended SAP used Document number) | [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).REF_NO_BANKEX.202202000001 |
|   | 29 | Cheque Reference Document Type | C | 1 | 280 | 280 | N | Mandatory if Product Code is MCP,DDP or CCP. เอกสารที่ Bene. ต้องนำมาด้วยตอนรับ Cheque *See Detail Cheque Reference Doc. Type sheet (n/a or DCP, MCL, PAY will sent " " = 1 space Fix ค่าว่าง) | (รับฝากสนญ =space) |
|   | 30 | Payment Type Code | C | 3 | 281 | 283 | N | Use in BNT, *for the detail please look up "Debit Type" list on sheet "Reference Type" (n/a will sent " " = 3 Spaces) | (รับฝากสนญ =space) |
|   | 31 | ServicesType | C | 2 | 284 | 285 | N | * Mandatory for MCL,PA4,PA5,PA6,BNT 1. Use in Media Clearing for ServiceType, detail on sheet Reference Type. | (รับฝากสนญ =04) |
|   |   |   |   |   |   |   |   | 2. Use in Bahtnet for Objective Code, detail on sheet Reference Type. |   |
| Accept Thai&English | 32 | Remark | C | 50 | 286 | 335 | N | For printing in Credit Advice (n/a will sent " " = 50 Spaces) | (รับฝากสนญ =space) |
|   | 33 | SCB Remark | C | 18 | 336 | 353 | N | ** SCB System Reserved. Please do not input any character to this field (Fil in " " = 18 Spaces) | (รับฝากสนญ =space) |
|   | 34 | Beneficiary Charge | C | 2 | 354 | 355 | N | Beneficiary charge = "B " , customer charge = " " | (รับฝากสนญ =space) |
|   |   |   |   | 355 |   |   |   |   |   |
| 004 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "004" |   |
| Payee Detail | 2 | Internal Reference | C | 8 | 4 | 11 | Y | Ref. to Debit record (002-9) EX.00000001 |   |
|   | 3 | Credit Sequence Number | N | 6 | 12 | 17 | Y | Ref. to Credit record (003-2) (sample counting first record = 000001, Secord Record = 000002 ) |   |
|   | 4 | Payee1 IDCard | N | 15 | 18 | 32 | N | Mandatory if WHT Details present (003-7) (Personal ID or TAX ID for Company) | 000000000000000 |
|   | 5 | Payee1 Name (Thai) | C | 100 | 33 | 132 | N | * Accept Both Thai & English Char. (if both fields of 004-5 and 004-10 have value, will use this field to print out credit advice, INV, WHT)ชื่อ บลจ | (รับฝากสนญ limit ที่ 100 =[PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION).bank_account_name) |
|   | 6 | Payee1 Address 1 | C | 70 | 133 | 202 | N | Address 1 for WHT Certificate printing or Address for sent Mail to Beneficiary | (รับฝากสนญ =space) |
|   | 7 | Payee1 Address 2 | C | 70 | 203 | 272 | N | Address 2 for WHT Certificate printing or Address for sent Mail to Beneficiary | (รับฝากสนญ =space) |
|   | 8 | Payee1 Address 3 | C | 70 | 273 | 342 | N | Address 3 for WHT Certificate printing or Address for sent Mail to Beneficiary | (รับฝากสนญ =space) |
|   | 9 | Payee1 Tax ID | C | 10 | 343 | 352 | N | Mandatory if WHT Details present (003-7) (Fil in " " = 10 Spaces) Field นี้ให้ใส่ Space 10 ตำแหน่ง หากมีการส่ง WHT Detail ให้ใส่ข้อมูลใน Payee1 IDCard (004-4) แทน | (รับฝากสนญ =space) |
| Accept Thai&English | 10 | Payee1 Name (English) | C | 70 | 353 | 422 | N | *Bahtnet accept only english char. (if Field 004-5 not have value, will use this field) in case of BAHTNET have to fill in | (รับฝากสนญ =space) |
|   | 11 | Payee1 Fax Number | N | 10 | 423 | 432 | N | Mandatory if Bene notification (003-27) = F. (not allow for special sign , - #) (n/a will sent 10 zeros) | 0000000000 |
|   | 12 | Payee1 Mobile Phone Number | N | 10 | 433 | 442 | N | Mandatory if Bene notification (003-27) = S. Only 1 number (not allow for special sign , - #) | 0000000000 |
|   | 13 | Payee1 E-mail Address | C | 64 | 443 | 506 | N | Mandatory if Bene notification (003-27) = E. Validate Email address template must be corrected e.g. [xxxx@xxx.com](mailto:xxxx@xxx.com) + separator "," or ";" Allow more than 1 email follow (but not over 64 Chars) sample [suirya_k@scb.co.th](mailto:suirya_k@scb.co.th),[somsak@gmail.com](mailto:somsak@gmail.com)) (n/a will sent 64 Spaces) | (รับฝากสนญ =space) |
|   | 14 | Payee2 Name (Thai) | C | 100 | 507 | 606 | N | * ใช้ในกรณีพิมพ์ชื่อใน WHT คนละชื่อกับชื่อบนหน้า Cheque. (n/a will sent 100 spaces) | (รับฝากสนญ =space) |
|   | 15 | Payee2 Address 1 | C | 70 | 607 | 676 | N | * ใช้ในกรณีพิมพ์ที่อยู่ใน WHT คนละที่กับบนหน้า Cheque. (n/a will sent 70 spaces) | (รับฝากสนญ =space) |
|   | 16 | Payee2 Address 2 | C | 70 | 677 | 746 | N | * ใช้ในกรณีพิมพ์ที่อยู่ใน WHT คนละที่กับบนหน้า Cheque. (n/a will sent 70 spaces) | (รับฝากสนญ =space) |
|   | 17 | Payee2 Address 3 | C | 70 | 747 | 816 | N | * ใช้ในกรณีพิมพ์ที่อยู่ใน WHT คนละที่กับบนหน้า Cheque. (n/a will sent 70 spaces) | (รับฝากสนญ =space) |
|   |   |   |   | 816 |   |   |   |   |   |
| 005 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "005" | กลุ่ม 005 เซตเป็นค่าว่างทุกฟิลด์ |
| WHT Detail | 2 | Internal Reference | C | 8 | 4 | 11 | Y |   |   |
|   | 3 | Credit Sequence No. | N | 6 | 12 | 17 | Y |   |   |
|   | 4 | WHT Sequence No. | N | 2 | 18 | 19 | Y |   |   |
| * Max 3 Type | 5 | WHT Amount | A | 16 | 20 | 35 | Y |   |   |
| / Credit Line | 6 | WHT Income Type | C | 5 | 36 | 40 | Y |   |   |
| Accept Thai&English | 7 | Income Description | C | 77 | 41 | 117 | N |   |   |
|   | 8 | WHT Deduct Rate | N | 5 | 118 | 122 | Y |   |   |
|   | 9 | Income Type Amount | N | 16 | 123 | 138 | Y |   |   |
|   |   |   |   | 138 |   |   |   |   |   |
| 006 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "006" | กลุ่มนี้ เซตเป็นค่าว่างทุกฟิลด์ |
| Invoice Detail | 2 | Internal Reference | C | 8 | 4 | 11 | Y |   |   |
|   | 3 | Credit Sequence No. | N | 6 | 12 | 17 | Y |   |   |
|   | 4 | Invoice Sequence No. | N | 6 | 18 | 23 | Y |   |   |
|   | 5 | Invoice Number | C | 15 | 24 | 38 | Y |   |   |
|   | 6 | Invoice Amount | A | 16 | 39 | 54 | Y |   |   |
|   | 7 | Invoice Date | D | 8 | 55 | 62 | Y |   |   |
| Accept Thai&English | 8 | Invoice Description | C | 70 | 63 | 132 | N |   |   |
|   | 9 | PO Number | C | 15 | 133 | 147 | N |   |   |
|   | 10 | VAT Amount | A | 16 | 148 | 163 | N |   |   |
|   | 11 | Payee Charge Amount | A | 16 | 164 | 179 | N |   |   |
|   | 12 | WHT Amount | A | 16 | 180 | 195 | N |   |   |
|   | 13 | Print Language | C | 1 | 196 | 196 | Y |   |   |
|   |   |   |   | 196 |   |   |   |   |   |
| 999 | 1 | Record Type | C | 3 | 1 | 3 | Y | Fix "999" |   |
| Trailer | 2 | Total No. of Debits | N | 6 | 4 | 9 | Y | Total count all Debit rec. | 000001(รับฝากสนญ = จำนวนรายการของ Debit (โดยปกติจะเท่ากับ000001) |
|   | 3 | Total No. of Credits | N | 6 | 10 | 15 | Y | Total count all Credit rec. (Counting number from last Credit counting record line 004) | 000001(รับฝากสนญ = จำนวน Record ของ รายการที่ทำจ่ายใน textfile นี้ (Credit) |
|   | 4 | Total Amount | A | 16 | 16 | 31 | Y | Total Amount (Same value as line 002 fileds no 8) | จำนวนเงินที่ต้องโอนให้บลจ.(รับฝากสนญ = ยอดรวมของเงินที่จะโอนทั้งหมด) |
|   |   |   |   | 31 |   |   |   |   |   |

****

```
bankAccountName
```

---

## Hyperlinks บนหน้านี้

- [PY-4.ดาวน์โหลดไฟล์รายการอนุมัติจ่ายเงิน (การเงิน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=672038997)
- [https://drive.google.com/drive/u/0/folders/1CC5Cw4u2TIVPBRLcPFmTwwcD4j_a6m4a](https://drive.google.com/drive/u/0/folders/1CC5Cw4u2TIVPBRLcPFmTwwcD4j_a6m4a)
- [https://docs.google.com/spreadsheets/d/17t-A7_orjW3NrMd2oFTzHVhZNpnlXFL9/edit#gid=1699100102](https://docs.google.com/spreadsheets/d/17t-A7_orjW3NrMd2oFTzHVhZNpnlXFL9/edit#gid=1699100102)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_BATCH](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_BATCH)
- [PY_COMPANY_BANK](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_COMPANY_BANK)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [PY_TRANSACTION](http://wiki.thaisamut.co.th/display/RDSCLAIMV2/Table+%3A+PY_TRANSACTION)
- [xxxx@xxx.com](http://wiki.thaisamut.co.thmailto:xxxx@xxx.com)
- [suirya_k@scb.co.th](http://wiki.thaisamut.co.thmailto:suirya_k@scb.co.th)
- [somsak@gmail.com](http://wiki.thaisamut.co.thmailto:somsak@gmail.com)
