# Transfer Result KB_Payroll

- **Page ID:** 1287225563
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+KB_Payroll
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result KB_Payroll
- **Depth:** 5

---

| No. | Field | Length | Description | Example | Mapping Data |
|---|---|---|---|---|---|
| **Header** |
| 1 | Part Identifier | 1 | ต้องเป็น H เท่านั้น | H |   |
| 2 | Bank Reference | 16 |   | PDC11021100000 |   |
| 3 | Batch Reference | 16 | ข้อมูลสำหรับอ้างอิง batch สำหรับบริษัท | Test0110210 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 4 | Debit Account No. | 10 |   | 8888888888 |   |
| 5 | Total Debit Amount | 15.2 | Padded to left with 0's. | 000000000000010.27 |   |
| 6 | Total Debit Amount Ccy | 3 | Always defaulted to 'THB'. | THB |   |
| 7 | Total Credit Items | 18 | Padded to left with 0's. | 000000000000000010 |   |
| 8 | Transaction Date | 10 | date format: dd-mm-yyyy | 11-02-2011 |   |
| 9 | Effective Date | 10 | date format: dd-mm-yyyy | 17-02-2011 |   |
| 10 | Upload Date | 10 | date format: dd-mm-yyyy | 11-02-2011 |   |
| 11 | Import File Name | 50 | Padded to right with BLANKS. | Import Direct Credit.TXT |   |
| **Details** |   |
| 1 | Part Identifier | 1 | ต้องเป็น D เท่านั้น | D |   |
| 2 | Credit Detail Number | 18 | Padded to left with 0's. | 000000000000000001 |   |
| 3 | Payee Name | 80 | Padded to right with BLANKS. | Payee Name 1 |   |
| 4 | Credit Amount | 10.2 | Padded to left with 0's. | 0000000001.27 |   |
| 5 | Credit Amount Ccy | 3 | Always defaulted to 'THB'. | THB |   |
| 6 | Credit Account Number | 10 |   | 20251110123456 | ยกเลิกการตรวจสอบ เนื่องจากปรับไปอ่านที่ Beneficiary Reference No.[https://redmine.ochi.link/issues/60425](https://redmine.ochi.link/issues/60425) |
| 7 | Payee Bank Code | 3 | Always defaulted to '004'. | 004 |   |
| 8 | Payee Branch Code | 4 | Padded to right with BLANKS. | 000 |   |
| 9 | Beneficiary Reference No. | 16 | Padded to right with BLANKS. | Bene Ref#1 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 10 | Processing Status | 2 | Padded to right with BLANKS. |   |   |
| 11 | Processing Status Desc. | 35 | Padded to right with BLANKS. |   | PAIDUNSUCCESS |
| 12 | Output Reference No. | 16 | Padded to right with BLANKS. |   |   |
| 13 | Paid Date | 10 | date format: dd-mm-yyyy |   |   |
| 14 | Debit Date | 10 | date format: dd-mm-yyyy |   |   |
| 15 | Remarks | 255 | Padded to right with BLANKS. | UNSUCCESS CREDITACCOUNT DOES NOT EXIST | ยกเลิกเปลี่ยนไปอ่านจาก column 11 Processing Status Desc. แทนค่ะ |

ตัวอย่าง text file
<![CDATA[HPDC11021100000 Test0110210 8888888888000000000000010.27THB00000000000000001011-02-201117-02-201111-02-2011Import Direct Credit.TXT D000000000000000001Payee Name 1 0000000001.27THB0000000000004000 Bene Ref#1 9 PAID D000000000000000002Payee Name 2 0000000001.00THB1111111111004111 Bene Ref#2 9 PAID D000000000000000003Payee Name 3 0000000001.00THB2222222222004222 Bene Ref#3 9 PAID D000000000000000004Payee Name 4 0000000001.00THB3333333333004333 Bene Ref#4 9 PAID D000000000000000005Payee Name 5 0000000001.00THB4444444444004444 Bene Ref#5 9 PAID D000000000000000006Payee Name 6 0000000001.00THB6666666666004666 Bene Ref#6 10UNSUCCESS CREDIT ACCOUNT DOES NOT EXIST D000000000000000007Payee Name 7 0000000001.00THB7777777777004777 Bene Ref#7 9 PAID D000000000000000008Payee Name 8 0000000001.00THB8080808080004808 Bene Ref#8 9 PAID D000000000000000009Payee Name 9 0000000001.00THB9999999999004999 Bene Ref#9 9 PAID D000000000000000010Payee Name 10 0000000001.00THB9090909090004909 Bene Ref#0 9 PAID ]]>

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [https://redmine.ochi.link/issues/60425](https://redmine.ochi.link/issues/60425)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
