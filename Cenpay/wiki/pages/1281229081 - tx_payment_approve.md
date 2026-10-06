# tx_payment_approve

- **Page ID:** 1281229081
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_approve
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_approve | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-04 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินทั้งหมด ที่มีเข้ามาในระบบ Centralized Payment สำหรับการอนุมัติตรวจจ่ายครั้งที่ 2 |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 |   | approve_batch_no | Varchar | 30 | N | เลข Batch ปฎิบัติการ |   |   |   |   |   |   | CP-TB-20250909-00002 |   | ariya.pi | อ้างอิง Patter"CP-"+ประเภทการจ่าย 2 ตำแหน่ง+"-"+YYYYMMDD+"-"+NNNNNปรเภทการจ่าย (ช่องทางการจ่าย) อ้างอิงตามTB = โอนเเงิน-ปกติTP = โอนเงิน-พร้อมเพย์TE = โอนเงิน-ด่วนCC = เช็คบริษัทCB = เช็คธนาคารCD = บัตรเครดิตYYYY ปีคศ, MM เลขเดือน และ DD เลขวันที่NNNNN คือ Sequence No 5 ตำแหน่ง เริ่มใหม่รายวัน |
| 3 |   | ref_approve_batch_no | Varchar | 30 | Y | เลขที่ Batch ปฎิบัติการ (อ้างอิง) |   |   |   |   |   |   | PC-TB-20250909-00001 |   | ariya.pi |   |
| 4 |   | status_code | Varchar | 10 | N | สถานะ Batch ปฎิบัติการ |   |   |   |   |   |   | WAA |   | ariya.pi | Code สถานะ Batch ปฎิบัติการ 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | approved_by | Varchar | 50 | Y | ผู้อนุมัติจ่ายครั้งที่ 2 |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 6 |   | approved_date | Date |   | Y | วันที่อนุมัติจ่ายครั้งที่ 2 |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 7 |   | reference_number_edw | Varchar | 20 | N | Reference Number EDW |   |   |   |   |   |   |   |   | ariya.pi |   |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 10 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 11 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 12 |   | approved_name | Varchar | 100 | Y | ชื่อผู้อนุมัติจ่ายครั้งที่ 2 |   |   |   |   |   |   | นายอริยะ เพียรอริยานนท์ |   | ariya.pi |   |
| 13 |   | unapproved_code | Varchar | 100 | Y | รหัสหัวข้อไม่อนุมัติรายการ |   |   |   |   |   |   |   |   | patcha.vo |   |
| 14 |   | unapproved_detail | Varchar | 255 | Y | คำอธิบายไม่อนุมัติรายการ |   |   |   |   |   |   |   |   | patcha.vo |   |
