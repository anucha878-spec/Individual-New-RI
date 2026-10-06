# /thaisamut/policy/v3/xml/inquiry/searchpapolicy

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 977797706
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=977797706

---

[ [Overview](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Overview) ] [ [Protocol](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Protocol) ] [ [Operation](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Operation) ] [ [Input](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Input) ] [ [Process](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Process) ] [ [Output](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Output) ] [ [Exception](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-Exception) ] [ [Example Input & Output](#id-/thaisamut/policy/v3/xml/inquiry/searchpapolicy-ExampleInput&Output) ]

## Overview

ค้นหากรมธรรม์ PA

## Protocol

Icon
SOAP

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : inquiry
searchByPolicyNo

## Input

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| policyNo | String | เลขกธ. PA | PA00800018 |   |

## Process

- หาข้อมูล กธ. ของอุบัติเหตุ <![CDATA[SELECT a.POLNO , -- | 1 | ... | CHAR | 12 | null | null | 0 | ... | null | &#39; &#39; | 12 | 1 | NO | ... | null | null | null | a.POLREF, -- | 1 | ... | CHAR | 10 | null | null | 0 | ... | null | &#39; &#39; | 10 | 2 | NO | ... | null | null | null | a.POLFNO, -- กธ. ปีแรก a.POLLNO, -- กธ.ที่ผ่านมา a.POLBRN, -- | 2 | ... | NUMERIC | 4 | 0 | 10 | 0 | ... | null | 0 | null | 5 | NO | ... | null | null | null | a.POLCHN, a.POLPLN, -- | 1 | ... | CHAR | 5 | null | null | 0 | ... | null | &#39; &#39; | 5 | 7 | NO | ... | null | null | null | a.POLPYY, -- | 2 | ... | NUMERIC | 2 | 0 | 10 | 0 | ... | null | 0 | null | 8 | NO | ... | null | null | null | a.POLAGE, -- | 2 | ... | NUMERIC | 2 | 0 | 10 | 0 | ... | null | 0 | null | 9 | NO | ... | null | null | null | a.POLCDT, -- | 2 | ... | NUMERIC | 8 | 0 | 10 | 0 | ... | null | 0 | null | 10 | NO | ... | null | null | null | a.POLMDT, -- | 2 | ... | NUMERIC | 8 | 0 | 10 | 0 | ... | null | 0 | null | 11 | NO | ... | null | null | null | a.POLEDT, -- | 2 | ... | NUMERIC | 8 | 0 | 10 | 0 | ... | null | 0 | null | 12 | NO | ... | null | null | null | a.POLSTS, -- | 1 | ... | CHAR | 5 | null | null | 0 | ... | null | &#39; &#39; | 5 | 39 | NO | ... | null | null | null | a.POLACS, -- ทุนคุ้มครอง a.POLSIN, -- ทุนเริ่มต้น a.POLSN1, -- ทุนเริ่มต้น a.POLSN2, -- ทุนจจย. a.POLSN3, -- ทุนฆาตกรรม a.POLPM1, -- ทุนค่ารักษา a.POLPM2, -- เบี้ยหลัก a.POLPM3, -- เบี้ยจยย a.POLPM4, -- เบี้ยฆาตกรรม a.POLAGT, -- เบี้ยค่ารักษา ag.AGTTTL, -- คำนำหน้าชื่อตัวแทน ag.AGTNAM, -- ชื่อตัวแทน ag.AGTSNM, -- สกุลตัวแทน ag.AGTLCN, -- เลขที่ใบอนุญาต ag.AGTLCE, -- วันที่หมดอายุ ag.AGTTEL, -- เบอร์โทรศัพท์บ้านตัวแทน ag.AGTCPH, -- เบอร์มือถือตัวแทน ag.BRNNO, -- สาขาต้นสังกัดตัวแทน (select SUM(POLRDT) FROM PPALIB.PARIDMS0 WHERE POLNO = a.POLNO) as SUMRIDER, b.CUSTIT, b.CUSNAM, b.CUSSUR, b.CUSID, b.CUSCID, b.CUSBDT, b.CUSSEX, b.CUSNAT, b.CUSOCP, b.CUSTEL, b.CUSMOB, CASE WHEN (SELECT count(1) FROM LIPS.ASPLCAGB WHERE agent# = a.POLAGT) = 0 THEN &#39;AGENT&#39; ELSE &#39;BROKER&#39; END AS AGENTTYPE, c.PLNDES, c.PLNPPM, c.PLNNIS, c.PLNNPP, occ.D2TYP, -- ประเภทบัตร (Ocean Care Card) occ.D2DTE -- วันที่ออกบัตร (Ocean Care Card) FROM PPALIB.TBPOLICY a LEFT JOIN PPALIB.TBCUSTOM b ON a.polcid = b.cusid LEFT JOIN LIPS.PSPAGTMS ag ON a.POLAGT = ag.AGENT7 LEFT JOIN RKLIB.PAMCCDT2 occ on a.POLNO = occ.d2pol LEFT JOIN PPALIB.TBPLAN c ON a.POLPLN = c.PLNID WHERE a.POLNO = ?]]>
- หา Summary ของ Rider <![CDATA[(select SUM(POLRDT) FROM PPALIB.PARIDMS0 WHERE POLNO = [เลขกรมธรรม์]) as SUMRIDER]]>
- หาว่า เป็น agent หรือ broker โดยนำ agentCode ไปตรวจสอบ <![CDATA[SELECT count(1) as cnt FROM LIPS.ASPLCAGB WHERE agent# = [รหัสตัวแทน]]]>
  - ถ้าพบข้อมูลใน table LIPS.ASPLCAGB นี้ จะถือว่า เป็น BROKER
  - ถ้าไม่พบ จะถือว่าเป็น AGENT
- หากลุ่มข้อมูลเกี่ยวกับการยอมให้ต่อสัญญา <![CDATA[SELECT FGPOL#, -- FGPOL# | 1 | ... | CHAR | 12 | null | null | 0 | ... | null | &#39; &#39; | 12 | 1 | NO | ... | null | null | null | FGFLAG, -- FGFLAG | 1 | ... | CHAR | 1 | null | null | 0 | ... | null | &#39; &#39; | 1 | 2 | NO | ... | null | null | null | FGINPD, -- FGINPD | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | วันที่ | 0 | null | 5 | NO | ... | null | null | null | FGLSTM, -- FGLSTM | 2 | ... | NUMERIC | 6 | 0 | 10 | 0 | ... | เวลา | 0 | null | 6 | NO | ... | null | null | null | FGUSER, -- FGUSER | 1 | ... | CHAR | 10 | 0 | 0 | 0 | ... | ผู้บันทึก FGREMK -- FGREMK | 1 | ... | CHAR | 100 | 0 | 0 | 0 | ... | หมายเหตุ FROM UWRLIB.UWNCSFQ0 WHERE FGPOL# = [เลขกรมธรรม์]]]>
- หาข้อมูลใบเสร็จ <![CDATA[SELECT RECNO , RECPOL , RECBRN , RECDAT , RECACD , RECMOD , RECNMD , RECAMT , RECADP , RECPDC , RECWAY , SLFRMD , SLLSMD , RECCHN FROM PPALIB.TBRECEIP TR LEFT JOIN PPALIB.TBSLIPTR TS ON TR.RECPOL=TS.&quot;SLPOL#&quot; AND TR.RECNO = TS.SLRCNO WHERE RECPOL = [เลขกรมธรรม์]]]>
- หาข้อมูล Rider**sql** <![CDATA[SELECT a.POLNO, b.RDPID, b.RDPAB2, -- ชื่อไรเดอร์ b.RDPAB3, -- ชื่อย่อ ตามเอกสาร b.RDPNAM, -- ชื่อเต็มไรเดอร์ a.POLRDS, -- ทุน RIDER a.POLRDP, -- เบี้ย RIDER a.POLRDE, -- เบี้ย EXTRA a.POLRDT, -- เบี้ยรวม a.POLCDT, -- เริ่มสัญญา a.POLMDT, -- สิ้นสุดสัญญา a.POLTDT -- วันที่ชำระถึง FROM PPALIB.PARIDMS0 a LEFT JOIN PPALIB.PARIDPLN b on a.POLRD@ = b.RDPID WHERE a.POLNO = ?]]>
- หาข้อมูลการแจ้ง Claim Death SQL Query **sql** <![CDATA[SELECT PAPOL,CLMTYP FROM PPALIB.PACLMPF0 WHERE PAPOL = ?]]> ตรวจสอบ CLMTYP = PDA ให้สถานะเป็น isClaimDeathRegister = Y ถ้าไม่ใช่เป็น isClaimDeathRegister = N
- หา salesChannelDesc ตรวจสอบ PPALIB.TBPOLICY.POLCHN- กรณี POLCHN = 207 หรือ POLCHN = 507 ให้นำไปรวมกับ POLBRN - กรณีนอกเหนือจากนั้น ให้ใช้ค่า 1 หลังจากนั้นเอาไปหาที่ LIPS.PSPSLORG **sql** <![CDATA[SELECT SLUNNM FROM LIPS.PSPSLORG WHERE &quot;SLUNT#&quot; = ?]]>
- หาข้อมูล benefit <![CDATA[SELECT BENNAM as name, BENRLS as relation, BENTEL as relation_tel FROM PPALIB.TBBENEFI WHERE BENPOL = ?]]>

### Output

| Name | Type | Description | Example |
|---|---|---|---|
| policyNo | String | หมายเลขกธ |   |
| policyStatus | ENUM | สถานะกธ.UNKNOWN("ไม่รู้จักสถานะนี้"), AP1 ("รับเรื่อง"), AP2 ("อนุมัติจ่าย"), AP3 ("ปฏิเสธ + คืนเบี้ย"), AP4 ("ปฏิเสธ"), AP5 ("อนุมัติจ่าย + คืนเบี้ยบางส่วน"), B ("บอกล้าง"), C ("ยกเลิกสัญญา"), CC1 ("หนังสือหัวเขียวสาขา/หัวฟ้า"), CC2 ("ส่งเอกสารยกเลิกมา"), CC3 ("E-MAIL"), CC4 ("นส.เบี้ย/ค่าบำเหน็จปีแรก"), CC5 ("นส.เบี้ย/ค่าบำเหน็จปีต่อ"), CC6 ("อื่นๆ"), CC7 ("สำเนากรมธรรม์"), CC8 ("สลักหลัง"), CC9 ("ใบคำขอ"), D ("เสียชีวิต"), EDT ("แก้ไขข้อมูล"), F ("ปฏิเสธการจ่ายสินไหม"), HBC ("HBC ทำการจ่ายสินไหม"), I ("INFORCE"), L ("LAPSE"), LC ("สินไหมของ PA."), LS ("ทุนและเบี้ย ของ LOSS RATIO PA."), M ("สิ้นสุดสัญญา"), NED ("ไม่สามารถแก้ไขได้ เนื่องจากไม่มีกธ."), NP ("ข้อมูลไม่สมบูรณ์"), NPED ("ข้อมูลในการ Update ไม่สมบูรณ์"), NZ ("ข้อมูลซ้ำ"), OCP1 ("สาขาเป็นผู้จ่าย"), OCP2 ("สำนักงานใหญ่เป็นผู้จ่าย"), OCP3 ("สั่งจ่ายโดยการออกเช็ค"), PDA ("จ่ายสินไหมกรณีเสียชีวิต"), PNA ("สาขาทำการจ่ายสินไหม"), PNR ("สำนักงานใหญ่ทำการจ่ายสินไหม"), RC ("ยกเลิกคืนเบี้ย"), REINS ("ชำระเบี้ยต่อสัญญา"), TNFED ("Tranfer data Edit"), TNFNW ("Transfer data New Case"), TNFUW ("Transfer Data Underwrite"), UW0 ("รับเรื่อง"), UW1 ("Std."), UW2 ("Sub Std."), UW3 ("Postpone"), UW4 ("Decline"), UW5 ("Cancel"), UW6 ("Death"), UW7 ("Notify Csm."),Z ("ยกเลิก(ลูกค้า)") |   |
| policyStatusDesc | String | คำอธิบายสถานะกธ. |   |
| commencementDate | Date | วันที่เริ่มสัญญา |   |
| maturityDate | Date | วันสิ้นสุดสัญญา |   |
| coverageDate | Date | วันที่สิ้นสุดความคุ้มครอง |   |
| planCode | String | รหัสแบบประกัน |   |
| planName | String | ชื่อแบบประกัน |   |
| policyYear | Integer | ปีที่ของกธ. |   |
| customerAgeAsOf | Integer | อายุของลูกค้าตอนที่ทำกรมธรรม์ |   |
| applicationNo | String | เลขที่ใบคำขอ27/09/2022 จาก Project : 20220114 - โครงการส่วนเลขที่ใบคำขอและใบเสร็จเคสใหม่ มีการปรับแก้ขนาดเลขที่ใบคำขอให้รองรับเลขที่ใบคำขอ 10 ตำแหน่ง |   |
|   |   |   |   |
| Affiliation |   |   |   |
| branchCode | String | รหัสสาขา |   |
| salesChannel | ENUM | ช่องทางการขายAGENT("ตัวแทน"), INTERNET_SALE("Internet Sale"), ALTER2("Alternative 2"), ALTER3("Alternative 3") |   |
| salesChannelDesc | String | คำอธิบายช่องทางการขาย |   |
| channelCode | String | รหัสช่องทางขาย 3 หลัก |   |
| salesChannelCode | String | รหัสช่องทางขาย 7 หลัก |   |
| Payment |   | กลุ่มข้อมูลเกี่ยวกับการจ่ายเบี้ยประกัน |   |
| monthlyMode | Integer | โหมดการชำระ |   |
| basicPlanModalPremium | BigDecimal | เบี้ยประกันสัญญาหลัก |   |
| riderModalPremium | BigDecimal | เบี้ยประกันสัญญาเพิ่มเติม |   |
| netPremium | BigDecimal | เบี้ยประกันภัยรวม |   |
| paymentSlips | ArrayList<PaymentSlips> | รายการใบเสร็จ |   |
| riderDeduction | RiderDeduction |   |   |
| saleChannel | String | ช่องทางการขาย |   |
| CoverageTerm |   | กลุ่มข้อมูลเกี่ยวกับความคุ้มครอง |   |
| sumInsured | BigDecimal | ทุนคุ้มครอง |   |
| firstYearSumInsured | BigDecimal | ทุนคุ้มครองเริ่มต้น/ปีแรก |   |
| motorAssured | BigDecimal | ทุนคุ้มครองอุบัติเหตุจักรยานยนต์ |   |
| murderAssured | BigDecimal | ทุนคุ้มครองฆาตกรรม |   |
| medicalCareAssured | BigDecimal | ทุนคุ้มครองค่ารักษาอุบัติเหตุ |   |
| coverageTerm | BigDecimal | ระยะคุ้มครอง |   |
| paymentTerm | BigDecimal | ระยะชำระเบี้ย |   |
| RenewInfo |   | กลุ่มข้อมูลเกี่ยวกับการยอมให้ต่อสัญญา |   |
| isRenewAble | Boolean | ต่อสัญญาได้หรือไม่ได้ |   |
| renewFlag | ENUM | รหัสต่อสัญญาไม่ได้NOTFOUND("", "ไม่มีข้อมูลใน lib UWRLIB.UWNCSFQ0"), UNKNOWN("-1", "ไม่รู้จัก Flag นี้"), FLAG_1("1", "ห้ามต่อสัญญา"), FLAG_2("2", "ยกเลิกสัญญา"), FLAG_3("3", "บอกล้างสัญญา"), FLAG_4("4", "ยกเลิกสัญญา"), FLAG_5("5", "ยกเลิกสัญญา") |   |
| renewFlagInAs400 | String | รหัสต่อสัญญาไม่ได้(ของ AS400) |   |
| renewDescription | String | รายละเอียดการต่อสัญญาไม่ได้ |   |
| userRemark | String | Remark ที่กรอกโดย user |   |
| updatedUser | String | user ที่กรอกรายการนี้ |   |
| updatedDate | Date | วันที่กรอก |   |
| Insured |   | ข้อมูลผู้เอาประกัน |   |
| title | String | คำนำหน้า |   |
| name | String | ชื่อ |   |
| surname | String | ชื่อสกุล |   |
| idNo | String | เลขที่บัตรประชาชน |   |
| sex | Sex | เพศENUM:MALE, FEMALE |   |
| birthDate | Date | วันเกิด |   |
| nationalityDesc | String | สัญชาติ |   |
| occupationDesc | String | อาชีพ |   |
| Agent |   | ข้อมูลตัวแทน |   |
| agentHqCode | String | หัสตัวแทน (สนญ.) |   |
| agentTitle | String | คำนำหน้าชื่อตัวแทน |   |
| agentName | String | ชื่อตัวแทน |   |
| agentFullName | String | ชื่อตัวแทน fullname |   |
| agentLastName | String | นามสกุลตัวแทน |   |
| agentPhone | String | เบอร์โทรศัพท์ตัวแทน |   |
| agentCellPhone | String | เบอร์โทรศัพท์มือถือตัวแทน |   |
| agentType | ENUM | AGENT = ตัวแทนBROKER = นายหน้าประกันภัย | BROKER |
| PaymentSlip |   |   |   |
| receiptNo | String | เลขที่ใบเสร็จ27/09/2022 จาก Project : 20220114 - โครงการส่วนเลขที่ใบคำขอและใบเสร็จเคสใหม่ มีการปรับแก้ขนาดเลขที่ใบเสร็จให้รองรับเลขที่ใบเสร็จ 14 ตำแหน่ง |   |
| policyNo | String | เลขที่กธ. |   |
| branchCode | String | สาขา |   |
| paidDate | Date | วันที่รับชำระ |   |
| accountDate | Date | วันที่เข้าบัญชี |   |
| policyYear | Integer | ปีกธ. |   |
| allPolicyYear | Integer | ปีกธ.ทั้งหมด |   |
| premiumAmount | BigDecimal | เบี้ยประกัน |   |
| extraPremiumAmount | BigDecimal | เบี้ยประกันเพิ่ม (เป็นจำนวนเงินที่แยกออกมาจากเบี้ย recamt) |   |
| totalPremiumAmount | BigDecimal | เบี้ยประกันรวม (เบี้ยประกัน+เบี้ยประกันเพิ่ม) |   |
| discountPremiumAmount | BigDecimal | ส่วนลดเบี้ย (แยกออกมาจากเบี้ย) |   |
| paymentChannelRawData | String | ช่องทางชำระเงิน, ข้อมูลจากระบบต้นทาง |   |
| periodFrom | String | งวดชำระเริ่มต้น รูปแบบ YYMM (ปีพ.ศ.) |   |
| periodTo | String | งวดชำระสิ้นสุด รูปแบบ YYMM (ปีพ.ศ.) |   |
| RiderDeduction |   |   |   |
| motorPremium | BigDecimal | เบี้ยจักรยานยนต์ |   |
| murderPremium | BigDecimal | เบี้ยฆาตกรรม |   |
| medicalCarePremium | BigDecimal | เบี้ยค่ารักษา |   |
|   |   |   |   |
| riders | ArrayList<Rider> |   |   |
| ข้อมูลเกี่ยวกับ Rider |   |   |   |
| riderCode | String | รหัส rider |   |
| riderCodeName | String | ตัวย่อชื่อ Rider |   |
| riderShortName | String | ชื่อย่อ Rider |   |
| riderShortName2 | String | ชื่อย่อ Rider 2 |   |
| riderName | String | ชื่อ Rider |   |
| riderCommencementDate | Date | วันเริ่มสัญญา rider |   |
| riderMaturityDate | Date | วันครบสัญญา rider |   |
| riderSumPremium | BigDecimal | เบี้ย rider |   |
| riderSumInsured | BigDecimal | ทุนประกันตาม rider |   |
| ข้อมูลสินไหม |
| isClaimDeathRegister | ClaimDeathRegister | ClaimDeathRegister Y, N |   |
| claimDeathResultCode | String | รหัสผลการพิจารณา |   |
| claimDeathResultDesc | String | คำอธิบายผลการพิจารณา |   |
| claimDeathNotifyDate | Date | วันที่รับเรื่อง |   |
| ข้อมูล Benefit |
| benefitName | String | ชื่อผู้รับผลประโยชน์ |   |
| benefitRelation | String | ความสัมพันธ์ของผู้รับผลประโยชน์ |   |
| benefitTel | String | เบอร์โทรศัพท์ผู้รับผลประโยชน์ |   |

## Exception

## Example Input & Output

1. <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchByPolicyNo xmlns="http://v2.searchpa.policyws.targetbundles.osgi.thaisamut/">
            <policyNo xmlns="">PA10567084</policyNo>
        </searchByPolicyNo>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchByPolicyNoResponse xmlns:ns2="http://v2_4.searchpa.policyws.targetbundles.osgi.thaisamut/">
            <return>
                <policyNo>PA10567084</policyNo>
                <affiliation>
                    <branchCode>6000</branchCode>
                    <salesChannel>AGENT</salesChannel>
                    <salesChannelDesc>ตัวแทน</salesChannelDesc>
                </affiliation>
                <policyStatus>I</policyStatus>
                <policyStatusDesc>INFORCE</policyStatusDesc>
                <commencementDate>2020-08-19T00:00:00+07:00</commencementDate>
                <maturityDate>2021-08-19T00:00:00+07:00</maturityDate>
                <coverageDate>2021-08-19T00:00:00+07:00</coverageDate>
                <planCode>PA027</planCode>
                <planName>มอไซค์วีไอพี</planName>
                <policyYear>1</policyYear>
                <customerAgeAsOf>28</customerAgeAsOf>
                <applicationNo>8000479</applicationNo>
                <payment>
                    <monthlyMode>12</monthlyMode>
                    <basicPlanModalPremium>1063.00</basicPlanModalPremium>
                    <riderModalPremium>2837.00</riderModalPremium>
                    <netPremium>3900.00</netPremium>
                    <paymentSlips>
                        <receiptNo>14024347</receiptNo>
                        <policyNo>PA10567084</policyNo>
                        <branchCode>6000</branchCode>
                        <paidDate>2020-08-19T00:00:00+07:00</paidDate>
                        <accountDate>2020-08-19T00:00:00+07:00</accountDate>
                        <policyYear>1</policyYear>
                        <allPolicyYear>1</allPolicyYear>
                        <premiumAmount>3900.00</premiumAmount>
                        <extraPremiumAmount>0.00</extraPremiumAmount>
                        <totalPremiumAmount>3900.00</totalPremiumAmount>
                        <discountPremiumAmount>0.00</discountPremiumAmount>
                        <paymentChannelRawData>1</paymentChannelRawData>
                    </paymentSlips>
                    <riderDeduction>
                        <motorPremium>500.00</motorPremium>
                        <murderPremium>187.00</murderPremium>
                        <medicalCarePremium>1518.00</medicalCarePremium>
                    </riderDeduction>
                </payment>
                <coverageTerm>
                    <sumInsured>500000</sumInsured>
                    <firstYearSumInsured>500000</firstYearSumInsured>
                    <motorAssured>1000000</motorAssured>
                    <murderAssured>500000</murderAssured>
                    <medicalCareAssured>50000</medicalCareAssured>
                    <paymentTerm>1</paymentTerm>
                    <coverageTerm>1</coverageTerm>
                </coverageTerm>
                <renewInfo>
                    <isRenewAble>true</isRenewAble>
                    <renewFlag>NOTFOUND</renewFlag>
                    <renewFlagInAs400></renewFlagInAs400>
                    <renewDescription>ไม่มีข้อมูลใน lib UWRLIB.UWNCSFQ0</renewDescription>
                </renewInfo>
                <insured>
                    <custId>10078110</custId>
                    <title>นาง</title>
                    <name>คิกคัก</name>
                    <surname>ณภัค</surname>
                    <birthDate>1992-08-19T00:00:00+07:00</birthDate>
                    <sex>FEMALE</sex>
                    <idNo>1180009222984</idNo>
                    <nationalityDesc>ไทย</nationalityDesc>
                    <occupationDesc>ประมง : คนงานเพาะพันธุ์ปลา</occupationDesc>
                </insured>
                <agent>
                    <agentHqCode>3804408</agentHqCode>
                    <agentName>นางมาลัย พายุดีเปรสชัน</agentName>
                    <agentType>AGENT</agentType>
                </agent>
                <riders>
                    <riderCode>2</riderCode>
                    <riderCodeName>อบ.1    </riderCodeName>
                    <riderShortName>ชดเชยรายได้    </riderShortName>
                    <riderName>ค่าชดเชยรายได้รายวัน                    </riderName>
                    <riderCommencementDate>2020-08-19T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2021-08-19T00:00:00+07:00</riderMaturityDate>
                    <riderSumPremium>352.00</riderSumPremium>
                    <riderSumInsured>500</riderSumInsured>
                </riders>
                <riders>
                    <riderCode>3</riderCode>
                    <riderCodeName>ค่าปลงศพ</riderCodeName>
                    <riderShortName>ค่าปลงศพ       </riderShortName>
                    <riderName>ค่าปลงศพ                                </riderName>
                    <riderCommencementDate>2020-08-19T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2021-08-19T00:00:00+07:00</riderMaturityDate>
                    <riderSumPremium>128.00</riderSumPremium>
                    <riderSumInsured>10000</riderSumInsured>
                </riders>
                <riders>
                    <riderCode>5</riderCode>
                    <riderCodeName>กระดูก  </riderCodeName>
                    <riderShortName>กระดูกแตก      </riderShortName>
                    <riderName>กระดูกชิ้นใหญ่แตกหัก                    </riderName>
                    <riderCommencementDate>2020-08-19T00:00:00+07:00</riderCommencementDate>
                    <riderMaturityDate>2021-08-19T00:00:00+07:00</riderMaturityDate>
                    <riderSumPremium>152.00</riderSumPremium>
                    <riderSumInsured>15000</riderSumInsured>
                </riders>
                <benefits>
                    <benefitName>นายเทส ณภัค</benefitName>
                    <benefitRelation>บิดา</benefitRelation>
                    <benefitTel>024518467</benefitTel>
                </benefits>
                <claim>
                    <isClaimDeathRegister>N</isClaimDeathRegister>
                </claim>
            </return>
        </ns2:searchByPolicyNoResponse>
    </soap:Body>
</soap:Envelope>
```

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
