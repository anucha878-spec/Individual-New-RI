# /thaisamut/policy/v3.9/xml/inquiry/search

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 1186856997
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1186856997

---

## ตรวจสอบกรณี LAPSE APL โดยตรวจสอบที่ OLIS.OLPLOAHDOverview

ค้นหาข้อมูลกรมธรรม์ อุตสาหกรรม (ปช.,ขพ.) และ สามัญ, พร้อมข้อมูลเกี่ยวกับ กธ. เช่น ชื่อผู้เอาประกัน, ข้อมูลชำระเบี้ยประกัน, ข้อมูลตัวแทน, ข้อมูลเกี่ยวกับสังกัด/สาขา, สัญญาเพิ่มเติมและ Rider plan code ของสามัญ เป็นต้น
Reference การดึงข้อมูลกรมธรรม์ จาก [/thaisamut/policy/v3.8/xml/inquiry/search](/pages/viewpage.action?pageId=1144619373)
Reference การดึงข้อมูล Rider และ Rider Plan Code จาก [/thaisamut/policy/v6/xml/inquiry/search](/pages/viewpage.action?pageId=971637253)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
<ชื่อ operation>

## Input

searchByPolicyNo

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| policyNo | String | เลขที่กรมธรรม์ | 9846415 |   |

searchINDByPolicyNo

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| policyNo | String | เลขที่กรมธรรม์ | F5977116 |   |

## Process

- ค้นหาประเภทกรมธรรม์**Policy Type** <![CDATA[select 1 from ILISLIB.POLCYDT0 pol where pol.policy = ? FETCH FIRST 1 ROWS ONLY]]> **Policy Type** <![CDATA[select 1 as GOV from GOVLIB.GPLCYDT0 kpl where kpl.policy = ? FETCH FIRST 1 ROWS ONLY]]> ORD:ประเภทสามัญ ค้นหาข้อมูลกรมธรรม์No.TableDesc1[OLIS.OLPPOLMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLMS)รายละเอียดกรมธรรม์สามัญ2ILISLIB.FLCSIDTRข้อมูล mapping id no กับ policy no3[OLIS.OLPCUSMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCUSMS)รายละเอียดลูกค้า4[OLIS.OLPCUSM2](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCUSM2)ข้อมูลรายละเอียดบัตรประจำตัวลูกค้า5[OLIS.OLPAPPDT](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPAPPDT)ข้อมูลใบคำขอ6[LIPS.PSPAGMT1](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=3507089)ข้อมูลชื่อตัวแทน7[LIPS.PSPSLORG](http://wiki.thaisamut.co.th/display/APP/LIPS_PSPSLORG)ข้อมูลเขตงาน และสาขา8[OLIS.OLPCLAIM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCLAIM)ข้อมูลการแจ้ง claim9[OLIS.OLPACPY0](/display/APP/OLIS_OLPACPY0)ข้อมูลการจ่ายสินไหม : Ordinary // ADD: 2024-10-0710[OLIS.OLPSRRMS](/display/APP/OLIS_OLPSRRMS)Surrender Master // ADD: 2024-10-07 หาข้อมูลกรมธรรม์, ข้อมูลเกี่ยวกับสังกัด/สาขา, ข้อมูลผู้เอาประกัน, ข้อมูลตัวแทน, ข้อมูลสินไหมเสียชีวิต**Policy** <![CDATA[SELECT olp.CRAGT# -- as รหัสตัวแทน, -- CRAGT# | 2 | ... | NUMERIC | 7 | 0 | 10 | 0 | ... | โค้ด ตัวแทน ปัจจุบัน , olp.CRORG# -- as รหัสสาขา, -- CRORG# | 2 | ... | NUMERIC | 7 | 0 | 10 | 0 | ... | โค้ด หน่วยงาน , g.SLUNNM -- as ชื่อสาขา, -- SLUNNM | 1 | ... | CHAR | 20 | 0 | 0 | 0 | ... | ชื่อหน่วยงาน , olp.POLIC# -- as เลขที่กรมธรรม์, -- POLIC# | 1 | ... | CHAR | 7 | 0 | 0 | 0 | ... | เลขที่ กรมธรรม์ , olp.POPLN@ -- as รหัสแบบประกัน, -- POPLN@ | 1 | ... | CHAR | 3 | 0 | 0 | 0 | ... | โค้ด แบบ กธ. , olp.POCMDT -- as วันที่เริ่มสัญญา , -- POCMDT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | วันเริ่ม สัญญา , olp.POMTDT -- POMTDT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | วันครบ กำหนด สัญญา , olp.POPEDT -- POPEDT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | วันครบ กำหนด ชรบ. , olp.POLPDT -- วันที่ขาดผล , olp.POMOD# -- as โหมดการชำระ, -- POMOD# | 2 | ... | NUMERIC | 2 | 0 | 10 | 0 | ... | #เดือน ที่ชำระ (Mode) , olp.POTODT -- as งวดชำระงวดสุดท้าย, -- POTODT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | ชำระ ถึง วันที่ , olp.POSTS@ -- as สถานะ ---***สถานะกรมธรรม์ต้องเป็น Inforce เท่านั้น คือ I,F,O *** -- POSTS@ | 1 | ... | CHAR | 1 | 0 | 0 | 0 | ... | สถานภาพ กรมธรรม์ , olp.POPREM -- as เบียประกันภัยรวม, -- POPREM | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยประกัน //TODO check if premium is total premium , olp.POEXPR --เบี้ยเพิ่มพิเศษ หรือเบี้ยที่ฝ่ายพิจารณาเรียกเก็บเพิ่ม , lc.CUSTM# -- as รหัสลูกค้า AS400 , lc.CUTITL -- as คำนำหน้าผู้เอาประกัน, -- CUTITL | 1 | ... | CHAR | 10 | 0 | 0 | 0 | ... | คำนำหน้า , lc.CUNAME -- as ชื่อผู้เอาประกัน , -- CUNAME | 1 | ... | CHAR | 20 | 0 | 0 | 0 | ... | ชื่อ ผู้เอา- ประกัน , lc.CULSNM -- as นามสกุลผู้เอาประกัน, -- CULSNM | 1 | ... | CHAR | 30 | 0 | 0 | 0 | ... | LASTNAME , ag.AGTITL -- as คำนำหน้าตัวแทน, -- AGTITL | 1 | ... | CHAR | 10 | 0 | 0 | 0 | ... | คำนำหน้า , ag.AGNAME -- as ชื่อตัวแทน, -- AGNAME | 1 | ... | CHAR | 20 | 0 | 0 | 0 | ... | ชื่อ , ag.AGLSNM -- as นามสกุลตัวแทน -- AGLSNM | 1 | ... | CHAR | 30 | 0 | 0 | 0 | ... | LASTNAME , lc.CUSEX@ -- OLIS | OLPCUSMS | CUSEX@ | 1 | ... | CHAR | 1 | 0 | 0 | 0 | ... | เพศ | , lc.CUBIDT -- OLIS | OLPCUSMS | CUBIDT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | วันเกิด (วดป.) , olp.POSMAS -- OLIS | OLPPOLMS | POSMAS | 3 | ... | DECIMAL | 9 | 0 | 10 | 0 | ... | จำนวน เงิน เอาประกัน , olp.CUISAG -- OLIS | OLPPOLMS | CUISAG | 3 | ... | DECIMAL | 2 | 0 | 10 | 0 | ... | อายุ ผู้เอา- ประกัน , id.FDIDCD -- ILISLIB | FLCSIDTR | FDIDCD , id.FDTYID , lc.CUPHO@ , olp.CUOCP# , lc.CUMSTS , app.APNATI , app.APRELI , claim.CLTYPE , claim.CLSTS@ FROM OLIS.OLPPOLMS olp LEFT JOIN ILISLIB.FLCSIDTR id ON olp.POLIC# = id.FDPOL LEFT JOIN OLIS.OLPCUSMS lc ON olp.CUSTM# = lc.CUSTM# -- LEFT JOIN OLIS.OLPCUSM2 lc2 ON lc2.CUSTM# = lc.CUSTM# LEFT JOIN OLIS.OLPAPPDT app ON app.APPOL# = olp.POLIC# LEFT JOIN LIPS.PSPAGMT1 ag ON olp.CRAGT# = ag.AGENT# LEFT JOIN LIPS.PSPSLORG g ON olp.crorg# = g.slunt# LEFT JOIN OLIS.OLPCLAIM claim ON claim.POLIC#=olp.POLIC# WHERE olp.POLIC# = ?]]> หาข้อมูลชื่อแบบประกัน**Plan** <![CDATA[SELECT PLAN@ as plan_code, PLNAM3 as plan_name, PLCVTM as coverage_term, PLPMTM as payment_term FROM OLIS.OLPPLNTB WHERE PLAN@ = ? --** Comment By Piyapong.ph &lt;11-02-2025&gt; : ปรับ field PLNAM1 เป็น PLNAM3 เพื่อแสดงชื่อแบบประกันของสามัญให้ถูกต้อง &lt;โครงการ iService Phase 4&gt; **]]> อ่านข้อมูลสถานะกรมธรรม์ สถานะกรธรรม์สามัญ **ก****รมธรรม์สามัญ**สามัญ (OLIS.OLPPOLMS.POSTS@) Source statusPolicyStatusAdditionalPolicyStatusIINFORCEINFORCEFINFORCEFULLY_PAIDOINFORCEINFORCEWINFORCEDISABLEDEINFORCEEXTENDEDRNOT_INFORCEREDUCED_PAID_UPPNOT_INFORCEAUTO_PAID_UPCNOT_INFORCEVOIDZNOT_INFORCECANCELLEDDNOT_INFORCEDEATHSNOT_INFORCESURRENDERLNOT_INFORCELAPSEANOT_INFORCEAUTO_SURRENDERTNOT_INFORCETERMINATEDMNOT_INFORCEMATURITYเงื่อนไขเพิ่มเติมสถานะกรมธรรม์กรณีมรณะ ถ้าพบข้อมูลใน Table OLIS.OLPCLAIM และมี CLTYPE = 'D' `SELECT``POLIC#,``-- | 1 | ... | CHAR | 7 | 0 | 0 | 0 | ... | เลขที่ กรมธรรม์``CLTYPE``--| 1 | ... | CHAR | 1 | 0 | 0 | 0 | ... | ประเภท สินไหม``FROM````OLIS.OLPCLAIM``WHERE````POLIC# = ? /*PolicyNo*/````AND` `CLTYPE =``'D'` ค่า statusPolicyStatusAdditionalPolicyStatusNOT_INFORCEDEATHตรวจสอบกรณี INFORCE และ FULLY APL โดยตรวจสอบที่ OLIS.OLPLOAHDSELECT LHPOL# AS POLICY_NO FROM OLIS.OLPLOAHD WHERE LHPOL# = ? AND LHTYPE = 'AP' -- AP หมายถึง สถานะ APL LOAN AND LHSTS@ = 'A' -- A หมายถึง Active GROUP BY LHPOL# ค่า status IF POSTS@ = 'I' THENPolicyStatusAdditionalPolicyStatusINFORCEINFORCE_AUTO_POLICY_LOANIF POSTS@ = 'F' THENPolicyStatusAdditionalPolicyStatusINFORCEFULLY_AUTO_POLICY_LOANตรวจสอบกรณี LAPSE APL โดยตรวจสอบที่ OLIS.OLPLOAHD SELECT LPPOL# AS POLICY_NO, LPLPDTFROM OLIS.OLPAPLLP WHERE LPPOL# = ? AND (LPLPDT = ? OR LPLPDT = ?) ค่า statusPolicyStatusAdditionalPolicyStatusINFORCELAPSE_AUTO_POLICY_LOANตรวจสอบข้อมูล ยกเลิกสัญญา กรณี VOID (Source status = C) และ CANCELLED (Source status = Z) โดยตรวจสอบที่ตาราง OLIS.OLPACPY0 [2025-05-29] เพิ่มเงื่อนไข ACTYPE IN ('FL', 'DC') ( [![img](http://jira.thaisamut.co.th/images/icons/issuetypes/bug.png)CSS-2630](http://jira.thaisamut.co.th/browse/CSS-2630) - [iService4.1_MilestoneB][กรมธรรม์ของฉัน > 5 ปี] ORD,additionalPolicyStatus = VOID ระบบไม่แสดงวันที่ยกเลิกกรมธรรม์ (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) )* FL = Free Look > ลูกค้าขอยกเลิก กธ ภายใน 15-30 วัน, DC = Decline > บริษัทเป็นคนบอกล้าง กธ ลูกค้าSELECT DISTINCT ACEVDT , ACPYDT , ACPAMT FROM OLIS.OLPACPY0 WHERE ACTYPE IN ('FL','DC') AND ACMRK@ = '0' AND ACPOL# = ? --policy_no ORDER BY ACPYDT ASCตรวจสอบข้อมูล เวนคืนกรมธรรม์ กรณี SURRENDER (Source status = S) โดยตรวจสอบที่ตาราง OLIS.OLPSRRMS SELECT DISTINCT SRAMNT, SRDATE , ACDATE FROM OLIS.OLPSRRMS WHERE POLIC# = ? --policy_no ORDER BY ACDATE DESC อ่านข้อมสัญญาเพิ่มเติม**Rider** <![CDATA[– ข้อมูลไรเดอร์ SELECT a.POLIC#, b.RD@, b.RDABN2, CASE WHEN substring(a.RDPOL@,1,1) = &#39;H&#39; THEN RDPOL@ WHEN substring(a.RDPOL@,1,1) = &#39;O&#39; THEN RDPOL@ ELSE null END AS Rider_Plan_Code, b.RDNAME, b.RDNAM1, a.RDMTDT, a.RDSMAS, a.RDCMDT, a.RDPREM, a.RDEXPR, a.RDTODT, a.RDRTPR, b.RDTYPE FROM OLIS.OLPRIDMS a LEFT JOIN olis.OLPRIDER b on a.RD@ = b.RD@ WHERE a.POLIC# = ? ]]> อ่านข้อมูลผลประโยชน์ตรวจสอบแบบประกันเป็น MRTA หรือไม่? **Check MRTA** <![CDATA[SELECT count(1) as row FROM OLIS.OLPPLNTB WHERE (PLTYPE = &#39;MRTA&#39; OR PLTYPE = &#39;MLTA&#39;) AND PLAN@ = ?]]> เป็นแบบประกัน MRTA ให้อ่านชื่อธนาคาร ซึ่งเป็นผู้รับผลประโยชน์**Bank name** <![CDATA[select APBANK as name from OLIS.OLPAPPDT where APPOL# = ?]]> อ่านข้อมูลผู้รับผลประโยชน์ **beneficiary** <![CDATA[SELECT POLIC#, POBTTL || POBFNM || POBFSN as name, POBREF as relation, case when POBREF = &#39;6&#39; then POBRNM when POBREF != &#39;6&#39; then REFNAM end as relation_desc ,POBRAT as relation_percentage, POBIDN as id_no ,POBITY as card_type, POBPHN as mobile FROM OLIS.OLPBFNAM left join OASYS.OAPRELRF on(REFCDE = POBREF) where POLIC# = ? --[เลขกรมธรรม์]]]> NameTypeDescriptionSource FieldbenefitNameString IF MRTA Then OLIS.OLPAPPDT.APBANKELSE OLIS.OLPBFNAM.POBTTL + OLIS.OLPBFNAM.POBFNM + OLIS.OLPBFNAM.POBFSNbenefitIdCardNoString POBIDNbenefitRelationString**ความสัมพันธ์ อ่านข้อมูลจาก Data Base**1.สามัญ : ใช้ POBRNM REFNAM จาก Table OLIS.OLPBFNAM ตามเงื่อนไข Case When2.อุตสาหกรรมแบ่งออกดังนี้2.1. ปช.Step 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง ILISLIB.BENEFDT0 หากไม่พบข้อมูลให้ทำ Step 2Step 2. ใช้ relation_desc จากตาราง ILISLIB.BENEFRF1 หากไม่พบข้อมูลให้ทำ Step 3Step 3. ใช้ relation_desc จากตาราง ILISLIB.BENEFMJ0 2.2 ขพ.- ถ้าเป็นคู่ขวัญStep 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง ILISLIB.BENEFDT0Step 2. ใช้ relation_desc จากตาราง ILISLIB.BENEFRF1 หากไม่พบข้อมูลให้ทำ Step 3 Step 3. ใช้ relation_desc จากตาราง ILISLIB.BENEFMJ0- ถ้าไม่ใช่คู่ขวัญStep 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง GOVLIB.GBENEDT0 Step 2. ใช้ relation_desc จากตาราง GOVLIB.GBENERF1 หากไม่พบข้อมูลให้ทำ Step 3 Step 3. ใช้ relation_desc จากตาราง GOVLIB.GBENEMJ0**เงื่อนไขที่ยังคงขอให้มีอยู่ ของ ปช ขพ หากเจอ 2 กรณี ตามด้านล่าง**ZERO("0","ไม่มี") UNKOWN("-1","ไม่รู้จัก")**ถ้าไม่ใช่ 0,-1 ให้ดึงจาก Data Base ได้เลย**","ไม่รู้จัก"),REFNAMbenefitRelationCodeString POBREFbenefitRelationPercentageBigDecimal POBRATbenefitMobileString POBPHNbenefitCardTypeBenefitCardTypeประเภทบัตรCARD_TYPE_AS400_1("1","บัตรประจำตัวประชาชน 13 หลัก"), CARD_TYPE_AS400_5("5","หนังสือเดินทาง"), UNKOWN("","ไม่รู้จัก"),POBITY อ่านข้อมูลบัญชีธนาคารผู้รับผลประโยชน์**Bank Benefit** <![CDATA[select bacode as bank_code, babrnm as branch_name, baacno as ac_no , baacti as title, baacnm as name, baacsn as surname from olis.olpoliba where BAPOL# = ?]]> NameTypeDescriptionSource FieldbankCodeStringรหัสธนาคารbacodebranchNameStringชื่อสาขาธนาคารbabrnmaccountNoStringเลขที่บัญชีผู้รับผลประโยชน์baacnoaccountNameStringชื่อบัญชีผู้รับผลประโยชน์baacti+baacnm+baacsn อ่านข้อมูลการจ่ายเบี้ยประกันNameTypeDescriptionSource FieldmonthlyModeIntegerโหมดการชำระPOMOD#basicPlanModalPremiumBigDecimalเบี้ยประกันสัญญาหลักรายงวดOLIS.OLPRECDT.RCPOPR + OLIS.OLPRECTR.RCPOPRriderModalPremiumBigDecimalเบี้ยประกันสัญญาเพิ่มเติมรายงวด(OLIS.OLPRECDT.RD13PR+ OLIS.OLPRECDT.RD24PR+ OLIS.OLPRECDT.RDHCPR+ OLIS.OLPRECDT.RDOTPR+ OLIS.OLPRECDT.RCEXPR) + (OLIS.OLPRECTR.RCPOEP + OLIS.OLPRECTR.RD13PR + OLIS.OLPRECTR.RD13EP + OLIS.OLPRECTR.RD24PR + OLIS.OLPRECTR.RD@5PR + OLIS.OLPRECTR.RD@6PR + OLIS.OLPRECTR.RD@6EP + OLIS.OLPRECTR.RD78PR + OLIS.OLPRECTR.RD@9PR) netPremiumBigDecimalเบี้ยประกันภัยรวมรายงวดpolicy.payment.basicPlanModalPremium +policy.payment.riderModalPremium อ่านข้อมูลชำระงวดล่าสุด**Payment To** <![CDATA[SELECT RCPOL#, -- CHAR | 7 | 0 | 0 | 0 | ... | เลขที่ กธ. | null | 7 | 1 | NO | ... | null | null | null | 0 | RCPYY#, -- NUMERIC | 2 | 0 | 10 | 0 | ... | ชำระ ปีที่ | null | -1 | 2 | NO | ... | null | null | null | 0 | RCPYI#, -- NUMERIC | 2 | 0 | 10 | 0 | ... | ชำระ งวดที่ | null | -1 | 3 | NO | ... | null | null | null | 0 | RC# , -- NUMERIC | 8 | 0 | 10 | 0 | ... | เลขที่ ใบเสร็จ | null | -1 | 4 | NO | ... | null | null | null | 0 | RCISS@, -- CHAR | 1 | 0 | 0 | 0 | ... | ISSUER 0=BR 1=HO | null | 1 | 5 | NO | ... | null | null | null | 0 | RCORG#, -- NUMERIC | 7 | 0 | 10 | 0 | ... | สาขา | null | -1 | 6 | NO | ... | null | null | null | 0 | RCPYDT, -- NUMERIC | 6 | 0 | 10 | 0 | ... | วันที่ รับชำระ | null | -1 | 7 | NO | ... | null | null | null | 0 | RCFRDT, -- NUMERIC | 6 | 0 | 10 | 0 | ... | ชำระ ตั้งแต่ | null | -1 | 8 | NO | ... | null | null | null | 0 | RCTODT, -- NUMERIC | 6 | 0 | 10 | 0 | ... | ชำระ ถึง | null | -1 | 9 | NO | ... | null | null | null | 0 | RCPOPR, -- DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก | null | -1 | 10 | NO | ... | null | null | null | 0 | RD13PR, -- DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก ACC. | null | -1 | 11 | NO | ... | null | null | null | 0 | RD24PR, -- DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก HB1/2 | null | -1 | 12 | NO | ... | null | null | null | 0 | RDHCPR, -- DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ย HC | null | -1 | 13 | NO | ... | null | null | null | 0 | RDOTPR, -- DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยอื่นๆ | null | -1 | 14 | NO | ... | null | null | null | 0 | RCEXPR, -- DECIMAL | 7 | 2 | 10 | 0 | ... | เบี้ยเพิ่ม พิเศษ | null | -1 | 15 | NO | ... | null | null | null | 0 | RCWAY@ -- CHAR | 1 | 0 | 0 | 0 | ... | ชำระที่ | null | 1 | 16 | NO | ... | null | null | null | 0 | FROM OLIS.OLPRECDT WHERE RCPOL# = ? /*PolicyNo*/ ORDER BY RCTODT DESC]]> NameTypeDescriptionSource FieldpolicyYearIntegerปีที่กรมธรรม์ของงวดชำระล่าสุดนี้RCPYY#periodIntegerงวดของกรมธรรม์ของงวดชำระล่าสุดนี้RCPYI#dueDateDateวันครบกำหนดชำระ-paidFromDateวันเริ่มชำระRCFRDTpaidToDateวันชำระถึงRCTODTperiodYearPaidFromStringงวดเริ่มชำระ (ของงวด Due)-periodYearPaidToStringงวดชำระถึง (ของงวด Due)-premiumDetailPremiumDetail[]รายละเอียดเบี้ย statusStringสถานะใบเสร็จสามัญRCSTS@ข้อมูลเบี้ย PremiumDetail[]amountBigDecimalเบี้ยหลักRCPOPRamountBigDecimalเบี้ยหลัก ACC.RD13PRamountBigDecimalเบี้ยหลัก HB1/2RD24PRamountBigDecimalเบี้ย HCRDHCPRamountBigDecimalเบี้ยอื่นๆRDOTPRamountBigDecimalเบี้ยเพิ่ม พิเศษRCEXPR อ่านข้อมูลชำระงวดถัดไป**Payment Due** <![CDATA[SELECT RCPYY#, -- as ปีที่ , RCPYY# | 2 | ... | NUMERIC | 2 | 0 | 10 | 0 | ... | ชำระ ปีที่ RCPYI#, -- as งวดที่, RCPYI# | 2 | ... | NUMERIC | 2 | 0 | 10 | 0 | ... | ชำระ งวดที่ RCPOPR, -- RCPOPR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก RCPOEP, -- RCPOEP | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | Extra Prem. RD13PR, -- RD13PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก ACC. RD13EP, -- RD13EP | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยเพิ่ม ACC. RD24PR, -- RD24PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก HB1/2 RD@5PR, -- RD@5PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก PB RD@6PR, -- RD@6PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก WP RD@6EP, -- RD@6EP | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยเพิ่ม WP RD78PR, -- RD78PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก AE/1 RD@9PR, -- RD@9PR | 3 | ... | DECIMAL | 9 | 2 | 10 | 0 | ... | เบี้ยหลัก LT RCFRDT, RCTODT, -- | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | ชำระ ถึง RCSTS@ --สถานะ FROM OLIS.OLPRECTR WHERE RCPOL# = ?/*PolicyNo*/ -- RCPOL# | 1 | ... | CHAR | 7 | 0 | 0 | 0 | ... | เลขที่ กธ. AND ( RCSTS@ = &#39;B&#39; -- RCSTS@ | 1 | ... | CHAR | 1 | 0 | 0 | 0 | ... | STatuS , B OR RCSTS@ = &#39;A&#39; -- อ้างอิง http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=222789769 (1. การสร้างใบเสร็จสามัญ) OR RCSTS@ = &#39;C&#39; /*OR RCSTS@ = &#39;E&#39;*/ ) AND RCFRDT &gt;= ? -- วันที่จ่าย (จะส่งตัด) ข้อ 2. RCFRDT | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | ชำระ ตั้งแต่ ORDER BY RCFRDT ASC]]> NameTypeDescriptionSource FieldpolicyYearIntegerปีที่กรมธรรม์ของงวดชำระล่าสุดนี้RCPYY#periodIntegerงวดของกรมธรรม์ของงวดชำระล่าสุดนี้RCPYI#dueDateDateวันครบกำหนดชำระpolicy.payment.latestPayment.paidTo + 1paidFromDateวันเริ่มชำระRCFRDTpaidToDateวันชำระถึงRCTODTperiodYearPaidFromStringงวดเริ่มชำระ (ของงวด Due)-periodYearPaidToStringงวดชำระถึง (ของงวด Due)-premiumDetailPremiumDetail[]รายละเอียดเบี้ย ข้อมูลเบี้ย PremiumDetail[]amountBigDecimalExtra Prem.RCPOEPamountBigDecimalเบี้ยหลัก ACC.RD13PRamountBigDecimalเบี้ยเพิ่ม ACC.RD13EPamountBigDecimalเบี้ยหลัก HB1/2RD24PRamountBigDecimalเบี้ยหลัก PBRD@5PRamountBigDecimalเบี้ยหลัก WPRD@6PRamountBigDecimalเบี้ยเพิ่ม WPRD@6EPamountBigDecimalเบี้ยหลัก AE/1RD78PRamountBigDecimalเบี้ยหลัก LTRD@9PR IND:ประเภทอุตสาหกรรม (ปช.) ค้นหาข้อมูลกรมธรรม์, ข้อมูลเกี่ยวกับสังกัด/สาขา, ข้อมูลผู้เอาประกัน, ข้อมูลตัวแทนตามรายละเอียดดังนี้ Query อ่านข้อมูล Active Policy **Active Policy** <![CDATA[select pol.MBPOL#, pol.MBPLAN, pol.MBCDTE, pol.MBMDTE, pol.MBPDTE, pol.MBSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.LSMSTS, dt.OLDSTS, dt.PAIDDT, dt.TPDPRD, dt.MNDLMK, dt.TRSFMK, dt.ALWCMK, dt.HQTRMK, dt.NWSUMK, dt.TFCTPY, dt.TTACMK, dt.BRTRMK, dt.CSTRBK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MBIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MBBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.LCAGT7, dt.PAYMOD, pol.MBPREM, dt.PAYSTS, dt.CKLSTP, pol.MBLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO , pol.MBSTAS from ILISLIB.POLCYMB2 pol left join ILISLIB.POLCYDT0 dt on pol.MBPOL# = dt.POLICY left join ILISLIB.CUSTMMC1 cus on pol.MBCSID = cus.MCCSID where pol.MBPOL# = ?]]> ถ้าไม่เจอ ให้อ่านข้อมูล Inactive Policy**Inactive Policy** <![CDATA[select pol.MXPOL#, pol.MXPLAN, pol.MXCDTE, pol.MXMDTE, pol.MXPDTE, pol.MXSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.LSMSTS, dt.OLDSTS, dt.PAIDDT, dt.TPDPRD, dt.MNDLMK, dt.TRSFMK, dt.ALWCMK, dt.HQTRMK, dt.NWSUMK, dt.TFCTPY, dt.TTACMK, dt.BRTRMK, dt.CSTRBK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MXIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MXBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.LCAGT7, dt.PAYMOD, pol.MXPREM, dt.PAYSTS, dt.CKLSTP, pol.MXLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO , pol.MXSTAS from ILISLIB.POLCYMX2 pol left join ILISLIB.CUSTMMC1 cus on pol.MXCSID = cus.MCCSID left join ILISLIB.POLCYDT0 dt on pol.MXPOL# = dt.POLICY where pol.MXPOL# = ?]]> ถ้าไม่เจอ ให้อ่านข้อมูล ILISLIB.POLCYMS1**Underwrite Policy** <![CDATA[select pol.MSPOL#, pol.MSPLAN, pol.MSCDTE, pol.MSMDTE, pol.MSPDTE, pol.MSSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.LSMSTS, dt.OLDSTS, dt.PAIDDT, dt.TPDPRD, dt.MNDLMK, dt.TRSFMK, dt.ALWCMK, dt.HQTRMK, dt.NWSUMK, dt.TFCTPY, dt.TTACMK, dt.BRTRMK, dt.CSTRBK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MSIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MSBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.AGENT7, dt.PAYMOD, pol.MSPREM, dt.PAYSTS, dt.CKLSTP, pol.MSLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO, CASE WHEN LPAD(pol.MSBR#,4,&#39;0&#39;) &lt;&gt; &#39;0001&#39; THEN CONCAT(&#39;207&#39;,LPAD(pol.MSBR#,4,&#39;0&#39;)) ELSE ms.AMORG# END AS AMORG#, pol.MSSTAS, pol.MSEVDT from ILISLIB.POLCYMS1 pol left join ILISLIB.CUSTMMC0 cus on pol.MSCSID = cus.MCCSID left join ILISLIB.POLCYDT0 dt on pol.MSPOL# = dt.POLICY left join ILISLIB.APPINDMS ms on pol.MSPOL# = ms.AMPOL# where pol.MSPOL# = ?]]> ** Comment By Piyapong.ph <28-10-2024> : เพิ่ม field MSEVDT จากไฟล์ ILISLIB.POLCYMS1 เพื่อใช้ดึงวันที่ ยกเลิกกรมธรรม์ กรณี บอกล้างกรมธรรม์อุตสาหกรรม หากมีข้อมูลจะทำการ Mapping ที่ claimPayments.paymentDateหาข้อมูลชื่อแบบประกัน <![CDATA[SELECT PLPLAN as plan_code, PLNAME as plan_name, PLCVTM as coverage_term, PLPMTM as payment_term FROM PILLIB.INSURPL0 WHERE PLPLAN = ?]]> อ่านข้อมูลสถานะกรมธรรม์ สถานะกรมธรรม์อุตสาหกรรม ปช. ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะ เวนคืน/ มรณะ/ บอกล้าง ในระบบ AS/400กรณี SURRENDER (เวนคืน) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการเวนคืนหรือไม่ ที่ตาราง ILISLIB.SURREMN0 `SELECT``MNPOL#``FROM``ILISLIB.SURREMN0``WHERE``MNPOL# = ? //policy``no` พบข้อมูลที่ตารางเวนคืน PolicyStatusAdditionalPolicyStatusNOT_INFORCESURRENDERไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป กรณี DEATH ( มรณะ) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการมรณะหรือไม่ ที่ตาราง ACCLIB.DEATHHD1 `SELECT``TOPOL#``FROM``ACCLIB.DEATHHD1``WHERE``T OPOL# = ? //policy``no` พบข้อมูลที่ตารางมรณะPolicyStatusAdditionalPolicyStatusNOT_INFORCEDEATHไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการมรณะหรือไม่ ที่ตาราง CLMLIB.CLMRGCR1 `SELECT``CRPOL#``FROM``CLMLIB.CLMRGCR1``WHERE``CRPOL# = ? //policy``no``AND``CRCODE =``'D'` พบข้อมูลที่ตารางมรณะPolicyStatusAdditionalPolicyStatusNOT_INFORCEDEATHไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์ที่มีการรับเรื่องสินไหม ที่ตาราง CLMLIB.CLMRGCR1 ** <21-02-2025> : อัปเดต wiki ตามเงื่อนไขใน source code และปรับแก้เงื่อนไขให้รองรับการแสดงสถานะกรมธรรม์ <iService Phase 4: Milestone B> * ผลการพิจารณาเป็น(CRRSLT) ไม่เป็น N ** วันที่รับเรื่อง มากกว่างวดบัญชีที่จ่ายจากตาราง ACCLIB.INDEX0 (IDADTE) SELECT CRCODE, CRPOL# FROM CLMLIB.CLMRGCR1 a LEFT JOIN ACCLIB.INDEX0 b on a."CRPOL#" = b."IDPOL#" WHERE a."CRPOL#" = ? AND a.CRCODE in ('C','D','T' ) AND a.CRRSLT <> 'N' AND (a.CRRDTE>b.IDADTE OR b.IDADTE is null) พบข้อมูลที่ตารางรับเรื่องสินไหม และสถานะตามประเภทสินไหม ***Source (CRCODE)PolicyStatusDescCสินไหมคุ้มครองบุตรDสินไหมมรณกรรมTสินไหมสูญเสียอวัยวะ,ทุพพลภาพตรวจสอบกรณีพบว่าเป็นสินไหมมรณกรรมSource (CRCODE)PolicyStatusAdditionalPolicyStatusDNOT_INFORCEDEATH ไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป กรณี VOID (บอกล้าง) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ACCLIB.RETDCNH2 `SELECT``TRPOL#``FROM``ACCLIB.RETDCNH2``WHERE``TRPOL# = ? //policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ILISLIB.UWBKLMG2 `SELECT``MGPOL#``FROM``I LISLIB.UWBKLMG2``WHERE``MGPOL# = ? //policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป- ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ACCLIB.RETDCN0 `SELECT TRPOL#``FROM ACCLIB.RETDCN0``WHERE TRPOL#``= ? //policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ACCLIB.INDEX1 `SELECT IDPOL#``FROM ACCLIB.INDEX1`WHERE IDPOL# = ? //policy_no AND IDCODE = 'R' พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป กรณี MATURITY (ครบสัญญา) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการครบสัญญาหรือไม่ ที่ตาราง ACCLIB.INDEX1 `SELECT IDPOL# AS POLICY_NO FROM ACCLIB.INDEX1 WHERE IDPOL# = ? //policy_no AND IDCODE = 'M'` พบข้อมูลที่ตารางครบสัญญาPolicyStatusAdditionalPolicyStatusNOT_INFORCEMATURITYไม่พบข้อมูลที่ตารางครบสัญญา ให้ทำ **ข้อ b.** ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะที่ ILISLIB_POLCYDT0`SELECT``POLICY, POLSTS, MBLSTP, FLMMYY``FROM``ILISLIB.POLCYDT0``LEFT JOIN ILISLIB.POLCYMB0 ON POLICY = MBPOL#``WHERE POLICY``= ? //policy``no` Source status (POLSTS)Condition (เพิ่มเติม)PolicyStatusAdditionalPolicyStatus5 NOT_INFORCESURRENDER19 NOT_INFORCESURRENDER17 NOT_INFORCEMATURITY8 NOT_INFORCEDEATH11 NOT_INFORCEVOID13 INFORCEDISABLED14 NOT_INFORCETERMINATED88 NOT_INFORCELAPSE18 NOT_INFORCECLAIM_HQ1 || 2 || 3 || 7 || 9 || 10 || 12 || 15 || 20 || 99MBLSTP(งวดชำระครั้งสุดท้าย) = FLMMYY(เดือนที่ชำระครบ)INFORCEFULLY_PAIDถ้าหากไม่เข้าเงื่อนไข ให้ทำ **ข้อ c.**ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะ จาก Number Of Days In GracePeriod โดยการนำ payment.latestPayment.paidTo(**MBLSTP**) มาเทียบกับวัน ณ. ปัจจุบัน - ตรวจสอบ Number Of Days In GracePeriod เกิน 60 วัน Source statusPolicyStatusAdditionalPolicyStatus(SELECT MBSTAS FROM ILISLIB.POLCYMB0 WHERE MBPOL# = ?)= 6NOT_INFORCEREDUCED_PAID_UP(SELECT MBSTAS FROM ILISLIB.POLCYMB0 WHERE MBPOL# = ?) <> 6NOT_INFORCELAPSE- ตรวจสอบ Number Of Days In GracePeriod ไม่เกิน 60 วันPolicyStatusAdditionalPolicyStatusINFORCEINFORCE อ่านข้อมสัญญาเพิ่มเติม**Rider** <![CDATA[SELECT a.RIDID, -- code b.RIDNAM, -- name b.RDID, -- type name a.PRIPM, --เบี้ยประกัน a.PRIEPM, -- เบี้ยประกันเพิ่ม a.PRIMDT, -- สิ้นสุดสัญญา a.PRISIN, --ทุนประกัน a.PRICDT --เริ่มสัญญา FROM GWLIB.TBRIDMS a LEFT JOIN GWLIB.TBRIDPLN b ON a.RIDID = b.RIDID WHERE a.PRISTS &lt;&gt; &#39;C&#39; AND a.POLNO = ?]]> อ่านข้อมูลผู้เอาประกันอ่านข้อมูลเลขที่บัตรและประเภทบัตร**Rider** <![CDATA[SELECT FDIDCD AS ID_CARD, FDTYID AS CARD_TYPE FROM ILISLIB.FLCSIDTR WHERE FDPOL = ? --policy_no]]> อ่านข้อมูลสถานภาพ**Rider** <![CDATA[SELECT m.MCMRST, l.DADESC FROM ILISLIB.CUSTMMC0 m LEFT JOIN PILLIB.STANDDA0 l on ( l.daval = m.mcmrst) WHERE l.dacode = &#39;MRT&#39; AND m.mccsid = ?]]> อ่านข้อมูลอาชีพ**Rider** <![CDATA[--IND INFORCE SELECT CUS.MCOCCU,OCC.DPDESC FROM ILISLIB.CUSTMMC0 CUS LEFT JOIN ILISLIB.POLCYMB0 MB ON CUS.MCCSID = MB.MBCSID LEFT JOIN PILLIB.OCCUPDP0 OCC ON CUS.MCOCCU = OCC.DPCODE WHERE MB.MBPOL# = ?]]> **Rider** <![CDATA[--IND NOT INFORCE SELECT CUS.MCOCCU,OCC.DPDESC FROM ILISLIB.CUSTMMC0 CUS LEFT JOIN ILISLIB.POLCYMX0 MX ON CUS.MCCSID = MX.MXCSID LEFT JOIN PILLIB.OCCUPDP0 OCC ON CUS.MCOCCU = OCC.DPCODE WHERE MX.MXPOL# = ?]]> อ่านข้อมูลศาสนาและสัญชาติ**Rider** <![CDATA[SELECT TMOT1, TMOT2, TMOT3 FROM GWLIB.TMNEWIND where TMPOL = ? --policyno]]> อ่านข้อมูลตัวแทน **Rider** <![CDATA[select AGENT7, AGTTTL, AGTNAM, AGTSNM from LIPS.PSPAGTST where POSGRP = &#39;AGENT&#39; and AGENT7 = ?]]> อ่านข้อมูลสินไหมเสียชีวิต**Rider** <![CDATA[SELECT CRCODE, CRRSLT FROM CLMLIB.CLMRGCR0 WHERE CRPOL# = ?]]> NameTypeDescriptionSource FieldisClaimDeathRegisterStringสถานะการแจ้งเคลมกรณีเสียชีวิตCRCODE IF 'D' THEN YES ELSE No claimDeathResultCodeStringรหัสผลการพิจารณาCRRSLTclaimTypeStringประเภทสินไหมCRCODEC = สินไหมคุ้มครองบุตร D = สินไหมชีวิต H = สินไหมค่ารักษา N = สินไหมทดแทน T = ทุพพลภาพ** <21-02-2025> : เพิ่ม Response CRCODE เพื่อใช้ในการแสดงสถานะกรมธรรม์ <iService Phase 4: Milestone B> อ่านข้อมูลผลประโยชน์อ่านข้อมูลผู้รับผลประโยชน์ 5.1 อ่านจาก ILISLIB.BENEFDT0**beneficiary** <![CDATA[SELECT DTBNM1 as name1, DTREL1 as relation1, DTRD1 as relation_desc1, DTPCB1 as percent1, DTBID1 as id_no1, DTBNM2 as name2, DTREL2 as relation2, DTRD2 as relation_desc2, DTPCB2 as percent2, DTBID2 as id_no2, DTBNM3 as name3, DTREL3 as relation3, DTRD3 as relation_desc3, DTPCB3 as percent3, DTBID3 as id_no3, DTBNM4 as name4, DTREL4 as relation4, DTRD4 as relation_desc4, DTPCB4 as percent4, DTBID4 as id_no4, DTBNM5 as name5, DTREL5 as relation5, DTRD5 as relation_desc5, DTPCB5 as percent5, DTBID5 as id_no5, DTBNM6 as name6, DTREL6 as relation6, DTRD6 as relation_desc6, DTPCB6 as percent6, DTBID6 as id_no6, DTBNM7 as name7, DTREL7 as relation7, DTRD7 as relation_desc7, DTPCB7 as percent7, DTBID7 as id_no7, DTBNM8 as name8, DTREL8 as relation8, DTRD8 as relation_desc8, DTPCB8 as percent8, DTBID8 as id_no8, DTBNM9 as name9, DTREL9 as relation9, DTRD9 as relation_desc9, DTPCB9 as percent9, DTBID9 as id_no9, DTBN10 as name10, DTRE10 as relation10, DTRD10 as relation_desc10, DTPC10 as percent10, DTBI10 as id_no10 FROM ILISLIB.BENEFDT0 WHERE DTPOl# = ? --[เลขกรมธรรม์]]]> 5.2 จากข้อ 5.1 ถ้าไม่มี ชื่อหรือความสัมพันธ์ ให้อ่านจาก ILISLIB.BENEFRF1**beneficiary** <![CDATA[select RFBNME as name, RFRELA, SUBSTR(RFRELA, 1 , 1) as relation, CASE WHEN SUBSTR(RFRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(RFRELA,6) ELSE OAP.REFNAM END relation_desc from ILISLIB.BENEFRF1 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.RFRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where RFPOL# = ?--[เลขกรมธรรม์]]]> 5.3 จากข้อ 5.1, 5.2 ถ้าไม่มี ชื่อหรือความสัมพนัทธ์ ให้อ่านจาก ILISLIB.BENEFMJ0**beneficiary** <![CDATA[select MJBNME as name, MJRELA, SUBSTR(MJRELA, 1 , 1) as relation, CASE WHEN SUBSTR(MJRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(MJRELA,6) ELSE OAP.REFNAM END relation_desc from ILISLIB.BENEFMJ0 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.MJRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where MJPOL# = ?--[เลขกรมธรรม์]]]> อ่านข้อมูลบัญชีธนาคารผู้รับผลประโยชน์**Bank Benefit** <![CDATA[select bacode as bank_code, babrnm as branch_name, baacno as ac_no, baacnm as ac_name from olis.olpindba where BAPOL# = ?]]> อ่านข้อมูลการจ่ายเบี้ยประกัน GOV:ประเภทอุตสาหกรรม (ขพ.) ค้นหาข้อมูลกรมธรรม์, ข้อมูลเกี่ยวกับสังกัด/สาขา, ข้อมูลผู้เอาประกัน, ข้อมูลตัวแทน ตามรายละเอียดดังนี้ Query อ่านข้อมูล Active Policy**Active Policy** <![CDATA[select pol.MBPOL#, pol.MBPLAN, pol.MBCDTE, pol.MBMDTE, pol.MBPDTE, pol.MBSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.OLDSTS, dt.PAIDDT, dt.MNDLMK, dt.TRSFMK, dt.HQTRMK, dt.TFCTPY, dt.TTACMK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MBIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MBBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.LCAGT7, dt.PAYMOD, pol.MBPREM, dt.PAYSTS, dt.CKLSTP, pol.MBLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO , pol.MBSTAS from GOVLIB.GPLCYMB2 pol left join GOVLIB.GCUSTMC1 cus on pol.MBCSID = cus.MCCSID left join GOVLIB.GPLCYDT0 dt on pol.MBPOL# = dt.POLICY where pol.MBPOL# = ?]]> ถ้าไม่เจอ ให้อ่านข้อมูล Inactive Policy**Inactive Policy** <![CDATA[select pol.MXPOL#, pol.MXPLAN, pol.MXCDTE, pol.MXMDTE, pol.MXPDTE, pol.MXSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.OLDSTS, dt.PAIDDT, dt.MNDLMK, dt.TRSFMK, dt.HQTRMK, dt.TFCTPY, dt.TTACMK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MXIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MXBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.LCAGT7, dt.PAYMOD, pol.MXPREM, dt.PAYSTS, dt.CKLSTP, pol.MXLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO , pol.MXSTAS from GOVLIB.GPLCYMX2 pol left join GOVLIB.GCUSTMC1 cus on pol.MXCSID = cus.MCCSID left join GOVLIB.GPLCYDT0 dt on pol.MXPOL# = dt.POLICY where pol.MXPOL# = ?]]> ถ้าไม่เจอ ให้อ่านข้อมูล ILISLIB.POLCYMS1**Underwrite Policy** <![CDATA[select pol.MSPOL#, pol.MSPLAN, pol.MSCDTE, pol.MSMDTE, pol.MSPDTE, pol.MSSINS, dt.MOVDTE, dt.POLSTS, dt.FILTYP, dt.OLDSTS, dt.PAIDDT, dt.MNDLMK, dt.TRSFMK, dt.HQTRMK, dt.TFCTPY, dt.TTACMK, cus.MCCSID, cus.MCTITL, cus.MCNAME, cus.MCSURN, cus.MCSEX, cus.MCBDD, cus.MCBMM, cus.MCBYY, pol.MSIAGE, dt.IDCARD, dt.CRDTYP, dt.PRNGRP, pol.MSBR#, dt.DESTBR, dt.ORGTMK, dt.CHCODE, dt.AGENT7, dt.PAYMOD, pol.MSPREM, dt.PAYSTS, dt.CKLSTP, pol.MSLSTP, dt.FLMMYY, dt.NOPDMK, dt.RENWDT, dt.RENWMK, dt.POLRCP, dt.PAYDTE, dt.OLDPRD, dt.NEWPRD, dt.ASLPMK, dt.BANKMK, dt.OWNRMK, dt.EMPNO, pol.MSSTAS, pol.MSEVDT from ILISLIB.POLCYMS1 pol left join GOVLIB.GCUSTMC0 cus on pol.MSCSID = cus.MCCSID left join GOVLIB.GPLCYDT0 dt on pol.MSPOL# = dt.POLICY where pol.MSPOL# = ?]]> ** Comment By Piyapong.ph <28-10-2024> : เพิ่ม field MSEVDT จากไฟล์ ILISLIB.POLCYMS1 เพื่อใช้ดึงวันที่ ยกเลิกกรมธรรม์ กรณี บอกล้างกรมธรรม์อุตสาหกรรม หากมีข้อมูลจะทำการ Mapping ที่ claimPayments.paymentDateหาข้อมูลชื่อแบบประกัน <![CDATA[SELECT PLPLAN as plan_code, PLNAME as plan_name, PLCVTM as coverage_term, PLPMTM as payment_term FROM PILLIB.INSURPL0 WHERE PLPLAN = ?]]> อ่านข้อมูลสถานะกรมธรรม์ สถานะกรมธรรม์อุตสาหกรรม ขพ. ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะ เวนคืน/ มรณะ/ บอกล้าง ในระบบ AS/400กรณี SURRENDER (เวนคืน) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการเวนคืนหรือไม่ ที่ตาราง GOVLIB.GSURRMN0 `SELECT``MNPOL#``FROM``GOVLIB.GSURRMN0``WHERE``MNPOL# = ? //policy``no` พบข้อมูลที่ตารางเวนคืน PolicyStatusAdditionalPolicyStatusNOT_INFORCESURRENDERไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป กรณี DEATH ( มรณะ) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการมรณะหรือไม่ ที่ตาราง GOVLIB.GDEATMO0 `SELECT``MOPOL#``FROM``GOVLIB.GDEATMO0``WHERE``MOPOL# = ? //policy``no` พบข้อมูลที่ตารางมรณะPolicyStatusAdditionalPolicyStatusNOT_INFORCEDEATHไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการมรณะหรือไม่ ที่ตาราง GOVLIB.GCMRGCR1 ** <21-02-2025> : อัปเดต wiki ตามเงื่อนไขใน source code <iService Phase 4: Milestone B> SELECT CRPOL# FROM GOVLIB.GCMRGCR2 WHERE CRPOL# = ? `//policy``no` AND CRCODE = 'D' พบข้อมูลที่ตารางมรณะPolicyStatusAdditionalPolicyStatusNOT_INFORCEDEATHไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์ที่มีการรับเรื่องสินไหม ที่ตาราง GOVLIB.GCMRGCR1 ** <21-02-2025> : เพิ่มเงื่อนไขให้รองรับการแสดงสถานะกรมธรรม์ <iService Phase 4: Milestone B> * ผลการพิจารณาเป็น(CRRSLT) ไม่เป็น N ** วันที่รับเรื่อง มากกว่างวดบัญชีที่จ่ายจากตาราง ACCLIB.INDEX0 (IDADTE) SELECT CRCODE, CRPOL# FROM GOVLIB.GCMRGCR1 a LEFT JOIN ACCLIB.INDEX0 b on a."CRPOL#" = b."IDPOL#" WHERE a."CRPOL#" = :policyNo AND a.CRCODE in ('C','D','T' ) AND a.CRRSLT <> 'N' AND (a.CRRDTE>b.IDADTE OR b.IDADTE is null) พบข้อมูลที่ตารางรับเรื่องสินไหม และสถานะตามประเภทสินไหม ***Source (CRCODE)PolicyStatusDescCสินไหมคุ้มครองบุตรDสินไหมมรณกรรมTสินไหมสูญเสียอวัยวะ,ทุพพลภาพตรวจสอบกรณีสินไหมมรณกรรมSource (CRCODE)PolicyStatusAdditionalPolicyStatusDNOT_INFORCEDEATHไม่พบข้อมูลที่ตารางมรณะ >> ทำข้อถัดไป กรณี VOID (บอกล้าง) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง GOVLIB.GRETRMR0 `SELECT``MRPOL#``FROM``GOVLIB.GRETRMR0``WHERE``MRPOL# = ? //policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ILISLIB.UWBKLMG2 `SELECT``MGPOL#``FROM``ILISLIB.UWBKLMG2``WHERE``MGPOL# = ? //policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง GOVLIB.GDECLMR0 SELECT MRPOL# FROM GOVLIB.GDECLMR0 WHERE MRPOL# = ? --policy no`//policy``no` พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการบอกล้างหรือไม่ ที่ตาราง ACCLIB.INDEX1 `SELECT IDPOL#``FROM ACCLIB.INDEX1`WHERE IDPOL# = ? //policy_no AND IDCODE = 'R' พบข้อมูลที่ตารางบอกล้างPolicyStatusAdditionalPolicyStatusNOT_INFORCEVOIDไม่พบข้อมูลที่ตารางบอกล้าง >> ทำข้อถัดไป กรณี MATURITY (ครบสัญญา) - ตรวจสอบว่ากรมธรรม์นั้นเป็นรายการครบสัญญาหรือไม่ ที่ตาราง ACCLIB.INDEX1 `SELECT IDPOL# AS POLICY_NO FROM ACCLIB.INDEX1 WHERE IDPOL# = ? //policy_no AND IDCODE = 'M'` พบข้อมูลที่ตารางครบสัญญาPolicyStatusAdditionalPolicyStatusNOT_INFORCEMATURITYไม่พบข้อมูลที่ตารางครบสัญญา ให้ทำ **ข้อ b.** ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะที่ GOVLIB.GPLCYDT0`SELECT``POLICY, POLSTS, MBLSTP, FLMMYY``FROM``GOVLIB.GPLCYDT0``LEFT JOIN GOVLIB.GPLCYMB0 ON POLICY = MBPOL#``WHERE POLICY``= ? //policy``no` Source status(POLSTS)Condition (เพิ่มเติม)PolicyStatusAdditionalPolicyStatus5 NOT_INFORCESURRENDER19 NOT_INFORCESURRENDER17 NOT_INFORCEMATURITY8 NOT_INFORCEDEATH11 NOT_INFORCEVOID13 INFORCEDISABLED14 NOT_INFORCETERMINATED88 NOT_INFORCELAPSE18 NOT_INFORCECLAIM_HQ1 || 2 || 3 || 7 || 9 || 10 || 12 || 15 || 20 || 99MBLSTP(งวดชำระครั้งสุดท้าย) = FLMMYY(เดือนที่ชำระครบ)INFORCEFULLY_PAIDถ้าไม่ตรงเงื่อนไขให้ทำ **ข้อ c.**ตรวจสอบสถานะกรมธรรม์ว่าเป็นสถานะ จาก Number Of Days In GracePeriod โดยการนำ payment.latestPayment.paidTo( **MBLSTP**) มาเทียบกับวัน ณ. ปัจจุบัน - ตรวจสอบ Number Of Days In GracePeriod เกิน 60 วัน Source statusPolicyStatusAdditionalPolicyStatus(SELECT MBSTAS FROM GOVLIB.GPLCYMB0 WHERE MBPOL# = ?) = 6NOT_INFORCEREDUCED_PAID_UP(SELECT MBSTAS FROM GOVLIB.GPLCYMB0 WHERE MBPOL# = ?) <> 6NOT_INFORCELAPSE- ตรวจสอบ Number Of Days In GracePeriod ไม่เกิน 60 วันPolicyStatusAdditionalPolicyStatusINFORCEINFORCE อ่านข้อมสัญญาเพิ่มเติม**Rider** <![CDATA[select rider.RIDID, pln.RIDNAM, pln.RDID, rider.PRIMDT, rider.PRIPM+rider.PRIEPM as riderModalPremium from GWLIB.TBRIDMS rider left join GWLIB.TBRIDPLN pln on rider.RIDID = pln.RIDID where rider.POLNO = ?]]> อ่านข้อมูลผู้เอาประกันอ่านข้อมูลเลขที่บัตรและประเภทบัตร**Rider** <![CDATA[SELECT FDIDCD AS ID_CARD, FDTYID AS CARD_TYPE FROM ILISLIB.FLCSIDTR WHERE FDPOL = ? --policy_no]]> อ่านข้อมูลสถานภาพ**Rider** <![CDATA[SELECT m.MCMRST, l.DADESC, m.MCOCCU FROM GOVLIB.GCUSTMC0 m LEFT JOIN PILLIB.STANDDA0 l on ( l.daval = m.mcmrst) WHERE l.dacode = &#39;MRT&#39; AND m.mccsid = ?]]> อ่านข้อมูลอาชีพ **Rider** <![CDATA[--GOV INFORCE SELECT CUS.MCOCCU,OCC.DPDESC FROM GOVLIB.GCUSTMC0 CUS LEFT JOIN GOVLIB.GPLCYMB0 MB ON CUS.MCCSID = MB.MBCSID LEFT JOIN PILLIB.OCCUPDP0 OCC ON CUS.MCOCCU = OCC.DPCODE WHERE MB.MBPOL# = ?]]> **Rider** <![CDATA[--GOV NOT INFORCE SELECT CUS.MCOCCU,OCC.DPDESC FROM GOVLIB.GCUSTMC0 CUS LEFT JOIN GOVLIB.GPLCYMX0 MX ON CUS.MCCSID = MX.MXCSID LEFT JOIN PILLIB.OCCUPDP0 OCC ON CUS.MCOCCU = OCC.DPCODE WHERE MX.MXPOL# =?]]> อ่านข้อมูลศาสนาและสัญชาติ**Rider** <![CDATA[SELECT TMOT1, TMOT2, TMOT3 FROM GWLIB.TMNEWIND where TMPOL = ? --policyno]]> อ่านข้อมูลตัวแทน**Rider** <![CDATA[select AGENT7, AGTTTL, AGTNAM, AGTSNM from LIPS.PSPAGTST where POSGRP = &#39;AGENT&#39; and AGENT7 = ?]]> อ่านข้อมูลสินไหมเสียชีวิต**Rider** <![CDATA[SELECT CRCODE, CRRSLT FROM GOVLIB.GCMRGCR0 WHERE CRPOL# = ?]]> NameTypeDescriptionSource FieldisClaimDeathRegisterStringสถานะการแจ้งเคลมกรณีเสียชีวิตCRCODE IF 'D' THEN YES ELSE No claimDeathResultCodeStringรหัสผลการพิจารณาCRRSLTclaimTypeStringประเภทสินไหมCRCODEC = สินไหมคุ้มครองบุตร D = สินไหมชีวิต H = สินไหมค่ารักษา N = สินไหมทดแทน T = ทุพพลภาพ** <21-02-2025> : เพิ่ม Response CRCODE เพื่อใช้ในการแสดงสถานะกรมธรรม์ <iService Phase 4: Milestone B> อ่านข้อมูลผลประโยชน์อ่านข้อมูลผู้รับผลประโยชน์ 5.1 ตรวจสอบแบบประกัน คู่ขวัญถ้าเป็นคู่ขวัญ5.1.1 อ่านจาก ILISLIB.BENEFDT0**beneficiary** <![CDATA[SELECT DTBNM1 as name1, DTREL1 as relation1, DTRD1 as relation_desc1, DTPCB1 as percent1, DTBID1 as id_no1, DTBNM2 as name2, DTREL2 as relation2, DTRD2 as relation_desc2, DTPCB2 as percent2, DTBID2 as id_no2, DTBNM3 as name3, DTREL3 as relation3, DTRD3 as relation_desc3, DTPCB3 as percent3, DTBID3 as id_no3, DTBNM4 as name4, DTREL4 as relation4, DTRD4 as relation_desc4, DTPCB4 as percent4, DTBID4 as id_no4, DTBNM5 as name5, DTREL5 as relation5, DTRD5 as relation_desc5, DTPCB5 as percent5, DTBID5 as id_no5, DTBNM6 as name6, DTREL6 as relation6, DTRD6 as relation_desc6, DTPCB6 as percent6, DTBID6 as id_no6, DTBNM7 as name7, DTREL7 as relation7, DTRD7 as relation_desc7, DTPCB7 as percent7, DTBID7 as id_no7, DTBNM8 as name8, DTREL8 as relation8, DTRD8 as relation_desc8, DTPCB8 as percent8, DTBID8 as id_no8, DTBNM9 as name9, DTREL9 as relation9, DTRD9 as relation_desc9, DTPCB9 as percent9, DTBID9 as id_no9, DTBN10 as name10, DTRE10 as relation10, DTRD10 as relation_desc10, DTPC10 as percent10, DTBI10 as id_no10 FROM ILISLIB.BENEFDT0 WHERE DTPOl# = ? --[เลขกรมธรรม์]]]> 5.1.2 จากข้อ 5.1 ถ้าไม่มี ชื่อหรือความสัมพันธ์ ให้อ่านจาก ILISLIB.BENEFRF1**beneficiary** <![CDATA[select RFBNME as name, RFRELA, SUBSTR(RFRELA, 1 , 1) as relation, CASE WHEN SUBSTR(RFRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(RFRELA,6) ELSE OAP.REFNAM END relation_desc from ILISLIB.BENEFRF1 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.RFRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where RFPOL# = ?--[เลขกรมธรรม์]]]> 5.1.3 จากข้อ 5.1.1, 5.1.2 ถ้าไม่มี ชื่อหรือความสัมพนัทธ์ ให้อ่านจาก ILISLIB.BENEFMJ0**beneficiary** <![CDATA[select MJBNME as name, MJRELA, SUBSTR(MJRELA, 1 , 1) as relation, CASE WHEN SUBSTR(MJRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(MJRELA,6) ELSE OAP.REFNAM END relation_desc from ILISLIB.BENEFMJ0 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.MJRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where MJPOL# = ?--[เลขกรมธรรม์]]]> ถ้าไม่ใช่ ทำข้อมูล 5.2 5.2 อ่านจาก GOVLIB.GBENEDT0**beneficiary** <![CDATA[SELECT DTBNM1 as name1, DTREL1 as relation1, DTRD1 as relation_desc1, DTPCB1 as percent1, DTBID1 as id_no1, DTBNM2 as name2, DTREL2 as relation2, DTRD2 as relation_desc2, DTPCB2 as percent2, DTBID2 as id_no2, DTBNM3 as name3, DTREL3 as relation3, DTRD3 as relation_desc3, DTPCB3 as percent3, DTBID3 as id_no3, DTBNM4 as name4, DTREL4 as relation4, DTRD4 as relation_desc4, DTPCB4 as percent4, DTBID4 as id_no4, DTBNM5 as name5, DTREL5 as relation5, DTRD5 as relation_desc5, DTPCB5 as percent5, DTBID5 as id_no5, DTBNM6 as name6, DTREL6 as relation6, DTRD6 as relation_desc6, DTPCB6 as percent6, DTBID6 as id_no6, DTBNM7 as name7, DTREL7 as relation7, DTRD7 as relation_desc7, DTPCB7 as percent7, DTBID7 as id_no7, DTBNM8 as name8, DTREL8 as relation8, DTRD8 as relation_desc8, DTPCB8 as percent8, DTBID8 as id_no8, DTBNM9 as name9, DTREL9 as relation9, DTRD9 as relation_desc9, DTPCB9 as percent9, DTBID9 as id_no9, DTBN10 as name10, DTRE10 as relation10, DTRD10 as relation_desc10, DTPC10 as percent10, DTBI10 as id_no10 FROM GOVLIB.GBENEDT0 WHERE DTPOL# = ? --[เลขกรมธรรม์]]]> 5.3 จากข้อ 5.1 ถ้าไม่มี ชื่อหรือความสัมพันธ์ ให้อ่านจาก GOVLIB.GBENERF1**beneficiary** <![CDATA[select RFBNME as name, RFRELA, SUBSTR(RFRELA, 1 , 1) as relation, CASE WHEN SUBSTR(RFRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(RFRELA,6) ELSE OAP.REFNAM END relation_desc from GOVLIB.GBENERF1 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.RFRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where RFPOL#= ?--[เลขกรมธรรม์]]]> 5.4 จากข้อ 5.1, 5.2 ถ้าไม่มี ชื่อหรือความสัมพนัทธ์ ให้อ่านจาก GOVLIB.GBENEMJ0**beneficiary** <![CDATA[select MJBNME as name, MJRELA, SUBSTR(MJRELA, 1 , 1) as relation, CASE WHEN SUBSTR(MJRELA, 1 , 1) = &#39;6&#39; THEN SUBSTR(MJRELA,6) ELSE OAP.REFNAM END relation_desc from GOVLIB.GBENEMJ0 BEN LEFT JOIN OASYS.OAPRELRF OAP ON CAST(SUBSTR(BEN.MJRELA, 1 , 1) as NUMERIC) = OAP.REFCDE where MJPOL# = ? --[เลขกรมธรรม์]]]> อ่านข้อมูลบัญชีธนาคารผู้รับผลประโยชน์**Bank Benefit** <![CDATA[select bacode as bank_code, babrnm as branch_name, baacno as ac_no, baacnm as ac_name from olis.olpindba where BAPOL# = ?]]> อ่านข้อมูลการจ่ายเบี้ยประกัน

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

|   | Name | Type | Description | Example |
|---|---|---|---|---|
| ArrayList |   |   | Empty เมื่อไม่มีข้อมูล |   |
|   | policyNo | String |   |   |
|   | policyType | PolicyType | ประเภทกรมธรรม์ I = อุตสาหกรรม ปช. G = อุตสาหกรรม ขพ.O = สามัญ |   |
|   | planCode | String | รหัสแบบประกัน |   |
|   | planName | String | ชื่อแบบประกัน ชื่อแบบในตาราง กรมธรรม์ |   |
|   | coverageTerm | BigDecimal | ระยะคุ้มครอง |   |
|   | paymentTerm | BigDecimal | ระยะชำระเบี้ย |   |
|   | commencementDate | Date | วันเริ่มสัญญา |   |
|   | maturityDate | Date | วันครบสัญญา (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน ) |   |
|   | fullyPaidDate | Date | วันครบชำระ (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน) |   |
|   | fullyPaidDateCalculate | Date | วันครบชำระที่ได้จากการคำนวณ เช่น J7347568 วันเริ่มสัญญา 31/5/2562 ชำระ 15 ปี วันครบชำระจากการคำนวณจะเป็น 30/5/2577 |   |
|   | lapseDate | Date | วันที่กรมธรรม์ขาดผล (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน ) |   |
|   | isPolicyPayingPremium | Boolean | กรมธรรม์ยังคงต้องชำระเบี้ยหรือไม่ |   |
|   | sumAssured | BigDecimal | ทุนประกัน |   |
|   | movingDate | Date | วันที่เคลื่อนไหว (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน ) |   |
|   | status | Status | ข้อมูลเกี่ยวกับสถานะของกรมธรรม์ |   |
|   | riders | Rider[] | ข้อมูลเกี่ยวกับ Rider |   |
|   | insured | Insured | ผู้เอาประกัน |   |
|   | affiliation | Affiliation | ข้อมูลเกี่ยวกับสังกัด/สาขา |   |
|   | agent | Agent | ตัวแทน |   |
|   | benefit | Benefit | ข้อมูลผู้รับผลประโยชน์ |   |
|   | payment | Payment | ข้อมูลเกี่ยวกับการจ่ายเบี้ยประกัน |   |
|   | claim | Claim | ข้อมูลเกี่ยวกับ Claim |   |
| **ข้อมูลเกี่ยวกับสถานะของกรมธรรม์ Status** |
|   | policyStatus | PolicyStatus | สถานะกรมธรรม์ENUM:INFORCE / NOT_INFORCE |   |
|   | additionalPolicyStatus | AdditionalPolicyStatus | สถานะกรมธรรม์เพิ่มเติมENUM:AUTO_SURRENDER("เวนคืนอัตโนมัติ"), SURRENDER("เวนคืน"), MATURITY("ครบสัญญา"), DEATH("ตาย"), DISABLED("ทุพพลภาพ"), TERMINATED("สิ้นผลบังคับ"), FULLY_PAID("ครบชำระ"), LAPSE("ขาดผล"), AUTO_PAID_UP("ปิดบัญชีมีมูลค่าอัตโนมัติ"), REDUCED_PAID_UP("ปิดบัญชีมีมูลค่า"), CLAIM_HQ("เคลมสนญ."), VOID("บอกล้าง") , INFORCE("มีผลบังคับ"), CANCELLED("free-look"), EXTENDED("ขยายเวลา"), // ขยายเวลา INFORCE_AUTO_POLICY_LOAN("มีผลบังคับ APL"), FULLY_AUTO_POLICY_LOAN("ครบชำระ APL"), LAPSE_AUTO_POLICY_LOAN("ขาดผล APL"), UNKNOWN("ไม่รู้จักสถานะนี้"), //un-defined, unknonwn at a moment, should figure out |   |
|   | policyStatusCode | String | สถานกรมธรรม์ สามัญ A = Auto surrender (เวนคืนอัตโนมัติ) C = Declined (ปฏิเสธ) D = Death (มรณกรรม) E = Extended (ขยายเวลา) F = Fully paid up (ชำระครบ) I = Inforce (มีผลบังคับ) L = Lapse (ขาดผล) M = Maturity (ครบสัญญา) O = Outstanding (ค้างชำระ) P = Auto paid up (ปิดบัญชีอัตโนมัติ) R = Reduced paid up (ปิดบัญชี) S = Surrender (เวนคืน) T = Terminated (ขาดผลครบ 5 ปี) W = Waiver premium (ยกเว้นชำระ) Z = Cancelled , Free look (ยกเลิก) สถานะกรมธรรม์ อุตสาหกรรม 1=เคสใหม่ 2=ต่อสัญญา 3=โอนมา 4=ขาดผล 5=เวนคืน 6=ปิดบัญชี 7=ชำระครบ 8=มรณกรรม 9=โอนไป(ภายใน) 10=มีผล 11=บอกล้าง 12=ต่อนอก 13=ทุพพลภาพ ยกเว้นชำระเบี้ยประกัน 14=สิ้นผลบังคับ 15=โอนเข้ากองทุน 16=ว่าง 17=จ่ายครบที่สนญ. 18=สินไหมที่สนญ. 19=เวนคืนที่สนญ. 20=สมนาคุณที่สนญ. 88=ขาดผล (นอกทะเบียน) 99=โอนไปต่างสาขา |   |
|   | renewalStatus | String | สถานะการต่อสัญญา01= โอนภายในสาขา 02= โอนไประหว่างสาขา 03= โอนมาระหว่างสาขา 04= ต่อสัญญานอกทะเบียน 05= เวนคืน 06= บอกล้างสัญญา 07= มรณกรรม 08= ยกเว้นเนื่องจากทุพพลภาพ 09= เปลี่ยนแบบประกัน 10= ต่อสัญญาแบบยกเว้นฯ |   |
|   | renewalDate | Date | วันเดือนปีที่ต่อสัญญาแบบยกเว้นฯ |   |
|   | renewalMark | String | Mark * กรมธรรม์ที่เคยต่อยกเว้นแล้ว |   |
|   | lastMonthStatus | String | สถานะ เดือนที่ผ่านมา |   |
|   | oldStatus | String | สถานะ เก่า |   |
|   | paidStatusDate | Date | วันเดือนปีที่จ่ายเงินครบสัญญา , จ่ายมรณกรรมวันเดือนปีที่ที่กู้เงิน |   |
|   | disabledPaidPeriod | String | เดือนปีชำระถึง ก่อน Mark ทุพพลภาพ |   |
|   | monthDeleteMark | String | สำหรับลบสิ้นเดือน สถานะบอกล้าง, ครบสัญญา หรือเวนคืน |   |
|   | transferMark | String | 1 ถ่ายทั้ง rec 2 ถ่ายเฉพาะข้อมูลที่จะไป Update |   |
|   | allowCaseMark | String | Mark 1=เคสใหม่ อนุโลมจ่ายค่าบำเหน็จ 40 % |   |
|   | hqTransferMark | String | HQ Transfer Mark ถ่ายข้อมูลไป สนญแล้วmark 0=ยังไม่ส่ง 1= 2=ส่งสนญ.แล้ว |   |
|   | newFromSurrenderMark | String | mark 1=เคสใหม่ จากการ เวนคืน |   |
|   | caseTransfer | CaseTransfer | ข้อมูลการโอนเคส |   |
|   | caseCancelled | CaseCancelled[] | ข้อมูลการยกเลิกกรมธรรม์ |   |
|   | caseSurrender | CaseSurrender[] | ข้อมูลการเวนคืนกรมธรรม์ |   |
|   | lastStatusCode | String | ข้อมูล LAST STATUS ของกรมธรรม์อุตสาหกรรมMBSTAS0 = INFORCE (มีผลบังคับ) 1 = INFORCE (มีผลบังคับ (ขาดชำระ 1 เดือน)) 2 = INFORCE (มีผลบังคับ (ขาดชำระ 2 เดือน))6 = REDUCE PAIDUP (ปิดบัญชี (มีมูลค่า))7 = LAPSE (ขาดผล) 8 = FULLY PAIDUP (ชำระครบ) W = Waiver Premium (Tentative โครงการปี 2020)MXSTAS D = DEATH (ตาย) M = MATURITY(ครบสัญญา) S = SURRENDER (เวนคืน) C = DECLINE (บอกล้าง) R = RETURN (คืนเบี้ย) A = AUTO SURRENDER (เวนคืนอัตโนมัต)MSSTAS7 = LAPSE |   |
| ข้อมูลการโอนเคส CaseTransfer |
|   | transferType | TransferType | ประเภทการโอนCASE_TRANSFER_TYPE_AS400_1("1","โอนเป็นราย"), CASE_TRANSFER_TYPE_AS400_2("2","โอนทั้งบัญชี"), CASE_TRANSFER_TYPE_AS400_3("3","โอนเขตงาน อยู่ใน dbma+สาขา"), UNKOWN("","ไม่รู้จัก") |   |
|   | transferTypeCode | String | รหัสประเภทการโอน |   |
|   | transferTypeDesc | String | คำอธิบายประเภทการโอน |   |
|   | transferAccountMark | String | สำหรับกรมธรรม์ที่จะโอนย้าย บันทึก * กรณีที่โอนไปบัญชีพัก |   |
|   | branchTransferType | BranchTransferType | Mark การโอนระหว่างสาขาCASE_BRANCH_TRANSFER_TYPE_AS400_1("1","โอนเป็นราย"), CASE_BRANCH_TRANSFER_TYPE_AS400_2("2","โอนทั้งบัญชี"), CASE_BRANCH_TRANSFER_TYPE_AS400_3("3","โอนเขตงาน"), CASE_BRANCH_TRANSFER_TYPE_AS400_4("4","โอนแยกเป้า"), CASE_BRANCH_TRANSFER_TYPE_AS400_5("5","รายต่างสาขา"), CASE_BRANCH_TRANSFER_TYPE_AS400_6("6","ทั้งบัญชีต่างสาขา"), CASE_BRANCH_TRANSFER_TYPE_AS400_7("7","เขตงานต่างสาขา"), UNKOWN("","ไม่รู้จัก") |   |
|   | branchTransferTypeCode | String | รหัสการโอนระหว่างสาขา |   |
|   | branchTransferTypeDesc | String | คำอธิบายการโอนระหว่างสาขา |   |
|   | caseTransferBook | String | เลขที่หนังสือนำส่งเรื่องโอนเคส |   |
| ข้อมูลการยกเลิกกรมธรรม์ CaseCancelled[] claimPayments[] |
|   | accidentDate | String | วันเกิดเหตุ |   |
|   | paymentDate | String | วันจ่ายเงิน |   |
|   | paymentAmount | String | จำนวนเงิน ที่จ่าย |   |
| ข้อมูลการเวนคืนกรมธรรม์ CaseSurrender[] surrenderPayments[] |
|   | surrenderAmount | String | จำนวนเงิน เวนคืน |   |
|   | surrenderDate | String | วันที่ เวนคืน |   |
|   | accountDate | String | วันที่ เข้าบช. สนญ. |   |
| ข้อมูลเกี่ยวกับสัญญาเพิ่มเติม Rider |
|   | riderCode | String | รหัส rider |   |
|   | riderName | String | ชื่อ rider |   |
|   | riderShortName | String | ชื่อย่อ rider |   |
|   | riderTypeName | String | ประเภท rider |   |
|   | riderDescription | String | รายละเอียด rider |   |
|   | riderCommencementDate | Date | วันเริ่มสัญญา rider |   |
|   | riderMaturityDate | Date | วันครบสัญญา rider |   |
|   | riderSumInsured | BigDecimal | ทุนประกันตาม rider |   |
|   | riderPlanCode | String | Rider Plan Code |   |
|   | riderPremium | BigDecimal | เบี้ยหลัก Rider |   |
|   | riderPremiumExtra | BigDecimal | เบี้ยเพิ่มพิเศษ Rider |   |
|   | riderPeriodPaidTo | Date | To Date Rider (วันที่สิ้นสุดสัญญา Rider) |   |
|   | riderMonthlyMode | Integer | Mode การชำระ |   |
|   | riderPremiumRate | BigDecimal | อัตราเบี้ยประกัน/เบี้ยหลักของ Rider(สำหรับาง Rider) |   |
| ข้อมูลผู้เอาประกัน Insured |
|   | custId | String | รหัสลูกค้า AS400 |   |
|   | title | String | คำนำหน้าผู้เอาประกัน |   |
|   | name | String | ชื่อผู้เอาประกัน |   |
|   | surname | String | นามสกุลผู้เอาประกัน |   |
|   | sex | Sex | เพศENUM:MALE, FEMALE |   |
|   | birthDate | Date | วันเกิด (พ.ศ. format : dd-MM-YYYY)จากการปรึกษา วันเกิดจะมีการใช้งานเฉพาะกรมธรรม์ที่มีผล กรมธรรม์อุตฯ เมื่อไม่มีผลแล้ว จึงไม่จำเป็นต้องดึงวันเกิดขึ้นมาให้ไปดึงวันเกิดที่ ILISLIB_CUSTMMC0 และ GOVLIB_GCUSTMC0หากไม่มีข้อมูล ให้ส่งเป็นค่าว่าง |   |
|   | ageAsOf | Integer | อายุ ณ วันทำประกัน |   |
|   | idNo | Integer | เลขที่บัตรประชาชน/เลขที่หนังสือเดินทาง |   |
|   | cardType | InsureCardType | ประเภทบัตรCARD_TYPE_AS400_CID("CID","บัตรประจำตัวประชาชน 13 หลัก"), CARD_TYPE_AS400_FGN("FGN","ต่างด้าว"), CARD_TYPE_AS400_PAS("PAS","หนังสือเดินทาง"), CARD_TYPE_AS400_OTH("OTH","อืนๆ เช่น บัตรสุทธิพระ แบบเก่า"), UNKOWN("","ไม่รู้จัก") |   |
|   | cardTypeCode | String | รหัสประเภทบัตร |   |
|   | cardTypeDesc | String | คำอธิบายประเภทบัตร |   |
|   | phoneNo | String | หมายเลขโทรศัพท์ |   |
|   | nationalityDesc | String | คำอธิบายสัญชาติ |   |
|   | occupationDesc | String | คำอธิบายอาชีพ |   |
|   | religionDesc | String | คำอธิบายศาสนา |   |
|   | maritalStatus | String | สถานภาพ |   |
|   | maritalStatusDesc | String | คำอธิบายสถานภาพ |   |
|   | group | Integer | กลุ่ม (รวม field) |   |
| **ข้อมูลเกี่ยวกับสังกัด/สาขา Affiliation** |
|   | branchCode | String | รหัสสาขา |   |
|   | branchName | String | ชื่อสาขา |   |
|   | branchAs400 | String | รหัสสาขาของ AS400, มี 7 หลักและไม่ทราบความหมาย, และมีค่าเฉพาะกธ.สามัญเท่านั้น |   |
|   | salesChannel | SalesChannel | ช่องทางการขายENUM: OTHER = อื่นๆ/ไม่พบช่องทาง AGENT = ตัวแทน WORK_SITE = work site GOV = ข/พ HQ = สำนักงานใหญ่ SM = SM ALTERNATIVE = ALTERNATIVE CHANNELS ALTER1 = ฝ่ายการตลาดสถาบัน 1 KK_BANK = KK-BANK LH_BANK = LH-BANK OLI_INVESTMENT = OLI-INVESTMENT BAAC_BANK = BAAC-BANK B2B_1 = B2B HNW_ALTER1 = HNW (ALT1) ALTER2 = ฝ่ายการตลาดสถาบัน 2 COOP_TEACHER_LOIE = สอ.ครูเลย COOP_TEACHER_NONGKAI = สอ.ครูหนองคาย COOP_AIRPORT = สหกรณ์ท่าอากาศยาน COOP_FAJEEB =สหกรณ์ฝาจีบ COOP_POLICE_SAMUTSONGKRAM = สอ.ตรภ.จ.สมุทรสงคราม COOP_SOLDIER_23 = สอ.มณฑลทหารบกที่ 23 B2B_2 = B2B Channel COOP_HOSPITAL_NONGKAI = สอ.สาธารณสุขหนองคาย WORK_SIZE_ALT2 = Worksite (ALT2) GROUP_LIFE = ฝ่ายประกันชีวิตกลุ่ม ALTER3 = ฝ่ายการตลาดสถาบัน 3 INTERNET_SALE = Internet Sale DIRECT_CHANNEL = Direct Channel DIRECT_CALL = Direct CALL DIRECT_HR = Direct HR |   |
|   | salesChannelDesc | String | คำอธิบายช่องทางการขาย |   |
|   | destinationBranch | String | รหัสสาขาปลายทาง |   |
|   | affiliationMark | String | รหัสสังกัดหน่วยงาน โดยที่ 0=ปช.ขาย. 1=ข/พ.ขาย 2=sm ขาย 3=อื่นๆ |   |
|   | channelCode | String | รหัสช่องทางเพื่อใช้ในการประมวลผลว่า ใบนำส่งมาจากช่องทางใด เช่น สาขาจะเป็น 207, 507 มาจาก Alt จะป็น 810, 845 เป็นต้น |   |
| ข้อมูลตัวแทน Agent |
|   | code | String | รหัสตัวแทน 7 หลัก(สนญ.) |   |
|   | title | String | คำนำหน้าชื่อตัวแทน |   |
|   | name | String | ชื่อตัวแทน |   |
|   | surname | String | นามสกุลตัวแทน |   |
|   | ownerMark | String | รหัสผลงานโดยที่ 0=ตัวแทน(ตบ.) ,1=ผู้จัดการ |   |
|   | employeeNo | String | รหัสพนักงาน |   |
| **ข้อมูลผลประโยชน์ Benefit** |
|   | bank | Bank | ข้อมูลธนาคารบัญชีผู้รับผลประโยชน์ |   |
|   | beneficiaries | Beneficiary[] | ข้อมูลเกี่ยวกับผู้รับผลประโยชน์ |   |
| ข้อมูลธนาคารบัญชีผู้รับผลประโยชน์ Bank |
|   | bankCode | String | รหัสธนาคาร |   |
|   | bankName | String | ชื่อธนาคาร |   |
|   | accountNo | String | เลขที่บัญชีผู้รับผลประโยชน์ |   |
|   | accountName | String | ชื่อบัญชีผู้รับผลประโยชน์ |   |
| ข้อมูลเกี่ยวกับผู้รับผลประโยชน์ Beneficiary |
| ArrayList |   |   | Empty เมื่อไม่มีข้อมูล |   |
|   | benefitName | String | ผู้รับผลประโยชน์หมายเหตุBENEFDT0,GBENEDT0 - NBS New case หลังปี 57 BENEFRF1, GBENERF1 - master File หลังปี 2542 |   |
|   | benefitIdCardNo | String | หมายเลขประจำตัวประชาชนผู้รับผลประโยชน์ |   |
|   | benefitRelation | String | **ความสัมพันธ์ อ่านข้อมูลจาก Data Base**1.สามัญ : ใช้ POBRNM REFNAM จาก Table OLIS.OLPBFNAM ตามเงื่อนไข Case When2.อุตสาหกรรมแบ่งออกดังนี้2.1. ปช.Step 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง ILISLIB.BENEFDT0 หากไม่พบข้อมูลให้ทำ Step 2Step 2. ใช้ relation_desc จากตาราง ILISLIB.BENEFRF1 หากไม่พบข้อมูลให้ทำ Step 3Step 3. ใช้ relation_desc จากตาราง ILISLIB.BENEFMJ0 2.2 ขพ.- ถ้าเป็นคู่ขวัญStep 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง ILISLIB.BENEFDT0Step 2. ใช้ relation_desc จากตาราง ILISLIB.BENEFRF1 หากไม่พบข้อมูลให้ทำ Step 3 Step 3. ใช้ relation_desc จากตาราง ILISLIB.BENEFMJ0- ถ้าไม่ใช่คู่ขวัญStep 1. ใช้ DTRD1 ถึง DTRD10 จากตาราง GOVLIB.GBENEDT0 Step 2. ใช้ relation_desc จากตาราง GOVLIB.GBENERF1 หากไม่พบข้อมูลให้ทำ Step 3 Step 3. ใช้ relation_desc จากตาราง GOVLIB.GBENEMJ0**เงื่อนไขที่ยังคงขอของ ปช ขพ ให้มีอยู่ หากเจอ 2 กรณี ตามด้านล่าง**ZERO("0","ไม่มี") UNKOWN("-1","ไม่รู้จัก")**ถ้าไม่ใช่ 0,-1 ให้ดึงจาก Data Base ได้เลย** |   |
|   | benefitRelationCode | String | รหัสความสัมพันธ์ |   |
|   | benefitRelationPercentage | BigDecimal | สัดส่วนผู้รับผลประโยชน์ |   |
|   | benefitMobile | String | เบอร์โทร |   |
|   | benefitCardType | BenefitCardType | ประเภทบัตรCARD_TYPE_AS400_1("1","บัตรประจำตัวประชาชน 13 หลัก"), CARD_TYPE_AS400_5("5","หนังสือเดินทาง"), UNKOWN("","ไม่รู้จัก"), |   |
|   | benefitCardTypeCode | String | รหัสประเภทบัตร |   |
|   | benefitCardTypeDesc | String | คำอธิบายประเภทบัตร |   |
| ข้อมูลเกี่ยวกับการจ่ายเบี้ยประกัน Payment |
|   | monthlyMode | Integer | โหมดการชำระ |   |
|   | basicPlanModalPremium | BigDecimal | เบี้ยประกันสัญญาหลักรายงวด |   |
|   | riderModalPremium | BigDecimal | เบี้ยประกันสัญญาเพิ่มเติมรายงวด |   |
|   | netPremium | BigDecimal | เบี้ยประกันภัยรวมรายงวด |   |
|   | premiumAmount | BigDecimal | เบียประกันภัยรวม |   |
|   | extraPremiumAmount | BigDecimal | เบี้ยเพิ่มพิเศษ หรือเบี้ยที่ฝ่ายพิจารณาเรียกเก็บเพิ่ม |   |
|   | payStatus | String | 1= เวนคืน 2= บอกล้าง 3= มรณะ 4= ต่อใน 5= ต่อนอก 6= ทุพพลภาพ 7= รับครบสัญญา 8= สิ้นผล 9= โอนกองทุน |   |
|   | checkLastPeriod | String | งวดชำระสุดท้าย |   |
|   | oldPeriod | String | Old Gen |   |
|   | newPeriod | String | New Gen |   |
|   | fullyPaid | Integer | เดือนที่ชำระครบ (กรณีแปลงวันที่ไม่ได้ ให้ส่งเป็น null ออกมาแทน ) |   |
|   | noPaidMark | String | Mark 1 = ห้ามรับเงิน |   |
|   | aslipMark | String | Mark การถ่ายข้อมูลจาก master ไป Aslip |   |
|   | bankMark | String | Mark 1=ชำระเบี้ยผ่านธนาคาร |   |
|   | latestPayment | PaymentPaidTo | ข้อมูลเกี่ยวกับงวดชำระถึง |   |
|   | nextDue | PaymentDue[] | ข้อมูลเกี่ยวกับกำหนดชำระถัดไป |   |
| **ข้อมูลเกี่ยวกับงวดชำระถึง PaymentPaidTo** |
|   | policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | 2 หมายถึง ปีที่ 2 ของกรมธรรม์ |
|   | period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | 1 หมายถึง งวดที่ 1 ของปีกรมธรรม์นั้นๆ |
|   | paidDate | Date | วันที่รับชำระเงิน |   |
|   | accountCreditDate | Date | วันที่เข้าบัญชี |   |
|   | paidFrom | Date | วันเริ่มชำระ |   |
|   | paidTo | Date | วันชำระถึง | งวดชำระ เก็บเป็นตัวเลข 4 หลัก ได้แก่ YYMM เช่น 6105YY พ.ศ. 2 หลักแรกMM เดือน 2 หลักสุดท้ายวันเริ่มสัญญา 05/08/2560**การคำนวนวันที่ชำระถึง**หาวันสุดท้ายของ due date เดือนถัดไป จากงวดชำระ(6105) จะได้ 30/06/61 = **30**หาวันที่ของเดือนที่ชำระถึง(dayOfMonthPaidTo) เปรียบเทียบดังนี้ วันที่วันเริ่มสัญญา > วันที่วันสุดท้ายของ due date เดือนถัดไป **if** **5 > 30** **then** วันที่ของเดือนที่ชำระถึง = วันที่วันสุดท้ายของ due date เดือนถัดไป **else** วันที่ของเดือนที่ชำระถึง = วันที่วันเริ่มสัญญา **คำตอบ คือ 5** **(dayOfMonthPaidTo=5)**หาวันที่ชำระถึง(PaidTo) - ปี = ปีของงวดชำระ (6105) คือ **61** - เดือน = เดือนของงวดชำระ (6105) คือ **05 + 1 = 06**- วัน = dayOfMonthPaidTo - 1 = **5 - 1 = 4**จะได้ **04/06/2561** |
|   | periodYearPaidFrom | String | งวดเริ่มชำระ (ของงวดล่าสุด) | YYMM 5801 คือ งวดเดือน มค. ของปี 2558 |
|   | periodYearPaidTo | String | งวดชำระถึง (ของงวดล่าสุด) | YYMM 5812 คือ งวดเดือน ธค. ของปี 2558 งวดชำระ เก็บเป็นตัวเลข 4 หลัก ได้แก่ YYMM เช่น 5910YY พ.ศ. 2 หลักสุดท้ายMM เดือน 2 หลัก |
|   | premiumDetail | PremiumDetail[] | รายละเอียดเบี้ย |   |
|   | receiptNo | String | เลขที่ใบเสร็จ27/09/2022 จาก Project : 20220114 - โครงการส่วนเลขที่ใบคำขอและใบเสร็จเคสใหม่ มีการปรับแก้ขนาดเลขที่ใบเสร็จให้รองรับเลขที่ใบเสร็จ 14 ตำแหน่ง |   |
| **ข้อมูลเกี่ยวกับกำหนดชำระถัดไป PaymentDue** |
|   | policyYear | Integer | ปีที่กรมธรรม์ของงวดชำระล่าสุดนี้ | 2 หมายถึง ปีที่ 2 ของกรมธรรม์ |
|   | period | Integer | งวดของกรมธรรม์ของงวดชำระล่าสุดนี้ | 1 หมายถึง งวดที่ 1 ของปีกรมธรรม์นั้นๆ |
|   | dueDate | Date | วันครบกำหนดชำระ |   |
|   | paidFrom | Date | วันเริ่มชำระ |   |
|   | paidTo | Date | วันชำระถึง |   |
|   | periodYearPaidFrom | String | งวดเริ่มชำระ (ของงวด Due) | YYMM 5801 คือ งวดเดือน มค. ของปี 2558 |
|   | periodYearPaidTo | String | งวดชำระถึง (ของงวด Due) | YYMM 5812 คือ งวดเดือน ธค. ของปี 2558 |
|   | premiumDetail | PremiumDetail[] | รายละเอียดเบี้ย |   |
| **PremiumDetail** |
| ArrayList |   |   | EMPTY หากไม่มีข้อมูลใดเลย |   |
|   | code | String | ชนิดของเบี้ย |   |
|   | description | String | คำอธิบาย |   |
|   | amount | BigDecimal | ยอดเงิน(บาท) |   |
|   |   |   |   |   |

## Exception

<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output

ตัวอย่างที่ 1

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchByPolicyNo xmlns="http://v3_9.search.policyws.targetbundles.osgi.thaisamut/">
            <policyNo xmlns="">1499994</policyNo>
        </searchByPolicyNo>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchByPolicyNoResponse xmlns:ns2="http://v3_9.search.policyws.targetbundles.osgi.thaisamut/">
            <return>
                <policyNo>1499994</policyNo>
                <policyType>O</policyType>
                <planCode>539</planCode>
                <planName>เพื่อนคู่ชีวิต B450 (20/15)</planName>
                <coverageTerm>20</coverageTerm>
                <paymentTerm>15</paymentTerm>
                <commencementDate>2019-10-23T00:00:00+07:00</commencementDate>
                <maturityDate>2039-10-23T00:00:00+07:00</maturityDate>
                <fullyPaidDate>2034-10-23T00:00:00+07:00</fullyPaidDate>
                <fullyPaidDateCalculate>2034-10-22T00:00:00+07:00</fullyPaidDateCalculate>
                <sumAssured>200000.00</sumAssured>
                <isPolicyPayingPremium>false</isPolicyPayingPremium>
                <riders>
                    <riderCode>6</riderCode>
                    <riderName>การยกเว้นชำระเบี้ยประกัน</riderName>
                    <riderShortName>WP</riderShortName>
                    <riderTypeName>ยกเว้นการชำระเบี้ย</riderTypeName>
                    <riderCommencementDate>2019-10-23T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2034-10-23T00:00:00+07:00</riderMaturityDate>
                    <riderSumInsured>200000.00</riderSumInsured>
                    <riderPremium>0.00</riderPremium>
                    <riderExtraPremium>0.00</riderExtraPremium>
                    <riderExpireDate>2024-05-22T00:00:00+07:00</riderExpireDate>
                    <riderType>O</riderType>
                    <riderPremiumRate>0.00</riderPremiumRate>
                </riders>
                <riders>
                    <riderCode>19</riderCode>
                    <riderName>คุ้มครองอุบัติเหตุพิเศษ</riderName>
                    <riderShortName>CPA.2.6*</riderShortName>
                    <riderTypeName>อุบัติเหตุพิเศษ</riderTypeName>
                    <riderCommencementDate>2019-10-23T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2039-10-23T00:00:00+07:00</riderMaturityDate>
                    <riderSumInsured>600000.00</riderSumInsured>
                    <riderPremium>168.00</riderPremium>
                    <riderExtraPremium>0.00</riderExtraPremium>
                    <riderExpireDate>2024-05-22T00:00:00+07:00</riderExpireDate>
                    <riderType>A</riderType>
                    <riderPremiumRate>168.00</riderPremiumRate>
                </riders>
                <riders>
                    <riderCode>20</riderCode>
                    <riderName>คุ้มครองสุขภาพ</riderName>
                    <riderPlanCode>HC1000</riderPlanCode>
                    <riderShortName>HC</riderShortName>
                    <riderTypeName>คุ้มครองสุขภาพ</riderTypeName>
                    <riderCommencementDate>2019-10-23T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2039-10-23T00:00:00+07:00</riderMaturityDate>
                    <riderSumInsured>1000.00</riderSumInsured>
                    <riderPremium>316.00</riderPremium>
                    <riderExtraPremium>0.00</riderExtraPremium>
                    <riderExpireDate>2024-05-22T00:00:00+07:00</riderExpireDate>
                    <riderType>H</riderType>
                    <riderPremiumRate>316.00</riderPremiumRate>
                </riders>
                <riders>
                    <riderCode>25</riderCode>
                    <riderName>ค่าชดเชยรายได้รายวัน</riderName>
                    <riderShortName>DAB2</riderShortName>
                    <riderTypeName>ผลประโยชน์รายวัน</riderTypeName>
                    <riderCommencementDate>2022-05-23T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2039-10-23T00:00:00+07:00</riderMaturityDate>
                    <riderSumInsured>1500.00</riderSumInsured>
                    <riderPremium>175.50</riderPremium>
                    <riderExtraPremium>0.00</riderExtraPremium>
                    <riderExpireDate>2024-05-22T00:00:00+07:00</riderExpireDate>
                    <riderType>H</riderType>
                    <riderPremiumRate>175.50</riderPremiumRate>
                </riders>
                <affiliation>
                    <branchCode>3200</branchCode>
                    <branchName>นครราชสีมา</branchName>
                    <branchAs400>2073200</branchAs400>
                    <salesChannel>AGENT</salesChannel>
                    <salesChannelDesc>ตัวแทน</salesChannelDesc>
                </affiliation>
                <insured>
                    <custId>6258851</custId>
                    <title>นาย</title>
                    <name>สี่โอ</name>
                    <surname>เจสองที</surname>
                    <sex>MALE</sex>
                    <birthDate>1996-07-13T00:00:00+07:00</birthDate>
                    <ageAsOf>23</ageAsOf>
                    <idNo>5300101114972</idNo>
                    <cardType>CARD_TYPE_AS400_CID</cardType>
                    <phoneNo>0883672755</phoneNo>
                    <nationalityDesc>ไทย</nationalityDesc>
                    <occupationDesc>นักศึกษา</occupationDesc>
                    <religionDesc>พุทธ</religionDesc>
                    <maritalStatus>1</maritalStatus>
                    <maritalStatusDesc>โสด</maritalStatusDesc>
                </insured>
                <agent>
                    <code>3259325</code>
                    <title>นาย</title>
                    <name>ดีบีเจ</name>
                    <surname>เอฟดีหก</surname>
                </agent>
                <claim>
                    <isClaimDeathRegister>N</isClaimDeathRegister>
                    <claimDeathResultCode></claimDeathResultCode>
                    <claimDeathResultDesc>ไม่รู้จัก</claimDeathResultDesc>
                </claim>
                <status>
                    <policyStatus>INFORCE</policyStatus>
                    <policyStatusCode>I</policyStatusCode>
                    <policyStatusDesc>Inforce APL</policyStatusDesc>
                    <additionalPolicyStatus>INFORCE_AUTO_POLICY_LOAN</additionalPolicyStatus>
                    <additionalPolicyStatusDesc>มีผลบังคับ APL</additionalPolicyStatusDesc>
                    <policyStatusCodePrevious>EMPTY</policyStatusCodePrevious>
                </status>
                <benefit>
                    <beneficiaries>
                        <benefitName>นาย                                               ดีไอ                                                                            ตาลกลาง</benefitName>
                        <benefitRelation>บิดา</benefitRelation>
                        <benefitRelationCode>1</benefitRelationCode>
                        <benefitRelationPercentage>50.00</benefitRelationPercentage>
                        <benefitCardType>UNKNOWN</benefitCardType>
                        <benefitCardTypeCode></benefitCardTypeCode>
                        <benefitCardTypeDesc>ไม่รู้จัก</benefitCardTypeDesc>
                    </beneficiaries>
                    <beneficiaries>
                        <benefitName>นาง                                               ไอโอบีหก                                                                        ตาลกลาง</benefitName>
                        <benefitRelation>มารดา</benefitRelation>
                        <benefitRelationCode>2</benefitRelationCode>
                        <benefitRelationPercentage>50.00</benefitRelationPercentage>
                        <benefitCardType>UNKNOWN</benefitCardType>
                        <benefitCardTypeCode></benefitCardTypeCode>
                        <benefitCardTypeDesc>ไม่รู้จัก</benefitCardTypeDesc>
                    </beneficiaries>
                </benefit>
                <payment>
                    <monthlyMode>1</monthlyMode>
                    <basicPlanModalPremium>1010.00</basicPlanModalPremium>
                    <riderModalPremium>659.50</riderModalPremium>
                    <netPremium>1669.50</netPremium>
                    <premiumAmount>1010.00</premiumAmount>
                    <extraPremiumAmount>0.00</extraPremiumAmount>
                    <latestPayment>
                        <policyYear>5</policyYear>
                        <period>7</period>
                        <paidDate>2024-06-19T00:00:00+07:00</paidDate>
                        <accountCreditDate>2024-06-19T00:00:00+07:00</accountCreditDate>
                        <paidFrom>2024-04-23T00:00:00+07:00</paidFrom>
                        <paidTo>2024-05-22T00:00:00+07:00</paidTo>
                        <premiumDetail>
                            <code>RCPOPR</code>
                            <description>เบี้ยหลัก</description>
                            <amount>1010.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD13PR</code>
                            <description>เบี้ยหลัก  ACC.</description>
                            <amount>168.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD24PR</code>
                            <description>เบี้ยหลัก  HB1/2</description>
                            <amount>175.50</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RDHCPR</code>
                            <description>เบี้ย HC</description>
                            <amount>316.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RDOTPR</code>
                            <description>เบี้ยอื่นๆ</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RCEXPR</code>
                            <description>เบี้ยเพิ่ม พิเศษ</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <receiptNo>40000009380315</receiptNo>
                    </latestPayment>
                    <nextDue>
                        <policyYear>5</policyYear>
                        <period>8</period>
                        <dueDate>2024-05-23T00:00:00+07:00</dueDate>
                        <paidFrom>2024-05-23T00:00:00+07:00</paidFrom>
                        <paidTo>2024-06-22T00:00:00+07:00</paidTo>
                        <premiumDetail>
                            <code>RCPOPR</code>
                            <description>เบี้ยหลัก</description>
                            <amount>1010.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RCPOEP</code>
                            <description>Extra Prem.</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD13PR</code>
                            <description>เบี้ยหลัก  ACC.</description>
                            <amount>168.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD13EP</code>
                            <description>เบี้ยเพิ่ม ACC.</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD24PR</code>
                            <description>เบี้ยหลัก  HB1/2</description>
                            <amount>175.50</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD@5PR</code>
                            <description>เบี้ยหลัก PB</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD@6PR</code>
                            <description>เบี้ยหลัก WP</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD@6EP</code>
                            <description>เบี้ยเพิ่ม WP</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD78PR</code>
                            <description>เบี้ยหลัก AE/1</description>
                            <amount>316.00</amount>
                        </premiumDetail>
                        <premiumDetail>
                            <code>RD@9PR</code>
                            <description>เบี้ยหลัก LT</description>
                            <amount>0.00</amount>
                        </premiumDetail>
                    </nextDue>
                </payment>
            </return>
        </ns2:searchByPolicyNoResponse>
    </soap:Body>
</soap:Envelope>
```

ตัวอย่างที่ 2

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchByPolicyNo xmlns="http://v3_9.search.policyws.targetbundles.osgi.thaisamut/">
            <policyNo xmlns="">J7345316</policyNo>
        </searchByPolicyNo>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchByPolicyNoResponse xmlns:ns2="http://v3_9.search.policyws.targetbundles.osgi.thaisamut/">
            <return>
                <policyNo>J7345316</policyNo>
                <policyType>I</policyType>
                <planCode>122</planCode>
                <planName>คุ้มทวี (20/15)</planName>
                <coverageTerm>20</coverageTerm>
                <paymentTerm>15</paymentTerm>
                <commencementDate>2015-07-20T00:00:00+07:00</commencementDate>
                <maturityDate>2035-07-20T00:00:00+07:00</maturityDate>
                <fullyPaidDate>2030-06-20T00:00:00+07:00</fullyPaidDate>
                <fullyPaidDateCalculate>2030-07-19T00:00:00+07:00</fullyPaidDateCalculate>
                <sumAssured>125930</sumAssured>
                <isPolicyPayingPremium>true</isPolicyPayingPremium>
                <movingDate>1957-01-01T00:00:00+07:00</movingDate>
                <affiliation>
                    <branchCode>1100</branchCode>
                    <branchName>เพชรบุรี</branchName>
                    <salesChannel>AGENT</salesChannel>
                    <salesChannelDesc>ตัวแทน</salesChannelDesc>
                    <destinationBranch>0</destinationBranch>
                    <affiliationMark></affiliationMark>
                    <channelCode>0</channelCode>
                    <branchCode7>2071100</branchCode7>
                </affiliation>
                <insured>
                    <custId>ณ0055419</custId>
                    <title>น.ส.</title>
                    <name>บีเอสเค</name>
                    <surname>เคเจเอ็ม</surname>
                    <sex>FEMALE</sex>
                    <birthDate>1974-12-01T00:00:00+07:00</birthDate>
                    <ageAsOf>41</ageAsOf>
                    <idNo>3769900310452</idNo>
                    <cardType>CARD_TYPE_AS400_CID</cardType>
                    <occupationDesc>ค้าขาย : ไม่ระบุอื่นๆ</occupationDesc>
                    <maritalStatus>2</maritalStatus>
                    <maritalStatusDesc>โสด</maritalStatusDesc>
                    <group>0</group>
                </insured>
                <agent>
                    <code>4301297</code>
                    <title>น.ส.</title>
                    <name>ห้าแซด</name>
                    <surname>หกเทสสิบแซด</surname>
                    <ownerMark></ownerMark>
                    <employeeNo></employeeNo>
                </agent>
                <claim>
                    <isClaimDeathRegister>N</isClaimDeathRegister>
                </claim>
                <status>
                    <policyStatus>INFORCE</policyStatus>
                    <policyStatusCode>10</policyStatusCode>
                    <policyStatusDesc>INFORCE (2)</policyStatusDesc>
                    <additionalPolicyStatus>INFORCE</additionalPolicyStatus>
                    <additionalPolicyStatusDesc>มีผลบังคับ</additionalPolicyStatusDesc>
                    <renewalStatus>RENEWAL_STATUS_AS400_01</renewalStatus>
                    <renewalStatusCode>01</renewalStatusCode>
                    <renewalStatusDesc>โอนภายในสาขา</renewalStatusDesc>
                    <renewalDate>1957-01-01T00:00:00+07:00</renewalDate>
                    <renewalMark></renewalMark>
                    <lastMonthStatus></lastMonthStatus>
                    <oldStatus></oldStatus>
                    <paidStatusDate>1957-01-01T00:00:00+07:00</paidStatusDate>
                    <disabledPaidPeriod></disabledPaidPeriod>
                    <monthDeleteMark></monthDeleteMark>
                    <transferMark>2</transferMark>
                    <allowCaseMark></allowCaseMark>
                    <hqTransferMark>0</hqTransferMark>
                    <newFromSurrenderMark></newFromSurrenderMark>
                    <caseTransfer>
                        <transferType>UNKNOWN</transferType>
                        <transferTypeCode></transferTypeCode>
                        <transferTypeDesc>ไม่รู้จัก</transferTypeDesc>
                        <transferAccountMark></transferAccountMark>
                    </caseTransfer>
                </status>
                <benefit>
                    <bank>
                        <bankCode>14</bankCode>
                        <branchName>เพชรบุรี</branchName>
                        <accountNo>5042210221</accountNo>
                        <accountName>น.ส.บีเอสเค เคเจเอ็ม</accountName>
                    </bank>
                    <beneficiaries>
                        <benefitName>นายพีซี โอวียูบี</benefitName>
                        <benefitRelation>บุตรบุญธรรม</benefitRelation>
                        <benefitRelationCode>6</benefitRelationCode>
                        <benefitRelationPercentage>50.000</benefitRelationPercentage>
                    </beneficiaries>
                    <beneficiaries>
                        <benefitName>น.ส.ยูพีซี โอวียูบี</benefitName>
                        <benefitRelation>บุตรบุญธรรม</benefitRelation>
                        <benefitRelationCode>6</benefitRelationCode>
                        <benefitRelationPercentage>50.000</benefitRelationPercentage>
                    </beneficiaries>
                </benefit>
                <payment>
                    <monthlyMode>12</monthlyMode>
                    <basicPlanModalPremium>1000</basicPlanModalPremium>
                    <riderModalPremium>0</riderModalPremium>
                    <netPremium>1000</netPremium>
                    <latestPayment>
                        <policyYear>9</policyYear>
                        <period>12</period>
                        <paidDate>2023-08-18T00:00:00+07:00</paidDate>
                        <accountCreditDate>2023-08-18T00:00:00+07:00</accountCreditDate>
                        <paidTo>2024-07-19T00:00:00+07:00</paidTo>
                        <periodYearPaidTo>6706</periodYearPaidTo>
                        <receiptNo>10000001978778</receiptNo>
                    </latestPayment>
                    <nextDue>
                        <policyYear>10</policyYear>
                        <period>12</period>
                        <dueDate>2024-07-20T00:00:00+07:00</dueDate>
                        <paidFrom>2024-07-20T00:00:00+07:00</paidFrom>
                        <paidTo>2025-07-19T00:00:00+07:00</paidTo>
                        <periodYearPaidFrom>6707</periodYearPaidFrom>
                        <periodYearPaidTo>6806</periodYearPaidTo>
                    </nextDue>
                    <payStatus></payStatus>
                    <checkLastPeriod>6706</checkLastPeriod>
                    <oldPeriod>6407</oldPeriod>
                    <newPeriod>6506</newPeriod>
                    <fullyPaid>7306</fullyPaid>
                    <noPaidMark></noPaidMark>
                    <aslipMark></aslipMark>
                    <bankMark>1</bankMark>
                </payment>
            </return>
        </ns2:searchByPolicyNoResponse>
    </soap:Body>
</soap:Envelope>
```

** <21-02-2025> : อัปเดต wiki ตามเงื่อนไขใน source code <iService Phase 4: Milestone B>

---

## Hyperlinks บนหน้านี้

- [/thaisamut/policy/v3.8/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1144619373)
- [/thaisamut/policy/v6/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971637253)
- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [OLIS.OLPPOLMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPPOLMS)
- [OLIS.OLPCUSMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCUSMS)
- [OLIS.OLPCUSM2](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCUSM2)
- [OLIS.OLPAPPDT](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPAPPDT)
- [LIPS.PSPAGMT1](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=3507089)
- [LIPS.PSPSLORG](http://wiki.thaisamut.co.th/display/APP/LIPS_PSPSLORG)
- [OLIS.OLPCLAIM](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPCLAIM)
- [OLIS.OLPACPY0](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPACPY0)
- [OLIS.OLPSRRMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPSRRMS)
- [CSS-2630](http://jira.thaisamut.co.th/browse/CSS-2630)
