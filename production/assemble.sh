#!/usr/bin/env bash
# Assemble "The Climb Starts Here" — Vanderbilt New Hire Mission Video (2:30)
# Runs inside the Higgsfield sandbox. Expects:
#   work/urls.txt   lines: "<label> <url>"  (b01..b14 videos, v01..v11 audio)
#   overlays/*.png  from make_overlays.py
#   work/assets/vu-centered-white.png
set -euo pipefail
cd "$(dirname "$0")/.."   # repo root layout: production/ overlays/ work/

mkdir -p work/blocks work/vo work/norm overlays

# ---- 1. fetch generation results (idempotent) ----
while read -r label url; do
  [ -z "$label" ] && continue
  case "$label" in
    b*) out="work/blocks/$label.mp4" ;;
    v*) out="work/vo/$label.audio" ;;
    *) continue ;;
  esac
  [ -s "$out" ] || curl -fL --retry 3 --retry-all-errors "$url" -o "$out"
done < work/urls.txt

[ -s work/assets/vu-centered-white.png ] || { mkdir -p work/assets; \
  curl -sfL "https://raw.githubusercontent.com/me5231979/FLH-Portfolio-and-Imact-/main/assets/img/vu-centered-white.png" -o work/assets/vu-centered-white.png; }

# ---- 2. normalize blocks: 1920x1080, 24fps, exact trims ----
FPS=24
for i in $(seq -w 1 14); do
  dur=10.0; [ "$i" = "14" ] && dur=12.0
  src="work/blocks/b$i.mp4"; dst="work/norm/n$i.mp4"
  [ -s "$dst" ] && continue
  ffmpeg -hide_banner -loglevel error -y -i "$src" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=$FPS,setsar=1" \
    -t "$dur" -c:v libx264 -preset fast -crf 17 -pix_fmt yuv420p \
    -af "aresample=48000,pan=stereo|c0=c0|c1=c1" -c:a aac -b:a 192k "$dst"
done

# ---- 3. end card: 8s charcoal, centered white lockup + gold CTA ----
if [ ! -s work/norm/n15.mp4 ]; then
ffmpeg -hide_banner -loglevel error -y \
  -f lavfi -i "color=c=0x1C1C1C:s=1920x1080:r=$FPS:d=8" \
  -loop 1 -t 8 -i work/assets/vu-centered-white.png \
  -loop 1 -t 8 -i overlays/t_cta.png \
  -f lavfi -t 8 -i "anullsrc=channel_layout=stereo:sample_rate=48000" \
  -filter_complex "\
[1:v]scale=-1:420,format=rgba,fade=t=in:st=0.4:d=1.2:alpha=1[logo];\
[2:v]format=rgba,fade=t=in:st=1.2:d=1.2:alpha=1[cta];\
[0:v][logo]overlay=(W-w)/2:(H*0.40-h/2)[a];\
[a][cta]overlay=0:0,fade=t=out:st=7.2:d=0.8[v]" \
  -map "[v]" -map 3:a -c:v libx264 -preset fast -crf 17 -pix_fmt yuv420p \
  -c:a aac -b:a 192k work/norm/n15.mp4
fi

# ---- 4. concat 15 segments -> base.mp4 (150s) ----
if [ ! -s work/base.mp4 ]; then
  : > work/concat.txt
  for i in $(seq -w 1 15); do echo "file 'norm/n$i.mp4'" >> work/concat.txt; done
  ( cd work && ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 \
      -i concat.txt -c copy base.mp4 )
fi

# ---- 5. overlays + VO mix in one pass ----
python3 production/build_filter.py   # writes work/filter.txt, work/inputs.txt
# inputs.txt holds extra -i argument lines (overlays with -loop, vo files)
mapfile -t EXTRA < work/inputs.txt
ffmpeg -hide_banner -loglevel error -y -i work/base.mp4 "${EXTRA[@]}" \
  -filter_complex_script work/filter.txt \
  -map "[vout]" -map "[aout]" \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -movflags +faststart work/final.mp4

ffprobe -v error -show_entries format=duration -of csv=p=0 work/final.mp4
echo "ASSEMBLY OK"
