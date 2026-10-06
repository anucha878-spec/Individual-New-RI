# ยกเลิก 02-05- 20 Process Update สถานะรายการคำร้องและส่ง Email แจ้งเตือนสำนักกฎหมาย สำหรับคำร้องเวนคืนกรมบังคับคดี

- **Page ID:** 1349452038
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1349452038
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > ยกเลิก 02-05- 20 Process Update สถานะรายการคำร้องและส่ง Email แจ้งเตือนสำนักกฎหมาย สำหรับคำร้องเวนคืนกรมบังคับคดี
- **Depth:** 4

---

[ [Overview](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-Overview) ] [ [Protocol](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-Protocol) ] [ [Operation](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-Operation) ] [ [Input](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-Input) ] [ [Process](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-Process) ]

## Overview

เพื่อ update สถานะรายการคำร้องและส่ง Email แจ้งเตือนสำนักกฎหมาย สำหรับคำร้องเวนคืนกรมบังคับคดี

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Mandatory (Y/N) | Validation |
|---|---|---|---|---|---|
| requestNo | varchar(20) | เลขที่รับเรื่อง | F2568-02/1500/000001 | Y | ต้องมี request_no ที่ตาราง [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) |
| statusCode | varchar(10) | สถานะรายการ | PMS | Y | ต้องมี Config บนตาราง [cf_list_of_value](/display/RDSCP/cf_list_of_value) where group = 'REQUEST_STATUS' |
| remark | varchar(255) | หมายเหตุกำกับรายการ | Format ไม่ถูกต้อง | N | ต้องมีขนาดตัวอักษรไม่เกิน 255 ตัวอักษร |
| createdBy | varchar(50) | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | Ocean.co | Y | ต้องมีขนาดตัวอักษรไม่เกิน 50 ตัวอักษร |
| createdByFullname | varchar(150) | ผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี) | สมชาย ใจดี | Y | ต้องมีขนาดตัวอักษรไม่เกิน 150 ตัวอักษร |
| createdDate | timestamp | วันที่และเวลาสร้างข้อมูล | 2026-03-21 09:32:06.512 +0700 | Y |   |

## Process

1. Update สถานะรายการคำร้อง โดยเรียกใช้ [Process Update สถานะรายการคำร้อง](/pages/viewpage.action?pageId=1310982293) และให้ส่ง Input ดังนี้InputDescriptionValuerequestNoเลขที่รับเรื่อง[Input.requestNo](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-requestNo)statusCodeสถานะรายการ[Input.statusCode](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-statusCode)remarkหมายเหตุกำกับรายการ[Input.remark](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-remark)createdByผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co)[Input.createdBy](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-createdBy)createdByFullnameผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี)[Input.createdByFullname](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-createdByFullname)createdDateวันที่และเวลาสร้างข้อมูล[Input.createdDate](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-createdDate)
2. ส่ง Email แจ้งเตือนสำนักกฎหมาย ตามเงื่อนไขดังนี้ โดยเรียกใช้ [05 Email แจ้งสำนักกฎหมาย กรณีคำร้องเวนคืนกรมบังคับคดีโอนเงินสำเร็จ หรือไม่สำเร็จ](/pages/viewpage.action?pageId=1349452495) และให้ส่ง Input ดังนี้InputDescriptionValuerequestNoเลขที่รับเรื่อง[Input.requestNo](#id-ยกเลิก02-05-20ProcessUpdateสถานะรายการคำร้องและส่งEmailแจ้งเตือนสำนักกฎหมายสำหรับคำร้องเวนคืนกรมบังคับคดี-requestNo)

---

## Hyperlinks บนหน้านี้

- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)
- [05 Email แจ้งสำนักกฎหมาย กรณีคำร้องเวนคืนกรมบังคับคดีโอนเงินสำเร็จ หรือไม่สำเร็จ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1349452495)
