# tx_payment_detail_split

- **Page ID:** 1336345157
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_detail_split
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_detail_split | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-04-24 | Description | ข้อมูลการจ่ายที่ถูก Split ระดับ Transaction |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcha.vo | 2026-04-24 |   |
| 2 | FOREIGN KEY | payment_detail_id | Int8 |   |   | รหัสอ้างอิงข้อมูลการจ่าย | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   | 1 |   | patcha.vo | 2026-04-24 |   |
| 3 |   | transaction_no | Varchar | 20 |   | เลขที่ธุรกรรม (ref_no_bank) |   |   |   |   |   |   | 6707030600 |   | patcha.vo | 2026-04-24 |   |
| 4 |   | amount | Numeric | 15,2 |   | จำนวนเงิน |   |   |   |   |   |   | 5,000.00 |   | patcha.vo | 2026-04-24 |   |
| 5 |   | api_retry_round | Numeric | 2 | Y | รอบการส่ง API Payment |   |   |   |   |   |   | 1 |   | jitin.kh | 2026-06-05 |   |
| 6 |   | api_status_code | Varchar | 10 | Y | รหัสผลการจ่าย API Payment |   |   |   |   |   |   | IC000 |   | jitin.kh | 2026-06-05 |   |
| 7 |   | api_status_desc | Varchar | 255 | Y | คำอธิบายผลการจ่าย API Payment |   |   |   |   |   |   | Payment is Executed Successfully |   | jitin.kh | 2026-06-05 |   |
| 8 |   | api_payment_status | Varchar | 1 | Y | สถานะการส่งข้อมูล API PaymentP - Processing F - Fail S - Success |   |   |   |   |   |   | P |   | jitin.kh | 2026-06-05 |   |
| 9 |   | api_called_at | Timestamp |   | Y | วันและเวลาที่ระบบ Stand Alone กวาดข้อมูล |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | jitin.kh | 2026-06-05 |   |
| 10 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-04-24 |   |
| 11 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | anocha.su |   | patcha.vo | 2026-04-24 |   |
| 12 |   | updated_date | Timestamp |   | N | ผู้แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2026-04-24 |   |
| 7 |   | updated_by | Varchar | 50 | N | วันที่แก้ไข |   |   |   |   |   |   | anocha.su |   | patcha.vo | 2026-04-24 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
