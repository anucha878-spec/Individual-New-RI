# ยกเลิก tx_payment_detail_edw

- **Page ID:** 1320780115
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1320780115
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > ยกเลิก tx_payment_detail_edw
- **Depth:** 5

---

| Database | paymentmg | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_detail_edw | Data Source |   |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By |   | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-02-17 | Description | เก็บข้อมูลการจ่าย ตามเงื่อนไขการส่งข้อมูลเข้า EDW |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FOREIGN_KEY | payment_detail_id | Int8 |   | N | อ้างอิง Running ID จาก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) |   |   |   |   |   |   | 1 |   |   |   |
|   |
|   |   | overdue_maturity_amount | Numeric | (15,2) | Y | เงินครบสัญญาค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_survivor_amount | Numeric | (15,2) | Y | เงินทรงชีพค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_finance_reward_amount | Numeric | (15,2) | Y | เงินสมนาคุณค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_surrender_amount | Numeric | (15,2) | Y | เวนคืนกรมธรรม์ค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_auto_surrender_amount | Numeric | (15,2) | Y | เวนคืนอัตโนมัติค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_return_amount | Numeric | (15,2) | Y | เงินจ่ายคืนทันทีค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | overdue_pension_amount | Numeric | (15,2) | Y | บำนาญค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | waiting_loan_amount | Numeric | (15,2) | Y | บัญชีพักรอชำระหนี้สิน |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_premium | Numeric | (15,2) | Y | เงินเบี้ยประกันภัยคืนค้างจ่าย |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_prem_first_year | Numeric | (15,2) | Y | เบี้ยประกันชีวิตคืนค้างจ่าย - ปีแรก |   |   |   |   |   |   | 0.00 |   |   |   |
|   |   | accrued_prem_next_year | Numeric | (15,2) | Y | เบี้ยประกันชีวิตคืนค้างจ่าย - ปีต่อไป |   |   |   |   |   |   | 0.00 |   |   |   |
|   |
|   |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
|   |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |
|   |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
|   |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
