# 02-05-21_03 Insert Table  tx_cp_rep_source

- **Page ID:** 1356726865
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-21 Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ > 02-05-21_03 Insert Table  tx_cp_rep_source
- **Depth:** 5

---

| **No** | **Field** | **Data Source** |
|---|---|---|
| 1 | id | Auto Running No. |
| 2 | tx_cp_rep_id | [tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id |
| 3 | source_system | Fix : "Cenpay" |
| 4 | cp_rep_date | วันที่สร้างข้อมูล |
| 5 | oper_ref_no | input : operRefNo. |
| 6 | ref_verify_batch_no | input : refVerifyBatchNo |
| 7 | ref_approve_batch_no | input : refApproveBatchNo |
| 8 | reference_number_edw | input : referenceNumberEdw |
| 9 | payment_type | input : paymentType |
| 10 | payment_channel | input : paymentChannel |
| 11 | transfer_seq | input : paymentRound |
| 12 | payment_status | input : paymentStatus |
| 13 | payment_amount | input : paymentAmount |
| 14 | paid_date | input : paidDate |
| 15 | branch_service_code | input : branchServiceCode |
| 16 | branch_service_name | input : branchServiceName |
| 17 | bank_id | input : bankId |
| 18 | bank_name | input : bankName |
| 19 | bank_acc_branch | input : bankAccBranch |
| 20 | bank_acc_no | input : bankAccNo |
| 21 | bank_acc_name | input : bankAccName |
| 22 | promptpay_no | input : promptpayNo |
| 23 | cheque_no | input : chequeNo |
| 24 | cheque_status | input : chequeStatus |
| 25 | cheque_issue_date | input : chequeIssueDate |
| 26 | cheque_redeem_date | input : chequeRedeemDate |
| 27 | cheque_expiry_date | input : chequeExpiryDate |
| 28 | returned_cheque_date | input : returnedChequeDate |
| 29 | returned_cheque_remark | Fix : null |
| 30 | oic_repending_date | วันที่และเวลาสร้างข้อมูล + 10 ปี **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----**reruestPaymentDate + 10 ปีเช่น 29/02/2024 06:00 + 10 ปี ต้องเท่ากับ 28/02/2034 06:00 เนื่องจากปี 2034 ไม่มี 29 ก.พ. |
| 31 | beneficiary_title | input : beneficiaryTitle |
| 32 | beneficiary_name | input : beneficiaryName |
| 33 | beneficiary_surname | input : beneficiarySurname |
| 34 | beneficiary_relation | input : beneficiaryRelation |
| 35 | vetify_date | Fix : null |
| 36 | vetify_by_fullname | Fix : null |
| 37 | paid_by | Fix : null |
| 38 | mail_no | Fix : null |
| 39 | **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----**reruest_payment_date | reruestPaymentDate |
| 40 | **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----**payment_due_date | paymentDueDate |
| 41 | **------ Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ---**payment_approved_date | paymentApprovedDate |
| 42 | created_by | Fix : "System" |
| 43 | created_date | วันที่และเวลาสร้างข้อมูล |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
