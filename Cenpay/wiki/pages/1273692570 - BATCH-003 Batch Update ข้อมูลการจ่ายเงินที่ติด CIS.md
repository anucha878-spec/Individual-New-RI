# BATCH-003 Batch Update ข้อมูลการจ่ายเงินที่ติด CIS

- **Page ID:** 1273692570
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273692570
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-PC-เตรียมจ่าย ปฏิบัติการ > BATCH-003 Batch Update ข้อมูลการจ่ายเงินที่ติด CIS
- **Depth:** 4

---

#### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch Update ข้อมูลการจ่ายเงินที่ติด CIS โดยการตรวจสอบกับข้อมูลที่ระบบ CIS ว่าข้อมูลที่ติดอยู่ผ่านการอนุมัติแล้วหรือยัง เพื่อ Update รายการพร้อมสู่การเตรียมจ่าย |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | เพื่อใช้เป็นข้อมูลสำหรับจัดการรายการเตรียมจ่าย บนหน้าจอ [PC-002-FC-001 หน้าจอตรวจสอบรายการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252058) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกๆ X นาที |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลรายการจ่ายเงินทั้งหมดที่ติด CIS ในฐานข้อมูลกลางระบบ Centralized Payment และข้อมูลรายการเตรียมจ่าย |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลรายการจ่ายเงินท้้งหมดที่ถูก Update ข้อมูลที่ระบบ CIS เรียบร้อยแล้ว พร้อมสำหรับการเตรียมจ่าย สำหรับประเภทรายการ Clean Case และ AML/CFT ที่ไม่ใช่ Freeze |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**ระบบประมวลผล Batch : [BATCH-001 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1255703321) แล้วระบบประมวลผล Batch : [BATCH-002 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากฐานข้อมูล Centralized Payment เข้าสู่กระบวนการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273267113) แล้ว**Process Description (กระบวนการ)**ระบบจะทำการตรวจสอบรายการข้อมูลเงินจ่ายในฐานข้อมูลรายการจ่ายส่วนกลาง และรายการรอเตรียมจ่ายที่ติดระบบ CIS กับระบบ CIS ในรายธุรกรรมที่ติด โดยการตรวจสอบว่าข้อมูลปัจจุบันที่ระบบ CIS มีการอนุมัติเรียบร้อยแล้วหรือยังกรณีที่ยังไม่อนุมัติ รอการอนุมัติที่ระบบ CIS ตามเดิม ให้ระบบคงข้อมูลเดิมไว้ ที่ยังติดระบบ CISกรณีที่อนุมัติแล้ว ระบบจะทำการ Update สถานะ CIS ในข้อมูลรายการจ่ายส่วนกลาง และรายการรอเตรียมจ่ายที่ติดระบบ CIS เป็นไม่ติด และ Update ข้อมูลที่เปลี่ยนแปลงล่าสุดให้กับข้อมูลรายการจ่ายส่วนกลาง และรายการรอเตรียมจ่าย**Post-condition (เงื่อนไขหลังการทำงาน)**ข้อมูลรายการจ่ายส่วนกลาง และรายการรอเตรียมจ่าย จะไม่ติดข้อมูลที่ระบบ CIS แล้วพร้อมสำหรับการตรวจสอบรายการเตรียมจ่าย |

---

## Hyperlinks บนหน้านี้

- [PC-002-FC-001 หน้าจอตรวจสอบรายการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252058)
- [BATCH-001 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1255703321)
- [BATCH-002 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากฐานข้อมูล Centralized Payment เข้าสู่กระบวนการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273267113)
