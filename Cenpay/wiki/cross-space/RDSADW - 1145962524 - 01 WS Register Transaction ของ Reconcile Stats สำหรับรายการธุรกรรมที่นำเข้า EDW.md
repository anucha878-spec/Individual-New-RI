# 01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1145962524
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524

---

[ [Overview](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Overview) ] [ [Protocol](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Protocol) ] [ [Operation](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Operation) ] [ [Input](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Input) ] [ [Process](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Process) ] [ [Output](#id-01WSRegisterTransactionของReconcileStatsสำหรับรายการธุรกรรมที่นำเข้าEDW-Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
| 1 | Closing Timeline | เพิ่ม Logic การคำนวณ accounting_date และ requested_payment_date | jitin.kh | 01/07/2567 |
| 2 | Closing Timeline | นำ Logic การคำนวณ accounting_date และ requested_payment_date ออก โดยให้คำนวณตามค่าที่ระบุจากต้นทาง | jitin.kh | 28/08/2567 |

## Overview

Register transaction ของการนำเข้ารายการธุรกรรมราย voucher ที่ตาราง [tx_reconcile_stats](/display/RDSADW/tx_reconcile_stats)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

|   | Name | Type | Description | Example | Mandatory (Y/N) | Validation |
|---|---|---|---|---|---|---|
| ArrayList |   |   |   |   |   |   |
|   | batch_code | varchar(10) | รหัส Batch | EDW_BH_003 | N | กรณีต้นทางส่งค่ามา ให้ตรวจสอบ Config บนตาราง [m](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_reconcile_formula)[s_batch](/display/RDSADW/ms_batch) |
|   | event_code | varchar(25) | รหัสผังบัญชี | APL_MAC_02 | Y | ต้องมี Config บนตาราง [cf_event_reconcile_formula](/display/RDSADW/cf_event_reconcile_formula) |
|   | accounting_date | timestampz | วันที่บันทึกบัญชี | Format: <yyyy-MM-dd hh:mm:ss>2023-11-30 00:00:00 | N |   |
|   | system | varchar(50) | ระบบต้นทางของข้อมูล | AS400APL | Y |   |
|   | process_date | timestampz | วันเวลาที่เริ่มกระบวนการนำข้อมูลเข้า EDW | Format: <yyyy-MM-dd hh:mm:ss>2023-12-01 16:34:48 | Y |   |
|   | status | varchar(20) | สถานะรายการ | SR | Y |   |
|   | system_key | varchar(50) | ข้อมูล Unique เป็นราย Voucher | APL_MAC_02_20231130 | N |   |
|   | process_type | varchar(3) | รูปแบบของกระบวนการเกิด transaction ที่ระบบต้นทาง | AM | N |   |
|   | source_amount | numeric(15,2) | จำนวนเงินรวมจากระบบต้นทาง | 2426563.51 | N |   |
|   | operation_imported_by | varchar(150) | ชื่อ นามสกุล ผู้อัพโหลด/นำเข้าข้อมูล | อรอุมา น้อยโสภา | N |   |
|   | operation_imported_date | timestampz | วันที่อัพโหลด/นำเข้าข้อมูล | Format: <yyyy-MM-dd hh:mm:ss>2023-12-01 00:00:00 | N |   |
|   | operation_checked_by | varchar(150) | ชื่อ นามสกุล ผู้อนุมัติตรวจสอบ | อรอุมา น้อยโสภา | N |   |
|   | operation_checked_date | timestampz | วันที่อนุมัติตรวจสอบ | Format: <yyyy-MM-dd hh:mm:ss>2023-12-01 00:00:00 | N |   |
|   | operation_approved_by | varchar(150) | ชื่อ-นามสกุล ผู้อนุมัติรายการ | จตุพล ลาน้อย | N |   |
|   | operation_approved_date | timestampz | วันที่อนุมัติรายการ | Format: <yyyy-MM-dd hh:mm:ss>2023-12-01 00:00:00 | N |   |
|   | request_payment_date | date | วันที่รับ/จ่าย | Format: <yyyy-MM-dd>2023-11-30 | N |   |
|   | updated_by | varchar(50) | อัพเดตโดย | SYSTEM | N |   |

## Process

**ขั้นตอนการประมวลผล**
ในกรณีที่มีการเรียก API ยิง insert รายการที่ตาราง [tx_reconcile_stats](/display/RDSADW/tx_reconcile_stats) โดย mapping field ด้วย Input parameter ของรายการ Transaction อ้างอิงตาม
ตารางระบุค่าเพื่อ insert รายการ tx_adwpc_reconcile_stats

| field | กำหนดค่า | คำอธิบายเพิ่มเติม |
|---|---|---|
| batch_code | input.batch_code | หากกรณีกระบวนการนำเข้าข้อมูลไม่ใช่ Batch Daily/Monthly จะระบุเข้ามาเป็นค่าว่าง |
| event_code | input.event_code |   |
| accounting_date | input.accounting_date นำ input.event_code ไปตรวจสอบ cec.payment_user_type และ cf_event_flow.event_type ตัวอย่าง sql **sql** <![CDATA[select cec.event_code, cec.payment_user_type,cef.event_type from cf_event_code cec inner join cf_event_flow cef on cec.sub_system_group = cef.sub_system_group where cec.event_code = :event_code;]]> และยึด Logic การคำนวณเพื่อบันทึก input.accounting_date ตามแต่ละ dashboard อ้างอิง [03_00 หน้าจอ Dashboard Daily/Monthly/Payment/Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693659) ส่วนการแสดงผลตารางข้อมูลของ posting date input.accounting_date Updated by jitin.kh 28/8/2567 | กรณี Pre-register จะระบุเข้ามาเป็นค่าว่าง |
| system | input.system |   |
| process_date | input.process_date |   |
| status | input.status | กรณี Pre-register จะระบุค่า status เข้ามาเป็น "R"กรณีอื่นๆจะระบุค่า status เข้ามาเป็น "S" |
| system_key | input.system_key | กรณี Pre-register จะระบุเข้ามาเป็นค่าว่าง |
| process_type | input.process_type |   |
| source_amount | input.source_amount | กรณี Pre-register จะระบุเข้ามาเป็นค่าว่าง |
| operation_imported_by | input.operation_imported_by | จะส่งค่าเข้ามาเฉพาะกลุ่ม Manual Oper กลุ่มอื่นๆจะระบุเข้ามาเป็นค่าว่าง |
| operation_imported_date | input.operation_imported_date | จะส่งค่าเข้ามาเฉพาะกลุ่ม Manual Oper กลุ่มอื่นๆจะระบุเข้ามาเป็นค่าว่าง |
| operation_checked_by | input.operation_checked_by | จะส่งค่าเข้ามาเฉพาะกลุ่ม Manual Oper กลุ่มอื่นๆจะระบุเข้ามาเป็นค่าว่าง |
| operation_checked_date | input.operation_checked_date | จะส่งค่าเข้ามาเฉพาะกลุ่ม Manual Oper กลุ่มอื่นๆจะระบุเข้ามาเป็นค่าว่าง |
| operation_approved_by | กำหนดค่า โดยนำ event_code ไปตรวจสอบ cf_event_flow.approved_from_source ผ่าน sub_system_groupหาก cf_event_flow.approved_from_source เป็น TRUE ให้ ใช้ค่า input.operation_approved_byหาก cf_event_flow.approved_from_source เป็น FALSE ให้ ใช้ค่า cf_adwpc_catalog.config_detail where cf_adwpc_catalog.type = 'APPROVED_USER' โดย Mapping ผ่าน approved_username ตัวอย่าง sql **sql** <![CDATA[select cec.event_code, ac.config1, ac.config_detail from cf_event_code cec inner join (select cef.sub_system_group, cef.approved_username from cf_event_flow cef where cef.approved_from_source = false ) ef on cec.sub_system_group = ef.sub_system_group left join (SELECT cac.config1, cac.config_detail FROM cf_adwpc_catalog cac WHERE cac.type = &#39;APPROVED_USER&#39;) ac ON ef.approved_username = ac.config1;]]> |   |
| operation_approved_date | input.operation_approved_date |   |
| requested_payment_date | input.requested_payment_date นำ input.event_code ไปตรวจสอบ cec.payment_user_type และ cf_event_flow.event_type ตัวอย่าง sql **sql** <![CDATA[select cec.event_code, cec.payment_user_type,cef.event_type from cf_event_code cec inner join cf_event_flow cef on cec.sub_system_group = cef.sub_system_group where cec.event_code = :event_code;]]> และยึด Logic การคำนวณเพื่อบันทึก input.requested_payment_date ตามแต่ละ dashboard อ้างอิง [03_00 หน้าจอ Dashboard Daily/Monthly/Payment/Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693659) ส่วนการแสดงผลตารางข้อมูลของ payment date / receive date input.requested_payment_date Updated by jitin.kh 28/8/2567 | กรณี Pre-register จะระบุเข้ามาเป็นค่าว่าง |
| created_by | input.updated_byหากเป็น NULL ให้ระบุเป็น "SYSTEM" |   |
| created_date | ระบุเป็น now() |   |
| updated_by | input.updated_by หากเป็น NULL ให้ระบุเป็น "SYSTEM" |   |
| updated_date | ระบุเป็น now() |   |

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>
List<Transaction>

| Name | Type | Description | Example |
|---|---|---|---|
| statusCode | numeric | 200Success204No Content400Bad Request (รวม Validation)409Conflict (รวมกรณี Duplicated Key + Already Cancel)500Server Error |   |
| 200 | Success |
| 204 | No Content |
| 400 | Bad Request (รวม Validation) |
| 409 | Conflict (รวมกรณี Duplicated Key + Already Cancel) |
| 500 | Server Error |
| errorMessage | varchar | กรณี statusCode = 412**batch_code** ให้ return errorMessage "ไม่พบ Config batch_code ที่ตาราง ms_batch"**event_code** ให้ return errorMessage "ไม่พบ Config event_code ที่ตาราง cf_event_reconcile_formula"กรณี statusCode อื่นๆ ให้แสดงข้อความ text message แสดงสาเหตุ error |   |

---

## Hyperlinks บนหน้านี้

- [tx_reconcile_stats](http://wiki.thaisamut.co.th/display/RDSADW/tx_reconcile_stats)
- [m](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_reconcile_formula)
- [s_batch](http://wiki.thaisamut.co.th/display/RDSADW/ms_batch)
- [cf_event_reconcile_formula](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_reconcile_formula)
- [tx_reconcile_stats](http://wiki.thaisamut.co.th/display/RDSADW/tx_reconcile_stats)
- [03_00 หน้าจอ Dashboard Daily/Monthly/Payment/Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693659)
- [03_00 หน้าจอ Dashboard Daily/Monthly/Payment/Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693659)
