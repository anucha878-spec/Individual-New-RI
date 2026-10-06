# tx_payment_account_detail_doc

- **Page ID:** 1281458336
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail_doc
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_account_detail_doc
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_account_detail_doc | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-05 | Description | เก็บข้อมูลรายละเอียดของเอกสารแนบแต่ละการจ่ายที่เกี่ยวข้องกับรายการจ่ายนั้นๆ โดยสามารถอ้างอิงถึงข้อมูลเอกสารในระบบ DMS ได้ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FORIEGN_KEY | payment_account_detail_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment_account_detail |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | oper_ref_no | Varchar | 16 | N | เลขที่ธุรกรรม |   |   |   |   |   |   | CPAPU68090200001 |   | ariya.pi |   |
| 4 |   | approve_batch_no | Varchar | 30 | N | เลข Batch ปฎิบัติการ |   |   |   |   |   |   | PC-TB-20250909-00001 |   | ariya.pi | อ้างอิง Patter"PC-"+ประเภทการจ่าย 2 ตำแหน่ง+"-"+YYYYMMDD+"-"+NNNNNปรเภทการจ่าย (ช่องทางการจ่าย) อ้างอิงตามTB = โอนเเงิน-ปกติTP = โอนเงิน-พร้อมเพย์TE = โอนเงิน-ด่วนCC = เช็คบริษัทCB = เช็คธนาคารCD = บัตรเครดิตYYYY ปีพศ, MM เลขเดือน และ DD เลขวันที่NNNNN คือ Sequence No 5 ตำแหน่ง เริ่มใหม่รายวัน |
| 5 |   | payment_type | Varchar | 10 | N | ธุรกรรมย่อย |   |   |   |   |   |   | APU |   | ariya.pi | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| 6 |   | document_name | Varchar | 255 | N | ชื่อไฟล์เอกสาร |   |   |   |   |   |   |   |   | ariya.pi |   |
| 7 |   | document_type | Varchar | 200 | N | ชื่อเอกสาร |   |   |   |   |   |   |   |   | ariya.pi |   |
| 8 |   | transaction_date | Timestamp |   | N | วันและเวลาที่ดำเนินการ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 9 |   | dms_doc_id | Numeric | 19 | N | เลข DMS DOC ID |   |   |   |   |   |   |   |   | ariya.pi |   |
| 10 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 11 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 12 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 13 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 14 |   | transaction_created_by | Varchar | 50 | N | ชื่อผู้สร้างเอกสาร |   |   |   |   |   |   | ariya.pi |   | ariya.pi | *** ปรับเพิ่ม R1 โดย ariya.pi เมื่อ 10/02/2569**เพิ่มเพื่อมาแสดงให้เห็นชื่อผู้สร้างเอกสารบนหน้าจอ |
