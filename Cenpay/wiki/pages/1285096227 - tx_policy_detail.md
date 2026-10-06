# tx_policy_detail

- **Page ID:** 1285096227
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_policy_detail
- **Depth:** 5

---

| Database | paymentmg | Link Previous Version | - |
|---|---|---|---|
| Table | tx_policy_detail | Data Source | Cenpay |
| Project Name | Centralized Payment (Enhancement & Integration) | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-09-18 | Description | รายละเอียดกรมธรรม์ |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| **No.** | **Key** | **Attribute Name******* | **Data Type******* | **Length** | **Null (Y/N)******* | **Description******* | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | INT8 |   | N | running id (seq_tx_policy_detail) |   |   |   |   |   |   |   |   |   |   |
| 2 | FOREIGN_KEY | payment_detail_id | INT8 |   | N | รหัสอ้างอิงรายละเอียดการชำระเงิน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) .id |   |   |   |   |   |   |   |
| 3 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   |   |   |   |   |
| 4 |   | policy_type | Varchar | 3 | Y | ประเภทกรมธรรม์policy_typedescORDสามัญINDอุตสาหกรรม ปชGOVอุตสาหกรรม ขพGOVอุตสาหกรรม คู่ขวัญPAอุบัติเหตุ (PA)ULULGRPGROUPPAGPAGROUP |   |   |   |   |   |   |   |   |   |   |
| policy_type | desc |
| ORD | สามัญ |
| IND | อุตสาหกรรม ปช |
| GOV | อุตสาหกรรม ขพ |
| GOV | อุตสาหกรรม คู่ขวัญ |
| PA | อุบัติเหตุ (PA) |
| UL | UL |
| GRP | GROUP |
| PAG | PAGROUP |
| 5 |   | branch_source_code | Varchar | 4 | Y | รหัสสาขาต้นสังกัด |   |   |   |   |   |   | 0116 |   |   |   |
| 6 |   | branch_register_code | Varchar | 4 | Y | รหัสสาขารับเรื่อง |   |   |   |   |   |   | 0116 |   |   |   |
| 7 |   | branch_service_code | Varchar | 4 | Y | รหัสสาขาบริการ |   |   |   |   |   |   | 0116 |   |   |   |
| 8 |   | channel_code | Varchar | 7 | Y | รหัสช่องทาง |   |   |   |   |   |   | 5075600 |   |   |   |
| 9 |   | product_code | Varchar | 5 | Y | รหัสแบบประกัน |   |   |   |   |   |   | 496 |   |   |   |
| 10 |   | card_no | Varchar | 20 | Y | เลขที่บัตร |   |   |   |   |   |   | 1100567893455 |   | patcha.vo | 10/02/69 |
| 11 |   | card_type | Varchar | 5 | Y | ประเภทบัตร |   |   |   |   |   |   | I หรือ P |   | patcha.vo | 10/02/69 |
| 12 |   | policy_start_date | Date |   | Y | วันที่เริ่มสัญญา |   |   |   |   |   |   | 2026-01-01 | Effective Date (Issue Date)[05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](/pages/viewpage.action?pageId=902168624) | patcha.vo | 22/04/69 |
| 13 |   | payment_mode | Int | 2,03,0 | Y | โหมดชำระเบี้ยORD : 1,3,6,12 IND : 1,2,3,..,11,12 Group : 12 PA : 12 UL : 111 |   |   |   |   |   |   | 1 | Mode of Payment | patcha.vo | 20/07/69 |
| 14 |   | premium_annual_amount | Numeric | 15,2 | Y | เบี้ยประกันรายปีของกรมธรรม์ |   |   |   |   |   |   | 1,000.00 | Annual Premium | patcha.vo | 22/04/69 |
| 15 |   | premium_mode_amount | Numeric | 15,2 | Y | เบี้ยประกันรายโหมดของกรมธรรม์ |   |   |   |   |   |   | 1,000.00 |   | patcha.vo | 22/06/69 |
|   |   | created_date | TIMESTAMP |   | N | วันที่สร้าง |   |   |   |   |   |   |   |   |   |   |
|   |   | created_by | VARCHAR | 50 | N | ผู้สร้าง |   |   |   |   |   |   |   |   |   |   |
|   |   | updated_date | TIMESTAMP |   | Y | วันที่แก้ไข |   |   |   |   |   |   |   |   |   |   |
|   |   | updated_by | VARCHAR | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   |   |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=902168624)
