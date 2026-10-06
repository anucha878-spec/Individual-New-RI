# Transfer Result Bank Cheque_SCBT

- **Page ID:** 1287225576
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+Bank+Cheque_SCBT
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result Bank Cheque_SCBT
- **Depth:** 5

---

| Column | Field Name | Description | Example | Mapping Data |
|---|---|---|---|---|
| **Transaction **[List]**** |
| A | Batch Reference |   | C0003364 | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| B | Customer Payment Reference |   | 20251110123456 | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| C | Channel/ Payment Type |   | LBC |   |
| D | Debit Account |   | 100838499 |   |
| E | Beneficiary Name |   | บริษัท เมโทรซิสเต็มส์คอร์ปอเรชั่น จำกัด (มหาชน) |   |
| F | Payment Amount |   | 168346.31 |   |
| G | WHT Amount 1 |   | 7866.65 |   |
| H | WHT Amount 2 |   |   |   |
| I | Debit Amount |   | 160479.66 |   |
| J | Payment Date |   | 19/08/2025 |   |
| K | Cheque Number |   | 981339 |   |
| L | Payment Status |   | Cheque Cleared | Processed by Bank : เช็ครอขึ้นเงิน (lookup_key = 'COS')Cheque Cleared : เช็คขึ้นเงินแล้ว (lookup_key = 'CCL') |

ตัวอย่าง csv

```
CHQ Return status.csv
```

![img](/download/attachments/1287225576/image2025-10-7%2011%3A2%3A3.png?version=1&modificationDate=1759809724376&api=v2)

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [CHQ Return status.csv](https://drive.google.com/file/d/16zIKSuyLHASAYncWITfarFSdQzK3AgUj/view?usp=drive_link)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1287225576/image2025-10-7%2011%3A2%3A3.png?version=1&modificationDate=1759809724376&api=v2
