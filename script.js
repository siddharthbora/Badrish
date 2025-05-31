// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.navbar-modern .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Hamburger menu toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');
if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });
}

// Landing logo and text animation (no SVG threads)
window.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('main-logo');
    const brandText = document.getElementById('brand-text');
    const cta = document.querySelector('.landing-cta');
    if (logo) {
        setTimeout(() => {
            logo.style.opacity = 1;
            logo.style.transform = 'scale(1)';
            setTimeout(() => {
                if (brandText) brandText.style.opacity = 1;
                setTimeout(() => {
                    if (cta) cta.style.opacity = 1;
                }, 400);
            }, 400);
        }, 400);
    } else {
        if (brandText) brandText.style.opacity = 1;
        if (cta) cta.style.opacity = 1;
    }
});

// Placeholder for rendering modern zig-zag timeline (to be filled next)
function renderModernTimeline(timelineData) {
    // This function will render the zig-zag timeline in #modern-timeline-placeholder
}
