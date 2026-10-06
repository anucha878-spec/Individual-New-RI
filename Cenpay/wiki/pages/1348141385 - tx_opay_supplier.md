# tx_opay_supplier

- **Page ID:** 1348141385
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_opay_supplier
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_opay_supplier | Data Source | ระบบ Online Payment |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-06-12 | Description | ตารางข้อมูลรายการ supplier จาก online payment |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Update Date | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | int8 |   | N | เลขที่ running |   |   |   |   |   |   | 1, 2, 3,..... |   | patcha.vo | 12/06/69 |   |
| 2 | FK | opay_transaction_id | int8 |   | N | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).id |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 3 |   | supplier_code | Varchar | 50 | N | รหัส Supplier |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 4 |   | supplier_name | Varchar | 255 | N | ชื่อ Supplier |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 5 |   | address1 | Varchar | 500 | Y | ที่อยู่ |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 6 |   | address2 | Varchar | 500 | Y | ที่อยู่ |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 7 |   | tax_no | Varchar | 20 | Y | เลขที่ผู้เสียภาษี |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 8 |   | tax_type | Varchar | 50 | Y | ประเภทภาษี |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 9 |   | tax_code | Varchar | 50 | Y | รหัสภาษี |   |   |   |   |   |   |   |   | patcha.vo | 12/06/69 |   |
| 10 |   | wht_type | Varchar | 64 | N | WHT Type |   |   |   |   |   |   | 64 |   | patcha.vo | 12/06/69 |   |
| 11 |   | wht_rate | Numeric | 5,2 | N | อัตราภาษีหัก ณ ที่จ่าย |   |   |   |   |   |   | 10 |   | patcha.vo | 12/06/69 |   |
| 12 |   | gross_amount | Numeric | 15,2 | N | ยอดเงินก่อนหักภาษี |   |   |   |   |   |   | 10,000.00 |   | patcha.vo | 12/06/69 |   |
| 13 |   | wht_amount | Numeric | 15,2 | N | ยอดเงินภาษี |   |   |   |   |   |   | 10,000.00 |   | patcha.vo | 12/06/69 |   |
|   |   | created_date | timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-07-17 14:50:19.872 +0700 |   | patcha.vo | 12/06/69 |   |
|   |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcha.vo |   | patcha.vo | 12/06/69 |   |
|   |   | updated_date | timestamp |   | N | วันที่แก้ไขรายการล่าสุด |   |   |   |   |   |   | 2023-07-19 14:50:19.872 +0700 |   | patcha.vo | 12/06/69 |   |
|   |   | updated_by | varchar | 50 | N | ผู้แก้ไขรายการล่าสุด |   |   |   |   |   |   | patcha.vo |   | patcha.vo | 12/06/69 |   |

---

## Hyperlinks บนหน้านี้

- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
