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
    
    console.log('🎯 Títulos premium inicializados');
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
 * MICRO-INTERACCIONES EN CARDS PREMIUM
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
    
    console.log('💫 Elementos flotantes activados');
}

/**
 * THROTTLE - Optimiza scroll listeners
 * Limita la ejecución de funciones a cada X milisegundos
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
 * Agrega efecto ripple a botones .btn-ripple cuando se hacen clic
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
    
    console.log('🌊 Ripple effect activado en botones');
}

/**
 * ANIMACIONES DE DIVIDERS DECORATIVOS
 * Expande líneas decorativas cuando se detectan en viewport
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
 * BOTONES ANIMADOS CON UNDERLINE DINÁMICO
 * Efecto elegante de línea que corre al pasar mouse
 */
function initAnimatedButtons() {
    const animButtons = document.querySelectorAll('.btn-animated');
    
    animButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '0.8px';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.letterSpacing = '0.5px';
        });
    });
}

/**
 * EFECTO GRADIENT SHIFT EN BOTONES
 * Anima fondo gradiente lentamente
 */
function initGradientButtons() {
    const gradButtons = document.querySelectorAll('.btn-gradient-shift');
    
    const colors1 = ['#a8e6d8', '#85dcc7', '#f2b8d4', '#f0d5cc'];
    const colors2 = ['#85dcc7', '#f2b8d4', '#f0d5cc', '#a8e6d8'];
    
    gradButtons.forEach(btn => {
        btn.style.backgroundImage = `linear-gradient(135deg, ${colors1[0]}, ${colors2[0]})`;
    });
}

/**
 * INICIALIZACIÓN PRINCIPAL DEL SISTEMA PREMIUM
 * Se ejecuta cuando el DOM está completamente listo
 */
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario prefiere menos movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        console.log('♿ Animaciones reducidas: respetando preferencias de accesibilidad');
        document.querySelectorAll('[class*="animate"], [class*="scroll"], [class*="hover"]').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
        return;
    }
    
    console.log('🎬 ===== SISTEMA PREMIUM DE ANIMACIONES ACTIVADO =====');
    
    // Animaciones Premium Avanzadas
    initParallaxEffect();
    initPremiumTitles();
    initNumberCounters();
    initSectionTransitions();
    initPremiumCards();
    initFloatingElements();
    initButtonRipple();
    initSectionDividers();
    initImageZoom();
    initAnimatedButtons();
    initGradientButtons();
    
    console.log('✨ Todas las animaciones premium activadas - Experiencia de Lujo Lista');
    console.log('🎥 Perfecto para grabar en reels - Animaciones visibles y elegantes');
});

/**
 * DETECCIÓN DE CAMBIO EN PREFERENCIAS DE ACCESIBILIDAD
 * Si el usuario cambia su preferencia, recargar
 */
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
        console.log('♿ Cambio detectado: usuario activó reducción de movimiento');
        location.reload();
    }
});

// Exportar funciones globales si es necesario
window.premiumAnimations = {
    initiateCustomParallax: initParallaxEffect,
    countNumbers: initNumberCounters,
    activateRipple: initButtonRipple,
    triggerDividers: initSectionDividers
};
