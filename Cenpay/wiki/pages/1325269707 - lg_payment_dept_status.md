# lg_payment_dept_status

- **Page ID:** 1325269707
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_dept_status
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > lg_payment_dept_status
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | lg_payment_dept_status | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-03-09 | Description | เก็บข้อมูลการส่งข้อมูบันทึกจ่ายและรับคืนหนี้สินเงินกู้และเบี้ยค้าง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FOREIGN_KEY | payment_account_id | Int8 |   | N | อ้างอิง Running ID จาก [tx_payment_account](/display/RDSCPENH/tx_payment_account) |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | status | Varchar | 15 | N | สถานะการส่งข้อมูลstatusdescriptionAบันทึกจ่าย (เงินกู้,เบี้ยค้าง)Bรับคืนหนี้สินสำเร็จ จาก AS400Cตั้งรับฝากและออกใบเสร็จ |   |   |   |   |   |   | A |   |   |   |
| status | description |
| A | บันทึกจ่าย (เงินกู้,เบี้ยค้าง) |
| B | รับคืนหนี้สินสำเร็จ จาก AS400 |
| C | ตั้งรับฝากและออกใบเสร็จ |
| 4 |   | loan_status | Varchar | 1 | Y | ผลการส่งบันทึกจ่ายเงินกู้S - Success F - Fail |   |   |   |   |   |   | S |   |   |   |
| 5 |   | loan_message | Varchar | 255 | Y | คำอธิบายกรณีส่งข้อมูลบันทึกจ่ายเงินกู้ไม่สำเร็จ |   |   |   |   |   |   |   |   |   |   |
| 6 |   | overdue_prem_status | Varchar | 1 | Y | ผลการส่งบันทึกจ่ายเบี้ยค้าง |   |   |   |   |   |   |   |   |   |   |
| 7 |   | overdue_prem_message | Varchar | 255 | Y | คำอธิบายกรณีส่งข้อมูลบันทึกจ่ายเบี้ยค้างไม่สำเร็จ |   |   |   |   |   |   |   |   |   |   |
| 8 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   |   |   |
| 9 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcharat.vo |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
