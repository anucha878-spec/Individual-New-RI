# 07-03 Insert Transaction file

- **Page ID:** 1321926679
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/07-03+Insert+Transaction+file
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 07 WS ส่งข้อมูลคำร้องเข้า Temporary table ระบบ AS400 > 07-03 Insert Transaction file
- **Depth:** 6

---

<![CDATA[INSERT INTO MBFLIB.BFPREQTR ( BHRQID, BTRQID, BTEVTY, BTNTAM, BTCRDT, BTCRUS, BTCPGM ) VALUES ( :headerID, -- headerID จาก Object Header :transactionRequestID, :eventType, :total_benefit_amount, :createdDate, :createdBy, :createdProgram );]]>
