# Transfer Result Bank Cheque_UOB_CCC -- ยกเลิกช่องทางนี้

- **Page ID:** 1287225581
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1287225581
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result Bank Cheque_UOB_CCC -- ยกเลิกช่องทางนี้
- **Depth:** 5

---

| No. | Filed Name | Length | Start | End | Description | Example | Mapping Data |
|---|---|---|---|---|---|---|---|
| 1 | Client Code | 10 | 1 | 10 | Bank Will ReturnAlign Left |   |   |
| 2 | Beneficiary Name | 70 | 11 | 80 | Align Left Right Pad with " " |   |   |
| 3 | Mail-To-Address1 + Mail-To-Address2 | 200 | 81 | 280 | Align Left Right Pad with " " |   |   |
| 4 | Other Reference (Your Reference of customer) | 10 | 281 | 290 | Your reference of customer Debit Reference NumberAlign Left Right Pad with " " |   | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no |
| 5 | Cheque Date | 8 | 291 | 298 | Bank Will ReturnDDMMYYYY |   |   |
| 6 | Cheque Amount | 15 | 299 | 313 | Bank Will Return 217,953.84 = "000000021795384"Align Right Left Pad with "0" Last two-digit for decimal |   |   |
| 7 | Cheque Number (7 digits) | 7 | 314 | 320 | Bank Will ReturnIf Chq No. = 8 digits, this field will be digit 2-8 of cheque no. |   |   |
| 8 | Payment Details | 10 | 321 | 330 | Align Left Right Pad with " " |   |   |
| 9 | Delivery Method | 2 | 331 | 332 | "OC" = Counter "RM" = Registered Mail "CO" = Courier to Customer "MA" = Mail to Customer "RT" = Return to Customer "OO" = None |   |   |
| 10 | Payment Location | 3 | 333 | 335 | Bank Branch |   |   |
| 11 | Cheque Status | 1 | 336 | 336 | "0" = Paid "1" = Cancel "2" = Pick Up |   | ตรวจสอบเฉพาะรายการที่สถานะเช็คเป็น 1 - Cancel |
| 12 | Cheque Paid Date | 8 | 337 | 344 | DDMMYYYY |   |   |
| 13 | Cancellation Date | 8 | 345 | 352 | DDMMYYYY |   |   |
| 14 | Mail Registration Number | 10 | 353 | 362 |   |   |   |
| 15 | Reason Code | 2 | 363 | 364 | "01" = Cancel |   | ดึงข้อมูลสำหรับบันทึกที่ [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record).remarkบันทึก Cancel |
| 16 | Pick Up Date / Delivery Date | 8 | 365 | 372 | Bank Will Return;DDMMYYYY |   |   |
| 17 | Your Reference (Same as Field No. 4) | 16 | 373 | 388 | Your reference of customerAlign Left Right Pad with " " |   |   |
| 18 | Payment Details (Same Field No.8) | 16 | 389 | 404 | Bank Will ReturnAlign Left Right Pad with " " |   |   |
| 19 | Cheque Number (8 digits as BOT announced) | 10 | 405 | 414 | Align Right Left Pad with " " |   |   |

ตัวอย่าง txt file
<![CDATA[RFORD02139ด.ช.ชยางกูร ทิพแสง 20 หมู่ที่ 11 173463 310520230000000012000000692812คุณชยางกูรMA 1 27062023 173463 คุณชยางกูร ทิพแส0010692812 RFORD02139พระอำนาจ นวลโคกสูง 238 หมู่ที่ 13 167522 281220220000000024000000609403คุณอำนาจ นMA 1 27062023 167522 คุณอำนาจ นวลโคกส0010609403]]>

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record)
