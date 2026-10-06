# PY-006-FC-003 หน้าจอ Popup บันทึกผลโอนเงิน Upload File (Overview)

- **Page ID:** 1273267219
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273267219
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-006 : บันทึกผลการจ่าย > PY-006-FC-003 หน้าจอ Popup บันทึกผลโอนเงิน Upload File > PY-006-FC-003 หน้าจอ Popup บันทึกผลโอนเงิน Upload File (Overview)
- **Depth:** 6

---

### วัตถุประสงค์ (Objective)

- เพื่อบันทึกไฟล์ผลการโอนเงินระดับรายการธุรกรรม

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการ Voucher ที่กำลังพิจารณามาจากหน้าจอ [หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)

### การกระทำกับหน้าจอ (Actions)

- เลือก "ประเภทบันทึกผลจ่าย" เพื่อเลือกวิธีการบันทึกข้อมูลผลการจ่าย ระหว่างแบบ Auto และแบบ Manual
- กดปุ่ม ![img](http://wiki.thaisamut.co.th/download/attachments/1271988600/2025-08-04_142343.png?version=1&modificationDate=1754292233093&api=v2) "อัปโหลด" เพื่ออัปโหลดไฟล์และจัดเก็บเข้าสู่ระบบ DMS
- กดปุ่ม "ยกเลิก" เพื่อยกเลิกบันทึกรายการไฟล์ และกลับสู่ [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- กดปุ่ม "บันทึก" เพื่อบันทึกรายการไฟล์ และกลับสู่ [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม Upload ระบบจะแสดงหน้าจอรายการให้ผู้ใช้งานเลือก Browse ไฟล์จากโฟลเดอร์บนเครื่องของผู้ใช้งาน
  - เมื่อผู้ใช้งานกดปุ่ม ยกเลิก ระบบจะยกเลิกทำรายการ Upload File และให้กลับสู่ [หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)
  - เมื่อผู้ใช้งานกดปุ่ม บันทึก ระบบจะ
    - ปรับสถานะรายการ Voucher เป็น จ่ายไม่สำเร็จ (Unsuccessful Payment) - กรณีภายใต้ batch นั้นไม่สำเร็จเลย
    - ปรับสถานะรายการ Voucher เป็น จ่ายสำเร็จบางส่วน (Incomplete Payment) - กรณีภายใต้ batch นั้นสำเร็จบางส่วน
    - กรณีที่มีรายการจ่ายไม่สำเร็จ ระบบส่งรายการไปประมวลผลรายการบัญชี EDW เพื่อสร้างรายการบัญชี โอนเงินไม่สำเร็จ, รับคืนค่าธรรมเนียมธนาคาร รวมถึงสร้างรายการบัญชีโอนเงินไม่สำเร็จ, รับคืนค่าธรรมเนียมธนาคาร ที่ [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
    - ส่งอัปเดตสถานะรายการที่ระบบ Cenpay ทุกรายการธุรกรรมย่อย

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเลือกอัปโหลดไฟล์ซึ่งมีขนาดไฟล์ไม่ถูกต้อง ให้แสดง Pop Up Alert ข้อความ "กรุณาตรวจสอบขนาดไฟล์ให้ถูกต้อง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

---

## Hyperlinks บนหน้านี้

- [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)

## Attachments

- http://wiki.thaisamut.co.thhttp://wiki.thaisamut.co.th/download/attachments/1271988600/2025-08-04_142343.png?version=1&modificationDate=1754292233093&api=v2
