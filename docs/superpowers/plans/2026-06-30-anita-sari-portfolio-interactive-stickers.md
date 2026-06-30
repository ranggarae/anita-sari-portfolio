# Redesign Spec: Interactive Sticker-Themed Portfolio Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Anita Sari's portfolio to use her new professional profile photo and 8 interactive character stickers extracted from `Gemini_Generated_Image_rvgrxhrvgrxhrvgr(1).png`. All stickers will react with animations and custom speech bubbles when clicked.

**Architecture:** Python script crops 8 stickers and transparentizes the background. HTML contains the new profile picture and multiple sticker placements. JavaScript binds click handlers to all stickers to display localized cartoon speech bubbles.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript, Python (Pillow).

---

## User Review Required

> [!NOTE]
> The new profile photo (`WhatsApp Image 2026-06-30 at 16.56.27.png`) has a transparent background, which fits claymorphic styling beautifully.
> 8 distinct stickers will be extracted, background-removed, and styled to float/bounce on click.

## Proposed Changes

### [HTML Structure]
#### [MODIFY] [index.html](file:///Users/ranggara/Project/nita/index.html)

### [Styling & Design System]
#### [MODIFY] [style.css](file:///Users/ranggara/Project/nita/style.css)

### [Interactivity & Logic]
#### [MODIFY] [app.js](file:///Users/ranggara/Project/nita/app.js)

### [Assets Extraction]
#### [NEW] [Profile Asset](file:///Users/ranggara/Project/nita/assets/profile_new.png)
#### [NEW] [Sticker Assets](file:///Users/ranggara/Project/nita/assets/)

---

## Tasks

### Task 1: Extract 8 Stickers and Profile Photo
**Files:**
- Create: `scratch/extract_stickers_v2.py`

- [ ] **Step 1: Write python script `scratch/extract_stickers_v2.py`**
  Write code to:
  - Copy new profile photo to `assets/profile_new.png`.
  - Load the sticker sheet `Gemini_Generated_Image_rvgrxhrvgrxhrvgr(1).png`.
  - Crop 8 stickers and remove white background using flood-fill.
  - Map crops (Col, Row):
    - `sticker_hello`: (1, 0)
    - `sticker_detective`: (2, 2)
    - `sticker_story`: (0, 2)
    - `sticker_dreamer`: (3, 0)
    - `sticker_wait`: (3, 2)
    - `sticker_jump`: (2, 1)
    - `sticker_cool`: (3, 1)
    - `sticker_snack`: (0, 1)

  ```python
  from PIL import Image, ImageDraw
  import shutil
  import os

  os.makedirs("assets", exist_ok=True)
  
  # Copy profile photo
  shutil.copy("bahan/WhatsApp Image 2026-06-30 at 16.56.27.png", "assets/profile_new.png")
  print("Copied assets/profile_new.png")

  # Load sticker sheet
  img = Image.open("bahan/Gemini_Generated_Image_rvgrxhrvgrxhrvgr(1).png")
  col_width = 512
  row_height = 682

  crops = {
      "sticker_hello": (1, 0),
      "sticker_detective": (2, 2),
      "sticker_story": (0, 2),
      "sticker_dreamer": (3, 0),
      "sticker_wait": (3, 2),
      "sticker_jump": (2, 1),
      "sticker_cool": (3, 1),
      "sticker_snack": (0, 1)
  }

  for name, (col, row) in crops.items():
      left = col * col_width
      top = row * row_height
      right = left + col_width
      bottom = top + row_height - 110 # Cut off labels
      
      cropped = img.crop((left, top, right, bottom)).convert("RGBA")
      
      # Flood fill white background starting from corners
      width, height = cropped.size
      for seed in [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]:
          ImageDraw.floodfill(cropped, seed, (0, 0, 0, 0), thresh=30)
          
      cropped.save(f"assets/{name}.png")
      print(f"Extracted assets/{name}.png")
  ```

- [ ] **Step 2: Run Python script**
  Run: `python3 scratch/extract_stickers_v2.py`
  Expected: Prints output and saves all 8 stickers and the profile image.

- [ ] **Step 3: Commit**
  Run: `git add assets/ && git commit -m "feat: extract new profile picture and 8 transparent stickers"`

---

### Task 2: Update HTML Structure with New Profile and 8 Stickers
**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace layout images and add new sticker containers**
  Update `index.html`:
  - Change profile image src to `assets/profile_new.png`.
  - Embed `assets/sticker_hello.png` in Hero section.
  - Embed `assets/sticker_snack.png` in Key Stats section.
  - Embed `assets/sticker_detective.png` in Experience heading.
  - Embed `assets/sticker_cool.png` in Skills section.
  - Embed `assets/sticker_story.png` in Education heading.
  - Embed `assets/sticker_dreamer.png` in Contact section.
  - Embed `assets/sticker_wait.png` in Footer.
  - Floating Mascot uses `assets/sticker_jump.png`.
  - Ensure all sticker elements have a class `interactive-sticker` and a wrapper with absolute positioned bubble chats!

  *Speech Bubble HTML wrapper example:*
  ```html
  <div class="sticker-container">
      <img src="assets/sticker_hello.png" class="interactive-sticker" data-msg="Halo! Selamat datang di portofolio Kak Anita! ☀️">
      <div class="sticker-bubble">Halo! ☀️</div>
  </div>
  ```

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: update index.html with new profile picture and multiple stickers layout"`

---

### Task 3: Revise CSS bubble styling
**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add sticker wrapper styles and speech bubble layout**
  Update `style.css` to define:
  - `.sticker-container`: relative container.
  - `.sticker-bubble`: absolute speech bubble over the sticker, defaults to opacity 0, shows on active.
  - Bouncy scaling transitions.

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: add sticker container and bubble chat CSS variables"`

---

### Task 4: Add Universal Sticker Click Listeners
**Files:**
- Modify: `app.js`

- [ ] **Step 1: Implement click listener for class `.interactive-sticker`**
  Modify `app.js` to:
  - Query selector all `.interactive-sticker` elements.
  - On click: show the corresponding speech bubble, trigger scale bump animation, fade out after 3 seconds.

- [ ] **Step 2: Verify Syntax**
  Run: `node -c app.js`
  Expected: Exit code 0.

- [ ] **Step 3: Commit**
  Run: `git commit -am "feat: bind interactive dialogs to all 8 sticker assets"`

---

### Task 5: Verification & Cleanup
- [ ] **Step 1: Open browser to verify layout**
  Expected: All stickers animate and show speech bubble when clicked. Profile image is transparent.

- [ ] **Step 2: Clean up scratch folder**
  Run: `rm -f scratch/extract_stickers_v2.py`
