/*
 * Click-to-zoom overlay for Mermaid diagrams.
 *
 * On click / Enter / Space on any .mermaid block, opens a fullscreen modal
 * with pan-and-zoom (mouse wheel to zoom, drag to pan, Esc to close).
 * Works with MkDocs Material's instant navigation via the document$ observable.
 * Requires svg-pan-zoom to be loaded first (see mkdocs.yml extra_javascript).
 */
(function () {
  "use strict";

  function ensureBound(el) {
    if (el.dataset.zoomInit === "1") return;
    if (!el.querySelector("svg")) return; // Mermaid not rendered yet
    el.dataset.zoomInit = "1";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "Diagram — click to open zoomable view");
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(el);
    });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(el);
      }
    });
  }

  function scan() {
    document.querySelectorAll(".mermaid").forEach(ensureBound);
  }

  function openModal(container) {
    var original = container.querySelector("svg");
    if (!original) return;

    var overlay = document.createElement("div");
    overlay.className = "diagram-zoom-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Zoomed diagram");

    var stage = document.createElement("div");
    stage.className = "diagram-zoom-stage";

    var svg = original.cloneNode(true);
    // Reset sizing so svg-pan-zoom can fit-to-container
    svg.removeAttribute("style");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.maxWidth = "none";
    svg.style.maxHeight = "none";
    stage.appendChild(svg);

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "diagram-zoom-close";
    closeBtn.setAttribute("aria-label", "Close (Esc)");
    closeBtn.innerHTML = "&times;";

    var hint = document.createElement("div");
    hint.className = "diagram-zoom-hint";
    hint.textContent = "Scroll to zoom · drag to pan · Esc to close";

    overlay.appendChild(stage);
    overlay.appendChild(closeBtn);
    overlay.appendChild(hint);
    document.body.appendChild(overlay);
    document.body.classList.add("diagram-zoom-open");

    var panZoomInstance = null;
    try {
      if (window.svgPanZoom) {
        panZoomInstance = window.svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: false,
          fit: true,
          contain: false,
          center: true,
          minZoom: 0.4,
          maxZoom: 30,
          zoomScaleSensitivity: 0.35,
          dblClickZoomEnabled: true,
        });
      }
    } catch (err) {
      // Non-fatal: modal still works, just without pan/zoom
      console.warn("svg-pan-zoom init failed:", err);
    }

    function close() {
      try { if (panZoomInstance) panZoomInstance.destroy(); } catch (e) { /* noop */ }
      overlay.remove();
      document.body.classList.remove("diagram-zoom-open");
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", onKey);
    closeBtn.focus();
  }

  // Mermaid renders async — re-scan whenever the DOM changes.
  var observer = new MutationObserver(function () { scan(); });
  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener("DOMContentLoaded", scan);

  // Material's instant navigation: fires whenever a new page is loaded via XHR.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () { setTimeout(scan, 50); });
  }

  scan();
})();
