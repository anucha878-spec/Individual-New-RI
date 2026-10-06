# test_by_choet

- **Page ID:** 1299022313
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/test_by_choet
- **Path:** Home > Software Requirements Specification > 03. Business Processes and Screens Design > 5. Module บันทึกคำร้อง > CP-PR-001 : ค้นหา/ ตรวจสอบรายการคำร้อง > PR-001-FC-002 : หน้าจอดูรายละเอียดรายการคำร้อง > test_by_choet
- **Depth:** 6

---

คำร้องขอ Free Look
- **กรณีเป็น e-policy**
![img](/download/attachments/1297973667/image2026-5-13%2015%3A42%3A38.png?version=1&modificationDate=1778661759747&api=v2)
![img](/download/attachments/1297973667/image2026-6-11%2020%3A48%3A17.png?version=1&modificationDate=1781185698199&api=v2)
![img](/download/attachments/1297973667/image2025-12-18%2015%3A32%3A29.png?version=1&modificationDate=1766046750153&api=v2)
- **กรณีไม่ใช่ e-policy** ****
![img](/download/attachments/1297973667/image2026-5-13%2015%3A48%3A8.png?version=1&modificationDate=1778662089593&api=v2)
![img](/download/attachments/1297973667/image2026-6-11%2020%3A50%3A8.png?version=1&modificationDate=1781185808777&api=v2)
คำร้องขอเวนคืนกรมธรรม์ประกันภัย
![img](/download/attachments/1297973667/image2026-6-11%2020%3A53%3A41.png?version=1&modificationDate=1781186021516&api=v2)
![img](/download/attachments/1297973667/image2026-6-11%2020%3A54%3A36.png?version=1&modificationDate=1781186076319&api=v2)
คำร้องขอรับเงินผลประโยชน์ค้างรับ
![img](/download/attachments/1297973667/image2026-7-7%2013%3A26%3A5.png?version=1&modificationDate=1783405566331&api=v2)
![img](/download/attachments/1297973667/image2026-5-13%2015%3A18%3A22.png?version=1&modificationDate=1778660302900&api=v2)
![img](/download/attachments/1297973667/image2026-4-7%2015%3A0%3A14.png?version=1&modificationDate=1775548814714&api=v2)

### วัตถุประสงค์ (Objective)

- เพื่อใช้ตรวจสอบรายละเอียดรายการคำร้อง

### ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ธุรการ (สาขา) ([benefitregister:department:branch](http://benefitregisterdepartmentbranch/))
- ผู้จัดการสาขา ([benefitregister:department:branchmanager](http://benefitregisterdepartmentbranchmanager/))
- สนญ ([benefitregister:menu:pc0101](http://benefitregistermenupc0101), [benefitregister:menu:pc0102](http://benefitregistermenupc0102) และ [benefitregister:role:approvemanager](http://benefitregisterroleapprovemanager))

### เงื่อนไขก่อนการทำงาน (Pre-Condition)

- เลือกรายการเพื่อดูรายละเอียดรายการคำร้อง จากหน้าจอ [PR-001-FC-001 : หน้าจอค้นหารายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1297973377)

### การกระทำกับหน้าจอ (Actions)

- ตรวจสอบรายละเอียดข้อมูลคำร้อง
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)

- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้
  - ผู้ใช้งานได้ทราบถึงข้อมูลรายละเอียดรายการคำร้องที่ต้องการทราบได้อย่างชัดเจน

### การจัดการข้อผิดพลาด (Exceptional Handling)

- ไม่มี เป็นเพียงหน้าจอที่ใช้แสดงรายการข้อมูลที่ต้องการทราบเท่านั้น

## 📋 ข้อกำหนดหน้าจอดูรายละเอียดรายการคำร้อง (BC-001-FC-002)

### 🎯 วัตถุประสงค์ (Objective)

- เพื่อใช้ในการ **ตรวจสอบรายละเอียดรายการคำร้อง**

### 👥 ผู้ใช้งาน (Target Users)

- เจ้าหน้าที่ธุรการ (สาขา) (**Maker**)
- ผู้จัดการสาขา (**Checker**)

### 🔑 เงื่อนไขก่อนการทำงาน (Pre-Condition)

- ผู้ใช้งานต้อง **เลือกรายการเพื่อดูรายละเอียด** จากหน้าจอ **BC-001-FC-001 : หน้าจอค้นหารายการคำร้อง**

### 🖱️ การกระทำกับหน้าจอ (Actions)

- **ตรวจสอบรายละเอียดข้อมูลคำร้อง**
- กดปุ่ม **Back** เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### ✅ เงื่อนไขหลังการทำงาน (Post-Condition)

- ผู้ใช้งานได้ **ทราบถึงข้อมูลรายละเอียดรายการคำร้อง** ที่ต้องการทราบได้อย่างชัดเจน

### 🚨 การจัดการข้อผิดพลาด (Exceptional Handling)

- **ไม่มี** เป็นเพียงหน้าจอที่ใช้แสดงรายการข้อมูลที่ต้องการทราบเท่านั้น

## 🔎 รายละเอียดรายการคำร้อง (Data Component Specification)

### 1. ข้อมูลทั่วไป

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **แบบฟอร์มเอกสาร** | แสดงชื่อแบบฟอร์มเอกสาร | คำร้องขอเวนคืนกรมธรรม์ประกันภัย |   |
| 2 | Label | **เลขที่รับเรื่อง** | แสดงเลขที่รับเรื่อง | S2568/1500/00001 |   |
| 3 | Label | **เลขที่กรมธรรม์** | แสดงเลขที่กรมธรรม์ | E6523796 |   |
| 4 | Label | **ประเภทกรมธรรม์** | แสดงประเภทกรมธรรม์ | อุตสาหกรรม |   |
| 5 | Label | **สาขาต้นสังกัด** | แสดงรหัสสาขาและชื่อสาขา | 0116 : อโศก |   |
| 6 | Label | **วันที่รับคำร้อง** | แสดงวันที่รับคำร้อง | 16/09/2568 |   |
| 7 | Label | **วันที่รับเงิน** | แสดงวันที่รับเงิน | 01/10/2568 |   |
| 8 | Label | **ผู้อนุมัติ** | แสดงชื่อผู้อนุมัติ | ผอส.พรไทย ผ่องใสฤทธิ์รงค์ |   |
| 9 | Label | **ช่องทาง** | แสดงช่องทางการยื่นคำร้อง | ตัวแทน |   |

### 2. ยอดเงินจ่ายสุทธิ

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **รายการรับสุทธิ** | แสดงยอดเงินรายการรับสุทธิ | 31,500.00 | หน่วยเป็น บาท |
| 2 | Label | **รายการหักสุทธิ** | แสดงยอดเงินรายการหักสุทธิ | 0.00 | หน่วยเป็น บาท |
| 3 | Label | **ยอดเงินผลประโยชน์สุทธิ รวมทั้งสิ้น** | แสดงข้อมูลยอดเงินผลประโยชน์สุทธิที่ระบบคำนวณได้ (**รายการรับสุทธิ - รายการหักสุทธิ**) | 31,500.00 | หน่วยเป็น บาท |
| 4 | Button | **รายละเอียดการคำนวณ** | กดปุ่ม **"รายละเอียดการคำนวณ"** ระบบจะแสดงหน้าจอ pop-up **BC-001-FC-003 : หน้าจอ pop-up รายละเอียดการคำนวณ** |   |   |

### 3. ข้อมูลผู้เอาประกัน

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **เลขบัตรประจำตัวประชาชน/ Passport** | แสดงเลขบัตรประจำตัวประชาชน/ Passport | 3400400564794 |   |
| 2 | Label | **วันบัตรหมดอายุ** | แสดงวันบัตรหมดอายุ | 16/09/2569 |   |
| 3 | Label | **ชื่อ - นามสกุล ผู้เอาประกัน** | แสดงข้อมูลชื่อ-นามสกุล ผู้เอาประกัน ตามรูปแบบ **คำนำหน้า+ชื่อ+" "+นามสกุล** | นางไอพีพัน พีบีแอล |   |
| 4 | Label | **ชื่อแปลน** | แสดงชื่อแปลน | โอเชี่ยนไลฟ์ สมาร์ท พลัส 19/9 |   |
| 5 | Label | **วันเริ่มสัญญา** | แสดงวันเริ่มสัญญา | 05/07/2563 |   |
| 6 | Label | **วันครบสัญญา** | แสดงวันครบสัญญา | 05/07/2570 |   |
| 7 | Label | **งวดชำระเบี้ยล่าสุด** | แสดงงวดชำระเบี้ยล่าสุด | 1 |   |
| 8 | Label | **เบอร์โทรศัพท์ลูกค้าที่ประสงค์รับผลการพิจารณา** | แสดงเบอร์โทรศัพท์ลูกค้า ตามรูปแบบ **0xx-xxx-xxxx** | 080-386-1602 |   |
| 9 | Label | **ชื่อ - นามสกุล ตัวแทน** | แสดงข้อมูลชื่อ-นามสกุล ตัวแทน ตามรูปแบบ **คำนำหน้า+ชื่อ+" "+นามสกุล** | น.ส.ซีล้าน สองบี |   |
| 10 | Label | **รหัสตัวแทน** | แสดงรหัสตัวแทน | 5600125 |   |
| 11 | Label | **เบอร์โทรศัพท์ตัวแทน** | แสดงเบอร์โทรศัพท์ตัวแทน ตามรูปแบบ **0xx-xxx-xxxx** | 093-247-4847 |   |

### 4. ข้อมูลผู้ยื่นเอกสาร

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **ชื่อ - นามสกุล ผู้ยื่นเอกสาร** | แสดงข้อมูลชื่อ-นามสกุล ผู้ยื่นเอกสาร ตามรูปแบบ **คำนำหน้า+ชื่อ+" "+นามสกุล** | นางไอพีพัน พีบีแอล |   |
| 2 | Label | **เบอร์โทรศัพท์ผู้ยื่นเอกสาร** | แสดงเบอร์โทรศัพท์ผู้ยื่นเอกสาร ตามรูปแบบ **0xx-xxx-xxxx** | 080-386-1602 |   |
| 3 | Label | **ความสัมพันธ์** | แสดงความสัมพันธ์ของผู้ยื่นเอกสารกับผู้เอาประกัน | ตนเอง |   |
| 4 | Label | **เลขประจำตัวประชาชนผู้ยื่นเอกสาร** | แสดงเลขประจำตัวประชาชนผู้ยื่นเอกสาร | 3400400564794 |   |
| 5 | Label | **วันบัตรหมดอายุ** | แสดงวันบัตรหมดอายุ | 16/09/2569 |   |

### 5. ข้อมูลผู้รับเงิน

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **ชื่อ - นามสกุล ผู้รับเงิน** | แสดงข้อมูลชื่อ-นามสกุล ผู้รับเงิน ตามรูปแบบ **คำนำหน้า+ชื่อ+" "+นามสกุล** | นางไอพีพัน พีบีแอล |   |
| 2 | Label | **เบอร์โทรศัพท์ผู้รับเงิน** | แสดงเบอร์โทรศัพท์ผู้รับเงิน ตามรูปแบบ **0xx-xxx-xxxx** | 080-386-1602 |   |
| 3 | Label | **ความสัมพันธ์** | แสดงความสัมพันธ์ของผู้รับเงินกับผู้เอาประกัน | ตนเอง |   |
| 4 | Label | **เลขประจำตัวประชาชนผู้ผู้รับเงิน** | แสดงเลขประจำตัวประชาชนผู้ผู้รับเงิน | 3400400564794 |   |
| 5 | Label | **วันบัตรหมดอายุ** | แสดงวันบัตรหมดอายุ | 16/09/2569 |   |

### 6. ช่องทางการรับเงิน

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **ช่องทางการรับเงิน** | แสดงช่องทางการรับเงิน | โอนเงิน |   |
| 2 | Label | **ธนาคาร** | แสดงชื่อธนาคาร | ธนาคารกรุงเทพ จำกัด (มหาชน) | กรณีไม่มีข้อมูลแสดง **"-"** |
| 3 | Label | **สาขาธนาคาร** | แสดงสาขาธนาคาร | บางปู | กรณีไม่มีข้อมูลแสดง **"-"** |
| 4 | Label | **เลขที่บัญชี** | แสดงเลขที่บัญชี | 20110696257 | กรณีไม่มีข้อมูลแสดง **"-"** |
| 5 | Label | **ID Card** | แสดง ID Card (กรณีโอนพร้อมเพย์) | 3400400564794 | กรณีไม่มีข้อมูลแสดง **"-"** |

### 7. เอกสารประกอบคำร้อง

| **No.** | **Component Type** | **Component Name** | **Action / Data Value** | **Example** | **Remark** |
|---|---|---|---|---|---|
| 1 | Label | **เอกสารผู้เอาประกัน** | แสดงรายการเอกสารผู้เอาประกัน 3 รายการพร้อม **Checkbox** ที่แสดงเครื่องหมายถูกตามที่ระบุในรายการคำร้อง: 1. กรมธรรม์ประกันภัย หรือเอกสารแจ้งความกรณีกรมธรรม์สูญหาย 2. สำเนาบัตรประจำตัวประชาชน/หนังสือเดินทาง/สูติบัตร/บัตรข้าราชการ/ใบขับขี่ 3. แบบฟอร์มและเอกสารธนาคารโอนเงินต่างประเทศ |   | **หมายเหตุ:** Checkbox จะแสดงเครื่องหมายถูกตามที่ระบุในรายการคำร้อง |
| 2 | Label | **เอกสารอื่นๆ** | แสดงเอกสารอื่นๆ ตามที่ระบุในรายการคำร้อง | สำเนาใบเปลี่ยนชื่อ |   |
| 3 | Link | **เอกสารแนบ** | แสดง **Link File** เอกสารแนบ | เอกสารผู้เอาประกัน.pdf |   |

### 8. รายละเอียดเงื่อนไขปุ่ม

| **No.** | **Component Type** | **Component Name** | **Default Value** | **Validation Rules/Action** | **Example** | **Remark** |
|---|---|---|---|---|---|---|
| 1 | Button | **Back** | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม **Back** เพื่อปิดหน้าจอ และกลับสู่หน้าจอก่อนหน้า |   |   |

---

## Hyperlinks บนหน้านี้

- [benefitregister:department:branch](http://benefitregisterdepartmentbranch/)
- [benefitregister:department:branchmanager](http://benefitregisterdepartmentbranchmanager/)
- [benefitregister:menu:pc0101](http://benefitregistermenupc0101)
- [benefitregister:menu:pc0102](http://benefitregistermenupc0102)
- [benefitregister:role:approvemanager](http://benefitregisterroleapprovemanager)
- [PR-001-FC-001 : หน้าจอค้นหารายการคำร้อง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1297973377)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-5-13%2015%3A42%3A38.png?version=1&modificationDate=1778661759747&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-6-11%2020%3A48%3A17.png?version=1&modificationDate=1781185698199&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2025-12-18%2015%3A32%3A29.png?version=1&modificationDate=1766046750153&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-5-13%2015%3A48%3A8.png?version=1&modificationDate=1778662089593&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-6-11%2020%3A50%3A8.png?version=1&modificationDate=1781185808777&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-6-11%2020%3A53%3A41.png?version=1&modificationDate=1781186021516&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-6-11%2020%3A54%3A36.png?version=1&modificationDate=1781186076319&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-7-7%2013%3A26%3A5.png?version=1&modificationDate=1783405566331&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-5-13%2015%3A18%3A22.png?version=1&modificationDate=1778660302900&api=v2
- http://wiki.thaisamut.co.th/download/attachments/1297973667/image2026-4-7%2015%3A0%3A14.png?version=1&modificationDate=1775548814714&api=v2
