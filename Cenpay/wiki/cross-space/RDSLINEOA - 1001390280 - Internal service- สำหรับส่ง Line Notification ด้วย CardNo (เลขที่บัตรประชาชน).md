# Internal service: สำหรับส่ง Line Notification ด้วย CardNo (เลขที่บัตรประชาชน)

- **Space:** `RDSLINEOA` — Line OA & Ocean Club API
- **Page ID:** 1001390280
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001390280

---

[ [Overview](#Internalservice:สำหรับส่งLineNotificationด้วยCardNo(เลขที่บัตรประชาชน)-Overview) ] [ [การใช้งาน Service](#Internalservice:สำหรับส่งLineNotificationด้วยCardNo(เลขที่บัตรประชาชน)-การใช้งานService) ] [ [Input](#Internalservice:สำหรับส่งLineNotificationด้วยCardNo(เลขที่บัตรประชาชน)-Input) ] [ [Output](#Internalservice:สำหรับส่งLineNotificationด้วยCardNo(เลขที่บัตรประชาชน)-Output) ]

## Overview

Service POST:: เพื่อทำการส่ง Notification ผ่านทาง LINE Application ให้กับหลาย UserId โดยใช้ข้อมูล CardNo (จะไปเรียกใช้ LINE API - Multicast)

## การใช้งาน Service

<![CDATA[Service:: /thaisamut/rs/lineoa/v1/notification/cardNo Example:: curl -X POST &quot;http://11.100.6.51/thaisamut/rs/lineoa/v1/notification/cardNo/1100800466702&quot; -H &quot;accept: */*&quot; -H &quot;Content-Type: application/json&quot; -d &quot;{\&quot;text\&quot;:\&quot;ท่านสามารถเข้าถึงบริการ จาก OCEAN LIFE ไทยสมุทรด้วยตัวเองได้แล้ววันนี้!!\&quot;,\&quot;createBy\&quot;:\&quot;LINEOA\&quot;}&quot; ]]>

## Input

<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>

| Name | Type | Description | Example | Validation |
|---|---|---|---|---|
| cardNo | string | เลขที่บัตรประชาชน | 1100800466702 |   |
| text | string | ข้อความที่ต้องการ Notification ผ่านทาง LINE Application | ท่านสามารถเข้าถึงบริการ จาก OCEAN LIFE ไทยสมุทรด้วยตัวเองได้แล้ววันนี้!! |   |
| createBy | string | ระบบที่เรียกใช้งาน Service | LINEOA |   |

## Output

- กรณีที่ CardNo มีข้อมูลลูกค้าที่ Active และสามารถส่งข้อความนั้นได้ ที่ LINE ของ userId นั้น จะแสดงข้อความดังนี้ ![img](/download/attachments/1001390280/image2022-9-21%2013%3A29%3A48.png?version=1&modificationDate=1663741787823&api=v2)
- Mapping Response CodeResponse CodeResponse DescriptionDetail200OKSend message to multiple user IDs by CardNo success400Bad RequestThis CardNo doesn't have Active UserIds or Input parameter text May not be empty
- Table สำหรับเก็บ Log Message จากการส่งข้อความหาลูกค้า โดยใช้เงื่อนไข transaction = 'notification' and message_type = 'TextMessage' และ userId <<[LG_LINEOA_MESSAGE](/display/RDSLINEOA/LG_LINEOA_MESSAGE)>>
- Table สำหรับ Config app_name และ channel ในการ allow permission ในการเรียก service <<[CF_LINEOA_NOTIFICATION_CHANNEL](http://wiki.thaisamut.co.th/display/RDSLINEOA/CF_LINEOA_NOTIFICATION_CHANNEL)>>

---

## Hyperlinks บนหน้านี้

- [LG_LINEOA_MESSAGE](http://wiki.thaisamut.co.th/display/RDSLINEOA/LG_LINEOA_MESSAGE)
- [CF_LINEOA_NOTIFICATION_CHANNEL](http://wiki.thaisamut.co.th/display/RDSLINEOA/CF_LINEOA_NOTIFICATION_CHANNEL)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1001390280/image2022-9-21%2013%3A29%3A48.png?version=1&modificationDate=1663741787823&api=v2
