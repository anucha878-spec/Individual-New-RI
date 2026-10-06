# รายละเอียด problemDetail

- **Page ID:** 1349976936
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1349976936
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Cenpay > WS ส่งข้อมูลไปยังระบบ Case Management > 1.บันทึกประวัติ Case Management > รายละเอียด problemDetail
- **Depth:** 6

---

| CaseCode | Message |
|---|---|
| SUR_REQUEST,FREE_REQUEST**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUEST | คำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงินเวนคืนกรมธรรม์ ${amount} บาท**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**ตรวจสอบ [input.caseCode](#id-รายละเอียดproblemDetail-A_caseCode)กรณี เท่ากับ "SUR_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงินเวนคืนกรมธรรม์ ${amount} บาทกรณี เท่ากับ "FREE_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} ยอดเงิน Free Look ${amount} บาทกรณี เท่ากับ "REP_REQUEST" คำนวณ ณ วันที่ ยื่นคำร้อง ${date} **ยอดเงินผลประโยชน์ค้างรับ** ${amount} บาท |
| SUR_CANCEL, FREE_CANCEL**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_CANCEL | วันที่ยกเลิกคำร้อง ${date} |
| SUR_PAID_SUCCESS,FREE_PAID_SUCCESS,**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**REP_PAID_SUCCESS | คำนวณ ณ วันที่ยื่นคำร้อง ${date} ยอดเงิน${name} ${amount} บาท วันที่จ่าย ${paidDate} เลขที่บัญชี/เลขที่เช็ค ${accountNo} |
| SUR_PAID_FAIL, FREE_PAID_FAIL,**----- Centralize Payment Enhance Phase 2 Add by kanawoot.ou 22/06/2026 ----**REP_PAID_FAIL | วันที่ยื่นคำร้อง ${date} วันที่จ่ายไม่สำเร็จ ${paidDate} เลขที่บัญชี/เลขที่เช็ค ${accountNo} |
