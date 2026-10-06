# PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker

- **Page ID:** 1269858922
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858922
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 4. Module ทำจ่ายการเงิน > CP-PY-004 : Paperbase Payment - Checker > PY-004-FC-001 หน้าจอค้นหา Paper Base Payment - Checker
- **Depth:** 5

---

### หน้าจอหลัก : Screen Design

![img](/download/attachments/1271529577/image2025-8-21%2013%3A40%3A48.png?version=1&modificationDate=1755758448631&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อแสดงข้อมูลประเภทการจ่าย PaperBase Payment ที่ส่งตรวจสอบจาก Maker
- เพื่อให้ผู้ใช้งานสามารถค้นหาและดูข้อมูลการจ่ายระดับ Batch ได้ตามเงื่อนไขที่กำหนด
- เพื่อให้ผู้ใช้งานสามารถตรวจสอบรายการ PaperBase
- เพื่อให้ผู้ใช้งานสามารถดูรายละเอียดรายการธุรกรรมภายใต้ Batch การเงิน

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ฝ่ายการเงิน (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Checker)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการ Paperbase Payment ที่มาจากหน้าจอ [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)

### การกระทำกับหน้าจอ (Actions)

- ล้างเงื่อนไขการค้นหาข้อมูล
- ค้นหาข้อมูล Batch การเงินประเภทการจ่าย Paper Base Payment
- ดูรายละเอียด Support Booking
- ตรวจสอบรายการเช็ค
- ดูข้อมูลรายการเช็ค
- ดูเอกสารแนบระดับ Batch

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม ค้นหา หน้าจอจะแสดงรายการ Batch การเงินที่ตรงตามเงื่อนไขการค้นหา และจัดเรียงตามช่องทางการจ่าย, Service, Paid Date, Bank Account
  - เมื่อผู้ใช้งานกดปุ่ม ล้างเงื่อนไข เงื่อนไขการค้นหาทั้งหมดจะถูก Reset เป็นค่าเริ่มต้น
  - เมื่อผู้ใช้งานกดปุ่มรายละเอียด, ตรวจสอบ, ดูข้อมูล, เอกสารแนบ ระบบจะนำผู้ใช้งานไปยังหน้าจอที่เกี่ยวข้องได้อย่างถูกต้อง

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีผู้ใช้งานไม่ระบุเงื่อนไขการค้นหาอย่างน้อยหนึ่งอย่าง เมื่อกดปุ่มค้นหาระบบจะแสดง Popup ข้อความแจ้งเตือน "กรุณาระบุเงื่อนไขการค้นหาข้อมูล"
  - กรณีระบุวันที่ในเงื่อนไขการค้นหาไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" ใต้ Text Box
  - กรณีไม่มีข้อมูลตามเงื่อนไขการค้นหา ระบบจะแสดงตารางผลลัพธ์ว่างเปล่า และแสดงข้อความที่ตาราง "ไม่พบข้อมูล"
  - กรณีผู้ใช้งานเข้าทำงานพร้อมกัน และมีรายการที่ถูกเปลี่ยนแปลงสถานะดำเนินการ ระบบจะแสดงแจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการเปลี่ยนแปลงข้อมูล" และ Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อผู้ใช้งานกดปุ่มค้นหา ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

### รายละเอียดส่วนการค้นหา

| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
|---|---|---|---|---|---|---|
| 1 | Text Box | Batch Number ฝ่ายการเงิน | ว่าง | แสดง Placeholder Format เป็น ช่องทางการจ่าย (ตัวอักษรภาษาอังกฤษ 3 หลัก) - วันที่บันทึกรายการตรวจสอบ (Format: ปปปปดดวว เป็น พ.ศ.) - Sequence number (5 หลัก)ระบุได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลข 0-9 เท่านั้น | BAT-25680701-00001 |   |
| 2 | Drop Down List | ช่องทางการจ่ายเงิน | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลช่องทางการจ่ายเงิน | โอนเงิน |   |
| 3 | Date Picker | Request Payment Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 4 | Date Picker | Request Payment Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Request Payment Date จากและ Request Payment Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 5 | Date Picker | Paid Date จาก | ว่าง | Date Picker เลือกช่วงวันที่เริ่มต้นที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 01/07/2568 |   |
| 6 | Date Picker | Paid Date ถึง | ว่าง | Date Picker เลือกช่วงวันที่สิ้นสุดที่ต้องการค้นหาข้อมูลตรวจสอบ Paid Date จากและ Paid Date ถึง หากระบุเกิน 120 วันจะแสดงข้อความ "ระบุช่วงวันที่ได้ไม่เกิน 120 วัน" - เป็นตัวอักษรสีแดง ด้านล่าง Textbox | 31/07/2568 |   |
| 7 | Multiple Drop Down | สถานะดำเนินการ | รอการตรวจสอบผล | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูลสถานะดำเนินการระดับ Batchค่าเริ่มต้นสถานะ : รอการตรวจสอบผล | กำลังดำเนินการ |   |
| 8 | Drop Down | Service | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Service กรณีมีการเลือก Service ให้ตรวจสอบความสัมพันธ์กับ Bank Accountกรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Bank Account | BBL_MCL |   |
| 9 | Drop Down | Bank Account | ทั้งหมด | แสดงข้อมูลจาก [Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ส่วนข้อมูล Bank Accountกรณีมีการเลือก Bank Account ให้ตรวจสอบความสัมพันธ์กับ Service กรณีข้อมูลไม่สัมพันธ์กัน ให้เคลียร์ค่า Service | BBL 925-0-02595-5 |   |
| 10 | Button | ล้างเงื่อนไข | disable | กดปุ่ม "ล้างเงื่อนไข" ระบบจะทำการล้างเงื่อนไขที่ระบุ และกลับไปเป็นเงื่อนไขเริ่มต้น | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A36%3A55.png?version=1&modificationDate=1741099015272&api=v2) |   |
| 11 | Button | ค้นหา | enable | กดปุ่ม "ค้นหา" ระบบจะทำการค้นหาข้อมูลตามเงื่อนไขที่ระบุการค้นหา ถ้ามีหลายเงื่อนไข ใช้ “AND” Condition ในการค้นหาแสดงรายการตามเงื่อนไขที่ค้นหากรณีค้นหาแล้วไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ตารางแสดง “ไม่พบข้อมูล” | ![img](http://wiki.thaisamut.co.th/download/thumbnails/1231683661/image2025-3-4%2021%3A40%3A7.png?version=1&modificationDate=1741099207746&api=v2) |   |

### รายละเอียดส่วนการแสดงผลข้อมูล

| ส่วนแสดงข้อมูลผลการค้นหา |
|---|
| 1 |   | การเรียงลำดับข้อมูล | 1.เรียงตามตัวอักษร ของช่องทางการจ่าย 2.เรียงตามตัวอักษร ของ Service 3.เรียงตามวันที่ล่าสุดไปยังเก่าที่สุด ของ Paid Date 4.เรียงตามตัวอักษร ของ Bank Account |   |   |
| 2 |   | Sort Column | ช่องทางการจ่ายServicePaid DateBank Account |   |   |
| 3 |   | Concurrent User | กรณีมีการเลือกดำเนินการยกเลิกรายการส่งตรวจสอบให้ตรวจสอบสถานะก่อนดำเนินการ หากมีการเปลี่ยนสถานะดำเนินการให้แจ้งเตือน "ไม่สามารถทำรายการได้ เนื่องจากมีการทำรายการแล้ว" Refresh หน้าจอและดึงข้อมูลมาแสดงผลใหม่อีกครั้ง |   |   |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | รายละเอียด | แสดงปุ่มตลอดเวลาเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-002 หน้าจอ Popup Support Booking](/pages/viewpage.action?pageId=1266811431) |   |   |
| 2 | Button | ตรวจสอบ | เงื่อนไขปุ่มสถานะดำเนินการซ่อนไม่เป็น รอการตรวจสอบผลแสดงรอการตรวจสอบผลเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode Edit |   |   |
| เงื่อนไขปุ่ม | สถานะดำเนินการ |
| ซ่อน | ไม่เป็น รอการตรวจสอบผล |
| แสดง | รอการตรวจสอบผล |
| 3 | Label | Batch Number ฝ่ายการเงิน | แสดงข้อมูล Batch Number ฝ่ายการเงิน | BAT-25680701-00001 |   |
| 4 | Label | ช่องทางการจ่ายเงิน | แสดงข้อมูลช่องทางการจ่ายเงินที่ระบุข้อมูลจากต้นทาง | โอนเงิน |   |
| 5 | Label | Service | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Service |   |   |
| 6 | Label | Bank Account | แสดง Service การตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูล Bank Account |   |   |
| 7 | Label | Request Payment Date | แสดงวันที่ Request Payment Dateแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - |   |   |
| 8 | Label | Paid date | แสดงวันที่จ่ายแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีไม่มีข้อมูลให้แสดง - | 04/07/2568 |   |
| 9 | Hyperlink | จำนวนรายการรวม | แสดงจำนวนรายการรวมภายใต้ Batch การเงินเมื่อกด Hyperlink ระบบจะเปิดหน้าจอ [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](/pages/viewpage.action?pageId=1269858926) Mode View | 201 |   |
| 10 | Label | จำนวนเงินรวม | แสดงจำนวนเงินรวมภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลัก | 2,100,000.00 |   |
| 11 | Label | จำนวนรายการรวมที่ไม่ถูกต้อง | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง - | 2 |   |
| 12 | Label | จำนวนเงินรวมที่ไม่ถูกต้อง | แสดงจำนวนเงินรวมที่ไม่ถูกต้อง ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 500,000.00 |   |
| 13 | Label | จำนวนรายการรวมสุทธิ | แสดงจำนวนรายการรวมที่ไม่ถูกต้องภายใต้ Batch การเงินกรณีไม่มีข้อมูลให้แสดง - | 199 |   |
| 14 | Label | จำนวนเงินรวมสุทธิ | แสดงจำนวนเงินรวมสุทธิ ภายใต้ Batch การเงินแสดงรูปแบบเป็นจำนวนเงิน ทศนิยม 2 หลักกรณีไม่มีข้อมูลให้แสดง - | 1,600,000.00 |   |
| 15 | Button | เอกสารแนบ | แสดงปุ่มตลอดเวลา เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](/pages/viewpage.action?pageId=1267859648) |   |   |
| 16 | Label | สถานะดำเนินการ | แสดงสถานะดำเนินการตาม [4. Configuration Data](/display/RDSCPENH/4.+Configuration+Data) ข้อมูลสถานะดำเนินการระดับ Batch | รอตรวจสอบ |   |
| 17 | Label | ชื่อผู้ทำรายการ | แสดง username ชื่อผู้ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง - | Ladda.wa |   |
| 18 | Label | วันและเวลาที่ทำรายการ | แสดง วันและเวลาที่ทำรายการล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |
| 19 | Label | ชื่อผู้ตรวจสอบ | แสดง username ชื่อผู้ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง - | Ladda.wa |   |
| 20 | Label | วันและเวลาที่ตรวจสอบ | แสดงวันและเวลาที่ตรวจสอบล่าสุดกรณีไม่มีข้อมูลให้แสดง -แสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) ชช.นน | 30/06/2568 21.00 |   |

---

## Hyperlinks บนหน้านี้

- [PY-003-FC-001 หน้าจอค้นหา Paper Base Payment - Maker](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858862)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-002-FC-002 หน้าจอ Popup Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266811431)
- [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858926)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)
- [PY-004-FC-002 หน้าจอ Popup ตรวจสอบเช็คและ Paperbase อื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269858926)
- [PY-002-FC-005 หน้าจอ Popup ดูเอกสารแนบระดับ Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1267859648)
- [4. Configuration Data](http://wiki.thaisamut.co.th/display/RDSCPENH/4.+Configuration+Data)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1271529577/image2025-8-21%2013%3A40%3A48.png?version=1&modificationDate=1755758448631&api=v2
