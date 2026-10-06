# tx_cs_transaction

- **Page ID:** 1329267383
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_cs_transaction
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_cs_transaction | Data Source | Claim System |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-03-24 | Description | ตารางข้อมูลรายการจ่ายสินไหม สำหรับส่งเข้า EDW |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

อ้างอิงข้อมูลจาก sheet [COA](https://docs.google.com/spreadsheets/d/1quCycIGC-VRNqSWQWBrmblBlPKokgDGw1iG87i-F-1o/edit?usp=sharing) และ [05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](/pages/viewpage.action?pageId=902168624)

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | bigint |   | N | เลขที่ running |   |   |   |   |   |   | 1, 2, 3,..... | 24/03/2026 | patcha.vo |   |
| 2 | FK | claim_no | varchar | 25 | N | เลขอ้างอิงระบบ claim system |   |   |   |   |   |   | 3000/04-2568/00003-01 | 24/03/2026 | patcha.vo |   |
| 3 | FK | payment_detail_id | bigint |   | N | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   |   | 1 | 24/03/2026 | patcha.vo |   |
| 4 |   | base_rider_indecatorbase_rider_indicator | varchar | 5 | N | Base / Rider |   |   |   |   |   |   | 1.ประเภทกรมธรรม์สามัญ / อุตสาหกรรมกรณีเป็นแบบประกันหลัก กำหนดค่า basic_rider_indicator เป็น 'BASIC'กรณีเป็นแบบประกันเพิ่มเติม กำหนดค่า basic_rider_indicator เป็น 'RIDER' 2.PAกำหนดค่า basic_rider_indicator เป็น 'BASIC' เสมอเนื่องจาก PA มีแต่ความคุ้มครองหลัก และความคุ้มครองเพิ่มเติม ไม่มีสัญญาเพิ่มเติม | 17/06/2026 | patcha.vo |   |
| 5 |   | rider_id | varchar | 3 | Y | รหัส Rider |   |   |   |   |   |   | 1 | 24/03/2026 | patcha.vo |   |
| 6 |   | claim_type_code | varchar | 20 | N | ประเภทสินไหม |   |   |   |   |   |   | DeathCL | 24/03/2026 | patcha.vo |   |
| 7 |   | registration_date | date |   | N | วันที่รับเรื่อง |   |   |   |   |   |   | 2026-04-22 | 24/03/2026 | patcha.vo |   |
| 8 |   | registration_no | varchar | 25 | N | เลขที่รับเรื่อง |   |   |   |   |   |   | 3000/04-2568/00003 | 24/03/2026 | patcha.vo |   |
| 9 |   | claim_event_date | date |   | N | วันที่เกิดเหตุ |   |   |   |   |   |   | 2026-04-22 | 24/03/2026 | patcha.vo |   |
| 10 |   | claim_reported_date | date |   | N | วันที่ลูกค้ามายื่นเอกสารทำเรื่องสินไหม |   |   |   |   |   |   | 2026-04-22 | 24/03/2026 | patcha.vo |   |
| 11 |   | claim_status | varchar | 1 | N | สถานะของการพิจารณาการยื่นขอสินไหม โดย 1 = อนุมัติ และ P = อยู่ระหว่างพิจารณา |   |   |   |   |   |   | 1 | 24/03/2026 | patcha.vo |   |
| 12 |   | approved_date | date |   | N | วันที่ของการอนุมัติการยื่นเรื่องสินไหม |   |   |   |   |   |   | 2026-04-22 | 24/03/2026 | patcha.vo |   |
| 13 |   | claim_paid_date | date |   | N | วันที่จ่ายสินไหม |   |   |   |   |   |   | 2026-04-22 | 24/03/2026 | patcha.vo |   |
| 14 |   | certificate_no | varchar | 10 | Y | รหัส member กรมธรรม์ประกันกลุ่ม |   |   |   |   |   |   | GH4841 | 24/03/2026 | patcha.vo |   |
| 15 |   | policy_year | numeric | 2 | N | ปีกรมธรรม์ที่เรียกร้องสินไหม |   |   |   |   |   |   | 1 | 24/03/2026 | patcha.vo |   |
| 16 |   | amount | numeric | 16,2 | N | ยอดเงินจ่ายระดับ Claim no (ก่อนหักภาษี) |   |   |   |   |   |   | 2,000.00 | 24/03/2026 | patcha.vo |   |
| 17 |   | claim_return_type | varchar | 20 | N | ประเภทการรับคืน |   |   |   |   |   |   | CLAIM | 26/05/2569 | patcha.vo |   |
| 18 |   | claim_annuity_flag | varchar | 1 | N | สินไหมจ่ายบำนาญ |   |   |   |   |   |   | Y | 26/05/2569 | patcha.vo |   |
|   |   | rider_name_abbr | varchar | 100 |   | ชื่อ Rider |   |   |   |   |   |   | กรมธรรม์สามัญ : TPD.1 กรมธรรม์ PA : ค่ารักษาพยาบาลจ่ายตามจริงต่อปี | 09/06/2569 | patcha.vo |   |
|   |   | rider_effective_date | date |   |   | วันที่สัญญาเพิ่มเติม มีผล |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | rider_sum_assured | numeric | 15 | 2 | ทุนประกันของสัญญาเพิ่มเติม |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | rider_mode_of_payment | numeric | 2 | 0 | โหมดการชำระเบี้ยของสัญญาเพิ่มเติม (เป็นตัวเลข) |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | rider_annual_premium | numeric | 15 | 2 | เบี้ยประกันรายปีของสัญญาเพิ่มเติม |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | rider_modal_premium | numeric | 15 | 2 | เบี้ยประกันชำระตามโหมดของสัญญาเพิ่มเติม |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | investment_component | numeric | 15 | 2 | มูลค่ากรมธรรม์ *มีเฉพาะสินไหมประกันชีวิต และสินไหมอุบัติเหตุ |   |   |   |   |   |   |   | 09/06/2569 | patcha.vo |   |
|   |   | claim_age | numeric | 2 | 0 | อายุ |   |   |   |   |   |   | 99 | 09/06/2569 | patcha.vo |   |
|   |   | claim_sex | varchar | 10 |   | เพศ |   |   |   |   |   |   | male,female | 09/06/2569 | patcha.vo |   |
|   |   | wht_amount | numeric | 15 | 2 | ยอดภาษี |   | amount * tax_rate / 100 (ทศนิยม 2 ตำแหน่ง) |   |   |   |   | 2,000.00 | 09/06/2569 | patcha.vo |   |
|   |   | policy_no | varchar | 15 |   | เลขที่กรมธรรม์ |   |   |   |   |   |   |   | 07/07/2569 | patcha.vo |   |
|   |   | net_amount | numeric | 16,2 | N | ยอดหลังหักภาษี |   |   |   |   |   |   | 2,000.00 | 09/07/2026 | patcha.vo |   |
|   |   | policy_type | varchar | 3 |   | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORD | 20/07/2569 | patcha.vo |   |
|   |   | branch_source_code | varchar | 4 |   | รหัสสาขาต้นสังกัด |   |   |   |   |   |   | 0001 | 20/07/2569 | patcha.vo |   |
|   |   | branch_register_code | varchar | 4 |   | รหัสสาขารับเรื่อง |   |   |   |   |   |   | 0001 | 20/07/2569 | patcha.vo |   |
|   |   | branch_service_code | varchar | 4 |   | รหัสสาขาบริการ |   |   |   |   |   |   | 0001 | 20/07/2569 | patcha.vo |   |
|   |   | created_date | timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-07-19 14:50:19.872 +0700 | 24/03/2026 | patcha.vo |   |
|   |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcha.vo | 24/03/2026 | patcha.vo |   |

---

## Hyperlinks บนหน้านี้

- [COA](https://docs.google.com/spreadsheets/d/1quCycIGC-VRNqSWQWBrmblBlPKokgDGw1iG87i-F-1o/edit?usp=sharing)
- [05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=902168624)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
