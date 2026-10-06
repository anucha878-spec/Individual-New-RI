# WS สำหรับดึง SUN Status กลับไป Stamp ระบบต้นทาง

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1284571237
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571237

---

[ [Overview](#WSสำหรับดึงSUNStatusกลับไปStampระบบต้นทาง-Overview) ] [ [Protocol](#WSสำหรับดึงSUNStatusกลับไปStampระบบต้นทาง-Protocol) ] [ [Operation](#WSสำหรับดึงSUNStatusกลับไปStampระบบต้นทาง-Operation) ] [ [Input](#WSสำหรับดึงSUNStatusกลับไปStampระบบต้นทาง-Input) ] [ [Output](#WSสำหรับดึงSUNStatusกลับไปStampระบบต้นทาง-Output) ]

## Overview

- `Web Service สำหรับดึง SUN Status กลับไป Stamp ระบบต้นทาง`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL : /thaisamut/rs/adwetl/v2/accountingdashboard/inquiry/
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>
List ของข้อมูลตามด้านล่าง ขนาดไม่เกิน 20

| Name | Type | Description | Example | Validation | Mandatory | Remark |
|---|---|---|---|---|---|---|
| referenceNumber | String | Reference Number ของ EDW |   | not null | M |   |

Process
1. นำ referenceNumer ไปหาข้อมูลตาราง dashboard (tx_adwpc_dashboard_payment, tx_adwpc_dashboard_manual,tx_adwpc_dashboard_monthly,tx_adwpc_dashboard_daily)
2. return ข้อมูลตาม Output ด้านล่าง

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`
List ของข้อมูลตามด้านล่าง

| Name | Type | Description | Condition Mapping | Example |
|---|---|---|---|---|
| dashboardId | Long | id ของตาราง Dashboard |   |   |
| dashboardType | String | ประเภท Dashboard | MANUALMONTHLYDAILYPAYMENT |   |
| eventCode | String | รหัสธุรกรรม (Transaction Code) ที่ระบุประเภทของรายการทางบัญชี |   | "INC001", "PAY005" |
| eventGroup | String | รหัสกลุ่มธุรกรรม 8 กลุ่ม เพื่อจัดหมวดหมู่ของ eventCode |   | "INC", "EXP" |
| drAmount | BigDecimal | ยอดรวมเงินทางด้านเดบิต (Debit) ของรายการ |   | new BigDecimal("1500.50") |
| crAmount | BigDecimal | ยอดรวมเงินทางด้านเครดิต (Credit) ของรายการ |   | new BigDecimal("1500.50") |
| referenceNumber | String | เลขที่อ้างอิงของเอกสารหรือรายการในระบบ Dashboard |   | "ED202509010001" |
| createdBy | String | ชื่อผู้ใช้งาน (username) ที่สร้างรายการ |   | "user_01" |
| createdDate | Date | วันที่และเวลาที่สร้างรายการ |   | LocalDateTime.parse("2025-09-17T10:00:00") |
| updatedBy | String | ชื่อผู้ใช้งาน (username) ที่แก้ไขรายการล่าสุด |   | "user_02" |
| updatedDate | Date | วันที่และเวลาที่แก้ไขรายการล่าสุด |   | LocalDateTime.parse("2025-09-18T11:30:00") |
| remark | String | หมายเหตุเพิ่มเติมเกี่ยวกับรายการ |   | "ค่าใช้จ่ายเดินทาง" |
| sunPath | String | Path สำหรับใช้สร้างไฟล์ Text เพื่อส่งออก โดยระบุว่าเป็นรายการ Auto (A) หรือ Manual (M) |   | "A" |
| accountingDate | Date | วันที่บันทึกบัญชี (Accounting Date) |   | LocalDate.parse("2025-09-16") |
| postingDate | Date | วันที่บันทึกบัญชีที่ทีมบัญชีเป็นผู้กำหนด (Posting Date) | Daily : ไม่มีข้อมูล | LocalDate.parse("2025-09-30") |
| dashboardStatus | String | สถานะของรายการในระบบ Dashboard | Daily :INPROGRESSERRORIMBALANCEWAIT_MANUAL_SAP WAIT_SAP | ERRORPROCESSINGWAIT_APPROVEAPPROVEDREJECTEDCANCEL |
| sunStatus | String | สถานะการส่งข้อมูลไปยังระบบ Sun | Daily :SUCCESSSAP_PROCESSING SAP_ERROR SUN_INVALID | SUCCESSSAP_PROCESSINGSAP_ERROR SUCCESSEDW_POSTINGEDW_ERRORSUN_INVALID |
| supportBookingKey | String | Key สำหรับดึงข้อมูล Support Booking | Daily : ไม่มีข้อมูล | "KEY12345" |
| processlogStatus | ProcessLogStatusEnum | สถานะ Process Log |   | LANDING WAITETL PREPROCESS_ETL EXTRACT_IMPORT TRANSFORM JOINAGG RECONCILE ACCAPPROVED SENDTOADW WAIT_SENDTOADW SUCCESS CANCEL |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
