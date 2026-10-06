# tx_batch_fund

- **Page ID:** 1340244344
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_fund
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > Insurance Fund > tx_batch_fund
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_batch_fund | Data Source | Batch Process ประมวลผลรายเดือนClaim System (การเรียกร้องสินไหมประกันภัยเดี่ยว)SQL (การเรียกร้องสินไหมประกันภัยกลุ่ม)Benefit Register (รายการทะเบียนรอจ่ายใหม่) |
| Project Name | Cenpay | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | anocha.su | Year Type | A.D., B.E. A.D. = คริสต์ศักราช B.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-12 | Description | ข้อมูลการจ่ายระดับ Batch |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2026-05-12 |   |
| 2 | FK | batch_fund_no | Varchar | 30 | N | Batch เลขธุรกรรม |   |   | [cf_list_of_value](/display/RDSCP/Table+%3A+cf_list_of_value).group = 'CPH_RUNNING_NO' where name = 'BATCH_FUND_NO' |   |   |   | IF-TB-20260601-01 |   | anocha.su | 2026-05-12 |   |
| 3 |   | batch_fund_date | Timestamp |   | N | วันและเวลาที่ Run Batch เลขธุรกรรม |   |   |   |   |   |   | 2026-04-25 22:00:00 |   | anocha.su | 2026-05-12 |   |
| 4 |   | edw_reference_no | Varchar | 20 | Y | เลขที่อ้างอิง EDW |   |   |   |   |   |   | EDW25680402013 |   | anocha.su | 2026-05-12 |   |
| 5 |   | edw_date | Timestamp |   | Y | วันที่บันทึกข้อมูล EDW |   |   |   |   |   |   | 2026-04-25 22:00:00 |   | anocha.su | 2026-05-12 |   |
| 6 |   | edw_system_key | Varchar | 50 | Y | EDW System Key |   |   | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).system_key |   |   |   |   |   |   |   |   |
| 7 |   | edw_process_log_id | Int8 |   | Y | EDW Process Log Id |   |   | [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log).id |   |   |   |   |   |   |   |   |
| 8 |   | event_code | Varchar | 20 | Y | Event Code |   |   |   |   |   |   |   |   |   |   |   |
| 9 |   | posting_date | Timestamp |   | Y | Posting Date |   |   |   |   |   |   | 2026-04-25 22:00:00 |   | anocha.su | 2026-05-12 |   |
| 10 |   | dashboard_edw_id | Int8 |   | Y | EDW Dashboard Id |   |   |   |   |   |   |   |   |   |   |   |
| 11 |   | sun_status | Varchar | 20 | Y | สถานะส่ง SUN |   |   |   |   |   |   |   |   |   |   |   |
| 12 |   | period | Varchar | 7 | N | งวดการจ่าย |   |   |   |   |   |   | 05/2569 |   | anocha.su | 2026-05-12 |   |
| 13 |   | round_no | Numeric | 2 | N | ครั้งที่ทำรายการ |   |   |   |   |   |   | 2 |   | anocha.su | 2026-05-12 |   |
| 14 |   | payment_channel_code | Varchar | 10 | N | ช่องทางการจ่ายเงิน |   |   | lookup_key |   |   |   | โอนเงิน (ปกติ) |   | anocha.su | 2026-05-12 |   |
| 15 |   | request_payment_date | Date |   | N | วันที่จ่าย *(วันที่ Request ว่าลูกค้าจะได้รับเงิน)* |   |   |   |   |   |   | 2026-05-30 |   | anocha.su | 2026-05-12 |   |
| 16 |   | paid_date | Date |   | Y | วันที่ลูกค้าได้รับเงิน |   |   |   |   |   |   | 2026-05-30 |   | anocha.su | 2026-05-12 |   |
| 17 |   | service | Varchar | 10 | Y | Service (Format ธนาคาร) |   |   | lookup_key |   |   |   | BBL-MCL |   | anocha.su | 2026-05-12 |   |
| 18 |   | bank_account | Varchar | 20 | Y | บัญชีธนาคารที่จ่ายเงิน |   |   |   |   |   |   | KTB 023-1-05986-8 |   | anocha.su | 2026-05-12 |   |
| 19 |   | transection_total | Numeric | 5,0 | N | จำนวนรายการจ่าย |   |   |   |   |   |   | 290 |   | anocha.su | 2026-05-12 |   |
| 20 |   | transection_paid | Numeric | 15,2 | N | จำนวนเงินสุทธิ |   |   |   |   |   |   | 6000000 |   | anocha.su | 2026-05-12 |   |
| 21 |   | batch_status | Varchar | 10 | N | สถานะดำเนินการ |   |   | lookup_key |   |   |   | จ่ายสำเร็จ |   | anocha.su | 2026-05-12 |   |
| 22 |   | checker_name | Varchar | 50 | Y | ชื่อผู้ตรวจสอบ |   |   |   |   |   |   | firstname.su |   | anocha.su | 2026-05-12 |   |
| 23 |   | checker_date | Timestamp |   | Y | วันและเวลาที่ตรวจสอบ |   |   |   |   |   |   | 2026-05-27 13.00 |   | anocha.su | 2026-05-12 |   |
| 24 |   | authorizer_name | Varchar | 50 | Y | ชื่อผู้อนุมัติ |   |   |   |   |   |   | firstname.su |   | anocha.su | 2026-05-12 |   |
| 25 |   | authorizer_date | Timestamp |   | Y | วันและเวลาที่อนุมัติ |   |   |   |   |   |   | 2026-05-28 14.00 |   | anocha.su | 2026-05-12 |   |
| 26 |   | remark | Varchar | 255 | Y | หมายเหตุ |   |   |   |   |   |   | - |   | anocha.su | 2026-05-12 |   |
| 27 |   | group_claim_flag | Varchar | 1 | Y | flag รายการนำเข้าข้อมูลประกันภัยกลุ่มY : มีรายการนำเข้าN : ไม่มีรายการนำเข้า |   |   |   |   |   |   | N |   | anocha.su | 2026-05-12 |   |
| 28 |   | group_transection_total | Numeric | 5,0 | Y | จำนวนรายการข้อมูลประกันภัยกลุ่มกรณีมีรายการนำเข้า บันทึกเป็น จำนวนเต็ม กรณีไม่มีรายการนำเข้า บันทึกเป็น 0 |   |   |   |   |   |   | 0 |   | anocha.su | 2026-05-12 |   |
| 29 |   | group_upload_date | Timestamp |   | Y | วันและเวลาที่ตรวจสอบข้อมูลประกันภัยกลุ่มกรณีไม่มีรายการนำเข้า บันทึกเป็น *null* |   |   |   |   |   |   | *null* |   | anocha.su | 2026-05-12 |   |
| 30 |   | group_checker_name | Varchar | 50 | Y | ชื่อผู้ตรวจสอบข้อมูลประกันภัยกลุ่ม |   |   |   |   |   |   | firstname.su |   | anocha.su | 2026-05-12 |   |
| 31 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 32 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |
| 33 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2026-05-01 08:00:00 |   | anocha.su | 2026-05-12 |   |
| 34 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | anocha.su |   | anocha.su | 2026-05-12 |   |

---

## Hyperlinks บนหน้านี้

- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
