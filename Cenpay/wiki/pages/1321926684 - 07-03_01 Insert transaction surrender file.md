# 07-03_01 Insert transaction surrender file

- **Page ID:** 1321926684
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/07-03_01+Insert+transaction+surrender+file
- **Path:** Home > Functional Specification > 06. External Service Call Specification. > WS ระบบ Cenpay > AS400 > 07 WS ส่งข้อมูลคำร้องเข้า Temporary table ระบบ AS400 > 07-03 Insert Transaction file > 07-03_01 Insert transaction surrender file
- **Depth:** 7

---

<![CDATA[INSERT INTO MBFLIB.BFPRQPSP ( BTRQID, BDPOLC, BDPOLT, BDDUDT, BDMODE, BDBRAN, BDRFID, BDRQST, BDRQSD, BDYEAR, BDMON, BDDAY, BDCLID, BDNPFR, BDNPTO, BDNPRM, BDNPIN, BDNPLF, BDNPAC, BDNPHB, BDNPEX, BDNPOT, BDPLAM, BDPLIN, BDPLAI, BDAPAM, BDAPIN, BDAPCP, BDAPFR, BDAPTO, BDCRDT, BDCRUS, BDCPGM ) VALUES ( :transactionRequestID, -- transactionRequestID จาก Object Transaction :policyNo, :policyType, :receiveDate, :modeTransaction, :branchServiceCode, :requestNo, :requestStatus, :statusDate, :policyAgeYears, :policyAgeMonths, :policyAgeDays, :calculateID, :premFromDate, :premToDate, :overduePremAmount, :overdueInterestAmount, :overduePremLifeAmount, :overduePremAccAmount, :overduePremHcAmount, :overduePremExtraAmount, :overduePremOtherAmount, :loanAmount, :loanInterestAmount, :advanceInterest, :aplAmount, :aplInterestAmount, :aplCompoundInterestAmount, :aplInterestFromDate, :aplInterestToDate, :createdDate, :createdBy, :createdProgram );]]>
