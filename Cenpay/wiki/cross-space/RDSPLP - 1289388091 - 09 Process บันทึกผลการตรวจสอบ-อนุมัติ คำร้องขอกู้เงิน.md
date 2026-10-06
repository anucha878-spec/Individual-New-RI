# 09 Process บันทึกผลการตรวจสอบ/อนุมัติ คำร้องขอกู้เงิน

- **Space:** `RDSPLP` — Partial Loan Payment (New Loan System)
- **Page ID:** 1289388091
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1289388091

---

[ [Overview](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-Overview) ] [ [ระบบที่เรียกใช้](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-ระบบที่เรียกใช้) ] [ [Protocol](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-Protocol) ] [ [Operation](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-Operation) ] [ [pah : /thaisamut/pub/newloan/swagger#/request/update-status](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-pah:/thaisamut/pub/newloan/swagger#/request/update-status) ] [ [Input](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-Input) ] [ [Process](#id-09Processบันทึกผลการตรวจสอบ/อนุมัติคำร้องขอกู้เงิน-Process) ]

## Overview

- เป็น Process ที่เตรียมไว้ให้มีการใช้งาน
  - ภายใน Loan
  - ระบบ OSS
  - I-Service
  - Cenpay
- เพื่อทำการปรับปรุงสถานะใบคำร้องตามข้้นตอนการดำเนินการ
- เพื่อทำการปรับปรุงสถานะ , ผู้สร้างรายการ,ผู้ตรวจสอบ และผู้อนุมัติ คำร้องขอกู้เงิน
- เพื่อทำการบันทึกประวัติ ผลการตรวจสอบ/อนุมัติ คำร้องกู้เงิน PL

## ระบบที่เรียกใช้

| ชื่อระบบ | Function/Screen | Description | Update By | Update Date | Remark |
|---|---|---|---|---|---|
| Loan | [FS-01-03.1 หน้าจอสร้าง/แก้ไข คำร้องขอเงินกู้](/pages/viewpage.action?pageId=1290010988) | เพื่อทำการบันทึกผลการ ดำเนินการ ตรวจสอบ พิจารณา ใบคำร้องในขั้นตอนต่างๆ | vorapoj.mo |   |   |
| i Service |   |   |   |   |   |
| ระบบ OSS |   | เพื่อทำการปรับปรุงสถานะคำร้องขอกู้เงิน ให้สอดคล้องกับสถานะการดำเนินการของ OSS | vorapoj.mo |   |   |
| Cenpay |   | เพื่อทำการปรับปรุงสถานะคำร้องขอกู้เงิน ให้สอดคล้องกับสถานะการดำเนินการของ Cenpay | vorapoj.mo |   |   |
|   |   |   |   |   |   |

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry,bulk,delete,update,add>

## pah : /thaisamut/pub/newloan/swagger#/request/update-status

## Input

| Name | Type | Description | Required/Optional | Example | Validation |
|---|---|---|---|---|---|
| requestNo | String | เลขที่ใบคำร้องเงินกู้ | Required | 256900000001 |   |
| actionStatus | String | ผลการพิจารณา/การดำเนินการ เช่นWRD : สนญ.ตรวจสอบคำร้องCWA : จ่ายงานโทรยืนยันHWA : ยืนยันขอกู้ (กู้ช่องทาง Online)CAN : ยกเลิกคำร้องREJ : สนญ.ยกเลิกคำร้องERH : สนญ.ส่งกลับแก้ไขDWA : ส่งพิจารณา(ตามอำนาจดำเนินการ)ACW : อนุมัติ(ตามอำนาจดำเนินการ)HAD : ส่งตรวจสอบPAW : บช. อนุมัติสถานะจากระบบ New LoanCAN : ยกเลิกคำร้องMPW :ส่งพิจารณากู้HWA : อนุมัติคำร้อง (กู้ผ่านสาขา)EDO :ส่งแก้ไขเอกสาร | Required |   |   |
| transactionDate | Date | วันที่ดำเนินการ | Required |   |   |
| rejectReson | String | สาเหตุการส่งกลับแก้ไขR02 : เอกสารประกอบคำขอไม่ครบถ้วนตามหลักเกณฑ์ R07 : ไม่สามารถติดต่อผู้ขอกู้เพื่อยืนยันตัวตนได้R15 : ผู้ขอขอยกเลิกความประสงค์ | Optional | R02 | [CF_LOOKUP_CATALOG](/display/RDSPLP/CF_LOOKUP_CATALOG) เงื่อนไข Type = 'LOAN_REJ_REASON' |
| remark | String | หมายเหตุเพิ่มเติม | Optional | แนบบัตรประชาชนใหม่ |   |
| actionUser | String | User Login | Required | test.oc |   |
| actionSystem | String | ระบบที่ทำการเรียกCENPAYOSSLOAN | Required |   |   |

## Process

1. ตรวจสอบ
  1. ค่าเลขที่คำร้องจะต้องมีอยู่จริง
  2. ผลการพิจารณา/การดำเนินการจะต้องมีค่า ตาม ที่กำหนดใน [CF_LOOKUP_CATALOG](/display/RDSPLP/CF_LOOKUP_CATALOG) เงื่อนไข Type = 'LOAN_REQ_STATUS'
2. การปรับปรุงข้อมูลใบคำขอ (LNRQLNPF) ตามเเลขที่ใบคำร้อง NoName (LNRQLNPF)DescriptionMappingValidationExample1RLRQSTสถานะคำร้อง:actionStatus EDO2RLRESNสาเหตุการส่งกลับแก้ไข/สาเหตุยกเลิก:reqestResonถ้าไม่มีการส่งค่า ให้ทำการ Clear ค่านี้ เพื่อรอการดำเนินการในขั้นถัดไป เพื่อเป็นการ Clear สาเหตุก่อนที่ส่งไปยังขั้นตอนถัดไป 3RLREMKหมายเหตุ:remarkถ้าไม่มีการส่งค่า ให้ทำการ Clear ค่านี้ เพื่อรอการดำเนินการในขั้นถัดไป 4RLMKBYผู้ทำรายการ:actionUserบันทึกค่าเมื่อ สถานะคำร้อง :actionStatus = 'HWA' (ส่งเข้า Cenpay เพื่อดำเนินการ) test.oc5RLMKDTวันที่ทำรายการ:input.transactionDateบันทึกค่าเมื่อ สถานะคำร้อง :actionStatus = 'HWA' 6RLCKB1ผู้ตรวจสอบรายการ:actionUser- บันทึกค่า :actionLogin เมื่อ สถานะคำร้อง :actionStatus = DWA (Checker สนญ. ส่งให้ ผู้มีอำนาจอนุมัติตามวงเงิน) - บันทีกค่า null เมื่อ :actionStatus = 'HWA' 7RLCKD1วันที่ตรวจสอบรายการ:input.transactionDate- บันทึกค่าเมื่อ สถานะคำร้อง :actionStatus = DWA - บันทีกค่า null เมื่อ :actionStatus = 'HWA' 8RLAPBYผู้อนุมัติรายการ:actionUser- บันทึกค่าเมื่อ สถานะคำร้อง actionStatus = ACW (ผู้มีอำนาจอนุมัติตามวงเงิน ส่งให้ บช. ) - บันทีกค่า null เมื่อ :actionStatus = 'HWA' 9RLAPDTวันที่อนุมัติรายการ:input.transactionDate- บันทึกค่าเมื่อ สถานะคำร้อง :actionStatus = ACW - บันทีกค่า null เมื่อ :actionStatus = 'HWA' 12
3. การจัดการ ข้อมูล Log การตรวจสอบ/พิจารณา คำร้องขอกู้เงิน
  1. ทำการปรับปรุงข้อมูลรายการ Log ล่าสุด (Max FLRCID) ตามเลขที่คำร้องขอกู้เงิน NoName TypeDescriptionMapping SourceBusiness RuleExample TableField 0LNAPFLPFFLACBYStringรหัสผู้ดำเนินการ:actionLogin1 ถ้า สถานะตรวจสอบ/พิจารณาคำร้อง (FLSTAS) = NEW ไม่ต้องปรับปรุงค่านี้ 2 อื่นๆ ปรับปรุงตาม Input 1LNAPFLPFFLACNMStringชื่อ-สกุล ผู้ดำเนินการ:actionFullName 2LNAPFLPFFLACTNTimestampวันที่ดำเนินการเสร็จCurrent() 3LNAPFLPFFLRESNStringรหัสสาเหตุส่งกลับแก้ไข:reqestReson 4LNAPFLPFFLREMKStringหมายเหตุ:remark 5LNAPFLPFFLUPBYStringผู้ทำรายการปรับปรุง Update by:actionLogin 6LNAPFLPFFLUPDTTimestampวันที่ทำรายการปรับปรุง Update dateCurrent() 7FLUPPGFLUPPGStringโปรแกรมที่ทำรายการปรับปรุง update system / program:systemName
  2. เพิ่มรายการ Log การพิจารณา/ดำเนินการ ใหม่NoName TypeDescriptionMapping SourceBusiness RuleExample TableField 1LNAPFLPFFLRCIDStringCustom Auto Increment 22LNAPFLPFRLRCIDStringเลขที่คำร้องขอกู้:requestNo 2569000000012LNAPFLPFFLSEQNNumericลำดับการเกิดเหตุการณ์Get Max(FLRCID) +1 ตาม RLRCID 23LNAPFLPFFLSTASStringสถานะตรวจสอบ/พิจารณาคำร้อง:actionStatus 4LNAPFLPFFLRESNStringรหัสสาเหตุส่งกลับแก้ไข:rejectReson 5LNAPFLPFFLREMKStringหมายเหตุ:remark 5.1LNAPFLPFFLACBYStringรหัสผู้ดำเนินการ:actionUser test.oc6LNAPFLPFFLACNMStringชื่อ-สกุล ผู้ดำเนินการ- ชื่อ สกุล ตาม :actionUser - ถ้าไม่พบข้อมูล ระบุ :actionUser 7LNAPFLPFFLASGNTimestampวันที่ส่งดำเนินการ:input.transactionDate 8LNAPFLPFFLCRBYStringCreate by:actionUser 9LNAPFLPFFLCRDTTimestampCreate dateCurrent() 10LNAPFLPFFLCRPGStringโปรแกรมที่ทำรายการ create system:systemName
4. ADD (23/03/2026) การส่งข้อมูลไปยังระบบ Cenpay (ส่วนของ Cenpay หยุดการพัฒณาก่อน)
  1. ถ้าผลการพิจารณา/การดำเนินการ (:actionStatus = HWA) รอ สนญ.ตรวจสอบ
    1. ยังไม่เคยมีการส่งข้อมูลไปยังระบบ Cenpay เลย (ตรวจสอบจาก [lg_cenpay_transaction](/display/RDSPLP/lg_cenpay_transaction) เงื่อนไข case_code = 'SEND_REQUEST' AND status = TRUE AND request_no = input.requestNo) ให้ทำการ ส่งข้อมูลรายการคำร้อง ให้กับระบบ Cenpay โดยเรียก Process [12 Process การส่งข้อมูลคำร้องขอกู้เงินไปยังระบบ Cenpay](/pages/viewpage.action?pageId=1294664312)NoNameMappingExample1requestNoinput.requestNo2569000000012actionLogininput.actionUsertest.oc3actionFullName- ชื่อ สกุล ตาม input.actionUser - ถ้าไม่พบข้อมูล กำหนด input.actionUser Branch 01164transactionDateinput.transactionDate2026-04-29 10:15:12
    2. ถ้าเคยมีการส่งข้อมูลไปยังระบบ Cenpay (ตรวจสอบจาก [lg_cenpay_transaction](/display/RDSPLP/lg_cenpay_transaction) เงื่อนไข case_code = 'SEND_REQUEST' AND status = TRUE AND request_no = input.requestNo) แล้ว ให้ทำการส่งข้อมูล โดยเรียก Process [17 Process ส่งข้อมูลยกเลิก/แก้ไขเงินพร้อมจ่ายไปยังระบบ Cenpay](/pages/viewpage.action?pageId=1292239265)NoNameMappingExample1requestNoinput.requestNo2569000000012actionStatusinput.actionStatusHWA3actionLogininput.actionUsertest.oc4actionFullName- ชื่อ สกุล ตาม input.actionUser - ถ้าไม่พบข้อมูล กำหนด input.actionUserBranch 01165transactionDateinput.transactionDate2026-04-29 10:15:12
  2. ถ้าผลการพิจารณา/การดำเนินการ (:actionStatus = CAN , REJ) ,ระบบทีทำการเรียกใช้ไม่ใช่ CENPAY และเคยส่งข้อมูลไปที่ Cenpay (ตรวจสอบจาก [lg_cenpay_transaction](/display/RDSPLP/lg_cenpay_transaction) เงื่อนไข case_code = 'SEND_REQUEST' AND status = TRUE AND request_no = input.requestNo) ให้ทำการส่งข้อมูลไปแจ้งการยกเลิก โดยเรียก Process [17 Process ส่งข้อมูลยกเลิก/แก้ไขเงินพร้อมจ่ายไปยังระบบ Cenpay](/pages/viewpage.action?pageId=1292239265)NoNameMappingExample1requestNoinput.requestNo2569000000012actionStatusinput.actionStatusREJ3actionLogininput.actionUsertest.oc4actionFullName- ชื่อ สกุล ตาม input.actionUser - ถ้าไม่พบข้อมูล กำหนด input.actionUserBranch 01165transactionDateinput.transactionDate2026-04-29 10:15:12
5. การจัดการ Case Management กรณีที่ไม่ได้เรียกมาจากหน้าจอ New Loan
  1. อนุมัติรายการ (input.actionStatus = 'ACW') และเป็นช่องทาง OFFLINE ทำการบันทึก Case Management [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)NameDescriptionMappingExamplereferenceIdเลขคำร้องเลขที่สัญญาเงินกู้เลขที่คำร้อง25690000001caseCodeรหัสเหตุการณ์fix = APPROVE_REQUESTAPPROVE_REQUESTproblemDetailรายละเอียดการแจ้งเรื่องNULL actionLoginชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆ:input.actionUsertest.oc
  2. ยกเลิก/ปฏิเสธ (iput.actionStatus = 'CAN', 'REJ') ทำการบันทึก Case Management [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)NameDescriptionMappingExamplereferenceIdเลขคำร้องเลขที่สัญญาเงินกู้input.requestNo25690000001caseCodeรหัสเหตุการณ์fix = CANCEL_REQUESTCANCEL_REQUESTproblemDetailรายละเอียดการแจ้งเรื่องNULL actionLoginชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆinput.actionUsertest.oc
6. การจัดการ Remark แจ้งเตือน ถ้า :actionStatus เป็น กลุ่มที่ END_PROCESS (CAN,REJ) ตาม [CF_LOOKUP_CATALOG](/display/RDSPLP/CF_LOOKUP_CATALOG).config2 เงื่อนไข Type = 'LOAN_REQ_STATUS' and Config1 = :actionStatus
  1. สามัญ ลบ ข้อมูลตาราง [OLIS_OLPPOLRM](/display/APP/OLIS_OLPPOLRM) เงื่อนไข
    1. POLIC# = :policyNo
    2. RMCKEY = :requestNo
    3. RMCODE = '07'
  2. อุตสาหกรรม ลบข้อมูล [PILLIB_TBPOLHIS](/display/APP/PILLIB_TBPOLHIS)
    1. REPOL# = :policyNo
    2. RECKEY = :requestNo
    3. RECODE = 3
  3. บันทึกข้อมูลลงตาราง Log : pillib.TBHISLOG ทั้งสามัญ/อุตสาหกรรมNoNameDescriptionMappingExample1RLPOL#Policy no.:policyNoA58180952RLUPDDวันที่บันทึกCurrent() ทำการแปลงเป็น YYYYMMDD ปี พ.ศ. เช่น 25690210256902103RLUPDTเวลาที่บันทึกเวลาปัจจุบัน แปลงเป็นตัวเลข HH24:MM:SS เช่น 19:03:27 ได้ค่า 1903271903274RLCODEรหัส remarkสามัญ กำหนด 7 อุตสาหกรรม กำหนด 375RLRSONเหตุผล remark"กู้ผ่าน" +' ' + [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG).Config_Detail เงื่อนไข Type = 'LOAN_REQ_CHANNEL' AND Config1 = :requestChannel กู้ผ่านสาขา6RLUSERผู้บันทึก:actionBy ทำการตัด String บันทึก 25 ตัวอักษรโดยเริ่มจากลำดับที่ 1 ก่อนการบันทึกข้อมูล01167RLOPTNActionFix = 33
7. เข้าสู่ [Process การยกเลิกกู้เงิน](/pages/viewpage.action?pageId=1329267442) เพื่อส่ง Email/SMS และลงข้อมูลที่ตารางจดหมาย โดยส่ง 'เลขที่ใบคำร้องเงินกู้' เข้าไปเป็นข้อมูลตั้งต้นสำหรับดึงรายละเอียดเพิ่มเติม
8. Backup ขอเก็บไว้ก่อน ทำการลบรายการ Remarkทำการบันทึ หมายเหตุ เพื่อนำไปแสดงใน CIS/AS400 โดยแยกตามประเภทกรมธรรม์ถ้า :actionStatus เป็น DRF , NEW, DVC (หมายเหตุ จะ เพิ่มแค่ 1 รายการ)สามัญ บันทึกข้อมูลลงตาราง [OLIS_OLPPOLRM](/display/APP/OLIS_OLPPOLRM)NoNameDescriptionMapping1POLIC#เลขที่กรมธรรม์ :policyNo2RMCODEโค้ดหมายเหตุFix = '07'3RMDATEวันที่บันทึกCurrent() ทำการแปลงเป็น YYMMDD ปี พ.ศ.4RMNOTEบันทึกเพิ่มเติมFix "อยู่ในระบบงานเงินกู้"5RMUSERUser id:actionLogin6RMDOERผู้บันทึก:actionLogin7RMCKEYเลข Ref:requestNoอุตสาหกรรม บันทึกข้อมูลลงตาราง [PILLIB_TBPOLHIS](/display/APP/PILLIB_TBPOLHIS)NoNameDescriptionMapping1REPOL#Policy no.:policyNo2RECODEรหัส remarkFix = 33RERSONเหตุผล remarkFix "อยู่ในระบบงานเงินกู้"4REUSERผู้บันทึก:actionLogin5REUPDDวันที่บันทึกCurrent() ทำการแปลงเป็น YYYYMMDD ปี พ.ศ. เช่น 256902106REUPDTเวลาที่บันทึกเวลาปัจจุบัน แปลงเป็นตัวเลข HH24:MM:SS เช่น 19:03:27 ได้ค่า 1903277RECKEYเลข Ref:requestNoบันทึกข้อมูลลงตาราง Log : pillib.TBHISLOG ทั้งสามัญ/อุตสาหกรรมNoNameDescriptionMapping1RLPOL#Policy no.:policyNo2RLUPDDวันที่บันทึกCurrent() ทำการแปลงเป็น YYYYMMDD ปี พ.ศ. เช่น 256902103RLUPDTเวลาที่บันทึกเวลาปัจจุบัน แปลงเป็นตัวเลข HH24:MM:SS เช่น 19:03:27 ได้ค่า 1903274RLCODEรหัส remarkสามัญ กำหนด 7 อุตสาหกรรม กำหนด 35RLRSONเหตุผล remarkFix "อยู่ในระบบงานเงินกู้"6RLUSERผู้บันทึก:actionLogin7RLOPTNActionFix = 1 ถ้าเป็น :actionStatus อยู่ในกลุ่ม END_PROCESS (CAN ,REJ ,FAL , SUC) ให้ทำการลบรายการ สามัญ ลบ ข้อมูลตาราง [OLIS_OLPPOLRM](/display/APP/OLIS_OLPPOLRM) เงื่อนไข POLIC# = :policyNo RMCKEY = :requestNoอุตสาหกรรม ลบข้อมูล [PILLIB_TBPOLHIS](/display/APP/PILLIB_TBPOLHIS)REPOL# = :policyNoRECKEY = :requestNoเพิ่มข้อมูลข้อมูลเงินกู้ (LNMSTRPF ,LNTRIXPF) ถ้า actionStatus = "SUC"NoName (LNMSTRPF)DescriptionSourceMappingValidationExample1LMLNNOเลขที่สัญญาเงินกู้ข้อมูลใบคำขอloan_no 2LMPOLNเลขที่กรมธรรม์ข้อมูลใบคำขอpolicy_no 3LMLNTYประเภทเงินกู้ Fix = 'PL' 4LMPOTYประเภทกรมธรรม์ข้อมูลใบคำขอpolicy_type 5LMDATEวันที่กู้ (วันเริ่มสัญญากู้)ข้อมูลใบคำขอcontract_start_date 6LMACDTวันที่เข้าบัญชีInput Parameter:paymentDate 7LMYEARปีที่กู้ข้อมูลใบคำขอloan_year 8LMLNAMจำนวนเงินกู้ข้อมูลใบคำขอloan_amt 9LMRATEอัตราดอกเบี้ยเงินกู้ข้อมูลใบคำขอloan_rate 10LMCPFGประเภทดอกเบี้ยทบต้นข้อมูลใบคำขอloan_compound_type 11LMRPRNจำนวนเงินกู้คงเหลือข้อมูลใบคำขอloan_amt 12LMRCPIจำนวนดอกเบี้ยทบต้นคงเหลือ Fix = 0 13LMRACIยอดเงินส่วนต่างคงเหลือ (Accrued income) Fix = 0 14LMRITOวันที่ชำระดอกเบี้ยถึงข้อมูลใบคำขอcontract_start_date - 1 วัน 15LMSTASสถานะรายการเงินกู้ Fix = 'A' 16LMCRBYผู้ทำรายการInput Parameter:actionLogin 17LMCRDTวันที่ทำรายการ current() 18LMCRPGชื่อระบบที่ทำรายการInput Parameter:systemName LNTRIXPFข้อมูล Loan Trasaction 1LMLNNOเลขที่สัญญาเงินกู้ข้อมูลใบคำขอloan_no 2LNPOLNเลขที่กรมธรรม์ข้อมูลใบคำขอpolicy_no 3LXLNTYประเภทเงินกู้ Fix = 'PL' 4LXTRTYกลุ่มธุรกรรม Fix = 'PAL' 5LXTREFTransaction Reference Reference ตามกลุ่มธุรกรรมInput Parameter:requestNo 6LXEVDTวันที่เกิดเหตุการณ์ข้อมูลใบคำขอcontract_start_date 7LXACDTวันที่บันทึกบัญชี :paymentDate 8LXPYCHแหล่งที่มาเงิน (บันทึกบัญชี) paymentMethod ตรวจสอบค่า :loan_pay_type - NEW กำหนดค่า = NLN - NEA กำหนดค่า = NLO 9LXSTATStatus Fix 'A' 10LXCRBYผู้ทำรายการ actionLogin 11LXCRDTวันที่ทำรายการ current() 12LXCRPGโปรแกรมที่ทำรายการ :systemName

---

## Hyperlinks บนหน้านี้

- [FS-01-03.1 หน้าจอสร้าง/แก้ไข คำร้องขอเงินกู้](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290010988)
- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [lg_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSPLP/lg_cenpay_transaction)
- [12 Process การส่งข้อมูลคำร้องขอกู้เงินไปยังระบบ Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1294664312)
- [lg_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSPLP/lg_cenpay_transaction)
- [17 Process ส่งข้อมูลยกเลิก/แก้ไขเงินพร้อมจ่ายไปยังระบบ Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1292239265)
- [lg_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSPLP/lg_cenpay_transaction)
- [17 Process ส่งข้อมูลยกเลิก/แก้ไขเงินพร้อมจ่ายไปยังระบบ Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1292239265)
- [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)
- [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [OLIS_OLPPOLRM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLRM)
- [PILLIB_TBPOLHIS](http://wiki.thaisamut.co.th/display/APP/PILLIB_TBPOLHIS)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [Process การยกเลิกกู้เงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1329267442)
- [OLIS_OLPPOLRM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLRM)
- [PILLIB_TBPOLHIS](http://wiki.thaisamut.co.th/display/APP/PILLIB_TBPOLHIS)
- [OLIS_OLPPOLRM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLRM)
- [PILLIB_TBPOLHIS](http://wiki.thaisamut.co.th/display/APP/PILLIB_TBPOLHIS)
