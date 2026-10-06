# PM_BH_008 Batch ส่งอีเมล Reconcile รายการจาก Operation

- **Page ID:** 1348141731
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1348141731
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-99 กระบวนการ Batch > PM_BH_008 Batch ส่งอีเมล Reconcile รายการจาก Operation
- **Depth:** 5

---

TOC
[ [Objectives](#PM_BH_008Batchส่งอีเมลReconcileรายการจากOperation-Objectives) ] [ [Process Overview](#PM_BH_008Batchส่งอีเมลReconcileรายการจากOperation-ProcessOverview) ] [ [Pre-conditions](#PM_BH_008Batchส่งอีเมลReconcileรายการจากOperation-Pre-conditions) ] [ [Process Description](#PM_BH_008Batchส่งอีเมลReconcileรายการจากOperation-ProcessDescription) ] [ [Post-conditions & Error Handling](#PM_BH_008Batchส่งอีเมลReconcileรายการจากOperation-Post-conditions&ErrorHandling) ]

## Objectives

- เพื่อส่งอีเมล Reconcile Oper รายการ และรายงานผลการตรวจสอบความครบถ้วนของข้อมูล (Data Reconciliation) ระหว่างระบบต้นทางและระบบปลายทางให้ผู้เกี่ยวข้องทราบ

## Process Overview

- `Batch Process นี้จะทำงานตอน 22.40 ของทุกวัน`

## Pre-conditions

- ต้องมีรายการ Transaction จากระบบต้นทางมาทำจ่ายที่ระบบ Payment Management ในวันก่อนหน้าเวลา 22.41 จนถึงวันปัจจุบันเวลา 22.40

## Process Description

1. ส่งอีเมลตามเงื่อนไขดังนี้ [02 Email Reconcile Oper](/display/RDSCPENH/02+Email+Reconcile+Oper)
2. บันทึกข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)
  1. batch_code = PM_BH_007
  2. กรณี Run Batch Manual จากหน้าจอ [FS-09-01 หน้าจอ Batch Manual Process](/pages/viewpage.action?pageId=1290404320) ให้ข้ามการบันทึกข้อมูลนี้ FieldDescriptionMapping databatch_idรหัส BatchAuto generatebatch_codeรหัส BatchBatch Codestatusสถานะการ Run BatchF - กรณี Batch Failerror_messageข้อความกรณี Run Batch Failบันทึกข้อความกรณีมี Error ที่ Run Batch Processtypeประเภทการ Run BatchA - Autocreated_datedวันที่สร้างบันทึกวันและเวลาปัจจุบันcreated_byผู้สร้างบันทึก System
    - Insert ข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)

## Post-conditions & Error Handling

- `Post-conditions (Success):`
- `Post-conditions (Failure) & Error Handling:`
  - กรณีเรียก`Web Service ไม่สำเร็จ (e.g., HTTP 5xx, Timeout):`
    - `Action`: ระบบจะบันทึก `Log` ข้อผิดพลาดของทั้งกลุ่ม (chunk) ที่เรียกไม่สำเร็จ และข้ามไปทำงานกลุ่มถัดไป
  - `กรณี Database Update ไม่สำเร็จ:`
    - `Action: ระบบจะพยายาม Rollback การเปลี่ยนแปลงสำหรับรายการนั้น และบันทึก Log ข้อผิดพลาดร้ายแรง`

---

## Hyperlinks บนหน้านี้

- [02 Email Reconcile Oper](http://wiki.thaisamut.co.th/display/RDSCPENH/02+Email+Reconcile+Oper)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
- [FS-09-01 หน้าจอ Batch Manual Process](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404320)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
