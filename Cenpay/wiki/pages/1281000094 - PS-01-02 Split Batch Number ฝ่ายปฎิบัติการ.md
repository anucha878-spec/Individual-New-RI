# PS-01-02 Split Batch Number ฝ่ายปฎิบัติการ

- **Page ID:** 1281000094
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1281000094
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-01 สร้าง Running No. > PS-01-02 Split Batch Number ฝ่ายปฎิบัติการ
- **Depth:** 5

---

**กรณีมีการ Split Batch Number ฝ่ายปฎิบัติการ**

| ตำแหน่ง | ข้อมูล | เงื่อนไข | ตัวอย่าง |
|---|---|---|---|
| 1-20 | เลข Batch ปฎิบัติการ | - | CP-TB-20250904-00001 |
| 21 | Underscore | แทน Space | _ |
| 22 | Sequence number | ลำดับรายการที่ Split | 1 |
| 23 | Dash | ขีดคั่น | - |
| 24 | Total Split Batch | จำนวนรายการทั้งหมดที่ถูก Split Batch | 2 |

ผลลัพธ์ CP-TB-20250904-00001_1-2
