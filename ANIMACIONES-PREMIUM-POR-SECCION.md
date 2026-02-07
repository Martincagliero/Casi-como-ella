# 🎞️ GUÍA DE ANIMACIONES PREMIUM POR SECCIÓN

## Cómo aplicar cada animación en tu web

---

## 🏠 HERO SECTION

### Animaciones Aplicadas:
- **Titulo**: `animate-slide-down` (ya implementado)
- **Subtítulo**: `animate-slide-down` con delay
- **CTA Button**: `animate-scale-up` con delay

### Código Recomendado:
```html
<section class="hero">
  <h1 class="hero-title animate-slide-down">Arte en telas</h1>
  <p class="hero-subtitle animate-slide-down" style="animation-delay: 0.2s;">
    Cada pieza cuenta una historia
  </p>
  <a href="galeria.html" class="btn btn-primary animate-scale-up" style="animation-delay: 0.4s;">
    Ver galería
  </a>
</section>
```

### Efecto Visual:
Título baja elegantemente, luego subtítulo, luego botón crece. Perfecto para reels.

---

## 👤 ABOUT SECTION (Marisol)

### Animaciones Aplicadas:
- **Imagen**: `parallax-image` (efecto 3D al scroll)
- **Título**: `title-premium` (underline dinámico)
- **Texto**: `scroll-animate fade-in`
- **Botón**: `btn-animated` (underline animado)

### Código Recomendado:
```html
<section class="about-preview">
  <div class="container">
    <div class="about-grid">
      <!-- Imagen con parallax -->
      <div class="about-image parallax-image">
        <img src="images/marisol.jpeg" alt="Marisol" />
      </div>
      
      <!-- Texto con animaciones -->
      <div class="about-text scroll-animate slide-right">
        <h2 class="title-premium">Hola, soy Marisol</h2>
        
        <p class="scroll-animate fade-in">
          Bienvenidos a mi pequeño rincón creativo...
        </p>
        
        <a href="sobre-mi.html" class="btn btn-animated">
          Conocer más
        </a>
      </div>
    </div>
  </div>
</section>
```

### Efecto Visual:
Al hacer scroll, aparece la imagen con efecto parallax (se mueve diferente). El título tiene underline que aparece. Botón tiene linea que corre.

---

## ⭐ FEATURES SECTION

### Animaciones Aplicadas:
- **Cards**: `stagger` (delays progresivos 0.1s)
- **Cada Card**: `hover-premium` (scale + shadow elegante)
- **Iconos**: `icon-pulse` (pulso sutil continuo)

### Código Recomendado:
```html
<section class="features">
  <div class="container">
    <div class="features-grid">
      <!-- JavaScript detecta automáticamente y aplica stagger -->
      
      <div class="feature-card hover-premium">
        <i class="fas fa-heart icon-pulse"></i>
        <h3>Hecho a mano</h3>
        <p>Cada pieza es única y creada con dedicación</p>
      </div>
      
      <div class="feature-card hover-premium">
        <i class="fas fa-palette icon-pulse"></i>
        <h3>Diseños personalizados</h3>
        <p>Creamos juntos la pieza que sueñas</p>
      </div>
      
      <div class="feature-card hover-premium">
        <i class="fas fa-comments icon-pulse"></i>
        <h3>Atención personalizada</h3>
        <p>Contacto directo por WhatsApp</p>
      </div>
    </div>
  </div>
</section>
```

### Efecto Visual:
Las 3 cards aparecen una después de otra (cada 0.1s). Al pasar mouse sube suavemente con sombra bonita. Los iconos tienen pulso sutil.

---

## 🎴 PRODUCTS/GALLERY SECTION

### Animaciones Aplicadas:
- **Cards**: `card-premium` (hover profundo)
- **Imágenes**: `parallax-image` + `image-zoom`
- **Stagger**: Automático en productos

### Código Recomendado:
```html
<section class="products">
  <div class="container">
    <h2 class="title-premium">Nuestras Creaciones</h2>
    
    <div class="products-grid">
      <div class="product-card card-premium">
        <div class="product-image parallax-image image-zoom">
          <img src="image.jpg" alt="Producto" />
        </div>
        
        <div class="product-info">
          <h3>Nombre Producto</h3>
          <p>Description</p>
          <button class="btn btn-gradient-shift">
            Ver Detalles
          </button>
        </div>
      </div>
      
      <!-- Repetir para más productos -->
    </div>
  </div>
</section>
```

### Efecto Visual:
Cards suben elegantemente al pasar mouse. Imágenes tienen efecto parallax (se mueven al scroll) y zoom suave (crecen un poco al hover).

---

## 📱 INSTAGRAM SECTION

### Animaciones Aplicadas:
- **Container**: `section-fade-enter` (fade + translate)
- **Posts**: `hover-scale` + `scale-up`
- **Botón CTA**: `btn-ripple`

### Código Recomendado:
```html
<section class="instagram-section">
  <div class="container">
    <h2 class="title-premium">Sígueme en Instagram</h2>
    
    <div class="instagram-grid">
      <a href="https://instagram.com/casi.como.ella" 
         class="instagram-post hover-scale scroll-animate scale-up">
        <img src="image.jpg" alt="Instagram" />
      </a>
    </div>
    
    <a href="https://instagram.com/casi.como.ella" 
       class="btn btn-ripple btn-gradient-shift">
      <i class="fab fa-instagram"></i> Seguir
    </a>
  </div>
</section>
```

### Efecto Visual:
Posts crecen suavemente al pasar mouse. Botón tiene efecto ripple al hacer clic.

---

## 🎯 BOTONES - OPCIONES DE ANIMACIÓN

### Opción 1: Underline Dinámico
```html
<a href="#" class="btn btn-primary btn-animated">
  Mi Botón
</a>
```
**Efecto**: Línea corre de izquierda a derecha al hover

### Opción 2: Fondo con Gradiente Animado
```html
<button class="btn btn-gradient-shift">
  Mi Botón
</button>
```
**Efecto**: Fondo cambia lentamente de colores

### Opción 3: Ripple Effect
```html
<button class="btn btn-ripple btn-primary">
  Mi Botón
</button>
```
**Efecto**: Onda que expande en click

### Opción 4: Premium Hover
```html
<button class="btn btn-primary hover-premium">
  Mi Botón
</button>
```
**Efecto**: Sube + sombra mejorada

---

## 🖼️ IMÁGENES - OPCIONES DE ANIMACIÓN

### Opción 1: Parallax 3D
```html
<div class="parallax-image">
  <img src="image.jpg" />
</div>
```
**Efecto**: Imagen se mueve diferente al hacer scroll

### Opción 2: Zoom on Hover
```html
<div class="image-zoom">
  <img src="image.jpg" />
</div>
```
**Efecto**: Imagen crece suavemente al hover

### Opción 3: Ambos (Combo)
```html
<div class="parallax-image image-zoom">
  <img src="image.jpg" />
</div>
```
**Efecto**: Parallax + Zoom juntos. ¡Muy premium!

---

## 📊 SECCIONES CON NÚMEROS (ESTADÍSTICAS)

### Si quieres animar números (contadores):
```html
<div class="counter" data-target="150" data-duration="2000">
  0
</div>
```

**Atributos**:
- `data-target`: Número final (200, 500, etc)
- `data-duration`: Tiempo en ms (2000 = 2 segundos)

**Efecto**: Número cuenta desde 0 hasta el target lentamente

---

## 🎭 DECORACIONES ANIMADAS

### Divider Decorativo
```html
<div class="section-divider">
  <div class="section-divider-icon">
    ✨  <!-- Cualquier emoji o icono -->
  </div>
</div>
```

**Efecto**: Líneas se expanden desde los lados, icono aparece con scale

### Línea Decorativa
```html
<div class="decorative-line"></div>
```

**Efecto**: Línea con efecto shimmer

### Elemento Flotante
```html
<div class="float-animation">
  📍 Contenido   
</div>
```

**Efecto**: Movimiento suave flotante continuo

---

## 🎞️ COMBINACIONES RECOMENDADAS PARA REELS

### Hero Impactante
```html
<h1 class="hero-title animate-slide-down">TÍTULO</h1>
<h2 class="title-premium">Subtítulo Premium</h2>
<button class="btn btn-gradient-shift">CTA</button>
```

### Card Premium
```html
<div class="card-premium hover-premium">
  <div class="image-zoom parallax-image">
    <img src="..." />
  </div>
  <h3 class="title-premium">Título</h3>
  <button class="btn btn-animated">Ver</button>
</div>
```

### Transición de Sección
```html
<section class="section-fade-enter">
  <!-- Contenido auto-animado -->
</section>
```

---

## ⚡ PERFORMANCE TIPS

✅ **Usa parallax con moderación** - 1-2 imágenes por página
✅ **Los hover effects son automáticos** - No requieren JavaScript extra
✅ **Los números contadores solo se animan si tienen [data-target]**
✅ **El stagger es automático en cards** - Detecta clases automáticamente

❌ **No hagas 10+ elementos con parallax**
❌ **No combines demasiados efectos en un elemento**
❌ **No uses en muy pequeños (botones mini)**

---

## 🎬 PERFECTO PARA REELS

Estas animaciones son ideales para grabar en video:

1. **Parallax** - Se ve claramente al scroll
2. **Scale + Shadow** - Muy visual al hover
3. **Underline dinámico** - Efecto profesional
4. **Fade + Translate** - Suave y elegante
5. **Ripple effect** - Satisfactorio al click

---

## 📝 RESUMEN DE CLASES POR SECCIÓN

| Sección | Clase | Efecto |
|---------|-------|--------|
| Hero | `.animate-slide-down` | Baja suavemente |
| About | `.parallax-image` | Efecto 3D |
| About | `.title-premium` | Underline dinámico |
| Features | `.hover-premium` | Scale + shadow |
| Features | `.icon-pulse` | Pulso continuo |
| Products | `.card-premium` | Hover profundo |
| Products | `.image-zoom` | Zoom suave |
| Gallery | `.image-zoom` | Zoom al hover |
| Buttons | `.btn-animated` | Underline corre |
| Buttons | `.btn-gradient-shift` | Fondo anima |
| Buttons | `.btn-ripple` | Ripple on click |
| Images | `.parallax-image` | Movimiento 3D |
| Dividers | `.section-divider` | Líneas expandibles |
| Floating | `.float-animation` | Movimiento suave |

---

**Versión**: Premium Advanced  
**Fecha**: Febrero 2026  
**Grabarla en reels**: ✅ Perfecta
