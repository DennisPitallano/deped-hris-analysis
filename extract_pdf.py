"""Extract text from PBD PDF and produce a structured summary."""
from __future__ import annotations

import re
from pathlib import Path

import pdfplumber

SRC = Path(__file__).parent / "PBD_HRIS_For-Posting.pdf"
OUT_DIR = Path(__file__).parent / "extracted"
OUT_DIR.mkdir(exist_ok=True)


def main() -> None:
    full_text_parts: list[str] = []
    per_page: dict[int, str] = {}

    with pdfplumber.open(SRC) as pdf:
        total = len(pdf.pages)
        print(f"Pages: {total}")
        for i, page in enumerate(pdf.pages, start=1):
            try:
                t = page.extract_text() or ""
            except Exception as e:  # noqa: BLE001
                t = f"[extract error page {i}: {e}]"
            per_page[i] = t
            full_text_parts.append(f"\n\n===== PAGE {i} =====\n{t}")
            if i % 50 == 0:
                print(f"  ...{i}/{total}")

    full = "".join(full_text_parts)
    (OUT_DIR / "full.txt").write_text(full, encoding="utf-8")

    # Try to identify high-value sections common in Philippine PBDs.
    keywords = [
        "Technical Specifications",
        "Terms of Reference",
        "Scope of Work",
        "Statement of Compliance",
        "Approved Budget",
        "Delivery Schedule",
        "Warranty",
        "Bill of Quantities",
        "Eligibility",
        "Section VI",
        "Section VII",
        "Section VIII",
        "PART I",
        "PART II",
        "PART III",
    ]
    hits: list[tuple[int, str]] = []
    for pg, txt in per_page.items():
        for kw in keywords:
            if kw.lower() in txt.lower():
                hits.append((pg, kw))
    (OUT_DIR / "hits.txt").write_text(
        "\n".join(f"page {p}: {k}" for p, k in hits), encoding="utf-8"
    )
    print(f"Keyword hits: {len(hits)}")

    # Extract Table of Contents style lines (dotted leader) from first ~15 pages.
    toc_lines: list[str] = []
    for pg in range(1, min(20, total) + 1):
        for line in per_page[pg].splitlines():
            if re.search(r"\.{3,}\s*\d{1,4}\s*$", line):
                toc_lines.append(f"p{pg}: {line.strip()}")
    (OUT_DIR / "toc.txt").write_text("\n".join(toc_lines), encoding="utf-8")
    print(f"TOC-like lines: {len(toc_lines)}")

    print("Done. See extracted/ directory.")


if __name__ == "__main__":
    main()
