# FS-11-02 หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer

- **Page ID:** 1343718001
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343718001
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-11 จัดการเบอร์โทรศัพท์ Authorizer > FS-11-02 หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797131817 {padding: 0px;} div.rbtoc1784797131817 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797131817 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-หน้าจอหลัก)
- [Screen Overview](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-11-02หน้าจอPopupเพิ่มแก้ไขเบอร์โทรศัพท์Authorizer-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1343718001/image2026-5-26%2016%3A45%3A34.png?version=1&modificationDate=1779788734203&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อสร้าง/แก้ไขรายการเบอร์โทรศัพท์ผู้อนุมัติ

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Authorizer)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องกดปุ่ม เพิ่ม / แก้ไข จากหน้าจอ [FS-11-01-01 การแสดงข้อมูล](/pages/viewpage.action?pageId=1343717992)

### การกระทำกับหน้าจอ (Actions)

- สร้างรายการเบอร์โทรศัพท์ผู้อนุมัติ
- แก้ไขรายการเบอร์โทรศัพท์ผู้อนุมัติ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
    - สร้างหรือแก้ไขรายการเบอร์โทรศัพท์ผู้อนุมัติ

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อเข้าสู่หน้าจอ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
|   | Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksUsernameDynamic TextOn Initialแสดง username ที่ทำรายการ[cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).username เบอร์โทรศัพท์TextFieldOn Initialกรณีแก้ไขข้อมูลแสดงเบอร์โทรศัพท์ที่เลือกจากหน้าจอหลัก และถอดรหัสในการแสดงข้อมูลกรณีเพิ่มข้อมูลแสดงค่าว่าง[cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).mobile_no On Changeระบุได้เฉพาะตัวเลข 10 หลัก ยกเลิกButtonOn Initialตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickแสดง Popup แจ้งเตือน "ยืนยันยกเลิกรายการ" - con_py_006กดตกลง ปิดหน้าจอ และกลับสู่หน้าจอหลักกดยกเลิก ปิด Popup และแสดงหน้าจอเดิม updated by patcha 08/06/69ยืนยันButtonOn Initialตามเงื่อนไข Enable และ Disable Enableตลอดเวลา Disable- On Clickเมื่อกดปุ่ม ระบบตรวจสอบการระบุเบอร์โทรศัพท์กรณีระบุตัวเลขไม่ครบ 10 หลัก ให้แสดงแจ้งเตือน 'กรุณาระบุเฉพาะตัวเลข 0-9 จำนวน 10 หลัก และขึ้นต้นด้วย 06, 08, 09' - wrn_py_013กรณีระบุถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "ยืนยันการบันทึกข้อมูลหรือไม่" - con_com_002กดยืนยันกรณีเป็นการสร้างรายการให้ Insert ข้อมูลที่ตารางกรณีเป็นการแก้ไขข้อมูลให้ Update ข้อมูลเบอร์โทรศัพท์ส่งอีเมลแจ้งการเปลี่ยนแปลงข้อมูลเบอร์โทรศัพท์กดยกเลิกปิด Popup และแสดงหน้าจอเดิมบันทึกข้อมูลที่ตาราง [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no)1.1 กรณีเพิ่ม Insert ข้อมูลfieldmapping datausernameusername ที่ loginmobile_noเบอร์โทรศัพท์ และเข้ารหัสข้อมูลcreated_dateวันที่ทำรายการcreated_byusername ที่ login1.2กรณีแก้ไข update ข้อมูลfieldmapping datamobile_noเบอร์โทรศัพท์ และ encrypt ด้วย hash 256updated_dateวันที่ทำรายการupdated_byusername ที่ login2. Process [01 Email Setting Authorizer Mobile No](/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)โดยส่งข้อมูลดังนี้fieldmapping dataRemarkemailusername + "@ocean.co.th"updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)nbsFullNameชื่อนามสกุลผู้ทำรายการ จากระบบ nbsupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)systemDateTimeวันและเวลาที่ทำรายการ mobileNoหมายเลขโทรศัพท์ statusS - สำเร็จ actionA - เพิ่ม D - ลบ E - แก้ไข |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| Username | Dynamic Text | On Initial | แสดง username ที่ทำรายการ | [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).username |   |
| เบอร์โทรศัพท์ | TextField | On Initial | กรณีแก้ไขข้อมูลแสดงเบอร์โทรศัพท์ที่เลือกจากหน้าจอหลัก และถอดรหัสในการแสดงข้อมูลกรณีเพิ่มข้อมูลแสดงค่าว่าง | [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).mobile_no |   |
|   |   | On Change | ระบุได้เฉพาะตัวเลข 10 หลัก |   |   |
| ยกเลิก | Button | On Initial | ตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | แสดง Popup แจ้งเตือน "ยืนยันยกเลิกรายการ" - con_py_006กดตกลง ปิดหน้าจอ และกลับสู่หน้าจอหลักกดยกเลิก ปิด Popup และแสดงหน้าจอเดิม |   | updated by patcha 08/06/69 |
| ยืนยัน | Button | On Initial | ตามเงื่อนไข Enable และ Disable |   |   |
|   |   | Enable | ตลอดเวลา |   |   |
|   |   | Disable | - |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบตรวจสอบการระบุเบอร์โทรศัพท์กรณีระบุตัวเลขไม่ครบ 10 หลัก ให้แสดงแจ้งเตือน 'กรุณาระบุเฉพาะตัวเลข 0-9 จำนวน 10 หลัก และขึ้นต้นด้วย 06, 08, 09' - wrn_py_013กรณีระบุถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "ยืนยันการบันทึกข้อมูลหรือไม่" - con_com_002กดยืนยันกรณีเป็นการสร้างรายการให้ Insert ข้อมูลที่ตารางกรณีเป็นการแก้ไขข้อมูลให้ Update ข้อมูลเบอร์โทรศัพท์ส่งอีเมลแจ้งการเปลี่ยนแปลงข้อมูลเบอร์โทรศัพท์กดยกเลิกปิด Popup และแสดงหน้าจอเดิม | บันทึกข้อมูลที่ตาราง [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no)1.1 กรณีเพิ่ม Insert ข้อมูลfieldmapping datausernameusername ที่ loginmobile_noเบอร์โทรศัพท์ และเข้ารหัสข้อมูลcreated_dateวันที่ทำรายการcreated_byusername ที่ login1.2กรณีแก้ไข update ข้อมูลfieldmapping datamobile_noเบอร์โทรศัพท์ และ encrypt ด้วย hash 256updated_dateวันที่ทำรายการupdated_byusername ที่ login2. Process [01 Email Setting Authorizer Mobile No](/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)โดยส่งข้อมูลดังนี้fieldmapping dataRemarkemailusername + "@ocean.co.th"updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)nbsFullNameชื่อนามสกุลผู้ทำรายการ จากระบบ nbsupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)systemDateTimeวันและเวลาที่ทำรายการ mobileNoหมายเลขโทรศัพท์ statusS - สำเร็จ actionA - เพิ่ม D - ลบ E - แก้ไข |   |
| field | mapping data |
| username | username ที่ login |
| mobile_no | เบอร์โทรศัพท์ และเข้ารหัสข้อมูล |
| created_date | วันที่ทำรายการ |
| created_by | username ที่ login |
| field | mapping data |
| mobile_no | เบอร์โทรศัพท์ และ encrypt ด้วย hash 256 |
| updated_date | วันที่ทำรายการ |
| updated_by | username ที่ login |
| field | mapping data | Remark |
| email | username + "@ocean.co.th" | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| nbsFullName | ชื่อนามสกุลผู้ทำรายการ จากระบบ nbs | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| systemDateTime | วันและเวลาที่ทำรายการ |   |
| mobileNo | หมายเลขโทรศัพท์ |   |
| status | S - สำเร็จ |   |
| action | A - เพิ่ม D - ลบ E - แก้ไข |   |

---

## Hyperlinks บนหน้านี้

- [FS-11-01-01 การแสดงข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343717992)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [01 Email Setting Authorizer Mobile No](http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1343718001/image2026-5-26%2016%3A45%3A34.png?version=1&modificationDate=1779788734203&api=v2
