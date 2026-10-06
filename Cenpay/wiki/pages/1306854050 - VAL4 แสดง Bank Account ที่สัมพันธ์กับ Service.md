# VAL4 แสดง Bank Account ที่สัมพันธ์กับ Service

- **Page ID:** 1306854050
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854050
- **Path:** Home > Software Requirements Specification > 07. Appendix > 5. Common Validation > VAL4 แสดง Bank Account ที่สัมพันธ์กับ Service
- **Depth:** 4

---

1. ค้นหาข้อมูล [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).bank_account
  1. [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping).service = @service lookup_key จาก search_criteria
2. แสดง Bank Account จากข้อมูล [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).config และ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).desciption
  1. where [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account
  2. ตัวอย่างเช่น BBL 925-0-02595-5
3. กรณีไม่มีการเลือก service ให้แสดง bank account ทั้งหมดจาก [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '**18000**' - Bank Account

---

## Hyperlinks บนหน้านี้

- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_bank_account_mapping](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_bank_account_mapping)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
