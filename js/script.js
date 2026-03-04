// =====================
// Scroll suave
// =====================
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =====================
// Link activo en el menú
// =====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =====================
// Animación simple al aparecer
// =====================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.section, .project-card').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
