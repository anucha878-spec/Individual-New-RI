# cf_running_pattern_data

- **Page ID:** 1280999666
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_running_pattern > cf_running_pattern_data
- **Depth:** 6

---

**Initial Data** >>> [cf_running_pattern](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1005741003#gid=1005741003)

| module | pattern | digit | example |
|---|---|---|---|
| PC | batch_oper | 5 | CP-TB-CLN-YYYYMMDD-{0} |
| PY | batch_payment | 3 | BYYYYMMDD{0} |
| PY | transaction_no | 6 | YYYYMMDD{0} |
| PY | cheque_template_code | 3 | T{0} |
| PD | batch_depositpay | 3 | PD-DYYYYMMDD{0}(เพิ่มจากระบบ Depositpay 22/01/2026) |
| PY | txt_file_sun | 4 | EOPYYYYMMDD{0} |
| IF | batch_fund_no | 2 | IF-TB-YYYYMMDD-{0} |

---

## Hyperlinks บนหน้านี้

- [cf_running_pattern](https://docs.google.com/spreadsheets/d/1CZdjmFoSrf7Pxb3gys-koKokjtSAKEI7mDhPDkIAALs/edit?gid=1005741003#gid=1005741003)
