# FS-03-01-05 หน้า Popup รายละเอียด SUN Booking

- **Page ID:** 1282507924
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507924
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-03 AC ตรวจจ่าย บัญชี > 03-03-01 ตรวจจ่ายบัญชี > FS-03-01-05 หน้า Popup รายละเอียด SUN Booking
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797115356 {padding: 0px;} div.rbtoc1784797115356 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797115356 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-หน้าจอหลัก)
- [Screen Overview](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-ตารางคำอธิบาย)
  - [รายละเอียดส่วนการแสดงผลข้อมูล](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-รายละเอียดส่วนการแสดงผลข้อมูล)
- [การจัดการข้อมูล](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-การจัดการข้อมูล)
- [การแสดงข้อมูลที่ได้จากการจัดการบนหน้าจอที่กำหนด](#FS-03-01-05หน้าPopupรายละเอียดSUNBooking-การแสดงข้อมูลที่ได้จากการจัดการบนหน้าจอที่กำหนด)

# หน้าจอหลัก

![img](/download/attachments/1275822312/image2025-8-14%209%3A41%3A26.png?version=1&modificationDate=1755139289665&api=v2)

# Screen Overview

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

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| รายละเอียดส่วนการแสดงผลข้อมูล |
| ส่วนแสดงข้อมูลผลการค้นหา1 การเรียงลำดับข้อมูล **ส่วนการแสดงข้อมูล (Header)**NoComponent TypeComponent NameAction / Data ValueExampleRemark1Labelรวม Dr. :แสดงยอดรวม Dr. ทั้งหมดภายใต้รูปแบบFix Text : "รวม Dr. : "+ยอดรวม Dr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมดให้แสดงเป็นตัวหนังสือสีฟ้า 2Labelรวม Cr. :แสดงยอดรวม Cr. ทั้งหมดภายใต้รูปแบบFix Text : "รวม Cr. : "+ยอดรวม Cr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมดให้แสดงเป็นตัวหนังสือสีฟ้า 3Labelผลต่าง :แสดงยอดผลต่าง ของ รวม Dr. และ รวม Cr. ภายใต้รูปแบบFix Text : "ผลต่าง : "+ยอดผลต่างของ รวม Dr. และ รวม Cr. ภายใต้รายการ Batch ปฎิบัติการทั้งหมดโดยถ้าผลต่าง = 0.00 ให้ระบุเป็นสีเขียว และถ้าผลต่าง มากกว่า หรือ น้อยกว่า 0 ให้ระบุเป็นสีแดง **ส่วนการแสดงข้อมูล (Table Display)****No****Component Type****Component Name****Action / Data Value****Example****Remark**1LabelPosting Dateแสดงข้อมูล Posting Date ในรูปแบบของวันที่16/07/2568 2LabelAccount Codeแสดงข้อมูล Account Code50542110 3LabelAccount Nameแสดงข้อมูล Account Nameสินไหมอุบัติเหตุ 4LabelDr.แสดงยอด Dr. ของเงินตาม Account Codeกรณีไม่มีข้อมูล แสดงค่าว่าง382,890.00 5LabelCr.แสดงยอด Cr. ของเงินตาม Account Codeกรณีไม่มีข้อมูล แสดงค่าว่าง382,890.00 6LabelCost Center/Revenue Centerแสดงข้อมูล Cost Center หรือ Revenue Centerกรณีไม่มีข้อมูล แสดงค่า "-"8300T2 7LabelProject Budget (IO)/Department Budget (FC)แสดงข้อมูล Project Budget (IO) หรือ Department Budget (FC)กรณีไม่มีข้อมูล แสดงค่า "-" 8LabelBranch Ownerแสดงข้อมูล Branch Owner0116 9LabelBranch Serviceแสดงข้อมูล Branch Service8300 10LabelBusiness Lineแสดงข้อมูล Business Line0101 | การจัดการข้อมูลเรียก [WS สำหรับดึงข้อมูล SUN Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282244649) โดยส่ง Input ดังนี้ --> ปรับแก้ส่ง Parameter เพิ่มเติม ariya.pi 01/12/2568NameDescriptionValuereferenceNumberReference Number ของ EDW[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).reference_numbersystemNameระบบที่ดึงข้อมูลFix "CENPAY"userNameusername ผู้ใช้งานLogin Userเปิด contentId และนำข้อมูลใน List File มาแสดงบนหน้าจอการแสดงข้อมูลที่ได้จากการจัดการบนหน้าจอที่กำหนด**ส่วนการแสดงข้อมูล (Header)****Component Name****Type****Event****Action/ Validation/ Default Value****Data Source****Remarks**รวม Dr. :LabelOn Initialแสดงยอดรวม Dr. ทั้งหมดภายใต้รูปแบบ Fix Text : "รวม Dr. : "+ยอดรวม Dr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมด ให้แสดงเป็นตัวหนังสือสีฟ้าsum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount) เมื่อ **[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_type = ""DR" รวม Cr. :LabelOn Initialแสดงยอดรวม Cr. ทั้งหมดภายใต้รูปแบบ Fix Text : "รวม Cr. : "+ยอดรวม Cr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมด ให้แสดงเป็นตัวหนังสือสีฟ้าsum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount)เมื่อ **[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_type = "CR" ผลต่าง :LabelOn Initialแสดงยอดผลต่าง ของ รวม Dr. และ รวม Cr. ภายใต้รูปแบบ Fix Text : "ผลต่าง : "+ยอดผลต่างของ รวม Dr. และ รวม Cr. ภายใต้รายการ Batch ปฎิบัติการทั้งหมด โดยถ้าผลต่าง = 0.00 ให้ระบุเป็นสีเขียว และถ้าผลต่าง มากกว่า หรือ น้อยกว่า 0 ให้ระบุเป็นสีแดง **(ไม่มีเครื่องหมาย) แยกด้วยสีของผลต่างแทน**รวม Dr. : หักลบ รวม Cr. :\|sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount) - sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount)\| **ส่วนการแสดงข้อมูล (Table Display) วนลูปตาม [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail) ที่ได้****Component Name****Type****Event****Action/ Validation/ Default Value****Data Source****Remarks**Posting DateLabelOn Initialแสดงข้อมูลตาม Data Source`posting_date` Account CodeLabelOn Initialแสดงข้อมูลตาม Data Sourcegl_code Account NameLabelOn Initialแสดงข้อมูลตาม Data Sourcegl_name Dr.LabelOn Initialแสดงข้อมูลตาม Data Source กรณีไม่มีข้อมูล แสดง ""ถ้า gl_type = ""DR" ลงค่า gl_amount Cr.LabelOn Initialแสดงข้อมูลตาม Data Sourceกรณีไม่มีข้อมูล แสดง ""ถ้า gl_type = ""CR" ลงค่า gl_amount Cost Center/Revenue CenterLabelOn Initialแสดงข้อมูลตาม Data Source`sun_costcenter` Project Budget (IO)/Department Budget (FC)LabelOn Initialแสดงข้อมูลตาม Data Source`sun_io_fundcenter` Branch OwnerLabelOn Initialแสดงข้อมูลตาม Data Source`sun_branch_owner` Branch ServiceLabelOn Initialแสดงข้อมูลตาม Data Source`sun_branch_service` Business LineLabelOn Initialแสดงข้อมูลตาม Data Source`sun_subbusiness_line` |
| ส่วนแสดงข้อมูลผลการค้นหา |
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
| Name | Description | Value |
| referenceNumber | Reference Number ของ EDW | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).reference_number |
| systemName | ระบบที่ดึงข้อมูล | Fix "CENPAY" |
| userName | username ผู้ใช้งาน | Login User |
| **ส่วนการแสดงข้อมูล (Header)** |
| **Component Name** | **Type** | **Event** | **Action/ Validation/ Default Value** | **Data Source** | **Remarks** |
| รวม Dr. : | Label | On Initial | แสดงยอดรวม Dr. ทั้งหมดภายใต้รูปแบบ Fix Text : "รวม Dr. : "+ยอดรวม Dr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมด ให้แสดงเป็นตัวหนังสือสีฟ้า | sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount) เมื่อ **[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_type = ""DR" |   |
| รวม Cr. : | Label | On Initial | แสดงยอดรวม Cr. ทั้งหมดภายใต้รูปแบบ Fix Text : "รวม Cr. : "+ยอดรวม Cr. ทั้งหมดภายใต้รายการ Batch ปฎิบัติการทั้งหมด ให้แสดงเป็นตัวหนังสือสีฟ้า | sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount)เมื่อ **[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_type = "CR" |   |
| ผลต่าง : | Label | On Initial | แสดงยอดผลต่าง ของ รวม Dr. และ รวม Cr. ภายใต้รูปแบบ Fix Text : "ผลต่าง : "+ยอดผลต่างของ รวม Dr. และ รวม Cr. ภายใต้รายการ Batch ปฎิบัติการทั้งหมด โดยถ้าผลต่าง = 0.00 ให้ระบุเป็นสีเขียว และถ้าผลต่าง มากกว่า หรือ น้อยกว่า 0 ให้ระบุเป็นสีแดง **(ไม่มีเครื่องหมาย) แยกด้วยสีของผลต่างแทน** | รวม Dr. : หักลบ รวม Cr. :\|sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount) - sum(**[tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)**.gl_amount)\| |   |
| **ส่วนการแสดงข้อมูล (Table Display) วนลูปตาม [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail) ที่ได้** |
| **Component Name** | **Type** | **Event** | **Action/ Validation/ Default Value** | **Data Source** | **Remarks** |
| Posting Date | Label | On Initial | แสดงข้อมูลตาม Data Source | `posting_date` |   |
| Account Code | Label | On Initial | แสดงข้อมูลตาม Data Source | gl_code |   |
| Account Name | Label | On Initial | แสดงข้อมูลตาม Data Source | gl_name |   |
| Dr. | Label | On Initial | แสดงข้อมูลตาม Data Source กรณีไม่มีข้อมูล แสดง "" | ถ้า gl_type = ""DR" ลงค่า gl_amount |   |
| Cr. | Label | On Initial | แสดงข้อมูลตาม Data Sourceกรณีไม่มีข้อมูล แสดง "" | ถ้า gl_type = ""CR" ลงค่า gl_amount |   |
| Cost Center/Revenue Center | Label | On Initial | แสดงข้อมูลตาม Data Source | `sun_costcenter` |   |
| Project Budget (IO)/Department Budget (FC) | Label | On Initial | แสดงข้อมูลตาม Data Source | `sun_io_fundcenter` |   |
| Branch Owner | Label | On Initial | แสดงข้อมูลตาม Data Source | `sun_branch_owner` |   |
| Branch Service | Label | On Initial | แสดงข้อมูลตาม Data Source | `sun_branch_service` |   |
| Business Line | Label | On Initial | แสดงข้อมูลตาม Data Source | `sun_subbusiness_line` |   |

---

## Hyperlinks บนหน้านี้

- [PC-003-FC-006 หน้าจอ Popup ยืนยันบันทึกรายการอนุมัติเตรียมจ่ายครั้งที่ 2](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252086)
- [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266)
- [WS สำหรับดึงข้อมูล SUN Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282244649)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)
- [tx_adwpc_double_entry_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_double_entry_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1275822312/image2025-8-14%209%3A41%3A26.png?version=1&modificationDate=1755139289665&api=v2
