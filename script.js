// ============================================
// VIRTUE - JAVASCRIPT FUTURISTA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Virtue Site Futurista carregando...');

    // ===== ELEMENTOS DOM =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroVideo = document.getElementById('heroVideo');
    const videoFallback = document.getElementById('videoFallback');
    
    // ===== NAVEGAÇÃO GLASSMORPHISM =====
    
    // Toggle do menu mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Fecha o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('active') && !navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Fecha menu com ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== SCROLL SUAVE E EFEITOS NAVBAR =====
    
    function updateNavbarOnScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }

    // Scroll suave para seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbarHeight = navbar?.offsetHeight || 80;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== GERENCIAMENTO DE VÍDEO HERO =====
    
    function handleVideoError() {
        if (heroVideo && videoFallback) {
            document.body.classList.add('video-failed');
        }
    }

    if (heroVideo) {
        heroVideo.addEventListener('error', handleVideoError);
        heroVideo.addEventListener('canplay', () => heroVideo.play().catch(handleVideoError));
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            handleVideoError();
        }
    }

    // ===== ANIMAÇÕES DE ENTRADA COM INTERSECTION OBSERVER =====
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 150}ms`;
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(`
        .section-header-futuristic, .story-card, .differential-card-futuristic, 
        .service-card-futuristic, .portfolio-item-futuristic, .contact-card-futuristic,
        .hero-badge, .hero-main-content
    `);
    animateElements.forEach(el => fadeInObserver.observe(el));


    // ===== EFEITOS DE SCROLL =====
    
    const throttledScrollHandler = throttle(() => {
        updateNavbarOnScroll();
    }, 100);

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    // ===== FUNCIONALIDADE DO MODAL DO PORTFÓLIO =====
    
    const modal = document.getElementById('portfolio-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');
    const bgClose = document.querySelector('.modal-bg-close');
    const portfolioCards = document.querySelectorAll('.portfolio-card-wrapper');

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.fullImage);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    bgClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===== INICIALIZAÇÃO =====
    
    function initialize() {
        document.body.classList.add('js-loaded');
        console.log('✅ Virtue Site Futurista carregado com sucesso! 🚀');
    }

    initialize();
});

// ===== FUNÇÕES UTILITÁRIAS GLOBAIS =====

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
} 