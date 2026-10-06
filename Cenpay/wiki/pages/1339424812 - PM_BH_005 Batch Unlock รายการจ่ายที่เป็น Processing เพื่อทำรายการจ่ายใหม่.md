# PM_BH_005 Batch Unlock รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่

- **Page ID:** 1339424812
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339424812
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-99 กระบวนการ Batch > PM_BH_005 Batch Unlock รายการจ่ายที่เป็น Processing เพื่อทำรายการจ่ายใหม่
- **Depth:** 5

---

TOC
[ [Objectives](#PM_BH_005BatchUnlockรายการจ่ายที่เป็นProcessingเพื่อทำรายการจ่ายใหม่-Objectives) ] [ [Process Overview](#PM_BH_005BatchUnlockรายการจ่ายที่เป็นProcessingเพื่อทำรายการจ่ายใหม่-ProcessOverview) ] [ [Pre-conditions](#PM_BH_005BatchUnlockรายการจ่ายที่เป็นProcessingเพื่อทำรายการจ่ายใหม่-Pre-conditions) ] [ [Process Description](#PM_BH_005BatchUnlockรายการจ่ายที่เป็นProcessingเพื่อทำรายการจ่ายใหม่-ProcessDescription) ] [ [Post-conditions & Error Handling](#PM_BH_005BatchUnlockรายการจ่ายที่เป็นProcessingเพื่อทำรายการจ่ายใหม่-Post-conditions&ErrorHandling) ]

## Objectives

- `เพื่อตรวจสอบรายการจ่ายประเภท API Payment ที่ดำเนินการไม่สำเร็จหรือไม่มีผลการจ่ายจาก Stand Alone`

## Process Overview

- `Batch Process นี้จะทำงานทุก 5 นาที`
- ตรวจสอบรายการจ่ายประเภท API Payment ที่สถานะเป็นรอดำเนินการ และเวลารอที่ดำเนินการน้อยกว่าเวลาปัจจุบัน 30 นาที

## Pre-conditions

- `ต้องมีรายการ Transaction ที่เคยส่งไปทำจ่ายที่ Stand Alone`

## Process Description

1. ตรวจสอบสถานะการส่ง API Payment เป็นกำลังดำเนินการ ([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).api_status_code = P) และเวลาที่ Stand Alone เลือกรายการไปทำจ่าย มีค่าน้อยกว่าเวลาปัจจุบัน 30 นาที ([tx_payment_detail](/display/RDSCPENH/tx_payment_detail).api_log_time)
2. Update ข้อมูลที่ตาราง [tx_payment_detail](/display/RDSCPENH/tx_payment_detail) ดังนี้Fieldmapping dataapi_status_code NULLapi_log_timeNULL

## Post-conditions & Error Handling

- `Post-conditions (Success):`
- `Post-conditions (Failure) & Error Handling:`
  - กรณีเรียก`Web Service ไม่สำเร็จ (e.g., HTTP 5xx, Timeout):`
    - `Action`: ระบบจะบันทึก `Log` ข้อผิดพลาดของทั้งกลุ่ม (chunk) ที่เรียกไม่สำเร็จ และข้ามไปทำงานกลุ่มถัดไป
  - `กรณี Database Update ไม่สำเร็จ:`
    - `Action: ระบบจะพยายาม Rollback การเปลี่ยนแปลงสำหรับรายการนั้น และบันทึก Log ข้อผิดพลาดร้ายแรง`

---

## Hyperlinks บนหน้านี้

- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
