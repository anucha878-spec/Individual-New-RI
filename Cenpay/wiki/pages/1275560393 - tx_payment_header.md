# tx_payment_header

- **Page ID:** 1275560393
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_header
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_header | Data Source | Cenpay หน้าจอตรวจจ่ายบัญชี |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลการจ่ายระดับ Batch ปฎิบัติการ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 |   | batch_oper_no | Varchar | 30 | N | Batch Number ฝ่ายปฎิบัติการ |   |   |   |   |   |   | PC-TB-CLN-20220325-00001 |   | patcharat.vo | 2025-08-14 |   |
| 3 | FOREIGN KEY | batch_payment_no | Varchar | 16 | Y | Batch Number ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no |   |   |   |   |   | B25680801001 |   | patcharat.vo | 2025-08-14 |   |
| 4 |   | transaction_group | Varchar | 10 | N | กลุ่มธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ผลประโยชน์ |   | patcharat.vo | 2025-08-14 |   |
| 5 |   | transaction_type | Varchar | 10 | N | รายการธุรกรรม |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เงินจ่ายคืนทันที |   | patcharat.vo | 2025-08-14 |   |
| 6 |   | payment_channel | Varchar | 10 | N | ช่องทางการจ่ายเงิน |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนพร้อมเพย์ |   | patcharat.vo | 2025-08-14 |   |
| 7 |   | acc_reference_no | Varchar | 20 | N | Reference Number ฝ่ายบัญชี |   |   |   |   |   |   | EG256804090001 |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | request_payment_date | Date | 8 | N | วันที่ Request จ่ายเงิน |   |   |   |   |   |   | 20250801 |   | patcharat.vo | 2025-08-14 |   |
| 9 |   | total_transaction | Numeric | 5,0 | N | จำนวนรายการรวม |   |   |   |   |   |   | 2 |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | total_amount | Numeric | 15,2 | N | จำนวนเงินรวม |   |   |   |   |   |   | 3,000,000.00 |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | approved_by | Varchar | 50 | N | ชื่อผู้อนุมัติจากหน่วยงานต้นทาง (Operation) |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 12 |   | approved_date | Date | 8 | N | วันที่อนุมัติข้อมูลการจ่ายจากหน่วยงานต้นทาง |   |   |   |   |   |   | 20250801 |   | patcharat.vo | 2025-08-14 |   |
| 13 |   | status | Varchar | 10 | N | สถานะดำเนินการ |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | BAS - Batch Split |   | patcharat.vo | 2025-08-14 |   |
| 14 |   | tax_type | Varchar | 3 | N | ประเภทการจ่ายภาษี |   |   |   |   |   |   | WHT |   | patcha.vo | 2025-05-18 |   |
| 15 |   | previous_transaction_type | Varchar | 3 | N | รายการธุรกรรมเดิมก่อนจ่ายใหม่ |   |   |   |   |   |   | APU |   | patcha.vo | 2026-06-25 |   |
| 16 |   | previous_batch_oper_no | Varchar | 30 | N | Batch Number ฝ่ายปฎิบัติการเดิมก่อนจ่ายใหม่ |   |   |   |   |   |   | CP-TB-CLN-20220325-00001 |   | patcha.vo | 2026-06-25 |   |
| 17 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 18 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 19 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 20 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
