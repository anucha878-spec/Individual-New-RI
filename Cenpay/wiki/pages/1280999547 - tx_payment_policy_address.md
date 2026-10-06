# tx_payment_policy_address

- **Page ID:** 1280999547
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy_address
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_policy_address
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_policy_address | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-03 | Description | เก็บข้อมูลรายละเอียดที่อยู่ตามกรมธรรม์ของการจ่ายเงินทุกประเภทการจ่ายที่กำหนดไว้ ที่มีเข้ามาในระบบ Centralized Payment เพื่อใข้ในการตรวจสอบข้อมูลการจัดส่งเอกสาร (ถ้ามี) |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_policy_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment_policy |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | address_type | Varchar | 3 | N | ประเภทที่อยู่ |   |   |   |   |   |   | CON |   | ariya.pi | จาก CISCON : ที่อยู่ติดต่อREG : ที่อยู่ตามทะเบียนบ้านWRK ที่อยู่ที่ทำงาน |
| 4 |   | address | Varchar | 255 | Y | ที่อยู่ |   |   |   |   |   |   | 123 อาคารพานิช หมู่ที่ 1 ซอยติวานนท์ ถนนติวานนท์ แขวงติวานนท์ เขตติวานนท์ กรุงเทพ 10332 | house_no+" "+building+" "+village+" "+[ซอยถ้ามี ให้ใช้ "ซอย"+alley+" "]+[ถนนถ้ามี ให้ใช้ "ถนน"+road+" "]+[แขวง/ตำบล ถ้ามี ให้ใช้ {"แขวง" กรณีกรุงเทพ นอกนั้น "ตำบล"}+sub_district+" "]+[เขต/อำเภอ ถ้ามี ให้ใช้ {"เขต" กรณีกรุงเทพ นอกนั้น "อำเภอ"}+district+" "]+[จังหวัด ถ้ามี ให้ใช้ province กรณีกรุงเทพ นอกนั้น "จังหวัด"+province+" "]+[รหัสไปรณีย์ ถ้ามีให้ใช้ post_code] | ariya.pi |   |
| 5 |   | house_no | Varchar | 50 | Y | บ้านเลขที่ |   |   |   |   |   |   | 123 |   | ariya.pi | ข้อมูลจาก CIS |
| 6 |   | building | Varchar | 100 | Y | อาคาร |   |   |   |   |   |   | อาคารพานิชย์ |   | ariya.pi | ข้อมูลจาก CIS |
| 7 |   | village | Varchar | 100 | Y | หมู่ที่ |   |   |   |   |   |   | 1 |   | ariya.pi | ข้อมูลจาก CIS |
| 8 |   | alley | Varchar | 100 | Y | ซอย |   |   |   |   |   |   | พระยาตาก |   | ariya.pi | ข้อมูลจาก CIS |
| 9 |   | road | Varchar | 100 | Y | ถนน |   |   |   |   |   |   | ติวานนท์ |   | ariya.pi | ข้อมูลจาก CIS |
| 10 |   | sub_district | Varchar | 100 | Y | แขวง/ตำบล |   |   |   |   |   |   | ติวานนท์ |   | ariya.pi | ข้อมูลจาก CIS |
| 11 |   | district | Varchar | 100 | Y | เขต/อำเภอ |   |   |   |   |   |   | ติวานนท์ |   | ariya.pi | ข้อมูลจาก CIS |
| 12 |   | province | Varchar | 100 | Y | จังหวัด |   |   |   |   |   |   | กรุงเทพ |   | ariya.pi | ข้อมูลจาก CIS |
| 13 |   | post_code | Varchar | 5 | Y | รหัสไปรษณีย์ |   |   |   |   |   |   | 10234 |   | ariya.pi | ข้อมูลจาก CIS |
| 14 |   | sub_district_code | Varchar | 3 | Y | รหัสแขวง/ตำบล |   |   |   |   |   |   |   |   | ariya.pi | ข้อมูลจาก CIS |
| 15 |   | district_code | Varchar | 3 | Y | รหัสเขต/อำเภอ |   |   |   |   |   |   |   |   | ariya.pi | ข้อมูลจาก CIS |
| 16 |   | province_code | Varchar | 3 | Y | รหัสจังหวัด |   |   |   |   |   |   |   |   | ariya.pi | ข้อมูลจาก CIS |
| 17 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 18 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 19 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 20 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
