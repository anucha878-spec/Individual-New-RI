# PY-003-FC-003 หน้าจอ Popup รายการ Paperbase อื่นๆ

- **Page ID:** 1269858909
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858909
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-003 : Paperbase Payment - Maker > PY-003-FC-003 หน้าจอ Popup รายการ Paperbase อื่นๆ
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

Mode Edit
![img](/download/attachments/1271529528/image2025-10-7%2015%3A10%3A56.png?version=1&modificationDate=1759824657283&api=v2)
Mode View
![img](/download/attachments/1271529528/image2025-10-7%2015%3A11%3A22.png?version=1&modificationDate=1759824683104&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลรายการ Paperbase อื่นๆ
- เพื่อให้ผู้ใช้งานสามารถยกเลิก Paperbase อื่นๆ และระบุเหตุผลการยกเลิก
- เพื่อให้ผู้ใช้งานสามารถดูประวัติสถานะ
- เพื่อให้ผู้ใช้งานสามารถบันทึกจ่าย Paperbase อื่นๆ

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Maker)
  - ผู้ใช้งานจะต้องกดปุ่ม แก้ไข ที่หน้าจอหลัก
  - รายการ Batch ที่เลือกจะต้องมีช่องทางการจ่ายเป็น อื่นๆ และสถานะดำเนินการเป็น กำลังดำเนินการ หรือ รอดำเนินการใหม่
  - รายการ Paperbase อื่นๆ จะมีสถานะเป็น รอบันทึกจ่าย

### การกระทำกับหน้าจอ (Actions)

- เลือกรายการบันทึกจ่าย
- ยกเลิกรายการ Paperbase
- ดูประวัติสถานะ
- ปิดหน้าจอรายการ Paperbase อื่นๆ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ระบบสามารถแสดงข้อมูลรายการ Paperbase อื่นๆ ภายใต้ Batch การเงินได้อย่างถูกต้อง
  - เมื่อกดปุ่มยกเลิก ระบบจะเปิดหน้าจอยกเลิกเช็ค เพื่อให้ระบุสาเหตุการยกเลิกเช็ค
  - เมื่อกดปุ่มประวัติสถานะ ระบบจะเปิดหน้าจอประวัติสถานะที่มีการเปลี่ยนแปลง
  - เมื่อเลือกรายการและกดปุ่มบันทึกจ่าย ระบบจะปรับสถานะรายการที่เลือกเป็น บันทึกจ่าย กรณีสถานะเป็นบันทึกจ่ายหรือยกเลิกครบทุกรายการ ระบบจะส่งข้อมูลไปยังหน้าจอ [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ หรือสถานะเช็ค ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และกลับสู่หน้าจอหลัก
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

### รายละเอียดเงื่อนไขการแสดงรายการ Paperbase อื่นๆ

| **ส่วนแสดงข้อมูล Batch** |
|---|
| 1 |   | การเรียงลำดับข้อมูล | เรียงลำดับจากชื่อผู้รับเงินจากน้อยไปมาก |   |   |
| 2 |   | Sort Column | สถานะ |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการบันทึกจ่ายยกเลิกให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| 4 |   | Font Color | กรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column |   |   |
| 5 |   | Row Color | กรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number | แสดงข้อมูล Batch Number ฝ่ายการเงินที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) | P25680701001 |   |
| 2 | Label | Request Payment Date | แสดงข้อมูล Request Payment Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 01/07/2568 |   |
| 3 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงิน ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูลช่องทางการจ่ายเงิน ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล ช่องทางการจ่ายเงิน | โอนเงินไปต่างประเทศ |   |
| 4 | Label | Paid Date | แสดงข้อมูล Paid Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 05/07/2568 |   |
| 5 | Label | Service | แสดงข้อมูล Service ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูล Service ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service | โอนเงินไปต่างประเทศ |   |
| 6 | Label | Bank Account | แสดงข้อมูล Bank Account ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดง Bank Account ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account | KBANK 718-1-01369-3 |   |
| 7 | Button | บันทึกจ่าย | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขแสดงมีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่ม ระบบจะแสดงแจ้งเตือน ยืนยันบันทึกจ่ายเมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะเปลี่ยนสถานะของรายการที่เลือกเป็นบันทึกจ่าย เคลียร์ Checkbox และ Refresh หน้าจอตรวจสอบสถานะของเช็คทุกรายการภายใต้ Batch กรณีเป็นบันทึกจ่าย หรือ ถูกต้อง หรือ ยกเลิก ทุกรายการ ให้บันทึกสถานะดำเนินการของ Batch เป็น บันทึกสำเร็จ |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | มีรายการที่สถานะเป็น รอจ่าย หรือ รอการแก้ไข |
| ส่วนแสดงข้อมูลรายการเช็ค |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Check Box |   | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไข |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | รอจ่าย หรือ รอการแก้ไข |
| 2 | Button | ยกเลิกการจ่าย | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอจ่าย หรือ รอการแก้ไขแสดงรอจ่าย หรือ รอการแก้ไขเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-005_01 หน้าจอ Popup ยกเลิกเช็ค/Paperbase อื่นๆ](/pages/viewpage.action?pageId=1271529539) |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอจ่าย หรือ รอการแก้ไข |
| แสดง | รอจ่าย หรือ รอการแก้ไข |
| 3 | Label | ชื่อ-สกุลผู้รับเงิน | แสดงคำนำหน้า ชื่อ สกุล ของผู้รับเงิน | นายไทยสมุทร ประกันชีวิต |   |
| 4 | Label | จำนวนเงิน | แสดงจำนวนเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 15,000.00 |   |
| 5 | Label | สถานะ | แสดงสถานะตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล สถานะดำเนินการระดับ Transaction |   |   |
| 6 | Label | เหตุผลการแก้ไข/การส่งกลับ/ยกเลิก | แสดงข้อมูลเหตุผลการแก้ไข/การส่งกลับ/ยกเลิก ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล เหตุผลการแก้ไข/การส่งกลับ/ยกเลิกกรณีไม่มีข้อมูลให้แสดง - |   |   |
| 7 | Button | ประวัติสถานะ | Enable : เสมอเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](/pages/viewpage.action?pageId=1269858892) |   |   |
| **ส่วนแสดงปุ่ม** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ปิด | Enable : เสมอเมื่อกดปุ่มระบบจะปิดหน้าจอ Popup และกลับสู่หน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) |   |   |

---

## Hyperlinks บนหน้านี้

- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-005_01 หน้าจอ Popup ยกเลิกเช็ค/Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271529539)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858892)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1271529528/image2025-10-7%2015%3A10%3A56.png?version=1&modificationDate=1759824657283&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1271529528/image2025-10-7%2015%3A11%3A22.png?version=1&modificationDate=1759824683104&api=v2
