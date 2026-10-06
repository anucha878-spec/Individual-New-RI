# cf_coa_payment_data

- **Page ID:** 1337721342
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_coa_payment > cf_coa_payment_data
- **Depth:** 6

---

อ้างอิงข้อมูล Sheet : [COA Pay-M 15.02.69 - ACC](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=756897478#gid=756897478)

| event_code | event_name | overdue | posting_key | bank_account | wht | service | account_code | account_name | Remark |
|---|---|---|---|---|---|---|---|---|---|
| PM_FIN_02 | จ่ายเงิน |   | Dr | N | N |   | 23560005 | เจ้าหนี้การค้า |   |
| PM_FIN_02 | จ่ายเงิน |   | Dr | N | Y | BBL_E_WHT | 15590045 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย | Added by patcha.vo 01/07/69 |
| PM_FIN_02 | จ่ายเงิน |   | Cr | N | Y |   | 23523110 | ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | Added by patcha.vo 01/07/69 |
| PM_FIN_02 | จ่ายเงิน |   | Cr | Y | N |   |   |   |   |
| PM_FIN_03 | ค่าธรรมเนียมธนาคาร |   | Dr | N | N |   | 51090050 | ค่าธรรมเนียมธนาคาร |   |
| PM_FIN_03 | ค่าธรรมเนียมธนาคาร | Y | Cr | N | N |   | 23523210 | ค่าธรรมเนียมธนาคารค้างจ่าย |   |
| PM_FIN_03 | ค่าธรรมเนียมธนาคาร |   | Cr | Y | N |   |   |   |   |
| PM_FIN_04 | รับคืนจ่ายเงินไม่สำเร็จ |   | Dr | Y | N |   |   |   |   |
| PM_FIN_04 | รับคืนจ่ายเงินไม่สำเร็จ |   | Cr | N | N |   | 23560005 | เจ้าหนี้การค้า |   |
| PM_FIN_05 | รับคืนค่าธรรมเนียมธนาคาร (จ่ายไม่สำเร็จ) |   | Dr | Y | N |   |   |   |   |
| PM_FIN_05 | รับคืนค่าธรรมเนียมธนาคาร (จ่ายไม่สำเร็จ) | Y | Dr | N | N |   | 23523210 | ค่าธรรมเนียมธนาคารค้างจ่าย |   |
| PM_FIN_05 | รับคืนค่าธรรมเนียมธนาคาร (จ่ายไม่สำเร็จ) |   | Cr | N | N |   | 51090050 | ค่าธรรมเนียมธนาคาร |   |
| PM_FIN_06 | รับคืนเช็คหมดอายุ |   | Dr | Y | N |   |   |   |   |
| PM_FIN_06 | รับคืนเช็คหมดอายุ |   | Cr | N | N |   | 23560005 | เจ้าหนี้การค้า |   |
| PM_FIN_07 | ค่าธรรมเนียมธนาคาร (รายเดือน) |   | Dr | N | N |   | 23523210 | ค่าธรรมเนียมธนาคารค้างจ่าย |   |
| PM_FIN_07 | ค่าธรรมเนียมธนาคาร (รายเดือน) |   | Cr | Y | N |   |   |   |   |

---

## Hyperlinks บนหน้านี้

- [COA Pay-M 15.02.69 - ACC](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=756897478#gid=756897478)
