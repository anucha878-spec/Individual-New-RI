# Service ดึงข้อมูลออกจดหมาย สำหรับจดหมาย LD02_LD03 (Irisapp)

- **Space:** `RDSEMN` — E-Mail Notification
- **Page ID:** 1078263909
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1078263909

---

[ [Overview](#MSAAPIดึงข้อมูลออกจดหมายสำหรับจดหมายLD02_LD03-Overview) ] [ [Protocol](#MSAAPIดึงข้อมูลออกจดหมายสำหรับจดหมายLD02_LD03-Protocol) ] [ [Operation](#MSAAPIดึงข้อมูลออกจดหมายสำหรับจดหมายLD02_LD03-Operation) ] [ [Input](#MSAAPIดึงข้อมูลออกจดหมายสำหรับจดหมายLD02_LD03-Input) ] [ [Process](#MSAAPIดึงข้อมูลออกจดหมายสำหรับจดหมายLD02_LD03-Process) ]

## Overview

สำหรับดึงข้อมูล Temp table จดหมาย LD02 และ LD03 จาก IrisApp เข้าระบบ Email Notification
[MSA นำข้อมูลรอออกจดหมาย LD02,LD03 เข้าระบบ EMN](/pages/viewpage.action?pageId=784400495)
Service CXF : [http://11.100.6.43:8181/cxf/thaisamut/letter/v1/compact/bulk/apl?wsdl](http://11.100.6.43:8181/cxf/thaisamut/letter/v1/compact/bulk/apl?wsdl)
Wiki : [/thaisamut/letter/v1/compact/bulk/apl](/pages/viewpage.action?pageId=787742819)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <bulk>
submitJobInquiry

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| letter_name_abbr |   | ประเภทจดหมาย | LD03 | M |

## Process

ดึงข้อมูลตาราง temp_ld02_ld03 จาก IrisApp
<![CDATA[select insur_title,insur_name,insur_surname,insur_address,sub_district,district,province,postcode,policy_no, plan_code,plan_name,branch_code,branch_name,dividend_amount,dividend_date,dividend_type, monthly,year_2,year_4,running,id_barcode,export_date,export_date_long,dividend_date_limit, bank_name,bank_branch,bank_account_no,letter_code,letter_name_abbr,&quot;period&quot;,transfer_flag, promptpay_account_no,promptpay_account_name from temp_ld02_ld03 where letter_name_abbr = :letter_name_abbr ]]>

---

## Hyperlinks บนหน้านี้

- [MSA นำข้อมูลรอออกจดหมาย LD02,LD03 เข้าระบบ EMN](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=784400495)
- [http://11.100.6.43:8181/cxf/thaisamut/letter/v1/compact/bulk/apl?wsdl](http://11.100.6.43:8181/cxf/thaisamut/letter/v1/compact/bulk/apl?wsdl)
- [/thaisamut/letter/v1/compact/bulk/apl](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=787742819)
- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
