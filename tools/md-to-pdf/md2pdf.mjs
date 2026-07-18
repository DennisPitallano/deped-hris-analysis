// Local Markdown → PDF converter with Mermaid support.
// Uses puppeteer-core with the installed Microsoft Edge (no Chromium download),
// pipe transport (no localhost websocket), and explicit wait-for-mermaid before print.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attrs from "markdown-it-attrs";
import taskLists from "markdown-it-task-lists";
import hljs from "highlight.js";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* --------------------------------------------------------------------------
 * CLI
 * -------------------------------------------------------------------------- */

const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error(
    "Usage: node md2pdf.mjs <input.md> [<input2.md> ...] [--out-dir <dir>] [--edge <path>] [--debug]"
  );
  process.exit(1);
}

let outDir = null;
let edgePathOverride = null;
let debug = false;
const inputs = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--out-dir") outDir = argv[++i];
  else if (a === "--edge") edgePathOverride = argv[++i];
  else if (a === "--debug") debug = true;
  else inputs.push(a);
}

/* --------------------------------------------------------------------------
 * Markdown → HTML
 * -------------------------------------------------------------------------- */

function buildMd() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
    highlight(str, lang) {
      if (lang === "mermaid") return "";
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
        } catch { /* fall through */ }
      }
      return "";
    },
  });

  md.use(anchor, { permalink: false });
  md.use(attrs);
  md.use(taskLists, { enabled: true, label: false, labelAfter: false });

  const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const info = token.info ? token.info.trim() : "";
    if (info === "mermaid") {
      const raw = token.content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre class="mermaid">${raw}</pre>\n`;
    }
    return defaultFence(tokens, idx, options, env, self);
  };

  return md;
}

/* --------------------------------------------------------------------------
 * HTML shell (loads Mermaid ESM locally, no network required)
 * -------------------------------------------------------------------------- */

const mermaidEsmPath = path.join(
  __dirname,
  "node_modules",
  "mermaid",
  "dist",
  "mermaid.esm.min.mjs"
);
const highlightCssPath = path.join(
  __dirname,
  "node_modules",
  "highlight.js",
  "styles",
  "github.css"
);
const stylePath = path.join(__dirname, "style.css");

async function readSafe(file) {
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return "";
  }
}

async function buildHtml(bodyHtml, title) {
  const [style, hlStyle] = await Promise.all([
    readSafe(stylePath),
    readSafe(highlightCssPath),
  ]);
  const mermaidUrl = pathToFileURL(mermaidEsmPath).href;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<style>${hlStyle}
${style}</style>
</head>
<body>
${bodyHtml}
<script type="module">
  import mermaid from "${mermaidUrl}";
  mermaid.initialize({
    startOnLoad: false,
    theme: "default",
    themeVariables: {
      fontFamily: '"Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: "15px",
      background: "#ffffff",
      textColor: "#1f2328",
      primaryColor: "#e8f0fb",
      primaryTextColor: "#0b1f3a",
      primaryBorderColor: "#3b6db3",
      secondaryColor: "#fff5d6",
      secondaryTextColor: "#3a2b00",
      secondaryBorderColor: "#c8a94a",
      tertiaryColor: "#eaf6ea",
      tertiaryTextColor: "#0f3d0f",
      tertiaryBorderColor: "#3d9c3d",
      lineColor: "#2a2a2a",
      // C4 palette (light with dark text so print is legible)
      c4TextColor: "#0b1f3a",
      c4BorderColor: "#3b6db3",
      c4PersonBg: "#dbeafe",
      c4PersonBorder: "#1e4c8a",
      c4PersonFontColor: "#0b1f3a",
      c4ExternalPersonBg: "#eef2f7",
      c4ExternalPersonBorder: "#4d5b6f",
      c4ExternalPersonFontColor: "#0b1f3a",
      c4SystemBg: "#bfdcff",
      c4SystemBorder: "#1e4c8a",
      c4SystemFontColor: "#0b1f3a",
      c4ExternalSystemBg: "#e5ecf5",
      c4ExternalSystemBorder: "#4d5b6f",
      c4ExternalSystemFontColor: "#0b1f3a",
      c4ContainerBg: "#cfe2ff",
      c4ContainerBorder: "#1e4c8a",
      c4ContainerFontColor: "#0b1f3a",
      c4ContainerDbBg: "#fce8b2",
      c4ContainerDbBorder: "#8a6d1f",
      c4ContainerDbFontColor: "#3a2b00",
      c4ComponentBg: "#e5ecf7",
      c4ComponentBorder: "#25518f",
      c4ComponentFontColor: "#0b1f3a",
      c4ComponentDbBg: "#fdefc4",
      c4ComponentDbBorder: "#8a6d1f",
      c4ComponentDbFontColor: "#3a2b00",
      c4BoundaryColor: "#274069",
    },
    themeCSS: [
      /* Mermaid prefixes every rule with the diagram's SVG id (e.g. #mermaid-123).
       * So selectors here are effectively scoped to the mermaid SVG only.
       * Use raw SVG element selectors — no .mermaid prefix. */
      "svg { background: #ffffff !important; }",
      /* Every text node dark, including inline fill=\"#FFFFFF\" on C4 titles */
      "text, tspan { fill: #1f2328 !important; }",
      /* Slight boost for the stereotype labels (<<component>>, <<container>>, ...) */
      "text[font-style='italic'] { fill: #4a5568 !important; font-size: 11px !important; }",
      /* Flowchart / state / ER edge labels sit inside foreignObject as HTML */
      ".edgeLabel, .edgeLabel *, .edgeLabel div, .edgeLabel span, .edgeLabel p {",
      "  color: #1f2328 !important;",
      "  background-color: #ffffff !important;",
      "  font-weight: 600 !important;",
      "}",
      ".edgeLabel rect { fill: #ffffff !important; stroke: #999 !important; }",
      /* Ensure sequence/state message text is dark too */
      ".messageText { fill: #1f2328 !important; font-weight: 600 !important; }"
    ].join("\\n"),
    flowchart: { htmlLabels: true, useMaxWidth: true, curve: "basis" },
    er: { useMaxWidth: true },
    c4: { useMaxWidth: true },
    sequence: { useMaxWidth: true },
    state: { useMaxWidth: true }
  });
  window.__mermaidState = { done: false, error: null, count: 0 };
  (async () => {
    try {
      const nodes = document.querySelectorAll("pre.mermaid");
      window.__mermaidState.count = nodes.length;
      if (nodes.length) {
        await mermaid.run({ nodes });
      }
      window.__mermaidState.done = true;
    } catch (err) {
      window.__mermaidState.error = String(err && err.message || err);
      window.__mermaidState.done = true;
    }
  })();
</script>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* --------------------------------------------------------------------------
 * Locate Edge
 * -------------------------------------------------------------------------- */

async function findEdge() {
  if (edgePathOverride) return edgePathOverride;
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  for (const c of candidates) {
    try {
      await fs.access(c);
      return c;
    } catch { /* try next */ }
  }
  throw new Error(
    "Could not find msedge.exe. Pass --edge <path> or install Microsoft Edge."
  );
}

/* --------------------------------------------------------------------------
 * Convert
 * -------------------------------------------------------------------------- */

async function convertOne(browser, inputPath) {
  const abs = path.resolve(inputPath);
  const md = buildMd();
  const src = await fs.readFile(abs, "utf8");
  const title = path.basename(abs, path.extname(abs));
  const bodyHtml = md.render(src);
  const html = await buildHtml(bodyHtml, title);

  const outputName = title + ".pdf";
  const targetDir = outDir ? path.resolve(outDir) : path.dirname(abs);
  await fs.mkdir(targetDir, { recursive: true });
  const outputPath = path.join(targetDir, outputName);

  // Persist HTML to a file next to the script's node_modules so file:// module
  // imports work reliably.
  const tempHtml = path.join(__dirname, `.${title}.tmp.html`);
  await fs.writeFile(tempHtml, html, "utf8");
  const fileUrl = pathToFileURL(tempHtml).href;

  const page = await browser.newPage();
  page.setDefaultTimeout(60000);
  page.on("pageerror", (e) =>
    console.error(`[pageerror] ${title}: ${e.message}`)
  );
  page.on("console", (msg) => {
    if (debug || msg.type() === "error") {
      console.error(`[console.${msg.type()}] ${title}: ${msg.text()}`);
    }
  });

  try {
    await page.goto(fileUrl, { waitUntil: "load" });
    await page.emulateMediaType("print");

    const result = await page.waitForFunction(
      "window.__mermaidState && window.__mermaidState.done === true",
      { timeout: 90000 }
    );
    const state = await page.evaluate(() => window.__mermaidState);
    if (state.error) {
      console.warn(`[warn] ${title}: mermaid error — ${state.error}`);
    } else if (debug) {
      console.log(`[debug] ${title}: mermaid rendered ${state.count} diagram(s)`);
    }

    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: { top: "16mm", right: "12mm", bottom: "18mm", left: "12mm" },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size:8pt;color:#666;width:100%;padding:0 12mm;">
          <span>${escapeHtml(title)}</span>
        </div>`,
      footerTemplate: `
        <div style="font-size:8pt;color:#666;width:100%;padding:0 12mm;text-align:center;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>`,
    });
  } finally {
    await page.close().catch(() => {});
    await fs.rm(tempHtml, { force: true }).catch(() => {});
  }

  return outputPath;
}

/* --------------------------------------------------------------------------
 * Main
 * -------------------------------------------------------------------------- */

async function main() {
  const launchOpts = {
    headless: true,
    dumpio: debug,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "--allow-file-access-from-files",
      "--hide-scrollbars",
    ],
  };
  if (edgePathOverride) {
    launchOpts.executablePath = edgePathOverride;
  }
  const browser = await puppeteer.launch(launchOpts);

  try {
    for (const input of inputs) {
      const started = Date.now();
      const outputPath = await convertOne(browser, input);
      const secs = ((Date.now() - started) / 1000).toFixed(1);
      console.log(`OK  ${input}  ->  ${outputPath}  (${secs}s)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("FATAL:", err.message || err);
  process.exit(1);
});
