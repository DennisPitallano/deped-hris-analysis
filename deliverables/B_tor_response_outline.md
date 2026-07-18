# (B) Bid Response — DepEd HRIS

> **Placeholder version.** All bidder-specific values are shown as `[[PLACEHOLDER: ...]]`. Replace before submission. Every "Comply" statement in the compliance matrix is populated with the intended response for a bidder using an open-source-ready HRIS baseline plus DepEd customisation. Adjust any row where the actual product cannot meet the requirement.

**Project:** Human Resources Information System (HRIS)  
**Project ID:** 2026C-ICTS2-002-B5-CB-034  
**Procuring Entity:** Department of Education (DepEd), through ICTS-SDD  
**Approved Budget for the Contract:** PHP 500,000,000.00  
**Contract Duration:** 365 calendar days from receipt of NTP  

---

## Cover Documents (submitted separately in the bid envelope)

| # | Document | Status | Notes |
|---|---|---|---|
| 1 | Bid Form (Section VIII) | `[[PLACEHOLDER: attach signed PDF]]` | Every page signed |
| 2 | Price Schedule (Goods offered from within the Philippines) | `[[PLACEHOLDER: attach signed PDF]]` | 1 lot, PHP |
| 3 | Statement of Compliance – Section VI Schedule of Requirements | `[[PLACEHOLDER: attach signed PDF]]` | Verbatim compliance statement |
| 4 | Statement of Compliance – Section VII Technical Specifications | See §4 below | Signed extract of the compliance matrix |
| 5 | Omnibus Sworn Statement | `[[PLACEHOLDER: attach notarised PDF]]` | ITB 4.2 |
| 6 | Bid Securing Declaration OR Bid Security | `[[PLACEHOLDER: BSD or 2% cash / 5% surety bond]]` | Bidder to choose |
| 7 | Authority to Sign (Secretary's Certificate / Board Resolution / SPA) | `[[PLACEHOLDER: attach notarised PDF]]` | |
| 8 | Company profile and eligibility documents (SEC / GIS / mayor's permit / BIR / PhilGEPS / tax clearance) | `[[PLACEHOLDER: attach latest copies]]` | |
| 9 | Joint Venture Agreement (if applicable) | `[[PLACEHOLDER: JV or N/A]]` | |
| 10 | List of All Ongoing Contracts | `[[PLACEHOLDER: attach signed list]]` | |
| 11 | Statement of Single Largest Completed Contract (SLCC) | `[[PLACEHOLDER: attach SLCC statement + PO/NTP + Certificate of Acceptance]]` | Government/HRIS reference preferred |
| 12 | Net Financial Contracting Capacity (NFCC) | `[[PLACEHOLDER: attach computation]]` | Formula per RA 12009 IRR |

---

## 1. Executive Summary

`[[PLACEHOLDER: Bidder Legal Name]]` ("the Bidder") submits this proposal for the Department of Education's Human Resources Information System, aligned to Project ID 2026C-ICTS2-002-B5-CB-034. Our proposal is built on an existing, operational HRIS baseline (`[[PLACEHOLDER: Baseline Product Name and Version]]`), configured and customised to DepEd's context, and turned over in full to DepEd on Final Acceptance, including complete source code, database schemas, deployment artefacts, and technical documentation.

Key commitments:

- Delivery of all 11 functional areas within 365 calendar days from NTP, sequenced across 8 milestones (M1–M8) per Section VI of the PBD.
- Coverage of 1,000,000+ DepEd employees across CO, RO, SDO, District, and School levels — plantilla, contract of service (COS), job order (JO), teaching, related-teaching, and non-teaching personnel.
- **99% uptime**, **≤ 3-second** core transaction response, **P1 response within 1 hour** with **24-hour resolution**.
- Full compliance with RA 10173 (DPA 2012), ISO/IEC 27001, ISO/IEC 27701, and NIST CSF.
- Regulatory adaptation within 90 calendar days of new DICT / CSC / DBM / NPC / BIR issuances.
- **Full source code turnover** to a DepEd-controlled version-controlled repository at M7, with no proprietary or closed-source dependency that prevents DepEd's continued operation, maintenance, or migration.
- Warranty covered by a bank guarantee of `[[PLACEHOLDER: 1–5% of Contract Price]]`, valid until end of contract period.

Total bid price: `[[PLACEHOLDER: PHP amount in figures]]` (`[[PLACEHOLDER: PHP amount in words]]`), inclusive of VAT and all applicable taxes.

---

## 2. Understanding of Requirements

### 2.1 Scope confirmation

The Bidder acknowledges the full scope defined in Section VII of the PBD:

- **Organisational levels covered:** Central Office, Regional Offices, Schools Division Offices, District Offices, and Schools (Elementary, JHS, SHS).
- **Population:** > 1,000,000 employees, all employment categories (plantilla, COS, JO, and others), all personnel groups (teaching, related-teaching, non-teaching).
- **11 functional areas:** Personnel Information Management, Applicant Portal, Recruitment/Selection/Placement, Employee Self-Service, Leave & Attendance, Payroll (General/Special/Voucher), Performance Management (SPMS/IPCR/OPCR), Learning & Development, Rewards & Recognition, Employee Wellness & Welfare (with Health Profile), Succession Planning.
- **Detailed-in-TOR modules:** Personnel Information Management, Applicant Portal, Recruitment/Selection/Placement.
- **To-be-refined at inception:** ESS, Leave & Attendance, Payroll, Performance, L&D, Rewards & Recognition, Wellness & Welfare, Succession — subject to consultation with process owners under existing DepEd policies and CSC/DBM standards.

### 2.2 Delivery philosophy

The Bidder explicitly acknowledges the following distinctions from Section VI §2 of the PBD:

- A product demonstration is not equivalent to implementation.
- A vanilla HRIS is not equivalent to an accepted DepEd HRIS.
- Staging deployment is not equivalent to production readiness.
- Configuration is not equivalent to user acceptance.
- Payroll readiness requires parallel-run validation.
- Final Acceptance requires full source code turnover, documentation, SLA transition, and closure of critical defects.

---

## 3. Approach and Methodology

### 3.1 Delivery model

- Agile delivery with fixed-scope milestones aligned to the payment schedule (M1–M8).
- Two-week sprints; sprint reviews with DepEd process owners.
- Product Owner designated by DepEd for each functional area; Bidder-side counterpart named per module.
- Agile Team Charter, Product Backlog, Definition of Done, Definition of Ready — approved at M1.
- Rolling wave planning: M2–M4 (releases) refined per sprint; M5–M8 (integration, pilot, rollout) planned at increasing detail as releases approach.

### 3.2 Product Proof and baseline

- Baseline HRIS product capability demonstration completed at M1 (inception), covering the pre-built module capability matrix.
- Fit-gap analysis per module: pre-built vs configure vs customise vs build-new.
- Configuration and customisation blueprint signed off before Release 1 build begins.

### 3.3 Environments

- **Dev**, **Staging**, **Production** — DepEd-controlled or DepEd-accessible.
- Environment configuration templates version-controlled.
- Infrastructure-as-code: `[[PLACEHOLDER: Terraform / Bicep / ARM]]`.
- Backups: `[[PLACEHOLDER: e.g., nightly full + hourly incremental with 30-day retention and monthly archives]]`.
- Disaster recovery: `[[PLACEHOLDER: e.g., cross-region replica; RPO 15 min; RTO 4 h]]`.

### 3.4 Governance

- Weekly status reports (Bidder → DepEd Project Manager).
- Monthly progress reports (formal, per TOR §11.1).
- Quarterly operational reports after go-live (per TOR §11.1).
- Risk register, dependency register, change control log, defect log — maintained continuously.
- Change requests via a formal RFC process with DepEd approval.
- Escalation matrix: Project Manager → Programme Director → Bidder Country Head → DepEd Steering Committee.

### 3.5 Quality assurance

- Test-driven approach with automated unit, integration, and API tests.
- End-to-end UI tests for critical HR journeys.
- Test data management with anonymised production-like datasets.
- Payroll parallel-run harness enabled from Release 2 onwards.
- Independent internal security testing per M5 acceptance criteria.

---

## 4. Compliance Matrix — Section VII Technical Specifications

**Format:** For every TOR clause we cite, we state **Comply** or **Not Comply**, describe how compliance is achieved, and identify the annex containing documentary evidence. This section is signed by the Bidder's authorised representative.

Legend: **C** = Comply · **NC** = Not Comply · **P** = Partial (implemented with alternative approach; explanation provided).

### 4.1 §3 Scope

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 3.1 | Cover CO, RO, SDO, District, Schools | C | Multi-tenant org tree with row-level security scoping | Annex T-01 |
| 3.2 | Serve > 1,000,000 employees; plantilla, COS, JO; teaching, related-teaching, non-teaching | C | Load-tested to 1.2 M employee master records, 200 concurrent HR users, monthly payroll batch | Annex T-02 |
| 3.3 | Include 11 functional areas in phased implementation | C | Roadmap in §9 of this response mapping every module to a milestone | Annex T-03 |
| 3.4 | Detailed specs for PIM, Applicant Portal, RSP | C | Detailed compliance rows in §4.5–§4.12 below | Annex T-04 |
| 3.5 | Remaining modules refined through inception consultations, guided by DepEd policies + CSC/DBM standards | C | Business-process validation stage in M1; module deployment roadmap updated on approval | Annex T-05 |
| 3.6 | All modules covered under service commitment; phased rollout | C | Milestone plan §9 delivers all modules within 365 days | Annex T-06 |

### 4.2 §4 General Specifications

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 4.1.1 | Modules seamlessly integrated on a centralised, common database | C | Single PostgreSQL cluster; shared reference data; module-scoped schemas | Annex G-01 |
| 4.1.2 | Full interoperability via standardised APIs | C | REST/JSON APIs documented via OpenAPI 3.0; API gateway with versioned endpoints | Annex G-02 |
| 4.1.3 | Facilitate integration with current and future DepEd platforms and oversight bodies | C | Adapter pattern for CSC, DBM PSIPOP, GSIS, Pag-IBIG, PhilHealth, SSS, BIR, LBP; message-based integration bus | Annex G-03 |
| 4.2.1 | Fully electronic, highly customisable approval workflow | C | BPMN engine; per-module process templates; customisable in-flight | Annex G-04 |
| 4.2.2 | Levels vary by employee rank, position, request type | C | Rule-based routing on employee attributes and request metadata | Annex G-04 |
| 4.2.3 | Digital signatures + future e-Signature API integration | C | e-Signature adapter; PKCS#7 / PAdES support | Annex G-05 |
| 4.3.1 | Built-in program validation controls for policy compliance | C | Server-side rule engine; each rule versioned and testable | Annex G-06 |
| 4.3.2 | Transactions proceed only when rules pass | C | Deny-by-default policy; workflow guards | Annex G-06 |
| 4.3.3 | Automated checks for errors, redundancies, rule violations | C | Idempotency keys; duplicate detection; referential validation | Annex G-06 |
| 4.4.1 | Electronic forms with attachments of any file type | C | Form engine; MIME-agnostic file service with virus scanning | Annex G-07 |
| 4.4.2 | Auto-carry data across forms | C | Case/context object; field mapping between related forms | Annex G-07 |
| 4.4.3 | Auto-generated control numbers | C | Central sequence service; format templates per document type | Annex G-07 |
| 4.5.1 | Comply with DICT / CSC / DBM / NPC issuances | C | Governance monitoring process; policy change log; mapping to rules_version | Annex G-08 |
| 4.5.2.1 | Adaptability to updates | C | Config-driven rules and forms; versioned rules; feature flags | Annex G-08 |
| 4.5.2.2 | 90-day adaptation window | C | Compliance backlog fed from issuance log; committed lead time | Annex G-08 |
| 4.5.2.3 | Consultation and validation | C | Change management protocol with DepEd + concerned agencies | Annex G-08 |
| 4.5.2.4 | Documentation and training on updates | C | Release notes, updated manuals, orientation deck per compliance change | Annex G-08 |
| 4.5.2.5 | Immediate settlement of ICT security issues | C | Incident response plan; P1 SLA 1 h response / 24 h resolution; NPC coordination | Annex G-09 |
| 4.5.2.6 | Penalty acknowledgement for non-compliance | C | Acknowledged and accepted | — |

### 4.3 §5.1 Applicant Portal (external)

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.1.1 | Categorise postings by CO / RO; auto-notify appropriate Recruitment Officer | C | Posting entity carries `org_scope`; event → notification service | Annex R-01 |
| 5.1.2 | Applicants must create secure account before submitting | C | Applicant identity store separate from employee identity; MFA-capable | Annex R-02 |
| 5.1.3 | View openings, submit applications, save jobs | C | Public portal UI with account dashboard | Annex R-02 |
| 5.1.4 | Complete PDS in CSC-prescribed format | C | CSC-format PDS forms with validation | Annex R-03 |
| 5.1.5 | Upload profile photo, application letter, notarised PDS | C | Document upload with type/size checks; virus scanning | Annex R-03 |
| 5.1.6 | Reopen withdrawn applications | C | State machine transition `Withdrawn → Reopened` restricted to Recruitment Officer | Annex R-04 |
| 5.1.7 | Real-time application status to applicants | C | Applicant dashboard fed by state machine events | Annex R-04 |
| 5.1.8 | Auto email 6 months after account creation to update PDS/WES | C | Scheduled job with idempotent notification | Annex R-05 |
| 5.1.9 | Acknowledgement email on successful submission | C | Notification service triggered by submission event | Annex R-05 |
| 5.1.10 | Status categories: Draft, Submitted, Ongoing, Appointed, Not Chosen | C | State machine terminal + interim states enforced | Annex R-04 |

### 4.4 §5.2 Job Posting

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.2.1 | CO/RO officer creates posting from approved CSC Form 9 | C | Posting workflow with CSC Form 9 attachment or in-platform generation | Annex R-06 |
| 5.2.2 | Generate CSC Form 9 inside the platform | C | Report engine + template for CSC Form 9 | Annex R-06 |
| 5.2.3 | RO officers can independently post RO-specific jobs | C | Scoped RBAC; posting `org_scope = RO_x` | Annex R-06 |
| 5.2.4 | Tag as Publication or Internal Posting | C | Distribution channel field on posting | Annex R-06 |
| 5.2.5 | Deadline setting + reminders | C | Scheduled reminder jobs (7 d, 3 d, 1 d before deadline) | Annex R-06 |
| 5.2.6 | Officers can view submitted applications during posting period; formal evaluation gated | C | Read-only preview mode until deadline lapses | Annex R-06 |
| 5.2.7 | Required tabs for Plantilla postings (6 tabs) | C | Form template `PLANTILLA_APPLICATION` | Annex R-07 |
| 5.2.8 | Required tabs for Non-Plantilla postings (5 tabs) | C | Form template `NON_PLANTILLA_APPLICATION` | Annex R-07 |
| 5.2.9 | Encode Qualification Standards per position | C | QS editor tied to position_title | Annex R-08 |
| 5.2.10.1 | Unpublish postings | C | Status: Draft / Published / Unpublished / Closed | Annex R-06 |
| 5.2.10.2 | Bulk upload of postings via template | C | CSV import with validation; error preview | Annex R-06 |
| 5.2.10.3 | Define min educational requirement | C | Field on posting | Annex R-06 |
| 5.2.10.4 | Documentary requirements list per posting | C | `posting_document_requirement` table | Annex R-06 |
| 5.2.10.5 | JO postings | C | Posting type covers JO | Annex R-06 |
| 5.2.10.6 | Manage/update QS per QS Manual | C | Version-controlled QS records | Annex R-08 |
| 5.2.11 | Enforce deadline: reject submissions after 5:00 PM on deadline date | C | Server-side validation on `posting.deadline_at` | Annex R-06 |
| 5.2.12 | Auto-notify relevant personnel on publication | C | Event → notification service; distribution lists per org unit | Annex R-06 |

### 4.5 §5.3 Job Opportunities (internal)

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.3.1 | Secure self-service portal | C | ESS module authenticated via SSO | Annex R-09 |
| 5.3.2 | Dashboard shows all active openings | C | Feed generated from postings across CO+RO | Annex R-09 |
| 5.3.3 | View complete details of each posting | C | Detail page renders posting + QS + documents | Annex R-09 |
| 5.3.4 | Apply directly through the portal | C | One-click apply with prefill from employee PDS | Annex R-09 |
| 5.3.5 | Validate PDS/WES completeness before submission | C | Pre-submit validator with prompts | Annex R-09 |
| 5.3.6 | Real-time status tracking | C | Application dashboard | Annex R-09 |
| 5.3.7 | Cancel application any time pre-processing | C | State transition guarded on current stage | Annex R-09 |
| 5.3.8 | Multiple applications allowed | C | No per-user restriction; one application per posting | Annex R-09 |

### 4.6 §5.4 Applicant Management

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.4.1 | CO/RO officer accesses full applicant list per posting | C | Applicant list view with RBAC filtering | Annex R-10 |
| 5.4.2 | Generate PDS/WES | C | Report templates | Annex R-10 |
| 5.4.3 | Process per applicable requirements | C | Non-plantilla and plantilla flows implemented as BPMN | Annex R-11 |
| 5.4.4 | **Non-Plantilla flow** (Pre-Screening → Endorsement → Resolution → Appointment → CSC) | C | 5-stage workflow with tags Qualified/Not Qualified; docs Complete/Incomplete/For Compliance/For Resubmission | Annex R-11 |
| 5.4.5 | **Plantilla flow** (13 stages incl. Board Deliberation top-5, Psychometric) | C | Full BPMN state machine per C.4 of architecture doc; regret letters at exit points | Annex R-12 |
| 5.4.6 | Calendar view of scheduled recruitment activities | C | Calendar UI with legends and tallies | Annex R-13 |
| 5.4.7 | Categorised candidate lists (passed / not appointed / no regret sent) | C | Views on applicant state | Annex R-14 |
| 5.4.7.3 | Generate Matrix of Applicants | C | Report template | Annex R-14 |
| 5.4.7.4 | Rating Evaluation Sheet with two sort modes | C | Report supports with/without performance rating | Annex R-14 |
| 5.4.7.5 | List of Qualified Applicants | C | Report template | Annex R-14 |
| 5.4.7.6 | Demographic reports per position | C | Report template with drill-down | Annex R-14 |
| 5.4.8 | Application Assessment (criteria, ratings, PSB Secretariat, background investigation) | C | Assessment domain with criteria/rating tables; auto-average per criterion; ≥ 3 background investigations supported | Annex R-15 |

### 4.7 §5.5 Appointment Process

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.5.1 | Validate appointee's documentary compliance | C | Documentary checklist with attachments | Annex R-16 |
| 5.5.2 | Generate Report on Appointments Issued | C | Report template | Annex R-16 |
| 5.5.3 | Tag appointment paper released → auto email | C | State transition event → notification | Annex R-16 |
| 5.5.4 | Auto email with list of required documents | C | Templated notification | Annex R-16 |
| 5.5.5 | Generate CSC Form 33A – Appointment Form (Regulated) | C | Report template | Annex R-16 |
| 5.5.6 | Generate Oath of Office | C | Report template | Annex R-16 |
| 5.5.7 | Generate Certificate of Erasures/Alterations | C | Report template | Annex R-16 |
| 5.5.8 | Generate HRMPSB Endorsement Report | C | Report template | Annex R-16 |
| 5.5.9 | Set Orientation Date | C | Field on appointment | Annex R-16 |
| 5.5.10 | Define Probationary Period | C | Field on appointment | Annex R-16 |
| 5.5.11 | Post and finalise appointment details | C | Appointment `POST` transition with checks | Annex R-16 |
| 5.5.12 | Alternate appointee on withdrawal | C | Withdrawal → alternate flow; state machine | Annex R-16 |
| 5.5.13 | Require upload of formal Withdrawal Letter | C | Mandatory attachment guard | Annex R-16 |

### 4.8 §5.6 New Hire Processing

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.6.1 | HR Records Officer accesses appointee list | C | Onboarding queue view | Annex R-17 |
| 5.6.2 | Generate PDS per appointee | C | Report template | Annex R-17 |
| 5.6.3 | Assign unique Employee Number | C | Central sequence with per-org prefix | Annex R-17 |
| 5.6.4 | Assign Biometric PIN | C | Unique PIN generator, integrated with DTR devices | Annex R-17 |
| 5.6.5 | Assign work schedule | C | Work schedule catalogue | Annex R-17 |
| 5.6.6 | Designate work location | C | Location linked to org unit | Annex R-17 |
| 5.6.7 | Record/transfer carry-over leave balances | C | Leave balance import from prior agency records | Annex R-17 |
| 5.6.8 | Add compensation/benefits above default | C | `compensation_override` records | Annex R-17 |
| 5.6.9 | Add deductions beyond defaults | C | `deduction_override` records | Annex R-17 |
| 5.6.10 | Internal applicants skip new-hire; auto-create work experience on assumption date | C | Automated Core HR update via event | Annex R-17 |

### 4.9 §5.7 Reports Generation (28 required reports)

| # | Report | Comply | Source |
|---|--------|--------|--------|
| 5.7.1.1 | Request for Publication of Vacant Positions | C | Recruitment |
| 5.7.1.2 | Personal Data Sheet | C | Core HR |
| 5.7.1.3 | Work Experience Sheet | C | Core HR |
| 5.7.1.4 | Report on Appointments Issued | C | Recruitment / Core HR |
| 5.7.1.5 | CSC Form 33A – Appointment Form (Regulated) | C | Recruitment |
| 5.7.1.6 | Oath of Office | C | Recruitment |
| 5.7.1.7 | Certificate of Erasures / Alteration | C | Recruitment |
| 5.7.1.8 | HRMPSB Endorsement Report | C | Recruitment |
| 5.7.1.9 | Matrix of Applicants | C | Recruitment |
| 5.7.1.10 | Rating Evaluation Sheet | C | Recruitment |
| 5.7.1.11 | List of Qualified Applicants Demographics per Position | C | Recruitment |
| 5.7.1.12 | Endorsement Report | C | Recruitment |
| 5.7.1.13 | Profile of Applicants | C | Recruitment |
| 5.7.1.14 | List of Applicants per Job Posting | C | Recruitment |
| 5.7.1.15 | Applicant Assessment Summary Form | C | Recruitment |
| 5.7.1.16 | Applicants for Plantilla Position | C | Recruitment |
| 5.7.1.17 | Appointment Form | C | Recruitment |
| 5.7.1.18 | Certificate of Assumption to Duty / List of Applications Received | C | Recruitment |
| 5.7.1.19 | List of Appointments | C | Recruitment |
| 5.7.1.20 | Certificate of the Absence of a Qualified Eligible | C | Recruitment |
| 5.7.1.21 | List of Pooling Candidates | C | Recruitment |
| 5.7.1.22 | List of Qualified Applicants | C | Recruitment |
| 5.7.1.23 | List of Vacant Positions | C | Core HR / Position master |
| 5.7.1.24 | Recruitment Aging and Processing Report | C | Recruitment |
| 5.7.1.25 | Status of Recruitment and Selection Process | C | Recruitment |
| 5.7.1.26 | Talent Sourcing | C | Recruitment |
| 5.7.1.27 | Interview Rating Sheet | C | Recruitment |
| 5.7.1.28 | Reporting to Office of the Appointee / Background Investigation | C | Recruitment |

Evidence: Annex R-18 (sample renders of every report on synthetic data).

### 4.10 §5.8 Personnel Information Management

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 5.8.1–5.8.2 | Complete 201 file management; central repository | C | Core HR module with schema per C.6 of architecture doc | Annex C-01 |
| 5.8.3 | Store Office/RO, Division, Salary Grade & Tranches, Position Title, Eligibility, Employment Status, Job Level, Plantilla flag, Account Codes | C | Fields on `appointment`, `position_item`, `employment_history` | Annex C-02 |
| 5.8.4 | PDS aligned with CSC prescribed format; nine sections updateable at any time | C | PDS domain with sub-tables per section | Annex C-03 |
| 5.8.5 | Employee history: 11 job-related fields including salary adjustments and allowances (RATA, PERA) | C | `employment_history` bitemporal table | Annex C-04 |
| 5.8.6 | PSIPOP support; salary differentials, step increments, loyalty; admin cases | C | PSIPOP-aligned `position_item.item_number`; step increment engine; loyalty accrual; `admin_case` table | Annex C-05 |
| 5.8.7 | Reports: Service Record, distribution, personnel statistics, COE, agency plantilla, employee masterlist, notices, loyalty/step lists | C | 9 report templates | Annex C-06 |
| 5.8.8 | Forms per HRD, CSC, DBM, GSIS, PhilHealth, Pag-IBIG, SSS, BIR | C | Form catalogue with 11 primary forms plus government agency forms | Annex C-07 |
| 5.8.9 | Analytics dashboards, charts, statistical reports | C | BI layer with pre-built dashboards | Annex C-08 |
| 5.8.10 | HR Actions and Appointments (8 action types) | C | `appointment.appointment_type` covers all action types with associated documents | Annex C-09 |
| 5.8.11 | Capture and display employee feedback | C | Feedback capture with moderation | Annex C-10 |

### 4.11 §6 Generic Specifications for Additional Modules

Rows below indicate that the Bidder will deliver the module in accordance with the referenced sub-clauses. Detail confirmed during inception per TOR §3.5–§3.6.

| Ref | Module | Comply | Milestone | Evidence |
|-----|--------|--------|-----------|----------|
| 6.2 | Employee Self-Service Portal | C | M4 | Annex M-01 |
| 6.3 | Leave and Attendance Management (biometric integration) | C | M4 | Annex M-02 |
| 6.4 | Payroll (General, Special, Personnel Voucher) with parallel run | C | M4 build; M6 parallel-run acceptance | Annex M-03 |
| 6.5 | Performance Management (SPMS, IPCR, OPCR; competencies; IDP/ODP) | C | M5 | Annex M-04 |
| 6.6 | Learning and Development (LMS for NEAP; PPST/PPSSH/PPSS; scholarships; Service Obligation Contracts) | C | M5 | Annex M-05 |
| 6.7 | Rewards and Recognition (loyalty automation, external awards) | C | M5 | Annex M-06 |
| 6.8 | Employee Wellness and Welfare (Health Profile; statistical-only reports) | C | M5 | Annex M-07 |

### 4.12 §7 Implementation Plan Requirement

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 7.1 | Submit Implementation Plan within 30 calendar days of NTP | C | Committed | §9 |
| 7.2.1 | Detailed Work Plan and Schedule | C | Delivered at M1 | §9 |
| 7.2.2 | Module Deployment Roadmap | C | Delivered at M1 | §9 |
| 7.2.3 | Resource Allocation | C | Delivered at M1 | §12 |
| 7.2.4 | Risk Management Plan | C | Delivered at M1 | §15 |
| 7.2.5 | Acceptance Criteria | C | Delivered at M1; per-release refined | §9 |
| 7.3 | All modules included in the plan; scheduled per Implementation Roadmap | C | 100% module coverage | §9 |
| 7.4 | Acknowledge breach consequences | C | Acknowledged | — |

### 4.13 §8 Data Governance

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 8.1.1 | RA 10173 compliance | C | DPIA at M1; DPO designated; DSR workflows | Annex S-01 |
| 8.1.2 | NDA prior to engagement; survives contract | C | Standard NDA on file for all deployed personnel | Annex S-02 |
| 8.1.3 | Personnel changes → new NDA; notify DepEd; continuity | C | HR onboarding checklist enforces NDA before access | Annex S-03 |
| 8.1.4 | Confidential Information ownership by DepEd | C | Contract acknowledgement | — |
| 8.2.3 | ISO/IEC 27001, 27701, NIST controls | C | Bidder's ISMS aligned to ISO 27001; PIMS aligned to ISO 27701 | Annex S-04 |
| 8.2.4 | Obligations extend to subcontractors and third parties | C | Flow-down clauses in all subcontracts (subject to no-subcontracting rule in SCC §7) | Annex S-05 |
| 8.2.5 | Audit rights for DepEd | C | Contract clause; annual audit windows | Annex S-06 |
| 8.2.6 | Joint and several liability | C | Acknowledged | — |
| 8.3 | Breach notification (contain immediately; notify within 24 h; full report within 48 h; cooperate) | C | Incident response runbook; on-call rotation; NPC coordination | Annex S-07 |
| 8.4 | Liability under RA 10173, RA 8293, RA 8792 | C | Acknowledged | — |
| 8.5 | Data return within 15 days; notarised Certificate of Destruction within 30 days after return | C | Data return runbook; destruction attestation template | Annex S-08 |

### 4.14 §9 Service Level Agreement

| Ref | Requirement | Comply | Commitment | Evidence |
|-----|-------------|--------|------------|----------|
| 9.2 | Implementation Plan within 30 days; all modules; strict milestone adherence | C | 8 milestones within 365 days | §9 |
| 9.3.1 | ≥ 99% uptime | C | 99% target; capacity model in §5 | Annex S-09 |
| 9.3.2 | Maintenance outside working hours; 72 h prior notice | C | Change management protocol | Annex S-09 |
| 9.3.3 | Core transactions ≤ 3 s | C | Performance budget per endpoint; load-tested | Annex S-10 |
| 9.4 | Adaptation to regulator issuances within 90 days | C | Regulatory monitoring workstream; committed lead time | Annex S-11 |
| 9.5 | Data confidentiality, ownership, custody | C | See §4.13 | — |
| 9.6 | P1/P2/P3/P4 support SLAs | C | Support model in §8 of this response | Annex S-12 |

### 4.15 §10 Training and Documentation

| Ref | Requirement | Comply | Delivery | Evidence |
|-----|-------------|--------|----------|----------|
| 10.1 | Training for end-users, HR, admins per phase | C | Training plan in §10 | Annex T-10 |
| 10.2 | Updated manuals with each release | C | Documentation-as-code; released with each build | Annex T-11 |

### 4.16 §11 Reporting and Monitoring

| Ref | Requirement | Comply | Delivery | Evidence |
|-----|-------------|--------|----------|----------|
| 11.1 | Monthly progress reports during implementation; quarterly ops reports after | C | Reporting cadence committed | Annex T-12 |
| 11.2 | Audit trails for users, data, transactions; retrievable on demand | C | Immutable, hash-chained audit log; per-entity query API | Annex T-13 |

### 4.17 §12 HR Structured Service and Incident Management

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 12.1.1 | Mandatory structured capture of HR inquiries/requests/incidents | C | Service management module; case-per-inquiry model | Annex I-01 |
| 12.1.2 | Granular RBAC for sensitive fields | C | Field-level ACLs; masked views | Annex I-02 |
| 12.1.3 | Integration with core HR data for context | C | Employee context loader on case open | Annex I-03 |
| 12.1.4 | Auditable workflows | C | Immutable events, versioned processes | Annex I-04 |
| 12.1.5 | SLA definition, tracking, and reporting | C | Per-service SLA policies; SLA breach alerts | Annex I-05 |

### 4.18 §13 Technical Defect Management

| Ref | Requirement | Comply | Implementation | Evidence |
|-----|-------------|--------|----------------|----------|
| 13.1.1 | Internal technical defect logging | C | Defect module with classification, priority, tracking fields | Annex I-06 |
| 13.1.2 | Bi-directional REST API for future external support tool | C | REST endpoints with OpenAPI spec; webhook receivers | Annex I-07 |
| 13.1.3 | Export defect data as XML / JSON / CSV | C | Export service with all fields incl. attachments | Annex I-08 |
| 13.1.4 | Receive automated status updates via API | C | Webhook + poll endpoint for status sync | Annex I-07 |
| 13.1.5 | Root Cause Analysis linkage for recurring incidents | C | RCA record type + linking; recurrence detection | Annex I-09 |

### Statement of Compliance

I, `[[PLACEHOLDER: Authorised Representative Name]]`, `[[PLACEHOLDER: Position]]` of `[[PLACEHOLDER: Bidder Legal Name]]`, hereby commit to provide the above specified requirements in compliance with Section VII (Technical Specifications) and Section VI (Schedule of Requirements) for the Project: Procurement of Human Resources Information System.

Signed:  `[[PLACEHOLDER: signature]]`  
Name:    `[[PLACEHOLDER: printed name]]`  
Date:    `[[PLACEHOLDER: date]]`

---

## 5. Proposed Architecture and Technology Stack

See the accompanying document `C_architecture_and_data_model.md` for full C4 diagrams (System Context, Container, Component, Deployment) and the Core HR / Payroll / Recruitment data model.

### 5.1 Reference architecture summary

- **Frontend:** Web portal (`[[PLACEHOLDER: React / Blazor SSR]]`), mobile app (`[[PLACEHOLDER: React Native / Flutter]]`) with offline-first sync for schools.
- **Backend:** `[[PLACEHOLDER: .NET 8 / Java Spring Boot]]` — modular monolith initially, extractable to services (Payroll first).
- **Database:** PostgreSQL 16, HA (Patroni or managed cluster).
- **Cache:** Redis.
- **Search:** OpenSearch.
- **Workflow:** `[[PLACEHOLDER: Camunda 8 / Flowable]]` (BPMN).
- **Identity:** Keycloak (OIDC/OAuth2) with MFA.
- **API gateway:** `[[PLACEHOLDER: Kong / APISIX]]` with WAF.
- **Object storage:** MinIO or S3-compatible for documents/artefacts.
- **Reporting:** `[[PLACEHOLDER: JasperReports / DevExpress]]` for regulated forms; Metabase/Superset for BI.
- **Container platform:** Docker + Kubernetes.
- **CI/CD:** `[[PLACEHOLDER: GitHub Actions / GitLab CI]]` + ArgoCD.
- **Observability:** OpenTelemetry + Prometheus + Grafana + Loki.
- **IaC:** `[[PLACEHOLDER: Terraform]]` + Ansible.

### 5.2 Rationale

- **Open-source primary stack** to satisfy full source code turnover and continuity without proprietary lock-in.
- **PostgreSQL** for transactional workloads: proven at scale, no per-core licensing, straightforward DR.
- **BPMN engine** because the recruitment plantilla flow, leave approvals, and payroll approvals all require configurable, versioned workflows.
- **Event-driven backbone** for payroll batch, notifications, audit, and external integrations.
- **Kubernetes** for horizontal scaling and DR.

### 5.3 Third-party licence disclosure (preliminary)

`[[PLACEHOLDER: attach initial third-party inventory in machine-readable format (SPDX / CycloneDX SBOM). Confirm no GPL/AGPL-viral components block redistribution or turnover.]]`

---

## 6. Data Migration and Integration

### 6.1 Migration approach

1. **Discovery** at M1: inventory of legacy source systems (`[[PLACEHOLDER: existing HRIS(es), 201 files, payroll registers, biometric logs, PSIPOP feeds]]`).
2. **Data profiling and quality assessment.**
3. **Mapping and transformation design.**
4. **Extract → Cleanse → Validate → Load → Reconcile.**
5. **Mock migration** at M6 with reconciliation report.
6. **Full migration** during pilot (M7) and production rollout (M8).
7. **Dual-run** during pilot to catch discrepancies.

### 6.2 Integrations planned

| System | Direction | Purpose | Milestone |
|--------|-----------|---------|-----------|
| CSC | Both | Form 9, Form 33A submission; SPMS metadata | M2 (metadata), M3 (submission) |
| DBM PSIPOP | Inbound | Plantilla items, salary grades/steps/tranches | M2 |
| GSIS | Outbound | Contributions and loan deductions; remittance files | M4 |
| Pag-IBIG | Outbound | Contributions and loans | M4 |
| PhilHealth | Outbound | Contributions | M4 |
| SSS | Outbound | Contributions (applicable personnel) | M4 |
| BIR | Outbound | Withholding tax reports; 2316 | M4 |
| LBP / servicing bank | Outbound | Payroll disbursement file | M4 |
| PhilSys | Inbound | eKYC (optional) | M5 |
| DepEd e-Signature | Both | Digital signature of forms | M2 |
| Biometric devices | Inbound | DTR ingestion | M4 |
| NEAP LMS content | Both | Course catalogue and completion sync | M5 |
| External technical support tool | Both | Defect sync (per TOR §13) | M6 |
| Email / SMS gateway | Outbound | Notifications | M2 |

---

## 7. Security, Privacy, and Compliance

### 7.1 Framework alignment

- **RA 10173 (Data Privacy Act 2012)** and IRR — DPO designation, PIA at M1, DSR workflows, breach notification runbook.
- **ISO/IEC 27001:2013 (ISMS)** — Bidder certified: `[[PLACEHOLDER: certificate reference and validity]]`.
- **ISO/IEC 27701:2019 (PIMS)** — Bidder certified: `[[PLACEHOLDER: certificate reference and validity]]`.
- **NIST Cybersecurity Framework** — control mapping in Annex S-04.

### 7.2 Security controls

| Domain | Control |
|--------|---------|
| Identity | SSO via Keycloak; MFA mandatory for HR, Payroll, Admin roles; JIT elevation for payroll finalisation |
| Access | RBAC + ABAC (org/region/division scoping); PostgreSQL RLS; least privilege |
| Encryption | TLS 1.3 in transit; AES-256 at rest via KMS; field-level encryption for TIN, GSIS BP, PhilSys number, bank accounts |
| Application | OWASP ASVS L2 target; SAST + DAST + SCA + secret scanning in CI |
| Audit | Immutable, hash-chained audit log; append-only; retrievable API |
| Monitoring | SIEM ingestion; anomaly detection on payroll deltas, mass leave approvals, off-hours access |
| Backups | 3-2-1 rule; immutable snapshots; monthly restore tests |
| DR | Cross-region replica; RPO ≤ 15 min; RTO ≤ 4 h |
| Privacy | Data minimisation; retention schedules; DSR (access/erasure); PII masking in non-prod |
| Health data (§6.8) | Separate schema with tighter grants; statistical-only reporting views |

### 7.3 Incident response

- **Containment:** immediate.
- **Initial notification to DepEd:** within 24 h of discovery.
- **Full incident report:** within 48 h of discovery (per TOR §8.3.3 — tighter of the two deadlines).
- **NPC notification:** as required by RA 10173.
- **Post-incident review** with root cause analysis and remediation plan.

---

## 8. Service Level Agreement Response

### 8.1 Availability and performance

| Metric | Commitment |
|--------|-----------|
| System uptime | ≥ 99% (excluding scheduled maintenance) |
| Scheduled maintenance | Outside working hours (Mon–Fri, 08:00–17:00 PHT); 72 h prior notice |
| Core transaction response | ≤ 3 seconds under normal operating conditions |
| Concurrent HR users | `[[PLACEHOLDER: target based on capacity model; recommend ≥ 5,000]]` |
| Payroll monthly batch window | `[[PLACEHOLDER: e.g., ≤ 6 hours for 1.0 M employees]]` |

### 8.2 Support SLA (per TOR §9.6)

| Severity | Description | Response | Resolution |
|----------|-------------|----------|-----------|
| P1 – Critical | System-wide outage, payroll failure, or data breach | 1 hour | 24 hours |
| P2 – High | Module unavailability; errors affecting the majority of users | 2 hours | 48 hours |
| P3 – Medium | Functional errors with workaround available | 4 hours | 5 working days |
| P4 – Low | Minor issues, cosmetic defects, user queries | 1 working day | Next release / patch cycle |

- 24×7 helpdesk during production; multiple channels (email, phone, portal).
- Escalation matrix published; on-call rotation.
- Regulatory adaptation within 90 calendar days of new issuance; interim mechanisms (ad hoc reports, workarounds) documented if the 90-day window cannot be met.

---

## 9. Milestone Delivery Plan

### 9.1 Milestone summary

| M# | Max window from NTP | Deliverable theme | Payment |
|----|--------------------|--------------------|---------|
| M1 | Day 30 | Mobilization | 10% |
| M2 | Day 90 | Project Inception, Product Proof, Technical Alignment, Implementation Planning | 20% |
| M3 | Day 150 | Release 1 — Core HR Foundation | 15% |
| M4 | Day 190 | Release 2 — Payroll, Leave, Attendance, ESS | 10% |
| M5 | Day 235 | Release 3 — Strategic Talent, Learning, Wellness, Rewards, Succession | 15% |
| M6 | Day 270 | Integrated Testing, Security Validation, Migration Readiness, Payroll Parallel Run | 10% |
| M7 | Day 300 (or earlier) | Pilot Deployment, Capacity Building, Documentation, SLA Readiness | 10% |
| M8 | Day 335–365 | Production Rollout, Final Handover, SLA Transition, Final Acceptance (incl. source code turnover) | 10% |

### 9.2 Milestone detail template (applied to each M#)

For each milestone the Bidder will submit:

- **Entry criteria:** artefacts that must exist before the milestone can start.
- **Deliverables:** enumerated per Section VI of the PBD.
- **Exit criteria:** measurable acceptance conditions.
- **Sign-off:** authorised DepEd Product Owner / process owner signature.

### 9.3 M1 — Mobilization (Day 30, 10%)

- Deliverables: NTP acknowledgement, performance/warranty security instruments, mobilization details (PM, principal technical contact, team roster, initial schedule).
- Exit criteria: DepEd receipt and acceptance of security instruments; mobilization pack accepted.

### 9.4 M2 — Inception, Product Proof, Technical Alignment, Implementation Planning (Day 90, 20%)

- Deliverables: Inception Report, Implementation Plan, Agile Team Charter, initial Product Backlog, Pre-Built Module Capability Matrix, baseline HRIS capability demonstration report, fit-gap approach, configuration/customisation blueprint, environment plan, migration plan, integration/API plan, security/privacy/access/audit plan, risk register, dependency register, sprint cadence, reporting protocol, draft acceptance criteria for Release 1.
- Exit criteria: DepEd approval of all above; documented approval of the baseline capability demo (not equivalent to final DepEd HRIS acceptance).

### 9.5 M3 — Release 1: Core HR Foundation (Day 150, 15%)

- Deliverables: Personnel Information Management, 201 file records, PDS management, Applicant Portal, Recruitment/Selection/Placement, Appointment Processing, New Hire Processing, recruitment/appointment/personnel reports, RBAC, audit logging, initial sample data migration, release notes, updated user/admin guides, Sprint Review Reports, signed-off user stories, defect closure report.
- Exit criteria: Deployment to agreed staging or approved release env; tests completed; critical defects closed; DepEd sign-off.

### 9.6 M4 — Release 2: Payroll, Leave, Attendance, ESS (Day 190, 10%)

- Deliverables: Payroll & Remittance (General, Special, Personnel Voucher), Leave Management, Attendance Management, ESS (payslip, leave balance/filing, employee requests, employee record access), payroll computation test results, remittance report templates, leave/attendance rule config, API/file exchange validation, payroll parallel-run test plan, updated docs, Sprint Reviews, signed-off user stories.
- Exit criteria: Release 2 tests complete; docs updated; Product Owner sign-off. Full payroll operational reliance requires M6 parallel-run acceptance.

### 9.7 M5 — Release 3: Strategic Talent, Learning, Wellness, Rewards, Succession (Day 235, 15%)

- Deliverables: Performance Management (SPMS, IPCR, OPCR), L&D, Rewards & Recognition, Employee Wellness & Welfare with Health Profile, Succession Planning and career progression, related dashboards/reports, privacy controls for sensitive and health data, statistical reporting controls, backlog refinement logs, docs, Sprint Reviews, user story sign-offs.
- Exit criteria: Release 3 tests complete; docs updated; individual-level health data access gated per DepEd governance; Product Owner sign-off.

### 9.8 M6 — Integrated Testing, Security Validation, Migration Readiness, Payroll Parallel Run (Day 270, 10%)

- Deliverables: integrated UAT logs, integration test results, regression test results, performance/load test results, security validation report, access-control validation, audit-log validation, privacy controls validation, mock migration report, reconciliation report, defect register/closure, payroll parallel-run accuracy report, pilot Go/No-Go recommendation, updated documentation.
- Exit criteria: All critical findings resolved; payroll parallel-run accepted by DepEd payroll/finance/HR process owners.

### 9.9 M7 — Pilot Deployment, Capacity Building, Documentation, SLA Readiness (Day 300 or earlier, 10%)

- Deliverables: pilot deployment report (CO, RO, SDO, school-level), production-readiness checklist, training completion, knowledge-transfer materials, updated manuals, admin guides, technical maintenance docs, training decks, helpdesk scripts, incident escalation matrix, SLA readiness report, pilot issue register, phased rollout plan.
- Exit criteria: Pilot validated across CO/RO/SDO/School; critical pilot defects closed; training completed; Go/No-Go approved.

### 9.10 M8 — Production Rollout, Final Handover, SLA Transition, Final Acceptance (Day 335–365, 10%)

- Deliverables: production deployment report, phased rollout evidence, final release deliverables, final migration/reconciliation report, final payroll parallel-run accuracy report, final security/access/audit-log validation, final performance report, final defect closure report, final training completion report, final user/admin/technical/operational documentation, as-built architecture, data dictionary, API docs, configuration docs, deployment docs, backup/restore procedure, access credential turnover, **complete source code turnover**, version-controlled repository turnover, DB schema and migration scripts, build/deploy/rollback scripts, environment config templates, custom reports/forms/workflows/rule configs, integration source, test scripts/suites/data, dependency list and licence inventory, installation and dev-setup guides, System Turnover Report, SLA transition report, warranty confirmation, **notarised Certificate of Final Acceptance**.
- Exit criteria: All the above accepted in writing; source code turnover verified; final acceptance signed.

---

## 10. Training and Change Management

### 10.1 Training plan

| Audience | Delivery mode | Coverage | Timing |
|----------|---------------|----------|--------|
| HR Records Officers | Instructor-led + hands-on | Core HR, PDS, appointment, new hire | Pre-M3, refresher pre-M7 |
| Recruitment Officers (CO/RO) | Instructor-led | Applicant Portal, RSP, appointment flow | Pre-M3 |
| Payroll and Finance | Instructor-led + workshop | Payroll, remittances, vouchers, parallel run | Pre-M4, again pre-M6 |
| ESS end-users | Self-paced online | ESS features | Pre-M4 |
| Managers | Self-paced online | MSS approvals | Pre-M4 |
| System Administrators (ICTS-SDD) | Instructor-led + shadowing | Admin, monitoring, incident response | M6–M7 |
| Trainers (train-the-trainer) | Instructor-led | Full curriculum | M6 |

### 10.2 Training materials

- User manuals, administrator guides, technical maintenance manuals, operational runbook, training decks, job aids, FAQ documents, video tutorials.
- All materials versioned in the documentation repository; updated with each release.

### 10.3 Change management

- Stakeholder mapping and engagement plan at M1.
- Communications plan across CO, ROs, SDOs, and schools.
- Super-user network established per RO.
- Feedback loops via HR Structured Service module.

---

## 11. Source Code Turnover and Continuity Commitments

### 11.1 Turnover artefacts

All 31 artefacts enumerated in Section VI §16 of the PBD are committed for delivery at M7. Summarised:

1. Complete application source code, module source, custom extensions, API/integration source, middleware/connectors/adapters, data exchange scripts.
2. Database schema, migration scripts, seed / reference / configuration data.
3. Report templates, form templates, workflow definitions, business rule configurations.
4. Build / deploy / rollback scripts; environment configuration templates.
5. Automated and manual test scripts, test data templates.
6. Package manifests, dependency files, third-party library and licence inventory.
7. Repository access credentials, administrator credentials.
8. System setup, local dev, production deploy, troubleshooting guides.
9. As-built architecture, data dictionary, API documentation, configuration documentation.
10. System Turnover Report, SLA transition report, warranty confirmation, Certificate of Final Acceptance.

### 11.2 Repository and licensing commitments

- Source code turnover through a **DepEd-controlled or DepEd-accessible version-controlled repository**.
- **No proprietary or closed-source component** that prevents DepEd from receiving, inspecting, building, deploying, maintaining, modifying, enhancing, migrating, or continuing the HRIS will be introduced.
- **Full third-party disclosure** including licences and restrictions.

### 11.3 Data return and destruction

- On termination or expiration: return all data within 15 calendar days in DepEd-specified formats (Excel, CSV, SQL dump, etc.), via secure encrypted channels.
- Notarised Certificate of Destruction within 30 calendar days after return, covering backups, archives, temp files, subcontractors.
- DepEd audit rights up to 60 days post-termination.

---

## 12. Team and Organisation

`[[PLACEHOLDER: attach organisation chart and detailed CVs in Annex T-01.]]`

Key roles and minimum qualifications:

| Role | Count | Minimum qualifications |
|------|-------|-----------------------|
| Programme Director / Project Manager | 1 | 10+ years IT delivery; 3+ years government sector; PMP or equivalent |
| Principal Technical Contact / Solution Architect | 1 | 10+ years enterprise architecture; cloud-native + PostgreSQL expertise |
| Business Analyst — HR domain | `[[PLACEHOLDER]]` | HR/HRIS delivery; CSC/DBM familiarity |
| Business Analyst — Payroll domain | `[[PLACEHOLDER]]` | Government payroll; BIR/GSIS/Pag-IBIG/PhilHealth/SSS familiarity |
| Development leads (per module) | `[[PLACEHOLDER]]` | 7+ years backend; workflow engines; PostgreSQL |
| Front-end lead | 1 | 7+ years modern web; accessibility (WCAG 2.1 AA) |
| DevOps / SRE | `[[PLACEHOLDER]]` | Kubernetes; observability; secrets management |
| DBA | `[[PLACEHOLDER]]` | PostgreSQL performance and HA |
| QA / Test lead | `[[PLACEHOLDER]]` | Automated testing frameworks |
| Security lead | 1 | ISO 27001 auditor; CISSP or equivalent |
| Data Protection Officer / privacy lead | 1 | RA 10173 practitioner |
| Change management / training lead | 1 | Government-scale training |
| Technical writer | `[[PLACEHOLDER]]` | Regulated-industry documentation |

- All personnel sign NDA prior to engagement (per TOR §8.1.2–§8.1.3).
- Continuity for personnel changes documented in the transition plan.

---

## 13. Company Profile and Track Record

- **Legal entity:** `[[PLACEHOLDER: Bidder Legal Name, SEC registration, TIN, principal address, contact]]`.
- **Ownership/structure:** `[[PLACEHOLDER: brief]]`.
- **Certifications:** `[[PLACEHOLDER: ISO 27001, ISO 27701, ISO 9001, CMMI level, PCI DSS if any, etc.]]`.
- **Single Largest Completed Contract (SLCC):** `[[PLACEHOLDER: Project name, client, contract value, duration, brief description; attach PO/NTP + Certificate of Acceptance]]`.
- **Reference projects:**
  1. `[[PLACEHOLDER: Project name — client — description — contact]]`
  2. `[[PLACEHOLDER: Project name — client — description — contact]]`
  3. `[[PLACEHOLDER: Project name — client — description — contact]]`

---

## 14. Financial Proposal

- **Total bid price:** `[[PLACEHOLDER: PHP figures and words]]`.
- **Basis:** Lump-sum for 1 lot HRIS delivered to DepEd Central Office, TechZone Makati.
- **Currency:** Philippine Pesos.
- **Inclusive of:** VAT and all applicable Philippine taxes.
- **Bid validity:** `[[PLACEHOLDER: per BDS, typically 120 calendar days from opening]]`.
- **Bid Security:** `[[PLACEHOLDER: chosen form — Bid Securing Declaration OR 2% cash / 5% surety bond of ABC]]`.
- **Discounts:** `[[PLACEHOLDER: methodology or N/A]]`.
- **Progress payments:** milestone-based per SCC §11.4; no advance payment; no Letter of Credit.
- **Performance security:** bank guarantee `[[PLACEHOLDER: 1–5%]]` of Contract Price.
- **Warranty security:** bank guarantee `[[PLACEHOLDER: 1–5%]]` of Contract Price valid to end of contract period.

Price Schedule detail is in Annex F-01 (Price Schedule for Goods Offered from Within the Philippines).

---

## 15. Risk Management

Initial risk register (Bidder-owned mitigations). Refined during M1 inception.

| # | Risk | Likelihood | Impact | Owner | Mitigation |
|---|------|-----------|--------|-------|-----------|
| R-01 | Scale of 1 M+ employees exceeds baseline HRIS validated envelope | Medium | High | Bidder Architect | Load testing to 3× peak at M6; horizontal scaling; capacity model at M2 |
| R-02 | Payroll parallel-run reveals systemic discrepancies | Medium | High | Bidder Payroll Lead | Rules-versioning discipline; incremental testing from M3; DepEd finance early involvement |
| R-03 | Poor connectivity at school level | High | Medium | Bidder Architect | Offline-first ESS; USSD/SMS payslip fallback where feasible |
| R-04 | Data quality in legacy 201 files | High | High | DepEd data owner + Bidder migration lead | Data profiling at M1; cleansing workstream; data stewardship program |
| R-05 | Regulatory change during implementation | Medium | Medium | Bidder + DepEd | 90-day adaptation commitment; feature-flagged rules |
| R-06 | Change management resistance | Medium | Medium | DepEd HR + Bidder change lead | Super-user network; phased rollout; visible executive sponsorship |
| R-07 | Cyberattack during production | Medium | High | Bidder Security lead | Zero-trust; MFA; SIEM; DR; tabletop exercises |
| R-08 | Personnel changes on Bidder side | Medium | Medium | Bidder Programme Director | Bench strength; knowledge management; transition SOP |
| R-09 | Health data governance for §6.8 | Medium | High | Bidder DPO + DepEd DPO | Separate schema; RBAC; statistical-only views; PIA sign-off |
| R-10 | Delay in DepEd approvals (Product Owner availability) | Medium | Medium | DepEd + Bidder | Signed Team Charter; SLA on approvals; risk-adjusted schedule buffers |
| R-11 | Third-party API instability (banks, agencies) | Medium | High | Bidder Integration lead | Circuit breakers; retries with exponential backoff; contingency file-based fallback |
| R-12 | Volume of concurrent applicants during peak recruitment | Medium | Medium | Bidder Architect | Auto-scaling; CDN for public portal; queue-based submissions |

---

## 16. Warranty and Post-Deployment Support

- **Warranty security:** bank guarantee `[[PLACEHOLDER: 1–5%]]` of Contract Price valid to end of contract period.
- **Warranty coverage:** all delivered modules and integrations.
- **Warranty exclusions:** `[[PLACEHOLDER: force majeure, DepEd-directed changes outside scope, misuse]]`.
- **Warranty response:** aligned to the P1–P4 SLA in §8.
- **Warranty period start:** date of Final Acceptance (M8).
- **Warranty period:** through the end of contract period per SCC §17.4.

---

## 17. Annexes (evidence pack)

Bidder to attach:

- **T-series (Track record and team):** Annex T-01 org chart & CVs, T-02 SLCC, T-03 ongoing contracts, T-04 track record, T-05 references.
- **G-series (General architecture):** G-01 database architecture, G-02 API catalogue, G-03 integration adapters, G-04 workflow templates, G-05 e-Sign adapter, G-06 rule engine, G-07 forms & documents, G-08 regulatory adaptation runbook, G-09 incident response runbook.
- **R-series (Recruitment):** R-01 applicant notification flow, R-02 applicant identity, R-03 PDS forms, R-04 state machine spec, R-05 notification templates, R-06 posting management, R-07 form templates, R-08 QS management, R-09 ESS job opportunities, R-10 applicant management UI, R-11 non-plantilla BPMN, R-12 plantilla BPMN, R-13 calendar UI, R-14 candidate reports, R-15 assessment domain, R-16 appointment reports, R-17 new-hire onboarding, R-18 report samples.
- **C-series (Core HR):** C-01 to C-10 evidence per §4.10.
- **M-series (Modules):** M-01 ESS, M-02 Leave/Attendance, M-03 Payroll, M-04 Performance, M-05 L&D, M-06 Rewards, M-07 Wellness.
- **S-series (Security/SLA):** S-01 DPIA template, S-02 NDA, S-03 onboarding checklist, S-04 NIST mapping, S-05 subcontractor flow-down, S-06 audit rights, S-07 IR runbook, S-08 data return runbook, S-09 uptime plan, S-10 performance test plan, S-11 regulatory monitoring, S-12 support model.
- **I-series (Service management):** I-01 to I-09 per §4.17–§4.18.
- **F-series (Financial):** F-01 Price Schedule.

Each annex must cross-reference the corresponding TOR clause row in §4 of this response.

---

## 18. Compliance Checklist — Bidder self-review

- [ ] Every Section VII line item has an explicit Comply / Not Comply.
- [ ] Every "Comply" has cross-referenced evidence in an annex.
- [ ] Each page of the Bid Form and Price Schedule signed.
- [ ] Bid Security or Bid Securing Declaration attached.
- [ ] Omnibus Sworn Statement completed and notarised.
- [ ] All 8 milestones committed within 365 days.
- [ ] Source code turnover explicitly committed as condition for final payment.
- [ ] No proprietary component that blocks turnover.
- [ ] Data return + notarised Certificate of Destruction committed.
- [ ] SLA table (P1–P4) matches PBD.
- [ ] Breach notification 24 h / 48 h committed.
- [ ] Regulatory adaptation 90 days committed.
- [ ] Warranty bank guarantee 1–5% offered.
- [ ] All 28 required reports covered in §4.9.
- [ ] Both plantilla and non-plantilla recruitment flows addressed end-to-end.
- [ ] NDA and personnel-continuity clauses acknowledged.
