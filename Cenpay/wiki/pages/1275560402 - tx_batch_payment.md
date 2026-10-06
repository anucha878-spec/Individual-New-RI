# tx_batch_payment

- **Page ID:** 1275560402
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_batch_payment
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_batch_payment | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลการจ่ายระดับ Batch การเงิน |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | batch_payment_no | Varchar | 16 | N | Batch Number ฝ่ายการเงิน |   |   |   |   |   |   | B25680901001 |   | patcharat.vo | 2025-09-18 |   |
| 3 | FOREIGN KEY | batch_payment_split_no | Varchar | 16 | Y | รหัส Split Batch ฝ่ายการเงิน |   |   |   |   |   |   | B25680901001_1-2 |   | patcharat.vo | 2025-09-18 |   |
| 4 |   | payment_channel | Varchar | 10 | N | ช่องทางการจ่าย |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนเงิน |   | anocha.su | 2025-09-04 |   |
| 5 |   | batch_payment_type | Varchar | 10 | N | ประเภทการจ่าย |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | Batch Payment |   | patcharat.vo | 2025-08-14 |   |
| 6 |   | service_code | Varchar | 10 | N | Service (Format ธนาคาร) |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | BBL-MCL |   | patcharat.vo | 2025-08-14 |   |
| 7 |   | bank_account_code | Varchar | 10 | N | เลขบัญชีธนาคารโอนเงินของบริษัท |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | BBL 925-0-02595-5 |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | paid_date | Date | 8 | N | วันที่จ่าย |   |   |   |   |   |   | 20250801 |   | patcharat.vo | 2025-08-14 |   |
| 9 |   | total_transaction | Numeric | 5,0 | N | จำนวนรายการรวม |   |   |   |   |   |   | 201 |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | total_amount | Numeric | 15,2 | N | จำนวนเงินรวม |   |   |   |   |   |   | 3,000,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | incorrect_transaction | Numeric | 5,0 | Y | จำนวนรายการรวมที่ไม่ถูกต้อง |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 12 |   | incorrect_amount | Numeric | 15,2 | Y | จำนวนเงินรวมที่ไม่ถูกต้อง |   |   |   |   |   |   | 10,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 13 |   | net_transaction | Numeric | 5,0 | Y | จำนวนรายการรวมสุทธิ |   |   |   |   |   |   | 200 |   | patcharat.vo | 2025-08-14 |   |
| 14 |   | net_amount | Numeric | 15,2 | Y | จำนวนเงินรวมสุทธิ |   |   |   |   |   |   | 2,900,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 15 |   | download_round | Numeric | 3,0 | Y | ครั้งที่ดาวน์โหลด |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 16 |   | batch_status | Varchar | 10 | N | สถานะดำเนินการ |   |   |   |   |   |   | รอการตรวจสอบผล |   | anocha.su | 2025-09-04 |   |
| 17 |   | request_payment_date | Date | 8 | N | วันที่ Request จ่ายเงิน |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-04 |   |
| 18 |   | maker_date | Timestamp |   | Y | วันที่ Maker ทำรายการ (เฉพาะ PaperBase) |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-29 |   |
| 19 |   | maker_by | Varchar | 50 | Y | Maker ที่ทำรายการ (เฉพาะ PaperBase) |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-29 |   |
| 20 |   | checker_date | Timestamp |   | Y | วันที่ Checker ทำรายการ |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-29 |   |
| 21 |   | checker_by | Varchar | 50 | Y | Checker ที่ทำรายการ |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-29 |   |
| 22 |   | account_payable | Varchar | 10 | Y | ประเภทกลุ่มการจ่ายตัวแทน Manual Oper |   |   |   |   |   |   | COM |   | anocha.su | 2026-07-13 |   |
| 23 |   | manual_code | Varchar | 10 | Y | รหัสธุรกรรม Manual Oper |   |   |   |   |   |   | MO0003 |   | anocha.su | 2026-07-13 |   |
| 24 |   | vendor_code | Varchar | 20 | Y | รหัส Vendor Manual Oper |   |   |   |   |   |   | 12345 |   | anocha.su | 2026-07-13 |   |
| 25 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 26 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 27 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 28 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
