# Alteration ไม่ออก BDR + Partner Code ไม่ออก — สรุปสำหรับ PM

**วันที่จัดทำ:** 21 สิงหาคม 2026
**แหล่งข้อมูล:** Redmine [#75031](https://redmine.ochi.link/issues/75031), [#87135](https://redmine.ochi.link/issues/87135), [#92667](https://redmine.ochi.link/issues/92667), [#87162](https://redmine.ochi.link/issues/87162) (ดึงข้อมูล 21-08-2026)
**Application:** Individual New RI

---

## 1. วัตถุประสงค์ของโครงการ

> **แก้ปัญหา "กรมธรรม์ที่ควรส่งประกันภัยต่อ แต่ไม่ออกในรายงาน BDR" ให้รายงานประกันภัยต่อครบถ้วนตรงรอบ**

งานชุดนี้เกิดจากผู้ใช้แจ้งว่า **BDR Actual 2026Q1 ไม่มีรายการ Alteration** ของสัญญา `THREL_Ind_ORD_NonMed` และ `SCOR_Ind_ORD_NonMed` ทั้งที่ BDR Estimate งวด 202601–202603 มีข้อมูล (Defect #75031 — Production)

เมื่อสืบสาวลงไปพบว่าเป็น **ปัญหาเชิงหลักการเดียวกัน 2 อาการ** ที่กระทบทั้งกลุ่มสัญญา ไม่ใช่แค่สัญญาที่แจ้ง:

| # | อาการ | สาเหตุราก |
|---|---|---|
| **A** | รายการ **Alteration ไม่ออก** รายงาน | ระบบใช้ **วันที่ทำรายการ (`alteration_date`)** เป็นตัวตัดรอบ แต่ระบบหลังบ้านบันทึกรายการจริงหลังจากนั้น **31 วัน** (ระยะผ่อนผัน) รายการ Lapse จึง "หลุดรอบ" แทบทุกครั้ง |
| **B** | กรมธรรม์ **ไม่ออกรายงาน** เพราะ **ไม่มี Partner Code** | ระบบดึง Partner Code (`certNo`) จากคอลัมน์เดียวใน AS400 ที่บางกรณีว่าง ทั้งที่ข้อมูลจริงอยู่ในอีก 2 คอลัมน์ |

**เป้าหมายที่วัดผลได้**
1. รายการ Alteration ที่เกิดขึ้นจริง ต้องออกรายงานในงวดที่ระบบบันทึก — ไม่ตกหล่น และไม่ออกซ้ำข้ามงวด
2. กรมธรรม์ที่มี Partner Code อยู่ในต้นทาง ต้องดึงมาได้ครบ — โดยไม่ทำให้ข้อมูลที่เคยถูกต้องเสียหาย
3. ยอดเบี้ย/ค่าบำเหน็จประกันภัยต่อที่เพิ่มขึ้นจากรายการที่เคยตกหล่น ต้องกระทบยอดลงตัวทั้งระดับ header และ detail

---

## 2. ขอบเขตของโครงการ

### 2.1 สิ่งที่แก้ (In Scope) — 3 จุด ใน 2 ระบบ

| Redmine | ระบบที่แก้ | แก้อะไร | สถานะ |
|---|---|---|---|
| **#87135** | **ESB** `ReinsureWsOrdV1ESBService` → `submitJobInquiryAlterationAuto` (WS_RI_03) | เปลี่ยนวันที่ที่ใช้เป็น `alterationDate` ของรายการ **Lapse** จาก `POLPDT` → **`POCKDT`** (AS400 `OLIS.OLPPOLMS`) | ✅ Closed |
| **#92667** | **msa-reinsurance** `TxRiPaNewRenewDtDao.filterEstAlterationId()` | ตัดเงื่อนไข `alteration_date BETWEEN period` ออก ใช้ **`last_update_date` เป็นตัวกำหนดรอบเพียงอย่างเดียว** (สายผลิตภัณฑ์ **PA**) | 🟡 Resolved (ยังไม่ Closed) |
| **#87162** | **ESB** `submitJobInquiryNewAndRenewAuto` + `...Facultative` | เปลี่ยนสูตร `certNo` จาก `APBAC1` → **`NULLIF(COALESCE(TRIM(APBATY),'') ‖ COALESCE(TRIM(APBACO),''),'')`** | ✅ Closed |

**ผลกระทบทางธุรกิจที่ครอบคลุม**
- รายงาน BDR รายการ Alteration — สายสามัญ (ORD Auto) และสาย PA
- Partner Code (`certNo`) ในรายงาน New & Renew ทั้งขา Auto และ Facultative
- ยอดคืนเบี้ยและค่าบำเหน็จของรายการ Alteration ที่เคยตกหล่น

**การนำขึ้นใช้งาน**
Hotfix **#94029 — Deploy to Production 20-08-2026** ✅ ดำเนินการเรียบร้อย 20-08-2026 เวลา 23:30
(ครอบคลุม `06-[ESB] Deploy Web Service` #94157 และ `07-Deploy msa-reinsurance` #94159 · อนุมัติโดย Kittisak Thumrongyut)

### 2.2 สิ่งที่ไม่อยู่ในขอบเขต (Out of Scope)

| ไม่แก้ | เหตุผล |
|---|---|
| `alterEffDate` และ `lapseDate` — **ยังใช้ `POLPDT` ตามเดิม** | เปลี่ยนเฉพาะวันที่ที่ใช้ตัดรอบ วันที่มีผลบังคับไม่เปลี่ยน |
| `submitJobInquiryAlterationAuto` — **ยังใช้ `APBAC1` เป็น certNo** | ตั้งใจไม่แตะ แก้เฉพาะขา New & Renew |
| ข้อมูลต้นทาง AS400 ที่ไม่สมบูรณ์ **6 กรมธรรม์** (`APBATY`/`APBACO` ว่าง) | ทีม New RI **รับความเสี่ยงและจะแก้ที่ต้นทาง** — บันทึกใน spec แล้ว · ทั้ง 6 รายมี `POSTS@ = 'M'` (ครบกำหนด) จึงอยู่นอกเงื่อนไขดึงข้อมูล RI ไม่ไหลเข้าระบบ |
| WSDL / client ปลายทาง | **ไม่เปลี่ยน** ไม่ต้อง regenerate client |
| ประเด็นพี่น้องอื่นใน #75304 "Issue New RI" (16 ใบ) | เช่น #82488 Alter Lapse ตรงรอบแต่ไม่ออก, #86658 Alter CC Refund เบิ้ลผิดรอบ, #87137 housekeeping, #87143 Alter Rider — **แยกงาน ยังไม่ปิด (#75304 คืบหน้า 37%)** |

---

## 3. ผลการทดสอบ (สรุปตัวเลขสำคัญ)

### #87135 — Lapse date `POLPDT` → `POCKDT`
ทดสอบบน **SIT** 18-08-2026 · งวด 6908 · run `RI_AUTO_02_R1` (`ri_process_hd_id` 5428)

| รายการ | ผล |
|---|---|
| ต้นทาง AS400 (`POSTS@='L'`, งวด 6908) ↔ ปลายทาง `tx_ri_ord_alteration_dt_r1` | **4,915 : 4,915** ✅ ไม่ขาดไม่เกิน |
| ค่าไม่ตรงกัน (7 คอลัมน์) / กรมธรรม์ซ้ำ | **0 / 0** ✅ |
| ยืนยันว่าใช้ field ใหม่จริง | `POCKDT ≠ POLPDT` **4,684 แถว (95.3%)** และปลายทางเก็บตาม `POCKDT` ทั้งหมด |
| ขนาดปัญหาเดิม (งวด 6907) | 2,052 แถว — **1,924 แถว (94%) หลุดงวด** ก่อนแก้ |

**สรุป: ✅ Retest ผ่านทั้งหมด**

### #92667 — PA ใช้ `last_update_date` เท่านั้น
ทดสอบบน **SIT** · Treaty `THREL_Ind_PA` · งวด 202605 · เทียบ run 21760 (หลังแก้) กับ 21759 (baseline)

| รายการ | ก่อนแก้ | หลังแก้ |
|---|---|---|
| `tx_ri_est_alt_dt` | **0 แถว** | **136 แถว / 68 กรมธรรม์** |
| Alteration ที่ควรออกแต่ตกหล่น | 100% | 0 |

- **ยืนยัน root cause ด้วยข้อมูลจริง:** ทั้ง 68 กรมธรรม์มี `last_update_date − alteration_date = 31 วันพอดีทุกราย` (ระยะผ่อนผัน) — Lapse จึงแทบไม่มีทางตกอยู่ในงวดเดียวกัน โค้ดเดิมไม่มีวันออก Alteration ได้เลย
- **ครบถ้วน:** landing ↔ estimate = **68 : 68** ไม่มีรายเกินหรือขาด
- **ไม่กว้างเกินไป:** เงื่อนไขที่ต้องคงไว้ยังทำงาน — 455 กรมธรรม์ที่ `effective_date = alteration_date` **ไม่ออก ALTER สักราย**
- **กระทบยอดลงตัว:** เบี้ย NEW 394,342.65 + RENEW 907,497.95 − ALTER 28,952.85 = **1,272,887.75** = `hd.ri_premium` เป๊ะ

**สรุป: ✅ Retest ผ่าน** (มี 2 ประเด็นรอ BA ยืนยัน — ดูข้อ 4)

### #87162 — Partner Code `APBAC1` → `APBATY ‖ APBACO`
ทดสอบ query ฝั่ง **AS400 SIT** 19-08-2026 · `OLIS.OLPAPPT5` **606,843 แถว**

| ผลเทียบสูตรเดิม ↔ สูตรใหม่ | จำนวน | ความหมาย |
|---|---|---|
| ให้ค่าเท่ากันเป๊ะ | **605,958** | ✅ ไม่กระทบข้อมูลปกติ |
| ว่างทั้งคู่ (คืน NULL ถูกต้อง) | 810 | ✅ |
| **เดิมว่าง → ใหม่มีค่า** | **70** | 🎯 กลุ่มที่งานนี้ตั้งใจแก้ (69 ราย ได้ค่าครบถูกต้อง) |
| ได้คนละค่า | 5 | ⚠️ ต้นทางไม่สอดคล้อง — **อยู่นอก scope `POSTS@`** ไม่ไหลเข้า RI |
| **ข้อมูลที่เคยมีค่าแล้วหายไป** | **0** | ✅ **ไม่มี regression** |

- รูปแบบถูกต้อง 7 ตัวอักษร **606,029 แถว (99.99934%)**
- ไม่มี fanout: 660,901 กรมธรรม์ : 660,901 certNo (1 : 1) ✅

**สรุป: ✅ query ฝั่ง AS400 ถูกต้อง** — ⚠️ **ยังค้างการ retest ปลายทาง** (`tx_ri_ord_new_renew_dt_r1` run 5451 ยังได้ค่าตามสูตรเดิม รอ deploy ESB SIT แล้วรัน `RI_AUTO_01_R1` ใหม่)

---

## 4. ประเด็นค้าง / ที่ PM ต้องตัดสินใจ

| # | ประเด็น | ผู้ที่ต้องตอบ |
|---|---|---|
| 1 | **#92667 ยังเป็น Resolved ไม่ใช่ Closed** — ต้องยืนยันก่อนปิด | Suthanee Saelim |
| 2 | **แถวว่างที่ออกคู่กับแถวจริง** — ALTER แต่ละกรมธรรม์ออก 2 แถว: แถว `rider_coverage_type = 'ADD'` มียอดจริง + แถว `NULL` ยอด 0.00 ทั้งหมด — เป็น design ที่ตั้งใจหรือไม่ | BA / Dev |
| 3 | **ความเสี่ยงรายการเก่าค้าง** — เมื่อไม่คุมด้วย `alteration_date` แล้ว ถ้าแถวเก่าถูก update ในงวดปัจจุบันจะถูกรายงานเป็น Alteration ของงวดนั้นทันที · งวด 202605 มี 1,976 กรมธรรม์เข้าเงื่อนไขใหม่ ในนั้น **343 ราย มี `alteration_date` เก่ากว่า 12 เดือน (เก่าสุด 2017-04-28)** — งวดนี้ถูกกรองด้วยเงื่อนไข treaty ออกไปก่อน แต่ต้องยืนยันว่าเป็นพฤติกรรมที่ธุรกิจต้องการ (HAJUBU Bot code review ทักไว้เช่นกัน) | **BA / ธุรกิจ** |
| 4 | **retest ปลายทาง #87162 ยังไม่จบ** — ต้องรัน `RI_AUTO_01_R1` ใหม่หลัง deploy เพื่อปิดงาน | QA |
| 5 | **ยังไม่ทดสอบข้ามงวด** — งวด 202604/202606 ประมวลผลบนโค้ดเดิม แนะนำรันงวดข้างเคียงใหม่เพื่อยืนยันว่า Lapse แต่ละรายการออกเพียงงวดเดียว | QA |
| 6 | **#75031 Root Cause ยังเป็น "Under Investigated"** ทั้งที่ปิด Closed แล้ว | ผู้รับผิดชอบ defect |
| 7 | **ข้อมูลย้อนหลัง** — Actual 2026Q1 ที่ปิดงวดไปแล้ว ต้องออก Alteration ย้อนหลังหรือไม่ / จัดการอย่างไร | **ธุรกิจ + Accounting** |

---

## ภาคผนวก — สายความสัมพันธ์ของงาน

```
#14272  WBS "Individual New RI" (UR Internal IT, 98 subtask, คืบหน้า 49%)
  └─ #75031  Defect: Alteration ไม่ออก BDR Actual 2026Q1
              (THREL_Ind_ORD_NonMed, SCOR_Ind_ORD_NonMed) — Closed
       └─ #94029  Deploy to Production [20-08-2026] Hotfix — Closed

#17404 › #75304  "Issue New RI" (Incident Investigation, 16 subtask, 37%)
  ├─ #86693  กรมธรรม์ไม่ออก Alteration — 100%
  │    ├─ #87135  [ESB][RI] alterationDate Lapse: POLPDT -> POCKDT — Closed
  │    └─ #92667  [PA] ใช้ last_update_date เท่านั้น — Resolved
  └─ #87161  ปรับแก้ไขกรณีกรมธรรม์ไม่ออก Report — 100%
       └─ #87162  [ESB][RI] certNo: APBAC1 -> APBATY||APBACO — Closed
```

ทั้ง #87135 และ #87162 มี relation `blocks #94157` (ESB Deploy Web Service) ⇒ ขึ้น production ในรอบ hotfix เดียวกัน

### Commit / Spec อ้างอิง

| Redmine | Repo / Branch | Commit | ไฟล์ |
|---|---|---|---|
| #87135 | `esb-fnd-osgi` ticket/2889 → 1.0 | `c75845b9` (merge `9cf76e3e`) | `ReinsureWsOrdV1ESBService_Alteration_Auto_AS400_SELECT_OLIS_OLPPOLMS.sql` |
| #87162 | `esb-fnd-osgi` ticket/2890 → 1.0 | `fcbb4bc0` (merge `04e2769f`) | `ReinsureWsOrdV1ESBService_AS400_SELECT_OLIS_OLPPOLMS.sql`, `..._Facultative_...sql` |
| #92667 | `msa-reinsurance` ticket/885 | `15ad72e0` | `jdbi/dao/TxRiPaNewRenewDtDao.java` (+ unit test `TxRiPaNewRenewDtDaoFilterEstAlterationIdTest`) |

**Spec (speckit):** `services/reinsure/ord/v1-bulk.md` — sync ตรงกับ impl แล้ว (SQL block byte-identical 91/91 + 89/89, `check-spec-code.py` PASS=5 FAIL=0)

**Spec (wiki):**
- `pageId=1096450888` — Alteration Auto
- `pageId=1096450874` — New & Renew Auto
- `pageId=1107099749` — Facultative
- `pageId=1131446318` — 01. Auto (Alter) (สเปกที่ตัดเงื่อนไข `alteration_date` ออกแล้ว)
