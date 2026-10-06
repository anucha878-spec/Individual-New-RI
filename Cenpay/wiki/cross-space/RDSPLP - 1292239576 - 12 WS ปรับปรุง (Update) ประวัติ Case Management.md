# 12 WS ปรับปรุง (Update) ประวัติ Case Management

- **Space:** `RDSPLP` — Partial Loan Payment (New Loan System)
- **Page ID:** 1292239576
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1292239576

---

[ [Overview](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Overview) ] [ [Protocol](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Protocol) ] [ [Operation](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Operation) ] [ [Pre-Condition](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Pre-Condition) ] [ [Input](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Input) ] [ [Process](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Process) ] [ [Output](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Output) ] [ [Exception](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-Exception) ] [ [Example Input & Output](#id-12WSปรับปรุง(Update)ประวัติCaseManagement-ExampleInput&Output) ]

## Overview

เพื่อปรับปรุงประวัติ Case Mangement

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <update>
<ชื่อ operation>

## Pre-Condition

Set ค่าให้กับ input อ้างอิง : [ข้อมูล Master ต่างๆ ของระบบ Case Management](/pages/viewpage.action?pageId=1293844538)

## Input

| Name | Type | Description | Example | Mandatory Field | Validation |
|---|---|---|---|---|---|
| id | int | ID ของเคสในระบบ | 3163170 | Y |   |
| customerId | String | รหัสลูกค้า | 2562000**** | Y |   |
| customerName | String | ชื่อลูกค้า/บริษัท | นาง**** ***** | Y |   |
| contactName | String | ชื่อผู้ติดต่อ | นาง**** ***** | Y |   |
| customerLevel | String | สถานะ Level |   | N |   |
| contactRelationId | Int | ID ความสัมพันธ์ผู้ติดต่อ ต้อง set มาจากระบบต้นทาง | 20 | N |   |
| policyNumber | String | เลขที่กรมธรรม์ | J7260556 | N |   |
| groupPolicyNumber | String | เลขที่กรมธรรม์กลุ่ม |   | N |   |
| contactNumberPhone | String | เบอร์โทรศัพท์ | 089105**** | N |   |
| contactChannelId | Int | ID ช่องทางการติดต่อ ต้อง set มาจากระบบต้นทาง | 1 | N |   |
| contactTypeId | Int | ID ประเภทผู้ติดต่อ ต้อง set มาจากระบบต้นทาง | 9 | N |   |
| email | String | Email |   | N |   |
| oicListId | Int | คปภ. พื้นที ต้อง set มาจากระบบต้นทาง | 2 | N |   |
| code | String | เลขที่ Case | 20251010258903 | Y |   |
| caseCodeRefer | String | เลขที่ Case มาจากที่ duplicate |   | N |   |
| caseStatus | Enum | Case Status | closed | Y |   |
| caseType | Int | อ้างอิงข้อมูลในตาราง Categories Level1 ต้อง set มาจากระบบต้นทาง | 1 | N | อ้างอิงข้อมูลจากตาราง categories |
| caseSubject | Int | อ้างอิงข้อมูลในตาราง Categories Level2 ต้อง set มาจากระบบต้นทาง | 5 | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject | Int | อ้างอิงข้อมูลในตาราง Categories Level3 ต้อง set มาจากระบบต้นทาง | 698 | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject2 | Int | อ้างอิงข้อมูลในตาราง Categories Level4 ต้อง set มาจากระบบต้นทาง |   | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject3 | Int | อ้างอิงข้อมูลในตาราง Categories Level5 ต้อง set มาจากระบบต้นทาง |   | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject4 | Int | อ้างอิงข้อมูลในตาราง Categories Level6 ต้อง set มาจากระบบต้นทาง |   | N | อ้างอิงข้อมูลจากตาราง categories |
| caseTitle | String | หัวเรื่อง | งวดการชำระ | N |   |
| specialCaseId | Int | ID Special Case ต้อง set มาจากระบบต้นทาง |   | N |   |
| resolveDate | Datetime | Resolve Date วันที่และเวลา ที่ปิดเคส |   | N |   |
| levelOfProblem | Enum | ระดับการสนทนา หรือเจรจาของลูกค้า | cool | Y |   |
| severity | Enum | ระดับความรุนแรงของ Case | cool | Y |   |
| solutionTypeId | Int | ID วีธีการแก้ปัญหา ต้อง set มาจากระบบต้นทาง | 2 | N |   |
| controlNumber | String | เลขที่คุม |   | N |   |
| controlCode | String | รหัสควบคุม (คปภ.) |   | N |   |
| accused | String | ผู้ถูกกล่าวอ้าง |   | N |   |
| problemDetail | String | รายละเอียดการแจ้งเรื่อง |   | N |   |
| solutionDetail | String | รายละเอียดการแก้ปัญหา |   | N |   |
| remark | String | ระบุุรายละเอียดเพิ่มเติม |   | N |   |
| voiceFileLink | String | ระบุรายละเอียด Voice File Link |   | N |   |
| isTransfer | Int | ระบุว่า assigncase | 0 | N |   |
| closedDate | Datetime | วันที่ปิด case | กรณี caseStatus = in_progress field นี้ไม่ต้องมีค่ากรณี caseStatus = closed field นี้ต้องมีค่า | N |   |
| userName | String | ชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆ | admin@admin.com | Y |   |
| caseStatusUpdatedAt | Datetime | วันที่ อัพเดทสถานะ | 2025-10-10 10:39:00 | Y |   |
| status | Enum | สถานะรายการ | active | Y |   |
| updatedAt | Datetime | วันที่ ดำเนินการ ล่าสุด | 2025-10-10 10:39:00 | Y |   |

## Process

1. set ค่าข้อมูล Field : updatedBy, progressBy, progressByUserId, progressByTeamId, progressByGroupId จากตาราง users ด้วย input : userName **Sample SQL** select id, firstName, lastName, username, userTeamId, userGroupId, role from users where status = 'active' and username = :userName เมื่อได้ข้อมูลนำเข้า format ดังนี้
  1. updatedBy จัด format เป็น {"id": **:id**,"username":"**:username**"}
  2. progressBy จัด format เป็น {"id": **:id**,"username":"**[:](mailto:admin@admin.com)username**","firstName":"**:firstName**","lastName":"**:lastName**","userGroupId":**:userGroupId**,"userTeamId":**:userTeamId**,"role":"**:role**"}
  3. progressByUserId จัด format เป็น **:id**
  4. progressByTeamId จัด format เป็น **:userTeamId**
  5. progressByGroupId จัด format เป็น **:userGroupId**
2. กรณี input.closedDate มีข้อมูล ให้คำนวณหา :slaStatus โดยใช้วันที่ :closedDate เปรียบเทียบกับ :dueDate
  1. กรณี :closedDate เกิน :dueDate ให้ set เท่ากับ over Due
  2. กรณี :closedDate ไม่เกิน :dueDate ให้ set เท่ากับ normal
3. ปรับปรุงข้อมูลประวัติ ตาม Sample SQL หรือ Mapping ตามตาราง **Sample SQL** update `case`.`cases` set customerId = ':customerId', customerName = ':customerName', contactName = ':contactName', customerLevel = ':customerLevel', contactRelationId = :contactRelationId, policyNumber = ':policyNumber', groupPolicyNumber = ':groupPolicyNumber', contactNumberPhone = ':contactNumberPhone', contactChannelId = :contactChannelId, contactTypeId = :contactTypeId, email = ':email', oicListId = :oicListId, caseCodeRefer = ':caseCodeRefer', caseStatus = ':caseStatus', caseType = :caseType, caseSubject = :caseSubject, subSubject = :subSubject, subSubject2 = :subSubject2, subSubject3 = :subSubject3, subSubject4 = :subSubject4, caseTitle = ':caseTitle', specialCaseId = :specialCaseId, resolveDate = :resolveDate, levelOfProblem = ':levelOfProblem', severity = ':severity', solutionTypeId = :solutionTypeId, controlNumber = ':controlNumber', controlCode = ':controlCode', accused = ':accused', problemDetail = ':problemDetail', solutionDetail = ':solutionDetail', remark = ':remark', voiceFileLink = ':voiceFileLink', isTransfer = :isTransfer, closedDate = ':closedDate', updatedBy ':updatedBy', progressBy = ':progressBy', progressByUserId = :progressByUserId, progressByTeamId = :progressByTeamId, progressByGroupId = :progressByGroupId, caseStatusUpdatedAt = ':caseStatusUpdatedAt' , status = ':status', updatedAt = ':updatedAt' where id = :id and code = ':code' **No.****Field name****ตัวอย่างค่า (Values)****คำอธิบาย / ที่มา**1customerId25620003623รหัสลูกค้า (masked)2customerNameนางAชื่อลูกค้า3contactNameนางAชื่อผู้ติดต่อ4customerLevel(ว่าง)ระดับลูกค้า (เช่น VIP, Silver ฯลฯ)5contactRelationId20รหัสประเภทความสัมพันธ์ผู้ติดต่อ6policyNumberJ7260556เลขกรมธรรม์7groupPolicyNumber(ว่าง)เลขกรมธรรม์กลุ่ม (ถ้ามี)8contactNumberPhone899982712เบอร์โทรติดต่อ9contactChannelId1ช่องทางติดต่อ (1 = โทรศัพท์)10contactTypeId9ประเภทผู้ติดต่อ11email(ว่าง)อีเมลติดต่อ12oicListId2รหัสจากระบบ OIC13code20251010258903รหัสเคสในระบบ14caseCodeRefer(ว่าง)เคสอ้างอิง (ถ้ามี)15caseStatusin_progressสถานะเคส (กำลังดำเนินการ)16caseType1ประเภทเคสหลัก17caseSubject5หัวข้อเรื่องหลัก18subSubject698หัวข้อย่อย19subSubject2(ว่าง)หัวข้อย่อยระดับ 220subSubject3(ว่าง)หัวข้อย่อยระดับ 321subSubject4(ว่าง)หัวข้อย่อยระดับ 422caseTitleงวดการชำระชื่อเรื่องของเคส23specialCaseId(ว่าง)เคสพิเศษ (ถ้ามี)24resolveDate(ว่าง)วันที่ปิดเคสจริง25levelOfProblemcoolระดับปัญหา (cool = ต่ำ)26severitycoolระดับความรุนแรง27solutionTypeId(ว่าง)ประเภทการแก้ไข28controlNumber(ว่าง)หมายเลขควบคุม (ถ้ามี)29controlCode(ว่าง)รหัสควบคุม30accused(ว่าง)ผู้ถูกร้องเรียน (ถ้ามี)31problemDetail(ว่าง)รายละเอียดปัญหา32solutionDetail(ว่าง)รายละเอียดการแก้ไข33remark(ว่าง)หมายเหตุ34voiceFileLink(ว่าง)ลิงก์ไฟล์เสียง (ถ้ามี)35isTransfer(ว่าง)สถานะการโอนเคส (0 = ไม่โอน)36closedDate(ว่าง)วันที่ปิดเคส37updatedBy{"id":182,"username":"punwipa.sa"}ข้อมูลผู้แก้ไขล่าสุด38progressBy{"id":182,"username":"punwipa.sa","firstName":"**** ****","lastName":"","userGroupId":2,"userTeamId":3,"role":"agent"}',ข้อมูลผู้ดำเนินการล่าสุด39progressByUserId182ID ผู้ดำเนินการล่าสุด40progressByTeamId3ทีมของผู้ดำเนินการ41progressByGroupId2กลุ่มของผู้ดำเนินการ42caseStatusUpdatedAt2025-10-10 10:39:00วันที่อัปเดตสถานะล่าสุด43statusactiveสถานะการใช้งาน (active)44updatedAt2025-10-10 10:39:00วันที่อัปเดตข้อมูลล่าสุด
4. ถ้าพบข้อผิดพลาดดังนี้ ให้ทำการ Roll Back
  1. ตรวจสอบ id ต่างๆ (Field ตัวอักษรสีน้ำเงิน (*) และการหา id จาก input.userName) หากไม่พบข้อมูลในระบบ return 2001 (**หมายเหตุ** เมื่อ input ส่งข้อมูลมาจึงจะตรวจสอบ หากไม่ระบุไม่ต้องตรวจสอบ)
  2. data type ไม่ถูกต้อง return 2002 << กรณีนี้ให้ทำการดักหลังบ้านและ return ใน log
  3. length ของข้อมูลเกินกว่าที่กำหนด return 2003 << กรณีนี้ให้ทำการดักหลังบ้านและ return ใน log
  4. รหัสเคสซ้ำกัน (input.code) return 2004 อื่นๆ อ้างอิงตารางด้านล่างReturn CodeMessageRemark1000Insert/Update Success 2001Field id invalid 2002Data type incorrect 2003Input parameter length too long 2004case code duplicate 9002Error Exception

## Output

| Name | Type | Description | Example |
|---|---|---|---|
| returnCode | string | ผลลัพธ์การบันทึก/ปรับปรุงข้อมูล | 1000 |
| Message | string | Description | Insert/Update Success |
| processDate | datetime | วันที่/เวลา ดำเนินการ | 2025-10-12 10:00:00 |

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
- [ข้อมูล Master ต่างๆ ของระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844538)
- [:](http://wiki.thaisamut.co.thmailto:admin@admin.com)
