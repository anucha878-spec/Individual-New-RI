# Transfer Result SCB_ORFT

- **Page ID:** 1287225570
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+SCB_ORFT
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result SCB_ORFT
- **Depth:** 5

---

| No | Field | Length | From | To | Description | Mapping Data |
|---|---|---|---|---|---|---|
| **Header** |
| 1 | Record Type | 3 | 1 | 3 | Fix "500" |   |
| 2 | Create Date | 8 | 4 | 11 | Format : CCYYMMDD |   |
| 3 | Create Time | 6 | 12 | 17 | Format : HHMMSS |   |
| 4 | File Reference | 32 | 18 | 49 | Description (32) |   |
| 5 | Company Id | 12 | 50 | 61 | S1 Corporate ID |   |
| 6 | Transfer Type | 70 | 62 | 131 | RFT : ORFT (Online Retail Funds Transfer) PPY : Prompt Pay |   |
| 7 | Channel ID | 20 | 132 | 151 | S1 |   |
| 8 | Batch Reference | 35 | 152 | 186 | S1 Transaction ID | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 9 | Value Date | 8 | 187 | 194 | Format : CCYYMMDD |   |
| **Detail** |
| 1 | Record Type | 3 | 1 | 3 | Fix "510" |   |
| 2 | Payment Currency | 3 | 4 | 6 | Currency Code |   |
| 3 | Payment Amount | 16 | 7 | 22 | Transfer Amount |   |
| 4 | Beneficiary Account | 25 | 23 | 47 | Credit Account No. |   |
| 5 | Beneficiary Name | 70 | 48 | 117 | Credit Account Name |   |
| 6 | Beneficiary Nick Name | 70 | 118 | 187 | Beneficiary Name from input file |   |
| 7 | Beneficiary Bank Name | 35 | 188 | 222 | Beneficiary Bank Name |   |
| 8 | Beneficiary Bank Code | 3 | 223 | 225 | Beneficiary Bank Code |   |
| 9 | Proxy Type | 3 | 226 | 228 | กรณี Transfer Type = PPY, field นี้ต้องมีค่าเสมอ - TAX = Tax ID - NAT = National ID - MOB = Mobile No. |   |
| 10 | CID No. / Tax ID | 13 | 229 | 241 | รหัสบัตรประชาชน หรือ Tax ID (*ขึ้นกับ Proxy Type ว่าระบุเป็นข้อมูลใด) |   |
| 11 | Mobile No. | 10 | 242 | 251 | เบอร์โทรศัพท์ (*ขึ้นกับ Proxy Type ว่าระบุเป็นข้อมูลใด) |   |
| 12 | Transaction Remark | 32 | 252 | 283 |   | [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 13 | Processing Status | 1 | 284 | 284 | S = Successfully Processed F = REJECTED BY BANK/BACK OFFICE |   |
| 14 | Processing Remark | 100 | 285 | 384 | Status Description | ดึงข้อมูลสำหรับบันทึกที่ [tx_mapping_reject_record](/display/RDSCPENH/tx_mapping_reject_record).remark |
| **Trailer** |
| 1 | Record Type | 3 | 1 | 3 | Fix "599" |   |
| 2 | Total No. of Transaction | 8 | 4 | 11 | Total count all Detail rec. |   |
| 3 | Total Transfer Amount | 16 | 12 | 27 | Summary of transfer amount |   |

ตัวอย่าง text file
<![CDATA[A2FE0F065602B42EDC1054C686B1049E219BC570 001CBZ2271 030117014203 20220301170142BCM 002RFT2022030201075550002100642023333 020064THB0000000269980000000000010000040642023333 020064 0030000018952047060 น.ส.วิไลพร คำอาจ 0000000107395000THB004 K-BANK 004 00000001 0030000021201412877 นางสุนีย์ มุ่งหมาย 0000000065095000THB004 K-BANK 004 00000001 0030000031038788880 น.ส.ศศิธร หาญณรงค์ 0000000050495000THB004 K-BANK 004 00000001 0030000043069037285 นายชาติชาย เลยวานิชย์เจริญ 0000000046995000THB011 TMB BANK 011 00000001 9990000010000040000000269980000]]>

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record)
