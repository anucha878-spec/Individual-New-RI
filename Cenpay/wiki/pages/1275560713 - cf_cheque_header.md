# cf_cheque_header

- **Page ID:** 1275560713
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_cheque_header
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_cheque_header | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-04 | Description | ข้อมูลรูปแบบเช็คธนาคาร |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | template_code | Varchar | 10 | N | รหัสอ้างอิง Template |   |   |   |   |   |   | T001 |   | anocha.su | 2025-09-04 |   |
| 2 |   | bank_account_code | Varchar | 20 | N | Bank Account ของบริษัท |   |   |   |   |   |   | BAY |   | anocha.su | 2025-09-04 |   |
| 3 |   | bank_title | Varchar | 100 | N | รูปแบบ |   |   |   |   |   |   | Template 01 |   | anocha.su | 2025-09-04 |   |
| 4 |   | remark | Varchar | 255 | Y | หมายเหตุ |   |   |   |   |   |   | - |   | anocha.su | 2025-09-04 |   |
| 5 |   | active_status | Varchar | 1 | N | สถานะการใช้งาน |   |   |   |   |   |   | Y |   | anocha.su | 2025-09-04 |   |
| 6 |   | cheque_size_width | Numeric | 4,0 | N | ความกว้างกระดาษ(mm) |   |   |   |   |   |   | 200 |   | anocha.su | 2025-09-04 |   |
| 7 |   | cheque_size_height | Numeric | 4,0 | N | ความสูงกระดาษ(mm) |   |   |   |   |   |   | 100 |   | anocha.su | 2025-09-04 |   |
| 8 |   | dms_doc_id | Varchar | 20 | Y | รหัสอ้างอิงระบบ DMS |   |   |   |   |   |   | 6543217 |   | anocha.su | 2025-10-02 |   |
| 9 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |
| 10 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 11 |   | updated_date | Timestamp |   | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |
| 12 |   | updated_by | Varchar | 50 | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |

อ้างอิงข้อมูล : [cf_cheque_header_data](/display/RDSCPENH/cf_cheque_header_data)

---

## Hyperlinks บนหน้านี้

- [cf_cheque_header_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header_data)
