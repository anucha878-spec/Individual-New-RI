# CP-BE-001-BH030 Batch ส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้า EDW

- **Space:** `RDSCP` — Centralized Payment
- **Page ID:** 952729757
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=952729757

---

TOC
[ [Objectives](#CP-BE-001-BH030Batchส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าEDW-Objectives) ] [ [Process Overview](#CP-BE-001-BH030Batchส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าEDW-ProcessOverview) ] [ [Preconditions](#CP-BE-001-BH030Batchส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าEDW-Preconditions) ] [ [Process Description](#CP-BE-001-BH030Batchส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าEDW-ProcessDescription) ] [ [Post-conditions](#CP-BE-001-BH030Batchส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าEDW-Post-conditions) ]
History Log

| No | โครงการ | รายละเอียดที่ปรับแก้ | ผู้แก้ไข | วันที่แก้ไข |
|---|---|---|---|---|
| 1 | Closing Timeline | ปรับตารางการ run Batch จาก เดิม: ทุกๆ 1 ชั่วโมง ใหม่: ทุก ๆ 2 ชั่วโมง ตั้งแต่ 7:00 น. ถึง 23:00 น. | jitin.kh | 25/07/2567 |
| 2 | Centralized Payment (Enhancement & Integration) | เพิ่มเงื่อนไขการส่งข้อมูลสำหรับผังบัญชีCP_ACC_06CP_ACC_11 | jitin.kh | 28/09/2568 |

## Objectives

- สำหรับเรียก API ส่งข้อมูลตรวจสอบรายการบัญชี Oper จากระบบ Cenpay เข้าระบบ EDW อีกครั้ง

## Process Overview

- Batch จะดึงข้อมูล Log รายการที่มีสถานะส่ง API ไม่สำเร็จ โดย Run เป็น Batch job ทุก ๆ ชั่วโมง ทุก ๆ 2 ชั่วโมง ตั้งแต่ 7:00 น. ถึง 23:00 น.
- เรียก API ส่งข้อมูลตรวจสอบรายการบัญชี Oper (Reconcile) ไประบบ EDW อีกครั้ง

## Preconditions

1. ผ่านขั้นตอนการเรียก API ส่งข้อมูล Reconcile เข้าระบบ EDW จากระบบ Cenpay ไม่สำเร็จ
2. รายการ Log การส่งข้อมูล Reconcile เข้า EDW มีสถานะส่งไม่สำเร็จ

## Process Description

1. ดึงข้อมูล Log การส่งข้อมูล Reconcile เข้า edw ที่มีสถานะส่งไม่สำเร็จ ที่ [lg_reconcile_stat (ระบบ Cenpay)](/pages/viewpage.action?pageId=908296658) โดยมีเงื่อนไขดังนี้
  - ข้อมูลที่ reconcile_send_status = 'FALSE' และ
  - ข้อมูลที่ created_date น้อยกว่า current date ลบ 1 ชั่วโมง (Edit by piyada.pa 09/07/2567)
  - กรณีไม่พบข้อมูล ให้หยุดการทำงาน
2. ส่งข้อมูลสำหรับตรวจสอบรายการบัญชีเข้าระบบ EDW เพื่อบันทึกข้อมูลลง [tx_reconcile_stats](http://wiki.thaisamut.co.th/display/RDSADW/tx_reconcile_stats)
  - กรณี event_code = CP_ACC_01, CP_FIN_01, CP_FIN_02, CP_FIN_03, CP_FIN_04, CP_FIN_05, CP_FIN_06, CP_FIN_07, CP_ACC_06, CP_ACC_11 (Centralized Payment (Enhancement & Integration) Edited by jitin.kh 28/09/2568), NL_ACC_01, NL_ACC_02, NL_ACC_05(New Loan Ph1 Edited by duangporn.sa 16/01/2569) ให้เรียก API [01 WS Register transaction การนำเข้ารายการธุรกรรมที่ EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524)
  - กรณี event_code = CP_ACC_02, CP_M_01, CP_M_02, NL_ACC_03, NL_ACC_04, NL_ACC_06(New Loan Ph1 Edited by duangporn.sa 16/01/2569) ให้เรียก API [02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](/pages/viewpage.action?pageId=1145962522)ซึ่งมีรายละเอียดดังนี้ Mapping ข้อมูล Reconcile ของรายการ Icon Parameterรายละเอียดbatch_code[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).batch_codeevent_code[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).event_codeaccounting_date[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).accounting_datesystemFix ค่า "CENPAY"[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).systemprocess_date[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).process_datestatus"S" (Success)[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).reconcile_statussystem_key[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).system_keyprocess_type[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).process_typesource_amount[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).source_amountoperation_approved_date[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).operation_approved_dateoperation_approved_by[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).operation_approved_byrequested_payment_date[lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).requested_payment_date
    - กรณีเรียก API สำเร็จ (Output จาก API) ให้ Update [lg_reconcile_stats](/pages/viewpage.action?pageId=908296658).reconcile_send_status = 'TRUE'
    - กรณีเรียก API ไม่สำเร็จ Batch Job นี้ จะดึงข้อมูล [lg_reconcile_stats](/pages/viewpage.action?pageId=908296658) ที่ยังมี reconcile_send_status = 'FALSE' มาเรียก API อีกครั้ง ในชั่วโมงถัดไป

## Post-conditions

- ทุกกรณี ข้อมูลจะถูกนำไปแสดงที่ [03_40 หน้าจอตรวจสอบรายการ Oper](/pages/viewpage.action?pageId=1148387712)

---

## Hyperlinks บนหน้านี้

- [lg_reconcile_stat (ระบบ Cenpay)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [tx_reconcile_stats](http://wiki.thaisamut.co.th/display/RDSADW/tx_reconcile_stats)
- [01 WS Register transaction การนำเข้ารายการธุรกรรมที่ EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962524)
- [02 WS Update/Insert Transaction ของ Reconcile Stats สำหรับรายการธุรกรรมที่นำเข้า EDW](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1145962522)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [lg_reconcile_stats](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=908296658)
- [03_40 หน้าจอตรวจสอบรายการ Oper](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1148387712)
