#!/usr/bin/env bash
# Regenerate resume.pdf from resume.html using headless Chrome.
# Renders the live page (with its @media print / @page A4 rules), so the PDF
# always matches the HTML. Used by the pre-commit hook and runnable by hand
# (`npm run pdf`). No dev server required — prints straight from file://.
set -euo pipefail

# Repo root = parent of this script's dir, so it works from any CWD.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/resume.html"
OUT_MAIN="$ROOT/resume.pdf"

# Locate a Chrome/Chromium binary.
CHROME=""
for c in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "$(command -v google-chrome 2>/dev/null || true)" \
  "$(command -v chromium 2>/dev/null || true)"; do
  if [ -n "$c" ] && [ -x "$c" ]; then CHROME="$c"; break; fi
done

if [ -z "$CHROME" ]; then
  echo "gen-resume-pdf: no Chrome/Chromium found — skipping PDF regen." >&2
  exit 0   # don't block a commit just because Chrome is missing
fi

TMP="$(mktemp -t resume-pdf).pdf"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=3000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="$TMP" "file://$SRC" >/dev/null 2>&1

cp "$TMP" "$OUT_MAIN"
rm "$TMP"
echo "gen-resume-pdf: wrote $OUT_MAIN"
