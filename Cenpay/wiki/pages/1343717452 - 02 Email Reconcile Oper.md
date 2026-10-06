# 02 Email Reconcile Oper

- **Page ID:** 1343717452
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/02+Email+Reconcile+Oper
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-17 กระบวนการส่งอีเมล > 02 Email Reconcile Oper
- **Depth:** 5

---

อ้างอิง Sheet : [Email Reconcile](https://docs.google.com/spreadsheets/d/1hwSlwNij1t3WWX3gpX77t6u-2RJvzP2DbCGRisIRDFo/edit?usp=sharing)

|   | **SRS** | **FS** |
|---|---|---|
| Sender | [appservice@ocean.co.th](mailto:appservice@ocean.co.th) | ตรวจสอบ mail_from จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code RECONCILE_OPER_EMAIL |
| To | rattana.so@ocean.co.th, kanokporn.ch@ocean.co.th | ตรวจสอบ mail_to จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code RECONCILE_OPER_EMAIL |
| CC |   | ตรวจสอบ mail_cc จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code RECONCILE_OPER_EMAIL |
| Subject | Reconciliation Report ระบบ Payment Management วันที่ 01/04/2569 | ตรวจสอบ subject จากตาราง [cf_email](/display/RDSCPENH/cf_email) ด้วย code RECONCILE_OPER_EMAILและเพิ่มเติมต่อด้วย (@systemDate) แทนด้วยวันที่ของ System รูปแบบ dd/mm/yyyy (ปี พ.ศ.) ตัวอย่างเช่น วันที่ 04/08/2568 |
| Description | เรียน ฝ่ายการเงิน และผู้เกี่ยวข้องการตรวจสอบความครบถ้วนของข้อมูล (Data Reconciliation) ระหว่างระบบต้นทาง และระบบปลายทาง ประจำวันที่ 01/04/2569 โดยมีรายละเอียดสรุปดังนี้:ระบบต้นทางชื่อธุรกรรมเลขอ้างอิงระดับ Batchจำนวนรายการรวม จากระบบต้นทางยอดเงินรวม จากระบบต้นทางจำนวนรายการรวม ที่ Payment Managementยอดเงินรวม ที่ Payment Managementวันที่อนุมัติจากต้นทางสถานะDepositคืนเงินฝากเบี้ยประกันให้ลูกค้าCP-TB-20250102000011,000500,000.00998480,000.0030/03/2569FailIncomeรายได้รายวันCP-TB-20250102000022,0002,000,000.002,0002,000,000.0001/04/2569Successกรุณาแจ้งทีม IT Support ให้ตรวจสอบรายการที่สถานะเป็น Fail เพื่อดำเนินการแก้ไขข้อมูล | ให้สร้างรูปแบบ Email ตาม SRS โดยแทนค่าตัวแปร และข้อมูลในตารางตามที่กำหนดดังนี้เงื่อนไขการดึงข้อมูลดึงรายการที่ตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header).created_date ของวันก่อนหน้าตั้งแต่ 22.41 จนถึงวันปัจจุบันเวลา 22.40ดึงรายการเฉพาะกลุ่มธุรกรรมจาก Oper ([tx_payment_header](/display/RDSCPENH/tx_payment_header) .transaction_group in (EH,ED,EC,EJ,EK)transaction_group descriptionEHสินไหมEDรายได้ตัวแทนECรับฝากเบี้ยEJUnit LinkedEKOtherเรียงข้อมูลดังนี้ลำดับข้อมูล1วันที่อนุมัติจากต้นทาง จากน้อยไปมาก2ระบบต้นทาง เรียงข้อมูลตาม ก-ฮ, Aa-Zz3ชื่อธุรกรรม เรียงข้อมูลตาม ก-ฮ, Aa-ZzFieldMapping Dataระบบต้นทางแสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **13000**ชื่อธุรกรรมแสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_type[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **14000**เลขอ้างอิงระดับ Batch[tx_payment_header](/display/RDSCPENH/tx_payment_header).batch_oper_noจำนวนรายการรวม จากระบบต้นทาง[tx_payment_header](/display/RDSCPENH/tx_payment_header).total_transactionยอดเงินรวม จากระบบต้นทาง[tx_payment_header](/display/RDSCPENH/tx_payment_header).total_amountจำนวนรายการรวม ที่ Payment ManagementSUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail))ยอดเงินรวม ที่ Payment ManagementSUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount)วันที่อนุมัติจากต้นทาง[tx_payment_header](/display/RDSCPENH/tx_payment_header).approved_dateสถานะตรวจสอบ1.ตรวจสอบยอดรวมจำนวนรายการ [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_transaction และยอดรวมจำนวนรายการที่ตาราง SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail))2.ตรวจสอบยอดรวมจำนวนเงิน [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_amount และยอดรวมจำนวนเงินรายการที่ตาราง SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount) กรณี 1 และ 2 ถูกต้อง ให้แสดง Successกรณี 1 หรือ 2 ไม่ถูกต้อง ให้แสดง Fail |
| ระบบต้นทาง | ชื่อธุรกรรม | เลขอ้างอิงระดับ Batch | จำนวนรายการรวม จากระบบต้นทาง | ยอดเงินรวม จากระบบต้นทาง | จำนวนรายการรวม ที่ Payment Management | ยอดเงินรวม ที่ Payment Management | วันที่อนุมัติจากต้นทาง | สถานะ |
| Deposit | คืนเงินฝากเบี้ยประกันให้ลูกค้า | CP-TB-2025010200001 | 1,000 | 500,000.00 | 998 | 480,000.00 | 30/03/2569 | Fail |
| Income | รายได้รายวัน | CP-TB-2025010200002 | 2,000 | 2,000,000.00 | 2,000 | 2,000,000.00 | 01/04/2569 | Success |
| transaction_group | description |
| EH | สินไหม |
| ED | รายได้ตัวแทน |
| EC | รับฝากเบี้ย |
| EJ | Unit Linked |
| EK | Other |
| ลำดับ | ข้อมูล |
| 1 | วันที่อนุมัติจากต้นทาง จากน้อยไปมาก |
| 2 | ระบบต้นทาง เรียงข้อมูลตาม ก-ฮ, Aa-Zz |
| 3 | ชื่อธุรกรรม เรียงข้อมูลตาม ก-ฮ, Aa-Zz |
| Field | Mapping Data |
| ระบบต้นทาง | แสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **13000** |
| ชื่อธุรกรรม | แสดง [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).descriptionwhere [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_type[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = **14000** |
| เลขอ้างอิงระดับ Batch | [tx_payment_header](/display/RDSCPENH/tx_payment_header).batch_oper_no |
| จำนวนรายการรวม จากระบบต้นทาง | [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_transaction |
| ยอดเงินรวม จากระบบต้นทาง | [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_amount |
| จำนวนรายการรวม ที่ Payment Management | SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail)) |
| ยอดเงินรวม ที่ Payment Management | SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount) |
| วันที่อนุมัติจากต้นทาง | [tx_payment_header](/display/RDSCPENH/tx_payment_header).approved_date |
| สถานะ | ตรวจสอบ1.ตรวจสอบยอดรวมจำนวนรายการ [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_transaction และยอดรวมจำนวนรายการที่ตาราง SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail))2.ตรวจสอบยอดรวมจำนวนเงิน [tx_payment_header](/display/RDSCPENH/tx_payment_header).total_amount และยอดรวมจำนวนเงินรายการที่ตาราง SUM([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).amount) กรณี 1 และ 2 ถูกต้อง ให้แสดง Successกรณี 1 หรือ 2 ไม่ถูกต้อง ให้แสดง Fail |

- No labels
- [Edit Labels](#)
[![User icon: Add a picture of yourself](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/profilepics/add_profile_pic.png)](/users/editmyprofilepicture.action)
Loading the Editor
Write a comment…
[Add Comment](/display/RDSCPENH/02+Email+Reconcile+Oper?showComments=true&showCommentArea=true#addcomment)

---

## Hyperlinks บนหน้านี้

- [Email Reconcile](https://docs.google.com/spreadsheets/d/1hwSlwNij1t3WWX3gpX77t6u-2RJvzP2DbCGRisIRDFo/edit?usp=sharing)
- [appservice@ocean.co.th](http://wiki.thaisamut.co.thmailto:appservice@ocean.co.th)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [cf_email](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_email)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [/users/editmyprofilepicture.action](http://wiki.thaisamut.co.th/users/editmyprofilepicture.action)
- [Add Comment](http://wiki.thaisamut.co.th/display/RDSCPENH/02+Email+Reconcile+Oper?showComments=true&showCommentArea=true#addcomment)
