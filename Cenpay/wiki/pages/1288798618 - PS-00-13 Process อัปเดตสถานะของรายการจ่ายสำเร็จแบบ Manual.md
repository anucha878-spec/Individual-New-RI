# PS-00-13 Process อัปเดตสถานะของรายการจ่ายสำเร็จแบบ Manual

- **Page ID:** 1288798618
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288798618
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-00 Process กลาง > PS-00-13 Process อัปเดตสถานะของรายการจ่ายสำเร็จแบบ Manual
- **Depth:** 5

---

**Step a .1 :**อัปเดตข้อมูลในตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) และตาราง [lg_payment_detail](/display/RDSCPENH/lg_payment_detail) เงื่อนไขดังนี้

| [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) |
|---|
| Field | Mapping |
| status | Action ผลการจ่ายจ่ายไม่สำเร็จอัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายไม่สำเร็จ (lookup_key = 'FAI')**จ่ายสำเร็จ**อัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายเงินสำเร็จ (lookup_key = 'PAI')ข้อมูลการจ่ายไม่ถูกต้องอัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายเงินสำเร็จ (lookup_key = 'REJ')สถานะรายการระดับ Transection : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '11000' |
| Action | ผลการจ่าย |
| จ่ายไม่สำเร็จ | อัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายไม่สำเร็จ (lookup_key = 'FAI') |
| **จ่ายสำเร็จ** | อัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายเงินสำเร็จ (lookup_key = 'PAI') |
| ข้อมูลการจ่ายไม่ถูกต้อง | อัปเดตสถานะ รอทำจ่าย เปลี่ยนเป็น จ่ายเงินสำเร็จ (lookup_key = 'REJ') |
| สถานะรายการระดับ Transection : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '11000' |
| record_type | [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '25000' lookup_key = 'M' |
| payment_record_date | วันและเวลาที่บันทึกผลจ่าย |
| payment_record_by | Username ผู้บันทึกผลจ่าย |
| updated_date | วันและเวลาที่แก้ไขรายการ |
| updated_by | Username ผู้แก้ไขรายการ |

**Step a.2** : บันทึกข้อมูลเข้าสู่ตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) เงื่อนไขดังนี้

| [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) |
|---|
| Field | Mapping |
| voucher_status | Action สถานะรายการทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายไม่สำเร็จ ครบทุกรายการอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP')ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ ครบทุกรายการอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จ (lookup_key = 'SUP')ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ หรือ จ่ายไม่สำเร็จ หรือ ข้อมูลการจ่ายไม่ถูกต้องอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จบางส่วน (lookup_key = 'INP')สถานะรายการระดับ Voucher : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000' |
| Action | สถานะรายการ |
| ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายไม่สำเร็จ ครบทุกรายการ | อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP') |
| ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ ครบทุกรายการ | อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จ (lookup_key = 'SUP') |
| ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ หรือ จ่ายไม่สำเร็จ หรือ ข้อมูลการจ่ายไม่ถูกต้อง | อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จบางส่วน (lookup_key = 'INP') |
| สถานะรายการระดับ Voucher : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000' |
| verify_date | วันและเวลาที่ตรวจสอบผลจ่าย |
| verify_by | Username ผู้ตรวจสอบผลจ่าย |
| success_transaction | บันทึกข้อมูลด้วยผลรวมจำนวนรายการที่บันทึกผลการจ่ายสำเร็จ ภายใต้ voucher ที่ทำรายการ |
| success_amount | บันทึกข้อมูลด้วยผลรวมจำนวนเงินที่บันทึกผลการจ่ายสำเร็จ ภายใต้ voucher ที่ทำรายการ |
| unsuccess_transaction | บันทึกข้อมูลด้วยผลรวมจำนวนรายการที่บันทึกผลการจ่ายไม่สำเร็จ ภายใต้ voucher ที่ทำรายการ |
| unsuccess_amount | บันทึกข้อมูลด้วยผลรวมจำนวนเงินที่บันทึกผลการจ่ายไม่สำเร็จ ภายใต้ voucher ที่ทำรายการ |
| updated_date | วันและเวลาที่แก้ไขรายการ |
| updated_by | Username ผู้แก้ไขรายการ |

**Step a.3** :ตรวจสอบข้อมูล voucher_status ที่มี event_code = 'PM_FIN_02' ทุกรายการ ยกเว้น voucher_status ที่มีสถานะไม่อนุมัติ (UNA) — update by patcha.vo ([issues/60434](https://redmine.ochi.link/issues/60434)) ภายใต้ Batch ฝ่ายการเงิน เงื่อนไขดังนี้ [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard).batch_payment_id = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id ที่ทำรายการมีสถานะดังนี้
    - จ่ายสำเร็จ (lookup_key = 'SUP')
    - จ่ายสำเร็จบางส่วน (lookup_key = 'INP')
    - จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP')
1. กรณีเข้าเงื่อนไข ไม่ครบทุกรายการ ให้จบการทำงาน *(ไม่ครบทุกรายการ = ยังมีบาง Voucher ที่ยังมีสถานะเป็น "อนุมัติจ่ายเงิน")*
2. กรณีเข้าเงื่อนไข **ครบทุกรายการ** ให้ดำเนินการอัปเดตข้อมูลในตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment), [lg_batch_status](/display/RDSCPENH/lg_batch_status) และตาราง [tx_payment_header](/display/RDSCPENH/tx_payment_header) เงื่อนไขดังนี้ ตรวจสอบ [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id ทั้งหมดที่ทำรายการในตาราง [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard) โดยค้นหาจาก [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard).batch_payment_id = [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id ให้ทำการอัปเดตข้อมูลดังนี้[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingbatch_statusAction สถานะรายการ ทุก voucher มีสถานะเป็น : จ่ายไม่สำเร็จ ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายไม่สำเร็จ ครบทุกรายการอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP') ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png)**ทุก voucher มีสถานะเป็น : จ่ายสำเร็จ** ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ ครบทุกรายการ อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จ (lookup_key = 'SUP') ทุก voucher มีสถานะเป็น : จ่ายสำเร็จ ไม่ครบทุก voucher ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ หรือ จ่ายไม่สำเร็จ หรือ ข้อมูลการจ่ายไม่ถูกต้องอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จบางส่วน (lookup_key = 'INP')สถานะรายการระดับ Voucher : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000'updated_dateวันและเวลาที่แก้ไขรายการupdated_byUsername ผู้แก้ไขรายการตรวจสอบ [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).id สำหรับรายการที่อยู่ใต้ [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id กรณีไม่มี [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split) ให้ข้ามขั้นตอนนี้[tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)FieldMappingstatusAction สถานะรายการ ทุก batch มีสถานะเป็น : จ่ายไม่สำเร็จ ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายไม่สำเร็จ ครบทุกรายการอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP') ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png)**ทุก batch มีสถานะเป็น : จ่ายสำเร็จ** ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ ครบทุกรายการ อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จ (lookup_key = 'SUP') ทุก batch มีสถานะเป็น : จ่ายสำเร็จ ไม่ครบทุก batch ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ หรือ จ่ายไม่สำเร็จ หรือ ข้อมูลการจ่ายไม่ถูกต้องอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จบางส่วน (lookup_key = 'INP')สถานะรายการระดับ Batch : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000'updated_dateวันและเวลาที่แก้ไขรายการupdated_byUsername ผู้แก้ไขรายการตรวจสอบ [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id และ [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).id สำหรับรายการที่อยู่ใต้ [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment).id โดย[tx_payment_header](/display/RDSCPENH/tx_payment_header)FieldMappingstatusตรวจสอบการ Split Batch [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split).payment_header_id = [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header).id1.กรณีมีข้อมูลการ Splitไม่ต้องอัปเดต (สถานะเดิม BAS - Batch Split)2.กรณีไม่มีข้อมูลการ SplitAction สถานะรายการ ทุก batch มีสถานะเป็น : จ่ายไม่สำเร็จ ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายไม่สำเร็จ ครบทุกรายการอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายเงินไม่สำเร็จ (lookup_key = 'UNP') ![(tick)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/check.png)**ทุก batch มีสถานะเป็น : จ่ายสำเร็จ** ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ ครบทุกรายการ อัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จ (lookup_key = 'SUP') ทุก batch มีสถานะเป็น : จ่ายสำเร็จ ไม่ครบทุก batch ทุก transaction ในตาราง [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail) มีสถานะเป็น : จ่ายสำเร็จ หรือ จ่ายไม่สำเร็จ หรือ ข้อมูลการจ่ายไม่ถูกต้องอัปเดตสถานะ อนุมัติจ่ายเงิน เปลี่ยนเป็น จ่ายสำเร็จบางส่วน (lookup_key = 'INP')สถานะรายการระดับ Voucher : [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '12000'updated_dateวันและเวลาที่แก้ไขรายการupdated_byUsername ผู้แก้ไขรายการ

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [lg_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [issues/60434](https://redmine.ochi.link/issues/60434)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_header_split](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header_split)
- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
