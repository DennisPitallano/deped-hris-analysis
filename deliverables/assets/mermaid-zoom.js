/*
 * Mermaid rendering + click-to-zoom overlay.
 *
 * Renders all <pre class="mermaid-diagram"> blocks using Mermaid.js loaded
 * from CDN, then wraps each rendered SVG so it can be clicked / Enter /
 * Space to open a fullscreen modal with wheel-zoom and drag-pan (via
 * svg-pan-zoom). Esc or backdrop click closes the modal.
 *
 * The fence class is intentionally NOT `mermaid` — that is Material's
 * reserved class, and Material 9.7.x has a regression that produces empty
 * divs when it tries to render. Using `mermaid-diagram` bypasses Material
 * so we can render everything ourselves and keep behaviour consistent with
 * the PDF pipeline (which also uses Mermaid 11.4.1).
 */
(function () {
  "use strict";

  const SELECTOR = "pre.mermaid-diagram, .mermaid-diagram:not(.rendered)";
  let seq = 0;

  function currentTheme() {
    const scheme = document.body?.getAttribute("data-md-color-scheme") || "";
    return scheme === "slate" ? "dark" : "default";
  }

  function initMermaid() {
    if (!window.mermaid) return false;
    try {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: currentTheme(),
        securityLevel: "loose",
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        er: { useMaxWidth: true },
        sequence: { useMaxWidth: true },
        c4: { useMaxWidth: true },
      });
      return true;
    } catch (e) {
      console.warn("mermaid.initialize failed", e);
      return false;
    }
  }

  async function renderOne(el) {
    // Skip if already rendered
    if (el.dataset.rendered === "1") return;
    const codeEl = el.querySelector("code");
    const source = (codeEl ? codeEl.textContent : el.textContent) || "";
    if (!source.trim()) return;
    el.dataset.rendered = "1"; // claim the block so we don't race

    const id = "mm-" + (++seq).toString(36) + "-" + Date.now().toString(36);
    try {
      const result = await window.mermaid.render(id, source);
      const svg = typeof result === "string" ? result : result.svg;
      const bind = typeof result === "object" ? result.bindFunctions : null;

      const wrap = document.createElement("div");
      wrap.className = "mermaid-diagram rendered";
      wrap.dataset.mermaidSource = source;
      wrap.innerHTML = svg;
      // Strip any residual max-width from Mermaid's inline style so our CSS wins
      const inner = wrap.querySelector("svg");
      if (inner) {
        inner.style.maxWidth = "100%";
        inner.style.height = "auto";
      }
      if (bind) {
        try { bind(wrap); } catch (e) { /* ignore */ }
      }
      el.parentNode.replaceChild(wrap, el);
      bindZoom(wrap);
    } catch (err) {
      console.error("Mermaid render error for", id, err);
      const msg = document.createElement("pre");
      msg.className = "mermaid-error";
      msg.textContent = "Diagram failed to render: " + ((err && err.message) || err);
      el.parentNode.replaceChild(msg, el);
    }
  }

  async function renderAll() {
    if (!window.mermaid) return;
    if (!initMermaid()) return;
    const blocks = Array.from(document.querySelectorAll(SELECTOR));
    for (const el of blocks) {
      // Render sequentially so shared IDs don't collide
      await renderOne(el);
    }
  }

  /* -------- Click-to-zoom overlay -------- */

  function bindZoom(container) {
    if (container.dataset.zoomInit === "1") return;
    if (!container.querySelector("svg")) return;
    container.dataset.zoomInit = "1";
    container.setAttribute("role", "button");
    container.setAttribute("tabindex", "0");
    container.setAttribute("aria-label", "Diagram — click to open zoomable view");
    container.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(container);
    });
    container.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(container);
      }
    });
  }

  function openModal(container) {
    const original = container.querySelector("svg");
    if (!original) return;

    const overlay = document.createElement("div");
    overlay.className = "diagram-zoom-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Zoomed diagram");

    const stage = document.createElement("div");
    stage.className = "diagram-zoom-stage";

    const svg = original.cloneNode(true);
    svg.removeAttribute("style");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.maxWidth = "none";
    svg.style.maxHeight = "none";
    stage.appendChild(svg);

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "diagram-zoom-close";
    closeBtn.setAttribute("aria-label", "Close (Esc)");
    closeBtn.innerHTML = "&times;";

    const hint = document.createElement("div");
    hint.className = "diagram-zoom-hint";
    hint.textContent = "Scroll to zoom · drag to pan · double-click to reset · Esc to close";

    overlay.appendChild(stage);
    overlay.appendChild(closeBtn);
    overlay.appendChild(hint);
    document.body.appendChild(overlay);
    document.body.classList.add("diagram-zoom-open");

    let panZoom = null;
    try {
      if (window.svgPanZoom) {
        panZoom = window.svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: false,
          fit: true,
          contain: false,
          center: true,
          minZoom: 0.4,
          maxZoom: 30,
          zoomScaleSensitivity: 0.35,
          dblClickZoomEnabled: false,
        });
        // Double-click resets view
        stage.addEventListener("dblclick", function () {
          if (panZoom) { panZoom.resetZoom(); panZoom.center(); panZoom.fit(); }
        });
      }
    } catch (err) {
      console.warn("svg-pan-zoom init failed:", err);
    }

    function close() {
      try { if (panZoom) panZoom.destroy(); } catch (e) { /* noop */ }
      overlay.remove();
      document.body.classList.remove("diagram-zoom-open");
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) { if (e.key === "Escape") close(); }

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.addEventListener("keydown", onKey);
    closeBtn.focus();
  }

  /* -------- Bootstrap + theme change + instant-nav re-render -------- */

  function boot() {
    if (window.mermaid) {
      renderAll();
    } else {
      // Poll briefly in case the CDN script hasn't executed yet
      let tries = 0;
      const t = setInterval(function () {
        if (window.mermaid || ++tries > 40) {
          clearInterval(t);
          if (window.mermaid) renderAll();
        }
      }, 100);
    }
  }

  function rerenderForTheme() {
    // Preserve source, delete rendered wrappers, rebuild pre.mermaid-diagram
    document.querySelectorAll(".mermaid-diagram.rendered").forEach(function (wrap) {
      const source = wrap.dataset.mermaidSource;
      if (!source) return;
      const pre = document.createElement("pre");
      pre.className = "mermaid-diagram";
      const code = document.createElement("code");
      code.textContent = source;
      pre.appendChild(code);
      wrap.parentNode.replaceChild(pre, wrap);
    });
    renderAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Material's instant navigation triggers this observable on each page change
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () { setTimeout(boot, 30); });
  }

  // Re-render diagrams when the theme toggle flips light/dark
  const themeObs = new MutationObserver(function (records) {
    for (const r of records) {
      if (r.attributeName === "data-md-color-scheme") {
        rerenderForTheme();
        return;
      }
    }
  });
  if (document.body) {
    themeObs.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      themeObs.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    });
  }
})();
