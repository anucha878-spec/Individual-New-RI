# /thaisamut/branch/v1/xml/inquiry/search

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 567803938
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=567803938

---

[ [Overview](#id-/thaisamut/branch/v1/xml/inquiry/search-Overview) ] [ [Protocol](#id-/thaisamut/branch/v1/xml/inquiry/search-Protocol) ] [ [Operation](#id-/thaisamut/branch/v1/xml/inquiry/search-Operation) ] [ [Input](#id-/thaisamut/branch/v1/xml/inquiry/search-Input) ] [ [Process](#id-/thaisamut/branch/v1/xml/inquiry/search-Process) ] [ [Output](#id-/thaisamut/branch/v1/xml/inquiry/search-Output) ] [ [Exception](#id-/thaisamut/branch/v1/xml/inquiry/search-Exception) ] [ [Example Input & Output](#id-/thaisamut/branch/v1/xml/inquiry/search-ExampleInput&Output) ]

## Overview

ดึงข้อมูลรายละเอียดสาขา และ ข้อมูลเจ้าหน้าที่สาขา

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry,bulk,delete,update,add>
searchProfile

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| branchCode | String | รหัสสาขา 4 หลัก หรือ 7 หลัก | 4100 / 2074100 |   |

## Process

1. ดึงข้อมูลรายละเอียดสาขาจาก Table: [LIPS_PSPBRANC](/display/APP/LIPS_PSPBRANC) Join กับ Table: [LIPS_PSPSLORG](/display/APP/LIPS_PSPSLORG) , [OASYS_OAPUMPER](/display/RDSOTSS/OASYS_OAPUMPER) และ [OASYS_OAPPROVI](/display/RDSOTSS/OASYS_OAPPROVI)
<![CDATA[select brn.branc#, lorg.slunnm, brn.brpmt@, brn.brtax#, brn.brump#, brn.brpov#, brn.bradrs, ump.umpenm,pro.provnm,brn.brzip#, brn.brpsbr, brn.brpho@, brn.brfax@ from lips.pspbranc brn inner join lips.pspslorg lorg on brn.branc# = lorg.slunt# inner join oasys.oapprovi pro on brn.brpov# = pro.provi# inner join oasys.oapumper ump on brn.brpov# = ump.provi# and brn.brump# = ump.umper# where (MOD(brn.branc#,10000) = ? or brn.branc# = ?) --[branchCode] ]]>
2. ดึงข้อมูลจาก Table : [LIPS_PSPBRACE](/display/APP/LIPS_PSPBRACE)
<![CDATA[select EMBBNO, EMBEPN, EMBPID, EMBENO, EMBSTS, CREDTE, CRETME, CREUBY, UPDDTE, UPDTME, UPDUBY, EMBDISP from LIPS.PSPBRACE where EMBBNO = ? --[brn.branc#]2070116 ]]>

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

|   | Name | Type | Description | Example |
|---|---|---|---|---|
| ArrayList |   |   | Empty เมื่อไม่พบข้อมูล |   |
| ข้อมูลรายละเอียดสาขา |
|   | branchCode | String | รหัสสาขา 4 หลัก |   |
|   | ordCode | String | รหัสหน่วยงาน 3 หลัก |   |
|   | branch7Code | Integer | รหัสสาขา 7 หลัก |   |
|   | branchName | String | ชื่อสาขา |   |
|   | establishLicense | String | เลขที่ใบอนุญาต เปิดสาขา |   |
|   | taxNumber | String | เลขประจำตัวผู้เสียภาษี |   |
| ข้อมูลที่อยู่ที่ติดต่อ |
|   | branchAddress | String | ตำบล |   |
|   | branchDistrict | Integer | รหัสอำเภอ |   |
|   | branchDistrictName | String | ชื่ออำเภอ |   |
|   | branchProvince | Integer | รหัสจังหวัด |   |
|   | branchProvinceName | String | ชื่อจังหวัด |   |
|   | branchZipcode | Integer | รหัสไปรษณีย์ |   |
|   | postName | String | ชื่อไปรษณีย์ |   |
| ข้อมูลเบอร์โทรที่ติดต่อ |
|   | branchPhone | String | หมายเลขโทรศัพท์ |   |
|   | branchFax | String | หมายเลขโทรสาร |   |
| ข้อมูลพนักงานสาขา |
|   | ArrayList |   | Empty เมื่อไม่พบข้อมูล |   |
|   | empCode | String | รหัสพนักงาน |   |
|   | empName | String | ชื่อ-นามสกุล |   |
|   | empStatus | EMP_STATUS | สถานะ EMP_STATUS_AS400_1=สามารถใช้งานได้ EMP_STATUS_AS400_2=ห้ามใช้งานโดยเด็ดขาด EMP_STATUS_AS400_3=ลาออก/โยกย้าย UNKNOWN=ไม่รู้จัก |   |
|   | empStatusCode | String | รหัสสถานะ |   |
|   | empStatusDesc | String | คำอธิบายสถานะ |   |
|   | position | POSITION | รหัสตำแหน่ง POSITION_AS400_1=ผู้จัดการสำนักงาน หรือ ผจก.สนง. POSITION_AS400_2=การเงิน POSITION_AS400_3=ธุรการ POSITION_AS400_4=บริการUNKNOWN=ไม่รู้จัก |   |
|   | positionCode | String | รหัสตำแหน่ง |   |
|   | positionDesc | String | คำอธิบายตำแหน่ง |   |
|   | createdDate | Date | created date |   |
|   | createdBy | String | created by |   |
|   | updatedDate | Date | updated date |   |
|   | updatedBy | String | updated by |   |
|   | empDisplay | EmpDisplay | YES,NO |   |

## Exception

<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output

1. <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <searchProfile xmlns="http://v1.search.branchws.targetbundles.osgi.thaisamut/">
            <branchCode xmlns="">1000</branchCode>
        </searchProfile>
    </Body>
</Envelope>
```

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns2:searchProfileResponse xmlns:ns2="http://v1.search.branchws.targetbundles.osgi.thaisamut/">
            <return>
                <branchCode>1000</branchCode>
                <orgCode>207</orgCode>
                <branch7Code>2071000</branch7Code>
                <branchName>ราชบุรี</branchName>
                <establishLicense>ช.4/26</establishLicense>
                <taxNumber>3101017205</taxNumber>
                <address>
                    <branchAddress>61/19-21 ถ.นครปฐม-เพชรบุรี ต.โคกหม้อ</branchAddress>
                    <branchDistrict>1</branchDistrict>
                    <branchDistrictName>เมือง</branchDistrictName>
                    <branchProvince>49</branchProvince>
                    <branchProvinceName>ราชบุรี</branchProvinceName>
                    <branchZipcode>70000</branchZipcode>
                    <postName>ราชบุรี</postName>
                    <phone>
                        <branchPhone>0 3232 7677-9</branchPhone>
                        <branchFax>0 3232 7675</branchFax>
                    </phone>
                </address>
            </return>
            <return>
                <branchCode>1000</branchCode>
                <orgCode>507</orgCode>
                <branch7Code>5071000</branch7Code>
                <branchName>ราชบุรี(ข/พ)</branchName>
                <establishLicense>ช.4/26</establishLicense>
                <taxNumber>3101017205</taxNumber>
                <address>
                    <branchAddress>61/19-21 ถ.นครปฐม-เพชรบุรี ต.โคกหม้อ</branchAddress>
                    <branchDistrict>1</branchDistrict>
                    <branchDistrictName>เมือง</branchDistrictName>
                    <branchProvince>49</branchProvince>
                    <branchProvinceName>ราชบุรี</branchProvinceName>
                    <branchZipcode>70000</branchZipcode>
                    <postName>ราชบุรี</postName>
                    <phone>
                        <branchPhone>0 3231 7677-9</branchPhone>
                        <branchFax>0 3232 7575</branchFax>
                    </phone>
                </address>
            </return>
            <return>
                <branchCode>1000</branchCode>
                <orgCode>707</orgCode>
                <branch7Code>7071000</branch7Code>
                <branchName>ศูนย์ SM บ้านโป่ง 2</branchName>
                <taxNumber>0</taxNumber>
                <address>
                    <branchDistrict>1</branchDistrict>
                    <branchDistrictName>เมือง</branchDistrictName>
                    <branchProvince>3</branchProvince>
                    <branchProvinceName>กาญจนบุรี</branchProvinceName>
                    <branchZipcode>71000</branchZipcode>
                    <phone/>
                </address>
            </return>
        </ns2:searchProfileResponse>
    </soap:Body>
</soap:Envelope>
```

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
- [LIPS_PSPBRANC](http://wiki.thaisamut.co.th/display/APP/LIPS_PSPBRANC)
- [LIPS_PSPSLORG](http://wiki.thaisamut.co.th/display/APP/LIPS_PSPSLORG)
- [OASYS_OAPUMPER](http://wiki.thaisamut.co.th/display/RDSOTSS/OASYS_OAPUMPER)
- [OASYS_OAPPROVI](http://wiki.thaisamut.co.th/display/RDSOTSS/OASYS_OAPPROVI)
- [LIPS_PSPBRACE](http://wiki.thaisamut.co.th/display/APP/LIPS_PSPBRACE)
