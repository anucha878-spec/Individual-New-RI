# 02_WS_ใช้สำหรับ Download File by Content Id

- **Space:** `RDSEAPP` — E-Application
- **Page ID:** 1175257167
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1175257167

---

# Overview

Web service ใช้สำหรับ Download File by Content Id
Icon
<REST>
path = /thaisamut/rs/seaweedgw/v1/eapp/file/{contentId}
request type = GET

### **Operation**

TYPE: POST

### **Input**

| **Name** | **Require** | **Type** | **Description** | **Example** |
|---|---|---|---|---|
| contentId | ![img](/download/attachments/1070498139/check.png?version=1&modificationDate=1687154958238&api=v2) | string | Content id | d6184e4a-2dbf-4676-ab91-dc0fcbe017c1 |

### **Process**

1. ระบบจะทำการ Download File by Content Id

### **Output**

1. ถ้ามีข้อมูลไฟล์ จะสามารถ Download File ได้ ![img](/download/attachments/1175257167/seaweed-upload.PNG?version=1&modificationDate=1721096512615&api=v2)

### **ตัวอย่าง Responses JSON**

- **กรณีที่ไม่มีข้อมูล** <![CDATA[ไม่พบข้อมูล content id = dd1069d0-384a-4917-a1d1-b79a62369646]]>
****
****

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1070498139/check.png?version=1&modificationDate=1687154958238&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1175257167/seaweed-upload.PNG?version=1&modificationDate=1721096512615&api=v2
