# BATCH-LE001_02 update tx_cp_rep_source

- **Page ID:** 1358168100
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE001_02+update+tx_cp_rep_source
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE001 Batch BH048 : Auto สร้างจดหมาย LB04 (จดหมายติดตาม) > BATCH-LE001_02 update tx_cp_rep_source
- **Depth:** 5

---

| No. | Field | Data Source | Condition |
|---|---|---|---|
|   |   |   | [tx_cp_rep_source](/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source).tx_cp_rep_id = [tx_cp_rep](/display/RDSCPENH/03_15+tx_cp_rep).id จากขั้นตอน [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE001_02updatetx_cp_rep_source-A_Select) |
| 1 | mail_no | input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).mail_no จากขั้นตอน [บันทึกข้อมูลจดหมาย](#BATCH-LE001_02updatetx_cp_rep_source-A_Save) |   |
| 2 | updated_by | Login User |   |
| 3 | updated_by_fullname | Login User |   |
| 4 | updated_date | systemDate |   |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep_source](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-21_03+Insert+Table++tx_cp_rep_source)
- [tx_cp_rep](http://wiki.thaisamut.co.th/display/RDSCPENH/03_15+tx_cp_rep)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
