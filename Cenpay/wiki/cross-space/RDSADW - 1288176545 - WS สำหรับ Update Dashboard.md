# WS สำหรับ Update Dashboard

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1288176545
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176545

---

[ [Overview](#WSสำหรับUpdateDashboard-Overview) ] [ [Protocol](#WSสำหรับUpdateDashboard-Protocol) ] [ [Operation](#WSสำหรับUpdateDashboard-Operation) ] [ [Input](#WSสำหรับUpdateDashboard-Input) ] [ [Output](#WSสำหรับUpdateDashboard-Output) ]

## Overview

- `Web Service สำหรับ Update Dashboard`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL : /thaisamut/rs/adwetl/v2/accountingdashboard/update-dashboard/
Icon
TYPE : <update>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory | Remark |
|---|---|---|---|---|---|---|
| referenceNumber | String | Reference Number ของ EDW |   | not null | M |   |
| action | Enum | เหตุการณ์ที่ต้องการ Update | SUN_PATHPOSTING_DATEPAYMENT_DATE | not null | M |   |
| value | String | ค่าของข้อมูลที่ Update ที่ไม่ใช่วันที่ | MA | not null | Mกรณี action = SUN_PATH |   |
| dateValue | Date | ค่าของข้อมูลที่ Update ที่เป็นวันที่ | '2025-01-01' | not null | Mกรณี action =POSTING_DATEPAYMENT_DATE |   |
| userName | String | username ผู้ใช้งาน |   | not null | M |   |

Process
1. ตรวจสอบ validate ตาม Mandatory Field ใน input
2. นำ referenceNumer ไปหาข้อมูลประเภท dashboard จากตาราง dashboard (tx_adwpc_dashboard_payment, tx_adwpc_dashboard_manual,tx_adwpc_dashboard_monthly,tx_adwpc_dashboard_daily)
3. ตรวจสอบเงื่อนไขการ update ถ้าไม่เข้าเงื่อนไขให้ error กรณีพบว่าเป็นประเภท Dashboardจาก 2.1 tx_adwpc_dashboard_manual, tx_adwpc_dashboard_payment สามารถทำได้ทุก action 2.2 tx_adwpc_dashboard_daily ไม่สามารถทำ action ใดๆ ได้ 2.3 tx_adwpc_dashboard_monthly สามารถทำได้ action = POSTING_DATE
4. update ข้อมูลตาม action โดย reuse function เดิมที่เคยเรียกใช้ในระบบ EDW
5. return response

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

| Name | Type | Description | Condition Mapping | Example |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
