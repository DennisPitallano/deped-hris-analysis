# DepEd HRIS — Analysis, Response and Architecture

Independent technical analysis of the Philippine Bidding Document for the
Department of Education's Human Resources Information System, plus a
placeholder-populated bid response and a reference architecture with a
PostgreSQL data model.

**Live site:** <https://dennispitallano.github.io/deped-hris-analysis/>

## Contents

- `PBD_HRIS_For-Posting.pdf` — the source Philippine Bidding Document (public).
- `extracted/` — clean text extractions of the PBD sections (produced by `extract_pdf.py` / `extract_sections.py`).
- `deliverables/` — the three deliverables, plus the built site content:
  - `A_technical_specifications_brief.md` — Section-by-section brief.
  - `B_tor_response_outline.md` — Placeholder-populated bid response.
  - `C_architecture_and_data_model.md` — C4 diagrams + PostgreSQL DDL.
  - `pdf/` — rendered PDF copies with live Mermaid diagrams.
  - `index.md`, `downloads.md`, `assets/` — MkDocs site content.
- `tools/md-to-pdf/` — Node.js Markdown → PDF converter (Puppeteer + Mermaid).
- `presentation/` — Slidev deck summarising all five papers (`slides.md`). Deployed to `/slides/` on GitHub Pages.
- `mkdocs.yml` — site configuration (Material for MkDocs).
- `.github/workflows/deploy-pages.yml` — CI/CD to GitHub Pages (builds MkDocs + Slidev).

## Local preview

```powershell
# One-time: install docs toolchain
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements-docs.txt

# Serve the site locally with hot reload
mkdocs serve
# → http://127.0.0.1:8000/
```

## Regenerate the PDFs

```powershell
cd tools/md-to-pdf
npm install                 # first time only
cd ../..
node .\tools\md-to-pdf\md2pdf.mjs `
  .\deliverables\A_technical_specifications_brief.md `
  .\deliverables\B_tor_response_outline.md `
  .\deliverables\C_architecture_and_data_model.md `
  --out-dir .\deliverables\pdf
```

## Preview the slide deck

```powershell
cd presentation
npm install                 # first time only
npm run dev                 # → http://localhost:3030
```

Export the deck to PDF or PowerPoint:

```powershell
cd presentation
npm run export              # → slides-export.pdf
npm run export-pptx         # → slides-export.pptx
```

## Publishing

Pushes to `main` trigger the GitHub Actions workflow that builds MkDocs and
deploys to GitHub Pages. See [PUBLISHING.md](PUBLISHING.md) for the one-time
setup.

## License and attribution

- The analysis, response outline, and architecture are © the author.
- The underlying Philippine Bidding Document is a public document of the
  Department of Education, Republic of the Philippines.
- No official association with DepEd is implied.
