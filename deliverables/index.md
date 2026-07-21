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
[Open slides ↗](slides/){ .md-button }
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

- :material-star-four-points-outline: __D · Value-Added Components__ <span class="badge-new">New</span>

    ---

    Eight strategic differentiators offered **at no additional cost**
    to the ABC: bilingual UI + SMS/USSD channels, offline-first PWA with
    CRDT sync, self-hosted HR Copilot, M6 payroll anomaly detector,
    hash-chained audit ledger, public transparency portal, 10-year
    source escrow with a community edition, and an advisory teacher-
    to-school placement optimiser (Chile SIGE pattern).

    <span class="tag-row">
      <span class="tag">Bid edge</span>
      <span class="tag">Zero incremental cost</span>
      <span class="tag">AI + offline + audit</span>
    </span>

    [Read the value-adds :octicons-arrow-right-24:](D_value_added.md){ .md-button .md-button--primary }
    [Formal wording in B §16.5](B_tor_response_outline.md#165-value-added-components-at-no-additional-cost){ .md-button }

- :material-earth: __E · International Benchmarks__

    ---

    Comparable government HRIS systems worldwide — India (Shala Darpan,
    DIKSHA), Kenya (TPAD), Chile (SIGE), NHS ESR, Malaysia HRMIS,
    Estonia X‑Road, and more. Six patterns worth borrowing, three
    disasters worth explicitly avoiding, and one uncovered value-add
    candidate.

    <span class="tag-row">
      <span class="tag">13 systems</span>
      <span class="tag">Novopay lesson</span>
      <span class="tag">Chile solver</span>
    </span>

    [Read the benchmarks :octicons-arrow-right-24:](E_international_benchmarks.md){ .md-button .md-button--primary }
    [PDF](pdf/E_international_benchmarks.pdf){ .md-button }

- :material-cash-multiple: __F · Delivery Plan, Infrastructure & Cost__ <span class="badge-new">New</span>

    ---

    A grounded, bottom-up model — **is PHP 500 M realistic for what
    the PBD asks?** 2026 PH-market rates for a 69-FTE peak team,
    **two deployment options priced side-by-side** (on-premises and
    public cloud) with pros, cons, and a six-question decision
    framework. Month-by-month staffing curve across 12 build months
    + 12 warranty months. Lands at **PHP 421 M (on-prem)** or
    **PHP 359 M (cloud)** — both inside the ABC.

    <span class="tag-row">
      <span class="tag">Cost model</span>
      <span class="tag">2026 PH rates</span>
      <span class="tag">Two deployment options</span>
      <span class="tag">24-month roadmap</span>
    </span>

    [Read the delivery model :octicons-arrow-right-24:](F_delivery_and_cost.md){ .md-button .md-button--primary }

- :material-file-star-outline: __G · Executive One-Pager__ <span class="badge-new">New</span>

    ---

    The whole argument in a **single page** — ABC math, 24-month
    Gantt, eight differentiators, top three risks. For evaluator
    committee chairs and senior officials who need the pitch in
    90 seconds, not 90 minutes.

    <span class="tag-row">
      <span class="tag">Single page</span>
      <span class="tag">Exec briefing</span>
    </span>

    [Read the one-pager :octicons-arrow-right-24:](G_executive_one_pager.md){ .md-button .md-button--primary }
    [PDF](pdf/G_executive_one_pager.pdf){ .md-button }

- :material-database-arrow-right-outline: __H · Data Migration Plan__ <span class="badge-new">New</span>

    ---

    Legacy PIS + PSIPOP + CSC-BEA + 850 K paper 201 files → new
    HRIS. Sources, target model, quality profile, wave plan
    (pilot → regional), reconciliation gates, cutover freeze
    windows, and a rollback path. The workstream that Novopay,
    Queensland Health, and NHS NPfIT all got wrong.

    <span class="tag-row">
      <span class="tag">1 M+ records</span>
      <span class="tag">Wave rollout</span>
      <span class="tag">Reconciliation</span>
    </span>

    [Read the migration plan :octicons-arrow-right-24:](H_data_migration.md){ .md-button .md-button--primary }
    [PDF](pdf/H_data_migration.pdf){ .md-button }

- :material-shield-lock-outline: __I · Privacy Impact Assessment__ <span class="badge-new">New</span>

    ---

    Draft PIA in line with **RA 10173** and **NPC Circular 16-01**.
    Data inventory across 15 categories, lawful-basis matrix per
    §12 and §13, data-flow diagram, 15-risk matrix, TOM controls
    (§20), breach-response protocol, retention schedule, and DPO
    sign-off sequence. NPC-fileable after DPO edits.

    <span class="tag-row">
      <span class="tag">RA 10173</span>
      <span class="tag">NPC-ready</span>
      <span class="tag">DPO checklist</span>
    </span>

    [Read the PIA :octicons-arrow-right-24:](I_privacy_impact_assessment.md){ .md-button .md-button--primary }
    [PDF](pdf/I_privacy_impact_assessment.pdf){ .md-button }

- :material-alert-outline: __J · Risk Register__ <span class="badge-new">New</span>

    ---

    Standalone bid-grade register with **18 tracked risks**, each
    scored likelihood × impact, mapped to a named owner, a
    monitorable trigger, a specific control, and a residual
    score after mitigation. Includes heat map, contingency
    draw-down policy, and review cadence.

    <span class="tag-row">
      <span class="tag">18 risks</span>
      <span class="tag">Heat map</span>
      <span class="tag">Residual scoring</span>
    </span>

    [Read the register :octicons-arrow-right-24:](J_risk_register.md){ .md-button .md-button--primary }
    [PDF](pdf/J_risk_register.pdf){ .md-button }

- :material-connection: __K · Integration Specifications__ <span class="badge-new">New</span>

    ---

    Contract, auth, rate limits, retry policy, and runbook per
    regulator across the nine required integrations —
    **GSIS, Pag-IBIG, PhilHealth, SSS, BIR, CSC, DBM, DICT,
    PhilSys**. Common sequence diagram, mocking strategy, and
    observability metrics. The document engineers open on day
    one of M2.

    <span class="tag-row">
      <span class="tag">9 regulators</span>
      <span class="tag">OpenAPI</span>
      <span class="tag">Runbooks</span>
    </span>

    [Read the integration specs :octicons-arrow-right-24:](K_integration_specifications.md){ .md-button .md-button--primary }
    [PDF](pdf/K_integration_specifications.pdf){ .md-button }

</div>

## PBD coverage matrix { .section-heading }

Which paper answers which PBD section — a quick confidence check that nothing was skipped.

<div class="compare-table" markdown>

| PBD section | Topic | Answered in |
|---|---|---|
| §I–II · Bid Data | Eligibility, instructions | Bidder-specific in [B](B_tor_response_outline.md); not analysed here |
| §III–IV · Eligibility & submission | Documentary requirements | Bidder-specific in [B](B_tor_response_outline.md) |
| §V · SCC | Special conditions (subcontracting, LDs, warranty) | [A §A.1](A_technical_specifications_brief.md#a1-project-fundamentals), [F §F.1](F_delivery_and_cost.md#f1-guiding-assumptions) |
| §VI · Schedule | Milestones, payment weights | [A §A.4](A_technical_specifications_brief.md), [F §F.11](F_delivery_and_cost.md#f11-roadmap--month-by-month-with-staffing-curve) |
| §VII.1 · Project overview | Scope, entities, duration | [A §A.1–§A.2](A_technical_specifications_brief.md) |
| §VII.2 · Deliverables | Modules 1–11, reports, turnover | [A §A.4](A_technical_specifications_brief.md), [B §5–§9](B_tor_response_outline.md) |
| §VII.3 · General specs | Integration, workflow, controls, forms | [A §A.3](A_technical_specifications_brief.md#a3-general-cross-cutting-specifications), [C](C_architecture_and_data_model.md), [K](K_integration_specifications.md) |
| §VII.4 · Functional specs | Applicant, RSP, ESS, Leave, Payroll, Performance, L&D, R&R, Wellness, Succession | [A §A.4](A_technical_specifications_brief.md), [C §Components](C_architecture_and_data_model.md), [B §5–§9](B_tor_response_outline.md) |
| §VII.5 · Architecture | Platform, security, non-functional | [C](C_architecture_and_data_model.md), [F §F.5](F_delivery_and_cost.md#f5-infrastructure--on-premises-primary), [I](I_privacy_impact_assessment.md) |
| §VII.6 · SLA | P1–P4, uptime, response time | [A §A.3](A_technical_specifications_brief.md#a3-general-cross-cutting-specifications), [F §F.11.2](F_delivery_and_cost.md#f112-warranty-year--service-levels) |
| §VII.7 · Security & privacy | DPA, ISO, MFA, RBAC, breach | [C §Security](C_architecture_and_data_model.md), [I](I_privacy_impact_assessment.md) |
| §VII.8 · Integration | 9 regulators + Landbank | [C](C_architecture_and_data_model.md), [K](K_integration_specifications.md) |
| §VII.9 · Reporting | 28 recruitment reports + others | [A §A.4](A_technical_specifications_brief.md), [B §10](B_tor_response_outline.md), [C §Report views](C_architecture_and_data_model.md) |
| §VII.10 · Training | Materials, batches, coverage | [F §F.8](F_delivery_and_cost.md#f8-training-change-management-documentation) |
| §VII.11 · Turnover | Source code, escrow, documentation | [B §11–§12](B_tor_response_outline.md), [D §7](D_value_added.md), [F §F.11.1](F_delivery_and_cost.md#f111-milestone-entry--exit-gates-money-flow-view) |
| §VII.12 · Warranty | Post-acceptance service | [F §F.11.2](F_delivery_and_cost.md#f112-warranty-year--service-levels), [J §J.3](J_risk_register.md) |
| §VII.13 · Risk | Risk management approach | [B §15](B_tor_response_outline.md), [J](J_risk_register.md) |
| §VII.14 · Value-added components | Discretionary offer | [D](D_value_added.md), [B §16.5](B_tor_response_outline.md) |
| Legacy migration (implicit) | PIS → HRIS | [H](H_data_migration.md) |
| Executive brief (implicit) | 1-page summary | [G](G_executive_one_pager.md) |
| International precedent (implicit) | Reference systems | [E](E_international_benchmarks.md) |
| Cost model (implicit) | Realism against ABC | [F](F_delivery_and_cost.md) |

</div>

## Which paper is for you? { .section-heading }

<div class="compare-table" markdown>

| Paper | You are… | Best for | Format | Length |
| :--- | :--- | :--- | :--- | :--- |
| **[A · Brief](A_technical_specifications_brief.md)** | Reading the RFP | Orientation, scope, SLAs | Structured analysis | ~22 KB · 20 min |
| **[B · Response](B_tor_response_outline.md)** | Preparing a bid | Compliance, evidence, pricing | Section VII compliance matrix | ~56 KB · 45 min |
| **[C · Architecture](C_architecture_and_data_model.md)** | Building the system | Design, data model, C4 | 8 Mermaid diagrams + PostgreSQL DDL | ~74 KB · 60 min |
| **[D · Value-Add](D_value_added.md)** | Looking for the edge | Winning the bid | Eight-component pitch + Gantt | ~14 KB · 15 min |
| **[E · Benchmarks](E_international_benchmarks.md)** | Wanting international proof | Citing precedent to evaluators | Country tables + lessons | ~18 KB · 20 min |
| **[F · Delivery & Cost](F_delivery_and_cost.md)** | Costing the delivery | Sizing team, infra, budget | Bottom-up model · two deployment options | ~34 KB · 30 min |
| **[G · Exec](G_executive_one_pager.md)** | An evaluator / exec | 90-second pitch | Single-page brief | ~4 KB · 3 min |
| **[H · Migration](H_data_migration.md)** | Planning cutover | Sources, waves, reconciliation | Wave plan + rollback + pipeline diagram | ~18 KB · 20 min |
| **[I · Privacy (PIA)](I_privacy_impact_assessment.md)** | The DPO / NPC reviewer | RA 10173 · NPC filing | PIA sections + risk + breach sequence | ~28 KB · 30 min |
| **[J · Risk Register](J_risk_register.md)** | The steering committee | Owners, triggers, residual scores | 18-risk register + heat map | ~14 KB · 15 min |
| **[K · Integrations](K_integration_specifications.md)** | The engineering team | Contracts + runbooks per regulator | Per-regulator specs + sequence diagram | ~18 KB · 20 min |
| **[Glossary](glossary.md)** | Lost in acronyms | Reference | Alphabetical acronym list | ~10 KB · scan |

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
- **Looking to win the bid?** Read **[Paper D](D_value_added.md)** — the eight value-added components that beat competitors at no extra cost.
- **Need international precedent?** Study **[Paper E](E_international_benchmarks.md)** — comparable systems worldwide and the three disasters worth citing as ones you avoid.
- **Costing the delivery?** Read **[Paper F](F_delivery_and_cost.md)** — bottom-up cost model at 2026 PH rates. Two deployment options priced side-by-side: on-prem at **PHP 421 M** or cloud at **PHP 359 M**. Both inside the PHP 500 M ABC.
- **Have 90 seconds, not 90 minutes?** Read **[Paper G](G_executive_one_pager.md)** — the whole argument on a single page.
- **Worried about the cutover?** Read **[Paper H](H_data_migration.md)** — how to move 1 M+ records without repeating Novopay.
- **DPO / NPC-facing?** Read **[Paper I](I_privacy_impact_assessment.md)** — draft PIA under RA 10173 with lawful-basis matrix, data flows, and breach protocol.
- **On the steering committee?** Read **[Paper J](J_risk_register.md)** — 18 tracked risks with owners, triggers, and residual scores.
- **On the integration team?** Read **[Paper K](K_integration_specifications.md)** — contracts, auth, rate limits, and runbooks for the 9 regulator integrations.
- **Lost in acronyms?** Open the **[Glossary](glossary.md)** — every acronym across the papers, expanded and cross-referenced.
- **Looking at a different DepEd bid?** A **[sibling analysis of the DepEd DTI REI](https://dennispitallano.github.io/deped-dti-analysis/)** (`2026C-ICTS2-003-B5-CB-044`, ABC PHP 105 M, Managed Services for Adopt-a-School + School Management System) is live on its own site.
- **Prefer offline reading?** All papers are available as [PDFs](downloads.md) with rendered diagrams.
- **Presenting to stakeholders?** A 20-slide [executive deck](slides/) walks through all five papers with the C4 diagrams and milestone Gantt embedded.

</div>

---

<section class="page-footer" markdown>

**Source material:** The Philippine Bidding Document `PBD_HRIS_For-Posting.pdf` published by the DepEd BAC Secretariat. Extracted text is in [`extracted/`](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/extracted) and all deliverables are in [`deliverables/`](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/deliverables).

**Related work:** an independent analysis of the DepEd DTI REI (Managed Services for Digital Transformation Initiatives, Project `2026C-ICTS2-003-B5-CB-044`, ABC PHP 105 M) sits at [dennispitallano.github.io/deped-dti-analysis](https://dennispitallano.github.io/deped-dti-analysis/) — same author, same ICTS-SDD account, same analytical template.

**About:** Prepared by **deped-hris**, Solutions architect — HRIS and data platforms. This site is a public analysis; no official association with the Department of Education is implied. Feedback and issues welcome on [GitHub](https://github.com/DennisPitallano/deped-hris-analysis).

</section>
