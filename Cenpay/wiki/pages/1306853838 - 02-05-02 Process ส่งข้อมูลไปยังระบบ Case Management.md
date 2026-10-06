# 02-05-02 Process ส่งข้อมูลไปยังระบบ Case Management

- **Page ID:** 1306853838
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306853838
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Request > 02-05-02 Process ส่งข้อมูลไปยังระบบ Case Management
- **Depth:** 4

---

# **Input**

| Input | Desciption | Example Data |
|---|---|---|
| caseCode | รหัสเหตุการณ์ | เหตุการณ์caseCode**คำร้องเวนคืนกรมธรรม์**รับเรื่องคำร้องเวนคืนกรมธรรม์SUR_REQUESTยกเลิกคำร้องเวนคืนกรมธรรม์SUR_CANCEL**Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026**จ่ายเงิน คำร้องเวนคืนกรมธรรม์ สำเร็จSUR_PAID_SUCCESSจ่ายเงิน คำร้องเวนคืนกรมธรรม์ ไม่สำเร็จSUR_PAID_FAIL**คำร้อง Free Look**รับเรื่องคำร้อง Free LookFREE_REQUESTยกเลิกคำร้อง Free LookFREE_CANCEL**Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026**จ่ายเงินคำร้อง Free Look สำเร็จFREE_PAID_SUCCESSจ่ายเงินคำร้อง Free Look ไม่สำเร็จFREE_PAID_FAIL**Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026****คำร้องขอรับเงินผลประโยชน์ค้างรับ**รับเรื่องคำร้องขอรับเงินผลประโยชน์ค้างรับREP_REQUESTยกเลิกคำร้องขอรับเงินผลประโยชน์ค้างรับREP_CANCEL**Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026**จ่ายเงิน คำร้องขอรับเงินผลประโยชน์ค้างรับ สำเร็จREP_PAID_SUCCESSจ่ายเงิน คำร้องขอรับเงินผลประโยชน์ค้างรับ ไม่สำเร็จREP_PAID_FAIL |
| เหตุการณ์ | caseCode |
| **คำร้องเวนคืนกรมธรรม์** |
| รับเรื่องคำร้องเวนคืนกรมธรรม์ | SUR_REQUEST |
| ยกเลิกคำร้องเวนคืนกรมธรรม์ | SUR_CANCEL |
| **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** |
| จ่ายเงิน คำร้องเวนคืนกรมธรรม์ สำเร็จ | SUR_PAID_SUCCESS |
| จ่ายเงิน คำร้องเวนคืนกรมธรรม์ ไม่สำเร็จ | SUR_PAID_FAIL |
| **คำร้อง Free Look** |
| รับเรื่องคำร้อง Free Look | FREE_REQUEST |
| ยกเลิกคำร้อง Free Look | FREE_CANCEL |
| **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** |
| จ่ายเงินคำร้อง Free Look สำเร็จ | FREE_PAID_SUCCESS |
| จ่ายเงินคำร้อง Free Look ไม่สำเร็จ | FREE_PAID_FAIL |
| **Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026****คำร้องขอรับเงินผลประโยชน์ค้างรับ** |
| รับเรื่องคำร้องขอรับเงินผลประโยชน์ค้างรับ | REP_REQUEST |
| ยกเลิกคำร้องขอรับเงินผลประโยชน์ค้างรับ | REP_CANCEL |
| **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** |
| จ่ายเงิน คำร้องขอรับเงินผลประโยชน์ค้างรับ สำเร็จ | REP_PAID_SUCCESS |
| จ่ายเงิน คำร้องขอรับเงินผลประโยชน์ค้างรับ ไม่สำเร็จ | REP_PAID_FAIL |
| requestId | รหัส [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id | 1 |

# **Process**

1.ค้นหาข้อมูลสำหรับ mapping ดังนี้
- DB: [benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)

| Table | Condition |
|---|---|
| [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request) | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id = @id |
| [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured) | [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).tx_request_id = [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).id |

2. Mapping ข้อมูลสำหรับส่งเข้า [WS ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1324712049)

| Field | Type | Description | Mapping Data |
|---|---|---|---|
| requestId | Int | รหัสอ้างอิง | requestId |
| caseCode | String | รหัสเหตุการณ์ | caseCode |
| customerId | String | รหัสลูกค้า | [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).insured_customer_id |
| customerName | String | ชื่อลูกค้า/บริษัท | [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).insured_title + [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).insured_name + ' ' +[tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).insured_surname |
| policyNumber | String | เลขที่กรมธรรม์ | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).policy_no |
| contactNumberPhone | String | เบอร์โทรศัพท์ | [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured).insured_phone_number |
| userName | String | ชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆ | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).created_by |
| date | Date | วันที่ทำรายการ | caseCodefieldSUR_REQUEST,FREE_REQUEST,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUEST[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).receive_date SUR_CANCEL, FREE_CANCEL,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_CANCEL[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).cancelled_date**---- **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** ----**REP_PAID_SUCCESSSUR_PAID_SUCCESSFREE_PAID_SUCCESSREP_PAID_FAILSUR_PAID_FAILFREE_PAID_FAILSystem Date |
| caseCode | field |
| SUR_REQUEST,FREE_REQUEST,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUEST | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).receive_date |
| SUR_CANCEL, FREE_CANCEL,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_CANCEL | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).cancelled_date |
| **---- **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** ----**REP_PAID_SUCCESSSUR_PAID_SUCCESSFREE_PAID_SUCCESSREP_PAID_FAILSUR_PAID_FAILFREE_PAID_FAIL | System Date |
| amount | Numeric | ยอดเงิน | caseCodefieldSUR_REQUEST,FREE_REQUEST,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUEST**----- **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** ----**REP_PAID_SUCCESSSUR_PAID_SUCCESSFREE_PAID_SUCCESSREP_PAID_FAILSUR_PAID_FAILFREE_PAID_FAIL[tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).total_benefit_amount |
| caseCode | field |
| SUR_REQUEST,FREE_REQUEST,**----- Centralize Payment Enhance Phase 2 Add by thidarat.lu 17/04/2026 ----**REP_REQUEST**----- **Centralize Payment Enhance Phase 2 Add by kanawoot.ou 16/07/2026** ----**REP_PAID_SUCCESSSUR_PAID_SUCCESSFREE_PAID_SUCCESSREP_PAID_FAILSUR_PAID_FAILFREE_PAID_FAIL | [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request).total_benefit_amount |
| paidDate | Date | วันที่ดำเนินการทางการเงิน | NULL |
| accountNo | String | เลขที่บัญชี/เช็ค | NULL |
| name | String | ชื่อประเภทรายการ | NULL |

---

## Hyperlinks บนหน้านี้

- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [benefitregister](http://wiki.thaisamut.co.th/display/RDSCPENH/03.+DB+%3A+benefitregister)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [WS ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1324712049)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request_insured](http://wiki.thaisamut.co.th/display/RDSCPENH/03_10+tx_request_insured)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
- [tx_request](http://wiki.thaisamut.co.th/display/RDSCPENH/03_01+tx_request)
