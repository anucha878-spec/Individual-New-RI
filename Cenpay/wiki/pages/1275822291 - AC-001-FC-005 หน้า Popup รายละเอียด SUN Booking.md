# AC-001-FC-005 หน้า Popup รายละเอียด SUN Booking

- **Page ID:** 1275822291
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275822291
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 3. Module ตรวจจ่ายบัญชี จ่ายผลประโยชน์ (ตามเรียกร้อง) > CP-AC-001 : ตรวจจ่ายบัญชี > AC-001-FC-005 หน้า Popup รายละเอียด SUN Booking
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

![img](/download/attachments/1275822312/image2025-8-14%209%3A41%3A26.png?version=1&modificationDate=1755139289665&api=v2)

### 

### วัตถุประสงค์ (Objective)

- เพื่อใช้ในการตรวจสอบรายละเอียด SUN Booking ของรายการ Batch ปฎิบัติการที่ต้องการได้

### ผู้ใช้งาน (Target Users)

- ฝ่ายบัญชี

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- มีการกดปุ่มยืนยันตรวจจ่ายจากฝ่ายปฎิบัติการที่หน้าจอ [PC-003-FC-006 หน้าจอ Popup ยืนยันบันทึกรายการอนุมัติเตรียมจ่ายครั้งที่ 2](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252086) และระบบจะทำการสร้างรายการ SUN Booking ของรายการ Batch ปฎิบัติการที่ผ่านการอนุมัติครั้งที่ 2
- จากนั้นเข้าสู่หน้าจอ [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266) แล้วกดที่ปุ่ม SUN Booking บนรายการ Batch ปฎิบัติการที่ต้องการทราบ

### การกระทำกับหน้าจอ (Actions)

- ตรวจสอบรายละเอียด SUN Booking ของรายการ Batch ปฎิบัติการที่เลิอก
- กดปิดเพื่อทำการปิดหน้าจอ Popup ดังกล่าว

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ผู้ใช้งานได้ทราบถึงรายละเอียดของ SUN Booking ของ Batch ปฎิบัติการที่เลือก

### การจัดการข้อผิดพลาด (Exceptional Handling)

- ไม่มี เป็นเพียงหน้าจอที่ใช้แสดงรายละเอียดของ SUN Booking สำหรับ Batch ปฎิบัติการที่เลือกให้ผู้ใช้งานรับทราบเท่านั้น

### รายละเอียดส่วนการแสดงผลข้อมูล

| ส่วนแสดงข้อมูลผลการค้นหา |
|---|
| 1 |   | การเรียงลำดับข้อมูล |   |   |   |
| **ส่วนการแสดงข้อมูล (Header)** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | รวม Dr. : | แสดงยอดรวม Dr. ทั้งหมดภายใต้รูปแบบFix Text : "รวม Dr. : "+ยอดรวม Dr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมดให้แสดงเป็นตัวหนังสือสีฟ้า |   |   |
| 2 | Label | รวม Cr. : | แสดงยอดรวม Cr. ทั้งหมดภายใต้รูปแบบFix Text : "รวม Cr. : "+ยอดรวม Cr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมดให้แสดงเป็นตัวหนังสือสีฟ้า |   |   |
| 3 | Label | ผลต่าง : | แสดงยอดผลต่าง ของ รวม Dr. และ รวม Cr. ภายใต้รูปแบบFix Text : "ผลต่าง : "+ยอดผลต่างของ รวม Dr. และ รวม Cr. ภายใต้รายการ Batch ปฎิบัติการทั้งหมดโดยถ้าผลต่าง = 0.00 ให้ระบุเป็นสีเขียว และถ้าผลต่าง มากกว่า หรือ น้อยกว่า 0 ให้ระบุเป็นสีแดง |   |   |
| **ส่วนการแสดงข้อมูล (Table Display)** |
| **No** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
| 1 | Label | Posting Date | แสดงข้อมูล Posting Date ในรูปแบบของวันที่ | 16/07/2568 |   |
| 2 | Label | Account Code | แสดงข้อมูล Account Code | 50542110 |   |
| 3 | Label | Account Name | แสดงข้อมูล Account Name | สินไหมอุบัติเหตุ |   |
| 4 | Label | Dr. | แสดงยอด Dr. ของเงินตาม Account Codeกรณีไม่มีข้อมูล แสดงค่าว่าง | 382,890.00 |   |
| 5 | Label | Cr. | แสดงยอด Cr. ของเงินตาม Account Codeกรณีไม่มีข้อมูล แสดงค่าว่าง | 382,890.00 |   |
| 6 | Label | Cost Center/Revenue Center | แสดงข้อมูล Cost Center หรือ Revenue Centerกรณีไม่มีข้อมูล แสดงค่า "-" | 8300T2 |   |
| 7 | Label | Project Budget (IO)/Department Budget (FC) | แสดงข้อมูล Project Budget (IO) หรือ Department Budget (FC)กรณีไม่มีข้อมูล แสดงค่า "-" |   |   |
| 8 | Label | Branch Owner | แสดงข้อมูล Branch Owner | 0116 |   |
| 9 | Label | Branch Service | แสดงข้อมูล Branch Service | 8300 |   |
| 10 | Label | Business Line | แสดงข้อมูล Business Line | 0101 |   |

---

## Hyperlinks บนหน้านี้

- [PC-003-FC-006 หน้าจอ Popup ยืนยันบันทึกรายการอนุมัติเตรียมจ่ายครั้งที่ 2](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252086)
- [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1275822312/image2025-8-14%209%3A41%3A26.png?version=1&modificationDate=1755139289665&api=v2
