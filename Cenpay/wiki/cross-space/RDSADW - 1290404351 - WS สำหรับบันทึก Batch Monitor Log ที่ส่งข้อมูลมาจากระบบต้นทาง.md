# WS สำหรับบันทึก Batch Monitor Log ที่ส่งข้อมูลมาจากระบบต้นทาง

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1290404351
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404351

---

[ [Overview](#WSสำหรับบันทึกBatchMonitorLogที่ส่งข้อมูลมาจากระบบต้นทาง-Overview) ] [ [Protocol](#WSสำหรับบันทึกBatchMonitorLogที่ส่งข้อมูลมาจากระบบต้นทาง-Protocol) ] [ [Operation](#WSสำหรับบันทึกBatchMonitorLogที่ส่งข้อมูลมาจากระบบต้นทาง-Operation) ] [ [Input](#WSสำหรับบันทึกBatchMonitorLogที่ส่งข้อมูลมาจากระบบต้นทาง-Input) ] [ [Output](#WSสำหรับบันทึกBatchMonitorLogที่ส่งข้อมูลมาจากระบบต้นทาง-Output) ]

## Overview

- ``Web Service นี้สำหรับบันทึก Batch Monitor Log ที่ส่งข้อมูลมาจากระบบต้นทาง``

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADW
URL Service : [/thaisamut/pub/adw/swagger#/adw/batchMonitorLog](http://11.100.8.44/thaisamut/pub/adw/swagger#/adw/batchMonitorLog)
Icon
TYPE : <update>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| `Name` | `Type` | `Description` | `Example` | `Validation` | `Mandatory` |
|---|---|---|---|---|---|
| batchCode | String | รหัส Batch |   | [ms_batch](/display/RDSADW/ms_batch).batch_code | M |
| status | String | สถานะ |   | SUCCESSERROR | M |
| eventCode | String | รหัสผังบัญชี |   | [cf_event_code](/display/RDSADW/cf_event_code).event_code | O |
| errorMessage | String | ข้อความผิดพลาด กรณี Status = ERROR ควรระบุมา |   |   | O |

Process
1. บันทึกข้อมูลลงตาราง [tx_batch_monitor](/display/RDSADW/tx_batch_monitor)

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [/thaisamut/pub/adw/swagger#/adw/batchMonitorLog](http://11.100.8.44/thaisamut/pub/adw/swagger#/adw/batchMonitorLog)
- [ms_batch](http://wiki.thaisamut.co.th/display/RDSADW/ms_batch)
- [cf_event_code](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_code)
- [tx_batch_monitor](http://wiki.thaisamut.co.th/display/RDSADW/tx_batch_monitor)
