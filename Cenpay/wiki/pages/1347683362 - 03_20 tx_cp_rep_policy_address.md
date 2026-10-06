# 03_20 tx_cp_rep_policy_address

- **Page ID:** 1347683362
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_20+tx_cp_rep_policy_address
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_20 tx_cp_rep_policy_address
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_cp_rep_policy_address | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2026-06-10 | Description | ข้อมูลรายละเอียดที่อยู่ตามกรมธรรม์ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   |   |   |
| 2 | FK | tx_cp_rep_id | numeric | 10,0 | N | PK table tx_cp_rep |   |   |   |   |   |   | 1 |   |   |   |
| 3 |   | address_type | Varchar | 3 | N | ประเภทที่อยู่ |   |   |   |   |   |   | CON |   |   | จาก CIS CON : ที่อยู่ติดต่อ REG : ที่อยู่ตามทะเบียนบ้าน WRK ที่อยู่ที่ทำงาน |
| 4 |   | address | Varchar | 255 | Y | ที่อยู่ |   |   |   |   |   |   | 79/302 อาคารพานิชย์ หมู่ 2 ซอยบางพรม 16 ถนนบางพรม แขวงบางพรม เขตตลิ่งชัน จังหวัดกรุงเทพมหานคร 10170 | house_no + ' ' + building + ' ' + [หมู่ (ถ้ามี) ให้ใช้ 'หมู่ ' + village+ ' ' ] + [ซอย (ถ้ามี) ให้ใช้ 'ซอย' + alley + ' ' ] + [ถนน (ถ้ามี) ให้ใช้ 'ถนน' + road + ' ' ] + [แขวง/ตำบล ให้ใช้ {'แขวง' กรณีกรุงเทพ นอกนั้น 'ตำบล'} + sub_district + ' ' ] + [เขต/อำเภอ ให้ใช้ {'เขต' กรณีกรุงเทพ นอกนั้น 'อำเภอ'} + district + ' ' ] + [จังหวัด ให้ใช้ 'จังหวัด' + province + ' '] + post_code |   |   |
| 5 |   | house_no | Varchar | 50 | Y | บ้านเลขที่ |   |   |   |   |   |   | 79/302 |   |   | ข้อมูลจาก CIS |
| 6 |   | building | Varchar | 100 | Y | อาคาร |   |   |   |   |   |   | อาคารพานิชย์ |   |   | ข้อมูลจาก CIS |
| 7 |   | village | Varchar | 100 | Y | หมู่ที่ |   |   |   |   |   |   | 5 |   |   | ข้อมูลจาก CIS |
| 8 |   | alley | Varchar | 100 | Y | ซอย |   |   |   |   |   |   | สาธุประดิษฐ์ 15 |   |   | ข้อมูลจาก CIS |
| 9 |   | road | Varchar | 100 | Y | ถนน |   |   |   |   |   |   | สาธุประดิษฐ์ |   |   | ข้อมูลจาก CIS |
| 14 |   | sub_district_code | Varchar | 3 | Y | รหัสแขวง/ตำบล |   |   |   |   |   |   | 21 |   |   | ข้อมูลจาก CIS |
| 10 |   | sub_district | Varchar | 100 | Y | แขวง/ตำบล |   |   |   |   |   |   | ช่องนนทรี |   |   | ข้อมูลจาก CIS |
| 15 |   | district_code | Varchar | 3 | Y | รหัสเขต/อำเภอ |   |   |   |   |   |   | 18 |   |   | ข้อมูลจาก CIS |
| 11 |   | district | Varchar | 100 | Y | เขต/อำเภอ |   |   |   |   |   |   | ยานนาวา |   |   | ข้อมูลจาก CIS |
| 16 |   | province_code | Varchar | 3 | Y | รหัสจังหวัด |   |   |   |   |   |   | 1 |   |   | ข้อมูลจาก CIS |
| 12 |   | province | Varchar | 100 | Y | จังหวัด |   |   |   |   |   |   | กรุงเทพมหานคร |   |   | ข้อมูลจาก CIS |
| 13 |   | post_code | Varchar | 5 | Y | รหัสไปรษณีย์ |   |   |   |   |   |   | 10120 |   |   | ข้อมูลจาก CIS |
| 14 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 15 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 16 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) |   |   |   |   |   |   | Ocean.co |   |   |   |
| 17 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
