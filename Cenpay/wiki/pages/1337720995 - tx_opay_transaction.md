# tx_opay_transaction

- **Page ID:** 1337720995
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_opay_transaction
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_opay_transaction | Data Source | ระบบ Online Payment |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-04-30 | Description | ตารางข้อมูลรายการ online payment |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | update date | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | bigint |   | N | เลขที่ running |   |   |   |   |   |   | 1, 2, 3,..... |   | patcha.vo |   | seq_tx_tax_transaction |
|   | FK | payment_detail_id | bigint |   | N | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   |   |   |   | patcha.vo |   |   |
| 2 |   | voucher_no_wht | varchar | 20 | Y | Voucher รายการหักภาษี ณ ที่จ่าย |   |   |   |   |   |   | WHT2023009-0031 |   | patcha.vo |   |   |
| 3 |   | ap_voucher | varchar | 20 | Y | Voucher AP |   |   |   |   |   |   | AP2025003-001 |   | patcha.vo |   |   |
| 4 |   | acc_code | varchar | 10 | N | รหัสเจ้าหนี้จ่ายพนักงาน |   |   |   |   |   |   | C0100028 |   | patcha.vo |   |   |
| 5 |   | tax_code | varchar | 10 | Y | รหัสภาษี |   |   |   |   |   |   | Nov7 |   | patcha.vo |   |   |
| 6 |   | request_no | varchar | 20 | N | เลขที่ใบคำขอ |   |   |   |   |   |   | OP20250901001 |   | patcha.vo |   |   |
| 7 |   | request_type | varchar | 255 | Y | ประเภทใบคำขอ |   |   |   |   |   |   | เบิกค่าใช้จ่ายพนักงาน |   | patcha.vo | 12/06/69 |   |
| 8 |   | pay_detail | varchar | 255 | Y | รายละเอียดการเบิก |   |   |   |   |   |   |   |   | patcha.vo | 16/06/69 |   |
|   |   | created_date | timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-07-17 14:50:19.872 +0700 |   | patcha.vo |   |   |
|   |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcha.vo |   | patcha.vo |   |   |
|   |   | updated_date | timestamp |   | N | วันที่แก้ไขรายการล่าสุด |   |   |   |   |   |   | 2023-07-19 14:50:19.872 +0700 |   | patcha.vo |   |   |
|   |   | updated_by | varchar | 50 | N | ผู้แก้ไขรายการล่าสุด |   |   |   |   |   |   | patcha.vo |   | patcha.vo |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
