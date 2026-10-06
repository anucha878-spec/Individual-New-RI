# 01 Email Setting Authorizer Mobile No

- **Page ID:** 1343717471
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-17 กระบวนการส่งอีเมล > 01 Email Setting Authorizer Mobile No
- **Depth:** 5

---

อ้างอิง Sheet : [10.1 หน้าจอ Approver Mobile Number](https://docs.google.com/spreadsheets/d/1IlYriQqS-PPwNWk-Gz9QtRt4x8KpJf7jwAY-D5GVyMs/edit?usp=sharing)

|   | **SRS** | **FS** |
|---|---|---|
| Sender | [appservice@ocean.co.th](mailto:appservice@ocean.co.th) |   |
| To | username[@ocean.co.th](mailto:rattana.so@ocean.co.th) | ตรวจสอบ env จาก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere lookup_key = SYSTEM_ENVenvemail toNull (SIT,UAT)ตรวจสอบ mail_to จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code SETTING_MOBILE_NO_EMAILPRODใช้ username ที่ได้จากหน้าจอ [[Menu PY0502 : API Payment] FS-11-01 หน้าจอจัดการเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1342734682) |
| env | email to |
| Null (SIT,UAT) | ตรวจสอบ mail_to จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code SETTING_MOBILE_NO_EMAIL |
| PROD | ใช้ username ที่ได้จากหน้าจอ [[Menu PY0502 : API Payment] FS-11-01 หน้าจอจัดการเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1342734682) |
| CC |   | ตรวจสอบ mail_cc จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code SETTING_MOBILE_NO_EMAIL |
| Subject | [แจ้งเตือนความปลอดภัย] ผลการเปลี่ยนแปลงหมายเลขโทรศัพท์รับ OTP (Payment Management) | ตรวจสอบ subject จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code SETTING_MOBILE_NO_EMAIL |
| Description | **เรียน คุณรัตนา ศรศรี**ระบบขอแจ้งผลการเปลี่ยนแปลงหมายเลขโทรศัพท์มือถือสำหรับรับรหัส OTP ในระบบ **Payment Management** โดยมีรายละเอียดดังนี้**วัน/เวลาที่ทำรายการ:** 21/05/2026 14:43:42**หมายเลขโทรศัพท์ :** 081 XXXX 678**สถานะ:** สำเร็จ**ดำเนินการ** : เพิ่ม / แก้ไข / ลบ⚠️ **ข้อควรระวังเพื่อความปลอดภัย:** หากท่าน**ไม่ได้**เป็นผู้ดำเนินการเปลี่ยนแปลงข้อมูลดังกล่าว หรือสงสัยว่าเกิดการเข้าถึงบัญชีโดยไม่ได้รับอนุญาต กรุณาติดต่อฝ่าย IT Support ทันที**Email :** [helpdesk@ocean.co.th](mailto:helpdesk@ocean.co.th)**โทรศัพท์ :** 02-261-2300 ต่อ 1999 ขอแสดงความนับถือ ระบบ Payment Management**อีเมลฉบับนี้เป็นการแจ้งเตือนจากระบบอัตโนมัติ กรุณาอย่าตอบกลับอีเมลนี้ (This is an automated email. Please do not reply.)* | ให้สร้างรูปแบบ Email ตาม SRS โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้โดยรับ Input จากหน้าจอFieldDescriptionRemarkemailผู้ทำรายการupdated by patcha.vo 10/06/69nbsFullNameชื่อผู้ทำรายการupdated by patcha.vo 10/06/69systemDateTimeวัน/เวลาที่ทำรายการ mobileNoหมายเลขโทรศัพท์ statusสถานะ actionดำเนินการA - เพิ่ม D - ลบ E - แก้ไข แสดงข้อมูลดังนี้FieldMapping DataRemarkemail ผู้ทำรายการ@emailupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)ชื่อผู้ทำรายการคุณ @nbsFullNameupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)วัน/เวลาที่ทำรายการ@systemDateTime หมายเลขโทรศัพท์ใหม่@mobileNo Masking ตามเงื่อนไข [IT Development Common Validation](/display/RnD/IT+Development+Common+Validation) (เบอร์มือถือลูกค้า)updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79148](https://redmine.ochi.link/issues/79148) สถานะ@status ดำเนินการ@action Emailแสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description จาก[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'HELPDESK' โทรศัพท์แสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config จาก[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'HELPDESK' |
| Field | Description | Remark |
| email | ผู้ทำรายการ | updated by patcha.vo 10/06/69 |
| nbsFullName | ชื่อผู้ทำรายการ | updated by patcha.vo 10/06/69 |
| systemDateTime | วัน/เวลาที่ทำรายการ |   |
| mobileNo | หมายเลขโทรศัพท์ |   |
| status | สถานะ |   |
| action | ดำเนินการA - เพิ่ม D - ลบ E - แก้ไข |   |
| Field | Mapping Data | Remark |
| email ผู้ทำรายการ | @email | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| ชื่อผู้ทำรายการ | คุณ @nbsFullName | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| วัน/เวลาที่ทำรายการ | @systemDateTime |   |
| หมายเลขโทรศัพท์ใหม่ | @mobileNo Masking ตามเงื่อนไข [IT Development Common Validation](/display/RnD/IT+Development+Common+Validation) (เบอร์มือถือลูกค้า) | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79148](https://redmine.ochi.link/issues/79148) |
| สถานะ | @status |   |
| ดำเนินการ | @action |   |
| Email | แสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description จาก[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'HELPDESK' |   |
| โทรศัพท์ | แสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config จาก[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'HELPDESK' |   |

---

## Hyperlinks บนหน้านี้

- [10.1 หน้าจอ Approver Mobile Number](https://docs.google.com/spreadsheets/d/1IlYriQqS-PPwNWk-Gz9QtRt4x8KpJf7jwAY-D5GVyMs/edit?usp=sharing)
- [appservice@ocean.co.th](http://wiki.thaisamut.co.thmailto:appservice@ocean.co.th)
- [@ocean.co.th](http://wiki.thaisamut.co.thmailto:rattana.so@ocean.co.th)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [[Menu PY0502 : API Payment] FS-11-01 หน้าจอจัดการเบอร์โทรศัพท์ Authorizer](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1342734682)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [helpdesk@ocean.co.th](http://wiki.thaisamut.co.thmailto:helpdesk@ocean.co.th)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)
- [IT Development Common Validation](http://wiki.thaisamut.co.th/display/RnD/IT+Development+Common+Validation)
- [https://redmine.ochi.link/issues/79148](https://redmine.ochi.link/issues/79148)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
