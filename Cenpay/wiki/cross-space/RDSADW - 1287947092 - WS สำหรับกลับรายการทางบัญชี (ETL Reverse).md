# WS สำหรับกลับรายการทางบัญชี (ETL Reverse)

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1287947092
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1287947092

---

[ [Overview](#WSสำหรับกลับรายการทางบัญชี(ETLReverse)-Overview) ] [ [Protocol](#WSสำหรับกลับรายการทางบัญชี(ETLReverse)-Protocol) ] [ [Operation](#WSสำหรับกลับรายการทางบัญชี(ETLReverse)-Operation) ] [ [Input](#WSสำหรับกลับรายการทางบัญชี(ETLReverse)-Input) ] [ [Output](#WSสำหรับกลับรายการทางบัญชี(ETLReverse)-Output) ]

## Overview

- สร้างรายการกลับรายการบัญชีจากรายการตั้งต้นที่ระบบต้นทาง

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL Service Submit Job : /thaisamut/rs/adwetl/v2/reverse/etl/autoreverse/submit-job
URL Service Polling Data : /thaisamut/rs/adwetl/v2/reverse/etl/autoreverse/polling-job/{jobId}
Icon
TYPE : <add>
<ชื่อ operation>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory |
|---|---|---|---|---|---|
| referenceNumber | String | Reference Number ของ EDW |   | not null | M |
| systemName | String | ระบบที่ต้องการ Reverse | CENPAYPAYMENTMG | not null | M |

Process
1. `นำ input.referenceNumber ไปหา id ของ ตาราง dashboard (tx_adwpc_dashboard_payment, tx_adwpc_dashboard_manual,tx_adwpc_dashboard_monthly,tx_adwpc_dashboard_daily)`
2. `นำ id ของตาราง dashboard ไปหา list id ของตาราง tx_adwpc_process_log`
3. ทำการ Select ข้อมูลรายการบัญชีที่ตาราง Model tx_adwpc_xxx(All) ของ Reference Number and Process log id ที่เลือก
4. สร้างรายการ [tx_adwpc_dashboard_manual](/display/RDSADW/tx_adwpc_dashboard_manual) สำหรับ Reverse โดยบันทึก [tx_adwpc_dashboard_manual](/display/RDSADW/tx_adwpc_dashboard_manual).source_type = 'WS_ETL' , [tx_adwpc_dashboard_manual](/display/RDSADW/tx_adwpc_dashboard_manual).source_ws = :systemName เพิ่มเติม
5. `สร้างรายการ tx_adwpc_process_log รายการใหม่ของรายการ reverse`
  1. `Copy ข้อมูลที่ได้จากข้อ3. Insert ลงตาราง EDW ETL`
    1. `Copy ข้อมูลที่ได้จากข้อ3. Insert ลงตาราง tx_adwpc_xxx(All)`
    2. `Copy ข้อมูลตาราง [tx_adwpc_double_entry_detail](/display/RDSADW/tx_adwpc_double_entry_detail).gl_type เพื่อกลับ DR,CR ก่อนทำการ Insert ลงตาราง [tx_adwpc_double_entry_detail](/display/RDSADW/tx_adwpc_double_entry_detail)`
  2. Generate Reference Number
    1. Generate Reference Number
    2. `กำหนด Format การแสดงผล XXYYYYMMDD9999``อ้างอิงตาม` `[02_00_05 Process การสร้าง Document Header Text (Reference number) Daily / Monthly / Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850100289)`
6. `ทำการปั้นข้อมูลลง Table Landing แบบสร้างความสัมพันธ์(**id**)ให้ถูกต้องสำหรับรายการ Reverse ที่ได้จากข้อ 4`
  1. `Insert Table : [tx_reverse](http://wiki.thaisamut.co.th/display/RDSADW/tx_reverse)`
  2. `Insert Table : [tx_manual_gl](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl)`
  3. `Insert Table : [tx_manual_gl_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl_detail)`
  4. `Insert Table : [tx_manual_gl_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl_rider)`

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

| Name | Type | Description | Example |
|---|---|---|---|
| sourceReferenceNumber | String | Reference Number ของ EDW ของธุรกรรมตั้งต้น |   |
| referenceNumber | String | Reference Number ของ EDW ใหม่ที่สร้างสำหรับขากลับรายการ |   |
| txAdwpcProcessLogId | Long | id ของตาราง tx_adwpc_process_log ของรายการขากลับรายการ |   |
| systemKey | String | system_key ของตาราง tx_adwpc_process_log ของรายการขากลับรายการ |   |
| dashboardId | Long | id ของตาราง tx_adwpc_dashboard_xxxx ของรายการขากลับรายการ |   |
| accountingDate | Date | วันที่บันทึกบัญชีของรายการ Reverse |   |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [tx_adwpc_dashboard_manual](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_dashboard_manual)
- [tx_adwpc_dashboard_manual](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_dashboard_manual)
- [tx_adwpc_dashboard_manual](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_dashboard_manual)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [02_00_05 Process การสร้าง Document Header Text (Reference number) Daily / Monthly / Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=850100289)
- [tx_reverse](http://wiki.thaisamut.co.th/display/RDSADW/tx_reverse)
- [tx_manual_gl](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl)
- [tx_manual_gl_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl_detail)
- [tx_manual_gl_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_gl_rider)
