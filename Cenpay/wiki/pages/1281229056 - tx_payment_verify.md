# tx_payment_verify

- **Page ID:** 1281229056
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_verify
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_verify
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_verify | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-04 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินทั้งหมด ที่มีเข้ามาในระบบ Centralized Payment สำหรับการอนุมัติตรวจจ่ายครั้งที่ 1 |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 |   | verify_batch_no | Varchar | 30 | N | เลข Batch ตรวจสอบ |   |   |   |   |   |   | CP-TB-CLN-20250909-00002 |   | ariya.pi | อ้างอิง Patter"CP-"+ประเภทการจ่าย 2 ตำแหน่ง+"-"+รหัสประเภทรายการ 3 ตำแหน่ง+"-"+YYYYMMDD+"-"+NNNNNปรเภทการจ่าย (ช่องทางการจ่าย) อ้างอิงตามTB = โอนเเงิน-ปกติTP = โอนเงิน-พร้อมเพย์TE = โอนเงิน-ด่วนCC = เช็คบริษัทCB = เช็คธนาคารCD = บัตรเครดิตประเภทรายการCLN = คลีนเคสAML = ติด AML/CFT แบบไม่ FreezeYYYY ปีคศ, MM เลขเดือน และ DD เลขวันที่NNNNN คือ Sequence No 5 ตำแหน่ง เริ่มใหม่รายวัน |
| 3 | FORIEGN_KEY | ref_verify_batch_no | Varchar | 30 | Y | เลขที่ Batch ตรวจสอบ (อ้างอิง) |   |   |   |   |   |   | PC-TB-CLN-20250909-00001 |   | ariya.pi |   |
| 4 |   | status_code | Varchar | 10 | N | สถานะ Batch ตรวจสอบ |   |   |   |   |   |   | WAV |   | ariya.pi | Code สถานะ Batch ตรวจสอบ 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | approved_by | Varchar | 50 | Y | ผู้อนุมัติจ่ายครั้งที่ 1 |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 6 |   | approved_date | Date |   | Y | วันที่อนุมัติจ่ายครั้งที่ 1 |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 7 |   | ref_type | Varchar | 10 | N | ประเภทรายการ |   |   |   |   |   |   | CLC = Clean CaseAML = AML/CFTCIS = CIS Approve |   | ariya.pi | Code ประเภทรายการ 3 ตำแหน่ง อ้างอิง XXX |
| 8 |   | payment_type | Varchar | 10 | N | ประเภทการจ่าย |   |   |   |   |   |   | APU |   | ariya.pi | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| 9 |   | payment_channel_code | Varchar | 10 | N | ช่องทางการจ่าย |   |   |   |   |   |   | TB |   | ariya.pi | Code รหัสช่องทางการจ่ายเงิน 2 ตำแหน่ง อ้างอิง XXX |
| 10 |   | payment_round | Numeric | 2 | N | จ่ายครั้งที่ |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 11 |   | paid_date | Date |   | N | วันที่จ่าย |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 12 |   | number_of_record | Numeric | 10 | N | จำนวนรายการทั้งหมด |   |   |   |   |   |   | 120 |   | ariya.pi |   |
| 13 |   | payment_amount | Numeric | (15,2) | N | จำนวนเงินจ่ายสุทธิ |   |   |   |   |   |   | 100,000.00 |   | ariya.pi |   |
| 14 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 15 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 16 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 17 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 18 |   | approved_name | Varchar | 100 | Y | ชื่อผู้อนุมัติจ่ายครั้งที่ 1 |   |   |   |   |   |   | นายอริยะ เพียรอริยานนท์ |   | ariya.pi |   |
| 19 |   | system_source | Varchar | 100 | Y | ชื่อระบบงานต้นทาง |   |   |   |   |   |   | APL Improvement |   | ariya.pi |   |
