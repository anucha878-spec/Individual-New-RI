# 02-04-16 Process Generate Txt File SUN

- **Page ID:** 1337197284
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/02-04-16+Process+Generate+Txt+File+SUN
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-16 Process Generate Txt File SUN
- **Depth:** 4

---

### Objectives

- เพื่อ Generate text file Sun วางไว้ใน path folder Auto Sun Systems Server

### Process Overview

1. เมื่อมีการอนุมัติรายการบัญชีจากหน้า Dashboard [[Menu PY03 : อนุมัติจ่ายและบันทึกบัญชี] FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1275560833) ระบบจะ Generate text file Sun
2. นำ Text File ไปวางตาม Path ปลายทางที่กำหนด

### Preconditions

1. กดปุ่ม "อนุมัติ" จากหน้าจอ Dashboard
2. ระบบตรวจสอบเงื่อนไข ระบบจึงจะ Genarate Txt File Sun และนำไปวางที่ Share Path

### Process Description

Reference :

| Flow | Sheet |
|---|---|
| 1,2 | [Text File_Online Payment](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=34326406#gid=34326406) |
| 3 | [Ex.OPay_Flow3](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=1153656473#gid=1153656473) |
| 4 | [WHT](https://docs.google.com/spreadsheets/d/1IhoI1u72lrjfhTYBEd3TdCc-Sdw9uf_AMQLnABRnRnc/edit?gid=1372780320#gid=1372780320) |

**1. ตรวจสอบการดึงข้อมูล**
1. ดึงข้อมูลการจ่าย

| table | condition |
|---|---|
| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) | ดึงข้อมูลรายการจ่ายระดับ Transaction[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id = [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl).payment_detail_id |
| [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl) | [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl).payment_dashboard_id = [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |
| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id = id |
| [cf_coa_payment](/display/RDSCPENH/cf_coa_payment) | [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).event_code = [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).event_code |

2.ตรวจสอบข้อมูล Supplier ด้วยเงื่อนไข – updated patcha.vo 17/06/69
[tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).opay_transaction_id = [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).id [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id
กรณีมีข้อมูล Supplier ให้ group by supplier_code

| table | condition |
|---|---|
| [tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier) | ดึงข้อมูลรายการจ่ายระดับ Supplier[tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).opay_transaction_id = [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).id[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id |
| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id = [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl).payment_detail_id |
| [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl) | [tx_payment_detail_mapping_etl](/display/RDSCPENH/tx_payment_detail_mapping_etl).payment_dashboard_id = [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id |
| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).id = id |
| [cf_coa_payment](/display/RDSCPENH/cf_coa_payment) | [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).event_code = [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).event_code |

**2.เงื่อนไขการ Generate File SUN**

| No. | เงื่อนไขการ Generate File SUN | Remark |
|---|---|---|
| 1 | Generate text file Sun 1 ชุดไฟล์ต่อ 1 รายการธุรกรรม และ 1 ชุด Text file Sun มี 1 Voucher ตามรายการธุรกรรม |   |
| 2 | กำหนดชื่อ Text File Sun (GL Account Code) | กรณีไม่มีข้อมูล Supplierตรวจสอบ pattern จาก [cf_running_pattern_data](/display/RDSCPENH/cf_running_pattern_data).pattern = 'txf_file_sun'และ running no จาก [tx_running_no](/display/RDSCPENH/tx_running_no).prefix = 'txt_file_sun'EOP + YYYYMMDD + Running No (4)ตัวอย่างEOP202604290001.txtกรณีมีข้อมูล Supplierให้ _ ต่อท้ายด้วยจำนวน Supplier +1ตัวอย่าง กรณีมี 2 SupplierEOP202604290001_1.txt ข้อมูลการจ่ายพนักงานEOP202604290001_2.txt ข้อมูล Supplier 1EOP202604290001_3.txt ข้อมูล Supplier 2 |
| 3 | กำหนดให้มี header เป็นรายการแรก |   |
| 4 | ASCII Text file |   |
| 5 | คั่นแต่ละคอลัมน์ด้วยเครื่องหมาย “\|” |   |
| 6 | Share Path | EnvPathSIT[smb://10.100.2.90/upload_z_auto/SIT](smb://10.100.2.90/upload_z_auto/SIT)UAT[smb://10.100.2.90/upload_z_auto](smb://10.100.2.90/upload_z_auto)Prod\\10.100.3.148\Upload_Z_Auto |
| Env | Path |
| SIT | [smb://10.100.2.90/upload_z_auto/SIT](smb://10.100.2.90/upload_z_auto/SIT) |
| UAT | [smb://10.100.2.90/upload_z_auto](smb://10.100.2.90/upload_z_auto) |
| Prod | \\10.100.3.148\Upload_Z_Auto |

**3. Mapping ข้อมูล**
**Header**

| No. | Field Name | Description | Require Field | Length | Type | Mapping Data | ตัวอย่าง | คำอธิบายเพิ่มเติม |
|---|---|---|---|---|---|---|---|---|
| **Header** |
| 1. | JNT | Journal Type | Y | 5 | Alphanumeric | FIX : JNT |   |   |
| 2. | JNS | Journal Source | N | 5 | Alphanumeric | FIX : JNS |   |   |
| 3. | AccCode | Account Code | Y | 15 | Alphanumeric | FIX : AccCode |   |   |
| 4. | TransDate | Transaction Date | Y | 8 | Numeric(DDMMYYYY) | FIX : TransDate |   |   |
| 5. | Period | Period | Y | 7 | Numeric(0MMYYYY) | FIX : Period |   |   |
| 6. | TransRef | Transaction Reference | Y | 30 | Alphanumeric | FIX : TransRef |   |   |
| 7. | TransDesc | Transaction Description | N | 50 | Alphanumeric(not use ‘ %) | FIX : TransDesc |   |   |
| 8. | DueDate | DueDate | N | 8 | Numeric(DDMMYYYY) | FIX : DueDate |   |   |
| 9. | Curr | Currency | Y | 5 | Alphanumeric | FIX : Curr |   |   |
| 10. | TransAmt | Transaction Amount | Y | 15 | Numeric(13,2 decimal Place) | FIX : TransAmt |   |   |
| 11. | BaseRate | Base Rate | N | 15 | Numeric(2 decimal Place) | FIX : BaseRate |   |   |
| 12. | BaseAmt | Base Amount | Y | 15 | Numeric(13,2 decimal Place) | FIX : BaseAmt |   |   |
| 13. | ReptRate | Reporting Rate | N | 15 | Numeric(2 decimal Place) | FIX : ReptRate |   |   |
| 14. | ReptAmt | Reporting Amount | N | 15 | Numeric(2 decimal Place) | FIX : ReptAmt |   |   |
| 15. | DC | Debit/Credit | Y | 1 | Alphanumeric(D or C) | FIX : DC |   |   |
| 16. | T1 | Transaction Analysis Code1 | N | 15 | Alphanumeric | FIX : T1 |   |   |
| 17. | T2 | Transaction Analysis Code2 | N | 15 | Alphanumeric | FIX : T2 |   |   |
| 18. | T3 | Transaction Analysis Code3 | N | 15 | Alphanumeric | FIX : T3 |   |   |
| 19. | T4 | Transaction Analysis Code4 | N | 15 | Alphanumeric | FIX : T4 |   |   |
| 20. | T5 | Transaction Analysis Code5 | N | 15 | Alphanumeric | FIX : T5 |   |   |
| 21. | T6 | Transaction Analysis Code6 | N | 15 | Alphanumeric | FIX : T6 |   |   |
| 22. | T7 | Transaction Analysis Code7 | N | 15 | Alphanumeric | FIX : T7 |   |   |
| 23. | T8 | Transaction Analysis Code8 | N | 15 | Alphanumeric | FIX : T8 |   |   |
| 24. | T9 | Transaction Analysis Code9 | N | 15 | Alphanumeric | FIX : T9 |   |   |
| 25. | T10 | Transaction Analysis Code10 | N | 15 | Alphanumeric | FIX : T10 |   |   |
| 26. | Add Date1 | Additional Date1 | N | 8 | Numeric(DDMMYYYY) | FIX : AddDate1 |   |   |
| 27. | Add Date2 | Additional Date2 | N | 8 | Numeric(DDMMYYYY) | FIX : AddDate2 |   |   |
| 28. | Add Date3 | Additional Date3 | N | 8 | Numeric(DDMMYYYY) | FIX : AddDate3 |   |   |
| 29. | Add Date4 | Additional Date4 | N | 8 | Numeric(DDMMYYYY) | FIX : AddDate4 |   |   |
| 30. | Add Date5 | Additional Date5 | N | 8 | Numeric(DDMMYYYY) | FIX : AddDate5 |   |   |
| 31. | Add Desc1 | Additional Description1 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc1 |   |   |
| 32. | Add Desc2 | Additional Description2 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc2 |   |   |
| 33. | Add Desc3 | Additional Description3 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc3 |   |   |
| 34. | Add Desc4 | Additional Description4 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc4 |   |   |
| 35. | Add Desc5 | Additional Description5 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc5 |   |   |
| 36. | Add Desc6 | Additional Description6 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc6 |   |   |
| 37. | Add Desc7 | Additional Description7 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc7 |   |   |
| 38. | Add Desc8 | Additional Description8 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc8 |   |   |
| 39. | Add Desc9 | Additional Description9 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc9 |   |   |
| 40. | Add Desc10 | Additional Description10 | N | 30 | Alphanumeric(not use ‘ %) | FIX : AddDesc10 |   |   |

**Detail**

| No. | Field Name | Description | Require Field | Length | Type | Mapping Data | ตัวอย่าง | คำอธิบายเพิ่มเติม |
|---|---|---|---|---|---|---|---|---|
| **Detail** |
| 1. | JNT | Journal Type | Y | 5 | Alphanumeric | Fix : JVMFix : PVM |   | update by patcha.vo 03/07/69 |
| 2. | JNS | Journal Source | N | 5 | Alphanumeric | ค่าว่าง |   |   |
| 3. | AccCode | GL Account Code | Y | 15 | Alphanumeric | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).posting_keyposting_keyแสดงmapping dataDrรหัสเจ้าหนี้จ่ายพนักงาน[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).acc_codeCrรหัสบัญชีธนาคารแสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code and [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 73000 - GL Account Code ของ Bank Account ของบริษัท | C0100028 |   |
| posting_key | แสดง | mapping data |
| Dr | รหัสเจ้าหนี้จ่ายพนักงาน | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).acc_code |
| Cr | รหัสบัญชีธนาคาร | แสดง [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).bank_account_code and [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = 73000 - GL Account Code ของ Bank Account ของบริษัท |
| 4. | TransDate | Transaction Date | Y | 8 | Numeric(DDMMYYYY) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_date | 24082022 | format ddmmyyyy (ปี ค.ศ.) |
| 5. | Period | Period | Y | 7 | Numeric(0MMYYYY) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).posting_date | 082022 | format MMYYYY (ปีค.ศ.) |
| 6. | TranRef | Transaction Reference | Y | 30 | Alphanumeric | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).posting_keyposting_keyแสดงmapping dataDrเลขที่ใบคำขอ[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).request_noCrเลข voucher การเงินชื่อ Text File Sun (GL Account Code) | 123 |   |
| posting_key | แสดง | mapping data |
| Dr | เลขที่ใบคำขอ | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).request_no |
| Cr | เลข voucher การเงิน | ชื่อ Text File Sun (GL Account Code) |
| 7. | TransDesc | Transaction Description | N | 50 | Alphanumeric(not use ‘ %) | Fix : Online Payment | 24082022 |   |
| 8. | DueDate | DueDate | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 9. | Curr | Currency | Y | 5 | Alphanumeric | FIX : THB | THB |   |
| 10. | TransAmt | Transaction Amount | Y | 15 | Numeric(13,2 decimal Place) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount | 9999999999999.00 |   |
| 11. | BaseRate | Base Rate | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 12. | BaseAmt | Base Amount | Y | 15 | Numeric(13,2 decimal Place) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount | 9999999999999.00 |   |
| 13. | ReptRate | Reporting Rate | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 14. | ReptAmt | Reporting Amount | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 15. | DC | Debit/Credit | Y | 1 | Alphanumeric(D or C) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).posting_key posting_keyแสดงDrFIX : DCrFIX : C |   |   |
| posting_key | แสดง |
| Dr | FIX : D |
| Cr | FIX : C |
| 16. | T1 | Transaction Analysis Code1 | N | 15 | Alphanumeric | ค่าว่าง | 830001 | Cost center |
| 17. | T2 | Transaction Analysis Code2 | N | 15 | Alphanumeric | Fix : 800039แสดงเฉพาะ Voucher ค่าธรรมเนียม [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).event_code = PM_FIN_03,PM_FIN_05event_codeDebit/CreditPM_FIN_03แสดงที่ DebitPM_FIN_05แสดงที่ Credit | A65001 | Project Budget (IO)/ Department Budget (FC) |
| event_code | Debit/Credit |
| PM_FIN_03 | แสดงที่ Debit |
| PM_FIN_05 | แสดงที่ Credit |
| 18. | T3 | Transaction Analysis Code3 | N | 15 | Alphanumeric | Fix : 800039แสดงเฉพาะ Voucher ค่าธรรมเนียม [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).event_code = PM_FIN_03,PM_FIN_05event_codeDebit/CreditPM_FIN_03แสดงที่ DebitPM_FIN_05แสดงที่ Credit | 0116 | Branch (Owner) |
| event_code | Debit/Credit |
| PM_FIN_03 | แสดงที่ Debit |
| PM_FIN_05 | แสดงที่ Credit |
| 19. | T4 | Transaction Analysis Code4 | N | 15 | Alphanumeric | Fix : 8000 | 0116 | Branch (service) |
| 20. | T5 | Transaction Analysis Code5 | N | 15 | Alphanumeric | Fix : 0 | 0100 | Business line |
| 21. | T6 | Transaction Analysis Code6 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 22. | T7 | Transaction Analysis Code7 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 23. | T8 | Transaction Analysis Code8 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 24. | T9 | Transaction Analysis Code9 | N | 15 | Alphanumeric | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).acc_code | C0100028 | รหัสจ่ายเจ้าหนี้กรณีไม่มีข้อมูลให้แสดงค่าว่าง |
| 25. | T10 | Transaction Analysis Code10 | N | 15 | Alphanumeric | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).tax_code | Niv7 | รหัสภาษีกรณีไม่มีข้อมูลให้แสดงค่าว่าง |
| 26. | AddDate1 | Additional Date1 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 27. | AddDate2 | Additional Date2 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 28. | AddDate3 | Additional Date3 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 29. | AddDate4 | Additional Date4 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 30. | AddDate5 | Additional Date5 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 31. | AddDesc1 | Additional Description1 | N | 30 | Alphanumeric(not use ‘ %) | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).ap_voucher | AP2025003-001 | Voucher APกรณีไม่มีข้อมูลให้แสดงค่าว่าง |
| 32. | AddDesc2 | Additional Description2 | N | 30 | Alphanumeric(not use ‘ %) | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).voucher_no_wht | WHT2023009-0031 | Voucher รายการหักภาษี ณ ที่จ่ายกรณีไม่มีข้อมูลให้แสดงค่าว่าง |
| 33. | AddDesc3 | Additional Description3 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 34. | AddDesc4 | Additional Description4 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 35. | AddDesc5 | Additional Description5 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 36. | AddDesc6 | Additional Description6 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 37. | AddDesc7 | Additional Description7 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 38. | AddDesc8 | Additional Description8 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 39. | AddDesc9 | Additional Description9 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 40. | AddDesc10 | Additional Description10 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |

**Detail ส่วนข้อมูล Supplier**
ตัวอย่าง [https://docs.google.com/spreadsheets/d/1INHF8MU8MIUx6VdCMe7ZYLUTNsFwoDIp5eke3QoT1fA/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1INHF8MU8MIUx6VdCMe7ZYLUTNsFwoDIp5eke3QoT1fA/edit?usp=sharing)

| Flow | เงื่อนไข | ตัวอย่าง |
|---|---|---|
| Flow 3 | กรณี service ไม่เป็น BBL_E_WHT | กรณีมี wht_rate 1 เรทจะได้ข้อมูลคู่บัญชี 2 บรรทัดเจ้าหนี้การค้า Drภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย Crกรณีมี wht_rate 2 เรท จะได้ข้อมูลคู่บัญชี 4 บรรทัดเจ้าหนี้การค้า Drภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย Crเจ้าหนี้การค้า Drภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย Cr |
| Flow 4 | กรณี service เป็น BBL_E_WHT | บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย Dr ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย Cr |

| No. | Field Name | Description | Require Field | Length | Type | Mapping Data | ตัวอย่าง | คำอธิบายเพิ่มเติม |
|---|---|---|---|---|---|---|---|---|
| **Detail** |
| 1. | JNT | Journal Type | Y | 5 | Alphanumeric | ตรวจสอบ [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).serviceกรณี service เป็น BBL_E_WHTFix : WHT กรณี service อื่นๆFix : PVM |   |   |
| 2. | JNS | Journal Source | N | 5 | Alphanumeric | ค่าว่าง |   |   |
| 3. | AccCode | GL Account Code | Y | 15 | Alphanumeric | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_nameAccount CodeAccount Namemapping data23560005เจ้าหนี้การค้า[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).acc_code15590045บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย[cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_code23523110ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่ายกรณี service เป็น BBL_E_WHTFix : WHTกรณี service อื่นๆFix : ZWHT | C0100028 |   |
| Account Code | Account Name | mapping data |
| 23560005 | เจ้าหนี้การค้า | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).acc_code |
| 15590045 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย | [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_code |
| 23523110 | ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | กรณี service เป็น BBL_E_WHTFix : WHTกรณี service อื่นๆFix : ZWHT |
| 4. | TransDate | Transaction Date | Y | 8 | Numeric(DDMMYYYY) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).payment_date | 24082022 | format ddmmyyyy (ปี ค.ศ.) |
| 5. | Period | Period | Y | 7 | Numeric(0MMYYYY) | [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).posting_date | 082022 | format MMYYYY (ปีค.ศ.) |
| 6. | TranRef | Transaction Reference | Y | 30 | Alphanumeric | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).request_no | 123 | เลขที่ใบคำขอเบิกระบบ Online Payment |
| 7. | TransDesc | Transaction Description | N | 50 | Alphanumeric(not use ‘ %) | Fix : Online Payment | 24082022 |   |
| 8. | DueDate | DueDate | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 9. | Curr | Currency | Y | 5 | Alphanumeric | FIX : THB | THB |   |
| 10. | TransAmt | Transaction Amount | Y | 15 | Numeric(13,2 decimal Place) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_nameAccount CodeAccount Namemapping data23560005เจ้าหนี้การค้า[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).amount15590045บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction)[.](/display/RDSCPENH/tx_opay_transaction)gross_amount23523110ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_amount | 9999999999999.00 |   |
| Account Code | Account Name | mapping data |
| 23560005 | เจ้าหนี้การค้า | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).amount |
| 15590045 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction)[.](/display/RDSCPENH/tx_opay_transaction)gross_amount |
| 23523110 | ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_amount |
| 11. | BaseRate | Base Rate | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 12. | BaseAmt | Base Amount | Y | 15 | Numeric(13,2 decimal Place) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_nameAccount CodeAccount Namemapping data23560005เจ้าหนี้การค้า[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).amount15590045บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction)[.](/display/RDSCPENH/tx_opay_transaction)gross_amount23523110ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_amount | 9999999999999.00 |   |
| Account Code | Account Name | mapping data |
| 23560005 | เจ้าหนี้การค้า | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).amount |
| 15590045 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่าย | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction)[.](/display/RDSCPENH/tx_opay_transaction)gross_amount |
| 23523110 | ภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_amount |
| 13. | ReptRate | Reporting Rate | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 14. | ReptAmt | Reporting Amount | N | 15 | Numeric(2 decimal Place) | ค่าว่าง |   |   |
| 15. | DC | Debit/Credit | Y | 1 | Alphanumeric(D or C) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).posting_key posting_keyแสดงDrFIX : DCrFIX : C |   |   |
| posting_key | แสดง |
| Dr | FIX : D |
| Cr | FIX : C |
| 16. | T1 | Transaction Analysis Code1 | N | 15 | Alphanumeric | ค่าว่าง | 830001 | Cost center |
| 17. | T2 | Transaction Analysis Code2 | N | 15 | Alphanumeric | ค่าว่าง | A65001 | Project Budget (IO)/ Department Budget (FC) |
| 18. | T3 | Transaction Analysis Code3 | N | 15 | Alphanumeric | ค่าว่าง | 0116 | Branch (Owner) |
| 19. | T4 | Transaction Analysis Code4 | N | 15 | Alphanumeric | Fix : 8000 | 0116 | Branch (service) |
| 20. | T5 | Transaction Analysis Code5 | N | 15 | Alphanumeric | Fix : 0 | 0100 | Business line |
| 21. | T6 | Transaction Analysis Code6 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 22. | T7 | Transaction Analysis Code7 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 23. | T8 | Transaction Analysis Code8 | N | 15 | Alphanumeric | ค่าว่าง |   |   |
| 24. | T9 | Transaction Analysis Code9 | N | 15 | Alphanumeric | [tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).supplier_code | C0100028 | Supplier Code ที่ระบุข้อมูลภาษีหัก ณ ที่จ่าย |
| 25. | T10 | Transaction Analysis Code10 | N | 15 | Alphanumeric | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_nameAccount CodeAccount Namemapping data23560005เจ้าหนี้การค้า[tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).tax_code อื่นๆ- | Niv7 | T10 Code ตาม ประเภทภาษีหัก ณ ที่จ่าย |
| Account Code | Account Name | mapping data |
| 23560005 | เจ้าหนี้การค้า | [tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).tax_code |
|   | อื่นๆ | - |
| 26. | AddDate1 | Additional Date1 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 27. | AddDate2 | Additional Date2 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 28. | AddDate3 | Additional Date3 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 29. | AddDate4 | Additional Date4 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 30. | AddDate5 | Additional Date5 | N | 8 | Numeric(DDMMYYYY) | ค่าว่าง |   |   |
| 31. | AddDesc1 | Additional Description1 | N | 30 | Alphanumeric(not use ‘ %) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_code Account CodeAccount Nameแสดงmapping data23560005เจ้าหนี้การค้าชื่อ-นามสกุล (ผู้รับเงิน)[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_short_title[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_name1559004523523110บัญชีพัก ภาษีเงินได้หักณ ที่จ่ายภาษีเงินได้หัก ณ ที่จ่ายค้างจ่ายชื่อประเภทภาษีหัก ณ ที่จ่าย[tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_rate |   |   |
| Account Code | Account Name | แสดง | mapping data |
| 23560005 | เจ้าหนี้การค้า | ชื่อ-นามสกุล (ผู้รับเงิน) | [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_short_title[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_first_name[tx_payment_detail](/display/RDSCPENH/tx_payment_detail).payee_last_name |
| 1559004523523110 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่ายภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | ชื่อประเภทภาษีหัก ณ ที่จ่าย | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).wht_rate |
| 32. | AddDesc2 | Additional Description2 | N | 30 | Alphanumeric(not use ‘ %) | ตรวจสอบ [cf_coa_payment](/display/RDSCPENH/cf_coa_payment).account_nameAccount CodeAccount Nameแสดงmapping data23560005เจ้าหนี้การค้าชื่อ-นามสกุล (ผู้รับเงิน)[tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no1559004523523110บัญชีพัก ภาษีเงินได้หักณ ที่จ่ายภาษีเงินได้หัก ณ ที่จ่ายค้างจ่ายT10 Code ตาม ประเภทภาษีหัก ณ ที่จ่าย[tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).tax_code | WHT2023009-0031 |   |
| Account Code | Account Name | แสดง | mapping data |
| 23560005 | เจ้าหนี้การค้า | ชื่อ-นามสกุล (ผู้รับเงิน) | [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_no [tx_batch_payment](/display/RDSCPENH/tx_batch_payment).batch_payment_split_no |
| 1559004523523110 | บัญชีพัก ภาษีเงินได้หักณ ที่จ่ายภาษีเงินได้หัก ณ ที่จ่ายค้างจ่าย | T10 Code ตาม ประเภทภาษีหัก ณ ที่จ่าย | [tx_opay_supplier](/display/RDSCPENH/tx_opay_supplier).tax_code |
| 33. | AddDesc3 | Additional Description3 | N | 30 | Alphanumeric(not use ‘ %) | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).pay_detail |   |   |
| 34. | AddDesc4 | Additional Description4 | N | 30 | Alphanumeric(not use ‘ %) | [tx_opay_transaction](/display/RDSCPENH/tx_opay_transaction).request_type |   |   |
| 35. | AddDesc5 | Additional Description5 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 36. | AddDesc6 | Additional Description6 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 37. | AddDesc7 | Additional Description7 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 38. | AddDesc8 | Additional Description8 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 39. | AddDesc9 | Additional Description9 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |
| 40. | AddDesc10 | Additional Description10 | N | 30 | Alphanumeric(not use ‘ %) | ค่าว่าง |   |   |

**4.ตัวอย่างข้อมูล**
**ตัวอย่าง File SUN** : [Example text file Interface to sun_1.txt](/download/attachments/1051296172/Example%20text%20file%20Interface%20to%20sun_1.txt?version=1&modificationDate=1683468583540&api=v2)
**ตัวอย่าง Online Payment** : [COA Online Payment](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=34326406#gid=34326406)

| JNT | JNS | AccCode | TransDate | Period | TransRef | TransDesc | DueDate | Curr | TransAmt | BaseRate | BaseAmt | ReptRate | ReptAmt | DC | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | Add Date1 | Add Date2 | Add Date3 | Add Date4 | Add Date5 | Add Desc1 | Add Desc2 | Add Desc3 | Add Desc4 | Add Desc5 | Add Desc6 | Add Desc7 | Add Desc8 | Add Desc9 | Add Desc10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| PVM |   | C0100028 | 1092023 | 92023 | OP20250901001 | Online Payment |   | THB | 4000 |   | 4000 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100028 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | C0100029 | 1092023 | 92023 | OP20250901002 | Online Payment |   | THB | 3000 |   | 3000 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100029 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | C0100030 | 1092023 | 92023 | OP20250901003 | Online Payment |   | THB | 2100 |   | 2100 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100030 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | C0100031 | 1092023 | 92023 | OP20250901004 | Online Payment |   | THB | 1200 |   | 1200 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100031 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | C0100032 | 1092023 | 92023 | OP20250901005 | Online Payment |   | THB | 1300 |   | 1300 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100032 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | C0100032 | 1092023 | 92023 | OP20250901006 | Online Payment |   | THB | 1100 |   | 1100 |   |   | D |   |   |   | 8000 | 0 |   |   |   | C0100032 | Nov7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| PVM |   | 12022430 | 1092023 | 92023 | EPP202509290001 | Online Payment |   | THB | 12700 |   | 12700 |   |   | C |   |   |   | 8000 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |

1.1 จ่ายเงิน ไม่มี WHT
**ตัวอย่างข้อมูล File SUN**
<![CDATA[JNT|JNS|AccCode|TransDate|Period|TranRef|TransDesc|DueDate|Curr|TransAmt|BaseRate|BaseAmt|ReptRate|ReptAmt|DC|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|AddDate1|AddDate2|AddDate3|AddDate4|AddDate5|AddDesc1|AddDesc2|AddDesc3|AddDesc4|AddDesc5|AddDesc6|AddDesc7|AddDesc8|AddDesc9|AddDesc10| PVM||C010028|10092023|092023|OP20250910001|Online Payment||THB|4000||4000|||D||||||||||C010028|Nov7||||||||||||| PVM||C010029|10092023|092023|OP20250910002|Online Payment||THB|3000||3000|||D||||||||||C010029|Nov7||||||||||||| PVM||C010030|10092023|092023|OP20250910003|Online Payment||THB|2100||2100|||D||||||||||C010030|Nov7||||||||||||| PVM||C010031|10092023|092023|OP20250910004|Online Payment||THB|1200||1200|||D||||||||||C010031|Nov7||||||||||||| PVM||C010032|10092023|092023|OP20250910005|Online Payment||THB|1300||1300|||D||||||||||C010032|Nov7||||||||||||| PVM||C010032|10092023|092023|OP20250910006|Online Payment||THB|1100||1100|||D||||||||||C010032|Nov7||||||||||||| PVM||12022430|10092023|092023|OP20250929001|Online Payment||THB|12700||12700|||C||||||||||12022430|Nov7||||||||||||| ]]>
****
1.2 จ่ายเงิน มี WHT
1.2.1 Services อื่นๆ ที่ไม่ใช่ e-wht
ตัวอย่าง Text File กรณีมี 2 Supplier
**ตัวอย่างข้อมูล File SUN 01**
<![CDATA[JNT|JNS|AccCode|TransDate|Period|TranRef|TransDesc|DueDate|Curr|TransAmt|BaseRate|BaseAmt|ReptRate|ReptAmt|DC|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|AddDate1|AddDate2|AddDate3|AddDate4|AddDate5|AddDesc1|AddDesc2|AddDesc3|AddDesc4|AddDesc5|AddDesc6|AddDesc7|AddDesc8|AddDesc9|AddDesc10| PVM||C010028|10092023|092023|OP20250910001|Online Payment||THB|1000||1000|||D||||||||||C010028|NIV7||||||||||||| PVM||C010029|10092023|092023|OP20250910002|Online Payment||THB|970||970|||D||||||||||C010029|||||||||||||| ]]>
กรณี Supplier1 มี WHT Rate เดียว
**ตัวอย่างข้อมูล File SUN 02**
<![CDATA[JNT|JNS|AccCode|TransDate|Period|TranRef|TransDesc|DueDate|Curr|TransAmt|BaseRate|BaseAmt|ReptRate|ReptAmt|DC|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|AddDate1|AddDate2|AddDate3|AddDate4|AddDate5|AddDesc1|AddDesc2|AddDesc3|AddDesc4|AddDesc5|AddDesc6|AddDesc7|AddDesc8|AddDesc9|AddDesc10| WHT||C010028|10092023|092023|OP20250910001|Online Payment||THB|1000||1000|||D||||||||||Supplier Code01|NIV7||||||||||||| WHT||ZWHT|10092023|092023|OP20250910002|Online Payment||THB|30||30|||D||||||||||Supplier Code01|NIV7||||||||||||| ]]>
กรณี Supplier2 มีมากกว่า 1 WHT Rate
**ตัวอย่างข้อมูล File SUN 03**
<![CDATA[JNT|JNS|AccCode|TransDate|Period|TranRef|TransDesc|DueDate|Curr|TransAmt|BaseRate|BaseAmt|ReptRate|ReptAmt|DC|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|AddDate1|AddDate2|AddDate3|AddDate4|AddDate5|AddDesc1|AddDesc2|AddDesc3|AddDesc4|AddDesc5|AddDesc6|AddDesc7|AddDesc8|AddDesc9|AddDesc10| WHT||C010028|10092023|092023|OP20250910001|Online Payment||THB|1000||1000|||D||||||||||Supplier Code02|NIV7||||||||||||| WHT||ZWHT|10092023|092023|OP20250910002|Online Payment||THB|30||30|||D||||||||||Supplier Code02|NIV7||||||||||||| WHT||C010028|10092023|092023|OP20250910001|Online Payment||THB|1000||1000|||D||||||||||Supplier Code02|NIV7||||||||||||| WHT||ZWHT|10092023|092023|OP20250910002|Online Payment||THB|50||50|||D||||||||||Supplier Code02|NIV7||||||||||||| ]]>
**5. update data table : tx_payment_dashboard**
5. update data table : [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard)

| Field | mapping data |
|---|---|
| fin_reference_no | ชื่อ Text File Sun (GL Account Code) |
| updated_date | Fix : SYSTEM |
| updated_by | วันและเวลาปัจจุบัน |

---

## Hyperlinks บนหน้านี้

- [[Menu PY03 : อนุมัติจ่ายและบันทึกบัญชี] FS-05-01 อนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560833)
- [Text File_Online Payment](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=34326406#gid=34326406)
- [Ex.OPay_Flow3](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=1153656473#gid=1153656473)
- [WHT](https://docs.google.com/spreadsheets/d/1IhoI1u72lrjfhTYBEd3TdCc-Sdw9uf_AMQLnABRnRnc/edit?gid=1372780320#gid=1372780320)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_detail_mapping_etl](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail_mapping_etl)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_running_pattern_data](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern_data)
- [tx_running_no](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_running_no)
- [smb://10.100.2.90/upload_z_auto/SIT](http://wiki.thaisamut.co.thsmb://10.100.2.90/upload_z_auto/SIT)
- [smb://10.100.2.90/upload_z_auto](http://wiki.thaisamut.co.thsmb://10.100.2.90/upload_z_auto)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [https://docs.google.com/spreadsheets/d/1INHF8MU8MIUx6VdCMe7ZYLUTNsFwoDIp5eke3QoT1fA/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1INHF8MU8MIUx6VdCMe7ZYLUTNsFwoDIp5eke3QoT1fA/edit?usp=sharing)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [.](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [.](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [cf_coa_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_coa_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_opay_supplier](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_supplier)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [tx_opay_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_opay_transaction)
- [Example text file Interface to sun_1.txt](http://wiki.thaisamut.co.th/download/attachments/1051296172/Example%20text%20file%20Interface%20to%20sun_1.txt?version=1&modificationDate=1683468583540&api=v2)
- [COA Online Payment](https://docs.google.com/spreadsheets/d/1dpYzvXjAaC1VNCBgykp-6KU7SHb2JfCM537TLfHo2J0/edit?gid=34326406#gid=34326406)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1051296172/Example%20text%20file%20Interface%20to%20sun_1.txt?version=1&modificationDate=1683468583540&api=v2
