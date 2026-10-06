# cf_bank_account_mapping_data

- **Page ID:** 1280475699
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_bank_account_mapping > cf_bank_account_mapping_data
- **Depth:** 6

---

อ้างอิง : [Mapping วิธีการจ่าย](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=1033979951#gid=1033979951)
**Initial Data** >>> [cf_bank_account_mapping](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=533128776#gid=533128776)

| batch_payment_type | payment_channel_type | cheque_expired | service (lookup_key) | bank_account | is_active | *Remark (Non-DB)* |
|---|---|---|---|---|---|---|
| B | TRANSFER |   | BBL_MCL | BBL_04 | TRUE |   |
| B | TRANSFER |   | BBL_E_WHT | BBL_04 | TRUE |   |
| B | TRANSFER |   | BBL_PP_ID | BBL_05 | TRUE |   |
| B | TRANSFER |   | BBL_PAY | BBL_04 | TRUE |   |
| B | TRANSFER |   | KB_PAY | KB_06 | TRUE |   |
| B | TRANSFER |   | KTB_PAY | KTB_01 | TRUE |   |
| B | TRANSFER |   | SCB_DIR | SCB_02 | TRUE |   |
| B | TRANSFER |   | SCB_DIR | SCB_01 | TRUE |   |
| B | TRANSFER |   | SCB_ORFT | SCB_01 | TRUE |   |
| B | TRANSFER |   | TTB | TTB_02 | TRUE |   |
| B | TRANSFER |   | SCBT_MCL | SCBT_02 | TRUE |   |
| B | CHEQUE_BANK | 380 | CHE_SCBT | SCBT_01 | TRUE |   |
| B | CHEQUE_BANK | 380 | CHE_UOB | UOB_02 | TRUE |   |
| B | CHEQUE_BANK | 380 | CHE_UOB_C | UOB_02 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | BBL_02 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | BBL_03 | TRUE | Improvement RM#[61196](https://redmine.ochi.link/issues/61196)Edited by anocha.su 26/03/2569 |
| P | CHEQUE_COM | 180 | CHE_COM | KTB_04 | TRUE |   |
| /P | CHEQUE_COM | 180 | CHE_COM | KTB_06 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | BAY_01 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | KB_04 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | KB_05 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | TTB_01 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | TTB_03 | TRUE | Improvement RM#[60427](https://redmine.ochi.link/issues/60427)[https://redmine.ochi.link/issues/61196](https://redmine.ochi.link/issues/61196)Edited by patcha.vo 23/03/2569 |
| P | CHEQUE_COM | 180 | CHE_COM | TTB_05 | TRUE | Improvement RM#[60427](https://redmine.ochi.link/issues/60427)[https://redmine.ochi.link/issues/61196](https://redmine.ochi.link/issues/61196)Edited by patcha.vo 23/03/2569 |
| P | CHEQUE_COM | 180 | CHE_COM | SCB_04 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | SCB_05 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | MHCB_01 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | UOB_02 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | LH_02 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | SCBT_01 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | GSB_01 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | BAAC_02 | TRUE |   |
| P | CHEQUE_COM | 180 | CHE_COM | TCRB_01 | TRUE |   |
| P | OTHER |   | OTHER | BBL_01 | TRUE |   |
| P | OTHER |   | OTHER | BBL_02 | TRUE |   |
| P | OTHER |   | OTHER | BBL_03 | TRUE |   |
| P | OTHER |   | OTHER | BBL_04 | TRUE |   |
| P | OTHER |   | OTHER | BBL_05 | TRUE |   |
| P | OTHER |   | OTHER | BBL_06 | TRUE |   |
| P | OTHER |   | OTHER | KTB_01 | TRUE |   |
| P | OTHER |   | OTHER | KTB_02 | TRUE |   |
| P | OTHER |   | OTHER | KTB_03 | TRUE |   |
| P | OTHER |   | OTHER | KTB_04 | TRUE |   |
| P | OTHER |   | OTHER | KTB_05 | TRUE |   |
| P | OTHER |   | OTHER | KTB_06 | TRUE |   |
| P | OTHER |   | OTHER | BAY_01 | TRUE |   |
| P | OTHER |   | OTHER | KB_01 | TRUE |   |
| P | OTHER |   | OTHER | KB_02 | TRUE |   |
| P | OTHER |   | OTHER | KB_03 | TRUE |   |
| P | OTHER |   | OTHER | KB_04 | TRUE |   |
| P | OTHER |   | OTHER | KB_05 | TRUE |   |
| P | OTHER |   | OTHER | KB_06 | TRUE |   |
| P | OTHER |   | OTHER | KB_07 | TRUE |   |
| P | OTHER |   | OTHER | KB_08 | TRUE |   |
| P | OTHER |   | OTHER | TTB_01 | TRUE |   |
| P | OTHER |   | OTHER | TTB_02 | TRUE |   |
| P | OTHER |   | OTHER | TTB_03 | TRUE |   |
| P | OTHER |   | OTHER | TTB_04 | TRUE |   |
| P | OTHER |   | OTHER | TTB_05 | TRUE |   |
| P | OTHER |   | OTHER | SCB_01 | TRUE |   |
| P | OTHER |   | OTHER | SCB_02 | TRUE |   |
| P | OTHER |   | OTHER | SCB_03 | TRUE |   |
| P | OTHER |   | OTHER | SCB_04 | TRUE |   |
| P | OTHER |   | OTHER | SCB_05 | TRUE |   |
| P | OTHER |   | OTHER | MHCB_01 | TRUE |   |
| P | OTHER |   | OTHER | MHCB_02 | TRUE |   |
| P | OTHER |   | OTHER | UOB_01 | TRUE |   |
| P | OTHER |   | OTHER | UOB_02 | TRUE |   |
| P | OTHER |   | OTHER | LH_01 | TRUE |   |
| P | OTHER |   | OTHER | LH_02 | TRUE |   |
| P | OTHER |   | OTHER | SCBT_01 | TRUE |   |
| P | OTHER |   | OTHER | SCBT_02 | TRUE |   |
| P | OTHER |   | OTHER | GSB_01 | TRUE |   |
| P | OTHER |   | OTHER | BAAC_01 | TRUE |   |
| P | OTHER |   | OTHER | BAAC_02 | TRUE |   |
| P | OTHER |   | OTHER | BAAC_03 | TRUE |   |
| P | OTHER |   | OTHER | TCRB_01 | TRUE |   |
| A | OTHER |   | BANK_CODE | BBL_02 | FALSE |   |
| A | OTHER |   | AUTO_PAY | KTB_06 | TRUE |   |

- No labels
- [Edit Labels](#)
[![User icon: Add a picture of yourself](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/profilepics/add_profile_pic.png)](/users/editmyprofilepicture.action)
Loading the Editor
Write a comment…
[Add Comment](/display/RDSCPENH/cf_bank_account_mapping_data?showComments=true&showCommentArea=true#addcomment)

---

## Hyperlinks บนหน้านี้

- [Mapping วิธีการจ่าย](https://docs.google.com/spreadsheets/d/1tJsoTCoWjEP7X7-Y_g65uXD0xKUzjU_N/edit?gid=1033979951#gid=1033979951)
- [cf_bank_account_mapping](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=533128776#gid=533128776)
- [61196](https://redmine.ochi.link/issues/61196)
- [60427](https://redmine.ochi.link/issues/60427)
- [https://redmine.ochi.link/issues/61196](https://redmine.ochi.link/issues/61196)
- [60427](https://redmine.ochi.link/issues/60427)
- [https://redmine.ochi.link/issues/61196](https://redmine.ochi.link/issues/61196)
- [/users/editmyprofilepicture.action](http://wiki.thaisamut.co.th/users/editmyprofilepicture.action)
- [Add Comment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping_data?showComments=true&showCommentArea=true#addcomment)
