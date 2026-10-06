# 07 WS ส่งข้อมูลคำร้องเข้า Temporary table ระบบ AS400

- **Page ID:** 1321599472
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 07 WS ส่งข้อมูลคำร้องเข้า Temporary table ระบบ AS400
- **Depth:** 5

---

[ [Overview](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-Overview) ] [ [Protocol](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-Protocol) ] [ [Operation](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-Operation) ] [ [Input](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-Input) ] [ [Process](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-Process) ] [ [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_OutputOutput) ]

## Overview

Insert ข้อมูลคำร้องเข้า Temporary table ระบบ AS400

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry>

## Input

|   | **Name** | **Type** | **Description** | **Example** | **Validation** | **Null (Y/N)** |
|---|---|---|---|---|---|---|
| **Header** |
|   | headerID | String | Header ID | CNPAY202510000000010 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | totalRecord | Numeric (6,0) | จำนวนรายการทั้งหมด | 1 | Required | N |
|   | totalBenefitAmount | Numeric (15,2) | ยอดเงินทั้งหมด (ยอดเงินสุทธิ หลังจากหักหนี้สิน) | 32,000.00 | Required | N |
| **Transaction** |
| **List<Transaction> กำหนด Limit ไม่เกิน 50** |
|   | transactionRequestID | String | Transaction Request ID | CNPAY202510000000099 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | eventType | Enum | เหตุการณ์(ประเภทคำร้อง)PSP : เวนคืนกรมธรรม์ หรือ เวนคืนกรมธรรม์เวนคืนกรมบังคับคดีFLP : Freelook | PSP**ตัวอย่าง**APU("เงินจ่ายคืนทันที APL/APU"),RPU("เงินจ่ายคืนทันที RPU"),PSP("เวนคืนกรมธรรม์"),FLP("Freelook"),PPY("เงินบำนาญ"),SBP("เงินทรงชีพ"),FRP("เงินสมนาคุณ"),MAP("ครบกำหนดสัญญา"),UWC("บอกล้าง Underwrite"),LEP("เวนคืนกรมบังคับคดี"),TFP("โอนเงินเข้ากองทุน (10 ปี)"),RBP("เงินผลประโยชน์จากทะเบียนรอจ่ายใหม่"),NLN("กู้ใหม่"),NLO("กู้เพิ่ม"); | Required | N |
|   | total_benefit_amount | Numeric (14,2) | จำนวนเงินสุทธิ | 32,000.00 | Required | N |
|   | createdDate | Date | วันที่สร้างรายการ | 2026-01-01-10.11.11.000000 | Required | N |
|   | createdBy | String | ผู้สร้างรายการ | Ocean.co | Requiredกรณีระบุข้อมูลสามารถระบุได้ 50 ตัวอักษร | N |
|   | createdProgram | String | โปรแกรมสร้างรายการ | CENPAY | Requiredกรณีระบุข้อมูลสามารถระบุได้ 30 ตัวอักษร | N |
| **Transaction Detail (Surrender)** |
|   | policyNo | String | เลขที่กรมธรรม์ | 1529892 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | policyType | Enum | ประเภทกรมธรรม์ORD : สามัญIND : อุตสาหกรรม (ปช, ขพ)PA : อุบัติเหตุUL : Unit Linked | ORD | Required | N |
|   | receiveDate | Date | วันที่รับเรื่อง | 2025-01-27 | Required | N |
|   | modeTransaction | Enum | โหมดการทำงานตามเหตุการณ์01 : บันทึกรับเรื่อง (เอกสารครบ - รอผู้จัดการสาขาอนุมัติ)02 : ยกเลิกคำร้องเวนคืน | 01 | Required | N |
|   | branchServiceCode | Int | สาขารับเรื่อง | 1500 | Required | N |
|   | requestNo | String | เลขที่คำร้อง | F2568-02/1500/00001 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | requestStatus | Enum | สถานะคำร้องR : รับเรื่องเวนคืนC : ยกเลิกเวนคืน | R | Required | N |
|   | statusDate | Date | วันที่สถานะคำร้อง | 2025-01-27 | Required | N |
|   | policyAgeYears | Int | ปีที่เวนคืน | 68 | Required | N |
|   | policyAgeMonths | Int | เดือนที่เวนคืน | 1 | Required | N |
|   | policyAgeDays | Int | จำนวนวันที่เวนคืน | 100 | Required | N |
|   | calculateID | String | Calculate ID (ยอดคำนวณเงินบวก, ส่วนลดเบี้ยประกัน) | PSP112372120251122_0001 | Not Required | Y |
|   | premFromDate | Date | วันที่คิดเบี้ยค้างชำระ จาก | 2025-01-27 | Not Required | Y |
|   | premToDate | Date | วันที่คิดเบี้ยค้างชำระ ถึง | 2025-01-27 | Not Required | Y |
|   | overduePremAmount | Numeric (14,2) | เบี้ยประกัน ค้างชำระ สุทธิ | 1,000.00 | Not Required | Y |
|   | overdueInterestAmount | Numeric (14,2) | ดอกเบี้ย เบี้ยประกัน ค้างชำระ สุทธิ | 1,000.00 | Not Required | Y |
|   | overduePremLifeAmount | Numeric (14,2) | เบี้ยประกันชีวิต ค้างชำระ | 1,000.00 | Not Required | Y |
|   | overduePremAccAmount | Numeric (14,2) | เบี้ยประกันอุบัติเหตุ ค้างชำระ | 1,000.00 | Not Required | Y |
|   | overduePremHcAmount | Numeric (14,2) | เบี้ยประกันสุขภาพ ค้างชำระ | 1,000.00 | Not Required | Y |
|   | overduePremExtraAmount | Numeric (14,2) | เบี้ยประกันพิเศษ ค้างชำระ รวมกัน (ชีวิต,อบ.,สุขภาพ) | 1,000.00 | Not Required | Y |
|   | overduePremOtherAmount | Numeric (14,2) | เบี้ยประกันอื่น ๆ ค้างชำระ | 1,000.00 | Not Required | Y |
|   | loanAmount | Numeric (14,2) | PL เงินต้น | 1,000.00 | Not Required | Y |
|   | loanInterestAmount | Numeric (14,2) | PL ดอกเบี้ย | 1,000.00 | Not Required | Y |
|   | advanceInterest | Numeric (14,2) | PL ดอกเบี้ยจ่ายล่วงหน้า | 1,000.00 | Not Required | Y |
|   | aplAmount | Numeric (14,2) | APL เงินต้น | 1,000.00 | Not Required | Y |
|   | aplInterestAmount | Numeric (14,2) | APL ดอกเบี้ย | 1,000.00 | Not Required | Y |
|   | aplCompoundInterestAmount | Numeric (14,2) | APL ดอกเบี้ยทบต้น | 1,000.00 | Not Required | Y |
|   | aplInterestFromDate | Date | APL วันที่คำนวณดอกเบี้ย จาก | 1,000.00 | Not Required | Y |
|   | aplInterestToDate | Date | APL วันที่คำนวณดอกเบี้ย ถึง | 1,000.00 | Not Required | Y |
|   | createdDate | Timestamp | วันที่สร้างรายการ | 2026-01-01-10.11.11.000000 | Required | N |
|   | createdBy | String | ผู้สร้างรายการ | Ocean.co | Requiredกรณีระบุข้อมูลสามารถระบุได้ 50 ตัวอักษร | N |
|   | createdProgram | String | โปรแกรมสร้างรายการ | CENPAY | Requiredกรณีระบุข้อมูลสามารถระบุได้ 30 ตัวอักษร | N |
| **Transaction Detail (Free Look)** |
|   | policyNo | String | เลขที่กรมธรรม์ | 1529892 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | policyType | Enum | ประเภทกรมธรรม์ORD : สามัญIND : อุตสาหกรรม (ปช, ขพ)PA : อุบัติเหตุUL : Unit Linked | ORD | Required | N |
|   | receiveDate | Date | วันที่รับเรื่อง | 2025-01-27 | Required | N |
|   | modeTransaction | Enum | โหมดการทำงานตามเหตุการณ์01 : บันทึกรับเรื่อง (เอกสารครบ - รอผู้จัดการสาขาอนุมัติ)02 : ยกเลิกคำร้องเวนคืน | 1 | Required | N |
|   | branchServiceCode | INT | สาขารับเรื่อง | 1500 | Required | N |
|   | requestNo | String | เลขที่คำร้อง | F2568-02/1500/00001 | Requiredกรณีระบุข้อมูลสามารถระบุได้ 20 ตัวอักษร | N |
|   | requestStatus | Enum | สถานะคำร้องR : รับเรื่องเวนคืนC : ยกเลิกเวนคืน | R | Required | N |
|   | requestTransactionDate | Timestamp | วันที่สถานะคำร้อง | 2026-01-01-10.11.11.000000 | Required | N |
|   | calculateID | String | Calculate ID (ยอดคำนวณเงินบวก, ค่าธรรมเนียม Freelook) | null | Not Requiredกรณีระบุข้อมูลสามารถระบุได้ 30 ตัวอักษร | Y |
|   | flagPolicy | Enum | ได้รับกรมธรรม์หรือไม่ Y = ได้รับกรมธรรม์ (Paper หรือ E-Policy) N = ไม่ได้รับกรมธรรม์ | Y | Required | Y |
|   | receivePolicyDate | Date | วันที่ได้รับกรมธรรม์ (Paper หรือ E-Policy) | null | Not Required | Y |
|   | beneficiary | String | ผู้รับกรมธรรม์1 : ผู้เอาประกัน2 : ผู้อื่น | null | Not Requiredกรณีระบุข้อมูลสามารถระบุได้ 1 ตัวอักษร | Y |
|   | beneficiaryName | String | ชื่อผู้รับกรมธรรม์ | null | Not Requiredกรณีระบุข้อมูลสามารถระบุได้ 100 ตัวอักษร | Y |
|   | flagFeeWaive | Enum | ยกเว้นค่าธรรมเนียมบริการกรมธรรม์Y = ยกเว้นค่าธรรมเนียมN = ไม่ยกเว้นค่าธรรมเนียม | Y | Not Required | Y |
|   | createdDate | TimeStamp | วันที่สร้างรายการ | 2026-01-01-10.11.11.000000 | Required | N |
|   | createdBy | String | ผู้สร้างรายการ | Ocean.co | Requiredกรณีระบุข้อมูลสามารถระบุได้ 50 ตัวอักษร | N |
|   | createdProgram | String | โปรแกรมสร้างรายการ | CENPAY | Requiredกรณีระบุข้อมูลสามารถระบุได้ 30 ตัวอักษร | N |
|   | **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 01/07/2026**healthExaminationAmount | Numeric (15,2) | ค่าตรวจสุขภาพ | 500 | Not Required | Y |

## Process

**DB: AS400**
1. ตรวจสอบ**Validation Input**
  1. กรณี Validation Input**ไม่ผ่าน** ให้ดำเนินการดังนี้
    1. บันทึกข้อมูลที่ระบบ AS400 ไม่สำเร็จให้ดำเนินการบันทึกข้อมูล Request Problem Tracking ดังนี้
      1. เรียกใช้ Process [02-05-10_01 บันทึกข้อมูล Problem Tracking](/pages/viewpage.action?pageId=1319601299) และส่ง Input ดังนี้InputvalueDesciptionrequestIdrequestIdPK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)processCodeFix "AS"รหัสอ้างอิง process ที่ดำเนินการไม่สำเร็จ
    2. Return Output ดังนี้
      1. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).status = **FALSE**
      2. [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output).remark = ข้อความตาม Alert Code****[err_pr_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถบันทึกข้อมูลคำร้องเข้าระบบ AS400 ได้เนื่องจากตรวจพบข้อมูลเกินความยาวที่ระบบรองรับ ดังนี้ {$fieldList})Alert CodeReplace Value[err_pr_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message){$fieldList} = List Input Description ที่เกินความยาวที่ระบบรองรับ เช่น ข้อมูล ผู้รับกรมธรรม์ และ ชื่อผู้รับกรมธรรม์ เกินความยาวที่ระบบรองรับ ให้ Replace Value ดังนี้ 1. ผู้รับกรมธรรม์ 2. ชื่อผู้รับกรมธรรม์
    3. กรณี Validation Input**ผ่าน** ให้ดำเนินการข้อถัดไป
2. บันทึก **Header file** สำหรับเก็บข้อมูลสรุปการประมวลผลรับเรื่อง ให้ดำเนินการเรียก Insert ข้อมูล ลง Table : [MBFLIB_BFPREQHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPREQHD) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPREQHD ( BHHDID, BHTTRC, BHTTAM ) VALUES ( :headerID, :totalRecord, :totalBenefitAmount );]]>
  1. กรณี Insert ข้อมูล **ไม่สำเร็จ**
    1. ให้หยุดทำงาน
    2. Return Output ดังนี้
      1. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).status = **FALSE**
      2. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  2. กรณี Insert ข้อมูล **สำเร็จ**
    1. ให้ดำเนินการ บันทึก **Transaction file**
3. บันทึก **Transaction file** สำหรับเก็บข้อมูลรับเรื่อง LIST<Transaction> ให้ดำเนินการเรียกวน Insert ข้อมูล ลง Table : [MBFLIB_BFPREQTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPREQTR) จนครบตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPREQTR ( BHRQID, BTRQID, BTEVTY, BTNTAM, BTCRDT, BTCRUS, BTCPGM ) VALUES ( :headerID, -- headerID จาก Object Header :transactionRequestID, :eventType, :total_benefit_amount, :createdDate, :createdBy, :createdProgram );]]>
  1. กรณี Insert ข้อมูล **ไม่สำเร็จ**
    1. ให้หยุดทำงาน
    2. Rollback การบันทึกข้อมูลทั้งหมด
    3. Return Output ดังนี้
      1. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).status = **FALSE**
      2. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
  2. กรณี Insert ข้อมูล **สำเร็จ**
    1. ให้ดำเนินการ บันทึก **Transaction detail file**โดยตรวจสอบ :eventType (เหตุการณ์(ประเภทคำร้อง)) ดังนี้
      1. กรณีเท่ากับ PSP (Surrender)
        1. บันทึก **Transaction d****etail file** สำหรับเก็บข้อมูลรับเรื่อง ธุรกรรมเวนคืน ให้ดำเนินการเรียก Insert ข้อมูล ลง Table : [MBFLIB_BFPRQPSP](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPRQPSP) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPRQPSP ( BTRQID, BDPOLC, BDPOLT, BDDUDT, BDMODE, BDBRAN, BDRFID, BDRQST, BDRQSD, BDYEAR, BDMON, BDDAY, BDCLID, BDNPFR, BDNPTO, BDNPRM, BDNPIN, BDNPLF, BDNPAC, BDNPHB, BDNPEX, BDNPOT, BDPLAM, BDPLIN, BDPLAI, BDAPAM, BDAPIN, BDAPCP, BDAPFR, BDAPTO, BDCRDT, BDCRUS, BDCPGM ) VALUES ( :transactionRequestID, -- transactionRequestID จาก Object Transaction :policyNo, :policyType, :receiveDate, :modeTransaction, :branchServiceCode, :requestNo, :requestStatus, :statusDate, :policyAgeYears, :policyAgeMonths, :policyAgeDays, :calculateID, :premFromDate, :premToDate, :overduePremAmount, :overdueInterestAmount, :overduePremLifeAmount, :overduePremAccAmount, :overduePremHcAmount, :overduePremExtraAmount, :overduePremOtherAmount, :loanAmount, :loanInterestAmount, :advanceInterest, :aplAmount, :aplInterestAmount, :aplCompoundInterestAmount, :aplInterestFromDate, :aplInterestToDate, :createdDate, :createdBy, :createdProgram );]]>
      2. กรณีเท่ากับ FLP (Freelook)
        1. บันทึก **Transaction d****etail file** สำหรับเก็บข้อมูลรับเรื่อง Freelook ให้ดำเนินการเรียก Insert ข้อมูล ลง Table : [MBFLIB_BFPRQFLP](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPRQFLP) ตามนี้ <![CDATA[INSERT INTO MBFLIB.BFPRQFLP ( BTRQID, BDPOLC, BDPOLT, BDDUDT, BDMODE, BDBRAN, BDRFID, BDRQST, BDRQSD, BDCLID, BDCRVF, BDCRVD, BDCFLG, BDCCNM, BDFEWV, BDCRDT, BDCRUS, BDCPGM, BDMDAM ) VALUES ( :transactionRequestID, -- transactionRequestID จาก Object Transaction :policyNo, :policyType, :receiveDate, :modeTransaction, :branchServiceCode, :requestNo, :requestStatus, :requestTransactionDate, :calculateID, :flagPolicy, :receivePolicyDate, :beneficiary, :beneficiaryName, :flagFeeWaive, :createdDate, :createdBy, :createdProgram, :healthExaminationAmount );]]>
    2. กรณี Insert ข้อมูล **ไม่สำเร็จ**
      1. ให้หยุดทำงาน
        1. Rollback การบันทึกข้อมูลทั้งหมดReturn Output ดังนี้
        2. Return Output ดังนี้
          1. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).status = **FALSE**
          2. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).remark = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ)
      2. กรณี Insert ข้อมูล **สำเร็จ**
        1. Return Output ดังนี้
          1. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).status = **TRUE**
          2. [Output](#id-07WSส่งข้อมูลคำร้องเข้าTemporarytableระบบAS400-A_Output).remark = ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ)

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| **Name** | **Type** | **Description** | **Example** |
|---|---|---|---|
| status | Boolean | สถานะการทำรายการหากบันทึกสำเร็จ = **TRUE**หากบันทึกไม่สำเร็จ = **FALSE** | TRUE |
| remark | varchar (255) | หมายเหตุ หรือ Error Message กรณีทำรายการไม่สำเร็จหากบันทึกสำเร็จ = ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ)หากบันทึกไม่สำเร็จ = ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ) | บันทึกข้อมูลสำเร็จ |

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [02-05-10_01 บันทึกข้อมูล Problem Tracking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319601299)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [Output](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321599472#id-07WS%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2Temporarytable%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AAS400-A_Output)
- [err_pr_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [err_pr_007](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [MBFLIB_BFPREQHD](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPREQHD)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [MBFLIB_BFPREQTR](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPREQTR)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [MBFLIB_BFPRQPSP](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPRQPSP)
- [MBFLIB_BFPRQFLP](http://wiki.thaisamut.co.th/display/APP/MBFLIB_BFPRQFLP)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
