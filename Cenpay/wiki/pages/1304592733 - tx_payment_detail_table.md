# tx_payment_detail_table

- **Page ID:** 1304592733
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_table
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_detail > tx_payment_detail_table
- **Depth:** 6

---

| NOTE :: เมื่อบันทึก/อัปเดตข้อมูลในตารางนี้ ต้องบันทึก Transection ใหม่ในตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เสมอ |
|---|
| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | payment_header_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 3 | FOREIGN KEY | batch_payment_id | Int8 |   | Y | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 4 | FOREIGN KEY | payment_header_split_id | Int8 |   | Y | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ ที่มีรายการ Split | [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-09-18 |   |
| 5 | FOREIGN KEY | oper_ref_no | Varchar | 1620updated by patcha.vo จากธุรกรรม cs | N | รหัสอ้างอิงข้อมูลการจ่ายจาก CenPay |   |   |   |   |   |   | CPAPU25090200001NPC-20260320-00003 |   | patcharat.vo | 2026-04-22 |   |
| 7 |   | transaction_no | Varchar | 20 | N | เลขที่ธุรกรรม (ref_no_bank) |   |   |   |   |   |   | 6707030600 |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | transaction_group | Varchar | 10 | N | กลุ่มธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ผลประโยชน์ |   | patcharat.vo | 2025-08-14 |   |
| 9 |   | transaction_type | Varchar | 10 | N | รายการธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เงินจ่ายคืนทันที |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | payment_channel | Varchar | 10 | N | ช่องทางการจ่ายเงิน |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนพร้อมเพย์ |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | request_payment_date | Date | 8 | N | วันที่ Request จ่ายเงิน |   |   |   |   |   |   | 20250801 |   | patcharat.vo | 2025-08-14 |   |
| 12 |   | payment_due_date | Date | 8 | N | วันครบกำหนดรับเงิน |   |   |   |   |   |   | 20250801 |   | jitin.kh | 2025-09-21 |   |
| 13 |   | payee_title_code | Numeric | 3,0 | N | รหัสคำนำหน้า | [ยกเลิก ms_honorifics](/pages/viewpage.action?pageId=1275822385).id |   |   |   |   |   | นาย |   | patcharat.vo | 2025-08-14 |   |
| 14 |   | payee_short_title | Varchar | 50 | Y | คำนำหน้า แบบย่อ |   |   |   |   |   |   | น.ส. |   | patcha.vo | 2026-06/06 |   |
| 15 |   | payee_first_name | Varchar | 100 | N | ชื่อผู้รับเงิน |   |   |   |   |   |   | ไทยสมุทร |   | patcharat.vo | 2025-08-14 |   |
| 16 |   | payee_last_name | Varchar | 100 | Y | นามสกุลผู้รับเงิน |   |   |   |   |   |   | ประกันชีวิต |   | patcharat.vo | 2025-08-14 |   |
| 17 |   | hospital_name | Varchar | 150 | Y | ชื่อสถานพยาบาล |   |   |   |   |   |   | ศิริราช |   | anocha.su | 2025-09-04 |   |
| 18 |   | mobile_no | Varchar | 10 | Y | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS |   |   |   |   |   |   | 0812345678 |   | patcharat.vo | 2025-01-22 | [https://redmine.ochi.link/issues/46042](https://redmine.ochi.link/issues/46042) |
| 19 |   | bank_id | Numeric | 3,0 | Y | รหัสธนาคาร | [ยกเลิก ms_bank](/pages/viewpage.action?pageId=1275560709).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 20 |   | bank_name | Varchar | 255 | Y | ชื่อธนาคาร (ภาษาไทย) |   |   |   |   |   |   | กสิกรไทย |   | patcharat.vo | 2025-12-04 |   |
| 21 |   | bank_abbr_name | Varchar | 10 | Y | รหัสตัวย่อธนาคาร |   |   |   |   |   |   | KBANK |   | patcharat.vo | 2025-12-04 |   |
| 22 |   | bot_bank_code | Varchar | 3 | Y | รหัสมาตรฐานธนาคาร (ธนาคารลูกค้า) |   |   |   |   |   |   | 004 |   | patcharat.vo | 2025-12-04 | ![img](/download/thumbnails/1275560392/image2025-9-4%208%3A57%3A55.png?version=1&modificationDate=1756951075660&api=v2) |
| 23 |   | bank_account_no | Varchar | 20 | Y | เลขที่บัญชี |   |   |   |   |   |   | 11122233333 |   | anocha.su | 2025-09-23 |   |
| 24 |   | bank_branch | Varchar | 100 | Y | สาขาธนาคาร |   |   |   |   |   |   | อโศก |   | patcharat.vo | 2025-08-14 |   |
| 25 |   | promptpay_type | Varchar | 1 | Y | ประเภทการโอนพร้อมเพย์ |   |   |   |   |   |   | I - ID CardM - Mobile |   | patcharat.vo | 2025-09-17 |   |
| 26 |   | promptpay_no | Varchar | 13 | Y | เลขพร้อมเพย์ |   |   |   |   |   |   | 1100100010001 |   | patcharat.vo | 2025-01-22 | [https://redmine.ochi.link/issues/46042](https://redmine.ochi.link/issues/46042) |
| 27 |   | credit_card_no | Numeric | 16,0 | Y | เลขที่บัตรเครดิต |   |   |   |   |   |   | 1234567890123456 |   | anocha.su | 2025-09-04 |   |
| 28 |   | cheque_no | Varchar | 10,0 | Y | เลขที่เช็ค |   |   |   |   |   |   | 1234567890 |   | anocha.su | 2026-03-09 |   |
| 29 |   | cheque_version | Varchar | 10 | Y | เช็คเวอร์ชั่น |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ภาษาไทย |   | patcharat.vo | 2025-08-14 |   |
| 30 |   | status | Varchar | 10 | N | สถานะ |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | รอพิมพ์เช็ค |   | patcharat.vo | 2025-08-14 |   |
| 31 |   | amount | Numeric | 15,2 | N | จำนวนเงิน |   |   |   |   |   |   | 5,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 32 |   | batch_reject_reason | Varchar | 20 | Y | เหตุผลการยกเลิก Batch Payment |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เช็คชำรุด |   | patcharat.vo | 2025-08-28 |   |
| 33 |   | record_type | Varchar | 1 | Y | วิธีการบันทึกผลการจ่าย |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | A - Auto |   | patcharat.vo | 2025-08-28 |   |
| 34 |   | fee_amount | Numeric | 15,2 | Y | ค่าธรรมเนียม |   |   |   |   |   |   | 5,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 35 |   | gross_amount | Numeric | 15,2 | Y | Gross Amount |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-09-04 |   |
| 36 |   | wht_amount | Numeric | 15,2 | Y | WHT Amount |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-09-04 |   |
| 37 |   | wht_type | Varchar | 10 | Y | WHT Type |   |   |   |   |   |   | 64 |   | patcharat.vo | 2025-09-17 |   |
| 38 |   | wht_rate | Numeric | 3,25,2 | Y | อัตราภาษีหัก ณ ที่จ่าย |   |   |   |   |   |   | 10 |   | patcharat.vo | 2025-09-17 |   |
| 39 |   | invoice_no | Varchar | 50 | Y | เลขที่ใบ Invoice |   |   |   |   |   |   | A1 |   | patcharat.vo | 2025-09-17 |   |
| 40 |   | tax_name | Varchar | 200 | Y | ชื่อผู้เสียภาษี |   |   |   |   |   |   | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   | anocha.su | 2025-09-04 |   |
| 41 |   | tax_address1 | Varchar | 500 | Y | ที่อยู่ 1 |   |   |   |   |   |   | 5/1 ถ.มิตรภาพ ต.หนองสาหร่าย อ.ปากช่อง |   | anocha.su | 2025-09-04 |   |
| 42 |   | tax_address2 | Varchar | 500 | Y | ที่อยู่ 2 |   |   |   |   |   |   | นครราชสีมา 30130 |   | anocha.su | 2025-09-04 |   |
| 43 |   | tax_no | Numeric | 13,0 | Y | เลขที่ผู้เสียภาษี |   |   |   |   |   |   | 0305535001462 |   | anocha.su | 2025-09-04 |   |
| 44 |   | tax_type | Varchar | 10 | Y | ประเภทภาษี |   |   |   |   |   |   | 53 |   | anocha.su | 2025-09-04 |   |
| 45 |   | email | Varchar | 255 | Y | Email |   |   |   |   |   |   | [ochi.land@gmail.com](mailto:ochi.land@gmail.com) |   | anocha.su | 2025-09-04 |   |
| 46 |   | dms_id | Numeric | 10,0 | Y | รหัสอ้างอิงเอกสาร จากระบบ DMS |   |   |   |   |   |   | 2740140 |   | anocha.su | 2025-09-04 |   |
| 47 |   | cheque_issue_date | Date | 8 | Y | วันที่ออกเช็ค |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
| 48 |   | cheque_redeem_date | Date | 8 | Y | วันที่ขึ้นเงินเช็ค |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
| 49 |   | cheque_expiry_date | Date | 8 | Y | วันที่เช็คหมดอายุ |   | [PM-BH-003 อัปเดตสถานะเช็คหมดอายุ](/pages/viewpage.action?pageId=1293124517) |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
| 50 |   | payment_record_date | Date | 8 | Y | วันที่บันทึกผลจ่าย |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-25 |   |
| 51 |   | payment_record_by | Varchar | 50 | Y | ผู้บันทึกผลจ่าย |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-25 |   |
| 52 |   | edw_fee_flag | Varchar | 1 | N | N = บัญชีพักY = บัญชีตัด |   |   |   |   |   |   | Y |   | patcharat.vo | 2025-09-30 |   |
| 53 |   | voucher_no_wht | Varchar | 30 |   | ข้อมูลจาก Online Payment ส่งมาทำจ่ายเป็นรายการหักภาษี ณ ที่จ่าย |   |   |   |   |   |   |   |   | patcha.vo | 2026-04-22 | Drop Columnเพิ่มที่ Table: [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction) |
| 54 |   | annuity_pay_type | Varchar | 1 | Y | จ่ายบำนาญA - จ่ายเงินบำนาญ S - จ่ายเวนคืนอัตโนมัติ |   |   |   |   |   |   | A | ใช้สำหรับส่ง Landing EDW | patcha.vo | 2026-04-22 |   |
| 55 |   | flag_split | Varchar | 1 | Y | มีการ split รายการจ่ายY - YesN - No |   |   |   |   |   |   | Y |   | patcha.vo | 2026-04-24 |   |
| 56 |   | api_retry_round | Numeric | 2 | Y | รอบการส่ง API Payment |   |   |   |   |   |   | 1 |   | patcha.vo | 2026-04-24 |   |
| 57 |   | api_status_code | Varchar | 10 | Y | รหัสผลการจ่าย API Payment |   |   |   |   |   |   | IC000 |   | patcha.vo | 2026-04-24 |   |
| 58 |   | api_status_desc | Varchar | 255 | Y | คำอธิบายผลการจ่าย API Payment |   |   |   |   |   |   | Payment is Executed Successfully |   | patcha.vo | 2026-04-24 |   |
| 59 |   | api_payment_status | Varchar | 1 | Y | สถานะการส่งข้อมูล API PaymentP - Processing F - Fail S - Success |   |   |   |   |   |   | P |   | patcha.vo | 2026-05-22 |   |
| 60 |   | api_called_at | Timestamp |   | Y | วันและเวลาที่ระบบ Stand Alone กวาดข้อมูล |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-05-22 |   |
|   |   | agent_code | Varchar | 50 | Y | รหัสตัวแทน |   | [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](/pages/viewpage.action?pageId=1355546984) |   |   |   |   | anocha.su |   | anocha.su | 2026-05-22 |   |
|   |   | vendor_code | Varchar | 8 | Y | รหัส Vendor |   | [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](/pages/viewpage.action?pageId=1355546984) |   |   |   |   |   |   | jitin.kh | 2026-07-13 |   |
|   |   | tax_code | Varchar | 10 | Y | รหัสภาษี |   | [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](/pages/viewpage.action?pageId=1355546984) |   |   |   |   |   |   | jitin.kh | 2026-07-13 |   |
|   |   | fail_fee_amount | Numeric | 15 | 2 |   |   |   |   |   |   |   |   |   | patcharat.vo | 2026-07-21 |   |
|   |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
|   |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
|   |   | updated_date | Timestamp |   | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
|   |   | updated_by | Varchar | 50 | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [ยกเลิก ms_honorifics](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275822385)
- [https://redmine.ochi.link/issues/46042](https://redmine.ochi.link/issues/46042)
- [ยกเลิก ms_bank](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560709)
- [https://redmine.ochi.link/issues/46042](https://redmine.ochi.link/issues/46042)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [ochi.land@gmail.com](http://wiki.thaisamut.co.thmailto:ochi.land@gmail.com)
- [PM-BH-003 อัปเดตสถานะเช็คหมดอายุ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293124517)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984)
- [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984)
- [12 WS Landing ข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน (G3)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984)
