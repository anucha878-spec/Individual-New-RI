# WS สำหรับดึงข้อมูลเงินเวนคืน และ Freelook เพื่อส่งเข้าระบบ Cenpay

- **Page ID:** 1282867246
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282867246
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Cenpay > WS สำหรับดึงข้อมูลเงินเวนคืน และ Freelook เพื่อส่งเข้าระบบ Cenpay
- **Depth:** 4

---

[ [Overview](#WSสำหรับดึงข้อมูลเงินเวนคืนและFreelookเพื่อส่งเข้าระบบCenpay-Overview) ] [ [Input](#WSสำหรับดึงข้อมูลเงินเวนคืนและFreelookเพื่อส่งเข้าระบบCenpay-Input) ] [ [Process](#WSสำหรับดึงข้อมูลเงินเวนคืนและFreelookเพื่อส่งเข้าระบบCenpay-Process) ] [ [`Output`](#WSสำหรับดึงข้อมูลเงินเวนคืนและFreelookเพื่อส่งเข้าระบบCenpay-Output) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
|   |   |   |   |   |

## Overview

เพื่อดึงข้อมูลเงินเวนคืน และ Freelook เพื่อส่งเข้าระบบ Cenpay
**Repositories**: msa-benefitregister
**Service path**
**GET:** [/thaisamut/rs/benefitregister/v1/search/search-surrenders-freelooks](http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/searchSurrenderAndFreelook)
Icon
TYPE : <GET>
**อธิบายได้ดังนี้**
GET - Select
POST - Insert
PUT - Update

## Input

<แสดงข้อมูล Parameter ที่ต้องการ>

| `Name` | `Type` | `Description` | `Example` | `Mandatory (Y/N)` | `Validation` |
|---|---|---|---|---|---|
| requestCode | String | ประเภทเงิน | S เวนคืนL เวนคืนกรมบังคับคดีF Freelook | Y |   |
| currentDate | Date | วันที่ ที่ต้องการดึงข้อมูล | 17/04/2569 | Y |   |
| intervalDate | String | ช่วงวันที่ของ เวนคืน Freelook | interval '7 days' | Y |   |

## Process

1. ดึงข้อมูลจาก SQL ที่ DB: benefitregister**Update** <![CDATA[select r.branch_service_code as serviceBranchCode, case when r.request_code = &#39;S&#39; then &#39;PSP&#39; -- เพิ่มสำหรับข้อมูลเวนคืนกรมบังคับคดี when r.request_code = &#39;L&#39; then &#39;LEP&#39; when r.request_code = &#39;F&#39; then &#39;FLP&#39; else NULL end as paymentType, r.receive_date as requestDate, r.payment_date as requestPaymentDate, rpc.payment_type_code as paymentChannelCode, left(rpc.payment_type_code,1) as paymentChannel, right(rpc.payment_type_code,1) as transferType, case when rpc.payment_type_code = &#39;TP&#39; then rpc.id_card else rpc.account_no end as bankAccNo, rpc.account_name as bankAccName, rpc.bank_id as bankId, rpc.bank_name as bankAccIssuer, rpc.account_branch as bankAccBranch, rb.beneficiary_title as payeeTitle, rb.beneficiary_name as payeeFirstName, rb.beneficiary_surname as payeeLastName, rb.relation as accountRelationName, rp.agent_code as agentCode, rp.agent_title as agentTitle, rp.agent_name as agentName, rp.agent_surname as agentSurname, &#39;Cenpay Register&#39; as systemSource, case when r.branch_service_code = &#39;0001&#39; then &#39;HQ&#39; else &#39;BRANCH&#39; end as registerChannel, r.request_no as requestNo, r.id as requestID, rp.policy_no as policyNo, rp.policy_type as policyType, &#39;&#39; as clawBackFlag, case when r.surrender_new_flag is true then &#39;Y&#39; else &#39;N&#39; end as surrenderNewFlag, case when rfl.flag_case_5_type_agent is true then &#39;Y&#39; else &#39;N&#39; end as flagCase5TypeAgent, &#39;&#39; as clawbackId, case when rfl.flag_epolicy is true then &#39;Y&#39; else &#39;N&#39; end as flagEPolicy, case when rfl.flag_policy is true then &#39;Y&#39; else &#39;N&#39; end as flagPolicy, case when rfl.flag_fee_waive is true then &#39;Y&#39; else &#39;N&#39; end as flagWaivePremium, rfl.receive_policy_date as receivePolicyDate, rfl.receive_email_date as receiveEmailDate, r.total_benefit_receive_amount as receiveAmount, rbe.health_examination_amount as healthExaminationAmount, r.total_benefit_expense_amount as expenseAmount, rd.doc_name as documentName, case when r.request_code = &#39;S&#39; then &#39;เอกสารประกอบคำร้องเวนคืนกรมธรรม์&#39; -- เพิ่มสำหรับข้อมูลเวนคืนกรมบังคับคดี when r.request_code = &#39;L&#39; then &#39;เอกสารประกอบคำร้องเวนคืนกรมธรรม์กรมบังคับคดี&#39; when r.request_code = &#39;F&#39; then &#39;เอกสารประกอบคำร้องยกเลิกกรมธรรม์&#39; else &#39;&#39; end as documentType, rd.dms_doc_id as dmsDocId, rd.dms_document_upload_date as transactionDate, ra.document_code as documentDetailCode, case when ra.flag_other is true then &#39;Y&#39; else &#39;N&#39; end as otherFlag, ra.document_name as documentDetailName from tx_request r left join tx_request_policy rp on r.id = rp.tx_request_id left join tx_request_insured ri on r.id = ri.tx_request_id left join tx_request_beneficiary rb on r.id = rb.tx_request_id left join tx_request_payment_channel rpc on rb.id = rpc.tx_request_beneficiary_id left join tx_request_free_look rfl on r.id = rfl.tx_request_id left join tx_request_benefit_expense rbe on rbe.tx_request_id = r.id left join tx_request_document rd on r.id = rd.tx_request_id left join tx_request_attachment ra on r.id = ra.tx_request_id -- เพื่อเป็นการระบุว่ารายการไม่ได้มาจากการส่งกลับแก้ไข left join (select tx_request_id, count(1) as cenpayNo from lg_request_process where status_code = &#39;WAV&#39; group by tx_request_id) rrt on r.id = rrt.tx_request_id where where -- ต้องมีสถานะเป็น รอการจ่าย r.status_code = &#39;WAP&#39; and rrt.cenpayNo is null and r.request_code = :requestCode -- กรองเอากรมธรรม์ UL ออก and rp.policy_type &lt;&gt; &#39;U&#39; and r.receive_date &lt;= :currentDate - :intervalDate;]]> ของเดิม **Update** <![CDATA[select r.branch_service_code as serviceBranchCode, case when r.request_code = &#39;S&#39; then &#39;PSP&#39; -- เพิ่มสำหรับข้อมูลเวนคืนกรมบังคับคดี when r.request_code = &#39;L&#39; then &#39;LEP&#39; when r.request_code = &#39;F&#39; then &#39;FLP&#39; else NULL end as paymentType, r.receive_date as requestDate, r.payment_date as requestPaymentDate, rpc.payment_type_code as paymentChannelCode, left(rpc.payment_type_code,1) as paymentChannel, right(rpc.payment_type_code,1) as transferType, rp.sale_channel_code as channelCode, rpc.account_no as bankAccNo, rpc.account_name as bankAccName, rpc.bank_id as bankId, rpc.bank_name as bankAccIssuer, rpc.account_branch as bankAccBranch, rb.beneficiary_title as payeeTitle, rb.beneficiary_name as payeeFirstName, rb.beneficiary_surname as payeeLastName, rb.relation as accountRelationName, rp.agent_code as agentCode, rp.agent_title as agentTitle, rp.agent_name as agentName, rp.agent_surname as agentSurname, &#39;Cenpay Register&#39; as systemSource, case when r.branch_service_code = &#39;0001&#39; then &#39;HQ&#39; else &#39;BRANCH&#39; end as registerChannel, r.request_no as requestNo, r.id as requestID, rp.policy_no as policyNo, rp.policy_type as policyType, &#39;&#39; as clawBackFlag, case when rb.relation = &#39;ผู้รับโอนสิทธิ์&#39; then &#39;Y&#39; else &#39;N&#39; end as assigneeFlag, case when rb.relation = &#39;ผู้รับโอนสิทธิ์&#39; then rb.beneficiary_title else NULL end as assigneeTitle, case when rb.relation = &#39;ผู้รับโอนสิทธิ์&#39; then rb.beneficiary_name else NULL end as assigneeFirstName, case when rb.relation = &#39;ผู้รับโอนสิทธิ์&#39; then rb.beneficiary_surname else NULL end as assigneeLastName, case when r.surrender_new_flag is true then &#39;Y&#39; else &#39;N&#39; end as surrenderNewFlag, case when rfl.flag_case_5_type_agent is true then &#39;Y&#39; else &#39;N&#39; end as flagCase5TypeAgent, &#39;&#39; as clawbackId, r.total_benefit_receive_amount as receiveAmount, r.total_benefit_expense_amount as expenseAmount, rd.doc_name as documentName, case when r.request_code = &#39;S&#39; then &#39;เอกสารประกอบคำร้องเวนคืนกรมธรรม์&#39; -- เพิ่มสำหรับข้อมูลเวนคืนกรมบังคับคดี when r.request_code = &#39;L&#39; then &#39;เอกสารประกอบคำร้องเวนคืนกรมธรรม์กรมบังคับคดี&#39; when r.request_code = &#39;F&#39; then &#39;เอกสารประกอบคำร้องยกเลิกกรมธรรม์&#39; else &#39;&#39; end as documentType, rd.dms_doc_id as dmsDocId, rd.dms_document_upload_date as transactionDate, ra.document_code as documentDetailCode, case when ra.flag_other is true then &#39;Y&#39; else &#39;N&#39; end as otherFlag, ra.document_name as documentDetailName from tx_request r left join tx_request_policy rp on r.id = rp.tx_request_id left join tx_request_insured ri on r.id = ri.tx_request_id left join tx_request_beneficiary rb on r.id = rb.tx_request_id left join tx_request_payment_channel rpc on rb.id = rpc.tx_request_beneficiary_id left join tx_request_free_look rfl on r.id = rfl.tx_request_id left join tx_request_document rd on r.id = rd.tx_request_id left join tx_request_attachment ra on r.id = ra.tx_request_id -- เพื่อเป็นการระบุว่ารายการไม่ได้มาจากการส่งกลับแก้ไข left join (select tx_request_id, count(1) as cenpayNo from lg_request_process where status_code = &#39;WAV&#39; group by tx_request_id) rrt on r.id = rrt.tx_request_id where -- ต้องมีสถานะเป็น รอการจ่าย r.status_code = &#39;WAP&#39; and rrt.cenpayNo is null and r.request_code = :requestCode -- กรองเอากรมธรรม์ UL ออก and rp.policy_type &lt;&gt; &#39;U&#39; and r.receive_date &lt;= :currentDate - :intervalDate;]]>
2. นำข้อมูลที่ได้จากการ Query ส่งออกไปตามรูปแบบของ Output

## `Output`

`List<Transaction>`

| `Name` | `Type` | `Description` | `Example` |
|---|---|---|---|
| serviceBranchCode | String | สาขาบริการ | 0116 |
| paymentType | String | ประเภทการจ่าย | PSP (เวนคืน)LEP (เวนคืนกรมบังคับคดี)FLP (Freelook) |
| requestDate | Date | วันที่ทำคำร้อง (วันที่รับคำร้อง) | 12/02/2026 |
| requestPaymentDate | Date | วันที่ประมาณการจ่ายเงิน | 12/02/2026 |
| paymentChannelCode | String | รหัสช่องทางการจ่ายเงิน | TB โอนเงิน-ปกติTP โอนเงิน-พร้อมเพย์ |
| paymentChannel | String | ช่องทางการจ่ายเงิน | T โอน |
| transferType | String | ประเภทการโอน | B ธนาคารP พร้อมเพย์ |
| channelCode | String | รหัสช่องทางการขาย (ข้อมูลจาก Policy Master) | 5075600 |
| bankAccNo | String | เลขบัญชีธนาคาร |   |
| bankAccName | String | ชื่อบัญชีธนาคาร |   |
| bankId | Numeric | รหัสธนาคารรับเงิน |   |
| bankAccIssuer | String | ชื่อธนาคารรับเงิน |   |
| bankAccBranch | String | สาขาของธนาคารรับเงิน |   |
| payeeTitle | String | คำนำหน้าผู้รับเงิน |   |
| payeeFirstName | String | ชื่อผู้รับเงิน |   |
| payeeLastName | String | นามสกุลผู้รับเงิน |   |
| accountRelationName | String | ความสัมพันธ์ของบัญชีรับเงินผลประโยชน์กับผู้เอาประกัน | ผู้เอาประกัน |
| agentCode | String | รหัสตัวแทน (ข้อมูลจาก Policy Master) |   |
| agentTilte | String | คำนำหน้าชื่อตัวแทน (ข้อมูลจาก Policy Master) |   |
| agentName | String | ชื่อตัวแทน (ข้อมูลจาก Policy Master) |   |
| agentSurName | String | นามสกุลตัวแทน (ข้อมูลจาก Policy Master) |   |
| systemSource | String | ระบบงานต้นทาง | Cenpay Register |
| registerChannel | String | ช่องทางรับเรื่อง | HQBRANCH |
| requestNo | String | เลขที่คำร้อง/เลขที่รับเรื่อง |   |
| requestID | Numeric | ID ของรายการคำร้องจากเวนคืนหรือ Freelook |   |
| policyNo | String | เลขที่กรมธรรม์ |   |
| policyType | String | ประเภทกรมธรรม์ | ORDINDPA |
| clawBackFlag | String | ลูกค้าเป็น ตัวแทนหรือ บุคคล 5 ประเภทหรือไหม | Y คือ ใช่N คือ ไม่ใช่ |
| assigneeFlag | String | มีการโอนสิทธิ์ หรือมอบอำนาจหรือไม่ (Y ใช่ และ N ไม่ใช่) | Y คือ ใช่N คือ ไม่ใช่ |
| assigneeTitle | String | คำนำหน้า ผู้รับโอนสิทธิ์ หรือ ผู้รับมอบอำนาจ |   |
| assigneeFirstName | String | ชื่อ ผู้รับโอนสิทธิ์ หรือ ผู้รับมอบอำนาจ |   |
| assigneeLastName | String | นามสกุล ผู้รับโอนสิทธิ์ หรือ ผู้รับมอบอำนาจ |   |
| surrenderNewFlag | String | สถานรายการ เวนคืนทำใหม่ หรือไม่ | Y คือ ใช่N คือ ไม่ใช่ |
| flagCase5TypeAgent | String | ผู้รับผลประโยชน์เป็นตัวแทน และบุคคล 5 ประเภท หรือไม่ | Y คือ ใช่N คือ ไม่ใช่ |
| clawbackId | Numeric | ID คำนวน Clawback กรณี Freelook |   |
| flagEPolicy | String | บอกว่าเป็น E-Policy หรือไม่ | Y คือ E-PolicyN คือ ไม่ใช่ E-Policy |
| flagPolicy | String | บอกว่าได้รับเล่มหรือไม่ได้รับเล่ม | Y คือ ได้รับเล่มกรมธรรม์N คือ ไม่ได้รับเล่มกรมธรรม์ |
| flagWaivePremium | String | บอกว่ามีการยกเว้นค่าธรรมเนียมหรือไม่ | Y คือ ยกเว้นค่าธรรมเนียมN คือ ไม่ยกเว้นค่าธรรมเนียม |
| receivePolicyDate | Date | วันที่ได้รับกรมธรรม์ | 12/02/2026 |
| receiveEmailDate | Date | วันที่ได้รับ Email | 12/02/2026 |
| receiveAmount | Numeric | รวมเงินรับทั้งหมด |   |
| healthExaminationAmount | Numeric | ค่าตรวจสุขภาพ Freelook |   |
| expenseAmount | Numeric | รวมเงินหักทั้งหมด |   |
| documentName | String | ชื่อไฟล์เอกสาร |   |
| documentType | String | ชื่อเอกสาร |   |
| dmsDocId | Numeric | เลข DMS DOC ID |   |
| transactionDate | Date | วันที่สร้างเอกสาร |   |
| documentDetailCode | String | Code ของรายละเอียดเอกสาร |   |
| otherFlag | String | มีเอกสารแนบอื่นๆหรือไม่ | Y คือ มีN คือ ไม่มี |
| documentDetailName | String | ชื่อเอกสารอื่นๆ |   |

| `Name` | `Type` | `Description` | `Example` |
|---|---|---|---|
| `statusCode` | `numeric` | `200``Success``204``No Content``400``Bad Request (รวม Validation)``409``Conflict (รวมกรณี Duplicated Key + Already Cancel)``500``Server Error` |   |
| `200` | `Success` |
| `204` | `No Content` |
| `400` | `Bad Request (รวม Validation)` |
| `409` | `Conflict (รวมกรณี Duplicated Key + Already Cancel)` |
| `500` | `Server Error` |
| `errorMessage` | `varchar` | `กรณี statusCode = 412กรณี statusCode อื่นๆ ให้แสดงข้อความ text message แสดงสาเหตุ error``oper_ref_no ให้ return errorMessage "ไม่พบ oper_ref_no ที่ตาราง [tx_payment](/display/RDSCPENH/tx_payment)"``transaction_status ให้ return errorMessage "ไม่พบ Config transaction_status ที่ตาราง [ms_status](/display/RDSCP/Table+%3A+ms_status)"` |   |

---

## Hyperlinks บนหน้านี้

- [/thaisamut/rs/benefitregister/v1/search/search-surrenders-freelooks](http://11.100.8.44/thaisamut/pub/benefitregister/swagger#/benefitregister/searchSurrenderAndFreelook)
- [tx_payment](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment)
- [ms_status](http://wiki.thaisamut.co.th/display/RDSCP/Table+%3A+ms_status)
