# 02-05-21_08 Insert Table tx_cp_rep_benefit_receive

- **Page ID:** 1356726922
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_08+Insert+Table+tx_cp_rep_benefit_receive
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-21 Process บันทึกข้อมูลทะเบียนเงินผลประโยชน์ค้างรับ > 02-05-21_08 Insert Table tx_cp_rep_benefit_receive
- **Depth:** 5

---

| No. | Field | **Data Source** |
|---|---|---|
| 1 | id | Auto Running No. |
| 2 | tx_cp_rep_id | [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep).id |
| 3 | maturity_amount | input : maturityAmount |
| 4 | overdue_maturity_amount | input : overdueMaturityAmount |
| 5 | finance_reward_amount | input : financeRewardAmount |
| 6 | overdue_finance_reward_amount | input : overdueFinanceRewardAmount |
| 7 | survivor_amount | input : survivorAmount |
| 8 | overdue_survivor_amount | input : overdueSurvivorAmount |
| 9 | dividend_amount | input : dividendAmount |
| 10 | loan_amount | input : loanAmount |
| 11 | pension_amount | input : pensionAmount |
| 12 | overdue_pension_amount | input : overduePensionAmount |
| 13 | return_amount | input : returnAmount |
| 14 | overdue_return_amount | input : overdueReturnAmount |
| 15 | waiting_loan_amount | input : waitingLoanAmount |
| 16 | surrender_amount | input : surrenderAmount |
| 17 | overdue_surrender_amount | input : overdueSurrenderAmount |
| 18 | auto_surrender_amount | input : autoSurrenderAmount |
| 19 | overdue_auto_surrender_amount | input : overdueAutoSurrenderAmount |
| 20 | returnprem_first_year | input : returnPremFirstYear |
| 21 | returnprem_next_year | input : returnPremNextYear |
| 22 | returnrprem_pay_once | input : returnPremPayOnce |
| 23 | returnacc_first_year | input : returnAccFirstYear |
| 24 | returnacc_next_year | input : returnAccNextYear |
| 25 | returnacc_pay_once | input : returnAccPayOnce |
| 26 | returnrider_first_year | input : returnRiderFirstYear |
| 27 | returnrider_next_year | returnRiderNextYear |
| 28 | discount_prem_first_year | input : premLifeDiscountFirstYear |
| 29 | discount_prem_next_year | input : premLifeDiscountNextYear |
| 30 | discount_acc_first_year | input : premAccDiscountFirstYear |
| 31 | discount_acc_next_year | input : premAccDiscountNextYear |
| 32 | interest_prem_amount | input : interestPremAmount |
| 33 | interest_amount | input : interestAmount |
| 34 | interest_loan_amount | input : loanInterestAmount |
| 35 | interest_apl_amount | input : aplInterestAmount |
| 36 | claim_amount | Fix : null |
| 37 | other_amount | Fix : null |
| 38 | **----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 23/07/2026 ----**overdue_return_prem_amount | input : overdueReturnPremAmount |
| 39 | created_by | Fix : "System" |
| 40 | created_date | วันที่และเวลาสร้างข้อมูล |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
