# ms_fund_document -- ยกเลิกใช้งาน

- **Page ID:** 1347911925
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1347911925
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > Insurance Fund > ms_fund_document -- ยกเลิกใช้งาน
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_batch_fund_document | Data Source | Batch Process ประมวลผลรายเดือนClaim System (การเรียกร้องสินไหมประกันภัยเดี่ยว)SQL (การเรียกร้องสินไหมประกันภัยกลุ่ม)Benefit Register (รายการทะเบียนรอจ่ายใหม่) |
| Project Name | Cenpay | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E. A.D. = คริสต์ศักราช B.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-12 | Description | ข้อมูลการจ่ายระดับ Batch |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | doc_code | Varchar | 30 | N | รหัสเอกสารที่ระบบ DMS |   |   |   |   |   |   | A01 |   | anocha.su | 2026-05-12 | ![img](/download/thumbnails/1275560711/image2025-9-5%2010%3A55%3A28.png?version=1&modificationDate=1757044528322&api=v2) |
| 2 |   | doc_name | Varchar | 255 | N | ชื่อเอกสาร |   |   |   |   |   |   | เอกสาร Format ไม่ผ่าน |   | anocha.su | 2026-05-12 |   |
| 3 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 4 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | anocha.su | 2026-05-12 |   |
| 5 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 6 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | anocha.su | 2026-05-12 |   |

ตัวอย่างข้อมูล [ms_document_data](/display/RDSCPENH/ms_document_data)

---

## Hyperlinks บนหน้านี้

- [ms_document_data](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_document_data)
