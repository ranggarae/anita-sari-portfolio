# Design Spec: Anita Sari Portfolio Website

Single-page interactive portfolio for Anita Sari, a Tech & Non-Tech Recruiter and HRBP, based on her CV.

## Project Goal
Create a professional, modern, and high-impact online portfolio that showcases Anita Sari's 3+ years of experience as an HR Recruiter and HRBP, emphasizing her extensive list of professional certifications and psychology background.

## UI Layout & Content
The portfolio is structured as a single page with smooth navigation:
1. **Navbar**: Floating glassmorphic navigation bar (Links: Profile, Experience, Certifications, Education, Skills, Contact).
2. **Hero Section**:
   - Profile image placeholder/image (using CV page 1 image or layout placeholder).
   - Name: Anita Sari
   - Title: HRD || Tech & Non-Tech Recruiter || HRBP
   - Tagline: Psychology graduate with 3+ years of end-to-end recruitment experience.
   - Quick links: LinkedIn, Email, Download CV.
3. **Key Stats Banner**:
   - 3+ Years Experience
   - 10+ Professional Certifications
   - 100+ Bootcamp Participants
4. **Experience Timeline**:
   - PT ADI Perdana Nusantara (Nov 2023 - Present) - HRD || Tech & Non Tech Recruitment and Employee Branding
   - PT Mardhani Pro Health (July 2023 - November 2023) - HR Generalist Staff
   - PT NTT Indonesia Technology (June 2022 - July 2023) - HRD || HRBP (Internship)
   - One Third Consulting & Abroad (April 2022 - June 2022) - HRD || Recruiter (Internship)
5. **Certifications (Primary Feature)**:
   - Interactive category filters: [All, Recruitment & TA, Psychometrics & HR, Other]
   - Grid of certificates showing title, issuer, and date.
6. **Competence & Skills**:
   - Clean badges categorized into:
     - Recruitment & Sourcing (Sourcing, SIVA Recruitment, Glints, Glints, Jobstreet, Glints, Loker.id, Glints, Glints)
     - Psychology & Assessment (DISC, VAK, IQ, STIFFIN, Graphology, BEI)
     - Core Competencies (Communication, Leadership, Project Management)
     - Software Tools (MS Office, Photoshop, Canva, Animaker)
7. **Education**:
   - Gunadarma University - Bachelor of Psychology (S1) - GPA: 3.40/4.00
8. **Contact Section**:
   - Simple contact form/links (LinkedIn, Email, WhatsApp).

## Visual Guidelines (Aesthetics)
- **Theme**: Light Mode - "Sky Blue & White"
- **Color Palette**:
  - Background: Soft Ice Blue (`#F4F9FD`) to pure white gradient.
  - Cards & Navbar: Soft White Glassmorphic (`rgba(255, 255, 255, 0.7)`) with blur (`backdrop-filter: blur(10px)`).
  - Primary Accent: Light Sky Blue (`#35A7FF` / `hsl(206, 100%, 60%)`).
  - Text Color: Deep Navy (`#0F2537`) for high contrast accessibility.
  - Border/Highlight: Soft blue shadows (`rgba(53, 167, 255, 0.1)`).
- **Typography**: Inter (sans-serif) imported from Google Fonts.
- **Animations**:
  - Fade-in on scroll (simple CSS transitions triggered by JS Scroll Observer or standard hover transitions).
  - Smooth scale on card hover.
  - Smooth grid transitions for certificate filtering.

## Technical Architecture
- **Tech Stack**: Vanilla HTML5, Vanilla CSS3 (custom properties, Flexbox/Grid), Vanilla JavaScript (ES6+).
- **No Dependencies**: Purely native web platform. Fast load times, zero maintenance.
- **Responsive**: Fully responsive design (mobile, tablet, desktop).

## Verification Plan
1. **Lighthouse Audit**: Test for SEO, Performance, Accessibility.
2. **Responsive Check**: Test layout across different viewport sizes (Desktop, iPad, iPhone).
3. **Interaction Check**: Verify certificate filtering works without page reloads.
