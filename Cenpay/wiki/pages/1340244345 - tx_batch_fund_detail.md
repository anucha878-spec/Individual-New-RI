# tx_batch_fund_detail

- **Page ID:** 1340244345
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund_detail
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > Insurance Fund > tx_batch_fund_detail
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_batch_fund_detail | Data Source | Batch Process ประมวลผลรายเดือนClaim System (การเรียกร้องสินไหมประกันภัยเดี่ยว)SQL (การเรียกร้องสินไหมประกันภัยกลุ่ม)Benefit Register (รายการทะเบียนรอจ่ายใหม่) |
| Project Name | Cenpay | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E. A.D. = คริสต์ศักราช B.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-12 | Description | ข้อมูลรายละเอียดการจ่ายระดับ Batch |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
| 2 | FK | batch_fund_no | Varchar | 30 | N | Batch เลขธุรกรรม |   |   |   |   |   |   | IF-TB-20260601-01 |   | anocha.su | 2026-05-12 |   |
| 3 |   | transaction_no | Varchar | 20 | N | เลขธุรกรรมอ้างอิง |   |   |   |   |   |   | NPC25081300001 |   | anocha.su | 2026-05-12 |   |
| 4 |   | policy_no | Varchar | 20 | N | เลขกรมธรรม์ |   |   |   |   |   |   | 1529892 |   | anocha.su | 2026-05-12 |   |
| 5 |   | policy_type | Varchar | 10 | N | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORD |   | anocha.su | 2026-05-12 |   |
| 6 |   | Insured_id_no | Varchar | 13 | N | เลขประจำตัวผู้เอาประกัน |   |   |   |   |   |   | 12345XXXXX123 |   | anocha.su | 2026-05-12 | Varchar รองรับพาสปอร์ต |
| 7 |   | Insured_title_code | Varchar | 100 | Y | คำนำหน้าผู้เอาประกัน |   |   |   |   |   |   | นาย |   | anocha.su | 2026-05-12 |   |
| 8 |   | Insured_first_name | Varchar | 100 | N | ชื่อผู้เอาประกัน |   |   |   |   |   |   | ไทยสมุทร |   | anocha.su | 2026-05-12 |   |
| 9 |   | Insured_last_name | Varchar | 100 | Y | นามสกุลผู้เอาประกัน |   |   |   |   |   |   | ประกันชีวิต |   | anocha.su | 2026-05-12 |   |
| 10 |   | benefit_title_code | Varchar | 100 | Y | คำนำหน้าผู้รับผลประโยชน์ |   |   |   |   |   |   | นาย |   | anocha.su | 2026-05-12 |   |
| 11 |   | benefit_first_name | Varchar | 100 | N | ชื่อผู้รับผลประโยชน์ |   |   |   |   |   |   | ไทยสมุทร |   | anocha.su | 2026-05-12 |   |
| 12 |   | benefit_last_name | Varchar | 100 | Y | นามสกุลผู้รับผลประโยชน์ |   |   |   |   |   |   | ประกันชีวิต |   | anocha.su | 2026-05-12 |   |
| 13 |   | benefit_account_no | Varchar | 20 | Y | เลขที่บัญชีผู้รับผลประโยชน์ |   |   |   |   |   |   | 1234568790 |   | anocha.su | 2026-05-12 |   |
| 14 |   | payment_type_code | Varchar | 10 | N | ประเภทการจ่าย |   |   | lookup_key |   |   |   | เงินครบสัญญา |   | anocha.su | 2026-05-12 |   |
| 15 |   | claim_no | Varchar | 25 | Y | เลขที่สินไหม |   |   |   |   |   |   | 3100/03-2558/00034-01 |   | anocha.su | 2026-05-12 |   |
| 16 |   | net_amount | Numeric | 15,2 | N | จำนวนเงินสุทธิ |   |   |   |   |   |   | 5000 |   | anocha.su | 2026-05-12 |   |
| 17 |   | cenpay_reference_no | Varchar | 20 | Y | เลขอ้างอิง |   |   |   |   |   |   | BT-20250813-00002 |   | anocha.su | 2026-05-12 |   |
| 18 |   | source_system | Varchar | 50 | N | ระบบต้นทาง |   |   | lookup_key |   |   |   | Claim System |   | anocha.su | 2026-05-12 |   |
| 19 |   | payment_approved_date | Date |   | Y | วันที่อนุมัติตรวจจ่าย |   |   |   |   |   |   | 2026-05-30 |   | anocha.su | 2026-05-12 |   |
| 20 |   | source_system_status | Varchar | 10 | N | สถานะต้นทาง |   |   | [ms_status](/display/RDSCP/Table+%3A+ms_status).group_code CPH_IF_TRANS_STATUS |   |   |   | อนุมัติ |   | anocha.su | 2026-05-12 |   |
| 21 |   | source_payment_status | Varchar | 10 | N | สถานะจ่ายเงินเดิม |   |   | lookup_key |   |   |   | จ่ายไม่สำเร็จ |   | anocha.su | 2026-05-12 |   |
| 22 |   | source_payment_channel | Varchar | 10 | N | ช่องทางจ่ายเงินเดิม |   |   | lookup_key |   |   |   | โอนเงิน-ปกติ |   | anocha.su | 2026-05-12 |   |
| 23 |   | paid_date | Date |   | Y | วันที่จ่าย |   |   |   |   |   |   | 2026-05-30 |   | anocha.su | 2026-05-12 |   |
| 24 |   | reruest_payment_date | Date |   | Y | วันที่ครบกำหนดรับเงิน/Claim Register date |   |   |   |   |   |   | 2026-05-30 |   | anocha.su | 2026-05-12 |   |
| 25 |   | source_branch | Varchar | 50 | Y | สาขาต้นสังกัด |   |   |   |   |   |   | 0001 - สำนักงานใหญ่ |   | anocha.su | 2026-05-12 |   |
| 26 |   | paid_branch | Varchar | 50 | Y | สาขาจ่าย |   |   |   |   |   |   | 0001 - สำนักงานใหญ่ |   | anocha.su | 2026-05-12 |   |
| 27 |   | letter_no | Varchar | 100 | Y | เลขที่จดหมาย |   |   |   |   |   |   | ปก.ป.MIND/2567/000623 |   | anocha.su | 2026-05-12 |   |
| 28 |   | transaction_remark | Varchar | 255 | Y | หมายเหตุ |   |   |   |   |   |   | เช็คหมดอายุ |   | anocha.su | 2026-05-12 |   |
| 29 |   | transaction_status | Varchar | 10 | N | สถานะดำเนินการ |   |   | lookup_key |   |   |   | รอนำส่งกองทุนประกันชีวิต |   | anocha.su | 2026-05-12 |   |
| 30 |   | payment_channel | Varchar | 10 | Y | ช่องทางการจ่าย |   |   | lookup_key |   |   |   | โอนเงิน-ปกติ |   | anocha.su | 2026-05-12 |   |
| 31 |   | edw_reference_no | Varchar | 20 | Y | Reference Number ฝ่ายการเงิน |   |   |   |   |   |   | EGP25680402003 |   | anocha.su | 2026-05-12 |   |
| 32 |   | batch_payment_no | Varchar | 20 | Y | Batch Number ฝ่ายการเงิน |   |   |   |   |   |   | B25680701002 |   | anocha.su | 2026-05-12 |   |
| 33 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 34 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |
| 35 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 36 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |

---

## Hyperlinks บนหน้านี้

- [ms_status](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+ms_status)
