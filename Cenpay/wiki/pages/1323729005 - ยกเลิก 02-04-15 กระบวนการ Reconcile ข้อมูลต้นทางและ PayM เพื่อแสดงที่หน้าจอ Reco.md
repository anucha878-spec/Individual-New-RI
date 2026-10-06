# ยกเลิก 02-04-15 กระบวนการ Reconcile ข้อมูลต้นทางและ PayM เพื่อแสดงที่หน้าจอ Reconcile Oper (EDW)

- **Page ID:** 1323729005
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1323729005
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > ยกเลิก 02-04-15 กระบวนการ Reconcile ข้อมูลต้นทางและ PayM เพื่อแสดงที่หน้าจอ Reconcile Oper (EDW)
- **Depth:** 4

---

อ้างอิง : [https://app.diagrams.net/#G16r2CQClDixmut1MbML7gFQHGi6aBRVp-#%7B%22pageId%22%3A%22GWNQb2pkT-Cbeaft_F_7%22%7D](https://app.diagrams.net/#G16r2CQClDixmut1MbML7gFQHGi6aBRVp-#%7B%22pageId%22%3A%22GWNQb2pkT-Cbeaft_F_7%22%7D)
![img](http://wiki.thaisamut.co.th/download/attachments/1323728965/image2026-3-2%209%3A18%3A10.png?version=1&modificationDate=1772417890610&api=v2)

#### Overview :

| Step | Process | Owner | Detail |
|---|---|---|---|
| 1 | ส่ง Transaction ทำจ่าย | Source System | 1.ปรับ/เพิ่ม ตาราง Log สำหรับเก็บ Reconcile data ที่ส่งเข้า PayM 2.เรียก API Landing ข้อมูลเข้า PayM 3.บันทึกข้อมูลลงตาราง Log เมื่อส่งข้อมูลเข้า PayM |
| 2 | รับ Target Amount | PayM | Return Target Amount |
|   |   | Source System | Update Target Amount ที่ได้จาก PayM |
| 3 | ส่ง Reconcile Data | Source System | เรียก API Landing ข้อมูล Reconcile Oper |
|   |   | EDW | ปรับเงื่อนไขการ Query และการแสดงผลหน้าจอ Reconcile Oper EDW |
|   |   | Source System | update สถานะการส่งข้อมูล สำเร็จ/ไม่สำเร็จที่ตาราง log |
| 4 | Resend Reconcile Data | Source System | ปรับ/เพิ่ม Batch Sync ข้อมูล Reconcile data ที่ส่งเข้า Reconcile Oper EDW |

#### สรุป Task :

| Owner | Task | Remark |
|---|---|---|
| Source System | สร้างตาราง Log สำหรับเตรียมข้อมูลส่ง Reconcileเรียก API Landing ข้อมูลเข้า PayMบันทึกข้อมูลลงตาราง Log เมื่อส่งข้อมูลเข้า PayMUpdate Target Amount ที่ได้จาก PayM ที่ตาราง Logกรณี summaryAmount และ targetAmount ไม่เท่ากัน ยังต้องส่งข้อมูลเข้า Reconcileเรียก API Landing ข้อมูลเข้า Reconcile OperUpdate Reconcile Status Success/Fail ที่ตาราง Logกรณี Reconcile Status Fail เรียก API Resend Reconcile Oper | Design ตาราง LogMandatory Field DescriptionbatchOperNoBatch Number ฝ่ายปฎิบัติการsummaryAmountยอดรวมจากต้นทางส่งเข้า PayMtargetAmountยอดรวมจาก PayM ที่ได้รับreconcileStatusสถานะการส่งข้อมูลเข้า ReconcileSource SystemWikiDeposit UL Income |
| Mandatory Field | Description |
| batchOperNo | Batch Number ฝ่ายปฎิบัติการ |
| summaryAmount | ยอดรวมจากต้นทางส่งเข้า PayM |
| targetAmount | ยอดรวมจาก PayM ที่ได้รับ |
| reconcileStatus | สถานะการส่งข้อมูลเข้า Reconcile |
| Source System | Wiki |
| Deposit |   |
| UL |   |
| Income |   |
| PayM | ปรับ API Landing Return Target AmountReturn Target Amount | [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](/pages/viewpage.action?pageId=1284571175) |
| EDW | ปรับ SQL ประมวลผลการแสดงข้อมูล Reconcile ที่ปุ่มค้นหากรณี summaryAmount และ targetAmount ไม่เท่ากัน ให้แสดงผล Fail | [03_40 หน้าจอตรวจสอบรายการ Oper](/pages/viewpage.action?pageId=1148387712)[05_137 การ Setup กระบวนการ Reconcile ให้แสดงที่หน้าจอตรวจสอบรายการ Oper](/pages/viewpage.action?pageId=1189708480)[tx_reconcile_stats](/display/RDSADW/tx_reconcile_stats) |

---

## Hyperlinks บนหน้านี้

- [https://app.diagrams.net/#G16r2CQClDixmut1MbML7gFQHGi6aBRVp-#%7B%22pageId%22%3A%22GWNQb2pkT-Cbeaft_F_7%22%7D](https://app.diagrams.net/#G16r2CQClDixmut1MbML7gFQHGi6aBRVp-#%7B%22pageId%22%3A%22GWNQb2pkT-Cbeaft_F_7%22%7D)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [03_40 หน้าจอตรวจสอบรายการ Oper](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1148387712)
- [05_137 การ Setup กระบวนการ Reconcile ให้แสดงที่หน้าจอตรวจสอบรายการ Oper](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1189708480)
- [tx_reconcile_stats](http://wiki.thaisamut.co.th/display/RDSADW/tx_reconcile_stats)

## Attachments

- http://wiki.thaisamut.co.thhttp://wiki.thaisamut.co.th/download/attachments/1323728965/image2026-3-2%209%3A18%3A10.png?version=1&modificationDate=1772417890610&api=v2
