# FLH Portfolio — Futures Learning Hub Impact Dashboard

A standalone single-page dashboard that makes the Futures Learning Hub portfolio visible
as a system: fourteen programs, one engine.

- **The constellation** — an interactive map of all 14 FLH programs and the 17 real
  hand-offs between them (shared platforms, graduate flows, removed barriers). Select a
  program to trace what it feeds and what feeds it; hover any line to see why it exists.
  Lenses regroup the portfolio by lifecycle stage, audience, or delivery partner.
- **The through-line** — the portfolio read as one career across five stages:
  Foundations → Capability → Mobility → Leadership → Governance.
- **The impact** — reach and NPS where measured (Anchors Edge, Leadership Redefined,
  LR Alumni, Manager Voyage), with explicit "data coming" states elsewhere.

Programs are deep-linkable: `#p=summit`, `#p=chart`, etc.

## Data

Everything renders from **`data.js`** — programs (what/who/value/status/metrics),
lifecycle stages, audiences, partners, and the connection list with a one-sentence
rationale per tie. Metrics are partial by design; repopulate `volume` / `nps` fields as
program measurement matures and the page updates itself.

Source: FLH Program Portfolio worksheet.

## Design

Vanderbilt FLH visual identity: black `#1C1C1C` / white / flat gold `#CFAE70`, metallic
gold gradient reserved for hero moments, Libre Caslon Display headlines with one italic
emphasis, Inter body, Antonio eyebrows. Fonts are self-hosted; logo PNGs are derived from
the official EPS masters.

## Run

Static site — no build step. Serve the repo root:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Deploys to GitHub Pages via `.github/workflows/pages.yml` on every push to `main`
(Settings → Pages → Source must be set to "GitHub Actions").
