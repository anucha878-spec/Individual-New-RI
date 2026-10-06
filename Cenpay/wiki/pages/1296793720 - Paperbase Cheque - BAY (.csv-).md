# Paperbase Cheque - BAY (.csv*)

- **Page ID:** 1296793720
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296793720
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Paperbase > Paperbase Cheque - BAY (.csv*)
- **Depth:** 5

---

| Column | Field Name | Example | Mapping Data |
|---|---|---|---|
| **Transaction **[List]**** |
| A | ว่าง - วันและเวลาที่ทำรายการ | 01/07/2025 9:11:17 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_redeem_date |
| B | ว่าง - ยอดเงินค่าธรรมเนียม/เช็ค | 900,000.00 |   |
| C | ว่าง - ยอดเงินฝาก/เข้าบัญชี | 1,000.00 |   |
| D | ยอดคงเหลือ | 502,586.13 |   |
| E | B/F - ประเภทรายการ/รหัสรายการ | CL |   |
| F | ยอดเงินคงเหลือยกมา | ฝากเช็คเคลียร์ริ่ง หมายเลขอ้างอิง : 0049522277 | ตรวจสอบตำแหน่งข้อมูลดังนี้ ข้อมูลคอลัมน์ ยอดเงินคงเหลือยกมา ตรวจสอบข้อมูลจากรายการที่มีข้อความ ฝากเช็คเคลียร์ริ่งใช้ข้อมูลนับจากตัวอักษรตัวสุดท้ายนับไปทางซ้าย 8 หลัก เป็นเลขที่เช็ค [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_no |
| G | ว่าง - ช่องทางการทำรายการ | ACH |   |
| H | ว่าง - รหัสอ้างอิงภายใน | 700 |   |

ตัวอย่าง csv
![img](/download/attachments/1296793720/image2025-11-10%2015%3A30%3A56.png?version=1&modificationDate=1762763513720&api=v2)

```

```

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1296793720/image2025-11-10%2015%3A30%3A56.png?version=1&modificationDate=1762763513720&api=v2
