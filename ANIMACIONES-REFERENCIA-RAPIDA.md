# 🎨 Sistema de Animaciones Suaves - Referencia Rápida

## Colores del Fondo Dinámico
- **Verde Agua Suave**: `#a8e6d8`
- **Verde Menta**: `#85dcc7`  
- **Rosado Suave**: `#f2b8d4`
- **Nude/Rosado Pastel**: `#f0d5cc`

✨ Se transicionan suavemente cada 28 segundos

---

## Clases de Animación (Una línea | Qué usar)

### Animaciones de Scroll (Hay que agre `scroll-animate` + clase de animación)

| Clase | Efecto | Cuándo Usar |
|-------|--------|-----------|
| `scroll-animate fade-in` | Desvanece suavemente | Textos, párrafos |
| `scroll-animate slide-up` | Sube desde abajo | Cards, secciones |
| `scroll-animate slide-left` | Viene de la izquierda | Imágenes (derecha) |
| `scroll-animate slide-right` | Viene de la derecha | Texto (izquierda) |
| `scroll-animate scale-up` | Crece + aparece | Cards, botones |

### Animaciones Inmediatas (Sin scroll)

| Clase | Efecto | Cuándo Usar |
|-------|--------|-----------|
| `animate-fade-in` | Desvanece | Hero section |
| `animate-slide-down` | Baja | Títulos hero |
| `animate-slide-up` | Sube | Subtítulos |
| `animate-scale-up` | Crece | CTAs |

### Hover Effects

| Clase | Efecto | Cuándo Usar |
|-------|--------|-----------|
| `hover-lift` | Sube + sombra | Cards, enlaces |
| `hover-scale` | Escala 105% | Imágenes, iconos |
| `hover-glow` | Glow rosado | Elementos especiales |

### Decorativos

| Clase | Efecto | Cuándo Usar |
|-------|--------|-----------|
| `line-animate` | Línea animada | Títulos especiales |
| `text-reveal` | Aparece letra por letra | Textos destacados |
| `pulse-subtle` | Pulso suave | Botones CTA |
| `glow-subtle` | Brillo sutil | Elementos premium |
| `scroll-stagger` | Delay progresivo | Múltiples elementos |

---

## Ejemplos Prácticos

### Hero Section ✨
```html
<section class="hero">
    <h1 class="hero-title animate-slide-down">Bienvenido</h1>
    <p class="hero-subtitle animate-slide-down" style="animation-delay: 0.2s;">Nuestro lema</p>
    <button class="btn animate-scale-up" style="animation-delay: 0.4s;">Ver Galería</button>
</section>
```

### About con Dos Columnas 🖼️
```html
<section class="about-preview">
    <img class="scroll-animate slide-left" src="photo.jpg" />
    <div class="scroll-animate slide-right">
        <h2 class="line-animate">Hola, soy Marisol</h2>
        <p>Mi historia...</p>
    </div>
</section>
```

### Cards Grid 🎴
```html
<div class="products-grid">
    <div class="product-card hover-lift"><!-- Auto-detectado --></div>
    <div class="product-card hover-lift"><!-- Auto-detectado --></div>
</div>
```

### Features Grid ⭐
```html
<div class="features-grid">
    <div class="feature-card"><!-- Auto-stagger --></div>
    <div class="feature-card"><!-- Delay 0.1s --></div>
    <div class="feature-card"><!-- Delay 0.2s --></div>
</div>
```

---

## Archivos Creados/Modificados

✅ **Nuevos**
- `css/animations.css` - Todas las animaciones CSS
- `js/animations.js` - Intersection Observer JavaScript
- `GUIA-ANIMACIONES.md` - Documentación completa

✅ **Modificados**
- `index.html` - Agregados CSS y JS de animaciones
- `galeria.html` - Agregados CSS y JS
- `productos.html` - Agregados CSS y JS
- `producto.html` - Agregados CSS y JS
- `sobre-mi.html` - Agregados CSS y JS
- `faq.html` - Agregados CSS y JS
- `carrito.html` - Agregados CSS y JS
- `checkout.html` - Agregados CSS y JS
- `gracias.html` - Agregados CSS y JS
- `ejemplo-galeria.html` - Agregados CSS y JS
- `css/main.css` - Cambió `background-color` a `transparent`

---

## Características Principales

### ✨ Fondo Dinámico
- Gradiente animado con 4 colores suaves
- Transiciones elegantes cada 28 segundos
- Shimmer sutil para profundidad
- Totalmente responsivo

### 🎯 Scroll Animations
- Intersection Observer automático
- Fade in, slide up/left/right, scale up
- Stagger delays para múltiples elementos
- Optimizado para mobile

### ♿ Accesibilidad
- Respeta `prefers-reduced-motion`
- Las animaciones se desactivan para usuarios que lo prefieren
- Performance optimizado
- Flujo lógico sin animaciones

### 📱 Mobile Optimizado
- Animaciones más cortas (0.6s vs 0.8s)
- Delays escalonados reducidos
- Touch-friendly
- Bajo consumo de batería

---

## Timing

| Elemento | Duración | Easing |
|----------|----------|--------|
| Scroll animations | 0.8s (mobile: 0.6s) | ease-out |
| Hover effects | 0.3s | ease-out |
| Fondo dinámico | 28s | ease-in-out |
| Shimmer | 22s | ease-in-out |
| Stagger delays | 0.1s entre elementos | — |

---

## 💡 Tips Importantes

✅ **Hacer**
- Usar 3-4 elementos en stagger máximo
- Probar en mobile en DevTools
- Mantener las animaciones sutiles
- Respetar prefers-reduced-motion

❌ **No Hacer**
- Crear stagger con +8 elementos
- Cambiar duración de animaciones
- Agregar scroll-animate a textos muy pequeños  
- Remover animations.css sin conocer las dependencias

---

## Debug Console Logs

```
🎨 Inicializando animaciones suaves...
✨ Scroll animations iniciadas
✨ Animaciones suaves activadas - Sitio listo
```

Busca estos mensajes en DevTools > Console (F12) para confirmar que todo está funcionando.

---

## Color Palette Export

```css
--color-1: #a8e6d8;  /* Verde agua suave */
--color-2: #85dcc7;  /* Verde menta delicado */
--color-3: #f2b8d4;  /* Rosado suave */
--color-4: #f0d5cc;  /* Nude/Rosado pastel */
```

Puedes usar estos colores en otros elementos también para mantener coherencia visual.

---

**Versión**: 1.0  
**Fecha**: Febrero 2026  
**Soporte**: Firefox, Chrome, Safari, Edge (últimas 2 versiones)
