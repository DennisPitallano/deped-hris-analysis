# (A) Technical Specifications Brief — DepEd HRIS

Extracted and consolidated from `PBD_HRIS_For-Posting.pdf` (Project ID **2026C-ICTS2-002-B5-CB-034**). Section references map to the PBD.

---

## A.1 Project fundamentals

| Item | Value |
|---|---|
| Project title | Human Resources Information System (HRIS) |
| Procuring entity | Department of Education (DepEd), through **ICTS-SDD** (Information and Communication Technology Service – Solutions Development Division) |
| Funding source | GAA FY 2025 — DepEd Computerization Program (DCP) – SAGIP 2025 Continuing Fund |
| Approved Budget for the Contract (ABC) | **PHP 500,000,000.00** |
| Contract duration | **365 calendar days** from receipt of Notice to Proceed (NTP) |
| Delivery site | DepEd Central Office, TechZone Building, Malugay St., San Antonio, Makati City |
| Subcontracting | **Not allowed** (SCC clause 7) |
| Advance payment | **Not allowed** (SCC clause 10) |
| Payment method | Milestone-based, no Letter of Credit |
| Performance/warranty security | Bank guarantee **1–5% of Contract Price** |
| Liability cap | Aggregate liability capped at Contract Price (except criminal negligence, willful misconduct, IP infringement, defective goods repair/replace) |

## A.2 Scope of coverage

- **Organisational levels:** Central Office, Regional Offices, Schools Division Offices, District Offices, Schools (Elementary / JHS / SHS).
- **Population:** **> 1,000,000 employees**, covering plantilla, contract of service (COS), job order (JO), and other categories. Teaching, related-teaching, and non-teaching personnel.
- **Phased functional coverage (11 areas):**
  1. Personnel Information Management  *(detailed in TOR)*
  2. Applicant Portal  *(detailed in TOR)*
  3. Recruitment, Selection, and Placement (RSP)  *(detailed in TOR)*
  4. Employee Self-Service Portal
  5. Leave and Attendance Management
  6. Payroll (General, Special, Personnel Voucher)
  7. Performance Management (SPMS, IPCR, OPCR)
  8. Learning and Development
  9. Rewards and Recognition
  10. Employee Wellness and Welfare (incl. Health Profile)
  11. Succession Planning (incl. career progression)

Modules 4–11 will be finalised during inception via consultation with process owners, guided by DepEd policies and CSC/DBM standards.

## A.3 General (cross-cutting) specifications

| # | Requirement (paraphrased from TOR §4) |
|---|---|
| 4.1 | Modules seamlessly integrated on a **centralised, common database**; full interoperability via **standard APIs**; compatible with current and future DepEd platforms and oversight bodies. |
| 4.2 | **Electronic approval workflow** — highly customisable routing; variable levels per rank/position/request type; supports **digital signatures** and integration with DepEd e-signature via APIs. |
| 4.3 | **Built-in internal controls / business rules** — embedded validation, transactions blocked unless rules met; automated checks preventing errors, redundancies, rule violations. |
| 4.4 | **Online forms and audit controls** — electronic forms across all modules; attachments of any file type; **auto-carry data** across forms; auto-generated **control numbers** for audit trails. |
| 4.5 | **Inter-agency compliance** — DICT, CSC, DBM, NPC, etc.; system must adapt to new issuances **within 90 calendar days**; consultation, documentation, training, and immediate settlement of ICT security issues required. |

## A.4 Functional specifications — Modules detailed in the TOR

### Module 1 — Applicant Portal (external)  *(TOR §5.1)*

Key requirements:
- Publish job postings under CO or RO; auto-notify appropriate Recruitment Officer on submission.
- **Secure applicant account** required before submission.
- Applicants: view openings, submit applications, save jobs.
- Fill **CSC-format PDS** online; upload profile photo, application letter, **notarised PDS**.
- Recruitment Officers can **reopen withdrawn applications**.
- **Real-time application status** to applicants; email acknowledgement on submit.
- **Auto-reminder** to applicants every 6 months to update PDS/WES.
- Status categories: **Draft, Submitted, Ongoing, Appointed, Not Chosen**.

### Module 2 — Job Posting  *(TOR §5.2)*

- CO or RO officer creates postings based on approved **CSC Form 9**; system generates CSC Form 9 in-platform.
- Tag postings as **Publication** (external media) or **Internal** (agency site, bulletin, social media).
- Deadline setting, reminders, **bulk upload** via template.
- Minimum education, documentary requirements, JO handling, QS Manual updates.
- **Applications rejected after 5:00 PM** on deadline date.
- Auto-notify relevant personnel when a posting is published.
- Required tabs by type:
  - **Plantilla:** Personal Info, Education, Work Experience, L&D, Eligibility, References.
  - **Non-Plantilla (Casual):** Personal Info, Education, Work Experience, L&D, References.

### Module 3 — Job Opportunities (internal ESS)  *(TOR §5.3)*

- Self-service portal; dashboard shows all active openings (CO or RO).
- View posting details, apply directly.
- **Validate PDS/WES** vs required tabs; prompt update if incomplete.
- Track status in real time; cancel application anytime pre-processing; multiple applications allowed.

### Module 4 — Applicant Management  *(TOR §5.4)*

- Complete internal + external applicant list per posting.
- Generate PDS/WES.
- **Non-Plantilla flow:** Pre-Screening (Qualified/Not Qualified; docs: Complete/Incomplete/For Compliance/For Resubmission) → Endorsement → Issuance of Resolution → Appointment Papers → Submission to CSC.
- **Plantilla flow:** Pre-Screening (initial + review) → Competency-Based & IQ Exam Posting → Exam Administration (attendance) → Background Investigation → Notice of Panel Interview → Panel Interview → Board Deliberation (top-5) → Psychometric Exam Notice → Psychometric Evaluation → HR Endorsement → Endorsement of Qualified Candidates.
- Auto-emails at each transition.
- **Calendar view** of all scheduled recruitment activities, colour-coded, with tallies and drill-down to applicant details.
- **Candidates**: categorised lists (passed, not appointed, no regret sent), Matrix of Applicants, Rating Evaluation Sheet, List of Qualified Applicants, Demographic reports.
- **Application Assessment:** define criteria and ratings, compute average interview rating, PSB Secretariat ratings with auto-averages, background investigation records (≥3), external/internal handling, Applicant Assessment Form generation.

### Module 5 — Appointment Process  *(TOR §5.5)*

- Validate appointee's documentary compliance.
- Generate:
  - **CSC Form 33A** – Appointment Form (Regulated)
  - **Oath of Office**
  - **Certificate of Erasures / Alterations**
  - **HRMPSB Endorsement Report**
  - **Report on Appointments Issued**
- Notify appointee on release; email required documents list.
- Set orientation date, probationary period.
- **Alternate appointee** on withdrawal — requires uploaded Withdrawal Letter.

### Module 6 — New Hire Processing  *(TOR §5.6)*

- HR Records Officer processes appointees; generates PDS.
- Assigns **unique Employee Number**, **Biometric PIN**, work schedule, work location.
- Records **carry-over leave balances** from previous government agencies.
- Adds compensation/benefits/deductions above default packages.
- **Internal applicants:** skip new-hire processing; auto-create Work Experience in Personnel Management on Assumption Date.

### Module 7 — Reports Generation  *(TOR §5.7)*

Twenty-eight (28) required reports/forms including: Request for Publication of Vacant Positions, PDS, WES, Report on Appointments Issued, CSC Form 33A, Oath of Office, Certificate of Erasures/Alteration, HRMPSB Endorsement Report, Matrix of Applicants, Rating Evaluation Sheet, List of Qualified Applicants Demographics per Position, Endorsement Report, Profile of Applicants, Applicant Assessment Summary Form, Certificate of Assumption to Duty, List of Applications Received, List of Appointments, Certificate of the Absence of a Qualified Eligible, List of Pooling Candidates, List of Vacant Positions, Recruitment Aging and Processing Report, Status of Recruitment and Selection Process, Talent Sourcing, Interview Rating Sheet, Background Investigation Reporting, etc.

### Module 8 — Personnel Information Management (Core HR / 201 File)  *(TOR §5.8)*

- HR maintains complete **201 files**; central repository for all HR data.
- Stored data (min): Office/RO, Division, **Salary Grade & Tranches**, Position Title, Eligibility, Employment Status, Job Level, Plantilla/Non-Plantilla flag, **Account Codes**.
- **PDS** aligned with CSC prescribed format; sections: Personal, Employment/Work Experience, Family, Education, Eligibility, Voluntary Work, Training/Seminars, Awards/Other Info, References.
- **Employee history:** Employee ID, Date of Assumption, Position Title & Item Number, Salary Grade & Step, Office/Division/Section, Employment Status, Salary (monthly/quarterly/annually), Salary Adjustments and Step Increments, Allowances (**RATA, PERA**, others), Separation Date, Nature of Separation.
- **Compliance:** support DBM **PSIPOP**, salary differentials, step increments, loyalty pay; record **administrative cases and disciplinary actions**.
- **Prescribed reports:** Service Record, Distribution of Employees, Personnel Statistics/demographics, Certificate of Employment, Agency Plantilla, Employee Masterlist, Notice of Salary Adjustment, Notice of Step Increment, List of Employees entitled to Loyalty or Step Increment.
- **Forms management:** PDS, Leave Application, Monetization, **SALN**, CTO, Performance forms (**IPCRF, OPCRF**, monitoring/coaching, calibration, certificate), WES, Permission Slips/OB Passes, GSIS/Pag-IBIG/PhilHealth/SSS/BIR membership/loan/claim forms.
- **Analytics & visualisation:** HR dashboards, charts, statistical reports.
- **HR Actions & Appointments:** Promotion, Transfer, Reemployment, Reinstatement, Demotion (voluntary/disciplinary), Reclassification, Reassignment, Detail, Designation, Probationary, Item Number Change, Step Increment/Salary Adjustment, same-item Reinstatement, Coterminous appointments.
- **Employee feedback capture.**

## A.5 Generic specifications — Modules to be detailed at inception  *(TOR §6)*

### 6.2 Employee Self-Service Portal
- Update/view PDS and employment records.
- Access payslips, leave balances, benefits.
- Submit leave, travel authority, OB, time-off, monetization requests.
- View training, performance, recognition records.

### 6.3 Leave & Attendance Management
- File/route/approve leave per CSC rules.
- Attendance logging — **biometric device integration** and/or online attendance.
- Leave credit accrual and monitoring.
- CTO and overtime.
- Full CSC leave admin compliance.

### 6.4 Payroll (General, Special, Personnel Voucher)
- Payroll for plantilla and non-plantilla.
- Computation of taxes, **GSIS, Pag-IBIG, PhilHealth, SSS** contributions.
- Allowances, overtime, other deductions.
- Vouchers, disbursement schedules, remittance reports.
- **Full audit trail** and **parallel-run testing** before full go-live.

### 6.5 Performance Management (SPMS, IPCR, OPCR)
- Encode individual/office/organisational commitments.
- Monitoring, coaching, review, evaluation workflows.
- Auto-compute & consolidate ratings (KRAs; Core, Functional, Leadership competencies); segregate by cycle/office; include Office Improvement Development Plan and Individual Development Plan.
- Linkage to rewards, promotions, career, L&D.
- Compliance with CSC SPMS.

### 6.6 Learning and Development
- L&D needs identification, planning, scheduling.
- Training records, certifications, participation.
- **Individual Development Plans (IDPs)** tracking.
- L&D outcome evaluation.
- L&D interventions, **scholarship** admin.
- **Service Obligation Contracts** administration.
- PD program design/submit/review/approve aligned to **PPST / PPSSH / PPSS**.
- PD authorised providers management.
- Program implementation monitoring (attendance, outputs, completion).
- **Learning Management System** for **NEAP** core programs.

### 6.7 Rewards and Recognition
- Awards/incentives admin, incl. commendations/citations; consolidate nomination forms for CO and external bodies (CSC, CESB, Metrobank, etc.).
- Loyalty awards, step increments — automation via integration with service records.
- Merit-based recognition tied to performance results.

### 6.8 Employee Wellness and Welfare
- Track wellness programs (health, counselling, fitness).
- Manage welfare (insurance, emergency aid, employee aid).
- Monitor participation and impact.
- Capture **health profile** (basic health info, medical & family history, HMO/insurance) under strict privacy protocol for health data.
- Generate **statistical-only** reports for policy/program development.

## A.6 Implementation Plan requirement  *(TOR §7)*

- Submit Implementation Plan **within 30 calendar days** of NTP.
- Contents (min): Project Work Plan & Schedule, Module Deployment Roadmap, Resource Allocation, Risk Management Plan, Acceptance Criteria.
- Failure to submit within 30 days or omitting modules is a **breach** — grounds for penalties or termination.

## A.7 Data Governance  *(TOR §8)*

- **RA 10173 (Data Privacy Act 2012)** + IRR strict compliance.
- **NDA** for all Service Provider personnel; obligations survive contract.
- **Confidential information** = platform data, links, engagement metrics, dashboards, charts, and any derivative works — owned exclusively by DepEd.
- Security controls consistent with **ISO/IEC 27001:2013, ISO/IEC 27701:2019, NIST CSF**.
- **Audit rights** for DepEd (facilities, systems, processes).
- **Breach notification SLA:**
  - Containment: immediate.
  - Initial notification: **within 24 hours** of discovery.
  - Full incident report: **within 48–72 hours** of discovery (48 h in §8.3.3, 72 h in §9.5.4.3 — treat 48 h as the binding tighter deadline).
  - Full cooperation with DepEd and NPC.
- **Data return:** within 15 calendar days of termination/expiration; formats specified by DepEd (Excel, CSV, SQL dump, etc.); secure encrypted channels.
- **Certificate of Destruction:** notarised, within 30 calendar days after data return; covers backups, archives, temp files, and third parties.
- **Audit rights** persist up to 60 days post-termination.

## A.8 Service Level Agreement  *(TOR §9)*

**System availability & performance**
- **Uptime ≥ 99%** (excluding scheduled maintenance).
- Scheduled maintenance outside working hours; **72 h prior notice**.
- **Core transactions ≤ 3 seconds** under normal load (login, record retrieval, form submission).

**Regulatory compliance updates**
- New/revised issuances (DICT, CSC, DBM, etc.): compliance **within 90 calendar days**.
- Interim compliance mechanisms if delays.

**Data confidentiality (repeat of §8):** NDA required, ownership retained by DepEd, ISO 27001 / 27701 / NIST controls.

**Support & Incident Response SLAs:**

| Severity | Description | Response | Resolution |
|---|---|---|---|
| **P1 – Critical** | System-wide outage, payroll failure, data breach | **1 hour** | **24 hours** |
| **P2 – High** | Module unavailability, errors affecting majority of users | **2 hours** | **48 hours** |
| **P3 – Medium** | Functional errors with workaround | **4 hours** | **5 working days** |
| **P4 – Low** | Minor issues, cosmetic defects, user queries | **1 working day** | Next release/patch |

## A.9 Training & Documentation  *(TOR §10)*

- Training for end-users, HR personnel, administrators aligned to each deployment phase.
- Updated user manuals, administrator guides, process documentation with each release/enhancement.

## A.10 Reporting & Monitoring  *(TOR §11)*

- **Monthly** progress reports during implementation; **quarterly** operational reports afterwards.
- Audit trails of all user activities, data changes, and transactions, retrievable on demand.

## A.11 Structured Service & Incident Management  *(TOR §12 and §13)*

Mandatory embedded capability for HR service management:
- Capture all inquiries/requests/incidents (payroll, benefits, leave, policy, grievances) as **structured records**.
- **Role-based, granular access** to sensitive data (disciplinary, medical, performance).
- Integration with core HR data for automatic context.
- **Immutable audit trail** for compliance-critical workflows (grievances, investigations).
- SLA definition, tracking, and reporting per HR service.
- **Technical defect logging** — internal, auditable, with priority, tracking fields.
- **Bi-directional RESTful API** for future external support tool integration.
- **Structured export** (XML/JSON/CSV) of defect records.
- Auto status sync from external technical support platforms.
- **Root Cause Analysis** linkage for recurring incidents.

## A.12 Delivery milestones and payment schedule  *(SCC §11 + Section VI §4-5)*

| M# | Max window from NTP | Deliverable theme | Payment |
|---|---|---|---|
| **M1** | Day 30 | Mobilization | **10%** |
| **M2** | Day 90 | Project Inception, Product Proof, Technical Alignment, Implementation Planning | **20%** |
| **M3** | Day 150 | Release 1 — Core HR Foundation | **15%** |
| **M4** | Day 190 | Release 2 — Payroll, Leave, Attendance, ESS | **10%** |
| **M5** | Day 235 | Release 3 — Strategic Talent, Learning, Wellness, Rewards, Succession | **15%** |
| **M6** | Day 270 | Integrated Testing, Security Validation, Migration Readiness, Payroll Parallel Run | **10%** |
| **M7** | Day 300 (or earlier) | Pilot Deployment, Capacity Building, Documentation, SLA Readiness | **10%** |
| **M8** | Day 335–365 | Production Rollout, Final Handover, SLA Transition, Final Acceptance | **10%** |

- **No advance payment.**
- Payment only after full completion, submission, review, and **written acceptance**.
- No payment for: passage of time, NTP issuance, plans without acceptance, vanilla HRIS demo, mockups, deployment without test evidence, configuration without accepted stories, unsupported completion claims.
- **Liquidated damages** trigger: delays beyond **15 calendar days** without justification.

## A.13 Source code & continuity obligations  *(Section VI §15-16)*

Turnover MUST include, at minimum (31 items enumerated in the PBD):
1. Complete application source code, module source, custom extensions, API/integration source, middleware/connectors/adapters, data exchange scripts.
2. Database schema, migration scripts, seed/reference/config data.
3. Report templates, form templates, workflow definitions, business rule configs.
4. Build/deploy/rollback scripts, environment config templates.
5. Automated + manual test scripts, test data, package manifests, **third-party library and license inventory**.
6. Repository access credentials, administrator credentials.
7. System setup, local dev setup, production deploy, troubleshooting guides.
8. As-built architecture, data dictionary, API docs, configuration docs.
9. System Turnover Report, SLA transition report, warranty/support confirmation, **Certificate of Final Acceptance**.

**Rules:**
- No proprietary/closed-source component that prevents DepEd from receiving, inspecting, building, deploying, maintaining, modifying, enhancing, migrating, or continuing the HRIS.
- Full third-party disclosure incl. licence restrictions.
- **Full source code turnover is a condition for final acceptance and final payment.**
- Turnover through **DepEd-controlled or DepEd-accessible version-controlled repository**.
- Data return and destruction obligations apply upon expiration, termination, non-renewal, transition to another provider.

## A.14 Warranty & security instruments  *(SCC 17.3 – 17.4)*

- **Performance security:** bank guarantee **1–5% of Contract Price**.
- **Warranty:** bank guarantee **1–5% of Contract Price**, valid until end of contract period.

## A.15 Compliance & regulatory frameworks referenced

Republic of the Philippines:
- **RA 12009** — New Government Procurement Act (IRR).
- **RA 10173** — Data Privacy Act of 2012.
- **RA 8293** — Intellectual Property Code.
- **RA 8792** — E-Commerce Act.
- **RA 9285** — Alternative Dispute Resolution Act.
- General Appropriations Act FY 2025 — DCP/SAGIP 2025.

Government oversight bodies to keep in scope:
- **DICT** — ICT and cybersecurity standards.
- **CSC** — HR rules, PDS, CSC Forms 9 / 33A, SPMS, IPCR/OPCR.
- **DBM** — PSIPOP, salary grades/tranches, allowances (RATA, PERA).
- **NPC** — privacy compliance and breach reporting.
- **GSIS, Pag-IBIG, PhilHealth, SSS, BIR** — contribution and remittance integration.
- **CESB, Metrobank** and other award-giving bodies — recognition module integration.

International standards to demonstrate:
- **ISO/IEC 27001:2013** (ISMS), **ISO/IEC 27701:2019** (PIMS), **NIST Cybersecurity Framework**.

## A.16 Non-functional requirements consolidated

| Domain | Requirement |
|---|---|
| Users | > 1,000,000 employees; multiple concurrent HR officers, applicants, ESS users |
| Availability | ≥ 99% uptime excluding planned maintenance |
| Performance | Core transactions ≤ 3 s |
| Security | RBAC granular; MFA; audit log immutable; encryption in transit & at rest; ISO 27001/27701/NIST alignment |
| Privacy | RA 10173 compliance; PIA; DSR handling; NDA; strict access to health data |
| Integrability | REST APIs (documented), digital signature integration, external HR support tool bi-directional API |
| Compliance velocity | 90-day adaptation to regulator changes |
| Documentation | Continuous per-release updates; final documentation set at M7 |
| Turnover | Full source, artefacts, repository, docs; DepEd-controlled repo |
| Localisation | English (primary); PH government forms and workflows |

---

### Sources

All facts above are extracted from the following pages of `PBD_HRIS_For-Posting.pdf`:

- SCC / GCC — pages 60–70
- Section VI. Schedule of Requirements — pages 71–88
- Section VII. Technical Specifications — pages 89–117
- Section VIII. Forms (Project ID) — pages 118–122
