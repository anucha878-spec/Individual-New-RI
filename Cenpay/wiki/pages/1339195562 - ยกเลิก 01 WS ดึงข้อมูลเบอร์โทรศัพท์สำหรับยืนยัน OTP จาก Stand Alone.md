# ยกเลิก 01 WS ดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยัน OTP จาก Stand Alone

- **Page ID:** 1339195562
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195562
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS Stand Alone > ยกเลิก 01 WS ดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยัน OTP จาก Stand Alone
- **Depth:** 4

---

[ [Overview](#id-ยกเลิก01WSดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยันOTPจากStandAlone-Overview) ] [ [Input](#id-ยกเลิก01WSดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยันOTPจากStandAlone-Input) ] [ [Process](#id-ยกเลิก01WSดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยันOTPจากStandAlone-Process) ] [ [Output](#id-ยกเลิก01WSดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยันOTPจากStandAlone-Output) ]

## Overview

Web Service สำหรับดึงข้อมูลเบอร์โทรศัพท์สำหรับยืนยัน OTP จาก Stand Alone
**Repositories**: -
**Service path**
**GET :**
**** Swagger :
Icon
TYPE : <GET, POST, PUT, DELETE>
**อธิบายได้ดังนี้**
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation | Mandatory |
|---|---|---|---|---|---|
| username | String | username ผู้อนุมัติ | patcha.vo | Required | Y |

## Process

**Query ดึงข้อมูลธนาคาร**
1. อ่านไฟล์ mobileno.yml จาก Path ที่เครื่อง Server Stand Alone
2. Mapping username ที่ได้จาก Input ตัวอย่างเช่น username = john.doe <![CDATA[agent: users: john.doe: mobile: 0812345678 jane.smith: mobile: 089999999]]>
3. Return เบอร์โทรศัพท์ ที่ได้จาก Mapping username

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| Name | Type | Description |
|---|---|---|
| mobileNo | String | เบอร์โทรศัพท์ |
