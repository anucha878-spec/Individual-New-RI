# BATCH-PY001 Batch บันทึกผลการจ่าย Bank Transfer (พัฒนาใน Ph2)

- **Page ID:** 1279721544
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1279721544
- **Path:** Home > Software Requirements Specification > 04. Batch Process > Batch-PY-ทำจ่ายการเงิน > BATCH-PY001 Batch บันทึกผลการจ่าย Bank Transfer (พัฒนาใน Ph2)
- **Depth:** 4

---

#### Description

| **No.** | **Topic** | **Description** |
|---|---|---|
| 1 | ชื่อและวัตถุประสงค์(Name and Objective) | Batch บันทึกผลการจ่าย Bank Transfer |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | การตรวจสอบสถานะการโอนเงินกับธนาคารโดยตรง สำหรับรายการจ่ายที่ Service เป็น Bank Transfer และมีสถานะเป็น อนุมัติจ่ายเงิน จะถูกดำเนินการตรวจสอบสถานะการจ่ายโดยเชื่อมต่อผ่าน API Gateway ไปยัง Service ธนาคารเพื่อรับผลการจ่ายเงิน และกลับมาอัปเดตสถานะของ Transaction การจ่ายภายใต้ Batch การเงิน บนหน้าจอ [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)การปรับสถานะระดับ Voucher (เทียบเท่า Batch Payment) เป็น จ่ายสำเร็จ, จ่ายสำเร็จบางส่วน หรือจ่ายไม่สำเร็จกระบวนการอัปเดตข้อมูลสถานะการจ่ายกลับไประบบ Cenpay Module [ตรวจสอบและอนุมัติรายการเตรียมจ่ายผลประโยชน์](/pages/viewpage.action?pageId=1255703317) และ Module [Module ตรวจจ่ายบัญชี จ่ายผลประโยชน์](/pages/viewpage.action?pageId=1272906259)กระบวนการประมวลผลข้อมูลบัญชี EDW เพื่อสร้างรายการบัญชีผังโอนเงินไม่สำเร็จ ที่หน้าจอ [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) |
| 3 | เวลาประมวลผลโดยประมาณ (Time) | ทุกๆ X ชั่วโมง หรือ ตามรอบเวลาที่กำหนด |
| 4 | ข้อมูลตั้งต้น(Input) | รายการจ่ายที่ Service เป็น Bank Transfer และมีสถานะรายการเป็น อนุมัติจ่ายเงิน |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายการระดับ Transaction ที่สถานะการจ่ายเปลี่ยนเป็น จ่ายเงินสำเร็จ หรือ โอนเงินไม่สำเร็จ |
| 6 | อธิบายรายละเอียด(Description) | **Pre-condition (เงื่อนไขก่อนการทำงาน)**รายการที่ Service เป็น Bank Transfer ที่ถูกอนุมัติจ่ายเงินจากหน้าจอ [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) โดยมีสถานะรายการที่หน้าจอ [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595) เป็น อนุมัติจ่ายเงิน**Process Description (กระบวนการ)**ตรวจสอบเงื่อนไข :ระบบจะทำการคัดกรองรายการจ่ายที่มีคุณสมบัติตรงตามที่กำหนดคือ:ประเภทบริการ: เป็น Bank Transferสถานะ: เป็น อนุมัติจ่ายเงินส่งคำขอตรวจสอบสถานะ :****ส่งรายการไปตรวจสอบสถานะการจ่ายเงิน โดยระบบจะเชื่อมต่อผ่าน API Gateway เพื่อส่งคำขอไปยังระบบของธนาคารรับผลการจ่ายเงิน ระบบจะรอรับผลลัพธ์จากธนาคารผ่าน API ซึ่งจะแจ้งว่าการทำรายการสำเร็จหรือไม่อัปเดตสถานะ Transaction เมื่อได้รับผลจากธนาคาร ระบบจะนำข้อมูลดังกล่าวมาอัปเดตสถานะของรายการ Transaction ภายใน **Batch การเงิน** และสถานะของ **Batch การเงิน** ที่หน้าจอ [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](/pages/viewpage.action?pageId=1271988595)กระบวนการอัปเดตข้อมูลสถานะการจ่ายกลับไประบบ Cenpay ดำเนินการอัปเดตสถานะการจ่ายระดับ Transaction ที่หน้าจอ [PC-001-FC-001 หน้าจอรวมจ่าย](/pages/viewpage.action?pageId=1270252010) และหน้าจอ [PC-002-FC-001 หน้าจอตรวจสอบรายการเตรียมจ่าย](/pages/viewpage.action?pageId=1270252058) เป็น จ่ายเงินสำเร็จ หรือ โอนเงินไม่สำเร็จดำเนินการสร้างรายการที่หน้าจอ [PC-004-FC-001 หน้าจอยืนยันการโอนเงิน](/pages/viewpage.action?pageId=1278017914) กรณีที่สถานะการจ่ายเป็น โอนเงินไม่สำเร็จ เพื่อรอให้หน่วยงานต้นทางดำเนินการแก้ไขข้อมูลเพื่อเข้าสู่กระบวนการจ่ายใหม่ดำเนินการอัปเดตสถานะการจ่ายระดับ Transaction ที่หน้าจอ [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](/pages/viewpage.action?pageId=1272906266) เป็น จ่ายเงินสำเร็จ หรือ โอนเงินไม่สำเร็จกระบวนการประมวลผลข้อมูลบัญชีผังโอนเงินไม่สำเร็จไปแสดงที่หน้าจอ [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](/pages/viewpage.action?pageId=1271234731) เพื่อบันทึกบัญชี กรณีที่สถานะการจ่ายเป็น โอนเงินไม่สำเร็จ**Post-condition (เงื่อนไขหลังการทำงาน)**ระบบ Cenpay รับรู้สถานะการจ่ายจากทีมการเงิน และมีกระบวนการออกจดหมาย รวมถึง Line Notification หรือ SMS เพื่อแจ้งลูกค้า และหน่วยงานที่เกี่ยวข้องให้รับทราบผลการโอนเงินมีการตั้งรายการเพื่อรอแก้ไขข้อมูลและทำจ่ายใหม่ที่ระบบ Cenpayระบบ EDW บันทึกบัญชีการโอนเงินไม่สำเร็จ |

---

## Hyperlinks บนหน้านี้

- [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [ตรวจสอบและอนุมัติรายการเตรียมจ่ายผลประโยชน์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1255703317)
- [Module ตรวจจ่ายบัญชี จ่ายผลประโยชน์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906259)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
- [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [PY-006-FC-001 หน้าจอบันทึกผลการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271988595)
- [PC-001-FC-001 หน้าจอรวมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252010)
- [PC-002-FC-001 หน้าจอตรวจสอบรายการเตรียมจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1270252058)
- [PC-004-FC-001 หน้าจอยืนยันการโอนเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1278017914)
- [AC-001-FC-001 หน้าจอตรวจจ่ายบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1272906266)
- [PY-005-FC-001 หน้าจออนุมัติจ่ายและบันทึกบัญชี](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271234731)
