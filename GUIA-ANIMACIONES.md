// ===================================
// GUÍA DE ANIMACIONES
// Cómo usar el sistema de animaciones suaves
// ===================================

/**
 * SISTEMA DE ANIMACIONES IMPLEMENTADO
 * 
 * Este sistema proporciona animaciones suaves y elegantes que mejoran la
 * experiencia visual del sitio sin sacrificar performance ni accesibilidad.
 */

// ═══════════════════════════════════════════════════════════════════════
// 1. FONDO DINÁMICO ANIMADO
// ═══════════════════════════════════════════════════════════════════════

/**
 * El fondo del sitio cambia suavemente entre:
 * - Verde agua suave (#a8e6d8)
 * - Verde menta delicado (#85dcc7)
 * - Rosado suave elegante (#f2b8d4)
 * - Nude/rosado pastel premium (#f0d5cc)
 * 
 * Animación: 28 segundos con transición ease-in-out
 * Incluye shimmer sutil para dar profundidad (22 segundos)
 * 
 * Se adapta automáticamente si el usuario prefiere menos movimiento
 * (prefers-reduced-motion)
 */


// ═══════════════════════════════════════════════════════════════════════
// 2. ANIMACIONES DE SCROLL
// ═══════════════════════════════════════════════════════════════════════

/**
 * CLASES DISPONIBLES PARA ANIMACIONES DE SCROLL
 * 
 * Aplicar la clase "scroll-animate" + la animación específica:
 * 
 * Ejemplo HTML:
 * <div class="scroll-animate fade-in">
 *   Contenido que se anima al detectarse en viewport
 * </div>
 * 
 * TIPOS DE ANIMACIONES:
 * 
 * 1. fade-in
 *    - Desaparece a completamente visible
 *    - Uso: textos, párrafos, elementos sutiles
 * 
 * 2. slide-up
 *    - Sube desde 30px abajo hacia su posición
 *    - Uso: cards, secciones, bloques principales
 * 
 * 3. slide-left
 *    - Viene desde la izquierda
 *    - Uso: imágenes en layout de dos columnas (lado derecho)
 * 
 * 4. slide-right
 *    - Viene desde la derecha
 *    - Uso: texto en layout de dos columnas (lado izquierdo)
 * 
 * 5. scale-up
 *    - Crece desde 95% hasta 100% + fade-in
 *    - Uso: cards, botones, elementos que requieren atención
 */

// ═══════════════════════════════════════════════════════════════════════
// 3. ANIMACIONES ESCALONADAS (STAGGER)
// ═══════════════════════════════════════════════════════════════════════

/**
 * Para animar múltiples elementos de forma escalonada (con delay progresivo)
 * 
 * Ejemplo HTML:
 * <div class="features-grid">
 *   <div class="feature-card">Elemento 1 - Delay 0s</div>
 *   <div class="feature-card">Elemento 2 - Delay 0.1s</div>
 *   <div class="feature-card">Elemento 3 - Delay 0.2s</div>
 *   <div class="feature-card">Elemento 4 - Delay 0.3s</div>
 * </div>
 * 
 * El JavaScript detecta automáticamente .feature-card y aplica:
 * - scroll-stagger a cada elemento
 * - Active al entrar en viewport
 * - Delays de 0.1s entre elementos
 * 
 * Los delays máximos son 0.5s (para no ralentizar demasiado)
 */

// ═══════════════════════════════════════════════════════════════════════
// 4. CLASES DE ANIMACIÓN INMEDIATA
// ═══════════════════════════════════════════════════════════════════════

/**
 * Para elementos que deben animarse sin esperar a scroll
 * (útil para hero section, títulos iniciales)
 * 
 * CLASES:
 * 
 * .animate-fade-in
 * .animate-slide-up
 * .animate-slide-down
 * .animate-slide-left
 * .animate-slide-right
 * .animate-scale-up
 * 
 * Ejemplo HTML:
 * <h1 class="animate-slide-down">Mi Título</h1>
 * <p class="animate-slide-down" style="animation-delay: 0.2s;">Subtítulo</p>
 * 
 * Se ejecutan automáticamente al cargar la página
 */

// ═══════════════════════════════════════════════════════════════════════
// 5. CLASES DE EFECTOS HOVER
// ═══════════════════════════════════════════════════════════════════════

/**
 * .hover-lift
 *   - Sube elementos al pasar mouse (-8px)
 *   - Sombra drop mejorada
 *   - Uso: cards, enlaces, botones
 * 
 * .hover-scale
 *   - Escala a 105% al pasar mouse
 *   - Uso: imágenes, iconos, elementos pequeños
 * 
 * .hover-glow
 *   - Agrega un glow rosado sutil
 *   - Uso: elementos que requieren atención especial
 */

// ═══════════════════════════════════════════════════════════════════════
// 6. CLASES DECORATIVAS
// ═══════════════════════════════════════════════════════════════════════

/**
 * .line-animate
 *   - Agrega una línea decorativa que se anima al cargar
 *   - Útil para títulos especiales
 * 
 * Ejemplo HTML:
 * <h2 class="line-animate">Hola, soy Marisol</h2>
 * 
 * .text-reveal
 *   - Anima textos con efecto de revelación
 *   - Las letras aparecen gradualmente
 * 
 * .pulse-subtle
 *   - Efecto de pulso suave y continuo
 *   - 3 segundos por ciclo
 * 
 * .glow-subtle
 *   - Efecto de brillo sutil (4 segundos)
 */

// ═══════════════════════════════════════════════════════════════════════
// 7. JavaScript - FUNCIONES DISPONIBLES
// ═══════════════════════════════════════════════════════════════════════

/**
 * El script animations.js proporciona funciones globales en:
 * window.scrollAnimations.observe()
 * window.scrollAnimations.stagger()
 * window.scrollAnimations.initScrollAnimations()
 * 
 * EJEMPLO DE USO CUSTOM:
 * 
 * // Animar todos los elementos con clase .my-element con slide-up
 * window.scrollAnimations.observe('.my-element', 'slide-up');
 * 
 * // Con opciones personalizadas
 * window.scrollAnimations.observe('.my-element', 'fade-in', {
 *     threshold: 0.2,
 *     rootMargin: '0px 0px -100px 0px'
 * });
 */

// ═══════════════════════════════════════════════════════════════════════
// 8. ACCESIBILIDAD - PREFERS-REDUCED-MOTION
// ═══════════════════════════════════════════════════════════════════════

/**
 * El sistema respeta automáticamente la preferencia del usuario
 * de reducir movimiento en el Sistema Operativo:
 * 
 * - Windows 10/11: Configuración > Accesibilidad > Pantalla 
 *   > Mostrar animaciones
 * 
 * - macOS: Sistema > Accesibilidad > Pantalla > Reducir movimiento
 * 
 * - iOS: Configuración > Accesibilidad > Movimiento
 * 
 * - Android: Configuración > Accesibilidad > Movimiento (varía por versión)
 * 
 * Cuando está activado:
 * - Todas las animaciones se desactivan (duración 0.01ms)
 * - El fondo muestra la paleta sin animar
 * - Los hover effects se aplican sin transición
 * - La experiencia es lo más estática posible
 */

// ═══════════════════════════════════════════════════════════════════════
// 9. RENDIMIENTO Y OPTIMIZACIONES
// ═══════════════════════════════════════════════════════════════════════

/**
 * MOBILE OPTIMIZATIONS:
 * - Animaciones más cortas (0.6s en lugar de 0.8s)
 * - Stagger delays más cortos
 * - Menos efectos de shimmer
 * - Intersection Observer para detectar visibilidad
 * 
 * PERFORMANCE:
 * - No usa JavaScript para animar (solo para detectar visibilidad)
 * - Las animaciones usan CSS keyframes (más eficientes)
 * - El fondo dinámico usa gradientes (GPU acelerado)
 * - Debouncing automático para reduce-motion detection
 */

// ═══════════════════════════════════════════════════════════════════════
// 10. EJEMPLOS DE IMPLEMENTACIÓN
// ═══════════════════════════════════════════════════════════════════════

/**
 * HERO SECTION:
 * 
 * <section class="hero">
 *   <h1 class="hero-title animate-slide-down">Título</h1>
 *   <p class="hero-subtitle animate-slide-down" style="animation-delay: 0.2s;">
 *     Subtítulo
 *   </p>
 *   <a href="#" class="btn animate-scale-up" style="animation-delay: 0.4s;">
 *     CTA Button
 *   </a>
 * </section>
 */

/**
 * ABOUT SECTION CON DOS COLUMNAS:
 * 
 * <section class="about">
 *   <div class="container">
 *     <div class="about-grid">
 *       <img class="about-image scroll-animate slide-left" src="..." />
 *       <div class="about-text scroll-animate slide-right">
 *         <h2 class="line-animate">Título</h2>
 *         <p>Contenido</p>
 *       </div>
 *     </div>
 *   </div>
 * </section>
 */

/**
 * PRODUCTOS GRID:
 * 
 * <section class="products">
 *   <div class="products-grid">
 *     <div class="product-card hover-lift">
 *       <!-- El JavaScript automáticamente detecta product-card -->
 *       <!-- y aplica scroll-animate scale-up con stagger -->
 *     </div>
 *   </div>
 * </section>
 */

/**
 * FEATURES CON STAGGER:
 * 
 * <section class="features">
 *   <div class="features-grid">
 *     <div class="feature-card">
 *       <!-- El JavaScript automáticamente -->
 *       <!-- aplica scroll-stagger y delays escalonados -->
 *     </div>
 *   </div>
 * </section>
 */

// ═══════════════════════════════════════════════════════════════════════
// 11. TIMING Y DURACIONES
// ═══════════════════════════════════════════════════════════════════════

/**
 * DURACIÓN DE ANIMACIONES:
 * 
 * Scroll animations (default):      0.8s ease-out
 * Mobile scroll animations:         0.6s ease-out
 * Hover effects:                    0.3s ease-out
 * Fondo dinámico:                   28s ease-in-out
 * Shimmer layer:                    22s ease-in-out
 * Pulse subtle:                     3s ease-in-out
 * Glow subtle:                      4s ease-in-out
 * Line animate:                     1.5s ease-in-out
 * Text reveal:                      0.8s ease-out
 * 
 * STAGGER DELAYS:
 * Elemento 1:   0.0s
 * Elemento 2:   0.1s
 * Elemento 3:   0.2s
 * Elemento 4:   0.3s
 * Elemento 5:   0.4s
 * Elemento 6+:  0.5s
 */

// ═══════════════════════════════════════════════════════════════════════
// 12. DEBUGGING
// ═══════════════════════════════════════════════════════════════════════

/**
 * El script escribe mensajes en la consola:
 * - "🎨 Scroll animations iniciadas" - animaciones activas
 * - "✨ Scroll animations activadas" - todas listas
 * - "🎨 Animaciones reducidas..." - usuario prefiere menos movimiento
 * - "🎨 Animaciones deshabilitadas..." - cambio en preferencias
 * 
 * Para ver todos los logs:
 * Abre DevTools (F12) > Console
 */

// ═══════════════════════════════════════════════════════════════════════
// 13. NOTAS IMPORTANTES
// ═══════════════════════════════════════════════════════════════════════

/**
 * ❌ NO HACER:
 * - Agregar animations.css múltiples veces (solo una vez en <head>)
 * - Agregar animations.js múltiples veces (solo una vez antes de </body>)
 * - Cambiar duración de animaciones manualmente (puede afectar performance)
 * - Agregar más de 6 elementos en stagger (efecto visual pobre)
 * - Usar animaciones en elementos muy pequeños (botones, iconos)
 * 
 * ✅ SÍ HACER:
 * - Usar la clase correcta según el tipo de elemento
 * - Respetar la accesibilidad (prefers-reduced-motion)
 * - Probar en mobile (las animaciones se adaptan)
 * - Usar datos-animación en elementos dinámicos (si es necesario)
 * - Monitorear performance en DevTools
 */
