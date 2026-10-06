# tx_payment_header_split

- **Page ID:** 1279197820
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_header_split
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_header_split | Data Source |   |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลการจ่ายระดับ Batch ปฎิบัติการ ที่มีการ Split รายการ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 2 | FOREIGN KEY | batch_oper_no | Varchar | 30 | N | Batch Number ฝ่ายปฎิบัติการ |   |   |   |   |   |   | PC-TB-CLN-20220325-00001_1-2 |   | patcharat.vo | 2025-08-28 |   |
| 3 | FOREIGN KEY | batch_payment_no | Varchar | 16 | Y | Batch Number ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no |   |   |   |   |   | B25680801001 |   | patcharat.vo | 2025-08-28 |   |
| 4 | FOREIGN KEY | payment_header_id | Int8 |   | Y | รหัสอ้างอิงตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 5 |   | total_transaction | Numeric | 5,0 | N | จำนวนรายการรวม |   |   |   |   |   |   | 2 |   | patcharat.vo | 2025-08-28 |   |
| 6 |   | total_amount | Numeric | 15,2 | N | จำนวนเงินรวม |   |   |   |   |   |   | 3,000,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 7 |   | status | Varchar | 10 | N | สถานะดำเนินการ |   |   | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | BAS - Batch Split |   | patcharat.vo | 2025-08-28 |   |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |
| 10 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-28 |   |
| 11 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-28 |   |
| 12 |   | split_bank_name | Varchar | 5 | N | ชื่อย่อธนาคาร |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2026-03-24 |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
