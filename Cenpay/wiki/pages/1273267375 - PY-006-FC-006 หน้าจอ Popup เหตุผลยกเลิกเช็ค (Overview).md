# PY-006-FC-006 หน้าจอ Popup เหตุผลยกเลิกเช็ค (Overview)

- **Page ID:** 1273267375
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273267375
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-006 : บันทึกผลการจ่าย > PY-006-FC-006 หน้าจอ Popup เหตุผลยกเลิกเช็ค > PY-006-FC-006 หน้าจอ Popup เหตุผลยกเลิกเช็ค (Overview)
- **Depth:** 6

---

### วัตถุประสงค์ (Objective)

- เพื่อแสดงเหตุผลประกอบการยกเลิกเช็ค

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Authorizer)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ผู้ใช้งานจะต้องเข้าสู่หน้าจอผ่านการกดปุ่ม อัปโหลดไฟล์ที่หน้าจอ [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](/pages/viewpage.action?pageId=1271988606)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการธุรกรรมที่กำลังพิจารณาเลือกใน Checkbox ที่หน้าจอ [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](/pages/viewpage.action?pageId=1271988606)

### การกระทำกับหน้าจอ (Actions)

- กดปุ่ม "ยกเลิก" เพื่อยกเลิกรายการและกลับเข้าสู่ [หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- กดปุ่ม "บันทึก" เพื่อบันทึกเหตุผลประกอบการยกเลิกเช็ค และกลับเข้าสู่ [หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม บันทึก ระบบบันทึกเหตุผลยกเลิกเช็คกลับไปที่รายการธุรกรรมที่กำลังพิจารณาเลือกใน Checkbox ที่หน้าจอ [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](/pages/viewpage.action?pageId=1271988606)
  - เมื่อผู้ใช้งานกดปุ่ม ยกเลิก กลับสู่ [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](/pages/viewpage.action?pageId=1271988606) โดยค้างรายการ Checkbox ที่เลือกไว้ และค้างเงื่อนไขค้นหาข้อมูลที่เลือกไว้

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานไม่ระบุข้อความยาวเกิน XXX ตัวอักษร ระบบแจ้งเตือน "ระบุข้อความไม่เกิน XXX ตัวอักษร"

---

## Hyperlinks บนหน้านี้

- [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- [หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- [หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
- [PY-006-FC-004 หน้าจอบันทึกผลจ่ายเช็ค Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988606)
