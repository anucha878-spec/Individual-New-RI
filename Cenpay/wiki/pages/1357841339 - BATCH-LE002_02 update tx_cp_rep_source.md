# BATCH-LE002_02 update tx_cp_rep_source

- **Page ID:** 1357841339
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_02+update+tx_cp_rep_source
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE002 Batch BH049 : Manual สร้างจดหมาย LB04 (จดหมายติดตาม) > BATCH-LE002_02 update tx_cp_rep_source
- **Depth:** 5

---

| No. | Field | Data Source | Condition |
|---|---|---|---|
|   |   |   | [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |
| 1 | mail_no | input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002_02updatetx_cp_rep_source-A_Select) |   |
| 2 | updated_by | Login User |   |
| 3 | updated_by_fullname | Login User |   |
| 4 | updated_date | systemDate |   |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
