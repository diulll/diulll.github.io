// Typing and deleting animation for "front-end developer" text
function startTypingAnimation(text) {
    const typingText = document.querySelector('.blue');
    if (!typingText) return;
    typingText.textContent = '';
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 80;
    const pauseBeforeDelete = 1200;
    const pauseBeforeType = 500;
    function typeLoop() {
        if (!isDeleting) {
            if (charIndex < text.length) {
                typingText.textContent = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeLoop, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeLoop, pauseBeforeDelete);
            }
        } else {
            if (charIndex > 0) {
                typingText.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeLoop, deletingSpeed);
            } else {
                isDeleting = false;
                setTimeout(typeLoop, pauseBeforeType);
            }
        }
    }
    typeLoop();
    typingText.style.borderRight = '2px solid #4a90e2';
    typingText.style.animation = 'blink 1s infinite';
}

document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.blue');
    if (typingText) {
        startTypingAnimation(typingText.textContent);
    }
});

// Add CSS animation for cursor blink
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-right-color: #4a90e2; }
        51%, 100% { border-right-color: transparent; }
    }
    .blue {
        display: inline-block;
        min-width: 200px;
    }
`;
document.head.appendChild(style);

// Translation system
const translations = {
    en: {
        'home': '#home',
        'about-me': '#about-me',
        'contacts': '#contacts',
        'hero-title': 'Ulso is',
        'hero-blue': 'front-end developer',
        'hero-subtitle': "I'm a front-end deveper who crafts responsive websites where technologies meet creativity",
        'contact-btn': 'Contact me !!',
        'about-title': '#about-me',
        'about-greeting': "Hello, i'm Ulso!",
        'about-description': "I'm a self-taught front-end developer based in Yogyakarta, Indonesia. I can develop responsive, user-friendly websites. Turning my creativity and knowledge into websites has been my passion for over a year. I've helped various clients build their online presence. I'm always looking to learn the latest technologies and frameworks.",
        'contacts-title': '#contacts',
        'contacts-description': "If interested in freelance opportunities, teamwork, project or question, don't hesitate to contact me!",
        'message-here': 'Message me here',
        'media': 'Media',
        'copyright': '© Copyright 2025. Made by Ulso'
    },
    id: {
        'home': '#beranda',
        'about-me': '#tentang-saya',
        'contacts': '#kontak',
        'hero-title': 'Ulso adalah',
        'hero-blue': 'front-end developer',
        'hero-subtitle': 'Saya adalah seorang front-end developer yang membuat website responsif di mana teknologi bertemu dengan kreativitas',
        'contact-btn': 'Hubungi Saya !!',
        'about-title': '#tentang-saya',
        'about-greeting': 'Halo, saya Nauval Badiul Fikri Alhadad Hs! Saya seorang pengembang front-end otodidak yang tinggal di Yogyakarta, Indonesia. Saya dapat mengembangkan situs web responsif yang ramah pengguna. Mengubah kreativitas dan pengetahuan saya menjadi situs web telah menjadi keinginan saya selama lebih dari setahun. Saya telah membantu berbagai klien untuk membangun kehadiran mereka secara daring. Saya selalu berusaha untuk mempelajari teknologi dan kerangka kerja terbaru.',
        'contacts-title': '#kontak',
        'contacts-description': 'Jika tertarik dengan peluang freelance, kerja tim, proyek atau pertanyaan, jangan ragu untuk menghubungi saya!',
        'message-here': 'Kirim pesan di sini',
        'media': 'Media',
        'copyright': '© Hak Cipta 2025. Dibuat oleh Ulso'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const langOptions = document.querySelectorAll('[data-lang]');
    let currentLang = 'en';
    if (langBtn && langMenu && langOptions.length) {
        langBtn.addEventListener('click', function(e) {
            e.preventDefault();
            langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.lang-dropdown')) {
                langMenu.style.display = 'none';
            }
        });
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                if (selectedLang !== currentLang) {
                    currentLang = selectedLang;
                    updateLanguage(selectedLang);
                    langBtn.textContent = selectedLang.toUpperCase() + ' ▼';
                    langMenu.style.display = 'none';
                }
            });
        });
    }
    function updateLanguage(lang) {
        const texts = translations[lang];
        // Navigation
        const navHome = document.querySelector('a[href="#home"]');
        const navAbout = document.querySelector('a[href="#about-me"]');
        const navContacts = document.querySelector('a[href="#contacts"]');
        if (navHome) navHome.textContent = texts['home'];
        if (navAbout) navAbout.textContent = texts['about-me'];
        if (navContacts) navContacts.textContent = texts['contacts'];
        // Hero section
        const heroTitle = document.querySelector('.hero-left h1');
        if (heroTitle) {
            heroTitle.innerHTML = `${texts['hero-title']} <span class="blue">${texts['hero-blue']}</span>`;
        }
        const heroSubtitle = document.querySelector('.hero-left p');
        if (heroSubtitle) heroSubtitle.textContent = texts['hero-subtitle'];
        const contactBtn = document.querySelector('.contact-btn');
        if (contactBtn) contactBtn.textContent = texts['contact-btn'];
        // About section
        const aboutTitle = document.querySelector('.about-me h2');
        if (aboutTitle) aboutTitle.textContent = texts['about-title'];
        const aboutGreeting = document.querySelector('.about-left p');
        if (aboutGreeting) aboutGreeting.textContent = texts['about-greeting'];
        const aboutDesc = document.querySelector('.about-left p + p');
        if (aboutDesc) aboutDesc.textContent = texts['about-description'];
        // Contacts section
        const contactsTitle = document.querySelector('.contacts h2');
        if (contactsTitle) contactsTitle.textContent = texts['contacts-title'];
        const contactsDesc = document.querySelector('.contacts-left p');
        if (contactsDesc) contactsDesc.textContent = texts['contacts-description'];
        const contactBoxMsg = document.querySelector('.contact-box p');
        if (contactBoxMsg) contactBoxMsg.textContent = texts['message-here'];
        // Footer
        const footerCopyright = document.querySelector('.footer-copyright');
        if (footerCopyright) footerCopyright.textContent = texts['copyright'];
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        // Restart typing animation with new text
        const blueText = document.querySelector('.blue');
        if (blueText) startTypingAnimation(blueText.textContent);
    }
}); 
