# WS สำหรับไม่อนุมัติรายการบัญชี Dashboard Manual บัญชี

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1314947600
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1314947600

---

[ [Overview](#WSสำหรับไม่อนุมัติรายการบัญชีDashboardManualบัญชี-Overview) ] [ [Protocol](#WSสำหรับไม่อนุมัติรายการบัญชีDashboardManualบัญชี-Protocol) ] [ [Operation](#WSสำหรับไม่อนุมัติรายการบัญชีDashboardManualบัญชี-Operation) ] [ [Input](#WSสำหรับไม่อนุมัติรายการบัญชีDashboardManualบัญชี-Input) ] [ [Output](#WSสำหรับไม่อนุมัติรายการบัญชีDashboardManualบัญชี-Output) ]

## Overview

- Web Service``นี้เป็นการ Trigger``dashboard Id

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL Service Submit Job : /thaisamut/rs/adwetl/v2/accountingdashboard/dashboard-manual-accounting-dis-approve
RL Service Polling Data :
Icon
TYPE : <bulk>
Polling job

## Input

|   | `Name` | `Type` | `Description` | `Example` | `Validation` | `Mandatory` |
|---|---|---|---|---|---|---|
| dashBoardAction |   |   |   |   |   |   |
|   | dashboardIds | `ArrayList<Long>` | `id ของตาราง tx_adwpc_dashboard_manual` |   | not null | `M` |
|   | String | userName | Username ของผู้ทำรายการ |   | not null | M |
|   | String | userFullName | ชื่อ-นามสกุล ของผู้ทำรายการ |   | not null | M |

Process
1. ค้นหารายการที่ตาราง tx_adwpc_dashboard_manual ด้วย tx_adwpc_dashboard_manual.id ที่อยู่ใน List ของ input.dashBoardId
2. `Trigger กระบวนการไม่อนุมัติรายการ อ้างอิงตามกระบวนการไม่อนุมัติรายการที่หน้าจอ [03_00_06_01 - หน้าจอ Dashboard Manual สิทธิ Accounting](/pages/viewpage.action?pageId=953549051)`

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [03_00_06_01 - หน้าจอ Dashboard Manual สิทธิ Accounting](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=953549051)
