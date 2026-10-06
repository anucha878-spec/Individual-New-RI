# lg_payment_detail

- **Page ID:** 1275822430
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 99. LG - Table Log > lg_payment_detail
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | lg_payment_detail | Data Source | Cenpay หน้าจอตรวจจ่ายบัญชี |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | รายละเอียดการจ่าย |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | payment_header_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 3 | FOREIGN KEY | batch_payment_id | Int8 |   | Y | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 4 | FOREIGN KEY | batch_header_split_id | Int8 |   | Y | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ ที่มีรายการ Split | [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 5 | FOREIGN KEY | oper_ref_no | Varchar | 16 | N | รหัสอ้างอิงข้อมูลการจ่ายจาก CenPay |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 6 | FOREIGN KEY | payment_dashboard_id | Int8 |   | N | รหัสข้อมูล edw dashboard |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 7 |   | transaction_no | Varchar | 20 | N | เลขที่ธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | 6707030600 |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | transaction_group | Varchar | 10 | N | กลุ่มธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ผลประโยชน์ |   | patcharat.vo | 2025-08-14 |   |
| 9 |   | transaction_type | Varchar | 10 | N | รายการธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เงินจ่ายคืนทันที |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | payment_channel | Varchar | 10 | N | ช่องทางการจ่ายเงิน |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนพร้อมเพย์ |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | request_payment_date | Date | 8 | N | วันที่ Request จ่ายเงิน |   |   |   |   |   |   | 20250801 |   | patcharat.vo | 2025-08-14 |   |
|   |   | payment_due_date | Date | 8 | N | วันครบกำหนดรับเงิน |   |   |   |   |   |   | 20250801 |   | jitin.kh | 2025-09-21 |   |
| 12 |   | payee_title_code | Numeric | 3,0 | N | รหัสคำนำหน้า | [ยกเลิก ms_honorifics](/pages/viewpage.action?pageId=1275822385).id |   |   |   |   |   | นาย |   | patcharat.vo | 2025-08-14 |   |
| 13 |   | payee_first_name | Varchar | 100 | N | ชื่อผู้รับเงิน |   |   |   |   |   |   | ไทยสมุทร |   | patcharat.vo | 2025-08-14 |   |
| 14 |   | payee_last_name | Varchar | 100 | N | นามสกุลผู้รับเงิน |   |   |   |   |   |   | ประกันชีวิต |   | patcharat.vo | 2025-08-14 |   |
| 15 |   | hospital_name | Varchar | 150 | N | ชื่อสถานพยาบาล |   |   |   |   |   |   | ศิริราช |   | anocha.su | 2025-09-04 |   |
| 16 |   | mobile_no | Numeric | 10,0 | N | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS |   |   |   |   |   |   | 0812345678 |   | patcharat.vo | 2025-08-14 |   |
| 17 |   | bank_id | Numeric | 3,0 | Y | รหัสธนาคาร | [ยกเลิก ms_bank](/pages/viewpage.action?pageId=1275560709).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 18 |   | bank_name | Varchar | 255 | N | ชื่อธนาคาร (ภาษาไทย) |   |   |   |   |   |   | กสิกรไทย |   | anocha.su | 2025-09-04 |   |
| 19 |   | bank_abbr_name | Varchar | 10 | N | รหัสตัวย่อธนาคาร |   |   |   |   |   |   | KBANK |   | anocha.su | 2025-09-04 |   |
| 20 |   | bot_bank_code | Varchar | 3 | N | รหัสมาตรฐานธนาคาร |   |   |   |   |   |   | 0004 |   | anocha.su | 2025-09-04 | ![img](/download/thumbnails/1275560392/image2025-9-4%208%3A57%3A55.png?version=1&modificationDate=1756951075660&api=v2) |
| 21 |   | bank_account_no | Varchar | 20 | Y | เลขที่บัญชี |   |   |   |   |   |   | 11122233333 |   | patcharat.vo | 2025-08-14 |   |
| 22 |   | bank_branch | Varchar | 100 | Y | สาขาธนาคาร |   |   |   |   |   |   | อโศก |   | patcharat.vo | 2025-08-14 |   |
| 23 |   | promptpay_no | Numeric | 13,0 | Y | เลขพร้อมเพย์ |   |   |   |   |   |   | 1100100010001 |   | patcharat.vo | 2025-08-14 |   |
| 24 |   | credit_card_no | Numeric | 16,0 | Y | เลขที่บัตรเครดิต |   |   |   |   |   |   | 1234567890123456 |   | anocha.su | 2025-09-04 |   |
| 25 |   | cheque_no | Numeric | 10,0 | Y | เลขที่เช็ค |   |   |   |   |   |   | 1234567890 |   | patcharat.vo | 2025-08-14 |   |
| 26 |   | cheque_version | Varchar | 10 | Y | เช็คเวอร์ชั่น |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ภาษาไทย |   | patcharat.vo | 2025-08-14 |   |
| 27 |   | status | Varchar | 10 | N | สถานะ |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | รอพิมพ์เช็ค |   | patcharat.vo | 2025-08-14 |   |
| 28 |   | amount | Numeric | 15,2 | N | จำนวนเงิน |   |   |   |   |   |   | 5,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 29 |   | batch_reject_reason | Varchar | 20 | Y | เหตุผลการยกเลิก Batch Payment |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เช็คชำรุด |   | patcharat.vo | 2025-08-28 |   |
| 30 |   | record_type | Varchar | 1 | Y | วิธีการบันทึกผลการจ่าย |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | A - Auto |   | patcharat.vo | 2025-08-28 |   |
| 31 |   | fee_amount | Numeric | 15,2 | Y | ค่าธรรมเนียม |   |   |   |   |   |   | 5,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 32 |   | gross_amount | Numeric | 15,2 | N | Gross Amount |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-09-04 |   |
| 33 |   | wht_amount | Numeric | 15,2 | N | WHT Amount |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-09-04 |   |
| 34 |   | tax_name | Varchar | 200 | N | ชื่อผู้เสียภาษี |   |   |   |   |   |   | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด |   | anocha.su | 2025-09-04 |   |
| 35 |   | tax_address1 | Varchar | 500 | N | ที่อยู่ 1 |   |   |   |   |   |   | 5/1 ถ.มิตรภาพ ต.หนองสาหร่าย อ.ปากช่อง |   | anocha.su | 2025-09-04 |   |
| 36 |   | tax_address2 | Varchar | 500 | Y | ที่อยู่ 2 |   |   |   |   |   |   | นครราชสีมา 30130 |   | anocha.su | 2025-09-04 |   |
| 37 |   | tax_no | Numeric | 13,0 | N | เลขที่ผู้เสียภาษี |   |   |   |   |   |   | 0305535001462 |   | anocha.su | 2025-09-04 |   |
| 38 |   | tax_type | Varchar | 10 | N | ประเภทภาษี |   |   |   |   |   |   | 53 |   | anocha.su | 2025-09-04 |   |
| 39 |   | wht_type | Varchar | 10 | N | WHT Type |   |   |   |   |   |   | 64 |   | anocha.su | 2025-09-04 |   |
| 40 |   | email | Varchar | 255 | Y | Email |   |   |   |   |   |   | [ochi.land@gmail.com](mailto:ochi.land@gmail.com) |   | anocha.su | 2025-09-04 |   |
| 41 |   | dms_id | Numeric | 10,0 | Y | รหัสอ้างอิงเอกสาร จากระบบ DMS |   |   |   |   |   |   | 2740140 |   | anocha.su | 2025-09-04 |   |
| 42 |   | cheque_issue_date | Date | 8 | Y | วันที่ออกเช็ค |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
| 43 |   | cheque_redeem_date | Date | 8 | Y | วันที่ขึ้นเงินเช็ค |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
| 44 |   | cheque_expiry_date | Date | 8 | Y | วันที่เช็คหมดอายุ |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-10 |   |
|   |   | payment_record_date | Date | 8 |   | วันที่บันทึกผลจ่าย |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-25 |   |
|   |   | payment_record_by | Varchar | 20 |   | ผู้บันทึกผลจ่าย |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-25 |   |
|   |   | edw_fee_flag | Varchar | 1 |   | N = บัญชีพักY = บัญชีตัด |   |   |   |   |   |   | Y |   | patcharat.vo | 2025-09-30 |   |
| 42 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 43 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [ยกเลิก ms_honorifics](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275822385)
- [ยกเลิก ms_bank](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560709)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [ochi.land@gmail.com](http://wiki.thaisamut.co.thmailto:ochi.land@gmail.com)
