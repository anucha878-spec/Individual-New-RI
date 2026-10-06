# CP-PR-01-BH002-1_1 ส่งข้อมูลเข้าระบบ Case Management

- **Page ID:** 1344701017
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1344701017
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-09 Process Batch > CP-PR-01-BH042 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL > CP-PR-01-BH002-1 พบข้อมูลตามเงื่อนไขการค้นหา > CP-PR-01-BH002-1_1 ส่งข้อมูลเข้าระบบ Case Management
- **Depth:** 7

---

ให้เรียกใช้ [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838) และให้ส่ง Input ดังนี้

| Input | Description | Value |
|---|---|---|
| caseCode | รหัสเหตุการณ์ | ตรวจสอบ Output.statusCodeกรณีเท่ากับ H11 : ปฏิเสธ (Reject) หรือ H20 : ยกเลิก (Cancel) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_CANCEL"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_CANCEL" กรณีเท่ากับ P17 : การจ่ายเงินสำเร็จ (Payment Successful) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_PAID_SUCCESS"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_PAID_SUCCESS" กรณีเท่ากับ P18 : การจ่ายเงินไม่สำเร็จ (Payment failed) ตรวจสอบ Output.alterationTypeกรณี กรณีเท่ากับ 14 (คำร้อง Free Look)ให้ระบุ caseCode = "FREE_PAID_FAIL"กรณี กรณีเท่ากับ 16 (คำร้องเวนคืนกรมธรรม์)ให้ระบุ caseCode = "SUR_PAID_FAIL" |
| requestId | รหัส [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id | [tx_request.id](#CP-PR-01-BH002-1_1ส่งข้อมูลเข้าระบบCaseManagement-A_No2) จากขั้นตอน ดึงข้อมูลคำร้อง |

กรณีส่งข้อมูลคำร้องให้ระบบ Case management ไม่สำเร็จให้ดำเนินการดังนี้
บันทึกข้อมูล Request Problem Tracking โดยใช้ Process [02-05-10_01 บันทึกข้อมูล Problem Tracking](/pages/viewpage.action?pageId=1319601299) และส่ง Input ดังนี้

| Input | value | Desciption |
|---|---|---|
| requestId | [tx_request](#CP-PR-01-BH002-1_1ส่งข้อมูลเข้าระบบCaseManagement-A_No2).id | PK table [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) |
| processCode | Fix "CM" | รหัสอ้างอิง process ที่ดำเนินการไม่สำเร็จ |
| createdBy | Fix "System" | ผู้สร้างข้อมูล |

---

## Hyperlinks บนหน้านี้

- [Process ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [02-05-10_01 บันทึกข้อมูล Problem Tracking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319601299)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
