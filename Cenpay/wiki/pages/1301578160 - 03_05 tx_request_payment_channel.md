# 03_05 tx_request_payment_channel

- **Page ID:** 1301578160
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/03_05+tx_request_payment_channel
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 03. DB : benefitregister > 03_05 tx_request_payment_channel
- **Depth:** 4

---

| Database | benefitregister[http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister) | Link Previous Version |   |
|---|---|---|---|
| Table | tx_request_payment_channel | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | thidarat.lu | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-11-24 | Description | เก็บข้อมูลช่องทางรับเงินของรายการคำร้อง |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource Table.Field** | **Function Transform** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   |   |   |   |   |
| 2 | FK | tx_request_idtx_request_beneficiary_id | numeric | 10,0 | N | PK table tx_requestPK table [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary) |   |   |   |   |   |   |   |   | thidarat.lu |   |
| 3 |   | payment_type_code | varchar | 2 | Y | ช่องทางรับเงิน | CIS |   | คำร้องเวนคืนกรมธรรม์ และ Free look cf_list_of_value group = 'CPH_PAYMENT_CHANNEL_CODE'คำร้องเวนคืนกรมธรรม์กรมบังคับคดี cf_list_of_value group = 'LED_PAYMENT_CHANNEL_CODE' | TP = โอนเงิน-พร้อมเพย์ TB = โอนเงิน-ปกติ TE = โอนเงิน-ด่วนLT = โอนเงินLC = เช็คบริษัท |   |   | TP |   |   |   |
| 4 |   | bank_id | numeric | 15,0 | Y | รหัสธนาคาร | CIS |   |   |   |   |   | 3 |   |   |   |
| 5 |   | bank_name | varchar | 100 | Y | ชื่อธนาคาร | CIS |   |   |   |   |   | ธนาคารกรุงเทพ จำกัด (มหาชน) |   |   |   |
| 6 |   | account_branch | varchar | 100 | Y | สาขาธนาคาร | CIS |   |   |   |   |   | บางปู |   |   |   |
| 7 |   | account_no | numericvarchar | 20,0100 | Y | เลขบัญชี | CIS |   |   |   |   |   | 20110696257 |   |   |   |
| 8 |   | account_name | varchar | 100255 | Y | ชื่อบัญชี | CIS |   |   |   |   |   | นางบีสามเจเค หกหนึ่งร้อยเก้า |   |   |   |
| 9 |   | id_card | numericvarchar | 100 | Y | เลขที่พร้อมเพย์ | CIS |   |   |   |   |   | 3400400564794 |   |   |   |
| 10 |   | created_by | varchar | 50 | N | ผู้สร้างข้อมูล (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 11 |   | created_date | timestamp |   | N | วันที่และเวลาสร้างข้อมูล | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |
| 12 |   | updated_by | varchar | 50 | Y | ผู้แก้ไขข้อมูลล่าสุด (เก็บ User ที่ใช้ Login เข้าระบบ เช่น Ocean.co) | ระบุจากหน้าจอ |   |   |   |   |   | Ocean.co |   |   |   |
| 13 |   | updated_date | timestamp |   | Y | วันที่และเวลาแก้ไขข้อมูลล่าสุด | ระบุจากหน้าจอ |   |   |   |   |   | 2024-06-21 09:32:06.512 +0700 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary)
