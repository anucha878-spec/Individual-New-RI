# tx_batch_fund_document

- **Page ID:** 1340244351
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund_document
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > Insurance Fund > tx_batch_fund_document
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
|   | **PK** | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
|   | FK | batch_fund_id | Int8 |   | Y | Batch เลขธุรกรรม | [tx_batch_fund](/display/RDSCPENH/tx_batch_fund).id |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
|   | FK | doc_code | Varchar | 30 | N | รหัสอ้างอิงตารางเอกสาร | [ms_document](/display/RDSCPENH/ms_document).doc_code |   |   |   |   |   | Invalid_Format_Bank |   | anocha.su | 2026-05-12 |   |
|   |   | dms_doc_id | Varchar | 20 | N | รหัสอ้างอิงระบบ DMS |   |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
|   |   | doc_name | Varchar | 255 | N | ชื่อเอกสาร |   |   |   |   |   |   | 202609010001_เอกสารการเงิน.pdf | ชื่อไฟล์ตามจริง (กรณีชื่อไฟล์ยาวเกินที่กำหนดระบบจะตัดชื่อไฟล์ที่เกินออก) | anocha.su | 2026-05-12 |   |
|   |   | round_no | Numeric | 3,0 | N | รอบที่ (ลำดับเอกสาร ปรับมาเป็น รอบที่) |   |   |   |   |   |   | 1 | กรณีอัปโหลดเอกสารประเภทเดียวกัน มากกว่า 1 ไฟล์ ให้ Auto Running round_no ที่ใช้ในการอัปโหลด | anocha.su | 2026-05-12 |   |
|   |   | document_upload_date | Timestamp |   | N | วันและเวลาที่อัปโหลดเอกสาร |   |   |   |   |   |   | 2026-09-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
|   |   | active_status | Varchar | 1 | N | สถานะการแสดงข้อมูลลบหน้าจอY = แสดงเอกสารที่หน้าจอ / ใช้งานN = ไม่แสดงเอกสารที่หน้าจอ / ไม่ใช้งาน |   |   |   |   |   |   | Y | ใช้สำหรับแสดงสถานะของเอกสาร กรณีลบข้อมูลให้เปลี่ยนเป็น N | anocha.su | 2026-05-12 |   |
|   |   | doc_no | Varchar | 50 | Y | เลขที่เอกสาร |   |   |   |   |   |   | กจ. 118/2568 |   |   |   |   |
|   |   | fund_amount_edit | Numeric | 50 | Y | จำนวนเงิน |   |   |   |   |   |   | 1,476,805.00 |   |   |   |   |
|   |   | fund_interest_edit | Numeric | 15,2 | Y | จำนวนเงินเพิ่ม |   |   |   |   |   |   | 0.00 |   |   |   |   |
|   |   | created_date | Timestamp | 15,2 | N | วันที่สร้าง |   |   |   |   |   |   | 2026-09-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
|   |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |
|   |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2026-09-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
|   |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |

ตัวอย่างข้อมูล : [11. เอกสาร](/display/RDSCPENH/ms_document_data)

---

## Hyperlinks บนหน้านี้

- [tx_batch_fund](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund)
- [ms_document](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_document)
- [11. เอกสาร](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_document_data)
