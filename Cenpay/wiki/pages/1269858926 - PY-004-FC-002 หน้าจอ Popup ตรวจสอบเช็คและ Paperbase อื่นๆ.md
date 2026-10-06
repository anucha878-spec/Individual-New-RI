# PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ

- **Page ID:** 1269858926
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858926
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-004 : Paperbase Payment - Checker > PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

**Mode Edit**
- **Service : เช็คบริษัท**
![img](/download/attachments/1271529618/image2025-8-18%2013%3A47%3A6.png?version=1&modificationDate=1755499627170&api=v2)
- **Service : อื่นๆ**
![img](/download/attachments/1271529618/image2025-8-18%2013%3A47%3A18.png?version=1&modificationDate=1755499639700&api=v2)
**Mode View**
![img](/download/attachments/1271529618/image2025-8-18%2013%3A47%3A27.png?version=1&modificationDate=1755499647784&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลประเภทการจ่าย Paperbase Payment ที่ส่งตรวจสอบจาก Maker
- เพื่อให้ผู้ใช้งานสามารถตรวจสอบรายการ Paperbase เช็คบริษัทและอื่นๆ
- เพื่อให้ผู้ใช้งานแก้ไขเหตุผลการส่งกลับ
- เพื่อให้ผู้ใช้งานดูประวัติสถานะ
- เพื่อให้ผู้ใช้งานสามารถบันทึกร่างการตรวจสอบรายการ Paperbase
- เพื่อให้ผู้ใช้งานสามารถส่งรายการไปยังรออนุมัติบันทึกบัญชี

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Checker)
  - ผู้ใช้งานจะต้องกดปุ่ม ตรวจสอบ ที่หน้าจอหลัก
  - รายการ Batch ที่เลือกสถานะดำเนินการเป็น รอการตรวจสอบผล
  - รายการเช็คธนาคาร และ Paperbase อื่นๆ จะมีสถานะเป็นรอตรวจสอบ

### การกระทำกับหน้าจอ (Actions)

- ตรวจสอบรายการเช็ค
- ระบุเหตุผลการส่งกลับ
- ดูประวัติสถานะ
- ยกเลิกการตรวจสอบเช็ค
- บันทึกร่างสถานะเช็ค
- บันทึกผลการตรวจสอบ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ระบบสามารถแสดงรายการเช็คธนาคารและ Paperbase อื่นๆได้อย่างถูกต้อง
  - เมื่อเลือกผลการตรวจสอบเป็นถูกต้อง ระบบจะปรับข้อความสถานะเป็นถูกต้อง
  - เมื่อเลือกผลการตรวจสอบเป็นไม่ถูกต้อง ระบบจะปรับข้อความสถานะเป็น รอการแก้ไข และ Required การระบุเหตุผลการส่งกลับแก้ไข
  - เมื่อกดปุ่มแก้ไข ระบบจะเปิดหน้าจอเหตุผลการส่งกลับ เพื่อระบุสาเหตุ
  - เมื่อกดปุ่มบันทึกร่าง ระบบจะตรวจสอบการระบุข้อมูลให้ครบถ้วน และบันทึกข้อมูลที่ฐานข้อมูล
  - เมื่อกดปุ่มบันทึกผลการตรวจสอบ
    - กรณีมีผลการตรวจสอบเป็นไม่ถูกต้อง ระบบจะเปลี่ยนสถานะเป็นรอดำเนินการใหม่ และส่งข้อมูลกลับไปยังหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
    - กรณีผลการตรวจสอบเป็นถูกต้องหรือยกเลิกทั้งหมด ระบบจะเปลี่ยนสถานะเป็นรออนุมัติ ระบบจะประมวลผลข้อมูลบัญชี EDW และส่งข้อมูลไปยังหน้าจอ [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
    - ส่งอัปเดตสถานะรายการที่ระบบ Cenpay ทุกรายการธุรกรรมย่อยภายใต้ Batch การเงิน เพื่อให้รับทราบสถานะรายการปัจจุบัน

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ หรือสถานะเช็ค ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และกลับสู่หน้าจอหลัก
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

### รายละเอียดเงื่อนไขการตรวจสอบเช็คและ Paperbase อื่นๆ

| **ส่วนแสดงข้อมูล Batch** |
|---|
| 1 |   | การเรียงลำดับข้อมูล | เรียงลำดับจากชื่อผู้รับเงินจากน้อยไปมาก |   |   |
| 2 |   | Sort Column | เลขที่เช็คสถานะ |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการบันทึกร่างบันทึกผลการตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| 4 |   | Font Color | กรณีสถานะดำเนินการเป็น ยกเลิก ให้แสดงข้อมูลเป็นสีเทาทุก Column |   |   |
| 5 |   | Row Color | กรณี Checkbox มีค่าเป็น Checked ให้ Highlight Row เป็นสีเหลือง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Batch Number | แสดงข้อมูล Batch Number ฝ่ายการเงินที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862) | PAP-25680701-00001 |   |
| 2 | Label | Request Payment Date | แสดงข้อมูล Request Payment Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 01/07/2568 |   |
| 3 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงิน ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูลช่องทางการจ่ายเงิน ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล ช่องทางการจ่ายเงิน | เช็คบริษัท |   |
| 4 | Label | Paid Date | แสดงข้อมูล Paid Date ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | 05/07/2568 |   |
| 5 | Label | Service | แสดงข้อมูล Service ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดงข้อมูล Service ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service | เช็คบริษัท |   |
| 6 | Label | Bank Account | แสดงข้อมูล Bank Account ที่เลือกจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](/pages/viewpage.action?pageId=1269858862)แสดง Bank Account ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account | KBANK 718-1-01369-3 |   |
| ส่วนแสดงข้อมูลรายการเช็ต |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Radio Button | ถูกต้อง/ไม่ถูกต้อง | เงื่อนไขปุ่มสถานะดำเนินการซ่อนสถานะเป็น ยกเลิกหรือ สถานะดำเนินการ ไม่เป็น รอการตรวจสอบผลแสดงสถานะเป็น รอตรวจสอบ,ถูกต้อง,รอการแก้ไขและสถานะดำเนินการเป็น รอการตรวจสอบผลกรณีเลือกผลการตรวจสอบเป็นถูกต้อง ให้เปลี่ยนข้อความ สถานะเป็น ถูกต้องไม่ถูกต้อง ให้เปลี่ยนข้อความ สถานะเป็น รอการแก้ไข |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | สถานะเป็น ยกเลิกหรือ สถานะดำเนินการ ไม่เป็น รอการตรวจสอบผล |
| แสดง | สถานะเป็น รอตรวจสอบ,ถูกต้อง,รอการแก้ไขและสถานะดำเนินการเป็น รอการตรวจสอบผล |
| 4 | Label | ชื่อ-สกุลผู้รับเงิน | แสดงคำนำหน้า ชื่อ สกุล ของผู้รับเงิน | นายไทยสมุทร ประกันชีวิต |   |
| 5 | Label | จำนวนเงิน | แสดงจำนวนเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 15,000.00 |   |
| 6 | Label | เลขที่เช็ค | แสดงเลขที่เช็คกรณีไม่มีข้อมูลให้แสดง - |   |   |
| 7 | Label | สถานะ | แสดงสถานะตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล สถานะดำเนินการระดับ Transaction |   |   |
| 8 | Label | เหตุผลการแก้ไข/การส่งกลับ/ยกเลิก | แสดงข้อมูลเหตุผลการแก้ไข/การส่งกลับ/ยกเลิก ตาม [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data) ข้อมูล เหตุผลการแก้ไข/การส่งกลับ/ยกเลิกกรณีไม่มีผลการตรวจสอบ หรือผลการตรวจสอบเป็นถูกต้อง ให้แสดง -กรณีผลการตรวจสอบเป็น ไม่ถูกต้อง ให้แสดง "กรุณาระบุ" ข้อความสีแดง |   |   |
| 9 | Button | แก้ไขเหตุผลการส่งกลับ | เงื่อนไขปุ่มสถานะดำเนินการซ่อนผลการตรวจสอบเป็น null หรือ ถูกต้องแสดงผลการตรวจสอบเป็น ไม่ถูกต้องเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-004-FC-003 หน้าจอ Popup เหตุผลการส่งกลับ](/pages/viewpage.action?pageId=1269858930) |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ผลการตรวจสอบเป็น null หรือ ถูกต้อง |
| แสดง | ผลการตรวจสอบเป็น ไม่ถูกต้อง |
| 10 | Button | ประวัติสถานะ | Enable : เสมอเมื่อกดปุ่มระบบจะเปิดหน้าจอ [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](/pages/viewpage.action?pageId=1269858892) |   |   |
| 11 | Label | พิมพ์ครั้งที่ | ข้อมูลครั้งที่พิมพ์ล่าสุดกรณีไม่มีข้อมูลให้แสดง - |   |   |
| **ส่วนแสดงปุ่ม** |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ยกเลิก | Enable : เสมอเมื่อกดปุ่มระบบจะแสดงแจ้งเตือน "ยืนยันการยกเลิกตรวจสอบ"เมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะปิดการแจ้งเตือนและกลับสู่หน้าจอ [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](/pages/viewpage.action?pageId=1269858922) |   |   |
| 2 | Button | บันทึกร่าง | เงื่อนไขปุ่มตรวจสอบDisableตรวจสอบสถานะ และเหตุผลการส่งกลับไม่มีการเปลี่ยนแปลงข้อมูลEnableตรวจสอบสถานะ และเหตุผลการส่งกลับมีการเปลี่ยนแปลงข้อมูล ตรวจสอบสถานะกรณีมีสถานะเป็น รอการแก้ไข ตรวจสอบการระบุเหตุผลหากยังไม่ระบุ ให้แสดงแจ้งเตือน "กรุณาระบุเหตุผลการแก้ไข"เมื่อกดตกลง ให้ปิดการแจ้งเตือนหากระบุครบทุกรายการแล้วให้ทำข้อถัดไปเมื่อกดปุ่มระบบจะแสดงแจ้งเตือน "ยืนยันการบันทึกร่าง"เมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะบันทึกการแก้ไขข้อมูลบนหน้าจอ และกลับสู่หน้าจอ [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](/pages/viewpage.action?pageId=1269858922) |   |   |
| เงื่อนไขปุ่ม | ตรวจสอบ |
| Disable | ตรวจสอบสถานะ และเหตุผลการส่งกลับไม่มีการเปลี่ยนแปลงข้อมูล |
| Enable | ตรวจสอบสถานะ และเหตุผลการส่งกลับมีการเปลี่ยนแปลงข้อมูล |
| 3 | Button | บันทึกผลการตรวจสอบ | เงื่อนไขปุ่มตรวจสอบDisableตรวจสอบไม่ทุกรายการEnableตรวจสอบครบทุกรายการ หรือ ยกเลิกทุกรายการ ตรวจสอบสถานะกรณีมีสถานะเป็น รอตรวจสอบให้แสดงแจ้งเตือน "กรุณาระบุผลการตรวจสอบให้ครบทุกรายการ"เมื่อกดตกลง ให้ปิดการแจ้งเตือนกรณีมีสถานะเป็น รอการแก้ไข ให้ตรวจสอบการระบุเหตุผลหากยังไม่ระบุ ให้แสดงแจ้งเตือน "กรุณาระบุเหตุผลการแก้ไข"เมื่อกดตกลง ให้ปิดการแจ้งเตือนหากระบุครบทุกรายการแล้วให้ทำข้อถัดไปกรณีสถานะเป็น ยกเลิก ทุกรายการให้ทำข้อถัดไประบบจะแสดงแจ้งเตือน "ยืนยันบันทึกผลการตรวจสอบ"เมื่อกดยกเลิก ระบบจะปิดการแจ้งเตือนเมื่อกดตกลง ระบบจะบันทึกการแก้ไขข้อมูลบนหน้าจอ และกลับสู่หน้าจอ [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](/pages/viewpage.action?pageId=1269858922)ตรวจสอบสถานะของรายการภายใต้ Batchกรณีมีสถานะเป็น รอการแก้ไข ให้ปรับสถานะดำเนินการของ Batch เป็น รอดำเนินการใหม่กรณีสถานะทั้งหมดเป็น ถูกต้อง หรือยกเลิก ให้ปรับสถานะดำเนินการของ Batch เป็น รออนุมัติระบบจะประมวลผลข้อมูลบัญชี EDW และส่งข้อมูลไปยังหน้าจอ [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731)ส่งอัปเดตสถานะรายการที่ระบบ Cenpay หน้าจอ [PC-001-FC-001 หน้าจอรวมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252010), [หน้าจอตรวจสอบรายการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252003) และหน้าจอ [AC-001-FC-002 หน้าจอรายละเอียด Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906268) รายการธุรกรรมย่อยภายใต้ Batch การเงินเป็น รออนุมัติจ่าย (ฝ่ายการเงิน) |   |   |
| เงื่อนไขปุ่ม | ตรวจสอบ |
| Disable | ตรวจสอบไม่ทุกรายการ |
| Enable | ตรวจสอบครบทุกรายการ หรือ ยกเลิกทุกรายการ |

---

## Hyperlinks บนหน้านี้

- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-004-FC-003 หน้าจอ Popup เหตุผลการส่งกลับ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858930)
- [PY-003-FC-007 หน้าจอ Popup ประวัติสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858892)
- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [PC-001-FC-001 หน้าจอรวมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252010)
- [หน้าจอตรวจสอบรายการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252003)
- [AC-001-FC-002 หน้าจอรายละเอียด Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906268)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1271529618/image2025-8-18%2013%3A47%3A6.png?version=1&modificationDate=1755499627170&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1271529618/image2025-8-18%2013%3A47%3A18.png?version=1&modificationDate=1755499639700&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1271529618/image2025-8-18%2013%3A47%3A27.png?version=1&modificationDate=1755499647784&api=v2
