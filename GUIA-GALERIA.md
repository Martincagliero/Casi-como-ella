# 📸 Sistema de Galería - Casi como ella

Sistema completo para gestionar y mostrar fotos de productos organizadas por categorías.

## 🎯 Características

✅ **Organización automática** por categorías (cartucheras, fundas, estuches, bolsos)
✅ **Grid responsive** que se adapta a todos los dispositivos
✅ **Lazy loading** para optimizar la carga de imágenes
✅ **Diseño boutique/artesanal** acorde a la marca
✅ **Sistema escalable** - fácil agregar nuevas categorías
✅ **Modal de vista ampliada** para ver imágenes en detalle
✅ **Filtros interactivos** para navegar por categorías

---

## 📁 Estructura de Carpetas

```
casi como ella/
├── images/
│   └── gallery/
│       ├── cartucheras/      # Imágenes de cartucheras
│       ├── fundas/            # Imágenes de fundas
│       ├── estuches/          # Imágenes de estuches
│       └── bolsos/            # Imágenes de bolsos
├── data/
│   └── galeria.json          # Configuración de la galería
├── js/
│   └── galeria.js            # Lógica de la galería
├── css/
│   └── galeria.css           # Estilos responsive
└── galeria.html              # Página de galería
```

---

## 🚀 Cómo Agregar Nuevas Imágenes

### Opción 1: Agregar a una categoría existente

1. **Coloca la imagen** en la carpeta correspondiente:
   ```
   images/gallery/cartucheras/mi-nueva-cartu.jpg
   ```

2. **Edita** `data/galeria.json` y agrega el objeto de imagen:
   ```json
   {
     "src": "images/gallery/cartucheras/mi-nueva-cartu.jpg",
     "alt": "Descripción de la cartuchera",
     "titulo": "Cartuchera Unicornio"
   }
   ```

3. **¡Listo!** La imagen aparecerá automáticamente en la galería.

### Opción 2: Crear una nueva categoría

1. **Crea la carpeta** en `images/gallery/`:
   ```
   images/gallery/mochilas/
   ```

2. **Agrega las imágenes** en esa carpeta

3. **Edita** `data/galeria.json` y agrega la nueva categoría:
   ```json
   "mochilas": {
     "nombre": "Mochilas",
     "descripcion": "Mochilas artesanales cómodas y estilosas",
     "imagenes": [
       {
         "src": "images/gallery/mochilas/mochila-1.jpg",
         "alt": "Mochila artesanal",
         "titulo": "Mochila Aventura"
       }
     ]
   }
   ```

4. **Actualiza el HTML** `galeria.html` agregando el botón de filtro:
   ```html
   <button class="filtro-btn" data-categoria="mochilas">
       <i class="fas fa-backpack"></i>
       Mochilas
   </button>
   ```

---

## 💻 Uso del Módulo JavaScript

### Renderizar todas las categorías

```javascript
// En cualquier página HTML
galeria.renderizarTodasCategorias('contenedorId');
```

### Renderizar una categoría específica

```javascript
// Solo mostrar bolsos
galeria.renderizarCategoria('bolsos', 'contenedorId');
```

### Renderizar con opciones personalizadas

```javascript
galeria.renderizarCategoria('cartucheras', 'contenedorId', {
    mostrarTitulo: true,
    mostrarDescripcion: false,
    animaciones: true
});
```

### Agregar imágenes dinámicamente

```javascript
// Agregar una imagen a una categoría existente
galeria.agregarImagenesACategoria('bolsos', {
    src: 'images/gallery/bolsos/nuevo-bolso.jpg',
    alt: 'Nuevo bolso artesanal',
    titulo: 'Bolso Verano'
});
```

### Buscar imágenes

```javascript
// Buscar por título, descripción o categoría
const resultados = galeria.buscarImagenes('flores');
console.log(resultados);
```

---

## 🎨 Personalización de Estilos

### Configuración vía CSS Variables

Edita las variables en `css/galeria.css`:

```css
:root {
    --galeria-spacing: 2rem;           /* Espaciado general */
    --galeria-gap: 1.5rem;             /* Espacio entre imágenes */
    --galeria-border-radius: 12px;     /* Bordes redondeados */
    --galeria-shadow: 0 4px 20px ...;  /* Sombra de tarjetas */
}
```

### Cambiar colores del tema

```css
/* Cambiar color principal */
.filtro-btn.activo {
    background: linear-gradient(135deg, #TU_COLOR 0%, #TU_COLOR_2 100%);
}

/* Cambiar color de títulos */
.galeria-titulo {
    color: #TU_COLOR;
}
```

---

## 📱 Responsive Breakpoints

El sistema se adapta automáticamente a diferentes pantallas:

- **Desktop** (>769px): 3 columnas
- **Tablet** (481px - 768px): 2 columnas
- **Móvil** (≤480px): 1 columna

---

## ⚙️ Configuración Avanzada

### Editar `data/galeria.json`

```json
{
  "configuracion": {
    "lazyLoading": true,        // Activar/desactivar lazy loading
    "gridColumns": {
      "mobile": 1,              // Columnas en móvil
      "tablet": 2,              // Columnas en tablet
      "desktop": 3              // Columnas en desktop
    },
    "animaciones": true         // Activar/desactivar animaciones
  }
}
```

### Desactivar Lazy Loading

En `data/galeria.json`:
```json
"configuracion": {
  "lazyLoading": false
}
```

---

## 🔧 Integración con Sistema Existente

### Agregar galería a una página existente

```html
<!-- En el <head> -->
<link rel="stylesheet" href="css/galeria.css">

<!-- Donde quieras la galería -->
<div id="miGaleria"></div>

<!-- Antes de cerrar </body> -->
<script src="js/galeria.js"></script>
<script>
    galeria.init().then(() => {
        galeria.renderizarCategoria('bolsos', 'miGaleria');
    });
</script>
```

### Actualizar el menú de navegación

Agrega el enlace en todos los archivos HTML:

```html
<li><a href="galeria.html">Galería</a></li>
```

---

## 🎯 Ejemplo de Renderizado

### HTML Básico

```html
<div id="galeriaCartucheras"></div>

<script>
    galeria.init().then(() => {
        galeria.renderizarCategoria('cartucheras', 'galeriaCartucheras', {
            mostrarTitulo: true,
            mostrarDescripcion: true
        });
    });
</script>
```

### Resultado Visual

```
┌──────────────────────────────────────┐
│         Cartucheras                   │
│  Cartucheras artesanales únicas...   │
├──────────────────────────────────────┤
│  [img]  [img]  [img]                 │
│  [img]  [img]  [img]                 │
└──────────────────────────────────────┘
```

---

## 🐛 Troubleshooting

### Las imágenes no se cargan

1. Verifica que la ruta en `galeria.json` sea correcta
2. Asegúrate que las imágenes existan en la carpeta
3. Verifica la consola del navegador para errores

### El lazy loading no funciona

1. Verifica que `lazyLoading: true` en `data/galeria.json`
2. Asegúrate de llamar `galeria.init()` antes de renderizar

### Las categorías no se filtran

1. Verifica que el `data-categoria` en los botones coincida con las claves en `galeria.json`
2. Revisa la consola para errores de JavaScript

---

## 📊 Performance

- ✅ **Lazy Loading** nativo + Intersection Observer
- ✅ **Imágenes optimizadas** (recomendado: WebP, <500KB)
- ✅ **CSS Grid** nativo para layout eficiente
- ✅ **Animaciones CSS** (no JavaScript)
- ✅ **Carga asíncrona** de configuración

---

## 🎨 Guía de Diseño

### Paleta de Colores Boutique

```css
Principal:   #6b4423 (marrón artesanal)
Secundario:  #d4a574 (dorado suave)
Fondo:       #fdfbf7 (beige claro)
Contraste:   #8b6f47 (marrón medio)
```

### Tipografías

- **Títulos**: Playfair Display (serif elegante)
- **Cuerpo**: Poppins (sans-serif moderna)

---

## 🚀 Próximos Pasos

1. **Organizar tus fotos actuales** de `fotos casi como ella/` en las carpetas por categoría
2. **Renombrar las fotos** con nombres descriptivos (ej: `cartu-flores-rosa.jpg`)
3. **Actualizar** `data/galeria.json` con las rutas correctas
4. **Agregar el enlace** de galería al menú en todas las páginas
5. **Testear** en diferentes dispositivos

---

## 📞 Soporte

¿Necesitas ayuda? Revisa:
1. La consola del navegador (F12)
2. Los archivos de ejemplo incluidos
3. Este documento de ayuda

---

## ✨ Créditos

Sistema de galería desarrollado para **Casi como ella**
Diseño boutique/artesanal optimizado para productos hechos a mano.

---

**¡Disfruta tu nueva galería! 🎨✨**
