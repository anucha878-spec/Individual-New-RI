# cf_cheque_detail_data

- **Page ID:** 1284309275
- **URL:** http://wiki.thaisamut.co.th/display/RDSCPENH/cf_cheque_detail_data
- **Path:** Home > Functional Specification > 04. Persistence Specification. > 02. DB : paymentmg > 11. CF - Table Configuration > cf_cheque_detail > cf_cheque_detail_data
- **Depth:** 6

---

| cheque_header_id | text_type | horizontal_x (pixel) | vertical_y (pixel) | width (mm) | height (mm) | font_size (point) | length (mm) | checkbox |
|---|---|---|---|---|---|---|---|---|
| หน่วย : pixel (พิกเซล)ระบุได้ไม่เกิน : cheque_size_width * 12 pxDPI = 300 | หน่วย : pixel (พิกเซล)ระบุได้ไม่เกิน : cheque_size_height * 12 pxDPI = 300 | หน่วย : mm (มิลลิเมตร)ระบุได้ไม่เกิน : cheque_size_width | หน่วย : mm (มิลลิเมตร)ระบุได้ไม่เกิน : cheque_size_height | หน่วย : point (พอยต์)ระบุได้ไม่เกิน : 30 | หน่วย : mm (มิลลิเมตร)ระบุได้ไม่เกิน : 30 |
| T001 | date | 1380 | 96 | 115 | 8 | 12 | - | - |
| T001 | name | 180 | 276 | 15 | 23 | 12 | - | - |
| T001 | money_character | 396 | 384 | 33 | 32 | 12 | - | - |
| T001 | money_number | 1320 | 540 | 110 | 45 | 12 | - | - |
| T001 | ac_payee_only | 300 | 156 | 25 | 13 | - | - | N |
| T001 | crossed_bearer_cheque | 1860 | 276 | 155 | 23 | - | 15 | N |
