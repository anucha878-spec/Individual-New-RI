# cf_case_management

- **Page ID:** 1302364634
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > cf_case_management
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | cf_case_management | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-27 | Description | เก็บข้อมูล id ของระบบ case management |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

กรณี initial data แยกตาม env. อ้างอิง sheet : [https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1032186269#gid=1032186269](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1032186269#gid=1032186269)

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | case_code | varchar | 20 | N | รหัสเหตุการณ์ |   |   |   |   |   |   |   |   |   |   |
| 2 |   | subject_id | int | 10 | Y | รหัส Case Subject | categories.id ของระบบ ระบบ case management level 2 |   |   |   |   |   |   |   |   |   |
| 3 |   | sub_subject_id | int | 10 | Y | รหัส Sub Subject | categories.id ของระบบ ระบบ case management level 3 |   |   |   |   |   |   |   |   |   |
| 4 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   |   |   |   |   |
| 5 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล |   |   |   |   |   |   |   |   |   |   |
| 6 |   | updated_date | varchar | 50 | Y | ผู้แก้ไขข้อมูล |   |   |   |   |   |   |   |   |   |   |
| 7 |   | updated_by | timestamp |   | Y | วันที่และเวลาที่แก้ไขข้อมูล |   |   |   |   |   |   |   |   |   |   |

- No labels
- [Edit Labels](#)
[![User icon: Add a picture of yourself](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/profilepics/add_profile_pic.png)](/users/editmyprofilepicture.action)
Loading the Editor
Write a comment…
[Add Comment](/display/RDSCPENH/cf_case_management?showComments=true&showCommentArea=true#addcomment)

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1032186269#gid=1032186269](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1032186269#gid=1032186269)
- [/users/editmyprofilepicture.action](http://wiki.thaisamut.co.th/users/editmyprofilepicture.action)
- [Add Comment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management?showComments=true&showCommentArea=true#addcomment)
