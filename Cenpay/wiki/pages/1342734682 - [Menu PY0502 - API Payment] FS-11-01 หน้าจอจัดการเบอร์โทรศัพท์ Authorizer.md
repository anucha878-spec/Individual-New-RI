# [Menu PY0502 : API Payment] FS-11-01 หน้าจอจัดการเบอร์โทรศัพท์ Authorizer

- **Page ID:** 1342734682
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1342734682
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-04 PY ทำจ่ายการเงิน > 03-04-11 จัดการเบอร์โทรศัพท์ Authorizer > [Menu PY0502 : API Payment] FS-11-01 หน้าจอจัดการเบอร์โทรศัพท์ Authorizer
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797131872 {padding: 0px;} div.rbtoc1784797131872 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797131872 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-หน้าจอหลัก)
- [Screen Overview](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-[MenuPY0502:APIPayment]FS-11-01หน้าจอจัดการเบอร์โทรศัพท์Authorizer-ตารางคำอธิบาย)

# หน้าจอหลัก

![img](/download/attachments/1342734682/image2026-6-10%2015%3A16%3A40.png?version=1&modificationDate=1781079400530&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อสร้าง/แก้ไข/ลบ ดูรายการเบอร์โทรศัพท์ผู้อนุมัติ

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่การเงิน (Authorizer)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็นเจ้าหน้าที่ฝ่ายการเงิน (Authorizer)
  - ระบบจะต้องสามารถเชื่อมต่อกับฐานข้อมูลเพื่อดึงข้อมูลรายการธนาคารที่สร้างไว้มาแสดงที่หน้าจอ

### การกระทำกับหน้าจอ (Actions)

- กดปุ่ม "เพิ่ม" เพื่อสร้างรายการเบอร์โทรศัพท์ผู้อนุมัติ
- กดปุ่ม ![img](/download/thumbnails/1271988611/2023-03-14_095435.png?version=1&modificationDate=1754366386044&api=v2) "แก้ไข" เพื่อแก้ไขรายการเบอร์โทรศัพท์ผู้อนุมัติ
- กดปุ่ม ![img](/download/thumbnails/1271988611/%E0%B8%96%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B0.png?version=1&modificationDate=1754366408559&api=v2) "ลบ" เพื่อลบรายการเบอร์โทรศัพท์ผู้อนุมัติ

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - เมื่อผู้ใช้งานกดปุ่ม เพิ่ม ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) เพื่อใช้ในการเพิ่มรูปแบบเช็คของรายการธนาคารใหม่
  - เมื่อผู้ใช้งานกดปุ่ม แก้ไข ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) เพื่อใช้ในการแก้ไขรูปแบบเช็คของรายการธนาคารที่เลือก
  - เมื่อผู้ใช้งานกดปุ่ม ลบ ระบบจะแจ้งเตือนยืนยันการลบข้อมูลรูปแบบเช็คของรายการธนาคารที่เลือก

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีเกิดปัญหาในการเชื่อมต่อกับฐานข้อมูลเมื่อเข้าสู่หน้าจอ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
  - กรณีเกิดปัญหาทางเทคนิคอื่นๆ ระบบจะแสดง Popup ข้อความแจ้งเตือน "ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ"

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
|   | TableCondition[cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no)status = 'A' Component NameTypeEventAction/ Validation/ Default ValueData SourceRemarksเพิ่มButtonOn Initialตามเงื่อนไข Visible และ Invisible Visibleกรณ๊ username ที่ Login ตรงกับรายการที่แสดง Invisibleกรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง On Clickเมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) แก้ไขButtonOn Initialตามเงื่อนไข Visible และ Invisible Visibleกรณ๊ username ที่ Login ตรงกับรายการที่แสดง Invisibleกรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง On Clickเมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) ลบButtonOn Initialตามเงื่อนไข Visible และ Invisible Visibleกรณ๊ username ที่ Login ตรงกับรายการที่แสดง Invisibleกรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง On Clickเมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "ยืนยันลบข้อมูลหรือไม่" - con_com_003กดยืนยันอัปเดตสถานะเป็น Inactiveส่งอีเมลแจ้งการเปลี่ยนแปลงข้อมูลเบอร์โทรศัพท์ ที่ Process [01 Email Setting Authorizer Mobile No](/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)กดยกเลิก ปิด Popup และแสดงหน้าจอเดิม1. update data table : [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no)fieldmapping datastatus 'I' - Inactiveupdated_dateวันและเวลาที่ทำรายการupdated_byusername ที่ทำรายการ 2. Process [01 Email Setting Authorizer Mobile No](http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)โดยส่งข้อมูลดังนี้fieldmapping dataRemarkemailusername + "@ocean.co.th"updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)nbsFullNameชื่อนามสกุลผู้ทำรายการ จากระบบ nbsupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) systemDateTimeวันและเวลาที่ทำรายการ mobileNoหมายเลขโทรศัพท์ statusS - สำเร็จ actionA - เพิ่ม D - ลบ E - แก้ไข UsernameDynamic TextOn Initialแสดง username[cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).username เบอร์โทรศัพท์Dynamic TextOn Initialแสดงเบอร์โทรศัพท์โดยถอดรหัสข้อมูลที่ได้จากฐานข้อมูลและ Masking ตามเงื่อนไข [IT Development Common Validation](/display/RnD/IT+Development+Common+Validation) (เบอร์มือถือลูกค้า)[cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).mobile_no วันที่ทำรายการDynamic TextOn Initialแสดงวันที่ทำรายการแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.)กรณีมีข้อมูล [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).updated_dateแสดง updated_dateกรณีไม่มีข้อมูลแสดง created_date |
| Table | Condition |
| [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no) | status = 'A' |
| Component Name | Type | Event | Action/ Validation/ Default Value | Data Source | Remarks |
| เพิ่ม | Button | On Initial | ตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | กรณ๊ username ที่ Login ตรงกับรายการที่แสดง |   |   |
|   |   | Invisible | กรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) |   |   |
| แก้ไข | Button | On Initial | ตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | กรณ๊ username ที่ Login ตรงกับรายการที่แสดง |   |   |
|   |   | Invisible | กรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะเปิด [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](/pages/viewpage.action?pageId=1343718001) |   |   |
| ลบ | Button | On Initial | ตามเงื่อนไข Visible และ Invisible |   |   |
|   |   | Visible | กรณ๊ username ที่ Login ตรงกับรายการที่แสดง |   |   |
|   |   | Invisible | กรณ๊ username ที่ Login ไม่ตรงกับรายการที่แสดง |   |   |
|   |   | On Click | เมื่อกดปุ่ม ระบบจะแสดงข้อความแจ้งเตือน "ยืนยันลบข้อมูลหรือไม่" - con_com_003กดยืนยันอัปเดตสถานะเป็น Inactiveส่งอีเมลแจ้งการเปลี่ยนแปลงข้อมูลเบอร์โทรศัพท์ ที่ Process [01 Email Setting Authorizer Mobile No](/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)กดยกเลิก ปิด Popup และแสดงหน้าจอเดิม | 1. update data table : [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no)fieldmapping datastatus 'I' - Inactiveupdated_dateวันและเวลาที่ทำรายการupdated_byusername ที่ทำรายการ 2. Process [01 Email Setting Authorizer Mobile No](http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)โดยส่งข้อมูลดังนี้fieldmapping dataRemarkemailusername + "@ocean.co.th"updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)nbsFullNameชื่อนามสกุลผู้ทำรายการ จากระบบ nbsupdated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) systemDateTimeวันและเวลาที่ทำรายการ mobileNoหมายเลขโทรศัพท์ statusS - สำเร็จ actionA - เพิ่ม D - ลบ E - แก้ไข |   |
| field | mapping data |
| status | 'I' - Inactive |
| updated_date | วันและเวลาที่ทำรายการ |
| updated_by | username ที่ทำรายการ |
| field | mapping data | Remark |
| email | username + "@ocean.co.th" | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| nbsFullName | ชื่อนามสกุลผู้ทำรายการ จากระบบ nbs | updated by patcha.vo 10/06/69[https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175) |
| systemDateTime | วันและเวลาที่ทำรายการ |   |
| mobileNo | หมายเลขโทรศัพท์ |   |
| status | S - สำเร็จ |   |
| action | A - เพิ่ม D - ลบ E - แก้ไข |   |
| Username | Dynamic Text | On Initial | แสดง username | [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).username |   |
| เบอร์โทรศัพท์ | Dynamic Text | On Initial | แสดงเบอร์โทรศัพท์โดยถอดรหัสข้อมูลที่ได้จากฐานข้อมูลและ Masking ตามเงื่อนไข [IT Development Common Validation](/display/RnD/IT+Development+Common+Validation) (เบอร์มือถือลูกค้า) | [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).mobile_no |   |
| วันที่ทำรายการ | Dynamic Text | On Initial | แสดงวันที่ทำรายการแสดงรูปแบบเป็น วว/ดด/ปปปป (ปี พ.ศ.) | กรณีมีข้อมูล [cf_authorizer_mobile_no](/display/RDSCPENH/cf_authorizer_mobile_no).updated_dateแสดง updated_dateกรณีไม่มีข้อมูลแสดง created_date |   |

---

## Hyperlinks บนหน้านี้

- [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343718001)
- [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343718001)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343718001)
- [หน้าจอ Popup เพิ่มแก้ไขเบอร์โทรศัพท์ Authorizer](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1343718001)
- [01 Email Setting Authorizer Mobile No](http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [01 Email Setting Authorizer Mobile No](http://wiki.thaisamut.co.th/display/RDSCPENH/01+Email+Setting+Authorizer+Mobile+No)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)
- [https://redmine.ochi.link/issues/79175](https://redmine.ochi.link/issues/79175)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [IT Development Common Validation](http://wiki.thaisamut.co.th/display/RnD/IT+Development+Common+Validation)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)
- [cf_authorizer_mobile_no](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_authorizer_mobile_no)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1342734682/image2026-6-10%2015%3A16%3A40.png?version=1&modificationDate=1781079400530&api=v2
