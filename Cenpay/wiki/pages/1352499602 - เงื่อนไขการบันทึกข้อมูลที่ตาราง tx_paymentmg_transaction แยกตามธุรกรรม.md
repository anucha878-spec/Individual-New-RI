# เงื่อนไขการบันทึกข้อมูลที่ตาราง tx_paymentmg_transaction แยกตามธุรกรรม

- **Page ID:** 1352499602
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1352499602
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-14 Process ส่งข้อมูลเข้า EDW สร้าง Voucher จ่ายเงิน,Format ไม่ผ่าน,ค่าธรรมเนียมธนาคาร > เงื่อนไขการบันทึกข้อมูลที่ตาราง tx_paymentmg_transaction แยกตามธุรกรรม
- **Depth:** 5

---

| ธุรกรรม | [tx_payment_header](/display/RDSCPENH/tx_payment_header).transaction_group |   | Remark |
|---|---|---|---|
| สินไหม | EH | ดึงข้อมูลระดับ Claim ที่ตาราง [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction)where [tx_cs_transaction](/display/RDSCPENH/tx_cs_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idmapping ข้อมูลที่ตาราง1.[tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2.[tx_paymentmg_rider](/display/RDSADW/tx_paymentmg_rider) | updated by patcha.vo 16/06/69 |
| Ctax | EE | ระดับ Tax ที่ตาราง [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction)where [tx_ctax_transaction](/display/RDSCPENH/tx_ctax_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).id | รอ edw ปรับให้รองรับ ctax |
| Deposit | EC | ระดับ Deposit ที่ตาราง [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction)where [tx_deposit_transaction](/display/RDSCPENH/tx_deposit_transaction).payment_detail_id = [tx_payment_detail](/display/RDSCPENH/tx_payment_detail).idตรวจสอบ [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail).statusstatusmapping dataREJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noYอื่นๆให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN | updated by patcha.vo 30/06/69 |
| status | mapping data |
| REJ - รายการไม่ผ่านตรวจสอบ FAI - จ่ายไม่สำเร็จ CAN - ยกเลิกรายการเช็ค CCC - เช็คยกเลิก CEX - เช็คหมดอายุ | ให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 2 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN2 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_noY |
| รายการที่ | deposit_no | deposit_no_flag |
| 1 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_no | N |
| 2 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).new_deposit_no | Y |
| อื่นๆ | ให้ mapping [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) 1 รายการตัวอย่างรายการที่deposit_nodeposit_no_flag1 [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_noN |
| รายการที่ | deposit_no | deposit_no_flag |
| 1 | [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction).deposit_no | N |
| อื่นๆ | - | ระดับ Transaction [tx_payment_detail](/display/RDSCPENH/tx_payment_detail)mapping ข้อมูลที่ตาราง [tx_paymentmg_transaction](/display/RDSADW/tx_paymentmg_transaction) |   |

---

## Hyperlinks บนหน้านี้

- [tx_payment_header](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_header)
- [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction)
- [tx_cs_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_cs_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_paymentmg_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_rider)
- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction)
- [tx_ctax_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_ctax_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
- [tx_deposit_transaction](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_deposit_transaction)
- [tx_payment_detail](http://wiki.thaisamut.co.th/display/RDSCPENH/tx_payment_detail)
- [tx_paymentmg_transaction](http://wiki.thaisamut.co.th/display/RDSADW/tx_paymentmg_transaction)
