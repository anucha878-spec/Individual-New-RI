# WS สำหรับดึงข้อมูล EDW Booking

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1287946281
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1287946281

---

[ [Overview](#WSสำหรับดึงข้อมูลEDWBooking-Overview) ] [ [Protocol](#WSสำหรับดึงข้อมูลEDWBooking-Protocol) ] [ [Operation](#WSสำหรับดึงข้อมูลEDWBooking-Operation) ] [ [Input](#WSสำหรับดึงข้อมูลEDWBooking-Input) ] [ [Output](#WSสำหรับดึงข้อมูลEDWBooking-Output) ]

## Overview

- `Web Service นี้เป็นการค้นหารายละเอียดบัญชีสำหรับออกเอกสาร EDW Booking ผ่าน Reference Number`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL Service Submit Job : /thaisamut/rs/adwetl/v1/free-template/edwbooking-etl/submitjob
URL Service Polling Data : /thaisamut/rs/adwetl/v1/free-template/edwbooking-etl/polling-job/{jobId}
Icon
TYPE : <bulk>
Polling job

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory |
|---|---|---|---|---|---|
| referenceNumber | String | Reference Number ของ EDW |   | not null | M |
| userName | String | username ที่ดึงข้อมูล |   | not null | M |
| userFullName | String | ชื่อ-นามสกุลผู้ดึงข้อมูล |   | not null | M |
| systemName | String | ระบบที่ขอดึงข้อมูล |   | not null | M |

Process
1. นำ input.referenceNumber ไปหา id ของ ตาราง dashboard (tx_adwpc_dashboard_payment, tx_adwpc_dashboard_manual,tx_adwpc_dashboard_monthly,tx_adwpc_dashboard_daily)
2. นำ id ของตาราง dashboard ไปหา list id ของตาราง tx_adwpc_process_log
3. ทำการ Select ข้อมูลรายการบัญชีที่ตาราง Model tx_adwpc_xxx(All) ของ Reference Number and Process log id ที่เลือก
  1. อ้างอิงการอ่านข้อมูลตามรายการตรวจสอบรายการ [03_08_02 หน้าจอตรวจสอบรายการ EDW - Free Template - Power BI](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1097531651)
  2. ปั้นข้อมูลที่ได้จากการ Select เพื่อ Export ในรูปแบบ Free Template 108 คอลัมน์
  3. ทำการ Generate File [03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467) และส่งไฟล์ไปยัง Seaweed Temp
4. ทำการ Return ค่า output.contentId กลับไปยังระบบต้นทาง

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

| Name | Type | Description | Example |
|---|---|---|---|
| contentId | String | contentid ของ seaweed temp ที่มีผลลัพธ์ของข้อมูล |   |

รูปแบบข้อมูลใน File
ข้อมูลอ้างอิง
[03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467)

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [03_08_02 หน้าจอตรวจสอบรายการ EDW - Free Template - Power BI](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1097531651)
- [03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467)
- [03_00_07_02_03 - Template (File Format-Allfield-keyin) Accounting/Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1160118467)
