# BATCH-001 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment

- **Page ID:** 1255703321
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1255703321
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-PC-เตรียมจ่าย ปฏิบัติการ > BATCH-001 Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment
- **Depth:** 4

---

#### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment ในส่วนของข้อมูลส่วนกลาง |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | เพื่อใช้เป็นข้อมูลสำหรับค้นหาและตรวจสอบสถานะการทำจ่าย บนหน้าจอ [PC-001-FC-001 หน้าจอรวมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252010) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกวันเวลา ช่วงเช้า (04.00 น.) |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลการจ่ายเงินคืนทันที APU จากระบบ APL Improvement |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลสำหรับการเตรียมจ่ายเงินคืนทันที APU |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**ระบบประมวลผล APU และเกิดเงินคืนทันที อ้างอิง : [P-01-02-กระบวนการปิดบัญชีอัติโนมัติ (APU) ประจำวัน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1128530347) - Process Description ข้อที่ 3**Process Description (กระบวนการ)**สำหรับนำเข้าข้อมูลการจ่ายเงินคืนทันที่ APU จากระบบ APL Improvement เข้าสู่ระบบ Centralized Payment เฉพาะข้อมูลเงินจ่ายคืนทันที APU ที่มีสถานะ Active เท่านั้นระบบจะประมวลผลรายการ ข้อมูลการจ่ายเงินคืนทันที APU โดยคำนวนวันที่จ่ายจากวันที่ทำรายการ + 2 วัน โดยนับแค่วันทำการ (T+2) **Post-condition (เงื่อนไขหลังการทำงาน)**ข้อมูลเงินจ่ายคืนทันที APU จากระบบ APL Improvement จะเข้าสู่ระบบ Centralized Payment ให้ทำการค้นหาข้อมูลระบบจะทำการเรียก Batch นำเข้าข้อมูลการจ่ายเงินคืนทันที่ APU เข้าสู่กระบวนการเตรียมจ่ายต่อไป |

---

## Hyperlinks บนหน้านี้

- [PC-001-FC-001 หน้าจอรวมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252010)
- [P-01-02-กระบวนการปิดบัญชีอัติโนมัติ (APU) ประจำวัน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1128530347)
