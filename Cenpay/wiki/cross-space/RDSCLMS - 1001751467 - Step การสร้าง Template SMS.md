# Step การสร้าง Template SMS

- **Space:** `RDSCLMS` — โครงการ New Claim System
- **Page ID:** 1001751467
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001751467

---

1. เพิ่ม sms_code,sms_message ที่ตาราง [cf_ncl_sms](/display/RDSCLMS/cf_ncl_sms) และ [Master Data](https://docs.google.com/spreadsheets/d/1DPfytPFFleBW_qSS2QLRTPXf17qzdap8qudVmTgKkeA/edit?pli=1#gid=502073414) (ตารางของระบบ CMS เอง)
2. เพิ่ม Template ที่ [02. SMS Template Specification](/display/RDSSMSGW/02.+SMS+Template+Specification)

| Column | Data |
|---|---|
| Catagory | Claim Management System |
| Catagory short code | CMS |
| วัตถุประสงค์ | ตามหัวข้อ SMS |
| System name/File Shared | ตามหัวข้อ SMS |
| Sender | OceanLife |
| Username | Production : postnclaim@oceanlifeUAT : postnccuat@oceanlife |
| SMS Host | bulksms.sc4msg |
| ตัวอย่าง SMS | ตามหัวข้อ SMS |

3. เปิด JIRA และ ITD แจ้งพี่เปิ้ล,พี่บ๊อบ ตามตัวอย่าง (ให้ JIRA 2 ตัว Relate กันด้วย)
[![img](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)ESB-3691](http://jira.thaisamut.co.th/browse/ESB-3691) - ขอเพิ่ม SMS Category สำหรับโครงการ CMS แจ้งผลการรับเรื่องจากสาขา (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) และ [![img](http://jira.thaisamut.co.th/images/icons/issuetypes/story.png)ITD-63648](http://jira.thaisamut.co.th/browse/ITD-63648) - ขอเพิ่ม Config Account SMS สำหรับโครงการ CMS (![img](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved)
4.เพิ่มการ Config ที่ระบบ CSMS (epirusapp)
Ex. [![img](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)NCLS-5226](http://jira.thaisamut.co.th/browse/NCLS-5226) - [CMS] Initial ข้อมูล SMS Category ที่ระบบ CSMS (![img](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) และ Update sms_catregory ที่ wiki [http://wiki.thaisamut.co.th/pages/viewpage.action?title=sms_category&spaceKey=CSMS](http://wiki.thaisamut.co.th/pages/viewpage.action?title=sms_category&spaceKey=CSMS)

---

## Hyperlinks บนหน้านี้

- [cf_ncl_sms](http://wiki.thaisamut.co.th/display/RDSCLMS/cf_ncl_sms)
- [Master Data](https://docs.google.com/spreadsheets/d/1DPfytPFFleBW_qSS2QLRTPXf17qzdap8qudVmTgKkeA/edit?pli=1#gid=502073414)
- [02. SMS Template Specification](http://wiki.thaisamut.co.th/display/RDSSMSGW/02.+SMS+Template+Specification)
- [ESB-3691](http://jira.thaisamut.co.th/browse/ESB-3691)
- [ITD-63648](http://jira.thaisamut.co.th/browse/ITD-63648)
- [NCLS-5226](http://jira.thaisamut.co.th/browse/NCLS-5226)
- [http://wiki.thaisamut.co.th/pages/viewpage.action?title=sms_category&spaceKey=CSMS](http://wiki.thaisamut.co.th/pages/viewpage.action?title=sms_category&spaceKey=CSMS)
