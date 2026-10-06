# 12 WS Landing ข้อมูลรายการ ManualOper - รายได้ตัวแทน (G3 & G4)

- **Page ID:** 1355546984
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 12 WS Landing ข้อมูลรายการ ManualOper - รายได้ตัวแทน (G3 & G4)
- **Depth:** 4

---

[ [Overview](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Overview) ] [ [Protocol](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Protocol) ] [ [Operation](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Operation) ] [ [Input](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Input) ] [ [Process](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Process) ] [ [`Output`](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-Output) ] [ [Example Input & Output](#id-12WSLandingข้อมูลรายการManualOper-รายได้ตัวแทน(G3&G4)-ExampleInput&Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่อรับข้อมูลรายการ ManualOper - จ่ายรายได้ตัวแทน เข้าสู่หน้าจอรับรายการ ระบบ Payment Management
**Repositories**: msa-paymentmg
**Service path**
**POST:** /thaisamut/rs/paymentmg/v1/payment/manual-oper/g3/landing (ทำงานอัตโนมัติภายใต้ path นี้)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input

| `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | Remark |
|---|---|---|---|---|---|
| **PaymentHeader** |
| batchOperNo | String | Batch Number ฝ่ายปฎิบัติการ | ระบบ CenPayCP-TB-CLN-20220325-00001 | Y |   |
| ระบบ |   |
| CenPay | CP-TB-CLN-20220325-00001 |
| transactionGroup | String | กลุ่มธุรกรรม | ED | Y |   |
| transactionType | String | รายการธุรกรรม | CMA | Y | ตัวอย่าง lookup_key iddescriptiondescription_englookup_key14031จ่ายคอม (Agent ของ Alt1)Commission Payment (Alt1 Agent)CMA14032โบนัส-เก็บใบคำขอ (OV) (Agent ของ Alt1)Application Submission Bonus (Alt1 Agent)ASB14033จ่ายคอม (Agent Partner)Commission Payment (Partner Agent)CMP14034จ่ายคอม & Sale Promotion (Worksite)Commission & Sale Promotion (Worksite)CSW14035จ่ายคอม & Sale Promotion (Agent-OLI) : ตัวแทนและพนักงานขายCommission & Sale Promotion (Agent-OLI)CSO14036จ่าย Commission & Sale Promotion (Agent ของ Alt1)Commission & Sales Promotion (Alt1)CSP14037ตั้งจ่ายรายได้ตัวแทนเพิ่มเพิ่มAdditional Agent Income SetupAAI14038จ่ายรายได้ LC รายเดือนMonthly LC Income PaymentMLI14039ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทนAgent Security Deposit WithdrawalWDA14040ถอนเงินค้ำประกัน เพื่อโอนให้ทายาทSecurity Deposit Transfer to HeirDTH14041จ่ายค่าบริการรายเดือน SP LifeMonthly Service Fee (SP Life)MSS14042จ่ายค่าบริการสำหรับการดำเนินการ SP LifeOperational Service Fee (SP Life)OSS14043ตั้งจ่ายคืนค่าบำเหน็จ ธกส. เนื่องจากมีใบคำขอกลับมาทำใหม่BAAC Commission Refund Setup (Re-applied)BCR14044จ่ายรายได้ตัวแทนรายวันDaily Agent Income PaymentDAI |
| id | description | description_eng | lookup_key |
| 14031 | จ่ายคอม (Agent ของ Alt1) | Commission Payment (Alt1 Agent) | CMA |
| 14032 | โบนัส-เก็บใบคำขอ (OV) (Agent ของ Alt1) | Application Submission Bonus (Alt1 Agent) | ASB |
| 14033 | จ่ายคอม (Agent Partner) | Commission Payment (Partner Agent) | CMP |
| 14034 | จ่ายคอม & Sale Promotion (Worksite) | Commission & Sale Promotion (Worksite) | CSW |
| 14035 | จ่ายคอม & Sale Promotion (Agent-OLI) : ตัวแทนและพนักงานขาย | Commission & Sale Promotion (Agent-OLI) | CSO |
| 14036 | จ่าย Commission & Sale Promotion (Agent ของ Alt1) | Commission & Sales Promotion (Alt1) | CSP |
| 14037 | ตั้งจ่ายรายได้ตัวแทนเพิ่มเพิ่ม | Additional Agent Income Setup | AAI |
| 14038 | จ่ายรายได้ LC รายเดือน | Monthly LC Income Payment | MLI |
| 14039 | ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทน | Agent Security Deposit Withdrawal | WDA |
| 14040 | ถอนเงินค้ำประกัน เพื่อโอนให้ทายาท | Security Deposit Transfer to Heir | DTH |
| 14041 | จ่ายค่าบริการรายเดือน SP Life | Monthly Service Fee (SP Life) | MSS |
| 14042 | จ่ายค่าบริการสำหรับการดำเนินการ SP Life | Operational Service Fee (SP Life) | OSS |
| 14043 | ตั้งจ่ายคืนค่าบำเหน็จ ธกส. เนื่องจากมีใบคำขอกลับมาทำใหม่ | BAAC Commission Refund Setup (Re-applied) | BCR |
| 14044 | จ่ายรายได้ตัวแทนรายวัน | Daily Agent Income Payment | DAI |
| paymentChannel | String | ช่องทางการจ่ายเงิน | TRB | Y |   |
| accReferenceNo | String | Reference Number ฝ่ายบัญชี | EG256804090001 | N | * ธุรกรรมรับฝากไม่มีการบันทึกบัญชี updated by patcha.vo 13/02/2569 |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | N |   |
| totalTransaction | Numeric | จำนวนรายการรวม | 10 | Y |   |
| totalAmount | Numeric | จำนวนเงินรวม | 3,000,000.00 | Y |   |
| makerBy | String | ชื่อผู้ตรวจสอบจากหน่วยงานต้นทาง | anocha.su | Y |   |
| MakerDate | Date | วันที่ตรวจสอบข้อมูลการจ่ายจากหน่วยงานต้นทาง | 20250801 | Y |   |
| approvedBy | String | ชื่อผู้อนุมัติจากหน่วยงานต้นทาง | patcharat.vo | Y |   |
| approvedDate | Date | วันที่อนุมัติข้อมูลการจ่ายจากหน่วยงานต้นทาง | 20250801 | Y |   |
| tax | String | ประเภทการจ่ายภาษี | WHT | N | * เพิ่มจากธุรกรรม Online Payment |
| previousTransactionType | String | รายการธุรกรรมเดิมก่อนจ่ายใหม่ | APU | N | * เพิ่มจากธุรกรรม เช็คคืน จ่ายใหม่ |
| previousbatchOperNo | String | Batch Number ฝ่ายปฎิบัติการเดิมก่อนจ่ายใหม่ | CP-TB-CLN-20220325-00001 | N | * เพิ่มจากธุรกรรม เช็คคืน จ่ายใหม่ |
| accountPayable (groupPaytype) | String |   | COM --> ACWAGT --> APASPL --> APSTRA --> APT | N | * เพิ่มจากธุรกรรม Manual : G3 จ่ายตัวแทน |
| manualCode | String |   | MO0003 Click here to expand... manualCodeps_event_name (manual_oper_display_name)event_codegroup_pay_typeMO0003จ่ายคอม (Agent ของ Alt1)ALT_MFN_01COM (เจ้าหนี้-ค่าจ้างค่าบำเหน็จ)MO0004โบนัส-เก็บใบคำขอ (OV) (Agent ของ Alt1)ALT_MFN_02MO0008จ่ายคอม (Agent ของ Partner)ALT_MFN_03MO0009จ่ายคอม & Sale Promotion (Worksite)ALT_MFN_04MO0010จ่ายคอม & Sale Promotion (Agent-OLI) : ตัวแทนและพนักงานขายALT_MFN_05MO0307จ่าย Commission & Sale Promotion (Agent ของ Alt1)ALT_MFN_14MO0048จ่ายรายได้ตัวแทนเพิ่มเติมINC_MFN_02MO0268จ่ายรายได้ LC รายเดือนINC_MFN_04MO0282ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทนCOL_FIN_01MO0294ถอนเงินค้ำประกัน เพื่อโอนให้ทายาทCOL_FIN_01MO0322จ่ายรายได้ตัวแทนรายวันINC_MFN_06MO0283ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทน_จ่ายใหม่COL_FIN_02AGT (เจ้าหนี้ตัวแทน)MO0185จ่ายรายได้ตัวแทน จ่ายใหม่ที่ สนญ.INC_MFN_01MO0269จ่ายค่าบริการรายเดือน SP LifeALT_MFN_10SPL (เจ้าหนี้ - SP Life)MO0271จ่ายค่าบริการสำหรับการดำเนินการ SP LifeALT_MFN_11MO0277ตั้งจ่ายคืนค่าบำเหน็จ ธกส.เนื่องจากมีใบคำขอกลับมาทำใหม่INC_MFN_05TRA (เจ้าหนี้การค้า) | N | * เพิ่มจากธุรกรรม Manual : G3 จ่ายตัวแทน |
| manualCode | ps_event_name (manual_oper_display_name) | event_code | group_pay_type |
| MO0003 | จ่ายคอม (Agent ของ Alt1) | ALT_MFN_01 | COM (เจ้าหนี้-ค่าจ้างค่าบำเหน็จ) |
| MO0004 | โบนัส-เก็บใบคำขอ (OV) (Agent ของ Alt1) | ALT_MFN_02 |
| MO0008 | จ่ายคอม (Agent ของ Partner) | ALT_MFN_03 |
| MO0009 | จ่ายคอม & Sale Promotion (Worksite) | ALT_MFN_04 |
| MO0010 | จ่ายคอม & Sale Promotion (Agent-OLI) : ตัวแทนและพนักงานขาย | ALT_MFN_05 |
| MO0307 | จ่าย Commission & Sale Promotion (Agent ของ Alt1) | ALT_MFN_14 |
| MO0048 | จ่ายรายได้ตัวแทนเพิ่มเติม | INC_MFN_02 |
| MO0268 | จ่ายรายได้ LC รายเดือน | INC_MFN_04 |
| MO0282 | ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทน | COL_FIN_01 |
| MO0294 | ถอนเงินค้ำประกัน เพื่อโอนให้ทายาท | COL_FIN_01 |
| MO0322 | จ่ายรายได้ตัวแทนรายวัน | INC_MFN_06 |
| MO0283 | ถอนเงินค้ำทั้งหมดหรือบางส่วน จ่ายตัวแทน_จ่ายใหม่ | COL_FIN_02 | AGT (เจ้าหนี้ตัวแทน) |
| MO0185 | จ่ายรายได้ตัวแทน จ่ายใหม่ที่ สนญ. | INC_MFN_01 |
| MO0269 | จ่ายค่าบริการรายเดือน SP Life | ALT_MFN_10 | SPL (เจ้าหนี้ - SP Life) |
| MO0271 | จ่ายค่าบริการสำหรับการดำเนินการ SP Life | ALT_MFN_11 |
| MO0277 | ตั้งจ่ายคืนค่าบำเหน็จ ธกส.เนื่องจากมีใบคำขอกลับมาทำใหม่ | INC_MFN_05 | TRA (เจ้าหนี้การค้า) |
| vendorCode | String |   |   | N | * เพิ่มจากธุรกรรม Manual : G3 จ่ายตัวแทน |
| **ข้อมูลเอกสาร List[]** |
| documentName | String | ชื่อเอกสาร | เอกสาร.pdf | N | กรณีมีข้อมูลเอกสาร ต้องมีข้อมูลทั้ง 4 รายการ |
| dmsDocId | Numeric | รหัสอ้างอิงระบบ DMS | 1 | N |
| documentUploadDate | String | วันและเวลาที่อัปโหลดเอกสาร | 2025-08-01 08:00:00 | N |
| documentUploadBy | String | ผู้อัปโหลดเอกสาร | ariya.pi | N |
| List <PaymentDetail> |   |   |   |   |   |

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **PaymentDetail[]** |
| operRefNo | String | รหัสอ้างอิงข้อมูลการจ่ายจาก CenPay | 1 | Y |   |
| paymentDashboardId | Numeric | รหัสข้อมูล edw dashboard | 1 | N |   |
| paymentChannel | String | ช่องทางการจ่ายเงิน | โอนพร้อมเพย์ | Y |   |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | Y |   |
| paymentDueDate | Date | วันที่ครบกำหนดรับเงิน | 20250801 | N |   |
| payeeShortTitle | String | คำนำหน้า แบบย่อ | น.ส. | N | **ธุรกรรม ctax ไม่มีคำนำหน้า** |
| payeeFirstName | String | ชื่อผู้รับเงิน | ไทยสมุทร | Y |   |
| payeeLastName | String | นามสกุลผู้รับเงิน | ประกันชีวิต | N |   |
| hospitalName | String | ชื่อสถานพยาบาล | ศิริราช | N |   |
| mobileNo | String | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS | 0812345678 | N | *Ph3 ธุรกรรมรับฝากไม่มีข้อมูล* |
| bankId | Numeric | รหัสธนาคาร | 1 | N |   |
| bankName | String | ชื่อธนาคาร (ภาษาไทย) | กสิกรไทย | N |   |
| bankAbbrName | String | รหัสตัวย่อธนาคาร | KBANK | N |   |
| botBankCode | String | รหัสมาตรฐานธนาคาร | 0004 | N |   |
| bankAccountNo | String | เลขที่บัญชี | 11122233333 | N |   |
| bankBranch | String | สาขาธนาคาร | อโศก | N |   |
| promptpayType | String | ประเภทการโอนพร้อมเพย์ | I - ID CardM - Mobile | N |   |
| promptpayNo | String | เลขพร้อมเพย์ | 1100100010001 | N |   |
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
| agentCode | String | รหัสตัวแทน | 1234 | N |   |
| vendorCode | String | รหัส Vendor | C0100393 | N |   |
| taxCode | String | รหัสภาษี | 53CWJ03 | N |   |

## Process

**เงื่อนไข**
ตรวจสอบ [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).batch_oper_no = input.batchOperNo ยังไม่มีข้อมูล ให้ Insert ข้อมูลดังนี้

| No | Table | Mapping Field |
|---|---|---|
|   | Insert data table : [tx_payment_header](/display/RDSCPENH/tx_payment_header) | 1. บันทึกข้อมูลตาราง Header ระดับ Batch ปฎิบัติการตรวจสอบ [tx_payment_header](/display/RDSCPENH/tx_payment_header).batch_oper_no = input.batchOperNo ยังไม่มีข้อมูลInsert ข้อมูลจาก Input ที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) โดยตรวจสอบรายการ Transaction ภายใต้ Batch กรณีมีรายการ Transaction ที่ยอดเงินมากกว่า 2 ล้าน (PaymentDetail.amount) และมีจำนวนรายการมากกว่า 1 รายการบันทึกสถานะ Batch เป็น Batch Split ([tx_payment_header](/display/RDSCPENH/tx_payment_header).status = BAS — updated by patcha 08/06/69)Insert ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) โดยแยกรายการที่มีจำนวนเงินเกิน 2 ล้าน และรายการอื่นๆที่ไม่เกิน 2 ล้านfieldmapping databatch_oper_noสร้างเลข Batch ปฎิบัติการ ที่เป็นรายการ Split **กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-20เลข Batch ปฎิบัติการ-CP-TB-20250904-0000121Underscoreแทน Space_22Sequence numberลำดับรายการที่ Split123Dashขีดคั่น-24Total Split Batchจำนวนรายการทั้งหมดที่ถูก Split Batch2ผลลัพธ์ CP-TB-20250904-00001_1-2payment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).idstatusPEN - รอยืนยันกรณีไม่มีรายการที่ยอดเงินมากกว่า 2 ล้าน หรือมีจำนวนรายการ 1 รายการบันทึกสถานะ Batch เป็น รอยืนยัน ([tx_payment_header](/display/RDSCPENH/tx_payment_header).status = PEN) 2. บันทึกข้อมูลตาราง Detail ระดับ Transaction Insert ข้อมูลจาก Input ที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) ตามข้อมูล Input และกำหนดข้อมูลให้ field ดังนี้filedmapping databatch_header_split_idกรณีมีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).idกรณีไม่มีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = Nulltransaction_noGenerate Running ตาม pattern transaction_no ที่ [cf_running_pattern](/display/RDSCPENH/cf_running_pattern)statusWCF - รอยืนยันทำจ่าย (ฝ่ายการเงิน)agent_codeinput. agentCodevendor_codeinput. vendorCodetax_codeinput. taxCodeตัวอย่างข้อมูล [Temp DB#1](https://docs.google.com/spreadsheets/d/1ngobyAQW-TSoGQ40_5_4ytciVhs-roPMrSqLS0V0lC0/edit?gid=1799762721#gid=1799762721) |
| field | mapping data |
| batch_oper_no | สร้างเลข Batch ปฎิบัติการ ที่เป็นรายการ Split **กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-20เลข Batch ปฎิบัติการ-CP-TB-20250904-0000121Underscoreแทน Space_22Sequence numberลำดับรายการที่ Split123Dashขีดคั่น-24Total Split Batchจำนวนรายการทั้งหมดที่ถูก Split Batch2ผลลัพธ์ CP-TB-20250904-00001_1-2 |
| ตำแหน่ง | ข้อมูล | เงื่อนไข | ตัวอย่าง |
| 1-20 | เลข Batch ปฎิบัติการ | - | CP-TB-20250904-00001 |
| 21 | Underscore | แทน Space | _ |
| 22 | Sequence number | ลำดับรายการที่ Split | 1 |
| 23 | Dash | ขีดคั่น | - |
| 24 | Total Split Batch | จำนวนรายการทั้งหมดที่ถูก Split Batch | 2 |
| payment_header_id | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |
| status | PEN - รอยืนยัน |
| filed | mapping data |
| batch_header_split_id | กรณีมีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).idกรณีไม่มีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = Null |
| transaction_no | Generate Running ตาม pattern transaction_no ที่ [cf_running_pattern](/display/RDSCPENH/cf_running_pattern) |
| status | WCF - รอยืนยันทำจ่าย (ฝ่ายการเงิน) |
| agent_code | input. agentCode |
| vendor_code | input. vendorCode |
| tax_code | input. taxCode |
|   | Insert data table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)Insert data table : [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) |
|   | Insert data table : [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document) | นำข้อมูลจาก input. document มาบันทึก Insert ข้อมูลจาก Input ที่ตาราง [tx_document](/display/RDSCPENH/tx_document)filedmapping datapayment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).iddoc_codeFix : Attachment_Source - เอกสารแนบจากต้นทางdms_doc_idinput. dmsDocIddoc_nameinput. documentNamedocument_upload_dateinput. documentUploadDatetemplate_codeNULLsource_typeตรวจสอบ transactionGrouptransactionGroupsource_typeEP,EFOPEREECTAXEHCSEDINCOMEECDEPOSITEIRIOPOPAYseq_noFix : 1active_statusFix : Ycreated_by*** ปรับเพิ่ม R1 โดย ariya.pi เมื่อ 10/02/2569** input.documentUploadBy |
| filed | mapping data |
| payment_header_id | [tx_payment_header](/display/RDSCPENH/tx_payment_header).id |
| doc_code | Fix : Attachment_Source - เอกสารแนบจากต้นทาง |
| dms_doc_id | input. dmsDocId |
| doc_name | input. documentName |
| document_upload_date | input. documentUploadDate |
| template_code | NULL |
| source_type | ตรวจสอบ transactionGrouptransactionGroupsource_typeEP,EFOPEREECTAXEHCSEDINCOMEECDEPOSITEIRIOPOPAY |
| transactionGroup | source_type |
| EP,EF | OPER |
| EE | CTAX |
| EH | CS |
| ED | INCOME |
| EC | DEPOSIT |
| EI | RI |
| OP | OPAY |
| seq_no | Fix : 1 |
| active_status | Fix : Y |
| created_by | *** ปรับเพิ่ม R1 โดย ariya.pi เมื่อ 10/02/2569** input.documentUploadBy |
|   | ทุกตาราง | fieldconditioncreated_dateinput. approvedDatecreated_byinput. approvedBy |
| field | condition |
| created_date | input. approvedDate |
| created_by | input. approvedBy |

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

<![CDATA[{ &quot;batchOperNo&quot;: &quot;CP-TB-CLN-20260716-93001&quot;, &quot;transactionGroup&quot;: &quot;ED&quot;, &quot;transactionType&quot;: &quot;CMA&quot;, &quot;paymentChannel&quot;: &quot;COM&quot;, &quot;accReferenceNo&quot;: &quot;EG256804090001&quot;, &quot;requestPaymentDate&quot;: &quot;2026-07-16&quot;, &quot;totalTransaction&quot;: 2, &quot;totalAmount&quot;: 2510000.00, &quot;approvedBy&quot;: &quot;patcharat.vo&quot;, &quot;approvedDate&quot;: &quot;2026-07-16&quot;, &quot;tax&quot;: &quot;WHT&quot;, &quot;previousTransactionType&quot;: null, &quot;previousbatchOperNo&quot;: null, &quot;accountPayable&quot;: &quot;COM&quot;, &quot;manualCode&quot;: &quot;MO0003&quot;, &quot;vendorCode&quot;: &quot;C0100393&quot;, &quot;documentList&quot;: [ { &quot;documentName&quot;: &quot;เอกสาร.pdf&quot;, &quot;dmsDocId&quot;: &quot;1&quot;, &quot;documentUploadDate&quot;: &quot;2026-07-16T08:00:00&quot;, &quot;documentUploadBy&quot;: &quot;ariya.pi&quot; } ], &quot;paymentDetails&quot;: [ { &quot;operRefNo&quot;: &quot;1&quot;, &quot;paymentChannel&quot;: &quot;COM&quot;, &quot;requestPaymentDate&quot;: &quot;2026-07-16&quot;, &quot;payeeShortTitle&quot;: &quot;น.ส.&quot;, &quot;payeeFirstName&quot;: &quot;ไทยสมุทร&quot;, &quot;payeeLastName&quot;: &quot;ประกันชีวิต&quot;, &quot;amount&quot;: 2500000.00, &quot;grossAmount&quot;: 2500000.00, &quot;whtAmount&quot;: 0.00, &quot;agentCode&quot;: &quot;1234&quot;, &quot;vendorCode&quot;: &quot;C0100393&quot;, &quot;taxCode&quot;: &quot;53CWJ03&quot; }, { &quot;operRefNo&quot;: &quot;2&quot;, &quot;paymentChannel&quot;: &quot;COM&quot;, &quot;requestPaymentDate&quot;: &quot;2026-07-16&quot;, &quot;payeeShortTitle&quot;: &quot;น.ส.&quot;, &quot;payeeFirstName&quot;: &quot;ประกันชีวิต&quot;, &quot;payeeLastName&quot;: &quot;ไทยสมุทร&quot;, &quot;amount&quot;: 10000.00, &quot;grossAmount&quot;: 10000.00, &quot;whtAmount&quot;: 0.00, &quot;agentCode&quot;: &quot;5678&quot; } ] }]]>
<![CDATA[{ &quot;data&quot;: null, &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

---

## Hyperlinks บนหน้านี้

- [ochi.land@gmail.com](http://wiki.thaisamut.co.thmailto:ochi.land@gmail.com)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern)
- [Temp DB#1](https://docs.google.com/spreadsheets/d/1ngobyAQW-TSoGQ40_5_4ytciVhs-roPMrSqLS0V0lC0/edit?gid=1799762721#gid=1799762721)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
