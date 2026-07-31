# Vanderbilt New Hire Mission Video — "The Climb Starts Here"

**Delivered:** 2026-07-31
**Final file:** https://d2ol7oe51mr4n9.cloudfront.net/user_3CCurpI0FW75YAnAl4Hbz3vPdBv/c46bfe3d-ce6a-4753-9285-43c76305c127.mp4
**Spec:** 2:30 (150.4s), 1920×1080, 24fps, H.264 + AAC, ~99 MB
**Source script:** `Vanderbilt_NewHire_Mission_Video_Script.md` (Matthew Estes)

## What's in the cut
- **Act I (0:00–0:35)** — pre-dawn tower push-in, sunrise architecture triptych,
  momentum montage; "A DECISION." etch; full-screen gold-on-charcoal vision card
  ("VANDERBILT WILL DEFINE THE GREAT UNIVERSITY OF THE 21ST CENTURY. / AND BE IT.")
- **Act II (0:35–1:20)** — SPEED. / AGILITY. / SCALE. kinetic type; chapter markers
  I. EXCEPTIONAL CORE OPERATIONS · II. BOLD STRATEGIC INITIATIVES · III. INDUSTRY
  LEADERSHIP; four expansion beats (NYC sign, coastal FL construction aerial,
  quantum cryostat, SF whiteboard)
- **Act III (1:20–2:00)** — unbroken hallway dolly hero shot, golden-hour portrait
  beats, new-hire crane-up to the tower, rising "WELCOME."
- **Act IV (2:00–2:22)** — still golden-hour wide; Chancellor Diermeier's Everest
  quote, verbatim, staggered line-by-line, attributed
- **Act V (2:22–2:30)** — charcoal end card, VU centered white lockup,
  "YOUR CLIMB STARTS TODAY."

## Production notes
- Video: kling3_0 (pro, 1080p), 13×10s blocks + 1×12s block, ambient sound on
- VO: seed_audio, voice **Zoe** (user-selected), 11 takes placed to the script's
  timecode windows (auto-shifted to avoid overlap)
- Type: Montserrat ExtraBold, VU gold #CFAE70, per the shot book's type spec
  (fade in/out 8 frames, no shadows, no flourishes)
- Logo: `assets/img/vu-centered-white.png` (converted from the supplied EPS masters)
- QC: every people-heavy block ran scene-by-scene video analysis — no intimate
  contact, no camera-gaze, professional distance throughout. b10's faint background
  chatter ducked to ~-23dB in the mix.
- Music: no licensed score was generated (the platform's music model is reserved
  for its game pipeline). The mix is VO over low native ambient sound. Drop a
  licensed 3-movement cue (per §5 of the script) under the mix in post if desired.
- Known deltas from the shot book: AI-generated campus is *evocative of* (not a
  likeness of) Kirkland Hall; the official 1873 seal was not among the supplied
  assets, so the end card uses the VU centered lockup.

## Reproduce
```
production/make_overlays.py   # renders all type cards (Pillow)
production/build_filter.py    # computes VO placement + ffmpeg filter graph
production/assemble.sh        # fetch → normalize → concat → overlay+mix
production/urls.txt           # generation result URLs (b01–b14, v01–v11)
```
