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

            // Bloqueia ou desbloqueia o scroll do body
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

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Ponto de ajuste para ativação no menu
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Estilo da NavBar ao rolar
        const header = document.querySelector('.header');
        if (scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            header.style.padding = '0';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Form Submit (Prevent Default por enquanto)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui entraria a lógica de envio (Fetch API, etc)

            // Feedback visual simples
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Enviado com sucesso!';
            btn.style.backgroundColor = 'var(--secondary)';

            setTimeout(() => {
                form.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = 'var(--primary)';
            }, 3000);
        });
    }
});
