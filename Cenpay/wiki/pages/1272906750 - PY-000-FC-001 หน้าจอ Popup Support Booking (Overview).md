# PY-000-FC-001 หน้าจอ Popup Support Booking (Overview)

- **Page ID:** 1272906750
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906750
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-000 : หน้าจอกลาง > PY-000-FC-001 หน้าจอ Popup Support Booking > PY-000-FC-001 หน้าจอ Popup Support Booking (Overview)
- **Depth:** 6

---

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลการจ่ายรายธุรกรรม
- เพื่อให้ผู้ใช้งานสามารถดูเอกสารแนบภายใต้ธุรกรรม
- เพื่อให้ผู้ใช้งานสามารถ Export File สำหรับรายงาน Support Booking

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน
  - ผู้ใช้งานจะต้องกดปุ่ม รายละเอียด ที่หน้าจอหลัก
    - กรณีเข้าใช้งานจากหน้าจอดังนี้ ให้แสดง รูปแบบ Support Booking จ่ายในประเทศ WHT เท่านั้น
      1. [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](/pages/viewpage.action?pageId=1266811400)
      2. [PY-002-FC-001 หน้าจอค้นหา Generate Batch Payment](/pages/viewpage.action?pageId=1267859518)
      3. [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)
      4. [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](/pages/viewpage.action?pageId=1269858922)
      5. [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)

### การกระทำกับหน้าจอ (Actions)

- Export รายงาน Support Booking
- ดูเอกสารแนบระดับ Transaction

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - หน้าจอจะแสดงข้อมูล Support Booking แยกตามประเภทรายงานได้อย่างถูกต้อง
  - ผู้ใช้งานสามารถ Export Report Support Booking ตามการแสดงผลบนหน้าจอได้
  - ผู้ใช้งานสามารถกดดูเอกสารแนบจากฝ่ายปฎิบัติการ ระดับ Transaction ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีรายการธุรกรรมจากต้นทางไม่ตรงกับประเภทของ Support Booking ระบบจะแสดงแจ้งเตือน "ไม่สามารถแสดง Support Booking ได้เนื่องจากประเภทธุรกรรมไม่ถูกต้อง"

---

## Hyperlinks บนหน้านี้

- [PY-001-FC-001 หน้าจอค้นหาข้อมูลและรวมแบทช์การเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811400)
- [PY-002-FC-001 หน้าจอค้นหา Generate Batch Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859518)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [9. Mapping Support Booking](http://wiki.thaisamut.co.th/display/RDSCPENH/9.+Mapping+Support+Booking)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
