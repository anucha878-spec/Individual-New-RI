# WS สำหรับตรวจสอบ Flag แจ้งเตือน Freelook นอกเหนือจากเงื่อนไขที่กำหนด

- **Page ID:** 1351287405
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1351287405
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Cenpay > WS สำหรับตรวจสอบ Flag แจ้งเตือน Freelook นอกเหนือจากเงื่อนไขที่กำหนด
- **Depth:** 4

---

[ [Overview](#WSสำหรับตรวจสอบFlagแจ้งเตือนFreelookนอกเหนือจากเงื่อนไขที่กำหนด-Overview) ] [ [Input](#WSสำหรับตรวจสอบFlagแจ้งเตือนFreelookนอกเหนือจากเงื่อนไขที่กำหนด-Input) ] [ [Process](#WSสำหรับตรวจสอบFlagแจ้งเตือนFreelookนอกเหนือจากเงื่อนไขที่กำหนด-Process) ] [ [`Output`](#WSสำหรับตรวจสอบFlagแจ้งเตือนFreelookนอกเหนือจากเงื่อนไขที่กำหนด-Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่อตรวจสอบ Flag แจ้งเตือน Freelook นอกเหนือจากเงื่อนไขที่กำหนด (ยกเว้น Telesale ไม่มีแล้วในปัจจุบัน) เพื่อบันทึกลงในรายการจ่ายบนระบบ Cenpay ใช้เพื่อแจ้งเตือนผู้พิจารณาให้ตรวจสอบเพิ่มเติม และส่งให้กับผู้อนุมัติที่มีอำนาจสูงสุดอนุมัติ
***** หมายเหตุ จากตารางมีการหารือกับ User กลุ่มปฎิบัติการเพิ่มเติมกับเงื่อนไขในการตรวจสอบ ได้ความเพิ่มเติมว่า กรมธรรม์อุตสาหกรรมจะตรวจสอบ Freelook ด้วยเงื่อนไขไม่เกิน 15 วันเสมอ และกรมธรรม์ PA จะไม่เข้าเงื่อนไขในการตรวจสอบ Freelook เสมอ**
![img](/download/attachments/1351287405/image2026-6-25%2010%3A11%3A9.png?version=1&modificationDate=1782373782629&api=v2)
**Repositories**: msa-benefitbank
**Service path**
**GET:** thaisamut/rs/benefitbank/v1/common/freelook-flag-check

```

```

Icon
TYPE : <GET>
**อธิบายได้ดังนี้**
GET - Select
POST - Insert
PUT - Update

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | `Validation` |
|---|---|---|---|---|---|
| policyType | String | ประเภทกรมธรรม์ |   | Y |   |
| channelCode | String | รหัสช่องทางการขาย | 8500001 | Y |   |
| planCode | String | โค้ด แบบประกัน |   | Y |   |
| intervalDay | Numeric | ช่วงวันที่ Freelook | 10.00 | Y |   |

## Process

1. ตรวจสอบข้อมูลเพื่อแยกกรณีตาม channelName ดังนี้
  1. **กรณีที่ channelCode = '8500001" ( Internet Sale )**
    1. กรณีที่มี policyType in ('GOV','IND')
      1. ถ้า intervalDay < 15 ให้ **Return flagFreelook** = N
      2. ถ้า intervalDay >= 15 **Return****flagFreelook** = H
    2. กรณีที่มี policyType = 'ORD'
      1. เรียก Swagger ที่ Psuite ตาม [http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType](http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType)NameValueplanCodeplanCode จาก InputpolicyTypepolicyType จาก Input
      2. พิจารณาจากข้อมูล planGroup แยกตามเงื่อนไข
        1. ถ้า planGroup = "ORD"
          1. ถ้า intervalDay < 15 ให้ **Return****flagFreelook** = N
          2. ถ้า intervalDay >= 15 ให้ **Return****flagFreelook** = H
        2. ถ้า planGroup <> "ORD"
          1. ถ้า intervalDay < 30 ให้ **Return****flagFreelook** = N
          2. ถ้า intervalDay >= 30 ให้ **Return****flagFreelook** = M
  2. **กรณีที่ channelCode 3 หลักแรก เท่ากับ '207' หรือ '507' ( Agent )**
    1. กรณีที่มี policyType in ('GOV','IND','ORD')
      1. ถ้า intervalDay < 15 ให้ **Return flagFreelook** = N
      2. ถ้า intervalDay >= 15 **Return****flagFreelook** = H
  3. **กรณีที่ อื่นๆ นอกเหนือจาก a และ b ( Non - Agnet )**
    1. กรณีที่มี policyType in ('GOV','IND')
      1. ถ้า intervalDay < 15 ให้ **Return flagFreelook** = N
      2. ถ้า intervalDay >= 15 **Return****flagFreelook** = H
    2. กรณีที่มี policyType = 'ORD'
      1. เรียก Swagger ที่ Psuite ตาม [http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType](http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType)NameValueplanCodeplanCode จาก InputpolicyTypepolicyType จาก Input
      2. พิจารณาจากข้อมูล planGroup แยกตามเงื่อนไข
        1. ถ้า planGroup in ("ORD","MLTA")
          1. ถ้า intervalDay < 15 ให้ **Return****flagFreelook** = N
          2. ถ้า intervalDay >= 15 ให้ **Return****flagFreelook** = H
        2. ถ้า planGroup in ("MRTA")
          1. ถ้า intervalDay < 30 ให้ **Return****flagFreelook** = N
          2. ถ้า intervalDay >= 30 ให้ **Return****flagFreelook** = M

## `Output`

| `Name` | `Type` | `Description` | `Example` |
|---|---|---|---|
| flagFreelook | String | Invalid แจ้งเตือน FreelookN : ไม่แจ้งเตือนH : 15 วันM : 30 วัน | N หรือ H หริอ M |

| `Name` | `Type` | `Description` | `Example` |
|---|---|---|---|
| `statusCode` | `numeric` | `200``Success``204``No Content``400``Bad Request (รวม Validation)``409``Conflict (รวมกรณี Duplicated Key + Already Cancel)``500``Server Error` |   |
| `200` | `Success` |
| `204` | `No Content` |
| `400` | `Bad Request (รวม Validation)` |
| `409` | `Conflict (รวมกรณี Duplicated Key + Already Cancel)` |
| `500` | `Server Error` |
| `errorMessage` | `varchar` | `กรณี statusCode = 412กรณี statusCode อื่นๆ ให้แสดงข้อความ text message แสดงสาเหตุ error``oper_ref_no ให้ return errorMessage "ไม่พบ oper_ref_no ที่ตาราง [tx_payment](/display/RDSCPENH/tx_payment)"``transaction_status ให้ return errorMessage "ไม่พบ Config transaction_status ที่ตาราง [ms_status](/display/RDSCP/Table+%3A+ms_status)"` |   |

---

## Hyperlinks บนหน้านี้

- [http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType](http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType)
- [http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType](http://11.100.8.44/thaisamut/pub/psuite/swagger#/plan/getBasePlanByCodeAndType)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [ms_status](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+ms_status)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1351287405/image2026-6-25%2010%3A11%3A9.png?version=1&modificationDate=1782373782629&api=v2
