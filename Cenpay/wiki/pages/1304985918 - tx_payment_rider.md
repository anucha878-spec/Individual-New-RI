# tx_payment_rider

- **Page ID:** 1304985918
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_rider
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_rider
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_policy | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-12-15 | Description | เก็บข้อมูลสัญญาเพิ่มเติมที่มีการจ่ายเงินผ่านระบบ Centralize Payment |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   |   |   |
| 3 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | ข0181320 |   |   |   |
| 4 |   | rider_id | Numeric | 3 | N | รหัส Rider |   |   |   |   |   |   | 1 |   |   |   |
| 5 |   | rider_code | Varchar | 10 | N | รหัสย่อ Rider |   |   |   |   |   |   | CPA |   |   |   |
| 6 |   | rider_type | Varchar | 1 | Y | ประเภท Rider |   |   |   |   |   |   | O : OrdinaryA : AccidentH : Health |   |   |   |
| 7 |   | rider_name | Varchar | 20 | N | ชื่อ Rider |   |   |   |   |   |   | ความคุ้มครองอุบัติเหตุ |   |   |   |
| 8 |   | rider_start_date | Date |   | N | วันที่เริ่มคุ้มครอง |   |   |   |   |   |   | 2025-06-30 |   |   |   |
| 9 |   | rider_end_date | Date |   | N | วันที่สิ้นสุดความคุ้มครอง |   |   |   |   |   |   | 2026-06-30 |   |   |   |
| 10 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
| 11 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |
| 12 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
| 13 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |
| 14 |   | rider_sum_insured | Numeric | (15,2) | N | ทุน Rider |   |   |   |   |   |   | 1000.00 |   |   |   |
| 15 |   | rider_premium | Numeric | (15,2) | N | เบี้ย Rider |   |   |   |   |   |   | 1000.00 |   |   |   |
| 16 |   | rider_extra_premium | Numeric | (15,2) | N | เบี้ยพิเศษ Rider |   |   |   |   |   |   | 1000.00 |   |   |   |
| 17 |   | rider_expire_date | Date |   | Y | วันที่หมดอายุ Rider |   |   |   |   |   |   | 2026-06-30 |   |   |   |
