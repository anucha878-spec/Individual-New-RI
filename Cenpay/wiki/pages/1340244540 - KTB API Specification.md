# KTB API Specification

- **Page ID:** 1340244540
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/KTB+API+Specification
- **Path:** Home > Functional Specification > 02. Process Specification. > API Payment > KTB API Specification
- **Depth:** 4

---

Document : [https://developers.krungthai.com/documentation/fund-transfer/fund-transfer-to-krungthai-account/development-guidelines#step-1-get-client-id-and-client-secret](https://developers.krungthai.com/documentation/fund-transfer/fund-transfer-to-krungthai-account/development-guidelines#step-1-get-client-id-and-client-secret)
**Step 1 : Get Client ID and Client Secret**
setting [https://console-developers.krungthai.com/console/sandbox/](https://console-developers.krungthai.com/console/sandbox/)
1. application name
2. logo
3. API Product : 'Fund Transfer to Krungthai Account' / 'Fund Transfer to Other Bank' / 'Fund Transfer to PromptPay'
4. IP addresses as verification
output
1. client_id
2. client_secret
baseURL :

| Environment | baseUrl |
|---|---|
| Production | [https://oapi-2-legged-external-gw-prd.arise.tech](https://oapi-2-legged-external-gw-prd.arise.tech/) |
| Sandbox | [https://oapi-2-legged-sandbox-gw-prd.arise.tech](https://oapi-2-legged-sandbox-gw-prd.arise.tech/) |

URL :

| Step | URL KTB | URL Other Bank | URL Promptpay |
|---|---|---|---|
| Step 2 : Authentication | {{baseUrl}}/oauth/authentication/api/v2/token | same | same |
|   | {{baseUrl}}/oauth/authentication/api/v2/token/refresh | same | same |
| Step 3 : Inquiry Account Status | {{baseUrl}}/directcredit/v1/open-api/ktb/account/inquirystatus | {{baseUrl}}/directcredit/v1/open-api/other-bank/account/inquirystatus | {{baseUrl}}/directcredit/v1/open-api/promptpay/account/inquirystatus |
| Step 4 : Fund Transfer | {{baseUrl}}/directcredit/v1/open-api/ktb/fundtransfer | {{baseUrl}}/directcredit/v1/open-api/other-bank/fundtransfer/ | {{baseUrl}}/directcredit/v1/open-api/promptpay/fundtransfer/ |
| Step 5 : Inquiry Transfer Status | {{baseUrl}}/directcredit/v1/open-api/ktb/fundtransfer/inquiry | {{baseUrl}}/directcredit/v1/open-api/other-bank/fundtransfer/inquiry' | {{baseUrl}}/directcredit/v1/open-api/promptpay/fundtransfer/inquiry |

Config Parameter :

| Key | Description | mapping data |
|---|---|---|
| channelID | Process request channel (provided by partner) |   |
| termID | Terminal ID (provided by Krungthai Bank) |   |
| compId | Company ID |   |

**Step 2 : Authentication**

| Type | Data | Example |
|---|---|---|
| **Request Token** | ParameterDataContent-Typeapplication/x-www-form-urlencodedclient_idที่ได้จาก step1client_secretที่ได้จาก step1 | <![CDATA[curl --location --request POST &#39;{{baseUrl}}/oauth/authentication/api/v2/token&#39; \ --header &#39;Content-Type: application/x-www-form-urlencoded&#39; \ --data-urlencode &#39;client_id=f79aa1fa-ba1e-464c-8a79-aacb8e4da725&#39; \ --data-urlencode &#39;client_secret=f79aa1fa-ba1e-464c-8a79-aacb8e4da725&#39; \]]> |
| Parameter | Data |
| Content-Type | application/x-www-form-urlencoded |
| client_id | ที่ได้จาก step1 |
| client_secret | ที่ได้จาก step1 |
| **Refresh Token** | ParameterDataContent-Typeapplication/x-www-form-urlencodedclient_idที่ได้จาก step1client_secretที่ได้จาก step1grant_typefix : refresh_tokenrefresh_tokenที่ได้จาก Request Token |   |
| Parameter | Data |
| Content-Type | application/x-www-form-urlencoded |
| client_id | ที่ได้จาก step1 |
| client_secret | ที่ได้จาก step1 |
| grant_type | fix : refresh_token |
| refresh_token | ที่ได้จาก Request Token |
| Response | PropertyDescriptioncodecodemessage000'Success'TK001Authentication failed token invalid.9999Unknown exceptionmessage **data**[] token_typeBeareraccess_tokenAccess token. It is valid for 15 Minutes.expires_inAmount of time in seconds until the access token expires. It is valid for 900 Seconds / 15 Minutes.refresh_tokenA token used to get a new access token. It is valid for 1,440 Minutes after the access token issued.refresh_token_expires_inAmount of time in seconds until the refresh token expires. It is valid for 86,400 Seconds / 1,440 Minutes. | <![CDATA[{ &quot;code&quot;: &quot;0000&quot;, &quot;message&quot;: &quot;Success&quot;, &quot;data&quot;: { &quot;token_type&quot;: &quot;BEARER&quot;, &quot;access_token&quot;: &quot;eyJhb**2aA11&quot;, &quot;expires_in&quot;: 900, &quot;refresh_token&quot;: &quot;eyJhb**2aA55&quot;, &quot;refresh_token_expires_in&quot;: 86400 } }]]> |
| Property | Description |
| code | codemessage000'Success'TK001Authentication failed token invalid.9999Unknown exception |
| code | message |
| 000 | 'Success' |
| TK001 | Authentication failed token invalid. |
| 9999 | Unknown exception |
| message |   |
| **data**[] |   |
| token_type | Bearer |
| access_token | Access token. It is valid for 15 Minutes. |
| expires_in | Amount of time in seconds until the access token expires. It is valid for 900 Seconds / 15 Minutes. |
| refresh_token | A token used to get a new access token. It is valid for 1,440 Minutes after the access token issued. |
| refresh_token_expires_in | Amount of time in seconds until the refresh token expires. It is valid for 86,400 Seconds / 1,440 Minutes. |

**Step 3 : Inquiry Account Status**

| Type | Data | Example |
|---|---|---|
| Request | ParameterTypeDataContent-Type application/jsonAuthorization Bearer {access_token ที่ได้จาก step 2}x-request-id (Optional) xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**Json{}****String** channelID10 Process request channel (provided by partner)termID20 Terminal ID (provided by Krungthai Bank)tranDate8 Requester Identifier Date "YYYYMMDD"tranTime8 Requester Identifier Time "HH:mm:ss" (24Hr)compId10 Company IDrequestUID20 Reference ID for the request. Should be unique for each request.payerBankCode3Payer Bank Code. Fixed = 006 (Krungthai Bank Code)payeeAccount15Payer Account No. System will validate the A/C Account that partner provide in registered company IDpayeeBankCode3Bank CodeBank Name002BBL004KBANK006KTB011TTB014SCB017CITI018SMBC020SCBT022CIMBT024UOBT025BAY029IOBA030GSB031HSBC032DB033GHB034BAAC039MIZUHO045BNPP052BOC066ISBT067TISCO069KKP070ICBCT071TCR073LHBpayeeAccount15Payee Account NopayeeName160Payee Account NamecitizenId20If citizenId is provided when transfer to Krungthai Account, System will validate the citizenId with Payee Account's citizen ID. | <![CDATA[curl --location --request POST &#39;{{baseUrl}}/directcredit/v1/open-api/ktb/account/inquirystatus&#39; \ --header &#39;Content-Type: application/json&#39; \ --header &#39;Authorization: Bearer {access_token}&#39; \ --header &#39;x-request-id: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#39; \ { &quot;channelID&quot;: &quot;XXX&quot;, &quot;termID&quot;: &quot;KTB-XXX&quot;, &quot;tranDate&quot;: &quot;20181018&quot;, &quot;tranTime&quot;: &quot;12:30:15&quot;, &quot;compId&quot;: &quot;ABCD000001&quot;, &quot;requestUID&quot;: &quot;400000010930000001&quot;, &quot;payerBankCode&quot;: &quot;006&quot;, &quot;payerAccount&quot;: &quot;0000345924&quot;, &quot;payeeBankCode&quot;: &quot;006&quot;, &quot;payeeAccount&quot;: &quot;0000345924&quot;, &quot;payeeName&quot;: &quot;NAME LASTNAME&quot;, &quot;citizenId&quot;: &quot;1234567890123&quot; }]]> |
| Parameter | Type | Data |
| Content-Type |   | application/json |
| Authorization |   | Bearer {access_token ที่ได้จาก step 2} |
| x-request-id (Optional) |   | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| **Json{}** | **String** |   |
| channelID | 10 | Process request channel (provided by partner) |
| termID | 20 | Terminal ID (provided by Krungthai Bank) |
| tranDate | 8 | Requester Identifier Date "YYYYMMDD" |
| tranTime | 8 | Requester Identifier Time "HH:mm:ss" (24Hr) |
| compId | 10 | Company ID |
| requestUID | 20 | Reference ID for the request. Should be unique for each request. |
| payerBankCode | 3 | Payer Bank Code. Fixed = 006 (Krungthai Bank Code) |
| payeeAccount | 15 | Payer Account No. System will validate the A/C Account that partner provide in registered company ID |
| payeeBankCode | 3 | Bank CodeBank Name002BBL004KBANK006KTB011TTB014SCB017CITI018SMBC020SCBT022CIMBT024UOBT025BAY029IOBA030GSB031HSBC032DB033GHB034BAAC039MIZUHO045BNPP052BOC066ISBT067TISCO069KKP070ICBCT071TCR073LHB |
| Bank Code | Bank Name |
| 002 | BBL |
| 004 | KBANK |
| 006 | KTB |
| 011 | TTB |
| 014 | SCB |
| 017 | CITI |
| 018 | SMBC |
| 020 | SCBT |
| 022 | CIMBT |
| 024 | UOBT |
| 025 | BAY |
| 029 | IOBA |
| 030 | GSB |
| 031 | HSBC |
| 032 | DB |
| 033 | GHB |
| 034 | BAAC |
| 039 | MIZUHO |
| 045 | BNPP |
| 052 | BOC |
| 066 | ISBT |
| 067 | TISCO |
| 069 | KKP |
| 070 | ICBCT |
| 071 | TCR |
| 073 | LHB |
| payeeAccount | 15 | Payee Account No |
| payeeName | 160 | Payee Account Name |
| citizenId | 20 | If citizenId is provided when transfer to Krungthai Account, System will validate the citizenId with Payee Account's citizen ID. |
| Response | PropertyDescriptionstatusCodecodemessageIC001Active EV033Inactive EV006Payee account not foundstatusDescseveritySeverity StatuspayeeNamePayee Name in English.displayPayeeNamePayee Name in Thai.requestUIDReference ID for the request. Similar to Request. | <![CDATA[{ &quot;statusCode&quot;: &quot;IC001&quot;, &quot;statusDesc&quot;: &quot;Success&quot;, &quot;severity&quot;: &quot;INFO&quot;, &quot;payeeName&quot;: &quot;NAME LASTNAME&quot;, &quot;displayPayeeName&quot;: &quot;ชื่อ นามสกุล&quot;, &quot;requestUID&quot;: &quot;400000010930000001&quot; }]]> |
| Property | Description |
| statusCode | codemessageIC001Active EV033Inactive EV006Payee account not found |
| code | message |
| IC001 | Active |
| EV033 | Inactive |
| EV006 | Payee account not found |
| statusDesc |
| severity | Severity Status |
| payeeName | Payee Name in English. |
| displayPayeeName | Payee Name in Thai. |
| requestUID | Reference ID for the request. Similar to Request. |

**Step 4 : Fund Transfer**

| Type | Data | Example |
|---|---|---|
| Request | ParameterTypeDataContent-Type application/jsonAuthorization Bearer {access_token ที่ได้จาก step 2}x-request-id (Optional) xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**Json{}****String** channelID10 Process request channel (provided by partner)termID20 Terminal ID (provided by Krungthai Bank)tranDate8 Requester Identifier Date "YYYYMMDD"tranTime8 Requester Identifier Time "HH:mm:ss" (24Hr)compId10 Company IDrequestUID20 Reference ID for the request. Should be unique for each request.transRefNo20transaction_no (Check dup)tranAmount1715 digits + 2 precisionpayerBankCode3รหัสธนาคารบริษัทpayerAccount15เลขบัญชีธนาคารบริษัทresendFlag1Fix : N - Normalreference120batch_payment_noreference220-**(1) Transfer**payeeBankCode3รหัสธนาคารผู้รับเงินpayeeAccount15เลขบัญชีธนาคารผู้รับเงินpayeeName160ชื่อบัญชีผู้รับเงินcitizenId20เลขประจำตัวประชาชนผู้รับเงิน**(2) PromptPay**promptpayNo13PromptPay IDpromptpayName300ชื่อบัญชีผู้รับเงินpromptpayType10"NATID" = Citizen ID or Tax ID "MSISDN" = Mobile Number | <![CDATA[curl --location --request POST &#39;{{baseUrl}}/directcredit/v1/open-api/ktb/fundtransfer&#39; \ --header &#39;Content-Type: application/json&#39; \ --header &#39;Authorization: Bearer {access_token}&#39; \ --header &#39;x-request-id: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#39; \ { &quot;channelID&quot;: &quot;XXX&quot;, &quot;termID&quot;: &quot;KTB-XXX&quot;, &quot;tranDate&quot;: &quot;20181018&quot;, &quot;tranTime&quot;: &quot;12:30:15&quot;, &quot;compId&quot;: &quot;ABCD000001&quot;, &quot;requestUID&quot;: &quot;500000010930000001&quot;, &quot;transRefNo&quot;: &quot;202306301545&quot;, &quot;tranAmount&quot;: &quot;200000.00&quot;, &quot;payerBankCode&quot;: &quot;006&quot;, &quot;payerAccount&quot;: &quot;0000345924&quot;, &quot;payeeBankCode&quot;: &quot;006&quot;, &quot;payeeAccount&quot;: &quot;0000345924&quot;, &quot;payeeName&quot;: &quot;NAME LASTNAME&quot;, &quot;citizenId&quot;: &quot;1234567890123&quot;, &quot;resendFlag&quot;: &quot;N&quot;, &quot;reference1&quot;: &quot;1234567890123&quot;, &quot;reference2&quot;: &quot;1234567890123&quot; }]]> |
| Parameter | Type | Data |
| Content-Type |   | application/json |
| Authorization |   | Bearer {access_token ที่ได้จาก step 2} |
| x-request-id (Optional) |   | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| **Json{}** | **String** |   |
| channelID | 10 | Process request channel (provided by partner) |
| termID | 20 | Terminal ID (provided by Krungthai Bank) |
| tranDate | 8 | Requester Identifier Date "YYYYMMDD" |
| tranTime | 8 | Requester Identifier Time "HH:mm:ss" (24Hr) |
| compId | 10 | Company ID |
| requestUID | 20 | Reference ID for the request. Should be unique for each request. |
| transRefNo | 20 | transaction_no (Check dup) |
| tranAmount | 17 | 15 digits + 2 precision |
| payerBankCode | 3 | รหัสธนาคารบริษัท |
| payerAccount | 15 | เลขบัญชีธนาคารบริษัท |
| resendFlag | 1 | Fix : N - Normal |
| reference1 | 20 | batch_payment_no |
| reference2 | 20 | - |
| **(1) Transfer** |
| payeeBankCode | 3 | รหัสธนาคารผู้รับเงิน |
| payeeAccount | 15 | เลขบัญชีธนาคารผู้รับเงิน |
| payeeName | 160 | ชื่อบัญชีผู้รับเงิน |
| citizenId | 20 | เลขประจำตัวประชาชนผู้รับเงิน |
| **(2) PromptPay** |
| promptpayNo | 13 | PromptPay ID |
| promptpayName | 300 | ชื่อบัญชีผู้รับเงิน |
| promptpayType | 10 | "NATID" = Citizen ID or Tax ID "MSISDN" = Mobile Number |
| Response | PropertyDescriptionstatusCodecodemessageIC000Payment is Executed SuccessfullyPT001Invalid Message FormatTM001After Hours : Web Service is closedED001System ErrorstatusDescseveritySeverity Status. Detail of request status.requestUIDReference ID for the request. Similar to Request.transRefNoRequester Identifier must be unique in this service. Similar to Request.sysRefNoBackend Transaction Reference NotransFeeTransaction fee chargereference1Reference 1reference2Reference 2 | <![CDATA[{ &quot;statusCode&quot;: &quot;IC000&quot;, &quot;statusDesc&quot;: &quot;Payment is Executed Successfully&quot;, &quot;severity&quot;: &quot;INFO&quot;, &quot;requestUID&quot;: &quot;500000010930000001&quot;, &quot;transRefNo&quot;: &quot;202306301545&quot;, &quot;sysRefNo&quot;: &quot;12345&quot;, &quot;transFee&quot;: &quot;10.00&quot;, &quot;reference1&quot;: &quot;1234567890123&quot;, &quot;reference2&quot;: &quot;1234567890123&quot; }]]> |
| Property | Description |
| statusCode | codemessageIC000Payment is Executed SuccessfullyPT001Invalid Message FormatTM001After Hours : Web Service is closedED001System Error |
| code | message |
| IC000 | Payment is Executed Successfully |
| PT001 | Invalid Message Format |
| TM001 | After Hours : Web Service is closed |
| ED001 | System Error |
| statusDesc |
| severity | Severity Status. Detail of request status. |
| requestUID | Reference ID for the request. Similar to Request. |
| transRefNo | Requester Identifier must be unique in this service. Similar to Request. |
| sysRefNo | Backend Transaction Reference No |
| transFee | Transaction fee charge |
| reference1 | Reference 1 |
| reference2 | Reference 2 |

**Step 5 : Inquiry Transfer Status**

| Type | Data | Example |
|---|---|---|
| Request | ParameterTypeDataContent-Type application/jsonAuthorization Bearer {access_token ที่ได้จาก step 2}x-request-id (Optional) xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**Json{}****String** channelID10 Process request channel (provided by partner)termID20 Terminal ID (provided by Krungthai Bank)tranDate8 Requester Identifier Date "YYYYMMDD"tranTime8 Requester Identifier Time "HH:mm:ss" (24Hr)compId10 Company IDrequestUID20 Reference ID for the request. Should be unique for each request.transRefNo20transaction_no (Check dup)transferType10Transfer Type | <![CDATA[curl --location --request POST &#39;{{baseUrl}}/directcredit/v1/open-api/ktb/fundtransfer/inquiry&#39; \ --header &#39;Content-Type: application/json&#39; \ --header &#39;Authorization: Bearer {access_token}&#39; \ --header &#39;x-request-id: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#39; \ { &quot;channelID&quot;: &quot;XXX&quot;, &quot;termID&quot;: &quot;KTB-XXX&quot;, &quot;tranDate&quot;: &quot;20181018&quot;, &quot;tranTime&quot;: &quot;12:30:15&quot;, &quot;compId&quot;: &quot;ABCD000001&quot;, &quot;transRefNo&quot;: &quot;202306301545&quot;, &quot;requestUID&quot;: &quot;600000010930000001&quot;, &quot;transferType&quot;: &quot;&quot; }]]> |
| Parameter | Type | Data |
| Content-Type |   | application/json |
| Authorization |   | Bearer {access_token ที่ได้จาก step 2} |
| x-request-id (Optional) |   | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| **Json{}** | **String** |   |
| channelID | 10 | Process request channel (provided by partner) |
| termID | 20 | Terminal ID (provided by Krungthai Bank) |
| tranDate | 8 | Requester Identifier Date "YYYYMMDD" |
| tranTime | 8 | Requester Identifier Time "HH:mm:ss" (24Hr) |
| compId | 10 | Company ID |
| requestUID | 20 | Reference ID for the request. Should be unique for each request. |
| transRefNo | 20 | transaction_no (Check dup) |
| transferType | 10 | Transfer Type |
| Response | PropertyDescriptionstatusCodecodemessageIC000Payment is Executed SuccessfullystatusDesc severitySeverity Status. Detail of request status.requestUIDReference ID for the request. Similar to Request.**fundTfrinfoList []** tranDateTransaction Date "YYYYMMDD"tranTimeTransaction Time "HH:mm:ss" (24Hr)transRefNoRequester Identifier must be unique in this service. Similar to QuerysysRefNoBackend Transaction Reference NotranStatusCodeStatus CodeStatus Description010001Status RECEIVE: When request come into system010002Status VALIDATE: Validate Transaction010003Status TRANSFER: Transferring010004Status COMPLETE: Transferring Successful030002Status VALIDATE FAILED: Failed on validation -Validate Limit -Validate Payer -Validate Profile -Validate citizen or payeename030003Status TRANSFER_FAILED: Transferring Unsuccessful Call Financial CBS, Anyid030004Status PROCESSING: Request timeout from CBS Any IDtranStatusDescreference1Reference 1reference2Reference 2 | <![CDATA[{ &quot;statusCode&quot;: &quot;IC001&quot;, &quot;statusDesc&quot;: &quot;Inquiry Successful&quot;, &quot;severity&quot;: &quot;INFO&quot;, &quot;requestUID&quot;: &quot;600000010930000001&quot;, &quot;fundTfrInfoList&quot;: [ { &quot;tranDate&quot;: &quot;20181018&quot;, &quot;tranTime&quot;: &quot;12:30:15&quot;, &quot;transRefNo&quot;: &quot;202306301545&quot;, &quot;sysRefNo&quot;: &quot;12345&quot;, &quot;tranStatusCode&quot;: &quot;010004&quot;, &quot;tranStatusDesc&quot;: &quot;COMPLETE&quot;, &quot;reference1&quot;: &quot;1234567890123&quot;, &quot;reference2&quot;: &quot;1234567890123&quot; } ] }]]> |
| Property | Description |
| statusCode | codemessageIC000Payment is Executed Successfully |
| code | message |
| IC000 | Payment is Executed Successfully |
| statusDesc |   |
| severity | Severity Status. Detail of request status. |
| requestUID | Reference ID for the request. Similar to Request. |
| **fundTfrinfoList []** |   |
| tranDate | Transaction Date "YYYYMMDD" |
| tranTime | Transaction Time "HH:mm:ss" (24Hr) |
| transRefNo | Requester Identifier must be unique in this service. Similar to Query |
| sysRefNo | Backend Transaction Reference No |
| tranStatusCode | Status CodeStatus Description010001Status RECEIVE: When request come into system010002Status VALIDATE: Validate Transaction010003Status TRANSFER: Transferring010004Status COMPLETE: Transferring Successful030002Status VALIDATE FAILED: Failed on validation -Validate Limit -Validate Payer -Validate Profile -Validate citizen or payeename030003Status TRANSFER_FAILED: Transferring Unsuccessful Call Financial CBS, Anyid030004Status PROCESSING: Request timeout from CBS Any ID |
| Status Code | Status Description |
| 010001 | Status RECEIVE: When request come into system |
| 010002 | Status VALIDATE: Validate Transaction |
| 010003 | Status TRANSFER: Transferring |
| 010004 | Status COMPLETE: Transferring Successful |
| 030002 | Status VALIDATE FAILED: Failed on validation -Validate Limit -Validate Payer -Validate Profile -Validate citizen or payeename |
| 030003 | Status TRANSFER_FAILED: Transferring Unsuccessful Call Financial CBS, Anyid |
| 030004 | Status PROCESSING: Request timeout from CBS Any ID |
| tranStatusDesc |
| reference1 | Reference 1 |
| reference2 | Reference 2 |

---

## Hyperlinks บนหน้านี้

- [https://developers.krungthai.com/documentation/fund-transfer/fund-transfer-to-krungthai-account/development-guidelines#step-1-get-client-id-and-client-secret](https://developers.krungthai.com/documentation/fund-transfer/fund-transfer-to-krungthai-account/development-guidelines#step-1-get-client-id-and-client-secret)
- [https://console-developers.krungthai.com/console/sandbox/](https://console-developers.krungthai.com/console/sandbox/)
- [https://oapi-2-legged-external-gw-prd.arise.tech](https://oapi-2-legged-external-gw-prd.arise.tech/)
- [https://oapi-2-legged-sandbox-gw-prd.arise.tech](https://oapi-2-legged-sandbox-gw-prd.arise.tech/)
