# tx_payment_dashboard

- **Page ID:** 1275560662
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_dashboard
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_dashboard | Data Source | Payment Management หน้าจอรับรายการ |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลการ dashboard ผังบัญชี edw |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | Id | Int8 |   | N | id ของ Record auto generate |   |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 2 | FOREIGN KEY | batch_payment_id | Int8 |   | Y | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |   |   |   |   |   | 1 |   | anocha.su | 2025-09-04 |   |
| 3 |   | fin_reference_no | Varchar | 20 | Y | เลขที่อ้างอิงฝ่ายการเงิน |   |   |   |   |   |   | EGP25680402003 | มาจาก [PM-BH-002 อัปเดตสถานะประมวลไฟล์ SUN จากระบบ EDW](/pages/viewpage.action?pageId=1290010818) | anocha.su | 2025-09-04 | Voucher No. |
| 4 |   | approved_type | Varchar | 10 | N | ประเภทการอนุมัติ |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | อนุมัติจ่ายและบันทึกบัญชี |   | anocha.su | 2025-09-04 |   |
| 5 |   | payment_channel | Varchar | 10 | Y | ช่องทางการจ่าย |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนเงิน |   | anocha.su | 2025-09-04 |   |
| 6 |   | batch_payment_type | Varchar | 10 | Y | ประเภทการจ่าย |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | Batch Payment |   | anocha.su | 2025-09-04 |   |
| 7 |   | service | Varchar | 10 | Y | Service (Format ธนาคาร) |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | BBL-MCL |   | anocha.su | 2025-09-04 |   |
| 8 |   | bank_account_no | Varchar | 20 | Y | เลขที่บัญชี |   |   |   |   |   |   | 925-0-02595-5 |   | anocha.su | 2025-09-04 |   |
| 9 |   | request_payment_date | Date |   | N | วันที่ Request ว่าลูกค้าจะได้รับเงิน |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-04 |   |
| 10 |   | paid_date | Date |   | N | วันที่ลูกค้าได้รับเงิน |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-04 |   |
| 11 |   | payment_date | Date |   | Y | วันที่ตัดเงินจากบัญชีบริษัท |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-04 |   |
| 12 |   | posting_date | Date |   | Y | วันที่บันทึกบัญชี |   |   |   |   |   |   | 2025-08-01 |   | anocha.su | 2025-09-04 |   |
| 13 |   | total_transaction | Numeric | 5,0 | N | จำนวนรายการรวมสุทธิ |   |   |   |   |   |   | 2 |   | anocha.su | 2025-09-04 |   |
| 14 |   | total_amount | Numeric | 15,2 | N | จำนวนเงินรวมสุทธิ |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-09-04 |   |
| 15 |   | voucher_status | Varchar | 10 | N | สถานะดำเนินการ |   |   |   |   |   |   | จ่ายสำเร็จบางส่วน |   | anocha.su | 2025-09-04 |   |
| 16 |   | verify_date | Datetime |   | N | วันและเวลาที่ตรวจสอบ(บันทึกผลการตรวจสอบคนสุดท้าย ที่ส่งรายการไปอนุมัติ) |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 17 |   | verify_by | Varchar | 50 | N | ชื่อผู้ตรวจสอบ (บันทึกผลการตรวจสอบคนสุดท้าย ที่ส่งรายการไปอนุมัติ) |   |   |   |   |   |   | kanokporn.ch |   | anocha.su | 2025-09-04 |   |
| 18 |   | approved_date | Datetime |   | Y | วันและเวลาที่อนุมัติ (อนุมัติและบันทึกบัญชี) |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 19 |   | approved_by | Varchar | 50 | Y | ผู้อนุมัติ (อนุมัติและบันทึกบัญชี) |   |   |   |   |   |   | rattana.so |   | anocha.su | 2025-09-04 |   |
| 20 |   | account_status | Varchar | 20 | Y | สถานะส่ง SUN |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | สำเร็จ |   | anocha.su | 2025-09-04 |   |
| 21 |   | event_code | Varchar | 20 | Y | event_code |   |   |   |   |   |   |   |   | anocha.su | 2025-09-04 |   |
| 22 |   | edw_system_key | Varchar | 50 | Y | EDW System Key | [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log).system_key |   |   |   |   |   |   |   | anocha.su | 2025-09-04 |   |
| 23 |   | edw_process_log_id | Int8 |   | Y | EDW Process Log Id | [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log).id |   |   |   |   |   |   |   | anocha.su | 2025-09-04 |   |
| 24 |   | dashboard_edw_id | Int8 |   | Y | EDW Dashboard Id |   |   |   |   |   |   |   |   | anocha.su | 2025-09-12 |   |
|   |   | batch_cutoff_time | Varchar | 1 | Y | Batch ตรวจสอบสถานะบัญชี |   |   |   |   |   |   | Y |   | anocha.su | 2025-10-08 | [02-04-98 อัปเดตสถานะประมวลผลข้อมูลบัญชีจากระบบ EDW](/pages/viewpage.action?pageId=1289748619) |
|   |   | success_transaction | Numeric | 5,0 | Y | จำนวนรายการจ่ายสำเร็จ ระดับ voucher |   |   |   |   |   |   | 1 |   | anocha.su | 2025-10-22 |   |
|   |   | success_amount | Numeric | 15,2 | Y | จำนวนเงินจ่ายสำเร็จระดับ voucher |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-10-22 |   |
|   |   | unsuccess_transaction | Numeric | 5,0 | Y | จำนวนรายการจ่ายไม่สำเร็จระดับ voucher |   |   |   |   |   |   | 1 |   | anocha.su | 2025-10-22 |   |
|   |   | unsuccess_amount | Numeric | 15,2 | Y | จำนวนเงินจ่ายไม่สำเร็จระดับ voucher |   |   |   |   |   |   | 5,000.00 |   | anocha.su | 2025-10-22 |   |
|   |   | flag_otp | Varchar | 1 | Y | ยืนยัน OTP เรียบร้อยY - ใช่Null - ยังไม่ยืนยัน |   |   |   |   |   |   | Y |   | patcha.vo | 2026-06-08 |   |
| 25 |   | created_date | Timestamp |   | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | anocha.su | 2025-09-04 |   |
| 26 |   | created_by | Varchar | 50 | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 27 |   | updated_date | Timestamp |   | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | anocha.su | 2025-09-04 |   |
| 28 |   | updated_by | Varchar | 50 | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [PM-BH-002 อัปเดตสถานะประมวลไฟล์ SUN จากระบบ EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290010818)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [02-04-98 อัปเดตสถานะประมวลผลข้อมูลบัญชีจากระบบ EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1289748619)
