# Transfer Result TTB

- **Page ID:** 1287225572
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+TTB
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result TTB
- **Depth:** 5

---

| No | Field Name | Length | From | To | Description | Example | Mapping Data |
|---|---|---|---|---|---|---|---|
| **Transaction **[List]**** |
| 1 | Record Identifier | 3 | 1 | 3 | กำหนดค่า Default ให้เป็น "TXN" | TXN |   |
| 2 | Payer Name (On behalf of) | 120 | 4 | 123 | ชื่อผู้สั่งจ่าย | Company Name |   |
| 3 | Beneficiary Name | 130 | 124 | 253 | ชื่อผู้รับเงิน (กรณีจ่ายเป็นเช็ค ต้องสะกดอย่างถูกต้อง) | Payee Name |   |
| 4 | Mail to Name | 40 | 254 | 293 | ชื่อผู้เอกสารทางไปรษณีย์ (กรณีจ่ายเช็คโดยให้ส่งทาง Mail) |   |   |
| 5 | Beneficiary Address 1 | 40 | 294 | 333 | ที่อยู่ของผู้รับเงิน ช่องที่ 1 |   |   |
| 6 | Beneficiary Address 2 | 40 | 334 | 373 | ที่อยู่ของผู้รับเงิน ช่องที่ 2 |   |   |
| 7 | Beneficiary Address 3 | 40 | 374 | 413 | ที่อยู่ของผู้รับเงิน ช่องที่ 3 |   |   |
| 8 | Beneficiary Address 4 | 40 | 414 | 453 | ที่อยู่ของผู้รับเงิน ช่องที่ 4 |   |   |
| 9 | Filler | 10 | 454 | 463 | เว้นว่าง |   |   |
| 10 | Customer Reference | 16 | 464 | 479 | เลขที่อ้างอิงของรายการ เช่น Payment Voucher No. |   |   |
| 11 | Effective Date | 8 | 480 | 487 | วันที่รายการมีผล (วันที่บนเช็ค) เป็นปี ค.ศ. | 15052025 |   |
| 12 | Pickup Date | 8 | 488 | 495 | วันที่ให้รับเช็ค (วันที่เดียวกับ "Effective Date") เป็นปี ค.ศ. | 15052025 |   |
| 13 | Payment Currency | 3 | 496 | 498 | สกุลเงินที่จ่าย (เช่น THB = บาท) | THB |   |
| 14 | Comcode(4)+Business area(4)+Fisical year(4) | 15 | 499 | 513 | (เฉพาะระบบ SAP เท่านั้น) |   |   |
| 15 | Run Date + Identification (15) | 15 | 514 | 528 | (เฉพาะระบบ SAP เท่านั้น) |   |   |
| 16 | Vendor Code or ID | 20 | 529 | 548 | (รหัสประจำตัวของผู้รับเงิน) ถ้ามี | 00019648047 |   |
| 17 | Debit Account Number | 20 | 549 | 568 | เลขที่บัญชีสำหรับตัดจ่าย (บัญชีที่มีกับธนาคารทหารไทย) 0 + เลขที่บัญชี 10 ตัวและ shift left | 00000000000 |   |
| 18 | Payment Amount | 15 | 569 | 583 | จำนวนเงินที่จ่าย เช่น 9999.99 (ไม่ต้องใส่ค่า '0' นำหน้าจำนวนเงิน) | 5.00 |   |
| 19 | Beneficiary Bank Branch Code / SWIFT Code | 16 | 584 | 599 | เฉพาะบริการประเภทการโอนเงิน จำเป็นต้องระบุรหัสธนาคารของผู้รับเงิน และรหัสสาขาของธนาคารผู้รับเงิน | 0140004 |   |
| 20 | Beneficiary's Account Number | 20 | 600 | 619 | เฉพาะบริการประเภทการโอนเงิน จำเป็นต้องระบุเลขที่บัญชีของผู้รับเงิน | 00454908321 |   |
| 21 | Transaction Code for "SMART" | 2 | 620 | 621 | เฉพาะบริการ SMART กำหนดค่า Default ให้เป็น 01 (จ่ายเงินเดือน), 04 (จ่ายค่าสินค้า/บริการ), 59 (อื่นๆ) | 04 |   |
| 22 | Objective Code for "Bahtnet" | 2 | 622 | 623 | เฉพาะบริการ BAHTNET กำหนดค่า Default ให้เป็น 00 (อื่นๆ) | 00 |   |
| 23 | Delivery Method - (For Cheques) WHT Delivery Method - (For all domestic transfer) | 2 | 624 | 625 | เฉพาะบริการจ่ายโดยเช็ค ให้ระบุOC = counter (มารับเช็คผ่านเคานตอร์สาขาธนาคาร),MA = mail (ให้ธนาคารส่งไปรษณีย์ให้ผู้รับเช็ค),RT = return (พิมพ์เช็ค แล้วผู้สั่ง่จ่ายมารับเช็คเพื่อนำไปจ่ายเช็คเอง) |   |   |
| 24 | Pickup Location | 20 | 626 | 645 | เฉพาะบริการจ่ายโดยเช็ค ให้ระบุสาขารับเช็ค Manager Cheque PHAHONYOTHIN หรือ SILOM หรือ MAHAPRUETARAM หรือ SAMUTSAKORN Demand Draft BC-CHONBURI BC-HADYAI BC-NAKHONRATCHASIMA BC-RANGSIT BC-RAYONG BC-SAMUTSAKORN BC-SARABURI |   |   |
| 25 | Advise Mode | 5 | 646 | 650 | วิธีการแจ้งผู้รับเงิน ได้แก่ "FAX", "EMAIL" | EMAIL |   |
| 26 | Beneficiary's Fax Number | 50 | 651 | 700 | หากให้แจ้งทาง Fax ให้ระบุหมายเลข Fax ของผู้รับเงิน |   |   |
| 27 | Beneficiary's Email Address | 50 | 701 | 750 | หากให้แจ้งทาง Email ให้ระบุ Email address ของผู้รับเงิน (1 email address เท่านั้น) | wuttinan.sos@ttbbank.com |   |
| 28 | Beneficiary's Mobile Number | 50 | 751 | 800 | (For SMS)หากแจ้งทาง SMS ให้ระบุหมายเลขมือถือ ตัวเลขเท่านั้น วางตำแหน่งชิดซ้าย |   |   |
| 29 | Charge On Account of | 13 | 801 | 813 | ระบุผู้รับภาระค่าธรรมเนียมรายการ "OUR" = ผู้สั่งจ่าย รับภาระค่าธรรมเนียมรายการ "BEN" = ผู้รับเงิน เป็นผู้รับภาระค่าธรรมเนียมรายการ "SHA" = Share (apply only to BahtNet) | OUR |   |
| 30 | Transaction Type | 3 | 814 | 816 | กรณีจ่ายโอนเงินผ่านระบบ SMART ให้ระบุ MCL กรณีจ่ายโอนเงินผ่านระบบ SMART ภายในวันเดียวกัน = SCS กรณีจ่ายโอนเงินผ่านระบบ BAHTNET ให้ระบุ BNT กรณีจ่ายโอนเงินซึ่งเป็นบัญชี ttb เหมือนกัน ให้ระบุ DCR กรณีหักบัญชีซึ่งเป็นบัญชี ttb เหมือนกัน ให้ระบุ DDR กรณีรายการจ่ายเงินเดือน (บัญชี ttb) ให้ระบุ PAY, PRS, PRM กรณีโอนเงินระหว่างบัญชี ให้ระบุ OAT กรณีจ่ายโอนเงินผ่าน PromptPay Bulk Same Day ให้ระบุ - PBS กรณีจ่ายโอนเงินผ่าน PromptPay Bulk Next Day ให้ระบุ - PBN กรณีจ่ายโอนเงินผ่าน PromptPay Payroll Same Day ให้ระบุ - PBS กรณีจ่ายโอนเงินผ่าน PromptPay Payroll Next Day ให้ระบุ - PBN กรณีจ่ายโอนเงินผ่าน PromptPay Actual Account ให้ระบุ - PPA | PPA |   |
| 31 | DD Sameday, DC Sameday, SMART Sameday Posting Interval | 5 | 817 | 821 | เฉพาะบริการ Direct Debit/ Direct Credit เท่านั้น ให้ระบุรอบ รอบ 09:30 ระบุ "00004" รอบ 11:30 ระบุ "00001" รอบ 13:30 ระบุ "00005" รอบ 15:30 ระบุ "00002" รอบ 17:30 ระบุ "00003" เฉพาะบริการ Smart Sameday ให้ระบุรอบ Cut off รอบ 10:00 ระบุ SC2 (เข้าบัญชีประมาณ 15:00 น) |   |   |
| 32 | Comp ID | 4 | 822 | 825 | เฉพาะบริการ Direct Debit/ Direct Credit เท่านั้น ให้ระบุ Comp ID ที่ธนาคารกำหนดให้ (ถ้ามี) |   |   |
| 33 | Document(s) Required | 30 | 826 | 855 | เฉพาะบริการจ่ายโดยเช็ด สามารถระบุเอกสารที่ต้องการให้เรียกคืนจากผู้รับเงินเช๋น REC = ใบเสร็จฯ หรือ TAX = ใบกำกับภาษี เป็นต้น (will be imported into Payment Details) |   |   |
| 34 | Payment Details | 105 | 856 | 960 | ระบุบันทึกหมายเหตุอื่นๆ (ถ้ามี) |   |   |
| 35 | Beneficiary Bank Name | 70 | 961 | 1030 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุชื่อธนาคารปลายทาง |   |   |
| 36 | Beneficiary Bank Address1 | 40 | 1031 | 1070 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุที่อยู่ของธนาคารปลายทาง -ช่องที่ 1 |   |   |
| 37 | Beneficiary Bank Address2 | 40 | 1071 | 1110 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุที่อยู่ของธนาคารปลายทาง -ช่องที่ 2 |   |   |
| 38 | Beneficiary Bank Address3 | 40 | 1111 | 1150 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุที่อยู่ของธนาคารปลายทาง -ช่องที่ 3 |   |   |
| 39 | Beneficiary Bank Address4 | 40 | 1151 | 1190 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุที่อยู่ของธนาคารปลายทาง -ช่องที่ 4 |   |   |
| 40 | FX Rate Contract No. | 16 | 1191 | 1206 | เฉพาะบริการโอนเงินไปต่างประเทศ ให้ระบุเลขที่สัญญาจอง Exchange Rate |   |   |
| 41 | ttb Cheque Number | 7 | 1207 | 1213 | เฉพาะบริการจ่ายโดยเช็ค เมื่อพิมพ์เช็คให้แล้ว ธนาคารจะระบุเลขที่เช็คที่พิมพ์ออกมาแล้วคืนกลับมาใน field นี้ในรูปแบบ Text file ที่อยู่ใน format เดิม |   |   |
| 42 | Status | 2 | 1214 | 1215 | เฉพาะบริการประเภทโอนเงิน เมื่อธนาคารได้รับผลรายการแล้ว จะระบุผลของรายการคืนกลับมาใน field นี้ในรูปแบบ Text file ที่อยู่ใน format เดิม |   |   |
| 43 | SMART Comp ID | 15 | 1216 | 1230 | Company ID for SMART ITMX member |   |   |
| 44 | New ttb Cheque Number | 16 | 1231 | 1246 | เฉพาะบริการจ่ายโดยเช็ค เมื่อพิมพ์เช็คให้แล้ว ธนาคารจะระบุเลขที่เช็คที่พิมพ์ออกมาแล้วคืนกลับมาใน field นี้ในรูปแบบ Text file ที่อยู่ใน format เดิม เพื่อรองรับ Cheque 8 digits |   |   |
| 45 | Error Code | 10 | 1247 | 1256 | Reject Error Code |   |   |
| 46 | Reason | 100 | 1257 | 1356 | Reject Reason Information |   | ดึงข้อมูลสำหรับบันทึกที่ [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record).remark |
| 44 | Batch Reference Number | 16 | 1357 | 1372 | Batch Reference Number (only for package) |   | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 45 | Transaction Reference Number | 17 | 1373 | 1389 | Transaction Reference Number (generated automatically by system) |   | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 46 | Payer Proxy Type | 10 | 1390 | 1399 | Type of Payer ID for Promtpay |   |   |
| 47 | Payer Proxy Value | 100 | 1400 | 1499 | Value of Payer ID |   |   |
| 48 | Payee Proxy Type | 10 | 1500 | 1509 | Type of Payee ID for Promtpay |   |   |
| 49 | Payee Proxy Value | 100 | 1510 | 1609 | Value of Payee ID |   |   |
| 50 | Collector ID Card No 1 | 20 | 1610 | 1629 | Collector ID Card No 1 |   |   |
| 51 | Collector name 1 | 100 | 1630 | 1729 | Collector name 1 |   |   |
| 52 | Collector company name 1 | 130 | 1730 | 1859 | Collector company name 1 |   |   |
| 53 | Collector ID Card No 2 | 20 | 1860 | 1879 | Collector ID Card No 2 |   |   |
| 54 | Collector name 2 | 100 | 1880 | 1979 | Collector name 2 |   |   |
| 55 | Collector company name 2 | 130 | 1980 | 2109 | Collector company name 2 |   |   |
| 56 | Collector ID Card No 3 | 20 | 2110 | 2129 | Collector ID Card No 3 |   |   |
| 57 | Collector name 3 | 100 | 2130 | 2229 | Collector name 3 |   |   |
| 58 | Collector company name 3 | 130 | 2230 | 2359 | Collector company name 3 |   |   |
| 59 | Cheque Status | 15 | 2360 | 2374 | เฉพาะบริการประเภทเช็ค เมื่อธนาคารได้รับผลรายการแล้ว จะระบุผลของรายการคืนกลับมาใน field นี้ในรูปแบบ Text file ที่อยู่ใน format เดิม |   |   |
| 60 | Cheque Released Date | 8 | 2375 | 2382 | Refered to ChequeAllStatus Report (Pre-Canned) |   |   |
| 61 | Cheque Paid Date | 8 | 2383 | 2390 | Refered to ChequeAllStatus Report (Pre-Canned) |   |   |
| 62 | Cheque Expired/Hold/Cancelled/Stopped/Returned Date | 8 | 2391 | 2398 | Refered to ChequeAllStatus Report (Pre-Canned) |   |   |
| 63 | Filler | 99 | 2399 | 2497 | For future use. Use space as filler. |   |   |
| 64 | End of Record Indicator | 3 | 2498 | 2500 | กำหนดค่า Default ให้เป็น "END" | END |   |

ตัวอย่าง text file
<![CDATA[TXNCompany Name Payee Name ชื่อ ผู้รับเงิน . Cust Reference 1505202515052025THB 0019648047 5.00014 00454908321 0400 EMAIL wuttinan.sos@ttbbank.com,tumbabor@gmail.com OUR PPA Payment Details 4 B247088 04-INACTIVE ACCOUNT (B247088) PPCG251358958461PPR2513575534852 END]]>

---

## Hyperlinks บนหน้านี้

- [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
