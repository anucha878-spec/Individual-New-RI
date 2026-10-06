# 03_04 tx_request_beneficiary

- **Page ID:** 1301578155
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_04 tx_request_beneficiary
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_beneficiary | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-24 | Description | เก็บข้อมูลผู้รับผลประโยชน์ของรายการคำร้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | beneficiary_title | varchar | 25 | Y | คำนำหน้าชื่อผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   |   |   |   | นาย |   |   |   |
| 4 |   | beneficiary_name | varchar | 100 | Y | ชื่อผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   |   |   |   | ไทยสมุทร |   |   |   |
| 5 |   | beneficiary_surname | varchar | 100 | Y | นามสกุลผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   |   |   |   | ประกันชีวิต |   |   |   |
| 6 |   | beneficiary_card_type | varchar | 3 | Y | ประเภทบัตรผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   | CID = บัตรประจำตัวประชาชน 13 หลัก FGN = ต่างด้าว PAS = หนังสือเดินทาง OTH = อืนๆ เช่น บัตรสุทธิพระ แบบเก่า |   |   | CID |   |   |   |
| 7 |   | beneficiary_card_no | varchar | 100 | Y | เลขที่บัตรผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   |   |   |   | 3400400564794 |   |   |   |
| 8 |   | beneficiary_card_expire_date | date |   | Y | วันที่หมดอายุบัตรผู้รับผลประโชน์ | ระบุจากหน้าจอ |   |   |   |   |   | 2026-09-16 |   |   |   |
| 9 |   | beneficiary_phone_number | numericvarchar | 10,010 | Y | เบอร์โทรศัพท์ผู้รับผลประโชน์ที่ประสงค์ รับผลการพิจารณา | ระบุจากหน้าจอ |   |   |   |   |   | 0932474847 |   |   |   |
| 10 |   | relation | varchar | 255 | Y | ความสัมพันธ์ | ระบุจากหน้าจอ |   |   |   |   |   | ตนเอง |   |   |   |
| 11 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 12 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 13 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 14 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
