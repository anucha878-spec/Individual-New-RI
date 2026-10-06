# 02-02-19 Process ส่งข้อมูลไปยังระบบ Case Management

- **Page ID:** 1301807601
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1301807601
- **Path:** Home > Functional Specification > 02. Process Specification. > Centralized Payment > 02-02-19 Process ส่งข้อมูลไปยังระบบ Case Management
- **Depth:** 4

---

# **Input**

| Input | Desciption | Example Data |
|---|---|---|
| caseCode | รหัสเหตุการณ์ | เหตุการณ์caseCodeยกเลิกคำร้องเวนคืนกรมธรรม์SUR_CANCELเวนคืนกรมธรรม์จ่ายสำเร็จSUR_PAID_SUCCESSเวนคืนกรมธรรม์จ่ายไม่สำเร็จSUR_PAID_FAILยกเลิกคำร้อง Free LookFREE_CANCELFree Look จ่ายสำเร็จFREE_PAID_SUCCESSFree Look จ่ายไม่สำเร็จ (การเงินอนุมัติจ่าย)FREE_PAID_FAIL |
| เหตุการณ์ | caseCode |
| ยกเลิกคำร้องเวนคืนกรมธรรม์ | SUR_CANCEL |
| เวนคืนกรมธรรม์จ่ายสำเร็จ | SUR_PAID_SUCCESS |
| เวนคืนกรมธรรม์จ่ายไม่สำเร็จ | SUR_PAID_FAIL |
| ยกเลิกคำร้อง Free Look | FREE_CANCEL |
| Free Look จ่ายสำเร็จ | FREE_PAID_SUCCESS |
| Free Look จ่ายไม่สำเร็จ (การเงินอนุมัติจ่าย) | FREE_PAID_FAIL |
| paymentId | รหัส [tx_payment](/display/RDSCPENH/tx_payment).id | 1 |

# **Process**

1.ค้นหาข้อมูลสำหรับ mapping ดังนี้
- DB: benefitbank

| Table | Condition |
|---|---|
| [tx_payment](/display/RDSCPENH/tx_payment) | [tx_payment](/display/RDSCPENH/tx_payment).id = :paymentId |
| [tx_payment_policy](/display/RDSCPENH/tx_payment_policy) | [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).payment_id = [tx_payment](/display/RDSCPENH/tx_payment).id |

2. Mapping ข้อมูลสำหรับส่งเข้า [WS ส่งข้อมูลไปยังระบบ Case Management](/pages/viewpage.action?pageId=1324712049)

| Field | Type | Description | Mapping Data |
|---|---|---|---|
| requestId | Int | รหัสอ้างอิง | [tx_payment](/display/RDSCPENH/tx_payment).source_ref_no |
| caseCode | String | รหัสเหตุการณ์ | caseCode จาก Input |
| customerId | String | รหัสลูกค้า | [tx_payment](/display/RDSCPENH/tx_payment).cis_cust_id --> [tx_payment](/display/RDSCPENH/tx_payment).customer_idปรับแก้ไขโดย ariya.pi เมื่อ 17/04/69 |
| customerName | String | ชื่อลูกค้า/บริษัท | [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).insured_title+ [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).insured_first_name+ " " +[tx_payment_policy](/display/RDSCPENH/tx_payment_policy).insured_last_name |
| policyNumber | String | เลขที่กรมธรรม์ | [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).policy_no |
| contactNumberPhone | String | เบอร์โทรศัพท์ | [tx_payment_policy](/display/RDSCPENH/tx_payment_policy).mobile_no |
| userName | String | ชื่อผู้ใช้งานที่กระทำผ่านหน้าจอต่างๆ | [tx_payment](/display/RDSCPENH/tx_payment).created_by |
| date | Date | วันที่ทำรายการ | แยกตาม caseCode จาก InputcaseCodefieldSUR_PAID_SUCCESS,SUR_PAID_FAIL,FREE_PAID_SUCCESS,FREE_PAID_FAIL[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).request_dateSUR_CANCEL, FREE_CANCEL[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).cancel_date |
| caseCode | field |
| SUR_PAID_SUCCESS,SUR_PAID_FAIL,FREE_PAID_SUCCESS,FREE_PAID_FAIL | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).request_date |
| SUR_CANCEL, FREE_CANCEL | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).cancel_date |
| amount | Numeric | ยอดเงิน | แยกตาม caseCode จาก Input caseCodefieldSUR_PAID_SUCCESS,FREE_PAID_SUCCESS[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).total_net_amountกรณีอื่นๆค่าว่าง |
| caseCode | field |
| SUR_PAID_SUCCESS,FREE_PAID_SUCCESS | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).total_net_amount |
| กรณีอื่นๆ | ค่าว่าง |
| paidDate | Date | วันที่ดำเนินการทางการเงิน | แยกตาม caseCode จาก Input caseCodefieldSUR_PAID_SUCCESS,FREE_PAID_SUCCESS,[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).actual_payment_dateSUR_PAID_FAIL, FREE_PAID_FAIL[tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).py_record_dateกรณีอื่นๆค่าว่าง |
| caseCode | field |
| SUR_PAID_SUCCESS,FREE_PAID_SUCCESS, | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).actual_payment_date |
| SUR_PAID_FAIL, FREE_PAID_FAIL | [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).py_record_date |
| กรณีอื่นๆ | ค่าว่าง |
| accountNo | String | เลขที่บัญชี/เช็ค | แยกตาม caseCode จาก Input caseCodefieldSUR_PAID_SUCCESS,FREE_PAID_SUCCESS,กรณี **'T'** (Transfer): ดึงจาก [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)`.bank_acc_no`กรณี **'C'** (Cheque): ดึงจาก [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)`.cheque_no`กรณีอื่นๆค่าว่าง |
| caseCode | field |
| SUR_PAID_SUCCESS,FREE_PAID_SUCCESS, | กรณี **'T'** (Transfer): ดึงจาก [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)`.bank_acc_no`กรณี **'C'** (Cheque): ดึงจาก [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)`.cheque_no` |
| กรณีอื่นๆ | ค่าว่าง |
| name | String | ชื่อประเภทรายการ | แยกตาม caseCode จาก Input caseCodefieldSUR_PAID_SUCCESS,FREE_PAID_SUCCESS,ใช้ข้อมูลจากการนำข้อมูล Data Source ค้นหาข้อมูลที่ [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value) เงื่อนไข group = 'CPH_PAYMENT_TYPE' และ value = [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_type โดยใช้ข้อมูล name ที่ได้กรณีอื่นๆค่าว่าง |
| caseCode | field |
| SUR_PAID_SUCCESS,FREE_PAID_SUCCESS, | ใช้ข้อมูลจากการนำข้อมูล Data Source ค้นหาข้อมูลที่ [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value) เงื่อนไข group = 'CPH_PAYMENT_TYPE' และ value = [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment).payment_type โดยใช้ข้อมูล name ที่ได้ |
| กรณีอื่นๆ | ค่าว่าง |

---

## Hyperlinks บนหน้านี้

- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [WS ส่งข้อมูลไปยังระบบ Case Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1324712049)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment_policy](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_policy)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [cf_list_of_value](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+cf_list_of_value)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
