// ===================================
// SCROLL ANIMATIONS
// Implementa animaciones al hacer scroll con Intersection Observer
// ===================================

/**
 * Inicializa el Intersection Observer para animaciones de scroll
 */
function initScrollAnimations() {
    // Respetar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        console.log('🎨 Animaciones reducidas: usuario prefiere menos movimiento');
        // Mostrar todos los elementos sin esperar a scroll
        document.querySelectorAll('.scroll-animate, .scroll-stagger').forEach(el => {
            el.classList.add('active');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    // Configuración del Intersection Observer
    const observerOptions = {
        threshold: 0.1,      // Activar cuando 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Activar 50px antes de que sea visible
    };

    // Crear el observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elemento entra en el viewport
                entry.target.classList.add('active');
                
                // Obtener la animación específica del elemento
                const animationClass = Array.from(entry.target.classList).find(
                    cls => cls.startsWith('fade-') || cls.startsWith('slide-') || cls.startsWith('scale-')
                );
                
                if (animationClass) {
                    entry.target.classList.add(animationClass);
                }
                
                // Dejar de observar si está configurado
                if (entry.target.dataset.observeOnce === 'true') {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase scroll-animate o scroll-stagger
    document.querySelectorAll('.scroll-animate, .scroll-stagger').forEach(el => {
        observer.observe(el);
    });

    console.log('✨ Scroll animations iniciadas');
}

/**
 * Anima elementos con stagger dentro de un contenedor
 */
function addStaggerAnimation(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const items = container.querySelectorAll('.stagger-item');
    
    // Usar Intersection Observer para animar cuando el contenedor sea visible
    const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // El contenedor es visible, animar items
                items.forEach((item, index) => {
                    item.style.animation = `slideUp 0.8s ease-out forwards`;
                    item.style.animationDelay = `${index * 0.1}s`;
                });
                
                // Dejar de observar
                containerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    containerObserver.observe(container);
}

/**
 * Animaciones para elementos específicos que cargan con el DOM
 */
function initImmediateAnimations() {
    // Animar hero title y subtitle al cargar
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCTA = document.querySelector('.hero .btn');

    if (heroTitle) {
        heroTitle.classList.add('animate-slide-down');
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.animationDelay = '0.2s';
        heroSubtitle.classList.add('animate-slide-down');
    }

    if (heroCTA) {
        heroCTA.style.animationDelay = '0.4s';
        heroCTA.classList.add('animate-scale-up');
    }
}

/**
 * Anima cards de productos con stagger
 */
function initProductCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'scale-up');
        
        // Pequeño delay basado en la posición
        const delay = (index % 4) * 0.1;
        card.style.setProperty('--animation-delay', `${delay}s`);
        
        // Crear observer para cada card
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cardObserver.observe(card);
    });
}

/**
 * Anima feature cards
 */
function initFeatureCardAnimations() {
    const features = document.querySelectorAll('.feature-card');
    
    features.forEach((feature) => {
        feature.classList.add('scroll-stagger');
    });

    // Observar el contenedor de features
    const featureContainer = document.querySelector('.features-grid');
    if (featureContainer) {
        const containerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animar cada feature
                    features.forEach((feature) => {
                        feature.classList.add('active');
                    });
                    containerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        containerObserver.observe(featureContainer);
    }
}

/**
 * Anima títulos de secciones
 */
function initSectionTitleAnimations() {
    const titles = document.querySelectorAll('.section-title');
    const subtitles = document.querySelectorAll('.section-subtitle');

    titles.forEach((title) => {
        title.classList.add('scroll-animate', 'slide-up');
        title.dataset.observeOnce = 'true';
    });

    subtitles.forEach((subtitle) => {
        subtitle.classList.add('scroll-animate', 'fade-in');
        subtitle.dataset.observeOnce = 'true';
    });
}

/**
 * Anima bloques de texto (párrafos)
 */
function initTextBlockAnimations() {
    // Animar párrafos dentro de secciones
    document.querySelectorAll('section p').forEach((p) => {
        // No animar párrafos muy pequeños (breadcrumbs, etc)
        if (p.textContent.length > 50) {
            p.classList.add('scroll-animate', 'fade-in');
        }
    });
}

/**
 * Sistema de observación personalizada para elementos específicos
 */
function observeElement(selector, animation, options = {}) {
    const elements = document.querySelectorAll(selector);
    
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const finalOptions = { ...defaultOptions, ...options };

    elements.forEach((element) => {
        element.classList.add('scroll-animate', animation);

        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, finalOptions);

        elementObserver.observe(element);
    });
}

/**
 * Inicialización general de animaciones
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Inicializando animaciones suaves...');
    
    // Ejecutar animaciones inmediatas
    initImmediateAnimations();
    
    // Iniciar scroll animations
    initScrollAnimations();
    
    // Animar elementos específicos
    initSectionTitleAnimations();
    initProductCardAnimations();
    initFeatureCardAnimations();
    initTextBlockAnimations();
    
    // Log de éxito
    console.log('✨ Animaciones suaves activadas - Sitio listo');
});

/**
 * Detectar cambios en preferencia de movimiento reducido
 */
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
        console.log('🎨 Animaciones deshabilitadas: usuario activó reducción de movimiento');
        location.reload(); // Recargar para aplicar cambios
    }
});

// Exportar funciones para uso externo si es necesario
window.scrollAnimations = {
    observe: observeElement,
    stagger: addStaggerAnimation,
    initScrollAnimations: initScrollAnimations
};
