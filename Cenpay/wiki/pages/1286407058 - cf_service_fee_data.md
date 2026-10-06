# cf_service_fee_data

- **Page ID:** 1286407058
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_service_fee_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_service_fee > cf_service_fee_data
- **Depth:** 6

---

**Initial Data** >>> [cf_service_fee](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1696567272#gid=1696567272)
**Reference Data** : [https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193)
**Remark** : กรณีไม่มีค่าธรรมเนียมต่างธนาคาร (other_bank_fee) จะใช้ค่าธรรมเนียม (fee) สำหรับทุกธนาคารปลายทาง

| Remark | service_code | service | fee | other_bank_fee | other_bank_flag | failed_transfer_fee | failed_transfer_other_fee | failed_transfer_flag | real_time_edw | cal_payment_date_edw |
|---|---|---|---|---|---|---|---|---|---|---|
|   | S01 | BBL_MCL | 6 | 8 | TRUE | 0 | 0 | FALSE | FALSE | -1 |
|   | S02 | BBL_E_WHT | 8 | 10 | TRUE | 2 | 2 | TRUE | FALSE | -1 |
| CPENH Ph1 rm#[60446](https://redmine.ochi.link/issues/60446) Edited by jitin.kh 22/03/2569 | S03 | BBL_PAY | 0 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -10 |
|   | S04 | BBL_PP_ID | 8 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -1 |
|   | S05 | KB_PAY | 3 | 0 | FALSE | 0 | 0 | FALSE | TRUE | 0 |
|   | S06 | KTB_PAY | 2 | 0 | FALSE | 2 | 2 | FALSE | TRUE | 0 |
|   | S07 | SCB_ORFT | 15 | 0 | FALSE | 0 | 0 | FALSE | TRUE | 0 |
|   | S08 | SCB_DIR | 10 | 0 | FALSE | 0 | 0 | FALSE | TRUE | 0 |
|   | S09 | SCBT_MCL | 7 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -1 |
|   | S10 | TTB | 10 | 0 | FALSE | 0 | 0 | FALSE | TRUE | 0 |
|   | S11 | CHE_SCBT | 3 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -1 |
|   | S12 | CHE_UOB | 9 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -5 |
|   | S13 | CHE_UOB_C | 9 | 0 | FALSE | 0 | 0 | FALSE | FALSE | -5 |
|   | S14 | BANK_CODE | 20 | 0 | FALSE | 0 | 0 | FALSE | FALSE | 0 |
| CPENH Ph1 [rm#60430](https://redmine.ochi.link/issues/60430) Add by anocha.su 23/03/2569 | S15 | OTHER | 0 | 0 | FALSE | 0 | 0 | FALSE | FALSE | 0 |
|   | S16 | AUTO_PAY | 10 | 0 | FALSE | 0 | 0 | FALSE | FALSE | 0 |

---

## Hyperlinks บนหน้านี้

- [cf_service_fee](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1696567272#gid=1696567272)
- [https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193](https://docs.google.com/spreadsheets/d/1pib9noHmrFmCdxqP2698HORO_mmF69HT/edit?gid=1811908193#gid=1811908193)
- [60446](https://redmine.ochi.link/issues/60446)
- [rm#60430](https://redmine.ochi.link/issues/60430)
