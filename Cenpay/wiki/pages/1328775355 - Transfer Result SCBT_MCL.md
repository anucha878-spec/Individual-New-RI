# Transfer Result SCBT_MCL

- **Page ID:** 1328775355
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+SCBT_MCL
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result SCBT_MCL
- **Depth:** 5

---

| Column | Field Name | Description | Example | Mapping Data |
|---|---|---|---|---|
| **Transaction **[List]**** |
| A | Batch Reference |   | C0003364 |   |
| B | Customer Payment Reference |   | 20251110123456 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| C | Channel/ Payment Type |   | LBC |   |
| D | Debit Account |   | 100838499 |   |
| E | Beneficiary Name |   | บริษัท เมโทรซิสเต็มส์คอร์ปอเรชั่น จำกัด (มหาชน) |   |
| F | Payment Amount |   | 168346.31 |   |
| G | WHT Amount 1 |   | 7866.65 |   |
| H | WHT Amount 2 |   |   |   |
| I | Debit Amount |   | 160479.66 |   |
| J | Payment Date |   | 19/08/2025 |   |
| K | Cheque Number |   | 981339 | ใช้สำหรับ [หน้าจอ Popup บันทึกผลโอนเงิน Upload File](/pages/viewpage.action?pageId=1290404530) เพื่อรับข้อมูลเลขที่เช็คเท่านั้น |
| L | Payment Status |   | Payment StatusDescriptionSubmitted for Authorisationสร้างคำสั่งสำเร็จ รออนุมัติจากผู้มีอำนาจPartially Authorisedอนุมัติจากผู้มีอำนาจ 1 ท่านFully Authorisedคำสั่งอนุมัติสมบูรณ์Under Processing by Bankอยู่ระหว่างรอดำเนินการจากธนาคารProcessed by Bankธนาคาดำเนินการเรียบร้อยFuture Dateคำสั่งลงวันที่ value date ล่วงหน้า รอดำเนินการในวัน valueReceived After Cutoff Timeได้รับคำสั่งเลยเวลา cut off timeRejected by Bankคำสั่งถูก rejectReleased To Bankคำสั่งถูกส่งเข้ามาที่ะนาคารStoppedคำสั่งถูก stopCredit Returnedคำสั่งถูกตีคืนDraftคำสั่งสร้างด้วยการทึก ไม่พร้อมอนุมัติNo Available Authorisersคำสั่งไม่เข้าเงื่อนไขการอนุมัติได้ | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).statusMapping สถานะที่ PayM ดังนี้ Payment StatusDescriptionProcessed by Bankจ่ายเงินสำเร็จ (PAI)Rejected by Bankจ่ายไม่สำเร็จ (FAI)Credit Returnedจ่ายไม่สำเร็จ (FAI) |
| Payment Status | Description |
| Submitted for Authorisation | สร้างคำสั่งสำเร็จ รออนุมัติจากผู้มีอำนาจ |
| Partially Authorised | อนุมัติจากผู้มีอำนาจ 1 ท่าน |
| Fully Authorised | คำสั่งอนุมัติสมบูรณ์ |
| Under Processing by Bank | อยู่ระหว่างรอดำเนินการจากธนาคาร |
| Processed by Bank | ธนาคาดำเนินการเรียบร้อย |
| Future Date | คำสั่งลงวันที่ value date ล่วงหน้า รอดำเนินการในวัน value |
| Received After Cutoff Time | ได้รับคำสั่งเลยเวลา cut off time |
| Rejected by Bank | คำสั่งถูก reject |
| Released To Bank | คำสั่งถูกส่งเข้ามาที่ะนาคาร |
| Stopped | คำสั่งถูก stop |
| Credit Returned | คำสั่งถูกตีคืน |
| Draft | คำสั่งสร้างด้วยการทึก ไม่พร้อมอนุมัติ |
| No Available Authorisers | คำสั่งไม่เข้าเงื่อนไขการอนุมัติได้ |
| Payment Status | Description |
| Processed by Bank | จ่ายเงินสำเร็จ (PAI) |
| Rejected by Bank | จ่ายไม่สำเร็จ (FAI) |
| Credit Returned | จ่ายไม่สำเร็จ (FAI) |

ตัวอย่าง csv
[Transfer return status.csv](/download/attachments/1328775355/Transfer%20return%20status.csv?version=2&modificationDate=1774168370039&api=v2)![img](/download/attachments/1328775355/image2026-3-22%2015%3A32%3A6.png?version=1&modificationDate=1774168327445&api=v2)

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [หน้าจอ Popup บันทึกผลโอนเงิน Upload File](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404530)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [Transfer return status.csv](http://wiki.thaisamut.co.th/download/attachments/1328775355/Transfer%20return%20status.csv?version=2&modificationDate=1774168370039&api=v2)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1328775355/Transfer%20return%20status.csv?version=2&modificationDate=1774168370039&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1328775355/image2026-3-22%2015%3A32%3A6.png?version=1&modificationDate=1774168327445&api=v2
