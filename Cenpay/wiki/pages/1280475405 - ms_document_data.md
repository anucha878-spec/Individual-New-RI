# ms_document_data

- **Page ID:** 1280475405
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/ms_document_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 00. MS - Table Master > ms_document > ms_document_data
- **Depth:** 6

---

**Initial Data** >>> [ms_document](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1192064217#gid=1192064217)
**ประเภทเอกสาร**

| **Table : ms_document_data** |
|---|
| id | กลุ่มเอกสาร | doc_code (รหัสอ้างอิงประเภทเอกสาร) | doc_name (ชื่อประเภทเอกสาร) | Remark |
| 1 | เอกสารประกอบการจ่าย ฝ่ายการเงิน | Invalid_Format_Bank | เอกสารตรวจสอบ format ไม่ผ่านจากธนาคาร |   |
| 2 | Invalid_Format_Manual | เอกสารตรวจสอบ format ไม่ผ่าน Manual รายผู้รับเงิน |   |
| 3 | Result_Transfer | เอกสารบันทึกผลการโอนเงิน |   |
| 4 | Result_Cheque | เอกสารบันทึกผลการขึ้นเงินเช็ค |   |
| 5 | Attachment_Source | เอกสารแนบจากระบบต้นทาง (สำเนาบัญชีธนาคาร, สำเนาบัตรประชาชน, สำเนาใบคำร้อง เป็นต้น) |   |
| *6* | *PSA0049* | *สำเนาบัตรประชาชนผู้เอาประกันภัย* | *ไม่รู้ใครมาเพิ่ม* |
| *7* | *PSA0050* | *สำเนาบัตรประชาชนผู้แทนและผู้ใช้อํานาจปกครองหรือผู้แทนโดยชอบธรรม'* |
| 6 | Template เช็คบริษัท | TEMPLATE_CHEQUE | Template เช็คบริษัท |   |
| **Centralize Payment Enhance Phase 1 R2 Add by thidarat.ph 27/02/2026** |
| 7 | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข | PAYMENT_REQUEST_SURRENDER | เอกสารประกอบคำร้องเวนคืนกรมธรรม์ |   |
| 8 | PAYMENT_REQUEST_FREELOOK | เอกสารประกอบคำร้องยกเลิกกรมธรรม์ |   |
| Insurance Fund \|\| Add by anocha.su |
| 9 | เอกสารประกอบการโอนเงินเข้ากองทุนประกันชีวิต | memo_payment_approved | MEMO-1 |   |
| 10 | memo_board_resolution | MEMO-2 |   |
| 11 | fund_remittance_letter | จดหมายนำส่งเงิน |   |
| 12 | fund_detail_statement | รายงานส่งกองทุน |   |
| 13 | fund_claim_group | Data Claim Group |   |

**กลุ่มเอกสาร**

| **ข้อมูลกลุ่มเอกสาร ใช้สำหรับ Setting Data ในระบบ DMS** |
|---|
| รหัสกลุ่มเอกสาร | ชื่อกลุ่มเอกสาร | รายละเอียดกลุ่มเอกสาร |
| 1000102 | เอกสารประกอบการจ่าย ฝ่ายการเงิน | เอกสารประกอบการจ่าย ฝ่ายการเงิน |
| 1000105 | Template เช็คบริษัท | Template รูปแบบของเช็คธนาคาร (ใช้สำหรับพิมพ์ออกเช็คโดยบริษัท) |
| **Centralize Payment Enhance Phase 1 R2 Add by thidarat.ph 27/02/2026** |
| 1000109 | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข |

DMS Setup
![img](/download/thumbnails/1280475405/image2026-2-5%208%3A28%3A20.png?version=1&modificationDate=1770254900573&api=v2) ![img](/download/thumbnails/1280475405/image2026-2-5%208%3A27%3A40.png?version=1&modificationDate=1770254860956&api=v2)![img](/download/attachments/1280475405/image2026-2-27%2015%3A20%3A31.png?version=1&modificationDate=1772180432364&api=v2)
**Permission**
[Deployment Checklist Template : Centralized Payment (Enhancement & Integration)](https://docs.google.com/spreadsheets/d/1mL13DbgbP9hXqOcbntvyDRPcJtCNJkb1gzfpaF_79Cw/edit?gid=731551764#gid=731551764)

| **ข้อมูล Permission Name ใช้สำหรับ Setting Data ในระบบ DMS** |
|---|
| Action Name | กลุ่มเอกสาร | Permission Name |
| DOWNLOAD | เอกสารประกอบการจ่าย ฝ่ายการเงิน (1000102) | [dms:download:paymentmg](http://dmsdownloadsuittest/) |
| VIEW | เอกสารประกอบการจ่าย ฝ่ายการเงิน (1000102) | [dms:document:paymentmg](http://dmsdocumentsuittest/) |
| UPLOAD | เอกสารประกอบการจ่าย ฝ่ายการเงิน (1000102) | [dms:upload:paymentmg](http://dmsuploadsuittest/) |
| DOWNLOAD | Template เช็คบริษัท | dms:download:templatechq |
| VIEW | Template เช็คบริษัท | dms:document:templatechq |
| UPLOAD | Template เช็คบริษัท | dms:upload:templatechq |
| **Centralize Payment Enhance Phase 1 R2 Add by thidarat.ph 27/02/2026** |
| DOWNLOAD | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข | dms:download:paymentreq |
| VIEW | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข | dms:document:paymentreq |
| UPLOAD | กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข | dms:upload:paymentreq |

DMS Setup
- กลุ่มเอกสาร : เอกสารประกอบการจ่าย ฝ่ายการเงิน (1000102) ![img](/download/thumbnails/1280475405/image2026-2-5%208%3A29%3A47.png?version=1&modificationDate=1770254988320&api=v2)
- กลุ่มเอกสาร : Template เช็คบริษัท (1000105) ![img](/download/thumbnails/1280475405/image2026-2-5%208%3A31%3A2.png?version=1&modificationDate=1770255063086&api=v2)
- กลุ่มเอกสาร : กลุ่มเอกสารประกอบคำร้องจ่ายตามเงื่อนไข (1000109) ![img](/download/thumbnails/1280475405/image2026-2-27%2015%3A33%3A35.png?version=1&modificationDate=1772181215854&api=v2)

---

## Hyperlinks บนหน้านี้

- [ms_document](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1192064217#gid=1192064217)
- [Deployment Checklist Template : Centralized Payment (Enhancement & Integration)](https://docs.google.com/spreadsheets/d/1mL13DbgbP9hXqOcbntvyDRPcJtCNJkb1gzfpaF_79Cw/edit?gid=731551764#gid=731551764)
- [dms:download:paymentmg](http://dmsdownloadsuittest/)
- [dms:document:paymentmg](http://dmsdocumentsuittest/)
- [dms:upload:paymentmg](http://dmsuploadsuittest/)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1280475405/image2026-2-27%2015%3A20%3A31.png?version=1&modificationDate=1772180432364&api=v2
