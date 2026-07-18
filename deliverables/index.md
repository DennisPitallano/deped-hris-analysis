---
title: DepEd HRIS — Analysis, Response, Architecture
hide:
  - navigation
  - toc
---

# DepEd HRIS

**An independent technical analysis of the Philippine Bidding Document for the Department of Education's Human Resources Information System (Project ID `2026C-ICTS2-002-B5-CB-034`, ABC PHP 500 M, 365-day delivery).**

This site is a portfolio piece. It walks through:

1. **Extraction** — the source PBD (140 pages) turned into structured, quotable text.
2. **Analysis** — a consolidated brief of every technical specification, milestone, SLA, and compliance clause.
3. **Response** — a fully-populated bid response outline with placeholders for a bidder's specifics.
4. **Design** — a reference architecture (C4 model) and a PostgreSQL data model covering Core HR, Payroll, and Recruitment.

Coverage of DepEd's scope: **1,000,000+ employees** across Central Office, Regional Offices, Schools Division Offices, District Offices and Schools; plantilla, contract-of-service, job-order; teaching, related-teaching and non-teaching personnel. Eleven functional areas from Personnel Information Management through Payroll to Succession Planning.

---

## The three papers

<div class="grid cards" markdown>

- :material-file-document-outline: __A · Technical Specifications Brief__

    ---

    Consolidated, section-by-section extract of every technical specification, general
    specification, module-level requirement, SLA, milestone, and turnover obligation
    from the PBD. Includes the eight milestone payments, the P1–P4 support matrix,
    the 28 required recruitment reports, and every referenced regulator (CSC, DBM,
    NPC, DICT, GSIS, Pag-IBIG, PhilHealth, SSS, BIR).

    [Read the brief :octicons-arrow-right-24:](A_technical_specifications_brief.md){ .md-button .md-button--primary }
    [Download PDF](pdf/A_technical_specifications_brief.pdf){ .md-button }

- :material-file-sign: __B · Bid Response Outline__

    ---

    A fully-populated response document with **placeholders** for bidder-specific
    values. Every Section VII clause has an explicit Comply row with an
    implementation approach and an evidence annex reference. All 28 required
    reports mapped. Milestone entry/exit criteria. Risk register with twelve
    tracked risks.

    [Read the response :octicons-arrow-right-24:](B_tor_response_outline.md){ .md-button .md-button--primary }
    [Download PDF](pdf/B_tor_response_outline.pdf){ .md-button }

- :material-graph-outline: __C · Architecture & Data Model__

    ---

    C4 diagrams (System Context, Container, Component), a Payroll component
    deep-dive, plantilla recruitment state machine, a deployment view, and
    ~1000 lines of PostgreSQL DDL for Core HR, Payroll, and Recruitment
    (three bounded contexts). Report coverage traceability and cross-schema
    event handoffs included.

    [Read the architecture :octicons-arrow-right-24:](C_architecture_and_data_model.md){ .md-button .md-button--primary }
    [Download PDF](pdf/C_architecture_and_data_model.pdf){ .md-button }

</div>

---

## Design choices at a glance

<div class="grid" markdown>

=== "Delivery"

    - **8 milestones** across **365 days** from NTP.
    - Payment weights **10 / 20 / 15 / 10 / 15 / 10 / 10 / 10 %**.
    - Payroll parallel-run validation gate at **M6**.
    - Full source-code turnover as a condition of final acceptance at **M8**.
    - Liquidated damages after **15 days** of unjustified delay.

=== "Availability & SLA"

    - **99% uptime** excluding scheduled maintenance.
    - **≤ 3-second** core transactions under normal load.
    - **P1** 1 h response · 24 h resolution.
    - **P2** 2 h · 48 h.
    - **P3** 4 h · 5 working days.
    - **P4** 1 working day · next release.
    - Regulator adaptation within **90 days**.

=== "Security & Privacy"

    - **RA 10173** (Data Privacy Act) compliance.
    - ISO/IEC **27001**, **27701**, NIST CSF control mapping.
    - **MFA** for HR, Payroll, Admin; RBAC + ABAC scoping; RLS in PostgreSQL.
    - Immutable, hash-chained audit log.
    - Breach: contain immediately, **notify in 24 h**, **full report in 48 h**.
    - Data return **15 days** post-termination; notarised destruction cert **30 days** later.

=== "Architecture"

    - Modular monolith extractable to services (Payroll first).
    - PostgreSQL 16 HA for OLTP; Redis; OpenSearch; object storage.
    - BPMN workflow engine for approvals and recruitment stages.
    - OAuth2/OIDC via Keycloak with MFA.
    - Event bus for payroll runs, notifications, external integrations.
    - Offline-first mobile/kiosk for remote schools.

</div>

---

## Source material

- Source PBD: `PBD_HRIS_For-Posting.pdf` — the Philippine Bidding Document published by the DepEd BAC Secretariat.
- Extracted text: [extracted/](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/extracted) in the repository.
- Everything in this site is generated from the markdown files under [`deliverables/`](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/deliverables).

## About

Prepared by **deped-hris**, Solutions architect — HRIS and data platforms. This site is a public analysis; no official association with the Department of Education is implied.
Feedback and issues welcome on [GitHub](https://github.com/DennisPitallano/deped-hris-analysis).
