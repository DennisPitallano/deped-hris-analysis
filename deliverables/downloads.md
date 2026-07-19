---
title: Downloads
---

# Downloads

All three papers are available as high-quality PDFs — A4, page numbered, with fully rendered Mermaid diagrams.

<div class="grid cards downloads-grid" markdown>

- :material-file-pdf-box: __A · Technical Specifications Brief__

    ---

    Consolidated PBD analysis — every specification, module, milestone, SLA,
    report, and regulator, distilled from the source document.

    <span class="tag-row">
      <span class="tag">316 KB</span>
      <span class="tag">A4</span>
      <span class="tag">Page numbered</span>
    </span>

    [Download PDF](pdf/A_technical_specifications_brief.pdf){ .md-button .md-button--primary }
    [Read online](A_technical_specifications_brief.md){ .md-button }

- :material-file-pdf-box: __B · Bid Response Outline__

    ---

    Full response document with `[[PLACEHOLDER]]` markers, compliance matrix,
    milestone entry/exit criteria, and a twelve-item risk register.

    <span class="tag-row">
      <span class="tag">868 KB</span>
      <span class="tag">A4</span>
      <span class="tag">Placeholders</span>
    </span>

    [Download PDF](pdf/B_tor_response_outline.pdf){ .md-button .md-button--primary }
    [Read online](B_tor_response_outline.md){ .md-button }

- :material-file-pdf-box: __C · Architecture & Data Model__

    ---

    C4 diagrams, deployment view, state machines, and ~1000 lines of
    PostgreSQL DDL for Core HR, Payroll, and Recruitment.

    <span class="tag-row">
      <span class="tag">1.1 MB</span>
      <span class="tag">A4</span>
      <span class="tag">Mermaid + DDL</span>
    </span>

    [Download PDF](pdf/C_architecture_and_data_model.pdf){ .md-button .md-button--primary }
    [Read online](C_architecture_and_data_model.md){ .md-button }

- :material-file-pdf-box: __D · Value-Added Components__ <span class="badge-new">New</span>

    ---

    Seven strategic differentiators offered at no incremental cost —
    AI copilot, offline-first PWA, payroll anomaly detector, hash-chained
    audit ledger, transparency portal, and 10-year escrow.

    <span class="tag-row">
      <span class="tag">Bid edge</span>
      <span class="tag">159 KB</span>
      <span class="tag">A4 · Mermaid Gantt</span>
    </span>

    [Download PDF](pdf/D_value_added.pdf){ .md-button .md-button--primary }
    [Read online](D_value_added.md){ .md-button }

</div>

## Source material

The source markdown files are in the [repository](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/deliverables); the original bidding document (`PBD_HRIS_For-Posting.pdf`) and the extracted text are also included.

## Regenerate the PDFs

The PDFs are produced by a local Node.js converter that renders Mermaid diagrams via Puppeteer.

```powershell
cd DepEd
node .\tools\md-to-pdf\md2pdf.mjs `
  .\deliverables\A_technical_specifications_brief.md `
  .\deliverables\B_tor_response_outline.md `
  .\deliverables\C_architecture_and_data_model.md `
  --out-dir .\deliverables\pdf
```

## License

The analysis, response outline, and architecture are © the author. The underlying Philippine Bidding Document is a public document of the Department of Education, Republic of the Philippines.
