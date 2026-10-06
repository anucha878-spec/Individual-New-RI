# Paperbase Cheque - KTB (.xls)

- **Page ID:** 1296793716
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296793716
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Paperbase > Paperbase Cheque - KTB (.xls)
- **Depth:** 5

---

| Column | Field Name | Example |
|---|---|---|
| **Header** |
| A | Account No. | 023-6-06477-0 |
| B | Currency | THB |
| C | Account Name | บมจ. ไทยสมุทรประกันชีวิต |
| D | Account Status | Active |
| E | Alias Name | ไทยสมุทรประกันชีวิต |
| F | Branch Name | SURAWONGSE BR. |
| G | Ledger Balance | 567.59 |
| H | Available Balance | 567.59 |

| Column | Field Name | Example | Mapping Data |
|---|---|---|---|
| **Transaction **[List]**** |
| A | Date | 21-07-2025 18:49:02 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_redeem_date |
| B | Teller Id | 90180 |   |
| C | Transaction Code | CBCA |   |
| D | Description | SBK:14 SBR:5340 ICAS INCL R1 |   |
| E | Cheque No. | 10426145 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_no |
| F | Amount | -1,000,000.00 |   |
| G | Balance | 311,373.59 |   |
| H | Init Br | 0700 |   |

ตัวอย่าง xls
![img](/download/attachments/1296793716/image2025-11-5%2011%3A10%3A29.png?version=1&modificationDate=1762315876545&api=v2)

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1296793716/image2025-11-5%2011%3A10%3A29.png?version=1&modificationDate=1762315876545&api=v2
