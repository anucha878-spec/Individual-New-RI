# 01 WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management

- **Page ID:** 1284112423
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112423
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 01 WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management
- **Depth:** 4

---

[ [Overview](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-Overview) ] [ [Protocol](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-Protocol) ] [ [Operation](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-Operation) ] [ [Input สำหรับ V2](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-InputสำหรับV2) ] [ [Input สำหรับ V3](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-InputสำหรับV3) ] [ [Process](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-Process) ] [ [`Output`](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-Output) ] [ [Example Input & Output V2](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-ExampleInput&OutputV2) ] [ [Example Input & Output V3](#id-01WSตรวจสอบข้อมูลการจ่ายเงินจากระบบPaymentManagement-ExampleInput&OutputV3) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่อตรวจสอบข้อมูลสถานะการจ่ายจากระบบ Payment Management
**Repositories**: msa-paymentmg
**Service path**
**POST:** [/thaisamut/rs/paymentmg/v2/payment-verification](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/benefit/getPaymentVerificationV2) POST: [/thaisamut/rs/paymentmg/v3/payment-verification](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/benefit/getPaymentVerificationV3) (For DepositPay)

## Protocol

Icon
<SOAP,HESSIAN,REST>

## Operation

refer : ESB WebService Design Pattern
Icon
TYPE : <inquiry>

## Input สำหรับ V2

<แสดงข้อมูล Parameter ที่ต้องการ>

|   | `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | `Validation` |
|---|---|---|---|---|---|---|
| `ArrayList`Limit 300 Transaction | `operRefNo` | `String` | `เลขธุรกรรม Cenpay` | `CPAPU25090200001` | `Y` | `not null` |

## Input สำหรับ V3

<แสดงข้อมูล Parameter ที่ต้องการ>

|   | `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | `Validation` |
|---|---|---|---|---|---|---|
| `ArrayList`Limit 300 Transaction | `operRefNo` | `String` | `เลขธุรกรรม Cenpay` | `CPAPU25090200001` | `Y` | `not null` |
|   | systemEnum | Enum | ชื่อระบบต้นทาง | DEPOSIT_PAY | N |   |

## Process

ปรับแก้ไข SQL โดย ariya.pi เมื่อ 09/01/2569

| Phase/Release | SQL |
|---|---|
| Ph1R1 | **select ข้อมูลการจ่าย** <![CDATA[select ph.batch_oper_no as batchOperNo, ph.status as batchOperStatus, pd.oper_ref_no as operRefNo, pd.status as transactionStatus, pd.cheque_no as chequeNo, pd.cheque_issue_date as chequeIssueDate, pd.cheque_redeem_date as chequeRedeemDate, pd.cheque_expiry_date as chequeExpiryDate, pd.payment_record_date as recordDate, bp.paid_date as paidDate, pdb.approved_date as approvedDate, map.target_status as targetStatus, map.is_post_payment as isPostPayment, -- ปรับเพิ่มโดย ariya.pi สำหรับการดึงข้อมูล Batch ทำจ่ายการเงินกลับมา Update ที่ระบบ Cenpay เมื่อ 22/01/2569 bp.batch_payment_no as batchPaymentNo from tx_payment_detail pd left join tx_payment_header ph on ph.id = pd.payment_header_id left join tx_batch_payment bp on bp.id = pd.batch_payment_id left join tx_payment_detail_mapping_etl pdme on pdme.payment_detail_id = pd.id left join tx_payment_dashboard pdb on pdme.payment_dashboard_id = pdb.id left join cf_mapping_external_status map on map.is_active = true -- กรณีที่ Voucher Status ไม่ใช่ Null หรือ ค่่าว่าง ให้เทียบช้อมูล Voucher Status ที่ได้กับ Mapping and (((pdb.voucher_status is not null and pdb.voucher_status &lt;&gt; &#39;&#39;) and (map.voucher_status = pdb.voucher_status)) -- กรณี Voucher Status เป็น Null หรือ ค่าว่าง ให้เทียบข้อมูลที่ Voucher Status เป็นค่า Null หรือ ค่าว่าง ใน Mapping or ((pdb.voucher_status is null or pdb.voucher_status = &#39;&#39;) and (map.voucher_status is null or map.voucher_status = &#39;&#39;))) and map.transaction_status = pd.status where -- ปรับเงื่อนไขการตรวจสอบ Event Code ถ้าไม่ใช่สถานะ WCF case when pd.status &lt;&gt; &#39;WCF&#39; then pdb.event_code in (&#39;PM_FIN_01&#39;,&#39;PM_FIN_02&#39;) else 1=1 end and pd.oper_ref_no in (:operRefNo);]]> |
| Ph1R2 + New Loan Ph1Ph2 Online Payment | **select ข้อมูลการจ่าย** <![CDATA[select ph.batch_oper_no as batchOperNo, ph.status as batchOperStatus, pd.oper_ref_no as operRefNo, pd.status as transactionStatus, pd.cheque_no as chequeNo, pd.cheque_issue_date as chequeIssueDate, pd.cheque_redeem_date as chequeRedeemDate, pd.cheque_expiry_date as chequeExpiryDate, pd.payment_record_date as recordDate, pd.payment_record_by as recordBy, -------------- updated by patcha.vo 22/04/69 pd.updated_by as updatedBy, -------------- updated by patcha.vo 23/04/69 pd.api_status_code as apiStatusCode, -------------- updated by patcha.vo 12/06/69 pd.api_status_desc as apiStatusDesc, -------------- updated by patcha.vo 12/06/69 bp.paid_date as paidDate, bp.batch_payment_no as batchPaymentNo, bp.service_code as service, -------------- updated by patcha.vo 30/01/69 pdb.approved_date as approvedDate, pdb.approved_by as approvedBy, -------------- updated by patcha.vo 22/04/69 map.target_status as targetStatus, map.is_post_payment as isPostPayment, lo.description as bankAccount, -------------- updated by patcha.vo 30/01/69 dt.new_deposit_no as newDepositNo, -------------- updated by patcha.vo 26/06/69 CASE WHEN mrr.reject_type = &#39;U&#39; THEN &#39;INF&#39; -------------- updated by patcha.vo 22/06/69 ELSE COALESCE( lo1.lookup_key, -------------- updated by patcha.vo 22/06/69 lo2.description, -------------- updated by patcha.vo 22/06/69 ps.cheque_reason ) END AS reason -------------- updated by patcha.vo 12/06/69 bam.payment_channel_type as finPaymentChannel -------------- updated by patcha.vo 01/07/69 from tx_payment_detail pd left join tx_payment_header ph on ph.id = pd.payment_header_id left join tx_batch_payment bp on bp.id = pd.batch_payment_id left join tx_payment_detail_mapping_etl pdme on pdme.payment_detail_id = pd.id left join tx_payment_dashboard pdb on pdme.payment_dashboard_id = pdb.id left join tx_mapping_reject_record mrr -------------- updated by patcha.vo 12/06/69 on mrr.payment_detail_id = pd.id left join tx_paperbase_status ps -------------- updated by patcha.vo 12/06/69 on ps.payment_detail_id = pd.id left join cf_lookup_catalog lo ------------------ updated by patcha.vo 30/01/69 on lo.lookup_key = bp.bank_account_code and lo.parent_id in (&#39;18000&#39;) ------------------ updated by patcha.vo 18/05/69 left join cf_lookup_catalog lo1 -------------- updated by patcha.vo 22/06/69 on lo1.description = mrr.remark and lo1.parent_id in (&#39;21000&#39;) left join cf_lookup_catalog lo2 -------------- updated by patcha.vo 22/06/69 on lo2.lookup_key = pd.api_status_code and lo2.parent_id in (&#39;74000&#39;) left join cf_mapping_external_status map on map.is_active = true -- กรณีที่ Voucher Status ไม่ใช่ Null หรือ ค่่าว่าง ให้เทียบช้อมูล Voucher Status ที่ได้กับ Mapping and (((pdb.voucher_status is not null and pdb.voucher_status &lt;&gt; &#39;&#39;) and (map.voucher_status = pdb.voucher_status)) -- กรณี Voucher Status เป็น Null หรือ ค่าว่าง ให้เทียบข้อมูลที่ Voucher Status เป็นค่า Null หรือ ค่าว่าง ใน Mapping or ((pdb.voucher_status is null or pdb.voucher_status = &#39;&#39;) and (map.voucher_status is null or map.voucher_status = &#39;&#39;))) and map.transaction_status = pd.status left join tx_deposit_transaction dt -------------- updated by patcha.vo 26/06/69 on dt.payment_detail_id = pd.id left join cf_bank_account_mapping bam -------------- updated by patcha.vo 1/07/69 on bam.service = bp.service and bam.bank_account = bp.bank_account_code where case when pdb.voucher_status is not null ------------------ updated by patcha.vo 22/05/69 then pdb.event_code in (&#39;PM_FIN_01&#39;,&#39;PM_FIN_02&#39;) else 1=1 end and pd.oper_ref_no in (:operRefNo);]]> |

## `Output`

`List<Transaction>`

| Name | Type | Description | Example |
|---|---|---|---|
| code | Numeric | CodeMessage200Success204No Content400Bad Request 409Conflict 500Server Error | *ปรับเพิ่ม statusCode,statusMessage ที่ Ph2เนื่องจาก Online Payment ต้องการเช็ค Error เพื่อให้มีการแจ้ง Helpdeskupdated by : patcha.vo 04/03/69 |
| Code | Message |
| 200 | Success |
| 204 | No Content |
| 400 | Bad Request |
| 409 | Conflict |
| 500 | Server Error |
| message | String |
| data | Array[] |   |   |

**กรณี Success ให้ Return Data[Array] ดังนี้**

| `Name` | `Type` | `Description` | `Example` |
|---|---|---|---|
| batchOperNo | String | เลข Batch ปฏิบัติการมีข้อมูลกรณีค้นหาด้วย |   |
| batchOperStatus | String | สถานะ Batch อ้างอิง [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) **สถานะดำเนินการระดับ Batch** |   |
| operRefNo | String | เลขธุรกรรม Cenpay |   |
| transactionStatus | String | สถานะการจ่ายของ Payment Managementจะมีสถานะเฉพาะในตาราง [cf_mapping_external_status_data](/display/RDSCPENH/cf_mapping_external_status_data) CodeDescriptionTarget StatusDescriptionWCFรอยืนยันWCFรอยืนยันทำจ่ายWVFรอตรวจสอบWVFรอตรวจสอบWAFรออนุมัติWVFรอตรวจสอบWEFรอการแก้ไขWVFรอตรวจสอบREJข้อมูลการจ่ายไม่ถูกต้อง (Format ไม่ผ่าน)voucher statustarget status ไม่มี, รออนุมัติ WAFWVFรอตรวจสอบอนุมัติ, ไม่อนุมัติจ่ายสำเร็จ,จ่ายไม่สำเร็จ,จ่ายสำเร็จบางส่วนICFFormat ไม่ผ่าน CANยกเลิกvoucher statustarget status ไม่มี, รออนุมัติWVFรอตรวจสอบอนุมัติ, ไม่อนุมัติSPPระงับการจ่าย CORถูกต้อง (Checker ตรวจสอบเช็ค)WVFรอตรวจสอบ – updated by patcha.vo 09/07/69WACรอพิมพ์เช็คWVFรอตรวจสอบPRSพิมพ์สำเร็จWVFรอตรวจสอบWAPรอจ่าย (Paperbase อื่นๆ)WVFรอตรวจสอบAPPบันทึกจ่าย (Paperbase อื่นๆ)voucher statustarget statusDescriptionไม่มีWVFรอตรวจสอบรออนุมัติWAFรออนุมัติจ่ายอนุมัติ--ไม่อนุมัติWVFรอตรวจสอบ BAPธนาคารกำลังโอนเงินWCPรอบันทึกผลการจ่ายPAIจ่ายเงินสำเร็จPMSจ่ายเงินสำเร็จFAIจ่ายเงินไม่สำเร็จFLTจ่ายเงินไม่สำเร็จCOSเช็ครอขึ้นเงินPMSจ่ายเงินสำเร็จCCLเช็คขึ้นเงินแล้วPMSจ่ายเงินสำเร็จCEXเช็คหมดอายุPMSจ่ายเงินสำเร็จCCCเช็คยกเลิกPMSจ่ายเงินสำเร็จ |   |
| Code | Description | Target Status | Description |
| WCF | รอยืนยัน | WCF | รอยืนยันทำจ่าย |
| WVF | รอตรวจสอบ | WVF | รอตรวจสอบ |
| WAF | รออนุมัติ | WVF | รอตรวจสอบ |
| WEF | รอการแก้ไข | WVF | รอตรวจสอบ |
| REJ | ข้อมูลการจ่ายไม่ถูกต้อง (Format ไม่ผ่าน) | voucher statustarget status ไม่มี, รออนุมัติ WAFWVFรอตรวจสอบอนุมัติ, ไม่อนุมัติจ่ายสำเร็จ,จ่ายไม่สำเร็จ,จ่ายสำเร็จบางส่วนICFFormat ไม่ผ่าน |   |
| voucher status | target status |   |
| ไม่มี, รออนุมัติ WAF | WVF | รอตรวจสอบ |
| อนุมัติ, ไม่อนุมัติจ่ายสำเร็จ,จ่ายไม่สำเร็จ,จ่ายสำเร็จบางส่วน | ICF | Format ไม่ผ่าน |
| CAN | ยกเลิก | voucher statustarget status ไม่มี, รออนุมัติWVFรอตรวจสอบอนุมัติ, ไม่อนุมัติSPPระงับการจ่าย |   |
| voucher status | target status |   |
| ไม่มี, รออนุมัติ | WVF | รอตรวจสอบ |
| อนุมัติ, ไม่อนุมัติ | SPP | ระงับการจ่าย |
| COR | ถูกต้อง (Checker ตรวจสอบเช็ค) | WVF | รอตรวจสอบ – updated by patcha.vo 09/07/69 |
| WAC | รอพิมพ์เช็ค | WVF | รอตรวจสอบ |
| PRS | พิมพ์สำเร็จ | WVF | รอตรวจสอบ |
| WAP | รอจ่าย (Paperbase อื่นๆ) | WVF | รอตรวจสอบ |
| APP | บันทึกจ่าย (Paperbase อื่นๆ) | voucher statustarget statusDescriptionไม่มีWVFรอตรวจสอบรออนุมัติWAFรออนุมัติจ่ายอนุมัติ--ไม่อนุมัติWVFรอตรวจสอบ |   |
| voucher status | target status | Description |
| ไม่มี | WVF | รอตรวจสอบ |
| รออนุมัติ | WAF | รออนุมัติจ่าย |
| อนุมัติ | - | - |
| ไม่อนุมัติ | WVF | รอตรวจสอบ |
| BAP | ธนาคารกำลังโอนเงิน | WCP | รอบันทึกผลการจ่าย |
| PAI | จ่ายเงินสำเร็จ | PMS | จ่ายเงินสำเร็จ |
| FAI | จ่ายเงินไม่สำเร็จ | FLT | จ่ายเงินไม่สำเร็จ |
| COS | เช็ครอขึ้นเงิน | PMS | จ่ายเงินสำเร็จ |
| CCL | เช็คขึ้นเงินแล้ว | PMS | จ่ายเงินสำเร็จ |
| CEX | เช็คหมดอายุ | PMS | จ่ายเงินสำเร็จ |
| CCC | เช็คยกเลิก | PMS | จ่ายเงินสำเร็จ |
| `targetStatus` | `String` | `สถานะรายการจ่ายของระบบต้นทาง (CenPay)``Code``Description Eng``Description`หมายเหตุ`WCF``Waiting Confirm by Finance``รอยืนยันทำจ่าย (ฝ่ายการเงิน)` `WVF``Waiting Verify by Finance``รอตรวจสอบ (ฝ่ายการเงิน)` `WAF``Waiting Approve by Finance``รออนุมัติจ่าย (ฝ่ายการเงิน)` `ICF``Incorrect Format``Format ไม่ผ่าน` `WCP``Waiting Confirm Payment by Finance``รอบันทึกผลการจ่าย (ฝ่ายการเงิน)` `FLT``Failed Transfer``จ่ายเงินไม่สำเร็จ` `PMS``Payment Success``จ่ายเงินสำเร็จ`**** โปรดอ่าน** สำหรับการตรวจสอบสถานะจาก PayM**กรณีธุรกรรมต้นทางระบุช่องทางการจ่ายเป็น **โอนเงิน**, **อื่นๆ** หลังจากการเงินอนุมัติ targetStatus จะเป็น WCP - รอบันทึกผลการจ่าย หรือ ICF - Format ไม่ผ่านหลังจากการเงินบันทึกผล targetStatus จะเป็น PMS,FLT จ่ายสำเร็จหรือจ่ายไม่สำเร็จกรณีธุรกรรมต้นทางระบุช่องการการจ่ายเป็น **เช็ค**หลังจากการเงินอนุมัติ targetStatus จะเป็น PMS - จ่ายเงินสำเร็จเสมอ ไม่มี FLT -จ่ายไม่สำเร็จหลังจากการเงินอนุมัติ transactionStatus จะเป็น COS - เช็ครอขึ้นเงินหลังจากการเงินบันทึกผล transactionStatus จะเป็น CCL,CEX,CCC หากต้องการสถานะเช็คให้ตรวจสอบจาก transactionStatus กรณีธุรกรรมต้นทางระบุช่องทางการจ่ายเป็น **โอนเงิน** เนื่องจากการเงินสามารถเปลี่ยนช่องทางการจ่ายด้วย **เช็ค**ตรวจสอบได้จากช่องทางการจ่ายของการเงินจาก finPaymentChannel = CHEQUE_BANK,CHEQUE_COMหลังจากการเงินอนุมัติ targetStatus จะเป็น PMS - จ่ายเงินสำเร็จเสมอ ไม่มี FLT -จ่ายไม่สำเร็จหลังจากการเงินอนุมัติ transactionStatus จะเป็น COS - เช็ครอขึ้นเงินหลังจากการเงินบันทึกผล transactionStatus จะเป็น CCL,CEX,CCC หากต้องการสถานะเช็คให้ตรวจสอบจาก transactionStatus**ตัวอย่าง**ธุรกรรมช่องทางการจ่ายของระบบต้นทางช่องทางการจ่ายของการเงินtargetStatustransactionStatusCenPayโอนเงินเช็คCHEQUE_BANK,CHEQUE_COMจ่ายสำเร็จเช็ครอขึ้นเงินเช็คขึ้นเงินแล้วเช็คหมดอายุเช็คยกเลิกDepositโอนเงินเช็คCHEQUE_BANK,CHEQUE_COMจ่ายสำเร็จเช็คขึ้นเงินแล้ว จ่ายไม่สำเร็จ (แต่ PayM จะเป็นจ่ายสำเร็จเสมอ)เช็คหมดอายุเช็คยกเลิก`SPP``Suspend Payment``ระงับการจ่าย` |   |
| `Code` | `Description Eng` | `Description` | หมายเหตุ |
| `WCF` | `Waiting Confirm by Finance` | `รอยืนยันทำจ่าย (ฝ่ายการเงิน)` |   |
| `WVF` | `Waiting Verify by Finance` | `รอตรวจสอบ (ฝ่ายการเงิน)` |   |
| `WAF` | `Waiting Approve by Finance` | `รออนุมัติจ่าย (ฝ่ายการเงิน)` |   |
| `ICF` | `Incorrect Format` | `Format ไม่ผ่าน` |   |
| `WCP` | `Waiting Confirm Payment by Finance` | `รอบันทึกผลการจ่าย (ฝ่ายการเงิน)` |   |
| `FLT` | `Failed Transfer` | `จ่ายเงินไม่สำเร็จ` |   |
| `PMS` | `Payment Success` | `จ่ายเงินสำเร็จ` | **** โปรดอ่าน** สำหรับการตรวจสอบสถานะจาก PayM**กรณีธุรกรรมต้นทางระบุช่องทางการจ่ายเป็น **โอนเงิน**, **อื่นๆ** หลังจากการเงินอนุมัติ targetStatus จะเป็น WCP - รอบันทึกผลการจ่าย หรือ ICF - Format ไม่ผ่านหลังจากการเงินบันทึกผล targetStatus จะเป็น PMS,FLT จ่ายสำเร็จหรือจ่ายไม่สำเร็จกรณีธุรกรรมต้นทางระบุช่องการการจ่ายเป็น **เช็ค**หลังจากการเงินอนุมัติ targetStatus จะเป็น PMS - จ่ายเงินสำเร็จเสมอ ไม่มี FLT -จ่ายไม่สำเร็จหลังจากการเงินอนุมัติ transactionStatus จะเป็น COS - เช็ครอขึ้นเงินหลังจากการเงินบันทึกผล transactionStatus จะเป็น CCL,CEX,CCC หากต้องการสถานะเช็คให้ตรวจสอบจาก transactionStatus กรณีธุรกรรมต้นทางระบุช่องทางการจ่ายเป็น **โอนเงิน** เนื่องจากการเงินสามารถเปลี่ยนช่องทางการจ่ายด้วย **เช็ค**ตรวจสอบได้จากช่องทางการจ่ายของการเงินจาก finPaymentChannel = CHEQUE_BANK,CHEQUE_COMหลังจากการเงินอนุมัติ targetStatus จะเป็น PMS - จ่ายเงินสำเร็จเสมอ ไม่มี FLT -จ่ายไม่สำเร็จหลังจากการเงินอนุมัติ transactionStatus จะเป็น COS - เช็ครอขึ้นเงินหลังจากการเงินบันทึกผล transactionStatus จะเป็น CCL,CEX,CCC หากต้องการสถานะเช็คให้ตรวจสอบจาก transactionStatus**ตัวอย่าง**ธุรกรรมช่องทางการจ่ายของระบบต้นทางช่องทางการจ่ายของการเงินtargetStatustransactionStatusCenPayโอนเงินเช็คCHEQUE_BANK,CHEQUE_COMจ่ายสำเร็จเช็ครอขึ้นเงินเช็คขึ้นเงินแล้วเช็คหมดอายุเช็คยกเลิกDepositโอนเงินเช็คCHEQUE_BANK,CHEQUE_COMจ่ายสำเร็จเช็คขึ้นเงินแล้ว จ่ายไม่สำเร็จ (แต่ PayM จะเป็นจ่ายสำเร็จเสมอ)เช็คหมดอายุเช็คยกเลิก |
| ธุรกรรม | ช่องทางการจ่ายของระบบต้นทาง | ช่องทางการจ่ายของการเงิน | targetStatus | transactionStatus |
| CenPay | โอนเงิน | เช็คCHEQUE_BANK,CHEQUE_COM | จ่ายสำเร็จ | เช็ครอขึ้นเงินเช็คขึ้นเงินแล้วเช็คหมดอายุเช็คยกเลิก |
| Deposit | โอนเงิน | เช็คCHEQUE_BANK,CHEQUE_COM | จ่ายสำเร็จ | เช็คขึ้นเงินแล้ว |
|   |   |   | จ่ายไม่สำเร็จ (แต่ PayM จะเป็นจ่ายสำเร็จเสมอ) | เช็คหมดอายุเช็คยกเลิก |
| `SPP` | `Suspend Payment` | `ระงับการจ่าย` |   |
| reason | String | ประเภทการจ่ายเหตุผลBatch Paymentหมายเหตุรายการไม่ผ่านตรวจสอบstatusdescriptionINFFormat ไม่ถูกต้องSPMระงับจ่ายPaperbase Paymentหมายเหตุการแก้ไข/ส่งกลับ/ยกเลิกเช็คstatusdescriptionICNเลขที่เช็คไม่ถูกต้องBCHเช็คชำรุดเสียหายSPMระงับการจ่ายAPI Paymentเหตุผลส่งกลับ APIstatusdescriptionINFFormat ไม่ถูกต้องSPMระงับจ่ายACIVข้อมูลบัญชีไม่ถูกต้องITIVIT InvestigateBAIVBank InvestigateFMRJ`รายการไม่ผ่านตรวจสอบ` | add by patcha.vo 12/06/69 |
| ประเภทการจ่าย | เหตุผล |
| Batch Payment | หมายเหตุรายการไม่ผ่านตรวจสอบstatusdescriptionINFFormat ไม่ถูกต้องSPMระงับจ่าย |
| status | description |
| INF | Format ไม่ถูกต้อง |
| SPM | ระงับจ่าย |
| Paperbase Payment | หมายเหตุการแก้ไข/ส่งกลับ/ยกเลิกเช็คstatusdescriptionICNเลขที่เช็คไม่ถูกต้องBCHเช็คชำรุดเสียหายSPMระงับการจ่าย |
| status | description |
| ICN | เลขที่เช็คไม่ถูกต้อง |
| BCH | เช็คชำรุดเสียหาย |
| SPM | ระงับการจ่าย |
| API Payment | เหตุผลส่งกลับ APIstatusdescriptionINFFormat ไม่ถูกต้องSPMระงับจ่ายACIVข้อมูลบัญชีไม่ถูกต้องITIVIT InvestigateBAIVBank InvestigateFMRJ`รายการไม่ผ่านตรวจสอบ` |
| status | description |
| INF | Format ไม่ถูกต้อง |
| SPM | ระงับจ่าย |
| ACIV | ข้อมูลบัญชีไม่ถูกต้อง |
| ITIV | IT Investigate |
| BAIV | Bank Investigate |
| FMRJ | `รายการไม่ผ่านตรวจสอบ` |
| apiStatusCode | String | รหัสผลการจ่าย API Payment | add by patcha.vo 12/06/69 |
| apiStatusDesc | String | คำอธิบายผลการจ่าย API Payment | add by patcha.vo 12/06/69 |
| chequeNo | `Numeric`String | เลขที่เช็ค | updated by patcha.vo 14/07/69 |
| chequeIssueDate | `Date` | วันที่ออกเช็ค |   |
| chequeRedeemDate | `Date` | วันที่ขึ้นเงินเช็ค |   |
| chequeExpiryDate | `Date` | วันที่เช็คหมดอายุ |   |
| `isPostPayment` | `Boolean` | `เป็นกระบวนการหลังทำจ่ายหรือไม่``กรณีเป็น true เป็นกระบวนการหลังทำจ่าย``กรณีเป็น false ไม่ใช่กระบวนการหลังทำจ่าย` |   |
| paidDate | Date | วันที่จ่ายเงินจริง (วันที่ลูกค้าได้รับเงิน) |   |
| `approvedDate` | `TimeStamp` | `วันที่อนุมัติจ่ายการเงิน (วันที่การเงินอนุมัติบันทึกบัญชี)` |   |
| `recordDate` | `Date` | `วันที่บันทึกผลการจ่าย (วันที่การเงินบันทึกผลการจ่าย)` |   |
| batchPaymentNo | String | เลข Batch ทำจ่ายฝ่ายการเงิน | ปรับเพิ่มโดย ariya.pi สำหรับการดึงข้อมูล Batch ทำจ่ายการเงินกลับมา Update ที่ระบบ Cenpay เมื่อ 22/01/2569 |
| bankAccount | String | Bank Account | Ph1R2 + New Loan Ph1 added by patcha.vo 30/01/69 |
| service | String | Service (format ธนาคาร) | Ph1R2 + New Loan Ph1 added by patcha.vo 30/01/69 |
| updatedBy | String | ผู้ดำเนินการล่าสุด (ผู้ตรวจสอบ Format ไม่ผ่าน) | Ph2 Online Payment added by patcha.vo 22/04/69กรณีสถานะเป็น ICF |
| approvedBy | String | ผู้อนุมัติจ่ายการเงิน | Ph2 Online Payment added by patcha.vo 22/04/69กรณีสถานะเป็น WCP |
| recordBy | String | ผู้บันทึกผลการจ่าย | Ph2 Online Payment added by patcha.vo 22/04/69กรณีสถานะเป็น FLT,PMS,SPP |
| newDepositNo | String | เลขรับฝากใหม่ | add by patcha.vo 26/06/69 |
| finPaymentChannel | String | ช่องทางการจ่ายของการเงินfinPaymentChanneldescriptionTRANSFERโอนเงินCHEQUE_BANKเช็คธนาคารCHEQUE_COMเช็คบริษัทOTHERอื่นๆ | add by patcha.vo 1/07/69 |
| finPaymentChannel | description |
| TRANSFER | โอนเงิน |
| CHEQUE_BANK | เช็คธนาคาร |
| CHEQUE_COM | เช็คบริษัท |
| OTHER | อื่นๆ |

## Example Input & Output V2

<![CDATA[ [ { &quot;operRefNo&quot;: &quot;CPAPU99090900786&quot; } ]]]>
<![CDATA[{ &quot;data&quot;: [ { &quot;paymentHeaderId&quot;: null, &quot;batchOperNo&quot;: &quot;CP-CC-20260403-00008&quot;, &quot;batchOperStatus&quot;: &quot;APR&quot;, &quot;operRefNo&quot;: &quot;CPAPU99090900786&quot;, &quot;transactionStatus&quot;: &quot;COS&quot;, &quot;paidDate&quot;: 1759856400000, &quot;chequeStatus&quot;: null, &quot;chequeNo&quot;: &quot;12001007&quot;, &quot;chequeIssueDate&quot;: 1775494800000, &quot;chequeRedeemDate&quot;: null, &quot;chequeExpiryDate&quot;: null, &quot;isPostPayment&quot;: true, &quot;approvedDate&quot;: 1775554239344, &quot;recordDate&quot;: 1776963600000, &quot;targetStatus&quot;: &quot;PMS&quot;, &quot;batchPaymentNo&quot;: &quot;P25690407001&quot;, &quot;bankAccount&quot;: &quot;718-1-01369-3&quot;, &quot;service&quot;: &quot;CHE_COM&quot;, &quot;updatedBy&quot;: &quot;fin1&quot;, &quot;approvedBy&quot;: &quot;fin1&quot;, &quot;recordBy&quot;: &quot;test.te&quot;, &quot;postPayment&quot;: true } ], &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

## Example Input & Output V3

<![CDATA[{ &quot;requestList&quot;: [ { &quot;operRefNo&quot;: &quot;NPC-20260625-00001&quot; } ], &quot;systemEnum&quot;: &quot;DEPOSIT_PAY&quot; }]]>
<![CDATA[{ &quot;data&quot;: [ { &quot;paymentHeaderId&quot;: null, &quot;batchOperNo&quot;: &quot;CSHEA26062500001&quot;, &quot;batchOperStatus&quot;: &quot;UNP&quot;, &quot;operRefNo&quot;: &quot;NPC-20260625-00001&quot;, &quot;transactionStatus&quot;: &quot;REJ&quot;, &quot;paidDate&quot;: 1782666000000, &quot;chequeStatus&quot;: null, &quot;chequeNo&quot;: null, &quot;chequeIssueDate&quot;: null, &quot;chequeRedeemDate&quot;: null, &quot;chequeExpiryDate&quot;: null, &quot;isPostPayment&quot;: true, &quot;approvedDate&quot;: 1782730297346, &quot;recordDate&quot;: 1782666000000, &quot;targetStatus&quot;: &quot;ICF&quot;, &quot;batchPaymentNo&quot;: &quot;A25690629005&quot;, &quot;bankAccount&quot;: &quot;8521000071&quot;, &quot;service&quot;: &quot;AUTO_PAY&quot;, &quot;updatedBy&quot;: &quot;SYSTEM&quot;, &quot;approvedBy&quot;: &quot;fin3&quot;, &quot;recordBy&quot;: &quot;SYSTEM&quot;, &quot;reason&quot;: &quot;ACIV&quot;, &quot;apiStatusCode&quot;: &quot;EV033&quot;, &quot;apiStatusDesc&quot;: &quot;Payee account invalid&quot;, &quot;newDepositNo&quot;: &quot;690001101121&quot; } ], &quot;message&quot;: &quot;Success&quot;, &quot;code&quot;: 200 }]]>

---

## Hyperlinks บนหน้านี้

- [/thaisamut/rs/paymentmg/v2/payment-verification](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/benefit/getPaymentVerificationV2)
- [/thaisamut/rs/paymentmg/v3/payment-verification](http://11.100.8.44/thaisamut/pub/paymentmg/swagger#/benefit/getPaymentVerificationV3)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [cf_mapping_external_status_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_mapping_external_status_data)
