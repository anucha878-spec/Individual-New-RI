# tx_payment_benefit_preparing

- **Page ID:** 1281000146
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_benefit_preparing
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_benefit_preparing
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_benefit_preparing | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดการจ่ายเงินทั้งหมด ที่มีเข้ามาในระบบ Centralized Payment สำหรับอ้างอิงตรวจสอบในหน้าเตรียมจ่าย |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | oper_ref_no | Varchar | 16 | N | เลขธุรกรรม |   |   |   |   |   |   | CPAPU68090200001 |   | ariya.pi | อ้างอิง Patter : "CP"+Code ธุรกรรม 3 ตำแหน่ง+YYMMDD+NNNNNYYMMDD คือ พศ 2 ตำแหน่งสุดท้าย เลขเดือน และวันที่NNNNN คือ Running no. เริ่มที่ 00001 ในทุกๆวัน |
| 4 |   | payment_type | Varchar | 10 | N | ประเภทรายการจ่าย |   |   |   |   |   |   | APU |   | ariya.pi | Code รายการธุรกรรม 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 6 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 7 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 8 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
