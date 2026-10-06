# /thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry

- **Space:** `IEA` — IT Enterprise Architecture
- **Page ID:** 897515965
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=897515965

---

[ [Overview](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-Overview) ] [ [Operation](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-Operation) ] [ [Input](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-Input) ] [ [Process](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-Process) ] [ [Output](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-Output) ] [ [Example Input & Output](#id-/thaisamut/policy/v1/xml/inquiry/epolicytype#inquiry-ExampleInput&Output) ]

## Overview

Protocol
Icon
<SOAP,HESSIAN,REST>

## Operation

refer : [ESB WebService Design Pattern](/display/IEA/ESB+WebService+Design+Pattern)
Icon
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>

| No | Name | Type | Description | Example | Validation |
|---|---|---|---|---|---|
| 1 | policyNo | String | เลขที่กรมธรรม์ | 1525027 | required |
|   | policyType | PolicyType | ประเภทกรมธรรม์ |   |   |

## Process

1. ข้อมูล ord**ตรวจสอบข้อมูล E-Policy** <![CDATA[SELECT ep.POLFMT, ep.EPOFLG,tas.STSDSC FROM OLIS.OLPPOLEP ep LEFT JOIN OLIS.OLPSTAS tas ON ep.POLFMT = tas.STSCOD WHERE ep.POLNO = @policyNo and tas.STSTYP=&#39;H;]]> ข้อมูล PA**ตรวจสอบข้อมูล E-Policy** <![CDATA[SELECT ep.POLFMT, ep.EPOFLG,tas.STSDSC FROM PPALIB.TBEPOLIC ep LEFT JOIN OLIS.OLPSTAS tas ON ep.POLFMT = tas.STSCOD WHERE ep.POLNO = @policyNo and tas.STSTYP=&#39;H&#39;;]]>

## Output

| Name | Type | Description | Validation |
|---|---|---|---|
| ePolicyFlag | ePolicyFlag | แสดงรูปแบบกรมธรรม์เดิมที่เป็น e-Policy Y |   |
| ePolicyFormat | ePolicyFormat | รูปแบบกรมธรรม์ที่แจ้งไว้ 'E', 'P' |   |
| description | String | รายละเอียด รูปแบบกรมธรรม์ 'E'=e-Policy , 'P'=เล่มกรมธรรม์ |   |

Exception

## Example Input & Output

1. <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <inquiry xmlns="http://v1.inquiry.epolicytype.policyws.targetbundles.osgi.thaisamut/">
            <policyNo xmlns="">1</policyNo>
            <policyType xmlns="">P</policyType>
        </inquiry>
    </Body>
</Envelope>
```

---

## Hyperlinks บนหน้านี้

- [ESB WebService Design Pattern](http://wiki.thaisamut.co.th/display/IEA/ESB+WebService+Design+Pattern)
