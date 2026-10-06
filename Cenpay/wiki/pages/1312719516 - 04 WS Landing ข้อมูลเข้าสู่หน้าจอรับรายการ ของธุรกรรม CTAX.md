# 04 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม CTAX

- **Page ID:** 1312719516
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1312719516
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 04 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม CTAX
- **Depth:** 4

---

[ [Overview](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Overview) ] [ [Protocol](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Protocol) ] [ [Operation](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Operation) ] [ [Input](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Input) ] [ [Process](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Process) ] [ [`Output`](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-Output) ] [ [Example Input & Output](#id-04WSLandingข้อมูลเข้าสู่หน้าจอรับรายการของธุรกรรมCTAX-ExampleInput&Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่ออัปเดตสถานะรายการจ่ายที่ระบบ Cenpay
**Service path**
**POST:** [/thaisamut/rs/paymentmg/v1/payment/ctax/landing](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/paymentmg/landingCtax)

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

| **Name** | Type | Description | Example | Mandatory (Y/N) | Remark |
|---|---|---|---|---|---|
| **ctax List[]** |
| ctaxNo | String | รหัสอ้างอิงจากระบบ CTAX |   | Y |   |
| businessArea | Numeric | Business Area | 1970 | N |   |
| agentCode | String | รหัสตัวแทน | 4700061 | N | updated by patcha.vo 27/05/2569 |
| monthTax | String | เดือนที่ชำระภาษี | 06 | Y |   |
| yearTax | String | ปีที่ชำระภาษี | 2566 | Y |   |
| amount | Numeric | จำนวนเงิน | 5,000.00 | Y | added by patcha.vo 26/05/2569 |
| whtType | String | ประเภท ภงด | 3 | Y | added by patcha.vo 26/05/2569 |
| whtAmount | Numeric | WHT Amount | 5,000.00 | Y | added by patcha.vo 26/05/2569 |
| branchSourceCode | String | รหัสสาขาต้นสังกัด | 0116 | Y | added by patcha.vo 26/05/2569 |

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
4. บันทึกข้อมูล ctax transaction ที่ได้จาก ctax List[] ที่ตาราง [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction)

| No. | Attribute Name | Description | Mapping Data | Remark |
|---|---|---|---|---|
| 1 | id | เลขที่ running | generate running id |   |
| 2 | ctax_no | รหัสอ้างอิงจากระบบ CTAX | ctaxList[].ctaxNo | updated by patcha.vo 26/05/69 |
| 3 | payment_detail_id | รหัสอ้างอิงข้อมูลการจ่ายระดับ Batch ฝ่ายปฎิบัติการ | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id ที่ได้จากข้อ 2 |   |
| 4 | branch_code | รหัสสาขาต้นสังกัด | ctaxList[]**.**branchSourceCode | updated by patcha.vo 26/05/69 |
| 5 | ba_code | Business Area | ctaxList[]businessArea | updated by patcha.vo 26/05/69 |
| 6 | payment_date | วันที่จ่าย | requestPaymentDate |   |
| 7 | wht_type | ประเภท ภงด | ctaxList[]**.**whtType | updated by patcha.vo 26/05/69 |
| 8 | revenue_amount | เงินได้ทั้งสิ้น | ctaxList[]**.**amount | updated by patcha.vo 26/05/69 |
| 9 | wht_amount | ภาษีนำส่งทั้งสิ้น | ctaxList[]**.**whtAmount | updated by patcha.vo 26/05/69 |
| 10 | payment_channel | ช่องทางการจ่าย | transactionType |   |
| 11 | company_bank_account | เลขบัญชีธนาคารบริษัท | bankAccountNo |   |
| 12 | company_bank_account_name | ชื่อบัญชีธนาคารบริษัท | payeeFirstName |   |
| 13 | transfer_type | วิธีการจ่ายเงิน | paymentChannel |   |
| 14 | agent_code | รหัสตัวแทน | ctaxList[].agentCode | updated by patcha.vo 26/05/69 |
| 15 | created_date | วันที่สร้างรายการ | systemDate |   |
| 16 | created_by | ผู้สร้างรายการ | Fix : 'System' |   |
| 17 | updated_date | วันที่แก้ไขรายการล่าสุด | NULL |   |
| 18 | updated_by | ผู้แก้ไขรายการล่าสุด | NULL |   |
| 19 | month | เดือนที่ชำระภาษี | ctaxList[].monthTax | updated by patcha.vo 26/05/69 |
| 20 | year | ปีที่ชำระภาษี | ctaxList[].yearTax | updated by patcha.vo 26/05/69 |

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

<![CDATA[{ &quot;batchOperNo&quot;: &quot;CP-TB-CLN-20220325-66667&quot;, &quot;transactionGroup&quot;: &quot;EP&quot;, &quot;transactionType&quot;: &quot;TAX&quot;, &quot;paymentChannel&quot;: &quot;TRN&quot;, &quot;accReferenceNo&quot;: &quot;EG256804270011&quot;, &quot;requestPaymentDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;totalTransaction&quot;: 1, &quot;totalAmount&quot;: 800000.00, &quot;approvedBy&quot;: &quot;patcharat.vo&quot;, &quot;approvedDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;tax&quot;: &quot;Y&quot;, &quot;paymentDetails&quot;: [ { &quot;paymentHeaderId&quot;: 100001, &quot;paymentHeaderSplitId&quot;: 100001, &quot;transactionNo&quot;: &quot;TXN202604270001&quot;, &quot;operRefNo&quot;: &quot;CPAPU99090900651&quot;, &quot;paymentDashboardId&quot;: 1, &quot;transactionGroup&quot;: &quot;EG&quot;, &quot;transactionType&quot;: &quot;APU&quot;, &quot;paymentChannel&quot;: &quot;COM&quot;, &quot;requestPaymentDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;paymentDueDate&quot;: &quot;2026-04-30T00:00:00.000Z&quot;, &quot;payeeShortTitle&quot;: &quot;น.ส.&quot;, &quot;payeeFirstName&quot;: &quot;ไทยสมุทร&quot;, &quot;payeeLastName&quot;: &quot;ประกันชีวิต&quot;, &quot;hospitalName&quot;: null, &quot;mobileNo&quot;: &quot;0812345678&quot;, &quot;bankId&quot;: 0, &quot;bankName&quot;: &quot;&quot;, &quot;bankAbbrName&quot;: &quot;&quot;, &quot;botBankCode&quot;: &quot;066&quot;, &quot;bankAccountNo&quot;: &quot;0643014557&quot;, &quot;bankBranch&quot;: &quot;&quot;, &quot;promptpayType&quot;: &quot;I&quot;, &quot;promptpayNo&quot;: &quot;0812345678&quot;, &quot;creditCardNo&quot;: 0, &quot;amount&quot;: 800000.00, &quot;grossAmount&quot;: 800000.00, &quot;whtAmount&quot;: 80000.00, &quot;taxName&quot;: &quot;&quot;, &quot;taxAddress1&quot;: &quot;&quot;, &quot;taxAddress2&quot;: &quot;&quot;, &quot;taxNo&quot;: &quot;01234567890&quot;, &quot;taxType&quot;: &quot;&quot;, &quot;whtType&quot;: &quot;64&quot;, &quot;whtRate&quot;: 1.0, &quot;invoiceNo&quot;: &quot;&quot;, &quot;email&quot;: &quot;&quot;, &quot;createdDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;createdBy&quot;: &quot;system&quot;, &quot;updatedDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;updatedBy&quot;: &quot;system&quot;, &quot;policyNo&quot;: &quot;ข0181320&quot;, &quot;policyType&quot;: &quot;ORD&quot;, &quot;productCode&quot;: &quot;496&quot;, &quot;branchSourceCode&quot;: &quot;116&quot;, &quot;branchRegisterCode&quot;: &quot;116&quot;, &quot;branchServiceCode&quot;: &quot;116&quot;, &quot;channelCode&quot;: &quot;5075600&quot;, &quot;cardNo&quot;: &quot;1100567893455&quot;, &quot;cardType&quot;: &quot;I&quot;, &quot;documentList&quot;: [ { &quot;documentName&quot;: &quot;เอกสาร.pdf&quot;, &quot;dmsDocId&quot;: &quot;1&quot;, &quot;documentUploadDate&quot;: &quot;2026-04-27T00:00:00.000Z&quot;, &quot;documentUploadBy&quot;: &quot;ariya.pi&quot; } ], &quot;ctaxList&quot;: [ { &quot;ctaxNo&quot;: &quot;100011&quot;, &quot;businessArea&quot;: 1970, &quot;agentCode&quot;: &quot;4700061&quot;, &quot;monthTax&quot;: &quot;04&quot;, &quot;yearTax&quot;: &quot;2026&quot;, &quot;amount&quot;: 800000.00, &quot;whtType&quot;: &quot;64&quot;, &quot;whtAmount&quot;: 80000.00, &quot;branchSourceCode&quot;: &quot;116&quot; } ] } ] }]]>
<![CDATA[{ &quot;data&quot;: null, &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

---

## Hyperlinks บนหน้านี้

- [/thaisamut/rs/paymentmg/v1/payment/ctax/landing](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/paymentmg/landingCtax)
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
- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
