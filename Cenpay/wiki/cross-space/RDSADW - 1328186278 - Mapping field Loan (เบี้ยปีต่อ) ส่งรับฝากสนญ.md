# Mapping field Loan (เบี้ยปีต่อ) ส่งรับฝากสนญ

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1328186278
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1328186278

---

| Mapping |
|---|
| **Input** | **Source** |
| Name | Type | Description | Validation |   |
| **[tx_deposit_header](/display/RDSADW/tx_deposit_header)** |
| depositDate | DateTime | วันที่รับฝาก(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | Mandatory | CURRENT_TIMESTAMP (System DateTime) |
| depositName | String | ชื่อผู้ฝาก | Mandatory | Fix : "LOAN" |
| depositLname | String | นามสกุลผู้ฝาก | Option | - |
| isAgent | String | Agent / Non Agent | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).BRANCH_CODEถ้า BRANCH_CODE ขึ้นต้นด้วย 207 หรือ 507 ส่งค่าเป็น = AGT (Agent)นอกนั้นเป็น = ALT (Non Agent) |
| branch | String | สาขาต้นสังกัด | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).BRANCH_CODEถ้า BRANCH_CODE ขึ้นต้นด้วย 207 หรือ 507 ให้ตัด 4 ตัวท้ายเพื่อส่งค่าไม่ขึ้นต้นด้วย 207 หรือ 507 ส่งค่า 0001 |
| channelCode | String | รหัสช่องทางการขายถ้า ระบุเป็น Agent จะส่ง รหัสสาขา (7 หลัก)ถ้า ระบุเป็น Non Agent จะส่งรหัสหน่วยงาน (7 หลัก) | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).BRANCH_CODE |
| branchService | String | สาขาที่ให้บริการ | Mandatory | Fix : 0001 |
| depositFrom | String | รับฝากจากC = CustomerA = Agent | Mandatory | Fix : "C" |
| fileBaac | String | ประเภทไฟล์ (เฉพาะธกส.) | Option | - |
| remark | String | หมายเหตุ | Option | - |
| createBy | String | ผู้ทำการบันทึกข้อมูล | Mandatory | Fix : "LOAN" |
| systemName | String | ตั้งรับฝากจากระบบอะไรใช้ชื่อระบบเดียวกับใน repo | Mandatory | Fix : "LOAN" |
| autopostFlag | String | flag สำหรับ ส่งข้อมูลไปยังระบบ Auto Postหลังจากที่ได้เลขที่รับฝากแล้ว จะดำเนินการส่งข้อมูลไปยังระบบ Auto Post หรือไม่Y ส่ง N ไม่ส่ง | Mandatory | fix : "N" |
| List 1 (1 ช่องทางต่อ 1 รายการรับฝาก [tx_deposit_money](/display/RDSADW/tx_deposit_money)) |
| moneyTypeCode | String | ช่องทางการรับชำระ ref : [Money Type Code](/display/RDSADW/Money+Type+Code) | Mandatory | [TX_HYDRA_IMPORT_HEADER](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_HEADER).main_channel_codeถ้า MAIN_CHANNEL_CODE = " LOAN" fix : "36" |
| paymentDate | DateTime | วันที่โอนเงิน (วันที่รับชำระ)(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).payment_date |
| amount | Decimal | ยอดเงินรับฝาก | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).payment_amount |
| paymentTypeCode | String | รหัสประเภทการชำระ | Option | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).payment_type_code |
| paymentTypeName | String | ชื่อประเภทการชำระ | Option | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).payment_type_name |
| remark | String | หมายเหตุ | Condition | กู้ผ่านช่องทางสาขา ให้ส่งค่า "BRANCH"กู้ผ่านช่องทาง i-Service ให้ส่งค่า "ISERVICE" |
| **List 2****กรณี ระบุเหตุผลรับฝาก 05 อื่นๆจะต้องระบุข้อมูลดังนี้ [tx_deposit_detail](/display/RDSADW/tx_deposit_detail))** |
|   | **กรณีเลือกเหตุผลอื่นๆ ดังต่อไปนี้****02 : รับฝากดอกเบี้ยกู้เงิน ตามกรมธรรม์****06 : รับฝากคืนเงินกู้ ตามกรมธรรม์** |
| appNo | String | เลขที่ใบคำขอ/เลขกรมธรรม์ | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).POLICY_NO |
| groupLifeReceipt | String | เลขที่ใบเสร็จ (ประกันกลุ่ม)(ขอเคลียร์ Req ประกันกลุ่มแล้วจะ Updateเพิ่ม) | Option | - |
| groupLifeInvoice | String | เลขที่ใบแจ้งหนี้ (ประกันกลุ่ม)(ขอเคลียร์ Req ประกันกลุ่มแล้วจะ Updateเพิ่ม) | Option | - |
| baacSeq | String | ลำดับ ของเลขที่ใบคำขอ ที่นำเข้า (เฉพาะ ธกส.) | Option | - |
| policyType | String | ประเภทกรมธรรม์ | Mandatory | [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).policy_type |
| reason | String | เหตุผลรับฝาก ref : [Money_type](/display/deposit/Money_type) | Mandatory | fix : 05 |
| otherCode | String | เหตุผล อื่นๆ ของเหตผลรับฝาก ref : [deposit_oth_reason](/display/deposit/deposit_oth_reason) | Mandatory | fix : 01 |
| businessLine | String | Business Line (ระบบรับฝาก สนญลง "00", สาขาลง "01") | Mandatory | fix : 00 |
| dueDate | Date | วันกำหนดชำระ (ปี ค.ศ.-เดือน-วัน) | Option | - |
| depositType | String | ประเภทข้อมูลA = ใบคำขอP = กรมธรรม์ | Mandatory | fix : "P" |
| amount | decimal | ยอดเงินรับฝาก | Mandatory | [TX_HYDRA_IMPORT_DETAIL](/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).PAYMENT_AMOUNT |
| customerTitleName | String | คำนำหน้าลูกค้าปรับเป็น Option เฉพาะ Service แต่หน้าจอจะมีการดัก Require Field เหมือนเดิม | Option | [TX_HYDRA_IMPORT_DETAIL](/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).TITLE_NAME |
| customerFirstName | String | ชื่อลูกค้าปรับเป็น Option เฉพาะ Service แต่หน้าจอจะมีการดัก Require Field เหมือนเดิม | Option | [TX_HYDRA_IMPORT_DETAIL](/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).FNAME |
| customerLastName | String | นามสกุลลูกค้าปรับเป็น Option เฉพาะ Service แต่หน้าจอจะมีการดัก Require Field เหมือนเดิม | Option | [TX_HYDRA_IMPORT_DETAIL](/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL).LNAME |
| agentCode | String | รหัสตัวแทน | Option | - |
| otherCase | boolean | เคสผิดปกติจากเงื่อนไขต่างๆรหัสคำอธิบาย01ใบเสร็จส่วนกลาง Matching ไม่ได้เนื่องจากไม่พบกธ.02ธกส.ใบคำขอผิดปกติ | Option | - |
| รหัส | คำอธิบาย |
| 01 | ใบเสร็จส่วนกลาง Matching ไม่ได้เนื่องจากไม่พบกธ. |
| 02 | ธกส.ใบคำขอผิดปกติ |
| remark | String | หมายเหตุ | Option | - |
| ref_other | String |   |   | - |

---

## Hyperlinks บนหน้านี้

- [tx_deposit_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_header)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [tx_deposit_money](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_money)
- [Money Type Code](http://wiki.thaisamut.co.th/display/RDSADW/Money+Type+Code)
- [TX_HYDRA_IMPORT_HEADER](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_HEADER)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [tx_deposit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_detail)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [Money_type](http://wiki.thaisamut.co.th/display/deposit/Money_type)
- [deposit_oth_reason](http://wiki.thaisamut.co.th/display/deposit/deposit_oth_reason)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
- [TX_HYDRA_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_IMPORT_DETAIL)
