# lg_payment_transaction

- **Page ID:** 1281229395
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_transaction
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > lg_payment_transaction
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | lg_payment_transaction | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดการเปลี่ยนแปลงสถานะของรายการจ่ายทั้งหมด |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | old_payment_status_code | Varchar | 10 | N | สถานะรายการจ่ายเดิม |   |   |   |   |   |   | - |   | ariya.pi | Code สถานะการจ่าย 3 ตำแหน่ง อ้างอิง XXXไม่มีข้อมูลให้ใส่ "-" |
| 4 |   | new_payment_status_code | Varchar | 10 | N | สถานะรายการจ่ายใหม่ |   |   |   |   |   |   | WAP |   | ariya.pi | Code สถานะการจ่าย 3 ตำแหน่ง อ้างอิง XXX |
| 5 |   | verify_batch_no | Varchar | 30 | N | เลข Batch ตรวจสอบ |   |   |   |   |   |   | - |   | ariya.pi | ไม่มีข้อมูลให้ใส่ "-" |
| 6 |   | approve_batch_no | Varchar |   | N | เลข Batch ปฎิบัติการ |   |   |   |   |   |   | - |   | ariya.pi | ไม่มีข้อมูลให้ใส่ "-" |
| 7 |   | remark | Varchar | 255 | N | หมายเหตุ การเปลี่ยนสถานะ |   |   |   |   |   |   |   |   | ariya.pi | ใส่หมายเหตุ กรณีที่แต่ละสถานะที่เปลี่ยนแปลงมีการระบุสาเหตุ ให้ระบุ Description ของสาเหตุเก็บไว้ |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
