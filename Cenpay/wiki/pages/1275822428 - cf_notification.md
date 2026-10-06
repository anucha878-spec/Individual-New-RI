# cf_notification

- **Page ID:** 1275822428
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > cf_notification
- **Depth:** 4

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | cf_notification | Data Source | - |
| Project Name | Centralized Payment | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลข้อความสำหรับส่ง SMS และ Line |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |   | noti_code | Varchar | 20 | N | รหัสของ Notification |   |   |   |   |   |   | 1 |   | patcharat.vo | 2025-10-02 |   |
| 2 |   | noti_category | Varchar | 15 | N |   | อ้างอิง Category [02. SMS Template Specification](/display/RDSSMSGW/02.+SMS+Template+Specification) |   |   |   |   |   | A01 |   | patcharat.vo | 2025-10-02 |   |
| 3 |   | noti_desc | Varchar | 100 | N | ชื่อ Notifiction |   |   |   |   |   |   | แจ้งผลการตรวจสอบ |   | patcharat.vo | 2025-08-13 |   |
| 4 |   | sms_message | Varchar | 500 | N | Message ของ SMS |   |   |   |   |   |   | - |   | patcharat.vo | 2025-08-13 |   |
| 5 |   | line_message | Varchar | 500 | N | Message ของ Line |   |   |   |   |   |   | - |   | patcharat.vo | 2025-10-03 |   |
| 6 |   | status | Varchar | 1 | N | สถานะการใช้งานA = Active I = Inactive |   |   |   |   |   |   | A |   | patcharat.vo | 2025-10-03 |   |
| 7 |   | created_date | Timestamp |   | N | วันที่สร้าง |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-13 |   |
| 8 |   | created_by | Varchar | 50 | N | ผู้สร้าง |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-13 |   |
| 9 |   | updated_date | Timestamp |   | Y | วันที่แก้ไข |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-08-13 |   |
| 10 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไข |   |   |   |   |   |   | patcharat.vo |   | patcharat.vo | 2025-08-13 |   |

อ้างอิงข้อมูล : [cf_notification_data](/display/RDSCPENH/cf_notification_data)
- No labels
- [Edit Labels](#)

## [1 Child Page](/display/RDSCPENH/cf_notification?showChildren=false#children)

[/display/RDSCPENH/cf_notification?showChildren=false#children](/display/RDSCPENH/cf_notification?showChildren=false#children)
Page: [cf_notification_data](/display/RDSCPENH/cf_notification_data)
[![User icon: Add a picture of yourself](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/profilepics/add_profile_pic.png)](/users/editmyprofilepicture.action)
Loading the Editor
Write a comment…
[Add Comment](/display/RDSCPENH/cf_notification?showComments=true&showCommentArea=true#addcomment)

---

## Hyperlinks บนหน้านี้

- [02. SMS Template Specification](http://wiki.thaisamut.co.th/display/RDSSMSGW/02.+SMS+Template+Specification)
- [cf_notification_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification_data)
- [1 Child Page](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification?showChildren=false#children)
- [/display/RDSCPENH/cf_notification?showChildren=false#children](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification?showChildren=false#children)
- [cf_notification_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification_data)
- [/users/editmyprofilepicture.action](http://wiki.thaisamut.co.th/users/editmyprofilepicture.action)
- [Add Comment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_notification?showComments=true&showCommentArea=true#addcomment)
