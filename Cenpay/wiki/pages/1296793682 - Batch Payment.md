# Batch Payment

- **Page ID:** 1296793682
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/Batch+Payment
- **Path:** Home > Software Requirements Specification > 07. Appendix > 8. ตรวจสอบผลการจ่ายเงิน > Batch Payment
- **Depth:** 4

---

**Knowledge Sharing**
- **วิธีการบันทึกผลการขึ้นเงิน/โอนเงิน**แบ่งเป็น 2 วิธีดังนี้
    - บันทึกผลแบบ Auto : ระบบจะรองรับรูปแบบไฟล์ .txt และ .csv ในการการอัปโหลดไฟล์เพื่อประมวลผลการขึ้นเงินเท่านั้น
    - บันทึกผลแบบ Manual : ระบบจะรองรับไฟล์ทุกรูปแบบ โดยระบบจะไม่มีการประมวลผลจากไฟล์ที่อัปโหลด เจ้าหน้าที่การเงินที่ทำรายการต้องเป็นผู้บันทึกผลด้วยตัวเองเท่านั้น
    - ภายใต้ Voucher เดียวกัน ระบบจะรองรับการบันทึกผลวิธีใดวิธีหนึ่งเท่านั้นจะไม่สามารถผสมผสานกันทั้ง 2 วิธี (ต่างกับ Paperbase - เช็ค โดยที่ 1 Voucher จะรองรับทั้ง 2 วิธี) เมื่อทุกรายการภายใต้ Voucher ดำเนินการเปลี่ยนสถานะเช็คครบถ้วนแล้ว จึงจะเปลี่ยนสถานะในตาราง [tx_payment_dashboard](/display/RDSCPENH/tx_payment_dashboard) เปลี่ยนสถานะ Voucher เป็น "จ่ายสำเร็จ" หรือ "จ่ายสำเร็จบางส่วน" หรือ "จ่ายไม่สำเร็จ" อ้างอิงตามเงื่อนไขของหน้าจอบันทึกผลการโอนเงิน

---

## Hyperlinks บนหน้านี้

- [tx_payment_dashboard](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_dashboard)
