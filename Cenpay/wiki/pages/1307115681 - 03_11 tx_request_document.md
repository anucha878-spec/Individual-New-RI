# 03_11 tx_request_document

- **Page ID:** 1307115681
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_11+tx_request_document
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_11 tx_request_document
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_document | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-12-18 | Description | เก็บข้อมูลเอกสารแนบ |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_id | numeric | 10,0 | N | PK table tx_request |   |   |   |   |   |   |   |   |   |   |
| 3 |   | doc_code | varchar | 30 | N | รหัสอ้างอิงตารางเอกสาร |   |   |   |   |   |   | PAYMENT_REQUEST_SURRENDER |   |   |   |
| 4 |   | doc_name | varchar | 255 | Y | ชื่อไฟล์เอกสาร |   |   |   |   |   |   | เอกสารผู้เอาประกัน.pdf |   |   |   |
| 5 |   | dms_doc_id | varchar | 20 | Y | รหัสอ้างอิงระบบ DMS |   |   |   |   |   |   | 1 |   |   |   |
| 6 |   | dms_response_type | varchar | 20 | Y | สถานะอัปโหลดเอกสารเข้า DMS |   |   |   | successfail |   |   | fail |   |   |   |
| 7 |   | dms_response_message | varchar | 100 | Y | error message กรณีอัปโหลดไฟล์ไม่สำเร็จ |   |   |   |   |   |   | อัปโหลดไฟล์ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง |   |   |   |
| 8 |   | dms_document_upload_date | timestamp |   | N | วันและเวลาที่อัปโหลดเอกสาร |   |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 9 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 10 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 11 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 12 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 13 |   | content_id | varchar | 100 | Y | ข้อมูล content_id ที่ได้จาก Seaweed |   |   |   |   |   |   | 1 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
