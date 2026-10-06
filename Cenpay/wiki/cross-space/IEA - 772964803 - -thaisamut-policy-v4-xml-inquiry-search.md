# /thaisamut/policy/v4/xml/inquiry/search

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 772964803
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=772964803

---

[ [Overview](#id-/thaisamut/policy/v4/xml/inquiry/search-Overview) ] [ [Input](#id-/thaisamut/policy/v4/xml/inquiry/search-Input) ] [ [Process](#id-/thaisamut/policy/v4/xml/inquiry/search-Process) ] [ [Output](#id-/thaisamut/policy/v4/xml/inquiry/search-Output) ]

## Overview

ค้นหาข้อมูลกรมธรรม์ unit linked พร้อมข้อมูลเกี่ยวกับ กธ. เช่น ชื่อผู้เอาประกัน, ข้อมูลชำระเบี้ยประกัน, ข้อมูลตัวแทน, ข้อมูลเกี่ยวกับสังกัด/สาขา เป็นต้น

## Input

searchByPolicyNo

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| policyNo | String | เลขที่กรมธรรม์ |   |   |

## Process

ข้อมูลตารางทั้งหมดเกี่ยวกับกรมธรรม์ Unit linked

| # | ชื่อตาราง | รายละเอียด |
|---|---|---|
| 1 | ULLIB.TPSPLC01 | ตารางสำหรับเก็บข้อมูลกรมธรรม์ทั้งหมด ของ UL |
| 2 | ULLIB.TPSPLC02 | ตารางสำหรับเก็บข้อมูลที่อยู่ของผู้เอาประกัน |
| 3 | ULLIB.TPSPLC03 | ตารางสำหรับเก็บข้อมูลเก็บข้อมูลผู้รับผลประโยชน์ |
| 4 | ULLIB.TPSPLC05 | ตารางสำหรับเก็บข้อมูลเบอร์โทรศัพท์ของผู้เอาประกันของกรมธรรม์ UL |
| 5 | ULLIB.TBCPMD01 | ตารางสำหรับเก็บข้อมูลงวดชำระ |
| 6 | ULLIB.cpdprd01[http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=528253040](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=528253040) | ข้อมูลแบบประกัน |
| 7 | ULLIB.ccmbrc01 | สาขา |
| 8 | ULLIB.ccmsts01 | สถานะกรมธรรม์ |
| 9 | LIPS.PSPAGTMS | ข้อมูลตัวแทน |
| 10 | ULLIB.CCLDMG01 | สถานะภาพสมรส |
| 11 | ULLIB.CCLDMG02 | สัญชาติ |
| 12 | ULLIB.CCLDMG05 | ศาสนา |
| 13 | ULLIB.TPSPLC01 | ข้อมูลอาชีพของผู้เอาประกัน |
| 14 | ULLIB.TPSPLC34 | ตารางสำหรับเก็บข้อมูลกรมธรรม์ทั้งหมด ของ Rider |

1.ข้อมูลกรมธรรม์
1.ข้อมูลกรมธรรม์ ตัวแทน สาขา
**Plan**
<![CDATA[SELECT pol.POLNVC AS policyNo, SALCVC AS agentcode,--Edit Alias name BRSCVC AS branchCode, br.BRNMVC AS branchName, pol.PDCDVC AS planCode , prod.PDNMVC AS planName, CTSTDT AS commencementDate , pol.MATUDT AS maturityDate, pol.PYMDNM AS monthlyMode, PREMBD AS basicPlanModalPremium, pol.PRPYNM AS policyYear, pol.PRPTNM AS period, PMNDDT AS dueDate,--YYYYMMDDHH24MISSMS LTPMDT AS paidFrom, --YYYYMMDDHH24MISSMS วันที่ชํา ระเบี้ยของงวดล่าสุด lastpaymentdate EPYMDT AS paidTo,--YYYYMMDDHH24MISSMS RCNOVC AS receiptNo, pol.COVTNM AS coverageTerm , pol.PAYTNM AS paymentTerm , pol.SMINBD AS sumAssured, PYAMBD AS premium, PCSTNM AS policyStatusCode, polst.PLSEVC AS additionalPolicyStatus, pol.PMSDDT AS fullyPaidDate, PCSDDT AS policyStdate, LTPMDT AS lastPaymentDate, CUSTID AS custId , title.ttabvc AS title , --Remark 17/08/2563 CNTHVC AS name , CSTHVC AS surname, GENDNM AS sex, BRTHDT AS birthDate, AGPCNM AS ageAsOf, carty.CISCVC AS cardType, carty.IDTYNM AS cardTypeCode, carty.idtyvc AS cardTypeDesc, IDNMVC AS idNo, PPNMVC AS passport, --nat.CISCVC as nationalitycode, --เอาออก nat.NTONVC AS nationalityDesc, ----Edit Alias name mar.CISCVC as maritalStatus, ----Edit Alias name mar.MASTVC AS maritalStatusDesc, ----Edit Alias name --rel.CISCVC as religioncode, --เอาออก rel.RELIVC AS religionDesc, ----Edit Alias name AGL.AGICVC AS IClicense,----Edit 09/03/2564 ag.AGTTTL as agenttiltle ,----Edit Alias name ag.AGTNAM as agentname ,----Edit Alias name ag.AGTSNM as agentsurname ----Edit Alias name FROM ULLIB.TPSPLC01 pol LEFT JOIN ullib.CCLTTL01 title ON (pol.CTTHNM = title.TITLNM ) LEFT JOIN ULLIB.CCMBRC01 br ON (br.BRNCVC = pol.BRSCVC) LEFT JOIN lips.pspagtms ag ON (pol.SALCVC = ag.AGENT7) LEFT JOIN LIPS.ULTSAGIC agl ON (ag.AGENT7= agl.AGNTNM) ----add 09/03/2564 LEFT JOIN ULLIB.CPDPRD01 prod ON (pol.PDCDVC = prod.PDCDVC) LEFT JOIN ULLIB.CCMSTS01 polst ON (pol.PCSTNM = polst.PLSTNM) LEFT JOIN ULLIB.CCLDMG01 mar ON (pol.MASTNM = mar.MASTNM) LEFT JOIN ULLIB.CCLDMG02 nat ON (pol.NTNLNM = nat.NTONNM) LEFT JOIN ULLIB.CCLDMG05 rel ON (pol.RLCDNM = rel.RELINM) LEFT JOIN ullib.ccmgnd01 tsex ON (pol.GENDNM = tsex.GNDRNM) LEFT JOIN ULLIB.CUWIDT01 carty ON (pol.IDTYNM = carty.IDTYNM) left join ullib.ccmmod01 pmode on (pol.PYMDNM = pmode.mdtynm) WHERE pol.POLNVC = &#39;?&#39;; ]]>
1.1.อ่านข้อมูลสถานะกรมธรรม์
**policyStatus**
<![CDATA[SELECT PLSTNM as policyStatusCode, PLSEVC as policyStatus, PLSEVC AS additionalPolicyStatus,plstvc as additionalPolicyStatusDesc FROM ULLIB.ccmsts01]]>
2.ข้อมูลผู้รับประโยชน์
2.1.อ่านข้อมูลผู้รับประโยชน์
**Beneficiary**
<![CDATA[SELECT POLNVC, CASE WHEN a.TTTHNM &lt;&gt; 0 THEN titlvc||NMTHVC|| SRTHVC WHEN a.TTTHNM = 0 AND SRTHVC = &#39;&#39; THEN NMTHVC ELSE NMTHVC|| SRTHVC END as benefitName, a.RLTYNM as benefitRelationCode , case when a.RLTYNM = 6 then rlotvc else rltyvc end as benefitRelation, PCBNNM as benefitRelationPercentage, idnmvc as benefitIdCardNo, a.IDTYNM as benefitCardType, TLNOVC as benefitMobile, d.CISCVC AS benefitCardTypeCode, --เพิ่มเติม d.IDTYVC AS benefitCardTypeDesc --เพิ่มเติม FROM ULLIB.TPSPLC03 a left join ULLIB.CCLTTL01 c2 ON (a.TTTHNM = c2.TITLNM) LEFT JOIN ULLIB.CCLREL01 c ON (a.RLTYNM = c.RLTYNM ) LEFT JOIN ULLIB.CUWIDT01 d ON (a.IDTYNM = d.IDTYNM) WHERE POLNVC = ? ]]>

| Name | Type | Description | Source Field |
|---|---|---|---|
| benefitName | String |   | ULLIB.CCLTTL01.titlvc +NMTHVC +' '+SRTHVC |
| benefitIdCardNo | String |   | PLBNID |
| benefitRelation | String |   | rltyvc |
| benefitRelationCode | String |   | RLTYNM |
| benefitRelationPercentage | BigDecimal |   | PCBNNM |
| benefitMobile | String |   | TLNOVC |
| benefitCardTypeUl | BenefitCardType |   | IDTYNM |
| benefitCardTypeCode | String |   | d.CISCVC |
| benefitCardTypeDesc | String |   | d.IDTYVC |

2.2.อ่านข้อมูลบัญชีธนาคารผู้รับประโยชน์
**Beneficiary**
<![CDATA[SELECT POLNVC ,BNBCNM,bk.CISCNM as bankCode , bk.FINSVC as bankname , BNBAVC as accountNo, BNBNVC as accountName, BNBBVC as branchName FROM ULLIB.TPSPLC01 pol LEFT JOIN ULLIB.CCMFIN01 bk ON (pol.BNBCNM = bk.FINSNM ) WHERE polnvc = ?]]>

| Name | Type | Description | Source Field |
|---|---|---|---|
| bankCode | String | รหัสธนาคาร | CISCNM |
| branchName | String | ชื่อสาขาธนาคาร | FINSVC |
| accountNo | String | เลขที่บัญชีผู้รับผลประโยชน์ | BNBAVC |
| accountName | String | ชื่อบัญชีผู้รับผลประโยชน์ | BNBNVC |

3.ข้อมูลอาชีพ
**occupation**
<![CDATA[SELECT polocc.POLNVC ,polocc.OCTYNM ,polocc.OCCONM , (CASE WHEN polocc.OCCONM = 249 THEN polocc.OCDCVC ELSE occ.OCCPVC END ) as occupationDesc FROM ULLIB.TPSPLC07 polocc LEFT JOIN ULLIB.CUWOCC03 occ ON (polocc.OCCONM = occ.occpnm ) WHERE polocc.POLNVC = ? and polocc.OCTYNM = &#39;1&#39; ----------------------------------------------------------------------------------------------- Remark 17/8/2563 : ปรับแก้ Query เพิ่ม and polocc.OCTYNM = &#39;1&#39; ]]>
4.ข้อมูลการจ่ายเบี้ยประกัน
อ่านข้อมูลงวดการชำระเบี้ยงวดล่าสุด **latestPayment**
**premium**
<![CDATA[SELECT distinct rec.POLNVC AS policyNo, --เลขที่กรมธรรม์ rec.PRPYNM AS policyYear, --ปีที่ชำระ&#39; rec.PRPTNM AS period, --งวดที่ชำระ CASE WHEN rec.PRPYNM = 1 AND rec.PRPTNM = 1 THEN to_char(tpy.depodt)||&#39;000000000&#39; --วันที่ชำระ WHEN rec.PRPYNM = 0 AND rec.PRPTNM = 0 THEN rec.lpyddt --วันที่ชำระ ELSE to_char(due.PMDADT)||&#39;000000000&#39; --วันที่ชำระ END as paymentDate, rec.RCNOVC AS receiptNo, --เลขที่ใบเสร็จรับเงิน --CASE WHEN rec.PRPYNM = 1 AND rec.PRPTNM = 1 THEN to_char(tms.CTSTDT)||&#39;000000000&#39; --วันครบกำหนดชำระ --ELSE due.PMDUDT --วันครบกำหนดชำระ --END AS paidFrom, --CASE WHEN rec.PRPYNM = 1 AND rec.PRPTNM = 1 THEN to_char(tms.CTSTDT)||&#39;000000000&#39; --วันครบกำหนดชำระ --ELSE due.EGRPDT --ชำระได้ถึงวันที่ --END AS paidTo, rec.pstdnm AS paidFrom, rec.pendnm AS paidTo, rec.AMNTBD AS totalPremiumAmount --เบี้ยรวม ----&gt;edit field FROM ullib.TBCRCS01 rec LEFT JOIN ULLIB.TPSPLC01 tms ON (rec.POLNVC = tms.POLNVC) LEFT JOIN ULLIB.TBCPYM01 tpy ON (rec.POLNVC = tpy.POLNVC) AND (rec.RCNOVC = tpy.RCNOVC) LEFT JOIN ULLIB.tbcpmd01 due ON (rec.RCNOVC = due.RCNOVC) AND (rec.PRPYNM = due.PRPYNM) AND (rec.PRPTNM = due.PRPTNM) LEFT JOIN ULLIB.ccmmny06 chn ON (due.MCHCVC = chn.chcdvc) WHERE rec.polnvc = ? order by paymentDate desc Limit 1]]>

| Name | Type | Description | Source Field | Example |
|---|---|---|---|---|
| policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | PRPYNM |   |
| period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | PRPTNM |   |
| paymentDate | Date | วันครบกำหนดชำระ | PMDUDT | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
| paidFrom | Date | วันเริ่มชำระ | PMDADT | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
| paidTo | Date | วันชำระถึง | PMDLDT | YYYYMMDDHH24MISSMS Ex.20920528000000000 |

อ่านข้อมูลชำระงวดถัดไป
**premium next due**
<![CDATA[ SELECT PRPYNM as policyYear , --ปีที่ชำระ PRPTNM as period,--งวดที่ชำระ PMDADT as paidFrom ,--วันที่ชำระ RCNOVC as receiptNo,--เลขที่ใบเสร็จรับเงิน PMDUDT as dueDate ,--วันครบกำหนดชำระ PMDLDT as paidTo ,--ชำระได้ถึงวันที่ SPAMBD as premium --เบี้ยชำระต่องวด FROM ULLIB.tbcpmd01 WHERE polnvc = ? AND DUSTNM = &#39;2&#39;]]>

| Name | Type | Description | Source Field | Example |
|---|---|---|---|---|
| policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | PRPYNM |   |
| period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | PRPTNM |   |
| dueDate | Date | วันครบกำหนดชำระ | PMDUDT | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
| paidFrom | Date | วันที่ชำระ | PMDADT | YYYYMMDD Ex.20200828 |
| paidTo | Date | วันชำระถึง | PMDLDT | YYYYMMDDHH24MISSMS Ex.20920528000000000 |

5.ข้อมูลสินไหม
**deathClaim**
<![CDATA[select c.polnvc as policyNo, c.CLNOVC as claimRegisterNo,--เลขที่สินไหม จาก Claim Register APCRDT as claimDeathDate,--วันที่ยื่นเอกสาร สินไหมรับเรื่อง c.CONDDT as claimDeathResultDate,--วันที่พิจารณาสินไหม CGTNVC as isClaimDeathRegister,--ประเภทการเคลม Death Claim cpstvc as claimDeathResultCode, --รหัสสถานะการพิจารณา csdsvc as claimDeathResultDesc ,--ชื่อสถานะการพิจารณา CLTABD as claimPayAmount --จำนวนเงิน from ullib.TCLCLM01 c left join ullib.ccasts02 s on (c.cpstvc = s.csccvc) left join ullib.tclpay01 t on (t.polnvc = c.polnvc) where c.polnvc = &#39;UL00000029&#39; ]]>
6.ข้อมูลสัญญาเพิ่มเติม (UL Rider)
6.1 อ่านข้อมูลสัญญาเพิ่มเติม
<![CDATA[SELECT pol.POLNVC, pol.PLCYID, rd.rdsnvc AS rider_short_name, rd.cmdtdt AS commencement_date, rd.matudt AS mature_date, rd.sminbd AS sum_insured, rd.rdpfbd AS rider_first_premium, rd.expfbd AS extra_first_premium FROM ULLIB.TPSPLC34 rd INNER JOIN ULLIB.TPSPLC01 pol ON (rd.plcyid = pol.PLCYID ) WHERE rd. polnvc = &#39;?&#39;]]>

| Name | Type | Description | Source Field |
|---|---|---|---|
| rider_short_name | String | ชื่อย่อสัญญาเพิ่มเติม | rdsnvc |
| commencement_date | Date | วันที่เริ่มต้นสัญญา | cmdtdt |
| mature_date | Date | วันที่ครบสัญญา | matudt |
| sum_insured | BigDecimal | จำนวนเงินเอาประกันสัญญาเพิ่มเติม | sminbd |
| rider_first_premium | BigDecimal | เบี้ยประกันสัญญาเพิ่มเติมครั้งแรก | rdpfbd |
| extra_first_premium | BigDecimal | บี้ยสัญญาเพิ่มเติมเพิ่มพิเศษครั้งแรก (Extra Premium) | expfbd |

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

|   | Name | Mapping Alias | Type | Description | Example |
|---|---|---|---|---|---|
| ArrayList |   |   |   | Empty เมื่อไม่มีข้อมูล |   |
| **ข้อมูลกรมธรรม์** |
|   | policyNo | 1.policyNo | String |   |   |
|   | policyType | U | PolicyType | ประเภทกรมธรรม์ = U : Unit linked |   |
|   | planCode | 1.planCode | String | รหัสแบบประกัน |   |
|   | planName | 1.planName | String | ชื่อแบบประกัน |   |
|   | coverageTerm | 1.coverageTerm | BigDecimal | ระยะคุ้มครอง |   |
|   | paymentTerm | 1.paymentTerm | BigDecimal | ระยะชำระเบี้ย |   |
|   | commencementDate | 1.commencementDate | Date | วันเริ่มสัญญา | YYYYMMDD Ex.20200528 |
|   | maturityDate | 1.maturityDate | Date | วันครบสัญญา (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน ) | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
|   | fullyPaidDate | 1.fullyPaidDate | Date | วันครบชำระ (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน) | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
|   | policyStatusDate | 1.policyStdate | Date | วันที่เปลี่ยนสถานะกรมธรรม์ | YYYYMMDDHH24MISSMS Ex.20920528000000000 |
|   | sumAssured | 1.sumAssured | BigDecimal | ทุนประกัน |   |
|   | status |   | Status | ข้อมูลเกี่ยวกับสถานะของกรมธรรม์ |   |
|   | insured |   | Insured | ผู้เอาประกัน |   |
|   | affiliation |   | Affiliation | ข้อมูลเกี่ยวกับสังกัด/สาขา |   |
|   | agent |   | Agent | ตัวแทน |   |
|   | benefit |   | Benefit | ข้อมูลผู้รับผลประโยชน์ |   |
|   | payment |   | Payment | ข้อมูลเกี่ยวกับการจ่ายเบี้ยประกัน |   |
|   | claim |   | Claim | ข้อมูลเกี่ยวกับ Claim |   |
| ข้อมูลเกี่ยวกับ Rider |
| ArrayList |   |   |   |   |   |
|   | rider_short_name | rdsnvc | String | ชื่อย่อ UL Rider | CI120 |
|   | commencement_date | cmdtdt | Date | วันที่เริ่มสัญญา (commencement_date) | Database : 20230927 แปลงเป็น 27/09/2566 |
|   | mature_date | matudt | Date | วันที่ครบสัญญา (mature_date) | Database : 20950927 แปลงเป็น 27/09/2638 |
|   | sum_insured | sminbd | BigDecimal | จำนวนเงินเอาประกันสัญญาเพิ่มเติม (sum_insured) | 500,000.00 |
|   | riderSumPremium | Sum (rdpfbd+expfbd) | BigDecimal | เบี้ย (ยอดรวมเบี้ยRider + Extra และรวมค่า Emr แล้ว) | 945.00 |
| **ข้อมูลเกี่ยวกับสถานะของกรมธรรม์ Status** |
|   | policyStatus | 1.1.policyStatus | PolicyStatus | สถานะกรมธรรม์ EnumpolicyStatusCodePolicyStatusAdditionalPolicyStatusadditionalPolicyStatusDesc1InforceInforceมีผลบังคับ5InforceNon-Lapse Guaranteedสิทธิการมีผลบังคับอย่างต่อเนื่อง3InforceGrace Periodระยะเวลาผ่อนผันชำระเบี้ยประกันภัย7InforcePremium Holidayหยุดพักชำระเบี้ยประกันภัย6not InforceSurrenderเวนคืน8not InforceFee-Lookการยกเลิกกรมธรรม์9not InforceAuto Surrenderเวนคืนอัตโนมัติ10not InforceMaturityครบกำหนดสัญญา11not InforceVoidC- Cancelled (Void)12not InforceClaimสินไหม2not InforceDeathมรณกรรม4not InforceLapseการขาดอายุของกรมธรรม์13not InforceFreezeหยุดพักกรมธรรม์ |   |
| policyStatusCode | PolicyStatus | AdditionalPolicyStatus | additionalPolicyStatusDesc |
| 1 | Inforce | Inforce | มีผลบังคับ |
| 5 | Inforce | Non-Lapse Guaranteed | สิทธิการมีผลบังคับอย่างต่อเนื่อง |
| 3 | Inforce | Grace Period | ระยะเวลาผ่อนผันชำระเบี้ยประกันภัย |
| 7 | Inforce | Premium Holiday | หยุดพักชำระเบี้ยประกันภัย |
| 6 | not Inforce | Surrender | เวนคืน |
| 8 | not Inforce | Fee-Look | การยกเลิกกรมธรรม์ |
| 9 | not Inforce | Auto Surrender | เวนคืนอัตโนมัติ |
| 10 | not Inforce | Maturity | ครบกำหนดสัญญา |
| 11 | not Inforce | Void | C- Cancelled (Void) |
| 12 | not Inforce | Claim | สินไหม |
| 2 | not Inforce | Death | มรณกรรม |
| 4 | not Inforce | Lapse | การขาดอายุของกรมธรรม์ |
| 13 | not Inforce | Freeze | หยุดพักกรมธรรม์ |
|   | additionalPolicyStatus | 1.1.additionalPolicyStatus | AdditionalPolicyStatus | สถานะกรมธรรม์เพิ่มเติม |   |
|   | policyStatusCode | 1.1.policyStatusCode | String | รหัสสถานะกรมธรรม์ |   |
|   | additionalPolicyStatusDesc | 1.1.additionalPolicyStatusDesc | String | ชื่อสถานะกรมธรรม์ (ไทย) |   |
| ข้อมูลผู้เอาประกัน Insured |
|   | custId | 1.custId | String | รหัสลูกค้า AS400 |   |
|   | title | 1.title | String | คำนำหน้าผู้เอาประกัน |   |
|   | name | 1.name | String | ชื่อผู้เอาประกัน |   |
|   | surname | 1.surname | String | นามสกุลผู้เอาประกัน |   |
|   | sex | 1.sex | Sex | เพศENUM:1= ชาย, 2= หญิง |   |
|   | birthDate | 1.birthDate | Date | วันเกิด (พ.ศ. format : dd-MM-YYYY)จากการปรึกษา วันเกิดจะมีการใช้งานเฉพาะกรมธรรม์ที่มีผล กรมธรรม์อุตฯ เมื่อไม่มีผลแล้ว จึงไม่จำเป็นต้องดึงวันเกิดขึ้นมาให้ไปดึงวันเกิดที่ ILISLIB_CUSTMMC0 และ GOVLIB_GCUSTMC0หากไม่มีข้อมูล ให้ส่งเป็นค่าว่าง | YYYYMMDD Ex.20200828 |
|   | ageAsOf | 1.ageAsOf | Integer | อายุ ณ วันทำประกัน |   |
|   | idNo | 1.idNo | Integer | เลขที่บัตรประชาชน/เลขที่หนังสือเดินทาง |   |
|   | cardType | 1.cardType | InsureCardType | ประเภทบัตรบัตรประจำตัวประชาชน1CIDPassport3PAS |   |
| บัตรประจำตัวประชาชน | 1 | CID |
| Passport | 3 | PAS |
|   | cardTypeCode | 1.cardTypeCode | String | รหัสประเภทบัตร |   |
|   | cardTypeDesc | 1.cardTypeDesc | String | คำอธิบายประเภทบัตร |   |
|   | nationalityDesc | 1.nationalityDesc | String | คำอธิบายสัญชาติ |   |
|   | occupationDesc | 3.occupationDesc | String | คำอธิบายอาชีพ |   |
|   | religionDesc | 1.religionDesc | String | คำอธิบายศาสนา |   |
|   | maritalStatus | 1.maritalStatus | String | สถานภาพ |   |
|   | maritalStatusDesc | 1.maritalStatusDesc | String | คำอธิบายสถานภาพ |   |
| **ข้อมูลเกี่ยวกับสังกัด/สาขา Affiliation** |
|   | branchCode | 1.branchCode | String | รหัสสาขา |   |
|   | branchName | 1.branchName | String | ชื่อสาขา |   |
|   | salesChannel | AGENT | SalesChannel | ช่องทางการขาย UL ขายผ่าน ช่องทางตัวแทน ช่องทางเดียวAGENT = ตัวแทน |   |
| ข้อมูลตัวแทน Agent |
|   | code | 1.agentcode (code) | String | รหัสตัวแทน 7 หลัก(สนญ.) |   |
|   | title | 1.AGENTTILTLE (AGTITL ) | String | คำนำหน้าชื่อตัวแทน |   |
|   | name | 1.agentname (AGNAME) | String | ชื่อตัวแทน |   |
|   | surname | 1.agentsurname (AGLSNM) | String | นามสกุลตัวแทน |   |
|   | IClicense | 1.IClicense | String | IC license | เพิ่มเติมจาก สามัญ อุตสาหกรรม PA |
| **ข้อมูลผลประโยชน์ Benefit** |
|   | bank |   | Bank | ข้อมูลธนาคารบัญชีผู้รับผลประโยชน์ |   |
|   | beneficiaries | ArrayList<> beneficiaries | Beneficiary[] | ข้อมูลเกี่ยวกับผู้รับผลประโยชน์ |   |
| ข้อมูลธนาคารบัญชีผู้รับผลประโยชน์ Bank |
|   | bankCode | 2.2.bankCode | String | รหัสธนาคาร |   |
|   | bankName | 2.2.bankname | String | ชื่อธนาคาร |   |
|   | accountNo | 2.2.accountNo | String | เลขที่บัญชีผู้รับผลประโยชน์ |   |
|   | accountName | 2.2.accountName | String | ชื่อบัญชีผู้รับผลประโยชน์ |   |
| ข้อมูลเกี่ยวกับผู้รับผลประโยชน์ Beneficiary |
| ArrayList |   |   |   | Empty เมื่อไม่มีข้อมูล |   |
|   | benefitName | 2.1.benefitName | String | ผู้รับผลประโยชน์ |   |
|   | benefitIdCardNo | 2.1.benefitIdCardNo | String | หมายเลขประจำตัวประชาชนผู้รับผลประโยชน์ |   |
|   | benefitRelation | 2.1.benefitRelation | String | ความสัมพันธ์1 บิดา 2 มารดา 3 สามี 4 ภรรยา 5 บุตร 6 อื่นๆ 7 เจ้าหนี้ที่เป็นนิติฯ 8 พี่ชาย 9 พี่สาว 10 น้องชาย 11 น้องสาว 12 ลุง 13 ป้า 14 น้า 15 อา 16 ปู่ 17 ย่า 18 ตา 19 ยาย 20 หลานชาย 21 หลานสาว 22 สาธารณกุศล 47 สถานที่ปฏิบัติธรรม 48 ผู้แทนโดยชอบธรรม 49 ผอ.สถานพินิจและคุ้มครองเด็กและเยาวชน |   |
|   | benefitRelationCode | 2.1.benefitRelationCode | String | รหัสความสัมพันธ์ |   |
|   | benefitRelationPercentage | 2.1.benefitRelationPercentage | BigDecimal | สัดส่วนผู้รับผลประโยชน์ |   |
|   | benefitMobile | 2.1.benefitMobile | String | เบอร์โทร |   |
|   | benefitCardType | 2.1.benefitCardType | BenefitCardType | ประเภทบัตรบัตรประจำตัวประชาชน1CIDPassport3PAS |   |
| บัตรประจำตัวประชาชน | 1 | CID |
| Passport | 3 | PAS |
|   | benefitCardTypeCode | 2.1.benefitCardTypeCode | String | รหัสประเภทบัตร |   |
|   | benefitCardTypeDesc | 2.1.benefitCardTypeDesc | String | คำอธิบายประเภทบัตร |   |
| ข้อมูลเกี่ยวกับการจ่ายเบี้ยประกัน Payment |
|   | monthlyMode | 1.monthlyMode | Integer | โหมดการชำระ |   |
|   | basicPlanModalPremium | 1.basicPlanModalPremium, | BigDecimal | เบี้ยประกันสัญญาหลักรายงวด |   |
|   | netPremium | 4.totalPremiumAmount | BigDecimal | เบี้ยประกันภัยรวมรายงวด | เป็นยอดเดียวกันกับ เบี้ยประกันสัญญาหลักรายงวด เนื่องจาก UL ยังไม่มีสัญญาเพิ่มเติม |
|   | premiumAmount | 1.basicPlanModalPremium, | BigDecimal | เบี้ยประกันภัยรวม | เป็นยอดเดียวกันกับ เบี้ยประกันสัญญาหลักรายงวด เนื่องจาก UL ยังไม่มีสัญญาเพิ่มเติม |
|   | latestPayment |   | PaymentPaidTo | ข้อมูลเกี่ยวกับงวดชำระถึง |   |
|   | nextDue |   | PaymentDue[] | ข้อมูลเกี่ยวกับกำหนดชำระถัดไป |   |
| **ข้อมูลเกี่ยวกับงวดชำระถึง latestPayment กรณีเป็นแบบประกัน ที่ชำระเบี้ยครั้งเดียว ให้ดึงข้อมูล จาก Query ในข้อ 1 (UL002 = สมาร์ท อินเวสเตอร์ ยูนิต ลิงค์ (ชำระเบี้ยประกันภัยครั้งเดียว)) ชำระรายงวด ดึงจากข้อ 4 (**(UL001**)** |
|   | policyYear | 1 or 4 policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | 2 หมายถึง ปีที่ 2 ของกรมธรรม์ |
|   | period | 1 or 4 period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | 1 หมายถึง งวดที่ 1 ของปีกรมธรรม์นั้นๆ |
|   | paymentDate | 1 or 4 paymentDate | Date | วันครบกำหนดชำระ | YYYYMMDDHH24MISSMS |
|   | paidFrom | 1 or 4 paidFrom | Date | วันเริ่มชำระ | YYYYMMDDHH24MISSMS |
|   | paidTo | 1 or 4 paidTo | Date | วันชำระถึง | YYYYMMDDHH24MISSMS |
|   | receiptNo | 1 or 4 receiptNo | String | เลขที่ใบเสร็จ |   |
| **ข้อมูลเกี่ยวกับกำหนดชำระถัดไป nextDue** |
|   | policyYear | 4.policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | 2 หมายถึง ปีที่ 2 ของกรมธรรม์ |
|   | period | 4.period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | 1 หมายถึง งวดที่ 1 ของปีกรมธรรม์นั้นๆ |
|   | dueDate | 4.dueDate | Date | วันครบกำหนดชำระ | YYYYMMDDHH24MISSMS |
|   | paidFrom | 4.paidFrom | Date | วันเริ่มชำระ | YYYYMMDDHH24MISSMS |
|   | paidTo | 4.paidTo | Date | วันชำระถึง | YYYYMMDDHH24MISSMS |
| **ข้อมูลเกี่ยวกับการเคลม claim** |
|   | claimRegisterNo | 5.claimRegisterNo | String | เลขที่สินไหม จาก Claim Register |   |
|   | claimDeathDate | 5.claimDeathDate | Date | วันที่ยื่นเอกสาร สินไหมรับเรื่อง | YYYYMMDDHH24MISSMS |
|   | claimDeathResultDate | 5.claimDeathResultDate | Date | วันที่พิจารณาสินไหม | YYYYMMDDHH24MISSMS |
|   | isClaimDeathRegister | 5.isClaimDeathRegister | String | ประเภทการเคลม Death Claimสถานะการแจ้งเคลมกรณีเสียชีวิตเท่ากับ Death Claim ("Y")ไม่เท่ากับ Death Claim ("N") |   |
|   | claimDeathResultCode | 5.claimDeathResultCode | String | รหัสสถานะการพิจารณาN เอกสารไม่ครบ (สินไหมส่งคืนเอกสาร) P ส่งข้อมูลเพื่อพิจารณา PA ยืนยันบางส่วน PVC พิจารณาเปลี่ยนแปลงข้อมูล ผรป.เรียบร้อย PWP รอพิจารณาเปลี่ยนแปลงข้อมูล ผรป.บางส่วน PY เรียบร้อยแล้ว RC ยกเลิกสัญญาเพิ่มเติม RJ ปฏิเสธความคุ้มครอง RJD ปฏิเสธความคุ้มครองฆ่าตัวตายตายภายใน 1 ปี RJI ปฏิเสธการจ่ายสินไหมเนื่องจากผู้รับประโยชน์ทั้งหมดฆ่าผู้เอาประกัน RJL ปฏิเสธความคุ้มครอง/กรมธรรม์สิ้นสุดผลบังคับ RJP ปฏิเสธเสนอพิจารณา RJS ปฏิเสธการจ่ายสินไหม/คืนมูลค่าเวนคืนกรมธรรม์ VP บอกล้างกรมธรรม์ WA อยู่ระหว่างการพิจารณา WP รอยืนยันจ่าย WI ดำเนินการขายกองทุน |   |
|   | claimDeathResultDesc | 5.claimDeathResultDesc | String | ชื่อสถานะการพิจารณา |   |
|   | claimPayAmount | 5.claimPayAmount | BigDecimal | จำนวนเงินจ่ายสินไหม |   |

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchUlByPolicyNo xmlns="http://v4.search.policyws.targetbundles.osgi.thaisamut/">
            <policyNo xmlns="">UL00000269</policyNo>
        </searchUlByPolicyNo>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchUlByPolicyNoResponse xmlns:ns2="http://v4.search.policyws.targetbundles.osgi.thaisamut/">
            <return>
                <policyNo>UL00000269</policyNo>
                <policyType>U</policyType>
                <planCode>UL001</planCode>
                <planName>สมาร์ท อินเวสเตอร์ ยูนิตลิงค์</planName>
                <coverageTerm>72</coverageTerm>
                <paymentTerm>72</paymentTerm>
                <commencementDate>2020-05-28T00:00:00+07:00</commencementDate>
                <maturityDate>2092-05-28T00:00:00+07:00</maturityDate>
                <fullyPaidDate>2020-05-28T00:00:00+07:00</fullyPaidDate>
                <policyStatusDate>2020-05-28T00:00:00+07:00</policyStatusDate>
                <sumAssured>7200000.000</sumAssured>
                <affiliation>
                    <branchCode>3504</branchCode>
                    <branchName>วาปีปทุม</branchName>
                    <salesChannel>AGENT</salesChannel>
                </affiliation>
                <insured>
                    <title>นางสาว</title>
                    <name>สุวิษา</name>
                    <surname>เทสใบเสร็จห้า</surname>
                    <sex>FEMALE</sex>
                    <birthDate>1992-08-09T00:00:00+07:00</birthDate>
                    <ageAsOf>27</ageAsOf>
                    <idNo>7120371778227</idNo>
                    <cardType>CARD_TYPE_AS400_CID</cardType>
                    <cardTypeCode>1</cardTypeCode>
                    <cardTypeDesc>เลขประจำตัว 13 หลัก</cardTypeDesc>
                    <nationalityDesc>ไทย</nationalityDesc>
                    <occupationDesc>ข้าราชการครู</occupationDesc>
                    <religionDesc>พุทธ</religionDesc>
                    <maritalStatus>SNG</maritalStatus>
                    <maritalStatusDesc>โสด</maritalStatusDesc>
                </insured>
                <agent>
                    <code>5952662</code>
                    <title>นาง</title>
                    <name>โคกขาม</name>
                    <surname>กุลาตีไม้</surname>
                    <IClicense>6101050690</IClicense>
                </agent>
                <status>
                    <policyStatus>INFORCE</policyStatus>
                    <policyStatusCode>1</policyStatusCode>
                    <additionalPolicyStatusUl>INFORCE</additionalPolicyStatusUl>
                    <additionalPolicyStatusDesc>มีผลบังคับ</additionalPolicyStatusDesc>
                </status>
                <benefit>
                    <bank/>
                    <beneficiaries>
                        <benefitName>นาย                                                                                                                                                   ตะวัน                                                                                               เทสใบเสร็จห้า</benefitName>
                        <benefitRelation>พี่ชาย</benefitRelation>
                        <benefitRelationCode>8</benefitRelationCode>
                        <benefitRelationPercentage>50.00</benefitRelationPercentage>
                        <benefitCardTypeUl>UNKNOWN</benefitCardTypeUl>
                        <benefitCardTypeCode></benefitCardTypeCode>
                        <benefitCardTypeDesc>ไม่รู้จัก</benefitCardTypeDesc>
                    </beneficiaries>
                    <beneficiaries>
                        <benefitName>นาง                                                                                                                                                   เอ                                                                                                  เทสใบเสร็จห้า</benefitName>
                        <benefitIdCardNo>5546801005037</benefitIdCardNo>
                        <benefitRelation>มารดา</benefitRelation>
                        <benefitRelationCode>2</benefitRelationCode>
                        <benefitRelationPercentage>50.00</benefitRelationPercentage>
                        <benefitCardTypeUl>CARD_TYPE_AS400_1</benefitCardTypeUl>
                        <benefitCardTypeCode>1</benefitCardTypeCode>
                        <benefitCardTypeDesc>CID</benefitCardTypeDesc>
                    </beneficiaries>
                </benefit>
                <payment>
                    <monthlyMode>3</monthlyMode>
                    <basicPlanModalPremium>30000.000</basicPlanModalPremium>
                    <netPremium>30000.000</netPremium>
                    <premiumAmount>30000.000</premiumAmount>
                    <latestPayment>
                        <policyYear>1</policyYear>
                        <period>3</period>
                        <dueDate>2020-11-28T00:00:00+07:00</dueDate>
                        <paidFrom>2020-08-28T00:00:00+07:00</paidFrom>
                        <paidTo>2021-02-27T00:00:00+07:00</paidTo>
                        <receiptNo>PR256300000326</receiptNo>
                    </latestPayment>
                    <nextDue>
                        <policyYear>1</policyYear>
                        <period>4</period>
                        <dueDate>2021-02-28T00:00:00+07:00</dueDate>
                        <paidFrom>2021-04-10T00:00:00+07:00</paidFrom>
                        <paidTo>2021-05-27T00:00:00+07:00</paidTo>
                    </nextDue>
                </payment>
            </return>
        </ns2:searchUlByPolicyNoResponse>
    </soap:Body>
</soap:Envelope>
```

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=528253040](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=528253040)
