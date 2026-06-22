# Portfolio

Static site (HTML/CSS/JS) deployed on Vercel.

## Résumé PDF workflow

The résumé exists in two forms that must stay in sync:

- **`resume.html`** — the source of truth (content + layout). Edit this.
- **`resume.pdf`** — generated *from* `resume.html`. Served by the **Download** button
  and attached by the **Share** button. **Never hand-edit this file** — it gets overwritten.

`resume.pdf` is rendered by headless Chrome from the live page, so it always matches
the HTML (A4, single page, real extractable text for ATS). Three ways it stays fresh:

| Command / trigger | When it runs | Keeps fresh |
| --- | --- | --- |
| `npm run pdf` | manual, on demand | one-off regenerate |
| `npm run pdf:watch` | while running, on every save to `resume.html` | local Download/Share — zero lag, no commit needed |
| `git commit` (pre-commit hook) | automatically when `resume.html` is staged | the committed + **deployed** PDF |

### Typical edit loop

```bash
npm run pdf:watch      # leave running while editing resume.html
# ...edit & save resume.html → resume.pdf rebuilds in ~2.5s...
git add resume.html    # the hook regenerates + stages resume.pdf for you
git commit -m "Update résumé"
git push               # Vercel serves the fresh committed resume.pdf
```

### One-time setup on a fresh clone

The pre-commit hook lives in `.githooks/` (tracked), but git must be pointed at it
**once per clone**:

```bash
git config core.hooksPath .githooks
```

If you skip this (or commit from a machine without Chrome), the hook won't run and the
deployed PDF can drift from the HTML — just run `npm run pdf` and commit the result to
resync. Requirements: **Google Chrome** (or Chromium/Edge) installed locally.

### Files

- `scripts/gen-resume-pdf.sh` — the renderer (used by `npm run pdf` and the hook)
- `scripts/watch-resume-pdf.mjs` — the file watcher (`npm run pdf:watch`)
- `.githooks/pre-commit` — regenerates + stages `resume.pdf` on commit
