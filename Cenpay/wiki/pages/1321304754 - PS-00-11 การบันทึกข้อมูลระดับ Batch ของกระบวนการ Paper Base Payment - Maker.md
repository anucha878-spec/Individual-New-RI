# PS-00-11 การบันทึกข้อมูลระดับ Batch ของกระบวนการ Paper Base Payment - Maker

- **Page ID:** 1321304754
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1321304754
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-00 Process กลาง > PS-00-11 การบันทึกข้อมูลระดับ Batch ของกระบวนการ Paper Base Payment - Maker
- **Depth:** 5

---

ตรวจสอบข้อมูลสถานะของทุกรายการภายใต้ batch_payment_no ที่ทำรายการ
1. ช่องทางการจ่ายเงิน : เช็คบริษัท
  1. กรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้จบการทำงาน
  2. กรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอพิมพ์เช็ค" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูล
2. ช่องทางการจ่ายเงิน : อื่นๆ
  1. กรณีพบข้อมูลอย่างน้อย 1 รายการ มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้จบการทำงาน
  2. กรณีไม่พบข้อมูล รายการที่มีสถานะเป็น "รอจ่าย" หรือ "รอการแก้ไข" ให้ดำเนินการต่อในขั้นตอนอัปเดตข้อมูล
3. อัปเดตข้อมูลในตาราง [tx_batch_payment](/display/RDSCPENH/tx_batch_payment) และ [lg_batch_status](/display/RDSCPENH/lg_batch_status) เงื่อนไขดังนี้[tx_batch_payment](/display/RDSCPENH/tx_batch_payment)FieldMappingId@Id ที่ทำรายการbatch_status[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = 'CHC' where parent_id = '12000' *(บักทึกสำเร็จ)*updated_dateUsername ผู้แก้ไขรายการupdated_byวันและเวลาที่แก้ไขรายการ

---

## Hyperlinks บนหน้านี้

- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [lg_batch_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_status)
- [tx_batch_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_batch_payment)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
