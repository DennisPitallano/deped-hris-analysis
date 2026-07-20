# DepEd HRIS — Presentation

A [Slidev](https://sli.dev) deck summarising the five analysis papers
(A–E) in the parent repository. Content is derived from
`deliverables/*.md` and stays in Markdown so it never drifts from the
source of truth.

## Why Slidev (and not PowerPoint)

- **Markdown-native.** Same authoring model as the papers and the
  MkDocs site — no duplicated content.
- **Renders Mermaid live.** The C4, ER, and state diagrams in
  Paper C are copy-pasted into slides and render at build time.
- **Exports both ways.** `pnpm export` → PDF, `pnpm export-pptx` → an
  editable `.pptx` for stakeholders who need PowerPoint.
- **Deployable.** `pnpm build` produces a static site that can be
  hosted alongside the MkDocs site under
  `/deped-hris-analysis/slides/`.
- **Speaker mode.** Press `O` for overview, `P` for presenter view,
  arrow keys to navigate, `F` for fullscreen.

## Prerequisites

- Node.js **≥ 18**
- pnpm, npm, or yarn

## Install

```powershell
cd presentation
npm install
```

## Present locally

```powershell
npm run dev
# → http://localhost:3030
```

## Export

```powershell
# PDF (uses Playwright / Chromium)
npm run export

# PowerPoint (.pptx)
npm run export-pptx

# Static site (for GitHub Pages)
npm run build
# → output in ./dist
```

## Editing

The whole deck lives in [`slides.md`](slides.md). Slides are separated
by `---` on its own line. Front matter at the top controls theme,
transitions, and metadata. See the [Slidev syntax
reference](https://sli.dev/guide/syntax) for layouts, code blocks,
click animations, and speaker notes.

## Theme

The deck uses the **`seriph`** theme for a formal, editorial look that
matches the tone of the analysis papers. Swap to `default`,
`apple-basic`, or any [community theme](https://sli.dev/themes/gallery)
by changing the `theme:` field in the front matter of `slides.md`.
