# tx_payment_doc_detail

- **Page ID:** 1309999296
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_doc_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_doc_detail
- **Depth:** 4

---

เพื่มใน R2 โดย ariya.pi เมื่อ 05/01/2569

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_doc_detail | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-01-05 | Description | เก็บข้อมูลรายละเอียดของเอกสารแนบจากระบบต้นทางของรายการจ่ายนั้นๆ โดยเป็นรายละเอียดของเอกสารแนบที่ยืนยันจากระบบต้นทางในแต่ละรายการเอกสาร |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FORIEGN_KEY | payment_doc_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment_doc |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | include_flag --> other_flagปรับแก้ไข Field โดย ariya.pi เมือ 17/04/69 | Varchar | 1 | N | มีเอกสารอื่นๆประกอบหรือไม่ |   |   |   |   |   |   | Y หรือ N |   | ariya.pi | มีเอกสารอื่นๆประกอบหรือไม่ (Y= มี , N= ไม่มี) |
| 4 |   | document_detail_name | Varchar | 255 | N | ชื่อเอกสารสำหรับเอกสารอื่น |   |   |   |   |   |   |   |   | ariya.pi |   |
| 5 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 6 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 9 |   | document_detail_codeปรับเพิ่ม Field โดย ariya.pi เมือ 17/04/69 | Varchar | 255 | N | Code เอกสารประกอบที่เกี่ยวข้อง |   |   |   |   |   |   |   |   | ariya.pi | อิงตาม cf_list_of_value ของ DB : benefitregister |
