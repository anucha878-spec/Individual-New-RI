# Paperbase Cheque - KB (.csv)

- **Page ID:** 1296793713
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296793713
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Paperbase > Paperbase Cheque - KB (.csv)
- **Depth:** 5

---

*อ่านไฟล์ด้วย Encode TIS-620

| Column | Field Name | Example |
|---|---|---|
| ****Header**** |
| A | รายการเดินบัญชีของวันก่อนหน้า | 7181013693 |
| B | เลขที่บัญชี | THB |
| C | สกุลเงิน | หักบัญชีด้วยเช็ค |
| D | วันที่ ตั้งแต่วันที่ | 01-ก.ค.-2568 |
| E | ถึงวัน | 23-ก.ค.-2568 |
| F | ชื่อบัญชี | OCEAN LIFE INSURANCE PCL. |
| G | ชื่อสาขา | สาขาถนนรัชดาภิเษก (สุขุมวิท-พระรามที่ 4) |
| H | เข้าบัญชี | 18 |
| I | จำนวนเงินนำฝากเข้าบัญชีทั้งหมด | 12370000 |
| J | หักบัญชี | 161 |
| K | จำนวนเงินที่หักบัญชีทั้งหมด | 20316594.61 |

| Column | Field Name | Example | Mapping Data |
|---|---|---|---|
| **Transaction **[List]**** |
| A | วันที่รายการมีผล | 01-ก.ค.-2568 | Date Format อ่านปีพศ. 2 หลักและ 4 หลัก — update by patcha.vo ([issues/60452](https://redmine.ochi.link/issues/60452))[tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_redeem_date |
| B | เวลา | 8:38:29 |   |
| C | รายการ | หักบัญชีด้วยเช็ค |   |
| D | เลขที่เช็ค | 43294570 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_no |
| E | จำนวนเงินหักบัญชี | 25000 |   |
| F | จำนวนเงินนำฝากเข้าบัญชี |   |   |
| G | ยอดคงเหลือ | 16354232.36 |   |
| H | หมายเลข | C0514942 |   |
| I | สาขา | 792 |   |
| J | วันที่ทำรายการ | 01-ก.ค.-2568 |   |
| K | ช่องทาง | สาขาแม่โจ้ |   |
| L | รายละเอียด | เช็คเลขที่ 43294570 |   |

ตัวอย่าง csv
![img](/download/attachments/1296793713/image2025-11-5%2010%3A39%3A29.png?version=1&modificationDate=1762314016289&api=v2)

```

```

---

## Hyperlinks บนหน้านี้

- [issues/60452](https://redmine.ochi.link/issues/60452)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1296793713/image2025-11-5%2010%3A39%3A29.png?version=1&modificationDate=1762314016289&api=v2
