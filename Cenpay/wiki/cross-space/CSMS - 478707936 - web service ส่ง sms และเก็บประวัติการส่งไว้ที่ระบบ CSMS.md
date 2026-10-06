# web service ส่ง sms และเก็บประวัติการส่งไว้ที่ระบบ CSMS

- **Space:** `CSMS` — ระบบ Centralized SMS (CSMS)
- **Page ID:** 478707936
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=478707936

---

[ [Overview](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Overview) ] [ [Protocol](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Protocol) ] [ [Operation](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Operation) ] [ [Input](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Input) ] [ [Process](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Process) ] [ [Output](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Output) ] [ [Exception](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-Exception) ] [ [Example Input & Output](#webserviceส่งsmsและเก็บประวัติการส่งไว้ที่ระบบCSMS-ExampleInput&Output) ]

## Overview

1. เป็น web service สำหรับส่ง sms และเก็บประวัติการส่งไว้ที่ระบบ CSMS
2. ขั้นตอน
  1. รับข้อมูลมา
  2. ส่งไปที่ระบบ SMS Gateway
  3. Gen File csv
  4. ส่งไปบันทึกที่ระบบ Epirus

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

Parameter ที่ web service นี้รับเข้ามา

| Name |   |   | Type | Description | Example | Validation |
|---|---|---|---|---|---|---|
| sms_categoty | varchar(15) | ประเภทการส่ง sms อ้างอิง-> [02. SMS Template Specification](/display/RDSSMSGW/02.+SMS+Template+Specification)(ส่งค่า System name) | OPER_OCP_DEBITPASS |   |
| msg_template | text | ข้อความ template | ไทยสมุทรได้รับค่าเบี้ยฯกธ.$(var1) วันที่ $(var2) ขอบคุณค่ะ |   |
|   | mobile_no | varchar(10) | เบอร์โทรศัพท์ที่ส่ง SMS | 0891234567 |   |
|   | sent_date (รองรับ schedule) | datetime | วันที่เวลาที่ส่งออก sms | 2017-07-16T19:20:30+01:00 รูปแบบวันที่ตาม ISO 8601 |   |
|   | var1 | varchar(100) | ตัวแปรที่ 1 สำหรับแทนที่ในข้อความ sms | A1234567 |   |
|   | var2 | varchar(100) | ตัวแปรที่ 2 สำหรับแทนที่ในข้อความ sms | 15/08/60 |   |
|   | var... | varchar(100) | ตัวแปรที่ ... สำหรับแทนที่ในข้อความ sms |   |   |
|   | info1 | varchar(100) | ข้อมูลเพิ่มเติมที่ 1 | A1234567 |   |
|   | info2 | varchar(100) | ข้อมูลเพิ่มเติมที่ 2 |   |   |
|   | info... | varchar(100) | ข้อมูลเพิ่มเติมที่ ... |   |   |

## Process

1. ส่งข้อมูลไปที่ SMS Gateway
2. Generate csv file
  1. เขียนข้อมูลในไฟล์ ส่งไปบันทึกที่ epirus โดย insert ข้อมูลที่ [csms_sms_sent_log](/display/CSMS/csms_sms_sent_log)**Generate File CSV****บันทึกข้อมูลที่ epirustable [csms_sms_sent_log](/display/CSMS/csms_sms_sent_log)**Field ที่ CSVData TypeDescriptionตัวอย่างข้อมูลcolumnsms_categotyvarchar(15)ประเภทการส่ง sms อ้างอิง->[sms_category](/display/CSMS/sms_category) DebitPasssms_categotymobile_novarchar(10)เบอร์โทรศัพท์ที่ส่ง SMS0891234567mobile_nosent_datedatetimeวันที่เวลาที่ส่งออก sms2017-07-16T19:20:30+01:00 รูปแบบวันที่ตาม ISO 8601sent_datesms_messagetextข้อความที่ส่งไทยสมุทรได้รับค่าเบี้ยฯกธ.A1234567 วันที่ 15/08/60 ขอบคุณค่ะsms_messagerefer_novarchargenerate ตาม format [เลข Ref No สำหรับอ้างอิง SMS ที่ส่งออก](/pages/viewpage.action?pageId=478347341)DebitPass089123456720170822155512refer_nocredit_amountintจำนวนเครดิตที่ใช้ ให้ทาง ESB คิด logic2credit_amountsending_login_uservarchar(30)User login ที่ request ส่ง SMSbranch@oceanlifesending_login_usersendervarchar(10)ชื่อผู้ส่ง SMSOceanLifesenderinfo1varchar(100)ข้อมูลเพิ่มเติมที่ 1A1234567info1info2varchar(100)ข้อมูลเพิ่มเติมที่ 2 info2info3varchar(100)ข้อมูลเพิ่มเติมที่ 3 info3info4varchar(100)ข้อมูลเพิ่มเติมที่ 4 info4info5varchar(100)ข้อมูลเพิ่มเติมที่ 5 info5created_datedatetimeวันที่เวลาที่ gen csv2017-07-16T19:20:30+01:00 รูปแบบวันที่ตาม ISO 8601created_dateremote_ipvarchar(255) remote_ipuser_agent varchar(255) user_agent

## Output

<แสดงข้อมูลที่ได้รับจาก external service นี้>

| Name | Type | Description | Example |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |

## Exception

<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output

1. <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>

```
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
```

```
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>
```

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [02. SMS Template Specification](http://wiki.thaisamut.co.th/display/RDSSMSGW/02.+SMS+Template+Specification)
- [csms_sms_sent_log](http://wiki.thaisamut.co.th/display/CSMS/csms_sms_sent_log)
- [csms_sms_sent_log](http://wiki.thaisamut.co.th/display/CSMS/csms_sms_sent_log)
- [sms_category](http://wiki.thaisamut.co.th/display/CSMS/sms_category)
- [เลข Ref No สำหรับอ้างอิง SMS ที่ส่งออก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=478347341)
