# Paperbase Cheque - SCBT (.csv*)

- **Page ID:** 1296793697
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296793697
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Paperbase > Paperbase Cheque - SCBT (.csv*)
- **Depth:** 5

---

| Column | Field Name | Example | Mapping Data |
|---|---|---|---|
| **Transaction **[List]**** |
| A | Account Number | 100838499 |   |
| B | Account Name | OCEAN LIFE INSURANCE PUBL |   |
| C | Address | OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED170/74-83 OCEAN |   |
| D | Currency | THB |   |
| E | Date | 02 Jul 2025 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_redeem_date |
| F | Description | CLEARING CHEQUE 06397247 | ตรวจสอบตำแหน่งข้อมูลดังนี้ ข้อมูลคอลัมน์ Descriptionตัด Spacebarใช้ข้อมูลหลังจากข้อความ CLEARINGCHEQUE06397247 และนับจากตัวอักษรตัวสุดท้ายนับไปทางซ้าย 8 หลัก เป็นเลขที่เช็ค [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_no |
| G | Withdrawal | 25,000,000.00 |   |
| H | Deposit | 0 |   |
| I | Balance | -24,900,000.00 |   |

ตัวอย่าง csv
![img](/download/attachments/1296793697/image2025-11-5%2013%3A19%3A0.png?version=1&modificationDate=1762323588015&api=v2)

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1296793697/image2025-11-5%2013%3A19%3A0.png?version=1&modificationDate=1762323588015&api=v2
