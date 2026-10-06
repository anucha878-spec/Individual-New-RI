# tx_batch_email_tracking

- **Page ID:** 1322352949
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_email_tracking
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_batch_email_tracking
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_batch_email_tracking | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-02-24 | Description | เก็บข้อมูลสำหรับรอส่ง Email แจ้งเตือนในแต่ละหัวข้อการส่งที่มีการกำหนดรอบการส่ง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | email_code | Varchar | 50 | N | รหัส Code Email |   |   |   |   |   |   | CPH_CIS_PAYMENT_RESULT_EMAIL |   | ariya.pi |   |
| 4 |   | service_branch | Varchar | 4 | N | Code สาขาบริการ |   |   |   |   |   |   | 0116 |   | ariya.pi |   |
| 5 |   | source_branch | Varchar | 4 | N | Code สาขาต้นสังกัด |   |   |   |   |   |   | 0200 |   | ariya.pi |   |
| 6 |   | service_branch_name | Varchar | 100 | N | ชื่อสาขาบริการ |   |   |   |   |   |   | 0116 : อโศก |   | ariya.pi |   |
| 7 |   | source_branch_name | Varchar | 100 | N | ชื่อสาขาต้นสังกัด |   |   |   |   |   |   | 0200 : ธนบุรี |   | ariya.pi |   |
| 8 |   | status_name | Varchar | 100 | N | ชื่อสถานะรายการ |   |   |   |   |   |   | Format ไม่ผ่าน |   | ariya.pi |   |
| 9 |   | payment_name | Varchar | 100 | N | ชื่อประเภทการจ่าย |   |   |   |   |   |   | เวนคืนกรมธรรม์ |   | ariya.pi |   |
| 10 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | 0273914 |   | ariya.pi |   |
| 11 |   | bank_acc_no | Varchar | 100 | Y | เลขที่บัญชี |   |   |   |   |   |   | 020232946291 |   | ariya.pi |   |
| 12 |   | bank_acc_name | Varchar | 255 | Y | ชื่อธนาคาร |   |   |   |   |   |   | ธนาคารออมสิน |   | ariya.pi |   |
| 13 |   | action_date | date |   | N | วันที่โอนเงิน/วันที่ยกเลิก |   |   |   |   |   |   | 24/02/2569 |   | ariya.pi |   |
| 14 |   | total_net_amount | Numeric | (15,2) | Y | จำนวนเงินสุทธิ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 15 |   | sum_receive_amount | Numeric | (15,2) | Y | จำนวนเงินเต็ม |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 16 |   | sum_expense_amount | Numeric | (15,2) | Y | จำนวนเงินหักหนี้สินและอื่นๆ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 17 |   | new_policy_prem_amount | Numeric | (15,2) | Y | จำนวนเงินเคสใหม่ |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 18 |   | other_policy_prem_amount | Numeric | (15,2) | Y | จำนวนเงินชำระเบี้ยกรมธรรม์อื่น |   |   |   |   |   |   | 0.00 |   | ariya.pi |   |
| 19 |   | actor_name | Varchar | 100 | N | หน่วยงานที่จัดการ |   |   |   |   |   |   | ฝ่ายปฎิบัติการ |   | ariya.pi |   |
| 20 |   | remark | Varchar | 255 | Y | สาเหตุ |   |   |   |   |   |   | เปลี่ยนแบบประกัน |   | ariya.pi |   |
| 21 |   | email_status | Varchar | 1 | N | สถานะการส่ง Email |   |   |   |   |   |   | W |   | ariya.pi | W : WaitingS : SuccessF : Fail |
| 22 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 23 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 24 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 25 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
