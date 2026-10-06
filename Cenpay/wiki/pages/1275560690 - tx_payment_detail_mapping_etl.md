# tx_payment_detail_mapping_etl

- **Page ID:** 1275560690
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_detail_mapping_etl
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_detail_mapping_etl | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลผลการจ่ายเงิน |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 2 | FOREIGN KEY | payment_dashboard_id | Int8 |   |   | รหัสอ้างอิงข้อมูล dashboard | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 3 | FOREIGN KEY | payment_detail_id | Int8 |   |   | รหัสอ้างอิงข้อมูลรายการตรวจจ่ายบัญชี | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 4 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 5 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |
| 6 |   | updated_date | Timestamp |   | N | ผู้แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 7 |   | updated_by | Varchar | 50 | N | วันที่แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
