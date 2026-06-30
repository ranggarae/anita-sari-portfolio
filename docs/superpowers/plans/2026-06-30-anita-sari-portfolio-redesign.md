# Redesign Spec: Nailong Playful HR Portfolio

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Anita Sari's portfolio into a highly engaging, playful theme inspired by Nailong (cute yellow dinosaur) with bubbly animations ("duang-duang"), responsive grids, and interactive SVG mascots.

**Architecture:** Single-page application using responsive vanilla HTML5/CSS3. Custom SVG drawings representing animated Nailong mascot elements. Bouncy custom CSS transition animations.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript.

---

## User Review Required

> [!IMPORTANT]
> The theme colors are modified to a playful Nailong Palette: bright milky yellow (`#FFE359`), bubbly orange (`#FF6B35`), and soft warm cream background (`#FFFDF9`) for high contrast readability.
> Interactive animated SVG mascots will be integrated using pure CSS animation for instant load times and reliable offline execution.

## Proposed Changes

### [HTML Structure]
#### [MODIFY] [index.html](file:///Users/ranggara/Project/nita/index.html)

### [Styling & Design System]
#### [MODIFY] [style.css](file:///Users/ranggara/Project/nita/style.css)

### [Interactivity & Logic]
#### [MODIFY] [app.js](file:///Users/ranggara/Project/nita/app.js)

---

## Tasks

### Task 1: Update HTML Structure for Playful Theme & SVG Mascots
**Files:**
- Modify: `index.html`

- [ ] **Step 1: Embed animated SVG mascot in index.html and update layouts**
  Modify `index.html` to:
  - Add a floating waddling Nailong mascot container at the bottom-right corner.
  - Insert bubbly decorative background patterns (clouds/footprints).
  - Update sections to fit the playful narrative while keeping all of Anita Sari's real CV content.
  - Inject SVG drawings of Nailong in the Hero and Certifications header.

  *HTML Code Structure:*
  ```html
  <!-- Floating Mascot -->
  <div class="mascot-float" id="mascot-float">
      <svg width="80" height="90" viewBox="0 0 80 90">
          <!-- Spikes -->
          <path d="M15 25 L5 30 L15 35 M10 45 L2 50 L10 55 M15 65 L8 70 L15 75" fill="#FF6B35" />
          <!-- Tail -->
          <path class="nailong-tail" d="M20 70 Q 5 75 15 85 Q 25 80 20 70" fill="#FFE359" />
          <!-- Body -->
          <ellipse cx="40" cy="55" rx="25" ry="20" fill="#FFE359" />
          <!-- Belly -->
          <ellipse cx="40" cy="58" rx="18" ry="14" fill="#FFF9D4" />
          <!-- Head -->
          <circle class="nailong-head" cx="45" cy="30" r="18" fill="#FFE359" />
          <!-- Rosy Cheeks -->
          <circle cx="33" cy="34" r="3" fill="#FF8A9F" />
          <circle cx="57" cy="34" r="3" fill="#FF8A9F" />
          <!-- Eyes -->
          <circle cx="37" cy="26" r="4" fill="#fff" />
          <circle cx="37" cy="26" r="2.5" fill="#000" />
          <circle cx="38" cy="25" r="1" fill="#fff" /> <!-- Catchlight -->
          <circle cx="53" cy="26" r="4" fill="#fff" />
          <circle cx="53" cy="26" r="2.5" fill="#000" />
          <circle cx="54" cy="25" r="1" fill="#fff" /> <!-- Catchlight -->
          <!-- Smile -->
          <path d="M42 34 Q 45 38 48 34" stroke="#000" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <!-- Hands -->
          <circle cx="20" cy="52" r="5" fill="#FFE359" />
          <circle class="nailong-hand-wave" cx="60" cy="48" r="5" fill="#FFE359" />
          <!-- Feet -->
          <ellipse cx="30" cy="74" rx="6" ry="4" fill="#FF6B35" />
          <ellipse cx="50" cy="74" rx="6" ry="4" fill="#FF6B35" />
      </svg>
      <div class="bubble-speech">Halo! Semangat! ✨</div>
  </div>
  ```

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: update HTML layouts with SVG mascot and Nailong theme structures"`

---

### Task 2: Redesign Styling & "Duang-Duang" CSS Animations
**Files:**
- Modify: `style.css`

- [ ] **Step 1: Rewrite CSS variables and claymorphism styles**
  Modify `style.css` with the updated color palette:
  - `--bg-color: #FFFDF9` (warm cream background)
  - `--card-bg: #FFFDF0` (soft milky card background)
  - `--primary-color: #FFE359` (Nailong yellow)
  - `--accent-color: #FF6B35` (bubbly orange)
  - `--text-color: #2B2A20` (dark charcoal)
  - `--border-color: #FFECA1`
  Add `@keyframes` for waddling, tail-wagging, and bubbly bounce:
  ```css
  /* Waddling head animation */
  @keyframes waddle-head {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(5deg) translateY(-1px); }
  }
  .nailong-head {
      transform-origin: 45px 40px;
      animation: waddle-head 2s ease-in-out infinite;
  }
  /* Bouncy "Duang-Duang" Hover */
  .btn, .cert-card, .timeline-content, .skills-category {
      border-radius: 20px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 3px solid var(--border-color);
      box-shadow: 0 8px 0 var(--border-color), 0 12px 24px rgba(0,0,0,0.04);
  }
  .btn:hover, .cert-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 0 var(--border-color), 0 16px 32px rgba(0,0,0,0.06);
  }
  .btn:active, .cert-card:active {
      transform: translateY(2px);
      box-shadow: 0 2px 0 var(--border-color);
  }
  ```

- [ ] **Step 2: Commit**
  Run: `git commit -am "feat: apply bouncy claymorphism styling and Nailong colors"`

---

### Task 3: Implement Mascot Interactivity & Filter Animations
**Files:**
- Modify: `app.js`

- [ ] **Step 1: Update interactions in app.js**
  Modify `app.js` to:
  - Add click listener to floating Nailong to toggle interactive text bubble phrases (e.g. "Duang!", "Yuk lihat CV ku!", "Ada 11 sertifikasi lho!").
  - Add animate-in/fade-in transitions on certificate filters to make cards stagger-bounce.
  - Implement smooth parallax waddle effect on scrolling.

- [ ] **Step 2: Verify Syntax**
  Run: `node -c app.js`
  Expected: Exit code 0 (no syntax errors).

- [ ] **Step 3: Commit**
  Run: `git commit -am "feat: add mascot interactive bubbles and filter staggered animations"`

---

### Task 4: Launch & Final Verification
- [ ] **Step 1: Open index.html in browser to verify layout**
  Run: `open index.html`
  Expected: Page renders with vibrant yellow/orange, waddling mascot operates, cards bounce correctly on click/hover.

- [ ] **Step 2: Clean up scratch folder**
  Run: `rm -f scratch/crop_profile.py`

---

## Verification Plan

### Automated Tests
- Syntax check: `node -c app.js`

### Manual Verification
- Tap on mascot to trigger bubble speech rotation.
- Hover over card components to verify bouncy scaling.
