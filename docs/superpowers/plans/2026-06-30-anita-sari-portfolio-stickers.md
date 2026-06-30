# Redesign Spec: Playful Sticker-Themed HR Portfolio

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Anita Sari's portfolio to use the cute sun/flower character stickers from `Gemini_Generated_Image_rvgrxhrvgrxhrvgr.png`. Each section will feature a different thematic sticker, with bubbly CSS hover transitions and clean transparent backgrounds.

**Architecture:** Python script crops 12 stickers and uses flood-fill to remove checkerboard background. Single-page responsive HTML/CSS/JS features the cropped stickers throughout.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript, Python (Pillow).

---

## User Review Required

> [!NOTE]
> The background of the stickers is a checkerboard pattern. A Python script will programmatically crop them and apply a flood-fill algorithm starting from the edges to make the background transparent, preserving the white details inside the mascot.

## Proposed Changes

### [HTML Structure]
#### [MODIFY] [index.html](file:///Users/ranggara/Project/nita/index.html)

### [Styling & Design System]
#### [MODIFY] [style.css](file:///Users/ranggara/Project/nita/style.css)

### [Interactivity & Logic]
#### [MODIFY] [app.js](file:///Users/ranggara/Project/nita/app.js)

### [Assets Extraction]
#### [NEW] [Sticker Assets](file:///Users/ranggara/Project/nita/assets/)

---

## Tasks

### Task 1: Extract and Make Stickers Transparent
**Files:**
- Create: `scratch/extract_stickers.py`
- Output: `assets/dino_hello.png`, `assets/dino_detective.png`, `assets/dino_story.png`, `assets/dino_jump.png`

- [ ] **Step 1: Write python script `scratch/extract_stickers.py`**
  Write code to:
  - Load the sticker sheet (2048x2048).
  - Crop 4 key stickers:
    - Col 1, Row 0: `HELLO SUNSHINE` (x: 512-1024, y: 0-682) -> `assets/dino_hello.png`
    - Col 2, Row 2: `DETECTIVE` (x: 1024-1536, y: 1365-2048) -> `assets/dino_detective.png`
    - Col 0, Row 2: `STORY TIME` (x: 0-512, y: 1365-2048) -> `assets/dino_story.png`
    - Col 2, Row 1: `SUPER JUMP` (x: 1024-1536, y: 682-1365) -> `assets/dino_jump.png`
  - Remove checkerboard background using Pillow flood-fill from borders.

  ```python
  from PIL import Image, ImageDraw
  import os

  os.makedirs("assets", exist_ok=True)
  img = Image.open("bahan/Gemini_Generated_Image_rvgrxhrvgrxhrvgr.png")

  # Define crops (Col, Row)
  crops = {
      "dino_hello": (1, 0),
      "dino_detective": (2, 2),
      "dino_story": (0, 2),
      "dino_jump": (2, 1)
  }

  col_width = 512
  row_height = 682

  for name, (col, row) in crops.items():
      # Calculate coordinates
      left = col * col_width
      top = row * row_height
      right = left + col_width
      # Cut off the text label at the bottom of the card (~120px)
      bottom = top + row_height - 120 
      
      cropped = img.crop((left, top, right, bottom)).convert("RGBA")
      
      # Flood-fill transparent starting from 4 corners to remove checkerboard
      width, height = cropped.size
      
      # We check pixels with checkerboard color (grey/white) and make them transparent
      # To avoid cutting internal whites, we flood fill from corners
      mask = Image.new("L", (width, height), 255)
      
      # Flood fill seeds at corners
      for seed in [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]:
          ImageDraw.floodfill(cropped, seed, (0, 0, 0, 0), thresh=45)
          
      cropped.save(f"assets/{name}.png")
      print(f"Extracted assets/{name}.png")
  ```

- [ ] **Step 2: Run Python script**
  Run: `python3 scratch/extract_stickers.py`
  Expected: Prints output for all 4 stickers saved.

- [ ] **Step 3: Commit**
  Run: `git add assets/dino_*.png && git commit -m "feat: extract and transparentize sticker assets"`

---

### Task 2: Redesign Website UI with Thematic Stickers
**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace waddling SVG with extracted sticker assets**
  Update `index.html` as follows:
  - **Hero**: Display `assets/dino_hello.png` next to Anita's profile picture or in hero header.
  - **Floating Mascot**: Replace SVG with `assets/dino_jump.png` floating in the corner.
  - **Experience**: Place `assets/dino_detective.png` in the heading to represent sourcing/talent search.
  - **Education**: Place `assets/dino_story.png` near the University section.

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: integrate sticker assets into index.html layouts"`

---

### Task 3: Revise CSS animations & Dialog Bubble
**Files:**
- Modify: `style.css`
- Modify: `app.js`

- [ ] **Step 1: Adapt style.css for image-based mascot**
  - Adjust styling for `.mascot-float img` instead of SVG.
  - Keep bouncy transitions ("duang-duang").
  - Animate sticker elements on scroll.

- [ ] **Step 2: Update app.js speech greetings**
  - Update the speech bubble text to match the sun character style.
  - Verify syntax using `node -c app.js`.

- [ ] **Step 3: Commit**
  Run: `git commit -am "feat: polish CSS/JS for image sticker animations"`

---

## Verification Plan

### Automated Tests
- Syntax check: `node -c app.js`

### Manual Verification
- View layout at http://localhost:8000/ to verify stickers display cleanly without checkerboard borders.
- Click the floating jumping mascot to trigger speech dialogs.
