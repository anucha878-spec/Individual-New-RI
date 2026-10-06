# 02-05-21_07 Insert Table tx_cp_rep_benefit_expense

- **Page ID:** 1356726917
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_07+Insert+Table+tx_cp_rep_benefit_expense
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-21 Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ > 02-05-21_07 Insert Table tx_cp_rep_benefit_expense
- **Depth:** 5

---

| No. | **Field** | **Data Source** |
|---|---|---|
| 1 | id | Auto Running No. |
| 2 | tx_cp_rep_id | [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep).id |
| 3 | loan_amount | input : loanAmount |
| 4 | apl_amount | input : aplAmount |
| 5 | loan_interest_amount | input : loanInterestAmount |
| 6 | apl_interest_amount | input : aplInterestAmount |
| 7 | overdue_loan_daily_interest_amount | input : overdueLoanDailyInterestAmount |
| 8 | overdue_apl_daily_interest_amount | input : overdueAplDailyInterestAmount |
| 9 | interest_prem_amount | input : interestPremAmount |
| 10 | overdue_apl_interest_amount | input : overdueAplInterestAmount |
| 11 | apl_compound_interest_amount | input : aplCompoundInterestAmount |
| 12 | overdue_prem_amount | input : overduePremAmount |
| 13 | new_policy_prem_amount | input : newPolicyPremAmount |
| 14 | other_policy_prem_amount | input : otherPolicyPremAmount |
| 15 | premlife_discount_first_year | input : premLifeDiscountFirstYear |
| 16 | premlife_discount_next_year | input : premLifeDiscountNextYear |
| 17 | premacc_discount_first_year | input : premAccDiscountFirstYear |
| 18 | premacc_discount_next_year | input : premAccDiscountNextYear |
| 19 | interest_amount | input : interestAmount |
| 20 | service_income_amount | input : serviceIncomeAmount |
| 21 | health_examination_amount | input : healthExaminationAmount |
| 22 | agent_clawback | input : agentClawback |
| 23 | survivor_amount | input : survivorAmount |
| 24 | claim_health_amount | input : claimLifeAmount |
| 25 | claim_accn_amount | input : claimAccnAmount |
| 26 | overdue_return_prem_amount | input : overdueReturnPremAmount |
| 27 | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****deposit_amount | input : depositAmount |
| 28 | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****stamp_duty | input : stampDuty |
| 29 | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****loan_compound_interest_amount | input : loanCompoundInterestAmount |
| 30 | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****accrued_prem_amount | input : accruedPremAmount |
| 31 | ****---- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 14/07/2026 ----****claim_accn_death_amount | input : claimAccnDeathAmount |
| 32 | created_by | Fix : "System" |
| 33 | created_date | วันที่และเวลาสร้างข้อมูล |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
