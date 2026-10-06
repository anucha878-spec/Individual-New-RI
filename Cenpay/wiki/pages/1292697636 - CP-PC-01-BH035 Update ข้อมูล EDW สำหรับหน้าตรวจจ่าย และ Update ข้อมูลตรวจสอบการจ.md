# CP-PC-01-BH035 Update ข้อมูล EDW สำหรับหน้าตรวจจ่าย และ Update ข้อมูลตรวจสอบการจ่ายเงินให้กับทีมบัญชีตรวจสอบต่อไป

- **Page ID:** 1292697636
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1292697636
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-01 กระบวนการ Batch > CP-PC-01-BH035 Update ข้อมูล EDW สำหรับหน้าตรวจจ่าย และ Update ข้อมูลตรวจสอบการจ่ายเงินให้กับทีมบัญชีตรวจสอบต่อไป
- **Depth:** 5

---

#### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch Update ข้อมูล EDW สำหรับหน้าตรวจจ่าย และ Update ข้อมูลตรวจสอบการจ่ายเงินให้กับทีมบัญชีตรวจสอบต่อไป |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | เพื่อใช้เป็นข้อมูลสำหรับจัดการรายการบนหน้าจอ [FS-03-01-01 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507902) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกๆ 5 นาที |
| 4 | ข้อมูลตั้งต้น(Input) | เป็นรายการหลังจากการอนุมัติเตรียมจ่ายจากทางปฎิบัติการ โดยการอนุมัติแล้วในรอบที่ 2 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายการข้อมูลที่พร้อมสำหรับการตรวจจ่ายฝ่ายบัญชี |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**เป็นรายการจ่ายหลังจากการอนุมัติ 2 ที่ฝ่ายปฎิบัติการได้ทำการอนุมัติข้อมูล**Process Description (กระบวนการ)**เริ่มบันทึกข้อมูล Log : Process ที่ lg_batch_process Mapping FieldDescriptionValuebatch_codeรหัส BatchFix "BH035"total_recordจำนวนรายการทั้งหมดไม่ระบุข้อมูลprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน Manualไม่ระบุข้อมูลparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลไม่ระบุข้อมูลstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" และบันทึกข้อมูลที่ lg_batch_trans ดังนี้ Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนFix "UPDATE_EDW"policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" ดึงข้อมูลที่่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account) ด้วยเงื่อนไข batch_status = 'PSS' จากนั้น Update ข้อมูล Log ดังนี้ กรณีดึงข้อมูลสำเร็จ และมีจำนวนมากกว่า 0 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดจำนวนข้อมูลทั้งหมดที่ดึงได้updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" กรณีดึงข้อมูลสำเร็จ จำนวนข้อมูล เท่ากับ 0 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดจำนวนข้อมูลทั้งหมดที่ดึงได้statusสถานะการทำงานของ BatchFix "S"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที กรณีดึงข้อมูลไม่สำเร็จ 1. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "F"error_messageรายละเอียดของการทำงานที่ Errorระบุ error ตามที่ได้process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"2. Update : lg_batch_processFieldDescriptionValuestatusสถานะการทำงานของ BatchFix "F"error_messageรายละเอียดของการทำงานที่ ErrorFix "ไม่สามารถดึงข้อมูลเพื่อใช้ในการ Update สถานะ EDW ได้"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"จากนั้นให้จบกระบวนการทันที วนจัดการข้อมูลทั้งหมดที่ได้จากข้อ 2 ตามกระบวนการดังนี้**สร้าง Log Batch Trans ตามรายการธุรกรรม** โดยเรียก Insert ข้อมูล lg_batch_trans ดังนี้ Mapping FieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idmaster_ref_noเลขธุรกรรม หรือขั้นตอนapprove_batch_no ที่ได้จากข้อ 2policy_typeประเภทกรมธรรม์ไม่ระบุข้อมูลpolicy_noเลขกรมธรรม์ไม่ระบุข้อมูลstatusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" **ดีงข้อมูลจาก WS** โดยการเรียก[WS สำหรับดึงสถานะ ETL ตอนประมวลผลข้อมูลบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284309020) และส่งข้อมูลใช้ในการค้นหาดังนี้NameDescriptionValuestatusNameชื่อระบบFix "CENPAY"systemKeyKey ในการประมวลผลที่ระบบ ETL[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).edw_system_key ที่ได้จากข้อ 2**ถ้าพบว่าข้อมูล status จากข้อ b ที่ได้ มีสถานะดังนี้** ให้ทำการ Update ข้อมูลแยกตามกรณีstatus in ('LANDING', 'WAITETL', 'PREPROCESS_ETL', 'EXTRACT_IMPORT', 'TRANSFORM', 'JOINAGG', 'RECONCILE', 'ACCAPPROVED', 'SENDTOADW') Update ข้อมูล 1. ให้ Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValueedw_statusสถานะระบบ EDWstatus ที่ได้จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"2. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateerror_messageรายละเอียดของการทำงานที่ ErrorFix "รายการยังอยู่ในระหว่างการประมวลผล EDW"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3. เริ่มทำกระบวนการวนข้อมูลใหม่ สำหรับรายการถัดไป status in ('RECONCILE_FAILED', 'ERROR') Update ข้อมูล ปรับแก้ไขเพิ่มเติม โดย ariya.pi เมื่อ 09/01/2569**[ถ้า [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code not in ('NL_ACC_03','NL_ACC_04','NL_ACC_05','NL_ACC_06')]** ให้ Update ข้อมูลที่ [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve) โดย Update ข้อมูลดังนี้ (ด้วยเงื่อนไข [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve).approve_batch_no = [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_no)FieldDescriptionValuereference_number_edwReference Number EDWreferenceNumber จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"1. ให้ Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValuebatch_statusสถานะการทำรายการ (Batch Level)Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)reconcile_statusสถานะ Reconcile[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).source_amount กับยอดของ edwReconcileAmount จากข้อ b - ถ้าเท่ากันให้ใช้ข้อมูล "T" - ถ้าไม่เท่ากันให้ใช้ข้อมูล "F"reference_numberReference Number EDWreferenceNumber จากข้อ bdr_amountDr.drAmount จากข้อ bcr_amountCr.crAmount จากข้อ bedw_amountยอดเงินที่ได้จากทางบัญชีedwReconcileAmount จากข้อ bedw_dashboard_idDashboard ID สำหรับอ้างที่ระบบ EDWdashboardId จากข้อ bedw_statusสถานะจากระบบ EDWstatus จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"2. **[ถ้า [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code not in ('NL_ACC_03','NL_ACC_04','NL_ACC_05','NL_ACC_06')]** วนข้อมูลใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ภายใต้ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account) ให้ Update ข้อมูลที่ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) โดย Update ข้อมูลดังนี้FieldDescriptionValueverify_typeตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง)Fix "F"transaction_statusสถานะการทำรายการ (Transaction Level)Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)incorrect_causeสาเหตุการไม่อนุมัติFix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)updated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"3. Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateerror_messageรายละเอียดของการทำงานที่ ErrorFix "รายการจ่ายมีปัญหา ข้อมูลบัญชีไม่ถูกต้อง"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"ปรับเพิ่มเติมสำหรับหน้า Support แก้ไขรายการข้อผิดพลาด EDW โดย ariya.pi เมื่อ 19/01/25694. บันทึกข้อมูลลง [tx_pay_acc_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_pay_acc_problem_tracking)ด้วยข้อมูลดังนี้FieldDescriptionValuepayment_account_idอ้างอิง Running ID จาก tx_payment_account[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).idapprove_batch_noอ้างอิงเลข Batch ปฏิบัติการ[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_noevent_codeอ้างอิง Event Code บัญชี[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_codeaccount_typeอ้างอิงประเภทการทรายการ Revert หรือไม่'' ค่าว่างproblem_causeประเภทของปัญหาFix 'EES'problem_statusสถานะการแก้ไขปัญหาFix 'WFX'reference_numberReference No EDW ของตัวเดิมที่มีปัญหาไม่ระบุข้อมูลcreated_dateวันที่บันทึกข้อผิดพลาดsystemDatecreated_byผู้บันทึกข้อผิดพลาดFix "SYSTEM"5. เริ่มทำกระบวนการวนข้อมูลใหม่ สำหรับรายการถัดไป status in ('WAIT_SENDTOADW') Update ข้อมูล ปรับแก้ไขเพิ่มเติม โดย ariya.pi เมื่อ 09/01/2569**[ถ้า [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code not in ('NL_ACC_03','NL_ACC_04','NL_ACC_05','NL_ACC_06')]** ให้ Update ข้อมูลที่ [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve) โดย Update ข้อมูลดังนี้ (ด้วยเงื่อนไข [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve).approve_batch_no = [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_no) FieldDescriptionValuereference_number_edwReference Number EDWreferenceNumber จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"1. ตรวจข้อมูล reconcile โดย [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).source_amount กับยอดของ edwReconcileAmount จากข้อ b2. กรณีที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).source_amount **ไม่เท่ากับ** edwReconcileAmount จากข้อ b2.1 ให้ Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValuebatch_statusสถานะการทำรายการ (Batch Level)Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)reconcile_statusสถานะ ReconcileFix "F"reference_numberReference Number EDWreferenceNumber จากข้อ bdr_amountDr.drAmount จากข้อ bcr_amountCr.crAmount จากข้อ bedw_amountยอดเงินที่ได้จากทางบัญชีedwReconcileAmount จากข้อ bedw_dashboard_idDashboard ID สำหรับอ้างที่ระบบ EDWdashboardId จากข้อ bedw_statusสถานะจากระบบ EDWstatus จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"2.2 **[ถ้า [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code not in ('NL_ACC_03','NL_ACC_04','NL_ACC_05','NL_ACC_06')]** วนข้อมูลใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ภายใต้ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account) ให้ Update ข้อมูลที่ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) โดย Update ข้อมูลดังนี้FieldDescriptionValueverify_typeตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง)Fix "F"transaction_statusสถานะการทำรายการ (Transaction Level)Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)incorrect_causeสาเหตุการไม่อนุมัติFix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง)updated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"2.3 Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateerror_messageรายละเอียดของการทำงานที่ ErrorFix "รายการจ่ายมีปัญหา ข้อมูลบัญชีไม่ถูกต้อง"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"ปรับเพิ่มเติมสำหรับหน้า Support แก้ไขรายการข้อผิดพลาด EDW โดย ariya.pi เมื่อ 19/01/25692.4 บันทึกข้อมูลลง [tx_pay_acc_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_pay_acc_problem_tracking)ด้วยข้อมูลดังนี้FieldDescriptionValuepayment_account_idอ้างอิง Running ID จาก tx_payment_account[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).idapprove_batch_noอ้างอิงเลข Batch ปฏิบัติการ[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_noevent_codeอ้างอิง Event Code บัญชี[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_codeaccount_typeอ้างอิงประเภทการทรายการ Revert หรือไม่'' ค่าว่างproblem_causeประเภทของปัญหาFix 'CRF'problem_statusสถานะการแก้ไขปัญหาFix 'WFX'reference_numberReference No EDW ของตัวเดิมที่มีปัญหาไม่ระบุข้อมูลcreated_dateวันที่บันทึกข้อผิดพลาดsystemDatecreated_byผู้บันทึกข้อผิดพลาดFix "SYSTEM"2.5 เริ่มทำกระบวนการวนข้อมูลใหม่ สำหรับรายการถัดไป3. กรณีที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).source_amount **เท่ากับ** edwReconcileAmount จากข้อ b3.1 **[ถ้า [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code not in ('NL_ACC_03','NL_ACC_04','NL_ACC_05','NL_ACC_06')]** วนข้อมูลใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ภายใต้ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account) โดย3.1.1 เรียก WS : [01 WS สำหรับดึงข้อมูลผู้เอาประกันภัย ข้อมูลบัญชีรับผลประโยชน์ ข้อมูลที่อยู่ติดต่อระดับกรมธรรม์ เบอร์ติดต่อ และข้อมูลผู้รับผลประโยชน์ ที่ระบบ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507270) โดยส่งข้อมูลดังนี้NameDescriptionValuepolicyNoเลขกรมธรรม์policyNo จากข้อมูล payment_id ที่อยู่ใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ไปหาที่ [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)transactionTypeข้อมูลประเภทบัญชีFix "BNF"addressTypeข้อมูลประเภทที่อยู่Fix "CON"3.1.2 Insert : lg_batch_detailFieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idbatch_trans_idid ของ Transactionlg_batch_trans.idprocess_step_nameชื่อขั้นตอน[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).oper_ref_no+" \| COMPARE CIS DATA"process_step_detailรายละเอียดขั้นตอนFix "ตรวจสอบข้อมูลบัญชีรับเงินกับข้อมูลที่ระบบ CIS"statusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.1.3 เทียบข้อมูลจาก [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment) กับ ข้อมูลที่ได้จาก WSถ้า [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payee_title = payeeTitleand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payee_first_name = payeeFirstNameand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payee_last_name = payeeLastName เป็น False ให้ Update ข้อมูลที่ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) โดย Update ข้อมูลดังนี้FieldDescriptionValueverify_typeตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง)Fix "F"transaction_statusสถานะการทำรายการ (Transaction Level)Fix "INC" (เงื่อนไขไม่ถูกต้อง)incorrect_causeสาเหตุการไม่อนุมัติFix "IRC" (ชื่อ-สกุล ผู้รับเงินไม่ถูกต้อง)verify_status_codeสถานะการตรวจสอบFix "WAV" (รอการตรวจสอบ)updated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ชื่อ-สกุล ผู้รับเงินไม่ถูกต้อง"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.1.4 ถ้าผ่านการตรวจสอบข้อ 3.1.3 ให้ตรวจสอบเพิ่มว่า [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_channel_code not in ('CC','CB') จะต้องตรวจสอบเพิ่มเติมข้อมูลที่ได้จาก WS – ปรับเพิ่มเติมโดย ariya.pi เมื่อ 27/02/2569 [https://redmine.ochi.link/issues/55234](https://redmine.ochi.link/issues/55234)ถ้า [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_channel_code = paymentChannelCode --> (กรณีที่ [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_channel_code <> 'TE' ให้ตรวจเพิ่มด้วยว่า [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_channel_code = paymentChannelCode) ปรับแก้โดย ariya.pi เมื่อ 08/01/2569and [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).bank_acc_no = bankAccNoand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).bank_acc_name = bankAccNameand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).bank_acc_issuer = bankAccIssuerand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).bank_acc_branch = bankAccBranchand [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).account_relation_name = accountRelationName เป็น False ให้ Update ข้อมูลที่ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) โดย Update ข้อมูลดังนี้FieldDescriptionValueverify_typeตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง)Fix "F"transaction_statusสถานะการทำรายการ (Transaction Level)Fix "INC" (เงื่อนไขไม่ถูกต้อง)incorrect_causeสาเหตุการไม่อนุมัติFix "IBA" --> "IAN" (ข้อมูลบัญชีธนาคารไม่ถูกต้อง) ปรับโดย ariya.pi เมื่อ 08/01/2569verify_status_codeสถานะการตรวจสอบFix "WAV" (รอการตรวจสอบ)updated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ข้อมูลบัญชีธนาคารไม่ถูกต้อง"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.1.5 ถ้าผ่านการตรวจสอบข้อ 3.1.4 Update ข้อมูลที่ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) โดย Update ข้อมูลดังนี้FieldDescriptionValueverify_typeตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง)Fix "T"transaction_statusสถานะการทำรายการ (Transaction Level)Fix "COR" (ถูกต้อง)verify_status_codeสถานะการตรวจสอบFix "WAV" (รอการตรวจสอบ)updated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ถูกต้อง"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.1.6 วนข้อมูลใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ถัดไปตั้งแต่ข้อ 3.1.1 จนครบทุกรายการ3.2 เมื่อวนจนครบ Insert : lg_batch_detailFieldDescriptionValuebatch_process_idid ของ Batchlg_batch_process.idbatch_trans_idid ของ Transactionlg_batch_trans.idprocess_step_nameชื่อขั้นตอนFix "UPDATE AC BATCH"process_step_detailรายละเอียดขั้นตอนFix "ตรวจสอบข้อมูลภายใต้ Batch เพื่อ Update Batch Status"statusสถานะการทำงานFix "I"error_messageรายละเอียดของการทำงานที่ Errorไม่ระบุข้อมูลprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดไม่ระบุข้อมูลcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDatecreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.2.1 ตรวจสอบ [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail).transaction_status แบ่งตามกรณี3.2.1.1 ทุก transaction_status = 'COR' Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValuebatch_statusสถานะการทำรายการ (Batch Level)Fix "COR" (ถูกต้อง)reconcile_statusสถานะ ReconcileFix "T"reference_numberReference Number EDWreferenceNumber จากข้อ baccount_approve_statusสถานะอนุมัติรายการFix "WAV" (รอตรวจจ่าย)dr_amountDr.drAmount จากข้อ bcr_amountCr.crAmount จากข้อ bedw_amountยอดเงินที่ได้จากทางบัญชีedwReconcileAmount จากข้อ bedw_dashboard_idDashboard ID สำหรับอ้างที่ระบบ EDWdashboardId จากข้อ bedw_statusสถานะจากระบบ EDWstatus จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ถูกต้อง"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.2.1.2 ทุก transaction_status <> 'COR' Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValuebatch_statusสถานะการทำรายการ (Batch Level)Fix "ICD" (ข้อมูลไม่ถูกต้อง)reconcile_statusสถานะ ReconcileFix "T"reference_numberReference Number EDWreferenceNumber จากข้อ baccount_approve_statusสถานะอนุมัติรายการFix "WAV" (รอตรวจจ่าย)dr_amountDr.drAmount จากข้อ bcr_amountCr.crAmount จากข้อ bedw_amountยอดเงินที่ได้จากทางบัญชีedwReconcileAmount จากข้อ bedw_dashboard_idDashboard ID สำหรับอ้างที่ระบบ EDWdashboardId จากข้อ bedw_statusสถานะจากระบบ EDWstatus จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ข้อมูลไม่ถูกต้อง"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.2.1.3 มีทั้ง transaction_status = 'COR' และ transaction_status <> 'COR' Update ข้อมูลที่ [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)โดย Update ข้อมูลดังนี้FieldDescriptionValuebatch_statusสถานะการทำรายการ (Batch Level)Fix "PTC" (ถูกต้องบางส่วน)reconcile_statusสถานะ ReconcileFix "T"reference_numberReference Number EDWreferenceNumber จากข้อ baccount_approve_statusสถานะอนุมัติรายการFix "WAV" (รอตรวจจ่าย)dr_amountDr.drAmount จากข้อ bcr_amountCr.crAmount จากข้อ bedw_amountยอดเงินที่ได้จากทางบัญชีedwReconcileAmount จากข้อ bedw_dashboard_idDashboard ID สำหรับอ้างที่ระบบ EDWdashboardId จากข้อ bedw_statusสถานะจากระบบ EDWstatus จากข้อ bupdated_dateวันที่แก้ไขรายการsystemDateupdated_byผู้แก้ไขรายการFix "SYSTEM"Update : lg_batch_detailFieldDescriptionValuestatusสถานะการทำงานFix "S"error_messageรายละเอียดของการทำงานที่ ErrorFix "ถูกต้องบางส่วน"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"3.2.2 Update : lg_batch_transFieldDescriptionValuestatusสถานะการทำงานFix "S"process_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateerror_messageรายละเอียดของการทำงานที่ ErrorFix "รายการ Batch เข้าสู่สถานะ รอตรวจจ่าย"updated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"4. เริ่มทำกระบวนการวนข้อมูลใหม่ สำหรับรายการถัดไป เมื่อทำครบทุกรายการ Update ข้อมูล batch_log_process (benefitbank) ดังนี้ Update Batch FieldDescriptionValuestatusสถานะการทำงานของ BatchFix "S"process_end_dateระยะเวลาที่ Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM" |
| Field | Description | Value |
| batch_code | รหัส Batch | Fix "BH035" |
| total_record | จำนวนรายการทั้งหมด | ไม่ระบุข้อมูล |
| process_source | Batch Run โดยวิธี Auto (A) หรือ Manual (M) | Fix "A" |
| branch_code | สาขาที่รัน Manual | ไม่ระบุข้อมูล |
| parameter_url | parameter ที่ระบุเพื่อส่งให้ batch ประมวลผล | ไม่ระบุข้อมูล |
| status | สถานะการทำงานของ Batch | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| master_ref_no | เลขธุรกรรม หรือขั้นตอน | Fix "UPDATE_EDW" |
| policy_type | ประเภทกรมธรรม์ | ไม่ระบุข้อมูล |
| policy_no | เลขกรมธรรม์ | ไม่ระบุข้อมูล |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | จำนวนข้อมูลทั้งหมดที่ดึงได้ |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | จำนวนข้อมูลทั้งหมดที่ดึงได้ |
| status | สถานะการทำงานของ Batch | Fix "S" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | ระบุ error ตามที่ได้ |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงานของ Batch | Fix "F" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ไม่สามารถดึงข้อมูลเพื่อใช้ในการ Update สถานะ EDW ได้" |
| process_end_date | ระยะเวลาที่ Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| master_ref_no | เลขธุรกรรม หรือขั้นตอน | approve_batch_no ที่ได้จากข้อ 2 |
| policy_type | ประเภทกรมธรรม์ | ไม่ระบุข้อมูล |
| policy_no | เลขกรมธรรม์ | ไม่ระบุข้อมูล |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Name | Description | Value |
| statusName | ชื่อระบบ | Fix "CENPAY" |
| systemKey | Key ในการประมวลผลที่ระบบ ETL | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).edw_system_key ที่ได้จากข้อ 2 |
| Field | Description | Value |
| edw_status | สถานะระบบ EDW | status ที่ได้จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "รายการยังอยู่ในระหว่างการประมวลผล EDW" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| reference_number_edw | Reference Number EDW | referenceNumber จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| batch_status | สถานะการทำรายการ (Batch Level) | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| reconcile_status | สถานะ Reconcile | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).source_amount กับยอดของ edwReconcileAmount จากข้อ b - ถ้าเท่ากันให้ใช้ข้อมูล "T" - ถ้าไม่เท่ากันให้ใช้ข้อมูล "F" |
| reference_number | Reference Number EDW | referenceNumber จากข้อ b |
| dr_amount | Dr. | drAmount จากข้อ b |
| cr_amount | Cr. | crAmount จากข้อ b |
| edw_amount | ยอดเงินที่ได้จากทางบัญชี | edwReconcileAmount จากข้อ b |
| edw_dashboard_id | Dashboard ID สำหรับอ้างที่ระบบ EDW | dashboardId จากข้อ b |
| edw_status | สถานะจากระบบ EDW | status จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| verify_type | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) | Fix "F" |
| transaction_status | สถานะการทำรายการ (Transaction Level) | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| incorrect_cause | สาเหตุการไม่อนุมัติ | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "รายการจ่ายมีปัญหา ข้อมูลบัญชีไม่ถูกต้อง" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| payment_account_id | อ้างอิง Running ID จาก tx_payment_account | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).id |
| approve_batch_no | อ้างอิงเลข Batch ปฏิบัติการ | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_no |
| event_code | อ้างอิง Event Code บัญชี | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code |
| account_type | อ้างอิงประเภทการทรายการ Revert หรือไม่ | '' ค่าว่าง |
| problem_cause | ประเภทของปัญหา | Fix 'EES' |
| problem_status | สถานะการแก้ไขปัญหา | Fix 'WFX' |
| reference_number | Reference No EDW ของตัวเดิมที่มีปัญหา | ไม่ระบุข้อมูล |
| created_date | วันที่บันทึกข้อผิดพลาด | systemDate |
| created_by | ผู้บันทึกข้อผิดพลาด | Fix "SYSTEM" |
| Field | Description | Value |
| reference_number_edw | Reference Number EDW | referenceNumber จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| batch_status | สถานะการทำรายการ (Batch Level) | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| reconcile_status | สถานะ Reconcile | Fix "F" |
| reference_number | Reference Number EDW | referenceNumber จากข้อ b |
| dr_amount | Dr. | drAmount จากข้อ b |
| cr_amount | Cr. | crAmount จากข้อ b |
| edw_amount | ยอดเงินที่ได้จากทางบัญชี | edwReconcileAmount จากข้อ b |
| edw_dashboard_id | Dashboard ID สำหรับอ้างที่ระบบ EDW | dashboardId จากข้อ b |
| edw_status | สถานะจากระบบ EDW | status จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| verify_type | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) | Fix "F" |
| transaction_status | สถานะการทำรายการ (Transaction Level) | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| incorrect_cause | สาเหตุการไม่อนุมัติ | Fix "ICA" (ข้อมูลบัญชีไม่ถูกต้อง) |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "รายการจ่ายมีปัญหา ข้อมูลบัญชีไม่ถูกต้อง" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| payment_account_id | อ้างอิง Running ID จาก tx_payment_account | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).id |
| approve_batch_no | อ้างอิงเลข Batch ปฏิบัติการ | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).approve_batch_no |
| event_code | อ้างอิง Event Code บัญชี | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).event_code |
| account_type | อ้างอิงประเภทการทรายการ Revert หรือไม่ | '' ค่าว่าง |
| problem_cause | ประเภทของปัญหา | Fix 'CRF' |
| problem_status | สถานะการแก้ไขปัญหา | Fix 'WFX' |
| reference_number | Reference No EDW ของตัวเดิมที่มีปัญหา | ไม่ระบุข้อมูล |
| created_date | วันที่บันทึกข้อผิดพลาด | systemDate |
| created_by | ผู้บันทึกข้อผิดพลาด | Fix "SYSTEM" |
| Name | Description | Value |
| policyNo | เลขกรมธรรม์ | policyNo จากข้อมูล payment_id ที่อยู่ใน [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail) ไปหาที่ [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy) |
| transactionType | ข้อมูลประเภทบัญชี | Fix "BNF" |
| addressType | ข้อมูลประเภทที่อยู่ | Fix "CON" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| batch_trans_id | id ของ Transaction | lg_batch_trans.id |
| process_step_name | ชื่อขั้นตอน | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).oper_ref_no+" \| COMPARE CIS DATA" |
| process_step_detail | รายละเอียดขั้นตอน | Fix "ตรวจสอบข้อมูลบัญชีรับเงินกับข้อมูลที่ระบบ CIS" |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| verify_type | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) | Fix "F" |
| transaction_status | สถานะการทำรายการ (Transaction Level) | Fix "INC" (เงื่อนไขไม่ถูกต้อง) |
| incorrect_cause | สาเหตุการไม่อนุมัติ | Fix "IRC" (ชื่อ-สกุล ผู้รับเงินไม่ถูกต้อง) |
| verify_status_code | สถานะการตรวจสอบ | Fix "WAV" (รอการตรวจสอบ) |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ชื่อ-สกุล ผู้รับเงินไม่ถูกต้อง" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| verify_type | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) | Fix "F" |
| transaction_status | สถานะการทำรายการ (Transaction Level) | Fix "INC" (เงื่อนไขไม่ถูกต้อง) |
| incorrect_cause | สาเหตุการไม่อนุมัติ | Fix "IBA" --> "IAN" (ข้อมูลบัญชีธนาคารไม่ถูกต้อง) ปรับโดย ariya.pi เมื่อ 08/01/2569 |
| verify_status_code | สถานะการตรวจสอบ | Fix "WAV" (รอการตรวจสอบ) |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ข้อมูลบัญชีธนาคารไม่ถูกต้อง" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| verify_type | ตรวจสอบรายการ (ถูกต้อง/ไม่ถูกต้อง) | Fix "T" |
| transaction_status | สถานะการทำรายการ (Transaction Level) | Fix "COR" (ถูกต้อง) |
| verify_status_code | สถานะการตรวจสอบ | Fix "WAV" (รอการตรวจสอบ) |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ถูกต้อง" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_process_id | id ของ Batch | lg_batch_process.id |
| batch_trans_id | id ของ Transaction | lg_batch_trans.id |
| process_step_name | ชื่อขั้นตอน | Fix "UPDATE AC BATCH" |
| process_step_detail | รายละเอียดขั้นตอน | Fix "ตรวจสอบข้อมูลภายใต้ Batch เพื่อ Update Batch Status" |
| status | สถานะการทำงาน | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | ไม่ระบุข้อมูล |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | ไม่ระบุข้อมูล |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_status | สถานะการทำรายการ (Batch Level) | Fix "COR" (ถูกต้อง) |
| reconcile_status | สถานะ Reconcile | Fix "T" |
| reference_number | Reference Number EDW | referenceNumber จากข้อ b |
| account_approve_status | สถานะอนุมัติรายการ | Fix "WAV" (รอตรวจจ่าย) |
| dr_amount | Dr. | drAmount จากข้อ b |
| cr_amount | Cr. | crAmount จากข้อ b |
| edw_amount | ยอดเงินที่ได้จากทางบัญชี | edwReconcileAmount จากข้อ b |
| edw_dashboard_id | Dashboard ID สำหรับอ้างที่ระบบ EDW | dashboardId จากข้อ b |
| edw_status | สถานะจากระบบ EDW | status จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ถูกต้อง" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_status | สถานะการทำรายการ (Batch Level) | Fix "ICD" (ข้อมูลไม่ถูกต้อง) |
| reconcile_status | สถานะ Reconcile | Fix "T" |
| reference_number | Reference Number EDW | referenceNumber จากข้อ b |
| account_approve_status | สถานะอนุมัติรายการ | Fix "WAV" (รอตรวจจ่าย) |
| dr_amount | Dr. | drAmount จากข้อ b |
| cr_amount | Cr. | crAmount จากข้อ b |
| edw_amount | ยอดเงินที่ได้จากทางบัญชี | edwReconcileAmount จากข้อ b |
| edw_dashboard_id | Dashboard ID สำหรับอ้างที่ระบบ EDW | dashboardId จากข้อ b |
| edw_status | สถานะจากระบบ EDW | status จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ข้อมูลไม่ถูกต้อง" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| batch_status | สถานะการทำรายการ (Batch Level) | Fix "PTC" (ถูกต้องบางส่วน) |
| reconcile_status | สถานะ Reconcile | Fix "T" |
| reference_number | Reference Number EDW | referenceNumber จากข้อ b |
| account_approve_status | สถานะอนุมัติรายการ | Fix "WAV" (รอตรวจจ่าย) |
| dr_amount | Dr. | drAmount จากข้อ b |
| cr_amount | Cr. | crAmount จากข้อ b |
| edw_amount | ยอดเงินที่ได้จากทางบัญชี | edwReconcileAmount จากข้อ b |
| edw_dashboard_id | Dashboard ID สำหรับอ้างที่ระบบ EDW | dashboardId จากข้อ b |
| edw_status | สถานะจากระบบ EDW | status จากข้อ b |
| updated_date | วันที่แก้ไขรายการ | systemDate |
| updated_by | ผู้แก้ไขรายการ | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "ถูกต้องบางส่วน" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงาน | Fix "S" |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| error_message | รายละเอียดของการทำงานที่ Error | Fix "รายการ Batch เข้าสู่สถานะ รอตรวจจ่าย" |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |
| Field | Description | Value |
| status | สถานะการทำงานของ Batch | Fix "S" |
| process_end_date | ระยะเวลาที่ Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |

---

## Hyperlinks บนหน้านี้

- [FS-03-01-01 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507902)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [WS สำหรับดึงสถานะ ETL ตอนประมวลผลข้อมูลบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284309020)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve)
- [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_pay_acc_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_pay_acc_problem_tracking)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve)
- [tx_payment_approve](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_approve)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_pay_acc_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_pay_acc_problem_tracking)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [01 WS สำหรับดึงข้อมูลผู้เอาประกันภัย ข้อมูลบัญชีรับผลประโยชน์ ข้อมูลที่อยู่ติดต่อระดับกรมธรรม์ เบอร์ติดต่อ และข้อมูลผู้รับผลประโยชน์ ที่ระบบ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507270)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [https://redmine.ochi.link/issues/55234](https://redmine.ochi.link/issues/55234)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account_detail)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
