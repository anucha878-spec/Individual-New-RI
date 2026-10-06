# msa_nbs_03 ดึงข้อมูล Nbs User

- **Space:** `RDSCP` — Centralized Payment
- **Page ID:** 780435778
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=780435778

---

## Overview

ดึงข้อมูล User จากระบบ Nbs : users, manager_branch
Service Path: /thaisamut/rs/nbswebapi/v1/nbsuser/{username}
Icon
TYPE : <GET>

## Input Type :

| Name | Input Type | Type | Description | Required/Optional | Example |
|---|---|---|---|---|---|
| username | Query | String | username | true | mg0800 |

## Process

**ขั้นตอนการประมวลผล**
- ตรวจสอบการเป็นผู้จัดการ
<![CDATA[select * from manager_branch where status = &#39;A&#39; and username = :username order by create_date]]>
- ตรวจสอบข้อมูล user
<![CDATA[select * from users where username = :username order by created_date desc]]>

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| Name | Type | Description | Example |
|---|---|---|---|
| username | String | username | mg0800 |
| fullname | String | ชื่อ-นามสกุล | ผู้จัดการสาขา mg0800 |
| jobTitle | String | ตำแหน่ง |   |
| branchCode | String | สาขา | 0800 |
| permissions | String | สิทธิ์จากระบบ Nbs | 0 |
| flagIsManager | Boolean | สิทธิ์การเป็นผู้จัดการ | TRUE |
