# WS สำหรับดึงสถานะ ETL ตอนประมวลผลข้อมูลบัญชี

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1284309020
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284309020

---

[ [Overview](#WSสำหรับดึงสถานะETLตอนประมวลผลข้อมูลบัญชี-Overview) ] [ [Protocol](#WSสำหรับดึงสถานะETLตอนประมวลผลข้อมูลบัญชี-Protocol) ] [ [Operation](#WSสำหรับดึงสถานะETLตอนประมวลผลข้อมูลบัญชี-Operation) ] [ [Input](#WSสำหรับดึงสถานะETLตอนประมวลผลข้อมูลบัญชี-Input) ] [ [Output](#WSสำหรับดึงสถานะETLตอนประมวลผลข้อมูลบัญชี-Output) ]

## Overview

- `Web Service สำหรับดึงสถานะ ETL ตอนประมวลผลข้อมูลบัญชี`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL : /thaisamut/rs/adwetl/v2/adwprocess/
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory | Remark |
|---|---|---|---|---|---|---|
| systemName | String | ชื่อระบบ |   | not null | M | ค่าที่ส่งมาควรอยู่ใน [cf_event_flow](/display/RDSADW/cf_event_flow).system |
| systemKey | String | Key ที่ใช้ทำงานประมวลผล ETL |   | not null | M |   |

Process
1. query ข้อมูลเหมือน /thaisamut/rs/adwetl/v1/adwprocess/ แต่เพิ่มการส่งข้อมูลด้านล่างไปเพิ่มหากพบข้อมูล dashboardIdLongid ของตาราง tx_adwpc_dashboard_xxxxreferenceNumberStringreferenceNumber ของตาราง DashboardedwReconcileAmountBigDecimalยอด EDW Reconcile AmounttxAdwpcProcessLogIdLongid ของตาราง [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)drAmountBigDecimalยอด DRcrAmountBigDecimalยอด CR

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

| Name | Type | Description | Example |
|---|---|---|---|
| txAdwpcProcessLogId | Long | id ของตาราง [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log) |   |
| accountingDate | Date | วันที่บันทึกบัญชี |   |
| branchNo | String | สาขาบันทึกบัญชี |   |
| systemName | String | ชื่อระบบ |   |
| status | ProcessLogStatusEnum | สถานะ Process Log |   |
| errorMessage | String | ข้อความผิดพลาดจาก Process Log |   |
| createdDate | Date | วันเวลาที่สร้าง ProcessLog |   |
| createdBy | String | ผู้สร้าง ProcessLog |   |
| updatedDate | Date | วันเวลาที่แก้ไขล่าสุด ProcessLog |   |
| updatedBy | String | ผู้ที่แก้ไข ProcessLog |   |
| totalTimeMs | Long | เวลาที่ใช้ทั้งหมด |   |
| systemKey | String | key ที่ใช้คุยกันระหว่างระบบ |   |
| dashboardId | Long | id ของตาราง tx_adwpc_dashboard_xxxx |   |
| referenceNumber | String | referenceNumber ของตาราง Dashboard |   |
| edwReconcileAmount | BigDecimal | ยอด EDW Reconcile Amount |   |
| drAmount | BigDecimal | ยอดเงิน DR |   |
| crAmount | BigDecimal | ยอดเงิน CR |   |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [cf_event_flow](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_flow)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
