# tx_paperbase_status

- **Page ID:** 1275560672
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_paperbase_status
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_paperbase_status | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลประวัติสถานะและการแก้ไข paperbase |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 | FOREIGN KEY | payment_detail_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่ายระดับ Transaction | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 3 |   | status | Varchar | 20 | N | สถานะ |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | รอพิมพ์เช็ค |   | patcharat.vo | 2025-08-14 |   |
| 4 |   | print_cheque_round | Numeric | 3,0 | Y | ครั้งที่พิมพ์ |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 5 |   | cheque_no | Varchar | 10 | Y | เลขที่เช็ค |   |   |   |   |   |   | 43250001 |   | anocha.su | 2026-03-09 |   |
| 6 |   | cheque_version | Varchar | 10 | Y | เช็คเวอร์ชั่น |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ภาษาไทย |   | patcharat.vo | 2025-08-14 |   |
| 7 |   | cheque_reason | Varchar | 10 | Y | เหตุผลการแก้ไข/ส่งกลับ/ยกเลิก Paperbase |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เช็คชำรุด |   | patcharat.vo | 2025-08-14 |   |
| 8 |   | cheque_reason_other | Varchar | 255 | Y | เหตุผลอื่นๆสำหรับยกเลิกเช็ค (บันทึกผลจ่ายเช็ค) |   |   |   |   |   |   | ฝ่ายสินไหมขอคืนเช็ค |   | anocha.su | 2025-10-21 |   |
| 9 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | updated_date | Timestamp |   | N | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 12 |   | updated_by | Varchar | 50 | N | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 13 | FOREIGN KEY | batch_payment_id | Int8 |   | N | รหัสอ้างอิงข้อมูลการจ่าย | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | patcha.vo | 2026-02-04 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
