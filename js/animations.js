// ===================================
// SISTEMA PREMIUM DE ANIMACIONES AVANZADAS
// Microinteracciones sofisticadas y animaciones de scroll
// ===================================

/**
 * PARALLAX EFFECT - Crea efecto 3D en imágenes
 * Detecta el scroll y mueve las imágenes ligeramente
 */
function initParallaxEffect() {
    const parallaxImages = document.querySelectorAll('.parallax-image img');
    
    if (parallaxImages.length === 0) return;
    
    window.addEventListener('scroll', throttle(() => {
        parallaxImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
            const yTranslate = Math.min(scrollProgress * 30, 30);
            
            img.style.transform = `translateY(-${yTranslate}px) scale(1.1)`;
        });
    }, 16), { passive: true });
    
    console.log('🌌 Parallax effect activado');
}

/**
 * ANIMACIONES DE TÍTULOS PREMIUM
 * Agrega underline dinámico a títulos cuando entran al viewport
 */
function initPremiumTitles() {
    const titles = document.querySelectorAll('.title-premium');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    titles.forEach(title => titleObserver.observe(title));
}

/**
 * ANIMACIÓN DE CONTADOR
 * Anima números cuando son visibles (para estadísticas, números clave)
 */
function initNumberCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('active')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = parseInt(entry.target.getAttribute('data-duration')) || 2000;
                
                animateCounter(entry.target, target, duration);
                entry.target.classList.add('active');
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * Anima un número desde 0 hasta el target
 */
function animateCounter(element, target, duration) {
    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (target - start) * progress);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    requestAnimationFrame(updateCounter);
}

/**
 * TRANSICIONES SUAVES ENTRE SECCIONES
 * Agrega clase fade/blur cuando secciones entran al viewport
 */
function initSectionTransitions() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-fade-enter');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * MICRO-INTERACCIONES EN CARDS
 * Detecta .card-premium y agrega efectos sofisticados
 */
function initPremiumCards() {
    const cards = document.querySelectorAll('.card-premium');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate', 'scale-up');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => cardObserver.observe(card));
}

/**
 * ANIMACIÓN DE ELEMENTOS FLOTANTES
 * Crea movimiento suave decorativo
 */
function initFloatingElements() {
    const floatingEls = document.querySelectorAll('.float-animation');
    
    if (floatingEls.length === 0) return;
    
    console.log('✨ Elementos flotantes inicializados');
}

/**
 * THROTTLE - Optimiza scroll listeners
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * ANIMACIONES DE BOTONES CON RIPPLE
 * Agrega efecto ripple a botones .btn-ripple
 */
function initButtonRipple() {
    const rippleButtons = document.querySelectorAll('.btn-ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

/**
 * ANIMACIONES DE DIVIDERS DECORATIVOS
 * Expande líneas decorativas cuando se detectan
 */
function initSectionDividers() {
    const dividers = document.querySelectorAll('.section-divider');
    
    const dividerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                dividerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    dividers.forEach(divider => {
        divider.style.opacity = '0';
        dividerObserver.observe(divider);
    });
}

/**
 * IMAGEN ZOOM ON SCROLL
 * Agrega efecto zoom a imágenes .image-zoom
 */
function initImageZoom() {
    const zoomImages = document.querySelectorAll('.image-zoom');
    
    const zoomObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate', 'fade-in');
                zoomObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    zoomImages.forEach(image => zoomObserver.observe(image));
}

/**
 * INICIALIZACIÓN PRINCIPAL
 * Se ejecuta cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Sistema Premium de Animaciones Activado');
    
    // Animaciones base (las del sistema anterior)
    initImmediateAnimations();
    initScrollAnimations();
    initSectionTitleAnimations();
    initProductCardAnimations();
    initFeatureCardAnimations();
    initTextBlockAnimations();
    
    // Nuevas animaciones avanzadas
    initParallaxEffect();
    initPremiumTitles();
    initNumberCounters();
    initSectionTransitions();
    initPremiumCards();
    initFloatingElements();
    initButtonRipple();
    initSectionDividers();
    initImageZoom();
    
    console.log('✨ Todas las animaciones activadas - Sitio Premium Listo');
});

/**
 * DETECCIÓN DE CAMBIO EN PREFERENCIAS DE ACCESIBILIDAD
 */
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
        console.log('♿ Animaciones deshabilitadas: usuario activó reducción de movimiento');
        location.reload();
    }
});

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
