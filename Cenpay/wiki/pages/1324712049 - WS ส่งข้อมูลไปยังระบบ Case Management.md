# WS ส่งข้อมูลไปยังระบบ Case Management

- **Page ID:** 1324712049
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1324712049
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Cenpay > WS ส่งข้อมูลไปยังระบบ Case Management
- **Depth:** 4

---

**Repositories**: msa-benefitregister
**Service path**
**POST:** [http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/saveCaseHistories](http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/saveCaseHistories)
Icon
TYPE : <POST>
**อธิบายได้ดังนี้**
GET - Select
POST - Insert
PUT - Update

# Input

| Input | Type | Description |
|---|---|---|
| requestId | Int | รหัสอ้างอิง รหัส [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id |
| caseCode | String | รหัสเหตุการณ์เหตุการณ์caseCode**ส่งจากระบบ register**เวนคืนกรมธรรม์รับเรื่องคำร้องSUR_REQUESTเวนคืนกรมธรรม์ยกเลิกคำร้องSUR_CANCELFree Look รับเรื่องคำร้องFREE_REQUESTFree Look ยกเลิกคำร้องFREE_CANCEL**Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026**รับเรื่องคำร้องขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่REP_REQUESTยกเลิกคำร้องขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่REP_CANCEL**ส่งจากระบบ benefitbank**เวนคืนกรมธรรม์จ่ายสำเร็จSUR_PAID_SUCCESSเวนคืนกรมธรรม์จ่ายไม่สำเร็จSUR_PAID_FAILFree Look จ่ายสำเร็จFREE_PAID_SUCCESSFree Look จ่ายไม่สำเร็จFREE_PAID_FAILเวนคืนกรมธรรม์ยกเลิกคำร้องSUR_CANCELFree Look ยกเลิกคำร้องFREE_CANCEL |
| เหตุการณ์ | caseCode |
| **ส่งจากระบบ register** |
| เวนคืนกรมธรรม์รับเรื่องคำร้อง | SUR_REQUEST |
| เวนคืนกรมธรรม์ยกเลิกคำร้อง | SUR_CANCEL |
| Free Look รับเรื่องคำร้อง | FREE_REQUEST |
| Free Look ยกเลิกคำร้อง | FREE_CANCEL |
| **Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026** |
| รับเรื่องคำร้องขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่ | REP_REQUEST |
| ยกเลิกคำร้องขอรับเงินผลประโยชน์จากทะเบียนรอจ่ายใหม่ | REP_CANCEL |
| **ส่งจากระบบ benefitbank** |
| เวนคืนกรมธรรม์จ่ายสำเร็จ | SUR_PAID_SUCCESS |
| เวนคืนกรมธรรม์จ่ายไม่สำเร็จ | SUR_PAID_FAIL |
| Free Look จ่ายสำเร็จ | FREE_PAID_SUCCESS |
| Free Look จ่ายไม่สำเร็จ | FREE_PAID_FAIL |
| เวนคืนกรมธรรม์ยกเลิกคำร้อง | SUR_CANCEL |
| Free Look ยกเลิกคำร้อง | FREE_CANCEL |
| customerId | String | รหัสลูกค้า |
| customerName | String | ชื่อลูกค้า/บริษัท |
| policyNumber | String | เลขที่กรมธรรม์ |
| contactNumberPhone | String | เบอร์โทรศัพท์ |
| userName | String | ชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆ |
| date | Date | วันที่ทำรายการ |
| amount | Numeric | ยอดเงิน |
| paidDate | Date | วันที่ดำเนินการทางการเงิน |
| accountNo | String | เลขที่บัญชี/เช็ค |
| name | String | ชื่อประเภทรายการ |

# **Process**

1. ส่งข้อมูลไปยังระบบ Case Management โดยมีขั้นตอนดังนี้Mapping ข้อมูลสำหรับ Call Service [11 WS บันทึกประวัติ Case Management](/pages/viewpage.action?pageId=1291716212) ดังนี้FieldMapping DatacustomerId[input.customerId](#WSส่งข้อมูลไปยังระบบCaseManagement-A_customerId)customerName[input.customerName](#WSส่งข้อมูลไปยังระบบCaseManagement-A_customerName)contactName[input.customerName](#WSส่งข้อมูลไปยังระบบCaseManagement-A_customerName) (เหมือนกับ customerName)customerLevelNULLcontactRelationIdFix : 7 - ผูเ้อาประกันภัยpolicyNumber[input.policyNumber](#WSส่งข้อมูลไปยังระบบCaseManagement-A_policyNumber)groupPolicyNumberNULLcontactNumberPhone[input.contactNumberPhone](#WSส่งข้อมูลไปยังระบบCaseManagement-A_contactNumberPhone) contactChannelIdFix : 7 - ติดต่อด้วยตนเองที่สาขา**----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 22/06/2026 ----**Fix : 8 - ติดต่อด้วยตนเองที่สาขาIDNameRemark1โทรศัพท์ติดต่อผ่าน Inbound Call ศูนย์ลูกค้าสัมพันธ์2Facebook/IMCติดต่อผ่านทาง Inbox Facebook บริษัทฯ3LINE@ติดต่อฝากข้อความผ่าน Line@ บริษัทฯ4Live Chat-5Out boundติดต่อผ่านงานโทรออก (ใช้กับส่วนอนุรักษ์กรมธรรม์)6Websiteฝากข้อความผ่านหน้าเว็บไซต์บริษัทฯ (กรณีแนะนำ/ติชม จะถูกส่งไปที่ Email: [info@ocean.co.th](mailto:info@ocean.co.th) และกรณีร้องเรียนจะถูกส่งไปที่ Email: [ocs@ocean.co.th](mailto:ocs@ocean.co.th) โดยอัตโนมัติหลังลูกค้ากด Submit)7จดหมายติดต่อผ่านช่องทางไปรษณีย์8ติดต่อด้วยตนเองที่สาขาWalk-in ติดต่อผ่านสาขาต่าง ๆ ทั่วประเทศ9ติดต่อด้วยตนเองที่ สนญ.Walk-in ติดต่อผ่านสำนักงานใหญ่10ติดต่อผ่านธนาคารติดต่อฝากเรื่องผ่านธนาคาร หรือเจ้าหน้าที่ธนาคาร11ฝากข้อความติดต่อฝากข้อความทางโทรศัพท์ในช่วงเวลาปิดทำการ12อื่นๆ-13Emailติดต่อผ่านช่องทาง [Info@ocean.co.th](mailto:Info@ocean.co.th), [ContactCenter@ocean.co.th](mailto:ContactCenter@ocean.co.th) และ [OCS@ocean.co.th](mailto:OCS@ocean.co.th) (สำหรับเรื่องร้องเรียน)14โทรสารติดต่อผ่าน Fax: 0-2207-882220ฝากข้อมูลผ่านสินไหม-contactTypeIdFix : 9 - ลูกค้า (บุคคล)emailNULLoicListIdNULLcaseCodeReferNULLopenDatesystemDatecaseStatusCaseCodeValueSUR_REQUEST,FREE_REQUEST**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUESTFix : in_progress**----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 22/06/2026 ----**Fix : closedSUR_CANCEL, FREE_CANCEL**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_CANCELFix : closedSUR_PAID_SUCCESS,FREE_PAID_SUCCESS,Fix : closedSUR_PAID_FAIL, FREE_PAID_FAILFix : closedslaStatusNULLcaseTypecaseSubjectcaseSubjectค้นหา [cf_case_management](/display/RDSCPENH/cf_case_management).subject_id ด้วยเงื่อนไขTableCondition[cf_case_management](/display/RDSCPENH/cf_case_management)[cf_case_management](/display/RDSCPENH/cf_case_management).case_code = [input.caseCode](#WSส่งข้อมูลไปยังระบบCaseManagement-A_caseCode)subSubject[cf_case_management](/display/RDSCPENH/cf_case_management).sub_subject_id ด้วยเงื่อนไขเดียวกับ caseSubjectsubSubject2NULLsubSubject3NULLsubSubject4NULLcaseTitleเหมือนกับ subSubjectspecialCaseIdNULLresolveDateNULLlevelOfProblemFix : coolseverityFix : coolsolutionTypeIdNULLcontrolNumberNULLcontrolCodeNULLaccusedNULLproblemDetailสร้าง problemDetail จาก input ดังนี้CaseCodeMessageSUR_REQUEST,FREE_REQUEST**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUESTคำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงินเวนคืนกรมธรรม์ ${amount} บาท**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**ตรวจสอบ [input.caseCode](#WSส่งข้อมูลไปยังระบบCaseManagement-A_caseCode)กรณี เท่ากับ "SUR_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงินเวนคืนกรมธรรม์ ${amount} บาทกรณี เท่ากับ "FREE_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงิน Free Look ${amount} บาทกรณี เท่ากับ "REP_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} **ยอดเงินผลประโยชน์ค้างรับ** ${amount} บาทSUR_CANCEL, FREE_CANCEL**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_CANCELวันที่ยกเลิกคำร้อง ${date}SUR_PAID_SUCCESS,FREE_PAID_SUCCESS,**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**REP_PAID_SUCCESSคำนวณ ณ วันที่ยื่นคำร้อง ${date} ยอดเงิน${name} ${amount} บาท วันที่จ่าย ${paidDate} เลขที่บัญชี/เลขที่เช็ค ${accountNo}SUR_PAID_FAIL, FREE_PAID_FAIL,**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**REP_PAID_FAILวันที่ยื่นคำร้อง ${date} วันที่จ่ายไม่สำเร็จ ${paidDate} เลขที่บัญชี/เลขที่เช็ค ${accountNo}solutionDetailNULLremarkNULLvoiceFileLinkNULLisTransferNULLclosedDatesystemDateuserName [input.userName](#WSส่งข้อมูลไปยังระบบCaseManagement-A_userName)caseStatusUpdatedAtsystemDatestatusFix : activecreatedAtsystemDateupdatedAtsystemDatecode**----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 22/06/2026 ----**สร้าง Running No. โดยกำหนดรหัสระบบต้นทางคือ CP (CenPay) ดังนี้ 1. หาจาก Table [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence) ใช้เงื่อนไข key = System_date (วันปัจจุบัน) จัด format รูปแบบ: yyyymmdd (ปีค.ศ.) + 'CP' และ type = 'CMG'กรณีพบข้อมูล นำค่า [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).seq มาใช้update รายการที่เลือก set [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).seq = [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).seq + 1กรณีไม่พบข้อมูล ให้เพิ่มข้อมูลสำหรับ system_date (วันปัจจุบัน) วันนั้น และนำ [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).seq มาใช้ ตามตัวอย่างTable: [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence)Mapping FieldtypeCMGkey20251031CPseq12. จัด format : **[tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).key + [tx_txn_sequence](/display/RDSCPENH/03_13+tx_txn_sequence).seq**เติม 0 ให้ครบ 5 หลัก **ตัวอย่าง 20251031CP00001****** อ้างอิงวิธีการสร้าง [ดึงข้อมูล Running No. จากระบบต้นทาง](/pages/viewpage.action?pageId=1295712852)
2. บันทึกประวัติการส่งข้อมูลให้ระบบ Case Management ดังนี้
  1. Insert data table : [tx_case](/display/RDSCPENH/tx_case) โดย mapping data ดังนี้fieldmapping datacase_system_code**----- Centralize Payment Enhance Phase 1R2 Add by kanawoot.ou 22/06/2026 ----**[code](#WSส่งข้อมูลไปยังระบบCaseManagement-A_code) (รหัสเคสในระบบ)case_code[input.caseCode](#WSส่งข้อมูลไปยังระบบCaseManagement-A_caseCode)case_id[output.idCase](#WSส่งข้อมูลไปยังระบบCaseManagement-A_CallCase) (output จากการ call service [11 WS บันทึกประวัติ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291716212))request_id[input.requestId](#WSส่งข้อมูลไปยังระบบCaseManagement-A_requestId)created_datesystemDatecreate_byFix : 'SYSTEM'

# **Output**

| Name | Type | Description |
|---|---|---|
| code | Numeric | CodeMessage200Success204No Content400Bad Request 409Conflict 500Server Error |
| Code | Message |
| 200 | Success |
| 204 | No Content |
| 400 | Bad Request |
| 409 | Conflict |
| 500 | Server Error |
| message | String |

****

# ประวัติการบันทึก Case Management

---

## Hyperlinks บนหน้านี้

- [http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/saveCaseHistories](http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/saveCaseHistories)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [11 WS บันทึกประวัติ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291716212)
- [info@ocean.co.th](http://wiki.thaisamut.co.thmailto:info@ocean.co.th)
- [ocs@ocean.co.th](http://wiki.thaisamut.co.thmailto:ocs@ocean.co.th)
- [Info@ocean.co.th](http://wiki.thaisamut.co.thmailto:Info@ocean.co.th)
- [ContactCenter@ocean.co.th](http://wiki.thaisamut.co.thmailto:ContactCenter@ocean.co.th)
- [OCS@ocean.co.th](http://wiki.thaisamut.co.thmailto:OCS@ocean.co.th)
- [cf_case_management](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management)
- [cf_case_management](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management)
- [cf_case_management](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management)
- [cf_case_management](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_case_management)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [tx_txn_sequence](http://wiki.thaisamut.co.th/display/RDSCPENH/03_13+tx_txn_sequence)
- [ดึงข้อมูล Running No. จากระบบต้นทาง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1295712852)
- [tx_case](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_case)
- [11 WS บันทึกประวัติ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291716212)
