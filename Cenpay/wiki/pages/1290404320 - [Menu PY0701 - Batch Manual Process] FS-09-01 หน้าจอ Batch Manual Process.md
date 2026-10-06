# [Menu PY0701 : Batch Manual Process] FS-09-01 หน้าจอ Batch Manual Process

- **Page ID:** 1290404320
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404320
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-09 ดูแลระบบ > [Menu PY0701 : Batch Manual Process] FS-09-01 หน้าจอ Batch Manual Process
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797129902 {padding: 0px;} div.rbtoc1784797129902 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797129902 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY0701:BatchManualProcess]FS-09-01หน้าจอBatchManualProcess-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1290404320/image2025-10-27%2011%3A8%3A49.png?version=1&modificationDate=1761538146612&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

### ผู้ใช้งาน (Target Users)

- IT Support

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็น IT Support

### การกระทำกับหน้าจอ (Actions)

- กดปุ่ม Run เพื่อ Manual Run Batch Process

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม Run ระบบจะทำงานตาม Batch Process ที่กำหนด

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น

# ตารางคำอธิบาย

| Component Name | Type | Event | Action/Validation/Default Value | Data Source | Remarks |
|---|---|---|---|---|---|
| Batch ID | Text | On Initial | อ้างอิงข้อมูลตาม Data Source | No.Batch IDBatch NameBatch ProcessInput Data1PM_BH_003 อัปเดตสถานะเช็คหมดอายุ[PM-BH-003 อัปเดตสถานะเช็คหมดอายุ](/pages/viewpage.action?pageId=1293124517) 2PM_BH_004ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร (ตามรอบ)[PM-BH-004 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร (ตามรอบ)](/pages/viewpage.action?pageId=1293386190)fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/25683PM_BH_005Unlock รายการจ่าย API Payment ที่ยัง Processing เพื่อทำรายการจ่ายใหม่[PM_BH_005 Batch Reset รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่](/pages/viewpage.action?pageId=1339424812) 4PM_BH_006ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)[PM_BH_006 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)](/pages/viewpage.action?pageId=1344700752)fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/25695PM_BH_008Batch ส่งอีเมล Reconcile รายการจาก Operation[PM_BH_008 Batch ส่งอีเมล Reconcile รายการจาก Operation](/pages/viewpage.action?pageId=1348141731)fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/2569 |   |
| No. | Batch ID | Batch Name | Batch Process | Input Data |
| 1 | PM_BH_003 | อัปเดตสถานะเช็คหมดอายุ | [PM-BH-003 อัปเดตสถานะเช็คหมดอายุ](/pages/viewpage.action?pageId=1293124517) |   |
| 2 | PM_BH_004 | ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร (ตามรอบ) | [PM-BH-004 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร (ตามรอบ)](/pages/viewpage.action?pageId=1293386190) | fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/2568 |
| field | data type | placeholder / example |
| วันที่ประมวลผล* (Required) | Date | 01/01/2568 |
| 3 | PM_BH_005 | Unlock รายการจ่าย API Payment ที่ยัง Processing เพื่อทำรายการจ่ายใหม่ | [PM_BH_005 Batch Reset รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่](/pages/viewpage.action?pageId=1339424812) |   |
| 4 | PM_BH_006 | ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน) | [PM_BH_006 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)](/pages/viewpage.action?pageId=1344700752) | fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/2569 |
| field | data type | placeholder / example |
| วันที่ประมวลผล* (Required) | Date | 01/01/2569 |
| 5 | PM_BH_008 | Batch ส่งอีเมล Reconcile รายการจาก Operation | [PM_BH_008 Batch ส่งอีเมล Reconcile รายการจาก Operation](/pages/viewpage.action?pageId=1348141731) | fielddata typeplaceholder / exampleวันที่ประมวลผล* (Required)Date01/01/2569 |
| field | data type | placeholder / example |
| วันที่ประมวลผล* (Required) | Date | 01/01/2569 |
| ชื่อ Batch Process | Text | On Initial | อ้างอิงข้อมูลตาม Data Source |
| Run | Button | On Click | ระบบจะทำงานตาม Batch Process ที่กำหนด | แสดงแจ้งเตือน "ยืนยันการทำงาน + Batch Id + Batch Name"เมื่อกดยกเลิกให้ปิด Popupเมื่อกดตกลง 1. Insert ข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)FieldDescriptionMapping databatch_idรหัส BatchBatch IDbatch_nameชื่อ BatchBatch Namestatusสถานะการ Run BatchI - In Processtypeประเภทการ Run BatchFix : M - Manualcreated_datedวันที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึกชื่อผู้ใช้งาน2. หลังจาก Run Batch สำเร็จ Update ข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)FieldDescriptionMapping datastatusสถานะการ Run BatchS - กรณี Batch SuccessF - กรณี Batch Failerror_messageข้อความกรณี Run Batch Failบันทึกข้อความกรณีมี Error ที่ Run Batch Processupdated_dateวันที่แก้ไขบันทึกวันและเวลาปัจจุบันupdated_byผู้แก้ไขบันทึก System |   |
| Field | Description | Mapping data |
| batch_id | รหัส Batch | Batch ID |
| batch_name | ชื่อ Batch | Batch Name |
| status | สถานะการ Run Batch | I - In Process |
| type | ประเภทการ Run Batch | Fix : M - Manual |
| created_dated | วันที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึกชื่อผู้ใช้งาน |
| Field | Description | Mapping data |
| status | สถานะการ Run Batch | S - กรณี Batch SuccessF - กรณี Batch Fail |
| error_message | ข้อความกรณี Run Batch Fail | บันทึกข้อความกรณีมี Error ที่ Run Batch Process |
| updated_date | วันที่แก้ไข | บันทึกวันและเวลาปัจจุบัน |
| updated_by | ผู้แก้ไข | บันทึก System |

---

## Hyperlinks บนหน้านี้

- [PM-BH-003 อัปเดตสถานะเช็คหมดอายุ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293124517)
- [PM-BH-004 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร (ตามรอบ)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1293386190)
- [PM_BH_005 Batch Reset รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339424812)
- [PM_BH_006 Batch ส่งข้อมูลเข้า EDW บันทึกค่าธรรมเนียมธนาคาร API Payment (รายวัน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1344700752)
- [PM_BH_008 Batch ส่งอีเมล Reconcile รายการจาก Operation](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1348141731)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1290404320/image2025-10-27%2011%3A8%3A49.png?version=1&modificationDate=1761538146612&api=v2
