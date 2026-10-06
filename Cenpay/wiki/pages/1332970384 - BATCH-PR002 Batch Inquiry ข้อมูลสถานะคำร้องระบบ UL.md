# BATCH-PR002 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL

- **Page ID:** 1332970384
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332970384
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-PR-คำร้อง > BATCH-PR002 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL
- **Depth:** 4

---

#### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | มีความสัมพันธ์กับกระบวนการดังนี้[Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)[Process Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฎิเศษ หรือ ยกเลิกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1322353240) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ช่วงเวลา 06:00 น. ถึง ช่วงเวลา 12:00 น ประมวลผลทุกๆ 30 นาทีช่วงเวลา 12:01 น. ถึง ช่วงเวลา 23:00 น ประมวลผลทุกๆ 10 นาที |
| 4 | ข้อมูลตั้งต้น(Input) | รายการคำร้องต้องเป็นประเภทกรมธรรม์ ULประเภทคำร้องต้องเป็น เวนคืนกรมธรรม์ประกันภัย หรือ Free Lookรายการคำร้องที่มีสถานะรายการดังนี้WAP : รอการจ่ายWAC : รออนุมัติ CISWAV : รอเตรียมจ่าย (ปฏิบัติการ)APR : บันทึกตรวจสอบ (ปฏิบัติการ)AP1 : อนุมัติเตรียมจ่ายครั้งที่ 1 (ปฏิบัติการ)AP2 : อนุมัติเตรียมจ่ายครั้งที่ 2 (ปฏิบัติการ)APC : ตรวจจ่าย (ฝ่ายบัญชี)APP : ยืนยันทำจ่าย (ฝ่ายการเงิน)APF : อนุมัติจ่าย (ฝ่ายการเงิน)FLT : จ่ายไม่สำเร็จ |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายการคำร้องที่มีสถานะรายการที่สอดคล้องกับระบบ UL ดังนี้WAP : รอการจ่ายPMS : จ่ายสำเร็จRJT : ปฎิเสธREJ : ส่งกลับแก้ไขCAN : ยกเลิก |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)******รายการคำร้องที่ถูกบันทึกข้อมูลคำร้องจากหน้าจอดังนี้หน้าจอ [PR-002-FC-001 : หน้าจอบันทึกรายการคำร้อง](/pages/viewpage.action?pageId=1298301209)หน้าจอ [PR-003-FC-001 : หน้าจอแก้ไขรายการคำร้อง](/pages/viewpage.action?pageId=1298301264) **Process Description (กระบวนการ)**ระบบประมวลผล Batch : [CP-PR-01-BH042 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL](/pages/viewpage.action?pageId=1331822993) โดยมีกระบวนการดังนี้ดึงข้อมูลคำร้องที่ระบบ Cenpay เพื่อใช้เป็น input Inquiry ข้อมูลจากระบบ UL Inquiry ข้อมูลจากระบบ UL โดยเรียกใช้ [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031) นำข้อมูลสถานะคำร้องจากระบย UL มา Update ที่ระบบ Cenpay โดยเรียกใช้ [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293) ส่ง Email แจ้งเตือนสาขา กรณีสถานะคำร้องเป็น REJ (ส่งกลับแก้ไข) CAN (ยกเลิก)RJT (ปฏิเสธ) **Post-condition (เงื่อนไขหลังการทำงาน)**รายการคำร้องที่มีสถานะรายการที่สอดคล้องกับระบบ UL ดังนี้WAP : รอการจ่ายPMS : จ่ายสำเร็จRJT : ปฎิเสธREJ : ส่งกลับแก้ไขCAN : ยกเลิก |

---

## Hyperlinks บนหน้านี้

- [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)
- [Process Email แจ้งเตือนสาขาและสนญ กรณีที่ระบบ Unit Linked ส่งกลับแก้ไข ปฎิเศษ หรือ ยกเลิกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1322353240)
- [PR-002-FC-001 : หน้าจอบันทึกรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301209)
- [PR-003-FC-001 : หน้าจอแก้ไขรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301264)
- [CP-PR-01-BH042 Batch Inquiry ข้อมูลสถานะคำร้องระบบ UL](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1331822993)
- [WS ค้นหาข้อมูลสถานะรายการธุรกรรมที่ส่งคำร้องจาก Cenpay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1332478031)
- [Process Update สถานะรายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310982293)
