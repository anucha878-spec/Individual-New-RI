# tx_payment_policy

- **Page ID:** 1280737977
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 01. DB : benefitbank > tx_payment_policy
- **Depth:** 4

---

| Database | benefitbank | Link Previous Version |   |
|---|---|---|---|
| Table | tx_payment_policy | Data Source |   |
| Project Name | Centralized Payment | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | ariya.pi | Year Type | A.D. |
| Created Date (yyyy-mm-dd) | 2025-09-02 | Description | เก็บข้อมูลรายละเอียดกรมธรรม์ของการจ่ายเงินทุกประเภทการจ่ายที่กำหนดไว้ ที่มีเข้ามาในระบบ Centralized Payment |
| Updated By |   | Updated Date (yyyy-mm-dd) |   |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIMARY_KEY | id | Int8 |   | N | Auto Running No. |   |   |   |   |   |   | 1 |   | ariya.pi |   |
| 2 | FOREIGN_KEY | payment_id | Int8 |   | N | อ้างอิง Running ID จาก tx_payment |   |   |   |   |   |   |   |   | ariya.pi |   |
| 3 |   | policy_no | Varchar | 15 | N | เลขที่กรมธรรม์ |   |   |   |   |   |   | ข0181320 |   | ariya.pi |   |
| 4 |   | policy_type | Varchar | 3 | N | ประเภทกรมธรรม์ |   |   |   |   |   |   | ORD, IND, PA, UL |   | ariya.pi |   |
| 5 |   | insured_title | Varchar | 50 | N | คำนำหน้าชื่อผู้เอาประกันภัย |   |   |   |   |   |   | นาย |   | ariya.pi |   |
| 6 |   | insured_first_name | Varchar | 100 | N | ชื่อผู้เอาประกันภัย |   |   |   |   |   |   | รับเงิน |   | ariya.pi |   |
| 7 |   | insured_last_name | Varchar | 100 | N | นามสกุลผู้เอาประกันภัย |   |   |   |   |   |   | แทนคุณ |   | ariya.pi |   |
| 8 |   | insured_card_no | Varchar | 20 | N | เลขที่บัตร |   |   |   |   |   |   | 1100567893455 |   | ariya.pi |   |
| 9 |   | insured_card_type | Varchar | 5 | N | ประเภทบัตร |   |   |   |   |   |   | I หรือ P |   | ariya.pi | I : บัตรประชาชนP : หนังสือเดินทาง |
| 10 |   | insured_date_of_birth | Date |   | N | วันเกิดผู้เอาประกัน |   |   |   |   |   |   | 1988-06-30 |   | ariya.pi |   |
| 11 |   | insured_gender | Varchar | 5 | N | เพศผู้เอาประกัน |   |   |   |   |   |   | F |   | ariya.pi | F : Female หญิงM : Male ชาย |
| 12 |   | insured_entry_age | Numeric | 2 | N | อายุตอนสมัครประกัน |   |   |   |   |   |   | 50 |   | ariya.pi |   |
| 13 |   | branch_code | Varchar | 4 | N | สาขาต้นสังกัด |   |   |   |   |   |   | 0116 |   | ariya.pi |   |
| 14 |   | product_code | Varchar | 5 | N | รหัสแบบประกัน |   |   |   |   |   |   | 496 |   | ariya.pi |   |
| 15 |   | product_name | Varchar | 100 | N | ชื่อแบบประกัน |   |   |   |   |   |   | ไทยสมุทรสบายสบาย (30/15) |   | ariya.pi |   |
| 16 |   | policy_insure | Numeric | (15,2) | N | ทุนประกัน |   |   |   |   |   |   |   |   | ariya.pi |   |
| 17 |   | apu_rpu_amount | Numeric | (15,2) | Y | ทุนปิดบัญชีอัตโนมัติ |   |   |   |   |   |   |   |   | ariya.pi |   |
| 18 |   | premium_amount | Numeric | (15,2) | N | ยอดชำระเบี้ยงวดล่าสุด |   |   |   |   |   |   | 50,000.00 |   | ariya.pi |   |
| 19 |   | monthly_mode | Numeric | 2 | N | โหมดการชำระเงิน |   |   |   |   |   |   | 1 |   | ariya.pi | 1 : รายเดือน3 : ราย 3 เดือน6 : ราย 6 เดิอน12 : รายปี |
| 20 |   | premium_preriod_year | Numeric | 2 | N | ปี่ที่ชำระ |   |   |   |   |   |   | 68 |   | ariya.pi | เลขปีพศ 2 หลักสุดท้าย |
| 21 |   | premium_preriod_term | Numeric | 2 | N | งวดที่ชำระ |   |   |   |   |   |   | 01 |   | ariya.pi | เลขงวดชำระ |
| 22 |   | premium_paid_from | Date |   | N | วันที่ชำระตั้งแต่ |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 23 |   | premium_paid_to | Date |   | N | วันที่ชำระถึง |   |   |   |   |   |   | 2026-06-29 |   | ariya.pi |   |
| 24 |   | policy_status | Varchar | 50 | N | สถานะกรมธรรม์ |   |   |   |   |   |   | มีผลบังคับ |   | ariya.pi |   |
| 25 |   | policy_status_code | Varchar | 10 | N | รหัสสถานะกรมธรรม์ |   |   |   |   |   |   | I |   | ariya.pi |   |
| 26 |   | commencement_date | Date |   | N | วันที่เริ่มต้นกรมธรรม์ |   |   |   |   |   |   | 2021-06-30 |   | ariya.pi |   |
| 27 |   | maturity_date | Date |   | N | วันที่สิ้นสุดกรมธรรม์ |   |   |   |   |   |   | 2038-06-30 |   | ariya.pi |   |
| 28 |   | fully_paid_date | Date |   | N | วันที่ชำระครบ |   |   |   |   |   |   | 2035-06-30 |   | ariya.pi |   |
| 29 |   | apu_rpu_date | Date |   | Y | วันที่ปิดบัญชี |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 30 |   | surrender_date | Date |   | Y | วันที่เวนคืนกรมธรรม์ |   |   |   |   |   |   | 2025-06-30 |   | ariya.pi |   |
| 31 |   | created_date | Timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 32 |   | created_by | Varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 33 |   | updated_date | Timestamp |   | Y | วันที่แก้ไขรายการ |   |   |   |   |   |   | 2025-06-30 14:30:45 |   | ariya.pi |   |
| 34 |   | updated_by | Varchar | 50 | Y | ผู้แก้ไขรายการ |   |   |   |   |   |   | ariya.pi |   | ariya.pi |   |
| 35 |   | coverage_term | Numeric | 3 | N | ระยะเวลาเอาประกัน |   |   |   |   |   |   | 10 |   | ariya.pi |   |
| 36 |   | payment_term | Numeric | 2 | N | ระยะเวลาชำระเบี้ย |   |   |   |   |   |   | 10 |   | ariya.pi |   |
| 37 |   | mobile_no | Varchar | 255 | Y | เบอร์ติดต่อระดับกรมธรรม์ |   |   |   |   |   |   | 0893438989 |   | ariya.pi |   |
| 38 |   | assignee_flag | Varchar | 1 | Y | Y = มีการโอนสิทธิ N = ไม่มีการโอนสิทธิ |   |   |   |   |   |   |   |   | Duangporn.sa | New Loan Ph1 |
| 39 |   | assignee_title | Varchar | 50 | Y | คำนำหน้าผู้รับโอนสิทธิ |   |   |   |   |   |   |   |   | Duangporn.sa | New Loan Ph1 |
| 40 |   | assignee_first_name | Varchar | 100 | Y | ชื่อผู้รับโอนสิทธิ |   |   |   |   |   |   |   |   | Duangporn.sa | New Loan Ph1 |
| 41 |   | assignee_last_name | Varchar | 100 | Y | นามสกุลผู้รับโอนสิทธิ |   |   |   |   |   |   |   |   | Duangporn.sa | New Loan Ph1 |
| 42 |   | cv_amount | numeric | 15,2 | Y | มูลค่าเวนคืนกรมธรรม์ |   |   |   |   |   |   |   |   | Duangporn.sa | New Loan Ph1 |
