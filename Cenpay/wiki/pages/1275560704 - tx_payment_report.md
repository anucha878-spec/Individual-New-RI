# tx_payment_report

- **Page ID:** 1275560704
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_report
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_payment_report
- **Depth:** 5

---

###### Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_payment_report | Data Source | Cenpay ข้อมูลจาก AS400 กระบวนการตั้งจ่าย |
| Project Name | Payment Management | Data Security | Secret, Confidential, Internal Use, Publicกรณีเป็นข้อมูลลูกค้าที่มี ชื่อ-นามสกุล, เลขประจำตัวประชาชน, วันเกิด, เบอร์โทรศัพท์ ควรกำหนดเป็น Confidentialกรณีเป็นข้อมูลทั่วไป จะใช้เป็น Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcharat.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2025-08-13 | Description | ข้อมูลประมาณการจ่าย นำเข้าข้อมูลจาก AS400 โดย Batch Cenpay[CP-PC-01-BH031 นำเข้าข้อมูลจ่ายเงินคืนทันที APL](/pages/viewpage.action?pageId=1282245403) |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name* | Data Type* | Length | Null (Y/N)* | Description* | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example* | เงื่อนไขในการบันทึก | Updated By* | Updated Date* | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY KEY | oper_ref_no | Varchar | 1620 | N | เลขที่อ้างอิงรายการธุรกรรม |   |   |   |   |   |   | CPAPUYYMMDD |   | patcharat.vo | 2026-05-12 |   |
| 2 |   | transaction_group | Varchar | 20 | N | กลุ่มของธุรกรรม |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | ผลประโยชน์ |   | anocha.su | 2025-09-04 |   |
| 3 |   | transaction_type | Varchar | 20 | N | ประเภทของรายการธุรกรรม |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | เวนคืนกรมธรรม์ |   | anocha.su | 2025-09-04 |   |
| 4 |   | payment_channel | Varchar | 20 | N | ช่องทางการจ่ายเงิน |   |   | [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key |   |   |   | โอนเงิน |   | anocha.su | 2025-09-04 |   |
| 5 |   | request_payment_date | Date | 8 | N | วันที่ Request Payment Date ที่ระบุข้อมูลจากต้นทาง |   |   |   |   |   |   | 2025-09-04 |   | anocha.su | 2025-09-04 |   |
| 6 |   | amount | Numeric | 15,2 | Y | จำนวนเงินจ่าย |   |   |   |   |   |   | 5,000.00 |   | patcharat.vo | 2025-10-03 |   |
| 7 |   | record_date | timestamp |   | N | วันและเวลาที่ได้รับข้อมูล |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | patcharat.vo | 2025-10-03 |   |
| 8 |   | created_date | timestamp |   | Y | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-08-01 08:00:00 |   | anocha.su | 2025-09-04 |   |
| 9 |   | created_by | Varchar | 50 | Y | ผู้สร้างรายการ |   |   |   |   |   |   | anocha.su |   | anocha.su | 2025-09-04 |   |

- No labels
- [Edit Labels](#)
[![User icon: Add a picture of yourself](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/profilepics/add_profile_pic.png)](/users/editmyprofilepicture.action)
Loading the Editor
Write a comment…
[Add Comment](/display/RDSCPENH/tx_payment_report?showComments=true&showCommentArea=true#addcomment)

---

## Hyperlinks บนหน้านี้

- [CP-PC-01-BH031 นำเข้าข้อมูลจ่ายเงินคืนทันที APL](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282245403)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [/users/editmyprofilepicture.action](http://wiki.thaisamut.co.th/users/editmyprofilepicture.action)
- [Add Comment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_report?showComments=true&showCommentArea=true#addcomment)
