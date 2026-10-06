# API ระบบ Payment Management

- **Page ID:** 1284112410
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112410
- **Path:** Home > Functional Specification > 07. Exposed API Specification. > API ระบบ Payment Management
- **Depth:** 3

---

| No. | API | Source System | Transaction Group | Transaction Type | Wiki - Source System |
|---|---|---|---|---|---|
| 1 | [01 WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112423) | ทุกระบบ |   |   |   |
| 3 | [03 WS Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287) | ทุกระบบ |   |   |   |
| 2 | [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175) | Cenpay | EP | ทุกธุรกรรม | [FS-03-01-02 หน้าจอรายละเอียด Support Booking](/pages/viewpage.action?pageId=1282507906) |
|   |   | NewLoan | EF | ทุกธุรกรรม |   |
|   |   | Re Insurance | EI | ทุกธุรกรรม |   |
| 4 | [04 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม CTAX](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1312719516) | Ctax | EE | ทุกธุรกรรม | [02-06-02 ส่งข้อมูลการอนุมัติตรวจจ่ายเงิน](/pages/viewpage.action?pageId=1310228919) |
|   |   | Portor | EE | ทุกธุรกรรม |   |
| 5 | [05 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ธุรกรรมจากระบบ CS และธุรกรรมสินไหมประกันกลุ่มจาก Manual Oper (G6) และธุรกรรมจาก UL](/pages/viewpage.action?pageId=1329267378) | Claim System | EH | DEA - เงินจ่ายสินไหมมรณกรรม/ทุพพลภาพ HEA - เงินจ่ายสินไหมสุขภาพ HOS - เงินจ่ายสินไหมค่ารักษาโรงพยาบาล | [21_01 Process ส่งรายการเข้า ระบบ Payment Management](/pages/viewpage.action?pageId=1335525699) |
|   |   | Manual Oper (ประกันกลุ่ม) | EH | ธุรกรรมยกเว้นจาก CS และ UL |   |
|   |   | UL (สินไหม) | UL | UCL - สินไหมมรณกรรม |   |
| 6 | [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337720992) | Online Payment | OP | ทุกธุรกรรม | [02_40 ส่งข้อมูลอนุมัติจ่ายเงินไประบบ Payment Management](/pages/viewpage.action?pageId=1313898946) |
| 8 | [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771) | Deposit | EC | ทุกธุรกรรม | [tx_deposit_payments](/display/RDSADW/tx_deposit_payments) |
|   |   | UL (คืนเบี้ย) | UL | UUW - การจ่ายเงินคืน URP - คืนเบี้ยส่วนเกิน |   |
| 12 | [12 WS Landing ข้อมูลรายการ ManualOper - รายได้ตัวแทน (G3 & G4)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984) | Manual Oper (Income) | ED | ทุกธุรกรรม | [02_65_1 Mapping Landing_Group_Key](/display/RDSADW/02_65_1+Mapping+Landing_Group_Key) |

---

## Hyperlinks บนหน้านี้

- [01 WS ตรวจสอบข้อมูลการจ่ายเงินจากระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284112423)
- [03 WS Landing ข้อมูลเข้าสู่หน้าจอรายงานประมาณการจ่าย](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1288176287)
- [02 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1284571175)
- [FS-03-01-02 หน้าจอรายละเอียด Support Booking](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1282507906)
- [04 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม CTAX](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1312719516)
- [02-06-02 ส่งข้อมูลการอนุมัติตรวจจ่ายเงิน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1310228919)
- [05 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ธุรกรรมจากระบบ CS และธุรกรรมสินไหมประกันกลุ่มจาก Manual Oper (G6) และธุรกรรมจาก UL](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1329267378)
- [21_01 Process ส่งรายการเข้า ระบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1335525699)
- [06 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Online Payment](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1337720992)
- [02_40 ส่งข้อมูลอนุมัติจ่ายเงินไประบบ Payment Management](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313898946)
- [08 WS Landing ข้อมูลเข้าสู่หน้าจอรับรายการ ของธุรกรรม Deposit](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1339195771)
- [tx_deposit_payments](http://wiki.thaisamut.co.th/display/RDSADW/tx_deposit_payments)
- [12 WS Landing ข้อมูลรายการ ManualOper - รายได้ตัวแทน (G3 & G4)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1355546984)
- [02_65_1 Mapping Landing_Group_Key](http://wiki.thaisamut.co.th/display/RDSADW/02_65_1+Mapping+Landing_Group_Key)
