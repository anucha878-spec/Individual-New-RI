# tx_payment_mapping

- **Page ID:** 1281229248
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_mapping
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_mapping
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_mapping | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-04 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินทั้งหมด ที่มีเข้ามาในระบบ Centralized Payment ที่โดนผูกเข้ากับการอนุมัติครั้งที่ 1 และครั้งที่ 2 |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   |   |   |
| 3 | FOREIGN KEY | verify_batch_no | Varchar | 30 | N | เลข Batch ตรวจสอบ |   |   |   |   |   |   | PC-TB-CLN-20250909-00002 |   | ariya.pi | อ้างอิง Patter"PC-"+ประเภทการจ่าย 2 ตำแหน่ง+"-"+YYYYMMDD+"-"+NNNNNปรเภทการจ่าย (ช่องทางการจ่าย) อ้างอิงตามTB = โอนเเงิน-ปกติTP = โอนเงิน-พร้อมเพย์TE = โอนเงิน-ด่วนCC = เช็คบริษัทCB = เช็คธนาคารCD = บัตรเครดิตYYYY ปีพศ, MM เลขเดือน และ DD เลขวันที่NNNNN คือ Sequence No 5 ตำแหน่ง เริ่มใหม่รายวัน |
| 4 | FOREIGN KEY | approve_batch_no | Varchar | 30 | Y | เลข Batch ปฎิบัติการ |   |   |   |   |   |   | PC-TB-20250909-00001 |   | ariya.pi | อ้างอิง Patter"PC-"+ประเภทการจ่าย 2 ตำแหน่ง+"-"+YYYYMMDD+"-"+NNNNNปรเภทการจ่าย (ช่องทางการจ่าย) อ้างอิงตามTB = โอนเเงิน-ปกติTP = โอนเงิน-พร้อมเพย์TE = โอนเงิน-ด่วนCC = เช็คบริษัทCB = เช็คธนาคารCD = บัตรเครดิตYYYY ปีพศ, MM เลขเดือน และ DD เลขวันที่NNNNN คือ Sequence No 5 ตำแหน่ง เริ่มใหม่รายวัน |
| 5 |   | verify_type | Varchar | 1 | N | ตรวจสอบรายการ |   |   |   |   |   |   | T |   | ariya.pi | T : ถูกต้องF : ไม่ถูกต้อง |
| 6 |   | incorrect_cause | Varchar | 10 | Y | สาเหตุ |   |   |   |   |   |   | ANC |   | ariya.pi | Code สาเหตุการตรวจสอบรายการ 3 ตำแหน่ง อ้างอิง XXX |
| 7 |   | verify_status_code | Varchar | 10 | N | สถานะตรวจสอบ |   |   |   |   |   |   | WAV |   | ariya.pi | Code สถานะการตรวจสอบ 3 ตำแหน่ง อ้างอิง XXX |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 10 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 11 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
