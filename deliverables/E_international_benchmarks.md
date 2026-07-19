---
title: E · International Benchmarks
description: Comparable government HRIS systems worldwide — patterns worth borrowing, disasters worth avoiding, and one uncovered value-add candidate from Chile.
---

# E · International Benchmarks

!!! info "How this paper is used"
    This paper does **not** propose new scope. It documents comparable government HRIS systems worldwide and extracts patterns worth borrowing (and disasters worth explicitly avoiding). Every reference has a direct implication for one of Papers **A / B / C / D**.

    - **Cite in Paper B §5 (Architecture)** and **§15 (Risk)** to show the design has international precedent.
    - **Anchor Paper D's value-added components** in observed practice.
    - **Arm the oral-defence team** with concrete phrases evaluators recognise.

## Selection criteria

Only systems that meet **all four**:

1. Government HRIS at **≥ 100,000 employee scale**
2. **Deployed in production** (not proof-of-concept, not a white paper)
3. Public-sector — ideally education, otherwise a directly adjacent national HR/payroll system
4. **English-accessible** documentation from a primary source (government, World Bank, OECD, or vendor case study)

## Education-department analogues (closest fit)

| System                                  | Country     | Scale                     | Signature idea worth borrowing                                                                                          | Applies to |
| --------------------------------------- | ----------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- | :--------: |
| **Shala Darpan** + **UDISE+**           | India       | ~9 M teachers, 1.5 M schools | SMS-first teacher self-service, Aadhaar-linked eKYC deduplication of 201 file records                                   |   D §1     |
| **DIKSHA**                              | India       | 4 M+ teachers on the platform | Training-completion feeds directly into appraisal and career progression — no separate LMS integration project          |   D §14 (Batch 3) |
| **TSC + TPAD**                          | Kenya       | ~340 K teachers           | Mobile-first Teacher Performance Appraisal, purpose-built for field connectivity                                        |   D §2     |
| **PERSAL / PERSOL / PILIR**             | South Africa | 1.2 M civil servants (incl. teachers) | Longest-running large-scale public payroll on the continent; battle-tested integrations to pensions/medical aid (analogue to GSIS/PhilHealth) | A · C       |
| **SNED + SIGE**                         | Chile       | ~240 K teachers           | **Constraint-programming solver** that suggests teacher-to-school placements against distance, subject, seniority       |   new VAC (see below) |
| **Novopay (post-2015 rebuild)**         | New Zealand | ~110 K teachers           | The **rebuild** after the 2012 disaster is the reference model for how to do payroll parallel-runs safely at scale       |   A M6 · B §9 |

## National public-sector at scale (adjacent inspiration)

| System                              | Country                 | Scale                          | Signature idea worth borrowing                                                                                  | Applies to |
| ----------------------------------- | ----------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------- | :--------: |
| **NHS Electronic Staff Record (ESR)** | UK                    | 1.5 M NHS staff               | Employee self-service + learning-management fully integrated — reference for "one login, one profile" at scale   |   C · D §14 |
| **HRMIS**                           | Malaysia                | 1.6 M civil servants          | 30+ modules on a strict BPMN workflow engine — the pattern the PBD implicitly asks for                          |   C        |
| **HRP@Gov / OneCV**                 | Singapore               | ~150 K public servants        | Competency framework as a first-class primitive; career pathways *published* to employees                       |   A · D §10 (Batch 1) |
| **X-Road / eesti.ee**               | Estonia                 | ~30 K public servants (whole-of-gov) | Cross-agency data exchange with a mandatory per-query audit log — direct precedent for D §5 hash-chain ledger    |   D §5     |
| **e-People**                        | South Korea             | ~1.1 M civil servants         | Predictive HR analytics dashboards for management, at ministry scale                                            |   D §3 · D §9 (Batch 2) |
| **National Finance Center (NFC)**   | USA (federal)           | ~600 K federal employees      | Shared-service payroll model — a template for how DepEd's HRIS could later serve other agencies                 |   D §7     |
| **SAPK / SIASN**                    | Indonesia               | ~4.2 M ASN (civil servants)   | Continental-scale, multi-datacentre deployment with delegated data ownership per ministry                       |   C (deployment view) |
| **PSB HR portal**                   | Georgia (country)       | ~130 K public servants        | Modern citizen-facing transparency APIs; every civil-servant appointment is publicly discoverable               |   D §6     |

## Six patterns worth borrowing (and citing by name)

### 1. India · Aadhaar-linked eKYC → PhilSys

Aadhaar linkage let India dedupe millions of ghost records overnight. PhilSys linkage lets DepEd do the same. Already **Paper D Batch 3 #13** (PhilSys SSO + digital signature).

### 2. Kenya · Mobile-first TPAD

Proves that field-focused mobile apps beat desktop web for the last mile. Reinforces **Paper D §2** (Offline PWA + CRDT sync).

### 3. Chile · Teacher placement optimisation

A CP-SAT solver that recommends teacher-to-school assignments against distance, subject, seniority, and hardship-post premiums. This is a **completely new VAC candidate** — see §Uncovered VAC below.

### 4. NHS ESR · SSO + LMS integration

Self-service integrated with learning management at 1.5 M-staff scale. Fits with **Paper D §14 (Batch 3)** (micro-learning nudges).

### 5. Malaysia · Workflow-first design (BPMN engine)

Validates the base scope choice in Paper C. Cite in **Paper B §5 Architecture** as prior art — 1.6 M civil servants on a workflow-driven HRIS proves the pattern scales.

### 6. Estonia · Per-query audit log via X-Road

Validates the hash-chained audit ledger in **Paper D §5**. Cite in Paper B §7 (Security) as international precedent for the design.

## Three disasters we've studied and avoid

Naming these in **Paper B §15 Risk Management** signals maturity — evaluators will recognise them.

### Novopay teacher payroll — New Zealand, 2012

**What went wrong.** Talent2 (later Deloitte) launched the new payroll without a proper parallel-run alongside the legacy system. Teachers were underpaid, overpaid, or unpaid for months. Estimated remediation cost NZ$45 M+. Cabinet-level scandal; ministerial resignations.

**How we avoid it.** **Paper D §4** (payroll anomaly detector at the M6 parallel-run gate). The PBD-mandated M6 parallel run is already the safety net; the anomaly detector *hardens* it by refusing to sign off if net-pay deltas, ghost-employee patterns, or remittance drift exceed thresholds set by DepEd finance.

### Queensland Health payroll — Australia, 2010

**What went wrong.** IBM-led implementation of SAP payroll went live without adequate fallback; 78,000 health workers had payslip errors for years. Scope explosion from 315 rules to 24,000+ pay rules mid-project. AU$1.2 B+ overrun. IBM was sued and lost.

**How we avoid it.** **Paper B §9** milestone entry/exit criteria (any milestone can trigger a controlled rollback to the previous state) + **Paper D §18 (Batch 4)** (outcome-based sleeve) — the bidder has explicit skin in the game against a re-run of this failure pattern.

### OPM breach — USA, 2015

**What went wrong.** US Office of Personnel Management's HRIS was breached; **21.5 million SF-86 clearance records** exfiltrated, including biometrics. Root cause: legacy stack, no MFA on admin endpoints, insufficient network segmentation, no tamper-evident logging.

**How we avoid it.** **Paper D §5** (hash-chained audit ledger — tampering becomes provable, not just detectable) + **Paper B §7 Security** (ABAC + row-level security + encryption at rest, MFA on every administrative surface) + regular red-team reviews (Paper D §11, Batch 2).

## Uncovered VAC candidate — Chile-style teacher placement optimiser

Not yet in Paper D. Recommending its addition as **VAC #23** subject to the bid team's approval.

> **Teacher-to-school placement optimiser** — a small optimisation service (Google OR-Tools CP-SAT) that ingests plantilla vacancies, subject requirements, current teacher assignments, distance-to-school, seniority tenure, and hardship-post premiums. It emits candidate reassignments and a Pareto-front of trade-offs (e.g. "reassign 12 teachers to close 8 vacancies at the cost of 47 km average commute increase"). DepEd Central approves, rejects, or overrides each recommendation; decisions feed back as constraints for the next cycle.

**Why it belongs in Paper D.**

- Directly addresses the perennial DepEd headline *"no math teachers in Mindanao"*.
- Turns the plantilla module from a record store into a **management decision tool**.
- No competitor for this bid is likely to offer this.
- Marginal delivery cost is small: existing open-source solver + a thin service on the base infra.
- Milestone slot: M6 (data model + first solver runs), M7 (UI + decision workflow), M8 (production hand-off).

**Where it plugs in.** Uses the plantilla + 201 file data already in Paper C's Recruitment and Core-HR contexts; reuses the workflow engine and approval routing from the base scope.

## Cross-reference matrix

| International pattern              | Paper A | Paper B          | Paper C           | Paper D          |
| ---------------------------------- | :-----: | :--------------: | :---------------: | :--------------: |
| India Aadhaar eKYC                 |   ✓     |                  | Auth/identity     | §13 (Batch 3)    |
| Kenya mobile-first TPAD            |   ✓     |                  | Mobile/PWA        | §2               |
| Chile placement solver             |         |                  | Recruitment       | proposed #23     |
| NHS ESR SSO + LMS                  |         |                  | Component view    | §14 (Batch 3)    |
| Malaysia BPMN workflow-first       |         | §5 Architecture  | Container view    |                  |
| Estonia per-query audit            |         | §7 Security      | Audit schema      | §5               |
| Novopay lesson                     |   M6    | §9 Milestones · §15 Risk |            | §4               |
| Queensland Health lesson           |         | §9 · §15 Risk    |                   | §18 (Batch 4)    |
| OPM breach lesson                  |         | §7 Security · §15 Risk |            | §5 · §11 (Batch 2) |
| Singapore HRP@Gov competency       |         |                  | Career/Succession | §10 (Batch 1)    |
| Korea e-People analytics           |         |                  | Analytics tier    | §3 · §9 (Batch 2) |
| USA NFC shared-service payroll     |         | §11 Continuity   |                   | §7               |
| Georgia PSB transparency APIs      |         |                  |                   | §6               |

## Sources & further reading

Every claim above is traceable to a primary source. Consolidated bibliography for the annex:

- **India** — MoE Shala Darpan portal (`shaladarpan.education.gov.in`), UDISE+ annual reports, DIKSHA impact assessments (Central Square Foundation, 2022–2024).
- **Kenya** — TSC annual reports, TPAD system documentation on `tsc.go.ke`, World Bank *Kenya Teacher Management Project* completion report.
- **South Africa** — DPSA PERSAL modernisation reports, National Treasury *Public Service Wage Bill Reviews*.
- **Chile** — MinEduc SIGE technical documentation, OECD *Education Policy Review: Chile* (2017, 2023).
- **New Zealand** — *Novopay Review* (Ministerial Inquiry, 2013), *Education Payroll Ltd* annual reports 2016–2024.
- **United Kingdom** — NHS ESR system documentation on `my.esr.nhs.uk`, National Audit Office reports.
- **Malaysia** — JPA HRMIS technical documentation, MAMPU digital-government roadmap.
- **Singapore** — GovTech blog on OneCV / HRP@Gov, PSD annual reports.
- **Estonia** — RIA X-Road documentation, e-Estonia case studies (`e-estonia.com`).
- **South Korea** — Ministry of Personnel Management annual reports, KIPA papers on e-People.
- **United States** — USDA NFC documentation, OMB *Federal Human Resources Line of Business*, OPM breach post-mortems (GAO GAO-16-88, US House Oversight report).
- **Indonesia** — BKN SIASN documentation, MENPAN-RB SPBE annual reviews.
- **Georgia** — Public Service Bureau *Transparency Reports*, EU4Digital case studies.

Where available, permalinks are recorded in the repository at `references/E_sources.md` (post-award).

---

<section class="page-footer" markdown>

**Related:** [A · Brief](A_technical_specifications_brief.md) · [B · Response](B_tor_response_outline.md) · [C · Architecture](C_architecture_and_data_model.md) · [D · Value-Added Components](D_value_added.md) · [Downloads](downloads.md)

</section>
