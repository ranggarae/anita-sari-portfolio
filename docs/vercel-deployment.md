# Panduan Deployment ke Vercel untuk Portofolio Anita Sari

Website ini dibangun menggunakan teknologi native web statis (HTML, CSS, JS) tanpa build step. Deployment ke Vercel sangat cepat dan gratis.

## Opsi 1: Menggunakan Vercel CLI (Paling Cepat dari Terminal)

Jika Anda ingin mendeploy langsung dari komputer melalui terminal:

1. **Install Vercel CLI secara global:**
   ```bash
   npm install -g vercel
   ```

2. **Jalankan command deploy di root folder project (`/Users/ranggara/Project/nita`):**
   ```bash
   vercel
   ```

3. **Ikuti petunjuk di layar:**
   - *Set up and deploy "~/Project/nita"?* Tekan `Y` lalu `Enter`.
   - *Which scope...?* Pilih akun Vercel Anda lalu `Enter`.
   - *Link to existing project?* Tekan `N` lalu `Enter`.
   - *What's your project's name?* Tulis `anita-sari-portfolio` lalu `Enter`.
   - *In which directory is your code located?* Tekan `Enter` (untuk root `./`).
   - *Want to modify settings (build command/output directory)?* Tekan `N` lalu `Enter` (karena statis murni, Vercel otomatis mendeteksi index.html).

4. **Selesai!** Vercel akan memproses deployment dalam beberapa detik dan memberikan link preview langsung (misal: `anita-sari-portfolio.vercel.app`).

---

## Opsi 2: Hubungkan ke GitHub (Sangat Direkomendasikan)

Jika Anda ingin website otomatis terupdate setiap kali Anda melakukan `git commit`:

1. **Buat Repository Baru di GitHub:**
   - Masuk ke [GitHub](https://github.com) dan buat repository baru (misal: `anita-sari-portfolio`).

2. **Push Code dari Terminal Lokal Ke GitHub:**
   ```bash
   git remote add origin <URL_REPOSITORY_GITHUB_ANDA>
   git branch -M main
   git push -u origin main
   ```

3. **Hubungkan GitHub ke Vercel:**
   - Buka [Vercel Dashboard](https://vercel.com/dashboard).
   - Klik tombol **"Add New"** lalu pilih **"Project"**.
   - Hubungkan akun GitHub Anda jika belum dilakukan.
   - Cari repository `anita-sari-portfolio` yang baru dibuat, lalu klik **"Import"**.

4. **Konfigurasi & Deploy:**
   - Biarkan semua pengaturan default (Vercel akan otomatis mengenali index.html sebagai static website).
   - Klik **"Deploy"**.

5. **Selesai!** Setiap kali Anda melakukan update kode dan `git push`, website di Vercel akan terupdate secara otomatis (*Continuous Deployment*).
