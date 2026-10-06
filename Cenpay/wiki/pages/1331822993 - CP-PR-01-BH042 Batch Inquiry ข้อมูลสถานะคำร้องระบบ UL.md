# CP-PR-01-BH042 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL

- **Page ID:** 1331822993
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1331822993
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-09 Process Batch > CP-PR-01-BH042 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL
- **Depth:** 5

---

[ [Overview](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-Overview) ] [ [Protocol](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-Protocol) ] [ [Operation](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-Operation) ] [ [Process](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-Process) ]

## Overview

Inquiry ข้อมูลสถานะคำร้องระบบ UL เพื่อใช้ Sync ข้อมูลกับระบบ Cenpay

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Process

1. Insert ข้อมูล Batch Process ที่ Table : [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)FieldDescriptionValuebatch_codeรหัส BatchFix "BH042"batch_detailรายละเอียด BatchFix "Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL"total_recordจำนวนรายการทั้งหมดNULLprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน ManualNULLparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลNULLstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ ErrorNULLprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดNULLcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดNULLcreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดNULL
2. ดึงข้อมูลคำร้อง โดยมีเงื่อนไขดังนี้
  1. รายการคำร้องต้องเป็นประเภทกรมธรรม์ UL
  2. ประเภทคำร้องต้องเป็น เวนคืนกรมธรรม์ประกันภัย หรือ Free Look
  3. รายการคำร้องที่มีสถานะรายการดังนี้
    1. WAP : รอการจ่าย
    2. WAC : รออนุมัติ CIS
    3. WAV : รอเตรียมจ่าย (ปฏิบัติการ)
    4. APR : บันทึกตรวจสอบ (ปฏิบัติการ)
    5. AP1 : อนุมัติเตรียมจ่ายครั้งที่ 1 (ปฏิบัติการ)
    6. AP2 : อนุมัติเตรียมจ่ายครั้งที่ 2 (ปฏิบัติการ)
    7. APC : ตรวจจ่าย (ฝ่ายบัญชี)
    8. APP : ยืนยันทำจ่าย (ฝ่ายการเงิน)
    9. APF : อนุมัติจ่าย (ฝ่ายการเงิน) <![CDATA[select t1.id, t1.request_no, t1.policy_no from tx_request t1 inner join tx_request_policy t2 on t1.id = t2.tx_request_id where 1 = 1 and t2.policy_type = &#39;U&#39; and t1.request_code in (&#39;S&#39;,&#39;F&#39;) and t1.status_code in (&#39;WAP&#39;,&#39;WAC&#39;,&#39;WAV&#39;,&#39;APR&#39;,&#39;AP1&#39;,&#39;AP2&#39;,&#39;APC&#39;,&#39;APP&#39;,&#39;APF&#39;)]]>
    - กรณี **พบ** ข้อมูลตามเงื่อนไขการค้นหา ให้ดำเนินการดังนี้ รายละเอียด เรียกใช้ [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](/pages/viewpage.action?pageId=1332478031) จากระบบ UL โดยส่ง Input เป็น List ดังนี้ **Name**Value**List**request_notx_request.request_nopolicy_notx_request.policy_noกรณี Output จาก [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031) **ไม่เป็น null** ให้ดำเนินการดังนี้ ดำเนินการตรวจสอบ รหัสสถานะรายการระบบ UL ครั้งละ 1 รายการจาก List<Output> จนครบทุกรายการ ดังนี้กรณี Output.statusCode มีสถานะรายการดังนี้H11 : ปฏิเสธ (Reject)P17 : การจ่ายเงินสำเร็จ (Payment Successful)P18 : การจ่ายเงินไม่สำเร็จ (Payment failed)H20 : ยกเลิก (Cancel)R27 : รอการแก้ไขธุรกรรม ให้ดำเนินการ Update สถานะคำร้องโดยเรียกใช้ [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293) และส่ง Input ดังนี้NameValuerequestNoOutput.request_nostatusCodeตรวจสอบ Output.statusCodeกรณี กรณีเท่ากับ H11 : ปฏิเสธ (Reject) ให้ส่ง "RJT" กรณีเท่ากับ P17 : การจ่ายเงินสำเร็จ (Payment Successful) ให้ส่ง "PMS" กรณีเท่ากับ P18 : การจ่ายเงินไม่สำเร็จ (Payment failed) ให้ส่ง "FLT" กรณีเท่ากับ H20 : ยกเลิก (Cancel) ให้ส่ง "CAN" กรณีเท่ากับ H27 : รอการแก้ไขธุรกรรม และ Output.sendEditBranchFlag เท่ากับ "B" ให้ส่ง "REJ" remarkOutput.remarkcreatedByOutput.createdBycreatedByFullnameให้ส่งข้อมูล ชื่อ-นามสกุลผู้ใช้งานระบบ โดยดึงข้อมูลจากระบบ NBS ตามเงื่อนไขดังนี้ <![CDATA[select t1.username || &#39; &#39;|| t1.fullname as createdByFullname from users t1 where t1.users = Output.createdBy]]> createdDateOutput.createdDateให้ดำเนินการเก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น เพื่อใช้ในขั้นตอน [ส่ง Email แจ้งเตือนสาขา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1331822993#CP-PR-01-BH002BatchInquiry%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AUL-A_SendEmail)ส่งข้อมูลเข้าระบบ Case Management ตามเงื่อนไขดังนี้ตรวจสอบ Output.statusCodeกรณี กรณีเท่ากับ H11 : ปฏิเสธ (Reject) หรือ P17 : การจ่ายเงินสำเร็จ (Payment Successful) หรือ P18 : การจ่ายเงินไม่สำเร็จ (Payment failed) หรือ H20 : ยกเลิก (Cancel) ให้ส่งข้อมูลเข้าระบบ Case Management ดังนี้ รายละเอียดการส่งข้อมูลเข้าระบบ Case Management ให้เรียกใช้ [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838) และให้ส่ง Input ดังนี้InputDescriptionValuecaseCodeรหัสเหตุการณ์ตรวจสอบ Output.statusCodeกรณีเท่ากับ H11 : ปฏิเสธ (Reject) หรือ H20 : ยกเลิก (Cancel) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_CANCEL"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_CANCEL" กรณีเท่ากับ P17 : การจ่ายเงินสำเร็จ (Payment Successful) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_PAID_SUCCESS"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_PAID_SUCCESS" กรณีเท่ากับ P18 : การจ่ายเงินไม่สำเร็จ (Payment failed) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_PAID_FAIL"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_PAID_FAIL" requestIdรหัส [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id[tx_request.id](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_No2) จากขั้นตอน ดึงข้อมูลคำร้องกรณีส่งข้อมูลคำร้องให้ระบบ Case management ไม่สำเร็จให้ดำเนินการดังนี้บันทึกข้อมูล Request Problem Tracking โดยใช้ Process [02-05-10_01 บันทึกข้อมูล Problem Tracking](/pages/viewpage.action?pageId=1319601299) และส่ง Input ดังนี้InputvalueDesciptionrequestId[tx_request](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_No2).idPK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)processCodeFix "CM"รหัสอ้างอิง process ที่ดำเนินการไม่สำเร็จcreatedByFix "System"ผู้สร้างข้อมูล กรณี Output.statusCode อื่นๆให้ไปทำขั้นตอน [ดำเนินการตรวจสอบ รหัสสถานะรายการระบบ UL ครั้งละ 1 รายการจาก List<Output> จนครบทุกรายการ](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_Loop) เนื่องจากไม่ต้อง update สถานะคำร้องที่ระบบ Cenpay กรณี ดำเนินการตรวจสอบ รหัสสถานะรายการระบบ UL ครบทุกรายการ ส่ง Email แจ้งเตือนสาขา โดยเงื่อนไขดังนี้ตรวจสอบ statusCode จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)[http://wiki.thaisamut.co.th#A_SaveListObject](http://wiki.thaisamut.co.th#A_SaveListObject)มีสถานะรายการดังนี้REJ : ส่งกลับแก้ไข CAN : ยกเลิกRJT : ปฏิเสธ ให้ดำเนินการส่ง Email แจ้งเตือนสาขา โดยการ Grouping ข้อมูลแยกตาม requestCode และ statusCode ต่างๆ โดยใช้ Process [Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฎิเศษ หรือ ยกเลิกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1322353240) และส่ง Input ต่างๆ ดังนี้NameValuerequestCodeตรวจสอบ alteration_type จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)กรณี กรณีเท่ากับ 14 (freelook) ให้ส่ง "F" กรณีเท่ากับ 16 (surender) ให้ส่ง "S"statusCodeตรวจสอบ statusCode จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)กรณี กรณีเท่ากับ H11 : ปฏิเสธ (Reject) ให้ส่ง "RJT" กรณีเท่ากับ H20 : ยกเลิก (Cancel) ให้ส่ง "CAN" กรณีเท่ากับ H27 : รอการแก้ไขธุรกรรม ให้ส่ง "REJ" **List<ข้อมูลคำร้อง>**policyNopolicyNo จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)remarkremark จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)createdDatecreatedDate จากขั้นตอน [เก็บข้อมูล Output ที่ใช้ในขั้นตอน Update สถานะคำร้อง ลง Memory เป็น List Object](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_ListObject)ให้ทำขั้นตอน [ข้อ 3 Update ข้อมูล Batch Process ที่ Table : lg_batch_process](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_UpdateBatch) กรณี Output จาก [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031) **เป็น null หรือ Error** ให้ดำเนินการดังนี้ทำขั้นตอน [ข้อ 3 Update ข้อมูล Batch Process ที่ Table : lg_batch_process](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_UpdateBatch)
    - กรณี**ไม่พบ** ข้อมูลตามเงื่อนไขการค้นหาให้ดำเนินการดังนี้
      1. ทำขั้นตอน [ข้อ 3 Update ข้อมูล Batch Process ที่ Table : lg_batch_process](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_UpdateBatch)
3. Update ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuetotal_recordจำนวนรายการทั้งหมด[Record Count](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_No2) จากขั้นตอน [ดึงข้อมูลคำร้อง](#CP-PR-01-BH042BatchInquiryข้อมูลสถานะคำร้องระบบUL-A_Select)statusสถานะการทำงานของ Batchกรณี Output จาก [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](/pages/viewpage.action?pageId=1332478031) **เป็น null หรือ Error** บันทึก Fกรณีสำเร็จ บันทึก Serror_messageรายละเอียดของการทำงานที่ Errorกรณี Error บันทึก Exception Messageprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"

---

## Hyperlinks บนหน้านี้

- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031)
- [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031)
- [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)
- [ส่ง Email แจ้งเตือนสาขา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1331822993#CP-PR-01-BH002BatchInquiry%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AUL-A_SendEmail)
- [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [02-05-10_01 บันทึกข้อมูล Problem Tracking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319601299)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [http://wiki.thaisamut.co.th#A_SaveListObject](http://wiki.thaisamut.co.th#A_SaveListObject)
- [Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฎิเศษ หรือ ยกเลิกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1322353240)
- [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031)
