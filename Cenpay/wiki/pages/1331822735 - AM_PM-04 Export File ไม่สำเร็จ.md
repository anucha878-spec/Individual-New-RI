# AM_PM-04 Export File ไม่สำเร็จ

- **Page ID:** 1331822735
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1331822735
- **Path:** Home > Admin Manual > PayM > AM_PM-04 Export File ไม่สำเร็จ
- **Depth:** 3

---

**Step 1 ตรวจสอบเงื่อนไขการ Export Data**

| ประเภทรายงาน ([cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '27000') | ชื่อรายงาน ([cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog).parent_id = '26000') |
|---|---|
| **Support Booking**กำหนด report_type มีค่าเป็น lookup_key = 'SPB' | เอกสารนำส่งรายการทำจ่ายเงิน มีค่าเป็น lookup_key = 'RSB1'เอกสารนำส่งรายการทำรับเงิน มีค่าเป็น lookup_key = 'RSB2' |
| **Report** กำหนด report_type มีค่าเป็น lookup_key = 'RPT' | รายงานประมาณการจ่าย มีค่าเป็น lookup_key = 'PayForecast'รายงานสถานะเช็ค มีค่าเป็น lookup_key = 'ChequeStatus'รายงานสถานะการจ่ายเงิน มีค่าเป็น lookup_key = 'PayStatus'รายงานผลการจ่ายเงิน มีค่าเป็น lookup_key = 'PayConfirm'รายงานเสนอลงนามอนุมัติจ่ายเงิน มีค่าเป็น lookup_key = 'PayApproval'รายงานรออนุมัติจ่ายและบันทึกบัญชี มีค่าเป็น lookup_key = 'ApprovePayment' |

**Step 2 ตรวจสอบข้อมูลการ Export Data ในตาราง lg_report**
**ตรวจสอบด้วย report_type**
<![CDATA[SELECT * FROM lg_report WHERE report_type = &#39;@ประเภทรายงาน&#39; AND created_date &gt;= &#39;@datetime&#39; AND created_date &lt;= &#39;@datetime&#39;;]]>
**ตรวจสอบด้วย report_type**
<![CDATA[select * from lg_report where report_name like &#39;@ชื่อรายงาน%&#39; AND created_date &gt;= &#39;@datetime&#39; AND created_date &lt;= &#39;@datetime&#39;;]]>
- กรณีไม่พบข้อมูล ให้ดำเนินการ Export Data และตรวจสอบโปรแกรมอีกครั้ง

---

## Hyperlinks บนหน้านี้

- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
- [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSCPENH/cf_lookup_catalog)
