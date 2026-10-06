# [Menu PY0702] FS-09-01 หน้าจอ System Monitoring

- **Page ID:** 1344406081
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1344406081
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-09 ดูแลระบบ > [Menu PY0702] FS-09-01 หน้าจอ System Monitoring
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797129893 {padding: 0px;} div.rbtoc1784797129893 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797129893 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY0702]FS-09-01หน้าจอSystemMonitoring-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1344406081/image2026-5-29%2016%3A21%3A4.png?version=1&modificationDate=1780046464821&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

สำหรับตรวจสอบสถานะการทำงานของ Stand Alone ทุก Environment

### ผู้ใช้งาน (Target Users)

- IT Support

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็น IT Support

### การกระทำกับหน้าจอ (Actions)

- ดูสถานะการทำงานของระบบ Stand Alone และประวัติการเปลี่ยนแปลงสถานะ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ตรวจสอบการทำงานของระบบ Stand Alone

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น

# ตารางคำอธิบาย

| Component Name | Type | Event | Action/Validation/Default Value | Data Source | Remarks |
|---|---|---|---|---|---|
| **ส่วน Bank API Node** |
| Refresh | Button | On Initial | ตามเงื่อนไข Enable หรือ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Change | เมื่อกดปุ่มระบบจะดึงข้อมูลล่าสุดที่ฐานข้อมูลมาแสดง |   |   |
| ชื่อ Node | Dynamic Text | On Initial | แสดงชื่อ Node | [ms_bankapi_node](/display/RDSCPENH/ms_bankapi_node).node_id |   |
| สถานะ | Dynamic Text | On Initial | แสดงสถานะล่าสุดstatusข้อความUP ปกติDOWNขัดข้องUNKNOWNไม่ทราบตัวอย่างเช่น สถานะ : ปกติ | [ms_bankapi_node](/display/RDSCPENH/ms_bankapi_node).current_status |   |
| status | ข้อความ |
| UP | ปกติ |
| DOWN | ขัดข้อง |
| UNKNOWN | ไม่ทราบ |
| Heart Beat ล่าสุด | Dynamic Text | On Initial | แสดงวันหรือเวลาที่ทำงานล่าสุดตัวอย่างเช่น 1 วันที่แล้ว | [ms_bankapi_node](/display/RDSCPENH/ms_bankapi_node).last_seen_date |   |
| วันและเวลาที่อัปเดต | Dynamic Text | On Initial | แสดงวันและเวลาที่ทำงานล่าสุด | [ms_bankapi_node](/display/RDSCPENH/ms_bankapi_node).last_checked_date |   |
| Watch Dog ตรวจล่าสุด | Dynamic Text | On Initial | แสดงวันหรือเวลาที่ตรวจสอบล่าสุดตัวอย่างเช่น 1 วันที่แล้ว | [ms_bankapi_node](/display/RDSCPENH/ms_bankapi_node).last_checked_date |   |
| **ส่วน Status History** |
| Detected Date | Dynamic Text | On Initial | แสดงวันและเวลาที่ตรวจสอบ | [lg_bankapi_node_status](/display/RDSCPENH/lg_bankapi_node_status).detected_date |   |
| Node | Dynamic Text | On Initial | แสดงชื่อ Node | [lg_bankapi_node_status](/display/RDSCPENH/lg_bankapi_node_status).node_id |   |
| Change | Dynamic Text | On Initial | แสดงข้อความการเปลี่ยนจากสถานะเดิม เป็นสถานะใหม่ตัวอย่างเช่น ปกติ -> ขัดข้อง | [lg_bankapi_node_status](/display/RDSCPENH/lg_bankapi_node_status).from_status[lg_bankapi_node_status](/display/RDSCPENH/lg_bankapi_node_status).to_status |   |

---

## Hyperlinks บนหน้านี้

- [ms_bankapi_node](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node)
- [ms_bankapi_node](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node)
- [ms_bankapi_node](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node)
- [ms_bankapi_node](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node)
- [ms_bankapi_node](http://wiki.thaisamut.co.th/display/RDSCPENH/ms_bankapi_node)
- [lg_bankapi_node_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_bankapi_node_status)
- [lg_bankapi_node_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_bankapi_node_status)
- [lg_bankapi_node_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_bankapi_node_status)
- [lg_bankapi_node_status](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_bankapi_node_status)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1344406081/image2026-5-29%2016%3A21%3A4.png?version=1&modificationDate=1780046464821&api=v2
