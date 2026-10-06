# 02-04-03 Process Generate Txt File ธนาคาร

- **Page ID:** 1283129600
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1283129600
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-03 Process Generate Txt File ธนาคาร
- **Depth:** 4

---

1. ตรวจสอบ Service [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).service_code
2. กำหนดชื่อไฟล์ และ Mapping ข้อมูลตาม Service ธนาคาร
- อ้างอิงการเข้ารหัสไฟล์ และการระบุเลขที่บัญชีที่ [6. Generate txt,csv file ธนาคาร](/pages/viewpage.action?pageId=1267860406)
- กำหนดชื่อไฟล์ Batch Number ฝ่ายการเงิน ต่อด้วย _ (under score) File_name ต่อด้วย _ (under score) Date Format (DDMMYYYY_HH24MM)
- ตัวอย่างเช่น B20260101001_BBL_e_WHT_01092025_1305.txt
ดึงข้อมูลจากตารางดังนี้

| Table | Field | Condition |
|---|---|---|
| [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) | * | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id = @id |
| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) | * | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).batch_payment_id = [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).id |
| [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split) | transaction_noamount | กรณี [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).flag_split = Yให้ดึง [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split).transaction_no,amount แทน [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)where [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split).id = [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).payment_detail_id |
| [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog) | * | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = @lookup_key |

| Service | Mapping Data | File Name | Date Format | File Format |
|---|---|---|---|---|
| BBL_E_WHT | [BBL_e-WHT](http://wiki.thaisamut.co.th/display/RDSCPENH/BBL_e-WHT) | BBL_e_WHT | ddmmyyyy_hhmmssms | txt |
| BBL_MCL | [BBL_MCL](http://wiki.thaisamut.co.th/display/RDSCPENH/BBL_MCL) | BBL_MCL | ddmmyyyy_hhmmssms | txt |
| BBL_PAY | [BBL_Payroll](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234864) | BBL_Payroll | ddmmyyyy_hhmmssms | txt |
| BBL_PP_ID | [BBL_PromptPay_ID](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234860) | BBL_PromptPay | ddmmyyyy_hhmmssms | txt |
| KB_PAY | [KB_Payroll](http://wiki.thaisamut.co.th/display/RDSCPENH/KB_Payroll) | KB_Payroll | ddmmyyyy_hhmmssms | txt |
| KTB_PAY | [KTB_Payroll](http://wiki.thaisamut.co.th/display/RDSCPENH/KTB_Payroll) | KTB_Payroll | ddmmyyyy_hhmmssms | txt |
| SCB_DIR | [SCB_Direct](http://wiki.thaisamut.co.th/display/RDSCPENH/SCB_Direct) | SCB_Direct | ddmmyyyy_hhmmssms | txt |
| SCB_ORFT | [SCB_ORFT](http://wiki.thaisamut.co.th/display/RDSCPENH/SCB_ORFT) | SCB_ORFT | ddmmyyyy_hhmmssms | txt |
| SCBT_MCL | [SCBT_MCL](/display/RDSCPENH/SCBT_MCL) | SCBT_MCL | ddmmyyyy_hhmmssms | csv |
| TTB | [TTB](/display/RDSCPENH/TTB) | TTB | ddmmyyyy_hhmmssms | txt |
| CHE_UOB * user hold | [Bank Cheque_UOB](http://wiki.thaisamut.co.th/display/RDSCPENH/Bank+Cheque_UOB) | UOB_Cheque | ddmmyyyy_hhmmssms | txt |
| CHE_SCBT | [Bank Cheque_SCBT](/display/RDSCPENH/Bank+Cheque_SCBT) | SCBT_Cheque | ddmmyyyy_hhmmssms | csv |

4. Generate file ที่ Share Path ดังนี้

| Env | Path |
|---|---|
| SIT | \\PayM_SIT\TXT_FILE_BANK |
| UAT | \\PayM_UAT\TXT_FILE_BANK |
| PROD | \\PayM_PROD\TXT_FILE_BANK |

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [6. Generate txt,csv file ธนาคาร](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267860406)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [BBL_e-WHT](http://wiki.thaisamut.co.th/display/RDSCPENH/BBL_e-WHT)
- [BBL_MCL](http://wiki.thaisamut.co.th/display/RDSCPENH/BBL_MCL)
- [BBL_Payroll](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234864)
- [BBL_PromptPay_ID](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234860)
- [KB_Payroll](http://wiki.thaisamut.co.th/display/RDSCPENH/KB_Payroll)
- [KTB_Payroll](http://wiki.thaisamut.co.th/display/RDSCPENH/KTB_Payroll)
- [SCB_Direct](http://wiki.thaisamut.co.th/display/RDSCPENH/SCB_Direct)
- [SCB_ORFT](http://wiki.thaisamut.co.th/display/RDSCPENH/SCB_ORFT)
- [SCBT_MCL](http://wiki.thaisamut.co.th/display/RDSCPENH/SCBT_MCL)
- [TTB](http://wiki.thaisamut.co.th/display/RDSCPENH/TTB)
- [Bank Cheque_UOB](http://wiki.thaisamut.co.th/display/RDSCPENH/Bank+Cheque_UOB)
- [Bank Cheque_SCBT](http://wiki.thaisamut.co.th/display/RDSCPENH/Bank+Cheque_SCBT)
