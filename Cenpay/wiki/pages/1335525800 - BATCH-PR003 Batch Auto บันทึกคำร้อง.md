# BATCH-PR003 Batch Auto บันทึกคำร้อง

- **Page ID:** 1335525800
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335525800
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-PR-คำร้อง > BATCH-PR003 Batch Auto บันทึกคำร้อง
- **Depth:** 4

---

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch สำหรับดึงข้อมูลรายการรอจ่ายใหม่ ของกรมธรรม์ที่มีประวัติจ่ายสำเร็จแล้ว มาทำการบันทึกคำร้องให้แบบ auto |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | รายการรอจ่ายใหม่ จะถูกดึงมาจากรายการในหน้าจอ [FS-06-01-01 หน้าจอค้นหารายการทะเบียนรอจ่ายใหม่](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325858990)รายการบันทึกคำร้องที่สร้างใหม่ จะถูกนำไปแสดงยังหน้าจอ [FS-05-01-01 หน้าจอค้นหา/ ตรวจสอบรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1303740846) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกๆ วัน เวลา 01:00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | เลขกรมธรรม์ของรายการคำร้องที่มีสถานะเป็น จ่ายสำเร็จ (PMS) |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ระบบสร้างรายการบันทึกคำร้อง 'ขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่' ที่ใช้ข้อมูลจากรายการรอจ่ายใหม่ |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**รายการคำร้องที่มีสถานะเป็น 'PMS' - จ่ายสำเร็จ ที่แสดงในหน้าจอ [FS-05-01-01 หน้าจอค้นหา/ ตรวจสอบรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1303740846)**Process Description (กระบวนการ)**Insert ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuebatch_codeรหัส BatchFix "BH043"batch_detailรายละเอียด BatchFix "Batch Auto บันทึกคำร้อง"total_recordจำนวนรายการทั้งหมดNULLprocess_sourceBatch Run โดยวิธี Auto (A) หรือ Manual (M)Fix "A"branch_codeสาขาที่รัน ManualNULLparameter_urlparameter ที่ระบุเพื่อส่งให้ batch ประมวลผลNULLstatusสถานะการทำงานของ BatchFix "I"error_messageรายละเอียดของการทำงานที่ ErrorNULLprocess_start_dateวันที่และเวลา Batch ประมวลผลเริ่มต้นsystemDateprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดNULLcreated_dateวันที่สร้างรายการsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดNULLcreated_byผู้สร้างรายการFix "SYSTEM"updated_byผู้แก้ไขรายการล่าสุดNULLดึงข้อมูลรายการคำร้องที่มีสถานะเป็น 'PMS' - จ่ายสำเร็จที่ระบบ Cenpay ให้ดึงข้อมูลที่ [DB : benefitbank](/display/RDSCPENH/01.+DB+%3A+benefitbank) <![CDATA[select po.policy_no as policy_no , pa.payee_title as beneficiary_title -- คำนำหน้าชื่อผู้รับผลประโชน์ , pa.payee_first_name as beneficiary_name -- ชื่อผู้รับผลประโชน์ , pa.payee_last_name as beneficiary_surname -- นามสกุลผู้รับผลประโชน์ , po.insured_card_type as beneficiary_card_type -- ประเภทบัตรผู้รับผลประโชน์ , po.insured_card_no as beneficiary_card_no -- เลขที่บัตรผู้รับผลประโชน์ , null as beneficiary_card_expire_date -- วันที่หมดอายุบัตรผู้รับผลประโชน์ , po.mobile_no as beneficiary_phone_number -- เบอร์โทรศัพท์ผู้รับผลประโชน์ที่ประสงค์ รับผลการพิจารณา , pa.account_relation_name as relation -- ความสัมพันธ์ , pa.payment_channel as payment_type_code -- ช่องทางรับเงิน , pa.bank_id as bank_id -- รหัสธนาคาร , pa.bank_acc_issuer as bank_name -- ชื่อธนาคาร , pa.bank_acc_branch as account_branch -- สาขาธนาคาร , pa.bank_acc_no as account_no -- เลขบัญชี , pa.bank_acc_name as account_name -- ชื่อบัญชี , pa.bank_acc_no -- เลขที่พร้อมเพย์ from tx_payment pa left join tx_payment_policy po on pa.id = po.payment_id where pa.payment_status_code = &#39;PMS&#39; and pa.payment_channel = &#39;T&#39; and pa.actual_payment_date = getdate - 1 ]]> นำข้อมูลที่ได้จาก ข้อ 2. ไปค้นหารายการรอจ่ายใหม่ โดยเรียกใช้ process อ้างอิงรายละเอียด [02-05-16 Process การดึงข้อมูลรายการรอจ่ายใหม่ไปที่หน้าบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335296724)inputvaluepolicyNo[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).policy_nobeneficiaryTitle[tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_titlebeneficiaryName[tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_namebeneficiarySurname[tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_surnameกรณีพบรายการรอจ่ายใหม่ ให้ดำเนินการตาม ข้อ 4. ต่อไปกรณี**ไม่**พบรายการรอจ่ายใหม่ ให้ทำการจบกระบวนการทำการสร้างรายการบันทึกคำร้องเงื่อนไขการสร้างรายการบันทึกคำร้อง มีดังนี้กรณีที่ข้อมูล policyNo, beneficiaryTitle, beneficiaryName, beneficiarySurname เหมือนกัน ให้รวมรายการทั้งหมดเป็น 1 รายการคำร้อง ตัวอย่างการบันทึกข้อมูล -> [Link](https://docs.google.com/spreadsheets/d/1o3TOy050sqbRsXVCAgqE-Qyt5C0Ujt0mCeYlN4MUHgM/edit?gid=968049462#gid=968049462)ดึงข้อมูลเพิ่มเติม ดังนี้ ข้อมูลกรมธรรม์ ดึงจาก AS400นำเลขที่กรมธรรม์ ค้นหาทั้ง 3 service ดังนี้กรมธรรม์อุตสาหกรรม และสามัญ (policy_type = 'I', 'G', 'O') ใช้ ws [/thaisamut/policy/v3.9/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1186856997)กรมธรรม์ PA (policy_type = 'P') ใช้ ws [/thaisamut/policy/v3/xml/inquiry/searchpapolicy](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=977797706)กรมธรรม์ UL (policy_type = 'U') ใช้ ws [/thaisamut/policy/v4/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=772964803)นำรหัสสาขาที่ได้จากข้อ a. ไปดึงชื่อสาขา โดยเรียก WebService : branchesService.getActiveBranches(branch_code)นำรหัสตัวแทนที่ได้จากข้อ a. ไปดึงเบอร์โทรศัพท์ตัวแทน โดยเรียก WebService : searchByAgentCode: [/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=500596786)ข้อมูลลูกค้า ดึงจาก CIS โดยอ้างอิงรายละเอียด wiki [01 WS สำหรับดึงข้อมูลผู้เอาประกันภัย ข้อมูลบัญชีรับผลประโยชน์ ข้อมูลที่อยู่ติดต่อระดับกรมธรรม์ เบอร์ติดต่อ และข้อมูลผู้รับผลประโยชน์ ที่ระบบ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507270)InputValuepollicyNoใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก processtransactionType'BNF'addressType'CON'(เฉพาะอุตสาหกรรม) ดึงข้อมูลงวดที่ชำระล่าสุด โดยอ้างอิงรายละเอียด wiki [06-03-50 WS สำหรับค้นหาข้อมูลใบเสร็จอุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319109188)InputValuepollicyNoใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก processpolicyTypepolicy_type ('I', 'G') **----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 07/07/2026 ----** [Output.policyType จาก ws /thaisamut/policy/v3.9/xml/inquiry/search](#BATCH-PR003BatchAutoบันทึกคำร้อง-A_PolicyType)payFlagP (ชำระแล้ว)receiptNoข้อมูลที่ได้จากข้อ a. (latestPayment : receiptNo)ข้อมูลคำนวณยอดเงินผลประโยชน์ เฉพาะกรณีเป็น คำร้องขอเวนคืนกรมธรรม์ประกันภัย หรือคำร้องขอ Free Look และไม่ใช่กรมธรรม์ UL (policy_type = 'U') อ้างอิงรายละเอียด wiki [02-05-06 กระบวนการดึงข้อมูลและคำนวณหนี้สิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982768) **----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 30/06/2026 ----** กรณีประเภทกรมธรรม์ เป็น สามัญ และ ประเภทคำร้องเป็น Free Lookตรวจสอบ Output จาก Process [02-05-06 กระบวนการดึงข้อมูลและคำนวณหนี้สิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982768)กรณี Output.med_flag เท่ากับ "Y" ให้ **Enable**Texbox ค่าตรวจสุขภาพกรณีอื่นๆ ให้ **Disable******Texbox ค่าตรวจสุขภาพ**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 08/04/2026 ----** เฉพาะกรณีเป็น คำร้องขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่ อ้างอิงรายละเอียด wiki [02-05-16 Process การดึงข้อมูลรายการรอจ่ายใหม่ไปที่หน้าบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335296724)InputValuepolicyNoใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก processbeneficiaryTitleคำนำหน้าชื่อผู้รับผลประโชน์ ที่ได้จาก CISbeneficiaryNameชื่อผู้รับผลประโชน์ ที่ได้จาก CISbeneficiarySurnameนามสกุลผู้รับผลประโชน์ ที่ได้จาก CISนำข้อมูลที่ได้มาบันทึกลงตาราง อ้างอิงรายละเอียด [BATCH-PR003_01 ส่วนบันทึกข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1336967613)ดำเนินการส่วนอื่นๆ อ้างอิงรายละเอียด [FS_05_02_01_02_03 ดำเนินการส่วนอื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1305411728) **-> ทำเฉพาะส่ง Auto Email แจ้งรับเรื่องให้สาขาต้นสังกัด**Update ข้อมูล Batch Process ที่ Table : [lg_batch_process](/display/RDSCP/lg_batch_process)FieldDescriptionValuetotal_recordจำนวนรายการทั้งหมดนับจากจำนวนรายการบันทึกคำร้องที่สร้างสำเร็จstatusสถานะการทำงานของ Batchกรณี Error บันทึก Fกรณีสำเร็จ บันทึก Serror_messageรายละเอียดของการทำงานที่ Errorกรณี Error บันทึก Exception Messageprocess_end_dateวันที่และเวลา Batch ประมวลผลสิ้นสุดsystemDateupdated_dateวันที่แก้ไขรายการล่าสุดsystemDateupdated_byผู้แก้ไขรายการล่าสุดFix "SYSTEM"**Post-condition (เงื่อนไขหลังการทำงาน)**ในวันถัดไป รายการบันทึกคำร้องที่สร้างสำเร็จ จะถูกส่งไปยังหน้าจอรวมจ่าย อ้างอิงรายละเอียด [CP-PC-01-BH039 นำเข้าข้อมูลจากหน้าจอบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1301578058) |
| Field | Description | Value |
| batch_code | รหัส Batch | Fix "BH043" |
| batch_detail | รายละเอียด Batch | Fix "Batch Auto บันทึกคำร้อง" |
| total_record | จำนวนรายการทั้งหมด | NULL |
| process_source | Batch Run โดยวิธี Auto (A) หรือ Manual (M) | Fix "A" |
| branch_code | สาขาที่รัน Manual | NULL |
| parameter_url | parameter ที่ระบุเพื่อส่งให้ batch ประมวลผล | NULL |
| status | สถานะการทำงานของ Batch | Fix "I" |
| error_message | รายละเอียดของการทำงานที่ Error | NULL |
| process_start_date | วันที่และเวลา Batch ประมวลผลเริ่มต้น | systemDate |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | NULL |
| created_date | วันที่สร้างรายการ | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | NULL |
| created_by | ผู้สร้างรายการ | Fix "SYSTEM" |
| updated_by | ผู้แก้ไขรายการล่าสุด | NULL |
| input | value |
| policyNo | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).policy_no |
| beneficiaryTitle | [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_title |
| beneficiaryName | [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_name |
| beneficiarySurname | [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary).beneficiary_surname |
| Input | Value |
| pollicyNo | ใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก process |
| transactionType | 'BNF' |
| addressType | 'CON' |
| Input | Value |
| pollicyNo | ใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก process |
| policyType | policy_type ('I', 'G') **----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 07/07/2026 ----** [Output.policyType จาก ws /thaisamut/policy/v3.9/xml/inquiry/search](#BATCH-PR003BatchAutoบันทึกคำร้อง-A_PolicyType) |
| payFlag | P (ชำระแล้ว) |
| receiptNo | ข้อมูลที่ได้จากข้อ a. (latestPayment : receiptNo) |
| Input | Value |
| policyNo | ใช้เลขที่กรมธรรม์ที่ระบุในหน้าจอ หรือจาก process |
| beneficiaryTitle | คำนำหน้าชื่อผู้รับผลประโชน์ ที่ได้จาก CIS |
| beneficiaryName | ชื่อผู้รับผลประโชน์ ที่ได้จาก CIS |
| beneficiarySurname | นามสกุลผู้รับผลประโชน์ ที่ได้จาก CIS |
| Field | Description | Value |
| total_record | จำนวนรายการทั้งหมด | นับจากจำนวนรายการบันทึกคำร้องที่สร้างสำเร็จ |
| status | สถานะการทำงานของ Batch | กรณี Error บันทึก Fกรณีสำเร็จ บันทึก S |
| error_message | รายละเอียดของการทำงานที่ Error | กรณี Error บันทึก Exception Message |
| process_end_date | วันที่และเวลา Batch ประมวลผลสิ้นสุด | systemDate |
| updated_date | วันที่แก้ไขรายการล่าสุด | systemDate |
| updated_by | ผู้แก้ไขรายการล่าสุด | Fix "SYSTEM" |

---

## Hyperlinks บนหน้านี้

- [FS-06-01-01 หน้าจอค้นหารายการทะเบียนรอจ่ายใหม่](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325858990)
- [FS-05-01-01 หน้าจอค้นหา/ ตรวจสอบรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1303740846)
- [FS-05-01-01 หน้าจอค้นหา/ ตรวจสอบรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1303740846)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [DB : benefitbank](http://wiki.thaisamut.co.th/display/RDSCPENH/01.+DB+%3A+benefitbank)
- [02-05-16 Process การดึงข้อมูลรายการรอจ่ายใหม่ไปที่หน้าบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335296724)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary)
- [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary)
- [tx_request_beneficiary](http://wiki.thaisamut.co.th/display/RDSCPENH/03_04+tx_request_beneficiary)
- [Link](https://docs.google.com/spreadsheets/d/1o3TOy050sqbRsXVCAgqE-Qyt5C0Ujt0mCeYlN4MUHgM/edit?gid=968049462#gid=968049462)
- [/thaisamut/policy/v3.9/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1186856997)
- [/thaisamut/policy/v3/xml/inquiry/searchpapolicy](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=977797706)
- [/thaisamut/policy/v4/xml/inquiry/search](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=772964803)
- [/thaisamut/agent/v3/xml/inquiry/search#searchByAgentCode](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=500596786)
- [01 WS สำหรับดึงข้อมูลผู้เอาประกันภัย ข้อมูลบัญชีรับผลประโยชน์ ข้อมูลที่อยู่ติดต่อระดับกรมธรรม์ เบอร์ติดต่อ และข้อมูลผู้รับผลประโยชน์ ที่ระบบ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507270)
- [06-03-50 WS สำหรับค้นหาข้อมูลใบเสร็จอุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319109188)
- [02-05-06 กระบวนการดึงข้อมูลและคำนวณหนี้สิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982768)
- [02-05-06 กระบวนการดึงข้อมูลและคำนวณหนี้สิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982768)
- [02-05-16 Process การดึงข้อมูลรายการรอจ่ายใหม่ไปที่หน้าบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335296724)
- [BATCH-PR003_01 ส่วนบันทึกข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1336967613)
- [FS_05_02_01_02_03 ดำเนินการส่วนอื่นๆ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1305411728)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCP/lg_batch_process)
- [CP-PC-01-BH039 นำเข้าข้อมูลจากหน้าจอบันทึกคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1301578058)
