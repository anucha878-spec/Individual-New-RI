# tx_payment_doc

- **Page ID:** 1309999287
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_doc
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_doc
- **Depth:** 4

---

เพื่มใน R2 โดย ariya.pi เมื่อ 05/01/2569

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_doc | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-01-05 | Description | เก็บข้อมูลรายละเอียดของเอกสารแนบจากระบบต้นทางของรายการจ่ายนั้นๆ โดยสามารถอ้างอิงถึงข้อมูลเอกสารในระบบ DMS ได้ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FORIEGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | oper_ref_no | Varchar | 16 | N | เลขที่ธุรกรรม |   |   |   |   |   |   | CPAPU68090200001 |   | ariya.pi |   |
| 4 |   | payment_type | Varchar | 10 | N | ธุรกรรมย่อย |   |   |   |   |   |   | APU |   | ariya.pi | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | document_name | Varchar | 255 | N | ชื่อไฟล์เอกสาร |   |   |   |   |   |   |   |   | ariya.pi |   |
| 6 |   | document_type | Varchar | 200 | N | ชื่อเอกสาร |   |   |   |   |   |   |   |   | ariya.pi |   |
| 7 |   | transaction_date | Timestamp |   | N | วันและเวลาที่ดำเนินการ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 8 |   | dms_doc_id | Numeric | 19 | N | เลข DMS DOC ID |   |   |   |   |   |   |   |   | ariya.pi |   |
| 9 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 10 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 11 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 12 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
