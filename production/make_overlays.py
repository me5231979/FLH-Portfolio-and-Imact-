#!/usr/bin/env python3
"""Render the on-screen type for the Vanderbilt New Hire Mission Video.

Gold (#CFAE70) caps on transparency, tracked out, Montserrat ExtraBold —
per the shot book's type spec (geometric sans, weight 700+, tracking +25,
no shadows, no flourishes). Outputs 1920x1080 PNGs into ./overlays/.
"""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1920, 1080
GOLD = (207, 174, 112, 255)      # #CFAE70
CHARCOAL = (28, 28, 28, 255)     # #1C1C1C
FONT = "/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf"
OUT = "overlays"
os.makedirs(OUT, exist_ok=True)


def draw_tracked(draw, xy, text, font, fill, tracking, anchor="mm"):
    """Draw text with letter-spacing. anchor mm = centered on xy."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x, y = xy
    if anchor[0] == "m":
        cx = x - total / 2
    elif anchor[0] == "l":
        cx = x
    else:
        cx = x - total
    for ch, w in zip(text, widths):
        draw.text((cx, y), ch, font=font, fill=fill, anchor="l" + anchor[1])
        cx += w + tracking


def card(name, lines, size, y_center=None, bg=None, tracking_pct=0.06,
         line_gap=1.5, fill=GOLD, x=None, anchor="mm"):
    img = Image.new("RGBA", (W, H), bg or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, size)
    tracking = size * tracking_pct
    n = len(lines)
    yc = y_center if y_center is not None else H / 2
    step = size * line_gap
    y0 = yc - step * (n - 1) / 2
    for i, ln in enumerate(lines):
        draw_tracked(d, (x if x is not None else W / 2, y0 + i * step), ln,
                     font, fill, tracking, anchor=anchor)
    img.save(f"{OUT}/{name}.png")
    print("wrote", name)


# 1. A DECISION. — etched small, center-low (0:12)
card("t_decision", ["A DECISION."], 64, y_center=H * 0.72)

# 2. Vision line — full-screen charcoal card (0:22)
card("t_vision", ["VANDERBILT WILL DEFINE",
                  "THE GREAT UNIVERSITY",
                  "OF THE 21ST CENTURY.",
                  "",
                  "AND BE IT."], 72, bg=CHARCOAL, line_gap=1.45)

# 3-5. SPEED / AGILITY / SCALE
card("t_speed", ["SPEED."], 120)
card("t_agility", ["AGILITY."], 120)
card("t_scale", ["SCALE."], 120)

# 6-8. Chapter markers, lower left, small
for name, txt in [("t_ch1", "I. EXCEPTIONAL CORE OPERATIONS"),
                  ("t_ch2", "II. BOLD STRATEGIC INITIATIVES"),
                  ("t_ch3", "III. INDUSTRY LEADERSHIP")]:
    card(name, [txt], 40, y_center=H * 0.88, x=110, anchor="lm")

# 9. WELCOME. — rises into sky (1:56)
card("t_welcome", ["WELCOME."], 140)

# 10. Everest quote — 7 staggered line-groups + attribution (2:02-2:20)
QUOTE = [
    ['"Our mission is not small."'],
    ['"We are scaling Mount Everest."'],
    ['"We\'ve set our sights on the world\'s highest pinnacle —',
     'and we\'ve shown that we\'re ready."'],
    ['"Climbing Everest requires courage and commitment."'],
    ['"But it promises the professional experience of a lifetime',
     'to all who sign on."'],
    ['"And we will support one another at every step of the way —',
     'as we always do in every challenge we encounter."'],
    ["— CHANCELLOR DANIEL DIERMEIER"],
]
# stacked layout: compute each group's y slot in a text panel 0.18H..0.86H
font_q = 40
slots = []
total_lines = sum(len(g) for g in QUOTE)
y = H * 0.16
for gi, g in enumerate(QUOTE):
    slots.append(y)
    y += font_q * 1.5 * len(g) + font_q * 0.9
for gi, g in enumerate(QUOTE):
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    size = 34 if gi == len(QUOTE) - 1 else font_q
    f = ImageFont.truetype(FONT, size)
    for li, ln in enumerate(g):
        draw_tracked(d, (W / 2, slots[gi] + li * font_q * 1.5), ln, f, GOLD,
                     size * 0.05, anchor="mm")
    img.save(f"{OUT}/t_quote{gi}.png")
    print("wrote", f"t_quote{gi}")

# 11. End card text
card("t_cta", ["YOUR CLIMB STARTS TODAY."], 64, y_center=H * 0.80)

# 12. Scrim — soft dark gradient to sit under the quote for legibility
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
for yy in range(H):
    a = int(120 * min(1.0, max(0.0, (yy - H * 0.05) / (H * 0.5))))
    d.line([(0, yy), (W, yy)], fill=(15, 15, 15, min(a, 110)))
img.save(f"{OUT}/scrim.png")
print("wrote scrim")
print("done")
