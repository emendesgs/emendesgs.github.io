document.addEventListener('DOMContentLoaded', () => {
    // Definir ano atual no footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Menu Mobile (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Fechar menu mobile ao clicar em um link
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Scroll Suave e Highlight de Seção Ativa
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 160)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Estilo da NavBar ao rolar (Tokyo Night Frosted Glass)
        if (header) {
            if (scrollY > 50) {
                header.style.background = 'rgba(22, 22, 30, 0.92)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                header.style.padding = '0.75rem 0';
            } else {
                header.style.background = 'rgba(22, 22, 30, 0.8)';
                header.style.boxShadow = 'none';
                header.style.padding = '1.1rem 0';
            }
        }
    });
});
