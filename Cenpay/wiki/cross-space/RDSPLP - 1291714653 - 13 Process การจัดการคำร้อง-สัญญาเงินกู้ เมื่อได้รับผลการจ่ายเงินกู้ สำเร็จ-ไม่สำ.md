# 13 Process การจัดการคำร้อง/สัญญาเงินกู้ เมื่อได้รับผลการจ่ายเงินกู้ สำเร็จ/ไม่สำเร็จ

- **Space:** `RDSPLP` — Partial Loan Payment (New Loan System)
- **Page ID:** 1291714653
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291714653

---

[ [Overview](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Overview) ] [ [ระบบที่เรียกใช้](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-ระบบที่เรียกใช้) ] [ [Protocol](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Protocol) ] [ [Operation](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Operation) ] [ [Input](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Input) ] [ [Process](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Process) ] [ [Output](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Output) ] [ [Exception](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-Exception) ] [ [Example Input & Output](#id-13Processการจัดการคำร้อง/สัญญาเงินกู้เมื่อได้รับผลการจ่ายเงินกู้สำเร็จ/ไม่สำเร็จ-ExampleInput&Output) ]

## Overview

- เพื่อทำการบันทึกผลการจ่ายเงิน คำร้องกู้เงิน PL
- เพื่อทำการปรับปรุงสถานะ , ผู้สร้างรายการ,ผู้ตรวจสอบ และผู้อนุมัติ คำร้องขอกู้เงิน
- ทำการเพิ่มรายการ ข้อมูลสัญญาเงินกู้และ Transaction การกู้เพิ่ม/กู้ใหม่ เมื่อทำการจ่ายสำเร็จ
- ทำการ ปรับปรุง Remark การแจ้งเตือนเมื่อ เรื่องกู้ดำเนินการเสร็จสิ้น
- ทำการปรับปรุงสถานะ การกู้ ที่ Policy Master
- ส่งข้อมูลการขอกู้ไปยังระบบ Case Management

## ระบบที่เรียกใช้

| ชื่อระบบ | Function/Screen | Description | Update By | Update Date | Remark |
|---|---|---|---|---|---|
| Cenpay | [06 Process ตรวจสอบสถานะการจ่ายเงินโอน(โอน/พร้อมเพย์) จาก Payment Management](/pages/viewpage.action?pageId=1348141518) | เพื่อทำการบันทึกผลการจ่ายเงินจาก Cenpay | vorapoj.mo |   |   |

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>

| Name | Type | Description | Required/Optional | Example | Validation |
|---|---|---|---|---|---|
| requestNo | String | เลขที่ใบคำขอ | Required | 256900000001 |   |
| referenceNo | String | เลขที่ธุรกรรม (จาก Cenpay:oper_ref_no) | Required | CPNLN25122700234 |   |
| paymentDate | Date | วันที่ลูกค้าได้รับเงินจริง หรือวันที่โอนเงินสำเร็จ | Optional |   | จะต้องมีค่าเมื่อ จ่ายเงินกู้สำเสร็จจะต้องมีค่าเมื่อ actionType มีค่าPAYSUCESS (จ่ายเงินสำเร็จ) |
| paymentStatus | ENUM | สถานะการจ่ายเงินFAIL (FAL :จ่ายเงินกู้ไม่สำเร็จ)SUCCESS (SUC :จ่ายเงินกู้สำเร็จ) | Required | SUCCESS |   |
| rejectReson | ENUM | สาเหตุการส่งกลับแก้ไข | Optional | R13 | ถ้าจ่ายเงินกู้ไม่สำเร็จ จะต้องระบุ |
| remark | String | หมายเหตุเพิ่มเติม | Optional | โอนเงินไม่สำเร็จ |   |
| fullNameAction | String | ชื่อ-นามสกุลผู้ดำเนินการ | Required | Branch 0116 |   |
| actionUser | String | User Login | Required | test.oc |   |

## Process

1. ตรวจสอบ input
  1. เลขที่คำร้องมีอยู่จริง ทำการดึงข้อมูลเพื่อมาดำเนินการต่อ
  2. paymentDate จะต้องมีค่าในกรณีที่จ่ายสำเร็จ
  3. สถานะใบคำร้องปัจจุบัน รอจ่ายเงินกู้
  4. ถ้า input.paymentStatus = SUCCESS จะต้องระบุ input.referenceNO
  5. ถ้า input.paymentStatus = FAIL จะต้องระบุ input.rejectReson
2. ตรวจสอบผลการจ่ายเงินกู้ (input.paymentStatus) เพื่อออกสัญญาเงินกู้ กรณีที่เป็นกู้ผ่านช่องทาง ONLINE
  1. ถ้าผลการจ่าย เป็นจ่ายสำเร็จ , ช่องทางการขอกู้ ONLINE ([CF_LOOKUP_CATALOG](/display/RDSPLP/CF_LOOKUP_CATALOG) เงื่อนไข Type = LOAN_REQ_CHANNEL and Config1 = [LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF).RLCHNL ) และยังไม่มีเลขที่สัญญาเงินกู้ ให้ทำการ Gen สัญญาเงินกู้ [01-Generate เลขที่ต่างๆในระบบ New Loan](/pages/viewpage.action?pageId=1329627576)NameMappingExamplesequenceType Fix = LOANCONTRACTLOANCONTRACTpolicyTypePrefix[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF).RLPOTYINDaccountingDate[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF).RLPYDT2026-02-05
  2. ถ้าจ่ายสำเร็จ และเป็นช่องทาง OFFLINE ดำเนินการในขั้นตอนถัดไป (ไม่ต้อง Gen เลขที่สัญญาใหม่)
  3. จ่ายไม่สำเร็จ ดำเนินการในขั้นตอนถัดไป
3. ทำการปรับปรุงสถานะใบคำขอ [LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF) ตามเลขคำร้อง (input.requestNo)NoName (LNRQLNPF)DescriptionMappingValidationExample1RLRQSTสถานะคำร้องinput.paymentStatus - FAIL กำหนด FAL - SUCCESS กำหนด SUC SUCCESS2RLLNNOสัญญาเงินกู้สัญญาเงินกู้ ที่ได้จากข้างต้น- ปรับปรุงกรณีที่ จ่ายสำเร็จ และเป็นช่องทาง ONLINE จากกระบวนการข้างต้น - ถ้าเป็น ช่องทาง OFFLINE ไม่ต้องปรับปรุงค่านี้เนื่องจาก ได้จากขั้นตอนการยื่นคำร้องที่สาขาแล้ว2569LI00000013RLRFCPเลขที่ธุรกรรม (จาก Cenpay:oper_ref_no)input.referenceNo 4RLRESNสาเหตุการส่งกลับแก้ไขinput.rejectReson- ถ้า input.paymentStatus = FAIL ระบุ ค่า input.rejectReson - ถ้า SUCCESS กำหนด NULL 5RLREMKหมายเหตุเพิ่มเติมinput.remark
4. การจัดการ Log การดำเนินการ [LOANLIB_LNAPFLPF](/display/RDSPLP/LOANLIB_LNAPFLPF)
  1. ทำการปรับปรุงข้อมูลรายการ Log ล่าสุด (Max FLRCID) และสถานะปัจจุบัน เป็น รอจ่ายเงินกู้ (PAW) ตามเลขที่คำร้องขอกู้เงิน NoName TypeDescriptionMapping SourceBusiness RuleExample TableField 0LNAPFLPFFLACBYStringรหัสผู้ดำเนินการ:actionLogin 1LNAPFLPFFLACNMStringชื่อ-สกุล ผู้ดำเนินการ:actionFullName 2LNAPFLPFFLACTNTimestampวันที่ดำเนินการเสร็จCurrent() 3LNAPFLPFFLRESNStringรหัสสาเหตุส่งกลับแก้ไข:reqestReson 4LNAPFLPFFLREMKStringหมายเหตุ:remark 5LNAPFLPFFLUPBYStringผู้ทำรายการปรับปรุง Update by:actionLogin 6LNAPFLPFFLUPDTTimestampวันที่ทำรายการปรับปรุง Update dateCurrent() 7FLUPPGFLUPPGStringโปรแกรมที่ทำรายการปรับปรุง update system / program:systemName
  2. เพิ่มรายการ Log การพิจารณา/ดำเนินการ ใหม่NoName TypeDescriptionMapping SourceBusiness RuleExample TableField 1LNAPFLPFFLRCIDStringCustom Auto Increment 22LNAPFLPFRLRCIDStringเลขที่คำร้องขอกู้:requestNo 2569000000013LNAPFLPFFLSTASStringสถานะตรวจสอบ/พิจารณาคำร้องinput.paymentStatus - FAIL กำหนด FAL - SUCCESS กำหนด SUC SUC4LNAPFLPFFLRESNStringรหัสสาเหตุส่งกลับแก้ไข/จ่ายไม่สำเร็จ:rejectReson 5LNAPFLPFFLREMKStringหมายเหตุ:remark 5.1LNAPFLPFFLACBYStringรหัสผู้ดำเนินการ:actionUser 6LNAPFLPFFLACNMStringชื่อ-สกุล ผู้ดำเนินการ- ชื่อ สกุล ตาม :actionUser - ถ้าไม่พบข้อมูล ระบุ :actionUser 7LNAPFLPFFLASGNTimestampวันที่บันทึกผลการดำเนินการinput.paymentDate 8LNAPFLPFFLCRBYStringCreate by:actionUser 9LNAPFLPFFLCRDTTimestampCreate dateCurrent() 10LNAPFLPFFLCRPGStringโปรแกรมที่ทำรายการ create system:systemName
5. เพิ่มข้อมูล เพิ่มข้อมูลข้อมูลเงินกู้ (LNMSTRPF ,LNTRIXPF) ถ้า actionStatus= SUC (จ่ายเงินกู้สำเร็จ)NoName ([LOANLIB.LNMSTRPF](/display/RDSPLP/LOANLIB_LNMSTRPF))DescriptionSourceMappingValidationExample1LMLNNOเลขที่สัญญาเงินกู้[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLLNNO 2569LI0000012LMPOLNเลขที่กรมธรรม์[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPOLN J107766463LMLNTYประเภทเงินกู้ Fix = 'PL' PL4LMPOTYประเภทกรมธรรม์[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPOTY IND5LMDATEวันที่กู้ (วันเริ่มสัญญากู้)[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPYDT 2026-02-246LMACDTวันที่เข้าบัญชีInput Parameter:paymentDate 2026-02-247LMYEARปีที่กู้ (CV)[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLCVYY 57.1LMPERDงวดที่กู้ (CV)[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLCVMM 48LMLNAMจำนวนเงินกู้[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLRQAM 45,0009LMRATEอัตราดอกเบี้ยเงินกู้[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLRATE 5.510LMCPFGประเภทดอกเบี้ยทบต้น[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLCPFG C11LMRPRNจำนวนเงินกู้คงเหลือ[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLRQAM 45,00012LMRCPIจำนวนดอกเบี้ยทบต้นคงเหลือ Fix = 0 013LMRACIยอดเงินส่วนต่างคงเหลือ (Accrued income) Fix = 0 014LMRITOวันที่ชำระดอกเบี้ยถึง[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPYDT - 1 วัน 2026-02-2315LMSTASสถานะรายการเงินกู้ Fix = 'A' A16LMCRBYผู้ทำรายการInput Parameter:actionUser 17LMCRDTวันที่ทำรายการ current() 18LMCRPGชื่อระบบที่ทำรายการInput ParameterLOAN Name ([LOANLIB_LNTRIXPF](/display/RDSPLP/LOANLIB_LNTRIXPF))ข้อมูล Loan Trasaction 1LMLNNOเลขที่สัญญาเงินกู้[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLLNNO 2569LI0000012LNPOLNเลขที่กรมธรรม์[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPOLN J107766463LXLNTYประเภทเงินกู้ Fix = 'PL' PL4LXTRTYกลุ่มธุรกรรม Fix = 'PAL' PAL5LXTREFTransaction Reference Reference ตามกลุ่มธุรกรรม (เลขที่คำร้อง)[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLRCID 256900000016LXEVDTวันที่เกิดเหตุการณ์[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLPYDT 2026-02-247LXACDTวันที่บันทึกบัญชีInput Parameter:paymentDate 2026-02-248LXPYCHแหล่งที่มาเงิน (บันทึกบัญชี) paymentMethod[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF)RLTRTY NLO9LXSTATStatus Fix 'A' A10LXCRBYผู้ทำรายการ actionUser 11LXCRDTวันที่ทำรายการ current() 12LXCRPGโปรแกรมที่ทำรายการ LOAN
6. การจัดการเรื่อง ทั้งจ่ายสำเร็จ หรือไม่สำเร็จ Remark ให้ทำการลบรายการ
  1. สามัญ ลบ ข้อมูลตาราง [OLIS_OLPPOLRM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLRM) เงื่อนไข
    1. POLIC# = :policyNo
    2. RMCKEY = :requestNo
    3. RMCODE = '07'
  2. อุตสาหกรรม ลบข้อมูล [PILLIB_TBPOLHIS](http://wiki.thaisamut.co.th/display/APP/PILLIB_TBPOLHIS)
    1. REPOL# = :policyNo
    2. RECKEY = :requestNo
    3. RECODE = 3
  3. บันทึกข้อมูลลงตาราง Log : pillib.TBHISLOG ทั้งสามัญ/อุตสาหกรรมNoNameDescriptionMappingExample1RLPOL#Policy no.:policyNoA58180952RLUPDDวันที่บันทึกCurrent() ทำการแปลงเป็น YYYYMMDD ปี พ.ศ. เช่น 25690210256902103RLUPDTเวลาที่บันทึกเวลาปัจจุบัน แปลงเป็นตัวเลข HH24:MM:SS เช่น 19:03:27 ได้ค่า 1903271903274RLCODEรหัส remarkสามัญ กำหนด 7 อุตสาหกรรม กำหนด 375RLRSONเหตุผล remark"กู้ผ่าน" +' ' + [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG).Config_Detail เงื่อนไข Type = 'LOAN_REQ_CHANNEL' AND Config1 = :requestChannel กู้ผ่านสาขา6RLUSERผู้บันทึก:actionBy ทำการตัด String บันทึก 25 ตัวอักษรโดยเริ่มจากลำดับที่ 1 ก่อนการบันทึกข้อมูล01167RLOPTNActionFix = 33
7. ปรับปรุง Flag การกู้ ที่ Policy Master เมื่อมีการจ่ายเงินกู้สำเร็จ (actionStatus= SUC) **หมายเหตุ รอ Process กลางที่จะทำการ Update Policymaster จากบ้าน AS400**
  1. กรณีที่เป็นประเภทกรมธรรม์ ORD : update OLIS.OLPPOLMS.POLOA@ = '1' เงื่อนไข POLIC# = :policyNo
  2. กรณีที่เป็นประเภทกรมธรรม์ (อุตสาหกรรม) **หมายเหตุ** กำหนดค่า IND จะรวมถึง (IND,GOV) จึงให้ทำการ Update ทั้ง 2 ตาราง
    1. update [ILISLIB.POLCYMB0](/display/RDSAS400CMBPH1/ILISLIB.POLCYMB0).MBLOAN = 'Y'
    2. update [GOVLIB.GPLCYMB0](/display/RDSAS400CMBPH1/GOVLIB.GPLCYMB0).MBLOAN = 'Y'
  3. โดย Update ข้อมูลผ่าน [ESB-23- Update ข้อมูล Policy Master](/pages/viewpage.action?pageId=1350566800) NoNameMappingExample1policyNo:policyNoA58180952userName:actionBy01163functionCodeFix = LNUPPOLLNUPPOL4subFunctionCodeFix = FLAGLNYFLAGLNY5refKeyเลขที่สัญญาเงินกู้2569LI000001
  4. เรียก RPG ปลด การ Block ธุรกรรม เมื่อดำเนินการเสร็จสิ้น
8. ถ้าเป็นยื่นเรื่องกู้ผ่านช่องทาง ONLINE และจ่ายเงินกู้สำเร็จ ดำเนินการออกเอกสารสัญญาเงินกู้ โดยดำเนินการดังนี้
  1. จัดทำเอกสารสัญญาเงินกู้ในรูปแบบ PDF ตาม [FS-01-03-07 Mapping เอกสารสัญญาเงินกู้](/pages/viewpage.action?pageId=1324712150)
    1. กำหนดชื่อไฟล์ในรูปแบบ: `เอกสารสัญญากู้ยืมเงิน_$(เลขที่สัญญาเงินกู้)`
      - `$(เลขที่สัญญาเงินกู้) = [LOANLIB.LNMSTRPF](/display/RDSPLP/LOANLIB_LNMSTRPF).LMLNNO`
      - *ตัวอย่าง:* หากเลขที่สัญญาเงินกู้คือ 12345678 จะได้ชื่อไฟล์เป็น เอกสารสัญญากู้ยืมเงิน`_12345678.pdf`
    2. เข้ารหัสไฟล์ (File Encryption) โดยใช้ วันเดือนปีเกิดของผู้เอาประกัน ในรูปแบบ DDMMYYYY (ปี พ.ศ)
      - วันเดือนปีเกิด = [LOANLIB_LNASPRPF](/display/RDSPLP/LOANLIB_LNASPRPF).ASBIDT ด้วยเงื่อนไขเป็นข้อมูลผู้เอาประกัน ([LOANLIB_LNASPRPF](/display/RDSPLP/LOANLIB_LNASPRPF).RLSGTY = INS)
    3. ทำการ Encrypt ไฟล์ที่ตั้งชื่อแล้วด้วยรหัสผ่านที่กำหนด
    4. ส่งต่อเข้าสู่กระบวนการลงลายมือชื่อดิจิทัล
  2. ทำการ Digital Signature เอกสารสัญญาเงินกู้ตาม [35. [Process] การทำ Digital sign สำหรับเอกสารที่ส่งออกให้ลูกค้า](/pages/viewpage.action?pageId=961970795)
    1. ใน ขั้นตอนที่ 2: Service Call (Application Server) call service esb โดยเรียกใช้ function pureSignWithPassword**ส่ง birthday ไป encrypt password เอกสาร** <![CDATA[String birthDay = sfBDate.format(entity.getBirthDate()); byte[] signByte = digisignWsClientFactory.getSigningWSService().pureSignWithPassword(bytesGenLoanReqForm, birthDay);]]>
  3. สร้างข้อมูลการจัดเก็บเอกสาร [LOANLIB_LNDCAPPF](/display/RDSPLP/LOANLIB_LNDCAPPF) โดยจัดเก็บ ฉบับก่อน Sign CA และ หลัง Sign CANameMappingExampleRLRCIDinput.requestNo25690000001DASEQNลำดับเอกสารตามประเภท Fix = 11DADCCDประเภทเอกสาร- loan_sign - contract : สัญญาก่อน Sign CADADCNMชื่อเอกสารสัญญากู้ยืมเอกสารสัญญากู้ยืมเงิน`_12345678.pdf`
  4. นำไฟล์เอกสารสัญญาเงินกู้ที่ Digital Signature เสร็จเรียบร้อยแล้วส่ง DMS : [uploadDocument](/display/RDSDCMSPH1/uploadDocument)NameMappingExampledocumentTypeW61006W61006fileName[LOANLIB_LNDCAPPF](/display/RDSPLP/LOANLIB_LNDCAPPF).DADCNMเอกสารสัญญากู้ยืมเงิน`_12345678.pdf ช่องทาง I Service กำหนด :requestNo+"_loan_form".pdf`index REQUEST_NO[LOANLIB_LNDCAPPF](/display/RDSPLP/LOANLIB_LNDCAPPF).RLRCID25690000001SUB_DOCUMENT_TYPE[LOANLIB_LNDCAPPF](/display/RDSPLP/LOANLIB_LNDCAPPF).DADCCDloan_signREQUEST_DATE[LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF).RLRQDT ไม่รวมเวลา FIRST_NAMELOANLIB_LNASPRPF.ASNAME เงื่อนไข RLSGTY = INS LAST_NAMELOANLIB_LNASPRPF.ASFNAM เงื่อนไข RLSGTY = INS POLICY_NOLOANLIB_LNRQLNPF.RLPOLN
  5. เข้าสู่ [Process การลงข้อมูลเอกสารสัญญากู้ยืมเงิน ในตารางจดหมาย](/pages/viewpage.action?pageId=1349452244) เพื่อเตรียมการแสดงเอกสารสัญญากู้ยืมเงินในหน้าจอ [FS-004-02 หน้าจอบริหารจัดการจดหมายที่ออกโดย NewLoan](/pages/viewpage.action?pageId=1290698845) หลังมีการเก็บเอกสารสัญญากู้ยืมเงินเข้า DMS
9. เข้าสู่ [Process การยกเลิกกู้เงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1329267442) เพื่อส่ง Email/SMS และลงข้อมูลที่ตารางจดหมาย โดยส่ง 'เลขที่ใบคำขอ' เข้าไปเป็นข้อมูลตั้งต้นสำหรับดึงรายละเอียดเพิ่มเติม
10. ทำการส่ง Mail แจ้งผลการโอน [FS-05-03 Template Auto Mail แจ้งผลการโอนเงิน](/pages/viewpage.action?pageId=1349452203)
11. ทำการสร้าง Case Management ถ้าผลการจ่ายเงินกู้สำเร็จ [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)NameDescriptionMappingExamplereferenceIdเลขคำร้องเลขที่สัญญาเงินกู้เลขที่คำร้อง25690000001caseCodeรหัสเหตุการณ์ตรวจสอบ [LOANLIB_LNRQLNPF](/display/RDSPLP/LOANLIB_LNRQLNPF).RLTRTY- ถ้า NLO กำหนด CREATE_LOAN_TOPUP- ถ้า NLN กำหนด CREATE_LOAN_NEWCREATE_LOAN_NEWproblemDetailรายละเอียดการแจ้งเรื่องNULL actionLoginชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆLogintest.oc
12. ถ้าพบข้อผิดพลาดให้ทำการ Roll Back

## Output

<แสดงข้อมูลที่ได้รับจาก external service นี้>

| Name | Type | Description | Example |
|---|---|---|---|
| errorFlag | string | Error FlagF = Fail ถ้าไม่ผ่านการตรวจสอบS = Success | F |
| errorDeacription | string | Error Description | สถานะคำร้อง ไม่สามารถดำเนินการได้ |

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

- [06 Process ตรวจสอบสถานะการจ่ายเงินโอน(โอน/พร้อมเพย์) จาก Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1348141518)
- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [01-Generate เลขที่ต่างๆในระบบ New Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1329627576)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNAPFLPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNAPFLPF)
- [LOANLIB.LNMSTRPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNMSTRPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNTRIXPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNTRIXPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [OLIS_OLPPOLRM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLRM)
- [PILLIB_TBPOLHIS](http://wiki.thaisamut.co.th/display/APP/PILLIB_TBPOLHIS)
- [CF_LOOKUP_CATALOG](http://wiki.thaisamut.co.th/display/RDSPLP/CF_LOOKUP_CATALOG)
- [ILISLIB.POLCYMB0](http://wiki.thaisamut.co.th/display/RDSAS400CMBPH1/ILISLIB.POLCYMB0)
- [GOVLIB.GPLCYMB0](http://wiki.thaisamut.co.th/display/RDSAS400CMBPH1/GOVLIB.GPLCYMB0)
- [ESB-23- Update ข้อมูล Policy Master](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1350566800)
- [FS-01-03-07 Mapping เอกสารสัญญาเงินกู้](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1324712150)
- [LOANLIB.LNMSTRPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNMSTRPF)
- [LOANLIB_LNASPRPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNASPRPF)
- [LOANLIB_LNASPRPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNASPRPF)
- [35. [Process] การทำ Digital sign สำหรับเอกสารที่ส่งออกให้ลูกค้า](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=961970795)
- [LOANLIB_LNDCAPPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNDCAPPF)
- [uploadDocument](http://wiki.thaisamut.co.th/display/RDSDCMSPH1/uploadDocument)
- [LOANLIB_LNDCAPPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNDCAPPF)
- [LOANLIB_LNDCAPPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNDCAPPF)
- [LOANLIB_LNDCAPPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNDCAPPF)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
- [Process การลงข้อมูลเอกสารสัญญากู้ยืมเงิน ในตารางจดหมาย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1349452244)
- [FS-004-02 หน้าจอบริหารจัดการจดหมายที่ออกโดย NewLoan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290698845)
- [Process การยกเลิกกู้เงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1329267442)
- [FS-05-03 Template Auto Mail แจ้งผลการโอนเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1349452203)
- [11 Process บันทึก Case Management Loan](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293844954)
- [LOANLIB_LNRQLNPF](http://wiki.thaisamut.co.th/display/RDSPLP/LOANLIB_LNRQLNPF)
