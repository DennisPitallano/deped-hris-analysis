---
theme: seriph
title: DepEd HRIS — Analysis, Response & Architecture
info: |
  Independent technical analysis of the Philippine Bidding Document for
  the Department of Education's Human Resources Information System.
  Project 2026C-ICTS2-002-B5-CB-034 · ABC PHP 500 M · 365 days.
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter'
  serif: 'Source Serif Pro'
  mono: 'JetBrains Mono'
---

# DepEd HRIS

## Analysis, Response & Architecture

<div class="pt-6 opacity-70 text-sm">
Independent technical read of the Philippine Bidding Document<br/>
Project <code>2026C-ICTS2-002-B5-CB-034</code> · ABC PHP 500 M · 365 days
</div>

---
layout: default
---

# The bid at a glance

<div class="grid grid-cols-3 gap-6 pt-4">

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">1 M+</div>
  <div class="opacity-70 text-sm mt-1">Employees in scope</div>
</div>

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">PHP 500 M</div>
  <div class="opacity-70 text-sm mt-1">Approved Budget (ABC)</div>
</div>

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">365 d</div>
  <div class="opacity-70 text-sm mt-1">Contract duration from NTP</div>
</div>

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">11</div>
  <div class="opacity-70 text-sm mt-1">Functional modules</div>
</div>

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">8</div>
  <div class="opacity-70 text-sm mt-1">Milestone payments</div>
</div>

<div class="stat-card">
  <div class="text-4xl font-bold text-sky-500">99%</div>
  <div class="opacity-70 text-sm mt-1">Uptime target · P1–P4 SLA</div>
</div>

</div>

<div class="pt-8 opacity-70 text-sm">
Procuring entity: <strong>DepEd ICTS-SDD</strong> · Funding: GAA FY 2025 (DCP – SAGIP continuing) ·
Subcontracting <strong>not allowed</strong> · No advance payment · Liability capped at Contract Price.
</div>

<style>
.stat-card {
  @apply p-4 rounded-lg border border-gray-200 dark:border-gray-700;
  background: rgba(148,163,184,0.05);
}
</style>

---
layout: two-cols
routeAlias: toc
---

# Five papers, one thesis

Click any card to jump straight to that section.

<div class="pt-3 grid grid-cols-1 gap-2 text-sm">
  <Link to="paper-a" class="nav-card"><b>A · Brief</b> — what the RFP actually says</Link>
  <Link to="paper-b" class="nav-card"><b>B · Response</b> — how to answer it, clause-by-clause</Link>
  <Link to="paper-c" class="nav-card"><b>C · Architecture</b> — C4 model + PostgreSQL DDL</Link>
  <Link to="paper-d" class="nav-card"><b>D · Value-Added</b> — 8 differentiators, zero incremental cost</Link>
  <Link to="paper-e" class="nav-card"><b>E · Benchmarks</b> — international precedent</Link>
  <Link to="paper-f" class="nav-card"><b>F · Delivery & Cost</b> — bottom-up model, PHP 421 M vs 500 M ABC</Link>
</div>

::right::

<div class="pt-14 pl-6 text-sm">

| Paper | For… | Format |
|---|---|---|
| **A** | Orientation | Structured analysis |
| **B** | Bid preparation | Compliance matrix |
| **C** | System design | Diagrams + DDL |
| **D** | Winning the bid | Component pitch |
| **E** | Evaluators | Country tables |
| **F** | Cost & delivery plan | Bottom-up model |

</div>

<div class="pt-4 pl-6 text-xs opacity-60">
Tip: press <kbd>O</kbd> for overview · <kbd>F</kbd> for fullscreen · <kbd>?</kbd> for all shortcuts.
</div>

<style>
.nav-card {
  @apply block p-2 rounded border border-gray-200 dark:border-gray-700 no-underline;
  background: rgba(2,132,199,0.05);
  transition: background .15s ease, transform .15s ease;
}
.nav-card:hover {
  background: rgba(2,132,199,0.15);
  transform: translateX(2px);
}
</style>

---
layout: section
routeAlias: paper-a
---

# Paper A
## Technical Specifications Brief

<div class="opacity-70 pt-4">
What the Philippine Bidding Document actually requires
</div>

<SectionNav current="A" />

---

# Scope of coverage

<div class="grid grid-cols-2 gap-8 pt-2">

<div>

### Organisational levels
- Central Office
- Regional Offices
- Schools Division Offices
- District Offices
- Schools (Elementary / JHS / SHS)

### Population
- **> 1,000,000 employees**
- Plantilla · COS · Job Order
- Teaching · Related-teaching · Non-teaching

</div>

<div>

### 11 functional modules

<div class="text-sm">

1. Personnel Information Management ★
2. Applicant Portal ★
3. Recruitment, Selection, Placement ★
4. Employee Self-Service Portal
5. Leave & Attendance Management
6. Payroll (General, Special, Voucher)
7. Performance Management (SPMS/IPCR/OPCR)
8. Learning & Development
9. Rewards & Recognition
10. Employee Wellness & Welfare
11. Succession Planning

</div>

<div class="text-xs opacity-60 pt-2">
★ = detailed in TOR · Modules 4–11 finalised at inception
</div>

</div>

</div>

---

# 8 milestones · 365 days · payment weights

```mermaid {scale: 0.75}
gantt
    dateFormat  YYYY-MM-DD
    title       Delivery milestones (illustrative timing across 365 days)
    axisFormat  %b
    section Discovery
    M1 · Inception & Project Plan             :m1, 2026-01-01, 30d
    section Build
    M2 · Design & Architecture Baseline       :m2, after m1, 45d
    M3 · Core HR + ESS build                  :m3, after m2, 60d
    M4 · Recruitment + Notifications          :m4, after m3, 45d
    M5 · Payroll build + retrieval index      :m5, after m4, 60d
    section Validate
    M6 · Payroll parallel-run GATE            :crit, m6, after m5, 45d
    M7 · UAT + Training + Go-live             :m7, after m6, 45d
    section Turnover
    M8 · Final acceptance + source escrow     :crit, m8, after m7, 35d
```

<div class="grid grid-cols-8 gap-2 pt-4 text-center text-xs">
  <div class="milestone">M1<br/><b>10%</b></div>
  <div class="milestone">M2<br/><b>20%</b></div>
  <div class="milestone">M3<br/><b>15%</b></div>
  <div class="milestone">M4<br/><b>10%</b></div>
  <div class="milestone">M5<br/><b>15%</b></div>
  <div class="milestone">M6<br/><b>10%</b></div>
  <div class="milestone">M7<br/><b>10%</b></div>
  <div class="milestone">M8<br/><b>10%</b></div>
</div>

<div class="pt-4 text-xs opacity-70">
Liquidated damages after <strong>15 days</strong> of unjustified delay ·
Full source-code turnover a condition of final acceptance at M8.
</div>

<style>
.milestone { @apply p-2 rounded border border-gray-300 dark:border-gray-700; }
</style>

---

# SLA · Availability · Support

<div class="grid grid-cols-2 gap-8 pt-2">

<div>

### Service levels

- **99% uptime** excluding scheduled maintenance
- **≤ 3 s** response for core transactions under normal load
- **Regulator adaptation** within **90 days** of new issuance

### Support matrix

| Sev | Response | Resolution |
|---|---|---|
| **P1** Critical | 1 h | 24 h |
| **P2** High | 2 h | 48 h |
| **P3** Medium | 4 h | 5 working days |
| **P4** Low | 1 working day | Next release |

</div>

<div>

### Security & compliance

- **RA 10173** — Data Privacy Act
- **ISO/IEC 27001**, **27701** control mapping
- **NIST CSF** alignment
- **MFA** for HR, Payroll, Admin roles
- **RBAC + ABAC** with row-level security (RLS)
- Immutable, **hash-chained audit log**

### Breach response

- **Contain** immediately
- **Notify** within **24 h**
- **Full report** within **48 h**
- Data return **15 d** post-termination
- Notarised destruction cert **30 d** later

</div>

</div>

---
layout: section
routeAlias: paper-b
---

# Paper B
## Bid Response Outline

<div class="opacity-70 pt-4">
A placeholder-populated compliance matrix — every Section VII clause answered
</div>

<SectionNav current="B" />

---

# How the response is structured

<div class="grid grid-cols-2 gap-8 pt-2 text-sm">

<div>

### Per-clause format

Every Section VII requirement gets three fixed rows:

- **Comply** — Yes/Partial/No
- **Implementation approach** — 2–4 sentences
- **Evidence** — Annex reference (e.g. `V-04`)

### Bidder-specific fields

- Marked as `[[PLACEHOLDER]]`
- One `grep` reveals every value to fill in
- Nothing to invent, nothing to forget

</div>

<div>

### What's included

- All 11 module clauses answered
- All 28 required recruitment reports mapped
- 8 milestone **entry/exit criteria**
- **12-risk register** with impact × likelihood
- §16.5 formal wording for **Paper D value-adds**
- Integration matrix (GSIS, Pag-IBIG, PhilHealth, SSS, BIR, CSC, DBM, DICT, NPC)

### Length

- ~56 KB · 45-minute read
- 8 rendered PDF sections
- Cross-linked to Papers A & C

</div>

</div>

---

# Risk register — the twelve tracked risks

<div class="text-xs pt-2">

| # | Risk | Impact | Likelihood | Mitigation anchor |
|---|---|---|---|---|
| R1 | Payroll cutover data loss | Critical | Medium | **M6 parallel-run gate** + anomaly detector (D §4) |
| R2 | Regulator-triggered rework (CSC/DBM/BIR) | High | High | 90-day adaptation SLA · versioned rule engine |
| R3 | Ghost / duplicate employees | High | Medium | PhilSys eKYC · payroll anomaly detector |
| R4 | Low-connectivity schools locked out | High | High | **Offline PWA + CRDT sync** (D §2) |
| R5 | Vendor lock-in on completion | High | Medium | Source escrow · community edition (D §7) |
| R6 | Data breach / privacy incident | Critical | Low | ISO 27001/27701 · hash-chain ledger (D §5) |
| R7 | UAT slippage compressing M7 | Medium | High | Continuous UAT from M3 · env parity |
| R8 | Integration partner delay (GSIS et al.) | Medium | Medium | Contract-first mocks · fallback batch mode |
| R9 | Adoption failure at school level | High | Medium | Bilingual UI + SMS/USSD (D §1) |
| R10 | LLM misuse or hallucination | Medium | Low | Self-hosted, retrieval-only Copilot (D §3) |
| R11 | Scope creep from module 4–11 discovery | Medium | High | Fixed inception window · change-control |
| R12 | Post-audit COA findings on disbursement | High | Medium | Anomaly detector + transparency portal (D §6) |

</div>

---
layout: section
routeAlias: paper-c
---

# Paper C
## Architecture & Data Model

<div class="opacity-70 pt-4">
C4 diagrams, PostgreSQL DDL, and event flows
</div>

<SectionNav current="C" />

---

# C4 · System context

```mermaid {scale: 0.6}
graph TB
    teacher[👤 Teacher / Employee<br/>1M+ users]
    hro[👤 HR Officer<br/>CO / RO / SDO]
    payroll[👤 Payroll Officer]
    applicant[👤 External Applicant]
    exec[👤 Executive / Auditor]

    hris[["🏛️ <b>DepEd HRIS</b><br/>Modular monolith<br/>Core HR · Payroll · Recruitment"]]

    subgraph externals [External systems]
        philsys[PhilSys<br/>eKYC / SSO]
        gsis[GSIS]
        pagibig[Pag-IBIG]
        philhealth[PhilHealth]
        sss[SSS]
        bir[BIR]
        csc[CSC]
        dbm[DBM]
        landbank[Landbank<br/>disbursement]
    end

    teacher --> hris
    hro --> hris
    payroll --> hris
    applicant --> hris
    exec --> hris

    hris --> philsys
    hris --> gsis
    hris --> pagibig
    hris --> philhealth
    hris --> sss
    hris --> bir
    hris --> csc
    hris --> dbm
    hris --> landbank

    classDef system fill:#0284c7,stroke:#0369a1,color:#fff,stroke-width:2px
    classDef ext fill:#e2e8f0,stroke:#64748b,color:#0f172a
    class hris system
    class philsys,gsis,pagibig,philhealth,sss,bir,csc,dbm,landbank ext
```

---

# C4 · Container view

```mermaid {scale: 0.55}
graph TB
    subgraph edge [Edge]
        web[Web SPA<br/>+ Offline PWA]
        mobile[Mobile client]
        kiosk[School kiosk]
        sms[SMS / USSD gateway]
    end

    apigw[API Gateway<br/>OAuth2 / OIDC]

    subgraph mono [HRIS modular monolith]
        corehr[Core HR + ESS]
        recruit[Recruitment]
        payroll[Payroll engine]
        perf[Performance & L&D]
        report[Reporting + retrieval]
        workflow[BPMN workflow<br/>engine]
    end

    keycloak[Keycloak<br/>MFA · RBAC · ABAC]
    bus[[Event bus]]
    pg[(PostgreSQL 16<br/>HA · RLS)]
    redis[(Redis)]
    search[(OpenSearch)]
    object[(Object storage<br/>201 files)]

    web --> apigw
    mobile --> apigw
    kiosk --> apigw
    sms --> apigw
    apigw --> corehr
    apigw --> recruit
    apigw --> payroll
    apigw --> perf
    apigw --> report

    corehr --> workflow
    recruit --> workflow
    payroll --> workflow

    corehr --> pg
    recruit --> pg
    payroll --> pg
    perf --> pg
    report --> search
    report --> pg

    corehr --> bus
    payroll --> bus
    recruit --> bus

    apigw --> keycloak
    corehr --> redis
    corehr --> object

    classDef store fill:#fef3c7,stroke:#d97706,color:#78350f
    classDef svc fill:#dbeafe,stroke:#1d4ed8,color:#1e3a8a
    class pg,redis,search,object store
    class corehr,recruit,payroll,perf,report,workflow svc
```

---

# Data model · three bounded contexts

<div class="grid grid-cols-3 gap-4 pt-2 text-sm">

<div class="context-card">

### 🧑 Core HR

<div class="text-xs opacity-80">

- `employee`
- `employment_history`
- `plantilla_item`
- `assignment`
- `education`, `eligibility`, `training`
- `leave_credit`, `leave_ledger`
- `document` (201 file)

</div>

<div class="text-xs opacity-60 pt-2">Owns identity, employment, ESS</div>

</div>

<div class="context-card">

### 💰 Payroll

<div class="text-xs opacity-80">

- `payroll_cycle`
- `earning`, `deduction`
- `payslip`
- `gsis_remit`, `philhealth_remit`
- `sss_remit`, `bir_remit`
- `disbursement_batch`
- `anomaly_flag` *(D §4)*

</div>

<div class="text-xs opacity-60 pt-2">Owns money movement + regulator remittance</div>

</div>

<div class="context-card">

### 📋 Recruitment

<div class="text-xs opacity-80">

- `posting`, `csc_form_9`
- `application`, `applicant`
- `screening`, `interview`
- `selection_board`
- `appointment`, `oath`
- 28 report views

</div>

<div class="text-xs opacity-60 pt-2">Owns hiring · issues appointment events</div>

</div>

</div>

<div class="pt-6 text-xs opacity-70">
~1,000 lines of PostgreSQL 16 DDL · <strong>row-level security</strong> per organisational scope ·
<strong>cross-schema event handoffs</strong> (appointment → employee, employee → payroll) ·
report-coverage traceability included.
</div>

<style>
.context-card {
  @apply p-4 rounded-lg border border-gray-200 dark:border-gray-700;
  background: rgba(148,163,184,0.05);
}
</style>

---
layout: section
routeAlias: paper-d
---

# Paper D
## Value-Added Components

<div class="opacity-70 pt-4">
Eight differentiators offered at <strong>zero incremental cost</strong> to the ABC
</div>

<SectionNav current="D" />

---

# The three gates every VAC had to pass

<div class="grid grid-cols-3 gap-6 pt-6">

<div class="gate-card">
  <div class="text-3xl">🎯</div>
  <div class="text-lg font-bold pt-2">1 · Documented pain</div>
  <div class="text-sm opacity-80 pt-1">
    PBD or operating context proves the need — but leaves the solution unpriced.
  </div>
</div>

<div class="gate-card">
  <div class="text-3xl">📅</div>
  <div class="text-lg font-bold pt-2">2 · Fits 365 days</div>
  <div class="text-sm opacity-80 pt-1">
    Slots into an existing milestone. Zero displacement of base scope.
  </div>
</div>

<div class="gate-card">
  <div class="text-3xl">⚖️</div>
  <div class="text-lg font-bold pt-2">3 · Survives audit</div>
  <div class="text-sm opacity-80 pt-1">
    Passes CSC, COA, NPC, DICT review with no extra legal or procurement action.
  </div>
</div>

</div>

<div class="pt-8 text-sm opacity-70 text-center">
Ideas that failed any gate are recorded but <strong>not offered</strong> —
a VAC that becomes a scope conversation is a liability, not a differentiator.
</div>

<style>
.gate-card {
  @apply p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center;
  background: rgba(148,163,184,0.05);
}
</style>

---

# The eight value-adds

<div class="grid grid-cols-2 gap-3 pt-2 text-sm">

<div class="vac"><b>1 · Bilingual UI + SMS/USSD</b><br/><span class="opacity-70">Filipino, Cebuano, Ilocano · payslip via feature-phone</span></div>

<div class="vac"><b>2 · Offline-first PWA + CRDT sync</b><br/><span class="opacity-70">Zero data loss under 72-h partition · schools + kiosks</span></div>

<div class="vac"><b>3 · HR Copilot (self-hosted LLM)</b><br/><span class="opacity-70">Llama-3.1 / Qwen-2.5 · retrieval-grounded · in DMZ</span></div>

<div class="vac"><b>4 · Payroll anomaly detector</b><br/><span class="opacity-70">M6 parallel-run gate · ghost/dupe/drift detection</span></div>

<div class="vac"><b>5 · Hash-chained audit ledger</b><br/><span class="opacity-70">Estonia X-Road pattern · tamper-evident every write</span></div>

<div class="vac"><b>6 · Public transparency portal</b><br/><span class="opacity-70">Georgia PSB pattern · anonymised appointment feed</span></div>

<div class="vac"><b>7 · 10-year source escrow + community edition</b><br/><span class="opacity-70">Kills vendor lock-in · discharges COA finding class</span></div>

<div class="vac"><b>8 · Teacher-to-school placement optimiser</b><br/><span class="opacity-70">Chile SIGE pattern · CP-SAT solver · advisory</span></div>

</div>

<div class="pt-6 text-xs opacity-70 text-center">
Formally worded in <b>Paper B §16.5</b> · every VAC ties to an Annex <code>V-##</code> with evidence.
</div>

<style>
.vac { @apply p-3 rounded border border-gray-200 dark:border-gray-700; background: rgba(2,132,199,0.05); }
</style>

---
layout: two-cols
---

# Deep-dive · HR Copilot

**What.** Conversational assistant grounded in the 201 file store,
plantilla, DepEd Orders, and CSC memoranda.

**Example.** *"How many secondary teachers in Region VIII are eligible
for reclassification this fiscal year?"* — answer with cited passages,
never free-text.

**Deployment.** Self-hosted **Llama-3.1-8B-Instruct** or
**Qwen-2.5-7B-Instruct** class model inside the **DepEd DMZ** — no data
leaves the perimeter, RA 10173 satisfied by construction.

**Milestones.** Retrieval index at M5, assistant UI + guardrails at M7.

::right::

# Deep-dive · Anomaly detector

**What.** Statistical + rules-based detector runs against every
payroll cycle **before** disbursement is authorised.

**Flags.** Ghost employees · duplicate bank accounts · out-of-band
net-pay deltas · deduction imbalances · GSIS/BIR/PhilHealth
remittance drift · time-clock anomalies.

**Why it wins.** Turns the mandatory M6 parallel-run from a compliance
chore into a **fraud-prevention asset** — directly reduces the
disbursing officer's personal exposure.

**Milestones.** Trained at M4 on legacy data · gated at M6 ·
production at M8.

---
layout: section
routeAlias: paper-e
---

# Paper E
## International Benchmarks

<div class="opacity-70 pt-4">
Government HRIS ≥ 100,000 employees · deployed in production · English-accessible sources
</div>

<SectionNav current="E" />

---

# Education-department analogues

<div class="text-xs pt-2">

| System | Country | Scale | Signature idea | Applies to |
|---|---|---|---|:-:|
| **Shala Darpan + UDISE+** | India | ~9 M teachers | Aadhaar eKYC dedupe · SMS-first self-service | D §1 |
| **DIKSHA** | India | 4 M+ teachers | Training completion → appraisal directly | D §14 |
| **TSC + TPAD** | Kenya | ~340 K teachers | Mobile-first appraisal for field connectivity | D §2 |
| **PERSAL / PILIR** | South Africa | 1.2 M civil servants | Longest-running large public payroll on continent | A · C |
| **SNED + SIGE** | Chile | ~240 K teachers | **CP-SAT solver** for teacher placement | **new VAC #8** |
| **Novopay (rebuild)** | New Zealand | ~110 K teachers | Reference for payroll parallel-run at scale | A M6 · B §9 |

</div>

<div class="pt-4 text-xs">

### Adjacent inspiration

**NHS ESR** (UK, 1.5 M) · **HRMIS** (Malaysia, 1.6 M) · **HRP@Gov / OneCV** (Singapore) ·
**X-Road / eesti.ee** (Estonia) · **e-People** (Korea) · **NFC** (US federal) ·
**SAPK / SIASN** (Indonesia, 4.2 M) · **PSB HR portal** (Georgia).

</div>

---

# Six patterns to borrow · three disasters to avoid

<div class="grid grid-cols-2 gap-8 pt-2 text-sm">

<div>

### ✅ Borrow

1. **India** — Aadhaar-linked eKYC → PhilSys dedupe *(D §13)*
2. **Kenya** — Mobile-first TPAD → offline PWA *(D §2)*
3. **Chile** — CP-SAT teacher placement → **new VAC #8**
4. **NHS ESR** — SSO + LMS at 1.5 M scale *(D §14)*
5. **Malaysia** — BPMN workflow engine at 1.6 M scale *(Paper C)*
6. **Estonia** — Per-query audit log → **hash-chain ledger** *(D §5)*

</div>

<div>

### ❌ Avoid — and cite by name

- **Novopay** (NZ, 2012) — no parallel run
  → **Anchor the M6 gate.**
- **UK NHS "National Programme for IT"** (2011)
  → Avoid mega-monolith · anchor bounded contexts.
- **Queensland Health payroll** (2010) — untested go-live
  → Anchor UAT continuity from M3.

</div>

</div>

<div class="pt-6 text-xs opacity-70 text-center">
Naming disasters in <b>Paper B §15 Risk Management</b> signals maturity —
evaluators recognise them.
</div>

---
layout: section
routeAlias: paper-f
---

# Paper F
## Delivery Plan, Infrastructure & Cost Model

<div class="opacity-70 pt-4">
Is PHP 500 M realistic for what the PBD asks? Bottom-up model at 2026 PH rates.
</div>

<SectionNav current="F" />

---

# The team · 69 FTE at peak · fully-loaded 2026 PH rates

<div class="grid grid-cols-2 gap-6 pt-2 text-xs">

<div>

| Function | Count | PHP/mo |
|---|---:|---:|
| Program leadership | 3 | 756,000 |
| Architecture | 2 | 621,000 |
| Engineering leadership (Tech Leads) | 3 | 729,000 |
| Senior engineering | 10 | 1,890,000 |
| Mid engineering | 14 | 1,701,000 |
| Junior engineering | 6 | 445,500 |
| Platform / SRE | 4 | 837,000 |
| Data + DB | 4 | 769,500 |
| Security | 2 | 513,000 |
| QA (leads + engineers) | 10 | 1,161,000 |
| Product / BA | 4 | 567,000 |
| Design | 3 | 384,750 |
| Documentation | 2 | 175,500 |
| Adoption / trainers | 4 | 432,000 |
| Migration | 2 | 310,500 |
| **Peak** | **69** | **PHP 11.3 M / mo** |

</div>

<div class="text-sm opacity-90">

### Rate assumptions

- **Loaded rates** (base × 1.35) — 13th month, HMO, SSS/PhilHealth/Pag-IBIG,
  retirement, equipment.
- **Median 2026 PH-market values** from WTW, JobStreet PH, Kalibrr.
- **In-house team**, no subcontracting (SCC clause 7).
- Consulting-firm rates (T&M) would be **1.8–2.5×** these numbers —
  outside the ABC.

### Curve, not level-loaded

- **M1:** 12 FTE (inception, hiring)
- **M2:** 42 FTE (architecture)
- **M3–M5 peak:** 69 FTE
- **M7:** 40 FTE (UAT + training)
- **Build total: PHP 102 M** over 12 months
- **Warranty year: 17.5 FTE, PHP 40 M** over 12 months

</div>

</div>

<div class="pt-4 text-xs opacity-60 text-center">
Full role-by-role table and monthly curve: <b>Paper F §F.3 · §F.4</b>.
</div>

---

# Infrastructure · on-premises sizing

<div class="grid grid-cols-2 gap-6 pt-2 text-xs">

<div>

### Design point

- **80,000 concurrent users** (1.5× historical peak)
- **P95 ≤ 3 s** for core transactions
- **6,700 req/s** API-tier peak
- **99% uptime** excluding scheduled maintenance
- **RTO 4 h · RPO 15 min** for DR

### Production DC (Central Office)

- Kubernetes: 3 master + 12 worker (32 vCPU / 128 GB each)
- **PostgreSQL 16**: primary + sync + async replica (32 vCPU / 256 GB / 4 TB NVMe)
- Redis 3-node · OpenSearch 3-node · Ceph object storage (80 TB usable)
- WAF appliance HA · NGFW HA · dedicated backup server
- **CAPEX PHP 58.3 M**

</div>

<div>

### DR site (colo or GovCloud PH)

- 40% capacity warm-standby
- Streaming replication, per-15-min PITR
- Single WAF + HA firewall
- **CAPEX PHP 25.8 M**

### Non-prod environments

- DEV · SIT · UAT · Training envs
- 20–40% of prod sizing each
- **CAPEX PHP 16.9 M**

### Total infrastructure CAPEX

<div class="text-2xl font-bold text-sky-500 pt-2">PHP 101 M</div>
<div class="opacity-70">Plus PHP 32.5 M OPEX over 24 months (power, bandwidth, warranties, colo).</div>

</div>

</div>

---

# On-prem vs cloud · 24-month TCO

<div class="grid grid-cols-2 gap-8 pt-4 text-sm">

<div>

### On-premises (recommended)

- CAPEX: **PHP 101 M** (year 1)
- OPEX 24 mo: **PHP 32.5 M**
- Residual value at 24 mo: **~ PHP 45 M**
- **Net 24-mo TCO: ~ PHP 88.5 M**
- Data residency: **inside DepEd DC**
- FX exposure: **none**
- Hardware amortised over 5 years → drops to **~ PHP 20 M/yr from year 3**

</div>

<div>

### Full cloud (AWS Manila / GovCloud PH)

- CAPEX: 0
- OPEX 24 mo (RI-heavy): **PHP 95.1 M**
- Residual value: 0
- **Net 24-mo TCO: PHP 95.1 M**
- FX exposure: **material** (USD-denominated)
- No 5-year amortisation benefit
- Cheaper in months 1–24 by **~ PHP 6.6 M only** if hardware is fully written off

</div>

</div>

<div class="pt-8 text-sm text-center opacity-90">
<b>Recommendation:</b> on-prem primary at DepEd Central Office, <b>GovCloud PH for DR only</b>.
Cross-over point where on-prem becomes cheaper: <b>month 30</b>.
</div>

---

# The cost breakdown · PHP 421 M against a PHP 500 M ABC

<div class="grid grid-cols-2 gap-6 pt-2 text-xs">

<div>

### Build phase (M1–M8, 12 mo)

| Bucket | PHP | % |
|---|---:|---:|
| Personnel | 102.0 M | 26.4% |
| Infra CAPEX (on-prem) | 101.0 M | 26.1% |
| Infra OPEX (12 mo) | 16.3 M | 4.2% |
| Software + licensing | 10.4 M | 2.7% |
| Training + change mgmt | 20.5 M | 5.3% |
| Project overhead (8%) | 20.0 M | 5.2% |
| Compliance + audit | 6.5 M | 1.7% |
| Insurance | 2.8 M | 0.7% |
| Bond financing | 2.5 M | 0.6% |
| Contingency (7%) | 17.5 M | 4.5% |
| Margin (12%) | 40.8 M | 10.6% |
| **Build** | **PHP 340.3 M** | **88.0%** |

</div>

<div>

### Warranty year (12 mo post go-live)

| Bucket | PHP |
|---|---:|
| Personnel (17.5 FTE) | 40.2 M |
| Infra OPEX (12 mo) | 16.3 M |
| Software (year 2) | 10.4 M |
| Overhead + contingency | 6.9 M |
| Margin (10%) | 7.4 M |
| **Warranty** | **PHP 81.1 M** |

### Total

<div class="pt-2 text-lg">
Build + warranty · <b class="text-sky-500">PHP 421.4 M</b> · <span class="opacity-70">84.3% of ABC</span>
</div>
<div class="pt-1 text-lg">
Bid headroom · <b class="text-emerald-500">PHP 78.6 M</b> · <span class="opacity-70">15.7%</span>
</div>
<div class="pt-3 opacity-80">
Headroom absorbs FX, hardware inflation, or funds a 5% below-ABC competitive bid at ~ PHP 475 M.
</div>

</div>

</div>

<div class="pt-4 text-xs opacity-60 text-center">
Full sensitivity analysis + comparables (Novopay, HRMIS, SIASN):
<b>Paper F §F.10 · §F.13</b>.
</div>

---
layout: section
routeAlias: summary
---

# Bringing it together

<SectionNav current="·" />

---

# What this analysis gives a bidder

<div class="grid grid-cols-2 gap-8 pt-2 text-sm">

<div>

### Before submission

- **Paper A** — verify no PBD clause is misunderstood
- **Paper B** — fill `[[PLACEHOLDER]]` fields · sign
- **Paper C** — hand to engineering as the reference
- **Paper D** — the differentiator narrative
- **Paper E** — the evaluator's language

### On day 1 of NTP

- PostgreSQL DDL ready to migrate
- C4 model ready to hand to teams
- Risk register ready to track
- Milestone entry/exit criteria pre-agreed

</div>

<div>

### What it does **not** replace

- Legal review of SCC clauses
- Bidder-specific pricing model
- Formal ISO 27001 certification evidence
- Client-specific integration credentials
- Signed subcontractor / partner MoUs

<div class="pt-4 text-xs opacity-70">
Every deliverable is Markdown-first, PDF-rendered, and
version-controlled at <b>github.com/DennisPitallano/deped-hris-analysis</b>.
</div>

</div>

</div>

---
layout: center
class: text-center
---

# Thank you

<div class="pt-6 opacity-80">

📄 Live site · [dennispitallano.github.io/deped-hris-analysis](https://dennispitallano.github.io/deped-hris-analysis)

💻 Source · [github.com/DennisPitallano/deped-hris-analysis](https://github.com/DennisPitallano/deped-hris-analysis)

🔗 Sibling analysis · [DTI REI (105 M · Managed Services)](https://dennispitallano.github.io/deped-dti-analysis)

</div>

<div class="pt-12 text-xs opacity-60">
Prepared by <b>deped-hris</b> · Solutions architect — HRIS & data platforms<br/>
Independent public analysis · no official association with DepEd is implied
</div>
