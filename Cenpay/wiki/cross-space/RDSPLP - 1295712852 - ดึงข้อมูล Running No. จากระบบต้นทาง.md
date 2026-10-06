# ดึงข้อมูล Running No. จากระบบต้นทาง

- **Space:** `RDSPLP` — Partial Loan Payment (New Loan System)
- **Page ID:** 1295712852
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1295712852

---

ค้นหาเลขที่ Case ดังนี้
**Sample SQL**
1. หาจาก Table [TX_NL_ID_SEQ](/display/RDSPLP/TX_NL_ID_SEQ) โดยใช้เงื่อนไข prefix = System_date (วันปัจจุบัน) จัด format รูปแบบ: yyyymmdd (ปีค.ศ.) + Fix ชื่อระบบต้นทาง เช่น NL (New Loan), AL (Alteration)
- กรณีพบข้อมูล นำค่า [TX_NL_ID_SEQ](/display/RDSPLP/TX_NL_ID_SEQ) .seq_c มาใช้
- กรณีไม่พบข้อมูล ให้เพิ่มข้อมูลสำหรับ System_date (วันปัจจุบัน) วันนั้น ตามตัวอย่าง

| Table: [TX_NL_ID_SEQ](/display/RDSPLP/TX_NL_ID_SEQ) | Mapping Field |
|---|---|
| prefix | 20251031NL |
| seq_c | 1 |
| created_date | 2025-10-31 15:00:00 |

2. จัด format : **prefix + seq_c**เติม 0 ให้ครบ 5 หลัก **ตัวอย่าง** 20251031NL00001
3. update รายการที่เลือก set [TX_NL_ID_SEQ](/display/RDSPLP/TX_NL_ID_SEQ) .seq_c = [TX_NL_ID_SEQ](/display/RDSPLP/TX_NL_ID_SEQ) .seq_c + 1

---

## Hyperlinks บนหน้านี้

- [TX_NL_ID_SEQ](http://wiki.thaisamut.co.th/display/RDSPLP/TX_NL_ID_SEQ)
- [TX_NL_ID_SEQ](http://wiki.thaisamut.co.th/display/RDSPLP/TX_NL_ID_SEQ)
- [TX_NL_ID_SEQ](http://wiki.thaisamut.co.th/display/RDSPLP/TX_NL_ID_SEQ)
- [TX_NL_ID_SEQ](http://wiki.thaisamut.co.th/display/RDSPLP/TX_NL_ID_SEQ)
- [TX_NL_ID_SEQ](http://wiki.thaisamut.co.th/display/RDSPLP/TX_NL_ID_SEQ)
