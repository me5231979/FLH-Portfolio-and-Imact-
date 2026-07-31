#!/usr/bin/env python3
"""Build the ffmpeg filter graph for the overlay + VO pass.

Writes work/inputs.txt (one ffmpeg CLI argument per line) and
work/filter.txt (filter_complex script). Input 0 is work/base.mp4.
"""
import glob
import subprocess

FADE = 0.33


def dur_of(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", path], capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


# ---- overlay schedule: (png, start, end, kind) ----
OV = [
    ("overlays/t_decision.png", 12.0, 14.4, "std"),
    ("overlays/t_vision.png",   21.6, 24.8, "card"),
    ("overlays/t_speed.png",    41.0, 43.5, "std"),
    ("overlays/t_agility.png",  44.0, 46.5, "std"),
    ("overlays/t_scale.png",    51.0, 54.0, "std"),
    ("overlays/t_ch1.png",      61.0, 68.0, "std"),
    ("overlays/t_ch2.png",      71.0, 78.0, "std"),
    ("overlays/t_ch3.png",      81.0, 88.0, "std"),
    ("overlays/t_welcome.png", 116.0, 120.0, "rise"),
    ("overlays/scrim.png",     121.5, 141.4, "std"),
]
QUOTE_STARTS = [122.0, 124.2, 126.4, 129.2, 131.6, 134.6, 138.0]
for i, st in enumerate(QUOTE_STARTS):
    OV.append((f"overlays/t_quote{i}.png", st, 141.4, "std"))

# ---- VO schedule ----
VO_FILES = sorted(glob.glob("work/vo/v*.audio"))
assert len(VO_FILES) == 11, VO_FILES
FIXED = [6.0, 14.5, 24.5, 35.0, 45.5, 60.5, 70.5, 80.5, 91.0, 104.5, 142.5]
starts, prev_end = [], 0.0
for f, fx in zip(VO_FILES, FIXED):
    d = dur_of(f)
    st = max(fx, prev_end + 0.35)
    starts.append((f, st, d))
    prev_end = st + d
    print(f"{f}  start={st:.2f}  dur={d:.2f}  end={st+d:.2f}")

# ---- inputs.txt ----
args = []
for png, st, en, kind in OV:
    args += ["-loop", "1", "-t", f"{en - st + 0.2:.2f}", "-i", png]
for f, st, d in starts:
    args += ["-i", f]
with open("work/inputs.txt", "w") as fh:
    fh.write("\n".join(args) + "\n")

# ---- filter.txt ----
lines = []
prev = "0:v"
for k, (png, st, en, kind) in enumerate(OV):
    idx = 1 + k
    d = en - st
    fin = 0.3 if kind == "card" else FADE
    chain = (f"[{idx}:v]format=rgba,fade=t=in:st=0:d={fin}:alpha=1,"
             f"fade=t=out:st={d - fin:.2f}:d={fin}:alpha=1,"
             f"setpts=PTS-STARTPTS+{st}/TB[ov{k}]")
    lines.append(chain)
    y = f"'-(t-{st})*12'" if kind == "rise" else "0"
    lines.append(f"[{prev}][ov{k}]overlay=x=0:y={y}:"
                 f"enable='between(t,{st},{en})'[v{k}]")
    prev = f"v{k}"
lines.append(f"[{prev}]format=yuv420p[vout]")

amb = "[0:a]volume=0.22[amb]"
lines.append(amb)
alabels = ["[amb]"]
for j, (f, st, d) in enumerate(starts):
    idx = 1 + len(OV) + j
    ms = int(round(st * 1000))
    lines.append(f"[{idx}:a]aresample=48000,pan=stereo|c0=c0|c1=c0,"
                 f"adelay={ms}:all=1[vo{j}]")
    alabels.append(f"[vo{j}]")
lines.append("".join(alabels) +
             f"amix=inputs={len(alabels)}:normalize=0:duration=first,"
             "loudnorm=I=-16:TP=-1.5:LRA=11[aout]")

with open("work/filter.txt", "w") as fh:
    fh.write(";\n".join(lines) + "\n")
print("filter graph written:", len(OV), "overlays,", len(starts), "VO takes")
