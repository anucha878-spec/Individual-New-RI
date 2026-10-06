# PR-002-FC-004 : หน้าจอ pop-up ข้อมูลสำหรับขอ Free Look

- **Page ID:** 1305412037
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1305412037
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 5. Module บันทึกคำร้อง > CP-PR-002 : บันทึกรายการคำร้อง > PR-002-FC-004 : หน้าจอ pop-up ข้อมูลสำหรับขอ Free Look
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

กรณีเป็น e-policy
![img](/download/attachments/1305412046/image2025-12-11%2011%3A17%3A43.png?version=1&modificationDate=1765426664362&api=v2)
กรณีเป็น e-policy และออกเล่มกรมธรรม์
![img](/download/attachments/1305412046/image2026-6-30%2017%3A38%3A17.png?version=1&modificationDate=1782815898176&api=v2)
กรณีไม่ใช่ e-policy
![img](/download/attachments/1305412046/image2025-12-11%2011%3A17%3A57.png?version=1&modificationDate=1765426678467&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อใช้บันทึกข้อมูลสำหรับขอ Free Look

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ธุรการ (สาขา) (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- กดปุ่ม "ข้อมูลสำหรับขอ Free Look" จากหน้าจอ [PR-002-FC-001 : หน้าจอบันทึกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301209) หรือ [PR-003-FC-001 : หน้าจอแก้ไขรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301264)

### การกระทำกับหน้าจอ (Actions)

- บันทึกข้อมูลสำหรับขอ Free Look
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกข้อมูลสำหรับขอ Free Look แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกข้อมูลสำหรับขอ Free Look ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ผู้ใช้งานสามารถบันทึกข้อมูลสำหรับขอ Free Look ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ" เป็นตัวหนังสือสีแดง ที่ใต้ field นั้นๆ

### รายละเอียดส่วนการบันทึกข้อมูลสำหรับขอ Free Look

**กรณีเป็น e-policy**

| **ส่วนการบันทึกข้อมูลสำหรับขอ Free Look** |
|---|
| **No** | **Component Type** | **Component Name** | **Default Value** | **Action / Data Value** | **Example** | **Remark** |
| 1 | Check Box | e-policy | Disable |   |   |   |
| 2 | Date | วันที่ลูกค้าได้รับอีเมล | EnableDefault : วันที่ปัจจุบัน/ ตามบันทึกคำร้อง |   | 16/09/2568 | Required Field |
| **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 01/07/2026** |
| 3 | Check Box | ได้รับเล่มกรมธรรม์ | Enable : ออกเล่มกรมธรรม์Disable : ไม่ได้ออกเล่มกรมธรรม์ |   |   |   |
| 4 | Check Box | ยกเว้นค่าธรรมเนียมบริการกรมธรรม์ | Enable : ออกเล่มกรมธรรม์Disable : ไม่ได้ออกเล่มกรมธรรม์ |   |   |   |
| 5 | Check Box | ไม่ได้รับเล่มกรมธรรม์ | Enable : ออกเล่มกรมธรรม์Disable : ไม่ได้ออกเล่มกรมธรรม์ |   |   |   |

**กรณีไม่ใช่ e-policy**

| **ส่วนการบันทึกข้อมูลสำหรับขอ Free Look** |
|---|
| **No** | **Component Type** | **Component Name** | **Default Value** | **Action / Data Value** | **Example** | **Remark** |
| 1 | Check Box | ได้รับเล่มกรมธรรม์ | Enable |   |   |   |
| 2 | Date | วันที่รับเล่มกรมธรรม์ | EnableDefault : วันที่ปัจจุบัน/ ตามบันทึกคำร้อง |   | 16/09/2568 | Required Field |
| 3 | Check Box | ยกเว้นค่าธรรมเนียมบริการกรมธรรม์ | Enable |   |   |   |
| 4 | Check Box | ไม่ได้รับเล่มกรมธรรม์ | Enable |   |   |   |
| 5 | Date | วันเริ่มสัญญา | Disable |   | 05/07/2563 | ดึงจากระบบ |

### รายละเอียดเงื่อนไขปุ่ม

| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
|---|---|---|---|---|---|---|
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกข้อมูลสำหรับขอ Free Look และปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า | ![img](/download/thumbnails/1298301225/image2025-11-11%2010%3A20%3A3.png?version=1&modificationDate=1762831203233&api=v2) |   |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการบันทึกข้อมูลสำหรับขอ Free Look | ![img](/download/thumbnails/1298301225/image2025-11-11%2010%3A20%3A48.png?version=1&modificationDate=1762831248335&api=v2) |   |

---

## Hyperlinks บนหน้านี้

- [PR-002-FC-001 : หน้าจอบันทึกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301209)
- [PR-003-FC-001 : หน้าจอแก้ไขรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301264)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1305412046/image2025-12-11%2011%3A17%3A43.png?version=1&modificationDate=1765426664362&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1305412046/image2026-6-30%2017%3A38%3A17.png?version=1&modificationDate=1782815898176&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1305412046/image2025-12-11%2011%3A17%3A57.png?version=1&modificationDate=1765426678467&api=v2
