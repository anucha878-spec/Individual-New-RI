# CENPAY_ENH Wiki Mirror

สำเนาเนื้อหาทั้งหมดจาก Confluence space `RDSCPENH`
— **Centralized Payment : enhancement & integration (CENPAY_ENH)**, Ocean Life Insurance

- แหล่งที่มา: http://wiki.thaisamut.co.th/display/RDSCPENH/Home (root page id `1255703301`)
- ดึงเมื่อ: 2026-07-23 (ผ่าน Playwright MCP ด้วย session ของ `anucha.pi`)
- จำนวน: **1,582 หน้า** | เนื้อหารวม ~18.1 ล้านตัวอักษร | หน้าว่าง 103 หน้า

## ไฟล์ในโฟลเดอร์นี้

| ไฟล์ | คืออะไร |
|---|---|
| `TREE.md` | โครงสร้าง parent → child ทั้งสเปซ 9 ระดับ พร้อมลิงก์กลับต้นทาง |
| `INDEX.md` | ตารางรายหน้า: ชื่อ, depth, จำนวนตัวอักษร, จำนวนลิงก์/ไฟล์แนบ, ลิงก์ไปไฟล์ |
| `pages/` | หน้าละ 1 ไฟล์ Markdown ตั้งชื่อ `<pageId> - <title>.md` |
| `CROSS-SPACE-LINKS.md` | ตาราง 105 หน้าที่ถูกลิงก์จากสเปซนี้แต่อยู่ใน space อื่น (20 space) |
| `cross-space/` | เนื้อหา 105 หน้าข้ามสเปซ ตั้งชื่อ `<SPACE> - <pageId> - <title>.md` |
| `pagetree.json` | page tree ดิบ `{id, title, url, parent, depth}` |
| `_raw/` | JSON ที่ดึงมาดิบๆ ก่อนแปลง (สำรองไว้ rebuild) |
| `_build.js` | สคริปต์แปลง `cenpay-content-*.json` → `pages/*.md` + `INDEX.md` |

แต่ละไฟล์ใน `pages/` มี header (Page ID, URL, breadcrumb, depth) ตามด้วยเนื้อหาแปลงเป็น Markdown
แล้วปิดท้ายด้วยรายการ **Hyperlinks บนหน้านี้** และ **Attachments** (URL เต็ม)

## โครงสร้างหลัก

| ส่วน | จำนวนหน้า |
|---|---|
| Functional Specification | 833 |
| Software Requirements Specification | 738 |
| Admin Manual (Cenpay, PayM) | 9 |
| User Manual | 1 |

**Software Requirements Specification** — 00. Document Delivery / 01. Introduction / 02. System Architecture /
03. Business Processes and Screens Design / 04. Batch Process / 05. Non-Functional Requirement /
06. Data Migration / 07. Appendix

**Functional Specification** — 01. Overview / 02. Process / 03. User Interface / 04. Persistence /
05. Business Rules / 06. External Service Call / 07. Exposed API / 08. Test Specification / 10. Review by Lead/Line

## ข้อจำกัดที่ควรรู้

- **ไฟล์แนบไม่ได้ดาวน์โหลด** — เก็บเฉพาะ URL ของ attachment/รูป ต้องมี session ล็อกอินจึงเปิดได้
- **รูปภาพใน Markdown ชี้ไปที่เซิร์ฟเวอร์** (`/download/attachments/...`) ไม่ใช่ไฟล์ในเครื่อง
- **หน้าว่าง 103 หน้า** เป็นหน้า template ที่ยังไม่มีเนื้อหาจริงบน wiki
- **ลิงก์ข้ามสเปซ 105 หน้า ดึงมาแล้ว** อยู่ใน `cross-space/` (~3.1 ล้านตัวอักษร, 20 space:
  RDSADW 31, RDSCLAIMV2 15, RDSPLP 9, RDSCLMS 7, IEA/RDSCP 6, ฯลฯ)
  ดึงเฉพาะหน้าที่ RDSCPENH ลิงก์ถึงโดยตรง **ไม่ได้ดึงทั้ง space เหล่านั้น**
  หลาย space ตรงกับรายการใน UAT plan (Online Payment, Unit Linked, Centralize Tax, New Loan, เงินรับฝาก)
- เว็บเปิดเฉพาะ **HTTP** (ไม่มี HTTPS) — เครื่องมือที่บังคับ HTTPS จะเชื่อมต่อไม่ได้
- Confluence รุ่นนี้ปิด REST API (`/rest/api/*` คืน 404) — ต้องใช้ `naturalchildren.action` + parse DOM

## Rebuild

```
node wiki/_build.js
```

หมายเหตุ: `_build.js` อ่าน `cenpay-content-*.json` จาก **โฟลเดอร์แม่** (`D:\Claude\Project\Cenpay`)
ตอนนี้ไฟล์ถูกย้ายไป `_raw/` แล้ว — ถ้าจะ rebuild ต้องย้ายกลับออกมา หรือแก้ค่า `ROOT` ในสคริปต์ให้ชี้ที่ `_raw/`
