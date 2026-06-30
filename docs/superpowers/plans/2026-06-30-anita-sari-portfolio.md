# Portfolio Anita Sari Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a responsive, interactive one-page portfolio website for Anita Sari based on her CV.

**Architecture:** Single-page application with modern responsive Vanilla HTML5/CSS3 and dynamic sorting of certifications via ES6 Vanilla JS.

**Tech Stack:** HTML5, CSS3, ES6 JavaScript.

---

## User Review Required

> [!NOTE]
> All code is written in pure vanilla HTML/CSS/JS without any package dependencies, allowing execution by any browser and lightweight models.
> The profile photo is automatically extracted from the CV image using a Python helper script.

## Proposed Changes

### [HTML Structure]
#### [NEW] [index.html](file:///Users/ranggara/Project/nita/index.html)

### [Styling & Design System]
#### [NEW] [style.css](file:///Users/ranggara/Project/nita/style.css)

### [Interactivity & Logic]
#### [NEW] [app.js](file:///Users/ranggara/Project/nita/app.js)

### [Assets Extraction]
#### [NEW] [profile.jpg](file:///Users/ranggara/Project/nita/assets/profile.jpg)

---

## Tasks

### Task 1: Extract Profile Photo
**Files:**
- Create: `assets/profile.jpg`
- Create: `scratch/crop_profile.py`

- [ ] **Step 1: Write python script to crop profile image from CV page 1**
  Create `scratch/crop_profile.py` with this code:
  ```python
  from PIL import Image
  import os

  os.makedirs("assets", exist_ok=True)
  img = Image.open("bahan/CV - ANITA SARI_page-0001.jpg")
  # Crop coordinates for the profile photo
  # Left: 140, Top: 100, Right: 375, Bottom: 360
  cropped = img.crop((140, 100, 375, 360))
  cropped.save("assets/profile.jpg")
  print("Saved assets/profile.jpg")
  ```

- [ ] **Step 2: Run Python script**
  Run: `python3 scratch/crop_profile.py`
  Expected: Prints "Saved assets/profile.jpg"

- [ ] **Step 3: Commit**
  Run: `git add assets/profile.jpg && git commit -m "feat: extract profile photo from CV"`

---

### Task 2: Create HTML Structure
**Files:**
- Create: `index.html`

- [ ] **Step 1: Write HTML layout**
  Create `index.html` with this code:
  ```html
  <!DOCTYPE html>
  <html lang="id">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anita Sari - HRD || Tech & Non Tech Recruiter || HRBP</title>
      <link rel="stylesheet" href="style.css">
      <!-- Font Inter -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
      <!-- Floating Navigation -->
      <nav class="navbar">
          <div class="nav-container">
              <a href="#" class="logo">Anita Sari</a>
              <div class="nav-links">
                  <a href="#about">Profil</a>
                  <a href="#experience">Pengalaman</a>
                  <a href="#certifications">Sertifikasi</a>
                  <a href="#skills">Kompetensi</a>
                  <a href="#education">Pendidikan</a>
                  <a href="#contact">Kontak</a>
              </div>
          </div>
      </nav>

      <!-- Hero Section -->
      <section id="about" class="hero">
          <div class="container hero-container">
              <div class="hero-image">
                  <img src="assets/profile.jpg" alt="Anita Sari">
              </div>
              <div class="hero-content">
                  <span class="badge">Tech & Non-Tech Recruiter</span>
                  <h1>Anita Sari</h1>
                  <p class="subtitle">HRD | Talent Acquisition | HRBP</p>
                  <p class="description">
                      Lulusan Sarjana Psikologi dengan pengalaman 3+ tahun di bidang HRD dan Rekrutmen end-to-end. Memiliki keahlian dalam sourcing, wawancara, onboarding, administrasi tes psikologi, dan payroll. Sangat adaptif dan berorientasi pada pemecahan masalah dengan pendekatan kreatif.
                  </p>
                  <div class="cta-buttons">
                      <a href="#contact" class="btn btn-primary">Hubungi Saya</a>
                      <a href="https://www.linkedin.com/in/anita-sari-640487229/" target="_blank" class="btn btn-secondary">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                          LinkedIn
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <!-- Key Stats -->
      <section class="stats">
          <div class="container stats-container">
              <div class="stat-card">
                  <h3>3+ Tahun</h3>
                  <p>Pengalaman Kerja</p>
              </div>
              <div class="stat-card">
                  <h3>11</h3>
                  <p>Sertifikasi Profesional</p>
              </div>
              <div class="stat-card">
                  <h3>120+</h3>
                  <p>Peserta Bootcamp/Webinar</p>
              </div>
          </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="experience">
          <div class="container">
              <h2 class="section-title">Pengalaman Kerja</h2>
              <div class="timeline">
                  <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-date">Nov 2023 - Sekarang</div>
                      <div class="timeline-content">
                          <h3>HRD || Tech & Non Tech Recruitment and Employee Branding</h3>
                          <p class="company">PT ADI Perdana Nusantara (Jakarta, Indonesia) - Full Time</p>
                          <ul>
                              <li>Mengelola proses rekrutmen end-to-end untuk berbagai klien di industri perbankan, asuransi, multi-finance, otomotif, dll.</li>
                              <li>Menangani rekrutmen posisi Tech & Non-Tech (screening CV, wawancara HR, koordinasi wawancara user, offering, negosiasi gaji).</li>
                              <li>Menggunakan berbagai sourcing channel (job board, media sosial, networking, talent database).</li>
                              <li>Kolaborasi dengan klien untuk memahami kebutuhan rekrutmen & manpower planning.</li>
                              <li>Bertindak sebagai PIC aktivitas employer branding (webinar, mini bootcamp) untuk meningkatkan talent engagement.</li>
                          </ul>
                      </div>
                  </div>

                  <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-date">Jul 2023 - Nov 2023</div>
                      <div class="timeline-content">
                          <h3>HR Generalist Staff</h3>
                          <p class="company">PT Mardhani Pro Health - Mardhani Clinic (Karawang, Indonesia) - Kontrak</p>
                          <ul>
                              <li>Mengelola rekrutmen end-to-end staf klinik medis.</li>
                              <li>Melakukan tes psikologi (STIFFIN, grafologi) dan asesmen kandidat.</li>
                              <li>Mengurus administrasi HR, arsip dokumen, dan proses payroll.</li>
                              <li>Mengelola absensi, cuti, izin, dan sakit seluruh staf.</li>
                          </ul>
                      </div>
                  </div>

                  <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-date">Jun 2022 - Jul 2023</div>
                      <div class="timeline-content">
                          <h3>HRD || HRBP - Internship</h3>
                          <p class="company">PT NTT Indonesia Technology - NTT Ltd (Jakarta, Indonesia)</p>
                          <ul>
                              <li>Mengadministrasikan alat tes psikologi: DISC, VAK (Working Style Test), IQ, dan asesmen kandidat.</li>
                              <li>Menyediakan dukungan administrasi dan arsip dokumen divisi HR.</li>
                              <li>Mengelola logistik dan starter kit untuk orientasi karyawan baru.</li>
                          </ul>
                      </div>
                  </div>

                  <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-date">Apr 2022 - Jun 2022</div>
                      <div class="timeline-content">
                          <h3>HRD || Recruiter - Internship</h3>
                          <p class="company">One Third Consulting & Abroad - OTCA (Yogyakarta, Indonesia)</p>
                          <ul>
                              <li>Melakukan pencarian (sourcing) dan penyaringan (screening) kandidat via database, media sosial, & portal kerja.</li>
                              <li>Menyusun laporan metrik rekrutmen harian.</li>
                              <li>Mengadministrasikan tes psikologi (DISC, MBTI, Self Discovery Test).</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Certifications Section -->
      <section id="certifications" class="certifications">
          <div class="container">
              <h2 class="section-title">Sertifikasi & Pelatihan</h2>
              <div class="filter-container">
                  <button class="filter-btn active" data-filter="all">Semua</button>
                  <button class="filter-btn" data-filter="recruitment">Rekrutmen & TA</button>
                  <button class="filter-btn" data-filter="hr">HR Generalist & HRIS</button>
                  <button class="filter-btn" data-filter="psychometrics">Asesmen & Psikotes</button>
              </div>
              <div class="cert-grid" id="cert-grid">
                  <!-- JS will dynamically populate this grid -->
              </div>
          </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="skills">
          <div class="container">
              <h2 class="section-title">Kompetensi</h2>
              <div class="skills-grid">
                  <div class="skills-category">
                      <h3>Recruitment & Sourcing</h3>
                      <div class="skills-tags">
                          <span>Full-cycle Recruitment</span>
                          <span>Talent Sourcing</span>
                          <span>Interviewing (BEI)</span>
                          <span>LinkedIn Sourcing</span>
                          <span>Job Portals (Glints, Jobstreet)</span>
                          <span>Applicant Screening</span>
                      </div>
                  </div>
                  <div class="skills-category">
                      <h3>Psychology & Assessment</h3>
                      <div class="skills-tags">
                          <span>Psychological Testing</span>
                          <span>DISC Profiling</span>
                          <span>STIFFIN & VAK</span>
                          <span>Graphology</span>
                          <span>Behavioral Event Interview</span>
                          <span>Candidate Assessment</span>
                      </div>
                  </div>
                  <div class="skills-category">
                      <h3>HR Generalist & Tools</h3>
                      <div class="skills-tags">
                          <span>HRIS</span>
                          <span>Payroll Administration</span>
                          <span>Employer Branding</span>
                          <span>Project Management</span>
                          <span>Canva & Photoshop</span>
                          <span>MS Office & Outlook</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="education">
          <div class="container">
              <h2 class="section-title">Pendidikan</h2>
              <div class="edu-card">
                  <div class="edu-header">
                      <h3>Universitas Gunadarma</h3>
                      <span class="edu-year">2017 - 2022</span>
                  </div>
                  <p class="edu-degree">Sarjana Psikologi (S1)</p>
                  <p class="edu-gpa">IPK: <strong>3.40 / 4.00</strong></p>
                  <p class="edu-org">Organisasi: MAPA Gunadarma (Humas) & Students Association (KMCG)</p>
              </div>
          </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
          <div class="container contact-container">
              <h2 class="section-title">Hubungi Saya</h2>
              <p class="contact-desc">Saya terbuka untuk peluang kolaborasi baru di bidang HR, Rekrutmen, dan HRBP.</p>
              <div class="contact-links">
                  <a href="mailto:Anitta.sari1999@gmail.com" class="contact-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      Anitta.sari1999@gmail.com
                  </a>
                  <a href="tel:+6281908135970" class="contact-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                      +62 819 0813 5970
                  </a>
                  <a href="https://www.linkedin.com/in/anita-sari-640487229/" target="_blank" class="contact-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      LinkedIn
                  </a>
              </div>
          </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
          <div class="container">
              <p>&copy; 2026 Anita Sari. Built with custom Sky Blue theme.</p>
          </div>
      </footer>

      <script src="app.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Verify HTML exists**
  Run: `ls index.html`
  Expected: index.html is present.

- [ ] **Step 3: Commit**
  Run: `git add index.html && git commit -m "feat: create index.html layout"`

---

### Task 3: Create Style & Theme (Biru Langit Muda)
**Files:**
- Create: `style.css`

- [ ] **Step 1: Implement the CSS design system**
  Create `style.css` with this code:
  ```css
  /* --- DESIGN SYSTEM & VARIABLES --- */
  :root {
      --bg-color: #F4F9FD;
      --card-bg: rgba(255, 255, 255, 0.8);
      --text-color: #0F2537;
      --text-light: #5A738E;
      --primary-color: #35A7FF;
      --primary-hover: #1b8adb;
      --secondary-color: #E6F3FF;
      --border-color: rgba(53, 167, 255, 0.15);
      --shadow-color: rgba(15, 37, 55, 0.06);
      --font-family: 'Inter', sans-serif;
      --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* --- RESET & GLOBALS --- */
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  html {
      scroll-behavior: smooth;
  }
  body {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: var(--font-family);
      line-height: 1.6;
      padding-top: 80px;
  }
  .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
  }
  a {
      text-decoration: none;
      color: inherit;
  }
  ul {
      list-style-type: none;
  }

  /* --- NAVBAR (GLASSMORPHISM) --- */
  .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: rgba(244, 249, 253, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000;
      display: flex;
      align-items: center;
      transition: var(--transition);
  }
  .navbar.scrolled {
      height: 70px;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 20px var(--shadow-color);
  }
  .nav-container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .logo {
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: -0.5px;
      color: var(--text-color);
  }
  .nav-links a {
      font-weight: 500;
      font-size: 0.95rem;
      margin-left: 24px;
      transition: var(--transition);
      opacity: 0.8;
  }
  .nav-links a:hover {
      color: var(--primary-color);
      opacity: 1;
  }

  /* --- HERO SECTION --- */
  .hero {
      padding: 80px 0;
  }
  .hero-container {
      display: flex;
      align-items: center;
      gap: 60px;
  }
  .hero-image {
      flex-shrink: 0;
      width: 300px;
      height: 340px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 40px var(--shadow-color);
      border: 4px solid #fff;
  }
  .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .hero-content {
      flex: 1;
  }
  .badge {
      display: inline-block;
      background-color: var(--secondary-color);
      color: #1a629b;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 16px;
      border: 1px solid var(--border-color);
  }
  .hero-content h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 8px;
  }
  .subtitle {
      font-size: 1.4rem;
      color: var(--text-light);
      margin-bottom: 24px;
  }
  .description {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 32px;
  }
  .cta-buttons {
      display: flex;
      gap: 16px;
  }
  .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 28px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: var(--transition);
      cursor: pointer;
  }
  .btn-primary {
      background-color: var(--primary-color);
      color: #fff;
      box-shadow: 0 8px 24px rgba(53, 167, 255, 0.3);
  }
  .btn-primary:hover {
      background-color: var(--primary-hover);
      transform: translateY(-2px);
  }
  .btn-secondary {
      background-color: #fff;
      color: var(--text-color);
      border: 1px solid var(--border-color);
  }
  .btn-secondary:hover {
      background-color: var(--secondary-color);
      transform: translateY(-2px);
  }

  /* --- STATS SECTION --- */
  .stats {
      padding: 40px 0;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      background: linear-gradient(180deg, var(--bg-color), #fff);
  }
  .stats-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      text-align: center;
  }
  .stat-card h3 {
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 4px;
  }
  .stat-card p {
      font-size: 0.95rem;
      color: var(--text-light);
      font-weight: 500;
  }

  /* --- SECTION GENERAL --- */
  .section-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 40px;
      text-align: center;
      position: relative;
  }
  .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 4px;
      background-color: var(--primary-color);
      border-radius: 2px;
  }
  section:not(.hero):not(.stats) {
      padding: 80px 0;
  }

  /* --- EXPERIENCE (TIMELINE) --- */
  .experience {
      background-color: #fff;
  }
  .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
  }
  .timeline::before {
      content: '';
      position: absolute;
      left: 31px;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--border-color);
  }
  .timeline-item {
      position: relative;
      padding-left: 80px;
      margin-bottom: 48px;
  }
  .timeline-item:last-child {
      margin-bottom: 0;
  }
  .timeline-dot {
      position: absolute;
      left: 20px;
      top: 6px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #fff;
      border: 4px solid var(--primary-color);
      z-index: 2;
  }
  .timeline-date {
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--primary-color);
      margin-bottom: 8px;
  }
  .timeline-content {
      background-color: var(--bg-color);
      padding: 24px;
      border-radius: 16px;
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 12px var(--shadow-color);
  }
  .timeline-content h3 {
      font-size: 1.25rem;
      margin-bottom: 4px;
  }
  .company {
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--text-light);
      margin-bottom: 16px;
  }
  .timeline-content ul {
      padding-left: 18px;
      list-style-type: disc;
  }
  .timeline-content li {
      margin-bottom: 8px;
      font-size: 0.95rem;
  }

  /* --- CERTIFICATIONS --- */
  .filter-container {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
      flex-wrap: wrap;
  }
  .filter-btn {
      background-color: #fff;
      border: 1px solid var(--border-color);
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: var(--transition);
  }
  .filter-btn:hover, .filter-btn.active {
      background-color: var(--primary-color);
      color: #fff;
      border-color: var(--primary-color);
      box-shadow: 0 4px 12px rgba(53, 167, 255, 0.2);
  }
  .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
  }
  .cert-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 10px 30px var(--shadow-color);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .cert-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(15, 37, 55, 0.1);
  }
  .cert-card-header {
      margin-bottom: 16px;
  }
  .cert-icon {
      color: var(--primary-color);
      margin-bottom: 12px;
  }
  .cert-title {
      font-size: 1.1rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 8px;
  }
  .cert-issuer {
      font-size: 0.9rem;
      color: var(--text-light);
      font-weight: 500;
  }
  .cert-date {
      font-size: 0.85rem;
      background-color: var(--secondary-color);
      color: #1a629b;
      padding: 4px 10px;
      border-radius: 10px;
      align-self: flex-start;
      margin-top: 12px;
      font-weight: 600;
  }

  /* --- SKILLS --- */
  .skills {
      background-color: #fff;
  }
  .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
  }
  .skills-category {
      background-color: var(--bg-color);
      padding: 32px;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      box-shadow: 0 8px 24px var(--shadow-color);
  }
  .skills-category h3 {
      font-size: 1.25rem;
      margin-bottom: 24px;
      position: relative;
      padding-bottom: 12px;
  }
  .skills-category h3::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 3px;
      background-color: var(--primary-color);
  }
  .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
  }
  .skills-tags span {
      background-color: #fff;
      border: 1px solid var(--border-color);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: var(--transition);
  }
  .skills-tags span:hover {
      background-color: var(--secondary-color);
      border-color: var(--primary-color);
  }

  /* --- EDUCATION --- */
  .education {
      background-color: var(--bg-color);
  }
  .edu-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 40px;
      border-radius: 24px;
      box-shadow: 0 16px 40px var(--shadow-color);
      max-width: 800px;
      margin: 0 auto;
  }
  .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 12px;
  }
  .edu-header h3 {
      font-size: 1.5rem;
  }
  .edu-year {
      background-color: var(--primary-color);
      color: #fff;
      padding: 6px 14px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.85rem;
  }
  .edu-degree {
      font-size: 1.15rem;
      color: var(--text-light);
      margin-bottom: 8px;
      font-weight: 500;
  }
  .edu-gpa {
      font-size: 1rem;
      margin-bottom: 16px;
  }
  .edu-org {
      font-size: 0.95rem;
      opacity: 0.85;
      border-top: 1px solid var(--border-color);
      padding-top: 16px;
  }

  /* --- CONTACT --- */
  .contact {
      background-color: #fff;
      text-align: center;
  }
  .contact-desc {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 40px;
      color: var(--text-light);
  }
  .contact-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
  }
  .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      padding: 16px 28px;
      border-radius: 16px;
      font-weight: 600;
      transition: var(--transition);
  }
  .contact-item:hover {
      background-color: var(--secondary-color);
      border-color: var(--primary-color);
      transform: translateY(-2px);
  }

  /* --- FOOTER --- */
  .footer {
      background-color: var(--text-color);
      color: #fff;
      padding: 32px 0;
      text-align: center;
      font-size: 0.9rem;
      opacity: 0.9;
  }

  /* --- RESPONSIVE MEDIA QUERIES --- */
  @media (max-width: 900px) {
      .hero-container {
          flex-direction: column;
          text-align: center;
          gap: 40px;
      }
      .cta-buttons {
          justify-content: center;
      }
      .skills-grid {
          grid-template-columns: 1fr;
          gap: 24px;
      }
      .stats-container {
          grid-template-columns: 1fr;
          gap: 16px;
      }
  }
  @media (max-width: 600px) {
      body {
          padding-top: 70px;
      }
      .navbar {
          height: 70px;
      }
      .nav-links {
          display: none;
      }
      .hero-content h1 {
          font-size: 2.2rem;
      }
      .timeline::before {
          left: 15px;
      }
      .timeline-dot {
          left: 4px;
      }
      .timeline-item {
          padding-left: 40px;
      }
      .contact-item {
          width: 100%;
          justify-content: center;
      }
  }
  ```

- [ ] **Step 2: Verify CSS exists**
  Run: `ls style.css`
  Expected: style.css is present.

- [ ] **Step 3: Commit**
  Run: `git add style.css && git commit -m "feat: add style.css with sky blue light theme"`

---

### Task 4: Implement Filter Logic & Certification Data
**Files:**
- Create: `app.js`

- [ ] **Step 1: Write JS code for certificate data and dynamic category filtering**
  Create `app.js` with this code:
  ```javascript
  // --- CERTIFICATION DATA ---
  const certifications = [
      {
          title: "Certified Behavioral Event Interview (BEI)",
          issuer: "Quantum HR Indonesia",
          date: "Juni 2024",
          category: "recruitment"
      },
      {
          title: "Certified HRIS (HR Information System)",
          issuer: "Quantum HR Indonesia",
          date: "Mei 2024",
          category: "hr"
      },
      {
          title: "Certified HR - TA Mini Bootcamp",
          issuer: "Edspert.id",
          date: "Maret 2024",
          category: "recruitment"
      },
      {
          title: "Certified Tech Recruiter",
          issuer: "Coding Collective",
          date: "Februari 2024",
          category: "recruitment"
      },
      {
          title: "Certified Talent Acquisition",
          issuer: "MSDM Indonesia Bisa",
          date: "Februari 2024",
          category: "recruitment"
      },
      {
          title: "Certified DISC Profiling Test",
          issuer: "HR Nusantara Community",
          date: "Januari 2024",
          category: "psychometrics"
      },
      {
          title: "Certified HR Staff Training",
          issuer: "Quantum HR Indonesia",
          date: "September 2023",
          category: "hr"
      },
      {
          title: "Certified Master Human Resources",
          issuer: "Kelas.com",
          date: "Februari 2023",
          category: "hr"
      },
      {
          title: "Certified Personnel Staff Training",
          issuer: "Platinum Skills Indonesia",
          date: "September 2021",
          category: "hr"
      },
      {
          title: "Certified Hypnotherapy & Practical",
          issuer: "Learn Academy",
          date: "Juni 2020",
          category: "other"
      },
      {
          title: "Certified Graphology & Practical",
          issuer: "Learn Academy",
          date: "Maret 2020",
          category: "psychometrics"
      }
  ];

  // --- RENDER FUNCTION ---
  function renderCertifications(filter = "all") {
      const grid = document.getElementById("cert-grid");
      grid.innerHTML = "";

      const filtered = certifications.filter(cert => {
          if (filter === "all") return true;
          return cert.category === filter;
      });

      filtered.forEach(cert => {
          const card = document.createElement("div");
          card.className = "cert-card";

          const iconSVG = `
              <svg class="cert-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
          `;

          card.innerHTML = `
              <div class="cert-card-header">
                  ${iconSVG}
                  <h3 class="cert-title">${cert.title}</h3>
                  <p class="cert-issuer">${cert.issuer}</p>
              </div>
              <span class="cert-date">${cert.date}</span>
          `;
          grid.appendChild(card);
      });
  }

  // --- EVENT LISTENERS ---
  document.addEventListener("DOMContentLoaded", () => {
      renderCertifications("all");

      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(btn => {
          btn.addEventListener("click", (e) => {
              filterBtns.forEach(b => b.classList.remove("active"));
              btn.classList.add("active");

              const filterValue = btn.getAttribute("data-filter");
              renderCertifications(filterValue);
          });
      });

      window.addEventListener("scroll", () => {
          const navbar = document.querySelector(".navbar");
          if (window.scrollY > 50) {
              navbar.classList.add("scrolled");
          } else {
              navbar.classList.remove("scrolled");
          }
      });
  });
  ```

- [ ] **Step 2: Verify JS syntax is valid**
  Run: `node -c app.js`
  Expected: Exit code 0 (no syntax errors).

- [ ] **Step 3: Commit**
  Run: `git add app.js && git commit -m "feat: implement certification filtering logic in app.js"`

---

### Task 5: Launch & Verification
- [ ] **Step 1: Open index.html in browser to verify layout**
  Run: `open index.html` (or serve locally)
  Expected: Page renders correctly with light sky blue theme, filters certifications on click.

- [ ] **Step 2: Commit final build**
  Run: `git commit -a --allow-empty -m "build: verify final portfolio build"`

---

## Verification Plan

### Automated Tests
- Syntax check: `node -c app.js`

### Manual Verification
- Verify layout responsive design via mobile/desktop view in browser.
- Verify filtering category works by clicking TA & Recruitment, Psychometrics, etc.
