# 10 WS สำหรับดึงรายการจ่าย API Payment ที่ Payment Managemet

- **Page ID:** 1339195564
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195564
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management > 10 WS สำหรับดึงรายการจ่าย API Payment ที่ Payment Managemet
- **Depth:** 4

---

[ [Overview](#id-10WSสำหรับดึงรายการจ่ายAPIPaymentที่PaymentManagemet-Overview) ] [ [Input](#id-10WSสำหรับดึงรายการจ่ายAPIPaymentที่PaymentManagemet-Input) ] [ [Process](#id-10WSสำหรับดึงรายการจ่ายAPIPaymentที่PaymentManagemet-Process) ] [ [Output](#id-10WSสำหรับดึงรายการจ่ายAPIPaymentที่PaymentManagemet-Output) ]

## Overview

Web Service สำหรับรับข้อมูลการจ่ายจาก Payment Management
**Repositories**: -
**Service path**
**POST :**
**** Swagger :
Icon
TYPE : <GET, POST, PUT, DELETE>
**อธิบายได้ดังนี้**
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input

| Name | Type | Description | Example | Validation | Mandatory |
|---|---|---|---|---|---|
| paymentDetailId | int8 | รหัสการจ่าย | 1 |   |   |

## Process

**Query ดึงข้อมูลธนาคาร**

| table | field | condition |
|---|---|---|
| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) | * | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id = @paymentId จากข้อ 1 |
| [tx_payment_detail_split](/display/RDSCPENH/tx_payment_detail_split) | transaction_noamount | กรณี [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).flag_split = Yให้ดึง [tx_payment_detail_split](/display/RDSCPENH/tx_payment_detail_split).transaction_no,amount แทน [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)where [tx_payment_detail_split](/display/RDSCPENH/tx_payment_detail_split).id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payment_detail_id |
| [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment) | batch_payment_no | [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_id |
| [tx_policy_detail](/display/RDSCPENH/tx_policy_detail) | card_no | [tx_policy_detail](/display/RDSCPENH/tx_policy_detail).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |

| Field | Description | Mapping Data |
|---|---|---|
| apiType | ประเภท API | ตรวจสอบช่องทางการจ่าย [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payment_channel และ รหัสธนาคารปลายทาง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bot_bank_codeGroupช่องทางการจ่ายรหัสธนาคารปลายทางส่งข้อมูล1กรณีเป็นโอนเงินโอนด่วน **TRB,TRE**006KTB2กรณีเป็นโอนเงินโอนด่วน **TRB,TRE**ไม่ใช่ 006OTH3กรณีช่องทางการจ่ายเป็นพร้อมเพย์ PMP- PMP4กรณีไม่เข้าเงื่อนไขด้านบน KTB |
| Group | ช่องทางการจ่าย | รหัสธนาคารปลายทาง | ส่งข้อมูล |
| 1 | กรณีเป็นโอนเงินโอนด่วน **TRB,TRE** | 006 | KTB |
| 2 | กรณีเป็นโอนเงินโอนด่วน **TRB,TRE** | ไม่ใช่ 006 | OTH |
| 3 | กรณีช่องทางการจ่ายเป็นพร้อมเพย์ PMP | - | PMP |
| 4 | กรณีไม่เข้าเงื่อนไขด้านบน |   | KTB |
| tranDate | Requester Identifier Date "YYYYMMDD" | วันปัจจุบัน |
| tranTime | Requester Identifier Time "HH:mm:ss" (24Hr) | เวลาปัจจุบัน |
| transRefNo | transaction_no (Check dup) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).transaction_no |
| tranAmount | 15 digits + 2 precision | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount |
| payerBankCode | รหัสธนาคารบริษัท | Fix : 006 (KTB) |
| payerAccount | เลขบัญชีธนาคารบริษัท | 1. ดึงข้อมูลรหัสธนาคารจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description,configwhere [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code2.แสดงเลขที่บัญชี [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).description โดยไม่ต้องมี -ตัวอย่างเช่น 9250025955 |
| resendFlag | Fix : N - Normal | Fix : N |
| reference | batch_payment_no | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no |
| **ประกอบข้อมูลส่วนประเภทการจ่าย** |   |   |
|   |   | **ตรวจสอบ [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payment_channel**1 กรณีประเภทการจ่ายเป็นโอนเงิน (TRB,TRE) หรือไม่ใช่พร้อมเพย์ (PMP)FieldDescriptionMapping DataRemarkpayeeBankCodeรหัสธนาคารผู้รับเงิน[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bot_bank_code payeeAccountเลขบัญชีธนาคารผู้รับเงิน[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_account_no payeeNameชื่อบัญชีผู้รับเงิน[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name +[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_nameupdate by patcha.vo 22/07/2026citizenIdเลขประจำตัวประชาชนผู้รับเงิน1.กรณี apiType = KTB[tx_policy_detail](/display/RDSCPENH/tx_policy_detail).card_no2.กรณี apiType ไม่ใช่ KTB ส่งค่า NULL 2.2 กรณีประเภทการจ่ายเป็นพร้อมเพย์ (PMP)FieldDescriptionMapping DataRemarkpromptpayNoPromptPay ID[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).promptpay_no promptpayNameชื่อบัญชีผู้รับเงิน[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name +[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_nameupdate by patcha.vo 22/07/2026promptpayType"NATID" = Citizen ID or Tax ID "MSISDN" = Mobile Numberตรวจสอบ [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).promptpay_typepromptpay_typeส่งข้อมูลINATIDMMSISDN |
| Field | Description | Mapping Data | Remark |
| payeeBankCode | รหัสธนาคารผู้รับเงิน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bot_bank_code |   |
| payeeAccount | เลขบัญชีธนาคารผู้รับเงิน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).bank_account_no |   |
| payeeName | ชื่อบัญชีผู้รับเงิน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name +[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_name | update by patcha.vo 22/07/2026 |
| citizenId | เลขประจำตัวประชาชนผู้รับเงิน | 1.กรณี apiType = KTB[tx_policy_detail](/display/RDSCPENH/tx_policy_detail).card_no2.กรณี apiType ไม่ใช่ KTB ส่งค่า NULL |   |
| Field | Description | Mapping Data | Remark |
| promptpayNo | PromptPay ID | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).promptpay_no |   |
| promptpayName | ชื่อบัญชีผู้รับเงิน | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name +[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_name | update by patcha.vo 22/07/2026 |
| promptpayType | "NATID" = Citizen ID or Tax ID "MSISDN" = Mobile Number | ตรวจสอบ [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).promptpay_typepromptpay_typeส่งข้อมูลINATIDMMSISDN |   |
| promptpay_type | ส่งข้อมูล |
| I | NATID |
| M | MSISDN |

## Output

<แสดงข้อมูลที่จะได้รับจาก service นี้>

| Name | Type | Description | Example Data |
|---|---|---|---|
| apiType | String | ประเภท API | KTB |
| tranDate | Date | วันปัจจุบัน | YYYYMMDD |
| tranTime | Time | เวลาปัจจุบัน | HH:mm:ss |
| transRefNo | String | เลขอ้างอิง | 202605010001 |
| tranAmount | Numeric | จำนวนเงิน | 2500.00 |
| payerBankCode | String | รหัสธนาคารบริษัท | 006 |
| payerAccount | String | เลขบัญชีธนาคารบริษัท | 0236064770 |
| resendFlag | String | เงื่อนไขการส่งของธนาคาร | N |
| reference | String | เลขอ้างอิงระดับ Batch | A25680501001 |
| payeeBankCode | Numeric | รหัสธนาคารผู้รับเงิน | 006 |
| payeeAccount | String | เลขบัญชีธนาคารผู้รับเงิน | 0362142220 |
| payeeName | String | ชื่อบัญชีผู้รับเงิน | ไทยสมุทร ประกันชีวิต |
| citizenId | String | เลขประจำตัวประชาชนผู้รับเงิน | 1300622025011 |
| promptpayNo | String | PromptPay ID | 1300622025011 |
| promptpayName | String | ชื่อบัญชีผู้รับเงินพร้อมเพย์ | ไทยสมุทร ประกันชีวิต |
| promptpayType | String | ประเภทพร้อมเพย์ | NATID |

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_policy_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail)
- [tx_policy_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_policy_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_policy_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
