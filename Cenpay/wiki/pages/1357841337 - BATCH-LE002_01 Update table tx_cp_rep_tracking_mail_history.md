# BATCH-LE002_01 Update table tx_cp_rep_tracking_mail_history

- **Page ID:** 1357841337
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/BATCH-LE002_01+Update+table+tx_cp_rep_tracking_mail_history
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-LE-จดหมาย > BATCH-LE002 Batch BH049 : Manual สร้างจดหมาย LB04 (จดหมายติดตาม) > BATCH-LE002_01 Update table tx_cp_rep_tracking_mail_history
- **Depth:** 5

---

| No. | Field | Data Source | Condition |
|---|---|---|---|
|   |   |   | [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id = input [tx_cp_rep_tracking_mail_history](/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history).id จาก [ดึงข้อมูลการส่งจดหมายติดตาม](#BATCH-LE002_01Updatetabletx_cp_rep_tracking_mail_history-A_Select) |
| 1 | sent_mail_status_code | Fix : "S" |   |
| 1 | sent_mail_status | Fix : "สำเร็จ" |   |
| 2 | updated_by | Login User |   |
| 3 | updated_by_fullname | Login User |   |
| 4 | updated_date | systemDate |   |

---

## Hyperlinks บนหน้านี้

- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
- [tx_cp_rep_tracking_mail_history](http://wiki.thaisamut.co.th/display/RDSCPENH/03_25+tx_cp_rep_tracking_mail_history)
