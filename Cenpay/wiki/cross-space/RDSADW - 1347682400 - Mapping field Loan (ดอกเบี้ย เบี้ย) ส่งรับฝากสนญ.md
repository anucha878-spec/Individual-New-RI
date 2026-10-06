# Mapping field Loan (ดอกเบี้ย เบี้ย) ส่งรับฝากสนญ

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 1347682400
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1347682400

---

| **Input** | **Condition** | **Example** |
|---|---|---|
| Name | Description | Required/Optional |
| **[tx_deposit_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_header)** |
| depositDate | วันที่รับฝาก (ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | Required | วันที่ยิง API | 2026-08-02 09:00:000 |
| depositName | ชื่อผู้ฝาก | Required | ชำระดอกเบี้ย เบี้ยผ่านการกู้เงิน ส่งค่า "LOAN" | LOAN |
| depositLname | นามสกุลผู้ฝาก | Optional | ชำระดอกเบี้ย เบี้ยผ่านการกู้เงิน ไม่ต้องส่งค่า | - |
| isAgent | Agent / Non Agent | Required | ถ้า channelCode ขึ้นต้นด้วย 207 หรือ 507 ส่งค่า "AGT" (Agent)นอกนั้นส่งค่า "ALT" (Non Agent) | AGT |
| branch | สาขาต้นสังกัด | Required |   | 1500 |
| channelCode | รหัสช่องทางการขายถ้า ระบุเป็น Agent จะส่ง รหัสสาขา (7 หลัก)ถ้า ระบุเป็น Non Agent จะส่งรหัสหน่วยงาน (7 หลัก) | Required |   | 2071500 |
| branchService | สาขาที่ให้บริการ (สาขารับคืองเินกู้) | Required |   | 1234 |
| depositFrom | รับฝากจากC = CustomerA = Agent | Required | ส่งค่า "C" | C |
| createBy | ผู้ทำการบันทึกข้อมูล | Required | ส่งค่า "LOAN" | LOAN |
| systemName | ตั้งรับฝากจากระบบอะไรใช้ชื่อระบบเดียวกับใน repo | Required | ส่งค่า "LOAN" | LOAN |
| autopostFlag | flag สำหรับ ส่งข้อมูลไปยังระบบ Auto Postหลังจากที่ได้เลขที่รับฝากแล้ว จะดำเนินการส่งข้อมูลไปยังระบบ Auto Post หรือไม่Y ส่ง N ไม่ส่ง | Required | ส่งค่า "N" | N |
| **List 1 (1 ช่องทางต่อ 1 รายการรับฝาก [tx_deposit_money](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_money))** |
| moneyTypeCode | ช่องทางการรับชำระ ref : [Money Type Code](http://wiki.thaisamut.co.th/display/RDSADW/Money+Type+Code) | Required | ชำระดอกเบี้ย เบี้ยผ่านการกู้เงิน ส่งค่า 36 | **36** |
| paymentDate | วันที่โอนเงิน (วันที่รับชำระ)(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | Required | วันที่ระบบตัดเงินกู้มาชำระดอกเบี้ย เบี้ย | 2026-08-01 09:00:000 |
| amount | ยอดเงินรับฝาก | Required | ยอดเงินที่ชำระชำระดอกเบี้ย เบี้ย (สุทธิ) | 5000 |
| paymentTypeCode | รหัสประเภทการชำระ ref : [HYDRA - PAYMENT_TYPE](/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE) | Condition | กรณีชำระดอกเบี้ย เบี้ย ผ่านการกู้เงินให้ส่งค่าถ้า policyType = "IND" => **Fix : "17"**ถ้า policyType = "ORD" => **Fix : "18"** | 18 |
| remark | หมายเหตุ | Condition | กรณีชำระดอกเบี้ย เบี้ย ผ่านการกู้เงินช่องทางสาขา ให้ส่งค่า BRANCHช่องทาง i-Service ให้ส่งค่า ISERVICE | BRANCH |
| **List 2****กรณี ระบุเหตุผลรับฝาก 05 อื่นๆจะต้องระบุข้อมูลดังนี้ [tx_deposit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_detail))** |
| appNo | เลขที่ใบคำขอ/เลขกรมธรรม์ | Required | ส่งเลขกรมธรรม์ | J7620555 |
| policyType | ประเภทกรมธรรม์ | Required | Industry (อุตสาหกรรม) ส่งค่า 01Ordinary (สามัญ) ส่งค่า 02 | 02 |
| reason | เหตุผลรับฝาก ref : [deposit_oth_reason](/display/deposit/deposit_oth_reason) | Required | ชำระดอกเบี้ย เบี้ยผ่านการกู้เงิน ส่งค่า 05 | 05 |
| otherCode | เหตุผล อื่นๆ ของเหตุผลรับฝาก ref : [deposit_oth_reason](/display/deposit/deposit_oth_reason) | Required | ชำระดอกเบี้ย เบี้ยผ่านการกู้เงิน ส่งค่า 01 | 01 |
| businessLine | Business Line (ระบบรับฝาก สนญลง "00", สาขาลง "01") | Required | ส่งค่า 00 | 00 |
| planCode | แบบประกัน | Condition | กรณีชำระดอกเบี้ย เบี้ย ผ่านการกู้เงินส่งค่า | 12345 |
| depositType | ประเภทข้อมูลA = ใบคำขอP = กรมธรรม์ | Required | ส่งค่า "P" | P |
| amount | ยอดเงินรับฝาก | Required | ยอดเงินที่ชำระชำระดอกเบี้ย เบี้ย (สุทธิ) | 5000 |
| customerTitleName | คำนำหน้าลูกค้า | Optional |   | คุณ |
| customerFirstName | ชื่อลูกค้า | Optional |   | ถูกหวย |
| customerLastName | นามสกุลลูกค้า | Optional |   | รางวัลที่ 1 |
| dueFromDate | วันที่ชำระจาก (ปี ค.ศ.-เดือน-วัน) |   |   |   |
| dueEndDate | วันที่ชำระถึง (ปี ค.ศ.-เดือน-วัน) |   |   |   |

ิback up

| **Input** | **Source** |
|---|---|
| Name | Description |
| **[tx_deposit_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_header)** |
| depositDate | วันที่รับฝาก(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | CURRENT_TIMESTAMP (System DateTime) |
| depositName | ชื่อผู้ฝาก | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).insured_firstname |
| depositLname | นามสกุลผู้ฝาก | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).insured_lastname |
| isAgent | Agent / Non Agent | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).branch_codeถ้า branch_code ขึ้นต้นด้วย 207 หรือ 507 ส่งค่าเป็น = "AGT" (Agent)นอกนั้นเป็น = "ALT" (Non Agent) |
| branch | สาขาต้นสังกัด | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).branch_code ถ้า BRANCH_CODE ขึ้นต้นด้วย 207 หรือ 507 ให้ตัด 4 ตัวท้ายเพื่อส่งค่าไม่ขึ้นต้นด้วย 207 หรือ 507 ส่งค่า 0001 |
| channelCode | รหัสช่องทางการขายถ้า ระบุเป็น Agent จะส่ง รหัสสาขา (7 หลัก)ถ้า ระบุเป็น Non Agent จะส่งรหัสหน่วยงาน (7 หลัก) | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).branch_code |
| branchService | สาขาที่ให้บริการ | Fix : 0001 |
| depositFrom | รับฝากจากC = CustomerA = Agent | Fix : "C" |
| fileBaac | ประเภทไฟล์ (เฉพาะธกส.) | - |
| remark | หมายเหตุ | - |
| createBy | ผู้ทำการบันทึกข้อมูล | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).created_by |
| systemName | ตั้งรับฝากจากระบบอะไรใช้ชื่อระบบเดียวกับใน repo | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).created_by |
| autopostFlag | flag สำหรับ ส่งข้อมูลไปยังระบบ Auto Postหลังจากที่ได้เลขที่รับฝากแล้ว จะดำเนินการส่งข้อมูลไปยังระบบ Auto Post หรือไม่Y ส่ง N ไม่ส่ง | fix : "N" |
| **List 1 (1 ช่องทางต่อ 1 รายการรับฝาก [tx_deposit_money](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_money))** |
| moneyTypeCode | ช่องทางการรับชำระ ref : [Money Type Code](http://wiki.thaisamut.co.th/display/RDSADW/Money+Type+Code) | WS :[นำข้อมูลเข้า Depositpay.mainChannelCode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1268121736)ถ้า mainChannelCode = " LOAN" => **Fix : "95"** |
| paymentDate | วันที่โอนเงิน (วันที่รับชำระ)(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).payment_date |
| amount | ยอดเงินรับฝาก | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).interest_amount |
| paymentTypeCode | รหัสประเภทการชำระ | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).policy_typeถ้า policy_type = "IND" => **Fix : "1"**ถ้า policy_type = "ORD" => **Fix : "2"** |
| paymentTypeName | ชื่อประเภทการชำระ | [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE).PAYMENT_TYPE_NAMEถ้า [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE).PAYMENT_TYPE_CODE = "1"ถ้า [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE).PAYMENT_TYPE_CODE = "2" |
| **List 2****กรณี ระบุเหตุผลรับฝาก 05 อื่นๆจะต้องระบุข้อมูลดังนี้ [tx_deposit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_detail))** |
| appNo | เลขที่ใบคำขอ/เลขกรมธรรม์ | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).policy_no |
| groupLifeReceipt | เลขที่ใบเสร็จ (ประกันกลุ่ม)(ขอเคลียร์ Req ประกันกลุ่มแล้วจะ Updateเพิ่ม) | - |
| groupLifeInvoice | เลขที่ใบแจ้งหนี้ (ประกันกลุ่ม)(ขอเคลียร์ Req ประกันกลุ่มแล้วจะ Updateเพิ่ม) | - |
| baacSeq | ลำดับ ของเลขที่ใบคำขอ ที่นำเข้า (เฉพาะ ธกส.) | - |
| policyType | ประเภทกรมธรรม์ | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).policy_type |
| reason | เหตุผลรับฝาก ref : [Money_type](http://wiki.thaisamut.co.th/display/deposit/Money_type) | **Fix :** 05 |
| otherCode | เหตุผล อื่นๆ ของเหตผลรับฝาก ref : [deposit_oth_reason](http://wiki.thaisamut.co.th/display/deposit/deposit_oth_reason) | WS :[นำข้อมูลเข้า Depositpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1268121736).channelCode = "LOAN" => **Fix :** 18 |
| businessLine | Business Line (ระบบรับฝาก สนญลง "00", สาขาลง "01") | **Fix :** **00** |
| dueDate | วันกำหนดชำระ (ปี ค.ศ.-เดือน-วัน) | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).due_date |
| depositType | ประเภทข้อมูลA = ใบคำขอP = กรมธรรม์ | **Fix :** **"P"** |
| amount | ยอดเงินรับฝาก | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).interest_amount |
| customerTitleName | คำนำหน้าลูกค้า | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).insured_titlename |
| customerFirstName | ชื่อลูกค้า | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).insured_firstname |
| customerLastName | นามสกุลลูกค้า | [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST).insured_lastname |
| agentCode | รหัสตัวแทน | - |
| otherCase | เคสผิดปกติจากเงื่อนไขต่างๆรหัสคำอธิบาย01ใบเสร็จส่วนกลาง Matching ไม่ได้เนื่องจากไม่พบกธ.02ธกส.ใบคำขอผิดปกติ | - |
| รหัส | คำอธิบาย |
| 01 | ใบเสร็จส่วนกลาง Matching ไม่ได้เนื่องจากไม่พบกธ. |
| 02 | ธกส.ใบคำขอผิดปกติ |
| remark | หมายเหตุ | - |
| ref_other |   | - |

---

## Hyperlinks บนหน้านี้

- [tx_deposit_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_header)
- [tx_deposit_money](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_money)
- [Money Type Code](http://wiki.thaisamut.co.th/display/RDSADW/Money+Type+Code)
- [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE)
- [tx_deposit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_detail)
- [deposit_oth_reason](http://wiki.thaisamut.co.th/display/deposit/deposit_oth_reason)
- [deposit_oth_reason](http://wiki.thaisamut.co.th/display/deposit/deposit_oth_reason)
- [tx_deposit_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_header)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [tx_deposit_money](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_money)
- [Money Type Code](http://wiki.thaisamut.co.th/display/RDSADW/Money+Type+Code)
- [นำข้อมูลเข้า Depositpay.mainChannelCode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1268121736)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE)
- [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE)
- [HYDRA - PAYMENT_TYPE](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+PAYMENT_TYPE)
- [tx_deposit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_detail)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [Money_type](http://wiki.thaisamut.co.th/display/deposit/Money_type)
- [deposit_oth_reason](http://wiki.thaisamut.co.th/display/deposit/deposit_oth_reason)
- [นำข้อมูลเข้า Depositpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1268121736)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
- [TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST](http://wiki.thaisamut.co.th/display/RDSTQP/TX_HYDRA_EXT_PREMIUM_INTEREST_REQUEST)
