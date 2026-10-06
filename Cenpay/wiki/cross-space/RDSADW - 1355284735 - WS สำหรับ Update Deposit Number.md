# WS สำหรับ Update Deposit Number

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1355284735
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355284735

---

[ [Overview](#WSสำหรับUpdateDepositNumber-Overview) ] [ [Protocol](#WSสำหรับUpdateDepositNumber-Protocol) ] [ [Operation](#WSสำหรับUpdateDepositNumber-Operation) ] [ [Input](#WSสำหรับUpdateDepositNumber-Input) ] [ [Output](#WSสำหรับUpdateDepositNumber-Output) ] [ [Output](#WSสำหรับUpdateDepositNumber-Output.1) ]

## Overview

- `Web Service สำหรับ Update Deposit Number`

## Protocol

Icon
<REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
MSA-ADWETL
URL : /thaisamut/rs/adwetl/v1/deposit-ws/update-depositnumber
Icon
TYPE : <POST>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

|   | `Name` | `Type` | `Description` | `Example` | `Validation` | `Mandatory` | `Remark` |
|---|---|---|---|---|---|---|---|
|   | depositUpdateBeans | ArrayList<DepositUpdateBean> |   |   | `not null` | `M` | Limit 20 transaction |

| DepositUpdateBean |
|---|
|   | `Name` | `Type` | `Description` | `Example` | `Validation` | `Mandatory` | `Remark` |
|   | `referenceNumber` | `String` | `Reference Number ของ EDW` |   | `not null` | `M` |   |
|   | dummyDepositNo | `BIGINT` | `เลขที่รับฝาก Dummy` |   | `not null` | `M` |   |
|   | newDepositNo | `BIGINT` | `เลขที่รับฝากใหม่` |   | `not null` | `M` |   |

Process
1. `ตรวจสอบ validate ตาม Mandatory Field ใน input`
2. `นำ referenceNumber จาก List Input (referenceNumber, dummy_deposit_no, new_deposit_no) ไปหา process_log_id จากตาราง [tx_adwpc_process_log](/display/RDSADW/tx_adwpc_process_log)`
3. `ค้นหารายการที่ตาราง [tx_adwpc_xxxx_detail](/display/RDSADW/tx_adwpc_deposit_detail) ด้วย process_log_id และ dummy_deposit_no (ปัจจุบันมีเท่านี้ tx_adwpc_premium_detail, tx_adwpc_bank_ho_detail, tx_adwpc_deposit_detail, tx_adwpc_bank_branch_detail, tx_adwpc_agent_clawback_detail, tx_adwpc_agent_credit_fee_detail, tx_adwpc_other_income_fee_detail <character varying (ต่างจากตัวอื่นที่เป็น bigint)>)`
4. `update ข้อมูล [tx_adwpc_xxxx_detail](/display/RDSADW/tx_adwpc_deposit_detail).deposit_no ด้วย new_deposit_no`
5. `return response`

## Output

`<แสดงข้อมูลที่จะได้รับจาก service นี้>`

## Output

`DepositUpdateResponse`

| `Name` | `Type` | `Description` |
|---|---|---|
| `status` | `Boolean` | `สถานะรวม (true = ทุกรายการสำเร็จ)` |
| `message` | `String` | `ข้อความรวม (validation/error; null เมื่อสำเร็จ)` |
| `dataList` | `List<DepositUpdateResultBean>` | `ผลลัพธ์รายรายการ` |

`DepositUpdateResultBean`

| `Name` | `Type` | `Description` |
|---|---|---|
| `referenceNumber` | `String` |   |
| `dummyDepositNo` | `Long` |   |
| `newDepositNo` | `Long` |   |
| `status` | `Boolean` | `สำเร็จ/ไม่สำเร็จ` |
| `message` | `String` | `อัพเดทข้อมูลสำเร็จ / ไม่พบข้อมูล referenceNumber / ไม่พบข้อมูล DummyDepositNo` |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [tx_adwpc_process_log](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_process_log)
- [tx_adwpc_xxxx_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_deposit_detail)
- [tx_adwpc_xxxx_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_deposit_detail)
