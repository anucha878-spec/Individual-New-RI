# ยกเลิก [Menu PY0702] FS-09-02 หน้าจอ Exception Log

- **Page ID:** 1350796020
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1350796020
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-09 ดูแลระบบ > ยกเลิก [Menu PY0702] FS-09-02 หน้าจอ Exception Log
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797129890 {padding: 0px;} div.rbtoc1784797129890 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797129890 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-หน้าจอหลัก)
- [Screen Overview](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-ยกเลิก[MenuPY0702]FS-09-02หน้าจอExceptionLog-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1350796020/image2026-6-23%2016%3A52%3A31.png?version=1&modificationDate=1782208352758&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

สำหรับตรวจสอบรายการ Exception Log ที่ระบบ Payment Mangement ที่มีการทำจ่าย API Payment

### ผู้ใช้งาน (Target Users)

- IT Support

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็น IT Support

### การกระทำกับหน้าจอ (Actions)

- ตรวจสอบรายการ Exception Log ที่ระบบ Payment Mangement

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ตรวจสอบการทำงานของระบบ Stand Alone

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น

# ตารางคำอธิบาย

| Component Name | Type | Event | Action/Validation/Default Value | Data Source | Remarks |
|---|---|---|---|---|---|
| Transaction No | Dynamic Text | On Initial | แสดงเลขที่อ้างอิง | [tx_exception_log](/display/RDSCPENH/tx_exception_log).transaction_no |   |
| Batch Oper No | Dynamic Text | On Initial | แสดงรหัสอ้างอิง Batch Oper | [tx_exception_log](/display/RDSCPENH/tx_exception_log).batch_oper_no |   |
| Exception | Dynamic Text | On Initial | แสดงข้อความ Exception | [tx_exception_log](/display/RDSCPENH/tx_exception_log).exception |   |
| Date Time | Dynamic Text | On Initial | แสดงวันและเวลา | [tx_exception_log](/display/RDSCPENH/tx_exception_log).created_date |   |

---

## Hyperlinks บนหน้านี้

- [tx_exception_log](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_exception_log)
- [tx_exception_log](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_exception_log)
- [tx_exception_log](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_exception_log)
- [tx_exception_log](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_exception_log)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1350796020/image2026-6-23%2016%3A52%3A31.png?version=1&modificationDate=1782208352758&api=v2
