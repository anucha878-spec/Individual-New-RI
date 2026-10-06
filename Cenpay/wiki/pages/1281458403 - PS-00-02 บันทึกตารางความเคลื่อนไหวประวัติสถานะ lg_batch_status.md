# PS-00-02 บันทึกตารางความเคลื่อนไหวประวัติสถานะ lg_batch_status

- **Page ID:** 1281458403
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281458403
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-00 Process กลาง > PS-00-02 บันทึกตารางความเคลื่อนไหวประวัติสถานะ lg_batch_status
- **Depth:** 5

---

| field | description | mapping data |
|---|---|---|
| batch_payment_id | รหัสอ้างอิงตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| batch_status | สถานะดำเนินการระดับ Batch | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_status |
| created_date | วันและเวลาที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก username ที่ทำรายการ |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
