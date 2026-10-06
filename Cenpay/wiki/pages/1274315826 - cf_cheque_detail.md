# cf_cheque_detail

- **Page ID:** 1274315826
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_cheque_detail
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_cheque_detail | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-04 | Description | ข้อมูลรายละเอียดรูปแบบเช็คธนาคาร |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 2 |   | template_code | Varchar | 10 | N | รหัสอ้างอิง Template | [cf_cheque_header](/display/RDSCPENH/cf_cheque_header).template_code |   |   |   |   |   | T001 |   | anocha.su | 2025-09-04 |   |
| 3 |   | text_type | Varchar | 100 | N | ประเภทข้อความ |   |   |   |   |   |   | DDMMYYYY |   | anocha.su | 2025-09-04 |   |
| 4 |   | horizontal_x | Numeric | 4,0 | N | ตำแหน่งแนวตั้ง |   |   |   |   |   |   | 150 |   | anocha.su | 2025-09-04 |   |
| 5 |   | vertical_y | Numeric | 4,0 | N | ตำแหน่งแนวนอน |   |   |   |   |   |   | 200 |   | anocha.su | 2025-09-04 |   |
| 6 |   | width | Numeric | 4,0 | N | ขนาดความกว้างของข้อความ |   |   |   |   |   |   | 200 |   | anocha.su | 2025-09-04 |   |
| 7 |   | height | Numeric | 4,0 | N | ขนาดความสูงของข้อความ |   |   |   |   |   |   | 200 |   | anocha.su | 2025-09-04 |   |
| 8 |   | font_size | Numeric | 3,1 | Y | ขนาดตัวอักษร |   |   |   |   |   |   | 10.5 |   | anocha.su | 2025-09-04 |   |
| 9 |   | length | Numeric | 4,0 | Y | ความยาวเส้นขีด |   |   |   |   |   |   | 30 |   | anocha.su | 2025-09-04 |   |
| 10 |   | checkbox | Varchar | 1 | Y | function ตัวเลือกอื่นๆ |   |   |   |   |   |   | Y |   | anocha.su | 2025-09-04 |   |
| 11 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |
| 12 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 13 |   | updated_date | Timestamp |   | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |
| 14 |   | updated_by | Varchar | 50 | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |

อ้างอิงข้อมูล : [cf_cheque_detail_data](/display/RDSCPENH/cf_cheque_detail_data)

---

## Hyperlinks บนหน้านี้

- [cf_cheque_header](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_header)
- [cf_cheque_detail_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_detail_data)
