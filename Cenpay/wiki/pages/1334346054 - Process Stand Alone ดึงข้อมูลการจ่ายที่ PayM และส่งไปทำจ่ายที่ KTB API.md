# Process Stand Alone ดึงข้อมูลการจ่ายที่ PayM และส่งไปทำจ่ายที่ KTB API

- **Page ID:** 1334346054
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1334346054
- **Path:** Home > Functional Specification > 02. Process Specification. > API Payment > Process Stand Alone ดึงข้อมูลการจ่ายที่ PayM และส่งไปทำจ่ายที่ KTB API
- **Depth:** 4

---

![img](/download/attachments/1334346054/image2026-5-29%2013%3A44%3A57.png?version=1&modificationDate=1780037097389&api=v2)

| Step | Process | Description | Example Data |
|---|---|---|---|
| **1** | **จองและดึงข้อมูล** *(ทำทุก 5 นาที)**เริ่มทำงาน 8.00 - *23.59 ของทุกวัน** | 1.1 ระบบ Stand Alone จะเรียก Process ที่ PayM สำหรับค้นหาข้อมูลที่**ยังไม่เคยถูกดึงไปทำจ่ายที่ API Payment** ที่ [WS จองรายการจ่าย API Payment](/pages/viewpage.action?pageId=1280475263)โดย**ล็อก (Lock)** ทั้งรายการนี้ทันที โดยเปลี่ยนสถานะเป็น **'P' (Processing)** พร้อมบันทึกเวลาที่ดึงไว้1.2 ผลลัพธ์ที่ได้คือ "รหัสรายการ ([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id)" ทั้งหมด | ก่อนดึงข้อมูล วันที่ปัจจุบัน 20/05/2569payment_detail_idpaid_dateflag_otp api_payment_status api_called_at101/05/2569Y 201/05/2569Y 301/05/2569Y 401/05/2569Y ..2001/05/2569Y หลังดึงข้อมูลสำเร็จpayment_detail_idpaid_dateflag_otpapi_payment_statusapi_called_at101/05/2569YP20/05/2569 8:00:00201/05/2569YP20/05/2569 8:00:00301/05/2569YP20/05/2569 8:00:00401/05/2569YP20/05/2569 8:00:00..2001/05/2569YP20/05/2569 8:00:00 |
| payment_detail_id | paid_date | flag_otp | api_payment_status | api_called_at |
| 1 | 01/05/2569 | Y |   |   |
| 2 | 01/05/2569 | Y |   |   |
| 3 | 01/05/2569 | Y |   |   |
| 4 | 01/05/2569 | Y |   |   |
| ..20 | 01/05/2569 | Y |   |   |
| payment_detail_id | paid_date | flag_otp | api_payment_status | api_called_at |
| 1 | 01/05/2569 | Y | P | 20/05/2569 8:00:00 |
| 2 | 01/05/2569 | Y | P | 20/05/2569 8:00:00 |
| 3 | 01/05/2569 | Y | P | 20/05/2569 8:00:00 |
| 4 | 01/05/2569 | Y | P | 20/05/2569 8:00:00 |
| ..20 | 01/05/2569 | Y | P | 20/05/2569 8:00:00 |
| **2** | **แบ่งกลุ่มส่งข้อมูลให้ธนาคาร** | 2.1 นำรหัสรายการทังหมด รายการจากข้อ 1 มาแบ่งเป็นกลุ่มย่อย กลุ่มละ **5 รายการ และ****เริ่มทำทีละกลุ่ม:***เนื่องจาก API ธนาคาร Limit 5 Transaction Per Second*2.2 ไปดึงรายละเอียดข้อมูลการจ่ายเงินของ 5 รายการนั้นจาก PayM ที่[WS สำหรับดึงรายการจ่าย API Payment ที่ Payment Managemet](/pages/viewpage.action?pageId=1339195564)ประกอบข้อมูล Config ที่ Stand Alone ดังนี้FieldMapping DataExamplerequestUIDrunning id400000010930000001channelIDProcess request channel (provided by partner)OCEAN01termIDTerminal ID (provided by Krungthai Bank)KTB-SANDBOXcompIdCompany IDSAND0000712.3 ส่งข้อมูลไปยัง [KTB API](/display/RDSCPENH/KTB+API+Specification) โดยแยกตามประเภท API ตาม Step ดังนี้NoStepผลลัพธ์ 2**Authentication**ได้ Token สำหรับ Step3,43**Inquiry Account Status**ตรวจสอบ Response.StatusCodeสถานะดำเนินการIC000ให้ดำเนินการเรียก **Fund Transfer**เพื่อทำจ่ายอื่นๆทำต่อข้อ 34**Fund Transfer**ทำต่อข้อ 32.4 รอ (Delay) 1 วินาที แล้วค่อยเริ่มทำกลุ่มถัดไปจนครบหมด | ตัวอย่างการแบ่งกลุ่มวันและเวลารายการ20/05/2569 8:00:01รายการที่ 1-520/05/2569 8:00:02รายการที่ 6-1020/05/2569 8:00:03รายการที่ 11-1520/05/2569 8:00:04รายการที่ 16-20 |
| Field | Mapping Data | Example |
| requestUID | running id | 400000010930000001 |
| channelID | Process request channel (provided by partner) | OCEAN01 |
| termID | Terminal ID (provided by Krungthai Bank) | KTB-SANDBOX |
| compId | Company ID | SAND000071 |
| No | Step | ผลลัพธ์ |
| 2 | **Authentication** | ได้ Token สำหรับ Step3,4 |
| 3 | **Inquiry Account Status** | ตรวจสอบ Response.StatusCodeสถานะดำเนินการIC000ให้ดำเนินการเรียก **Fund Transfer**เพื่อทำจ่ายอื่นๆทำต่อข้อ 3 |
| สถานะ | ดำเนินการ |
| IC000 | ให้ดำเนินการเรียก **Fund Transfer**เพื่อทำจ่าย |
| อื่นๆ | ทำต่อข้อ 3 |
| 4 | **Fund Transfer** | ทำต่อข้อ 3 |
| วันและเวลา | รายการ |
| 20/05/2569 8:00:01 | รายการที่ 1-5 |
| 20/05/2569 8:00:02 | รายการที่ 6-10 |
| 20/05/2569 8:00:03 | รายการที่ 11-15 |
| 20/05/2569 8:00:04 | รายการที่ 16-20 |
| **3** | **ตรวจสอบและส่งซ้ำ (Retry)** | 3.1 หลังจากส่งครบทั้งทุกรายการแล้ว ตรวจสอบว่ามีรายการไหนที่ส่งไปธนาคาร KTB ยังไม่สำเร็จ นำไปต่อคิวส่งซ้ำเงื่อนไขดำเนินการHttp Status 429 (Rate Limit)ให้ระบบเรียก [KTB API](/display/RDSCPENH/KTB+API+Specification) Step 3. **Fund Transfer** โดยสามารถนำรายการ transaction_no (TransRefno) เดิมมา Retry ส่งใหม่ได้EM066ให้ระบบเรียก [KTB API](/display/RDSCPENH/KTB+API+Specification) Step 5. **Inquiry Transfer Status**ใหม่อีกครั้งเพื่อตรวจสอบสถานะ สถานะอื่นๆทำต่อข้อ 4 | กรณีรายการที่ส่งไม่สำเร็จ รายการที่ 5วันและเวลารายการ20/05/2569 8:00:01รายการที่ 1-520/05/2569 8:00:02รายการที่ 6-1020/05/2569 8:00:03รายการที่ 11-1520/05/2569 8:00:04รายการที่ 16-2020/05/2569 8:00:05รายการที่ 5 ส่งซ้ำ |
| เงื่อนไข | ดำเนินการ |
| Http Status 429 (Rate Limit) | ให้ระบบเรียก [KTB API](/display/RDSCPENH/KTB+API+Specification) Step 3. **Fund Transfer** โดยสามารถนำรายการ transaction_no (TransRefno) เดิมมา Retry ส่งใหม่ได้ |
| EM066 | ให้ระบบเรียก [KTB API](/display/RDSCPENH/KTB+API+Specification) Step 5. **Inquiry Transfer Status**ใหม่อีกครั้งเพื่อตรวจสอบสถานะ |
| สถานะอื่นๆ | ทำต่อข้อ 4 |
| วันและเวลา | รายการ |
| 20/05/2569 8:00:01 | รายการที่ 1-5 |
| 20/05/2569 8:00:02 | รายการที่ 6-10 |
| 20/05/2569 8:00:03 | รายการที่ 11-15 |
| 20/05/2569 8:00:04 | รายการที่ 16-20 |
| 20/05/2569 8:00:05 | รายการที่ 5 ส่งซ้ำ |
| **4** | **อัปเดตผลลัพธ์กลับระบบหลัก** | 4.1 เมื่อได้รับผลตอบกลับจากธนาคาร KTB จาก Step 3,44.2 ระบบ Stand Alone จะส่งผลนั้นกลับไปอัปเดตที่ระบบ PayM ทันที เพื่อเปลี่ยนสถานะจาก 'P' ให้เป็นสถานะสิ้นสุด (เช่น Success หรือ Fail)Update Data table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)FieldMapping Dataapi_payment_statusกรณีได้ Response.StatusCode ให้บันทึกเป็น Sกรณีไม่ได้ Response.StatusCode ให้บันทึกเป็น Fapi_retry_roundapi_retry_round + 1api_status_codeResponse.StatusCodeapi_status_descResponse.statusDescstatusตรวจสอบ [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '74000'[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = Response.StatusCodeกรณี[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config บันทึกRET ไม่บันทึก status และทำต่อข้อ 4.3อื่นๆบันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config 4.3 กรณีสถานะเป็นกลุ่ม Retry ให้เปลี่ยน Transaction_no และ ให้ระบบทำการเคลียร์**สถานะกลับไปเป็นว่าง (Null)** และลบเวลาที่บันทึกไว้ เพื่อให้ระบบสามารถวนกลับมาดึงไปประมวลผลใหม่ได้ในข้อ 1Update Data table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)FieldMapping datatransaction_noGenerate Running ตาม pattern transaction_no ที่ [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern)api_payment_statusNULLapi_called_atNULLupdated_dateวันและเวลาปัจจุบันupdated_by'SYSTEM' | เมื่อได้ผลตอบกลับจากธนาคารpayment_detail_idtransaction_noapi_payment_statusapi_called_atapi_retry_roundapi_status_codeapi_status_descstatus1202605200001S20/05/2569 8:00:001EV033inactiveREJ2202605200002S20/05/2569 8:00:001IC000Fund Transfer is Executed SuccessfullyPAI3202605200003S20/05/2569 8:00:001EM003Fund Transfer is Executed Fail FAI4202605200004F20/05/2569 8:00:003EM058Your request can not be complete at this time, Please try again later ..20202605200020P20/05/2569 8:00:001 รายการที่สถานะอยู่ในกลุ่ม Retrypayment_detail_idtransaction_noapi_payment_statusapi_called_atapi_retry_roundapi_status_codeapi_status_descstatus1202605200001S20/05/2569 08:00:001EV033inactiveREJ2202605200002S20/05/2569 08:00:001IC000Fund Transfer is Executed SuccessfullyPAI3202605200003S20/05/2569 08:00:001EM003Fund Transfer is Executed Fail FAI4202605010021NULLNULL3EM058Your request can not be complete at this time, Please try again later ..20202605200020P20/05/2569 08:00:001 |
| Field | Mapping Data |
| api_payment_status | กรณีได้ Response.StatusCode ให้บันทึกเป็น Sกรณีไม่ได้ Response.StatusCode ให้บันทึกเป็น F |
| api_retry_round | api_retry_round + 1 |
| api_status_code | Response.StatusCode |
| api_status_desc | Response.statusDesc |
| status | ตรวจสอบ [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).parent_id = '74000'[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).lookup_key = Response.StatusCodeกรณี[cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config บันทึกRET ไม่บันทึก status และทำต่อข้อ 4.3อื่นๆบันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config |
| [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config | บันทึก |
| RET | ไม่บันทึก status และทำต่อข้อ 4.3 |
| อื่นๆ | บันทึก [cf_lookup_catalog](/display/RDSCPENH/cf_lookup_catalog).config |
| Field | Mapping data |
| transaction_no | Generate Running ตาม pattern transaction_no ที่ [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern) |
| api_payment_status | NULL |
| api_called_at | NULL |
| updated_date | วันและเวลาปัจจุบัน |
| updated_by | 'SYSTEM' |
| payment_detail_id | transaction_no | api_payment_status | api_called_at | api_retry_round | api_status_code | api_status_desc | status |
| 1 | 202605200001 | S | 20/05/2569 8:00:00 | 1 | EV033 | inactive | REJ |
| 2 | 202605200002 | S | 20/05/2569 8:00:00 | 1 | IC000 | Fund Transfer is Executed Successfully | PAI |
| 3 | 202605200003 | S | 20/05/2569 8:00:00 | 1 | EM003 | Fund Transfer is Executed Fail | FAI |
| 4 | 202605200004 | F | 20/05/2569 8:00:00 | 3 | EM058 | Your request can not be complete at this time, Please try again later |   |
| ..20 | 202605200020 | P | 20/05/2569 8:00:00 | 1 |   |   |   |
| payment_detail_id | transaction_no | api_payment_status | api_called_at | api_retry_round | api_status_code | api_status_desc | status |
| 1 | 202605200001 | S | 20/05/2569 08:00:00 | 1 | EV033 | inactive | REJ |
| 2 | 202605200002 | S | 20/05/2569 08:00:00 | 1 | IC000 | Fund Transfer is Executed Successfully | PAI |
| 3 | 202605200003 | S | 20/05/2569 08:00:00 | 1 | EM003 | Fund Transfer is Executed Fail | FAI |
| 4 | 202605010021 | NULL | NULL | 3 | EM058 | Your request can not be complete at this time, Please try again later |   |
| ..20 | 202605200020 | P | 20/05/2569 08:00:00 | 1 |   |   |   |
| **5** | **ปลดล็อกรายการที่ค้าง** *(ทำทุก 30 นาที)* | 5. ระบบจะทำการตรวจสอบหา "รายการที่ค้างในระบบ" โดย [Batch Reset รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่](/pages/viewpage.action?pageId=1339424812)• **เงื่อนไข:** หากพบรายการไหนที่มีสถานะเป็น **'P' (Processing) เกิน 30 นาทีแล้ว** แต่ยังไม่มีผลอัปเดตกลับมาจาก Stand Alone• ให้ระบบทำการเคลียร์**สถานะกลับไปเป็นว่าง (Null)** และลบเวลาที่บันทึกไว้ เพื่อให้ระบบสามารถวนกลับมาดึงไปประมวลผลใหม่ได้ในข้อ 1Update Data table : [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)FieldMapping dataapi_payment_statusNULLapi_called_atNULLupdated_dateวันและเวลาปัจจุบันupdated_by'SYSTEM' | วันและเวลาปัจจุบัน 20/05/2569 08:31:00payment_detail_id api_payment_statusapi_called_atapi_retry_roundapi_status_codeapi_status_descstatus1202605200001S20/05/2569 08:00:001EV033inactiveREJ2202605200002S20/05/2569 08:00:001IC000Fund Transfer is Executed SuccessfullyPAI3202605200003S20/05/2569 08:00:001EM003Fund Transfer is Executed Fail FAI4202605010021S20/05/2569 08:05:004IC000Fund Transfer is Executed SuccessfullyPAI..20202605200020NULLNULL1 |
| Field | Mapping data |
| api_payment_status | NULL |
| api_called_at | NULL |
| updated_date | วันและเวลาปัจจุบัน |
| updated_by | 'SYSTEM' |
| payment_detail_id |   | api_payment_status | api_called_at | api_retry_round | api_status_code | api_status_desc | status |
| 1 | 202605200001 | S | 20/05/2569 08:00:00 | 1 | EV033 | inactive | REJ |
| 2 | 202605200002 | S | 20/05/2569 08:00:00 | 1 | IC000 | Fund Transfer is Executed Successfully | PAI |
| 3 | 202605200003 | S | 20/05/2569 08:00:00 | 1 | EM003 | Fund Transfer is Executed Fail | FAI |
| 4 | 202605010021 | S | 20/05/2569 08:05:00 | 4 | IC000 | Fund Transfer is Executed Successfully | PAI |
| ..20 | 202605200020 | NULL | NULL | 1 |   |   |   |

---

## Hyperlinks บนหน้านี้

- [WS จองรายการจ่าย API Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475263)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [WS สำหรับดึงรายการจ่าย API Payment ที่ Payment Managemet](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195564)
- [KTB API](http://wiki.thaisamut.co.th/display/RDSCPENH/KTB+API+Specification)
- [KTB API](http://wiki.thaisamut.co.th/display/RDSCPENH/KTB+API+Specification)
- [KTB API](http://wiki.thaisamut.co.th/display/RDSCPENH/KTB+API+Specification)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [cf_running_pattern](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_running_pattern)
- [Batch Reset รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339424812)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1334346054/image2026-5-29%2013%3A44%3A57.png?version=1&modificationDate=1780037097389&api=v2
