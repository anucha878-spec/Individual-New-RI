# lg_reconcile_stats (ระบบ Cenpay)

- **Space:** `RDSCP` — Centralized Payment
- **Page ID:** 908296658
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658

---

TOC
[ [Convention](#lg_reconcile_stats(ระบบCenpay)-Convention) ] [ [Relations](#lg_reconcile_stats(ระบบCenpay)-Relations) ]
History Log

| No. | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
| 1 | [![img](http://jira.thaisamut.co.th/images/icons/issuetypes/exclamation.png)PBLMG-7666](http://jira.thaisamut.co.th/browse/PBLMG-7666) (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) | ปรับเพิ่มฟิลด์ reference_no สำหรับเก็บรหัสอ้างอิงการส่งข้อมูล Reconcile | jitin.kh | 04/06/2568 |

## Convention

- Detail: เก็บ log การส่งข้อมูล Reconcile จากระบบ Cenpay เข้า ระบบ EDW

| **Table : lg_reconcile_stats** |
|---|
|   | No | ATTRIBUTE_NAME | KEY | DATA_TYPE | SIZE | DECIMAL | Not Null constraint | Comment | Business Rule | Default Value | Validation Rule | ตัวอย่างข้อมูล |
|   | 1 | id | PK | INT | 8 |   | Not Null |   | Sequence ชื่อ "seq_lg_reconcile_stats" |   |   |   |
|   | 2 | batch_code |   | VARCHAR | 10 |   |   | รหัส Batch ที่ส่งเข้า EDW | อ้างอิงตาราง [ms_batch](/display/RDSADW/ms_batch) |   |   | BH001 |
|   | 3 | event_code |   | VARCHAR | 25 |   |   | รหัส Event | ref : [cf_event_code](/display/RDSADW/cf_event_code) |   |   | CP_ACC_01 |
|   | 4 | accounting_date |   | DATE |   |   |   | วันที่ลงบัญชี |   |   |   |   |
|   | 5 | process_date |   | TIMESTAMP |   |   |   | วันเวลาที่เริ่มกระบวนการนำข้อมูลเข้า EDW | วันเวลาที่ Batch นำเข้าข้อมูลเริ่ม run สำหรับกรณี นำเข้าข้อมูลด้วย Batchวันเวลาที่ Oper อนุมัติกดอนุมัติข้อมูลรายการบัญชีเพื่อส่งข้อมูลเข้า Dashboard สำหรับกรณี นำเข้าข้อมูลผ่านหน้าจอ Manual Operวันเวลาที่ Oper อนุมัติรายการจากต้นทางก่อนส่งข้อมูลเข้า EDW สำหรับกรณี นำเข้าข้อมูลจากระบบหน้าบ้านผ่านการอนุมัติรายการจาก Oper |   |   |   |
|   | 6 | reconcile_send_status |   | BOOL |   |   | Not Null | สถานะการส่งข้อมูล Reconcile เข้า EDW | กำหนดค่าเป็น "TRUE" กรณีบันทึกรายการที่ตาราง tx_reconcile_stats สำเร็จกำหนดค่าเป็น "FALSE" กรณีบันทึกรายการที่ตาราง tx_reconcile_stats ไม่สำเร็จโดยการบันทึกรายการถูกดำเนินการผ่านการเรียก API[01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](/pages/viewpage.action?pageId=1145962524) หรือ[02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](/pages/viewpage.action?pageId=1145962522) | "FALSE" |   |   |
|   | 7 | system_key |   | VARCHAR | 50 |   |   | ค่า Unique ของรายการ process_log | Unique Key ของรายการธุรกรรมผังบัญชีที่นำเข้าระบบ EDW โดยส่งจากระบบต้นทางใช้เป็น key ในการดึงข้อมูลมา reconcile เพื่อตรวจสอบความครบถ้วน และความถูกต้องของรายการธุรกรรมผังบัญชีนำเข้า EDW |   |   |   |
|   | 8 | process_type |   | VARCHAR | 3 |   |   | รูปแบบของกระบวนการเกิด transaction ที่ระบบต้นทาง | โดยให้ระบุดังนี้เป็น A (Auto) กรณี transaction เกิดจากกระบวนการนำเข้าผ่าน Batch แบบ Autoเป็น M (Manual) กรณี transaction เกิดจากกระบวนการทำรายการ Manual จากระบบต้นทาง หรือการซ่อมรายการจาก Batch แบบ Manual |   |   |   |
|   | 9 | source_amount |   | NUMERIC | 15 | 2 |   | จำนวนเงินรวมจากต้นทาง | คำนวณโดยอาศัยหลักการรวมยอดเงินเป็นราย GL อ้างอิงตาม [02_58_02 หลักการ Mapping จำนวนเงิน Reconcile ของระบบต้นทาง](/pages/viewpage.action?pageId=1151074599) ระบบ Cenpay |   |   |   |
|   | 10 | operation_approved_by |   | VARCHAR | 150 |   |   | ผู้อนุมัติรายการ | ชื่อ-นามสกุล ผู้อนุมัติรายการ |   |   |   |
|   | 11 | operation_approved_date |   | TIMESTAMP |   |   |   | วันที่อนุมัติรายการ |   |   |   |   |
|   | 12 | requested_payment_date |   | DATE |   |   |   | วันที่รับ/จ่ายจากต้นทาง |   |   |   |   |
|   | 13 | error_messageresponse_message |   | TEXT |   |   |   | ข้อความสาเหตุที่เรียกได้จาก Output ของ API | เก็บค่า Respond: Error Message ที่ได้จากการ Call API[01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](/pages/viewpage.action?pageId=1145962524) หรือ[02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](/pages/viewpage.action?pageId=1145962522) |   |   |   |
|   |   | created_date |   | TIMESTAMP |   |   | Not Null | วันที่สร้างรายการ |   |   |   |   |
|   | 14 | created_by |   | VARCHAR | 50 |   | Not Null | ผู้สร้างรายการ |   |   |   |   |
|   |   | updated_date |   | TIMESTAMP |   |   |   | วันที่อัพเดทรายการ |   |   |   |   |
|   | 16 | updated_by |   | VARCHAR | 50 |   |   | ผู้อัพเดตรายการ |   |   |   |   |
|   | 18 | system |   | VARCHAR | 50 |   |   | ชื่อระบบ |   | "CENPAY" |   |   |
|   | 19 | reconcile_status |   | VARCHAR | 3 |   |   | สถานะ Reconcile(Add by piyada.pa 14/06/2567) | C - Cancel (ยกเลิก - ไม่มีแสดงที่รายการที่หน้า Reconcile)S - Success (สำเร็จ - แสดงที่รายการที่หน้า Reconcile)N - No Dara (ไม่มีข้อมูล) |   |   |   |
|   | 20 | operation_imported_by |   | VARCHAR | 150 |   |   | ชื่อ นามสกุล ผู้อัพโหลด/นำเข้าข้อมูล(Add by piyada.pa 14/06/2567) | ปัจจุบัน Cenpay บันทึก Null |   |   |   |
|   | 21 | operation_imported_date |   | TIMESTAMP |   |   |   | วันที่อัพโหลด/นำเข้าข้อมูล(Add by piyada.pa 14/06/2567) | ปัจจุบัน Cenpay บันทึก Null |   |   |   |
|   | 22 | operation_checked_by |   | VARCHAR | 150 |   |   | ชื่อ นามสกุล ผู้อนุมัติตรวจสอบ(Add by piyada.pa 14/06/2567) | ปัจจุบัน Cenpay บันทึก Null |   |   |   |
|   | 23 | operation_checked_date |   | TIMESTAMP |   |   |   | วันที่อนุมัติตรวจสอบ(Add by piyada.pa 14/06/2567) | ปัจจุบัน Cenpay บันทึก Null |   |   |   |
|   | 24 | response_code |   | VARCHAR | 5 |   |   | รหัส response_code | เก็บค่า Respond Code ที่ได้จากการ Call API[01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524) หรือ[02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962522) |   |   |   |
| `[![img](http://jira.thaisamut.co.th/images/icons/issuetypes/exclamation.png)PBLMG-7666](http://jira.thaisamut.co.th/browse/PBLMG-7666) (![img](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) Added by jitin.kh 30/05/68` | 25 | reference_no |   | VARCHAR | 50 |   |   | รหัสอ้างอิงการส่งข้อมูล Reconcile | กำหนดค่าเป็น batch_payment_no |   |   |   |

## Relations

- <linkage ไปยัง table อื่น หรือ diagram ที่แสดง relation>

---

## Hyperlinks บนหน้านี้

- [PBLMG-7666](http://jira.thaisamut.co.th/browse/PBLMG-7666)
- [ms_batch](http://wiki.thaisamut.co.th/display/RDSADW/ms_batch)
- [cf_event_code](http://wiki.thaisamut.co.th/display/RDSADW/cf_event_code)
- [01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524)
- [02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962522)
- [02_58_02 หลักการ Mapping จำนวนเงิน Reconcile ของระบบต้นทาง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1151074599)
- [01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524)
- [02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962522)
- [01 WS Register Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524)
- [02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962522)
- [PBLMG-7666](http://jira.thaisamut.co.th/browse/PBLMG-7666)
