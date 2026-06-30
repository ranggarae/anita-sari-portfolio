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

// --- MASCOT PHRASES ---
const mascotPhrases = [
    "Halo! Semangat Rekrutmen! ✨",
    "Aku Nailong! Yuk lihat CV Kak Anita! 🦖",
    "Kak Anita punya 11 sertifikasi HR lho! 🎓",
    "Wawancara BEI? Sourcing LinkedIn? Kak Anita jagonya! 🎯",
    "Duang~ Duang~ gemes banget websitenya! 💛",
    "Sarjana Psikologi Gunadarma IPK 3.40! Mantap! 🌟"
];

let phraseIndex = 0;

// --- RENDER FUNCTION ---
function renderCertifications(filter = "all") {
    const grid = document.getElementById("cert-grid");
    grid.innerHTML = "";

    const filtered = certifications.filter(cert => {
        if (filter === "all") return true;
        return cert.category === filter;
    });

    filtered.forEach((cert, idx) => {
        const card = document.createElement("div");
        card.className = "cert-card";
        // Stagger animation delay
        card.style.animationDelay = `${idx * 50}ms`;

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
    // Initial Render
    renderCertifications("all");

    // Filter Buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            renderCertifications(filterValue);

            // Pop speech bubble on filter click
            showSpeechBubble("Wah, ini sertifikasi pilihan! 🎯");
        });
    });

    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mascot Interactivity
    const mascot = document.getElementById("mascot-float");
    const speech = document.getElementById("bubble-speech");

    // Helper to show bubble
    function showSpeechBubble(text) {
        speech.innerText = text;
        speech.classList.add("show");
        // Clear previous timeout if any
        if (window.bubbleTimeout) clearTimeout(window.bubbleTimeout);
        window.bubbleTimeout = setTimeout(() => {
            speech.classList.remove("show");
        }, 3000);
    }

    mascot.addEventListener("click", () => {
        phraseIndex = (phraseIndex + 1) % mascotPhrases.length;
        showSpeechBubble(mascotPhrases[phraseIndex]);

        // Trigger manual bump animation on click
        mascot.style.animation = 'none';
        mascot.offsetHeight; // Trigger reflow
        mascot.style.animation = 'floating-mascot 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        setTimeout(() => {
            mascot.style.animation = 'floating-mascot 3s ease-in-out infinite';
        }, 500);
    });

    // Show initial greeting after 2 seconds
    setTimeout(() => {
        showSpeechBubble("Halo! Aku Nailong! 🦖");
    }, 2000);
});
