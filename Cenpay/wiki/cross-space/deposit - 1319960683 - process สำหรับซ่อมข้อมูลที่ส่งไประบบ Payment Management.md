# process สำหรับซ่อมข้อมูลที่ส่งไประบบ Payment Management

- **Space:** `deposit` — ระบบเงินรับฝาก
- **Page ID:** 1319960683
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319960683

---

## Objectives

- เป็นกระบวนการสำหรับซ่อมข้อมูลกรณีที่ส่งข้อมูลคืนรับฝากไปที่ระบบ Payment Management ไม่สำเร็จ

## Process Overview

1. รับค่าจาก**[หน้าจอ Resend Payment Management](http://wiki.thaisamut.co.th/display/deposit/Manual+Resend+Payment+Management).**Batch Number ฝ่ายปฎิบัติการ แล้วนำมาหาข้อมูล
2. ทำการส่งข้อมูลไปที่ระบบ Payment Management
3. ตรวจสอบสถานะการส่ง

## Preconditions

- จะต้องทำการเลือกข้อมูลมาจากหน้าจอ [หน้าจอ Manual Resend Payment Management](/pages/viewpage.action?pageId=1319371269) เท่านั้น

## Process Description

- **Step 1**รับค่าจาก**[หน้าจอ Resend Payment Management](/pages/viewpage.action?pageId=1319371269).**Batch Number ฝ่ายปฎิบัติการ แล้วนำมาหาข้อมูล ดึงข้อมูลคืนเงินรับฝาก ตามเงื่อนไขดังต่อไปนี้TableDescriptionRalationRule[tx_deposit_payments](/display/RDSADW/tx_deposit_payments)การบันทึกข้อมูลการส่งข้อมูลไปยัง PAYMENT ระดับ Batch-id = [หน้าจอ Manual Resend Payment Management](/pages/viewpage.action?pageId=1319371269).เลือก || paym_stage = 'S1' && paym_status = 'fail' || paym_stage = 'S2' || paym_stage = 'S3' && paym_status = 'fail'[tx_deposit_return_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_return_detail)การบันทึกคืนรับฝาก เป็น transactions ที่ทำรายการมาจาก สนญ[tx_deposit_payments](/display/RDSADW/tx_deposit_payments).batchjob_no = [tx_deposit_return_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_return_detail).batchjob_no-[deposit_return_detail_hq](http://wiki.thaisamut.co.th/display/deposit/deposit_return_detail_hq)การบันทึกคืนรับฝาก เป็น transactions ที่ทำรายการมาจาก สาขา[tx_deposit_payments](/display/RDSADW/tx_deposit_payments).batchjob_no = [deposit_return_detail_hq](http://wiki.thaisamut.co.th/display/deposit/deposit_return_detail_hq).batchjob_no-
- **Step 2 ดูค่า**[tx_deposit_payments](/display/RDSADW/tx_deposit_payments).paym_stage **และ** ****[tx_deposit_payments](/display/RDSADW/tx_deposit_payments).paym_status
  - ถ้า paym_stage = "s1" และ paym_status = "fail" การส่งข้อมูลไม่สำเร็จตั้งแต่กระบวนการส่งข้อมูลไปที่ [WS : Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175) ให้ทำการดึงข้อมูล และส่งข้อมูลไปที่ [WS : Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175) และ [WS : Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287) ข้อมูล input และกระบวนการอ้างอิง [1. process สำหรับส่งข้อมูลไประบบ Payment Management](/pages/viewpage.action?pageId=1316553198)
  - ถ้า paym_stage = "s2" และ paym_status = "fail" การส่งข้อมูลไม่สำเร็จที่กระบวนการส่งข้อมูลไป [WS : Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287) เท่านั้นให้ทำการส่งข้อมูล input และกระบวนการอ้างอิง [1. process สำหรับส่งข้อมูลไประบบ Payment Management](/pages/viewpage.action?pageId=1316553198)
  - ทำการตรวจสอบ แก้ไข และส่งข้อมูลจนกว่า paym_stage = "s2" และ paym_status = "success" เท่านั้น
- **Step 3** ดูค่า [tx_deposit_payments](/display/RDSADW/tx_deposit_payments).paym_stage = "s3" และ paym_status = "fail" การรับข้อมูลไม่สำเร็จที่กระบวนการ [WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112423) ให้ทำการดึงข้อมูลผลการชำระเงิน input และกระบวนการอ้างอิง [2. process การตรวจสอบสถานะการโอนเงินจากระบบ Payment Management](/pages/viewpage.action?pageId=1318879353)

---

## Hyperlinks บนหน้านี้

- [หน้าจอ Resend Payment Management](http://wiki.thaisamut.co.th/display/deposit/Manual+Resend+Payment+Management)
- [หน้าจอ Manual Resend Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319371269)
- [หน้าจอ Resend Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319371269)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [หน้าจอ Manual Resend Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1319371269)
- [tx_deposit_return_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_return_detail)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [tx_deposit_return_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_return_detail)
- [deposit_return_detail_hq](http://wiki.thaisamut.co.th/display/deposit/deposit_return_detail_hq)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [deposit_return_detail_hq](http://wiki.thaisamut.co.th/display/deposit/deposit_return_detail_hq)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [WS : Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [WS : Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [WS : Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287)
- [1. process สำหรับส่งข้อมูลไประบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1316553198)
- [WS : Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287)
- [1. process สำหรับส่งข้อมูลไประบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1316553198)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112423)
- [2. process การตรวจสอบสถานะการโอนเงินจากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1318879353)
