# cf_service_fee

- **Page ID:** 1286407032
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_service_fee
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_service_fee | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-23 | Description | ข้อมูลค่าธรรมเนียมธนาคาร |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | service_code | Varchar | 5 | N | รหัสอ้างอิง service |   |   |   |   |   |   | S001 |   | patcharat.vo | 2025-09-23 |   |
| 2 |   | service | Varchar | 20 | N | service (format ธนาคาร) |   |   |   |   |   |   | BBL_MCL |   | patcharat.vo | 2025-09-23 |   |
| 3 |   | fee | Numeric | 5,2 | N | ค่าธรรมเนียม |   |   |   |   |   |   | 8 |   | patcharat.vo | 2025-09-23 |   |
| 4 |   | other_bank_fee | Numeric | 5,2 | N | ค่าธรรมเนียมต่างธนาคาร |   |   |   |   |   |   | 10 |   | patcharat.vo | 2025-09-23 |   |
| 5 |   | other_bank_flag | Boolean |   | N | มีค่าธรรมเนียมต่างธนาคาร |   |   |   |   |   |   | TRUE |   | patcharat.vo | 2025-09-23 |   |
| 6 |   | failed_transfer_fee | Numeric | 5,2 | N | ค่าธรรมเนียมกรณีโอนไม่สำเร็จ |   |   |   |   |   |   | 6 |   | patcharat.vo | 2025-09-23 |   |
| 7 |   | failed_transfer_other_fee | Numeric | 5,2 | N | ค่าธรรมเนียมกรณีโอนไม่สำเร็จ ต่างธนาคาร |   |   |   |   |   |   | 8 |   | patcharat.vo | 2025-09-23 |   |
| 8 |   | failed_transfer_flag | Boolean |   | N | มีค่าธรรมเนียมกรณีโอนไม่สำเร็จ |   |   |   |   |   |   | TRUE |   | patcharat.vo | 2025-09-23 |   |
| 9 |   | real_time_edw | Boolean |   | N | ตั้งบัญชี real time |   |   |   |   |   |   | TRUE |   | patcharat.vo | 2025-09-30 |   |
| 10 |   | cal_payment_date_edw | Numeric | 2,0 | N | วันที่คำนวณ payment date สำหรับส่งเข้า Edw |   |   |   |   |   |   | -1 |   | patcharat.vo | 2025-10-07 |   |
| 11 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-09-23 |   |
| 12 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-09-23 |   |
| 13 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-09-23 |   |
| 14 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-09-23 |   |

ตัวอย่างข้อมูล : [cf_service_fee_data](/display/RDSCPENH/cf_service_fee_data)

---

## Hyperlinks บนหน้านี้

- [cf_service_fee_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee_data)
