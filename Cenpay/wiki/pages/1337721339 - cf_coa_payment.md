# cf_coa_payment

- **Page ID:** 1337721339
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_coa_payment
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_coa_payment | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-23 | Description | ข้อมูลผังบัญชี |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | patcha.vo | 2025-04-30 |   |
| 2 |   | event_code | Varchar | 10 | N | รหัสผังบัญชี |   |   |   |   |   |   | PM_FIN_02 |   | patcha.vo | 2025-04-30 |   |
|   |   | event_name | Varchar | 50 | N | ชื่อผังบัญชี |   |   |   |   |   |   | จ่ายเงิน |   | patcha.vo | 2025-04-30 |   |
|   |   | overdue | Varchar | 1 | N | ค้างจ่ายY - ใช่ |   |   |   |   |   |   | Y |   | patcha.vo | 2025-04-30 |   |
|   |   | posting_key | Varchar | 2 | N | Debit/Credit |   |   |   |   |   |   | Dr |   | patcha.vo | 2025-04-30 |   |
|   |   | bank_account | Varchar | 1 | N | Y - ใช่N - ไม่ใช่ |   |   |   |   |   |   | Y |   | patcha.vo | 2025-04-30 |   |
|   |   | account_code | Varchar | 20 | Y | เลขบัญชี |   |   |   |   |   |   | 23560005 |   | patcha.vo | 2025-04-30 |   |
|   |   | account_name | Varchar | 50 | Y | ชื่อบัญชี |   |   |   |   |   |   | เจ้าหนี้การค้า |   | patcha.vo | 2025-04-30 |   |
|   |   | wht_flag | Varchar | 1 | Y | Y - ใช่N - ไม่ใช่ |   |   |   |   |   |   | Y |   | patcha.vo | 2025-07-02 |   |
|   |   | service | Varchar | 20 | Y | service |   |   |   |   |   |   | BBL_E_WHT |   | patcha.vo | 2025-07-02 |   |
|   |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2025-04-30 |   |
|   |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcha.vo | 2025-04-30 |   |
|   |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcha.vo | 2025-04-30 |   |
|   |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcha.vo | 2025-04-30 |   |

ตัวอย่างข้อมูล : [cf_coa_payment_data](/display/RDSCPENH/cf_coa_payment_data)

---

## Hyperlinks บนหน้านี้

- [cf_coa_payment_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment_data)
