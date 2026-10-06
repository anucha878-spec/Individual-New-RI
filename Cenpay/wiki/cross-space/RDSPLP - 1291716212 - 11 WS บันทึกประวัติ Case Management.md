# 11 WS บันทึกประวัติ Case Management

- **Space:** `RDSPLP` — Partial Loan Payment (New Loan System)
- **Page ID:** 1291716212
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291716212

---

[ [Overview](#id-11WSบันทึกประวัติCaseManagement-Overview) ] [ [Protocol](#id-11WSบันทึกประวัติCaseManagement-Protocol) ] [ [Operation](#id-11WSบันทึกประวัติCaseManagement-Operation) ] [ [Pre-Condition](#id-11WSบันทึกประวัติCaseManagement-Pre-Condition) ] [ [Input](#id-11WSบันทึกประวัติCaseManagement-Input) ] [ [Process](#id-11WSบันทึกประวัติCaseManagement-Process) ] [ [Output](#id-11WSบันทึกประวัติCaseManagement-Output) ] [ [Exception](#id-11WSบันทึกประวัติCaseManagement-Exception) ] [ [Example Input & Output](#id-11WSบันทึกประวัติCaseManagement-ExampleInput&Output) ]

## Overview

เพื่อทำการบันทึกประวัติ Case Management

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <add>
<ชื่อ operation>

## Pre-Condition

1. Set ค่าให้กับ input อ้างอิง : [ข้อมูล Master ต่างๆ ของระบบ Case Management](/pages/viewpage.action?pageId=1293844538)
2. Set ค่าข้อมูล Field code : [ดึงข้อมูล Running No. จากระบบต้นทาง](/pages/viewpage.action?pageId=1295712852)

## Input

| Name | Type | Description | Example | Mandatory Field | Validation |
|---|---|---|---|---|---|
| customerId | String | รหัสลูกค้า | 2562000**** | Y |   |
| customerName | String | ชื่อลูกค้า/บริษัท | นาง**** ***** | Y |   |
| contactName | String | ชื่อผู้ติดต่อ | นาง**** ***** | Y |   |
| customerLevel | String | สถานะ Level |   | N |   |
| contactRelationId | Int | ID ความสัมพันธ์ผู้ติดต่อ ต้อง set มาจากระบบต้นทาง (*) | 20 | N |   |
| policyNumber | String | เลขที่กรมธรรม์ | J7260556 | N |   |
| groupPolicyNumber | String | เลขที่กรมธรรม์กลุ่ม |   | N |   |
| contactNumberPhone | String | เบอร์โทรศัพท์ | 089105**** | N |   |
| contactChannelId | Int | ID ช่องทางการติดต่อ ต้อง set มาจากระบบต้นทาง (*) | 1 | N |   |
| contactTypeId | Int | ID ประเภทผู้ติดต่อ ต้อง set มาจากระบบต้นทาง (*) | 9 | N |   |
| email | String | Email |   | N |   |
| oicListId | Int | คปภ. พื้นที ต้อง set มาจากระบบต้นทาง (*) | 2 | N |   |
| caseCodeRefer | String | เลขที่ Case มาจากที่ duplicate |   | N |   |
| openDate | Datetime | วันที่แจ้งเรื่อง | 2025-10-10 10:39:00 | Y |   |
| caseStatus | Enum | Case Status | closed | Y |   |
| slaStatus | Enum | สถานะ SLA | normal | Y |   |
| caseType | Int | อ้างอิงข้อมูลในตาราง Categories Level1 ต้อง set มาจากระบบต้นทาง (*) | 1 | Y | อ้างอิงข้อมูลจากตาราง categories |
| caseSubject | Int | อ้างอิงข้อมูลในตาราง Categories Level2 ต้อง set มาจากระบบต้นทาง (*) | 5 | Y | อ้างอิงข้อมูลจากตาราง categories |
| subSubject | Int | อ้างอิงข้อมูลในตาราง Categories Level3 ต้อง set มาจากระบบต้นทาง (*) | 698 | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject2 | Int | อ้างอิงข้อมูลในตาราง Categories Level4 ต้อง set มาจากระบบต้นทาง (*) |   | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject3 | Int | อ้างอิงข้อมูลในตาราง Categories Level5 ต้อง set มาจากระบบต้นทาง (*) |   | N | อ้างอิงข้อมูลจากตาราง categories |
| subSubject4 | Int | อ้างอิงข้อมูลในตาราง Categories Level6 ต้อง set มาจากระบบต้นทาง (*) |   | N | อ้างอิงข้อมูลจากตาราง categories |
| caseTitle | String | หัวเรื่อง | งวดการชำระ | N |   |
| specialCaseId | Int | ID Special Case ต้อง set มาจากระบบต้นทาง (*) |   | N |   |
| resolveDate | Datetime | Resolve Date วันที่และเวลา ที่ปิดเคส | กรณี caseStatus = in_progress field นี้ไม่ต้องมีค่ากรณี caseStatus = closed field นี้ต้องมีค่า | N |   |
| levelOfProblem | Enum | ระดับการสนทนา หรือเจรจาของลูกค้า | cool | Y |   |
| severity | Enum | ระดับความรุนแรงของ Case | cool | Y |   |
| solutionTypeId | Int | ID วีธีการแก้ปัญหา ต้อง set มาจากระบบต้นทาง (*) | 2 | N |   |
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
| caseStatusUpdatedAt | Datetime | วันที่ อัพเดทสถานะ | 2025-10-10 10:39:00 | N |   |
| status | Enum | สถานะรายการ | active | Y |   |
| createdAt | Datetime | วันที่แจ้งเรื่อง | 2025-10-10 10:39:00 | Y |   |
| updatedAt | Datetime | วันที่ ดำเนินการ ล่าสุด | 2025-10-10 10:39:00 | N |   |
| code | String | รหัสเคสในระบบ | 20251010NL00001 | Y |   |

## Process

1. คำนวณหา dueDate โดยใช้วันที่ :openDate + **SLA (SLA หาจาก SQL ด้านล่าง)**เงื่อนไขที่นำมาใช้ เรียงลำดับ ดังนี้ ให้ใช้ **id = subSubject2** แต่ถ้า subSubject2 ไม่มีค่าให้ดูเงื่อนไขต่อไป ให้ใช้ **id = subSubject** แต่ถ้า subSubject ไม่มีค่าให้ดูเงื่อนไขต่อไป ให้ใช้ **id = caseSubject****Sample SQL** select resolvedDay, resolvedHour, resolvedMinfrom categories where id = ค่า Input (subSubject2 หรือ subSubject หรือ caseSubject)
2. set ค่าข้อมูล Field : createdBy, updatedBy, progressBy, progressByUserId, progressByTeamId, progressByGroupId จากตาราง users ด้วย input : userName **Sample SQL** select id, firstName, lastName, username, userTeamId, userGroupId, role from users where status = 'active' and username = :userName เมื่อได้ข้อมูลนำเข้า format ดังนี้
  1. createdBy จัด format เป็น {"id": **:id**,"username":"**:username**"}
  2. updatedBy จัด format เป็น {"id": **:id**,"username":"**:username**"}
  3. progressBy จัด format เป็น {"id": **:id**,"username":"**[:](mailto:admin@admin.com)username**","firstName":"**:firstName**","lastName":"**:lastName**","userGroupId":**:userGroupId**,"userTeamId":**:userTeamId**,"role":"**:role**"}
  4. progressByUserId จัด format เป็น **:id**
  5. progressByTeamId จัด format เป็น **:userTeamId**
  6. progressByGroupId จัด format เป็น **:userGroupId**
3. บันทึกข้อมูลประวัติ ตาม Sample SQL หรือ Mapping ตามตาราง **Sample SQL** INSERT INTO `case`.`cases` (customerId, customerName, contactName, customerLevel, contactRelationId, policyNumber, groupPolicyNumber, contactNumberPhone, contactChannelId, contactTypeId, email, oicListId, code, caseCodeRefer, openDate, caseStatus, slaStatus, caseType, caseSubject, subSubject, subSubject2, subSubject3, subSubject4, caseTitle, specialCaseId, dueDate, resolveDate, levelOfProblem, severity, solutionTypeId, controlNumber, controlCode, accused, problemDetail, solutionDetail, remark, voiceFileLink, isTransfer, closedDate, createdBy, updatedBy, progressBy, progressByUserId, progressByTeamId, progressByGroupId, caseStatusUpdatedAt, status, createdAt, updatedAt, code) VALUES(':customerId', ':customerName', ':contactName', ':customerLevel', :contactRelationId, ':policyNumber', ':groupPolicyNumber', ':contactNumberPhone', :contactChannelId, :contactTypeId, ':email', :oicListId, ':code', ':caseCodeRefer', ':openDate', ':caseStatus', ':slaStatus', :caseType, :caseSubject, :subSubject, :subSubject2, :subSubject3, :subSubject4, ':caseTitle', :specialCaseId, :dueDate, :resolveDate, ':levelOfProblem', ':severity', :solutionTypeId, ':controlNumber', ':controlCode', ':accused', ':problemDetail', ':solutionDetail', ':remark', ':voiceFileLink', :isTransfer, ':closedDate', ':createdBy', ':updatedBy', ':progressBy', :progressByUserId, :progressByTeamId, :progressByGroupId, ':caseStatusUpdatedAt', ':status', ':createdAt', ':updatedAt', ':code')**ตัวอย่าง**INSERT INTO `case`.`cases` (customerId, customerName, contactName, customerLevel, contactRelationId, policyNumber, groupPolicyNumber, contactNumberPhone, contactChannelId, contactTypeId, email, oicListId, code, caseCodeRefer, openDate, caseStatus, slaStatus, caseType, caseSubject, subSubject, subSubject2, subSubject3, subSubject4, caseTitle, specialCaseId, dueDate, resolveDate, levelOfProblem, severity, solutionTypeId, controlNumber, controlCode, accused, problemDetail, solutionDetail, remark, voiceFileLink, isTransfer, closedDate, createdBy, updatedBy, progressBy, progressByUserId, progressByTeamId, progressByGroupId, caseStatusUpdatedAt, status, createdAt, updatedAt, code) VALUES('2562000****', 'นาง**** *****', 'นาง**** *****', '', 20, 'J7260556', '', '089105****', 12, 9, '', NULL, '20251010258903', '', '2025-10-16 10:39:00.000', 'closed', 'normal', 1, 1353, 1354, NULL, NULL, NULL, 'สอบถามเงินกู้', NULL, NULL, NULL, 'cool', 'cool', NULL, NULL, NULL, '', '', '', '', '', 0, '2025-10-16 10:39:00.000', '{"id":1,"username":"admin@admin.com"}', '{"id":1,"username":"admin@admin.com"}', '{"id":1,"username":"admin@admin.com","firstName":"**** ****","lastName":"","userGroupId":1,"userTeamId":1,"role":"super admin"}', 1, 1, 1, '2025-10-16 10:39:00.000', 'active', '2025-10-16 10:39:00.000', '2025-10-16 10:39:00.000', '20251010NL00001') **No.****Field name****ตัวอย่างค่า (Values)****คำอธิบาย / ที่มา**1customerId25620003623รหัสลูกค้า (masked)2customerNameนางAชื่อลูกค้า3contactNameนางAชื่อผู้ติดต่อ4customerLevel(ว่าง)ระดับลูกค้า (เช่น VIP, Silver ฯลฯ)5contactRelationId20รหัสประเภทความสัมพันธ์ผู้ติดต่อ6policyNumberJ7260556เลขกรมธรรม์7groupPolicyNumber(ว่าง)เลขกรมธรรม์กลุ่ม (ถ้ามี)8contactNumberPhone899982712เบอร์โทรติดต่อ9contactChannelId1ช่องทางติดต่อ (1 = โทรศัพท์)10contactTypeId9ประเภทผู้ติดต่อ11email(ว่าง)อีเมลติดต่อ12oicListId2รหัสจากระบบ OIC13code20251010258903รหัสเคสในระบบ14caseCodeRefer(ว่าง)เคสอ้างอิง (ถ้ามี)15openDate2025-10-10 10:39:00วันที่เปิดเคส16caseStatusin_progressสถานะเคส (กำลังดำเนินการ)17slaStatusnormalสถานะ SLA18caseType1ประเภทเคสหลัก19caseSubject5หัวข้อเรื่องหลัก20subSubject698หัวข้อย่อย21subSubject2(ว่าง)หัวข้อย่อยระดับ 222subSubject3(ว่าง)หัวข้อย่อยระดับ 323subSubject4(ว่าง)หัวข้อย่อยระดับ 424caseTitleงวดการชำระชื่อเรื่องของเคส25specialCaseId(ว่าง)เคสพิเศษ (ถ้ามี)26dueDate2025-10-10 10:44:00กำหนดปิดเคส27resolveDate(ว่าง)วันที่ปิดเคสจริง28levelOfProblemcoolระดับปัญหา (cool = ต่ำ)29severitycoolระดับความรุนแรง30solutionTypeId(ว่าง)ประเภทการแก้ไข31controlNumber(ว่าง)หมายเลขควบคุม (ถ้ามี)32controlCode(ว่าง)รหัสควบคุม33accused(ว่าง)ผู้ถูกร้องเรียน (ถ้ามี)34problemDetail(ว่าง)รายละเอียดปัญหา35solutionDetail(ว่าง)รายละเอียดการแก้ไข36remark(ว่าง)หมายเหตุ37voiceFileLink(ว่าง)ลิงก์ไฟล์เสียง (ถ้ามี)38isTransfer(ว่าง)สถานะการโอนเคส (0 = ไม่โอน)39closedDate(ว่าง)วันที่ปิดเคส40createdBy{"id":182,"username":"punwipa.sa"}รหัสผู้สร้างเคส41updatedBy{"id":182,"username":"punwipa.sa"}ข้อมูลผู้แก้ไขล่าสุด42progressBy{"id":182,"username":"punwipa.sa","firstName":"**** ****","lastName":"","userGroupId":2,"userTeamId":3,"role":"agent"}',ข้อมูลผู้ดำเนินการล่าสุด43progressByUserId182ID ผู้ดำเนินการล่าสุด44progressByTeamId3ทีมของผู้ดำเนินการ45progressByGroupId2กลุ่มของผู้ดำเนินการ46caseStatusUpdatedAt2025-10-10 10:39:00วันที่อัปเดตสถานะล่าสุด47statusactiveสถานะการใช้งาน (active)48createdAt2025-10-10 10:39:00วันที่สร้างข้อมูล49updatedAt2025-10-10 10:39:00วันที่อัปเดตข้อมูลล่าสุด50code20251010NL00001รหัสเคสในระบบ
4. ถ้าพบข้อผิดพลาด ดังนี้ ให้ทำการ Roll Back
  1. ตรวจสอบ id ต่างๆ (Field ตัวอักษรสีน้ำเงิน (*) และการหา id จาก input.userName) หากไม่พบข้อมูลในระบบ return 2001 (**หมายเหตุ** เมื่อ input ส่งข้อมูลมาจึงจะตรวจสอบ หากไม่ระบุไม่ต้องตรวจสอบ)
  2. data type ไม่ถูกต้อง return 2002 << กรณีนี้ให้ทำการดักหลังบ้านและ return ใน log
  3. length ของข้อมูลเกินกว่าที่กำหนด return 2003 << กรณีนี้ให้ทำการดักหลังบ้านและ return ใน log
  4. รหัสเคสซ้ำกัน (input.code) return 2004 อื่นๆ อ้างอิงตารางด้านล่างReturn CodeMessageRemark1000Insert/Update Success 2001Field id invalid 2002Data type incorrect 2003Input parameter length too long 2004case code duplicate 9002Error Exception

## Output

| Name | Type | Description | Example |
|---|---|---|---|
| idCase | int | ID ของเคสในระบบ | 3163170 |
| codeCase | string | เลขที่เคสของระบบ Case Management | 20251010NL00001 |
| returnCode | string | ผลลัพธ์การบันทึก/ปรับปรุงข้อมูล | 1000 |
| Message | string | Description | Insert/Update Success |
| processDate | datetime | วันที่/เวลา ดำเนินการ | 2025-10-10 10:42:00 |

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
- [ดึงข้อมูล Running No. จากระบบต้นทาง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1295712852)
- [:](http://wiki.thaisamut.co.thmailto:admin@admin.com)
