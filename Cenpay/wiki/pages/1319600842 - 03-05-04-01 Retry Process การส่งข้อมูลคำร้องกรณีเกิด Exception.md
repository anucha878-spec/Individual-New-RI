# 03-05-04-01 Retry Process การส่งข้อมูลคำร้องกรณีเกิด Exception

- **Page ID:** 1319600842
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319600842
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-05 PR บันทึกคำร้อง > 03-05-04 ผู้ดูแลระบบ > 03-05-04-01 Retry Process การส่งข้อมูลคำร้องกรณีเกิด Exception
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797137292 {padding: 0px;} div.rbtoc1784797137292 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797137292 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-หน้าจอหลัก)
- [Screen Overview](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-ScreenOverview)
- [Screen Overview](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-ScreenOverview.1)
  - [วัตถุประสงค์ (Objective)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-ตารางคำอธิบาย)
- [การค้นหาข้อมูลที่ DB](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-การค้นหาข้อมูลที่DB)
- [การแสดงข้อมูลที่ได้จากการค้นหาบนหน้าจอที่กำหนด](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-การแสดงข้อมูลที่ได้จากการค้นหาบนหน้าจอที่กำหนด)

# หน้าจอหลัก

![img](/download/attachments/1319600842/image2026-2-12%2014%3A4%3A10.png?version=1&modificationDate=1770879850052&api=v2)

# Screen Overview

# Screen Overview

### วัตถุประสงค์ (Objective)

- เพื่อใช้ในอ้างอิงสำหรับรายการส่งข้อมูลเข้าสู่ระบบต่างๆ ที่เกิดปัญหาในการบันทึกข้อมูล
- สามารถจัดการรายการที่เกิดปัญหาได้จากการกดปุ่ม Retry Process จากหน้าจอได้

### ผู้ใช้งาน (Target Users)

- IT Support

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เงื่อนไขที่ต้องเป็นจริงก่อนที่ผู้ใช้งานจะสามารถเข้าถึงและใช้งานหน้าจอ
  - ผู้ใช้งานจะต้องเข้าสู่ระบบ (Login) ด้วยบัญชีที่มีสิทธิ์เป็น IT Support
  - ต้องมีรายการที่เกิดปัญหาการส่งข้อมูลเข้าสู่ระบบต่างๆ ไม่สำเร็จเช่น
    1. ไม่สามารถส่งข้อมูลคำร้องให้ระบบ AS400 ได้
    2. ไม่สามารถส่งข้อมูลคำร้องให้ระบบ Unit Linked ได้
    3. ไม่สามารถส่งข้อมูลคำร้องให้ระบบ Clawback ได้
    4. ไม่สามารถส่งข้อมูลคำร้องให้ระบบ Case Management ได้

### การกระทำกับหน้าจอ (Actions)

- สามารถค้นหารายการรับเรื่องที่เกิดปัญหาได้จากการระบุเงื่อนไขในการค้นหาได้
- สามรถตรวจสอบรายการรับเรื่องที่เกิดปัญหาการส่งข้อมูลเข้าสู่ระบบต่างๆ ไม่สำเร็จ ได้
- กรณีที่จะแก้ไขปัญหา สามารถกดปุ่ม Retry Process เพื่อดำเนินการส่งข้อมูลรับเรื่องไปยังระบบนั้นๆ ได้

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ระบบสามารถส่งข้อมูลรับเรื่องไปยังระบบต่างๆ ได้ หลังจากกดปุ่ม Retry Process

### การจัดการข้อผิดพลาด (Exceptional Handling)

- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้น
  - กรณีที่ระบุเงื่อนไขในการค้นหาไม่ถูกต้องตามรูปแบบที่กำหนด ระบบจะมีการแจ้งเตือนให้ทราบหลังจากการกดปุ่มค้นหา โดยเงื่อนไขการค้นหาที่จะมีการระบุรูปแบบไว้มีดังนี้
    - เลขที่กรมธรรม์ ต้องระบุตามรูปแบบของเลขที่กรมธรรม์ที่กำหนดไว้
  - กรณีไม่ได้ระบุข้อมูล เลขที่กรมธรรม์ และ เลขที่รับเรื่อง และ Process Name เป็นเงื่อนไขการค้นหา ระบบจะแสดงการแจ้งเตือนให้ทราบหลังจากการกดปุ่มค้นหา ซึ่งจะมีเงื่อนไขพื้นฐานต่อไปนี้
    - ต้องระบุข้อมูล เลขที่กรมธรรม์ หรือ เลขที่รับเรื่อง หรือ Process Name อย่างใดอย่างหนึ่ง

# ตารางคำอธิบาย

| FS |
|---|
| **เงื่อนไขการค้นหา**NoComponent Name**Type****Event****Action/ Validation/ Default Value****Data Source**1เลขที่กรมธรรม์Text BoxOn InitialDefault Value : ค่าว่าง On ChangeValidation : ระบุได้เฉพาะตัวอักษรภาษาไทย, ภาษาอังกฤษ และตัวเลข กรณีระบุค่าอื่นนอกเหนือจากที่ระบุให้แสดงข้อความด้านล่าง Text Box สีแดง ด้วย Alert Code ดังนี้Alert CodeReplace Value[wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message){$name} = "เลขกรมธรรม์" 2เลขที่รับเรื่องText BoxOn InitialDefault Value : ค่าว่าง On ChangeValidation : ภาษาอังกฤษ, ตัวเลข, - และ / กรณีระบุค่าอื่นนอกเหนือจากที่ระบุให้แสดงข้อความด้านล่าง Text Box สีแดง ด้วย Alert Code ดังนี้Alert CodeReplace Value[wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message){$name} = "เลขที่รับเรื่อง" Enableตลอดเวลา 3Process NameDropdown List On Initialดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A'ให้ sort ข้อมูลตาม seqข้อมูลที่แสดงใช้ nameข้อมูลที่นำมาใช้ ใช้ value On Change- Enableตลอดเวลา Disable- 4สถานะ Retry ProcessDropdown List On Initialดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_STATUS_CODE' และ active_flag = 'A'ให้ sort ข้อมูลตาม seqข้อมูลที่แสดงใช้ nameข้อมูลที่นำมาใช้ ใช้ value On Change- Enableตลอดเวลา Disable- 5ล้างเงื่อนไขButtonOn Initial- On Clickทำการเคลียร์เงื่อนไขทั้งหมดที่ให้ระบุบนหน้าจอ กลับเป็นค่าตาม On Initial Enableตลอดเวลา 6ค้นหาButtonOn Initial- On ClickValidation : ตามเงื่อนไขของ Criteria ดังนี้ กรณีที่ไม่ได้ระบุ สถานะ Retry Process ให้ระบบทำการ focus cursor และแสดงข้อความแจ้งเตือนเป็นตัวหนังสือสีแดง ที่ใต้ field นั้นๆ ด้วย Alter Code ดังนี้ Alter CodeReplace Value[wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)-กรณีที่ไม่ได้ระบุ กรณีไม่ได้ระบุข้อมูล เลขที่กรมธรรม์ และ เลขที่รับเรื่อง และ Process Name ให้ระบบทำการ focus cursor และแสดงข้อความแจ้งเตือนเป็นตัวหนังสือสีแดง ที่ใต้ field นั้นๆ ด้วย Alter Code ดังนี้Alter CodeReplace Value[wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)-กรณีระบุข้อมูล สถานะ Retry Process และ ข้อมูลอย่างใดอย่างหนึ่งดังนี้ เลขที่กรมธรรม์ เลขที่รับเรื่อง Process Name ระบบจะดำเนินการในขั้นตอนถัดไปค้นหาข้อมูลที่[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking)[tx_request](/display/RDSCPENH/03_01+tx_request)[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy)โดยใช้ where เงื่อนไขตามเงื่อนไขของส่วนค้นหาที่ระบุในหน้าจอจากนั้นอ้างอิงตามข้อใน [ส่วนผลการค้นหา](/pages/viewpage.action?pageId=1303740943) Enableตลอดเวลา |
| **เงื่อนไขการค้นหา** |
| No | Component Name | **Type** | **Event** | **Action/ Validation/ Default Value** | **Data Source** |
| 1 | เลขที่กรมธรรม์ | Text Box | On Initial | Default Value : ค่าว่าง |   |
|   |   |   | On Change | Validation : ระบุได้เฉพาะตัวอักษรภาษาไทย, ภาษาอังกฤษ และตัวเลข กรณีระบุค่าอื่นนอกเหนือจากที่ระบุให้แสดงข้อความด้านล่าง Text Box สีแดง ด้วย Alert Code ดังนี้Alert CodeReplace Value[wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message){$name} = "เลขกรมธรรม์" |   |
| Alert Code | Replace Value |
| [wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) | {$name} = "เลขกรมธรรม์" |
| 2 | เลขที่รับเรื่อง | Text Box | On Initial | Default Value : ค่าว่าง |   |
|   |   |   | On Change | Validation : ภาษาอังกฤษ, ตัวเลข, - และ / กรณีระบุค่าอื่นนอกเหนือจากที่ระบุให้แสดงข้อความด้านล่าง Text Box สีแดง ด้วย Alert Code ดังนี้Alert CodeReplace Value[wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message){$name} = "เลขที่รับเรื่อง" |   |
| Alert Code | Replace Value |
| [wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) | {$name} = "เลขที่รับเรื่อง" |
|   |   |   | Enable | ตลอดเวลา |   |
| 3 | Process Name | Dropdown List | On Initial | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A'ให้ sort ข้อมูลตาม seqข้อมูลที่แสดงใช้ nameข้อมูลที่นำมาใช้ ใช้ value |   |
|   |   |   | On Change | - |   |
|   |   |   | Enable | ตลอดเวลา |   |
|   |   |   | Disable | - |   |
| 4 | สถานะ Retry Process | Dropdown List | On Initial | ดึงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_STATUS_CODE' และ active_flag = 'A'ให้ sort ข้อมูลตาม seqข้อมูลที่แสดงใช้ nameข้อมูลที่นำมาใช้ ใช้ value |   |
|   |   |   | On Change | - |   |
|   |   |   | Enable | ตลอดเวลา |   |
|   |   |   | Disable | - |   |
| 5 | ล้างเงื่อนไข | Button | On Initial | - |   |
|   |   |   | On Click | ทำการเคลียร์เงื่อนไขทั้งหมดที่ให้ระบุบนหน้าจอ กลับเป็นค่าตาม On Initial |   |
|   |   |   | Enable | ตลอดเวลา |   |
| 6 | ค้นหา | Button | On Initial | - |   |
|   |   |   | On Click | Validation : ตามเงื่อนไขของ Criteria ดังนี้ กรณีที่ไม่ได้ระบุ สถานะ Retry Process ให้ระบบทำการ focus cursor และแสดงข้อความแจ้งเตือนเป็นตัวหนังสือสีแดง ที่ใต้ field นั้นๆ ด้วย Alter Code ดังนี้ Alter CodeReplace Value[wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)-กรณีที่ไม่ได้ระบุ กรณีไม่ได้ระบุข้อมูล เลขที่กรมธรรม์ และ เลขที่รับเรื่อง และ Process Name ให้ระบบทำการ focus cursor และแสดงข้อความแจ้งเตือนเป็นตัวหนังสือสีแดง ที่ใต้ field นั้นๆ ด้วย Alter Code ดังนี้Alter CodeReplace Value[wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)-กรณีระบุข้อมูล สถานะ Retry Process และ ข้อมูลอย่างใดอย่างหนึ่งดังนี้ เลขที่กรมธรรม์ เลขที่รับเรื่อง Process Name ระบบจะดำเนินการในขั้นตอนถัดไปค้นหาข้อมูลที่[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking)[tx_request](/display/RDSCPENH/03_01+tx_request)[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy)โดยใช้ where เงื่อนไขตามเงื่อนไขของส่วนค้นหาที่ระบุในหน้าจอจากนั้นอ้างอิงตามข้อใน [ส่วนผลการค้นหา](/pages/viewpage.action?pageId=1303740943) |   |
| Alter Code | Replace Value |
| [wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) | - |
| Alter Code | Replace Value |
| [wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) | - |
|   |   |   | Enable | ตลอดเวลา |   |
| การค้นหาข้อมูลที่ DBTableCondition[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking)where[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).process_code = @processCode[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status = @retryStatus[tx_request](/display/RDSCPENH/03_01+tx_request)inner join [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).tx_request_id = [tx_request](/display/RDSCPENH/03_01+tx_request).idwhere[tx_request](/display/RDSCPENH/03_01+tx_request).policy_no = @policyNo[tx_request](/display/RDSCPENH/03_01+tx_request).request_no = @requestNo[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy)inner join [tx_request](/display/RDSCPENH/03_01+tx_request) .id = [tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).tx_request_idORDER BY[tx_request](/display/RDSCPENH/03_01+tx_request).policy_no asc[tx_request](/display/RDSCPENH/03_01+tx_request).request_no asc[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status desc[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).created_date ascการแสดงข้อมูลที่ได้จากการค้นหาบนหน้าจอที่กำหนด**ส่วนการแสดงข้อมูล**NoComponent Name**Type****Event**Action / Data Value**Data Source**1ดำเนินการIconOn Initial- On Clickแสดง Popup Confrim การดำเนินการดังนี้Alter CodeReplace Value[con_pc_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) {$nameAction} = "Retry Process " & [Process Name](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_ProcessName) & " ของเลขที่รับเรื่อง " & [เลขที่รับเรื่อง](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_RequestNo)กรณีกดปุ่มตกลง ให้ดำเนินการดังนี้ ให้ระบบดำเนินการเรียก [Retry Process ส่งข้อมูลคำร้องไปยังระบบต่างๆ](/display/RDSCPENH/02-05-10_02+Retry+Process) และให้ส่ง Input ดังนี้InputDesciptionValuerequestProblemTrackingIdPK table [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)[tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking).idrequestIdPK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).idprocessCodeรหัสอ้างอิง Process ที่ดำเนินการไม่สำเร็จ อ้างอิงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A'ข้อมูลที่นำมาใช้คือ value@processCode จากการเลือกข้อมูลProcess Nameกรณีกดปุ่ม ยกเลิก ให้ดำเนินการดังนี้ ปิด Popup Confrim และกลับหน้าจอ [03-05-04-01 Retry Process การส่งข้อมูลคำร้องไปยังระบบอื่นๆ](/pages/viewpage.action?pageId=1319600842) Visibilityแสดง Icon ตามเงื่อนไขดังนี้สถานะรายการเป็น "รอดำเนินการ"[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status_code = 'W' Finishedกรณีบันทึกผล **สำเร็จ** แสดง Popup ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ) เมื่อกดปุ่มตกลง ระบบจะทำการปิดหน้าจอ Popup ดังกล่าว แล้วกลับไปที่หน้าที่แสดงก่อนหน้านี้ พร้อมแสดงสถานะ Retry Process เป็น **ดำเนินการสำเร็จ**กรณีบันทึกผล **ไม่สำเร็จ** แสดง Popup ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ) 2Process NameLabelOn Initialแสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'RETRY_PROCESS_CODE'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).process_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง[cf_list_of_value](/display/RDSCP/cf_list_of_value).name3เลขที่กรมธรรม์LabelOn Initialแสดงข้อมูลตาม Data Source[tx_request](/display/RDSCPENH/03_01+tx_request).policy_no4เลขที่รับเรื่องLabelOn Initialแสดงข้อมูลตาม Data Source[tx_request](/display/RDSCPENH/03_01+tx_request).request_no5ประเภทคำร้องLabelOn Initialแสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'REQUEST_TYPE'และ value = [tx_request](/display/RDSCPENH/03_01+tx_request).request_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง[cf_list_of_value](/display/RDSCP/cf_list_of_value).name6ประเภทกรมธรรม์LabelOn Initialแสดงข้อมูลตาม Data Source[tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).policy_type7สถานะคำร้องLabelOn Initialแสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'REQUEST_STATUS'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).status_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง[cf_list_of_value](/display/RDSCP/cf_list_of_value).name8วันที่ดำเนินการไม่สำเร็จLabelOn Initialแสดงข้อมูลตาม Data Source[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).exception_date9วันที่ Retry Process สำเร็จLabelOn Initialแสดงข้อมูลตาม Data Source[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_success_date10สถานะ Retry ProcessLabelOn Initialแสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'RETRY_STATUS_CODE'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง[cf_list_of_value](/display/RDSCP/cf_list_of_value).name |
| Table | Condition |
| [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking) | where[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).process_code = @processCode[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status = @retryStatus |
| [tx_request](/display/RDSCPENH/03_01+tx_request) | inner join [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).tx_request_id = [tx_request](/display/RDSCPENH/03_01+tx_request).idwhere[tx_request](/display/RDSCPENH/03_01+tx_request).policy_no = @policyNo[tx_request](/display/RDSCPENH/03_01+tx_request).request_no = @requestNo |
| [tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy) | inner join [tx_request](/display/RDSCPENH/03_01+tx_request) .id = [tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).tx_request_id |
| ORDER BY | [tx_request](/display/RDSCPENH/03_01+tx_request).policy_no asc[tx_request](/display/RDSCPENH/03_01+tx_request).request_no asc[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status desc[tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).created_date asc |
| **ส่วนการแสดงข้อมูล** |
| No | Component Name | **Type** | **Event** | Action / Data Value | **Data Source** |
| 1 | ดำเนินการ | Icon | On Initial | - |   |
|   |   |   | On Click | แสดง Popup Confrim การดำเนินการดังนี้Alter CodeReplace Value[con_pc_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) {$nameAction} = "Retry Process " & [Process Name](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_ProcessName) & " ของเลขที่รับเรื่อง " & [เลขที่รับเรื่อง](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_RequestNo)กรณีกดปุ่มตกลง ให้ดำเนินการดังนี้ ให้ระบบดำเนินการเรียก [Retry Process ส่งข้อมูลคำร้องไปยังระบบต่างๆ](/display/RDSCPENH/02-05-10_02+Retry+Process) และให้ส่ง Input ดังนี้InputDesciptionValuerequestProblemTrackingIdPK table [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)[tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking).idrequestIdPK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).idprocessCodeรหัสอ้างอิง Process ที่ดำเนินการไม่สำเร็จ อ้างอิงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A'ข้อมูลที่นำมาใช้คือ value@processCode จากการเลือกข้อมูลProcess Nameกรณีกดปุ่ม ยกเลิก ให้ดำเนินการดังนี้ ปิด Popup Confrim และกลับหน้าจอ [03-05-04-01 Retry Process การส่งข้อมูลคำร้องไปยังระบบอื่นๆ](/pages/viewpage.action?pageId=1319600842) |   |
| Alter Code | Replace Value |
| [con_pc_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) | {$nameAction} = "Retry Process " & [Process Name](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_ProcessName) & " ของเลขที่รับเรื่อง " & [เลขที่รับเรื่อง](#id-03-05-04-01RetryProcessการส่งข้อมูลคำร้องกรณีเกิดException-A_RequestNo) |
| Input | Desciption | Value |
| requestProblemTrackingId | PK table [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking) | [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking).id |
| requestId | PK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id |
| processCode | รหัสอ้างอิง Process ที่ดำเนินการไม่สำเร็จ อ้างอิงข้อมูลจาก [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)โดยเงื่อนไข group = 'RETRY_PROCESS_CODE' และ active_flag = 'A'ข้อมูลที่นำมาใช้คือ value | @processCode จากการเลือกข้อมูลProcess Name |
|   |   |   | Visibility | แสดง Icon ตามเงื่อนไขดังนี้สถานะรายการเป็น "รอดำเนินการ" | [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status_code = 'W' |
|   |   |   | Finished | กรณีบันทึกผล **สำเร็จ** แสดง Popup ข้อความตาม Alert Code [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (บันทึกข้อมูลสำเร็จ) เมื่อกดปุ่มตกลง ระบบจะทำการปิดหน้าจอ Popup ดังกล่าว แล้วกลับไปที่หน้าที่แสดงก่อนหน้านี้ พร้อมแสดงสถานะ Retry Process เป็น **ดำเนินการสำเร็จ**กรณีบันทึกผล **ไม่สำเร็จ** แสดง Popup ข้อความตาม Alert Code****[err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message) (ไม่สามารถทำรายการได้ กรุณาติดต่อผู้ดูแลระบบ) |   |
| 2 | Process Name | Label | On Initial | แสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'RETRY_PROCESS_CODE'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).process_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).name |
| 3 | เลขที่กรมธรรม์ | Label | On Initial | แสดงข้อมูลตาม Data Source | [tx_request](/display/RDSCPENH/03_01+tx_request).policy_no |
| 4 | เลขที่รับเรื่อง | Label | On Initial | แสดงข้อมูลตาม Data Source | [tx_request](/display/RDSCPENH/03_01+tx_request).request_no |
| 5 | ประเภทคำร้อง | Label | On Initial | แสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'REQUEST_TYPE'และ value = [tx_request](/display/RDSCPENH/03_01+tx_request).request_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).name |
| 6 | ประเภทกรมธรรม์ | Label | On Initial | แสดงข้อมูลตาม Data Source | [tx_request_policy](/display/RDSCPENH/03_02+tx_request_policy).policy_type |
| 7 | สถานะคำร้อง | Label | On Initial | แสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'REQUEST_STATUS'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).status_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).name |
| 8 | วันที่ดำเนินการไม่สำเร็จ | Label | On Initial | แสดงข้อมูลตาม Data Source | [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).exception_date |
| 9 | วันที่ Retry Process สำเร็จ | Label | On Initial | แสดงข้อมูลตาม Data Source | [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_success_date |
| 10 | สถานะ Retry Process | Label | On Initial | แสดงข้อมูลจากการนำข้อมูล Data Sourceค้นหาข้อมูลที่ [cf_list_of_value](/display/RDSCP/cf_list_of_value) เงื่อนไข group = 'RETRY_STATUS_CODE'และ value = [tx_request_problem_tracking](/display/RDSCPENH/03_14+tx_request_problem_tracking).retry_status_codeโดยใช้ข้อมูล name ที่ได้ในการแสดง | [cf_list_of_value](/display/RDSCP/cf_list_of_value).name |

---

## Hyperlinks บนหน้านี้

- [wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [wrn_pc_004](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [wrn_com_002](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [ส่วนผลการค้นหา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1303740943)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [con_pc_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [Retry Process ส่งข้อมูลคำร้องไปยังระบบต่างๆ](http://wiki.thaisamut.co.th/display/RDSCPENH/02-05-10_02+Retry+Process)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [03-05-04-01 Retry Process การส่งข้อมูลคำร้องไปยังระบบอื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319600842)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [inf_com_001](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [err_com_009](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+Error+Message)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/03_02+tx_request_policy)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)
- [tx_request_problem_tracking](http://wiki.thaisamut.co.th/display/RDSCPENH/03_14+tx_request_problem_tracking)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/cf_list_of_value)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1319600842/image2026-2-12%2014%3A4%3A10.png?version=1&modificationDate=1770879850052&api=v2
