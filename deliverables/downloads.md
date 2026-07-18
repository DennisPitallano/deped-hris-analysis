---
title: Downloads
---

# Downloads

All three papers are available as high-quality PDFs (A4, page numbered) with rendered Mermaid diagrams.

- :material-file-pdf-box: [Technical Specifications Brief (PDF)](pdf/A_technical_specifications_brief.pdf){ .md-button .md-button--primary }
- :material-file-pdf-box: [Bid Response Outline — placeholders (PDF)](pdf/B_tor_response_outline.pdf){ .md-button .md-button--primary }
- :material-file-pdf-box: [Architecture & Data Model (PDF)](pdf/C_architecture_and_data_model.pdf){ .md-button .md-button--primary }

The source markdown files are available in the [repository](https://github.com/DennisPitallano/deped-hris-analysis/tree/main/deliverables).

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
