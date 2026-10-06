# /thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 500596786
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=500596786

---

[ [Overview](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Overview) ] [ [Protocol](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Protocol) ] [ [Operation](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Operation) ] [ [Input](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Input) ] [ [Process](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Process) ] [ [Output](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Output) ] [ [Exception](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-Exception) ] [ [Example Input & Output](#id-/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode-ExampleInput&Output) ]

## Overview

web service สำหรับดึงข้อมูลตำแหน่งและเครดิตตัว ของตัวแทน จาก AS400 ซึ่ง output จะดึงรายการเฉพาะที่ได้ตาม รหัส 7 หลักของตัวแทนนั่นๆ

## Protocol

Icon
<SOAP>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : inquiry
searchByAgentCode

## Input

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| agent7Code | String | รหัสตัวแทน 7 หลัก | 5502992 |   |

## Process

1. ดึงข้อมูลที่ AS400
2. ตรวจสอบ Agent Code ที่รับเข้ามาว่า เป็น Agent Active หรือ Inactive ดังนี้
  1. ตรวจสอบที่ Table Agent Active ถ้าผลของ Query ไม่ null หมายถึง เป็น Agent Active ให้ดึงข้อมูลต่อใน Query ข้อ 3. แต่ถ้าได้ null ให้ทำต่อที่ข้อ b. <![CDATA[select agmt.agent#, right(agmt.agorg#,4) as agorg#, branch.SLUNNM, agmt.agpodt, pos.agpos@, pos.agabpo, pos.agpost, cre.agcred, cre.agsdte, cre.agedte, cre.agbook, cre.agremk, cre.agdate, cre.aguser from lips.pspagmt4 agmt left join lips.pspslorg branch on agmt.agorg# = branch.slunt# left join lips.pspslpos pos on agmt.agpos@ = pos.agpos@ left join lips.pspcredt cre on agmt.agent# = cre.agent# where agmt.agent# = ? --[agent_code]]]>
  2. ตรวจสอบที่ Table Agent Active ถ้าผลของ Query ไม่ null หมายถึง เป็น Agent Active ให้ดึงข้อมูลต่อใน Query ข้อ 4. แต่ถ้าได้ null จะ return null ให้กับผู้ที่ Call ESB นี้ <![CDATA[select agdt4.AGENT#, agdt4.DTPODT, right(agdt4.DTORG#,4) as AGORG#, branch.SLUNNM, pos.agpos@, pos.AGABPO, pos.AGPOST, cre.AGCRED, cre.AGSDTE, cre.AGEDTE, cre.AGBOOK, cre.AGREMK, cre.AGDATE, cre.AGUSER from ( select d.* from ( select b.agent#, b.dttrdt, max(b.dtdate) as dtdate from ( select agent#, max(dttrdt) as dttrdt from lips.pspagdt4 where agent# = ? --[agent_code] group by agent# ) a left outer join lips.pspagdt4 b on a.agent# = b.agent# and a.dttrdt = b.dttrdt group by b.agent#, b.dttrdt ) c left outer join lips.pspagdt4 d on c.agent# = d.agent# and c.dttrdt = d.dttrdt and c.dtdate = d.dtdate) agdt4 left join lips.pspslorg branch on agdt4.dtorg# = branch.slunt# left join lips.pspslpos pos on agdt4.dtpos@ = pos.agpos@ left join lips.pspcredt cre on agdt4.agent# = cre.agent#]]>
3. Query <![CDATA[select agmt.AGENT#, agmt.AGTITL, agmt.AGNAME, agmt.AGLSNM, agmt.AGBIDT, license.AGENT# as license_agent#, license.AGLIC#, license.DATBEG, license.DATEXP, address.agent# as address_agent#, address.AGADDR as address, umper.UMPER# as district_code, umper.UMPENM as district_name, prov.PROVI# as province_code, prov.PROVNM as province_name, address.AGZIP# as postcode, phone.AGPHON as phone_no, acc.bacode, acc.babrnm, acc.baacno from lips.pspagmt4 agmt4 left join lips.pspagmt1 agmt on agmt4.agent# = agmt.agent# left join lips.asplcagm license on agmt.agent# = license.agent# left join lips.pspagmt2 address on agmt.agent# = address.agent# left join lips.pspagmt6 phone on address.agent# = phone.agent# left join oasys.oapprovi prov on address.agprv# = prov.provi# left join oasys.oapumper umper on address.agprv# = umper.provi# and address.agump# = umper.umper# left join lips.pspagtac acc on address.agent# = acc.baagt# where agmt4.agent# = ? --[agent_code]3220982]]>
4. Query <![CDATA[select agmt.AGENT#, agmt.AGTITL, agmt.AGNAME, agmt.AGLSNM, agmt.AGBIDT, license.AGENT# as license_agent#, license.AGLIC#, license.DATBEG, license.DATEXP, address.agent# as address_agent#, address.AGADDR as address, umper.UMPER# as district_code, umper.UMPENM as district_name, prov.PROVI# as province_code, prov.PROVNM as province_name, address.AGZIP# as postcode, phone.AGPHON as phone_no, acc.bacode, acc.babrnm, acc.baacno from ( select d.* from ( select b.agent#, b.dttrdt, max(b.dtdate) as dtdate from ( select agent#, max(dttrdt) as dttrdt from lips.pspagdt4 where agent# = ? --[agent_code]3000019 group by agent# ) a left outer join lips.pspagdt4 b on a.agent# = b.agent# and a.dttrdt = b.dttrdt group by b.agent#, b.dttrdt ) c left outer join lips.pspagdt4 d on c.agent# = d.agent# and c.dttrdt = d.dttrdt and c.dtdate = d.dtdate) agdt4 left join lips.pspagmt1 agmt on agdt4.agent# = agmt.agent# left join lips.asplcagm license on agmt.agent# = license.agent# left join lips.pspagmt2 address on agmt.agent# = address.agent# left join lips.pspagmt6 phone on address.agent# = phone.agent# left join oasys.oapprovi prov on address.agprv# = prov.provi# left join oasys.oapumper umper on address.agprv# = umper.provi# and address.agump# = umper.umper# left join lips.pspagtac acc on address.agent# = acc.baagt#]]>
5. กรณีที่ไม่พบข้อมูล license ที่เป็น active จะมาหาข้อมูลที่เป็น inactive
6. Query <![CDATA[select d.agent#, max(d.aglic#) as aglic#, d.datbeg, d.datexp from lips.asplcage d inner join ( select b.agent#, max(b.datexp) as datexp from lips.asplcage b left outer join lips.asplcagm a on b.agent# = a.agent# where a.agent# is null and b.agent# = ? --agent# group by b.agent# ) c on d.agent# = c.agent# and d.datexp = c.datexp group by d.agent#, d.datbeg, d.datexp]]>
7. กรณีที่ไม่พบข้อมูล address ที่เป็น active จะมาหาข้อมูลที่เป็น inactive
8. Query <![CDATA[select d.agent#, d.dtaddr as address, f.umpenm as district_name, f.umper# as district_code, e.provnm as province_name, e.provi# as province_code, d.dtzip# as postcode, &#39;-&#39; as phone_no from ( select b.agent#, b.dttrdt, max(b.dtdate) as dtdate from ( select agent#, max(dttrdt) as dttrdt from lips.pspagdt4 where agent# = ? group by agent# ) a left outer join lips.pspagdt4 b on a.agent# = b.agent# and a.dttrdt = b.dttrdt group by b.agent#, b.dttrdt ) c left outer join lips.pspagdt4 d on c.agent# = d.agent# and c.dttrdt = d.dttrdt and c.dtdate = d.dtdate left outer join oasys.oapprovi e on d.dtprv# = e.provi# left outer join oasys.oapumper f on d.dtprv# = f.provi# and d.dtump# = f.umper#]]>

## Output

| Name | Type | Description | Example | Transform | Source |
|---|---|---|---|---|---|
| agentCode | String | รหัสตัวแทน 7 หลัก | 3001049 |   | agent# |
| title | String | คำนำหน้า | นาย |   | agtitl |
| name | String | ชื่อ | ธนเดช |   | agname |
| surname | String | นามสกุล | ช่างกลึงเหมาะ |   | aglsnm |
| birthDate | Date | วันเกิด | 1955-02-19T00:00:00+07:00 |   | agbidt |
| agentBranch | String | รหัสสาขา | 0116 |   | agorg# |
| agentStatus | AgentStatus | enum: ACTIVE, IN_ACTIVE |   |   |   |
| Position ข้อมูลตำแหน่งงาน |
| positionCode | String | รหัสตำแหน่งาน | 36 |   | agpos@ |
| positionName | String | ชื่อย่อตำแหน่ง | หนน. |   | agabpo |
| positionFullName | String | ชื่อเต็มตำแหน่ง | หัวหน้าหน่วย |   | agpost |
| appointDate | Date | วันที่แต่งตั้ง | 2015-01-01T00:00:00+07:00 |   | agpodt |
| AgentCredit ข้อมูลเครดิตตัวแทน |
| agentCredit | Integer | เครดิตตัวแทน (0,1,2,3 ) | 2 |   | agcred |
| agentCreditStartDate | Date | วันที่เริ่มต้นเครดิตตัวแทน | 2015-01-09T00:00:00+07:00 |   | agsdte |
| agentCreditEndDate | Date | วันที่สิ้นสุดเครดิตตัวแทน | 2015-01-09T00:00:00+07:00 |   | agedte |
| agentBook | String | เลขที่หนังสือ | m.107/30.3.58 |   | agbook |
| agentRemark | String | หมายเหตุ |   |   | agremk |
| AgentLicense ข้อมูลเลขที่ใบอนุญาต |
| license | String | เลขที่ใบอนุญาต | 5001047013 |   | AGLIC# |
| beginDate | Date | วัน/เดือน/ปี เริ่มมีใบอนุญาต | 2007-07-20T00:00:00+07:00 |   | DATBEG |
| expireDate | Date | วัน/เดือน/ปี ใบอนุญาตหมดอายุ | 2020-07-19T00:00:00+07:00 |   | DATEXP |
| AgentAddress ข้อมูลที่อยู่ที่ติดต่อ |
| address | String | ที่อยู่ (เก็บตั้องแต่ บ้านเลขที่จนถึง ตำบล ตำบลควรเก็บ ต.) | 26 ม.1 ต.โพธิ์เก้าต้น |   | AGADDR |
| districtCode | String | รหัสอำเภอ | 1 |   | UMPER# |
| districtName | String | ชื่ออำเภอ | เมือง |   | UMPENM |
| provinceCode | String | รหัสจังหวัด | 50 |   | PROVI# |
| provinceName | String | ชื่อจังหวัด | ลพบุรี |   | PROVNM |
| zipcode | String | รหัสไปรษณีย์ | 15000 |   | AGZIP# |
| phoneNo | String | หมายเลขโทรศัพท์ | 0925910936หมายเหตุ ข้อมูลบาง record จะมีการเก็บหมายเลขโทรศัพท์ > 1 เลข โดยใช้ space แยกระหว่าง 2 เลข เช่น "0812503130 024106339" และบาง record ก็มี "-" คั่นระหว่างตัวเลข เช่น "089-4986018" เป็นต้น |   | AGPHON |

## Exception

## Example Input & Output

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchByAgentCode xmlns="http://v3.search.agentws.targetbundles.osgi.thaisamut/">
            <agent7Code xmlns="">5502992</agent7Code>
        </searchByAgentCode>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchByAgentCodeResponse xmlns:ns2="http://v3.search.agentws.targetbundles.osgi.thaisamut/">
            <return>
                <agentCode>5502992</agentCode>
                <title>น.ส.</title>
                <name>บุตรดี</name>
                <surname>รัฐวร</surname>
                <birthDate>1971-09-08T00:00:00+07:00</birthDate>
                <agentBranchCode>3007</agentBranchCode>
                <agentBranchName>น้ำพอง</agentBranchName>
                <agentStatus>ACTIVE</agentStatus>
                <position>
                    <positionCode>37</positionCode>
                    <positionName>ตท.ลด ตน.</positionName>
                    <positionFullName>ตัวแทนลดตำแหน่ง</positionFullName>
                    <appointDate>2014-05-01T00:00:00+07:00</appointDate>
                </position>
                <agentCredit/>
                <agentLicense>
                    <license>5501079668</license>
                    <beginDate>2012-09-13T00:00:00+07:00</beginDate>
                    <expireDate>2115-09-12T00:00:00+07:00</expireDate>
                </agentLicense>
                <agentAddress>
                    <address>41/82 ซ.วัดเวฬุวนาราม9แยก1 ต.ดอนเมือง</address>
                    <districtCode>31</districtCode>
                    <districtName>ดอนเมือง</districtName>
                    <provinceCode>1</provinceCode>
                    <provinceName>กรุงเทพฯ</provinceName>
                    <zipcode>10210</zipcode>
                    <phoneNo>0884967752</phoneNo>
                </agentAddress>
                <bank>
                    <bankCode>14</bankCode>
                    <name>สาขาบิ๊กซี แจ้งวัฒนะ</name>
                    <accountNo>2732126239</accountNo>
                </bank>
            </return>
        </ns2:searchByAgentCodeResponse>
    </soap:Body>
</soap:Envelope>
```

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
