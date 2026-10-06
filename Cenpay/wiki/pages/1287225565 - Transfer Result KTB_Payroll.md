# Transfer Result KTB_Payroll

- **Page ID:** 1287225565
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+KTB_Payroll
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result KTB_Payroll
- **Depth:** 5

---

| No. | Field | Length | From | To | Description | Example | Mapping Data |
|---|---|---|---|---|---|---|---|
| **Header** |
| 1 | File Type | 2 | 1 | 2 | กำหนดค่าเท่ากับ 10 |   |   |
| 2 | Record Type | 1 | 3 | 3 | กำหนดค่าเท่ากับ 1 |   |   |
| 3 | Batch Number | 6 | 4 | 9 | Running Number |   | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 4 | Sending Bank Code | 3 | 10 | 12 | รหัสธนาคารผู้ส่งข้อมูล |   |   |
| 5 | Total Transaction in Batch | 7 | 13 | 19 | จำนวนรายการทั้งหมดใน Batch |   |   |
| 6 | Total Amount | 19 | 20 | 38 | จำนวนเงินทั้งหมดใน Batch |   |   |
| 7 | Effective Date | 8 | 39 | 46 | วันที่รายการมีผล DDMMYYYY ปีคศ. |   |   |
| 8 | Transaction Code | 1 | 47 | 47 | D- Debit C-Credit |   |   |
| 9 | Receiver No. | 8 | 48 | 55 | Abbreviation of activities |   |   |
| 10 | Company ID | 16 | 56 | 71 | Company ID on KTB CorporateOnline |   |   |
| 11 | User ID | 20 | 72 | 91 | User ID (Group Maker) on KTBCorporate Online |   |   |
| 12 | Fillers | 407 | 92 | 498 | Fillers |   |   |
| 13 | Carriage Return Line Feed | 2 | 499 | 500 | เป็นคำสั่งปิดบรรทัดและขึ้นบรรทัดใหม่ |   |   |
| **Details** |   |
| 1 | File Type | 2 | 1 | 2 | กำหนดเท่ากับ 10 |   |   |
| 2 | Record Type | 3 | 3 | 3 5 | กำหนดเท่ากับ 2 |   |   |
| 3 | Batch No. | 6 | 4 6 | 9 11 | Running Number |   |   |
| 4 | Receiving Bank | 3 | 10 12 | 12 14 | รหัสธนาคารปลายทาง |   |   |
| 5 | Receiving Branch Code | 4 | 13 15 | 16 18 | รหัสสาขาปลายทาง |   |   |
| 6 | Receiving A/C | 11 | 17 19 | 27 29 | เลขที่บัญชีปลายทาง |   |   |
| 7 | Sending Bank Code | 3 | 28 30 | 30 32 | รหัสธนาคารต้นทาง |   |   |
| 8 | Sending Branch Code | 4 | 31 33 | 34 36 | รหัสสาขาต้นทาง |   |   |
| 9 | Sending A/C | 11 | 35 37 | 45 47 | เลขที่บัญชีต้นทาง |   |   |
| 10 | Effective Date | 8 | 46 48 | 53 55 | วันที่รายการมีผล DDMMYYYY คศ. |   |   |
| 11 | Service Type | 2 | 54 56 | 55 57 | กำหนดค่าตามประเภทรายการ |   |   |
| 12 | Clearing House Code | 2 | 56 58 | 57 69 | รหัส Clearing House |   |   |
| 13 | Amount | 17 | 58 60 | 74 76 | จำนวนเงินโอน |   | นำจำนวนเงินไปคำนวณรายการที่จ่ายสำเร็จ/จ่ายไม่สำเร็จ และอัปเดตในตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)success_transaction : จำนวนรายการจ่ายสำเร็จ ระดับ vouchersuccess_amount : จำนวนเงินจ่ายสำเร็จระดับ voucherunsuccess_transaction : จำนวนรายการจ่ายไม่สำเร็จระดับ voucherunsuccess_amount : จำนวนเงินจ่ายไม่สำเร็จระดับ voucher |
| 14 | Receiver Info. | 8 | 75 77 | 82 84 | Abbreviation of activities |   |   |
| 15 | Receiver ID | 10 | 83 85 | 92 94 | Receiver ID |   |   |
| 16 | Receiver Name | 100 | 93 95 | 192 194 | ชื่อผู้รับโอน |   |   |
| 17 | Sender Name | 100 | 193 195 | 292 294 | ชื่อผู้โอน |   |   |
| 18 | Other Info 1 | 40 | 293 295 | 332 334 | ข้อมูลอื่นๆ |   |   |
| 19 | DDA Ref 1 | 18 | 333 335 | 350 352 | รหัสอ้างอิงการสมัคร DDA Ref 1 |   |   |
| 20 | Reserve Field | 2 | 351 353 | 352 354 | Reserve Field |   |   |
| 21 | Ref No. / DDA Ref 2 | 18 | 353 355 | 370 372 | ข้อมูลอ้างอิงลูกค้ารายย่อย | 20251110123456 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 22 | Reserve Field | 2 | 371 373 | 372 374 | Reserve Field |   | ดึงข้อมูลสำหรับบันทึกที่ [tx_mapping_reject_record](/display/RDSCPENH/tx_mapping_reject_record).remark |
| 23 | Other Info 2 | 20 | 373 375 | 392 394 | ข้อมูลอื่นๆ 2 |   |   |
| 24 | Ref Running Number | 6 | 393 395 | 398 400 | เลขที่อ้างอิงกำหนดโดยธนาคาร |   |   |
| 25 | Status | 2 | 399 401 | 400 402 | สถานะของรายการ |   |   |
| 26 | E-mail Address | 40 | 401 403 | 440 442 | E-mail แจ้งกลับลูกค้า |   |   |
| 27 | SMS/Mobile Phone | 20 | 441 443 | 460 462 | SMS แจ้งกลับลูกค้า |   |   |
| 28 | Receiving Sub-Branch Code | 4 | 461 463 | 464 466 | รหัสสาขาย่อยปลายทาง |   |   |
| 29 | Fillers | 34 | 465 467 | 498 500 | Fillters |   |   |
| 30 | Carriage Return Line Feed | 2 | 499 501 | 500 502 | เป็นคำสั่งปิดบรรทัดและขึ้นบรรทัดใหม่ |   |   |

<![CDATA[1010000010060000434000000000006422978020062023C00000000 OCLI001637 10200000100604020402020842500600230023105986820062023020000000000000017712000000000000000000นาย ศุภกฤต ขุนภักดี OCEANIN PY-20230615-00891 00000100 10200000100606310631111968400600230023105986820062023020000000000000071285000000000000000000นาง อุดม มีสิน OCEANIN PY-20230615-00892 00000200 10200000100604500450007172500600230023105986820062023020000000000000157500000000000000000000นาย สมัย โคตพันธุ OCEANIN PY-20230615-00893 00000300 10200000100604310431100247500600230023105986820062023020000000000000249860000000000000000000นาง มุกดาวัลย์ อาร์ครุส OCEANIN PY-20230615-00894 00000400 10200000100605090509114371800600230023105986820062023020000000000001417757000000000000000000นาย ปัญญา ชมภู OCEANIN PY-20230615-00895 00000500 10200000100603250325127893200600230023105986820062023020000000000000367333000000000000000000นาง วิลัย สุรักษ์ OCEANIN PY-20230615-00896 00000600 10200000100609100910118242000600230023105986820062023020000000000000090608000000000000000000น.ส. ธัญมน จิตนาธรรม OCEANIN PY-20230615-00897 00000700 10200000100601150115011730300600230023105986820062023020000000000000005600000000000000000000นาย เถาว์ แสงสว่าง OCEANIN PY-20230615-00898 00000800 10200000100605070507196217900600230023105986820062023020000000000000281159000000000000000000นาง อรพรรณ สุภาพ OCEANIN PY-20230615-00899 00000900 10200000100604310431020562300600230023105986820062023020000000000000003100000000000000000000นาย ทองใบ ผลทิพย์ OCEANIN PY-20230615-00900 00001000 10200000100603250325132221400600230023105986820062023020000000000000050511000000000000000000นาย บัวพัน ปัสสาพันธ์ OCEANIN PY-20230615-00901 00001100 ]]>

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record)
