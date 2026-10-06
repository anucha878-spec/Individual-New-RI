# tx_deposit_transaction

- **Page ID:** 1339195774
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 22. TX - Table Transection > tx_deposit_transaction
- **Depth:** 5

---

Data Dictionary Template

| Database |   | Link Previous Version | - |
|---|---|---|---|
| Table | tx_deposit_transaction | Data Source | ระบบ Deposit |
| Project Name | Payment Management | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | patcha.vo | Year Type | A.D., B.E.A.D. = คริสต์ศักราชB.E. = พุทธศักราช |
| Created Date (yyyy-mm-dd ) | 2026-05-07 | Description | ตารางข้อมูลรายการ deposit |
| Updated By | - |
| Updated Date (yyyy-mm-dd ) | - |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PK | id | bigint |   | N | เลขที่ running |   |   |   |   |   |   | 1, 2, 3,..... |   |   | seq_tx_tax_transaction |
|   | FK | payment_detail_id | bigint |   | N | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |   |   |   |   |   |   |   |   |   |   |
| 2 |   | deposit_no | Varchar | 1520 | N | เลขที่รับฝาก |   |   |   |   |   |   | 603211001110 |   | patcha.vo | 26/06/69 |
| 3 |   | deposit_channel | Varchar | 10 | N | Agent/Non AgentAGTALT |   |   |   |   |   |   | AGT |   |   |   |
| 4 |   | deposit_branch | Varchar | 4 | N | สาขารับฝาก |   |   |   |   |   |   | 0116 |   |   |   |
| 5 |   | deposit_channel_code | Varchar | 7 | N | รหัสช่องทางการขาย ถ้า ระบุเป็น Agent จะส่ง รหัสสาขา (7 หลัก) ถ้า ระบุเป็น Non Agent จะส่งรหัสหน่วยงาน (7 หลัก) |   |   |   |   |   |   | 2070116 |   |   |   |
| 6 |   | deposit_return_branch | Varchar | 4 | N | สาขาทำคืน |   |   |   |   |   |   | 0001 |   |   |   |
| 7 |   | deposit_file_baac | Varchar | 10 | Y | ประเภทไฟล์ (เฉพาะธกส.)OL01OL02OL03OL51 |   |   |   |   |   |   | OL01 |   |   |   |
| 8 |   | deposit_baac_fee | Numeric | 15,2 | Y | ค่าบำเหน็จ (เฉพาะธกส.) |   |   |   |   |   |   | 2,000.00 |   |   |   |
| 9 |   | deposit_baac_seq | String | 4 | Y | ลำดับของใบคำขอ |   |   |   |   |   |   | 51 |   |   |   |
| 10 |   | deposit_return_amount | Numeric | 15,2 | N | จำนวนเงินที่คืนของรับฝากนี้ (ใช้ยอดเงินนี้ไปตั้งรับฝาก) |   |   |   |   |   |   | 10,000.00 |   |   |   |
| 11 |   | autopost_flag | Varchar | 1 | Y | flag ที่ระบบรับฝากใช้ สำหรับ ส่งข้อมูลไปยังระบบ Auto Post |   |   |   |   |   |   | Y |   | patcha.vo | 26/06/69 |
| 12 |   | new_deposit_no | Varchar | 20 | Y | เลขที่รับฝากใหม่ |   |   |   |   |   |   | 640001000001 |   | patcha.vo | 26/06/69 |
|   |   | created_date | timestamp |   | N | วันที่สร้างรายการ |   |   |   |   |   |   | 2023-07-17 14:50:19.872 +0700 |   |   |   |
|   |   | created_by | varchar | 50 | N | ผู้สร้างรายการ |   |   |   |   |   |   | patcha.vo |   |   |   |
|   |   | updated_date | timestamp |   | N | วันที่แก้ไขรายการล่าสุด |   |   |   |   |   |   | 2023-07-19 14:50:19.872 +0700 |   |   |   |
|   |   | updated_by | varchar | 50 | N | ผู้แก้ไขรายการล่าสุด |   |   |   |   |   |   | patcha.vo |   |   |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
