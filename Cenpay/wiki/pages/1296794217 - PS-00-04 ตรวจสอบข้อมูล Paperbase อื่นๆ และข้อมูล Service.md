# PS-00-04 ตรวจสอบข้อมูล Paperbase อื่นๆ และข้อมูล Service

- **Page ID:** 1296794217
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1296794217
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-00 Process กลาง > PS-00-04 ตรวจสอบข้อมูล Paperbase อื่นๆ และข้อมูล Service
- **Depth:** 5

---

**Step 1 :** ตรวจสอบประเภทการจ่าย ด้วยเงื่อนไขดังนี้ [cf_bank_account_mapping.batch_payment_type](/display/RDSCPENH/cf_bank_account_mapping) = [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).batch_payment_type [cf_bank_account_mapping](/display/RDSCPENH/cf_bank_account_mapping).service = '@service ที่ทำรายการ'

| Phase/Release | Condition | Remark |
|---|---|---|
| Ph1R1 – ยกเลิก | ประเภทการจ่ายตรวจสอบเงื่อนไขBatch Payment - โอนพบข้อมูล batch_payment_type = 'B'Paper-based Payment - เช็คพบข้อมูล batch_payment_type = 'P' และข้อมูล service = 'CHE_COM'Paper-based Payment - อื่นๆพบข้อมูล batch_payment_type = 'P' และข้อมูล service = 'OTHER' | update by patcha.vo 27/01/69 |
| ประเภทการจ่าย | ตรวจสอบเงื่อนไข |
| Batch Payment - โอน | พบข้อมูล batch_payment_type = 'B' |
| Paper-based Payment - เช็ค | พบข้อมูล batch_payment_type = 'P' และข้อมูล service = 'CHE_COM' |
| Paper-based Payment - อื่นๆ | พบข้อมูล batch_payment_type = 'P' และข้อมูล service = 'OTHER' |
| Ph1R1ปรับให้รองรับ Paperbase อื่นๆ | ประเภทการจ่าย@payment_type_codeตรวจสอบเงื่อนไข **Batch Payment - โอน****BT**batch_payment_type = 'B'payment_channel_type = 'TRANSFER' **Batch Payment - เช็คธนาคาร****BC**batch_payment_type = 'B'payment_channel_type = 'CHEQUE_BANK' **Paper-based Payment - เช็ค****PC**batch_payment_type = 'P'payment_channel_type = 'CHEQUE_COM' **Paper-based Payment - อื่นๆ****PO**batch_payment_type = 'P'payment_channel_type = 'OTHER' **API Payment**APbatch_payment_type = 'A'updated by patcha.vo 25/06/69 | update by patcha.vo 27/01/69 |
| ประเภทการจ่าย | @payment_type_code | ตรวจสอบเงื่อนไข |   |
| **Batch Payment - โอน** | **BT** | batch_payment_type = 'B'payment_channel_type = 'TRANSFER' |   |
| **Batch Payment - เช็คธนาคาร** | **BC** | batch_payment_type = 'B'payment_channel_type = 'CHEQUE_BANK' |   |
| **Paper-based Payment - เช็ค** | **PC** | batch_payment_type = 'P'payment_channel_type = 'CHEQUE_COM' |   |
| **Paper-based Payment - อื่นๆ** | **PO** | batch_payment_type = 'P'payment_channel_type = 'OTHER' |   |
| **API Payment** | AP | batch_payment_type = 'A' | updated by patcha.vo 25/06/69 |

---

## Hyperlinks บนหน้านี้

- [cf_bank_account_mapping.batch_payment_type](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
