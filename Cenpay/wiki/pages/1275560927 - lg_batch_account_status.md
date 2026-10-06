# lg_batch_account_status

- **Page ID:** 1275560927
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_account_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 99. LG - Table Log > lg_batch_account_status
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | lg_batch_account_status | Data Source | - |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By |   | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) |   | Description |   |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 2 |   | payment_dashboard_id | Varchar | 10 | N | ประเภทรายงาน | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 3 |   | batch_status | Varchar | 10 | N | สถานะดำเนินการ | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   |   |   | รอการตรวจสอบผล |   | anocha.su | 2025-09-04 |   |
| 4 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 5 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | anocha.su | 2025-09-04 |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
