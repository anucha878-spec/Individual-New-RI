# 02-05-19 Process Update สถานะรายการคำร้องและส่งข้อมูลเข้าระบบ Case Management สำหรับกรมธรรม์ สามัญ, อุตสาหกรรม ปช, อุตสาหกรรม ขพ, และอุบัติเหตุ

- **Page ID:** 1347388024
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1347388024
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-19 Process Update สถานะรายการคำร้องและส่งข้อมูลเข้าระบบ Case Management สำหรับกรมธรรม์ สามัญ, อุตสาหกรรม ปช, อุตสาหกรรม ขพ, และอุบัติเหตุ
- **Depth:** 4

---

[ [Overview](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-Overview) ] [ [Protocol](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-Protocol) ] [ [Operation](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-Operation) ] [ [Input](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-Input) ] [ [Process](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-Process) ]

## Overview

เพื่อ update สถานะรายการคำร้องและส่งข้อมูลเข้าระบบ Case Management สำหรับกรมธรรม์ สามัญ, อุตสาหกรรม ปช, อุตสาหกรรม ขพ, และอุบัติเหตุ ใช้สำหรับคำร้องเวนคืน และ Free Look

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

1. Update สถานะรายการคำร้อง โดยเรียกใช้ [Process Update สถานะรายการคำร้อง](/pages/viewpage.action?pageId=1310982293) และให้ส่ง Input ดังนี้InputDescriptionValuerequestNoเลขที่รับเรื่อง[Input.requestNo](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-requestNo)statusCodeสถานะรายการ[Input.statusCode](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-statusCode)remarkหมายเหตุกำกับรายการ[Input.remark](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-remark)createdByผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co)[Input.createdBy](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-createdBy)createdByFullnameผู้สร้างข้อมูล (เก็บ fullname ที่ใช้ Login เข้าระบบ เช่น สมชาย ใจดี)[Input.createdByFullname](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-createdByFullname)createdDateวันที่และเวลาสร้างข้อมูล[Input.createdDate](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-createdDate)
2. ส่งข้อมูลเข้าระบบ AS400 ตามเงื่อนไขดังนี้
  1. ตรวจสอบ [Input.statusCode](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-statusCode) กรณีที่เป็น**SPP : ยกเลิกรายการจ่าย**
    1. ให้ดำเนินการเรียกใช้ [FS-05-01-06_02_01-3 ยกเลิกคำร้องระบบ AS400](/pages/viewpage.action?pageId=1318125633) หมายเหตุ การหาข้อมูล tx_request.id สามารถค้นหาด้วยเงื่อนไข [tx_request](/display/RDSCPENH/03_01+tx_request).requestNo = [Input.requestNo](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-requestNo)
3. ส่งข้อมูลเข้าระบบ Case Management ตามเงื่อนไขดังนี้
  1. ดึงข้อมูลคำร้องสำหรับ mapping ข้อมูล Input ตาม Table ต่างๆดังนี้
    - DB: [benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)TableCondition[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).request_no = [Input.requestNo](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-requestNo)[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy)[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).tx_request_id = [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id
    1. ตรวจสอบ ประเภทกรมธรรม์ [tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).policy_type
      - กรณี เท่ากับ O: สามัญ, I : อุตสาหกรรม ปช, G : อุตสาหกรรม ขพ, P : และอุบัติเหตุ ให้ดำเนินการข้อถัดไป
      - กรณี อื่นๆ ไม่ต้อง ส่งข้อมูลเข้าระบบ Case Management
    2. ตรวจสอบ สถานะรายการ[Input.statusCode](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-statusCode)
      - กรณี เท่ากับ **PMS : จ่ายสำเร็จ** หรือ **SPP : ยกเลิกการจ่าย**หรือ **FLT : จ่ายไม่สำเร็จ**
      - กรณี อื่นๆ ไม่ต้อง ส่งข้อมูลเข้าระบบ Case Management
    3. กรณีตรวจสอบ **ประเภทกรมธรรม์ และ****สถานะรายการ ผ่าน**
      1. ให้ส่งข้อมูลเข้าระบบ Case Management โดยเรียกใช้ [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838) และให้ส่ง Input ดังนี้InputDescriptionValuecaseCodeรหัสเหตุการณ์ตรวจสอบ [Input.statusCode](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-statusCode)กรณีเท่ากับ **PMS : จ่ายสำเร็จ**ตรวจสอบ [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).request_codeกรณี กรณีเท่ากับ F (คำร้อง Free Look) ให้ระบุ caseCode = "FREE_PAID_SUCCESS"กรณี กรณีเท่ากับ S (คำร้องเวนคืนกรมธรรม์) ให้ระบุ caseCode = "SUR_PAID_SUCCESS"กรณี กรณีเท่ากับ R (คำร้องขอรับเงินผลประโยชน์ค้างรับ) ให้ระบุ caseCode = "REP_PAID_SUCCESS"กรณีเท่ากับ **SPP : ยกเลิกการจ่าย**ตรวจสอบ [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).request_codeกรณี กรณีเท่ากับ F (คำร้อง Free Look) ให้ระบุ caseCode = "FREE_CANCEL"กรณี กรณีเท่ากับ S (คำร้องเวนคืนกรมธรรม์) ให้ระบุ caseCode = "SUR_CANCEL"กรณี กรณีเท่ากับ R (คำร้องขอรับเงินผลประโยชน์ค้างรับ) ให้ระบุ caseCode = "REP_CANCEL"กรณีเท่ากับ **FLT : จ่ายไม่สำเร็จ**ตรวจสอบ [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).request_codeกรณี กรณีเท่ากับ F (คำร้อง Free Look) ให้ระบุ caseCode = "FREE_PAID_FAIL"กรณี กรณีเท่ากับ S (คำร้องเวนคืนกรมธรรม์) ให้ระบุ caseCode = "SUR_PAID_FAIL"กรณี กรณีเท่ากับ R (คำร้องขอรับเงินผลประโยชน์ค้างรับ) ให้ระบุ caseCode = "REP_PAID_FAIL"requestIdรหัส [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id
      - กรณีส่งข้อมูลคำร้องให้ระบบ Case Management ไม่สำเร็จให้ดำเนินการดังนี้
        1. บันทึกข้อมูล Request Problem Tracking โดยใช้ Process [02-05-10_01 บันทึกข้อมูล Problem Tracking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319601299) และส่ง Input ดังนี้InputvalueDesciptionrequestId[tx_request](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332970430#CP-PR-01-BH002-1%E0%B8%9E%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%87%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%82%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2-A_No2).idPK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)processCodeFix "CM"รหัสอ้างอิง process ที่ดำเนินการไม่สำเร็จcreatedBy[Input.createdBy](#id-02-05-19ProcessUpdateสถานะรายการคำร้องและส่งข้อมูลเข้าระบบCaseManagementสำหรับกรมธรรม์สามัญ,อุตสาหกรรมปช,อุตสาหกรรมขพ,และอุบัติเหตุ-createdBy)ผู้สร้างข้อมูล

---

## Hyperlinks บนหน้านี้

- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)
- [FS-05-01-06_02_01-3 ยกเลิกคำร้องระบบ AS400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1318125633)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [02-05-10_01 บันทึกข้อมูล Problem Tracking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319601299)
- [tx_request](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332970430#CP-PR-01-BH002-1%E0%B8%9E%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%87%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%82%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2-A_No2)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
