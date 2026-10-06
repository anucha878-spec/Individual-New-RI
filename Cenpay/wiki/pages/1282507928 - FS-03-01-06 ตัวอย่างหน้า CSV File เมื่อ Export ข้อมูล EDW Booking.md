# FS-03-01-06 ตัวอย่างหน้า CSV File เมื่อ Export ข้อมูล EDW Booking

- **Page ID:** 1282507928
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507928
- **Path:** Home > Functional Specification > 03. User Interface Specification. > 03-03 AC ตรวจจ่าย บัญชี > 03-03-01 ตรวจจ่ายบัญชี > FS-03-01-06 ตัวอย่างหน้า CSV File เมื่อ Export ข้อมูล EDW Booking
- **Depth:** 5

---

/*<![CDATA[*/ div.rbtoc1784797115372 {padding: 0px;} div.rbtoc1784797115372 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784797115372 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [หน้าจอหลัก](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-หน้าจอหลัก)
- [Screen Overview](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-ScreenOverview)
  - [วัตถุประสงค์ (Objective)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-วัตถุประสงค์(Objective))
  - [ผู้ใช้งาน (Target Users)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-ผู้ใช้งาน(TargetUsers))
  - [เงื่อนไขก่อนการทำงาน (Pre-Condition)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-เงื่อนไขก่อนการทำงาน(Pre-Condition))
  - [การกระทำกับหน้าจอ (Actions)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-การกระทำกับหน้าจอ(Actions))
  - [เงื่อนไขหลังการทำงาน (Post-Condition)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-เงื่อนไขหลังการทำงาน(Post-Condition))
  - [การจัดการข้อผิดพลาด (Exceptional Handling)](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-การจัดการข้อผิดพลาด(ExceptionalHandling))
- [ตารางคำอธิบาย](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-ตารางคำอธิบาย)
  - [รายละเอียดส่วนการแสดงผลข้อมูล](#FS-03-01-06ตัวอย่างหน้าCSVFileเมื่อExportข้อมูลEDWBooking-รายละเอียดส่วนการแสดงผลข้อมูล)

# หน้าจอหลัก

![img](/download/attachments/1275822316/image2025-8-14%209%3A41%3A55.png?version=1&modificationDate=1755139320135&api=v2)

# Screen Overview

### วัตถุประสงค์ (Objective)

- ใช้สำหรับออกเป็น Report CSV ของรายละเอียด EDW Booking ของรายการทั้งหมดบน Batch ปฎิบัติการที่เลือก

### ผู้ใช้งาน (Target Users)

- ฝ่ายบัญชี

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- มีการกดปุ่มยืนยันตรวจจ่ายจากฝ่ายปฎิบัติการที่หน้าจอ [PC-003-FC-006 หน้าจอ Popup ยืนยันบันทึกรายการอนุมัติเตรียมจ่ายครั้งที่ 2](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252086) และระบบจะทำการสร้างรายการ EDW Booking ของรายการ Batch ปฎิบัติการที่ผ่านการอนุมัติครั้งที่ 2
- จากนั้นเข้าสู่หน้าจอ [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266) แล้วกดที่ปุ่ม EDW Booking บนรายการ Batch ปฎิบัติการที่ต้องการเพื่อออก CSV File ของ EDW Booking

### การกระทำกับหน้าจอ (Actions)

- ดูข้อมูลของรายละเอียด EDW Booking ของรายการทั้งหมดภายใต้ Batch ปฎิบัติการ ในไฟล์ CSV

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ผู้ใช้งานได้รับเอกสาร CSV เพื่อใช้ติดตามรายละเอียด EDW Booking ของรายการทั้งหมดภายใต้ Batch ปฎิบัติการ

### การจัดการข้อผิดพลาด (Exceptional Handling)

- ไม่มี เป็นเพียงการกดปุ่มเพื่อออกรายงาน CSV ตามรูปแบบข้อมูลบนหน้าจอ

# ตารางคำอธิบาย

| SRS | FS |
|---|---|
| รายละเอียดส่วนการแสดงผลข้อมูล |
| **No.****Component Name/Field Name****Type****Description/ข้อมูลที่จะใส่ใน field****Row Position****Column Position********Report Header 1**1รายการธุรกรรม :Dynamic TextFix ค่า "รายการธุรกรรม : " และแทนค่าด้วย กลุ่มธุรกรรมย่อย112คำอธิบายรายการ :Dynamic TextFix ค่า "คำอธิบายรายการ : " และแทนค่าด้วย ข้อมูลคำอธิบายรายการ ถ้ามี ถ้าไม่มีให้แทนค่าด้วย "-"213ผู้พิมพ์ : User Login NameDynamic TextFix ค่า "ผู้พิมพ์ : "แสดงข้อความ "ผู้พิมพ์เอกสาร : " และ แทนค่าด้วย User Login Nameชิดซ้ายรูปแบบการจัดวางตำแหน่งอ้างอิงตาม: รูปแบบไฟล์ข้อมูล csvตัวอย่าง ผู้พิมพ์ : Boss314วันที่ : DD/MM/YYYY เวลา : HH:MM:SS น.Dynamic TextFix ค่า "วันที่ : ", "เวลา : " และ "น."แสดงวันที่สั่งพิมพ์รายงาน "วันที่ : " และ แทนค่า "DD/MM/YYYY" ด้วย System Dateแสดงข้อความ "เวลา : " และ แทนค่า "HH.MM.SS" ด้วย System Time และ แสดงข้อความ "น."ชิดซ้ายรูปแบบการจัดวางตำแหน่งอ้างอิงตาม: รูปแบบไฟล์ข้อมูล csvตัวอย่าง วันที่พิมพ์เอกสาร : 01/08/2568 เวลา : 09:55:13 น.41**Report Header 2**1Posting KeyFix TextFix ค่า "Posting Key"กั้น CSV ด้วย ","512Posting DateFix TextFix ค่า "Posting Date"กั้น CSV ด้วย ","523PeriodFix TextFix ค่า "Period"กั้น CSV ด้วย ","534Account codeFix TextFix ค่า "Account code"กั้น CSV ด้วย ","545Account nameFix TextFix ค่า "Account name"กั้น CSV ด้วย ","556Policy NumberFix TextFix ค่า "Policy Number"กั้น CSV ด้วย ","567AmountFix TextFix ค่า "Amount"กั้น CSV ด้วย ","578Receive Date / Payment DateFix TextFix ค่า "Receive Date / Payment Date"กั้น CSV ด้วย ","589Policy Due DateFix TextFix ค่า "Policy Due Date"กั้น CSV ด้วย ","5910Plan codeFix TextFix ค่า "Plan code"กั้น CSV ด้วย ","51011Base/RiderFix TextFix ค่า "Base/Rider"กั้น CSV ด้วย ","51112Prophet PlancodeFix TextFix ค่า "Prophet Plancode"กั้น CSV ด้วย ","51213ChannelFix TextFix ค่า "Channel"กั้น CSV ด้วย ","51314Revenue center/Cost centerFix TextFix ค่า "Revenue center/Cost center"กั้น CSV ด้วย ","51415Branch(ต้นสังกัด)Fix TextFix ค่า "Branch(ต้นสังกัด)"กั้น CSV ด้วย ","51516Branch(service)Fix TextFix ค่า "Branch(service)"กั้น CSV ด้วย ","51617Business lineFix TextFix ค่า "Business line"กั้น CSV ด้วย ","51718Document numberFix TextFix ค่า "Document number"กั้น CSV ด้วย ","51819Type รับ/จ่ายFix TextFix ค่า "Type รับ/จ่าย"กั้น CSV ด้วย ","51920Claim register dateFix TextFix ค่า "Claim register date"กั้น CSV ด้วย ","52021Claim Register number/Claim numberFix TextFix ค่า "Claim Register number/Claim number"กั้น CSV ด้วย ","52122Claim typeFix TextFix ค่า "Claim type"กั้น CSV ด้วย ","52223Receive_Payment ChannelFix TextFix ค่า "Receive_Payment Channel"กั้น CSV ด้วย ","52324Type of Receive_PaymentFix TextFix ค่า "Type of Receive_Payment"กั้น CSV ด้วย ","52425เลขที่รับฝากFix TextFix ค่า "เลขที่รับฝาก"กั้น CSV ด้วย ","52526เลขที่ใบนำส่งFix TextFix ค่า "เลขที่ใบนำส่ง"กั้น CSV ด้วย ","52627เลขบัญชีธนาคารFix TextFix ค่า "เลขบัญชีธนาคาร"กั้น CSV ด้วย ","52728Agent code/Broker code/Employee code/Vendor/Treaty codeFix TextFix ค่า "Agent code/Broker code/Employee code/Vendor/Treaty code"กั้น CSV ด้วย ","52829ULFix TextFix ค่า "UL"กั้น CSV ด้วย ","52930LoanFix TextFix ค่า "Loan"กั้น CSV ด้วย ","53031Project NumberFix TextFix ค่า "Project Number"กั้น CSV ด้วย ","53132Voucher numberFix TextFix ค่า "Voucher number"กั้น CSV ด้วย ","53233BundleFix TextFix ค่า "Bundle"กั้น CSV ด้วย ","53334Reverse NumberFix TextFix ค่า "Reverse Number"กั้น CSV ด้วย ","53435Cheque noFix TextFix ค่า "Cheque no"กั้น CSV ด้วย ","53536Event CodeFix TextFix ค่า "Event Code"กั้น CSV ด้วย ","53637Sales Channel CodeFix TextFix ค่า "Sales Channel Code"กั้น CSV ด้วย ","53738Premium Due DateFix TextFix ค่า "Premium Due Date"กั้น CSV ด้วย ","53839Effective Date(Issue Date)Fix TextFix ค่า "Effective Date(Issue Date)"กั้น CSV ด้วย ","53940Current (Actual) Sum AssuredFix TextFix ค่า "Current (Actual) Sum Assured"กั้น CSV ด้วย ","54041Mode of PaymentFix TextFix ค่า "Mode of Payment"กั้น CSV ด้วย ","54142Annual PremiumFix TextFix ค่า "Annual Premium"กั้น CSV ด้วย ","54243Modal PremiumFix TextFix ค่า "Modal Premium"กั้น CSV ด้วย ","54344Premium TypeFix TextFix ค่า "Premium Type"กั้น CSV ด้วย ","54445Claim Event DateFix TextFix ค่า "Claim Event Date"กั้น CSV ด้วย ","54546Claim Reported DateFix TextFix ค่า "Claim Reported Date"กั้น CSV ด้วย ","54647Claim statusFix TextFix ค่า "Claim status"กั้น CSV ด้วย ","54748Approved DateFix TextFix ค่า "Approved Date"กั้น CSV ด้วย ","54849Claim Paid DateFix TextFix ค่า "Claim Paid Date"กั้น CSV ด้วย ","54950Investment ComponentFix TextFix ค่า "Investment Component"กั้น CSV ด้วย ","55051Paid DateFix TextFix ค่า "Paid Date"กั้น CSV ด้วย ","55152ULAlterationIDFix TextFix ค่า "ULAlterationID"กั้น CSV ด้วย ","55253AVatDeathEventFix TextFix ค่า "AVatDeathEvent"กั้น CSV ด้วย ","55354SurrenderChargeAtDeathEventFix TextFix ค่า "SurrenderChargeAtDeathEvent"กั้น CSV ด้วย ","55455SurrenderValueFix TextFix ค่า "SurrenderValue"กั้น CSV ด้วย ","55556PolicyYearFix TextFix ค่า "PolicyYear"กั้น CSV ด้วย ","55657EndOfCoverageDateFix TextFix ค่า "EndOfCoverageDate"กั้น CSV ด้วย ","55758PayFromFix TextFix ค่า "PayFrom"กั้น CSV ด้วย ","55859PayToFix TextFix ค่า "PayTo"กั้น CSV ด้วย ","55960InvoiceDateFix TextFix ค่า "InvoiceDate"กั้น CSV ด้วย ","56061NoOfMemberFix TextFix ค่า "NoOfMember"กั้น CSV ด้วย ","56162Commission OV TypeFix TextFix ค่า "Commission OV Type"กั้น CSV ด้วย ","56263SaleOptionFix TextFix ค่า "SaleOption"กั้น CSV ด้วย ","56364ActualPremiumAmountLifeFix TextFix ค่า "ActualPremiumAmountLife"กั้น CSV ด้วย ","56465ActualPremiumAmountAccidentDeathFix TextFix ค่า "ActualPremiumAmountAccidentDeath"กั้น CSV ด้วย ","56566ActualPremiumAmountMedAccidentFix TextFix ค่า "ActualPremiumAmountMedAccident"กั้น CSV ด้วย ","56667ActualPremiumAmountTPDFix TextFix ค่า "ActualPremiumAmountTPD"กั้น CSV ด้วย ","56768ActualPremiumAmountIPDFix TextFix ค่า "ActualPremiumAmountIPD"กั้น CSV ด้วย ","56869ActualPremiumAmountOPDFix TextFix ค่า "ActualPremiumAmountOPD"กั้น CSV ด้วย ","56970ActualPremiumAmountDentalFix TextFix ค่า "ActualPremiumAmountDental"กั้น CSV ด้วย ","57071ActualPremiumAmountOtherFix TextFix ค่า "ActualPremiumAmountOther"กั้น CSV ด้วย ","57172ActualCommissionAmountLifeFix TextFix ค่า "ActualCommissionAmountLife"กั้น CSV ด้วย ","57273ActualCommissionAmountAccidentDeathFix TextFix ค่า "ActualCommissionAmountAccidentDeath"กั้น CSV ด้วย ","57374ActualCommissionAmountMedAccidentFix TextFix ค่า "ActualCommissionAmountMedAccident"กั้น CSV ด้วย ","57475ActualCommissionAmountTPDFix TextFix ค่า "ActualCommissionAmountTPD"กั้น CSV ด้วย ","57576ActualCommissionAmountIPDFix TextFix ค่า "ActualCommissionAmountIPD"กั้น CSV ด้วย ","57677ActualCommissionAmountOPDFix TextFix ค่า "ActualCommissionAmountOPD"กั้น CSV ด้วย ","57778ActualCommissionAmountDentalFix TextFix ค่า "ActualCommissionAmountDental"กั้น CSV ด้วย ","57879ActualCommissionAmountOtherFix TextFix ค่า "ActualCommissionAmountOther"กั้น CSV ด้วย ","57980CertificateNoFix TextFix ค่า "CertificateNo"กั้น CSV ด้วย ","58081AgeFix TextFix ค่า "Age"กั้น CSV ด้วย ","58182SexFix TextFix ค่า "Sex"กั้น CSV ด้วย ","58283PaidAmountLifeFix TextFix ค่า "PaidAmountLife"กั้น CSV ด้วย ","58384PaidAmountAccidentDeathFix TextFix ค่า "PaidAmountAccidentDeath"กั้น CSV ด้วย ","58485PaidAmountMedAccidentFix TextFix ค่า "PaidAmountMedAccident"กั้น CSV ด้วย ","58586PaidAmountTPDFix TextFix ค่า "PaidAmountTPD"กั้น CSV ด้วย ","58687PaidAmountIPDFix TextFix ค่า "PaidAmountIPD"กั้น CSV ด้วย ","58788PaidAmountOPDFix TextFix ค่า "PaidAmountOPD"กั้น CSV ด้วย ","58889PaidAmountDentalFix TextFix ค่า "PaidAmountDental"กั้น CSV ด้วย ","58990PaidAmountOtherFix TextFix ค่า "PaidAmountOther"กั้น CSV ด้วย ","59091ReturnPremiumFix TextFix ค่า "ReturnPremium"กั้น CSV ด้วย ","59192ReportTypeFix TextFix ค่า "ReportType"กั้น CSV ด้วย ","59293ReinsurerFix TextFix ค่า "Reinsurer"กั้น CSV ด้วย ","59394TreatyCodeFix TextFix ค่า "TreatyCode"กั้น CSV ด้วย ","59495RI Account nameFix TextFix ค่า "RI Account name"กั้น CSV ด้วย ","59596ForeignLocalFix TextFix ค่า "ForeignLocal"กั้น CSV ด้วย ","59697RIModeOfPaymentFix TextFix ค่า "RIModeOfPayment"กั้น CSV ด้วย ","59798RIMethodFix TextFix ค่า "RIMethod"กั้น CSV ด้วย ","59899FacultativeFix TextFix ค่า "Facultative"กั้น CSV ด้วย ","599100Partner CodeFix TextFix ค่า "Partner Code"กั้น CSV ด้วย ","5100101Benefit TypeFix TextFix ค่า "Benefit Type"กั้น CSV ด้วย ","5101102Commencement DateFix TextFix ค่า "Commencement Date"กั้น CSV ด้วย ","5102103RI Claim StatusFix TextFix ค่า "RI Claim Status"กั้น CSV ด้วย ","5103104Approval DateFix TextFix ค่า "Approval Date"กั้น CSV ด้วย ","5104105RI Commencement DateFix TextFix ค่า "RI Commencement Date"กั้น CSV ด้วย ","5105106Total NARFix TextFix ค่า "Total NAR"กั้น CSV ด้วย ","5106107Total SRFix TextFix ค่า "Total SR"กั้น CSV ด้วย ","5107108RI TypeFix TextFix ค่า "RI Type"กั้น CSV ด้วย ","5108**Report Detail**การ Sorting ข้อมูลตามลำดับดังนี้1Posting KeyDynamic TextPosting Key จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป12Posting DateDynamic TextPosting Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป23PeriodDynamic TextPeriod จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป34Account codeDynamic TextAccount code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป45Account nameDynamic TextAccount name จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป56Policy NumberDynamic TextPolicy Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป67AmountDynamic TextAmount จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป78Receive Date / Payment DateDynamic TextReceive Date / Payment Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป89Policy Due DateDynamic TextPolicy Due Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป910Plan codeDynamic TextPlan code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1011Base/RiderDynamic TextBase/Rider จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1112Prophet PlancodeDynamic TextProphet Plancode จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1213ChannelDynamic TextChannel จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1314Revenue center/Cost centerDynamic TextRevenue center/Cost center จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1415Branch(ต้นสังกัด)Dynamic TextBranch(ต้นสังกัด) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1516Branch(service)Dynamic TextBranch(service) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1617Business lineDynamic TextBusiness line จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1718Document numberDynamic TextDocument number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1819Type รับ/จ่ายDynamic TextType รับ/จ่าย จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป1920Claim register dateDynamic TextClaim register date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2021Claim Register number/Claim numberDynamic TextClaim Register number/Claim number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2122Claim typeDynamic TextClaim type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2223Receive_Payment ChannelDynamic TextReceive_Payment Channel จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2324Type of Receive_PaymentDynamic TextType of Receive_Payment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2425เลขที่รับฝากDynamic Textเลขที่รับฝาก จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2526เลขที่ใบนำส่งDynamic Textเลขที่ใบนำส่ง จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2627เลขบัญชีธนาคารDynamic Textเลขบัญชีธนาคาร จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2728Agent code/Broker code/Employee code/Vendor/Treaty codeDynamic TextAgent code/Broker code/Employee code/Vendor/Treaty code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2829ULDynamic TextUL จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป2930LoanDynamic TextLoan จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3031Project NumberDynamic TextProject Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3132Voucher numberDynamic TextVoucher number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3233BundleDynamic TextBundle จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3334Reverse NumberDynamic TextReverse Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3435Cheque noDynamic TextCheque no จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3536Event CodeDynamic TextEvent Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3637Sales Channel CodeDynamic TextSales Channel Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3738Premium Due DateDynamic TextPremium Due Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3839Effective Date(Issue Date)Dynamic TextEffective Date(Issue Date) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป3940Current (Actual) Sum AssuredDynamic TextCurrent (Actual) Sum Assured จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป4041Mode of PaymentDynamic TextMode of Payment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป4142Annual PremiumDynamic TextAnnual Premium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป4243Modal PremiumDynamic TextModal Premium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป4344Premium TypeDynamic TextPremium Type จากข้อมูลที่ได้กั้น CSV ด้วย ","6 เป็นต้นไป4445Claim Event DateDynamic TextClaim Event Date จากข้อมูลที่ได้กั้น CSV ด้วย ","6 เป็นต้นไป4546Claim Reported DateDynamic TextClaim Reported Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป4647 Claim statusDynamic TextClaim status จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป47 48 Approved DateDynamic TextApproved Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป48 49 Claim Paid DateDynamic TextClaim Paid Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป49 50 Investment ComponentDynamic TextInvestment Component จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป50 51Paid DateDynamic TextPaid Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป51 52 ULAlterationIDDynamic TextULAlterationID จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป52 53 AVatDeathEventDynamic TextAVatDeathEvent จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป53 54 SurrenderChargeAtDeathEventDynamic TextSurrenderChargeAtDeathEvent จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป54 55 SurrenderValueDynamic TextSurrenderValue จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป55 56PolicyYearDynamic TextPolicyYear จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป56 57 EndOfCoverageDateDynamic TextEndOfCoverageDate จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป57 58 PayFromDynamic TextPayFrom จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป58 59PayToDynamic TextPayTo จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป59 60 InvoiceDateDynamic TextInvoiceDate จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป60 61 NoOfMemberDynamic TextNoOfMember จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป6162 Commission OV TypeDynamic TextCommission OV Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป62 63 SaleOptionDynamic TextSaleOption จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป63 64 ActualPremiumAmountLifeDynamic TextActualPremiumAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป64 65ActualPremiumAmountAccidentDeathDynamic TextActualPremiumAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป65 66 ActualPremiumAmountMedAccidentDynamic TextActualPremiumAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป6667 ActualPremiumAmountTPDDynamic TextActualPremiumAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป67 68 ActualPremiumAmountIPDDynamic TextActualPremiumAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป68 69 ActualPremiumAmountOPDDynamic TextActualPremiumAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป69 70 ActualPremiumAmountDentalDynamic TextActualPremiumAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป70 71 ActualPremiumAmountOtherDynamic TextActualPremiumAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป7172 ActualCommissionAmountLifeDynamic TextActualCommissionAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป72 73 ActualCommissionAmountAccidentDeathDynamic TextActualCommissionAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป73 74 ActualCommissionAmountMedAccidentDynamic TextActualCommissionAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป74 75 ActualCommissionAmountTPDDynamic TextActualCommissionAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป75 76 ActualCommissionAmountIPDDynamic TextActualCommissionAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป7677ActualCommissionAmountOPDDynamic TextActualCommissionAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป77 78ActualCommissionAmountDentalDynamic TextActualCommissionAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป78 79ActualCommissionAmountOtherDynamic TextActualCommissionAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป79 80CertificateNoDynamic TextCertificateNo จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป8081AgeDynamic TextAge จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป81 82SexDynamic TextSex จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป8283PaidAmountLifeDynamic TextPaidAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป83 84PaidAmountAccidentDeathDynamic TextPaidAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป84 85PaidAmountMedAccidentDynamic TextPaidAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป85 86PaidAmountTPDDynamic TextPaidAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป86 87 PaidAmountIPDDynamic TextPaidAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป87 88PaidAmountOPDDynamic TextPaidAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป88 89PaidAmountDentalDynamic TextPaidAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป89 90PaidAmountOtherDynamic TextPaidAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป90 91ReturnPremiumDynamic TextReturnPremium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป91 92ReportTypeDynamic TextReportType จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป92 93ReinsurerDynamic TextReinsurer จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป9394TreatyCodeDynamic TextTreatyCode จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป9495RI Account nameDynamic TextRI Account name จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป9596ForeignLocalDynamic TextForeignLocal จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป96 97RIModeOfPaymentDynamic TextRIModeOfPayment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป9798RIMethodDynamic TextRIMethod จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป9899FacultativeDynamic TextFacultative จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป99 100Partner CodeDynamic TextPartner Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป100 101Benefit TypeDynamic TextBenefit Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป101102Commencement DateDynamic TextCommencement Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป102103RI Claim StatusDynamic TextRI Claim Status จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป103104Approval DateDynamic TextApproval Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป104 105RI Commencement DateDynamic TextRI Commencement Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป105 106Total NARDynamic TextTotal NAR จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป106 107Total SRDynamic TextTotal SR จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย ","6 เป็นต้นไป107108RI TypeDynamic TextRI Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย ","6 เป็นต้นไป108 | ทำการเปิด File ที่ได้จากการเรียก [WS สำหรับดึงข้อมูล EDW Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1287946281) โดยส่ง Input ดังนี้ --> ปรับแก้ส่ง Parameter เพิ่มเติม ariya.pi 01/12/2568NameDescriptionValuereferenceNumberReference Number ของ EDW[tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).reference_numberuserNameusername ผู้ใช้งานLogin UseruserFullNameชื่อ-นามสกุลผู้ดึงข้อมูลชื่อของ Login UsersystemNameระบบที่ดึงข้อมูลFix "CENPAY"โดยจะ แสดงรูปแบบ File CSV ตามที่ระบุไว้ใน SRS |
| **No.** | **Component Name/Field Name** | **Type** | **Description/ข้อมูลที่จะใส่ใน field** | **Row Position** | **Column Position****** |
| **Report Header 1** |
| 1 | รายการธุรกรรม : | Dynamic Text | Fix ค่า "รายการธุรกรรม : " และแทนค่าด้วย กลุ่มธุรกรรมย่อย | 1 | 1 |
| 2 | คำอธิบายรายการ : | Dynamic Text | Fix ค่า "คำอธิบายรายการ : " และแทนค่าด้วย ข้อมูลคำอธิบายรายการ ถ้ามี ถ้าไม่มีให้แทนค่าด้วย "-" | 2 | 1 |
| 3 | ผู้พิมพ์ : User Login Name | Dynamic Text | Fix ค่า "ผู้พิมพ์ : "แสดงข้อความ "ผู้พิมพ์เอกสาร : " และ แทนค่าด้วย User Login Nameชิดซ้ายรูปแบบการจัดวางตำแหน่งอ้างอิงตาม: รูปแบบไฟล์ข้อมูล csvตัวอย่าง ผู้พิมพ์ : Boss | 3 | 1 |
| 4 | วันที่ : DD/MM/YYYY เวลา : HH:MM:SS น. | Dynamic Text | Fix ค่า "วันที่ : ", "เวลา : " และ "น."แสดงวันที่สั่งพิมพ์รายงาน "วันที่ : " และ แทนค่า "DD/MM/YYYY" ด้วย System Dateแสดงข้อความ "เวลา : " และ แทนค่า "HH.MM.SS" ด้วย System Time และ แสดงข้อความ "น."ชิดซ้ายรูปแบบการจัดวางตำแหน่งอ้างอิงตาม: รูปแบบไฟล์ข้อมูล csvตัวอย่าง วันที่พิมพ์เอกสาร : 01/08/2568 เวลา : 09:55:13 น. | 4 | 1 |
| **Report Header 2** |
| 1 | Posting Key | Fix Text | Fix ค่า "Posting Key"กั้น CSV ด้วย "," | 5 | 1 |
| 2 | Posting Date | Fix Text | Fix ค่า "Posting Date"กั้น CSV ด้วย "," | 5 | 2 |
| 3 | Period | Fix Text | Fix ค่า "Period"กั้น CSV ด้วย "," | 5 | 3 |
| 4 | Account code | Fix Text | Fix ค่า "Account code"กั้น CSV ด้วย "," | 5 | 4 |
| 5 | Account name | Fix Text | Fix ค่า "Account name"กั้น CSV ด้วย "," | 5 | 5 |
| 6 | Policy Number | Fix Text | Fix ค่า "Policy Number"กั้น CSV ด้วย "," | 5 | 6 |
| 7 | Amount | Fix Text | Fix ค่า "Amount"กั้น CSV ด้วย "," | 5 | 7 |
| 8 | Receive Date / Payment Date | Fix Text | Fix ค่า "Receive Date / Payment Date"กั้น CSV ด้วย "," | 5 | 8 |
| 9 | Policy Due Date | Fix Text | Fix ค่า "Policy Due Date"กั้น CSV ด้วย "," | 5 | 9 |
| 10 | Plan code | Fix Text | Fix ค่า "Plan code"กั้น CSV ด้วย "," | 5 | 10 |
| 11 | Base/Rider | Fix Text | Fix ค่า "Base/Rider"กั้น CSV ด้วย "," | 5 | 11 |
| 12 | Prophet Plancode | Fix Text | Fix ค่า "Prophet Plancode"กั้น CSV ด้วย "," | 5 | 12 |
| 13 | Channel | Fix Text | Fix ค่า "Channel"กั้น CSV ด้วย "," | 5 | 13 |
| 14 | Revenue center/Cost center | Fix Text | Fix ค่า "Revenue center/Cost center"กั้น CSV ด้วย "," | 5 | 14 |
| 15 | Branch(ต้นสังกัด) | Fix Text | Fix ค่า "Branch(ต้นสังกัด)"กั้น CSV ด้วย "," | 5 | 15 |
| 16 | Branch(service) | Fix Text | Fix ค่า "Branch(service)"กั้น CSV ด้วย "," | 5 | 16 |
| 17 | Business line | Fix Text | Fix ค่า "Business line"กั้น CSV ด้วย "," | 5 | 17 |
| 18 | Document number | Fix Text | Fix ค่า "Document number"กั้น CSV ด้วย "," | 5 | 18 |
| 19 | Type รับ/จ่าย | Fix Text | Fix ค่า "Type รับ/จ่าย"กั้น CSV ด้วย "," | 5 | 19 |
| 20 | Claim register date | Fix Text | Fix ค่า "Claim register date"กั้น CSV ด้วย "," | 5 | 20 |
| 21 | Claim Register number/Claim number | Fix Text | Fix ค่า "Claim Register number/Claim number"กั้น CSV ด้วย "," | 5 | 21 |
| 22 | Claim type | Fix Text | Fix ค่า "Claim type"กั้น CSV ด้วย "," | 5 | 22 |
| 23 | Receive_Payment Channel | Fix Text | Fix ค่า "Receive_Payment Channel"กั้น CSV ด้วย "," | 5 | 23 |
| 24 | Type of Receive_Payment | Fix Text | Fix ค่า "Type of Receive_Payment"กั้น CSV ด้วย "," | 5 | 24 |
| 25 | เลขที่รับฝาก | Fix Text | Fix ค่า "เลขที่รับฝาก"กั้น CSV ด้วย "," | 5 | 25 |
| 26 | เลขที่ใบนำส่ง | Fix Text | Fix ค่า "เลขที่ใบนำส่ง"กั้น CSV ด้วย "," | 5 | 26 |
| 27 | เลขบัญชีธนาคาร | Fix Text | Fix ค่า "เลขบัญชีธนาคาร"กั้น CSV ด้วย "," | 5 | 27 |
| 28 | Agent code/Broker code/Employee code/Vendor/Treaty code | Fix Text | Fix ค่า "Agent code/Broker code/Employee code/Vendor/Treaty code"กั้น CSV ด้วย "," | 5 | 28 |
| 29 | UL | Fix Text | Fix ค่า "UL"กั้น CSV ด้วย "," | 5 | 29 |
| 30 | Loan | Fix Text | Fix ค่า "Loan"กั้น CSV ด้วย "," | 5 | 30 |
| 31 | Project Number | Fix Text | Fix ค่า "Project Number"กั้น CSV ด้วย "," | 5 | 31 |
| 32 | Voucher number | Fix Text | Fix ค่า "Voucher number"กั้น CSV ด้วย "," | 5 | 32 |
| 33 | Bundle | Fix Text | Fix ค่า "Bundle"กั้น CSV ด้วย "," | 5 | 33 |
| 34 | Reverse Number | Fix Text | Fix ค่า "Reverse Number"กั้น CSV ด้วย "," | 5 | 34 |
| 35 | Cheque no | Fix Text | Fix ค่า "Cheque no"กั้น CSV ด้วย "," | 5 | 35 |
| 36 | Event Code | Fix Text | Fix ค่า "Event Code"กั้น CSV ด้วย "," | 5 | 36 |
| 37 | Sales Channel Code | Fix Text | Fix ค่า "Sales Channel Code"กั้น CSV ด้วย "," | 5 | 37 |
| 38 | Premium Due Date | Fix Text | Fix ค่า "Premium Due Date"กั้น CSV ด้วย "," | 5 | 38 |
| 39 | Effective Date(Issue Date) | Fix Text | Fix ค่า "Effective Date(Issue Date)"กั้น CSV ด้วย "," | 5 | 39 |
| 40 | Current (Actual) Sum Assured | Fix Text | Fix ค่า "Current (Actual) Sum Assured"กั้น CSV ด้วย "," | 5 | 40 |
| 41 | Mode of Payment | Fix Text | Fix ค่า "Mode of Payment"กั้น CSV ด้วย "," | 5 | 41 |
| 42 | Annual Premium | Fix Text | Fix ค่า "Annual Premium"กั้น CSV ด้วย "," | 5 | 42 |
| 43 | Modal Premium | Fix Text | Fix ค่า "Modal Premium"กั้น CSV ด้วย "," | 5 | 43 |
| 44 | Premium Type | Fix Text | Fix ค่า "Premium Type"กั้น CSV ด้วย "," | 5 | 44 |
| 45 | Claim Event Date | Fix Text | Fix ค่า "Claim Event Date"กั้น CSV ด้วย "," | 5 | 45 |
| 46 | Claim Reported Date | Fix Text | Fix ค่า "Claim Reported Date"กั้น CSV ด้วย "," | 5 | 46 |
| 47 | Claim status | Fix Text | Fix ค่า "Claim status"กั้น CSV ด้วย "," | 5 | 47 |
| 48 | Approved Date | Fix Text | Fix ค่า "Approved Date"กั้น CSV ด้วย "," | 5 | 48 |
| 49 | Claim Paid Date | Fix Text | Fix ค่า "Claim Paid Date"กั้น CSV ด้วย "," | 5 | 49 |
| 50 | Investment Component | Fix Text | Fix ค่า "Investment Component"กั้น CSV ด้วย "," | 5 | 50 |
| 51 | Paid Date | Fix Text | Fix ค่า "Paid Date"กั้น CSV ด้วย "," | 5 | 51 |
| 52 | ULAlterationID | Fix Text | Fix ค่า "ULAlterationID"กั้น CSV ด้วย "," | 5 | 52 |
| 53 | AVatDeathEvent | Fix Text | Fix ค่า "AVatDeathEvent"กั้น CSV ด้วย "," | 5 | 53 |
| 54 | SurrenderChargeAtDeathEvent | Fix Text | Fix ค่า "SurrenderChargeAtDeathEvent"กั้น CSV ด้วย "," | 5 | 54 |
| 55 | SurrenderValue | Fix Text | Fix ค่า "SurrenderValue"กั้น CSV ด้วย "," | 5 | 55 |
| 56 | PolicyYear | Fix Text | Fix ค่า "PolicyYear"กั้น CSV ด้วย "," | 5 | 56 |
| 57 | EndOfCoverageDate | Fix Text | Fix ค่า "EndOfCoverageDate"กั้น CSV ด้วย "," | 5 | 57 |
| 58 | PayFrom | Fix Text | Fix ค่า "PayFrom"กั้น CSV ด้วย "," | 5 | 58 |
| 59 | PayTo | Fix Text | Fix ค่า "PayTo"กั้น CSV ด้วย "," | 5 | 59 |
| 60 | InvoiceDate | Fix Text | Fix ค่า "InvoiceDate"กั้น CSV ด้วย "," | 5 | 60 |
| 61 | NoOfMember | Fix Text | Fix ค่า "NoOfMember"กั้น CSV ด้วย "," | 5 | 61 |
| 62 | Commission OV Type | Fix Text | Fix ค่า "Commission OV Type"กั้น CSV ด้วย "," | 5 | 62 |
| 63 | SaleOption | Fix Text | Fix ค่า "SaleOption"กั้น CSV ด้วย "," | 5 | 63 |
| 64 | ActualPremiumAmountLife | Fix Text | Fix ค่า "ActualPremiumAmountLife"กั้น CSV ด้วย "," | 5 | 64 |
| 65 | ActualPremiumAmountAccidentDeath | Fix Text | Fix ค่า "ActualPremiumAmountAccidentDeath"กั้น CSV ด้วย "," | 5 | 65 |
| 66 | ActualPremiumAmountMedAccident | Fix Text | Fix ค่า "ActualPremiumAmountMedAccident"กั้น CSV ด้วย "," | 5 | 66 |
| 67 | ActualPremiumAmountTPD | Fix Text | Fix ค่า "ActualPremiumAmountTPD"กั้น CSV ด้วย "," | 5 | 67 |
| 68 | ActualPremiumAmountIPD | Fix Text | Fix ค่า "ActualPremiumAmountIPD"กั้น CSV ด้วย "," | 5 | 68 |
| 69 | ActualPremiumAmountOPD | Fix Text | Fix ค่า "ActualPremiumAmountOPD"กั้น CSV ด้วย "," | 5 | 69 |
| 70 | ActualPremiumAmountDental | Fix Text | Fix ค่า "ActualPremiumAmountDental"กั้น CSV ด้วย "," | 5 | 70 |
| 71 | ActualPremiumAmountOther | Fix Text | Fix ค่า "ActualPremiumAmountOther"กั้น CSV ด้วย "," | 5 | 71 |
| 72 | ActualCommissionAmountLife | Fix Text | Fix ค่า "ActualCommissionAmountLife"กั้น CSV ด้วย "," | 5 | 72 |
| 73 | ActualCommissionAmountAccidentDeath | Fix Text | Fix ค่า "ActualCommissionAmountAccidentDeath"กั้น CSV ด้วย "," | 5 | 73 |
| 74 | ActualCommissionAmountMedAccident | Fix Text | Fix ค่า "ActualCommissionAmountMedAccident"กั้น CSV ด้วย "," | 5 | 74 |
| 75 | ActualCommissionAmountTPD | Fix Text | Fix ค่า "ActualCommissionAmountTPD"กั้น CSV ด้วย "," | 5 | 75 |
| 76 | ActualCommissionAmountIPD | Fix Text | Fix ค่า "ActualCommissionAmountIPD"กั้น CSV ด้วย "," | 5 | 76 |
| 77 | ActualCommissionAmountOPD | Fix Text | Fix ค่า "ActualCommissionAmountOPD"กั้น CSV ด้วย "," | 5 | 77 |
| 78 | ActualCommissionAmountDental | Fix Text | Fix ค่า "ActualCommissionAmountDental"กั้น CSV ด้วย "," | 5 | 78 |
| 79 | ActualCommissionAmountOther | Fix Text | Fix ค่า "ActualCommissionAmountOther"กั้น CSV ด้วย "," | 5 | 79 |
| 80 | CertificateNo | Fix Text | Fix ค่า "CertificateNo"กั้น CSV ด้วย "," | 5 | 80 |
| 81 | Age | Fix Text | Fix ค่า "Age"กั้น CSV ด้วย "," | 5 | 81 |
| 82 | Sex | Fix Text | Fix ค่า "Sex"กั้น CSV ด้วย "," | 5 | 82 |
| 83 | PaidAmountLife | Fix Text | Fix ค่า "PaidAmountLife"กั้น CSV ด้วย "," | 5 | 83 |
| 84 | PaidAmountAccidentDeath | Fix Text | Fix ค่า "PaidAmountAccidentDeath"กั้น CSV ด้วย "," | 5 | 84 |
| 85 | PaidAmountMedAccident | Fix Text | Fix ค่า "PaidAmountMedAccident"กั้น CSV ด้วย "," | 5 | 85 |
| 86 | PaidAmountTPD | Fix Text | Fix ค่า "PaidAmountTPD"กั้น CSV ด้วย "," | 5 | 86 |
| 87 | PaidAmountIPD | Fix Text | Fix ค่า "PaidAmountIPD"กั้น CSV ด้วย "," | 5 | 87 |
| 88 | PaidAmountOPD | Fix Text | Fix ค่า "PaidAmountOPD"กั้น CSV ด้วย "," | 5 | 88 |
| 89 | PaidAmountDental | Fix Text | Fix ค่า "PaidAmountDental"กั้น CSV ด้วย "," | 5 | 89 |
| 90 | PaidAmountOther | Fix Text | Fix ค่า "PaidAmountOther"กั้น CSV ด้วย "," | 5 | 90 |
| 91 | ReturnPremium | Fix Text | Fix ค่า "ReturnPremium"กั้น CSV ด้วย "," | 5 | 91 |
| 92 | ReportType | Fix Text | Fix ค่า "ReportType"กั้น CSV ด้วย "," | 5 | 92 |
| 93 | Reinsurer | Fix Text | Fix ค่า "Reinsurer"กั้น CSV ด้วย "," | 5 | 93 |
| 94 | TreatyCode | Fix Text | Fix ค่า "TreatyCode"กั้น CSV ด้วย "," | 5 | 94 |
| 95 | RI Account name | Fix Text | Fix ค่า "RI Account name"กั้น CSV ด้วย "," | 5 | 95 |
| 96 | ForeignLocal | Fix Text | Fix ค่า "ForeignLocal"กั้น CSV ด้วย "," | 5 | 96 |
| 97 | RIModeOfPayment | Fix Text | Fix ค่า "RIModeOfPayment"กั้น CSV ด้วย "," | 5 | 97 |
| 98 | RIMethod | Fix Text | Fix ค่า "RIMethod"กั้น CSV ด้วย "," | 5 | 98 |
| 99 | Facultative | Fix Text | Fix ค่า "Facultative"กั้น CSV ด้วย "," | 5 | 99 |
| 100 | Partner Code | Fix Text | Fix ค่า "Partner Code"กั้น CSV ด้วย "," | 5 | 100 |
| 101 | Benefit Type | Fix Text | Fix ค่า "Benefit Type"กั้น CSV ด้วย "," | 5 | 101 |
| 102 | Commencement Date | Fix Text | Fix ค่า "Commencement Date"กั้น CSV ด้วย "," | 5 | 102 |
| 103 | RI Claim Status | Fix Text | Fix ค่า "RI Claim Status"กั้น CSV ด้วย "," | 5 | 103 |
| 104 | Approval Date | Fix Text | Fix ค่า "Approval Date"กั้น CSV ด้วย "," | 5 | 104 |
| 105 | RI Commencement Date | Fix Text | Fix ค่า "RI Commencement Date"กั้น CSV ด้วย "," | 5 | 105 |
| 106 | Total NAR | Fix Text | Fix ค่า "Total NAR"กั้น CSV ด้วย "," | 5 | 106 |
| 107 | Total SR | Fix Text | Fix ค่า "Total SR"กั้น CSV ด้วย "," | 5 | 107 |
| 108 | RI Type | Fix Text | Fix ค่า "RI Type"กั้น CSV ด้วย "," | 5 | 108 |
| **Report Detail** |
| การ Sorting ข้อมูลตามลำดับดังนี้ |
| 1 | Posting Key | Dynamic Text | Posting Key จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 1 |
| 2 | Posting Date | Dynamic Text | Posting Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 2 |
| 3 | Period | Dynamic Text | Period จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 3 |
| 4 | Account code | Dynamic Text | Account code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 4 |
| 5 | Account name | Dynamic Text | Account name จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 5 |
| 6 | Policy Number | Dynamic Text | Policy Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 6 |
| 7 | Amount | Dynamic Text | Amount จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 7 |
| 8 | Receive Date / Payment Date | Dynamic Text | Receive Date / Payment Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 8 |
| 9 | Policy Due Date | Dynamic Text | Policy Due Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 9 |
| 10 | Plan code | Dynamic Text | Plan code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 10 |
| 11 | Base/Rider | Dynamic Text | Base/Rider จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 11 |
| 12 | Prophet Plancode | Dynamic Text | Prophet Plancode จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 12 |
| 13 | Channel | Dynamic Text | Channel จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 13 |
| 14 | Revenue center/Cost center | Dynamic Text | Revenue center/Cost center จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 14 |
| 15 | Branch(ต้นสังกัด) | Dynamic Text | Branch(ต้นสังกัด) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 15 |
| 16 | Branch(service) | Dynamic Text | Branch(service) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 16 |
| 17 | Business line | Dynamic Text | Business line จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 17 |
| 18 | Document number | Dynamic Text | Document number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 18 |
| 19 | Type รับ/จ่าย | Dynamic Text | Type รับ/จ่าย จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 19 |
| 20 | Claim register date | Dynamic Text | Claim register date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 20 |
| 21 | Claim Register number/Claim number | Dynamic Text | Claim Register number/Claim number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 21 |
| 22 | Claim type | Dynamic Text | Claim type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 22 |
| 23 | Receive_Payment Channel | Dynamic Text | Receive_Payment Channel จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 23 |
| 24 | Type of Receive_Payment | Dynamic Text | Type of Receive_Payment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 24 |
| 25 | เลขที่รับฝาก | Dynamic Text | เลขที่รับฝาก จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 25 |
| 26 | เลขที่ใบนำส่ง | Dynamic Text | เลขที่ใบนำส่ง จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 26 |
| 27 | เลขบัญชีธนาคาร | Dynamic Text | เลขบัญชีธนาคาร จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 27 |
| 28 | Agent code/Broker code/Employee code/Vendor/Treaty code | Dynamic Text | Agent code/Broker code/Employee code/Vendor/Treaty code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 28 |
| 29 | UL | Dynamic Text | UL จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 29 |
| 30 | Loan | Dynamic Text | Loan จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 30 |
| 31 | Project Number | Dynamic Text | Project Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 31 |
| 32 | Voucher number | Dynamic Text | Voucher number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 32 |
| 33 | Bundle | Dynamic Text | Bundle จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 33 |
| 34 | Reverse Number | Dynamic Text | Reverse Number จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 34 |
| 35 | Cheque no | Dynamic Text | Cheque no จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 35 |
| 36 | Event Code | Dynamic Text | Event Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 36 |
| 37 | Sales Channel Code | Dynamic Text | Sales Channel Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 37 |
| 38 | Premium Due Date | Dynamic Text | Premium Due Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 38 |
| 39 | Effective Date(Issue Date) | Dynamic Text | Effective Date(Issue Date) จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 39 |
| 40 | Current (Actual) Sum Assured | Dynamic Text | Current (Actual) Sum Assured จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 40 |
| 41 | Mode of Payment | Dynamic Text | Mode of Payment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 41 |
| 42 | Annual Premium | Dynamic Text | Annual Premium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 42 |
| 43 | Modal Premium | Dynamic Text | Modal Premium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 43 |
| 44 | Premium Type | Dynamic Text | Premium Type จากข้อมูลที่ได้กั้น CSV ด้วย "," | 6 เป็นต้นไป | 44 |
| 45 | Claim Event Date | Dynamic Text | Claim Event Date จากข้อมูลที่ได้กั้น CSV ด้วย "," | 6 เป็นต้นไป | 45 |
| 46 | Claim Reported Date | Dynamic Text | Claim Reported Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 46 |
| 47 | Claim status | Dynamic Text | Claim status จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 47 |
| 48 | Approved Date | Dynamic Text | Approved Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 48 |
| 49 | Claim Paid Date | Dynamic Text | Claim Paid Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 49 |
| 50 | Investment Component | Dynamic Text | Investment Component จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 50 |
| 51 | Paid Date | Dynamic Text | Paid Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 51 |
| 52 | ULAlterationID | Dynamic Text | ULAlterationID จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 52 |
| 53 | AVatDeathEvent | Dynamic Text | AVatDeathEvent จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 53 |
| 54 | SurrenderChargeAtDeathEvent | Dynamic Text | SurrenderChargeAtDeathEvent จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 54 |
| 55 | SurrenderValue | Dynamic Text | SurrenderValue จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 55 |
| 56 | PolicyYear | Dynamic Text | PolicyYear จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 56 |
| 57 | EndOfCoverageDate | Dynamic Text | EndOfCoverageDate จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 57 |
| 58 | PayFrom | Dynamic Text | PayFrom จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 58 |
| 59 | PayTo | Dynamic Text | PayTo จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 59 |
| 60 | InvoiceDate | Dynamic Text | InvoiceDate จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 60 |
| 61 | NoOfMember | Dynamic Text | NoOfMember จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 61 |
| 62 | Commission OV Type | Dynamic Text | Commission OV Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 62 |
| 63 | SaleOption | Dynamic Text | SaleOption จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 63 |
| 64 | ActualPremiumAmountLife | Dynamic Text | ActualPremiumAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 64 |
| 65 | ActualPremiumAmountAccidentDeath | Dynamic Text | ActualPremiumAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 65 |
| 66 | ActualPremiumAmountMedAccident | Dynamic Text | ActualPremiumAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 66 |
| 67 | ActualPremiumAmountTPD | Dynamic Text | ActualPremiumAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 67 |
| 68 | ActualPremiumAmountIPD | Dynamic Text | ActualPremiumAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 68 |
| 69 | ActualPremiumAmountOPD | Dynamic Text | ActualPremiumAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 69 |
| 70 | ActualPremiumAmountDental | Dynamic Text | ActualPremiumAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 70 |
| 71 | ActualPremiumAmountOther | Dynamic Text | ActualPremiumAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 71 |
| 72 | ActualCommissionAmountLife | Dynamic Text | ActualCommissionAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 72 |
| 73 | ActualCommissionAmountAccidentDeath | Dynamic Text | ActualCommissionAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 73 |
| 74 | ActualCommissionAmountMedAccident | Dynamic Text | ActualCommissionAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 74 |
| 75 | ActualCommissionAmountTPD | Dynamic Text | ActualCommissionAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 75 |
| 76 | ActualCommissionAmountIPD | Dynamic Text | ActualCommissionAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 76 |
| 77 | ActualCommissionAmountOPD | Dynamic Text | ActualCommissionAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 77 |
| 78 | ActualCommissionAmountDental | Dynamic Text | ActualCommissionAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 78 |
| 79 | ActualCommissionAmountOther | Dynamic Text | ActualCommissionAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 79 |
| 80 | CertificateNo | Dynamic Text | CertificateNo จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 80 |
| 81 | Age | Dynamic Text | Age จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 81 |
| 82 | Sex | Dynamic Text | Sex จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 82 |
| 83 | PaidAmountLife | Dynamic Text | PaidAmountLife จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 83 |
| 84 | PaidAmountAccidentDeath | Dynamic Text | PaidAmountAccidentDeath จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 84 |
| 85 | PaidAmountMedAccident | Dynamic Text | PaidAmountMedAccident จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 85 |
| 86 | PaidAmountTPD | Dynamic Text | PaidAmountTPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 86 |
| 87 | PaidAmountIPD | Dynamic Text | PaidAmountIPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 87 |
| 88 | PaidAmountOPD | Dynamic Text | PaidAmountOPD จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 88 |
| 89 | PaidAmountDental | Dynamic Text | PaidAmountDental จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 89 |
| 90 | PaidAmountOther | Dynamic Text | PaidAmountOther จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 90 |
| 91 | ReturnPremium | Dynamic Text | ReturnPremium จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 91 |
| 92 | ReportType | Dynamic Text | ReportType จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 92 |
| 93 | Reinsurer | Dynamic Text | Reinsurer จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 93 |
| 94 | TreatyCode | Dynamic Text | TreatyCode จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 94 |
| 95 | RI Account name | Dynamic Text | RI Account name จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 95 |
| 96 | ForeignLocal | Dynamic Text | ForeignLocal จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 96 |
| 97 | RIModeOfPayment | Dynamic Text | RIModeOfPayment จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 97 |
| 98 | RIMethod | Dynamic Text | RIMethod จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 98 |
| 99 | Facultative | Dynamic Text | Facultative จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 99 |
| 100 | Partner Code | Dynamic Text | Partner Code จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 100 |
| 101 | Benefit Type | Dynamic Text | Benefit Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 101 |
| 102 | Commencement Date | Dynamic Text | Commencement Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 102 |
| 103 | RI Claim Status | Dynamic Text | RI Claim Status จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 103 |
| 104 | Approval Date | Dynamic Text | Approval Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 104 |
| 105 | RI Commencement Date | Dynamic Text | RI Commencement Date จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 105 |
| 106 | Total NAR | Dynamic Text | Total NAR จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 106 |
| 107 | Total SR | Dynamic Text | Total SR จากข้อมูลที่ได้จำนวนเงิน ทศนิยม 2 ตำแหน่ง มีการคั่นด้วย "," กรณีมากกว่า 1,000.00กรณีไม่พบข้อมูล ระบุ "0.00"กั้น CSV ด้วย "," | 6 เป็นต้นไป | 107 |
| 108 | RI Type | Dynamic Text | RI Type จากข้อมูลที่ได้กรณีไม่พบข้อมูล ระบุ ""กั้น CSV ด้วย "," | 6 เป็นต้นไป | 108 |
| Name | Description | Value |
| referenceNumber | Reference Number ของ EDW | [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account).reference_number |
| userName | username ผู้ใช้งาน | Login User |
| userFullName | ชื่อ-นามสกุลผู้ดึงข้อมูล | ชื่อของ Login User |
| systemName | ระบบที่ดึงข้อมูล | Fix "CENPAY" |

---

## Hyperlinks บนหน้านี้

- [PC-003-FC-006 หน้าจอ Popup ยืนยันบันทึกรายการอนุมัติเตรียมจ่ายครั้งที่ 2](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252086)
- [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266)
- [WS สำหรับดึงข้อมูล EDW Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1287946281)
- [tx_payment_account](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_account)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1275822316/image2025-8-14%209%3A41%3A55.png?version=1&modificationDate=1755139320135&api=v2
