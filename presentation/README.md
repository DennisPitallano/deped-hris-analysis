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

## Presenting as a normal slideshow (no visible controls)

Slidev is a browser-based deck, so there are two clean ways to present:

### 1 · Fullscreen (recommended)

- Press **`F`** — enters fullscreen. The bottom control bar fades after
  ~2 s of mouse idle, giving a PowerPoint-like presentation surface.
- Navigate with **`→ / ←`** (or **`Space`** / **`Shift+Space`**).
- Press **`Esc`** to leave fullscreen.

### 2 · Presenter mode (with speaker notes and next-slide preview)

- Open [`http://localhost:3030/presenter`](http://localhost:3030/presenter)
  on your laptop.
- Open [`http://localhost:3030/`](http://localhost:3030/) on the projector
  (or drag the browser window to the external display and press `F`).
- Both stay in sync automatically.

### 3 · Export and play offline

If you cannot rely on a network (or want a truly "PowerPoint-style" file):

```powershell
npm run export         # → slides-export.pdf  (open, then hit F5 in your PDF reader)
npm run export-pptx    # → slides-export.pptx (open in PowerPoint / Keynote)
```

### In-deck keyboard shortcuts

| Key | Action |
|---|---|
| `F` | Fullscreen |
| `→` / `Space` | Next click / slide |
| `←` / `Shift+Space` | Previous |
| `O` | Overview of all slides (click to jump) |
| `D` | Toggle dark mode |
| `G` | Go-to slide (type number + Enter) |
| `?` | Show every shortcut |

### In-deck navigation

- Slide 3 is a **clickable table of contents** — jump straight to any
  paper section.
- Every section header slide (A / B / C / D / E) shows a small
  **A · B · C · D · E** breadcrumb in the top-right, plus a **TOC**
  link back to slide 3.

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
