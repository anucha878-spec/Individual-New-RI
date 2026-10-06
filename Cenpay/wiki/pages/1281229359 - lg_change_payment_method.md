# lg_change_payment_method

- **Page ID:** 1281229359
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_change_payment_method
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > lg_change_payment_method
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | lg_change_payment_method | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดการเปลี่ยนแปลงช่องทางการจ่ายเงิน สำหรับรายการจ่ายที่สนใจ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | old_payment_channel_code | Varchar | 10 | N | ช่องทางการจ่ายเดิม |   |   |   |   |   |   | TB |   | ariya.pi | อ้างอิง ช่องทางการจ่าย (ปฎิบัติการ) 3 ตำแหน่งที่ XXX |
| 4 |   | old_payment_channel | Varchar | 5 | N | วิธีการจ่ายเดิม |   |   |   |   |   |   | T |   | ariya.pi |   |
| 5 |   | old_transfer_type | Varchar | 5 | N | ประเภทการโอนเดิม |   |   |   |   |   |   | B |   | ariya.pi |   |
| 6 |   | old_paid_date | Date |   | N | วันที่จ่ายเงินเดิม |   |   |   |   |   |   | 2025-09-20 |   | ariya.pi |   |
| 7 |   | new_payment_channel_code | Varchar | 10 | N | ช่องทางการจ่ายใหม่ |   |   |   |   |   |   | TE |   | ariya.pi | อ้างอิง ช่องทางการจ่าย (ปฎิบัติการ) 3 ตำแหน่งที่ XXX |
| 8 |   | new_payment_channel | Varchar | 5 | N | วิธีการจ่ายเดิม |   |   |   |   |   |   | T |   | ariya.pi |   |
| 9 |   | new_transfer_type | Varchar | 5 | N | ประเภทการโอนเดิม |   |   |   |   |   |   | E |   | ariya.pi |   |
| 10 |   | new_paid_date | Date |   | N | วันที่จ่ายเงินใหม่ |   |   |   |   |   |   | 2023-09-30 |   | ariya.pi |   |
| 11 |   | remark | Varchar | 10 | N | หมายเหตุ |   |   |   |   |   |   | CCA |   | ariya.pi | อ้างอิง หมายเหตุเปลี่ยนช่องทางการจ่ายเงิน 3 ตำแหน่งที่ XXX |
| 12 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 13 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
