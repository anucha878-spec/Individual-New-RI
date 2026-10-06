# 06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment

- **Page ID:** 1337720992
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337720992
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment
- **Depth:** 4

---

[ [Overview](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Overview) ] [ [Protocol](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Protocol) ] [ [Operation](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Operation) ] [ [Input](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Input) ] [ [Process](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Process) ] [ [`Output`](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-Output) ] [ [Example Input & Output](#id-06WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมOnlinePayment-ExampleInput&Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่ออัปเดตสถานะรายการจ่ายที่ระบบ Cenpay
**Service path**
**POST:**[/thaisamut/rs/paymentmg/v1/payment/online-payment/landing](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/paymentmg/onlinePaymentLanding)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | Remark |
|---|---|---|---|---|---|
| batchOperNo | String | Batch Number ฝ่ายปฎิบัติการ | ระบบ CenPayCP-TB-CLN-20220325-00001CSCSDEA26010100001 | Y |   |
| ระบบ |   |
| CenPay | CP-TB-CLN-20220325-00001 |
| CS | CSDEA26010100001 |
| transactionGroup | String | กลุ่มธุรกรรม | EG | Y |   |
| transactionType | String | รายการธุรกรรม | APU | Y |   |
| paymentChannel | String | ช่องทางการจ่ายเงิน | TRN | Y |   |
| accReferenceNo | String | Reference Number ฝ่ายบัญชี | EG256804090001 | YN | * ธุรกรรมรับฝากไม่มีการบันทึกบัญชี updated by patcha.vo 13/02/2569 |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | N |   |
| totalTransaction | Numeric | จำนวนรายการรวม | 2 | Y |   |
| totalAmount | Numeric | จำนวนเงินรวม | 3,000,000.00 | Y |   |
| approvedBy | String | ชื่อผู้อนุมัติจากหน่วยงานต้นทาง | patcharat.vo | Y |   |
| approvedDate | Date | วันที่อนุมัติข้อมูลการจ่ายจากหน่วยงานต้นทาง | 20250801 | Y |   |
| tax | String | ประเภทการจ่ายภาษี | WHT | N | * เพิ่มจากธุรกรรม Online Payment updated by patcha.vo 18/08/2569 |
| previousTransactionType | String | รายการธุรกรรมเดิมก่อนจ่ายใหม่ | APU | N | * เพิ่มจากธุรกรรม เช็คคืน จ่ายใหม่ patcha.vo 25/06/2569 |
| previousbatchOperNo | String | Batch Number ฝ่ายปฎิบัติการเดิมก่อนจ่ายใหม่ | CP-TB-CLN-20220325-00001 | N | * เพิ่มจากธุรกรรม เช็คคืน จ่ายใหม่ patcha.vo 25/06/2569 |
| List <PaymentDetail> |   |   |   |   |   |

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| operRefNo | String | รหัสอ้างอิงข้อมูลการจ่ายจาก CenPay | 1 | Y |   |
| paymentDashboardId | Numeric | รหัสข้อมูล edw dashboard | 1 | YN | Cenpay Ph3 G15 Edited by jitin.kh |
| transactionGroup | String | กลุ่มธุรกรรม | ผลประโยชน์ | Y |   |
| transactionType | String | รายการธุรกรรม | เงินจ่ายคืนทันที | Y |   |
| paymentChannel | String | ช่องทางการจ่ายเงิน | โอนพร้อมเพย์ | Y |   |
| requestPaymentDate | Date | วันที่ Request จ่ายเงิน | 20250801 | Y |   |
| paymentDueDate | Date | วันที่ครบกำหนดรับเงิน | 20250801 | YN | Cenpay Ph3 G15 Edited by jitin.kh |
| payeeShortTitle | String | คำนำหน้า แบบย่อ | น.ส. | YN | *ธุรกรรม ctax ไม่มีคำนำหน้า updated by patcha.vo 22/05/69 |
| payeeFirstName | String | ชื่อผู้รับเงิน | ไทยสมุทร | Y |   |
| payeeLastName | String | นามสกุลผู้รับเงิน | ประกันชีวิต | N |   |
| hospitalName | String | ชื่อสถานพยาบาล | ศิริราช | N |   |
| mobileNo | NumericString | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS | 0812345678 | YN | *Ph3 ธุรกรรมรับฝากไม่มีข้อมูล updated by patcha.vo 29/04/2569* updated by patcha.vo 18/06/2569 |
| bankId | Numeric | รหัสธนาคาร | 1 | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** |
| bankName | String | ชื่อธนาคาร (ภาษาไทย) | กสิกรไทย | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** |
| bankAbbrName | String | รหัสตัวย่อธนาคาร | KBANK | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** |
| botBankCode | NumericString | รหัสมาตรฐานธนาคาร | 0004 | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** * updated by patcha.vo 18/06/2569 |
| bankAccountNo | String | เลขที่บัญชี | 11122233333 | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** |
| bankBranch | String | สาขาธนาคาร | อโศก | N | **กรณีช่องทางการจ่ายเป็นโอนเงิน ให้มีข้อมูลเสมอ** |
| promptpayType | String | ประเภทการโอนพร้อมเพย์ | I - ID CardM - Mobile | N |   |
| promptpayNo | NumericString | เลขพร้อมเพย์ | 1100100010001 | N | * updated by patcha.vo 18/06/2569 |
| creditCardNo | Numeric | เลขที่บัตรเครดิต | 1234567890123456 | N |   |
| amount | Numeric | จำนวนเงิน | 5,000.00 | N |   |
| grossAmount | Numeric | Gross Amount | 5,000.00 | N |   |
| whtAmount | Numeric | WHT Amount | 5,000.00 | N |   |
| taxName | String | ชื่อผู้เสียภาษี | บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด | N |   |
| taxAddress1 | String | ที่อยู่ 1 | 5/1 ถ.มิตรภาพ ต.หนองสาหร่าย อ.ปากช่อง | N |   |
| taxAddress2 | String | ที่อยู่ 2 | จ.นครราชสีมา 30130 | N |   |
| taxNo | NumericString | เลขที่ผู้เสียภาษี | 0305535001462 | N | * updated by patcha.vo 18/06/2569 |
| taxType | String | ประเภทภาษี | whtTypetaxTypedescription11 กภ.ง.ด. 1 ก (Phor.Ngor.Dor.1 Kor)21 ก พิเศษภ.ง.ด. 1 ก พิเศษ (Phor.Ngor.Dor.1 Kor Special)32ภ.ง.ด. 2 (Phor.Ngor.Dor 2)43ภ.ง.ด. 3 (Phor.Ngor.Dor 3)52 กภ.ง.ด. 2 ก (Phor.Ngor.Dor.2 Kor)63 กภ.ง.ด. 3 ก (Phor.Ngor.Dor.3 Kor)753ภ.ง.ด. 53 (Phor.Ngor.Dor.53) | N |   |
| whtType | taxType | description |
| 1 | 1 ก | ภ.ง.ด. 1 ก (Phor.Ngor.Dor.1 Kor) |
| 2 | 1 ก พิเศษ | ภ.ง.ด. 1 ก พิเศษ (Phor.Ngor.Dor.1 Kor Special) |
| 3 | 2 | ภ.ง.ด. 2 (Phor.Ngor.Dor 2) |
| 4 | 3 | ภ.ง.ด. 3 (Phor.Ngor.Dor 3) |
| 5 | 2 ก | ภ.ง.ด. 2 ก (Phor.Ngor.Dor.2 Kor) |
| 6 | 3 ก | ภ.ง.ด. 3 ก (Phor.Ngor.Dor.3 Kor) |
| 7 | 53 | ภ.ง.ด. 53 (Phor.Ngor.Dor.53) |
| whtType | String | WHT Form Type |   | N |   |
| whtRate | Numeric | อัตราภาษีหัก ณ ที่จ่าย | 10 | N |   |
| invoiceNo | String | เลขที่ใบ Invoice | A1 | N |   |
| email | String | Email | [ochi.land@gmail.com](mailto:ochi.land@gmail.com) | N |   |
| **ข้อมูลกรมธรรม์** |
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
| branchSourceCode | NumericString | รหัสสาขาต้นสังกัด | 0116 | N | * updated by patcha.vo 18/06/2569 |
| branchRegisterCode | NumericString | รหัสสาขารับเรื่อง | 0116 | N | * updated by patcha.vo 18/06/2569 |
| branchServiceCode | NumericString | รหัสสาขาบริการ | 0116 | N | * updated by patcha.vo 18/06/2569 |
| channelCode | NumericString | รหัสช่องทางการขาย | 5075600 | N |   |
| cardNo | String | เลขที่บัตร | 1100567893455 | N | * added by patcha.vo 10/02/2569 |
| cardType | String | ประเภทบัตร | I | N | * added by patcha.vo 10/02/2569 |
| policyStartDate | String | วันที่เริ่มสัญญา | 2026-01-01 | N | *Ph3 added by patcha.vo 30/04/69 ธุรกรรมจาก CS |
| paymentMode | Numeric | โหมดชำระเบี้ย | 1 | N | *Ph3 added by patcha.vo 30/04/69 ธุรกรรมจาก CS |
| premiumAnnualAmount | Numeric | เบี้ยประกันรายปีของกรมธรรม์ | 1,000.00 | N | *Ph3 added by patcha.vo 30/04/69 ธุรกรรมจาก CS |
| premiumModeAmount | Numeric | เบี้ยประกันรายโหมดของกรมธรรม์ | 1,000.00 | N | *Ph3 added by patcha.vo 22/06/69 ธุรกรรมจาก CS[https://redmine.ochi.link/issues/80607](https://redmine.ochi.link/issues/80607) |
| **ข้อมูลเอกสาร List[]** |
| documentName | String | ชื่อเอกสาร | เอกสาร.pdf | N |   |
| dmsDocId | Numeric | รหัสอ้างอิงระบบ DMS | 1 | N |   |
| documentUploadDate | String | วันและเวลาที่อัปโหลดเอกสาร | 2025-08-01 08:00:00 | N |   |
| documentUploadBy | String | ผู้อัปโหลดเอกสาร | ariya.pi | N | *** ปรับเพิ่ม R1 โดย ariya.pi เมื่อ 10/02/2569** |

เพิ่ม Input ดังนี้

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **opay List[]** |
| voucherNoWht | String | Voucher รายการหักภาษี ณ ที่จ่าย | WHT2023009-0031 | N | updated by patcha.vo 29/06/69 |
| apVoucher | Numeric | Voucher AP | AP2025003-001 | N |   |
| accCode | String | รหัสเจ้าหนี้จ่ายพนักงาน หรือ AP Code ของร้านค้า | C0100028 | Y | updated by patcha.vo 13/07/69 |
| taxCode | String | รหัสภาษี | Nov7 | N | updated by patcha.vo 29/06/69 |
| requestNo | String | เลขที่ใบคำขอ | OP20250901001 | Y |   |
| requestType | String | ประเภทใบคำขอ | เบิกค่าใช้จ่ายพนักงาน | Y | add by patcha.vo 12/06/69 |
| payDetail | String | รายละเอียดการเบิก | - | N | add by patcha.vo 16/06/69 |

| Name | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **supplier List[] — add by patcha.vo 12/06/69** |
| supplierCode | String | รหัส Supplier | - | N |   |
| supplierName | String | ชื่อ Supplier | - | N |   |
| address1 | String | ที่อยู่ | - | N |   |
| address2 | String | ที่อยู่ | - | N |   |
| taxNo | String | เลขที่ผู้เสียภาษี | - | N |   |
| taxCode | String | รหัสภาษี | NIV7 (T10) |   |   |
| taxType | String | ประเภทภาษี | whtTypetaxTypedescription11 กภ.ง.ด. 1 ก (Phor.Ngor.Dor.1 Kor)21 ก พิเศษ ภ.ง.ด. 1 ก พิเศษ (Phor.Ngor.Dor.1 Kor Special)32 ภ.ง.ด. 2 (Phor.Ngor.Dor 2)43ภ.ง.ด. 3 (Phor.Ngor.Dor 3)52 กภ.ง.ด. 2 ก (Phor.Ngor.Dor.2 Kor)63 กภ.ง.ด. 3 ก (Phor.Ngor.Dor.3 Kor)753 ภ.ง.ด. 53 (Phor.Ngor.Dor.53) | N |   |
| whtType | taxType | description |
| 1 | 1 ก | ภ.ง.ด. 1 ก (Phor.Ngor.Dor.1 Kor) |
| 2 | 1 ก พิเศษ | ภ.ง.ด. 1 ก พิเศษ (Phor.Ngor.Dor.1 Kor Special) |
| 3 | 2 | ภ.ง.ด. 2 (Phor.Ngor.Dor 2) |
| 4 | 3 | ภ.ง.ด. 3 (Phor.Ngor.Dor 3) |
| 5 | 2 ก | ภ.ง.ด. 2 ก (Phor.Ngor.Dor.2 Kor) |
| 6 | 3 ก | ภ.ง.ด. 3 ก (Phor.Ngor.Dor.3 Kor) |
| 7 | 53 | ภ.ง.ด. 53 (Phor.Ngor.Dor.53) |
| whtType | Varchar | WHT Form Type |   | N |   |
| whtRate | Numeric | อัตราภาษีหัก ณ ที่จ่าย | 10 | N |   |
| grossAmount | Numeric | ยอดเงินก่อนหักภาษี | 10,000.00 | N |   |
| whtAmount | Numeric | ยอดเงินภาษี | 10,000.00 | N |   |

## Process

**เงื่อนไข**
1. บันทึกข้อมูลตาราง Header ระดับ Batch ปฎิบัติการ
- ตรวจสอบ [tx_payment_header](/display/RDSCPENH/tx_payment_header).batch_oper_no = input.batchOperNo ยังไม่มีข้อมูล
- Insert ข้อมูลจาก Input ที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) โดยตรวจสอบรายการ Transaction ภายใต้ Batch
  1. กรณีมีรายการ Transaction ที่ยอดเงินมากกว่า 2 ล้าน (PaymentDetail.amount) และมีจำนวนรายการมากกว่า 1 รายการ
    1. บันทึกสถานะ Batch เป็น Batch Split ([tx_payment_header](/display/RDSCPENH/tx_payment_header).status = BAS — updated by patcha 08/06/69)
    2. Insert ข้อมูลที่ตาราง [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split) โดยแยกรายการที่มีจำนวนเงินเกิน 2 ล้าน และรายการอื่นๆที่ไม่เกิน 2 ล้านfieldmapping databatch_oper_noสร้างเลข Batch ปฎิบัติการ ที่เป็นรายการ Split **กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**ตำแหน่งข้อมูลเงื่อนไขตัวอย่าง1-20เลข Batch ปฎิบัติการ-CP-TB-20250904-0000121Underscoreแทน Space_22Sequence numberลำดับรายการที่ Split123Dashขีดคั่น-24Total Split Batchจำนวนรายการทั้งหมดที่ถูก Split Batch2ผลลัพธ์ CP-TB-20250904-00001_1-2payment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).idstatusPEN - รอยืนยัน
  2. กรณีไม่มีรายการที่ยอดเงินมากกว่า 2 ล้าน หรือมีจำนวนรายการ 1 รายการ
    1. บันทึกสถานะ Batch เป็น รอยืนยัน ([tx_payment_header](/display/RDSCPENH/tx_payment_header).status = PEN)
2. บันทึกข้อมูลตาราง Detail ระดับ Transaction
- Insert ข้อมูลจาก Input ที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) ตามข้อมูล Input และกำหนดข้อมูลให้ field ดังนี้filedmapping databatch_header_split_idกรณีมีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = [tx_payment_header_split](/display/RDSCPENH/tx_payment_header_split).idกรณีไม่มีการ Split Batch ให้บันทึก [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_header_split_id = Nulltransaction_noGenerate Running ตาม pattern transaction_no ที่ [cf_running_pattern](/display/RDSCPENH/cf_running_pattern)statusWCF - รอยืนยันทำจ่าย (ฝ่ายการเงิน)
- Insert ข้อมูลจาก Input ที่ตาราง [tx_policy_detail](/display/RDSCPENH/tx_policy_detail) ตามข้อมูล Input ข้อมูลกรมธรรม์
- ตัวอย่างข้อมูล [Temp DB#1](https://docs.google.com/spreadsheets/d/1ngobyAQW-TSoGQ40_5_4ytciVhs-roPMrSqLS0V0lC0/edit?gid=1799762721#gid=1799762721)
3. บันทึกข้อมูลตารางเอกสาร ระดับ Transaction
- Insert ข้อมูลจาก Input ที่ตาราง [tx_document](/display/RDSCPENH/tx_document)filedmapping datapayment_header_id[tx_payment_header](/display/RDSCPENH/tx_payment_header).idbatch_payment_idNULLpayment_detail_id[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).iddoc_codeFix : Attachment_Source - เอกสารแนบจากต้นทางdms_doc_idinput.dmsDocIddoc_nameinput.documentNamedocument_upload_dateinput.documentUploadDatetemplate_code NULLsource_typeตรวจสอบ transactionGroup edit by patcha.vo 06/05/69transactionGroupsource_typeEP,EFOPEREECTAXEHCSEDINCOMEECDEPOSITEIRIOPOPAYseq_noFix : 1active_statusFix : Ycreated_by*** ปรับเพิ่ม R1 โดย ariya.pi เมื่อ 10/02/2569** input.documentUploadBy
4. บันทึกข้อมูล online payment
กรณีไม่มีข้อมูลจาก opay list ไม่ต้อง insert ข้อมูล – updated by patcha.vo 12/06/69
4.1 ที่ได้จาก **opay List[]**ที่ตาราง [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction)

| No. | Attribute Name | Description | Mapping Data | remark |
|---|---|---|---|---|
| 1 | id | เลขที่ running | generate running id |   |
| 2 | payment_detail_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id ที่ได้จากข้อ 2 |   |
| 3 | voucher_no_wht | Voucher รายการหักภาษี ณ ที่จ่าย | voucherNoWht |   |
| 4 | ap_voucher | Voucher AP | apVoucher |   |
| 5 | acc_code | รหัสเจ้าหนี้จ่ายพนักงาน | accCode |   |
| 6 | tax_code | รหัสภาษี | taxCode |   |
| 7 | request_no | เลขที่ใบคำขอ | requestNo |   |
| 8 | request_type | ประเภทใบคำขอ | requestType | updated by patcha.vo 12/06/6 |
| 9 | pay_detail | รายละเอียดการเบิก | payDetail | updated by patcha.vo 16/06/6 |
|   | created_date | วันที่สร้างรายการ | systemDate |   |
|   | created_by | ผู้สร้างรายการ | Fix : 'System' |   |
|   | updated_date | วันที่แก้ไขรายการล่าสุด | NULL |   |
|   | updated_by | ผู้แก้ไขรายการล่าสุด | NULL |   |

4.2 ที่ได้จาก **supplier List[]******ที่ตาราง [tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier) – updated by patcha.vo 12/06/69

| No | Attribute Name | Description | Mapping Data |
|---|---|---|---|
| 1 | id | เลขที่ running | generate running id |
| 2 | opay_transaction_id | รหัสอ้างอิงตาราง [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction) | [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction).id |
| 3 | supplier_code | รหัส Supplier | supplier List[] .****supplierCode |
| 4 | supplier_name | ชื่อ Supplier | supplier List[] . supplierName |
| 5 | address1 | ที่อยู่ | supplier List[] . address1 |
| 6 | address2 | ที่อยู่ | supplier List[] . address2 |
| 7 | tax_no | เลขที่ผู้เสียภาษี | supplier List[] . taxNo |
| 8 | tax_type | ประเภทภาษี | supplier List[] . taxType |
| 9 | tax_code | รหัสภาษี | supplier List[] . taxCode |
| 10 | wht_type | WHT Type | supplier List[] . whtType |
| 11 | wht_rate | อัตราภาษีหัก ณ ที่จ่าย | supplier List[] . whtRate |
| 12 | gross_amount | ยอดเงินก่อนหักภาษี | supplier List[] . grossAmount |
| 13 | wht_amount | ยอดเงินภาษี | supplier List[] . whtAmount |
|   | created_date | วันที่สร้างรายการ | systemDate |
|   | created_by | ผู้สร้างรายการ | Fix : 'System' |
|   | updated_date | วันที่แก้ไขรายการล่าสุด | NULL |
|   | updated_by | ผู้แก้ไขรายการล่าสุด | NULL |

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

<![CDATA[{ &quot;batchOperNo&quot;: &quot;CP-TB-CLN-20220325-99999&quot;, &quot;transactionGroup&quot;: &quot;EG&quot;, &quot;transactionType&quot;: &quot;APU&quot;, &quot;paymentChannel&quot;: &quot;PMP&quot;, &quot;accReferenceNo&quot;: &quot;EG256804090001&quot;, &quot;requestPaymentDate&quot;: &quot;2025-08-01&quot;, &quot;totalTransaction&quot;: 5, &quot;totalAmount&quot;: 9510001.00, &quot;approvedBy&quot;: &quot;test.te&quot;, &quot;approvedDate&quot;: &quot;2025-08-01&quot;, &quot;paymentDetails&quot;: [ { &quot;operRefNo&quot;: &quot;1&quot;, &quot;paymentDashboardId&quot;: null, &quot;transactionGroup&quot;: &quot;EG&quot;, &quot;transactionType&quot;: &quot;1&quot;, &quot;paymentChannel&quot;: &quot;PMP&quot;, &quot;requestPaymentDate&quot;: &quot;2025-08-01&quot;, &quot;paymentDueDate&quot;: null, &quot;payeeShortTitle&quot;: &quot;น.ส.&quot;, &quot;payeeFirstName&quot;: &quot;ไทยสมุทร&quot;, &quot;payeeLastName&quot;: &quot;ประกันชีวิต&quot;, &quot;hospitalName&quot;: &quot;ศิริราช&quot;, &quot;mobileNo&quot;: &quot;0812345678&quot;, &quot;bankId&quot;: 1, &quot;bankName&quot;: &quot;กสิกรไทย&quot;, &quot;bankAbbrName&quot;: &quot;KBANK&quot;, &quot;botBankCode&quot;: &quot;004&quot;, &quot;bankAccountNo&quot;: &quot;11122233333&quot;, &quot;bankBranch&quot;: &quot;อโศก&quot;, &quot;promptpayType&quot;: &quot;M&quot;, &quot;promptpayNo&quot;: &quot;1100100010001&quot;, &quot;creditCardNo&quot;: &quot;1234567890123456&quot;, &quot;amount&quot;: 5000.00, &quot;grossAmount&quot;: 5000.00, &quot;whtAmount&quot;: 5000.00, &quot;taxName&quot;: &quot;บริษัท โรงพยาบาลกรุงเทพราชสีมา จำกัด&quot;, &quot;taxAddress1&quot;: &quot;5/1 ถ.มิตรภาพ ต.หนองสาหร่าย อ.ปากช่อง&quot;, &quot;taxAddress2&quot;: &quot;จ.นครราชสีมา 30130&quot;, &quot;taxNo&quot;: &quot;0305535001462&quot;, &quot;taxType&quot;: &quot;53&quot;, &quot;whtType&quot;: &quot;64&quot;, &quot;whtRate&quot;: 1.0, &quot;invoiceNo&quot;: &quot;A1&quot;, &quot;email&quot;: &quot;ochi.land@gmail.com&quot;, &quot;policyNo&quot;: null, &quot;policyType&quot;: &quot;O&quot;, &quot;productCode&quot;: &quot;496&quot;, &quot;branchSourceCode&quot;: &quot;0116&quot;, &quot;branchRegisterCode&quot;: &quot;0116&quot;, &quot;branchServiceCode&quot;: &quot;0116&quot;, &quot;channelCode&quot;: &quot;5075600&quot;, &quot;opayList&quot; : [ { &quot;voucherNoWht&quot;: &quot;abcjbjs&quot;, &quot;apVoucher&quot;: &quot;dsdas&quot;, &quot;accCode&quot;: &quot;;saldl&quot;, &quot;taxCode&quot;: &quot;asdasd&quot;, &quot;requestNo&quot;: &quot;sadasd&quot; } ] } ] }]]>
<![CDATA[{ &quot;data&quot;: null, &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

---

## Hyperlinks บนหน้านี้

- [/thaisamut/rs/paymentmg/v1/payment/online-payment/landing](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/paymentmg/onlinePaymentLanding)
- [ochi.land@gmail.com](http://wiki.thaisamut.co.thmailto:ochi.land@gmail.com)
- [https://redmine.ochi.link/issues/80607](https://redmine.ochi.link/issues/80607)
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
- [tx_policy_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail)
- [Temp DB#1](https://docs.google.com/spreadsheets/d/1ngobyAQW-TSoGQ40_5_4ytciVhs-roPMrSqLS0V0lC0/edit?gid=1799762721#gid=1799762721)
- [tx_document](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_document)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
