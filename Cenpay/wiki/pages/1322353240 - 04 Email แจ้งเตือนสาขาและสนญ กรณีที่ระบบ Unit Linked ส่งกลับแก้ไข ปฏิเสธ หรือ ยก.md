# 04 Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฏิเสธ หรือ ยกเลิกรายการคำร้อง

- **Page ID:** 1322353240
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1322353240
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-03 กระบวนการส่งอีเมล > 04 Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฏิเสธ หรือ ยกเลิกรายการคำร้อง
- **Depth:** 5

---

## Overview

เพื่อแจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฏิเสธ หรือ ยกเลิกรายการคำร้อง

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Mandatory (Y/N) | Validation |
|---|---|---|---|---|---|
| requestCode | varchar(3) | รหัสประเภทคำร้องS = ขอเวนคืนกรมธรรม์ประกันภัย (Surrender)F = ขอ Free Look (Free Look) | S | Y | ต้องมี request_code ที่ตาราง [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) |
| statusCode | varchar(10) | สถานะรายการ | REJ | Y | ต้องมี Config บนตาราง [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value) where group = 'REQUEST_STATUS' |
| **List<ข้อมูลคำร้อง>** |
| policyNo | varchar(20) | เลขที่กรมธรรม์ | 1529892 | Y | ต้องมี policy_no ที่ตาราง [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) |
| remark | varchar(255) | หมายเหตุกำกับรายการ | เอกสารไม่ครบถ้วน | N |   |
| createdDate | timestamp | วันที่และเวลาที่ดำเนินการ | 2024-06-21 09:32:06.512 +0700 | Y |   |

|   | **SRS** | **FS** |
|---|---|---|
| Sender | [appservice@ocean.co.th](mailto:appservice@ocean.co.th) | ตรวจสอบ Sender จาก [Table :](/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value) ด้วยเงื่อนไข group = 'CPH_CIS_PAYMENT_CANCEL_EMAIL' และ name = 'mailSender' |
| To | [paybenefit@ocean.co.th](mailto:paybenefit@ocean.co.th) serviceBranch[@ocean.co.th](mailto:ps.ip1@ocean.co.th) | ตรวจสอบ MailTo จาก [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value)[ด้วยเงื่อนไข group = 'CPH_CIS_PAYMENT_CANCEL_EMAIL' และ name = 'mailTo'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)ตรวจสอบช่องทางการขาย ([03_02 tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).sale_channel_name) เท่ากับ "ตัวแทน"กรณีเป็นช่องทาง ตัวแทน (Agent)ส่ง Email แจ้งสาขาบริการ เพื่อแจ้งแก้ไขข้อมูลบัญชีลูกค้าที่ระบบ CISตรวจสอบ systemEnvจาก [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value)[ด้วยเงื่อนไข group = 'ENVIRONMENT' และ name = 'systemEnv'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)ถ้า value = 'PROD' ให้กำหนด Email To :[]()[serviceBranch]()[@ocean.co.th](mailto:ps.ip1@ocean.co.th) ด้วยเงื่อนไขserviceBranch = [tx_request](/display/RDSCPENH/03_01+tx_request).branch_service_code เช่น สาขา [0001@ocean.co.th](mailto:0001@ocean.co.th)กรณีอื่นๆ อ้างอิงตาม MailTo ที่ได้กรณีเป็นช่องทาง Non-Agent ส่ง Email แจ้งฝ่ายปฏิบัติการ เพื่อแจ้งแก้ไขข้อมูลบัญชีลูกค้าที่ระบบ CISตรวจสอบ systemEnvจาก [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value)[ด้วยเงื่อนไข group = 'ENVIRONMENT' และ name = 'systemEnv'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)ถ้า value = 'PROD' ให้กำหนด Email To : [paybenefit@ocean.co.th](mailto:paybenefit@ocean.co.th)กรณีอื่นๆ อ้างอิงตาม MailTo ที่ได้ |
| CC | [lada.wa@ocean.co.th](mailto:lada.wa@ocean.co.th) , [luxkana.ta@ocean.co.th](mailto:luxkana.ta@ocean.co.th) | ตรวจสอบ MailCC จาก [Table :](/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value) ด้วยเงื่อนไข group = 'CPH_CIS_PAYMENT_CANCEL_EMAIL' และ name = 'MailCC' |
| Subject | แจ้งรายการที่มีการ@requestStatusรับเรื่อง@requestType ณ วันที่ @createdDate ซึ่งมีข้อมูลจากช่องทาง Unit Linked | ตรวจสอบ MailSubject จาก [Table :](/display/RDSCP/Table+%3A+cf_list_of_value)[cf_list_of_value](/display/RDSCP/cf_list_of_value) ด้วยเงื่อนไข group = 'CPH_CIS_PAYMENT_CANCEL_EMAIL' และ name = 'mailSubject'โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้FieldSRSMapping Data@requestStatusแสดงสถานะรายการ[cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_STATUS'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value in = @statusCode @requestTypeแสดงประเภทคำร้อง[cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_TYPE'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @requestCode@createdDateวันที่และเวลาที่ดำเนินการ ให้แสดงในรูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 04/08/2568 |
| Field | SRS | Mapping Data |
| @requestStatus | แสดงสถานะรายการ | [cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_STATUS'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value in = @statusCode |
| @requestType | แสดงประเภทคำร้อง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_TYPE'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @requestCode |
| @createdDate | วันที่และเวลาที่ดำเนินการ ให้แสดงในรูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 04/08/2568 |   |
| Description | เรียน ผู้ที่เกี่ยวข้องแจ้งรายการที่มีการ**@**requestStatus**รับ**เรื่อง**@requestType** ณ วันที่ วว/ดด/ปปปป ที่มีข้อมูลจากช่องทาง Unit Linked ดังนี้ ลำดับเลขที่กรมธรรม์วันที่**@**requestStatus****รายการคำร้อง@requestTypeหน่วยงานที่ทำการยกเลิกสาเหตุที่**@**requestStatus****1@policyNo@createdDateฝ่ายปฎิบัติการ**@remark** จึงเรียนมาเพื่อทราบ | ให้สร้างรูปแบบ Email ตาม SRS โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้FieldSRSMapping Data@requestStatusแสดงสถานะรายการ[cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_STATUS'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @statusCode @requestTypeแสดงประเภทคำร้อง[cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_TYPE'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @requestCodeให้ระบุข้อมูลคำร้องจาก **List<ข้อมูลคำร้อง>**@policyNoแสดงเลขที่กรมธรรม์ @createdDateวันที่และเวลาที่ดำเนินการให้แสดงในรูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 04/08/2568 @remarkหมายเหตุกำกับรายการ |
| ลำดับ | เลขที่กรมธรรม์ | วันที่**@**requestStatus****รายการคำร้อง@requestType | หน่วยงานที่ทำการยกเลิก | สาเหตุที่**@**requestStatus**** |
| 1 | @policyNo | @createdDate | ฝ่ายปฎิบัติการ | **@remark** |
| Field | SRS | Mapping Data |
| @requestStatus | แสดงสถานะรายการ | [cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_STATUS'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @statusCode |
| @requestType | แสดงประเภทคำร้อง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).namewhere[cf_list_of_value](/display/RDSCP/cf_list_of_value).group = 'REQUEST_TYPE'and[cf_list_of_value](/display/RDSCP/cf_list_of_value).value = @requestCode |
| ให้ระบุข้อมูลคำร้องจาก **List<ข้อมูลคำร้อง>** |
| @policyNo | แสดงเลขที่กรมธรรม์ |   |
| @createdDate | วันที่และเวลาที่ดำเนินการให้แสดงในรูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 04/08/2568 |   |
| @remark | หมายเหตุกำกับรายการ |   |

หมายเหตุอ้างอิง Content Email จาก [02 Email แจ้งยกเลิกรายการให้สาขาและสนญ](/pages/viewpage.action?pageId=1304592600)

---

## Hyperlinks บนหน้านี้

- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [appservice@ocean.co.th](http://wiki.thaisamut.co.thmailto:appservice@ocean.co.th)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [paybenefit@ocean.co.th](http://wiki.thaisamut.co.thmailto:paybenefit@ocean.co.th)
- [@ocean.co.th](http://wiki.thaisamut.co.thmailto:ps.ip1@ocean.co.th)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [ด้วยเงื่อนไข group = 'CPH_CIS_PAYMENT_CANCEL_EMAIL' และ name = 'mailTo'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [03_02 tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [ด้วยเงื่อนไข group = 'ENVIRONMENT' และ name = 'systemEnv'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [@ocean.co.th](http://wiki.thaisamut.co.thmailto:ps.ip1@ocean.co.th)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [0001@ocean.co.th](http://wiki.thaisamut.co.thmailto:0001@ocean.co.th)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [ด้วยเงื่อนไข group = 'ENVIRONMENT' และ name = 'systemEnv'](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [paybenefit@ocean.co.th](http://wiki.thaisamut.co.thmailto:paybenefit@ocean.co.th)
- [lada.wa@ocean.co.th](http://wiki.thaisamut.co.thmailto:lada.wa@ocean.co.th)
- [luxkana.ta@ocean.co.th](http://wiki.thaisamut.co.thmailto:luxkana.ta@ocean.co.th)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [Table :](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [02 Email แจ้งยกเลิกรายการให้สาขาและสนญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1304592600)
