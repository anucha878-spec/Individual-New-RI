# 02_40 ส่งข้อมูลอนุมัติจ่ายเงินไประบบ Payment Management

- **Space:** `RDSOP` — Online Payment
- **Page ID:** 1313898946
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313898946

---

[ [Objectives](#id-02_40ส่งข้อมูลอนุมัติจ่ายเงินไประบบPaymentManagement-Objectives) ] [ [Process Overview](#id-02_40ส่งข้อมูลอนุมัติจ่ายเงินไประบบPaymentManagement-ProcessOverview) ] [ [Preconditions](#id-02_40ส่งข้อมูลอนุมัติจ่ายเงินไประบบPaymentManagement-Preconditions) ] [ [Process Description](#id-02_40ส่งข้อมูลอนุมัติจ่ายเงินไประบบPaymentManagement-ProcessDescription) ]

## Objectives

- ส่งข้อมูล Transaction การอนุมัติจ่ายเงินจากระบบ Online Payment ไประบบ Payment Management

## Process Overview

- ส่งข้อมูล Transaction การอนุมัติจ่ายเงินให้ระบบ Payment Management
- รายการข้อมูลส่งไปแสดงที่หน้าจอ [[Menu PY01 : รับรายการ] FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1276117765)

## Preconditions

- รายการข้อมูลการอนุมัติจ่ายระบบ Online Payment จากหน้าจอ
  - [FS 1.1 หน้าจอ Popup ระบุผลการอนุมัติ (AD)](/pages/viewpage.action?pageId=1286668298)
  - [FS 1.2 หน้าจอแสดงรายละเอียดฝ่ายบัญชีผู้อนุมัติพิจารณาอนุมัติ AP (AD)](/pages/viewpage.action?pageId=1286668301)
  - [2. FS หน้าจอสร้าง แก้ไข และดูรายละเอียดข้อมูลผู้ใช้งาน](/pages/viewpage.action?pageId=1239285767)
  - [Batch 04 : Batch Auto Update สถานะการจ่ายเงิน จากระบบ Payment Management](/pages/viewpage.action?pageId=1314193638)

## Process Description

นำเข้าข้อมูล (Input) และส่งข้อมูลอนุมัติจ่าย โดยเรียก API [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](/pages/viewpage.action?pageId=1337720992) โดยส่ง parameter input ดังนี้
**Mapping Input Parameter**

| Parameter Name | Mapping Field | Description |
|---|---|---|
| **Payment Header** |
| batchOperNo | กำหนดค่าที่ได้จาก batchOperNo (input) | เลขที่ใบคำขอ |
| transactionGroup | กำหนดค่าที่ได้จาก transactionGroup (input) | กลุ่มธุรกรรม |
| transactionType | กำหนดค่าที่ได้จาก transactionType (input) | รายการธุรกรรม |
| paymentChannel | กำหนดค่าที่ได้จาก paymentChannel (input) | ช่องทางการจ่ายเงิน |
| accReferenceNo | กำหนดค่าที่ได้จาก accReferenceNo (input) | Voucher No (ตั้งจ่ายเจ้าหนี้) |
| requestPaymentDate | กำหนดค่าที่ได้จาก requestPaymentDate (input) | วันที่ Request จ่ายเงิน |
| totalTransaction | กำหนดค่าที่ได้จาก totalTransaction (input) | จำนวนรายการรวม |
| totalAmount | กำหนดค่าที่ได้จาก totalAmount (input) | จำนวนเงินรวม |
| approvedBy | กำหนดค่าที่ได้จาก approvedBy (input) | ชื่อผู้อนุมัติจากหน่วยงานต้นทาง |
| approvedDate | approvedDateกำหนดค่าที่ได้จาก (input) | วันที่อนุมัติข้อมูลการจ่ายจากหน่วยงานต้นทาง |
| **List <PaymentDetail>** |
| operRefNo | กำหนดค่าที่ได้จาก operRefNo (input) | รหัสอ้างอิงข้อมูลการจ่าย |
| paymentDashboardId | กำหนดค่าที่ได้จาก paymentDashboardId (input) | รหัสข้อมูล edw dashboard |
| transactionGroup | กำหนดค่าที่ได้จาก transactionGroup (input) | กลุ่มธุรกรรม |
| transactionType | กำหนดค่าที่ได้จาก transactionType (input) | รายการธุรกรรม |
| paymentChannel | กำหนดค่าที่ได้จาก paymentChannel (input) | ช่องทางการจ่ายเงิน |
| requestPaymentDate | กำหนดค่าที่ได้จาก requestPaymentDate (input) | วันที่ Request จ่ายเงิน |
| paymentDueDate | กำหนดค่าที่ได้จาก paymentDueDate (input) | วันที่ครบกำหนดรับเงิน |
| payeeShortTitle | กำหนดค่าที่ได้จาก payeeShortTitle (input) | คำนำหน้า แบบย่อ |
| payeeFirstName | กำหนดค่าที่ได้จาก payeeFirstName (input) | ชื่อผู้รับเงิน |
| payeeLastName | กำหนดค่าที่ได้จาก payeeLastName (input) | นามสกุลผู้รับเงิน |
| hospitalName | กำหนดค่าที่ได้จาก hospitalName (input) | ชื่อสถานพยาบาล |
| mobileNo | กำหนดค่าที่ได้จาก mobileNo (input) | เบอร์มือถือผู้รับเงิน สำหรับส่ง SMS |
| bankId | กำหนดค่าที่ได้จาก bankId (input)(Edit by boonma.no 26/05/2569 ปรับให้ส่ง bankId ไปทำจ่าย อ้างอิง [issues/75542](https://redmine.ochi.link/issues/75542))ส่งข้อมูลชื่อย่อธนาคาร (bankAbbrName ที่รับมาจาก input) ไปค้นหาที่ตาราง [ms_option_list](/display/RDSOP/ms_option_list) โดยเงื่อนไข bankAbbrName (ที่รับมาจาก input) เท่ากับ [ms_option_list](/display/RDSOP/ms_option_list).name และ [ms_option_list](/display/RDSOP/ms_option_list).status = 'Active' และ [ms_option_list](/display/RDSOP/ms_option_list).option_type_code = 'BANK' นำข้อมูลจากฟิลด์ id_cis ที่ได้มาใช้ (Edit by boonma.no 13/07/2569 ปรับเงื่อนไขการหาข้อมูล อ้างอิง [issues/80440](https://redmine.ochi.link/issues/80440))) | รหัสธนาคาร |
| bankName | กำหนดค่าที่ได้จาก bankName (input)(Edit by boonma.no 17/06/2569 ปรับให้ส่ง bank_name จากข้อมูลธนาคารที่ได้จาก WS ไปทำจ่าย อ้างอิง [issues/75542](https://redmine.ochi.link/issues/75542))ส่งข้อมูลชื่อย่อธนาคาร (bankAbbrName ที่รับมาจาก input) ไปค้นหาที่ตาราง [ms_option_list](/display/RDSOP/ms_option_list) โดยเงื่อนไข bankAbbrName (ที่รับมาจาก input) เท่ากับ [ms_option_list](/display/RDSOP/ms_option_list).name และ [ms_option_list](/display/RDSOP/ms_option_list).status = 'Active' และ [ms_option_list](/display/RDSOP/ms_option_list).option_type_code = 'BANK' นำข้อมูลจากฟิลด์ bank_name ที่ได้มาใช้ (Edit by boonma.no 13/07/2569 ปรับเงื่อนไขการหาข้อมูล อ้างอิง [issues/80440](https://redmine.ochi.link/issues/80440))) | ชื่อธนาคาร (ภาษาไทย) |
| bankAbbrName | กำหนดค่าที่ได้จาก bankAbbrName (input) | รหัสตัวย่อธนาคาร |
| botBankCode | (Edit by suppachai.ta 10/06/2569 ปรับให้ส่ง botBankCode ไปทำจ่าย อ้างอิง [issues/75542](https://redmine.ochi.link/issues/75542))ส่งข้อมูลชื่อย่อธนาคาร (bankAbbrName ที่รับมาจาก input) ไปค้นหาที่ตาราง [ms_option_list](/display/RDSOP/ms_option_list) โดยเงื่อนไข bankAbbrName (ที่รับมาจาก input) เท่ากับ [ms_option_list](/display/RDSOP/ms_option_list).name และ [ms_option_list](/display/RDSOP/ms_option_list).status = 'Active' และ [ms_option_list](/display/RDSOP/ms_option_list).option_type_code = 'BANK' นำข้อมูลจากฟิลด์ bot_bank_code ที่ได้มาใช้ (Edit by boonma.no 13/07/2569 ปรับเงื่อนไขการหาข้อมูล อ้างอิง [issues/80440](https://redmine.ochi.link/issues/80440))) | รหัสมาตรฐานธนาคาร |
| bankAccountNo | กำหนดค่าที่ได้จาก bankAccountNo (input) | เลขที่บัญชี |
| bankBranch | กำหนดค่าที่ได้จาก bankBranch (input) | สาขาธนาคาร |
| promptpayType | กำหนดค่าที่ได้จาก promptpayType (input) | ประเภทการโอนพร้อมเพย์ |
| promptpayNo | กำหนดค่าที่ได้จากpromptpayNo (input) | เลขพร้อมเพย์ |
| creditCardNo | กำหนดค่าที่ได้จาก creditCardNo (input) | เลขที่บัตรเครดิต |
| amount | กำหนดค่าที่ได้จาก amount (input) | จำนวนเงินจ่าย |
| grossAmount | กำหนดค่าที่ได้จาก grossAmount (input) | Gross Amount |
| whtAmount | กำหนดค่าที่ได้จาก whtAmount (input) | Withholding Tax Amount |
| taxName | กำหนดค่าที่ได้จาก taxName (input) | ชื่อผู้เสียภาษี |
| taxAddress1 | กำหนดค่าที่ได้จาก taxAddress1 (input) | ที่อยู่ 1 |
| taxAddress2 | กำหนดค่าที่ได้จาก taxAddress2 (input) | ที่อยู่ 2 |
| taxNo | กำหนดค่าที่ได้จาก taxNo (input) | เลขที่ผู้เสียภาษี |
| taxType | กำหนดค่าที่ได้จาก taxType (input) | ประเภทภาษี |
| whtType | กำหนดค่าที่ได้จาก whtType (input) | WHT Type |
| whtRate | กำหนดค่าที่ได้จาก whtRate (input) | อัตราภาษีหัก ณ ที่จ่าย |
| invoiceNo | กำหนดค่าที่ได้จาก invoiceNo (input) | เลขที่ใบ Invoice |
| email | กำหนดค่าที่ได้จาก email (input) | email |
|   | (Edit by boonma.no 17/06/2569 ปรับฟิลด์กลุ่มนี้ไปไว้ให้ส่งข้อมูลเป็น List อ้างอิง [/issues/80579](https://redmine.ochi.link/issues/80579)) |   |
| voucherNoWht | กำหนดค่าที่ได้จาก voucherNoWht(input) | เลข Voucher No Withholding Tax |
| apVoucher | Voucher AP (input) |   |
| accCode | รหัสเจ้าหนี้จ่ายพนักงาน (input) |   |
| taxCode | รหัสภาษี (input) |   |
| requestNo | เลขที่ใบคำขอ (input) |   |
| payDetail | กำหนดค่าที่ได้จาก payDetail (input) | รายละเอียดการเบิก |
| **ข้อมูลกรมธรรม์** |
| policyNo | กำหนดค่าที่ได้จาก policyNo (input) | เลขที่กรมธรรม์ |
| policyType | กำหนดค่าที่ได้จาก policyType (input) | ประเภทกรมธรรม์ |
| productCode | กำหนดค่าที่ได้จาก productCode (input) | แบบประกัน |
| branchSourceCode | กำหนดค่าที่ได้จาก branchSourceCode (input) | รหัสสาขาต้นสังกัด |
| branchRegisterCode | กำหนดค่าที่ได้จาก branchRegisterCode (input) | รหัสสาขารับเรื่อง |
| branchServiceCode | กำหนดค่าที่ได้จาก branchServiceCode (input) | รหัสสาขาบริการ |
| channelCode | กำหนดค่าที่ได้จาก channelCode (input) | รหัสช่องทางการขาย |
| ****opay List[]****(Edit by boonma.no 02/06/2569 เพิ่มฟิดล์ส่งข้อมูล อ้างอิง [issues/74827](https://redmine.ochi.link/issues/74827))(Edit by boonma.no 17/06/2569 ปรับให้ส่งข้อมูลเป็น List อ้างอิง [issues/80579](https://redmine.ochi.link/issues/80579)) |
| voucherNoWht | กำหนดค่าที่ได้จาก voucherNoWht (input) | เลข Voucher No Withholding Tax |
| apVoucher | กำหนดค่าที่ได้จาก apVoucher (input) | Voucher AP |
| accCode | กำหนดค่าที่ได้จาก accCode (input) | รหัสเจ้าหนี้จ่ายพนักงาน |
| taxCode | กำหนดค่าที่ได้จาก taxCode (input) | รหัสภาษี |
| requestNo | กำหนดค่าที่ได้จาก requestNo (input) | เลขที่ใบคำขอ |
| payDetail | กำหนดค่าที่ได้จาก payDetail (input) | รายละเอียดการเบิก |
| requestType | กำหนดค่าที่ได้จาก requestType (input) | ประเภทคำขอ |
| **ข้อมูลเอกสาร List[]** |
| documentName | กำหนดค่าที่ได้จาก documentName (input) | ชื่อเอกสาร |
| dmsDocId | กำหนดค่าที่ได้จาก dmsDocId (input) | รหัสอ้างอิงระบบ DMS |
| documentUploadDate | กำหนดค่าที่ได้จาก documentUploadDate (input) | วันและเวลาที่อัปโหลดเอกสาร |
| documentUploadBy | กำหนดค่าที่ได้จาก documentUploadBy (Input) | ผู้อัปโหลดเอกสาร |
| **ข้อมูลเอกสาร **supplier List[]**** |
| supplierCode | กำหนดค่าที่ได้จาก supplierCode (Input) | รหัส Supplier |
| supplierName | กำหนดค่าที่ได้จาก supplierName (Input) | ชื่อ Supplier |
| address1 | กำหนดค่าที่ได้จาก address1 (Input) | ที่อยู่1 |
| address2 | กำหนดค่าที่ได้จาก address2 (Input) | ที่อยู่2 |
| taxNo | กำหนดค่าที่ได้จาก taxNo (Input) | เลขที่ผู้เสียภาษี |
| taxType | กำหนดค่าที่ได้จาก taxType (Input) | ประเภทภาษี |
| taxCode | กำหนดค่าที่ได้จาก taxCode (Input) | รหัสภาษี |
| whtType | กำหนดค่าที่ได้จาก whtType (Input) | WHT Type |
| whtRate | กำหนดค่าที่ได้จาก whtRate (Input) | อัตราภาษีหัก ณ ที่จ่าย |
| grossAmount | กำหนดค่าที่ได้จาก grossAmount (Input) | ยอดเงินก่อนหักภาษี |
| whtAmount | กำหนดค่าที่ได้จาก whtAmount (Input) | ยอดเงินภาษี |

1. ข้อมูล response ที่ได้จาก API**ข้อมูล response ที่ได้จาก API** ข้อมูล response ที่ได้จาก API มีดังนี้NameTypeDescriptionExamplestatusCodeNumericResponse Status Code200statusMessageStringResponse Status MessageSuccessกำหนด @output_status_code มีค่าเท่ากับ statusCode กำหนด @output_status_message มีค่าเท่ากับ statusMessage
2. Update ข้อมูลการอนุมัติจ่ายเงิน Table : [tx_request_employee](/display/RDSOP/tx_request_employee) Column NameValueRemarkapprove_payment_complete_flagกรณีที่ @output_status_code มีค่าเท่ากับ 200กำหนดค่าเป็น 'Y'กรณีที่ @output_status_code มีค่าไม่เท่ากับ 200กำหนดค่าเป็น 'N' error_no_batch_approve_paymentกรณีที่ error_no_batch_approve_payment (input) มีค่าข้อมูลกำหนดค่าเป็น error_no_batch_approve_payment(input) + 1กรณีที่ error_no_batch_approve_payment (input) ไม่มีค่าข้อมูล ไม่ต้อง Update ข้อมูลกรณีเป็นรายการที่มาจากหน้าจอบัญชีอนุมัติ , หน้าจอผู้ใช้งาน (แก้ไขข้อมูลบัญชี) ไม่ต้องดำเนินการส่วนนี้updated_date@Username ของ user login updated_bynow() โดยมีเงื่อนไขในการ Update ดังนี้ต้องเป็นรายการที่ เลขทีใบคำขอ (INTERNAL) ([tx_request_employee](http://wiki.thaisamut.co.th/display/RDSOP/tx_request_employee).register_no) มีค่าเท่ากับ registerNo (input) บันทึกข้อมูลการส่ง/ผลการส่งข้อมูลที่ตาราง [tx_payment_approve_payment](/display/RDSOP/tx_payment_approve_payment) Column NameValueidAuto runningregister_noกำหนดค่าที่ได้จาก registerNo (input)batchOperNoกำหนดค่าที่ได้จาก batchOperNooperRefNoกรณีที่ประเภทใบคำขอเป็น เบิกจ่ายร้านค้า (Flow 4) กำหนดค่าให้เป็น NULLกรณีที่ประเภทใบคำขอเป็น เบิกเงินทดรอง (Flow 2) ,เคลียร์เงินทดรอง (Flow 3) กำหนดค่าที่ได้จาก operRefNo (input) transactionTypeกำหนดค่าที่ได้จาก transactionType (input) ส่วน Payment HeaderaccReferenceNoกำหนดค่าที่ได้จาก accReferenceNo (input)requestPaymentDateกำหนดค่าที่ได้จาก requestPaymentDate (input)payee_first_nameกำหนดค่าที่ได้จาก payeeFirstName (input)payee_last_nameกำหนดค่าที่ได้จาก payeeLastName (input)bankAccountNoกำหนดค่าที่ได้จาก bankAccountNo (input)emailกำหนดค่าที่ได้จาก email (input)response_status_code@output_status_coderesponse_status_message@output_status_messageinput_dataJSON ข้อมูลอนุมัติจ่าย (*จากข้อที่ 2*)statusกำหนดให้เป็น 'Active'created_datenow()created_by@Username ของ user loginupdated_dateกำหนดให้เป็น NULLupdated_byกำหนดให้เป็น NULL
3. Output**Output** OutputNameTypeDescriptionSource Fieldstatus_codeNumericResponse Status Code@output_status_codestatus_messageStringResponse Status Message@output_status_messagePossible Response Message (ref : [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](/pages/viewpage.action?pageId=1337720992))CodeMessage200Success204No Content400Bad Request409Conflict500Server Error 412Invalid parameters Error Message ที่ใช้ภายในระบบ Online Payment

---

## Hyperlinks บนหน้านี้

- [[Menu PY01 : รับรายการ] FS-01-01 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1276117765)
- [FS 1.1 หน้าจอ Popup ระบุผลการอนุมัติ (AD)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1286668298)
- [FS 1.2 หน้าจอแสดงรายละเอียดฝ่ายบัญชีผู้อนุมัติพิจารณาอนุมัติ AP (AD)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1286668301)
- [2. FS หน้าจอสร้าง แก้ไข และดูรายละเอียดข้อมูลผู้ใช้งาน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1239285767)
- [Batch 04 : Batch Auto Update สถานะการจ่ายเงิน จากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1314193638)
- [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337720992)
- [issues/75542](https://redmine.ochi.link/issues/75542)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [issues/80440](https://redmine.ochi.link/issues/80440)
- [issues/75542](https://redmine.ochi.link/issues/75542)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [issues/80440](https://redmine.ochi.link/issues/80440)
- [issues/75542](https://redmine.ochi.link/issues/75542)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [ms_option_list](http://wiki.thaisamut.co.th/display/RDSOP/ms_option_list)
- [issues/80440](https://redmine.ochi.link/issues/80440)
- [/issues/80579](https://redmine.ochi.link/issues/80579)
- [issues/74827](https://redmine.ochi.link/issues/74827)
- [issues/80579](https://redmine.ochi.link/issues/80579)
- [tx_request_employee](http://wiki.thaisamut.co.th/display/RDSOP/tx_request_employee)
- [tx_request_employee](http://wiki.thaisamut.co.th/display/RDSOP/tx_request_employee)
- [tx_payment_approve_payment](http://wiki.thaisamut.co.th/display/RDSOP/tx_payment_approve_payment)
- [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337720992)
