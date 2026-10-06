# Mapping Field ส่งรับฝาก สนญ. PayM - ตั้งรับฝากใหม่เนื่องจากจ่ายไม่สำเร็จ

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 864321582
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=864321582

---

## Objectives

- เพื่อกำหนด Mapping field ลงระบบตั้งรับฝาก สนญ. PayM - ตั้งรับฝากใหม่เนื่องจากจ่ายไม่สำเร็จ / เช็คคืน / เช็่คคืนพร้อมใบคำขอ

## Overview

กำหนดข้อมูล Mapping field ส่วน Header, Money และ Detail เพื่อใช้เป็น Input value ที่ [90.2.1 Service ตั้งรับฝาก](/pages/viewpage.action?pageId=870154574)
**บันทึกข้อมูลรับฝาก (Mapping Field)**

| **บันทึกข้อมูลรับฝาก** | **** | **** | **** | **** | **** | **PayM****รอทีม PAY M มาแก้ไข เติมฟิลด์ให้ครบ** |
|---|---|---|---|---|---|---|
| **Name** | **Type** | **Description** | **Example** | **Validation** | **Table** |
| depositDate | dateTime | วันที่รับฝาก (ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | 2021-08-02 9:00:00 | Mandatory | TX_DEPOSIT_HEADER.deposit_date | วันปัจจุบัน |
| depositName | String | ชื่อผู้ฝาก | กิตติ | Mandatory | TX_DEPOSIT_HEADER.deposit_name | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).payeeFirstName |
| depositLname | String | นามสกุลผู้ฝาก | ม่วงมงคล | Option | TX_DEPOSIT_HEADER.deposit_lname | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).payeeLastName |
| isAgent | String | Agent / Non Agent | AGT ALT | Mandatory | TX_DEPOSIT_HEADER.channel_type | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositChannel |
| branch | String | สาขาต้นสังกัด | 1500 | Mandatory | TX_DEPOSIT_HEADER.branch | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositBranch |
| channelCode | String | รหัสช่องทางการขาย ถ้า ระบุเป็น Agent จะส่ง รหัสสาขา (7 หลัก) ถ้า ระบุเป็น Non Agent จะส่งรหัสหน่วยงาน (7 หลัก) | 2071500 | Mandatory | TX_DEPOSIT_HEADER.channel_code | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositChannelCode |
| branchService | String | สาขาที่ให้บริการ | 1 | Mandatory | TX_DEPOSIT_HEADER.branch_service | Fix : 0001 |
| depositFrom | String | รับฝากจาก C = Customer A = Agent | A | Mandatory | TX_DEPOSIT_HEADER.deposit_from | Fix : C |
| fileBaac | String | ประเภทไฟล์ (เฉพาะธกส.) OL01 OL02 OL03 | OL01 | Option | TX_DEPOSIT_HEADER.file_baac | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositFileBaac |
| remark | String | หมายเหตุ |   | Option | TX_DEPOSIT_HEADER.remark | รายการนี้ตั้งมากจากการยกเลิกคืนรับฝาก เลขที่ "พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositNo" |
| system | String | ระบบที่ส่งข้อมูล | Webservice | Mandatory | TX_DEPOSIT_HEADER.created_by | FIX : PaymentManagementตั้งรับฝากจากระบบอะไรใช้ชื่อระบบเดียวกับใน repo (appname) |
| autopostFlag | String | flag สำหรับ ส่งข้อมูลไปยังระบบ Auto Post หลังจากที่ได้เลขที่รับฝากแล้ว จะดำเนินการส่งข้อมูลไปยังระบบ Auto Post หรือไม่ Y ส่ง N ไม่ส่ง | Y | Mandatory |   | Fix Nพิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).autopostFlag" |
| accBranchUpdate by nattapong.che on 15/05/69 | String | สำหรับ ระบุระบบรับฝากบันทึกบัญชีขาตั้งรับฝาก ประกอบด้วย Value ดังนี้HO : ให้ระบบรับฝากนำรายการรับฝากนี้ไปบันทึกบัญชี (ยังไม่รองรับ)BRANCH : ให้ระบบรับฝากนำรายการนี้ไปบันทึกบัญชีผ่าน Autopostnull : ระบบต้นทางที่ Call WS จะบันทึกบช.เองไม่บันทึกผ่านระบบรับฝาก (รองรับการทำงานเดิม) | BRANCH | Option |   | Fix Null |
| refOldDepositId | String | เลขที่รับฝาก กรณี มาจากการยกเลิกคืน / คืนไม่สำเร็จ |   | Option | TX_DEPOSIT_HEADER.ref_old_deposit_id | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositNo" |
| **List 1** |
| พิจารณา จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771) เงื่อนไขดังนี้paymentChannel in ('TRB','TRE','PMP') paymentChannel in ('BKC', 'CRC') andtransaction_status in ('REJ','CAN')ให้ ส่ง moneyTypeCode =01 |
| moneyTypeCode | String | ช่องทางการรับชำระหมายเหตุ : 01 เงินสด รายการรับฝากของสนญ.จะใช้กรณีเกิดจากการยกเลิกคืนรับฝาก/คืนเงินไม่สำเร็จ แล้วจะทำการตั้งรับฝากใหม่ด้วยช่องทางเงินสด | 01 | Mandatory | TX_DEPOSIT_MONEY.money_type_code | Fix = 01 |
| paymentDate | dateTime | วันที่โอนเงิน (วันที่รับชำระ)(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | 2021-08-01 09:10:000 | Mandatory | TX_DEPOSIT_MONEY.payment_date | วันที่บันทึกผลว่าจ่ายไม่สำเร็จ |
| amount | decimal | ยอดเงินรับฝาก | 4500.00 | Mandatory | TX_DEPOSIT_MONEY.amount | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).amount |
| remark | String | หมายเหตุ |   | Option | TX_DEPOSIT_MONEY.remark | รายการนี้ตั้งมากจากการยกเลิกคืนรับฝาก เลขที่ "พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositNo" |
|   | **กรณีระบุเป็น เช็ค 03 จะต้องระบุดังนี้** |   |   |   |   |   |
| พิจารณา จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771) เงื่อนไขดังนี้paymentChannel in ('COM','BKC') andtransaction_status in ('CEX','CCC')ให้กำหนดเป็น moneyTypeCode = 03 update by nattapong.che on 26/06/26 |
| moneyTypeCode | String | ช่องทางการรับชำระหมายเหตุ : 03 เช็ค | 03 | Mandatory | TX_DEPOSIT_MONEY.money_type_code | Fix = 03 |
| chequeNo | String | เลขที่เช็ค |   | Mandatory | TX_DEPOSIT_MONEY.cheque_no |   |
| chequeDate | date | วันที่สั่งจ่ายเช็ค(ปี ค.ศ.-เดือน-วัน ) | 2021-08-02 | Option | TX_DEPOSIT_MONEY.cheque_paid_date |   |
| bankCode | String | รหัสธนาคาร | BBL | Mandatory | TX_DEPOSIT_MONEY.bank_code | ให้นำเลขบช.ธนาคารสั่งจ่ายเช็ค ไปตรวจ WS [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account) |
| chequeBranch | String | สาขาธนาคารที่จ่ายเช็ค | อโศก | Mandatory | TX_DEPOSIT_MONEY.bank_branch |   |
| amount | decimal | ยอดเงินรับฝาก | 4500.00 | Mandatory | TX_DEPOSIT_MONEY.amount |   |
| feeAmount | decimal | ค่าธรรมเนียม | 15.00 | Option | TX_DEPOSIT_MONEY.fee_amount |   |
| bankAccount | String | บัญชีธนาคารที่นำเช็คเข้า | 147-0-81042-3 | Mandatory | TX_DEPOSIT_MONEY.bank_account |   |
| glAccount | String | GL ของเลขบัญชีธนาคารที่นำเช็คเข้า | 12021190 | Mandatory | TX_DEPOSIT_MONEY.gl_account | ให้นำเลขบช.ธนาคารสั่งจ่ายเช็ค ไปตรวจ WS [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account) |
| glCode | String | เก็บ gl_code ธนาคารที่นำเช็คเข้า | 01146 | Mandatory | TX_DEPOSIT_MONEY.gl_code | ให้นำเลขบช.ธนาคารสั่งจ่ายเช็ค ไปตรวจ WS [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account) |
| paymentDate | dateTime | วันที่โอนเงิน (วันที่ฝากเช็คเข้าบัญชีธนาคาร)(ปี ค.ศ.-เดือน-วัน ชม.:นาที:วินาที) | 2021-08-01 09:10:000 | Mandatory | TX_DEPOSIT_MONEY.payment_date | วันทีบันทึกเช็คยกเลิก/วันที่ฝากเช็คกลับ |
| remark | String | หมายเหตุ |   | Option | TX_DEPOSIT_MONEY.remark | รายการนี้ตั้งมากจากการยกเลิกคืนรับฝาก เลขที่ "พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositNo" |
| isChequeReturn | String | flag สำหรับ เช็คคืนพร้อมใบคำขอ ธกส. Y/Null | Y | Option | TX_DEPOSIT_MONEY.is_cheque_return | หากเป็น depositBaacFee ถ้า มีค่ามากกว่า 0 หรือ ไม่ใช่ค่าว่าง FIX :Yกรณีอื่นๆ N |
|   | ****ถ้า isChequeReturn มีค่า Y จะต้องระบุข้อมูลดังนี้**** |   |   |   |   |   |
| baacFeeUpdate by nattapong.che on 26/06/26 | decimal | ค่าบำเหน็จจะ mandatory กรณี isChequeReturn = Y | 450.00 | MandatoryConditional | TX_DEPOSIT_MONEY.baac_fee | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositBaacFee |
|   |   |   |   |   |   |   |
| **List 2** |
| reason | String | เหตุผลรับฝาก รหัส คำอธิบาย 01 เคสใหม่ 02 ต่อสัญญา 03 ซื้อสัญญาเพิ่มเติม 04 กรณีรับเบี้ยไม่ครบตามจำนวนในครั้งแรก 05 อื่นๆ 06 ประกันกลุ่ม | 1 | Mandatory | TX_DEPOSIT_DETAIL.reason_code | FIX : 05 |
| otherReason | String | เหตุผล อื่นๆ ของเหตผลรับฝาก รหัส คำอธิบาย 01 รับฝากเบี้ยประกันภัย 02 รับฝากดอกเบี้ยกู้เงิน ตามกรมธรรม์ 03 รับฝากเงิน กรณีตัวแทนประกันชีวิต พนักงาน 04 รับฝากเงินผ่านธนาคาร 05 เงินรับฝากสำนักงานตัวแทน (ใช้เฉพาะเงินขาด / เกิน) 06 รับฝากคืนเงินกู้ ตามกรมธรรม์ 07 รับฝากผ่าน CS/CB/MPAY/TRUE MONEY/TESCO LOTUS/BIG C/Pay@Post 08 ปิดบัญชีเงินเกินไม่ทราบสาเหตุ 10 รับฝากธุรกรรมข้ามสาขา (สถานะ P ตัวแทนชำระ) 11 ชำระหนี้เรียกคืนสินไหมโรงพยาบาลส่วนเกิน (ประกันกลุ่ม) 12 รายได้เบ็ดเตล็ด14 ยกเลิกจากการคืนรับฝาก |   | Option | TX_DEPOSIT_DETAIL.other_code | FIX : 14 |
| businessLine | String | Business Line 00 ไม่ระบุ 01 อุตสาหกรรม 02 สามัญ 03 กลุ่ม 04 PA 05 PA กลุ่ม 07 Unit Link | 1 | Mandatory | TX_DEPOSIT_DETAIL.business_code | FIX : 00 |
| amount | decimal | ยอดเงินรับฝาก | 4500 | Mandatory | TX_DEPOSIT_DETAIL.amount | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).amount |
| customerTitleName | String | คำนำหน้าลูกค้า | นาย | Mandatory | TX_DEPOSIT_DETAIL.customer_title | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).payeeShortTitle |
| customerFirstName | String | ชื่อลูกค้า | กิตติพัฒน์ | Mandatory | TX_DEPOSIT_DETAIL.customer_name | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).payeeFirstName |
| customerLastName | String | นามสกุลลูกค้า | มีมาก | Option | TX_DEPOSIT_DETAIL.customer_lname | พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).payeeLastName |
| remark | String | หมายเหตุ |   | Option | TX_DEPOSIT_DETAIL.remark | รายการนี้ตั้งมากจากการยกเลิกคืนรับฝาก เลขที่ "พิจารณาฟิลด์ ที่บันทึกค่า จาก [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771).depositNo" |

---

## Hyperlinks บนหน้านี้

- [90.2.1 Service ตั้งรับฝาก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=870154574)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account)
- [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account)
- [http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account](http://11.100.8.44/thaisamut/pub/nbswebapi/swagger#/nbswebapi/account)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
