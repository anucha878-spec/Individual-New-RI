# HERMES - 12. รายงานข้อมูลใบเสร็จที่ส่งพิมพ์ Outsource Printing

- **Space:** `RDSOTHCHPAY` — Other Channel Payment
- **Page ID:** 250937732
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=250937732

---

********เข้าใช้งานได้เฉพาะ ฝ่ายปฏิบัติการ เท่านั้น************

| หน้าจอหลัก |
|---|
| ![img](/download/attachments/250937732/image2019-9-19%2016%3A24%3A21.png?version=1&modificationDate=1568885061329&api=v2)จาก screen ขอปรับจากรูป ดังนี้หัวข้อหน้าจอ ให้เปลี่ยนจาก "ค้นหาข้อมูลใบเสร็จที่ส่งพิมพ์ Outsource Printing" เป็น "สอบถามข้อมูลใบเสร็จที่ส่งพิมพ์ Outsource Printing"ปุ่มพิมพ์ ย้าย ตำแหน่งไปไว้ข้างบน ข้างปุ่ม ล้างด้านข้าง "จำนวนทั้งหมด 7 รายการ" ให้เพิ่ม "จำนวนเงินสุทธิ"(รวม column สุทธิ) |
| เข้ามาครั้งแรก |
| Field | Description | Format | Default |
| วันที่ส่งพิมพ์ | Calendar : RECEIPT_GEN_DATE_FROMCalendar :RECEIPT_GEN_DATE_TO | dd/MM/yyyyวันที่ต้องไม่เป็นวันในอนาคตทั้งRECEIPT_GEN_DATE_FROM และ RECEIPT_GEN_DATE_TO | วันปัจจุบัน ทั้ง RECEIPT_GEN_DATE_FROM และRECEIPT_GEN_DATE_TOrequire field |
| วันที่ชำระเงิน | Calendar : PAYMENT_DATE_FROMCalendar :PAYMENT_DATE_TO | dd/MM/yyyyวันที่ต้องไม่เป็นวันในอนาคตทั้งPAYMENT_DATE_FROM และ PAYMENT_DATE_TO | ว่าง |
| ช่องทางการขาย | Drop Down List : SALE_CHANNEL_CODE | มี 3 ตัวเลือก ได้แก่ทั้งหมด - value "ALL"ตัวแทน - value "AGT"Alternative - value "ALT" |   |
| Dropdown ด้านข้าง ช่องทางการขาย(จะเรียกว่า dropdown สาขา) | Drop Down List : BRANCH_CODE | filter ตาม Dropdown ช่องทางการขายQueryselect slunt#, slunnm from lips_pspslorg where slunt# between 2070001 and 2079999 – where ด้วย บรรทัดนี้กรณี ช่องทางการขาย = "ALL" หรือ "AGT" or slunt# between 8000001 and 8999999 or slunt# between 3070001 and 3079999 or slunt# = 4000001 – where ด้วย บรรทัดนี้กรณี ช่องทางการขาย = "ALL" หรือ "ALT" order by slunt# ascสำหรับข้อมูล slunt# ที่นำหน้าด้วย 207 อยากให้แสดงเฉพาะสาขาที่มีอยู่ใน ไฟล์ xml สาขา (ที่ติดมากับตัว project) เนื่องจาก ข้อมูลหน่วยงานที่ list มาได้จาก lips_pspslorg จะเป็นข้อมูลหน่วยงานทั้งหมดที่มี ซึ่งอาจจะเป็นข้อมูลสาขาที่มีการยกเลิกไปแล้วแสดงข้อมูลสาขา ใน dropdown ดังนี้ถ้า slunt# 3 ตัวแรก = 207 ให้แสดง slunt# 4 ตัวท้าย + ':' + slunnm เช่น 0116 : อโศกถ้า slunt# 3 ตัวแรก != 207 ให้แสดง slunt# 3 ตัวแรก + '-' + slunt# 4 ตัวท้าย + ':' + slunnm เช่น 812-0001 : LH-BANK |   |
| Query |
| select slunt#, slunnm from lips_pspslorg where slunt# between 2070001 and 2079999 – where ด้วย บรรทัดนี้กรณี ช่องทางการขาย = "ALL" หรือ "AGT" or slunt# between 8000001 and 8999999 or slunt# between 3070001 and 3079999 or slunt# = 4000001 – where ด้วย บรรทัดนี้กรณี ช่องทางการขาย = "ALL" หรือ "ALT" order by slunt# asc |
| ช่องทางการชำระ | Drop Down List : MAIN_CHANNEL_CODE | จาก [HYDRA - PAYMENT_MAIN_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_MAIN_CHANNEL) order by MAIN_CHANNEL_NAMEแสดง MAIN_CHANNEL_NAME | ทั้งหมด |
| ธนาคาร | Drop Down List : CHANNEL_CODE | จาก [HYDRA - PAYMENT_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_CHANNEL)[order by CHANNEL_NAME](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_MAIN_CHANNEL) order by CHANNEL_NAMEแสดง CHANNEL_NAME + "(" + CHANNEL_NAME_ABBR + ")"กรณีที่เลือก ช่องทางการชำระเงิน = payment_mian_channel.is_bank= true)ให้ filter ตาม dropdown ช่องทางชำระถ้า ช่องทางชำระ payment_mian_channel.is_bank= falseให้ dropdown ธนาคาร แสดงเฉพาะตัวเลือก ทั้งหมด | ทั้งหมดdisable |
| ประเภทกรมธรรม์ | Drop Down List : POLICTY_TYPE | Hard Codeลำดับที่ 1 'ALL' = ทั้งหมด ลำดับที่ 2 'ORD' = สามัญ ลำดับที่ 3 'IND' = ปช. ลำดับที่ 4 'GOV' = ขพ. | ทั้งหมด |
| เลขที่ใบเสร็จ | Text box : RECEIPT_NO | เฉพาะตัวเลขMax Length = 8 โครงการขยายใบเสร็จ >>ปรับขยายเลขที่ใบเสร็จจากเดิม 8 เป็น 14 หลักปรับขยาย Max Length = 14 | ว่าง |
| กรมธรรม์ | Text box : POLICY_NO | Text box Max Length = 8 | ว่าง |
| เอกสารที่ใช้ชำระ | Drop Down List : DOCUMENT_TYPE | Hard Codeทั้งหมดใบแจ้ง — value 1บัตร — value 2หนังสือยินยอมฯ — value 3 | ทั้งหมด |
| โหมดการชำระ | Drop Down List : PAYMENT_MODE | Hard Codeทั้งหมด1,2,3,4,5,6,7,8,9,10,11,12 | ทั้งหมด |
| ปุ่มค้นหา |   |   | enable |
| ปุ่มล้าง |   |   | enable |
| ปุ่มพิมพ์ |   |   | disable |
| Current Page | Text box : CURRENT_PAGE |   | default 1disable |
| Row Per Page | Drop Down List : ROW_PER_PAGE | Hard Code152550แสดงทั้งหมด | default 10disable |
| Process : เลือก Drop Down List : MAIN_CHANNEL_CODE |
| **Validate** | - |
| **Basic Flow** | 1.) นำค่า Drop Down List : MAIN_CHANNEL_CODE ไปค้นหาที่ Table [HYDRA - PAYMENT_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_CHANNEL) 2.) นำผลลัพท์ที่ค้นหาได้ไปแสดงที่ Drop Down List : CHANNEL_CODE3.)Drop Down List : CHANNEL_CODE enable |
| **Alternate Flow** | 1.) ถ้า Drop Down List : MAIN_CHANNEL_CODE เลือกไปที่ทั้งหมด Drop Down List : CHANNEL_CODE focus ที่ ทั้งหมดและ disable2.) ถ้าโปรแกรมเกิดข้อผิดพลาดอื่นๆ ที่ไม่ได้ระบุ แสดงข้อความ 'เกิดข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ' |
| Process : กดปุ่มค้นหา |
| **Validate** | ในกรณีที่ระบุ วันที่ชำระเงินเริ่มต้น หรือ วันที่ชำระเงินสิ้นสุด ให้ตรวจสอบ PAYMENT_DATE_TO หรือ PAYMENT_DATE_FROM เป็นค่าว่าง แสดงข้อความ 'กรุณาเลือกวันที่ชำระเงินเริ่มต้นและสิ้นสุด'ถ้า PAYMENT_DATE_FROM > PAYMENT_DATE_TO แสดงข้อความ 'กรุณาเลือกวันที่ชำระเงินเริ่มต้นน้อยกว่าวันที่สิ้นสุด'RECEIPT_GEN_DATE_FROM หรือ RECEIPT_GEN_DATE_TO เป็นค่าว่าง แสดงข้อความ 'กรุณาเลือกวันที่ส่งพิมพ์เริ่มต้นและสิ้นสุด'ถ้า RECEIPT_GEN_DATE_TO > RECEIPT_GEN_DATE_FROM แสดงข้อความ 'กรุณาเลือกวันที่ส่งพิมพ์เริ่มต้นน้อยกว่าวันที่สิ้นสุด' |
| **Basic Flow** | 1.) นำเงื่อนไขการค้นหาไปค้นหาที่ Table [HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) LEFT JOIN [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) ON RECEIPT_GEN_IDField HERMES - RECEIPT TableDescriptionOperationRECEIPT_GEN_DATE[HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) หา RECEIPT_GEN_DATEที่อยู่ระหว่าง RECEIPT_GEN_DATE_FROM และ RECEIPT_GEN_DATE_TO BetweenPAYMENT_DATE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)หา PAYMENT_DATE ที่อยู่ระหว่าง PAYMENT_DATE_FROM และ PAYMENT_DATE_TOBetweenCHANNEL_CODE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Drop Down List : ธนาคาร (PAYMENT_CHANNEL) ไปค้นหาEqualBRANCH_CODE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Drop Down List : สาขา (BRANCH) ไปค้นหา- ถ้าเลือก สาขาที่นำหน้าด้วย 207 ให้ where แบบ substring(p.branch_code,4,4) = รหัสสาขาจาก dropdown 4 ตัวท้าย - ถ้าเลือก สาขาที่ไม่ได้นำหน้าด้วย 207 ให้ where แบบปกติ p.branch_code = รหัสสาขา 7 หลักEqualPOLICY_TYPE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Drop Down List : ประเภทกรมธรรม์ (ฺPOLICY_TYPE) ไปค้นหาEqualRECEIPT_NO[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Textbox : เลขที่ใบเสร็จ (RECEIPT_NO) ไปค้นหาLike Value%POLICY_NO[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Textbox : เลขที่กรมธรรม์ (POLICY_NO) ไปค้นหาLike Value%DOCUMENT_TYPE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Drop Down List : เอกสารที่ใช้ชำระ (ฺDOCUMENT_TYPE) ไปค้นหาEqualPAYMENT_MODE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)นำค่าจาก Drop Down List : โหมดการชำระ (ฺPAYMENT_MODE) ไปค้นหาEqual2.) นำข้อมูลที่ได้จากการค้นหาใน Table [HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) LEFT JOIN [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) ON RECEIPT_GEN_ID ไปใส่ในตารางข้อมูลใบเสร็จ ดังนี้Field HERMES - RECEIPTTableหัวตารางข้อมูลใบเสร็จFormatDescription NO ลำดับข้อมูลRECEIPT_GEN_DATE[HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) วันที่ส่งพิมพ์dd/MM/yyyy HH:mm RECEIPT_NO[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)เลขที่ใบเสร็จ โครงการขยายเลขที่ใบเสร็จ >> ปรับขยายจาก 8 เป็น 14 หลักขยายช่องให้รองรับการแสดงผลเลขที่ใบเสร็จ 14 หลักPAYMENT_DATE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)วันที่ชำระเงินdd/MM/yyyyปีพ.ศ.PREMIUM_TYPE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)ประเภทเบี้ยORD แสดง สามัญIND แสดง อุตสาหกรรม BRANCH_CODE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)รหัสสาขา BRANCH_NAME[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)สาขาSLUNNMนำรหัสสาขาไป join กับข้อมูลหน่วยงานที่ AS/400 lips.pspslorg เพื่อแสดงชื่อPOLICY_NO[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)กรมธรรม์ TITLE_NAME + FNAME + ' ' + LNAME[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)ผู้เอาประกันภัย DUE_DATE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)กำหนดชำระdd/MM/yyyyปีพ.ศ.DUE_END_DATE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)วันที่ชำระถึงdd/MM/yyyyปีพ.ศ.PAYMENT_MODE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)Mode PAYMENT_CHANNEL.CHANNEL_NAME_ABBR[HYDRA - PAYMENT_CHANNEL](/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+PAYMENT_CHANNEL)[HYDRA - PAYMENT_MAIN_CHANNEL](/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+2.+%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2)ช่องทางชำระ [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)ตั้งแต่ ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ปี YEAR_FROM + ' ' + PERIOD_FROM เช่น ปี 5 งวด 1ถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_from [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)ถึง ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ไม่ต้องแสดงข้อมูลถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_toPREMIUM_AMOUNT[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)เบี้ย#,###.## RIDER_AMOUNT[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)เบี้ยสัญญาเพิ่มเติม#,###.## DISCOUNT_AMOUNT[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)ส่วนลด#,###.## TOTAL_PREMIUM_AMOUNTถ้า วันเริ่มสัญญา < 15/1/2563 ให้แสดงเบี้ย gross คือแสดงยอดเบี้ยโดยยังไม่หักส่วนลดใช้ field : TOTAL_PREMIUM_AMOUNT ถ้า วันเริ่มสัญญา >= 15/1/2563 ให้แสดงเบี้ย net คือแสดงยอดเบี้ยที่ได้หักส่วนลดเรียบร้อยแล้วในใบเสร็จคำนวณโดย: TOTAL_PREMIUM_AMOUNT - [TOTAL_PREMIUM_AMOUNT * DISCOUNT_PERCENT/100][HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)สุทธิ#,###.## DOCUMENT_TYPE[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)เอกสารที่ใช้ชำระ หากเป็น 1 แสดง ใบแจ้ง หากเป็น 2 แสดง บัตรหากเป็น 3 แสดง หนังสือยินยอมฯIS_FIRST_YEAR[HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)หมายเหตุTRUE แสดง 'เบี้ยปีแรก'นอกนั้นแสดง '' 3.) ปุ่มพิมพ์ enable4.) Textbox : Current Page enable5.) Drop Down List : Row Per Page enable |
| Field HERMES - RECEIPT | Table | Description | Operation |
| RECEIPT_GEN_DATE | [HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) | หา RECEIPT_GEN_DATEที่อยู่ระหว่าง RECEIPT_GEN_DATE_FROM และ RECEIPT_GEN_DATE_TO | Between |
| PAYMENT_DATE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | หา PAYMENT_DATE ที่อยู่ระหว่าง PAYMENT_DATE_FROM และ PAYMENT_DATE_TO | Between |
| CHANNEL_CODE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Drop Down List : ธนาคาร (PAYMENT_CHANNEL) ไปค้นหา | Equal |
| BRANCH_CODE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Drop Down List : สาขา (BRANCH) ไปค้นหา- ถ้าเลือก สาขาที่นำหน้าด้วย 207 ให้ where แบบ substring(p.branch_code,4,4) = รหัสสาขาจาก dropdown 4 ตัวท้าย - ถ้าเลือก สาขาที่ไม่ได้นำหน้าด้วย 207 ให้ where แบบปกติ p.branch_code = รหัสสาขา 7 หลัก | Equal |
| POLICY_TYPE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Drop Down List : ประเภทกรมธรรม์ (ฺPOLICY_TYPE) ไปค้นหา | Equal |
| RECEIPT_NO | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Textbox : เลขที่ใบเสร็จ (RECEIPT_NO) ไปค้นหา | Like Value% |
| POLICY_NO | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Textbox : เลขที่กรมธรรม์ (POLICY_NO) ไปค้นหา | Like Value% |
| DOCUMENT_TYPE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Drop Down List : เอกสารที่ใช้ชำระ (ฺDOCUMENT_TYPE) ไปค้นหา | Equal |
| PAYMENT_MODE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | นำค่าจาก Drop Down List : โหมดการชำระ (ฺPAYMENT_MODE) ไปค้นหา | Equal |
| Field HERMES - RECEIPT | Table | หัวตารางข้อมูลใบเสร็จ | Format | Description |
|   |   | NO |   | ลำดับข้อมูล |
| RECEIPT_GEN_DATE | [HERMES - RECEIPT_FILE_GEN](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN) | วันที่ส่งพิมพ์ | dd/MM/yyyy HH:mm |   |
| RECEIPT_NO | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | เลขที่ใบเสร็จ |   | โครงการขยายเลขที่ใบเสร็จ >> ปรับขยายจาก 8 เป็น 14 หลักขยายช่องให้รองรับการแสดงผลเลขที่ใบเสร็จ 14 หลัก |
| PAYMENT_DATE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | วันที่ชำระเงิน | dd/MM/yyyy | ปีพ.ศ. |
| PREMIUM_TYPE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | ประเภทเบี้ย | ORD แสดง สามัญIND แสดง อุตสาหกรรม |   |
| BRANCH_CODE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | รหัสสาขา |   |   |
| BRANCH_NAME | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | สาขา | SLUNNM | นำรหัสสาขาไป join กับข้อมูลหน่วยงานที่ AS/400 lips.pspslorg เพื่อแสดงชื่อ |
| POLICY_NO | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | กรมธรรม์ |   |   |
| TITLE_NAME + FNAME + ' ' + LNAME | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | ผู้เอาประกันภัย |   |   |
| DUE_DATE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | กำหนดชำระ | dd/MM/yyyy | ปีพ.ศ. |
| DUE_END_DATE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | วันที่ชำระถึง | dd/MM/yyyy | ปีพ.ศ. |
| PAYMENT_MODE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | Mode |   |   |
| PAYMENT_CHANNEL.CHANNEL_NAME_ABBR | [HYDRA - PAYMENT_CHANNEL](/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+PAYMENT_CHANNEL)[HYDRA - PAYMENT_MAIN_CHANNEL](/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+2.+%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2) | ช่องทางชำระ |   |   |
|   | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | ตั้งแต่ |   | ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ปี YEAR_FROM + ' ' + PERIOD_FROM เช่น ปี 5 งวด 1ถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_from |
|   | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | ถึง |   | ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ไม่ต้องแสดงข้อมูลถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_to |
| PREMIUM_AMOUNT | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | เบี้ย | #,###.## |   |
| RIDER_AMOUNT | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | เบี้ยสัญญาเพิ่มเติม | #,###.## |   |
| DISCOUNT_AMOUNT | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | ส่วนลด | #,###.## |   |
| TOTAL_PREMIUM_AMOUNTถ้า วันเริ่มสัญญา < 15/1/2563 ให้แสดงเบี้ย gross คือแสดงยอดเบี้ยโดยยังไม่หักส่วนลดใช้ field : TOTAL_PREMIUM_AMOUNT ถ้า วันเริ่มสัญญา >= 15/1/2563 ให้แสดงเบี้ย net คือแสดงยอดเบี้ยที่ได้หักส่วนลดเรียบร้อยแล้วในใบเสร็จคำนวณโดย: TOTAL_PREMIUM_AMOUNT - [TOTAL_PREMIUM_AMOUNT * DISCOUNT_PERCENT/100] | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | สุทธิ | #,###.## |   |
| DOCUMENT_TYPE | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | เอกสารที่ใช้ชำระ |   | หากเป็น 1 แสดง ใบแจ้ง หากเป็น 2 แสดง บัตรหากเป็น 3 แสดง หนังสือยินยอมฯ |
| IS_FIRST_YEAR | [HERMES - RECEIPT](/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT) | หมายเหตุ | TRUE แสดง 'เบี้ยปีแรก'นอกนั้นแสดง '' |   |
| **Alternate Flow** | 1.) ถ้าโปรแกรมเกิดข้อผิดพลาดอื่นๆ ที่ไม่ได้ระบุ แสดงข้อความ 'เกิดข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ' |
| Process : กดปุ่มล้าง |
| **Validate** | - |
| **Basic Flow** | ค่าทุกอย่างกลับไปเป็นเหมือนตอนเข้ามาครั้งแรก |
| **Alternate Flow** | 1.)ถ้าโปรแกรมเกิดข้อผิดพลาดอื่นๆ ที่ไม่ได้ระบุ แสดงข้อความ 'เกิดข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ' |
| Process : กดปุ่มพิมพ์ |
| **Validate** | - |
| **Basic Flow** | 1.) นำข้อมูลที่แสดงตารางข้อมูลใบเสร็จที่ส่งพิมพ์ Outsource Printing (รวมถึงข้อมูลที่อยู่ใน Paging) ไปแสดงในตาราง Excel ดังนี้ ![img](/download/attachments/250937732/image2015-5-22%2015%3A40%3A21.png?version=1&modificationDate=1432284003061&api=v2)Field HERMES - RECEIPTหัวตารางข้อมูลใบเสร็จFormatDescription NO ลำดับข้อมูลRECEIPT_GEN_DATEวันที่ส่งพิมพ์dd/MM/yyyy HH:mm RECEIPT_NOเลขที่ใบเสร็จ ในกรณีที่ Login เข้ามาเป็น ส่วนกลาง ให้ทำ Link โดยให้ส่งตัวแปร RECEIPT_NO ไปตาม Link ด้วยเพื่อเปิดหน้า RECEIPT_DETAILถ้า Login เข้ามาเป็นสาขา ให้แสดงข้อความอย่างเดียวไม่เป็น Linkโครงการขยายเลขที่ใบเสร็จ >> ปรับขยายจาก 8 เป็น 14 หลักขยายความกว้างของ Column ให้สามารถแสดงผลเลขที่ใบเสร็จได้ 14 หลักPAYMENT_DATEวันที่ชำระเงินdd/MM/yyyyปีพ.ศ.PREMIUM_TYPEประเภทเบี้ยORD แสดง สามัญIND แสดง อุตสาหกรรม BRANCH_CODEรหัสสาขา BRANCH_NAMEสาขาSLUNNMนำรหัสสาขาไป join กับข้อมูลหน่วยงานที่ AS/400 lips.pspslorg เพื่อแสดงชื่อPOLICY_NOกรมธรรม์ TITLE_NAME + FNAME + LNAMEผู้เอาประกันภัย DUE_DATEกำหนดชำระdd/MM/yyyyปีพ.ศ.DUE_END_DATEวันที่ชำระถึงdd/MM/yyyyปีพ.ศ.PAYMENT_MODEMode CHANNEL_NAME_ABBRช่องทางชำระ ตั้งแต่ ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ปี YEAR_FROM + ' ' + PERIOD_FROM เช่น ปี 5 งวด 1ถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_from ถึง ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ไม่ต้องแสดงข้อมูลถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_toPREMIUM_AMOUNTเบี้ย#,###.## RIDER_AMOUNTเบี้ยสัญญาเพิ่มเติม#,###.## DISCOUNT_AMOUNTส่วนลด#,###.## TOTAL_PREMIUM_AMOUNTถ้า วันเริ่มสัญญา < 15/1/2563 ให้แสดงเบี้ย gross คือแสดงยอดเบี้ยโดยยังไม่หักส่วนลดใช้ field : TOTAL_PREMIUM_AMOUNT ถ้า วันเริ่มสัญญา >= 15/1/2563 ให้แสดงเบี้ย net คือแสดงยอดเบี้ยที่ได้หักส่วนลดเรียบร้อยแล้วในใบเสร็จคำนวณโดย: TOTAL_PREMIUM_AMOUNT - [TOTAL_PREMIUM_AMOUNT * DISCOUNT_PERCENT/100]สุทธิ#,###.## DOCUMENT_TYPEเอกสารที่ใช้ชำระ หากเป็น 1 แสดง ใบแจ้ง หากเป็น 2 แสดง บัตรหากเป็น 3 แสดง หนังสือยินยอมฯIS_FIRST_YEARหมายเหตุTRUE แสดง 'เบี้ยปีแรก'นอกนั้นแสดง '' 2.) แสดงเงื่อนไขการค้นหาใน Excel ให้ตรงกับตารางข้อมูลใบเสร็จที่ส่งพิมพ์ Outsource Printing ในหน้าหลัก3.)แสดงไฟล์ Excel ให้ผู้ใช้ download โดยแสดงชื่อ 'รายงานใบเสร็จที่ส่งพิมพ์ Outsource Printing.xls'**ตัวอย่าง**[Report_Receipt_Outsource_Printing_15052558.xls](/download/attachments/250937732/Report_Receipt_Outsource_Printing_15052558.xls?version=3&modificationDate=1434510362312&api=v2) ดู format ในมรายงาน ที่ [Format ใน รายงาน Excel](/pages/viewpage.action?pageId=261587100)[/pages/viewpage.action?pageId=261587100](/pages/viewpage.action?pageId=261587100) |
| Field HERMES - RECEIPT | หัวตารางข้อมูลใบเสร็จ | Format | Description |
|   | NO |   | ลำดับข้อมูล |
| RECEIPT_GEN_DATE | วันที่ส่งพิมพ์ | dd/MM/yyyy HH:mm |   |
| RECEIPT_NO | เลขที่ใบเสร็จ |   | ในกรณีที่ Login เข้ามาเป็น ส่วนกลาง ให้ทำ Link โดยให้ส่งตัวแปร RECEIPT_NO ไปตาม Link ด้วยเพื่อเปิดหน้า RECEIPT_DETAILถ้า Login เข้ามาเป็นสาขา ให้แสดงข้อความอย่างเดียวไม่เป็น Linkโครงการขยายเลขที่ใบเสร็จ >> ปรับขยายจาก 8 เป็น 14 หลักขยายความกว้างของ Column ให้สามารถแสดงผลเลขที่ใบเสร็จได้ 14 หลัก |
| PAYMENT_DATE | วันที่ชำระเงิน | dd/MM/yyyy | ปีพ.ศ. |
| PREMIUM_TYPE | ประเภทเบี้ย | ORD แสดง สามัญIND แสดง อุตสาหกรรม |   |
| BRANCH_CODE | รหัสสาขา |   |   |
| BRANCH_NAME | สาขา | SLUNNM | นำรหัสสาขาไป join กับข้อมูลหน่วยงานที่ AS/400 lips.pspslorg เพื่อแสดงชื่อ |
| POLICY_NO | กรมธรรม์ |   |   |
| TITLE_NAME + FNAME + LNAME | ผู้เอาประกันภัย |   |   |
| DUE_DATE | กำหนดชำระ | dd/MM/yyyy | ปีพ.ศ. |
| DUE_END_DATE | วันที่ชำระถึง | dd/MM/yyyy | ปีพ.ศ. |
| PAYMENT_MODE | Mode |   |   |
| CHANNEL_NAME_ABBR | ช่องทางชำระ |   |   |
|   | ตั้งแต่ |   | ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ปี YEAR_FROM + ' ' + PERIOD_FROM เช่น ปี 5 งวด 1ถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_from |
|   | ถึง |   | ถ้า PREMIUM_TYPE = 'ORD'' ให้แสดง ไม่ต้องแสดงข้อมูลถ้า PREMIUM_TYPE = 'IND'' ให้แสดง payment_period_to |
| PREMIUM_AMOUNT | เบี้ย | #,###.## |   |
| RIDER_AMOUNT | เบี้ยสัญญาเพิ่มเติม | #,###.## |   |
| DISCOUNT_AMOUNT | ส่วนลด | #,###.## |   |
| TOTAL_PREMIUM_AMOUNTถ้า วันเริ่มสัญญา < 15/1/2563 ให้แสดงเบี้ย gross คือแสดงยอดเบี้ยโดยยังไม่หักส่วนลดใช้ field : TOTAL_PREMIUM_AMOUNT ถ้า วันเริ่มสัญญา >= 15/1/2563 ให้แสดงเบี้ย net คือแสดงยอดเบี้ยที่ได้หักส่วนลดเรียบร้อยแล้วในใบเสร็จคำนวณโดย: TOTAL_PREMIUM_AMOUNT - [TOTAL_PREMIUM_AMOUNT * DISCOUNT_PERCENT/100] | สุทธิ | #,###.## |   |
| DOCUMENT_TYPE | เอกสารที่ใช้ชำระ |   | หากเป็น 1 แสดง ใบแจ้ง หากเป็น 2 แสดง บัตรหากเป็น 3 แสดง หนังสือยินยอมฯ |
| IS_FIRST_YEAR | หมายเหตุ | TRUE แสดง 'เบี้ยปีแรก'นอกนั้นแสดง '' |   |
| **Alternate Flow** | 1.)ถ้าโปรแกรมเกิดข้อผิดพลาดอื่นๆ ที่ไม่ได้ระบุ แสดงข้อความ 'เกิดข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ' |

---

## Hyperlinks บนหน้านี้

- [HYDRA - PAYMENT_MAIN_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_MAIN_CHANNEL)
- [HYDRA - PAYMENT_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_CHANNEL)
- [order by CHANNEL_NAME](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_MAIN_CHANNEL)
- [HYDRA - PAYMENT_CHANNEL](http://wiki.thaisamut.co.th/display/RnD/HYDRA+-+PAYMENT_CHANNEL)
- [HERMES - RECEIPT_FILE_GEN](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT_FILE_GEN](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT_FILE_GEN](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT_FILE_GEN](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT_FILE_GEN)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HYDRA - PAYMENT_CHANNEL](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+PAYMENT_CHANNEL)
- [HYDRA - PAYMENT_MAIN_CHANNEL](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HYDRA+-+2.+%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [HERMES - RECEIPT](http://wiki.thaisamut.co.th/pages/createpage.action?spaceKey=RnD&title=HERMES+-+RECEIPT)
- [Report_Receipt_Outsource_Printing_15052558.xls](http://wiki.thaisamut.co.th/download/attachments/250937732/Report_Receipt_Outsource_Printing_15052558.xls?version=3&modificationDate=1434510362312&api=v2)
- [Format ใน รายงาน Excel](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=261587100)
- [/pages/viewpage.action?pageId=261587100](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=261587100)

## Attachments

- http://wiki.thaisamut.co.th/download/attachments/250937732/image2019-9-19%2016%3A24%3A21.png?version=1&modificationDate=1568885061329&api=v2
- http://wiki.thaisamut.co.th/download/attachments/250937732/image2015-5-22%2015%3A40%3A21.png?version=1&modificationDate=1432284003061&api=v2
- http://wiki.thaisamut.co.th/download/attachments/250937732/Report_Receipt_Outsource_Printing_15052558.xls?version=3&modificationDate=1434510362312&api=v2
