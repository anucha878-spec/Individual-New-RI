# Bank Cheque_UOB_CCC

- **Page ID:** 1287225911
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Bank+Cheque_UOB_CCC
- **Path:** Home > Software Requirements Specification > 07. Appendix > 6. Generate txt,csv file ธนาคาร > Bank Cheque_UOB_CCC
- **Depth:** 4

---

| File Type | .txt |
|---|---|
| Data Padding | Right |
| ตัวอย่างไฟล์และคำอธิบาย | [https://drive.google.com/drive/folders/1dxse3eyk62NWhlSKzW0EK07ZoFGd6rlw](https://drive.google.com/drive/folders/1dxse3eyk62NWhlSKzW0EK07ZoFGd6rlw) |

| No | Field Name | Length | From | To | Description | Example | Mapping Data |
|---|---|---|---|---|---|---|---|
| **Detail [List]** |
| 1 | Transaction Identifier | 3 | 1 | 3 | Fixed as constant value "TXN" | TXN | Fix : TXN |
| 2 | Product Code | 10 | 4 | 13 | Cheque Payment: CH,CHC,CHD,CHX Fund Transfer: GI DC2, DC3,SMT,IFT,BNT Payroll: PAY | CH | Fix : CH |
| 3 | Beneficiary Name | 150 | 14 | 163 | Adhoc Beneficiary Name, this field will be print on physical cheque (CO/DD) and WHT. For BNT this field must be filled in as Englist name. | บริษัท ทดสอบรายการ จำกัด | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_nameแสดงเฉพาะตัวอักษรตำแหน่งที่ 1-100 |
| 4 | Beneficiary Address 1 | 70 |   |   | To be used in WHT Certificate Printing (ignored if 3rd name is populate). (This field will be 'R'-Required in case of using Bank's WHT printing services) | บริษัท ทดสอบรายการ จำกัด | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address1 + [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address2แสดงเฉพาะตัวอักษรตำแหน่งที่ 1-70 |
| 5 | Beneficiary Address 2 | 70 |   |   | To be used in WHT Certificate Printing (ignored if 3rd name is populate). (This field will be 'R'-Required in case of using Bank's WHT printing services) | 555/92 อาคาร ทดสอบ ทาวน์เวอร์ | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address1 + [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address2แสดงเฉพาะตัวอักษรตำแหน่งที่ 71-140 |
| 6 | Beneficiary Address 3 | 70 |   |   | To be used in WHT Certificate Printing (ignored if 3rd name is populate). (This field will be 'R'-Required in case of using Bank's WHT printing services) | ถ.สาทรใต้ ต.สาทร | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address1 + [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address2แสดงเฉพาะตัวอักษรตำแหน่งที่ 141-210 |
| 7 | Beneficiary Address 4 | 70 |   |   | To be used in WHT Certificate Printing (ignored if 3rd name is populate). | อ.สาทร กรุงเทพฯ | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address1 + [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).tax_address2แสดงเฉพาะตัวอักษรตำแหน่งที่ 211-280 |
| 8 | Beneficiary Code/Site | 70 |   |   | For CHX this field will be beneficiary code which length = 4 bytes. For CPK this field will be Site-Code which length = 7 bytes. | 10120 | ค่าว่าง |
| 9 | Mail-To-Name | 150 |   |   | Name to whom mail need to be send. |   | ค่าว่าง |
| 10 | Mail-To-Address 1 | 70 |   |   | Address line 1 to whom mail need to be send. |   | ค่าว่าง |
| 11 | Mail-To-Address 2 | 70 |   |   | Address line 2 to whom mail need to be send. |   | ค่าว่าง |
| 12 | Mail-To-Address 3 | 70 |   |   | Address line 3 to whom mail need to be send. |   | ค่าว่าง |
| 13 | Mail-To-Address 4 | 70 |   |   | Address line 4 to whom mail need to be send. |   | ค่าว่าง |
| 14 | Zip Code | 10 |   |   | Mailing Post Code. Beneficiary Address Zip Code |   | ค่าว่าง |
| 15 | Invoice Amount | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 16 | VAT Amount | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 17 | WHT Amount | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 18 | Ben Charged | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 19 | Cheque (Transfer) Amount | 20 | 1034 | 1053 | Payment Amount, The value could be left or right justified. Example xxxxxx.xx (989189.98). The amount can have leading zeros or spaces. The leadingzeros or spaces should be ignored. Do not allow for comma sign (,) to be included. | 4865.00 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).amount |
| 20 | Currency | 10 | 1054 | 1063 | Validation to check whether the entered Currency is ‘THB’. |   | Fix : THB |
| 21 | Your Reference | 35 | 1064 | 1098 | Customers instrument Reference Number. Bank recommend client to send this value. | AP0001 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no |
| 22 | Cheque (Value) Date | 8 | 1099 | 1106 | Value Date. This is the effective date in format DDMMYYYY. In case of data entry, Cut-off Date and time would be computed using this value. Datevalidations to be applied on the Value date. | 15092015 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).paid_date |
| 23 | Payment Details1 | 35 |   |   | Payment Detail 1 on the Dataentry screen |   | ค่าว่าง |
| 24 | Payment Details2 | 35 |   |   | Payment Detail 2 on the Dataentry screen |   | ค่าว่าง |
| 25 | Payment Details3 | 35 |   |   | Payment Detail 3 on the Dataentry screen |   | ค่าว่าง |
| 26 | Payment Details4 | 35 |   |   | Payment Detail 4 on the Dataentry screen |   | ค่าว่าง |
| 27 | Exchange Document | 35 | 1247 | 1281 | For example - REC, TAX, REC+TAX, BILL. | REC | Fix : REC |
| 28 | Delivery Method | 5 | 1282 | 1286 | OC' for Counter Collect, 'RT' for Return to Customer, 'MA' for Mail to Customer, 'CO' for Courier, 'RM' for Register Mail. | OC | Fix : OC |
| 29 | Payment Location | 35 | 1287 | 1321 | Pickup Branch, For CHC,CHD. | SATHORN | ค่าว่าง |
| 30 | Preadvise Method | 5 |   |   | Advice Delivery Mode. 'FAX' or 'EMAIL' or 'IVR' or 'SMS'. If field is blank in the file the default value should be NONE. The value need to be comfirmedby Bank in case of delivery mode is combination. | FAX | ค่าว่าง |
| 31 | Fax Number | 10 |   |   | This field is Required if Delivery Method = 'FAX'. Beneficiary Fax number could start with ‘0’, and cannot include '-', '/', '(', ')' or Space value in the field | 022851746 | ค่าว่าง |
| 32 | Email Address | 120 |   |   | This field is Required if Delivery Method = 'EMAIL'. Beneficiary email address (Only 1 email address can populated in the field) |   | ค่าว่าง |
| 33 | IVR Code | 10 |   |   | This field is Required if Delivery Method = 'IVR'. Beneficiary IVR code could start with ‘0’, and cannot include '-', '/', '(', ')' or Space value in the field |   | ค่าว่าง |
| 34 | SMS Number | 20 |   |   | This field is Required if Delivery Method = 'SMS'. Beneficiary SMS number could start with ‘0’, and cannot include '-', '/', '(', ')' or Space value in the field |   | ค่าว่าง |
| 35 | Charge Indicator | 12 |   |   | Charge fee for the transaction. 'OUR' fee will be charged at Client, 'BENE' fee will be charged by deduct payment amount. . By default it is ‘OUR’. | OUR | Fix : OUR |
| 36 | Beneficiary Tax ID | 20 |   |   | Beneficiary Tax Id. This field will be printed in WHT Certificated and Report. In case the field is blank in the file, If Personal Id populated use Personal Idfor printing in WHT certificate. |   | ค่าว่าง |
| 37 | Personal ID | 20 |   |   | Use in case of Beneficiary not have Tax-Id | 0013954769024 | ค่าว่าง |
| 38 | WHT Type | 5 |   |   | WHT Type i.e. ‘03’ or ‘53’. | 53 | ค่าว่าง |
| 39 | Taxable Amount 1 | 20 |   |   | WHT - Tax Payable Amount 1, this field will be printed in the Others section of WHT Certificate. | 1000.00 | ค่าว่าง |
| 40 | Tax Type 1 | 2 |   |   | The field is to be ignored by CMS. | 01 | ค่าว่าง |
| 41 | Tax Type Description 1 | 35 |   |   | WHT - Tax Description 1, this field will be printed in the Others section of WHT Certificate. | ค่าบริการ | ค่าว่าง |
| 42 | Tax Rate 1 | 5 |   |   | WHT - Tax Rate 1, this field will be printed in the Others section of WHT Certificate. | 30.00 | ค่าว่าง |
| 43 | Tax Amount 1 | 20 |   |   | WHT - Tax Amount 1, this field will be printed in the Others section of WHT Certificate. | 3 | ค่าว่าง |
| 44 | Taxable Amount 2 | 20 |   |   | WHT - Tax Payable Amount 2, this field will be printed in the Others section of WHT Certificate. | 2500.00 | ค่าว่าง |
| 45 | Tax Type 2 | 2 |   |   | WHT - Tax Rate 2, this field will be printed in the Others section of WHT Certificate. | 03 | ค่าว่าง |
| 46 | Tax Type Description 2 | 35 |   |   | WHT - Tax Description 2, this field will be printed in the Others section of WHT Certificate. | ค่าจ้างทำของ | ค่าว่าง |
| 47 | Tax Rate 2 | 5 |   |   | WHT - Tax Rate 2, this field will be printed in the Others section of WHT Certificate. | 3 | ค่าว่าง |
| 48 | Tax Amount 2 | 20 |   |   | WHT - Tax Amount 2, this field will be printed in the Others section of WHT Certificate. | 75.00 | ค่าว่าง |
| 49 | Taxable Amount 3 | 20 |   |   | WHT - Tax Payable Amount 3, this field will be printed in the Others section of WHT Certificate. | 1500.00 | ค่าว่าง |
| 50 | Tax Type 3 | 2 |   |   | WHT - Tax Rate 3, this field will be printed in the Others section of WHT Certificate. | 02 | ค่าว่าง |
| 51 | Tax Type Description 3 | 35 |   |   | WHT - Tax Description 3, this field will be printed in the Others section of WHT Certificate. | ค่าจ้างโฆษณา | ค่าว่าง |
| 52 | Tax Rate 3 | 5 |   |   | WHT - Tax Rate 3, this field will be printed in the Others section of WHT Certificate. | 2 | ค่าว่าง |
| 53 | Tax Amount 3 | 20 |   |   | WHT - Tax Amount 3, this field will be printed in the Others section of WHT Certificate. | 30.00 | ค่าว่าง |
| 54 | Taxable Amount 4 | 20 |   |   | WHT - Tax Payable Amount 4, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 55 | Tax Type 4 | 2 |   |   | WHT - Tax Rate 4, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 56 | Tax Type Description 4 | 35 |   |   | WHT - Tax Description 4, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 57 | Tax Rate 4 | 5 |   |   | WHT - Tax Rate 4, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 58 | Tax Amount 4 | 20 |   |   | WHT - Tax Amount 4, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 59 | Taxable Amount 5 | 20 |   |   | WHT - Tax Payable Amount 5, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 60 | Tax Type 5 | 2 |   |   | WHT - Tax Rate 5, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 61 | Tax Type Description 5 | 35 |   |   | WHT - Tax Description 5, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 62 | Tax Rate 5 | 5 |   |   | WHT - Tax Rate 5, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 63 | Tax Amount 5 | 20 |   |   | WHT - Tax Amount 5, this field will be printed in the Others section of WHT Certificate. |   | ค่าว่าง |
| 64 | WHT Document No. | 10 |   |   | Customer's WHT document no. if the value is not populated, system will generated value. |   | ค่าว่าง |
| 65 | Client Name | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 66 | Client Address | 105 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 67 | WHT Sequence No. | 10 |   |   | Customer's WHT Sequence No. if the value is not populated, system will generated value. |   | ค่าว่าง |
| 68 | Payment Condition | 1 |   |   | Payment Condition in WHT Certificate. Could take values '1','2','3,'4'. By default value is '1' In case the field is blank. |   | ค่าว่าง |
| 69 | 3rd Party Name | 150 |   |   | If populated, The value will be overwrite Bene. Name on the WHT Certificate and WHT Report |   | ค่าว่าง |
| 70 | 3rd Party Address 1 | 70 |   |   | If populated, The value will be overwrite Bene. Address 1 on the WHT Certificate and WHT Report |   | ค่าว่าง |
| 71 | 3rd Party Address 2 | 70 |   |   | If populated, The value will be overwrite Bene. Address 2 on the WHT Certificate and WHT Report |   | ค่าว่าง |
| 72 | 3rd Party Address 3 | 35 |   |   | If populated, The value will be overwrite Bene. Address 3 on the WHT Certificate and WHT Report |   | ค่าว่าง |
| 73 | 3rd Party Address 4 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 74 | (Sending) Debit Bank Code | 10 | 2485 | 2494 | Debit Bank Code 'xxx', System validate against value maintained in the setup database. |   | ค่าว่าง |
| 75 | (Sending) Debit Branch Code | 10 | 2495 | 2504 | Debit Branch Code 'xxxxxxx', System validate against value maintained in the setup database. |   | ค่าว่าง |
| 76 | (Sending) Debit A/C no | 20 | 2505 | 2524 | Debit Account no, System validate against value maintained in the setup database. |   | ค่าว่าง |
| 77 | (Sending) Debit A/C Country Code | 2 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 78 | Transaction Type | 3 | 2527 | 2529 | Purpose Code. Default “04” , ‘01’ (Payroll) and ‘04’ for Payment. |   | ค่าว่าง |
| 79 | Customer Code | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 80 | Customer Name | 150 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 81 | Customer Acro | 20 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 82 | Customer Address 1 | 70 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 83 | Customer Address 2 | 70 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 84 | Customer Address 3 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 85 | Customer Address 4 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 86 | Cust.Ref.1/Shipping Code | 35 |   |   | Shipping Code. System validate against value maintained in the setup database. |   | ค่าว่าง |
| 87 | Cust.Ref.2/Collector Code | 35 |   |   | Collector Code. System validate against value maintained in the setup database. |   | ค่าว่าง |
| 88 | Customer Reference 3 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 89 | Customer Reference 4 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 90 | Customer Reference 5 | 35 |   |   | The field is to be ignored by CMS. |   | ค่าว่าง |
| 91 | (Receiving) Credit Bank Code | 10 | 3105 | 3114 | Credit Bank Code 'xxx', System validate against value maintained in the setup database.. | 5309150001 | ค่าว่าง |
| 92 | (Receiving) Credit Branch Code | 10 | 3115 | 3124 | Credit Bank Code 'xxx', System validate against value maintained in the setup database. | 53091500011 | ค่าว่าง |
| 93 | (Receiving) Credit A/C No. | 20 | 3125 | 3144 | Credi Account no, This would be Filler for cheque payment. This is mandatory for Fund transfer. | 7573025117 | ค่าว่าง |
| Invoice |
| 1 | Invoice Identifies | 3 | 1 | 3 | Fixed value as 'INV' |   | ค่าว่าง |
| 2 | Invoice Data | 75 | 4 | 78 | Invoice details data, free format data entry. |   | ค่าว่าง |

ตัวอย่าง txt file
<![CDATA[TXNน.ส.ทิวาพร จัดนอก 163/44 หมู่ที่ 5 ซอย มังกร-นาคดี 238000.00 380134 14072023คุณทิวาพร จัดนอก ตำบล แพรกษา อำเภอ เมืองสมุทรปราการ 15 กรกฎาคม 2566 238,000.00 0.00 0.00 0.00 จังหวัด สมุทรปราการ 10280 ข0088496เสริมทรัพย์ 1 15/07/2566 0.000116 อโศก ปก.ป.MIND/2566/015310 0.00 0.00 238,000.00 0.00 0.00 MA SATHORN1 OUR 0.00 MTIND02139 TXNนางสิริวรรณ ทองธิราช 41/2 ม.6 332080.00 381025 14072023คุณสิริวรรณ ทองธิราช แขวง ท่าแร้ง เขต บางเขน 15 กรกฎาคม 2566 332,080.00 0.00 0.00 0.00 กรุงเทพมหานคร 10220 K5599668เพิ่มพูนทรัพย์ 3 15/07/2566 0.000172 วิภาวดี ปก.ป.MIND/2566/015314 0.00 0.00 332,080.00 0.00 0.00 MA SATHORN1 OUR 0.00 MTIND02139 TXNนายกษิดิศ จันทรณิธานศรี 170 ซ.เทอดไท 16 ถ.เทอดไท 31962.00 380922 14072023คุณกษิดิศ จันทรณิธานศรี แขวง ตลาดพลู เขต ธนบุรี 15 กรกฎาคม 2566 31,962.00 0.00 0.00 0.00 กรุงเทพมหานคร 10600 F6430652ไทยสมุทรรากแก้ว 15/07/2566 0.000200 ธนบุรี ปก.ป.MIND/2566/015322 0.00 0.00 31,962.00 0.00 0.00 MA SATHORN1 OUR 0.00 MTIND02139 TXNน.ส.พรรธนพร สุวรรณวัฒน์ 199/9 ซอย อมร ถนน นางลิ้่นจี่ 594321.00 381113 14072023คุณพรรธนพร สุวรรณวัฒน์ แขวง ช่องนนทรี เขต ยานนาวา 15 กรกฎาคม 2566 594,321.00 0.00 0.00 0.00 กรุงเทพมหานคร 10120 K5703503เพิ่มพูนทรัพย์ 3 15/07/2566 0.000200 ธนบุรี ปก.ป.MIND/2566/015324 0.00 0.00 594,321.00 0.00 0.00 MA SATHORN1 OUR 0.00 MTIND02139 ]]>

---

## Hyperlinks บนหน้านี้

- [https://drive.google.com/drive/folders/1dxse3eyk62NWhlSKzW0EK07ZoFGd6rlw](https://drive.google.com/drive/folders/1dxse3eyk62NWhlSKzW0EK07ZoFGd6rlw)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
