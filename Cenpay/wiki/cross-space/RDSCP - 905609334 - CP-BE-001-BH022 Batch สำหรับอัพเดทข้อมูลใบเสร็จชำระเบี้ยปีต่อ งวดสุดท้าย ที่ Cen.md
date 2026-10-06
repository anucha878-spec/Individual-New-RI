# CP-BE-001-BH022 Batch สำหรับอัพเดทข้อมูลใบเสร็จชำระเบี้ยปีต่อ งวดสุดท้าย ที่ Centralized Payment จากระบบใบเสร็จส่วนกลาง

- **Space:** `RDSCP` — Centralized Payment
- **Page ID:** 905609334
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=905609334

---

****
[ [Objectives](#CP-BE-001-BH022Batchสำหรับอัพเดทข้อมูลใบเสร็จชำระเบี้ยปีต่องวดสุดท้ายที่CentralizedPaymentจากระบบใบเสร็จส่วนกลาง-Objectives) ] [ [Overview](#CP-BE-001-BH022Batchสำหรับอัพเดทข้อมูลใบเสร็จชำระเบี้ยปีต่องวดสุดท้ายที่CentralizedPaymentจากระบบใบเสร็จส่วนกลาง-Overview) ]

## Objectives

- เป็น Batch สำหรับอัพเดทข้อมูลใบเสร็จชำระเบี้ยปีต่อ, งวดสุดท้าย(เงินต้นและดอกเบี้ย) ที่ระบบ Centralized Payment จากระบบใบเสร็จส่วนกลาง และ PL ,APL จากระบบ AS400 ณ สิ้นวัน

## Overview

batch run ทุกวันทำการโดยเริ่มทำงานตอน 6.00 น. และ 18.00 น.(เพื่อsync ข้อมูล PL,APL)
1. ค้นหาข้อมูลใบเสร็จชำระเบี้ยปีต่อ งวดสุดท้าย ที่ Centralized Payment เป็นรายการที่อนุมัติโอน และวันปัจจุบันมากว่าเท่ากับวันที่โอน และยังไม่มีเลขที่ใบเสร็จ
2. นำข้อมูลที่ได้จากข้อ(1) ไปดึงข้อมูลที่ระบบใบเสร็จส่วนกลาง(Hermes) โดยใช้เงื่อนไขดังนี้เลขที่กรมธรรม์ + งวดชำระตั้งแต่ + ช่องทางชำระเป็น "CENPAY" และ receipt_status='N'(Complete)
3. ค้นหาข้อมูลใบเสร็จ PL , APL โดยดึงข้อมูลจาก AS400 [อ้างอิงจากเลขที่ใบเสร็จกรณี APL และ เลขที่กู้กรณี PL](http://wiki.thaisamut.co.th/display/RDSCP/OLIS.OLPPYCNP)
4. update ข้อมูลตามตาราง [tx_receipt](/display/RDSCP/tx_receipt) โดยเบื้องต้นจะมีข้อมูลตั้งแต่ขั้นตอนการลงข้อมูลที่ HYDRA(เลขที่ธุรกรรม,เลขที่กรมธรรม์,ประเภทใบเสร็จ,ชำระปีที่,ชำระงวดที่, status เป็น 'W' แค่ปีต่อและงวดสุดท้าย)

---

## Hyperlinks บนหน้านี้

- [อ้างอิงจากเลขที่ใบเสร็จกรณี APL และ เลขที่กู้กรณี PL](http://wiki.thaisamut.co.th/display/RDSCP/OLIS.OLPPYCNP)
- [tx_receipt](http://wiki.thaisamut.co.th/display/RDSCP/tx_receipt)
