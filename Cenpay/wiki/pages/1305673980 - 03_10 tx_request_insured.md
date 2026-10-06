# 03_10 tx_request_insured

- **Page ID:** 1305673980
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_10 tx_request_insured
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_insured | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-12-12 | Description | เก็บข้อมูลผู้เอาประกัน |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | insured_customer_id | varchar | 25 |   | รหัสลูกค้า | CIS |   |   |   |   |   | 25620345532 |   |   |   |
| 4 |   | insured_title | varchar | 25 | Y | คำนำหน้าชื่อผู้เอาประกัน | CIS |   |   |   |   |   | นาย |   |   |   |
| 5 |   | insured_name | varchar | 100 | Y | ชื่อผู้เอาประกัน | CIS |   |   |   |   |   | ไทยสมุทร |   |   |   |
| 6 |   | insured_surname | varchar | 100 | Y | นามสกุลผู้เอาประกัน | CIS |   |   |   |   |   | ประกันชีวิต |   |   |   |
| 7 |   | insured_card_type | varchar | 3 | Y | ประเภทบัตรผู้เอาประกัน | CIS |   |   | CID = บัตรประจำตัวประชาชน 13 หลัก FGN = ต่างด้าว PAS = หนังสือเดินทาง OTH = อืนๆ เช่น บัตรสุทธิพระ แบบเก่า |   |   | CID |   |   |   |
| 8 |   | insured_card_no | varchar | 100 | Y | เลขที่บัตรผู้เอาประกัน | CIS |   |   |   |   |   | 3400400564794 |   |   |   |
| 9 |   | insured_card_expire_date | date |   | Y | วันที่หมดอายุบัตรผู้เอาประกัน | CIS |   |   |   |   |   | 2026-09-16 |   |   |   |
| 10 |   | insured_phone_number | numericvarchar | 10,010 | Y | เบอร์โทรศัพท์ลูกค้าที่ประสงค์ รับผลการพิจารณา | CIS |   |   |   |   |   | 0803861602 |   |   |   |
| 11 |   | insured_home_tel | numericvarchar | 10,010 | Y | เบอร์โทรศัพท์บ้าน | CIS |   |   |   |   |   | 023861602 |   |   |   |
| 12 |   | insured_house_no | varchar | 50 | Y | บ้านเลขที่ | CIS |   |   |   |   |   | 79/302 |   |   |   |
| 13 |   | insured_village | varchar | 20 | Y | หมู่ | CIS |   |   |   |   |   | 5 |   |   |   |
| 14 |   | insured_road | varchar | 100 | Y | ถนน | CIS |   |   |   |   |   | สาธุประดิษฐ์ |   |   |   |
| 15 |   | insured_subdistrict_code | varchar | 3 | Y | รหัสตำบล/ แขวง | CIS |   |   |   |   |   | 21 |   |   |   |
| 16 |   | insured_subdistrict | varchar | 100 | Y | ตำบล/ แขวง | CIS |   |   |   |   |   | ช่องนนทรี |   |   |   |
| 17 |   | insured_district_code | varchar | 3 | Y | รหัสอำเภอ/ เขต | CIS |   |   |   |   |   | 18 |   |   |   |
| 18 |   | insured_district | varchar | 100 | Y | อำเภอ/ เขต | CIS |   |   |   |   |   | ยานนาวา |   |   |   |
| 19 |   | insured_province_code | varchar | 3 | Y | รหัสจังหวัด | CIS |   |   |   |   |   | 1 |   |   |   |
| 20 |   | insured_province | varchar | 100 | Y | จังหวัด | CIS |   |   |   |   |   | กรุงเทพมหานคร |   |   |   |
| 21 |   | insured_post_code | varchar | 5 | Y | รหัสไปรษณีย์ | CIS |   |   |   |   |   | 10120 |   |   |   |
| 22 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 23 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 24 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 25 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 26 |   | insured_card_flag | boolean |   |   | ตลอดชีพ - TRUE ตลอดชีพ - FALSE ไม่ตลอดชีพ | ระบุจากหน้าจอ |   |   |   |   |   | FALSE |   |   |   |
| 27 |   | insured_building | varchar | 100 | Y | หมู่บ้าน/อาคาร | CIS |   |   |   |   |   | อาคารประดิษฐ์ |   | Kanawoot.ou10/06/2569 | เพิ่มในหน้าจอบันทึกคำร้องเวนคืนกรมบังคับคดี |
| 28 |   | insured_alley | varchar | 100 | Y | ซอย | CIS |   |   |   |   |   | ซอย 9 |   | Kanawoot.ou10/06/2569 | พิ่มในหน้าจอบันทึกคำร้องเวนคืนกรมบังคับคดี |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
