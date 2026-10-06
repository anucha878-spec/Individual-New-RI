# Paperbase Cheque - UOB (.csv*)

- **Page ID:** 1296793703
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296793703
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Paperbase > Paperbase Cheque - UOB (.csv*)
- **Depth:** 5

---

| Column | Field Name | Example |
|---|---|---|
| **Header** |
| A |   | H1 |
| B | เลขที่บัญชี | 9033029787 |
| C | ประเภท | บัญชีกระแสรายวัน |
| D | สกุลเงิน | THB |
| E | ชื่อบัญชี | บมจ. ไทยสมุทรประกันชีวิต |
| F | จากวันที่ | 01/07/2025 |
| G | ถึงวันที่ | 23/07/2025 |

| Column | Field Name | Example | Mapping Data |
|---|---|---|---|
| **Transaction **[List]**** |
| A |   | H1 |   |
| B | เลขที่บัญชี | 9033029787 |   |
| C | วันที่มีผล | 01/07/2025 |   |
| D | วันที่ | 01/07/2025 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_redeem_date |
| E | เวลา | 08:56:23 AM |   |
| F | รายละเอียด | CHQ INW 10127742 | ตรวจสอบตำแหน่งข้อมูลดังนี้ ข้อมูลคอลัมน์ รายละเอียด ตัด Spacebarใช้ข้อมูลหลังจากข้อความ CHQINW10127742 และนับจากตัวอักษรตัวสุดท้ายนับไปทางซ้าย 8 หลัก เป็นเลขที่เช็ค [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).cheque_no |
| G | เลขที่อ้างอิงของคุณ |   |   |
| H | เลขที่อ้างอิงของเรา |   |   |
| I | เลขที่เช็ค |   |   |
| J | เลขที่อ้างอิง5 |   |   |
| K | หมายเหตุ |   |   |
| L | เลขที่อ้างอิง7 |   |   |
| M | ฝาก | 0 |   |
| N | ถอน | 340,000.00 |   |
| O | ยอดเงินคงเหลือ | 16,027.00 |   |

ตัวอย่าง csv
![แสดง image.png](https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEVrgMJcMzhGD%2FaA0CjuAia0DiBfFsUODfF1vcAvjJg6tnclByzf8Wn2AfosdrP9%2BDuFtEmDI%2BULA3URfMrYiCsWiIfzZxfV3W2xIURV7Ou59ZfM3yFTZPUugxw7aRLFEoxVx15oqDKuj5ntmR9YS5OFAGvtZP8aohZaA1dRBA9B%2B5MRXeqxLUwf76QkngNblV354oFeUPDOj3ASY4fRiyDwarJnOpKCIVjQPlXEGj7iIuD%2FbEciP5Fx2Yn0QFIbUDHlX6lNDIN9cV7YCAy8eeAgVsIakGUwbuji46wmpTt4HdhHm%2FZOFxOAfYdg9nYtkhw58yUjmndAI%2BGa11Qus6EBpObCsbaMPeFcttYOJR1llZuDR5WBNt%2F01qC79dzqE7PBSiudUX9PSjTMW1LEh3apbeqSpYZC1xAMeicl6BrH2gXqnCE95nNHdgyqPCo%2FIASRPC2QIMNuGxvZ66JTqRNf8r7dolqdS%2B%2BxLP99F7I6iZ%2FxKKXKFDXAEVwSru9%2BmIl7Z93h1F9nI5AeVJWWlUZD5irUA%2FRRcYOLq6CabfPkVW96EGRWSw0topm8lv4w%2BDV0q0%2FWwaCo%2BB7%2Fow%3D%3D&allow_caching=true&sz=w1365-h650-rw&auditContext=forDisplay)

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
