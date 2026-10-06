# 05_01_01 Business Rule และเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้า Database ที่ EDW ประมวลผล

- **Space:** `RDSADW` — โครงการ Accounting Data Warehouse
- **Page ID:** 902168624
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=902168624

---

# TOC

/*<![CDATA[*/ div.rbtoc1784798158471 {padding: 0px;} div.rbtoc1784798158471 ul {list-style: disc;margin-left: 0px;} div.rbtoc1784798158471 li {margin-left: 0px;padding-left: 0px;} /*]]>*/
- [TOC](#id-05_01_01BusinessRuleและเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้าDatabaseที่EDWประมวลผล-TOC)
- [Overview](#id-05_01_01BusinessRuleและเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้าDatabaseที่EDWประมวลผล-Overview)
- [Description](#id-05_01_01BusinessRuleและเงื่อนไขการบันทึกข้อมูลเรื่องต่างๆเข้าDatabaseที่EDWประมวลผล-Description)

# Overview

- อธิบายหลักการ เก็บข้อมูลที่ระบบ ADW ตาม Column ต่างๆในเอกสาร [COA Required Field](https://docs.google.com/spreadsheets/d/12C8fJtED9l0wfb3qslazinzkNxtdnEdBt7j35cHcZQ4/edit#gid=1945691910&fvid=543696741)

# Description

- **1.Business Rule**

| Required Field | SAP | กลุ่มข้อมูล | Business Rule | ตัวอย่าง |
|---|---|---|---|---|
| Posting Date | Doc. Date และ Posting Date | Accounting | วันที่บันทีกบัญชี UL---> CMS Default เป็นวันที่ทางปฏิบัติการอนุมัติส่งข้อมูลมาจะเปลี่ยนเป็นวันใหม่ หลังจากการเงินทำการอนุมติ ที่หน้า Dashboard Payment การเงินเรียบร้อยแล้ว | 2021-10-02 |
| Period | - | Accounting | วันที่บันทึกบัญชี ที่แปลงค่าออกมาแสดงเป็น เดือน ปีหน้าตรวจสอบรายการแสดง Format "MONYYYY"หน้ารายงานคณิตศาสตร์แสดง Format "MMYYYY"**>>** ในระบบไม่ต้องทำการจัดเก็บ แต่จะใช้ Posting Date ในการแปลงค่าออกมาแสดง | - |
| Account code | Account code | Accounting | รหัส GL บัญชี | 12010000 |
| Account Name | Account Name | Accounting | ชื่อ GL บัญชี | เงินสด GL |
| GL Type | - | Accounting | ประเภท GLDR = DebitCR = Credit | DR หรือ CR |
| Posting KeyUpdate By Rutthapol.pi on 11.10.2565เพิ่มการเก็บรายงานสำหรับรายการที่มีการ Posting Key ปัจจุบันไม่ใช่ 40,50 (ซึ่งปัจจุบัน ณ วันที่ 11.10.2565 ยังไม่มีการใช้งาน) เทียบ Version ของ COA User คือ 2.4 | Posting Key | Accounting | ประเภท GLGL TypePosting KeyDR40CR50 | กรณีที่ผังบัญชีไม่ได้ทำการ Set Posting Key ไว้จะ Default ส่ง SAP DR = 40CR = 50 |
| GL Type | Posting Key |
| DR | 40 |
| CR | 50 |
| Policy Number | - | Accounting | เลขกรมธรรม์ | 1541039 |
| Amount | Amount | Accounting | จำนวนเงินที่ลงบัญชี บันทึกค่าตัวเลขที่มีทศนิยม 2 หลัก | 50,000.00 |
| Receive Date/ Payment Date | - | Accounting | วันที่รับเงินหรือจ่ายเงิน ระบบ Cenpay Payment Date ระบบรับฝาก Update By vorapoj.mo 26/01/2022ตั้งรับฝาก : วันที่โอน (T)ตัดรับฝาก : วันที่ลูกค้าชำระ (T)Event Caseผู้ให้บริการวันที่เงิน เข้าบัญชีหมายเหตุPay inโอน/เช็คTรวมประกันกลุ่มBill Payment-CS (Counter service)Counter ServiceT+3รวมประกันกลุ่มBill Payment-CB (Counter Bank)BBL , KTB ,BAY,KBANK ,TTB ,GSB ,SCB, BAAC ,LHTรวมประกันกลุ่มBill Payment-M PayM PayT+1รวมประกันกลุ่มBill Payment-True MoneyTrue MoneyT+1รวมประกันกลุ่มBill Payment-Big CBigCT+2รวมประกันกลุ่มBill Payment-Tesco LotusTesco LotusT+1รวมประกันกลุ่มBill payment-QR Code (Mobile)BBLT+1รวมประกันกลุ่มBill payment-Thai QR CodeBBLT+1รวมประกันกลุ่มBill payment-Pay@Post (ไปรษณีย์)KBANKT+1รวมประกันกลุ่มDirect DebitBBL ,KTB , BAY ,KBANK , GSB ,LHT Direct Debit - SCBSCBT+1 Auto Credit (ตัดบัตรเครดิตอัตโนมัติ Recurring ) - BBLBBLT+1 Mail Order & EDC (ตัดบัตรเครดิต) - KBANKKBANKT Payment Gateway-2C2P (I-Service)KBANKT`วันที่ทำการถอนเงิน 3-5 วัน` Payment Gateway-BBL (E-App)BBLT+1 รับเช็คคืนพร้อมใบคำขอ T ภาคสมัครใจ Tเฉพาะประกันกลุ่มสวัสดิการ Tเฉพาะประกันกลุ่มส่งเสริมการขาย Tเฉพาะประกันกลุ่ม | 2021-10-02 |
| Event Case | ผู้ให้บริการ | วันที่เงิน เข้าบัญชี | หมายเหตุ |
| Pay in | โอน/เช็ค | T | รวมประกันกลุ่ม |
| Bill Payment-CS (Counter service) | Counter Service | T+3 | รวมประกันกลุ่ม |
| Bill Payment-CB (Counter Bank) | BBL , KTB ,BAY,KBANK ,TTB ,GSB ,SCB, BAAC ,LH | T | รวมประกันกลุ่ม |
| Bill Payment-M Pay | M Pay | T+1 | รวมประกันกลุ่ม |
| Bill Payment-True Money | True Money | T+1 | รวมประกันกลุ่ม |
| Bill Payment-Big C | BigC | T+2 | รวมประกันกลุ่ม |
| Bill Payment-Tesco Lotus | Tesco Lotus | T+1 | รวมประกันกลุ่ม |
| Bill payment-QR Code (Mobile) | BBL | T+1 | รวมประกันกลุ่ม |
| Bill payment-Thai QR Code | BBL | T+1 | รวมประกันกลุ่ม |
| Bill payment-Pay@Post (ไปรษณีย์) | KBANK | T+1 | รวมประกันกลุ่ม |
| Direct Debit | BBL ,KTB , BAY ,KBANK , GSB ,LH | T |   |
| Direct Debit - SCB | SCB | T+1 |   |
| Auto Credit (ตัดบัตรเครดิตอัตโนมัติ Recurring ) - BBL | BBL | T+1 |   |
| Mail Order & EDC (ตัดบัตรเครดิต) - KBANK | KBANK | T |   |
| Payment Gateway-2C2P (I-Service) | KBANK | T`วันที่ทำการถอนเงิน 3-5 วัน` |   |
| Payment Gateway-BBL (E-App) | BBL | T+1 |   |
| รับเช็คคืนพร้อมใบคำขอ |   | T |   |
| ภาคสมัครใจ |   | T | เฉพาะประกันกลุ่ม |
| สวัสดิการ |   | T | เฉพาะประกันกลุ่ม |
| ส่งเสริมการขาย |   | T | เฉพาะประกันกลุ่ม |
| Policy Due Date | - | Accounting | วันที่ครบ Due ของกรมธรรม์ตอนจ่ายผลประโยชน์ เช่น วันที่ครบสัญญาวันที่ครบสมนาคุณวันที่ครบทรงชีพUpdate By Nutnarin.Ch 25/03/2565**GL ดังต่อไปนี้ให้ใช้ Accounting Date**50543005 - เวนคืนกรมธรรม์50543010 - เวนคืนกรมธรรม์อัตโนมัติ ****GL ดังต่อไปนี้ให้ใช้**Policy Due Date**50549015 - เงินจ่ายคืน50547005 - เงินบำนาญ21010005 - ครบกำหนดสัญญาค้างจ่าย50541005 - ครบกำหนดสัญญา50549005 - ดอกเบี้ยจ่ายตามเงื่อนไขกรมธรรม์ | 2021-10-02 |
| Plan code | - | Accounting | » กรณี เป็นแบบประกันเพิ่มเติม (Rider)เก็บรหัส Rider สัญาเพิ่มเติม» กรณี เป็นแบบประกันหลัก(ฺBasic)เก็บรหัสแปลนสัญญาหลักupdate by jureeporn.ka 30/08/2022» กรณี เป็นกรมธรรม์ประกันกลุ่มเก็บค่า "GROUP_YRT" "GYRT" update by jureeporn.ka 30/09/2022 | Update By Nutnarin 21/03/2565» กรณี เป็นแบบประกันเพิ่มเติม (Rider)4» กรณี เป็นแบบประกันหลัก (Basic)539116PA017update by jureeporn.ka 30/08/2022» กรณีกรมธรรม์ประกันกลุ่มเก็บค่า "GROUP_YRT" "GYRT" update by jureeporn.ka 30/09/2022 |
| Base/Rider | - | Accounting | ประเภทความคุ้มครอง มีเฉพาะกลุ่มข้อมูล ModelPremiumCommission OVClaimReinsuranceประเภทกรมธรรม์อุตสาหกรรมกรณีเป็นแบบประกันหลัก กำหนดค่า basic_rider_indicator เป็น '**BASIC**'กรณีเป็นแบบประกันเพิ่มเติม กำหนดค่า basic_rider_indicator เป็น '**RIDER**' (ไม่มีใน **Model Commission OV**เนื่องจากในปัจจุบันอุตสาหกรรม ไม่มีขายสัญญาเพิ่มเติม)สามัญกรณีเป็นแบบประกันหลัก กำหนดค่า basic_rider_indicator เป็น '**BASIC**'กรณีเป็นแบบประกันเพิ่มเติม กำหนดค่า basic_rider_indicator เป็น '**RIDER**'PAกำหนดค่า basic_rider_indicator เป็น '**BASIC**' เสมอ เนื่องจาก PA มีแต่ความคุ้มครองหลัก และความคุ้มครองเพิ่มเติม ไม่มีสัญญาเพิ่มเติมULกำหนดค่า basic_rider_indicator เป็น '**BASIC**' เสมอ เนื่องจากในปัจจุบัน UL ไม่มีขายสัญญาเพิ่มเติม Auto Post ส่วนของประเภทกลุ่มข้อมูล (Model)PremiumCommission OVClaimReinsurance1. ประเภทกรมธรรม์อุตสาหกรรม (INDUSTY)» กรณี เป็นแบบประกันเพิ่มเติม (Rider)โดยพิจารณาจาก [tx_adwpc_result_query_premium_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ind).source_type = 'AS00_RIDER_IND'กำหนดค่า basic_rider_indicator เป็น '**RIDER**'» กรณี เป็นแบบประกันหลัก(ฺBasic)โดยพิจารณาจาก[tx_adwpc_result_query_premium_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ind).source_type <> 'AS00_RIDER_IND'กำหนดค่า basic_rider_indicator เป็น '**BASIC**'2. ประเภทกรมธรรม์สามัญ (ORDINARY)» กรณี เป็นแบบประกันเพิ่มเติม (Rider)โดยพิจารณาจาก [tx_adwpc_result_query_premium_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ord).rider_code <> '0'กำหนดค่า basic_rider_indicator เป็น '**RIDER**'» กรณี เป็นแบบประกันหลัก(ฺBasic)โดยพิจารณาจาก [tx_adwpc_result_query_premium_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ord).rider_code = '0'กำหนดค่า basic_rider_indicator เป็น '**BASIC**'3 ประเภทกรมธรรม์ PAกำหนดค่า basic_rider_indicator เป็น '**BASIC**' เสมอ4 ประเภทกรมธรรม์ ULกำหนดค่า basic_rider_indicator เป็น '**BASIC**' เสมอ5 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564กำหนดค่า basic_rider_indicator เป็น '**BASIC**' เสมอ Cenpay 1 = '**BASIC**'2 = '**RIDER**' APL EVENT APL_MAC_01 และAPL_MAC_02กรณี รหัสสัญญา (R1CODE) = 0 ให้ Fix ค่า '**BASIC**' กรณี รหัสสัญญา (R1CODE) != 0 ให้ Fix ค่า '**RIDER**'EVENT อื่นๆ FIX DATA = '**BASIC**'*เนื่องจากการกู้เงินจะกู้จากมูลค่ากรมธรรม์หลัก* โอนเงินกู้ระหว่างสาขา (อตุสาหกรรม ปช./ขพ.) FIX DATA = '**BASIC**'*เนื่องจากการ**กู้**เงินจะกู้จากมูลค่ากรมธรรม์หลัก* Easy Loan FIX DATA = '**BASIC**'*เนื่องจากการ**กู้**เงินจะกู้จากมูลค่ากรมธรรม์หลัก* ปิดบัญชีอัตโนมัติ APU กรณี รหัสสัญญา (OLIS.OLPRECTD.R1CODE) = 0 ให้ Fix ค่า '**BASIC**'กรณี รหัสสัญญา (OLIS.OLPRECTD.R1CODE) != 0 ให้ Fix ค่า '**RIDER**' APL(Manual) EVENT : APL_M_01 และAPL_M_02กรณี รหัสสัญญา (APLLIB.OLSCALLD.TMCODE) = 0 ให้ Fix ค่า '**BASIC**' กรณี รหัสสัญญา (APLLIB.OLSCALLD.TMCODE) != 0 ให้ Fix ค่า '**RIDER**' เงินกู้ สิ้นผลบังคับ FIX DATA = '**BASIC**'*เนื่องจากการกู้เงินจะกู้จากมูลค่ากรมธรรม์หลัก* ดบ.ค้างรับ และ ภธ.ค้างจ่ายเกณฑ์สิทธิ์ (ประจำเดือน) FIX DATA = '**BASIC**' ปิดบัญชีมูลค่าสำเร็จ(สลักหลัง) - สามัญ FIX DATA = '**BASIC**' สินไหมประกันชีวิต ประกันกลุ่ม FIX DATA = '**BASIC**' สินไหม ประเภทกรมธรรม์อุตสาหกรรม (Update by thidarat.lu 27/02/2566)กรณีมาจากระบบ AS400ถ้า Rider Code = 0, 3 กำหนดค่า basic_rider_indicator เป็น '**BASIC**'ถ้า Rider Code <> 0, 3 กำหนดค่า basic_rider_indicator เป็น '**RIDER**กรณีมาจากระบบ SQL กำหนดค่า basic_rider_indicator เป็น '**RIDER**' เสมอ | BASIC |
| Prophet Plan code | - | Accounting | การกำหนด Prophet Plan Code (Field: plan_code_actuarial)1.ประเภทกรมธรรม์อุตสาหกรรม (INDUSTY)» กรณี เป็นแบบประกันเพิ่มเติม (Rider)>> ส่วนนี้เป็นที่มาในการอ่านจาก AS400 มาลงตาราง Policy Master ของ IND Rider ในขั้นตอน Landingการหา Plan Codeกำหนดค่า Rider Code โดยถ้า GWLIB.PAYMTDT0.PYRDID = 8Rider Code = 3ถ้า GWLIB.PAYMTDT0.PYRDID = 5Rider Code = 1ค้นหาข้อมูล GWLIB.TBRIDMS (Key : Policy No , Rider Code)กรณีพบข้อมูลรหัสแบบประกัน มีค่าเท่ากับ Rider Code ตามข้อ 1,2กรณีไม่พบข้อมูล และ GWLIB.PAYMTDT0.PYRDID = 5 ให้ทำการค้นหาข้อมูลใน GWLIB.TBRIDMS ด้วย Rider Code = 2หากพบข้อมูล รหัสแบบประกัน มีค่าเท่ากับ 2>> ส่วนนี้เป็น Logic การกำหนด Prophet Plan Code ในขั้นตอน **ETL**พิจารณาจาก Plan Code ที่เป็นรหัสแบบประกัน 2 หลักตรวจสอบว่าหากรหัสแบบประกันไม่เป็นรหัสแบบ 2 หลัก กำหนดให้ใส่ศูนย์ (0) ข้างหน้ารหัสแบบประกันให้ครบ 2 หลัก เช่น 9 ให้เป็น 09ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร "**RI**" ตามด้วย Plan code รหัสแบบประกัน 2 หลัก**ตัวอย่าง**Plan Code = 19 กำหนดค่า Prophet Plan Code เป็น **RI19**» กรณี แบบประกันหลัก (Basic)พิจารณาจาก Plan Code รหัสแบบประกันตรวจสอบว่าหากรหัสแบบประกันไม่เป็นรหัสแบบ 3 หลัก กำหนดให้ใส่ศูนย์ (0) ข้างหน้ารหัสแบบประกันให้ครบ 3 หลัก เช่น 9 ให้เป็น 009, 19 ให้เป็น 019หากเป็นกรมธรรม์ ปช. ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร "**I**" ตามด้วย Plan code รหัสแบบประกันที่เป็น 3 หลักข้างต้น`หากเป็นกรมธรรม์ ขพ. และคู่ขวัญ ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร "**G**" ตามด้วย Plan code รหัสแบบประกันที่เป็น 3 หลักข้างต้น`Update By Nutnarin C. 22/09/2564ถ้าเป็นกรมธรรม์ ขพ1. หยิบ plan_code อ่านที่ตาราง [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) ด้วยเงื่อนไขดังนี้ (*** กรณีเป็นคู่ขวัญ)กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) .type = 'PLAN_KHU_KWAN'กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) .config1 = plan_codeหยิบฟิล์ด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) .config_detail มาบันทึกเป็น Prophet Plan Code 2. ถ้าไม่เจอใน Config ด้านบน ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร " G " ตามด้วย Plan code รหัสแบบประกันที่เป็น 3 หลักข้างต้น**ตัวอย่าง**`กรมธรรม์ ปช., Plan Code = 9 กำหนดค่า Prophet Plan Code เป็น **I009**``กรมธรรม์ ปช., Plan Code = 999 กำหนดค่า Prophet Plan Code เป็น **I999**``กรมธรรม์ ขพ., Plan Code = 99 กำหนดค่า Prophet Plan Code เป็น **G099**``กรมธรรม์ ขพ., Plan Code = 999 กำหนดค่า Prophet Plan Code เป็น **G999**`2. ประเภทกรมธรรม์สามัญ (ORDINARY)» กรณี เป็นแบบประกันเพิ่มเติม (Rider)`พิจารณาจาก Plan Code ที่เป็นรหัสแบบประกัน 2 หลัก``ตรวจสอบว่าหากรหัสแบบประกันไม่เป็นรหัสแบบ 2 หลัก กำหนดให้ใส่ศูนย์ (0) ข้างหน้ารหัสแบบประกันให้ครบ 2 หลัก เช่น 9 ให้เป็น 09``ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร " **RO** " ตามด้วย Plan code รหัสแบบประกัน 2 หลัก`**ตัวอย่าง**Plan Code = 19 กำหนดค่า Prophet Plan Code เป็น **RO19******» กรณี แบบประกันหลัก (Basic)`ตรวจสอบแบบประกันว่าเป็น Credit Life หรือไม่ โดยพิจารณาจาก Plan Code ที่เป็นรหัสแบบประกัน นำไปประมวลผลตาราง [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) เพื่อนำข้อมูลที่อ่านกำหนดค่า Prophet Plan Code``โดยใช้ข้อมูลต่อไปนี้เป็นเงื่อนไขในการอ่าน` `กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).type = 'CREDIT_LIFE_PLAN_CODE'``กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config1 = Plan Code รหัสแบบประกัน``หยิบข้อมูลฟิล์ด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config_detail มาบันทึกเป็น Prophet Plan Code`*** อ้างอิงตาราง [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog) จาก [5.2 ADWPC Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 2.5 รายการประเภทแบบประกัน Credit life (L) และ Credit life (R)*`หากไม่พบข้อมูลจากประมวลผล Credit Life จากตาราง [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog) กำหนดให้ประมวลผลต่อดังนี้``พิจารณาจาก Plan Code รหัสแบบประกัน``ตรวจสอบว่าหากรหัสแบบประกันไม่เป็นรหัสแบบ 3 หลัก กำหนดให้ใส่ศูนย์ (0) ข้างหน้ารหัสแบบประกันให้ครบ 3 หลัก เช่น 9 ให้เป็น 009, 19 ให้เป็น 019``ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร " **O** " ตามด้วย Plan code รหัสแบบประกันที่เป็น 3 หลักข้างต้น`**ตัวอย่าง**`Plan Code = 9 กำหนดค่า Prophet Plan Code เป็น **O009**``Plan Code = 99 กำหนดค่า Prophet Plan Code เป็น **O****099**``Plan Code = 999 กำหนดค่า Prophet Plan Code เป็น ****O**999**`3. ประเภทกรมธรรม์ PA`พิจารณาจาก Plan Code รหัสแบบประกัน``กำหนดให้ตัดตัวอักษร PA ที่ขึ้นต้นรหัสแบบประกันออก (ให้เหลือเฉพาะตัวเลข เช่น PA019 ให้เป็น 019)``ตรวจสอบว่าหากรหัสแบบประกันไม่เป็นรหัสแบบ 3 หลัก กำหนดให้ใส่ศูนย์ (0) ข้างหน้ารหัสแบบประกันให้ครบ 3 หลัก เช่น 9 ให้เป็น 009, 19 ให้เป็น 019``ให้กำหนดค่า Prophet Plan Code เป็นตัวอักษร " **P** " ตามด้วย Plan code รหัสแบบประกันที่เป็น 3 หลักข้างต้น`**ตัวอย่าง**Plan Code = PA019 กำหนดค่า Prophet Plan Code เป็น **P019**4. ประเภทกรมธรรม์ UL`พิจารณาจาก Plan Code รหัสแบบประกัน``กำหนดให้ตัดตัวอักษร Premium type โดยให้พิจารณาเฉพ่าะ (Regular, Single) โดยให้กำหนด Regular = '**RP**', Single = '**SP**' แล้วนำ Plan code 2 ตัวท้ายมาต่อ`**ตัวอย่าง**`Premium type = Regular, Plan Code = UL001 ให้ Prophet Code = RP01``Premium type = Single, Plan Code = UL002 ให้ Prophet Code = SP02` 5 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564Fix : 'C_GYRT' "GYRT" update by jureeporn.ka 30/09/2022 |   |
| `กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).type = 'CREDIT_LIFE_PLAN_CODE'``กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config1 = Plan Code รหัสแบบประกัน``หยิบข้อมูลฟิล์ด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config_detail มาบันทึกเป็น Prophet Plan Code` |
| Channel | - | Accounting | การกำหนดค่า Sale Channel ช่องทางการขาย (Field: sale_channel) เงื่อนไขเดิม ไม่ใช้แล้ว 08.08.2565 `1. อ่านข้อมูลรหัสช่องทางการขายมาจากต้นทางดังต่อไปนี้``**IND :** ฟิล์ด plchnl ตาราง pillib.insurpl0 บันทึกข้อมูลเป็น sale_channel``**ORD :** ฟิล์ด plchnl ตาราง olis.olpplntb บันทึกข้อมูลเป็น sale_channel``**ORD :**ฟิล์ด crorg# ตาราง olis.olppolms บันทึกข้อมูลเป็น sale_channel //แก้ไขหยิบ sale channel 19.07.2564 JIRA ADW-1453``**PA :** ฟิล์ด polchn ตาราง ppalib.tbpolicy บันทึกข้อมูลเป็น sale_channel``**UL : Fix 'Agent'**``**Group Life (ประกันกลุ่ม) : FIX 'Alternative2' (ALG) // nattapong.che 01.08.65**`**ยกเลิก ให้อ่านจากช่องทางการขายตามปกติ //09.08.65**`2. กรณีที่ sale_channel มีค่าเป็น 0 ให้นำไปประมวลผลใน catalog ข้อ 4 ได้ทันที``3. กรณีที่ sale_channel มีค่าเป็นรหัส 7 หลักให้อ่านเฉพาะ 3 Digit แรกนำไปประมวลผลใน catalog ข้อ 4``4. ประมวลจากตาราง [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) เพื่อนำข้อมูล sale_channel มาบันทึก``>> ให้ XXX แทนค่าด้วย Policy_category ( ind, ord, pa ) ตามที่อ่านมาจากข้อ 12.1``กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).type = 'SALE_CHANNEL'``กำหนด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config1 = tx_adwpc_result_query_policy_XXX.sale_channel``หยิบข้อมูลฟิล์ด [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config_detail มาบันทึกเป็น sale_channel` `ข้อมูล สาขา (Auto Post) อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 7``ข้อมูล สนญ. ประกันรายเดี่ยว อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 8``ข้อมูล สนญ. ประกันกลุ่ม อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 9` |   |
| Sales Channel Code | - | Accounting | Auto Post `1.ORD : อ่านข้อมูลจาก [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord).sale_channel มาบันทึกเป็น channel_code ได้ทันทีไม่ต้องประมวลผลต่อ``2.IND, PA และ ULอ่านข้อมูลจากตารางด้านล่าง และนำไปประมวลผลต่อในข้อ 3 - 5``IND :[tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind).sale_channel``ORD : tx_adwpc_result_query_policy_ord.sale_channel``PA : [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa).sale_channel``UL : Fix '0'``3.กรณีที่ sale_channel จากข้อ 2 มีค่าเป็นรหัส 7 หลัก ให้หยิบมาใช้เป็น channel_code ได้ทันทีไม่ต้องประมวลผลต่อ``4.กรณีที่ sale_channel จากข้อ 2 มีค่าเป็นรหัส 3 หลัก`ให้กำหนดค่าจาก sale_channel รหัส 3 หลัก และตามด้วยสาขาต้นสังกัด โดยหยิบจากจะได้เป็นรหัส 7 หลัก นำมาใช้เป็น channel_code`ORD : [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord).policy_branch``IND : [tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind).policy_branch``PA : [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa).policy_branch``UL : ???``ตัวอย่าง :``1.รหัส 3 หลัก = 507, สาขาต้นสังกัด = 0116`กำหนดให้ channel_code = 5070116`2.รหัส 3 หลัก = 207, สาขาต้นสังกัด = 0116 กำหนดให้ channel_code = 2070116``5. กรณีที่ sale_channel มีค่าเป็น 0``กำหนดให้ Fix รหัส 3 หลักแรกเป็น 207 และตามด้วยสาขาต้นสังกัด โดยหยิบจาก``จะได้เป็นรหัส 7 หลัก นำมาใช้เป็น channel_code``IND : [tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind).policy_branch``ORD : [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord).policy_branch``PA : [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa).policy_branch``UL : tx_ul_financial_transaction.policy_branch``ตัวอย่าง : กำหนดรหัส 3 หลัก = 207, สาขาต้นสังกัด = 0116 กำหนดให้ channel_code = 2070116``6 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564``รอ Confirm` ระบบอื่น ๆ `กรณี สามัญ ให้ใช้รหัส sale_channel 7 หลักที่ได้ ตัวอย่าง : 2070116, 5070116``กรณี อุตสาหกรรม, PA และ UL``กรณีที่ sale_channel มีค่าเป็น 0 หรือ 3 หลักแรกขึ้นต้นด้วย 500 ให้ Fix รหัส 3 หลักแรกเป็น 207 และตามด้วยสาขาต้นสังกัด // update by kaew 28/09/65` `ตัวอย่าง : กำหนดรหัส 3 หลัก = 207, สาขาต้นสังกัด = 0116 จะได้ 2070116````กรณี sale_channel มีค่าเป็นรหัส 7 หลัก ให้ใช้ค่านั้น ตัวอย่าง : 2070116``กรณี sale_channel มีค่าเป็นรหัส 3 หลัก ให้ใช้ค่านั้น และตามด้วยสาขาต้นสังกัด` `ตัวอย่างรหัส 3 หลัก = 207, สาขาต้นสังกัด = 0116 จะได้ 2070116``กรณีเป็นแบบประกันคู่ขวัญ (แบบประกัน 60, 61, 62, 65, 66, 67, 70, 72, 73, 74, 77, 78, 79) เป็นประเภทกรมธรรม์อุตฯ ปช กำหนดให้รหัส 3 หลักแรกเป็น 207 และตามด้วยสาขาต้นสังกัด` `ตัวอย่าง : กำหนดรหัส 3 หลัก = 207, สาขาต้นสังกัด = 0116 จะได้ 2070116` ประกันกลุ่ม `นำข้อมูลกรมธรรม์ของประกันกลุ่ม ไปหา ChannelDesc ที่ [public.oceanlife_gloldpolicy](http://wiki.thaisamut.co.th/display/IEA/public.oceanlife_gloldpolicy).SaleChannel ([อ้างอิง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298))``นำ ChannelDesc [cf_grouplife_mapping_sale_channel_code](/display/RDSADW/cf_grouplife_mapping_sale_channel_code).sales_channel_code มาบันทึกเป็น sale_channel_code``**นิยาม****ChannelDesc**``0 = Direct Mapping กับ 8300001``1 = Dai-ichi Mapping กับ 8300001``2 = Co-op Mapping กับ 8200001` | 2070116 |
| Cost center | Cost center | Accounting | เก็บค่า Cost Center ตามที่ผังบัญชีกำหนด>> กรณีที่มีการ Define ผังเดิมมาจากระบบต้นทาง (ยกตัวอย่างระบบ Auto Post) ที่ BA ของระบบต้นทางจะถูกบิดให้ลงเป็นสาขาที่ลงบัญชีเสมอ (ดูรายละเอียดที่ Branch (service)) ส่งผลให้ Cost Center และ Profit Center จำเป็นต้องทำการบิดตาม BA ที่ถูกเปลี่ยนด้วย Logic การบิด Cost Center ดังนี้ Mapping Cost Center (เก่า-ยกเลิก) `ยกเลิก 26/07/2565 ไปใช้ Logic กลางแทน``และ Mapping Channel Code กับ Cost Center, Profit Center [05_33 ข้อมูล Cost Center, Profit Center สามัญ](/pages/viewpage.action?pageId=889586123)``กรณีที่ cost center ให้ระบุตาม Zone สามารถดู mapping ของ Zone กับ cost center ดังนี้ (Update by Piyada.pa at 26/07/2565``Cost Center``Profit Center``Zone``8300H1``8300H1``เหนือ1``8300H2``8300H2``เหนือ2``8300H3``8300H3``เหนือ3``8300H4``8300H4``กลาง1``8300H5``8300H5``กลาง2``8300H6``8300H6``กลาง3``8300H7``8300H7``กรุงเทพ``8300H9``8300H9``อีสาน1``8300I1``8300I1``อีสาน2``8300I2``8300I2``อีสาน3``8300I3``8300I3``ใต้1``8300I4``8300I4``ใต้2``8300I5``8300I5``ใต้3``8300I6``8300I6``เหนือ4``8300I7``8300I7``กลาง4``8300K1``8300K1``เหนือ5``8300K3``8300K3``อีสาน4``8300K4``8300K4``อีสาน5``8300K6``8300K6``ตะวันออก1``8300K7``8300K7``ตะวันออก2` `ข้อมูล สาขา (Auto Post) อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 7``ข้อมูล สนญ. ประกันรายเดี่ยว อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 8``ข้อมูล สนญ. ประกันกลุ่ม อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 9` | 830021 |
| `Cost Center` | `Profit Center` | `Zone` |
| `8300H1` | `8300H1` | `เหนือ1` |
| `8300H2` | `8300H2` | `เหนือ2` |
| `8300H3` | `8300H3` | `เหนือ3` |
| `8300H4` | `8300H4` | `กลาง1` |
| `8300H5` | `8300H5` | `กลาง2` |
| `8300H6` | `8300H6` | `กลาง3` |
| `8300H7` | `8300H7` | `กรุงเทพ` |
| `8300H9` | `8300H9` | `อีสาน1` |
| `8300I1` | `8300I1` | `อีสาน2` |
| `8300I2` | `8300I2` | `อีสาน3` |
| `8300I3` | `8300I3` | `ใต้1` |
| `8300I4` | `8300I4` | `ใต้2` |
| `8300I5` | `8300I5` | `ใต้3` |
| `8300I6` | `8300I6` | `เหนือ4` |
| `8300I7` | `8300I7` | `กลาง4` |
| `8300K1` | `8300K1` | `เหนือ5` |
| `8300K3` | `8300K3` | `อีสาน4` |
| `8300K4` | `8300K4` | `อีสาน5` |
| `8300K6` | `8300K6` | `ตะวันออก1` |
| `8300K7` | `8300K7` | `ตะวันออก2` |
| Branch (ต้นสังกัด) | Branch Source ACC | Accounting | `Branch Source เก็บรหัสสาขาของกรมธรรม์ เช่น 0001``Branch Source ACC เก็บรหัสสาขาที่บัญชีกำหนด เพื่อนำไปแสดงที่ EDW เช่น 0116, 9001``ข้อมูล สาขา (Auto Post) อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 7``ข้อมูล สนญ. ประกันรายเดี่ยว อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 8``ข้อมูล สนญ. ประกันกลุ่ม อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978) ข้อ 9` | 0116 |
| Branch (service) | Business Area | Accounting | Branch Service ที่ EDW จะให้ความหมายว่า "สาขาที่ลงบัญชี" ดังนั้น`1. ลงรหัสสาขาที่ลงบัญชีเสมอ``2. กรณีสาขาที่ลงบัญชีเป็นสนญ.``Branch Service ให้บันทึกค่าเป็น 0001``Business Area ให้บันทึกค่าเป็น 8300``3. ตัวอย่างการลงข้อมูล BA และเงื่อนไขการบิด Cost Center,Profit Center กรณีที่ BA ไม่ตรงกับผังบัญชีเดิม(ในบางระบบ)``อ้างอิง Wiki [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](/pages/viewpage.action?pageId=871071978)` | `กรณีสนญ``8300``กรณีสาขา``0116` |
| Business line | Business line | Accounting | 1.ลง BL ตามผลิตภัณฑ์ดังนี้ผลิตภัณฑ์Business Line`อุตสาหกรรม (ปช, ขพ)``01``สามัญ``02``กลุ่ม, สามัญ MRTA``03`Update on 07.02.2566 By Rutthapol.pi เพิ่มเงื่อนไขการลง BL03 กรณีสามัญ MRTA MLTA โดยพิจารณาดังนี้เป็นกรมธรรม์สามัญมีช่องทาง (Channel) <> 'Agent'ขึ้นต้นหลักแรกเป็น 'C'ให้ทำการใส่ BL เป็น 03 หากเข้าเงื่อนไขไม่ครบทั้ง 3 เรื่องให้ใส่ 02 เหมือนเดิม`PA สามัญ``04``PA กลุ่ม``05``Unit Linked``07``PAR Product``08`>> Update on 02.10.2564 By Rutthapol.pi2.เงื่อนไขการลง BL`กรณีที่ COA ผังบัญชี Require BL ให้ทำการลง BL ตาม Logic ข้อ 1``กรณีที่ COA ผังบัญชีไม่ Require BL ให้พิจารณา 2 เรื่องดังนี้``กรณีเป็นการลงบัญชีที่ไม่ได้มาจากระบบ Auto Post ไม่ต้องทำการลงข้อมูล BL``กรณีเป็นการลงบัญชีที่มาจากระบบ Auto Post ให้ใช้ BL ที่ระบบ Auto Post ส่งมา``กรณีไม่สามารถระบุประเภทผลิตภัณฑ์ได้ ให้ใส่ '00' Updated on 11/01/2565 By piyada.pa` | 01 |
| ผลิตภัณฑ์ | Business Line |
| `อุตสาหกรรม (ปช, ขพ)` | `01` |
| `สามัญ` | `02` |
| `กลุ่ม, สามัญ MRTA` | `03`Update on 07.02.2566 By Rutthapol.pi เพิ่มเงื่อนไขการลง BL03 กรณีสามัญ MRTA MLTA โดยพิจารณาดังนี้เป็นกรมธรรม์สามัญมีช่องทาง (Channel) <> 'Agent'ขึ้นต้นหลักแรกเป็น 'C'ให้ทำการใส่ BL เป็น 03 หากเข้าเงื่อนไขไม่ครบทั้ง 3 เรื่องให้ใส่ 02 เหมือนเดิม |
| `PA สามัญ` | `04` |
| `PA กลุ่ม` | `05` |
| `Unit Linked` | `07` |
| `PAR Product` | `08` |
| Document number | Document Header text | Accounting | 1.บันทึกเลขที่อ้างอิงที่ลงบัญชีโดย`ใช้แสดงเลขที่นี้ที่หน้า Dashboard``Monthly และ Payment``Daily``Monthly``Payment``และ Auto Post. Update By Nutnarin 06/01/2564`นำไปบันทึกที่ File SAP ส่วน Document Header Text2.รายละเอียดเงื่อนไขการลง Daily อ้างอิง [05_10 สรุประบบและรายละเอียดกลุ่มธุรกรรมที่หน้า Dashboard Daily](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693758)No.กลุ่มธุรกรรมรหัสเลข Reference NumberHeader Text`1.``รับเบี้ย``EB``วันที่ Transaction + เลข running 3 หลัก + "EB" เช่น 20210325001EB``2.``รับฝากเบี้ย``EC``วันที่ Transaction + เลข running 3 หลัก + "EC" เช่น 20210325001EC``3.``รายได้ตัวแทน``ED``วันที่ Transaction + เลข running 3 หลัก + "ED" เช่น 20210325001ED``4.``ภาษี``EE``วันที่ Transaction + เลข running 3 หลัก + "EE" เช่น 20210325001EE``5.``เงินกู้``EF``วันที่ Transaction + เลข running 3 หลัก + "EF" เช่น 20210325001EF``6.``ผลประโยชน์และจ่ายเงื่อนไขตามกรมธรรม์``EG``วันที่ Transaction + เลข running 3 หลัก + "EG" เช่น 20210325001EG``7.``สินไหม``EH``วันที่ Transaction + เลข running 3 หลัก + "EH" เช่น 20210325001EH``8.``ประกันภัยต่อ``EI``วันที่ Transaction + เลข running 3 หลัก + "EI" เช่น 20210325001EI``9.``Unit Linked``EJ``วันที่ Transaction + เลข running 3 หลัก + "EJ" เช่น 20210325001EJ`>> Update By Nutnarin 06/01/2564`3. รายละเอียดเงื่อนไขการลง`MonthlyPayment ดูส่วน Header Text อ้างอิง [02_00_04 Process การสร้างข้อมูล File SAP สำหรับข้อมูล Payment/Monthly](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=878772596)`4. รายละเอียดเงื่อนไขการลงระบบ``Auto Post``ดูส่วน Header Text อ้างอิง [02_01_01Process การสร้างข้อมูล File SAP สำหรับข้อมูลระบบ Auto Post](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=916193299)` | 20211002001EG |
| No. | กลุ่มธุรกรรม | รหัสเลข Reference Number | Header Text |
| `1.` | `รับเบี้ย` | `EB` | `วันที่ Transaction + เลข running 3 หลัก + "EB" เช่น 20210325001EB` |
| `2.` | `รับฝากเบี้ย` | `EC` | `วันที่ Transaction + เลข running 3 หลัก + "EC" เช่น 20210325001EC` |
| `3.` | `รายได้ตัวแทน` | `ED` | `วันที่ Transaction + เลข running 3 หลัก + "ED" เช่น 20210325001ED` |
| `4.` | `ภาษี` | `EE` | `วันที่ Transaction + เลข running 3 หลัก + "EE" เช่น 20210325001EE` |
| `5.` | `เงินกู้` | `EF` | `วันที่ Transaction + เลข running 3 หลัก + "EF" เช่น 20210325001EF` |
| `6.` | `ผลประโยชน์และจ่ายเงื่อนไขตามกรมธรรม์` | `EG` | `วันที่ Transaction + เลข running 3 หลัก + "EG" เช่น 20210325001EG` |
| `7.` | `สินไหม` | `EH` | `วันที่ Transaction + เลข running 3 หลัก + "EH" เช่น 20210325001EH` |
| `8.` | `ประกันภัยต่อ` | `EI` | `วันที่ Transaction + เลข running 3 หลัก + "EI" เช่น 20210325001EI` |
| `9.` | `Unit Linked` | `EJ` | `วันที่ Transaction + เลข running 3 หลัก + "EJ" เช่น 20210325001EJ` |
| Type รับ/จ่าย | Receive / Payment Type | Accounting | การกำหนด Collection Type (Field: collection_type) Auto Post `**กรณีประเภทกลุ่มข้อมูล Model Premium, Commission OV และ Investment**``1.พิจารณาว่าเป็นเคส OFFSET หรือไม่ โดยอ่านข้อมูลจาก [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction) ด้วยเลขที่ ap_ta_id เพื่อตรวจสอบว่าเป็นเคส``กรณีพบข้อมูลในตาราง [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction) แสดงว่ารายการข้อมูล ap_ta_id นั้นเป็น OFFSET ให้พิจารณาต่อในข้อ 2``กรณีไม่พบข้อมูลในตาราง แสดงว่ารายการข้อมูล ap_ta_id นั้น ไม่เป็น OFFSET กำหนดให้บันทึก collection_type เป็น 'CASH'``2.พิจารณาว่าเป็นเคส OFFSET จากธุรกรรมใด โดยอ่านข้อมูลจากตาราง [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction) ฟิล์ด source_group ด้วยเลขที่ ap_ta_id``จะพบข้อมูลที่มีการ OFFSET ทำให้พบรายการมากกว่า 1 รายการ``ให้ตรวจสอบเพื่อหยิบข้อมูลใน source_group มาบันทึกเป็น collection_type โดยหยิบข้อมูลตามลำดับความสำคัญดังต่อไปนี้`PrioritySource`P1``CLAIM``P2``BENEFIT``P3``LOAN``P4``PREMIUM``**ตัวอย่าง**``พบข้อมูลใน source_group จำนวน 3 รายการ BENEFIT, LOAN, PREMIUM ประกอบด้วย P2, P3, P4 ตามลำดับ``ให้ทำการหยิบข้อมูลตามลำดับ Priority ในที่นี้คือ BENEFIT มีลำดับความสำคัญเป็น P2 สูงสุด จึงกำหนดให้บันทึก collection_type = **BENEFIT**``>> ปล. แต่หากในที่นี้พบข้อมูล CLAIM ซึ่งมีลำดับความสำคัญเป็น P1 ก็จะได้ค่าเป็น CLAIM``3. พิจารณาจากรหัสบัญชี (gl code) เพื่อกำหนดค่า Collection Type ดังนี้``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 1 กำหนดให้แสดง collection_type เป็น NULL``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 2 กำหนดให้แสดง collection_type เป็น NULL``นอกนั้นกำหนดให้การบันทึก collection_type เป็นค่าเดิมที่บันทึกมาจากข้อ 1, 2`****`**กรณีประเภทกลุ่มข้อมูล Model Claim จะพิจารณาเพิ่มที่หน้าจอแสดงผล**``4. พิจารณาจากรหัสบัญชี (gl code) เพื่อกำหนดค่า Collection Type ดังนี้``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 2 กำหนดให้แสดง collection_type เป็น 'CASH'``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 5 กำหนดให้แสดง collection_type เป็น 'APPROVE'`**กรณีประเภทกลุ่มข้อมูล Model Benefit จะพิจารณาเพิ่มที่หน้าจอแสดงผล** `5. พิจารณาจากรหัสบัญชี (gl code) เพื่อกำหนดค่า Collection Type ดังนี้``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 1 กำหนดให้แสดง collection_type เป็น NULL``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 2 กำหนดให้แสดง collection_type เป็น NULL``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 5นอกนั้นกำหนดให้การบันทึก collection_type เป็น **CASH**``ถ้า [tx_adw_benefit_detail](/display/RDSADW/tx_adw_benefit_detail).collection_type เป็น 'ADVANCE' กำหนดให้แสดง collection_type เป็น 'ADVANCE'(เพิ่มเงื่อนไข By piyada.pa 21/12/2021)``กำหนดให้การบันทึก collection_type เป็น **CASH**``**กรณีประเภทกลุ่มข้อมูล Model Commission จะพิจารณาเพิ่มที่หน้าจอแสดงผล** 6. พิจารณาจากรหัสบัญชี (gl code) เพื่อกำหนดค่า Collection Type ดังนี้``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 5 กำหนดให้แสดง collection_type เป็น **CASH******``20.10.2563 เพิ่มเติมเงื่อนไขสำหรับ CLAIM และ INVESTMENT by tossapon.sa``กรณีประเภทกลุ่มข้อมูล Model Investment จะพิจารณาเพิ่มที่หน้าจอแสดงผล``ปรับไปทำ 9.1, 9.2 เพื่อกำหนดค่า Collection Type``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 1 กำหนดให้แสดงค่า collection_type เป็น NULL``กรณีรหัสบัญชีที่ขึ้นต้นด้วย 4 กำหนดให้แสดงค่าเดิมที่อ่านได้จากข้อ 9.1, 9.2` Cenpay ใช้ตอนบันทึกข้อมูล Cenpay เท่านั้น ส่วนตอนแสดงหน้ารายงาน Q ให้ใช้ Logic กลางด้านบน`Event Code``Collection Type``CP_ACC_01``Fix "CASH"``CP_ACC_02``Fix "BENEFIT"``CP_M_01 และ CP_M_02``Fix "ADVANCE"` Unit linked type รับจ่ายของ 51090050 ค่าธรรมเนียมธนาคาร แสดงเป็น Credit Cardtype รับจ่ายของผัง ClaimEvent CodeGL CodeCollection TypeAC-020150542105ProvisionAC-020121020007ProvisionAC-020621020007ProvisionAC-020650542105ProvisionAC-001250542105ApproveAC-001221020005AccrualAC-022250542125AccrualAC-022221020025AccrualAC-022250542120AccrualAC-022221020020AccrualAC-001821020005CashAC-001823570001CashAC-001823570002CashAC-001843040027CashAC-001843040029CashAC-001815554000CashAC-001815554001CashAC-001815554002CashAC-001823560061-AC-022321020025CashAC-022321020020CashAC-022323570001CashAC-022343040027CashAC-022343040029CashAC-022323570002CashAC-022343040030CashAC-022343040033CashAC-022343040026CashAC-022343040030CashAC-022350590015CashAC-022323560061-AC-040923560061-AC-040912022002-AC-040912021195- จ่ายผลประโยชน์ - ไม่ใช้งานแล้ว เปลี่ยนไปบันทึกค่าราย GL แทนราย Model`IT Model`GL Code`Type``Investment`ทุก GL ของ Model Investment`[BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)`Premiumทุก GL ของ Model Premium[BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)`Policy Benefit`50549005,50543006,50547005`[CASH](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)``Policy Benefit`21010005,21010010,21010020N/ABank-HOทุก GL ของ Model Bank-HON/AOther liabilityทุก GL ของ Model Other liabilityN/A เงินกู้ดูจาก Wiki LANDING : Mapping Table Landing ในส่วน Mapping ผังบัญชี กับ Table EDW Core ของแต่ละผังจ่ายผลประโยชน์ ดูจาก Wiki LANDING : Mapping Table Landing ในส่วน Mapping ผังบัญชี กับ Table EDW Core ของแต่ละผังManual AC/FN ดูจาก WIKI : [LANDING : Mapping Table Landing from Manual Upload GL (Free Template_Specificfield-keyin)](/pages/viewpage.action?pageId=1001390136) ในส่วน Mapping ผังบัญชี กับ Table EDW Core ของแต่ละผัง | CASH |
| Priority | Source |
| `P1` | `CLAIM` |
| `P2` | `BENEFIT` |
| `P3` | `LOAN` |
| `P4` | `PREMIUM` |
| `Event Code` | `Collection Type` |
| `CP_ACC_01` | `Fix "CASH"` |
| `CP_ACC_02` | `Fix "BENEFIT"` |
| `CP_M_01 และ CP_M_02` | `Fix "ADVANCE"` |
| Event Code | GL Code | Collection Type |
| AC-0201 | 50542105 | Provision |
| AC-0201 | 21020007 | Provision |
| AC-0206 | 21020007 | Provision |
| AC-0206 | 50542105 | Provision |
| AC-0012 | 50542105 | Approve |
| AC-0012 | 21020005 | Accrual |
| AC-0222 | 50542125 | Accrual |
| AC-0222 | 21020025 | Accrual |
| AC-0222 | 50542120 | Accrual |
| AC-0222 | 21020020 | Accrual |
| AC-0018 | 21020005 | Cash |
| AC-0018 | 23570001 | Cash |
| AC-0018 | 23570002 | Cash |
| AC-0018 | 43040027 | Cash |
| AC-0018 | 43040029 | Cash |
| AC-0018 | 15554000 | Cash |
| AC-0018 | 15554001 | Cash |
| AC-0018 | 15554002 | Cash |
| AC-0018 | 23560061 | - |
| AC-0223 | 21020025 | Cash |
| AC-0223 | 21020020 | Cash |
| AC-0223 | 23570001 | Cash |
| AC-0223 | 43040027 | Cash |
| AC-0223 | 43040029 | Cash |
| AC-0223 | 23570002 | Cash |
| AC-0223 | 43040030 | Cash |
| AC-0223 | 43040033 | Cash |
| AC-0223 | 43040026 | Cash |
| AC-0223 | 43040030 | Cash |
| AC-0223 | 50590015 | Cash |
| AC-0223 | 23560061 | - |
| AC-0409 | 23560061 | - |
| AC-0409 | 12022002 | - |
| AC-0409 | 12021195 | - |
| `IT Model` | GL Code | `Type` |
| `Investment` | ทุก GL ของ Model Investment | `[BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)` |
| Premium | ทุก GL ของ Model Premium | [BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29) |
| `Policy Benefit` | 50549005,50543006,50547005 | `[CASH](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)` |
| `Policy Benefit` | 21010005,21010010,21010020 | N/A |
| Bank-HO | ทุก GL ของ Model Bank-HO | N/A |
| Other liability | ทุก GL ของ Model Other liability | N/A |
| Claim register date | - | Accounting | วันที่รับเรื่อง | 2021-10-02 |
| Claim Register number/ Claim number | - | Accounting | เลขที่รับเรื่องสินไหม/ เลขที่ Claim | 6400022 |
| Claim type | - | Accounting | ประเภทการเคลม (เฉพาะ GL สุขภาพ) ประกันเดี่ยว อ้างอิงจาก [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 2.11 รายการประเภทสินไหม แยกตาม rider ค้นหาค่า [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).Config2, Config3, Config4, Config5 และใช้ค่าตาม config6AS400ORD Config2 = OLIS.OLPCLAIM.CLTYPE Config3 = OLIS.OLPCLMCD.CDRID# Config4 = OLIS.OLPCLMCD.CDRIDFIND Config2 = CLMLIB.CLMRGCR0.CRCODE Config3 = OLIS.OLPCLMCD.CDRID# Config4 = OLIS.OLPCLMCD.CDRIDFGOV Config2 = GOVLIB.GCMRGCR0.CRCODE Config3 = OLIS.OLPCLMCD.CDRID# Config4 = OLIS.OLPCLMCD.CDRIDFPA มรณกรรม Config2 = Substring(PACLMPF0.CLMTYP,1,2) Config3 = OLIS.OLPCLMCD.CDRID# Config4 = OLIS.OLPCLMCD.CDRIDFPA สุขภาพ Config2 = Substring(PACLMPF0.CLMTYP,1,2) Config3 = OLIS.OLPCLMCD.CDRID# Config4 = OLIS.OLPCLMCD.CDRIDFSQLConfig2 = NULL Config3 = NULL Config4 = RDCode อ้างอิงรายละเอียดตาม [Link](https://docs.google.com/spreadsheets/d/128D2i4uRDdwwO20qgZAEMkkQBmwB1zn71EeTmWFUhU8/edit#gid=889209459&range=A28:E28)Claim SystemConfig2 = 'H' Config4 = rider_code Config5 = 'ORDINARY' Config6 มีค่าเสมอ และใช้ค่าจากรายการแรกที่เจอ ประกันกลุ่ม SQL ใช้ bt_GrpRider.RD_Abbreviation |   |
| Payment Channel | - | Accounting | เป็นค่า Config ที่ [05_03 ADW Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 2.8 ([cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).type = "PAYMENT_CHANNEL") ค่าตาม **config_detail**ประเภทการรับ/จ่ายเงิน Cenpay ค้นค่า [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).config1 = [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction).pay_type (Type of Payment ตามการจ่ายผลประโยชน์หลัก) Income `Fix "AGENT_INCOME"` Unit linked `กรณีการรับเงินผ่านช่องทาง สาขา Fix "PAYIN"``กรณีเป็นการรับเงินผ่านช่องทางใบเสร็จส่วนกลางแสดงตาม ตาราง config``ดูจาก Wiki [LANDING : Mapping Table Landing from Unit Linked (UL)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=848331002) : Mapping Table Landing ในส่วน Mapping Field ตาม Model (update by suwisaso 09/12/2565)` จ่ายผลประโยชน์ฯ `ค้นค่า [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).config1 = [tx_manual_oper_ben_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_oper_ben_transaction).type_of_payment` `(Type of Payment ตามการจ่ายผลประโยชน์หลัก)` Easy Loan Fix "LOAN" e-Collection ค้นค่า [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).config1เป็นค่า Config ที่ [05_03 ADW Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 2.8 ([cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).type = "PAYMENT_CHANNEL") ค่าตาม **config_detail** |   |
| `เลขที่รับฝาก/ เลขที่ใบนำส่ง` | `-` | `Accounting` | `เลขที่รับฝาก/เลขที่ใบนำส่ง``กรณีทำบัญชีรับฝากให้ใส่เลขที่รับฝาก``กรณีทำบัญชีรับเบี้ยให้ใส่เลขที่ใบนำส่ง``กรณีอื่นๆใส่ค่าว่าง` | `เลขที่รับฝาก` `64011600018716``เลขที่ใบนำส่ง` `10014948` |
| `เลขบัญชีธนาคาร` | `-` | `Accounting` | `ใส่เลขที่บัญชีธนาคาร` |   |
| `Agent code` | `-` | `Accounting` | `ใส่รหัสตัวแทน 7 หลัก`» กรณี เป็นประกันภัยต่อ (Reinsurer) การหาค่าให้ดำเนินการดังนี้อ่านค่าจากข้อมูลต้นทางที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt).reinsurerนำค่ามา mapping กับ [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).config1 ตาม [05_03 ADW Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 14. รายการประเภท Reinsurer (Vender code) และ [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).type = "RI_VENDER_CODE"หลังจากนั้นให้นำค่า [cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).config2 มาบันทึก | `3407877` |
| Loan TypeUpdate by nattapong.che 05/07/66 | - | Accounting | ประเภทเงินกู้บันทึกค่า Loan Type ตาม [cf_adwpc_query_model](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_query_model).loan_typeเป็นค่า Config ที่ [05_03 ADW Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 4.12 ([cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).type = "LOAN_TYPE") ค่าตาม **Config1** | NEWLOAN |
| Type of Receive_PaymentUpdate by : suntisook.wo 30/01/2024 |   | Accounting | ประเภทการจ่าย บันทึกค่า ตาม [cf_adwpc_query_model](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_query_model).type_of_paymentเป็นค่า Config ที่ [05_03 ADW Master Catalog](/display/RDSADW/05_03+ADW+Master+Catalog) ข้อ 4.12 ([cf_adwpc_catalog](/display/RDSADW/cf_adwpc_catalog).type = "TYPE_OF_RECEIVE_PAYMENT_LIST") ค่าตาม **Config1** |   |
| BundleUpdate by : suntisook.wo 30/01/2024Update by : suntisook.wo 21/05/2024Update by : suntisook.wo 11/11/2024 | - | Accounting | **Step 1. เงื่อนไขการบันทึกข้อมูลที่ tx_adw_transaction_policy ฟิลด์ bundle**กรณีที่ฟิลด์ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).plan_code เป็นค่าว่าง หรือ Null ให้บันทึกเป็นค่า Nullกรณีที่ฟิลด์ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).plan_code ไม่เป็นค่าว่าง หรือ Null ให้ดำเนินการดังนี้กรณีที่ประเภทกรมธรรม์เป็น สามัญ นำ plan_code ไปหาข้อมูล Bundle ที่ตาราง [public.ili_product_ord](/display/IEA/public.ili_product_ord) ฟิลด์ bundle_rider ตรวจสอบ prd_line กรณีที่ค่าเป็น ('MRTA','MLTA') ให้นำแบบประกันหลัก (prd_code) มาบันทึก --Update by : suntisook.wo 21/05/2024กรณีที่ค่าในฟิลด์ bundle_rider ไม่เป็นค่า NULL ให้นำค่า bundle_rider มาบันทึกข้อมูล จาก MSA : (/thaisamut/rs/dwconsol/v1/productord/{from}/{size}) (บันทึกข้อมูลให้ครบ 3 หลัก ตัวอย่าง 052)กรณีที่ค่าในฟิลด์ bundle_rider เป็นค่า NULL ให้ระบบบันทึกค่าเป็น 'Optional'กรณีที่ประเภทกรมธรรม์เป็น อุตสาหกรรม --Update by : suntisook.wo 11/11/2024ห้ระบบบันทึกค่าเป็น แบบประหลัก (บันทึกข้อมูลแบบไม่มี 0 นำหน้า ตัวอย่าง 62)กรณีที่ไม่ใช่ **สามัญ** และ **อุตสาหกรรม** --Update by : suntisook.wo 11/11/2024 ให้ระบบบันทึกค่าเป็น 'Optional' | มี Bundle E61ไม่มี Bundle Optional |
| Update by : suntisook.wo 11/11/2024****Step 2.**เงื่อนไขการบันทึกข้อมูลที่ [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail) ฟิลด์ bundle**ให้ทำการตรวจสอบข้อมูลในฟิลด์ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle โดยมีเงื่อนไขดังนี้กรณีที่แบบประกันเป็นประเภท **สามัญ**มีเงื่อนไขดังนี้กรณีที่ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle = 'Optional' ให้บันทึกข้อมูลเป็น 'Optional'กรณีที่ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle <> 'Optional' และ [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail).basic_rider_indicator = 'BASIC' ให้บันทึกเป็น แบบประกันหลัก ([tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle)กรณีที่ [tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle <> 'Optional' และ [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail).basic_rider_indicator = 'RIDER' ให้นำรหัส rider มาตรวจสอบที่ตาราง [OLIS_OLPPLN21](/display/RDSADW/OLIS_OLPPLN21) โดยใช้ [DWCONSOL_EDW_02_ตรวจสอบข้อมูลแบบประกันที่มี Bundle ของประเภท ORD](/pages/viewpage.action?pageId=1204453871)กรณีที่เจอข้อมูล ให้บันทึกเป็น แบบประกันหลัก ([tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle)กรณีที่ไม่เจอข้อมูล ให้บันทึกเป็น 'Optional'กรณีที่แบบประกันเป็นประเภท **อุตสาหกรรม**กรณีที่ [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail).basic_rider_indicator = 'BASIC' ให้ระบบบันทึกค่าเป็น แบบประหลัก ([tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle)กรณีที่ [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail).basic_rider_indicator = 'RIDER' ให้นำเลขที่กรมธรรม์ และรหัส rider (โดยให้แปลงค่าเป็นตัวเลข เพื่อเอา 0 ข้างหน้าออก) จาก [WS_EDW_07_ข้อมูลหลักกรมธรรม์](/pages/viewpage.action?pageId=853835869) ไปตรวจสอบข้อมูลที่ตาราง [public.ili_rider_master](/display/IEA/public.ili_rider_master) โดยใช้ [DWCONSOL_EDW5_01_ตรวจสอบข้อมูลแบบประกันที่มี Bundle ของประเภท IND](/pages/viewpage.action?pageId=1204453873)กรณีที่เจอข้อมูล ให้ระบบบันทึกค่าเป็น 'Optional'กรณีที่เจอไม่ข้อมูล ให้ระบบบันทึกค่าเป็น แบบประหลัก ([tx_adw_transaction_policy](/display/RDSADW/tx_adw_transaction_policy).bundle)กรณีที่แบบประกันที่ไม่ใช่ **สามัญ** และ **อุตสาหกรรม** ให้ระบบบันทึกค่าเป็น 'Optional' |   |
| ****Step 3.**เงื่อนไขการบันทึกข้อมูลที่ tx_adw_double_entry_detail ฟิลด์ bundle**ให้นำ GL Code ไปตรวจสอบที่ตาราง cf_adwpc_query_model ฟิลด์ bundle_flag กรณีที่ bundle_flag เป็น TRUE ให้นำค่า [tx_adw_transaction_detail](/display/RDSADW/tx_adw_transaction_detail).bundle มาบันทึก --Update by : suntisook.wo 11/11/2024กรณีที่ bundle_flag ไม่เป็น TRUE ให้บันทึกเป็นค่า Null และจบการทำงาน |   |
| `UniqueID` | `-` | `GMM, VFA, PAA` | `Running No. ที่ระบบ EDW Generate ให้ในที่นี้ใช้ ID จาก Double_Entry_detail` | `1787` |
| `Portfolio ID` `(ICG)` | `-` | `GMM, VFA, PAA` | `ยังไม่มี Business Rule ในตอนนี้ปัจจุบันใส่ค่าว่าง` |   |
| `Sub-Group ID` | `-` | `GMM, VFA, PAA` | `ยังไม่มี Business Rule ในตอนนี้ปัจจุบันใส่ค่าว่าง` |   |
| `Profitability``ยกเลิก` | `-` | `GMM, VFA, PAA` |   |   |
| `Premium Due Date` | `-` | `GMM,VFA` | `วันที่รับชำระ/วันที่ต้องชำระเบี้ย` `Due ของใบเสร็จ งวดนั้นๆ` | `2021-10-02` |
| `Effective Date (Issue Date)` | `-` | `GMM,VFA` | `วันที่เริ่มสัญญา` | `2021-10-02` |
| `Current (Actual)` `Sum Assured` | `-` | `GMM,VFA` | `บันทึกค่า ทุนประกัน ณ วันที่ทำธุรกรรม``Format ตัวเลขและทศนิยม 2 หลัก` | `1,000,000.00` |
| `Mode of Payment` | `-` | `GMM,VFA` | `ประเภทกรมธรรม์``Mode of Payment ที่จะเป็นไปได้``IND``1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12` เปลี่ยนเป็น 1 เสมอ`ORD``1, 3, 6, 12, 99 (ชำระครั้งเดียว)`กรณี RIDER แสดงตาม POLICY MODE กรมธรรม์หลักUpdate By jureeporn.ka 20/10/2022`PA``12,99 (ชำระครั้งเดียว)``GROUP``12` 1, 3, 6, 12, 99 (ชำระครั้งเดียว) Update By jureeporn.ka 05/07/2022`UL``1,3,6,12, 111 (ชำระครั้งเดียว), กรณีเป็น top up แสดงตามกรมธรรม์หลัก` | `12` |
| `ประเภทกรมธรรม์` | `Mode of Payment ที่จะเป็นไปได้` |
| `IND` | `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12` เปลี่ยนเป็น 1 เสมอ |
| `ORD` | `1, 3, 6, 12, 99 (ชำระครั้งเดียว)`กรณี RIDER แสดงตาม POLICY MODE กรมธรรม์หลักUpdate By jureeporn.ka 20/10/2022 |
| `PA` | `12,99 (ชำระครั้งเดียว)` |
| `GROUP` | `12` 1, 3, 6, 12, 99 (ชำระครั้งเดียว) Update By jureeporn.ka 05/07/2022 |
| `UL` | `1,3,6,12, 111 (ชำระครั้งเดียว), กรณีเป็น top up แสดงตามกรมธรรม์หลัก` |
| `Annual Premium` | `-` | `GMM,VFA` | `เบี้ยประกันรายปีของกรมธรรม์ (Field: annual_premium)` `1. ประเภทกรมธรรม์อุตสาหกรรม (INDUSTY)``หาค่าเบี้ยชำระตามงวด จากเบี้ยประกัน - ปีแรก บวกกับ เบี้ยประกัน - ปีต่อ``หาค่าเบี้ยชำระรายเดือน จากยอดเบี้ยชำระตามงวด หารด้วย โหมด/งวดชำระ``นำยอดเบี้ยชำระรายเดือน คูณด้วย 12 นำผลลัพธ์กำหนดค่าเป็น annual_premium``2. ประเภทกรมธรรม์สามัญ (ORDINARY)``หางวดชำระ ด้วยเงื่อนไขต่อไปนี้``กรณีโหมด = 1 กำหนดให้ A = 12``กรณีโหมด = 6 กำหนดให้ B = 2``กรณีโหมด = 3 กำหนดให้ C = 4``กรณีโหมด = 12 กำหนดให้ D = 1``กรณีชำระครั้งเดียว กำหนดให้ D = 1``ให้นำงวดชำระจากข้างต้น (A,B,C,D) มาคำนวณหา เบี้ยประกันรายปี``หาค่าเบี้ยชำระตามงวด จากนำเบี้ยประกัน บวกกับ เบี้ยประกันเพิ่มพิเศษ``นำค่าเบี้ยชำระตามงวด คูณด้วยงวดชำระจากข้างต้น (A,B,C,D) นำผลลัพธ์กำหนดค่าเป็น annual_premium` `**(**rider_prem **+**rider_prem_extra **)** ***** **งวดชำระที่ได้จากข้างบน**``3. ประเภทกรมธรรม์ PA``นำยอดเงินเบี้ยประกัน บันทึกกำหนดค่าเป็น annual_premium ได้โดนตรง``4. ประเภทกรมธรรม์ UL``นำยอดเงินเบี้ยประกัน บันทึกกำหนดค่าเป็น annual_premium ได้โดยตรง``กรณี Single Premium แสดงข้อมูลยอด Single Premium (ชำระครั้งเดียว)``กรณี Regular Premium แสดงข้อมูลยอด Regular Premium (เบี้ย 600 mode 6 = 1200 เป็นการคิดทั้งปี)``กรณี Top up แสดงตามกรมธรรม์หลัก``**5 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564**``ถ้า Mode of Payment = 0 ให้ modal_premium * 12``ถ้า Mode of Payment = 1 ให้ modal_premium * 4``ถ้า Mode of Payment = 2 ให้ modal_premium * 2``ถ้า Mode of Payment = 3 ให้ modal_premium * 1` | `6,000.00` |
| `Modal Premium` | `-` | `GMM,VFA` | `เบี้ยชำระตามโหมดของกรมธรรม์ (Field: modal_premium)` `1.ประเภทกรมธรรม์อุตสาหกรรม (INDUSTY)``หาค่าเบี้ยชำระตามงวด จากเบี้ยประกันปีแรก บวกกับ เบี้ยประกันปีต่อ กำหนดค่าเป็น modal_premium``2. ประเภทกรมธรรม์สามัญ (ORDINARY)``หาค่าเบี้ยชำระตามงวด จากนำเบี้ยประกัน บวกกับ เบี้ยประกันเพิ่มพิเศษ กำหนดค่าเป็น modal_premium``3. ประเภทกรมธรรม์ PA``นำยอดเงินเบี้ยประกัน บันทึกกำหนดค่าเป็น modal_premium ได้โดยตรง``4. ประเภทกรมธรรม์ UL``นำยอดเงินเบี้ยประกัน บันทึกกำหนดค่าเป็น modal_premium ได้โดนตรง``กรณี Single Premium แสดงข้อมูลยอด Single Premium (ชำระครั้งเดียว)``กรณี Regular Premium แสดงข้อมูลยอด Regular Premium (เบี้ยรายงวด)``กรณี top up แสดงตามกรมธรรม์หลัก``**5 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564**``นำยอดเงินเบี้ยประกัน บันทึกกำหนดค่าเป็น modal_premium ได้โดยตรง` | 500.00 |
| `ยกเลิก` `AdvancePremium` | `-` | `GMM` |   |   |
| `ยกเลิก` `Comission Rate` | `-` | `GMM` | `อัตราค่า Comm` |   |
| `ยกเลิก` `Policy Status` | `-` | `GMM` | `สถานะกรมธรรม์ ณ เวลาที่ดึงข้อมูล` |   |
| `Basic / Rider indicator` | `-` | `GMM` | `อ้างอิงการทำงานที่หัวข้อ Base/Rider` | `BASIC` |
| `Premium Type` | `-` | `GMM,VFA` | `ข้อมูลประเภทการชำระเบี้ย``Type``Condition``NORMAL``เบี้ยรับปกติ``ADVANCE``เบี้ยรับล่วงหน้า``ACCRUED_PREMIUM``เบี้ยค้างรับ``CLAW_BACK``เรียกคืนรายได้` ข้อมูลประเภทการชำระเบี้ย UL `Type``Condition``REGULAR``เบี้ยรับปกติ``SINGLE``เบี้ยชำระครั้งเดียว``TOPUP``เบี้ยเพิ่มพิเศษ``RETURN``กรณีคืนเบี้ย Fee look` Cenpay `Fix "NORMAL"` จ่ายผลประโยชน์ฯ `Fix "NORMAL"` APL `FIX DATA = '**NORMAL**'``*เนื่องจาก APL คือการกู้มูลค่ากรมธรรม์มาจ่ายเบี้ย จึงถือว่าเป็นการชำระเบี้ยปกติ*` ประกันกลุ่ม `Type``Condition`NORMALรับชำระเบี้ยตามปกติของลูกค้าMOVEMENTรับชำระเบี้ยที่เป็นส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปีEXPERIENCE REFUNDเบี้ยที่เป็นส่วนลดให้ลูกค้ากรณีที่ปีก่อนหน้าลูกค้า Claim น้อยRETURNคืนเบี้ย | `NORMAL` |
| `Type` | `Condition` |
| `NORMAL` | `เบี้ยรับปกติ` |
| `ADVANCE` | `เบี้ยรับล่วงหน้า` |
| `ACCRUED_PREMIUM` | `เบี้ยค้างรับ` |
| `CLAW_BACK` | `เรียกคืนรายได้` |
| `Type` | `Condition` |
| `REGULAR` | `เบี้ยรับปกติ` |
| `SINGLE` | `เบี้ยชำระครั้งเดียว` |
| `TOPUP` | `เบี้ยเพิ่มพิเศษ` |
| `RETURN` | `กรณีคืนเบี้ย Fee look` |
| `Type` | `Condition` |
| NORMAL | รับชำระเบี้ยตามปกติของลูกค้า |
| MOVEMENT | รับชำระเบี้ยที่เป็นส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี |
| EXPERIENCE REFUND | เบี้ยที่เป็นส่วนลดให้ลูกค้ากรณีที่ปีก่อนหน้าลูกค้า Claim น้อย |
| RETURN | คืนเบี้ย |
| `ยกเลิก` `Commision Type` | `-` | `GMM` | `ข้อมูลประเภทการจ่ายค่าบำเหน็จ` `เช่น NORMAL, ADVANCE, RETURN` |   |
| `InitialCommission` | `-` | `GMM` | `ค่าคอมปีแรก` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `RenewalCommission` | `-` | `GMM` | `ค่าคอมปีต่อ` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `InitialOverride` | `-` | `GMM` | `OV ปีแรก` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `RenewalOverride` | `-` | `GMM` | `OV ปีต่อ` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `LastStatus` | `-` | `GMM` |   |   |
| `Type of benefit` | `-` | `GMM` |   |   |
| `Amount of benefit paid` | `-` | `GMM` |   |   |
| `Paid Date / Claim Paid Date` | `-` | `GMM` |   |   |
| `Claim Event Date` | `-` | `GMM` | `วันที่เกิดเหตุ` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `Claim Reported Date` | `-` | `GMM` | `วันที่ลูกค้ามายื่นเอกสารทำเรื่องสินไหม` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `Claim status` | `-` | `GMM` | `สถานะของการพิจารณาการยื่นขอสินไหม` `โดย 1 = อนุมัติ และ P = อยู่ระหว่างพิจารณา` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `Approve Date` | `-` | `GMM` | `วันที่ของการอนุมัติการยื่นเรื่องสินไหม` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `Claim Paid Date` | `-` | `GMM` | `วันที่จ่ายสินไหม` `[02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](/pages/viewpage.action?pageId=756515354)` |   |
| `PolicyLoanPrincipalAmount` | `-` | `GMM` | `ยอดรวมเงินกู้ PL``ถ้าไม่มีค่าให้ใส่ "0"` | `23,000.00` |
| `PolicyLoanInterestAmount` | `-` | `GMM` | `ยอดรวมดอกเบี้ยเงินกู้ PL``ถ้าไม่มีค่าให้ใส่ "0"` | `2,548.34` |
| `APLPrincipalAmount` | `-` | `GMM` | `ยอดรวมเงินกู้APL``ถ้าไม่มีค่าให้ใส่ "0"` | `12,000.00` |
| `APLInterestAmount` | `-` | `GMM` | `ยอดรวมดอกเบี้ยเงินกู้ APL (รวม ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ ด้วย)``ถ้าไม่มีค่าให้ใส่ "0"` | `1,173.09` |
| `OtherLiabilitiesAmount` | `-` | `GMM` | `หนี้สินอื่นๆ (ค่าใช้จ่ายหักก่อนจ่ายลูกค้า) เช่น เบี้ยประกันชีวิต - ปีต่อไป (ที่ยังไม่จ่าย), ดอกเบี้ยเบี้ย, เบี้ยเคสใหม่``ถ้าไม่มีค่าให้ใส่ "0"` | `5,225.00` |
| `Paid Amount (Life)` | `-` | `GMM` | `สินไหมที่จ่ายในความคุ้มครองชีวิต` |   |
| `Paid Amount (Accident death)` | `-` | `GMM` | `สินไหมที่จ่ายในความคุ้มครองอุบัติชีวิต` |   |
| `Paid Amount (Accident non-death)` | `-` | `GMM` | `สินไหมที่จ่ายในความคุ้มครองอุบัติเหตุไม่เสียชีวิต` |   |
| `Paid Amount (Health)` | `-` | `GMM` | `สินไหมสุขภาพ` |   |
| `Paid Amount (Dismemberment)` | `-` | `GMM` | `-` |   |
| `Paid Amount (TPD)` | `-` | `GMM` | `สินไหมที่จ่ายในความคุ้มครองทุพลภาพ` |   |
| `Paid Amount (Other)` | `-` | `GMM` | `สินไหมที่จ่ายเกี่ยวกับค่าทำศพ` |   |
| `Return Premium` | `-` | `GMM` | `สินไหมคืนเบี้ยกรณี member เป็นโรคมาก่อนวันเข้างาน` |   |
| `ยกเลิก` `Policyholders have``policy loan / APL outstanding?` | `-` | `GMM` |   |   |
| `ยกเลิก` `If there is policy loan / APL,``what is the amount?` | `-` | `GMM` |   |   |
| `Investment Component` | `-` | `GMM` | มูลค่าส่วนของการลงทุุน (มูลค่าเวนคืน)ยกตัวอย่างเช่น กรมธรรม์ประกันชีวิตที่ทุุนประกัน 1.5 ล้านบาท ปรากฎว่าผู้ถือกรมธรรม์เกิดเสียชีวิตขึ้นและ มููลค่าเวนคืนเงินสด (Cash Surrender Value) ในขณะนั้นอยู่ที่ 1 ล้านบาท สำหรับ IFRS 17 แล้ว เราจะแบ่งเงินที่ ต้องจ่ายออก 1.5 ล้านบาท ออกมาเป็น 5 แสนจากความคุ้มครอง (ซึ่งก็คือส่วนเกินของทุุนประกันที่มากกว่าเงิน สำรอง หรือทางศัพท์เทคนิคเรียกว่า Net Amount at Risk (NAR)) และ **1 ล้านบาทที่เป็นการ Release มููลค่าเวนคืน** **เงินสด (Cash Surrender Value) ออกมาเมื่อผู้ถือกรมธรรม์เสียชีวิต จะถือเป็็นส่วนของการลงทุุน (Investment** **components)*** ปกติจะมาคู่กับ Current Sum Assured คือทุนประกันตามช่วงอายุของสัญญา เพื่อไว้ใช้เปรียบเทียบมูลค่าของกรมฯนั้นๆ |   |
| `Paid Date` | `-` | `GMM` | `วันที่บริษัทจ่ายเงินให้ลูกค้าจริง / วันที่ลูกค้าได้รับเงินจริง` | `2021-10-12` |
| `AnnualCoupon` | `-` | `GMM` |   |   |
| `MaturityBenefit` | `-` | `GMM` |   |   |
| `AnnuityBenefit` | `-` | `GMM` |   |   |
| `SurrenderBenefit` | `-` | `GMM` |   |   |
| `Lapse` | `-` | `GMM` |   |   |
| `Other` | `-` | `GMM` |   |   |
| `TotalPremiumAmount` | `-` | `VFA` |   |   |
| `UnallocatedPremium` | `-` | `VFA` |   |   |
| `PlanCode` | `-` | `VFA` |   |   |
| `SalesChannel` | `-` | `VFA` |   |   |
| `BusinessLine` | `-` | `VFA` |   |   |
| `PremiumDueDate` | `-` | `VFA` |   |   |
| `EffectiveDate` | `-` | `VFA` |   |   |
| `ModeOfPayment` | `-` | `VFA` |   |   |
| `AnnualPremium` | `-` | `VFA` |   |   |
| `ModalPremium` | `-` | `VFA` |   |   |
| `BasicRiderIndicator` | `-` | `VFA` |   |   |
| `PremiumType` | `-` | `VFA` |   |   |
| `SubGroupID` | `-` | `VFA` |   |   |
| `InitialCommission` | `-` | `VFA` |   |   |
| `RenewalCommission` | `-` | `VFA` |   |   |
| `InitialOverride` | `-` | `VFA` |   |   |
| `RenewalOverride` | `-` | `VFA` |   |   |
| `LastStatus` | `-` | `VFA` |   |   |
| `ClaimEventDate` | `-` | `VFA` |   |   |
| `ClaimReportedDate` | `-` | `VFA` |   |   |
| `ClaimStatus` | `-` | `VFA` |   |   |
| `ApproveDate` | `-` | `VFA` |   |   |
| `ClaimPaidDate` | `-` | `VFA` |   |   |
| `TotalDeathBenefit` | `-` | `VFA` |   |   |
| `DeathBenefitUnitCost` | `-` | `VFA` |   |   |
| `DeathBenefitNonUnitCost` | `-` | `VFA` |   |   |
| `PaidAmountAccident` | `-` | `VFA` |   |   |
| `PaidAmountHealth` | `-` | `VFA` |   |   |
| `PaidAmountOther` | `-` | `VFA` |   |   |
| `AVatDeathEvent` | `-` | `VFA` |   |   |
| `SurrenderChargeAtDeathEvent` | `-` | `VFA` |   |   |
| `SurrenderValue` | `-` | `VFA` |   |   |
| `ActualSumAssured` | `-` | `VFA` |   |   |
| `PolicyStatus` | `-` | `VFA` |   |   |
| `PaidDate` | `-` | `VFA` |   |   |
| `OtherLiabilitiesAmt` | `-` | `VFA` |   |   |
| `LoyaltyBonus` | `-` | `VFA` |   |   |
| `MaturityBenefit` | `-` | `VFA` |   |   |
| `AnnuityBenefit` | `-` | `VFA` |   |   |
| `SurrenderBenefit` | `-` | `VFA` |   |   |
| `Lapse` | `-` | `VFA` |   |   |
| `Other` | `-` | `VFA` |   |   |
| `COICharge` | `-` | `VFA` |   |   |
| `PolicyFee` | `-` | `VFA` |   |   |
| `AdministrationFee` | `-` | `VFA` |   |   |
| `SurrenderCharge` | `-` | `VFA` |   |   |
| `ReinstatementFee` | `-` | `VFA` |   |   |
| `FinancialStatementFee` | `-` | `VFA` |   |   |
| `FundSwitchingFee` | `-` | `VFA` |   |   |
| `Period` | `-` | `PAA` |   |   |
| `PolicyYear` | `-` | `PAA` | `ปีกรมธรรม์``**>> Update by Nutnarin Ch 3/11/2564**``วันที่บันทึกบัญชี ที่แปลงค่าออกมาแสดงเป็น เดือน ปี``หน้าตรวจสอบรายการแสดง Format "MONYYYY"``หน้ารายงานคณิตศาสตร์แสดง Format "MMYYYY"``>> ในระบบไม่ต้องทำการจัดเก็บ แต่จะใช้ Posting Date ในการแปลงค่าออกมาแสดง` |   |
| `EffectiveDate` | `-` | `PAA` | `Policy issued date (effective date ของปีกรมธรรม์นั้นๆ)` |   |
| `EndOfCoverageDate` | `-` | `PAA` | `วันสิ้นสุดความคุ้มครองของกรมธรรม์ปีนั้นๆ``**1 ประเภทกลุ่ม Group – Update by Nutnarin Ch 3/11/2564**``**ให้ EffectiveDate + 1 ปี**` |   |
| `ModeOfPayment` | `-` | `PAA` | `Premium Payment mode (annual, semi-annual, quarterly, monthly, other)``**>> Update by Nutnarin Ch 3/11/2564**``ถ้า Mode of Payment = 0 ให้ ModeOfPayment = Monthly``ถ้า Mode of Payment = 1 ให้ ModeOfPayment = Quarterly``ถ้า Mode of Payment = 2 ให้ ModeOfPayment = Half Yearly``ถ้า Mode of Payment = 3 ให้ ModeOfPayment = Yearly``****``**ระบบ Unit Linked**``ถ้า Mode of Payment = 1 (ModeOfPayment = รายเดือน)``ถ้า Mode of Payment = 3 (ModeOfPayment = ราย 3 เดือน)``ถ้า Mode of Payment = 6 (ModeOfPayment = ราย 6 เดือน)``ถ้า Mode of Payment = 12 (ModeOfPayment = ราย 12 เดือน)``ถ้า Mode of Payment = 111 (ModeOfPayment = ชำระครั้งเดียว)` |   |
| `PayFrom` | `-` | `PAA` | `วันที่เริ่มความคุ้มครองของเบี้ยที่ชำระ` |   |
| `PayTo` | `-` | `PAA` | `วันที่สิ้นความคุ้มครองของเบี้ยที่ชำระ` |   |
| `InvoiceDate` | `-` | `PAA` | `วันที่แจ้งหนี้` |   |
| `NoOfMember` | `-` | `PAA` | `จำนวน member ณ. วันที่ชำระเบี้ย` |   |
| `PremiumType` | `-` | `PAA` | `จ่ายเบี้ยตามปกติ หรือ movement หรือ บอกล้างกรมธรรม์ หรือ คืนเบี้ยตามประสบการณ์` |   |
| `SaleOption` | `-` | `PAA` | `ฝ่ายขาย/ช่องทาง ช่องทางตัวแทน, ประกันชีวิตกลุ่ม, โบรกเกอร์, ช่องทางองค์กร, ประกันชีวิตข้าราชการ, ผ่านสถาบันการเงิน` ระบบรายได้ Alternative `add by jureeporn.ka 16/08/2022``เป็นค่า Config ที่ [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-9.1%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87) หัวข้อ 2.7 รายละเอียดฝ่ายขาย/ช่องทาง ให้นำค่าที่ได้จากระบบต้นทางไปเทียบกับ Config1 และทำการหยิบค่า Config 2 เพื่อไปทำการบันทึกในตารางข้อมูลที่ต้องการจัดเก็บ``ข้อมูลจากระบบ SQL``OceanLife.GLPolicy.SaleOption``ข้อมูลที่ต้องบันทึก``Remark``0``GROUPLIFE``ประกันชีวิตกลุ่ม``1``BROKER``โบรกเกอร์``2``GOVERNMENT``ประกันชีวิตข้าราชการ``3``CORPORATE``ช่องทางองค์กร``4``AGENT``ช่องทางตัวแทน``5``FINANCIAL``ผ่านสถาบันการเงิน` |   |
| `ข้อมูลจากระบบ SQL``OceanLife.GLPolicy.SaleOption` | `ข้อมูลที่ต้องบันทึก` | `Remark` |
| `0` | `GROUPLIFE` | `ประกันชีวิตกลุ่ม` |
| `1` | `BROKER` | `โบรกเกอร์` |
| `2` | `GOVERNMENT` | `ประกันชีวิตข้าราชการ` |
| `3` | `CORPORATE` | `ช่องทางองค์กร` |
| `4` | `AGENT` | `ช่องทางตัวแทน` |
| `5` | `FINANCIAL` | `ผ่านสถาบันการเงิน` |
| `ActualPremiumAmountLife` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองชีวิต` |   |
| `ActualPremiumAmountAccidentDeath` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองอุบัติชีวิต` |   |
| `ActualPremiumAmountMedAccident` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองอุบัติค่ารักษา` |   |
| `ActualPremiumAmountTPD` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองทุพลภาพ` |   |
| `ActualPremiumAmountIPD` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองสุขภาพผู้ป่วยใน` |   |
| `ActualPremiumAmountOPD` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองสุขภาพผู้ป่วยนอก` |   |
| `ActualPremiumAmountDental` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองทันตกรรม` |   |
| `ActualPremiumAmountOther` | `-` | `PAA` | `Premium ที่ได้รับจริงจากลูกค้าในความคุ้มครองอื่นๆนอกเหนือจากด้านบน` |   |
| `ActualCommissionAmountLife` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองชีวิต` |   |
| `ActualCommissionAmountAccidentDeath` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองอุบัติชีวิต` |   |
| `ActualCommissionAmountMedAccident` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองอุบัติค่ารักษา` |   |
| `ActualCommissionAmountTPD` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองทุพลภาพ` |   |
| `ActualCommissionAmountIPD` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองสุขภาพผู้ป่วยใน` |   |
| `ActualCommissionAmountOPD` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองสุขภาพผู้ป่วยนอก` |   |
| `ActualCommissionAmountDental` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองทันตกรรม` |   |
| `ActualCommissionAmountOther` | `-` | `PAA` | `ค่า Commission ที่จ่ายออกจริงในความคุ้มครองอื่นๆนอกเหนือจากด้านบน` |   |
| `CertificateNo` | `-` | `PAA` | `รหัส member ที่ทำการ claim (จะ unique ในระดับ Policy Number อยู่แล้ว)` |   |
| `ClaimEventDate` | `-` | `PAA` | `Claim Event Date` |   |
| `ClaimReportedDate` | `-` | `PAA` | `Claim Reported Date` |   |
| `ClaimStatus` | `-` | `PAA` | `Approve, Decline, Pending, etc.` |   |
| `ApproveDate` | `-` | `PAA` | `Claim Approve date` |   |
| `ClaimPaidDate` | `-` | `PAA` | `Claim Paid Date` |   |
| `Age` | `-` | `PAA` | `อายุที่เกิดเหตุ`ใช้อายุตามปีกรมธรรม์ ที่อนุมัติสินไหมกรณีอายุ = 0 ให้ไปคำนวณตามข้อที่ 2 (update by thidarat.lu 10/02/2566)กรณีไม่มีข้อมูลอายุ ในข้อ 1 ให้คำนวณจากข้อมูลวันเดือนปีเกิดของผู้เอาประกัน อายุที่เกิดเหตุ = (ปีของวันที่เริ่มสัญญากรมธรรม์ปีแรก - ปีเกิด) + ปีกรมธรรม์ -1 กรณีคำนวณได้อายุที่เกิดเหตุ <= 1 ให้บันทึกเป็น 1กรณีที่ไม่มี Birthday ให้บันทึกอายุที่เกิดเหตุ เป็นค่าว่าง**ตัวอย่างการคำนวณ**FirstDate (Year)Birthday (Year)PolicyYearAge (อายุที่เกิดเหตุ)202320001(2023 - 2000) + 1 -1 = 23202320002(2023 - 2000) + 2 -1 = 24202320003(2023 - 2000) + 3 -1 = 25 |   |
| FirstDate (Year) | Birthday (Year) | PolicyYear | Age (อายุที่เกิดเหตุ) |
| 2023 | 2000 | 1 | (2023 - 2000) + 1 -1 = 23 |
| 2023 | 2000 | 2 | (2023 - 2000) + 2 -1 = 24 |
| 2023 | 2000 | 3 | (2023 - 2000) + 3 -1 = 25 |
| `Sex` | `-` | `PAA` | `เพศที่เกิดเหตุ` |   |
| `PaidAmountLife` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองชีวิต` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'DEATH' |   |
| `PaidAmountAccidentDeath` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองอุบัติชีวิต` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'DEATH-ACC' |   |
| `PaidAmountMedAccident` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองอุบัติค่ารักษา` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'MED' |   |
| `PaidAmountTPD` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองทุพลภาพ` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'TPD' |   |
| `PaidAmountIPD` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองสุขภาพผู้ป่วยใน` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'IPD' |   |
| `PaidAmountOPD` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองสุขภาพผู้ป่วยนอก` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'OPD' |   |
| `PaidAmountDental` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองทันตกรรม` Manual Oper จากระบบ SQL บันทึกจำนวนเงินตามกลุ่มประเภทการเคลม โดยอ้างอิงกลุ่มประเภทการเคลม ตาม [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม โดยดูจาก Config3 = 'DENTAL' |   |
| `PaidAmountOther` | `-` | `PAA` | `สินไหมที่จ่ายในความคุ้มครองอื่นๆนอกเหนือจากด้านบน` Manual Oper จากระบบ SQL claim type source ที่ไม่อยู่ใน Config 2 ของ [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1) 2.13 รายการชื่อประเภทสินไหมประกันกลุ่ม |   |
| `ReturnPremium` | `-` | `PAA` | `สินไหมคืนเบี้ยกรณี member เป็นโรคมาก่อนวันเข้างาน` |   |

```
2.Business Rule ส่วน Policy Master ที่เพิ่มเติมจาก COA
```

- เก็บข้อมูลส่วนขยายของ Policy Master ที่ไม่ได้แสดงในระบบ EDW (แต่ทำการเก็บเพิ่มเติม เพื่อรอบรับการทำงานในอนาคต)

| `Required Field` | `Business Rule` | `ตัวอย่าง` |
|---|---|---|
| `Posting Date` | `วันที่บันทีกบัญชี` | `2021-10-02` |
| `policy_category` | `ประเภทกรมธรรม์``อุตสาหกรรม = 'INDUSTRY'``สามัญ = 'ORDINARY'``PA สามัญ = 'PA'``Unit Linked = 'UL'``PAGROUP = 'PAGROUP'``GROUP = 'GROUP'` | `ORDINARY` |
| `policy_status_nbs` | `1. หลักการหยิบข้อมูลสถานะจะจำแนกตามประเภทกรมธรรม์ดังนี้``ประเภทกรมธรรม์``ข้อมูลต้นทาง``IND``NBS``ORD``AS400``PA``AS400``NBS``PAGROUP``SQL``GROUP``SQL``2. เมื่อได้ข้อมูลจากต้นทางแล้วให้นำข้อมูลไปหาต่อที่ [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) เพื่อนำข้อมูลสถานะที่อ่านได้ไปบันทึกข้อูลต่อ โดยมีเงื่อนไขดังนี้``ประเภทกรมธรรม์``**type**``config1``config2``IND``POLICY_STATUS_IND``NBS``รหัสสถานะที่ได้จากต้นทาง``ORD``POLICY_STATUS_ORD``AS400``รหัสสถานะที่ได้จากต้นทาง``PA``POLICY_STATUS_PA``AS400``NBS``รหัสสถานะที่ได้จากต้นทาง``PAGROUP``POLICY_STATUS_GROUP``SQL``รหัสสถานะที่ได้จากต้นทาง``GROUP``POLICY_STATUS_GROUP``SQL``รหัสสถานะที่ได้จากต้นทาง` `3. จากนั้นอ่านค่าที่ได้จาก [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog).config_detail มาทำการบันทึก``รายละเอียดอ้างอิง [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog) ข้อ 2.1 รายการสถานะกรมธรรม์แยกตามประเภทกรมธรรม์` | `INFORCE` |
| `ประเภทกรมธรรม์` | `ข้อมูลต้นทาง` |
| `IND` | `NBS` |
| `ORD` | `AS400` |
| `PA` | `AS400``NBS` |
| `PAGROUP` | `SQL` |
| `GROUP` | `SQL` |
| `ประเภทกรมธรรม์` | `**type**` | `config1` | `config2` |
| `IND` | `POLICY_STATUS_IND` | `NBS` | `รหัสสถานะที่ได้จากต้นทาง` |
| `ORD` | `POLICY_STATUS_ORD` | `AS400` | `รหัสสถานะที่ได้จากต้นทาง` |
| `PA` | `POLICY_STATUS_PA` | `AS400``NBS` | `รหัสสถานะที่ได้จากต้นทาง` |
| `PAGROUP` | `POLICY_STATUS_GROUP` | `SQL` | `รหัสสถานะที่ได้จากต้นทาง` |
| `GROUP` | `POLICY_STATUS_GROUP` | `SQL` | `รหัสสถานะที่ได้จากต้นทาง` |
| `policy_status_as400` | `INFORCE` |
| `policy_status_sql` |   |
| `policy_mode` | `mode ของแบบประกันของสัญญาหลัก` | `12` |
| `policy_age` | `อายุ ณ วันเริ่มทำประกัน` | `35` |
| `policy_sex` | `เพศ (MALE, FEMALE)` | `FEMALE` |
| `policy_prem` | `เบี้ยรายงวดของสัญญาหลัก` | `10,000.00` |
| `plan_code` | `รหัสแบบประกันสัญญาหลัก` | `151` |
| `commencement_date` | `วันที่เริ่มกรมธรรม์ของสัญญาหลัก` | `30-09-2544` |
| `policy_coverage_term` | `ระยะเวลาประกัน` | `20` |
| `policy_payment_term` | `ระยะเวลาชำระเบี้ย` | `15` |
| `sum_assured` | `ทุนประกัน เก็บค่าทศนิยม 2 หลัก` | `1,000,000.00` |
| `fully_paid_date` | `วันที่ชำระครบ` | `30-08-2563` |
| `maturity_date` | `วันที่ครบกำหนดสัญญาของสัญญาหลัก` | `30-09-2564` |
| `plan_code_actuarial` | `รหัสแบบประกัน` | `O151` |
| `basic_rider_indicator` | `ประเภทแบบประกัน` | `BASIC` |

---

## Hyperlinks บนหน้านี้

- [COA Required Field](https://docs.google.com/spreadsheets/d/12C8fJtED9l0wfb3qslazinzkNxtdnEdBt7j35cHcZQ4/edit#gid=1945691910&fvid=543696741)
- [tx_adwpc_result_query_premium_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ind)
- [tx_adwpc_result_query_premium_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ind)
- [tx_adwpc_result_query_premium_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ord)
- [tx_adwpc_result_query_premium_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_premium_ord)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [5.2 ADWPC Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord)
- [tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind)
- [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa)
- [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord)
- [tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind)
- [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa)
- [tx_adwpc_result_query_policy_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ind)
- [tx_adwpc_result_query_policy_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_ord)
- [tx_adwpc_result_query_policy_pa](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_result_query_policy_pa)
- [public.oceanlife_gloldpolicy](http://wiki.thaisamut.co.th/display/IEA/public.oceanlife_gloldpolicy)
- [อ้างอิง](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)
- [cf_grouplife_mapping_sale_channel_code](http://wiki.thaisamut.co.th/display/RDSADW/cf_grouplife_mapping_sale_channel_code)
- [05_33 ข้อมูล Cost Center, Profit Center สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=889586123)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_13 Business Rule การลง BA สาขาบริการ Cost Center Profit Center](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=871071978)
- [05_10 สรุประบบและรายละเอียดกลุ่มธุรกรรมที่หน้า Dashboard Daily](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=844693758)
- [02_00_04 Process การสร้างข้อมูล File SAP สำหรับข้อมูล Payment/Monthly](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=878772596)
- [02_01_01Process การสร้างข้อมูล File SAP สำหรับข้อมูลระบบ Auto Post](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=916193299)
- [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction)
- [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction)
- [tx_adwpc_apta_offset_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_adwpc_apta_offset_transaction)
- [tx_adw_benefit_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_benefit_detail)
- [BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)
- [BENEFIT](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)
- [CASH](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-4.2%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A/%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%28CollectionType%29)
- [LANDING : Mapping Table Landing from Manual Upload GL (Free Template_Specificfield-keyin)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001390136)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [Link](https://docs.google.com/spreadsheets/d/128D2i4uRDdwwO20qgZAEMkkQBmwB1zn71EeTmWFUhU8/edit#gid=889209459&range=A28:E28)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [tx_cenpay_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_cenpay_transaction)
- [LANDING : Mapping Table Landing from Unit Linked (UL)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=848331002)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [tx_manual_oper_ben_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_manual_oper_ben_transaction)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_query_model](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_query_model)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_query_model](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_query_model)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [public.ili_product_ord](http://wiki.thaisamut.co.th/display/IEA/public.ili_product_ord)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [OLIS_OLPPLN21](http://wiki.thaisamut.co.th/display/RDSADW/OLIS_OLPPLN21)
- [DWCONSOL_EDW_02_ตรวจสอบข้อมูลแบบประกันที่มี Bundle ของประเภท ORD](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1204453871)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [WS_EDW_07_ข้อมูลหลักกรมธรรม์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=853835869)
- [public.ili_rider_master](http://wiki.thaisamut.co.th/display/IEA/public.ili_rider_master)
- [DWCONSOL_EDW5_01_ตรวจสอบข้อมูลแบบประกันที่มี Bundle ของประเภท IND](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1204453873)
- [tx_adw_transaction_policy](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_policy)
- [tx_adw_transaction_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_adw_transaction_detail)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [02_29 Process การสร้างรายงานฝ่ายคณิตศาสตร์ประกันภัย (Actuarial)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=756515354)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-9.1%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [05_03 ADW Master Catalog](http://wiki.thaisamut.co.th/display/RDSADW/05_03+ADW+Master+Catalog#id-05_03ADWMasterCatalog-2.13%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
- [cf_adwpc_catalog](http://wiki.thaisamut.co.th/display/RDSADW/cf_adwpc_catalog)
