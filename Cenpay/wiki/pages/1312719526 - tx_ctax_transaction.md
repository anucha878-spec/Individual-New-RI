# tx_ctax_transaction

- **Page ID:** 1312719526
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_ctax_transaction
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_ctax_transaction | Data Source | Cenpay หน้าจอตรวจจ่ายบัญชี |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-01-15 | Description | ตารางข้อมูลรายการ withholding tax |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

อ้างอิง [tx_ctax_transaction](/display/RDSADW/tx_ctax_transaction) ที่ database : adwetl

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | bigint |   | N | เลขที่ running |   |   |   |   |   |   | 1, 2, 3,..... |   |   | seq_tx_tax_transaction |
|   |   | ctax_no | varchar | 25 | N | เลขธุรกรรมตาราง ctax |   |   |   |   |   |   |   |   | patcha.vo | 29/05/69 |
|   | FK | payment_detail_id | bigint |   | N | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   |   |   |   |   |   |
| 2 |   | branch_code | varchar | 4 | Y | รหัสสาขาต้นสังกัด |   |   |   |   |   |   | 1970 |   |   |   |
| 3 |   | ba_code | varchar | 4 | Y | Business Area |   |   |   |   |   |   | 1970 |   |   |   |
| 4 |   | payment_date | date |   | Y | วันที่จ่าย |   |   |   |   |   |   | 26/07/2566 |   |   |   |
| 5 |   | wht_type | varchar | 10 | Y | ประเภท ภงด |   |   |   |   |   |   | 3 |   |   |   |
| 6 |   | revenue_amount | numeric | 15,2 | Y | เงินได้ทั้งสิ้น |   |   |   |   |   |   | 7,950.00 |   |   |   |
| 7 |   | wht_amount | numeric | 15,2 | Y | ภาษีนำส่งทั้งสิ้น |   |   |   |   |   |   | 238.50 |   |   |   |
| 8 |   | payment_channel | varchar | 20 | Y | ช่องทางการจ่าย |   |   |   |   |   |   | ภาษี |   |   |   |
| 9 |   | company_bank_account | varchar | 20 | Y | เลขบัญชีธนาคารบริษัท |   |   |   |   |   |   | 0643014557 |   |   |   |
| 10 |   | company_bank_account_name | varchar | 255 | Y | ชื่อบัญชีธนาคารบริษัท |   |   |   |   |   |   | ธนาคารไทยพาณิยช์ จำกัด (มหาชน) |   |   |   |
| 11 |   | transfer_type | varchar | 20 | Y | วิธีการจ่ายเงิน |   |   |   |   |   |   | โอนเงิน-ปกติ |   |   |   |
| 12 |   | agent_code | varchar | 7 | Y | รหัสตัวแทน |   |   |   |   |   |   | 4700061 |   |   |   |
| 13 |   | created_date | timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-07-17 14:50:19.872 +0700 |   |   |   |
| 14 |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcha.vo |   |   |   |
| 15 |   | updated_date | timestamp |   | N | วันที่แก้ไขรายการล่าสุด |   |   |   |   |   |   | 2023-07-19 14:50:19.872 +0700 |   |   |   |
| 16 |   | updated_by | varchar | 50 | N | ผู้แก้ไขรายการล่าสุด |   |   |   |   |   |   | patcha.vo |   |   |   |
| 17 |   | month | varchar | 2 | Y | เดือนที่ชำระภาษี |   |   |   |   |   |   | 06 |   |   |   |
| 18 |   | year | varchar | 4 | Y | ปีที่ชำระภาษี |   |   |   |   |   |   | 2566 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_ctax_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
