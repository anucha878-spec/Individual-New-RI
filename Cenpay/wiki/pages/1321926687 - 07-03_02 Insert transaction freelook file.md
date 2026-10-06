# 07-03_02 Insert transaction freelook file

- **Page ID:** 1321926687
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/07-03_02+Insert+transaction+freelook+file
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 07 WS ส่งข้อมูลคำร้องเข้า Temporary table ระบบ AS400 > 07-03 Insert Transaction file > 07-03_02 Insert transaction freelook file
- **Depth:** 7

---

<![CDATA[INSERT INTO MBFLIB.BFPRQFLP ( BTRQID, BDPOLC, BDPOLT, BDDUDT, BDMODE, BDBRAN, BDRFID, BDRQST, BDRQSD, BDCLID, BDCRVF, BDCRVD, BDCFLG, BDCCNM, BDFEWV, BDCRDT, BDCRUS, BDCPGM, BDMDAM ) VALUES ( :transactionRequestID, -- transactionRequestID จาก Object Transaction :policyNo, :policyType, :receiveDate, :modeTransaction, :branchServiceCode, :requestNo, :requestStatus, :requestTransactionDate, :calculateID, :flagPolicy, :receivePolicyDate, :beneficiary, :beneficiaryName, :flagFeeWaive, :createdDate, :createdBy, :createdProgram, :healthExaminationAmount );]]>
