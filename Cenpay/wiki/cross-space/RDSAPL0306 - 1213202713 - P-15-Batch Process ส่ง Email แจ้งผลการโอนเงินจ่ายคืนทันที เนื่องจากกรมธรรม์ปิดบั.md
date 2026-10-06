# P-15-Batch Process ส่ง Email แจ้งผลการโอนเงินจ่ายคืนทันที  เนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ ( Auto Paid Up ) ทั้งกรณีโอนเงินผ่าน และโอนเงินไม่ผ่าน

- **Space:** `RDSAPL0306` — โครงการ APL ง.03-ง.06
- **Page ID:** 1213202713
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1213202713

---

```
TOC
```

[ [Objectives](#P-15-BatchProcessส่งEmailแจ้งผลการโอนเงินจ่ายคืนทันทีเนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ(AutoPaidUp)ทั้งกรณีโอนเงินผ่านและโอนเงินไม่ผ่าน-Objectives) ] [ [Process Overview](#P-15-BatchProcessส่งEmailแจ้งผลการโอนเงินจ่ายคืนทันทีเนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ(AutoPaidUp)ทั้งกรณีโอนเงินผ่านและโอนเงินไม่ผ่าน-ProcessOverview) ] [ [Preconditions](#P-15-BatchProcessส่งEmailแจ้งผลการโอนเงินจ่ายคืนทันทีเนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ(AutoPaidUp)ทั้งกรณีโอนเงินผ่านและโอนเงินไม่ผ่าน-Preconditions) ] [ [Process Description](#P-15-BatchProcessส่งEmailแจ้งผลการโอนเงินจ่ายคืนทันทีเนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ(AutoPaidUp)ทั้งกรณีโอนเงินผ่านและโอนเงินไม่ผ่าน-ProcessDescription) ] [ [Post-conditions](#P-15-BatchProcessส่งEmailแจ้งผลการโอนเงินจ่ายคืนทันทีเนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ(AutoPaidUp)ทั้งกรณีโอนเงินผ่านและโอนเงินไม่ผ่าน-Post-conditions) ]

## Objectives

- เพื่อส่ง Email แจ้งผลการโอนเงินจ่ายคืนทันที เนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ ( Auto Paid Up ) ทั้งกรณีโอนเงินผ่าน และโอนเงินไม่ผ่าน

## Process Overview

ระบบทำการดึงข้อมูลผลการจ่าย (โอนผ่าน / โอนไม่ผ่าน) เงินคืนทันที เพื่อนำมาจัดทำ Email สรุปรายการ เวลา 08:00 น. ของทุกวัน

## Preconditions

1. บันทึกผลการโอนสำเร็จ [Pop Up หน้าจอบันทึกผลการจ่ายสำเร็จ (ประเภทการจ่ายช่องทางโอน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1149600125#id-03-01-04PopUp%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88-PopUp%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88(%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%AD%E0%B8%99))
2. บันทึกผลการโอนไม่สำเร็จ [03-01-05 หน้าจอบันทึกผลการจ่ายไม่สำเร็จ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1149600131)
3. ระบบทำการดึงข้อมูล และจัดส่ง Email ตามสาขากรมธรรม์

## Process Description

1. ระบบทำการดึงข้อมูล กรมธรรม์บันทึกผลการจ่ายสำเร็จ (ประเภทช่องทางโอน/พร้อมเพย์) และการจ่ายไม่สำเร็จ SELECT PMS.TNPOL#,PMS.TNAMT,STAS.STSDSC,LG.LGPADT,LG.LGFADT, LG.LGACTI,LG.LGACNM ,LG.LGACSN,PYTHNM,LG.LGBRNM ,LG.LGACNO ,LG.LGBRNM,MS.CRORG#,P.SLUNNM FROM OLIS.OLPSRPMS PMS INNER JOIN OLIS.OLPSRPLG LG ON PMS.TNPOL# =LG.LGPOL# AND PMS.TNREFN=LG.LGREFN INNER JOIN OLIS.OLPPOLMS MS ON PMS.TNPOL# = MS.POLIC# INNER JOIN LIPS.PSPSLORG p ON MS.crorg# = p.SLUNT# LEFT JOIN OLIS.OLPSTAS STAS ON STAS.STSCOD=LG.LGLGCD AND STSTYP='G' LEFT JOIN OLIS.OLPPAYMS ON LG.LGPAY = PYCODE WHERE LG.LGLGCD in ('F','P') AND PYPYTY ='BNF' AND PYSTAS = 'A' AND PMS.TNPAY IN ('14','15') AND LG.LGDATE= @current_date - 1 AND PMS."TNSTS@" NOT <> 'D' --เพิ่มให้ไม่ดึงรายการที่ถูก Delete
2. group ข้อมูลตามสาขา แล้วส่ง mail
3. รูปแบบ Email

| หัวข้อ | รายละเอียด | คำอธิบาย |
|---|---|---|
| From : | [no-reply_itas400@ocean.co.th](mailto:no-reply_itas400@ocean.co.th) |   |
| TO : | @mail_to | @mail_to ให้กำหนด config mail (OLIS.OLPEMLS2) ที่จะต้องทำการส่ง mail to กำหนดเป็นสาขาต้นสังกัด 4 หลัก และตามด้วย @[ocean.co.th](http://ocean.co.th) เช่น สาขาต้นสังกัด นครราชสีมา 3200@[ocean.co.th](http://ocean.co.th/)Mapping Field OLIS.OLPPOLMS.CRORG# และใช้ 4 หลักสุดท้ายกรณี สนญ. ให้ส่ง [paybenefit@ocean.co.th](mailto:paybenefit@ocean.co.th) |
| CC : | @mail_cc | @mail_cc ให้กำหนด config mail (OLIS.OLPEMLS2) ที่จะต้องทำการ CC ถึง กำหนดเป็น [paybenefit@ocean.co.th](mailto:paybenefit@ocean.co.th)ถ้ามีหลายรายการ ให้คั่นแต่ละรายการด้วย ',' เช่น ผอ.ฝ่ายปฏิบัติการ, รองฯผอ.ฝ่ายปฏิบัติการ, PL&APL group, Alteration group, Premium Group เช่น A[plpremium@ocean.co.th](mailto:plpremium@ocean.co.th), [ps.ip1@ocean.co.th](mailto:ps.ip1@ocean.co.th) |
| Subject : | [[@ENV](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=953549074)] @EMSUBJ | @ENV Define environment SIT , UAT หน้า Subject ในกรณี Production ไม่ต้องระบุ เช่น [SIT]@EMSUBJ ให้กำหนดค่า config mail (OLIS.OLPEMLS2) เป็น "แจ้งผลการโอนเงินจ่ายคืนทันที เนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ ( Auto Paid Up )"ตัวอย่าง : [SIT] แจ้งผลการโอนเงินจ่ายคืนทันที เนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ ( Auto Paid Up ) |
| Content : | เรียน เจ้าหน้าที่สาขา (@branch_name)แจ้งผลการจ่ายเงินจ่ายคืนทันที เนื่องจากกรมธรรม์ปิดบัญชีอัตโนมัติ ( Auto Paid Up ) ประจำวันที่ @date เวลา 08:00 น. โดยมีรายละเอียด ดังนี้ ลำดับที่ประเภทการจ่ายเลขที่กรมธรรม์จำนวนเงินจ่ายคืนทันทีจำนวนเงินสุทธิผลการโอนเงินวันที่โอนเงินบัญชีเลขที่บัญชีธนาคารสาขาต้นสังกัดสาขาบริการ1เงินจ่ายคืนทันที123464930,000.0030,000.00สำเร็จ18/11/2567ธนาคาร8111XX9179 ธนาคารกรุงไทย จำกัด (มหาชน)อโศกสำนักงานใหญ่2เงินจ่ายคืนทันที123456730,000.0030,000.00ไม่สำเร็จ-ธนาคาร8111XX9175 ธนาคารกรุงไทย จำกัด (มหาชน)วิภาวดีสำนักงานใหญ่3เงินจ่ายคืนทันที123456810,000.0030,000.00สำเร็จ18/11/2567พร้อมเพย์1234XXXXX1234 ตราดสำนักงานใหญ่คำแนะนำการตรวจสอบกรณีโอนเงินไม่สำเร็จ 1. ให้สาขาติดต่อลูกค้าเพื่อตรวจสอบเลขที่บัญชีธนาคารหรือบัญชีพร้อมเพย์ 2. กรณีเปลี่ยนแปลงข้อมูลบัญชีธนาคารให้บันทึกที่ระบบ CIS 3. หลังแก้ไขเรียบร้อยแล้วให้สาขาแจ้งเมลกลับมาที่ส่วนงานจ่ายผลประโยชน์ตามกรมธรรม์และฝ่ายขายหมายเหตุ : ให้สาขาดำเนินการตรวจและแก้ไขภายใน 3 วันหลังได้รับ E-mailขอแสดงความนับถือ ฝ่ายปฏิบัติการ | เรียงลำดับตาม เลขที่กรมธรรม์ จากน้อยไปมากลำดับComponent**Mapping Table.**Field****Description @branch_nameLIPS.PSPSLORG.SLUNNMชื่อสาขาต้นสังกัด 1@date วันที่บันทึกผลการโอน เช่น 12/04/25652ลำดับที่ ลำดับรายการ เช่น 1 แสดงกึงกลาง3ประเภทการจ่ายกำหนดค่า "เงินจ่ายคืนทันที"แสดงชิดซ้าย4เลขที่กรมธรรม์[OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNPOL#แสดงชิดซ้าย5จำนวนเงินจ่ายคืนทันที[OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNAMTแสดงชิดขวา6จำนวนเงินสุทธิ[OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNAMTแสดงชิดขวา7ผลการโอนเงินOLIS.OLPSTAS.STSDSCแสดงชิดซ้าย8วันที่โอนเงิน[OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPADT ** หากไม่มีข้อมูลให้แสดง ขีดกลางแสดงชิดกึ่งกลาง รูปแบบ dd/mm/yyyy เช่น 12/04/25659บัญชีกรณี [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPAY = 14 แสดง "ธนาคาร"กรณี [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPAY = 15 แสดง "พร้อมเพย์"OLIS.OLPPAYMS.PYTHNMแสดงชิดซ้าย10เลขที่บัญชี[OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGACNOMARKING ให้แสดงตัวเลขเฉพาะ 4 หลักหน้า และ 4 หลักสุดท้ายแสดงชิดซ้าย11ธนาคาร[OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGBKNMแสดงชิดซ้าย12สาขาต้นสังกัดLIPS.PSPSLORG.SLUNNMแสดงชิดซ้าย13สาขาบริการกำหนดค่า "สำนักงานใหญ่"แสดงชิดซ้าย |
| ลำดับที่ | ประเภทการจ่าย | เลขที่กรมธรรม์ | จำนวนเงินจ่ายคืนทันที | จำนวนเงินสุทธิ | ผลการโอนเงิน | วันที่โอนเงิน | บัญชี | เลขที่บัญชี | ธนาคาร | สาขาต้นสังกัด | สาขาบริการ |
| 1 | เงินจ่ายคืนทันที | 1234649 | 30,000.00 | 30,000.00 | สำเร็จ | 18/11/2567 | ธนาคาร | 8111XX9179 | ธนาคารกรุงไทย จำกัด (มหาชน) | อโศก | สำนักงานใหญ่ |
| 2 | เงินจ่ายคืนทันที | 1234567 | 30,000.00 | 30,000.00 | ไม่สำเร็จ | - | ธนาคาร | 8111XX9175 | ธนาคารกรุงไทย จำกัด (มหาชน) | วิภาวดี | สำนักงานใหญ่ |
| 3 | เงินจ่ายคืนทันที | 1234568 | 10,000.00 | 30,000.00 | สำเร็จ | 18/11/2567 | พร้อมเพย์ | 1234XXXXX1234 |   | ตราด | สำนักงานใหญ่ |
| ลำดับ | Component | **Mapping Table.**Field**** | Description |
|   | @branch_name | LIPS.PSPSLORG.SLUNNM | ชื่อสาขาต้นสังกัด |
| 1 | @date |   | วันที่บันทึกผลการโอน เช่น 12/04/2565 |
| 2 | ลำดับที่ |   | ลำดับรายการ เช่น 1 แสดงกึงกลาง |
| 3 | ประเภทการจ่าย | กำหนดค่า "เงินจ่ายคืนทันที" | แสดงชิดซ้าย |
| 4 | เลขที่กรมธรรม์ | [OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNPOL# | แสดงชิดซ้าย |
| 5 | จำนวนเงินจ่ายคืนทันที | [OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNAMT | แสดงชิดขวา |
| 6 | จำนวนเงินสุทธิ | [OLIS_OLPSRPMS](/display/APP/OLIS_OLPSRPMS).TNAMT | แสดงชิดขวา |
| 7 | ผลการโอนเงิน | OLIS.OLPSTAS.STSDSC | แสดงชิดซ้าย |
| 8 | วันที่โอนเงิน | [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPADT ** หากไม่มีข้อมูลให้แสดง ขีดกลาง | แสดงชิดกึ่งกลาง รูปแบบ dd/mm/yyyy เช่น 12/04/2565 |
| 9 | บัญชี | กรณี [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPAY = 14 แสดง "ธนาคาร"กรณี [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGPAY = 15 แสดง "พร้อมเพย์"OLIS.OLPPAYMS.PYTHNM | แสดงชิดซ้าย |
| 10 | เลขที่บัญชี | [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGACNO | MARKING ให้แสดงตัวเลขเฉพาะ 4 หลักหน้า และ 4 หลักสุดท้ายแสดงชิดซ้าย |
| 11 | ธนาคาร | [OLIS_OLPSRPLG](/display/RDSAPL0306/OLIS_OLPSRPLG).LGBKNM | แสดงชิดซ้าย |
| 12 | สาขาต้นสังกัด | LIPS.PSPSLORG.SLUNNM | แสดงชิดซ้าย |
| 13 | สาขาบริการ | กำหนดค่า "สำนักงานใหญ่" | แสดงชิดซ้าย |

## Post-conditions

  1. <สิ่งที่จะเกิดขึ้นหรือเป็นผลมาจากการทำ process นี้>

---

## Hyperlinks บนหน้านี้

- [Pop Up หน้าจอบันทึกผลการจ่ายสำเร็จ (ประเภทการจ่ายช่องทางโอน)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1149600125#id-03-01-04PopUp%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88-PopUp%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88(%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%AD%E0%B8%99))
- [03-01-05 หน้าจอบันทึกผลการจ่ายไม่สำเร็จ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1149600131)
- [no-reply_itas400@ocean.co.th](http://wiki.thaisamut.co.thmailto:no-reply_itas400@ocean.co.th)
- [ocean.co.th](http://ocean.co.th)
- [ocean.co.th](http://ocean.co.th/)
- [paybenefit@ocean.co.th](http://wiki.thaisamut.co.thmailto:paybenefit@ocean.co.th)
- [paybenefit@ocean.co.th](http://wiki.thaisamut.co.thmailto:paybenefit@ocean.co.th)
- [plpremium@ocean.co.th](http://wiki.thaisamut.co.thmailto:plpremium@ocean.co.th)
- [ps.ip1@ocean.co.th](http://wiki.thaisamut.co.thmailto:ps.ip1@ocean.co.th)
- [@ENV](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=953549074)
- [OLIS_OLPSRPMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPSRPMS)
- [OLIS_OLPSRPMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPSRPMS)
- [OLIS_OLPSRPMS](http://wiki.thaisamut.co.th/display/APP/OLIS_OLPSRPMS)
- [OLIS_OLPSRPLG](http://wiki.thaisamut.co.th/display/RDSAPL0306/OLIS_OLPSRPLG)
- [OLIS_OLPSRPLG](http://wiki.thaisamut.co.th/display/RDSAPL0306/OLIS_OLPSRPLG)
- [OLIS_OLPSRPLG](http://wiki.thaisamut.co.th/display/RDSAPL0306/OLIS_OLPSRPLG)
- [OLIS_OLPSRPLG](http://wiki.thaisamut.co.th/display/RDSAPL0306/OLIS_OLPSRPLG)
- [OLIS_OLPSRPLG](http://wiki.thaisamut.co.th/display/RDSAPL0306/OLIS_OLPSRPLG)
