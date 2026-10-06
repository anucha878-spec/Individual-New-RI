# Transfer Result BBL_e-WHT

- **Page ID:** 1287225395
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Transfer+Result+BBL_e-WHT
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment > Transfer Result BBL_e-WHT
- **Depth:** 5

---

| No. | Field | Data type | Length | Description | Example | Mapping Data |
|---|---|---|---|---|---|---|
| 1 | FULL_NAME | varchar | 50 | ชื่อลูกค้า | OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED |   |
| 2 | CUSTOMER_CODE | varchar | 10 | รหัสบริษัท | OCEANIN |   |
| 3 | CUSTOMER_ID | numeric | 4 | รหัสลูกค้า | 5656 |   |
| 4 | Currency Code | varchar | 3 | รหัสสกุลเงิน | THB |   |
| 5 | Total of Customer Amount | numeric | 20,2 | ยอดรวมลูกค้า | 2000 |   |
| 6 | Payment Product Code | varchar | 5 | รหัสสินค้า | SMC06 |   |
| 7 | Total of Product | varchar | 15 | ยอดรวมผลิตภัณฑ์ | 2000 |   |
| 8 | Product Description | varchar | 20 | รายละเอียดสินค้า | SMART NEXT DAY |   |
| 9 | TXN_ID | numeric | 10 | รหัสรายการ | 900254 |   |
| 10 | CURRENCY_CODE1 | varchar | 5 | รายการสกุลเงิน | THB |   |
| 11 | TXN_STATUS | varchar | 20 | สถานะรายการ | Paid | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).statusกรณีสถานะเป็น Paid ให้บันทึกเป็น **จ่ายเงินสำเร็จ (PAI)**กรณีสถานะเป็น Return ให้บันทึกเป็น **จ่ายไม่สำเร็จ (FAI)**กรณีสถานะเป็น Cancelled ให้บันทึกเป็น **จ่ายไม่สำเร็จ (FAI)** กรณีสถานะไม่เป็น Paid หรือ Return หรือ Cancelled ให้บันทึกเป็น **จ่ายไม่สำเร็จ (FAI)** |
| 12 | PROCESSING_DATE | Date | Date | วันที่ดำเนินการ (DD-MMM-YY) | 24-Oct-22 |   |
| 13 | PAYMENT_VALUE_DATE | Date | Date | วันที่โอนเงินให้ผู้รับ | 24-Oct-22 | *ยังไม่ปรับให้บันทึกเป็นวันเดียวกับ [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payment_record_date เนื่องจากการบันทึกผลการโอนเงิน ฝ่ายการเงินจะดำเนินการบันทึกผลการจ่ายทุกวัน* |
| 14 | Instrument Ref.No. | varchar | 50 | หมายเลขอ้างอิงลูกค้า | 00BOCEANIN1011553/20251110123456 | เป็นข้อมูลของฝั่ง Payment ที่อ้างอิงถึงลูกค้า อาจเป็น เลขที่กรมธรรม์ / [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_no (เลขที่อ้างอิงรายการจ่าย) อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 15 | Payable location | varchar | 50 | สถานที่ชำระเงิน | BANGKOK |   |
| 16 | Liquidation Date | Date | Date | วันชำระบัญชี(DD-MM-YY) | 24-Oct-22 |   |
| 17 | BANK_BRANCH_CODE | varchar | 10 | รหัสสาขาที่ทำงาน | 0020101 |   |
| 18 | Credit Bank Code | varchar | 2 | รหัสธนาคารเครดิต | 002 |   |
| 19 | Credit A/C No | varchar | 20 | หมายเลขบัญชีเครดิต | 01570892040 |   |
| 20 | Instrument No. | varchar | 50 | (Cheque No/SWIFT confirmation) |   |   |
| 21 | DEBIT_DATE | Date | Date | วันเดบิต (DD-MM-YY) | 24-Oct-22 |   |
| 22 | Short Account No. | varchar | 10 | เลขบัญชีสั้น | 0157 |   |
| 23 | Debit Amount | numeric | 10 | จำนวนเดบิต | 2000 |   |
| 24 | Debit Lcy Amount | numeric | 10 | เดบิตจำนวนสกุลเงินท้องถิ่น | 2000 |   |
| 25 | Customer Ref. No. | varchar | 10 | Batch Code for batch | OCEANIN |   |
| 26 | Debit Acc. No. | varchar | 10 | เลขที่อ้างอิงลูกค้า | 9250025955 |   |
| 27 | Payee Code | varchar | 10 |   |   |   |
| 28 | Payee Name | varchar | 250 | ชื่อผู้รับเงิน | เอเอ บีสอง |   |
| 29 | CF_AGEING_DAYS | numeric | 2 | จำนวนวันที่ทำรายการ | 4 |   |
| 30 | CF_CHG_CODE | numeric | 5 | รหัสค่าธรรมเนียม | 1 |   |
| 31 | CF_CHARGE_TO | varchar | 10 | รหัสจ่ายค่าธรรมเนียม | OUR |   |
| 32 | BATCH_CODE | varchar | 15 | รหัส Batch | OCEANIN101169 |   |
| 33 | SUB_BATCH_CODE | varchar | 10 | รหัส Batch ย่อย |   |   |

| Footer |
|---|
| No. | Field | Data type | Length | Description | Example | Mapping Data |
| 1 | CS_COUNT | numeric | 20 | จำนวนรายการทั้งหมด | 3 |   |
| 2 | Grand Total | numeric | 20,2 | จำนวนเงินที่สำเร็จทั้งหมด | 13000.58 |   |
| 3 | PRECISION1 | numeric | 20 |   | 3 |   |

เงื่อนไขเดิม

| No. | Field | Length | Description | Example | Mapping Data |
|---|---|---|---|---|---|
| 1 | Seq | 6 | Record Sequence Number - Running number in the file starts with 1 and incremented by 1 | 1 |   |
| 2 | Batch Ref No | 14 | Batch Reference No. Assigned by Bank. | HOLDINGM001457 | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| 3 | Sub Batch Ref No | 17 | Sub Batch Reference No. Assigned by Bank. | HOLDINGM001457_01 |   |
| 4 | Cust Ref No | 18 | Customer Reference No. (Internal Reference field in file upload) |   |   |
| 5 | Payment Ref No | 18 | Payment Reference No. Assigned by Bank. | 20251110123456 | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_no อ้างอิงการสร้าง transaction_no ([cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data)) จากขั้นตอน [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) ด้วยรูปแบบข้อมูลดังนี้Format Data : YYYYMMDD{0}Example Data : 20251110123456 |
| 6 | Customer Code | 20 | iCash Company Code | HOLDINGM |   |
| 7 | Debit Account No | 20 | Debit company account number |   |   |
| 8 | Product Code | 5 | Product Code (DCB01/DCB02, PYR01/PYR02, SMC04/SMC06, BHT01, IPF01, IPF03) | SMC06 |   |
| 9 | Payee Code | 30 | This is beneficiary code maintained in the system for Pre-Registered beneficiary. | SMC06 |   |
| 10 | Payee Name | 100 | Beneficiary Name | Mr. John |   |
| 11 | Payee Account No | 25 | Beneficiary/Employee A/C number. This is applicable and mandatory for electronic-based payments products. This will be 10 characters for BBL and 11 characters in case of Smart Credit. | 1010000001 |   |
| 12 | Credit Bank Code | 3 | Receiving Bank Code | 017 |   |
| 13 | Bank Branch Code | 7 | Receiving Bank Branch Code | 0170101 |   |
| 14 | Payee Charge Code | 3 | This flag indicates whether Customer or Beneficiary or Payeer will absorb Charges. Values shall be either BEN or OUR or SHR | OUR |   |
| 15 | Swift Code | 11 | SWIFT Code of Intermediary Bank |   |   |
| 16 | Processing Date | 9 | Processing Date for payment. The format will be DD-MMM-YY | 15-FEB-17 |   |
| 17 | Value Date | 9 | Value date for payment. The format will be DD-MMM-YY | 15-FEB-17 |   |
| 18 | Payment Amount | 16 | Payment Net amount of transaction (Credit amount) | 2500 or 2500.19 |   |
| 19 | Payment Currency | 3 | Credit Currency - This is Currency Code. | eg: THB, USD, SGD |   |
| 20 | Buying Rate | 16 | Buying Rate. Assigned by Bank. |   |   |
| 21 | Selling Rate | 16 | Selling Rate. Assigned by Bank. |   |   |
| 22 | Fix Amount Mode | 4 | Fixed Amount mode for Cross currency transaction default value is C. (C = Credit , D = Debit) | C or D If null , the system will replace by C |   |
| 23 | Instrument No. | 3 | Instrument No. Assigned by Bank. |   |   |
| 24 | Status | 100 | Transaction Status | eg: New, Authorized, Paid, Failed, Rejected |   |
| 25 | Reason of Status | 150 | Error Remark of the unsuccessful transaction. | eg: Check Benefiary Account Number, must be BBL Account | เตรียมข้อมูลสำหรับบันทึกที่ [tx_mapping_reject_record](/display/RDSCPENH/tx_mapping_reject_record).remark |
| **WHT Details - 005** |   |
| 1 | WHT | 10 | Withholding Tax Record sequence number. This will be 'WHT' + sequence No. |   |   |
| 2 | Internal ref | 20 | This is the reference number that will map the invoices, which were aggregated to get this value of WHT. There can be multiple invoices mapped to this reference number. |   |   |
| 3 | WHT Running No. | 6 | Credit Sequence No. |   |   |
| 4 | WHT Inc Type | 2 | This field will have values '01' to '07' |   |   |
| 5 | WHT Rate | 4 | WHT Deduct Rate (Deduction Rate for WHT. Format NNNN. For 7.45 % value will be 0745) |   |   |
| 6 | Inc Type Amt. | 16 | Income Type Amount. Divide by 100 for actual amount |   |   |
| 7 | WHT Amt. | 16 | WHT Amount. Divide by 100 for actual amount |   |   |
| **Invoice Details - 006** |   |
| 1 | INV | 3 | Invoice Record sequence number. This will be 'INV' + sequence No. |   |   |
| 2 | Internal ref | 48 | This is the same reference number that is present in WHT details. There can be multiple invoices that ref to one particular WHT. |   |   |
| 3 | Invoice Description | 16 | Invoice Description |   |   |
| 4 | Inv Amt | 50 | Invoice Amount. Actual amount is calculated by dividing this value by 100 |   |   |
| 5 | VAT Amount | 16 | VAT Amount. Actual amount is calculated by dividing this value by 100 |   |   |
| 6 | Invoice No. | 20 | Invoice Number, PO Number and Invoice Date has to be seperated by underscore "_" |   |   |
| 7 | PO No. | 20 | Invoice Number, PO Number and Invoice Date has to be seperated by underscore "_" |   |   |
| 8 | Inv. Date | 20 | Invoice Number, PO Number and Invoice Date has to be seperated by underscore "_" |   |   |

ตัวอย่าง text file
![img](/download/attachments/1287225395/image2026-3-24%2010%3A53%3A35.png?version=1&modificationDate=1774324415653&api=v2)
ตัวอย่างเดิม
<![CDATA[Seq~Batch Ref No~Sub Batch Ref No~Cust Ref No~Payment Ref No~Customer Code~Debit Account No~Product Code~Payee Code~Payee Name~Payee Account No~Credit Bank Code~Bank Branch Code~Payee Charge Code~Swift Code~Processing Date~Value Date~Payment Amount~Payment Currency~Buying Rate~Selling Rate~Fix Amount Mode~Instrument No.~Status~Reason of Status~WHT~Internal ref~WHT Running No.~WHT Inc Type~WHT Rate~Inc Type Amt.~WHT Amt.~INV~Internal ref~Invoice Description~Inv Amt~VAT Amount~Invoice No.~PO No.~Inv. Date 1~HOLDINGM008098~~20206400000377~00BHOLDINGM0503975~HOLDINGM~0053000022~DCB02~~WAVETECH CLEARANCE SERVICE CO.,LTD.~2290406772~002~0020229~BEN~002~11-MAR-21~11-MAR-21~1820~THB~~~C~~Paid~~WHT1~20206400000377_01~~15~3.00~350~10.5~INV1~20206400000377_01~Export A028-16311-04331~350~24.5~A-11/20-13649~~ 1~HOLDINGM008098~~20206400000377~00BHOLDINGM0503975~HOLDINGM~0053000022~DCB02~~WAVETECH CLEARANCE SERVICE CO.,LTD.~2290406772~002~0020229~BEN~002~11-MAR-21~11-MAR-21~1820~THB~~~C~~Paid~~WHT2~20206400000377_02~~15~3.00~350~10.5~INV2~20206400000377_02~Export A004-16312-18663~350~24.5~A-12/20/13917~~ 1~HOLDINGM008098~~20206400000377~00BHOLDINGM0503975~HOLDINGM~0053000022~DCB02~~WAVETECH CLEARANCE SERVICE CO.,LTD.~2290406772~002~0020229~BEN~002~11-MAR-21~11-MAR-21~1820~THB~~~C~~Paid~~WHT3~20206400000377_03~~15~3.00~1050~31.5~INV3~20206400000377_03~Export A007-16312-07271~1050~73.5~A-12/20/13995~~ 2~HOLDINGM008098~~20206400000378~00BHOLDINGM0503976~HOLDINGM~0053000022~DCB02~~MASS TRANSPORT EXPRESS CO.,LTD.~2203024316~002~0020220~BEN~002~11-MAR-21~11-MAR-21~174575.34~THB~~~C~~Cancel~~WHT1~20206400000378_01~~15~3.00~4732.92~141.99~INV1~20206400000378_01~Import A0270631110502~4732.92~331.3~IVAI20110278~~ 2~HOLDINGM008098~~20206400000378~00BHOLDINGM0503976~HOLDINGM~0053000022~DCB02~~MASS TRANSPORT EXPRESS CO.,LTD.~2203024316~002~0020220~BEN~002~11-MAR-21~11-MAR-21~174575.34~THB~~~C~~Cancel~~WHT2~20206400000378_02~~99~0.00~17396.46~0~INV2~20206400000378_02~Import A0270631110502~17396.46~0~IVAI20110278~~ 2~HOLDINGM008098~~20206400000378~00BHOLDINGM0503976~HOLDINGM~0053000022~DCB02~~MASS TRANSPORT EXPRESS CO.,LTD.~2203024316~002~0020220~BEN~002~11-MAR-21~11-MAR-21~174575.34~THB~~~C~~Cancel~~WHT3~20206400000378_03~~15~3.00~10200~306~INV3~20206400000378_03~Import A0160631211911~10200~714~ICSI20120271~~ 2~HOLDINGM008098~~20206400000378~00BHOLDINGM0503976~HOLDINGM~0053000022~DCB02~~MASS TRANSPORT EXPRESS CO.,LTD.~2203024316~002~0020220~BEN~002~11-MAR-21~11-MAR-21~174575.34~THB~~~C~~Cancel~~WHT4~20206400000378_04~~99~0.00~5543.5~0~INV4~20206400000378_04~Import A0160631211911~5543.5~0~ICSI20120271~~ 3~HOLDINGM008098~~20206400000380~00BHOLDINGM0503977~HOLDINGM~0053000022~DCB02~~Bangkok Insurance Public Co.,Ltd.~1183031291~002~0020118~BEN~002~11-MAR-21~11-MAR-21~503~THB~~~C~~Paid~~WHT1~20206400000380_01~~99~0.00~503~0~INV1~20206400000380_01~Export AWB:934916593523~503~0~2135220~~]]>

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [tx_mapping_reject_record](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_mapping_reject_record)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1287225395/image2026-3-24%2010%3A53%3A35.png?version=1&modificationDate=1774324415653&api=v2
