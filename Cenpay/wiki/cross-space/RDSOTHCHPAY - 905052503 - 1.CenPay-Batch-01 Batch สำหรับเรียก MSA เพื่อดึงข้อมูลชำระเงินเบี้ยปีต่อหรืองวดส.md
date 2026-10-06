# 1.CenPay-Batch-01 Batch สำหรับเรียก MSA เพื่อดึงข้อมูลชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่าน Centralized Payment บันทึกลง HERMES - PAYMENT_IMPORT_DETAIL

- **Space:** `RDSOTHCHPAY` — Other Channel Payment
- **Page ID:** 905052503
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=905052503

---

[ [Objectives](#id-1.CenPay-Batch-01BatchสำหรับเรียกMSAเพื่อดึงข้อมูลชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านCentralizedPaymentบันทึกลงHERMES-PAYMENT_IMPORT_DETAIL-Objectives) ] [ [Overview](#id-1.CenPay-Batch-01BatchสำหรับเรียกMSAเพื่อดึงข้อมูลชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านCentralizedPaymentบันทึกลงHERMES-PAYMENT_IMPORT_DETAIL-Overview) ] [ [Process](#id-1.CenPay-Batch-01BatchสำหรับเรียกMSAเพื่อดึงข้อมูลชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านCentralizedPaymentบันทึกลงHERMES-PAYMENT_IMPORT_DETAIL-Process) ]

## Objectives

- เป็น Batch เรียกเรียก MSA เพื่อดึงข้อมูลชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่าน Centralized Payment เพื่อนำข้อมูลบันทึกลง HERMES - PAYMENT_IMPORT_DETAIL
- นำข้อมูลบันทึกลง HERMES - PAYMENT_IMPORT_DETAIL

## Overview

หลังจากระบบ Centralized Payment มีการบันทึกข้อมูลการรับชำระเบี้ยปีต่อหรืองวดสุดท้ายผ่าน Centralized Payment โดยบันทึกยังระบบ Hydraapi และบันทึกรับฝากสำเร็จ
ระบบจะดึงข้อมูลจาก Hydra เพื่อสร้างใบเสร็จมีขั้นตอนดังนี้
- Batch ทำงาน 2 รอบ คือ 05.05 น. และ 05.35 น.
**1.ตรวจสอบ Job Executor ว่าระบบกำลัง Run อยู่หรือไม่**
1. กรณีที่มี ให้รอ Job ก่อนหน้าทำงานให้ก่อน
2. กรณีไม่มีดึงข้อมูลจาก Hydra ด้วยเงื่อนไข ตามวันที่ชำระ และ ช่องทางชำระเงิน
**2.ถ่ายข้อมูลระบบ Hydra เข้า table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)**
1. นำข้อมูลที่ได้จาก Hydra ( Table [IMPORT_HEADER](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+IMPORT_HEADER) และ [IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+IMPORT_DETAIL) ) เมื่อมาแล้วนำ มาวน Loop ตรวจสอบข้อมูลที่ Table Detail ของฝั่ง Hermes ก่อน
  1. กรณีมีข้อมูลให้ตรวจสอบสถานะของรายการว่า มีสถานะเป็น "Wait"
    1. กรณีสถานะเป็น "Wait" ให้ Update ข้อมูลของรายการนั้น ที่ Table Detail
    2. กรณีสถานะไม่เป็น "Wait" ระบบไม่ต้องทำอะไรกับรายการนี้
  2. กรณีไม่มีข้อมูล ระบบสามารถเพิ่มรายการนั้นที่ฝั่ง Hermes ได้เลย โดยลงสถานะเป็น "Wait"
2. นำข้อมูลตรวจสอบหางวดและหมายเหตุ
3. เมื่อได้งวดและข้อมูลอื่นๆ ให้นำไป Update ที่ รายการนั้นๆ ฝั่ง Hermes และกำหนด
ปล. Batch ตัวนี้ทำงานเหมือนหน้าจอสร้างใบเสร็จ ขั้นตอน [กดปุ่ม ตรวจสอบข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317#HERMES-3.0%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%9A%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5) และ [ถ่ายข้อมูลระบบ Hydra](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317#HERMES-3.0%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%9A%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AHydra)
อ้างอิง :
- [HERMES - 3.0 สร้างใบเสร็จอุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317)
- [HERMES - 1.0 สร้างใบเสร็จสามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=261587254)
- [HERMES - 28.0 สร้างใบเสร็จ PA ปีต่อ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=336822794)
Flow Process :
![img](/download/attachments/771555985/import%20data%20from%20hydra.jpg?version=1&modificationDate=1594636661493&api=v2)

## Process

**1.ตรวจสอบ Job Executor ว่าระบบกำลัง Run อยู่หรือไม่**
**ตรวจสอบ Job Executor**
1. กรณีที่มี Job Executor กำลัง Run อยู่ ให้รอ Job ก่อนหน้าทำงานให้ก่อน
2. กรณีไม่มี Job Executor กำลัง Run อยู่ ให้ดึงข้อมูลการชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านช่องทาง Centralized Payment จาก Hydra ด้วยเงื่อนไข ตามวันที่ชำระ และช่องทางชำระเงิน
**2.ถ่ายข้อมูลระบบ Hydra**
****Step 1 : **ข้อมูลการชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านช่องทาง Centralized Payment******
**ข้อมูลการชำระเงินผ่าน Thai QR Payment จาก HyDra**
**1.ดึงข้อมูลการ**ชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านช่องทาง Centralized Payment** จาก HyDra**
ดึงข้อมูลการชำระเงินเบี้ยปีต่อหรืองวดสุดท้ายผ่านช่องทาง Centralized Payment จาก HyDra ด้วยเงื่อนไขดังนี้
รายการละเอียดดังนี้
**Table ที่ดึง**

| Table | แทน | Relation | Condition | Remark |
|---|---|---|---|---|
| import_detail | d |   | payment_date = [วันที่โอนเงินผลประโยชน์ให้ลูกค้า] | วันที่ชำระเงินเป็นค่าที่รับเข้ามาโดย batch ดึงย้อนหลัง 30 วัน |
|   |   |   | policy_no is not null | ต้องมีข้อมูล เลขที่กรมธรรม์ เสมอ |
|   |   |   | SEND_BILLPay_DATE is Null | วันที่เวลาที่ส่งข้อมูลให้ Hermes ต้องเป็น ค่า Null เพราะเป็นรายการที่ยังไม่เคยส่ง Hermes |
| import_header | h | inner join import_header h on d.import_header_id = h.import_header_id | MAIN_CHANNEL_CODE ='CENPAY' | รหัสช่องทางหลัก กำหนด เป็น 'CENPAY' |
|   |   |   | import_status = 'COMPLETE' | สถานะการนำเข้าข้อมูล ต้องเป็น COMPLETE( นำเข้าสำเร็จ) |
| payment_channel | b และ c | left join payment_channel b on d.bank_code = b.channel_code and h.main_channel_code = b.main_channel_code inner join payment_channel c on h.channel_code = c.channel_code and h.main_channel_code = c.main_channel_code |   |   |
| payment_main_channel | mc | inner join payment_main_channel mc on mc.main_channel_code = c.main_channel_code |   |   |
| payment_type | t | inner join payment_type t on d.payment_type_code = t.payment_type_code |   |   |

ให้เรียงข้อมูลตาม รหัสสาขา , เลขที่กรมธรรม์ และวันที่ชำระเงิน โดยเรียงจากน้อยไปหามาก
**2.นำข้อมูลที่ select มาใส่ที่ table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)**
2.1 : ตรวจสอบว่ามีข้อมูลใน table HERMES - PAYMENT_IMPORT_DETAIL หรือไม่
ให้ตรวจสอบว่ามีข้อมูลใน table HERMES - PAYMENT_IMPORT_DETAIL หรือไม่
รายการละเอียดดังนี้
เช็คว่าใน Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) มี
column IMPORT_DETAIL_ID เท่ากับค่า [import_detail_id]
และ IMPORT_HEADER_ID เท่ากับค่า [import_header_id] ที่มา Hydra หรือป่าว
2.2 :กรณีที่ไม่มีข้อมูลรายการใน table HERMES - PAYMENT_IMPORT_DETAIL
กรณีที่ไม่มีข้อมูล ให้ Insert รายการเข้า Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
รายการละเอียดดังนี้

| Query จากระบบ Hydra | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|
| import_detail_id | IMPORT_DETAIL_ID | ID ของ table DETAIL |
| import_header_id | IMPORT_HEADER_ID | ID ของ table HEADER |
| main_channel_code | MAIN_CHANNEL_CODE | ช่องทางหลักที่ import ข้อมูล |
| channel_code | CHANNEL_CODE | ช่องทางที่ import ข้อมูล |
| payment_date | PAYMENT_DATE | วันที่เวลา ชำระเงิน |
| ref1 | REF1 | REF1 |
| ref1_10 | REF1_10 | REF1 จำนวน 10 หลัก |
| ref2 | REF2 | REF2 |
| payment_amount | PAYMENT_AMOUNT | จำนวนเงินที่ชำระ |
| payment_type_code | PAYMENT_TYPE_CODE | ประเภทการชำระเงิน |
| policy_type | POLICY_TYPE | ประเภทกรมธรรม์ORD สามัญIND ปชGOV ขพ |
| policy_no | POLICY_NO | เลขกรมธรรม์ |
| plan | PLAN | แบบประกัน |
| title_name | TITLE_NAME | คำนำหน้าชื่อ |
| fname | FNAME | ชื่อผู้เอากรมธรรม์ |
| lname | LNAME | นามสกุล |
| branch_code | BRANCH_CODE | รหัสสาขา |
| deposit_id | DEPOSIT_ID | เลขที่รับฝาก |
| agent_code7 | AGENT_CODE7 | รหัสตัวแทน 7 หลัก |
| agent_code5 | AGENT_CODE5 | รหัสตัวแทน 5 หลัก บันทึกให้เป็นค่า null |
| document_type | DOCUMENT_TYPE | ประเภทเอกสารที่รับชำระ |
| NULL | PROCESS_REF_NO | เลขที่ ref กรณีที่มีการออกใบเสร็จ/ กรณีรายการไม่สามารถออกใบเสร็จได้ |
| "WAIT" | PROCESS_STATUS | สถานะการประมวลผล |
| NULL | ERROR_POINT | ระบบที่เกิดข้อผิดพลาด |
| NULL | ERROR_DESC | รายละเอียดข้อผิดพลาด |
| main_channel_status | MAIN_CHANNEL_STATUS | สถานะช่องทางสำหรับใช้ในการบันทึกลงที AS/400 และ data file |
| created_date | IMPORT_DATE | วันที่ import ข้อมูลการชำระเข้าระบบ |
| channel_name_in_receipt | CHANNEL_NAME | ชื่อช่องทางชำระ สำหรับนำไปบันทึกในข้อมูลใบเสร็จ |
| channel_name_abbr | CHANNEL_NAME_ABBR | ชื่อย่อช่องทางการชำระ |
| main_channel_name_abbr | MAIN_CHANNEL_NAME_ABBR | ชื่อย่อช่องทางหลักการชำระ |
| fee_amount | fee_amount | ค่าธรรมเนียมชำระผ่านช่องทาง |
| mode_fee_rate | mode_fee_rate | mode ช่องทาง ประเภทบัตร |
| payment_method | payment_method | QR = การชำระด้วย QR Code |
| bank_code | bank_code | รหัสธนาคารที่ชำระด้วย QR Code |
| bank_name_th | bank_name_th | ชื่อธนาคารที่ชำระด้วย QR Code |
| INTEREST_AMOUNT | INT_AMOUNT | ดอกเบี้ยเบี้ยค้างชำระ(กรณีที่เป็นการจ่ายครบสัญญาสามัญ) |

2.3 :กรณีที่มีข้อมูลรายการใน table HERMES - PAYMENT_IMPORT_DETAIL
1.กรณีที่มีข้อมูล รายการใน table HERMES - PAYMENT_IMPORT_DETAIL และ รายการนั้นมี PROCESS_STATUS เป็น "WAIT" ให้ update ข้อมูลให้กับ record นั้น
รายการละเอียดดังนี้

| Query จากระบบ Hydra | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|
| fee_amount | fee_amount | ค่าธรรมเนียมชำระผ่านช่องทาง |
| mode_fee_rate | mode_fee_rate | mode ช่องทาง ประเภทบัตร |
| payment_type_code | PAYMENT_TYPE_CODE | ประเภทการชำระเงิน |
| policy_type | POLICY_TYPE | ประเภทกรมธรรม์ORD สามัญIND ปชGOV ขพ |
| policy_no | POLICY_NO | เลขกรมธรรม์ |
| plan | PLAN | แบบประกัน |
| title_name | TITLE_NAME | คำนำหน้าชื่อ |
| fname | FNAME | ชื่อผู้เอากรมธรรม์ |
| lname | LNAME | นามสกุล |
| branch_code | BRANCH_CODE | รหัสสาขา |
| agent_code7 | AGENT_CODE7 | รหัสตัวแทน 7 หลัก |
| agent_code5 | AGENT_CODE5 | รหัสตัวแทน 5 หลัก บันทึกให้เป็นค่า null |
| created_date | IMPORT_DATE | วันที่ import ข้อมูลการชำระเข้าระบบ |
|   | UPDATED_BY | ผู้ Update ข้อมูล |
|   | UPDATED_DATE | วันที่ Update ข้อมูล |

2.กรณีที่มีข้อมูล รายการใน table HERMES - PAYMENT_IMPORT_DETAIL และ รายการนั้นมี PROCESS_STATUS = ERROR ให้ Update ค่า GEN_RECEIPT ของรายการนั้นเป็น 'GEN'
Update ลง Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ของแต่ละรายการชำระเงินดังนี้
รายละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'GEN' |

3. รายการนอกนั้น ไม่ต้อง update หรือ insert (record ที่มีใน table แล้ว และ PROCESS_STATUS != WAIT จะไม่ทำอะไรกับ record นั้น)
**Step 2 : นำข้อมูลตรวจสอบหางวดและหมายเหตุ**
**2.1 จัดเตรียมก่อนนำข้อมูลตรวจสอบหางวดและหมายเหตุ**
ให้นำข้อมูลชุดที่มาจาก Hydra ซึ่งระบบได้ Insert/Update ข้อมูลลง PAYMENT_IMPORT_DETAILแล้ว นำรายการที่มี PROCESS_STATUS = "WAIT"
ไปหาข้อมูลงวดจาก AS/400 ต่อ แล้ว update ที่ PAYMENT_IMPORT_DETAIL (สำหรับ PROCESS_STATUS != "WAIT" จะไม่ส่งไปหาข้อมูลงวดที่ AS/400)
**1.ให้จัดข้อมูลเป็นกลุ่มตามสาขา ก่อนที่จะไปหาข้อมูลงวดจาก AS/400 โดยแยกเป็น ช่องทาง Alternative และ ช่องทางตัวแทน**
- ช่องทาง alternative คือ branch_code ที่ 3 หลักแรก ไม่ใช่ 207 หรือ 507
- ช่องทาง ตัวแทน คือ branch_code ที่ 3 หลักแรก เท่ากับ 207 หรือ 507
ตัวย่างมีข้อมูล 6 สาขา ได้แก่ 8000001, 3070001, 2070116, 2074200, 5070116, 2071200 ดังนั้นจะ group ข้อมูลได้ ดังนี้
ตัวย่างดังนี้

| ลำดับ | สาขา | สาขาที่ | ช่องทาง | เงื่อนไข |
|---|---|---|---|---|
| 1 | Alternative | 8000001, 3070001 | Alternative | เช็คจาก 3 หลักแรกของ branch_code ไม่ใช่ 207 หรือ 507 ก็ให้กำหนด สาขาเป็น Alternative |
| 2 | 0116 | 207**0116**, 507**0116** | ช่องทางตัวแทน | เช็คจาก 3 หลักแรกของ branch_code เป็น 207 หรือ 507 ก็ให้กำหนด สาขาเป็น ตาม 4 ตัวสุดท้ายของ branch_code |
| 3 | 1200 | 2071200 | ช่องทางตัวแทน | เช็คจาก 3 หลักแรกของ branch_code เป็น 207 หรือ 507 ก็ให้กำหนด สาขาเป็น ตาม 4 ตัวสุดท้ายของ branch_code |
| 4 | 4200 | 2074200 | ช่องทางตัวแทน | เช็คจาก 3 หลักแรกของ branch_code เป็น 207 หรือ 507 ก็ให้กำหนด สาขาเป็น ตาม 4 ตัวสุดท้ายของ branch_code |

การเรียงลำดับ Alternative ขึ้นก่อน ส่วนช่องทางตัวแทน ก็ให้เรียงตาม สาขา ที่หาได้ตาม 4 ตัวสุดท้ายของ branch_code
**2.ให้หาไปทำทีละลำดับตามการจัดกลุ่มจากข้อ 1.**
**3.ให้ตรวจสอบชุดข้อมูลก่อนส่งว่ามี รายการชำระเงินที่ มีเลขที่กรมธรรม์ ซ้ำกันหรือไม่**
ถ้ามี ซ้ำกัน ให้ set GEN_RECEIPT = WAIT และ PROCESS_REMARK = "ชำระมากกว่า 1 รายการ รอรายการแรกประมวลผลเสร็จก่อน" ให้กับ policy ที่ซ้ำ โดยไม่ต้องเอาไปเข้ากระบวนการหางวดชำระต่อ
ตัวอย่าง
1. เช่น วันนี้ มีการชำระของ policy 0000001 มา 3 รายการ คือ 500, 500, 1500 บาท ตามลำดับเวลาการชำระเงิน
2. ให้ update GEN_RECEIPT และ PROCESS_REMARK ให้ กับ รายการที่ 2 และ 3 โดยไม่ต้องเอาไปเข้ากระบวนการหางวดชำระต่อ
Update ลง Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ของแต่ละรายการชำระเงิน รายการที่ 2 และ 3 (รายการที่ซ้ำ) ดังนี้
รายละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'WAIT' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "ชำระมากกว่า 1 รายการ รอรายการแรกประมวลผลเสร็จก่อน" |

**4.นำข้อมูลไปหาชื่อสำนักงานตัวแทน**
1.ให้นำ รหัสตัวแทน 7 หลัก ไปหาค่า รหัสสำนักงานตัวแทน (Office Code) โดยเรียกใช้ Web Service >> [WS_AGT_01 ค้นหาข้อมูลโครงสร้างตัวแทนด้วย รหัส สนญ. 7 หลัก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=570851838)
2.เมื่อได้ รหัสสำนักงานตัวแทน (Office Code) ให้นำไปหา ชื่อสำนักงานตัวแทน (Office Name) โดยเรียกใช้ Web Service >> [WS_AGT_08 ค้นหาข้อมูลสำนักงานตัวแทนด้วยรหัสสำนักงานตัวแทน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=595624548)
3.เมื่อได้ รหัสสำนักงานตัวแทน (Office Code) และ ชื่อสำนักงานตัวแทน (Office Name) แล้วให้อัพเดทข้อมูลลง Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ของแต่ละรายการชำระเงิน
กำหนดค่าดังนี้
รายละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| AGENT_OFFICE_CODE | รหัสสำนักงานตัวแทน | รหัสสำนักงานตัวแทน (Office Code) |
| AGENT_OFFICE_NAME | ชื่อสำนักงานตัวแทน | ชื่อสำนักงานตัวแทน (Office Name) |

**2.2 ตรวจสอบหางวดและหมายเหตุ ที่ AS/400**
**1.ตรวจสอบประเภทการชำระเงิน กับ แบบปะกัน เฉพาะรายการที่มีประเภทกรมธรรม์เป็น PA**
**ตรวจสอบประเภทการชำระเงิน กับ แบบปะกัน**
รายละเอียดดังนี้
1.ดึงข้อมูลแบบประกันของ PA ที่ AS/400
ที่ Table[PPALIB_TBPLANLP](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-+PPALIB_TBPLANLP)
ตัวย่างดังนี้

| Field | Description | Condition |
|---|---|---|
| plpcod | โค้ด จดหมาย | `plpid = [แบบประกัน]` |

| ตัวอย่าง Query |
|---|
| `select` `plpcod``-- ตัวอย่างค่าที่จะได้เช่น LP53, LP63` `from` `PPALIB_TBPLANLP``where` `plpid = [plan]` |

2.เมื่อได้ โค้ดจดหมาย(plpcod) ให้ตัด คำว่า "LP" ออก จากนั้น
3.จากนั้นให้นำข้อมูลที่เหลือ มาเทียบกับ ประเภทการชำระเงิน
4.ถ้าไม่ตรงกัน ให้ อัพเดท GEN_RECEIPT และ PROCESS_REMARK ลง Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ของแต่ละรายการชำระเงิน
กำหนดค่าดังนี้
รายละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'WAIT' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "รหัสประเภทการชำระ ไม่สัมพันธ์กับรหัสแบบประกัน" |

**2.หาข้อมูลกรมธรรม์ ดังนี้**
**หาข้อมูลกรมธรรม์ ประเภทกรมธรรม์ "สามัญ" (ORD)**
รายการละเอียดดังนี้
**1.ให้หาข้อมูลกรมธรรม์ สามัญ:**โดยเรียก Web Service >> [WS_IND_21_ค้นหาข้อมูลกรมธรรม์ ปช. ขพ. และสามัญ ด้วยเลขที่กรมธรรม์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=598278536) นำข้อมูลที่ได้ Update ลง
(ในSpec ระบบปัจจุบัน ไม่ได้ระบุ Web Service ที่ใช้ ยังไงรบกวนตรวจสอบก่อนนะคะ ว่าเขาใช้ตัวไหน)
รายการละเอียดดังนี้

| Mapping กับ Table PAYMENT_IMPORT_DETAIL | ข้อมูลจาก Web Service | รายละเอียด |
|---|---|---|
| COMMENCE_DATE | commencementDate | วันที่เริ่มสัญญา ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| PAID_UP_DATE | fullyPaidDate | วันที่ชำระครบ ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| PAYMENT_MODE | monthlyMode | จำนวนงวดที่ชำระ (Mode) ตัวอย่างข้อมูล เช่น 12 |
| LAST_PAYMENT_DATE | paidTo | Last Payment ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| POLICY_STATUS | policyStatusCode | สถานะกรมธรรม์ |
| CUSTOMER_AGE | ageAsOf | อายุ ผู้เอา- ประกัน (ณ วันทำประกัน) |
| SUM_INSURED | sumAssured | ทุนประกันหลัก |
| APPLICATION_NO | olis.olppolms.APPLI# | เลขที่ใบคำขอ |

**2. นำรหัสสาขา(7 หลัก) มาหาสังกัดและชื่อสาขา****ข้อมูลเขตงาน และสาขา**
รายการละเอียดดังนี้
ดึงข้อมูลจาก Table [HERMES - LIPS_PSPSLORG](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-++LIPS_PSPSLORG) โดยนำค่า BRANCH_CODE ที่ได้จากหาข้อมูลกรมธรรม์ ที่ มาหา ดังนี้
รหัสเขตงาน หรือสาขา (SLUNT# ) = BRANCH_CODE (รหัสสาขาที่ได้จากหาข้อมูลกรมธรรม์) ข้อมูลที่ได้ดังนี้
(ในSpec ระบบปัจจุบัน ไม่ได้ระบุ Web Service ที่ใช้ ยังไงรบกวนตรวจสอบก่อนนะคะ ว่าเขาใช้ตัวไหน)

| Map กับ table PAYMENT_IMPORT_DETAIL | Field (table lips.pspslorg) | รายละเอียด |
|---|---|---|
| SUBORDINATION | SLREL# | code สังกัด |
| BRANCH_NAME | SLUNNM | ชื่อสาขา |

**3.หา Last Payment ใหม่ ในแต่ละ กธ โดยจะมีการเช็คก่อนว่าเป็นกรรมธรรม์ที่เป็น APL รึป่าว**
1. หาโดยให้ดึงข้อมูลจาก ระบบ AS/400 Table ข้อมูลรายการกรมธรรม์ที่มีสถานะ APL ( [OLIS_OLPLOAHD](http://wiki.thaisamut.co.th/display/APP/OLIS.OLPLOAHD-Field)) ที่ มีเลขที่กรมธรรม์เดียวกับรายการชำระเงิน และมี สถานะเงินกู้ เป็น 'A' (Active)
(ในSpec ระบบปัจจุบัน ไม่ได้ระบุ Web Service ที่ใช้ ยังไงรบกวนตรวจสอบก่อนนะคะ ว่าเขาใช้ตัวไหน)
รายการละเอียดดังนี้
<![CDATA[SELECT 1 FROM OLIS.OLPLOAHD where LHPOL# =[เลขที่กรมธรรม์] and LHSTS@ = &#39;A&#39;]]>
2. กรณีพบว่า เป็น APL ให้หา Last Payment ใหม่ ดังนี้ ที่ ( OLIS.OLPRECTR ) ข้อมูลใบเสร็จเบี้ยประกัน
รายการละเอียดดังนี้
<![CDATA[select max(rctodt) as last_payment from olis.olprectr where rcpol# = [เลขที่กรมธรรม์] and rcsts@ = &#39;E&#39; and rcmet@ &lt;&gt; &#39;J&#39;;]]>
3. กรณีพบว่า ไม่เป็น APL ให้หา Last Payment ใหม่ ดังนี้
รายการละเอียดดังนี้
<![CDATA[select max(rctodt) as last_payment from olis.olprectr where rcpol# = [เลขที่กรมธรรม์] and rcsts@ = &#39;E&#39; ;]]>
**4.หา เบี้ยเสนอขายใหม่ (Rider เพิ่ม) :**เมื่อได้ Last Payment ใหม่ ในแต่ละ กธ แล้ว ให้นำมาหา ยอด Rider เพิ่ม
โดยหาเฉพาะกรณีที่ payment_category (แยกประเภทการชำระ) เป็น 'ORD_RIDER' เท่านั้น
รายการละเอียดดังนี้
1. ตรวจสอบที่ ข้อมูลเอกสาร (Table [OLIS_OLPGNTXT](/display/APP/OLIS_OLPGNTXT)) เงื่อนไขดังนี้
<![CDATA[select GNNPRM from OLIS.OLPGNTXT where GNPOL# = [เลขที่กรมธรรม์] and GNFRDT = [Last Payment]+1 -- (กำหนดชำระ) and GNCODE = [payment_type_code] ;]]>
1.1 กรณีเจอว่า เบี้ยเสนอขายใหม่ (GNNPRM) ให้กำหนด ดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | Set Value Field ( OLIS.OLPGNTXT) | รายละเอียด |
|---|---|---|
| NEW_RIDER_AMOUNT | GNNPRM | เบี้ย Rider ซื้อเพิ่ม |

1.2 กรณีไม่พบข้อมูลให้ ตรวจสอบต่อที่ Table olis.olpprems
<![CDATA[select PRM19Afrom olis.olpprems where polic# = [เลขที่กรมธรรม์] and rcfrdt = [Last Payment]+1 -- (กำหนดชำระ)]]>
1.3 กรณีที่พบข้อมูลซื้อเบี้ยเพิ่ม ให้กำหนด ดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | Set Value Field ( olis.olpprems) | รายละเอียด |
|---|---|---|
| NEW_RIDER_AMOUNT | PRM19A | เบี้ย Rider ซื้อเพิ่ม |

1.4 กรณีไม่พบข้อมูลเลยให้ ให้กำหนด ดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | Set Value | รายละเอียด |
|---|---|---|
| NEW_RIDER_AMOUNT | 0.00 | เบี้ย Rider ซื้อเพิ่ม |

**5.ตรวจสอบข้อมูลใบเสร็จ**
ให้ตรวจสอบข้อมูลที่ ข้อมูลใบเสร็จการชำระเบี้ย ดังนี้
รายการละเอียดดังนี้
1.ตรวจสอบข้อมูลตามเงื่อนไขนี้
<![CDATA[SELECT *FROM OLIS.OLPRECTR WHERE 1 = 1 AND RCPOL# = [เลขที่กรมธรรม์] AND RCFRDT = [Last Payment] + 1 -- (กำหนดชำระ) AND RCSTS@ IN (&#39;A&#39;,&#39;B&#39;,&#39;C&#39;)]]>
2.กรณีไม่พบข้อมูล ให้ถือว่าไม่เป็น APL และให้กำหนด อัพเดท GEN_RECEIPT และ PROCESS_REMARK ลง Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) และให้ทำรายการถัดไป
กำหนดค่าดังนี้
รายละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'FAIL' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "ไม่พบงวดใน AS/400" |

3.กรณีที่พบข้อมูล ให้ Mapping Field ที่ดึงมากับ Field ของ Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ดังนี้
กำหนดค่าดังนี้
รายละเอียดดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | Field (table olis.olprectr) ข้อมูลใบเสร็จการชำระเบี้ย | รายละเอียด |
|---|---|---|
| PREMIUM_AMOUNT | RCPOPR ถ้า RCPOPR = 9,999,999.99 ให้ อ่าน table olis.olppolpm.poltpr ถ้า olis.olppolpm.poltpr > 9,999,999.99 ให้ใช้ olis.olppolpm.poltpr เป็นเบี้ยหลัก | เบี้ยหลัก |
| PREMIUM_EXTRA_AMOUNT | RCPOEP | เบี้ยเพิ่มหลัก |
| RIDER_AMOUNT | RD13PR + RD13EP + RD24PR + RD@5PR + RD@6PR + RD@6EP + RD78PR + RD@9PR | เบี้ย Rider |
| TOTAL_PREMIUM_AMOUNT | RCPOPR + RCPOEP + RD13PR + RD13EP + RD24PR + RD@5PR + RD@6PR + RD@6EP + RD78PR + RD@9PR | เบี้ยรวมทั้งหมด |
| DUE_DATE | RCFRDT | กำหนดชำระ ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| DUE_END_DATE | RCTODT | ชำระถึง ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| AS400_PERIOD_STATUS | RCSTS@ | สถานะการสร้างใบเสร็จ โดย แต่ละสถานะ หมายถึงA = สร้างข้อมูลใบแจ้งแล้ว B = สร้างข้อมูลใบเสร็จ รอพิมพ์ C = พิมพ์ใบเสร็จแล้ว |
| YEAR_FROM | RCPYY# | ชำระ ปีที่ ตัวอย่างข้อมูล เช่น 1, 12 เป็นต้น |
| PERIOD_FROM | RCPYI# | ชำระ งวดที่ ตัวอย่างข้อมูล เช่น 1, 12 เป็นต้น |

**6.หาข้อมูลผลต่าง**
**หาข้อมูลผลต่างจากกรณีดังนี้**
**1. กรณีประเภทการชำระเงิน(**payment_type_code) เป็น** '51'**
รายการละเอียดดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|
| DIFF_AMOUNT | ผลต่าง = PAYMENT_AMOUNT - PREMIUM_AMOUNT - PREMIUM_EXTRA_AMOUNT - RIDER_AMOUNT เช่น จำนวนชำระ 3,000 บาท, เบี้ยหลัก 2,950 บาท, เบี้ยเพิ่มหลัก 0 บาท, เบี้ย Rider 0 บาท ดังนั้น ผลต่าง = 50.00 จำนวนชำระ 2,000 บาท, เบี้ยหลัก 2,500 บาท, เบี้ยเพิ่มหลัก 0 บาท, เบี้ย Rider 0 บาท ดังนั้น ผลต่าง = -500.00 จำนวนชำระ 2,000 บาท, เบี้ยหลัก 2,500 บาท, เบี้ยเพิ่มหลัก 0 บาท, เบี้ย Rider 0 บาท ดังนั้น ผลต่าง = 0.00 |

หาสถานะ GEN_RECEIPT และ PROCESS_REMARK

| เงื่อนไข | GEN_RECEIPT | PROCESS_REMARK |
|---|---|---|
| ถ้า DIFF_AMOUNT > 0.00 | GEN | จ่ายเกิน |
| ถ้า DIFF_AMOUNT < 0.00 เช็คต่อและ DIFF_AMOUNT >= -5.00 (**5.00 ให้ config ไว้**) ให้แสดงคำว่า "" (ถือว่าชำระได้) | GEN | "" (ไม่ต้องแสดงข้อความ) |
| นอกนั้น | FAIL | จ่ายขาด |
| ถ้า DIFF_AMOUNT = 0.00 | GEN | "" (ไม่ต้องแสดงข้อความ) |

**2. กรณีแยกประเภทการชำระ(PAYMENT_CATEGORY) เป็น 'ORD_RIDER'** (ประกอบด้วย เอกสาร 58 - ชำระเบี้ยสามัญ และ ซื้อ Rider เพิ่ม และ 62 - ชำระเบี้ยสามัญ และเสนอ DAB2)
รายการละเอียดดังนี้

| เงื่อนไข | ผลต่าง DIFF_AMOUNT | มีการซื้อ rider เพิ่มหรือเปล่าIS_PURCHASE_RIDER | GEN_RECEIPT | PROCESS_REMARK |
|---|---|---|---|---|
| ถ้า จำนวนชำระ < เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider **และ** จ่ายขาดเกิน 5 บาท | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | FAIL | จ่ายขาด |
| ถ้า จำนวนชำระ < เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider **และ** จ่ายขาดไม่เกิน 5 บาท | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | GEN | จ่ายขาด |
| ถ้า จำนวนชำระ = (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | GEN | "" (ไม่ต้องแสดงข้อความ) |
| ถ้า จำนวนชำระ > (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) และ จำนวนชำระ < (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider + Rider เพิ่ม) | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | GEN | จ่ายเกิน |
| ถ้า จำนวนชำระ >= (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider + Rider เพิ่ม) |   |   |   |   |
| เช็คว่า Rider เพิ่ม เป็นค่า NULL หรือไม่ |   |   |   |   |
| ถ้า Rider เพิ่ม ไม่ใช่ค่า NULL และ จำนวนชำระ >= (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider + Rider เพิ่ม) | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider + Rider เพิ่ม) | TRUE | GEN | ซื้อ rider เพิ่ม |
| ถ้า Rider เพิ่ม เป็นค่า NULL และ จำนวนชำระ = (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | GEN |   |
| ถ้า Rider เพิ่ม เป็นค่า NULL และ จำนวนชำระ > (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | ผลต่าง = จำนวนชำระ - (เบี้ยหลัก + เบี้ยเพิ่มหลัก + เบี้ย Rider) | FALSE | GEN | จ่ายเกิน |

**เมื่อหาผลต่างแล้วนำข้อมูลที่ได้มาตรวจสอบดังนี้**
หากพบว่า มีซื้อ rider เพิ่ม (is_purchase_rider = true) ให้ระบบดำเนินการดังนี้
1.กำหนดค่า เบี้ยรวมทั้งหมด ดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | Set Value | รายละเอียด |
|---|---|---|
| TOTAL_PREMIUM_AMOUNT | TOTAL_PREMIUM_AMOUNT + NEW_RIDER_AMOUNT | เบี้ยรวมทั้งหมด (เบี้ยหลัก+เบี้ยเพิ่มหลัก+เบี้ย Rider + เบี้ย Rider ซื้อเพิ่ม) |

2.ให้ส่งข้อมูลไปเว็บรับฝากเพื่อ update หมายเหตุที่ระบบเว็บรับฝาก (ซึ่ง web service นี้จะ**ส่งต่อ**ระบบ auto pos) ใช้ Web Service เดิมของเว็บรับฝาก
- **ข้อมูลที่ส่งไปให้เว็บรับฝาก**
รายการละเอียดดังนี้

| Field | คำอธิบาย |
|---|---|
| deposit_id | เลขที่รับฝาก |
| remark | หมายเหตุ ส่ง PROCESS_REMARK ตามด้วย "ซื้อ rider เพิ่ม รอสำนักงานใหญ่ออกใบเสร็จ" |
| refund_note | หมายเหตุ ส่ง PROCESS_REMARK ตามด้วย "ซื้อ rider เพิ่ม รอสำนักงานใหญ่ออกใบเสร็จ" |
| update_by | Fix "WS RECEIPT" |
| acoounting_status | 'N' |
| refund_status | 'Y' |

- **ข้อมูลที่เว็บรับฝากส่งกลับมาให้**
รายการละเอียดดังนี้

| Field | คำอธิบาย |
|---|---|
| deposit_id | เลขที่รับฝาก |
| status | SUCCESS , FAIL |
| error_desc | error หรือ ข้อผิดพลาด |

- กรณี**เว็บรับฝากส่งกลับมา**ว่า status = success ให้ระบบ update ข้อมูลที่ payment_import_detail
- กรณี**เว็บรับฝากส่งกลับมา**ว่า status = FAIL ระบบไม่ต้อง update ข้อมูลที่ payment_import_detail
**Remark :** ใช้ logic เดียวกับหน้าสร้างใบเสร็จ
**7.หาข้อมูลหมายเหตุ แสดงข้อความตามเงื่อนไข และกำหนด**
1.กำหนดค่า ซื้อ rider เพิ่ม (is_purchase_rider = true) ดังนี้
รายการละเอียดดังนี้
- **กรณีประเภทการชำระเงิน(**payment_type_code) เป็น** '51'**ให้กำหนดค่าของ field IS_PURCHASE_RIDER ( ซื้อ rider เพิ่ม) เป็น FALSE (หมายความว่า รายการนี้ไม่มีการซื้อ rider เพิ่ม)
- **กรณีแยกประเภทการชำระ(PAYMENT_CATEGORY) เป็น 'ORD_RIDER'** ให้กำหนดค่าของ field IS_PURCHASE_RIDER ( ซื้อ rider เพิ่ม) ตามค่าที่หาได้จาก **6.หาข้อมูลผลต่าง**
2. ตรวจสอบข้อมูลหมายเหตุ ตามเงื่อนไข และกำหนด GEN_RECEIPT ดังนี้ จากนั้น update หมายเหตุ และ GEN_RECEIPT ที่ table PAYMENT_IMPORT_DETAIL ที่ field PROCESS_REMARK, GEN_RECEIPT ตามลำดับ มีเงื่อนไขดังนี้
1.กรณีที่ไม่สามารถเชื่อมต่อหรือดึงข้อมูลที่ AS/400 ไม่ได้
รายการละเอียดดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'WAIT' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "ต่อ AS/400 ไม่ได้" |

2.ตรวจสอบสถานะกรมธรรม์ ให้ตรวจสอบตามเงื่อนไข
รายการละเอียดดังนี้
1. กรณีประเภทการชำระเงิน(payment_type_code) เป็น '51'****ให้ตรวจสอบ POLICY_STATUS (สถานะกรมธรรม์) ไม่ใช่ I หรือ F หรือ O หรือ W
2. กรณีแยกประเภทการชำระ(PAYMENT_CATEGORY) เป็น 'ORD_RIDER' ให้ตรวจสอบ POLICY_STATUS (สถานะกรมธรรม์) ไม่ใช่ I หรือ O หรือ W
หากรายการมี สถานะกรมธรรม์ เป็นไปตามเงื่อนไข อย่างใดอย่างหนึ่งของ ทั้ง 2 กรณี ให้ดำเดินการดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'FAIL' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดข้อความตามเงื่อนไงดังนี้POLICY_STATUS (สถานะกรมธรรม์)กำหนดข้อความFชำระครบE ขยายเวลาR ปิดบัญชีPปิดบัญชีอัตโนมัติCปฏิเสธZ ยกเลิกDมรณกรรมSเวนคืนL ขาดผลAเวนคืนอัตโนมัติTขาดผลครบ 5 ปีM ครบสัญญา |
| POLICY_STATUS (สถานะกรมธรรม์) | กำหนดข้อความ |
| F | ชำระครบ |
| E | ขยายเวลา |
| R | ปิดบัญชี |
| P | ปิดบัญชีอัตโนมัติ |
| C | ปฏิเสธ |
| Z | ยกเลิก |
| D | มรณกรรม |
| S | เวนคืน |
| L | ขาดผล |
| A | เวนคืนอัตโนมัติ |
| T | ขาดผลครบ 5 ปี |
| M | ครบสัญญา |

3.ประเภทการชำระเงิน(payment_type_code) เป็น '51'****และมี POLICY_STATUS (สถานะกรมธรรม์) เป็น F (ชำระครบ)
รายการละเอียดดังนี้
1.ให้ตรวจสอบข้อมูล APL ดังนี้
**เพิ่มเงื่อนไขสำหรับโครงการ APL Phase1**
![(info)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/information.png) ตรวจสอบข้อมูล APL ดังนี้
**SQL Statement**
<![CDATA[SELECT * FROM OLIS.OLPPAY01 WHERE 1 = 1 AND POLIC# = ? AND P0DUDT = ? -- DUE_DATE (กำหนดชำระ) AND P0WAY = &#39;J&#39;]]>
![(question)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/help_16.png) **ถ้าพบข้อมูล** ให้ถือว่าเป็น APL ให้ตรวจสอบเพิ่มเติม ดังนี้
ตรวจสอบการชำระเบี้ยเกินระยะเวลาผ่อนผัน หรือไม่ ดังนี้
Paid Day = ( PAYMENT_DATE (วันที่ชำระ) ลบ DUE_DATE (กำหนดชำระ) )
เช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558
หากวันที่ชำระคือ 03/03/2558 ถือว่ายังไม่เกินระยะเวลาผ่อนผัน
หากวันที่ชำระคือ 04/03/2558 ถือว่าเกินระยะเวลาผ่อนผัน
1. **ถ้าเกิน**ระยะเวลาผ่อนผัน (Paid Day > 31)

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'FAIL' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "ชำระเกินระยะเวลาผ่อนผัน" |

2.**ถ้าไม่เกิน**ระยะเวลาผ่อนผัน ให้ตรวจสอบเงื่อนไขเพิ่มเติมดังนี้
ตรวจข้อมูลการ Revert APL ดังนี้
**SQL Statement**
<![CDATA[SELECT * FROM OLIS.OLPAPLAR WHERE 1 = 1 AND ARPOL# = ? AND ARDUDT = ? -- DUE_DATE (กำหนดชำระ)]]>
_**2.1 ถ้าพบข้อมูล** ให้ตรวจสอบสถานะการทำ Revert APL ดังนี้
__2.1.1 ถ้าสถานะการทำ Revert APL(ARSTS@) = 'Y' ให้ทำตามขั้นตอนดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'GEN' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "" |

__2.1.2 ถ้าสถานะการทำ Revert APL(ARSTS@) <> 'Y' ให้ข้ามรายการไปโดยไม่ต้องทำอะไร เนื่องจากเป็นการรอประมวลผลการ Revert APL
_**2.2 ถ้าไม่พบข้อมูล** ให้ทำตามขั้นตอนดังนี้ (ระบบต้อง รอประมวลผลการทำ Auto Revert APL )

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'WAIT |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "รอประมวลผลการทำ Auto Revert APL ไม่เกิน 5 นาที" |

รอประมวลผลการทำ Auto Revert APL จากนั้น ให้บันทึกข้อมูลสำหรับ Revert APL ดังนี้ (หากระบบบัจจุบันมีเรียกใช้ Web Service ก็ให้ใช้ตัวเดียวกัน)
[- บันทึกข้อมูลสำหรับ Revert APL -]

| OLIS.OLPAPLAR |
|---|
| Field | Value | Remark |
| ARPOL# | policy_no |   |
| ARDUDT | OLIS/OLPPAY01.P0DUDT | แปลงให้เป็น 8 หลัก โดยให้ใส่ fix พศ. 25 ได้เลย |
| ARRC# | OLIS/OLPPAY01.P0NRC# |   |
| ARCRDT | System Current Date |   |
| ARCRTM | System Current Time |   |
| ARCRUS | User Login |   |
| ARCRPG | Program-ID | Fix "CRS_Ordgen" |

![(question)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/help_16.png) **ถ้าไม่พบข้อมูล** ให้ถือว่าไม่เป็น APL และให้ตรวจสอบเงื่อนไขในขั้นตอนถัดไป
2.กรณี ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น Null (Remark : ข้อมูลนี้ได้มาจาก Step ตรวจ APL ตั้งแต่ตอนหา Last payment )
กรณีที่ join กับ olis.olprectr แลัวไม่พบข้อมู ให้ ดึงข้อูล **รายการสัญญาเพิ่มเติม สามัญ**ทุก record rider ออกมาทั้งหมด ของกรมธรรม์นั้น
รายการละเอียดดังนี้
**SQL Statement**
<![CDATA[select * from olis.olpridms where polic# = [เลขกรมธรรม์]]]>
โดยวนตรวจสอบแต่ละ record ว่า ยังต้องชำระอยู่หรือเปล่า โดยตรวจสอบเงื่อนไขแต่ละตัว ดังนี้
ข้อมูลจาก Table [OLIS_OLPRIDMS](/display/APP/OLIS_OLPRIDMS) ( rdtodt คือ วันที่ชำระถึง , rdmtdt คือ วันที่ครบกำหนด )

| หา due_date_rider โดยนำ rdtodt + 1 วัน |
|---|

1. ถ้า due_date_rider < payment_date - 31 วัน ถือว่าขาดผล หา due_date_rider โดยนำ rdtodt + 1 วัน
ถ้าไม่เข้าเงื่อนไขให้ตรวจสอบต่อ 2. ถ้า due_date_rider >= rdmtdt ถือว่าชำระครบ ถ้าไม่เข้าเงื่อนไขให้ตรวจสอบต่อ 3. ถ้า due_date_rider < rdmtdt ถือว่ายังต้องชำระอยู่ ทำแบบนี้ทุก rider ของกรมธรรม์นั้น
- กรณีที่ไม่พบ record ที่ olis.olpridms ให้กำหนด PROCESS_REMARK เป็น "ชำระครบ"
- ถ้ามี record ใด record หนึ่งของ rider เป็นยังต้องชำระอยู่ ให้ กำหนด PROCESS_REMARK เป็น "ไม่พบงวดใน AS/400" และ ให้ set can_move_payment_history เป็น true และ GEN_RECEIPT เป็นWAIT
- ถ้ามี record ใด record หนึ่งของ rider เป็นขาดผล ให้กำหนด PROCESS_REMARK เป็น "เบี้ยสัญญาเพิ่มเติมเกินระยะเวลาผ่อนผัน"
- ถ้ามี record ใด record หนึ่งของ rider เป็นชำระครบ ให้กำหนด PROCESS_REMARK เป็น "เบี้ยสัญญาเพิ่มเติมชำระครบ"

| Remark : Table [PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-+PAYMENT_IMPORT_DETAIL)can_move_payment_history คือ flag เพื่อบอกว่าสามารถย้าย record นี้ไป table payment_history แบบ manual ได้หรือไม่ true = ย้ายได้false = ย้ายไม่ได้ |
|---|

3.กรณี ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น A (Remark : ข้อมูลนี้ได้มาจาก Step ตรวจ APL ตั้งแต่ตอนหา Last payment )
ให้ กำหนด PROCESS_REMARK เป็น "ไม่พบงวดใน AS/400" และ ให้ set can_move_payment_history = true , GEN_RECEIPT = WAIT
4.ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น B หรือ C และ PAYMENT_DATE (วันที่ชำระ) ลบ DUE_DATE (กำหนดชำระ) > 31 วัน
ตัวย่าง เช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558 หากวันที่ชำระคือ 03/03/2558 ถือว่ายังไม่เกินระยะเวลาผ่อนผัน หากวันที่ชำระคือ 04/03/2558 ถือว่าเกินระยะเวลาผ่อนผัน
- กรณีเกิน 31 วัน ให้ กำหนด PROCESS_REMARK เป็น "ชำระเกินระยะเวลาผ่อนผัน" และ GEN_RECEIPT เป็น FAIL
- หากไม่เกินระยะเวลาผ่อนผัน ให้ กำหนด PROCESS_REMARK เป็น "" และ GEN_RECEIPT เป็น GEN
4.ถ้า POLICY_STATUS (สถานะกรมธรรม์) เป็น I หรือ O หรือ W
รายการละเอียดดังนี้
1.ตรวจสอบข้อมูล APL
**เพิ่มเงื่อนไขสำหรับโครงการ APL Phase1**
![(info)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/information.png) ตรวจสอบข้อมูล APL ดังนี้
**SQL Statement**
<![CDATA[SELECT * FROM OLIS.OLPPAY01 WHERE 1 = 1 AND POLIC# = ? AND P0DUDT = ? -- DUE_DATE (กำหนดชำระ) AND P0WAY = &#39;J&#39;]]>
![(question)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/help_16.png) **ถ้าพบข้อมูล** ให้ถือว่าเป็น APL ให้ตรวจสอบเพิ่มเติม ดังนี้
ตรวจสอบการชำระเบี้ยเกินระยะเวลาผ่อนผัน หรือไม่ ดังนี้
Paid Day = ( PAYMENT_DATE (วันที่ชำระ) ลบ DUE_DATE (กำหนดชำระ) )
เช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558
หากวันที่ชำระคือ 03/03/2558 ถือว่ายังไม่เกินระยะเวลาผ่อนผัน
หากวันที่ชำระคือ 04/03/2558 ถือว่าเกินระยะเวลาผ่อนผัน
1. **ถ้าเกิน**ระยะเวลาผ่อนผัน (Paid Day > 31)

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'FAIL' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "ชำระเกินระยะเวลาผ่อนผัน" |

2.**ถ้าไม่เกิน**ระยะเวลาผ่อนผัน ให้ตรวจสอบเงื่อนไขเพิ่มเติมดังนี้
ตรวจข้อมูลการ Revert APL ดังนี้
**SQL Statement**
<![CDATA[SELECT * FROM OLIS.OLPAPLAR WHERE 1 = 1 AND ARPOL# = ? AND ARDUDT = ? -- DUE_DATE (กำหนดชำระ)]]>
_**2.1 ถ้าพบข้อมูล** ให้ตรวจสอบสถานะการทำ Revert APL ดังนี้
__2.1.1 ถ้าสถานะการทำ Revert APL(ARSTS@) = 'Y' ให้ทำตามขั้นตอนดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'GEN' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "" (ไม่ต้องแสดงข้อความ) |

__2.1.2 ถ้าสถานะการทำ Revert APL(ARSTS@) <> 'Y' ให้ทำตามขั้นตอนดังนี้
___2.1.2.1 ให้ข้ามรายการไปโดยไม่ต้องทำอะไร เนื่องจากเป็นการรอประมวลผลการ Revert APL
_**2.2 ถ้าไม่พบข้อมูล** ให้ทำตามขั้นตอนดังนี้

| Field | Description | Set Value |
|---|---|---|
| GEN_RECEIPT | สถานะที่บ่งบอกว่าสามารถนำไปสร้างใบเสร็จได้WAIT = สถานะรอ ยังไม่สามารถเอาไปออกใบเสร็จได้ ต้องรอตรวจสอบข้อมูลใหม่FAIL = ไม่สามารถนำไปออกใบเสร็จได้ เช่น เงินขาดหรือกรณีเวนคืน, ตายGEN = สามารถนำ record นี้ไปสร้างใบเสร็จได้เลย | กำหนดให้เป็น 'WAIT' |
| PROCESS_REMARK | ข้อความหมายเหตุที่แสดงท้าย column ของทุกรายการ | กำหนดให้เป็น "รอประมวลผลการทำ Auto Revert APL ไม่เกิน 5 นาที" |

จากนั้นให้บันทึกข้อมูลสำหรับ Revert APL ดังนี้ (หากระบบบัจจุบันมีเรียกใช้ Web Service ก็ให้ใช้ตัวเดียวกัน)
[- บันทึกข้อมูลสำหรับ Revert APL -]

| OLIS.OLPAPLAR |
|---|
| Field | Value | Remark |
| ARPOL# | policy_no |   |
| ARDUDT | OLIS/OLPPAY01.P0DUDT | แปลงให้เป็น 8 หลัก โดยให้ใส่ fix พศ. 25 ได้เลย |
| ARRC# | OLIS/OLPPAY01.P0NRC# |   |
| ARCRDT | System Current Date |   |
| ARCRTM | System Current Time |   |
| ARCRUS | User Login |   |
| ARCRPG | Program-ID | Fix "CRS_Ordgen" |

![(question)](/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/help_16.png) **ถ้าไม่พบข้อมูล** ให้ถือว่าไม่เป็น APL และให้ตรวจสอบเงื่อนไขในขั้นตอนถัดไป
2.กรณี ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น A หรือ NULL .
ให้ กำหนด PROCESS_REMARK เป็น "ไม่พบงวดใน AS/400" และ ให้ set can_move_payment_history เป็น true และ GEN_RECEIPT เป็น WAIT
3.ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น B หรือ C และ PAYMENT_DATE (วันที่ชำระ) ลบ DUE_DATE (กำหนดชำระ) > 31 วัน
ตัวย่าง เช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558 หากวันที่ชำระคือ 03/03/2558 ถือว่ายังไม่เกินระยะเวลาผ่อนผัน หากวันที่ชำระคือ 04/03/2558 ถือว่าเกินระยะเวลาผ่อนผัน
- กรณีเกิน 31 วัน ให้ กำหนด PROCESS_REMARK เป็น "ชำระเกินระยะเวลาผ่อนผัน" และ GEN_RECEIPT เป็น FAIL
- หากไม่เกินระยะเวลาผ่อนผันให้ตรวจสอบลำดับถัดไป
4..ถ้า AS400_PERIOD_STATUS (สถานะการสร้างใบเสร็จ) เป็น B หรือ C ให้หาว่ามีการชำระเกิน 1 ปี หรือไม่
โดยนำเดือนปัจจุบัน + 12 เทียบกับ เดือนของ DUE_END_DATE(ชำระถึง)
ตัวอย่าง เช่น Last Payment 6/6/2558 กำหนดชำระ - ชำระถึง คือ 7/6/2558 - 6/6/2559 วันที่ปัจจุบัน 3/3/2558 เดือนปัจจุบัน + 12 -> 3/2558 + 12 = 3/2559
ชำระถึง = 6/6/2559
ถ้า 6/2559 > 3/2559 ถือว่า ชำระเกิน 1 ปี
- กรณี ชำระล่วงหน้าเกิน 1 ปี ให้กำหนด PROCESS_REMARK เป็น "ชำระเกิน 1 ปี" และ GEN_RECEIPT เป็น FAIL
- ถ้าไม่เกิน 1 ปี ให้ ให้ตรวจสอบลำดับถัดไป
**8.สำหรับ payment_category (แยกประเภทการชำระ) เป็น 'ORD_RIDER' :**หากรายการใด มีค่า GEN_RECEIPT เป็น GEN และ IS_PURCHASE_RIDER = TRUE ให้ update process_status = 'SUCCESS' ที่ Table Table [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL) ไปเลย
**9.เมื่อตรวจสอบข้อมูลทั้งหมดเสร็จแล้ว ให้ตรวจสอบว่ารายการใด มีการสร้างงวดชำระซ้ำกับที่บันทึกใน table receipt แล้ว**
- เฉพาะรายการที่ process_status != 'SUCCESS'
- โดยตรวจจาก policy_no, due_date, receipt_status in ('N','W'), import_detail_id != import_detail_id ของตัวมันเอง
- ถ้ามีรายการไหนเข้าเงื่อนไข ให้ กำหนด GEN_RECEIPT เป็น WAIT และ กำหนด PROCESS_REMARK เป็น "พบงวดซ้ำ" ( ให้ wait ไปก่อนจนกว่ามีการ gen งวดมาใหม่ ทำให้งวดขยับขึ้น)
**หาข้อมูลกรมธรรม์ ประเภทกรมธรรม์ "อุตสาหกรรม"(IND ปช ,GOV ขพ)**
รายการละเอียดดังนี้
**1.ให้หาข้อมูลกรมธรรม์ อุตสาหกรรม:**โดยเรียก Web Service >> [WS_IND_21_ค้นหาข้อมูลกรมธรรม์ ปช. ขพ. และสามัญ ด้วยเลขที่กรมธรรม์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=598278536) นำข้อมูลที่ได้ Update ลง
(ในSpec ระบบปัจจุบัน ไม่ได้ระบุ Web Service ที่ใช้ ยังไงรบกวนตรวจสอบก่อนนะคะ ว่าเขาใช้ตัวไหน)
รายการละเอียดดังนี้

| Mapping กับ Table PAYMENT_IMPORT_DETAIL | ข้อมูลจาก Web Service | รายละเอียด |
|---|---|---|
| COMMENCE_DATE | commencementDate | วันที่เริ่มสัญญา ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |
| PREMIUM_MONTH_AMOUNT | basicPlanModalPremium (เบี้ยประกันสัญญาหลักรายงวด) | เบี้ยรายเดือน |
| LAST_PAYMENT_MODE | monthlyMode (โหมดการชำระ) | Mode การชำระเงินล่าสุด |
| POLICY_STATUS | policyStatusCode | สถานะกรมธรรม์ |
| CUSTOMER_AGE | ageAsOf | อายุ ผู้เอา- ประกัน (ณ วันทำประกัน) |
| CUSTOMER_GENDER | sex (เพศ )ให้ Mapping ข้อมูลดังนี้ข้อมูลที่ Web Service ส่งมาข้อมูลที่ Hermes เก็บMALE1FEMALE2 | เพศ ผู้เอา- ประกันอุตสาหกรรม : 1 คือ ชาย, 2 คือ หญิง |
| ข้อมูลที่ Web Service ส่งมา | ข้อมูลที่ Hermes เก็บ |
| MALE | 1 |
| FEMALE | 2 |
| SUM_INSURED | sumAssured (ทุนรวม) | ทุนประกันหลัก |

ข้อมูลที่ได้จาก Web Service เพื่อนำไปหาข้อมูลต่อ มีดังนี้

| ข้อมูลจาก Web Service | รายละเอียด |
|---|---|
| fullyPaid | เดือนที่ชำระครบ หรือ งวดที่ชำระครบ (YYMM หรือ MMYY รบกวนดูที่การ การส่งค่าของ Service อีกที) |
| paidTo | Last Payment งวดชำระถึง (ของงวดล่าสุด) |
| newFromSurrenderMark (mark 1=เคสใหม่ จากการ เวนคืน) | สถานะกรมธรรม์ที่เวนคืน |
| monthDeleteMark (สำหรับลบสิ้นเดือน สถานะบอกล้าง, ครบสัญญา หรือเวนคืน) | สถานะบอกล้าง, ครบสัญญา หรือเวนคืน |
| noPaidMark (Mark 1 = ห้ามรับเงิน) | Mark ห้ามรับเงิน |

**2.หา วันที่ชำระครบ จาก****เดือนที่ชำระครบ หรือ งวดที่ชำระครบ ที่ได้จาก****Web Service**
วิธีหาของ PAID_UP_DATE (วันที่ชำระครบ) ดังนี้
รายการละเอียดดังนี้
- ข้อมูลที่ได้จะเป็นเดือนที่ชำระครบ ต้องมาแปลงเป็นวันที่ชำระครบ โดยนำ วัน ของ วันที่ทำสัญญา มาใช้ ตัวอย่าง เช่น วันที่เริ่มสัญญา 31-10-2556
งวดที่ชำระครบ คือ 7609 -> วันที่ชำระครบ 30/09/2576 (เอาวันที่เริ่มสัญญามาแปะกับงวดที่ชำระครบ แล้วดูว่าเป็นวันที่มีอยู่จริงในปฏิทินไหม ถ้าไม่มีอยู่จริงให้ลดลงจนกว่าจะมีอยู่จริง)
**3.วันที่ชำระครั้งสุดท้าย จาก Last Payment งวดชำระถึง (ของงวดล่าสุด) **ที่ได้จาก****Web Service****
วิธีหาของ LAST_PAYMENT_DATE (วันที่ชำระครั้งสุดท้าย) ดังนี้
รายการละเอียดดังนี้
1. นำ [ Last Payment งวดชำระถึง (ของงวดล่าสุด) ] มาบวก 1 งวด
ตัวอย่าง เช่น [ Last Payment งวดชำระถึง (ของงวดล่าสุด)] = 5801
เมื่อนำมาบวก 1 งวด จะได้ 5802 (ํYYMM) (YYMM หรือ MMYY รบกวนดูที่การ การส่งค่าของ Service อีกที)
2. นำ วันของ วันที่เริ่มสัญญา มาใช้
ตัวอย่าง เช่น วันที่เริ่มสัญญา = 31/1/2536 จากข้อ 1 จะได้ งวด ให้ทำให้อยู่ในรูป MM/YYYY (พ.ศ.) และนำวันของ วันที่เริ่มสัญญา มาใช้
ดังนั้น จะได้ เป็น last payment date จะเป็น 31/02/2558
3.ให้นำข้อมูลจากข้อ 2 เทียบกับปฏิทิน ว่ามีอยู่จริงในปฏิทินไหม
- ถ้าไม่มีอยู่จริงให้ ลดลง 1 วัน (ลดลงทีละวันจนกว่าจะเจอวันทีที่มีอยู่จริง) ลดลงจนถึงวันที่ 28/02/2558 (ถือว่าเป็นวันที่ที่มีอยู่จริงในปฏิทิน )
- เมื่อเจอว่าเป็นวันที่ที่มีอยู่จริงแล้ว ให้ลดลง 1 วัน แล้วใช้วันนั้นได้เลย
ดังนั้น จาก ตัวอย่าง last payment date จะเป็น 27/02/2558
อ้างอิง >>[การคำนวน due date](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816535) <<
**4.หา จำนวนงวดที่ชำระ **จาก ****จำนวนเงินชำระ**** หารด้วย เบี้ยรายเดือน **ที่ได้จาก****Web Service******
วิธีหาของ PAYMENT_MODE (จำนวนงวดที่ชำระ) โดยนำ จำนวนเงินชำระ(PAYMENT_AMOUNT) หารด้วย เบี้ยรายเดือน จากนั้นนำผลที่ได้มาเทียบค่าเพื่อหา จำนวนงวดที่ชำระ ดังนี้
รายการละเอียดดังนี้
Unable to render {include} The included page could not be found.
**5.นำ Last Payment งวดชำระถึง (ของงวดล่าสุด) มาหาข้อมูลอื่นๆดังนี้**
รายการละเอียดดังนี้

| Mapping กับ Table PAYMENT_IMPORT_DETAIL | รายละเอียด | วิธีหาข้อมูล |
|---|---|---|
| PAYMENT_PERIOD_FROM | งวดกำหนดชำระ | ให้คำนวณหา งวดกำหนดชำระ จาก[Last Payment งวดชำระถึง (ของงวดล่าสุด)] + 1 งวดตัวอย่าง เช่น Last Payment = 12/57 ดังนั้น Next Payment = 01/58 |
| PAYMENT_PERIOD_TO | งวดชำระถึง | ให้คำนวณหา งวดชำระถึง จากงวดกำหนดชำระ + จำนวนงวดที่ชำระPAYMENT_PERIOD_FROM + PAYMENT_MODEตัวอย่าง เช่น งวดกำหนดชำระ = 0158จำนวนงวดที่ชำระ = 6ดังนั้น งวดชำระถึง = 06/58 |
| PAYMENT_PERIOD_FROM + PAYMENT_MODE |
| YEAR_FROM / PERIOD_FROM (ตั้งแต่ปีที่ / งวดที่) | ตั้งแต่ปีที่ / งวดที่ | ให้คำนวณหา ตั้งแต่ปีที่ / งวดที่ จากวันที่เริ่มสัญญา = 02/02/2555 ดังนั้นงวดแรก คือ 02/55 นำเอา [งวดกำหนดชำระ] - งวดแรก เช่น [งวดกำหนดชำระ] = 03/57 งวดแรก = 02/55 ดังนั้นถือว่าเป็นปีที่ 3 งวดที่ 2 |
| YEAR_TO / PERIOD_TO (ถึงปีที่ / งวดที่) | ถึงปีที่ / งวดที่ | ให้คำนวณหา ถึงปีที่ / งวดที่ จากวันที่เริ่มสัญญา = 02/02/2555 ดังนั้นงวดแรก คือ 02/55 นำเอา [งวดชำระถึง] - งวดแรก เช่น [งวดชำระถึง] = 05/57 งวดแรก = 02/55 ดังนั้นถือว่าเป็นปีที่ 3 งวดที่ 4 |
| DUE_DATE | กำหนดชำระ | ให้คำนวณหา วันที่กำหนดชำระ จาก[LAST_PAYMENT_DATE (วันที่ชำระครั้งสุดท้าย)] + 1ตัวอย่าง เช่น Last Payment Date = 11/01/2558กำหนดชำระ 12/01/2558 |
| DUE_END_DATE | ชำระถึง | ให้คำนวณดังนี้1. คิดจาก next payment + จำนวนงวดที่ชำระ + 1(next payment มาจาก Last Payment + 1)ตัวอย่าง เช่น next payment = 1157จำนวนงวดที่ชำระ 3 เดือนจะเป็น 1157 + 3 + 1 จะเท่ากับ 0258 2.ให้นำวัน ของ วันที่เริ่มสัญญา มาใช้ จากกรณีนี้วันที่เริ่มสัญญา = 31/1/2536last payment date จะเป็น 31/02/2558ดูว่า วันที่ 31/02/2558 มีอยู่จริงในปฏิทินไหม ถ้าไม่มีอยู่จริงให้ ลดลง 1 วัน (ลดลงทีละวันจนกว่าจะเจอวันทีที่มีอยู่จริง)ลดลงจนถึงวันที่ 28/02/2558 (ถือว่าเป็นวันที่ที่มีอยู่จริงในปฏิทิน หากเจอเป็นวันที่ที่มีอยู่จริงให้ลดลง 1 แล้วใช้วันนั้นได้เลย)ดังนั้น due_end_date จะเป็น 27/02/2558(ดูตัวอย่างการคำนวน due date อ้างอิง >>[การคำนวน due date](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816535) <<) |
| DISCOUNT_PERCENT | ส่วนลด(%) | 1. หาจำนวนเดือนที่ได้ส่วนลดหาก [จำนวนงวดที่ชำระ] < 6 ให้ = 0หาก [จำนวนงวดที่ชำระ] >= 6 ให้หาจำนวนเดือนที่ได้ส่วนลดวิธีคำนวณ >> [วิธีคำนวณส่วนลด](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816579)2. หา % ส่วนลดถ้า [จำนวนเดือนที่ได้ส่วนลด] อยู่ระหว่าง 0 - 5 ให้ = 0.0ถ้า [จำนวนเดือนที่ได้ส่วนลด] อยู่ระหว่าง 6 - 11 ให้ = 3.5ถ้า [จำนวนเดือนที่ได้ส่วนลด] อยู่ระหว่าง 12 ให้ = 7.5 |
| PREMIUM_AMOUNT | เบี้ย | ให้คำนวณตามสูตร[เบี้ย] x จำนวนงวดที่ชำระPREMIUM_MONTH_AMOUNT x PAYMENT_MODERemark : [เบี้ย] คือ เบี้ยรายเดือน ที่ได้จาก Web Service |
| PREMIUM_MONTH_AMOUNT x PAYMENT_MODE |
| PAYMENT_AF_DEDUCT_AMOUNT | เบี้ยสุทธิ (ชำระเบี้ย) | ให้คำนวณตามสูตร([เบี้ย] x [จำนวนงวดที่ชำระ]) - ([เบี้ย] x [จำนวนงวดที่ชำระ] x [ส่วนลด(%)] / 100.00)( PREMIUM_AMOUNT x PAYMENT_MODE ) - (( ( PREMIUM_AMOUNT x PAYMENT_MODE ) x DISCOUNT_PERCENT )/100) |
| ( PREMIUM_AMOUNT x PAYMENT_MODE ) - (( ( PREMIUM_AMOUNT x PAYMENT_MODE ) x DISCOUNT_PERCENT )/100) |
| DISCOUNT_AMOUNT | ส่วนลด(บาท) | ให้คำนวณตามสูตร([เบี้ย] x [จำนวนงวดที่ชำระ]) * [ส่วนลด(%) / 100]( ( PREMIUM_AMOUNT x PAYMENT_MODE ) x DISCOUNT_PERCENT )/100ตัวอย่าง เช่น เบี้ย 500.00 จำนวนงวดที่ชำระ 6 ส่วนลด 3.5% ดังนั้น ส่วนลด = 500.00 x 6 x 3.5 /100 = 105.00 |
| ( ( PREMIUM_AMOUNT x PAYMENT_MODE ) x DISCOUNT_PERCENT )/100 |
| DIFF_AMOUNT | ส่วนต่าง | ให้คำนวณตามสูตร [จำนวนเงินชำระ] ลบด้วย [ชำระเบี้ย]PAYMENT_AMOUNT - PAYMENT_AF_DEDUCT_AMOUNT |

**6.ตรวจสอบข้อมูล เพื่อกำหนดค่า ให้ PROCESS_REMARK และ GEN_RECEIPT**
รายการละเอียดดังนี้

| ลำดับ | เงื่อนไข | Set ข้อความ (**PROCESS_REMARK)** | Set Status (**GEN_RECEIPT**) |
|---|---|---|---|
| 1 | กรณีตรวจสอบ [รหัสตัวแทน 7 หลัก] แล้วมีค่าเป็น NULL | "ไม่มีรหัสตัวแทน 7 หลัก" | WAIT |
| 2 | ตรวจสอบงวดการชำระ ว่า "งวดการชำระซ้ำ" ตรวจสอบโดยการส่ง policyno ไปหาที่ [WS_IND_37_ค้นหาข้อมูลใบเสร็จอุตสาหกรรม (pslip + aslip) ปช./ขพ.](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=667714008) ให้ออกมาทุกรายการของ กธ. นี้ รายการละเอียดดังนี้ ข้อมูลที่ได้จาก Web Serviceoutput field ที่ต้องการรายละเอียดSTRPRDงวดชำระเริ่มต้น รูปแบบ YYMM(ปีพ.ศ.)ENDPRDงวดชำระสิ้นสุด รูปแบบ YYMM(ปีพ.ศ.)PAYFLGStamp Flag (A)Aslip คือยังไม่ชำระ and(P) Pslip คือชำระแล้วเพื่อจะดูว่างวดกำหนดชำระ(PAYMENT_PERIOD_FROM)และงวดชำระถึง(PAYMENT_PERIOD_TO) ที่ได้มาจาก hermes ไปตรวจสอบกับ list ที่ได้จาก ws ว่า งวดกำหนดชำระและงวดชำระถึงอยู่ในช่วง STRPRD และ ENDPRD และมีการชำระไปแล้ว(PAYFLG='P')หรือไม่ถ้าเจอแสดงว่างวดที่กำลังรับชำระมีการชำระมาแล้ว ให้แสดงข้อความว่างวดการชำระซ้ำกัน | "งวดการชำระซ้ำกัน" | WAIT |
| output field ที่ต้องการ | รายละเอียด |
| STRPRD | งวดชำระเริ่มต้น รูปแบบ YYMM(ปีพ.ศ.) |
| ENDPRD | งวดชำระสิ้นสุด รูปแบบ YYMM(ปีพ.ศ.) |
| PAYFLG | Stamp Flag (A)Aslip คือยังไม่ชำระ and(P) Pslip คือชำระแล้ว |
| 3 | กรณี สำหรับลบสิ้นเดือน สถานะบอกล้าง, ครบสัญญา หรือเวนคืน (monthDeleteMark จาก Web Service ตอนหาข้อมูลกรมธรรม์)มีค่าเป็น 'Y' | "สถานะบอกล้าง, ครบสัญญา หรือเวนคืน" | FAIL |
| 4 | กรณี ข้อมูล Mark ห้ามรับเงิน (noPaidMark จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) มีค่าเป็น 1 | "สถานะทุพพลภาพสิ้นเชิง ยกเว้นชำระเบี้ย" | FAIL |
| 5 | กรณีที่ สถานะกรมธรรม์ เป็น 99 (โอนไปต่างสาขา) | "สถานะโอนเคส" | WAIT |
| 6 | ตรวจสอบ สถานะกรมธรรม์ รายละเอียดดังนี้POLICY_STATUS (สถานะกรมธรรม์)Set ข้อความ (**PROCESS_REMARK)**Set Status (**GEN_RECEIPT**)กรณีที่สถานะกรมธรรม์ เป็น 5"เวนคืน"FAILกรณีที่สถานะกรมธรรม์ เป็น 7 และ (งวดชำระล่าสุด) เท่ากับ (งวดที่ชำระครบ) งวดชำระล่าสุด คือ Last Payment งวดชำระถึง (paidTo จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) งวดที่ชำระครบ คือ เดือนที่ชำระครบ หรือ งวดที่ชำระครบ (fullyPaid จาก Web Service ตอนหาข้อมูลกรมธรรม์ )"ชำระครบ"FAILกรณีที่สถานะกรมธรรม์ เป็น 8"มรณกรรม"FAILกรณีที่สถานะกรมธรรม์ เป็น 13"ทุพพลภาพ ยกเว้นชำระเบี้ยประกัน"FAILกรณีที่สถานะกรมธรรม์ เป็น 14"สิ้นผลบังคับ" FAILกรณีที่สถานะกรมธรรม์ เป็น 15"โอนเข้ากองทุน" FAILกรณีที่สถานะกรมธรรม์ เป็น 17"จ่ายครบสัญญา" FAILกรณีที่สถานะกรมธรรม์ เป็น18"สินไหมที่ สนญ" FAILกรณีที่สถานะกรมธรรม์ เป็น 19"เวนคืนที่สนญ"FAILกรณีที่สถานะกรมธรรม์ เป็น 20 และ (งวดชำระล่าสุด) เท่ากับ (งวดที่ชำระครบ) งวดชำระล่าสุด คือ Last Payment งวดชำระถึง (paidTo จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) งวดที่ชำระครบ คือ เดือนที่ชำระครบ หรือ งวดที่ชำระครบ (fullyPaid จาก Web Service ตอนหาข้อมูลกรมธรรม์ )ชำระครบ มีสมนาคุณที่สนญFAILตรวจสอบกรมธรรม์มีการบอกล้างหรือเปล่า จาก ilislib_uwbklmg2(hermes) where mgpol# ถ้าพบ record"บอกล้าง"FAIL |   | FAIL |
| POLICY_STATUS (สถานะกรมธรรม์) | Set ข้อความ (**PROCESS_REMARK)** | Set Status (**GEN_RECEIPT**) |
| กรณีที่สถานะกรมธรรม์ เป็น 5 | "เวนคืน" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 7 และ (งวดชำระล่าสุด) เท่ากับ (งวดที่ชำระครบ) งวดชำระล่าสุด คือ Last Payment งวดชำระถึง (paidTo จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) งวดที่ชำระครบ คือ เดือนที่ชำระครบ หรือ งวดที่ชำระครบ (fullyPaid จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) | "ชำระครบ" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 8 | "มรณกรรม" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 13 | "ทุพพลภาพ ยกเว้นชำระเบี้ยประกัน" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 14 | "สิ้นผลบังคับ" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 15 | "โอนเข้ากองทุน" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 17 | "จ่ายครบสัญญา" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น18 | "สินไหมที่ สนญ" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 19 | "เวนคืนที่สนญ" | FAIL |
| กรณีที่สถานะกรมธรรม์ เป็น 20 และ (งวดชำระล่าสุด) เท่ากับ (งวดที่ชำระครบ) งวดชำระล่าสุด คือ Last Payment งวดชำระถึง (paidTo จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) งวดที่ชำระครบ คือ เดือนที่ชำระครบ หรือ งวดที่ชำระครบ (fullyPaid จาก Web Service ตอนหาข้อมูลกรมธรรม์ ) | ชำระครบ มีสมนาคุณที่สนญ | FAIL |
| ตรวจสอบกรมธรรม์มีการบอกล้างหรือเปล่า จาก ilislib_uwbklmg2(hermes) where mgpol# ถ้าพบ record | "บอกล้าง" | FAIL |
| 7 | หาก [สถานะกรมธรรม์] ไม่ใช่ตาม ข้อ 6 ให้ตรวจสอบต่อตามข้างล่างนี้เงือนไขSet ข้อความ (**PROCESS_REMARK)**Set Status (**GEN_RECEIPT**)หาก [วันที่ชำระ] - [กำหนดชำระ] > 60 วันเช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558 หากวันที่ชำระคือ 01/04/2558 ถือว่ายังไม่ขาดผลหากวันที่ชำระคือ 02/04/2558 ถือว่าขาดผลเงื่อนไขให้แสดงคำว่าหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 6ปิดบัญชีหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 4ขาดผลหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 88ขาดผล(นอกทะเบียน)นอกนั้นชำระเกินระยะเวลาผ่อนผันFAILหาก [ส่วนต่าง] > 0จ่ายเกินGENหาก [ส่วนต่าง] < 0 แต่ [ส่วนต่าง] >= -5จ่ายขาด แต่ออกใบเสร็จได้ GENหาก [ส่วนต่าง] < -5จ่ายขาด FAILหาก [ส่วนต่าง] = 0""GEN |   |   |
| เงือนไข | Set ข้อความ (**PROCESS_REMARK)** | Set Status (**GEN_RECEIPT**) |
| หาก [วันที่ชำระ] - [กำหนดชำระ] > 60 วันเช่น กำหนดชำระ 01/02/2558 ชำระถึง 28/02/2558 หากวันที่ชำระคือ 01/04/2558 ถือว่ายังไม่ขาดผลหากวันที่ชำระคือ 02/04/2558 ถือว่าขาดผล | เงื่อนไขให้แสดงคำว่าหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 6ปิดบัญชีหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 4ขาดผลหากเกิน 60 วัน และ [สถานะกรมธรรม์] = 88ขาดผล(นอกทะเบียน)นอกนั้นชำระเกินระยะเวลาผ่อนผัน | FAIL |
| เงื่อนไข | ให้แสดงคำว่า |
| หากเกิน 60 วัน และ [สถานะกรมธรรม์] = 6 | ปิดบัญชี |
| หากเกิน 60 วัน และ [สถานะกรมธรรม์] = 4 | ขาดผล |
| หากเกิน 60 วัน และ [สถานะกรมธรรม์] = 88 | ขาดผล(นอกทะเบียน) |
| นอกนั้น | ชำระเกินระยะเวลาผ่อนผัน |
| หาก [ส่วนต่าง] > 0 | จ่ายเกิน | GEN |
| หาก [ส่วนต่าง] < 0 แต่ [ส่วนต่าง] >= -5 | จ่ายขาด แต่ออกใบเสร็จได้ | GEN |
| หาก [ส่วนต่าง] < -5 | จ่ายขาด | FAIL |
| หาก [ส่วนต่าง] = 0 | "" | GEN |
| 8 | เมื่อ set ค่าทั้งหมดแล้วให้ตรวจสอบและ set ค่าอีกครั้ง เพราะจะมีกรณีที่ชำระเกิน งวดสุดท้ายที่ต้องชำระ หรือ ชำระเกิน 1 ปีเงือนไขSet ข้อความ (**PROCESS_REMARK)**Set Status (**GEN_RECEIPT**)[งวดกำหนดชำระ] > [งวดที่ชำระครบ] ให้กำหนดค่าใหม่ ดังนี้จำนวนงวดที่ชำระ = ""งวดกำหนดชำระ = ""งวดชำระถึง = ""ตั้งแต่ ปี/งวด = ""ถึง ปี/งวด = ""กำหนดชำระ = ""ชำระถึง = ""จำนวนเดือนที่ได้ส่วนลด = 0ส่วนลด(%) = 0.00เบี้ยสุทธิ = 0.00ส่วนลด(บาท) = 0.00ส่วนต่าง = 0.00หมายเหตุ = "ชำระครบ"ถ้า [งวดกำหนดชำระ] >[งวดที่ชำระครบ] ให้GEN_RECEIPT = FAILถ้าไม่เช่นนั้น ให้ตรวจสอบลำดับถัดไปถ้า [งวดชำระถึง] > [งวดที่ชำระครบ] ให้หา จำนวนงวดที่ชำระ โดย ให้นำ [งวดที่ชำระครบ] - [งวดกำหนดชำระ] เช่น [งวดที่ชำระครบ] = 03/57 [งวดกำหนดชำระ] = 01/57 ดังนั้น จำนวนงวดที่ชำระ = 3ให้คำนวณค่าต่างๆใหม่ตามวิธีด้านบน ดังนี้งวดกำหนดชำระงวดชำระถึง ตั้งแต่ ปี/งวดถึง ปี/งวดกำหนดชำระชำระถึงจำนวนเดือนที่ได้ส่วนลดส่วนลด(%)เบี้ยสุทธิส่วนลด(บาท)ส่วนต่างหมายเหตุ = "จ่ายเกินงวดที่ชำระครบ รับชำระแค่ " + [จำนวนงวดที่ชำระ] + "เดือน"GEN_RECEIPT = GENเมื่อตรวจสอบเคสนี้เสร็จ ให้ตรวจสอบลำดับถัดไปหาว่ามีการชำระเกิน 1 ปี หรือไม่โดยนำเดือนปัจจุบัน + 12 เทียบกับ เดือนของ [งวดชำระถึง] ถ้า เดือนที่ ชำระถึง >เดือนปัจจุบัน + 12 ถือว่าชำระล่วงหน้าเกิน 1 ปี เช่น Last Payment 06/58 งวดกำหนดชำระ - งวดชำระถึง คือ 07/58 - 06/59 วันที่ปัจจุบัน 03/03/2558 เดือนปัจจุบัน + 12 -> 03/58 + 12 = 3/59 งวดชำระถึง = 06/59 ถ้า 06/59 > 03/59 ถือว่า ชำระเกิน 1 ปีให้รับชำระแค่ ไม่เกิน 1 ปี ดังนั้นจะรับชำระได้ถึง 03/59 เท่านั้นให้คำนวณค่าต่างๆใหม่ตามวิธีด้านบน ดังนี้งวดกำหนดชำระงวดชำระถึงตั้งแต่ ปี/งวดถึง ปี/งวดกำหนดชำระชำระถึงจำนวนเดือนที่ได้ส่วนลดส่วนลด(%)เบี้ยสุทธิส่วนลด(บาท)ส่วนต่างหมายเหตุ = "จ่ายล่วงหน้าเกิน 1 ปี"FAIL |   |   |
| เงือนไข | Set ข้อความ (**PROCESS_REMARK)** | Set Status (**GEN_RECEIPT**) |
| [งวดกำหนดชำระ] > [งวดที่ชำระครบ] | ให้กำหนดค่าใหม่ ดังนี้จำนวนงวดที่ชำระ = ""งวดกำหนดชำระ = ""งวดชำระถึง = ""ตั้งแต่ ปี/งวด = ""ถึง ปี/งวด = ""กำหนดชำระ = ""ชำระถึง = ""จำนวนเดือนที่ได้ส่วนลด = 0ส่วนลด(%) = 0.00เบี้ยสุทธิ = 0.00ส่วนลด(บาท) = 0.00ส่วนต่าง = 0.00หมายเหตุ = "ชำระครบ" | ถ้า [งวดกำหนดชำระ] >[งวดที่ชำระครบ] ให้GEN_RECEIPT = FAILถ้าไม่เช่นนั้น ให้ตรวจสอบลำดับถัดไป |
| ถ้า [งวดชำระถึง] > [งวดที่ชำระครบ] ให้ | หา จำนวนงวดที่ชำระ โดย ให้นำ [งวดที่ชำระครบ] - [งวดกำหนดชำระ] เช่น [งวดที่ชำระครบ] = 03/57 [งวดกำหนดชำระ] = 01/57 ดังนั้น จำนวนงวดที่ชำระ = 3ให้คำนวณค่าต่างๆใหม่ตามวิธีด้านบน ดังนี้งวดกำหนดชำระงวดชำระถึง ตั้งแต่ ปี/งวดถึง ปี/งวดกำหนดชำระชำระถึงจำนวนเดือนที่ได้ส่วนลดส่วนลด(%)เบี้ยสุทธิส่วนลด(บาท)ส่วนต่างหมายเหตุ = "จ่ายเกินงวดที่ชำระครบ รับชำระแค่ " + [จำนวนงวดที่ชำระ] + "เดือน" | GEN_RECEIPT = GENเมื่อตรวจสอบเคสนี้เสร็จ ให้ตรวจสอบลำดับถัดไป |
| หาว่ามีการชำระเกิน 1 ปี หรือไม่ | โดยนำเดือนปัจจุบัน + 12 เทียบกับ เดือนของ [งวดชำระถึง] ถ้า เดือนที่ ชำระถึง >เดือนปัจจุบัน + 12 ถือว่าชำระล่วงหน้าเกิน 1 ปี เช่น Last Payment 06/58 งวดกำหนดชำระ - งวดชำระถึง คือ 07/58 - 06/59 วันที่ปัจจุบัน 03/03/2558 เดือนปัจจุบัน + 12 -> 03/58 + 12 = 3/59 งวดชำระถึง = 06/59 ถ้า 06/59 > 03/59 ถือว่า ชำระเกิน 1 ปีให้รับชำระแค่ ไม่เกิน 1 ปี ดังนั้นจะรับชำระได้ถึง 03/59 เท่านั้นให้คำนวณค่าต่างๆใหม่ตามวิธีด้านบน ดังนี้งวดกำหนดชำระงวดชำระถึงตั้งแต่ ปี/งวดถึง ปี/งวดกำหนดชำระชำระถึงจำนวนเดือนที่ได้ส่วนลดส่วนลด(%)เบี้ยสุทธิส่วนลด(บาท)ส่วนต่างหมายเหตุ = "จ่ายล่วงหน้าเกิน 1 ปี" | FAIL |
| 9 | ถ้า [งวดที่ชำระครบ] เป็นค่า null หรือไม่มีค่า หรือเป็นค่า blank | "ไม่พบข้อมูลงวดที่ชำระครบ" | WAIT |

**7. **เมื่อตรวจสอบข้อมูลทั้งหมดเสร็จแล้ว ให้ตรวจสอบว่ารายการใด มีการสร้างงวดชำระซ้ำกับที่บันทึกใน table receipt แล้ว****
- โดยตรวจจาก policy_no, payment_period_from , receipt_status in ('N','W'), import_detail_id != import_detail_id ของตัวมันเอง
- ถ้ามีรายการไหนเข้าเงื่อนไข ให้ กำหนด GEN_RECEIPT เป็น WAIT และ กำหนด PROCESS_REMARK เป็น "พบงวดซ้ำ" ( ให้ wait ไปก่อนจนกว่ามีการ gen งวดมาใหม่ ทำให้งวดขยับขึ้น)
**หาข้อมูลกรมธรรม์ ประเภทกรมธรรม์ "PA"**
รายการละเอียดดังนี้
**1.หาข้อมูลกรมธรรม์ PA ที่ AS/400 จากการเรียก [HERMES - Web Service ดึงข้อมูลกรมธรรม์ PA จาก AS/400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=337117530)**
รายการละเอียดดังนี้

| Field จาก web service | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |   |   |
|---|---|---|---|---|
| commencement_date | COMMENCE_DATE | วันที่เริ่มสัญญา ตัวอย่างข้อมูล 340129(yymmdd) ให้แสดงเป็น 29/01/2534(dd/mm/yyyy) |   |   |
| cover_date | COVER_DATE | วันที่สิ้นสุดการคุ้มครอง |   |   |
| premium_amount | PREMIUM_AMOUNT | เบี้ยหลัก | ให้หาเบี้ยจากใบเสร็จปีละล่าสุด |   |
| total_premium_amount | TOTAL_PREMIUM_AMOUNT | เบี้ยรวม |   |   |
| policy_year | AS400_LAST_POLICY_YEAR | ปีกธ ล่าสุด |   |   |
| policy_status | POLICY_STATUScustomer_age | สถานะกรมธรรม์ |   |   |
| customer_age | CUSTOMER_AGE | อายุตอนที่ทำกรมธรรม์ |   |   |
| sum_insured | SUM_INSURED | ทุนคุ้มครอง |   |   |
| sum_insured_first_year | SUM_INSURED_FIRST_YEAR | ทุนคุ้มครองเริ่มต้น |   |   |
| application_no | APPLICATION_NO | เลขที่ใบคำขอ |   |   |
| can_renew | AS400_CAN_RENEW | FLAG ห้ามต่อสัญญา โดย TRUE ต่อสัญญาได้ FALSE ห้ามต่อสัญญา |   |   |
| can_renew_desc | AS400_RENEW_DESC | คำอธิบายห้ามต่อสัญญา |   |   |
| cover_date | LAST_PAYMENT_DATE | วันที่สิ้นสุดคุ้มครองปีล่าสุด |   |   |

หาข้อมูล PA อื่นๆ จาก service

| Field จาก web service | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|
| policy_year + 1 | YEAR_FROM | ปีที่ |
| Fix '1' | PERIOD_FROM | งวดที่ |
| cover_date | DUE_DATE | วันที่เริ่มคุ้มครอง |
| cover_date + 1 ปี | DUE_END_DATE | วันที่สิ้นสุดคุ้มครอง |
| Fix '12.00' | COVER_TIME_FROM | เวลาเริ่มต้นคุ้มครอง |
| Fix '12.00' | COVER_TIME_TO | เวลาสิ้นสุดคุ้มครอง |

**2.หาข้อมูล plan ที่ nbs_online**
ให้ดึงข้อมูลแบบประกันที่ **nbs_online**
รายการละเอียดดังนี้
<![CDATA[select plan_code, plan_name, cover_term, premium_term from pd_basic_plan_pa where plan_code_as400 = [plan] ;]]>
ข้อมูลที่ได้

| Field จาก pd_basic_plan_pa | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|
| plan_code | PLAN_CODE_NBS | รหัส plan ที่จะส่งไปบันทึกที่ NBS |
| plan_name | PLAN_NAME | ชื่อ plan |
| cover_term | cover_term | ระยะเวลาคุ้มครอง |
| premium_term | premium_term | ระยะเวลาชำระเบี้ย |

**3.หาทุนประกันปีต่อไป**
ให้ดึงอัตราเพิ่มทุน จาก [PPALIB_TBPLAN](http://wiki.thaisamut.co.th/display/APP/PPALIB_TBPLAN) ของ As/400
รายการละเอียดดังนี้
<![CDATA[select plnacs-- อัตราเพิ่มทุน from PPALIB.TBPLAN where plpid = [plan] ;]]>
ข้อมูลที่ได้ดังนี้

| Field | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|
| ได้ ข้อมูล plnacs (อัตราเพิ่มทุน)นำข้อมูลมาหา ทุนประกันปีต่อไป ดังนี้คำนวณทุนประกัน +(ทุนประกัน x อัตราเพิ่มทุน)ทุนประกัน คือ sum_insured (POLACS จาก web service) | SUM_INSURED_NEXT_YEAR | ทุนประกันปีต่อไป |
| ทุนประกัน +(ทุนประกัน x อัตราเพิ่มทุน) |

**4.ให้หาข้อมูลกรมธรรม์ PA จากข้อมูลกรมธรรม์ PA รายตัวแทน :**นำ เลขกรมธรรม์จาก payment_import_detail.policy_noไปค้นหาข้อมูลกรมธรรม์ที่ โดยเรียก Web Service >> [WS_PA_02 ค้นหาข้อมูลกรมธรรม์ PA รายตัวแทน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=689996110) นำข้อมูลที่ได้ Update ลง
รายการละเอียดดังนี้

| Field PAMaster | Field AS400 | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|---|
| pa84 | PPALIB_TBPOLICY.POLSTS | NBS_POLICY_STATUS | สถานะกรมธรรม์ |
| pa02c | PPALIB_TBPOLICY.POLPYY | NBS_LAST_POLICY_YEAR | ปีที่ของกรมธรรม์ |
| pa203a | PPALIB_TRNPAMAS.DNYPOL | NBS_MARK_RENEW | mark กรณีที่ห้ามต่อสัญญา |
| pa01s | PPALIB_TRNPAMAS.SRNSTS | NBS_MARK_SURRENDER | mark 1=เวนคืนทำใหม่ |
| pa18 | PPALIB_TRNPAMAS.CUSAGE | NBS_CUSTOMER_AGE | อายุผู้เอาประกัน |
| pa14 | PPALIB_TRNPAMAS.PAMOTC | NBS_CITIZEN_ID | เลขบัตรประจำตัวประชาชน |
| pa10 | PPALIB_TBCUSTOM.CUSADR | NBS_ADDRESS | ที่อยู่ ตามทะเบียนบ้าน |
| pa10a | PPALIB_TBCUSTOM.CUSTMB | NBS_SUBDISTRICT | ตำบล ตามทะเบียนบ้าน |
| pa10b | PPALIB_TBCUSTOM.CUSAMP | NBS_DISTRICT | อำเภอ ตามทะเบียนบ้าน |
| pa10c | PPALIB_TBCUSTOM.CUSPRV | NBS_PROVINCE | จังหวัด ตามทะเบียนบ้าน |
| pa11 | PPALIB_TBCUSTOM.CUSZIP | NBS_ZIPCODE | รหัสไปรษณีย์ ตามทะเบียนบ้าน |
| pa23 | PPALIB_TRNPAMAS.OCCPCD | NBS_OCCUPATION_CODE | รหัสอาชีพ |
| pa26 | PPALIB_TBPOLICY.POLOCC | NBS_OCCUPATION_CLASS | ชั้นอาชีพ |
| pa30 | PPALIB_TBBENEFI.BENNAM | NBS_BENEFIT_NAME | ชื่อผู้รับผลประโยชน์ |
| pa33 | PPALIB_TBBENEFI.BENADR | NBS_BENEFIT_ADDRESS | ที่อยู่ผู้รับผลประโยชน์ |
| pa32a1 | PPALIB_TBBENEFI.BENRLS [ข้อมูลแรก] | NBS_BENEFIT_RELATION_1 | ความสัมพันธ์กับผู้เอาประกัน 1 |
| pa32a2 | PPALIB_TBBENEFI.BENRLS [ข้อมูลในคอมม่าที่สอง] | NBS_BENEFIT_RELATION_2 | ความสัมพันธ์กับผู้เอาประกัน 2 |
| pa32a3 | PPALIB_TBBENEFI.BENRLS [ข้อมูลในคอมม่าที่สาม] | NBS_BENEFIT_RELATION_3 | ความสัมพันธ์กับผู้เอาประกัน 3 |
| pa32a4 | PPALIB_TBBENEFI.BENRLS [ข้อมูลในคอมม่าที่สี่] | NBS_BENEFIT_RELATION_4 | ความสัมพันธ์กับผู้เอาประกัน 4 |
| pa32a5 | PPALIB_TBBENEFI.BENRLS [ข้อมูลในคอมม่าที่ห้า] | NBS_BENEFIT_RELATION_5 | ความสัมพันธ์กับผู้เอาประกัน 5 |
| pa03 |   | AGENT_CODE5 ,AGENT_CODE_RECEIPT | รหัสตัวแทน 5 หลัก |
| pa03a |   | AGENT_CODE2 | รหัสตัวแทนช่วง |
| pa03c | LIPS.PSPAGTMS field AGTTTL + AGTNAM + AGTSNM | AGENT_NAME | ชื่อตัวแทนเจ้าของผลงาน |
| pa03f | PPALIB_TBPOLICY.POLAGN | AGENT_CODE7,AGENT_CODE_RECEIPT | รหัสตัวแทน 7 หลัก |
| pa03e | LIPS.PSPAGTMS field AGTTTL + AGTNAM + AGTSNM | NBS_LICENSE_AGENT_NAME, AGENT_NAME_RECEIPT | ชื่อตัวแทนมีใบอนุญาต |
| pa03d | LIPS.PSPAGTMS.AGTLCN | NBS_LICENSE_NO | เลขที่ใบอนุญาต |
| pa41 | PPALIB_TRNPAMAS.ADVNPM | NBS_TOTAL_PREMIUM_AMOUNT | เบี้ยรวมจาก NBS |

**5.หาอายุปัจจุบันของผู้เอาประกัน**จากการเรียก ws ข้อ 4. ให้มาค้นหาที่ข้อ 5. ด้วย
รายการละเอียดดังนี้
โดยหาได้จาก ข้อมูลอายุ ที่ Transaction ของ ไฟล์ PAMASTER เฉพาะข้อมูล กรมธรรม์

| Field PAMaster | Field AS400 | Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด |
|---|---|---|---|
| pa18 + 1 | PPALIB_TRNPAMAS.CUSAGE + 1 | CURRENT_CUSTOMER_AGE | อายุปัจจุบันของผู้เอาประกัน |

**6.กรณีที่ประเภทการชำระเงิน ( payment_type_code ) เป็น 63 (เบี้ยประกัน PA ปีต่อปี) ให้ หา****เบี้ยหลัก และ****เบี้ยรวม** ใหม่
รายการละเอียดดังนี้
โดยการหา เบี้ยชีวิต (**life_premium_amount) และ**เบี้ยหลัก (PREMIUM_AMOUNT ) และ เบี้ยรวม (TOTAL_PREMIUM_AMOUNT) ดังนี้

| Map กับ table PAYMENT_IMPORT_DETAIL | รายละเอียด | วิธีการหา |
|---|---|---|
| **life_premium_amount** | เบี้ยชีวิต | 1.ดึงข้อมูล ที่ table pd_sum_ins_pa จาก nbs เป็น transport รายการละเอียดดังนี้ <![CDATA[select pa_sum_ins_id, premium as life_premium_amount from pd_sum_ins_pa -- table จาก nbs เป็น transport where plan_code = [plan] and [CURRENT_CUSTOMER_AGE] BETWEEN min_age and max_age and sum_ins= [SUM_INSURED_FIRST_YEAR] ;]]> จะได้ข้อมูล life_premium_amount และ pa_sum_ins_id |
| PREMIUM_AMOUNT | เบี้ยหลัก | นำเบี้ยชีวิต ( life_premium_amount) และ pa_sum_ins_id มา ข้อมูล เบี้ยหลัก ดังนี้หาเบี้ยชดเชยกรมธรรม์อุบัติเหตุ (dab_premium) รายการละเอียดดังนี้ <![CDATA[select dab_premium from pd_dab_pa -- table จาก nbs เป็น transport where plan_code = [plan] and pa_sum_ins_id = [pa_sum_ins_id] ;-- จาก query ข้างบน]]> หาเบี้ยความคุ้มครองของกรมธรรม์อุบัติเหตุ (cov_premium) รายการละเอียดดังนี้ <![CDATA[select sum(cov_premium) from pd_coverage_pa -- table จาก nbs เป็น transport where pa_sum_ins_id = [pa_sum_ins_id] ;-- จาก query ข้างบน]]> นำ life_premium_amount บวก กับ dab_premium บวก กับ cov_premium จะได้ เป็น PREMIUM_AMOUNT |
| TOTAL_PREMIUM_AMOUNT | เบี้ยรวม | เบี้ยรวม = เบี้ยหลัก |

**7.ตรวจสอบจ่าย ขาด/เกิน จากจำนวนชำระ และ เบี้ยรวม**
รายการละเอียดดังนี้

| เงื่อนไข | ผลต่าง DIFF_AMOUNT | GEN_RECEIPT | PROCESS_REMARK |
|---|---|---|---|
| ถ้า payment_amount < total_premium_amount และจ่ายขาด ไม่เกิน 5 บาท | ผลต่าง = payment_amount - total_premium_amount | GEN | จ่ายขาด แต่ออกใบเสร็จได้ |
| ถ้า payment_amount < total_premium_amount และจ่ายขาด เกิน 5 บาท | ผลต่าง = payment_amount - total_premium_amount | FAIL | จ่ายขาด |
| ถ้า payment_amount = total_premium_amount | ผลต่าง = payment_amount - total_premium_amount | GEN |   |
| ถ้า payment_amount > total_premium_amount | ผลต่าง = payment_amount - total_premium_amount | GEN | จ่ายเกิน |

**8.ตรวจสอบเงื่อนไขต่างๆ**
รายการละเอียดดังนี้

| เรื่อง | เงื่อนไข | GEN_RECEIPT | PROCESS_REMARK |
|---|---|---|---|
| กรณีที่ไม่สามารถเชื่อมต่อหรือดึงข้อมูลที่ AS/400 |   | WAIT | ต่อ AS/400 ไม่ได้ |
| ตรวจสอบสถานะกรมธรรม์ที่ AS/400 | ถ้า POLICY_STATUS not in (I,L) | FAIL | สถานะกรมธรรม์ที่ AS/400 ไม่ใช่ Inforce |
|   | ถ้า POLICY_STATUS = 'L' ให้เช็ค grace period ต่อถ้า payment_type_code = 53 และ PAYMENT_DATE > COVER_DATE + 30 ให้เป็น IS_ON_TIME = false ถ้า payment_type_code = 63 และ PAYMENT_DATE > COVER_DATE วัน ให้เป็น False วันที่ชำระถึงคือ 1/7/59 วันสุดท้ายที่ชำระได้ คือ 31/7/59 ดังนั้น ถ้าวันที่ 1/8/59 ต้องถือว่าเกิน grace period แล้ว | FAIL | สถานะกรมธรรม์ที่ AS/400 ไม่ใช่ Inforce |
| ถ้า payment_type_code = 53 และ PAYMENT_DATE > COVER_DATE + 30 ให้เป็น IS_ON_TIME = false |
| ถ้า payment_type_code = 63 และ PAYMENT_DATE > COVER_DATE วัน ให้เป็น False วันที่ชำระถึงคือ 1/7/59 วันสุดท้ายที่ชำระได้ คือ 31/7/59 ดังนั้น ถ้าวันที่ 1/8/59 ต้องถือว่าเกิน grace period แล้ว |
| ตรวจสอบห้ามต่อสัญญา | ถ้า AS400_CAN_RENEW = false และ NBS_MARK_RENEW = '9' | FAIL | AS400 / NBS ห้ามต่อสัญญา |
|   | ถ้า AS400_CAN_RENEW = false |   | AS400 ห้ามต่อสัญญา กรุณาตรวจสอบการ mark ข้อมูลการต่อสัญญาที่ NBS |
|   | ถ้า NBS_MARK_RENEW = '9' |   | NBS ห้ามต่อสัญญา กรุณาตรวจสอบการ mark ข้อมูลการต่อสัญญาที่ AS400 |
| ตรวจสอบสถานะกรมธรรม์ที่ NBS | NBS_POLICY_STATUS <> 16 | FAIL | สถานะกรมธรรม์ ไม่ใช่ มีผลบังคับ |
| กรณี ตรวจสอบเบี้ย AS/400 ตรงกับ NBS แล้วไม่ตรงกัน | ตรวจสอบ โดยดึงข้อมูลด้วย Web Service>> [HERMES - Web Service ดึงข้อมูลกรมธรรม์ PA จาก AS/400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=337117530) จะได้ข้อมูล เบี้ยทั้งหมด (TOTAL_PREMIUM_AMOUNT ) และนำมาเทียบกับ เบี้ยรวมจาก NBS ( NBS_TOTAL_PREMIUM_AMOUNT) กรณีที่ไม่เท่ากัน set GEN_RECEIPT เป็น WAIT**Remark :** เบี้ยรวมจาก NBS ได้จาก Web Service ใน ข้อ **4.ให้หาข้อมูลกรมธรรม์ PA จากข้อมูลกรมธรรม์ PA รายตัวแทน** | WAIT | เบี้ยรวม AS/400(TOTAL_PREMIUM_AMOUNT ) ไม่เท่ากับ NBS(NBS_TOTAL_PREMIUM_AMOUNT) |
| ตรวจสอบ grace period | หา IS_ON_TIME ใหม่ | FAIL | เกินระยะเวลาผ่อนผัน |
| ถ้า payment_type_code = 53 และ PAYMENT_DATE > COVER_DATE + 30 ให้เป็น False |
| ถ้า payment_type_code = 63 และ PAYMENT_DATE > COVER_DATE วัน ให้เป็น False ถ้าวันที่ชำระถึงคือ 1/7/59 วันสุดท้ายที่ชำระได้ คือ 31/7/59 ดังนั้น ถ้าวันที่ 1/8/59 ต้องถือว่าเกิน grace period แล้ว |
| ถ้า IS_ON_TIME = false ให้เป็น GEN_RECEIPT = FAIL |
| ตรวจสอบว่าอยู่ในช่วงอายุที่สามารถต่ออายุ เทียบอายุปัจจุบันกับ อายุต่อประกันสูงสุด CURRENT_CUSTOMER_AGE (อายุปัจจุบัน) เช็คกรณีที่ PLMAXR > 0 เท่านั้น | CURRENT_CUSTOMER_AGE > PLMAXR from ppalib_tbplan where plnid = รหัสแบบประกัน | FAIL | อายุปัจจุบัน มากกว่า อายุต่อประกันสูงสุด |
| ตรวจสอบ จำนวนปีที่ต่อได้สูงสุด ว่ามากกว่าที่กำหนดไว้หรือยัง เช็คกรณีที่ PLMXYR > 0 เท่านั้น | YEAR_FROM > PLMXYR from ppalib_tbplan where plnid = รหัสแบบประกัน | FAIL | เกินจำนวนปีสูงสุดที่สามารถต่อสัญญาได้ |
| ตรวจสอบว่า ชำระล่วงหน้าเกิน 1 ปีได้ไหม (คิดเหมือนสามัญ) | นำวันที่ชำระ เทียบกับ วันที่ due_dateโดยนำวันที่ due_date ถอยไป 2 เดือนหากวันที่ชำระ < วันที่ due_date ถอยไป 2 เดือน ถือว่าจ่ายล่วงหน้าเช่นวันที่ชำระคือวันที่ 28/02/2558 วันที่ due คือวันที่ 29/04/2558 และวันที่ due ถอยไป 2 เดือน จะเป็นวันที่ 28/02/2558ดังนั้นถ้าชำระวันที่ 28/02/2558 ยังออกใบเสร็จได้ แต่ถ้าชำระวันที่ 27/02/2258 ถือว่าจ่ายล่วงหน้า | FAIL | ชำระล่วงหน้าเกิน 1 ปี |

9.**เมื่อตรวจสอบข้อมูลทั้งหมดเสร็จแล้ว ให้ตรวจสอบว่ารายการใด มีการสร้างงวดชำระซ้ำกับที่บันทึกใน table receipt แล้ว**
- โดยตรวจจาก policy_no, due_date, receipt_status in ('N','W'), import_detail_id != import_detail_id ของตัวมันเอง
- ถ้ามีรายการไหนเข้าเงื่อนไข ให้ กำหนด GEN_RECEIPT เป็น WAIT และ กำหนด PROCESS_REMARK เป็น "พบงวดซ้ำที่ระบบใบเสร็จส่วนกลาง" ( ให้ wait ไปก่อนจนกว่ามีการ gen งวดมาใหม่ ทำให้งวดขยับขึ้น)
รายการละเอียดดังนี้
<![CDATA[select count(1) receipt_dup from receipt where last_policy_no = policy_no and due_date = [วันที่เริ่มต้นคุ้มครอง] and receipt_status in (&#39;N&#39;,&#39;W&#39;) and import_detail_id != import_detail_id]]>
อ้างอิง [2.TQP-MSA-02 : Micro service สำหรับ Generate Thai QR Code Payment](/pages/viewpage.action?pageId=768966926)

---

## Hyperlinks บนหน้านี้

- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [IMPORT_HEADER](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+IMPORT_HEADER)
- [IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HYDRA+-+IMPORT_DETAIL)
- [กดปุ่ม ตรวจสอบข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317#HERMES-3.0%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%9A%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5)
- [ถ่ายข้อมูลระบบ Hydra](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317#HERMES-3.0%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%9A%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9AHydra)
- [HERMES - 3.0 สร้างใบเสร็จอุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=262996317)
- [HERMES - 1.0 สร้างใบเสร็จสามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=261587254)
- [HERMES - 28.0 สร้างใบเสร็จ PA ปีต่อ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=336822794)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [WS_AGT_01 ค้นหาข้อมูลโครงสร้างตัวแทนด้วย รหัส สนญ. 7 หลัก](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=570851838)
- [WS_AGT_08 ค้นหาข้อมูลสำนักงานตัวแทนด้วยรหัสสำนักงานตัวแทน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=595624548)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [PPALIB_TBPLANLP](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-+PPALIB_TBPLANLP)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [WS_IND_21_ค้นหาข้อมูลกรมธรรม์ ปช. ขพ. และสามัญ ด้วยเลขที่กรมธรรม์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=598278536)
- [HERMES - LIPS_PSPSLORG](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-++LIPS_PSPSLORG)
- [OLIS_OLPLOAHD](http://wiki.thaisamut.co.th/display/APP/OLIS.OLPLOAHD-Field)
- [OLIS_OLPGNTXT](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPGNTXT)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [OLIS_OLPRIDMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPRIDMS)
- [PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RDSOTHCHPAY/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [HERMES - PAYMENT_IMPORT_DETAIL](http://wiki.thaisamut.co.th/display/RnD/HERMES+-+PAYMENT_IMPORT_DETAIL)
- [WS_IND_21_ค้นหาข้อมูลกรมธรรม์ ปช. ขพ. และสามัญ ด้วยเลขที่กรมธรรม์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=598278536)
- [การคำนวน due date](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816535)
- [การคำนวน due date](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816535)
- [วิธีคำนวณส่วนลด](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=773816579)
- [WS_IND_37_ค้นหาข้อมูลใบเสร็จอุตสาหกรรม (pslip + aslip) ปช./ขพ.](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=667714008)
- [HERMES - Web Service ดึงข้อมูลกรมธรรม์ PA จาก AS/400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=337117530)
- [PPALIB_TBPLAN](http://wiki.thaisamut.co.th/display/APP/PPALIB_TBPLAN)
- [WS_PA_02 ค้นหาข้อมูลกรมธรรม์ PA รายตัวแทน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=689996110)
- [HERMES - Web Service ดึงข้อมูลกรมธรรม์ PA จาก AS/400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=337117530)
- [2.TQP-MSA-02 : Micro service สำหรับ Generate Thai QR Code Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=768966926)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/771555985/import%20data%20from%20hydra.jpg?version=1&modificationDate=1594636661493&api=v2
