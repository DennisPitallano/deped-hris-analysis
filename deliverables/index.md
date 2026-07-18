---
title: DepEd HRIS — Analysis, Response, Architecture
hide:
  - navigation
  - toc
---

<section class="hero" markdown>

<span class="hero-eyebrow">Independent technical analysis · 2026</span>

# DepEd HRIS { .hero-title }

<p class="hero-subtitle">
An end-to-end read of the Philippine Bidding Document for the Department of
Education&#39;s Human Resources Information System — the specifications, a full
bid-response outline, and a reference architecture with C4 diagrams and a
PostgreSQL data model.
</p>

<div class="hero-cta" markdown>
[Read the brief :octicons-arrow-right-24:](A_technical_specifications_brief.md){ .md-button .md-button--primary }
[View architecture](C_architecture_and_data_model.md){ .md-button }
[Download PDFs](downloads.md){ .md-button }
</div>

<ul class="hero-meta">
  <li><span>Project</span><code>2026C-ICTS2-002-B5-CB-034</code></li>
  <li><span>ABC</span>PHP 500 M</li>
  <li><span>Delivery</span>365 days</li>
  <li><span>Scope</span>1 M+ employees</li>
</ul>

</section>

<ul class="stats-strip">
  <li><strong>1M+</strong><span>Employees in scope</span></li>
  <li><strong>11</strong><span>Functional modules</span></li>
  <li><strong>8</strong><span>Milestones · 365 d</span></li>
  <li><strong>28</strong><span>Required reports</span></li>
  <li><strong>99%</strong><span>Uptime target</span></li>
  <li><strong>P1–P4</strong><span>SLA response bands</span></li>
</ul>

## The three papers { #the-three-papers .section-heading }

<div class="grid cards docs-grid" markdown>

- :material-file-document-outline: __A · Technical Specifications Brief__

    ---

    Consolidated, section-by-section extract of every technical specification,
    module requirement, SLA, milestone, and turnover obligation from the PBD.
    Includes the eight milestone payments, the P1–P4 support matrix, all 28
    required recruitment reports, and every referenced regulator (CSC, DBM,
    NPC, DICT, GSIS, Pag-IBIG, PhilHealth, SSS, BIR).

    <span class="tag-row">
      <span class="tag">SLA</span>
      <span class="tag">Milestones</span>
      <span class="tag">Compliance</span>
      <span class="tag">Reports</span>
    </span>

    [Read the brief :octicons-arrow-right-24:](A_technical_specifications_brief.md){ .md-button .md-button--primary }
    [PDF](pdf/A_technical_specifications_brief.pdf){ .md-button }

- :material-file-sign: __B · Bid Response Outline__

    ---

    A fully-populated response document with **`[[PLACEHOLDER]]`** markers for
    bidder-specific values. Every Section VII clause has a Comply row with an
    implementation approach and evidence annex reference. All 28 required
    reports mapped. Milestone entry/exit criteria. Risk register with twelve
    tracked risks.

    <span class="tag-row">
      <span class="tag">Section VII</span>
      <span class="tag">Compliance matrix</span>
      <span class="tag">Risk register</span>
    </span>

    [Read the response :octicons-arrow-right-24:](B_tor_response_outline.md){ .md-button .md-button--primary }
    [PDF](pdf/B_tor_response_outline.pdf){ .md-button }

- :material-graph-outline: __C · Architecture & Data Model__

    ---

    C4 diagrams (System Context, Container, Component), a Payroll component
    deep-dive, a plantilla recruitment state machine, a deployment view, and
    approximately 1,000 lines of PostgreSQL DDL across three bounded contexts
    (Core HR, Payroll, Recruitment). Cross-schema event handoffs and report
    coverage traceability included.

    <span class="tag-row">
      <span class="tag">C4 model</span>
      <span class="tag">PostgreSQL DDL</span>
      <span class="tag">Event bus</span>
      <span class="tag">State machines</span>
    </span>

    [Read the architecture :octicons-arrow-right-24:](C_architecture_and_data_model.md){ .md-button .md-button--primary }
    [PDF](pdf/C_architecture_and_data_model.pdf){ .md-button }

</div>

## Which paper is for you? { .section-heading }

<div class="compare-table" markdown>

|                   | **A · Brief**              | **B · Response**              | **C · Architecture**        |
| :---------------- | :------------------------- | :---------------------------- | :-------------------------- |
| **You are…**      | Reading the RFP            | Preparing a bid               | Building the system         |
| **Best for**      | Orientation, scope, SLAs   | Compliance, evidence, pricing | Design, data model, C4      |
| **Format**        | Structured analysis        | Section VII compliance matrix | Diagrams + PostgreSQL DDL   |
| **Diagrams**      | —                          | Risk map                      | 8 Mermaid (C4/ER/state)     |
| **Length**        | ~22 KB · 20 min read       | ~56 KB · 45 min read          | ~74 KB · 60 min read        |
| **Key sections**  | Milestones, P1–P4, reports | Milestone entry/exit, risks   | Container, deployment, ERDs |

</div>

## Design choices at a glance { .section-heading }

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

## What to read next { .section-heading }

<div class="next-cta" markdown>

- **New here?** Start with **[Paper A](A_technical_specifications_brief.md)** for a guided read of the PBD scope, SLAs, and milestones.
- **Reviewing a bid?** Open **[Paper B](B_tor_response_outline.md)** and search for `[[PLACEHOLDER]]` to see every bidder-specific field.
- **Building the system?** Jump to **[Paper C](C_architecture_and_data_model.md)** — C4 diagrams and PostgreSQL DDL are the fast path to a prototype.
- **Prefer offline reading?** All three papers are available as [PDFs](downloads.md) with rendered diagrams.

</div>

---

<section class="page-footer" markdown>

**Source material:** The Philippine Bidding Document `PBD_HRIS_For-Posting.pdf` published by the DepEd BAC Secretariat. Extracted text is in [`extracted/`](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/extracted) and all deliverables are in [`deliverables/`](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/deliverables).

**About:** Prepared by **deped-hris**, Solutions architect — HRIS and data platforms. This site is a public analysis; no official association with the Department of Education is implied. Feedback and issues welcome on [GitHub](https://github.com/DennisPitallano/deped-hris-analysis).

</section>
