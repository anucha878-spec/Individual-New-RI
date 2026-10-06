# tx_pay_acc_problem_tracking

- **Page ID:** 1313898815
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_pay_acc_problem_tracking
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_pay_acc_problem_tracking
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_pay_acc_problem_tracking | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-01-19 | Description | เก็บข้อมูลรายการ Batch ปฎิบัติการที่เกิดปัญหาในการส่งข้อมูลที่ระบบ EDW ไม่สำเร็จ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FORIEGN_KEY | payment_account_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment_account |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 3 |   | approve_batch_no | Varchar | 30 | N | อ้างอิงเลข Batch ปฏิบัติการ |   |   |   |   |   |   | CP-CC-20251212-00001 |   | ariya.pi |   |
| 4 |   | event_code | Varchar | 25 | N | อ้างอิง Event Code บัญชี |   |   |   |   |   |   | CP_ACC_07 |   | ariya.pi |   |
| 5 |   | account_type | Varchar | 10 | N | อ้างอิงประเภทการทรายการ Revert หรือไม่ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 6 |   | problem_cause | Varchar | 10 | Y | ประเภทของปัญหา |   |   |   |   |   |   | CRF |   | ariya.pi | CRF (Cenpay Reconcile Fail) : ข้อมูล Reconcile ยอด Cenpay และ EDW ไม่ตรงกัน EES (EDW Error Status) : สถานะข้อมูลที่ระบบ EDW ไม่ถูกต้อง RVF (Revert Fail) : กระบวนการ Revert EDW ไม่สำเร็จ UEF (Update EDW Status Fail) : ปรับสถานะรายการทำระบบ EDW ไม่สำเร็จ |
| 7 |   | problem_status | Varchar | 10 | N | สถานะการแก้ไขปัญหา |   |   |   |   |   |   | WFX |   | ariya.pi | WFX (Waiting Fix) : รอการแก้ไข PFX (Processing Fix) : อยู่ระหว่างแก้ไข FIX (Fixed) : แก้ไขเรียบร้อย |
| 8 |   | reference_number | Varchar | 255 | N | Reference No EDW ของตัวเดิมที่มีปัญหา |   |   |   |   |   |   |   |   | ariya.pi | สำหรับกรณีที่ Reverse ให้เก็บ Reference No ของ EDW ก่อนหน้า |
| 9 |   | created_date | Timestamp |   | Y | วันที่บันทึกข้อผิดพลาด |   |   |   |   |   |   |   |   | ariya.pi |   |
| 10 |   | created_by | Varchar | 50 | Y | ผู้ทำรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 11 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 12 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
