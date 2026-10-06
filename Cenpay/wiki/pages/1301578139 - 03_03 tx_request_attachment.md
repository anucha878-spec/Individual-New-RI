# 03_03 tx_request_attachment

- **Page ID:** 1301578139
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_03+tx_request_attachment
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_03 tx_request_attachment
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_attachment | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-24 | Description | เก็บข้อมูลเอกสารประกอบรายการคำร้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | document_code | varchar | 255 | Y | รหัสเอกสาร | ระบุจากหน้าจอ |   | cf_list_of_value - กรณีคำร้องประเภท 'ขอเวนคืนกรมธรรม์ประกันภัย' group = 'DOCUMENT_LIST_FREELOOK' - กรณีคำร้องประเภท 'ขอ Free Look' group = 'DOCUMENT_LIST_SURRENDER' | FREE_POLICY_DOCUMENT = กรมธรรม์ประกันภัย FREE_LOST_POLICY_REPORT = เอกสารแจ้งความกรณีกรมธรรม์สูญหาย FREE_IDENTITY_COPY = สำเนาบัตรประจำตัวประชาชน/หนังสือเดินทาง/สูติบัตร/บัตรข้าราชการ/ใบขับขี่ FREE_FEE_WAIVER_REQUEST = เอกสารขออนุมัติยกเว้นค่าธรรมเนียม |   |   | D001 |   |   |   |
| 4 |   | flag_other | boolean |   | Y | กรณีเป็นเอกสารอื่นๆ - TRUE เป็นเอกสารอื่นๆ - FALSE ไม่ใช่เอกสารอื่นๆ |   |   |   |   |   |   | FALSE |   |   |   |
| 5 |   | document_name | varchar | 255 | Y | ชื่อเอกสาร (กรณีเป็นเอกสารอื่นๆ) |   |   |   |   |   |   |   |   |   |   |
| 6 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 7 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 8 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 9 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
