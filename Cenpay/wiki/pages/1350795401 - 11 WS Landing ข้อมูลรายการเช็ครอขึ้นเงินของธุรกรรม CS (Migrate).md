# 11 WS Landing ข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรม CS (Migrate)

- **Page ID:** 1350795401
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1350795401
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 11 WS Landing ข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรม CS (Migrate)
- **Depth:** 4

---

[ [Overview](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Overview) ] [ [Protocol](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Protocol) ] [ [Operation](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Operation) ] [ [Input](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Input) ] [ [Process](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Process) ] [ [`Output`](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-Output) ] [ [Example Input & Output](#id-11WSLandingข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรมCS(Migrate)-ExampleInput&Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่อรับข้อมูลรายการเช็ครอขึ้นเงินของธุรกรรม CS
**Repositories**: msa-paymentmg
**Service path**
**POST:** ****/thaisamut/rs/paymentmg/v1/payment/cs/cs-cheque-migrate (ทำงานอัตโนมัติภายใต้ path นี้)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **ข้อมูลระดับ Voucher, Batch Payment** |
| finReferenceNo | String | เลขที่อ้างอิงฝ่ายการเงิน | EGP25680402003 | Y |   |
| bankAccountNo | String | เลขที่บัญชี | 9250025955 | Y |   |
| paidDate | Date | วันที่ลูกค้าได้รับเงิน | 2026-06-01 | Y |   |
| paymentDate | Date | วันที่ตัดเงินจากบัญชีบริษัท | 2026-06-01 | Y |   |
| postingDate | Date | วันที่บันทึกบัญชี | 2026-06-01 | Y |   |
| totalTransaction | Numeric | จำนวนรายการรวม | 2 | Y |   |
| totalAmount | Numeric | จำนวนเงินรวม | 5,000.00 | Y |   |
| approvedDate | DateTime | วันและเวลาที่อนุมัติ | 2025-08-01 08:00:00 | Y |   |
| approvedBy | String | ผู้อนุมัติ | rattana.so | Y |   |
| edwSystemKey | Varchar | EDW System Key | PM_FIN_02_B25690116001_20260116085522 | Y |   |
| edwProcessLogId | Numeric | EDW Process Log Id | 1 | Y |   |
| dashboardEdwId | Numeric | EDW Dashboard Id | 1 | Y |   |
| **ข้อมูลระดับ Paytment detail** |
| chequeNo | String | เลขที่เช็ค | 43698888 | Y |   |
| chequeIssueDate | DateTime | วันที่ออกเช็ค | 2025-08-01 08:00:00 | Y |   |
| bankAccountNo | String | เลขบัญชีบริษัท | 7181013693 | Y |   |

| `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | Remark |
|---|---|---|---|---|---|
| **List <PaymentHeader>** |
| batchOperNo | String | Batch Number ฝ่ายปฎิบัติการ | ระบบ CenPayCP-TB-CLN-20220325-00001CSCSDEA26010100001 | Y |   |
| ระบบ |   |
| CenPay | CP-TB-CLN-20220325-00001 |
| CS | CSDEA26010100001 |
| transactionGroup | String | กลุ่มธุรกรรม | EG | Y |   |
| transactionType | String | รายการธุรกรรม | APU | Y |   |
| paymentChannel | String | ช่องทางการจ่ายเงิน | TRN | Y |   |
| accReferenceNo | String | Reference Number ฝ่ายบัญชี | EG256804090001 | N |   |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | N |   |
| totalTransaction | Numeric | จำนวนรายการรวม | 2 | Y |   |
| totalAmount | Numeric | จำนวนเงินรวม | 3,000,000.00 | Y |   |
| approvedBy | String | ชื่อผู้อนุมัติจากหน่วยงานต้นทาง | patcharat.vo | Y |   |
| approvedDate | Date | วันที่อนุมัติข้อมูลการจ่ายจากหน่วยงานต้นทาง | 20250801 | Y |   |
| tax | String | ประเภทการจ่ายภาษี | WHT | N |   |

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **List <PaymentDetail>** |   |   |   |   |   |
| operRefNo | String | รหัสอ้างอิงข้อมูลการจ่ายจาก CenPay | 1 | Y |   |
| paymentDashboardId | Numeric | รหัสข้อมูล edw dashboard | 1 | N |   |
| transactionGroup | String | กลุ่มธุรกรรม | ผลประโยชน์ | Y |   |
| transactionType | String | รายการธุรกรรม | เงินจ่ายคืนทันที | Y |   |
| paymentChannel | String | ช่องทางการจ่ายเงิน | โอนพร้อมเพย์ | Y |   |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | Y |   |
| paymentDueDate | Date | วันที่ครบกำหนดรับเงิน | 20250801 | N |   |
| payeeShortTitle | String | คำนำหน้า แบบย่อ | น.ส. | N |   |
| payeeFirstName | String | ชื่อผู้รับเงิน | ไทยสมุทร | Y |   |
| payeeLastName | String | นามสกุลผู้รับเงิน | ประกันชีวิต | N |   |
| hospitalName | String | ชื่อสถานพยาบาล | ศิริราช | N |   |
| mobileNo | String | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS | 0812345678 | N |   |
| bankId | Numeric | รหัสธนาคาร | 1 | N |   |
| bankName | String | ชื่อธนาคาร (ภาษาไทย) | กสิกรไทย | N |   |
| bankAbbrName | String | รหัสตัวย่อธนาคาร | KBANK | N |   |
| botBankCode | NumericString | รหัสมาตรฐานธนาคาร | 0004 | N |   |
| bankAccountNo | String | เลขที่บัญชี | 11122233333 | N |   |
| bankBranch | String | สาขาธนาคาร | อโศก | N |   |
| promptpayType | String | ประเภทการโอนพร้อมเพย์ | I - ID CardM - Mobile | N |   |
| promptpayNo | NumericString | เลขพร้อมเพย์ | 1100100010001 | N |   |
| creditCardNo | Numeric | เลขที่บัตรเครดิต | 1234567890123456 | N |   |
| amount | Numeric | จำนวนเงิน | 5,000.00 | N |   |
| grossAmount | Numeric | Gross Amount | 5,000.00 | N |   |
| whtAmount | Numeric | WHT Amount | 5,000.00 | N |   |
| taxName | String | ชื่อผู้เสียภาษี | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด | N |   |
| taxAddress1 | String | ที่อยู่ 1 | 5/1 ถ.มิตรภาพ ต.หนองสาหร่าย อ.ปากช่อง | N |   |
| taxAddress2 | String | ที่อยู่ 2 | จ.นครราชสีมา 30130 | N |   |
| taxNo | String | เลขที่ผู้เสียภาษี | 0305535001462 | N |   |
| taxType | String | ประเภทภาษี | 53 | N |   |
| whtType | String | WHT Type | 64 | N |   |
| whtRate | Numeric | อัตราภาษีหัก ณ ที่จ่าย | 10 | N |   |
| invoiceNo | String | เลขที่ใบ Invoice | A1 | N |   |
| email | String | Email | [ochi.land@gmail.com](mailto:ochi.land@gmail.com) | N |   |
| **List <PolicyDetail>** |
| policyNo | String | เลขที่กรมธรรม์ | ข0181320 | N |   |
| policyType | String | ประเภทกรมธรรม์ | ORDสามัญINDอุตสาหกรรม ปชGOVอุตสาหกรรม ขพGOVอุตสาหกรรม คู่ขวัญPAอุบัติเหตุ (PA)ULULGRPGROUPPAGPAGROUP | N |   |
| ORD | สามัญ |
| IND | อุตสาหกรรม ปช |
| GOV | อุตสาหกรรม ขพ |
| GOV | อุตสาหกรรม คู่ขวัญ |
| PA | อุบัติเหตุ (PA) |
| UL | UL |
| GRP | GROUP |
| PAG | PAGROUP |
| productCode | String | แบบประกัน | 496 | N |   |
| branchSourceCode | String | รหัสสาขาต้นสังกัด | 0116 | N |   |
| branchRegisterCode | String | รหัสสาขารับเรื่อง | 0116 | N |   |
| branchServiceCode | String | รหัสสาขาบริการ | 0116 | N |   |
| channelCode | String | รหัสช่องทางการขาย | 5075600 | N |   |
| cardNo | String | เลขที่บัตร | 1100567893455 | N |   |
| cardType | String | ประเภทบัตร | I | N |   |
| policyStartDate | String | วันที่เริ่มสัญญา | 2026-01-01 | N |   |
| paymentMode | Numeric | โหมดชำระเบี้ย | 1 | N |   |
| premiumAnnualAmount | Numeric | เบี้ยประกันรายปีของกรมธรรม์ | 1,000.00 | N |   |
| premiumModeAmount | Numeric | เบี้ยประกันรายโหมดของกรมธรรม์ | 1,000.00 | N |   |
| **ข้อมูลเอกสาร List[]** |
| documentName | String | ชื่อเอกสาร | เอกสาร.pdf | N |   |
| dmsDocId | Numeric | รหัสอ้างอิงระบบ DMS | 1 | N |   |
| documentUploadDate | String | วันและเวลาที่อัปโหลดเอกสาร | 2025-08-01 08:00:00 | N |   |
| documentUploadBy | String | ผู้อัปโหลดเอกสาร | ariya.pi | N |   |

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **claim system List[]****อ้างอิงข้อมูลจาก sheet [COA](https://docs.google.com/spreadsheets/d/1quCycIGC-VRNqSWQWBrmblBlPKokgDGw1iG87i-F-1o/edit?usp=sharing) ส่งเข้า EDW : [05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=902168624)** |
| policyNo | String | เลขที่กรมธรรม์ | ข0181320 | Y |   |
| claimNo | String | รหัสอ้างอิงจากระบบ claim system | 3000/04-2568/00003-01 | Y |   |
| claimTypeCode | String | ประเภทสินไหม | DeathCL | Y |   |
| claimReturnType | String | ประเภทการรับคืนCLAIM - สินไหมค้างจ่ายPREM_CLAIM - สินไหมคืนเบี้ยค้างจ่ายPREM_REFUND - เบี้ยประกันภัยคืนค้างจ่ายEXGRATIA - Exgratia ค้างจ่าย | CLAIM | Y | updated by patcha.vo 26/05/2569 |
| claimAnnuityFlag | String | สินไหมจ่ายบำนาญ | Y | N | updated by patcha.vo 26/05/2569 |
| baseRiderIndecatorbaseRiderIndicator | String | Base Plan / Rider | BASIC/RIDER | Y | updated by patcha.vo 17/06/2569 |
| riderId | String | รหัส Rider | 1 | N |   |
| registrationDate | String | วันที่รับเรื่อง | 2026-04-22 | Y |   |
| registrationNo | String | เลขที่รับเรื่อง | 3000/04-2568/00003 | Y |   |
| claimEventDate | String | วันที่เกิดเหตุ | 2026-04-22 | Y |   |
| claimReportedDate | String | วันที่ลูกค้ามายื่นเอกสารทำเรื่องสินไหม | 2026-04-22 | Y |   |
| claimStatus | String | สถานะของการพิจารณาการยื่นขอสินไหม โดย 1 = อนุมัติ และ P = อยู่ระหว่างพิจารณา | 1 | Y |   |
| approvedDate | String | วันที่ของการอนุมัติการยื่นเรื่องสินไหม | 2026-04-22 | Y |   |
| claimPaidDate | String | วันที่จ่ายสินไหม | 2026-04-22 | Y |   |
| certificateNo | String | รหัส member กรมธรรม์ประกันกลุ่ม | GH4841 | N |   |
| policyYear | String | ปีกรมธรรม์ที่เรียกร้องสินไหม | 1 | Y |   |
| amount | Numeric | ยอดก่อนหักภาษี | 2,000.00 | Y |   |
| whtAmount | Numeric | ยอดภาษีระดับ claim | 2,000.00 | N | updated by patcha.vo 17/06/2569 |
| riderNameAbbr | String | ชื่อ Rider | TPD.1 | Y | updated by patcha.vo 09/06/2569 |
| riderEffectiveDate | Date | วันที่สัญญาเพิ่มเติม มีผล | 2026-04-22 | Y | updated by patcha.vo 09/06/2569 |
| riderSumAssured | Numeric | ทุนประกันของสัญญาเพิ่มเติม | 2,000.00 | Y | updated by patcha.vo 09/06/2569 |
| riderModeOfPayment | Numeric | โหมดการชำระเบี้ยของสัญญาเพิ่มเติม (เป็นตัวเลข) | 1 | Y | updated by patcha.vo 09/06/2569 |
| riderAnnualPremium | Numeric | เบี้ยประกันรายปีของสัญญาเพิ่มเติม | 2,000.00 | Y | updated by patcha.vo 09/06/2569 |
| riderModalPremium | Numeric | เบี้ยประกันชำระตามโหมดของสัญญาเพิ่มเติม | 2,000.00 | Y | updated by patcha.vo 09/06/2569 |
| investmentComponent | Numeric | มูลค่ากรมธรรม์ | 2,000.00 | Y | updated by patcha.vo 09/06/2569 |
| claimAge | Numeric | อายุ | 99 | Y | updated by patcha.vo 09/06/2569 |
| claimSex | String | เพศ | ชาย, หญิง | Y | updated by patcha.vo 09/06/2569 |
| netAmount | Numeric | ยอดหลังหักภาษี | 2,000.00 | Y | updated by patcha.vo 09/07/2569 |
| policyType | String | ประเภทกรมธรรม์ | ORD | N | added by patcha.vo 20/07/2569 |
| branchSourceCode | String | รหัสสาขาต้นสังกัด | 0001 | N | added by patcha.vo 20/07/2569 |
| branchRegisterCode | String | รหัสสาขารับเรื่อง | 0001 | N | added by patcha.vo 20/07/2569 |
| branchServiceCode | String | รหัสสาขาบริการ | 0001 | N | added by patcha.vo 20/07/2569 |

## Process

**เงื่อนไข**
ตรวจสอบ [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).batch_oper_no = input.batchOperNo ยังไม่มีข้อมูล ให้ Insert ข้อมูลดังนี้

| No | Table | Mapping Field |
|---|---|---|
|   | Insert data table : [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | fielddescriptionconditionbatch_payment_noBatch Number ฝ่ายการเงินสร้าง Batch Number ฝ่ายการเงินตำแหน่งข้อมูลเงื่อนไข 1ประเภทการจ่ายFix : P - Paperbase Payment 2-9วันที่บันทึกรายการตรวจสอบFormat: ปปปปดดวว เป็น พ.ศ.10-12Sequence number1.ตรวจสอบเลข Running ล่าสุดจากตาราง [tx_running_no](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_running_no) ด้วย prefix_key = ช่องทางการจ่ายและวันที่บันทึกรายการตรวจสอบ (B25680701)2.ตรวจสอบ จำนวน digit จาก [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern).pattern = batch_paymentpayment_channelช่องทางการจ่ายFix : COM - เช็คบริษัทbatch_payment_typeประเภทการจ่ายFix : P - Paperbase Paymentservice_codeService (Format ธนาคาร)Fix : CHE_COM - เช็คบริษัท bank_account_codeเลขบัญชีธนาคารโอนเงินของบริษัทตรวจสอบโดยการลบ - ทั้ง description และข้อมูลจาก input[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description = input. bankAccountNo[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **18000** บันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_keypaid_dateวันที่จ่ายinput. paidDatetotal_transactionจำนวนรายการรวมinput. totalTransactiontotal_amountจำนวนเงินรวมinput. totalAmountincorrect_transactionจำนวนรายการรวมที่ไม่ถูกต้องFix : 0incorrect_amountจำนวนเงินรวมที่ไม่ถูกต้องFix : 0net_transactionจำนวนรายการรวมสุทธิinput. totalTransactionnet_transactionจำนวนเงินรวมสุทธิinput. totalAmountdownload_roundครั้งที่ดาวน์โหลดFix : 0batch_statusสถานะดำเนินการFix : SUP - จ่ายสำเร็จFix : APP - อนุมัติจ่ายเงินupdated by patcha.vo 16/07/69request_payment_dateวันที่ Request จ่ายเงินinput. requestPaymentDatemaker_dateวันที่ Maker ทำรายการวันและเวลาปัจจุบันmaker_byMaker ที่ทำรายการFix : 'Migrate data'checker_dateวันที่ Checker ทำรายการวันและเวลาปัจจุบันchecker_byChecker ที่ทำรายการFix : 'Migrate data' |
| field | description | condition |
| batch_payment_no | Batch Number ฝ่ายการเงิน | สร้าง Batch Number ฝ่ายการเงินตำแหน่งข้อมูลเงื่อนไข 1ประเภทการจ่ายFix : P - Paperbase Payment 2-9วันที่บันทึกรายการตรวจสอบFormat: ปปปปดดวว เป็น พ.ศ.10-12Sequence number1.ตรวจสอบเลข Running ล่าสุดจากตาราง [tx_running_no](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_running_no) ด้วย prefix_key = ช่องทางการจ่ายและวันที่บันทึกรายการตรวจสอบ (B25680701)2.ตรวจสอบ จำนวน digit จาก [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern).pattern = batch_payment |
| ตำแหน่ง | ข้อมูล | เงื่อนไข |
| 1 | ประเภทการจ่าย | Fix : P - Paperbase Payment |
| 2-9 | วันที่บันทึกรายการตรวจสอบ | Format: ปปปปดดวว เป็น พ.ศ. |
| 10-12 | Sequence number | 1.ตรวจสอบเลข Running ล่าสุดจากตาราง [tx_running_no](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_running_no) ด้วย prefix_key = ช่องทางการจ่ายและวันที่บันทึกรายการตรวจสอบ (B25680701)2.ตรวจสอบ จำนวน digit จาก [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern).pattern = batch_payment |
| payment_channel | ช่องทางการจ่าย | Fix : COM - เช็คบริษัท |
| batch_payment_type | ประเภทการจ่าย | Fix : P - Paperbase Payment |
| service_code | Service (Format ธนาคาร) | Fix : CHE_COM - เช็คบริษัท |
| bank_account_code | เลขบัญชีธนาคารโอนเงินของบริษัท | ตรวจสอบโดยการลบ - ทั้ง description และข้อมูลจาก input[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).description = input. bankAccountNo[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **18000** บันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key |
| paid_date | วันที่จ่าย | input. paidDate |
| total_transaction | จำนวนรายการรวม | input. totalTransaction |
| total_amount | จำนวนเงินรวม | input. totalAmount |
| incorrect_transaction | จำนวนรายการรวมที่ไม่ถูกต้อง | Fix : 0 |
| incorrect_amount | จำนวนเงินรวมที่ไม่ถูกต้อง | Fix : 0 |
| net_transaction | จำนวนรายการรวมสุทธิ | input. totalTransaction |
| net_transaction | จำนวนเงินรวมสุทธิ | input. totalAmount |
| download_round | ครั้งที่ดาวน์โหลด | Fix : 0 |
| batch_status | สถานะดำเนินการ | Fix : SUP - จ่ายสำเร็จFix : APP - อนุมัติจ่ายเงินupdated by patcha.vo 16/07/69 |
| request_payment_date | วันที่ Request จ่ายเงิน | input. requestPaymentDate |
| maker_date | วันที่ Maker ทำรายการ | วันและเวลาปัจจุบัน |
| maker_by | Maker ที่ทำรายการ | Fix : 'Migrate data' |
| checker_date | วันที่ Checker ทำรายการ | วันและเวลาปัจจุบัน |
| checker_by | Checker ที่ทำรายการ | Fix : 'Migrate data' |
|   | Insert data table : [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) | fielddescriptionconditionbatch_payment_idรหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).idfin_reference_noเลขที่อ้างอิงฝ่ายการเงินinput. finReferenceNoapproved_typeประเภทการอนุมัติFix : APAC - อนุมัติจ่ายและบันทึกบัญชีpayment_channelช่องทางการจ่ายFix : COM - เช็คบริษัทbatch_payment_typeประเภทการจ่ายFix : P - Paperbase PaymentserviceService (Format ธนาคาร)Fix : CHE_COM - เช็คบริษัทbank_account_noเลขที่บัญชีinput. bankAccountNorequest_payment_dateวันที่ Request ว่าลูกค้าจะได้รับเงินinput. requestPaymentDatepaid_dateวันที่ลูกค้าได้รับเงินinput. paidDatepayment_dateวันที่ตัดเงินจากบัญชีบริษัทinput. paymentDateposting_dateวันที่บันทึกบัญชีinput. postingDatetotal_transactionจำนวนรายการรวมสุทธิinput. totalTransactiontotal_amountจำนวนเงินรวมสุทธิinput. totalAmountvoucher_statusสถานะดำเนินการFix : SUP - จ่ายสำเร็จFix : APP - อนุมัติจ่ายเงินupdated by patcha.vo 16/07/69verify_dateวันและเวลาที่ตรวจสอบinput. checkerDateverify_byชื่อผู้ตรวจสอบinput. checkerByapproved_dateวันและเวลาที่อนุมัติinput. approvedDateapproved_byผู้อนุมัติinput. approvedByaccount_statusสถานะส่ง SUNFix : SUCCESSevent_codeผังบัญชีFix : PM_FIN_02 - จ่ายเงินedw_system_keyEDW System Keyinput. edwSystemKeyedw_process_log_idEDW Process Log Idinput. edwProcessLogIddashboard_edw_idEDW Dashboard Idinput. dashboardEdwIdbatch_cutoff_timeBatch ตรวจสอบสถานะบัญชีFix : Y |
| field | description | condition |
| batch_payment_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายการเงิน | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| fin_reference_no | เลขที่อ้างอิงฝ่ายการเงิน | input. finReferenceNo |
| approved_type | ประเภทการอนุมัติ | Fix : APAC - อนุมัติจ่ายและบันทึกบัญชี |
| payment_channel | ช่องทางการจ่าย | Fix : COM - เช็คบริษัท |
| batch_payment_type | ประเภทการจ่าย | Fix : P - Paperbase Payment |
| service | Service (Format ธนาคาร) | Fix : CHE_COM - เช็คบริษัท |
| bank_account_no | เลขที่บัญชี | input. bankAccountNo |
| request_payment_date | วันที่ Request ว่าลูกค้าจะได้รับเงิน | input. requestPaymentDate |
| paid_date | วันที่ลูกค้าได้รับเงิน | input. paidDate |
| payment_date | วันที่ตัดเงินจากบัญชีบริษัท | input. paymentDate |
| posting_date | วันที่บันทึกบัญชี | input. postingDate |
| total_transaction | จำนวนรายการรวมสุทธิ | input. totalTransaction |
| total_amount | จำนวนเงินรวมสุทธิ | input. totalAmount |
| voucher_status | สถานะดำเนินการ | Fix : SUP - จ่ายสำเร็จFix : APP - อนุมัติจ่ายเงินupdated by patcha.vo 16/07/69 |
| verify_date | วันและเวลาที่ตรวจสอบ | input. checkerDate |
| verify_by | ชื่อผู้ตรวจสอบ | input. checkerBy |
| approved_date | วันและเวลาที่อนุมัติ | input. approvedDate |
| approved_by | ผู้อนุมัติ | input. approvedBy |
| account_status | สถานะส่ง SUN | Fix : SUCCESS |
| event_code | ผังบัญชี | Fix : PM_FIN_02 - จ่ายเงิน |
| edw_system_key | EDW System Key | input. edwSystemKey |
| edw_process_log_id | EDW Process Log Id | input. edwProcessLogId |
| dashboard_edw_id | EDW Dashboard Id | input. dashboardEdwId |
| batch_cutoff_time | Batch ตรวจสอบสถานะบัญชี | Fix : Y |
|   | Insert data table : [tx_payment_header](/display/RDSCPENH/tx_payment_header) | นำข้อมูลจาก input. header มาบันทึก |
|   | Insert data table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)Insert data table : [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) | นำข้อมูลจาก input. detail มาบันทึก filedconditionpayment_header_id[tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).idstatusFix : COS - เช็ครอขึ้นเงินcheque_noinput. chequeNocheque_versionFix : THcheque_issue_dateinput. chequeIssueDate |
| filed | condition |
| payment_header_id | [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id |
| status | Fix : COS - เช็ครอขึ้นเงิน |
| cheque_no | input. chequeNo |
| cheque_version | Fix : TH |
| cheque_issue_date | input. chequeIssueDate |
|   | Insert data table : [tx_paperbase_status](/display/RDSCPENH/tx_paperbase_status) | นำข้อมูลจาก input. detail มาบันทึก fileddescriptionconditionpayment_detail_idรหัสอ้างอิงข้อมูลการจ่ายระดับ Transaction[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idstatusสถานะFix : COSprint_cheque_roundครั้งที่พิมพ์Fix : 1cheque_noเลขที่เช็คinput. chequeNocheque_versionเช็คเวอร์ชั่นFix : THcheque_reasonเหตุผลการแก้ไข/ส่งกลับ/ยกเลิก PaperbaseNULLcheque_reason_otherเหตุผลอื่นๆสำหรับยกเลิกเช็ค (บันทึกผลจ่ายเช็ค)NULLbatch_payment_idรหัสอ้างอิงข้อมูลการจ่าย[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| filed | description | condition |
| payment_detail_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Transaction | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| status | สถานะ | Fix : COS |
| print_cheque_round | ครั้งที่พิมพ์ | Fix : 1 |
| cheque_no | เลขที่เช็ค | input. chequeNo |
| cheque_version | เช็คเวอร์ชั่น | Fix : TH |
| cheque_reason | เหตุผลการแก้ไข/ส่งกลับ/ยกเลิก Paperbase | NULL |
| cheque_reason_other | เหตุผลอื่นๆสำหรับยกเลิกเช็ค (บันทึกผลจ่ายเช็ค) | NULL |
| batch_payment_id | รหัสอ้างอิงข้อมูลการจ่าย | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
|   | Insert data table : [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl) | นำข้อมูลจาก [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) และ [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) มาบันทึก payment_dashboard_id [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).idpayment_detail_id [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id |
|   |   |
| payment_dashboard_id | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |
| payment_detail_id | [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id |
|   | Insert data table : [tx_policy_detail](/display/RDSCPENH/tx_policy_detail) | นำข้อมูลจาก input . policy มาบันทึก |
|   | Insert data table : [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document) | นำข้อมูลจาก input. document มาบันทึก filedconditionpayment_header_id[tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).idbatch_payment_id[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| filed | condition |
| payment_header_id | [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id |
| batch_payment_id | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
|   | Insert data table : [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction) | นำข้อมูลจาก input. cs transaction มาบันทึก fieldconditionpayment_detail_id[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| field | condition |
| payment_detail_id | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
|   | ทุกตาราง | fieldconditioncreated_dateวันและเวลาปัจจุบันcreated_byFix : 'Migrate Data' |
| field | condition |
| created_date | วันและเวลาปัจจุบัน |
| created_by | Fix : 'Migrate Data' |

## `Output`

| Name | Type | Description | Example |
|---|---|---|---|
| code | Numeric | CodeMessage200Success400Bad Request 409Conflict 500Server Error |   |
| Code | Message |
| 200 | Success |
| 400 | Bad Request |
| 409 | Conflict |
| 500 | Server Error |
| message | String |

## Example Input & Output

<![CDATA[{ &quot;data&quot;: null, &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

---

## Hyperlinks บนหน้านี้

- [ochi.land@gmail.com](http://wiki.thaisamut.co.thmailto:ochi.land@gmail.com)
- [COA](https://docs.google.com/spreadsheets/d/1quCycIGC-VRNqSWQWBrmblBlPKokgDGw1iG87i-F-1o/edit?usp=sharing)
- [05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=902168624)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_running_no](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_running_no)
- [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_paperbase_status](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_paperbase_status)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_policy_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
