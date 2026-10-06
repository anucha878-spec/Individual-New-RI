# PS-00-05 Process บันทึก lg_batch_process

- **Page ID:** 1291420324
- **URL:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1291420324
- **Path:** Home > Functional Specification > 02. Process Specification. > Payment Management > 02-04-00 Process กลาง > PS-00-05 Process บันทึก lg_batch_process
- **Depth:** 5

---

กรณี Run Batch Manual จากหน้าจอ [FS-09-01 หน้าจอ Batch Manual Process](/pages/viewpage.action?pageId=1290404320) ให้ข้ามการบันทึกข้อมูลนี้
- Insert ข้อมูลที่ตาราง [lg_batch_process](/display/RDSCPENH/lg_batch_process)

| Field | Description | Mapping data |
|---|---|---|
| batch_id | รหัส Batch | Auto generate |
| batch_code | รหัส Batch | Batch Code |
| status | สถานะการ Run Batch | F - กรณี Batch Fail |
| error_message | ข้อความกรณี Run Batch Fail | บันทึกข้อความกรณีมี Error ที่ Run Batch Process |
| type | ประเภทการ Run Batch | A - Auto |
| created_dated | วันที่สร้าง | บันทึกวันและเวลาปัจจุบัน |
| created_by | ผู้สร้าง | บันทึก System |

---

## Hyperlinks บนหน้านี้

- [FS-09-01 หน้าจอ Batch Manual Process](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1290404320)
- [lg_batch_process](http://wiki.thaisamut.co.th/display/RDSCPENH/lg_batch_process)
