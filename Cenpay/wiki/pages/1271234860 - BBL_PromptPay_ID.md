# BBL_PromptPay_ID

- **Page ID:** 1271234860
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234860
- **Path:** Home > Software Requirements Specification > 07. Appendix > 6. Generate txt,csv file ธนาคาร > BBL_PromptPay_ID
- **Depth:** 4

---

| File Type | .txt |
|---|---|
| Data Padding | ไม่มี คั่นด้วยเครื่องหมาย ~ |
| ตัวอย่างไฟล์และคำอธิบาย | [https://drive.google.com/drive/folders/1o5yemPlyYQ18lzocdTG8dmIOj6Wy9pWw](https://drive.google.com/drive/folders/1o5yemPlyYQ18lzocdTG8dmIOj6Wy9pWw) |

| No | Field Name | Length | Description | Example | Mapping Data |
|---|---|---|---|---|---|
| **Header** |
| 1 | Record Type | 3 | Header ระบุเป็น 001 เท่านั้น | 001 | Fix : 001 |
| 2 | Record Type | 20 | รหัสของบริษัทที่กำหนดจากทางธนาคาร | COMCODE | แสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).configwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'TCO' |
| 3 | Company Tax Id | 15 | รหัสประจำตัวผู้เสียภาษีของบริษัท | 1234567890123 | แสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).configwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'TID' |
| 4 | Company Account | 20 | เลขที่บัญชีของบริษัทที่ใช้ตัดเงิน 10 หลัก | 1234567890 | แสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description โดยไม่แสดง -[cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_codewhere parent_id = **18000** |
| 5 | Customer Batch Reference | 25 | Reference ตั้งโดยบริษัทสำหรับอ้างอิง หลีกเลี่ยงสัญลักษณ์ทางคณิตศาสตร์ทุกชนิด | BATCHREF001 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 6 | Batch Broadcast message |   | ค่าว่าง | ~ | ค่าว่าง |
| 7 | File Date | 8 | วันที่สร้างไฟล์ | 07112019 | วันที่ปัจจุบันทำรายการ Format DDMMYYYY (คศ.) |
| 8 | File Timestamp | 6 | เวลาที่สร้างไฟล์ | 145802 | วันที่ปัจจุบันทำรายการ Format HH24MMSS |
| Detail **[List]** |
| 1 | Record Type | 3 | Detail ระบุเป็น 003 เท่านั้น | 003 | Fix : 003 |
| 2 | Company Id | 20 | รหัสของบริษัทที่กำหนดจากทางธนาคาร | COMCODE | แสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).configwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'TCO' |
| 3 | Credit Sequence Number | 6 | Running Number เพื่อใช้บอกจำนวนรายการ เริ่มต้นที่ 1 เสมอ | 1 | Generate Running No. |
| 4 | Product code | 5 | Product Code ที่ทางธนาคารจะกำหนดให้โดยสอดคล้องกับทางบริษัทสมัครใช้บริการ | PPP06 | Fix : PPP06 |
| 5 | Client Account Number | 25 | เลขที่บัญชีปลายทาง 11 หลัก | I8888888888888 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).promptpay_type + [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).promptpay_no |
| 6 | Value date | 8 | วันที่โอนเงิน | 16112019 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).paid_date |
| 7 | Value time |   | ค่าว่าง | ~ | ค่าว่าง |
| 8 | Credit Currency | 3 | ค่าเงิน | THB | Fix : THB |
| 9 | Internal Reference | 18 | Reference ตั้งโดยบริษัทสำหรับอ้างอิง | REF1 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no |
| 10 | Pre-advice date |   | ค่าว่าง | 16112019 | ค่าว่าง |
| 11 | Delivery Method |   | ค่าว่าง | ~ | ค่าว่าง |
| 12 | Dispatch To |   | ค่าว่าง | ~ | ค่าว่าง |
| 13 | Cheque deposit Required |   | ค่าว่าง | ~ | ค่าว่าง |
| 14 | Copy ID card Present |   | ค่าว่าง | ~ | ค่าว่าง |
| 15 | WHT Present |   | ค่าว่าง | ~ | ค่าว่าง |
| 16 | Invoice Details Present |   | ค่าว่าง | ~ | ค่าว่าง |
| 17 | VAT Present |   | ค่าว่าง | ~ | ค่าว่าง |
| 18 | Receipt Present |   | ค่าว่าง | ~ | ค่าว่าง |
| 19 | Credit Advice Required | 1 | กำหนดเป็น Y เสมอ | Y | Fix : Y |
| 20 | Cheque drawn on location |   | ค่าว่าง | ~ | ค่าว่าง |
| 21 | Dispatch Branch Code |   | ค่าว่าง | ~ | ค่าว่าง |
| 22 | WHT Form Type |   | ค่าว่าง | ~ | ค่าว่าง |
| 23 | WHT serial no. |   | ค่าว่าง | ~ | ค่าว่าง |
| 24 | WHT book no. |   | ค่าว่าง | ~ | ค่าว่าง |
| 25 | WHT Running No. |   | ค่าว่าง | ~ | ค่าว่าง |
| 26 | BahtNet Payment type code |   | ค่าว่าง | ~ | ค่าว่าง |
| 27 | BOT service type of payment | 2 | กำหนดเป็น 04 เสมอ | 04 | Fix : 04 |
| 28 | No. of WHT Details |   | ค่าว่าง | ~ | ค่าว่าง |
| 29 | Total WHT Amount |   | ค่าว่าง | ~ | ค่าว่าง |
| 30 | No. Of Invoice Details |   | ค่าว่าง | ~ | ค่าว่าง |
| 31 | Total Invoice Amount |   | ค่าว่าง | ~ | ค่าว่าง |
| 32 | Total Discount Amount |   | ค่าว่าง | ~ | ค่าว่าง |
| 33 | Payee charge code | 3 | ระบุการเรียกเก็บค่าธรรมเนียม OUR เก็บค่าธรรมเนียมจากบริษัท BEN เก็บค่าธรรมเนียมปลายทาง | OUR | Fix : OUR |
| 34 | Payment Net amount (Credit amount) | 16 | ยอดเงินที่ต้องการโอน ระบุเป็น xxxx00 เช่น 1,000.00 ระบุ 100000 | 10000 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).amount * 100 |
| 35 | WHT Pay Type |   | ค่าว่าง | ~ | ค่าว่าง |
| 36 | WHT Remark |   | ค่าว่าง | ~ | ค่าว่าง |
| 37 | WHT Deduct Date |   | ค่าว่าง | ~ | ค่าว่าง |
| 38 | Receiving Bank Code |   | ค่าว่าง | ~ | ค่าว่าง |
| 39 | Receiving Branch Code |   | ค่าว่าง | ~ | ค่าว่าง |
| 40 | WHT Signatory |   | ค่าว่าง | ~ | ค่าว่าง |
| 41 | Service Code |   | ค่าว่าง | ~ | ค่าว่าง |
| 42 | Beneficiary Code |   | ค่าว่าง | ~ | ค่าว่าง |
| 43 | Payee1 ID Card |   | ค่าว่าง | ~ | ค่าว่าง |
| 44 | Payee Name | 100 | ชื่อบัญชีปลายทาง ได้ทั้งภาษาไทยและอังกฤษ | บริษัท ทดสอบ 1 จำกัด | คำนำหน้า [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payee_short_titleชื่อ [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payee_first_nameนามสกุล [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payee_last_nameแสดงเฉพาะตัวอักษรตำแหน่งที่ 1-100 |
| 45 | Payee Address 1 |   | ค่าว่าง | ~ | ค่าว่าง |
| 46 | Payee Address 2 |   | ค่าว่าง | ~ | ค่าว่าง |
| 47 | Payee Address 3 |   | ค่าว่าง | ~ | ค่าว่าง |
| 48 | Payee Address 4 |   | ค่าว่าง | ~ | ค่าว่าง |
| 49 | Dispatch Address 1 |   | ค่าว่าง | ~ | ค่าว่าง |
| 50 | Dispatch Address 2 |   | ค่าว่าง | ~ | ค่าว่าง |
| 51 | Dispatch Address 3 |   | ค่าว่าง | ~ | ค่าว่าง |
| 52 | Dispatch Address 4 |   | ค่าว่าง | ~ | ค่าว่าง |
| 53 | Payee Tax ID |   | ค่าว่าง | ~ | ค่าว่าง |
| 54 | Payee Fax Number |   | ค่าว่าง | ~ | ค่าว่าง |
| 55 | Payee Mobile Phone Number |   | ค่าว่าง | ~ | ค่าว่าง |
| 56 | Payee E-mail Address |   | ค่าว่าง | test1@email.com | ค่าว่าง |
| **Footer** |
| 1 | Record Identifier | 3 | Footer****ระบุเป็น 100 เท่านั้น | 100 | Fix : 100 |
| 2 | Total No. of Credits | 6 | จำนวน Transaction ทั้งหมด นับเฉพาะหมวด 003 อย่างเดียว | 2 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).net_transaction |
| 3 | Total Amount | 16 | จำนวนยอดเงินรวม ระบุเป็น xxxx00 เช่น 1,000.00 ระบุ 100000 | 15000 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).net_amount * 100 |

ตัวอย่าง txt file
<![CDATA[001~COMCODE~1234567890123~1234567890~BATCHREF001~~07112019~145802 003~COMCODE~1~PPP06~I8888888888888~16112019~~THB~REF1~16112019~~~~~~~~~Y~~~~~~~~04~~~~~~OUR~10000~~~~~~~~~~บริษัท ทดสอบ 1 จำกัด~~~~~~~~~~~~test1@email.com 003~COMCODE~2~PPP06~M9999999999~16112019~~THB~REF2~16112019~~~~~~~~~Y~~~~~~~~04~~~~~~OUR~5000~~~~~~~~~~นายเทส นามสกุลเทส~~~~~~~~~~~~test2@email.com 100~2~15000]]>

---

## Hyperlinks บนหน้านี้

- [https://drive.google.com/drive/folders/1o5yemPlyYQ18lzocdTG8dmIOj6Wy9pWw](https://drive.google.com/drive/folders/1o5yemPlyYQ18lzocdTG8dmIOj6Wy9pWw)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
