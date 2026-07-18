"""Extract Section VI (Schedule of Requirements) and Section VII (Technical Specifications).

Also extracts Section V (Special Conditions of Contract) for delivery/payment terms.
"""
from __future__ import annotations

from pathlib import Path

import pdfplumber

SRC = Path(__file__).parent / "PBD_HRIS_For-Posting.pdf"
OUT_DIR = Path(__file__).parent / "extracted"
OUT_DIR.mkdir(exist_ok=True)


# TOC-declared page numbers refer to the document's own numbering,
# but the PDF page indexes may differ. From the TOC on p2, we saw:
#   Section V.  page 65
#   Section VI. page 71
#   Section VII.page 89
#   Section VIII.page 118
# In many PBD PDFs the physical page index equals the printed number
# because pages 1..N-1 use roman numerals. We'll extract a range and
# also search for the section headings to lock the boundaries.
SECTIONS = {
    "section_v_scc": (60, 80),
    "section_vi_schedule": (68, 92),
    "section_vii_tech_specs": (86, 122),
    "section_viii_forms": (118, 140),
}


def main() -> None:
    with pdfplumber.open(SRC) as pdf:
        total = len(pdf.pages)
        for name, (lo, hi) in SECTIONS.items():
            lo = max(1, lo)
            hi = min(total, hi)
            parts: list[str] = []
            for i in range(lo, hi + 1):
                try:
                    t = pdf.pages[i - 1].extract_text() or ""
                except Exception as e:  # noqa: BLE001
                    t = f"[extract error page {i}: {e}]"
                parts.append(f"\n\n===== PAGE {i} =====\n{t}")
            (OUT_DIR / f"{name}.txt").write_text("".join(parts), encoding="utf-8")
            print(f"Wrote {name}.txt (pages {lo}-{hi})")


if __name__ == "__main__":
    main()
