# WS สำหรับอนุมัติรายการบัญชี Dashboard Payment การเงิน

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1293647903
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293647903

---

[ [Overview](#WSสำหรับอนุมัติรายการบัญชีDashboardPaymentการเงิน-Overview) ] [ [Protocol](#WSสำหรับอนุมัติรายการบัญชีDashboardPaymentการเงิน-Protocol) ] [ [Operation](#WSสำหรับอนุมัติรายการบัญชีDashboardPaymentการเงิน-Operation) ] [ [Input](#WSสำหรับอนุมัติรายการบัญชีDashboardPaymentการเงิน-Input) ] [ [Output](#WSสำหรับอนุมัติรายการบัญชีDashboardPaymentการเงิน-Output) ]

## Overview

- Web Service``นี้เป็นการ Trigger``dashboard Id

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL Service : /thaisamut/rs/adwetl/v2/accountingdashboard/dashboard-payment-financial-approve
Icon
TYPE : <update>
Polling job

## Input

|   | `Name` | `Type` | `Description` | `Example` | `Validation` | `Mandatory` |
|---|---|---|---|---|---|---|
| dashBoardAction |   |   |   |   |   |   |
|   | dashboardIds | `ArrayList<Long>` | `id ของตาราง tx_adwpc_dashboard_payment` |   | not null | `M` |
|   | String | userName | Username ของผู้ทำรายการ |   | not null | M |
|   | String | userFullName | ชื่อ-นามสกุล ของผู้ทำรายการ |   | not null | M |

Process
1. ค้นหารายการที่ตาราง tx_adwpc_dashboard_payment ด้วย tx_adwpc_dashboard_payment.id ที่อยู่ใน List ของ input.dashBoardId
2. `Trigger กระบวนการอนุมัติรายการ อ้างอิงตามกระบวนการอนุมัติรายการที่หน้าจอ [03_00_03_01 - หน้าจอ Dashboard Payment สิทธิ Financial](/pages/viewpage.action?pageId=878444620)`

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [03_00_03_01 - หน้าจอ Dashboard Payment สิทธิ Financial](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=878444620)
