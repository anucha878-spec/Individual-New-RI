# tx_generate_file_bank

- **Page ID:** 1275560682
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_generate_file_bank
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_generate_file_bank
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_generate_file_bank | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลการ generate file txt,csv |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 2 |   | batch_payment_id | Int8 |   | N | รหัสอ้างอิงตารางการจ่ายระดับ Batch การเงิน |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-14 |   |
| 3 |   | file_name | Varchar | 255 | N | ชื่อไฟล์เอกสาร |   |   |   |   |   |   | 202508040001_เอกสารการเงิน.pdf |   | anocha.su | 2025-09-04 |   |
| 4 |   | service | Varchar | 10 | N | service (format ธนาคาร) |   |   |   |   |   |   | BBL-MCL |   | patcharat.vo | 2025-08-14 |   |
| 5 |   | text | text |   | N | ข้อมูล text ที่ส่งธนาคาร |   |   |   |   |   |   | - |   | patcharat.vo | 2025-08-14 |   |
| 6 |   | round | Numeric | 3,0 | N | ครั้งที่ |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-08-28 |   |
| 7 |   | net_transaction | Numeric | 5,0 | N | จำนวนรายการสุทธิ |   |   |   |   |   |   | 3,000 |   | patcharat.vo | 2025-08-28 |   |
| 8 |   | net_amount | Numeric | 15,2 | N | จำนวนยอดเงินสุทธิ |   |   |   |   |   |   | 1,000,000.00 |   | patcharat.vo | 2025-08-28 |   |
| 9 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 10 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
| 11 |   | updated_date | Timestamp |   | Y | ผู้แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-14 |   |
| 12 |   | updated_by | Varchar | 50 | Y | วันที่แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-14 |   |
