# WS สำหรับดึงข้อมูล SUN Booking

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1282244649
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282244649

---

[ [Overview](#WSสำหรับดึงข้อมูลSUNBooking-Overview) ] [ [Protocol](#WSสำหรับดึงข้อมูลSUNBooking-Protocol) ] [ [Operation](#WSสำหรับดึงข้อมูลSUNBooking-Operation) ] [ [Input](#WSสำหรับดึงข้อมูลSUNBooking-Input) ] [ [Output](#WSสำหรับดึงข้อมูลSUNBooking-Output) ]

## Overview

- `Web Service นี้เป็นการค้นหารายละเอียดบัญชีสำหรับออกเอกสาร SUN Booking ผ่าน Reference Number`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL Service Submit Job : /thaisamut/rs/adwetl/v2/accountingdashboard/sunbooking/submit-job-inquiry/
URL Service Polling Data : /thaisamut/rs/adwetl/v2/accountingdashboard/sunbooking/polling-job/{jobId}
Icon
TYPE : <bulk>
Polling job

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory |
|---|---|---|---|---|---|
| referenceNumber | String | Reference Number ของ EDW |   | not null | M |
| systemName | String | ระบบที่ดึงข้อมูล |   | not null | M |
| userName | String | username ผู้ดึงระบบ |   | not null | M |

Process
1. นำ referenceNumer ไปหา id ของ ตาราง dashboard (tx_adwpc_dashboard_payment, tx_adwpc_dashboard_manual,tx_adwpc_dashboard_monthly,tx_adwpc_dashboard_daily)
2. นำ id ของ dashboard ไปหา list id ของ tx_adwpc_process_log
3. query ข้อมูล Sun Booking guideline ตาม sql ด้านล่างโดยพิจารณาเรื่อง performance**ค้นหาข้อมูลตาม SQL ที่ Database : ADWETL** **รายละเอียด SUN Booking** <![CDATA[select tapl.accounting_date as posting_date, taded.gl_type, taded.gl_code, taded.gl_name, sum(taded.gl_amount) gl_amount, taded.sun_costcenter, taded.sun_io_fundcenter, taded.sun_branch_service, taded.sun_branch_owner, taded.sun_subbusiness_line from tx_adwpc_double_entry_detail taded inner join tx_adwpc_xxxx_detail model on taded.tx_adwpc_xxxx_detail_id = model.id inner join tx_adwpc_process_log tapl on tapl.id = taded.tx_adwpc_process_log_id where taded.tx_adwpc_process_log_id in (:txAdwpcProcessLogIds) group by tapl.accounting_date, taded.gl_type, taded.gl_code, taded.gl_name, taded.sun_costcenter, taded.sun_io_fundcenter, taded.sun_branch_service, taded.sun_branch_owner, taded.sun_subbusiness_line order by tapl.accounting_date, taded.gl_type, taded.gl_code, taded.gl_name, taded.sun_costcenter, taded.sun_io_fundcenter, taded.sun_branch_service, taded.sun_branch_owner, taded.sun_subbusiness_line ]]> 4. return ข้อมูล โดย order by gl_type desc

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

| Name | Type | Description | Example |
|---|---|---|---|
| contentId | String | contentid ของ seaweed temp ที่มีผลลัพธ์ของข้อมูล |   |

รูปแบบข้อมูลใน File
List อ้างอิงข้อมูลตามตาราง [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)

| Name | Type | Database Type | Description | Example |
|---|---|---|---|---|
| `posting_date` | Date | `date` | `วันที่บันทึกบัญชี อ้างอิงจาก [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)` | `2025-09-01` |
| `gl_type` | String | `varchar(2)` | `ประเภทการลง Dr./Cr.` | `DR` |
| `gl_code` | String | `varchar(8)` | `รหัสบัญชีแยกประเภท` | `21050006` |
| `gl_name` | String | `varchar(255)` | `ชื่อบัญชีแยกประเภท` | `สินไหมประกันสุขภาพ-เงินสำรอง` |
| `gl_amount` | BigDecimal | `numeric` | `จำนวนเงินสุทธิ` | `900.00` |
| `sun_costcenter` | String | `varchar(10)` | `Cost Center (ตามรูปแบบการ Generate Text File SUN)` | `8300T2` |
| `sun_io_fundcenter` | String | `varchar(10)` | `Project Budget (IO)/ Department Budget (FC)` | `A65001` |
| `sun_branch_service` | String | `varchar(6)` | `สาขาบริการ (ตามรูปแบบการ Generate Text File SUN)` | `8300` |
| `sun_branch_owner` | String | `varchar(6)` | `สาขาต้นสังกัด (ตามรูปแบบการ Generate Text File SUN)` | `0116` |
| `sun_subbusiness_line` | String | `varchar(10)` | `Business Line (ตามรูปแบบการ Generate Text File SUN)` | `0101` |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
