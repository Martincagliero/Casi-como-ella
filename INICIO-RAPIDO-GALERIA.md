# ⚡ INICIO RÁPIDO - Galería de Fotos

> 5 minutos para tener tu galería funcionando

---

## 🎯 ¿Qué vas a lograr?

Configurar y ver tu galería de productos funcionando en tu navegador.

---

## 📋 Checklist Pre-vuelo

Verifica que tengas estos archivos (ya están creados):

- ✅ `galeria.html` - Página de galería
- ✅ `js/galeria.js` - Código JavaScript
- ✅ `css/galeria.css` - Estilos
- ✅ `data/galeria.json` - Configuración
- ✅ Carpetas en `images/gallery/` (cartucheras, fundas, estuches, bolsos)

---

## 🚀 Paso 1: Prueba con datos de ejemplo (1 min)

### 1.1 Abre galeria.html en tu navegador

**Opción A - Doble clic:**
```
Haz doble clic en: galeria.html
```

**Opción B - Desde VS Code:**
```
Click derecho en galeria.html → "Open with Live Server"
```

**Opción C - Terminal:**
```powershell
cd "c:\Users\Marti\OneDrive\Documentos\casi como ella"
start galeria.html
```

### 1.2 ¿Qué deberías ver?

✅ Una página con filtros de categorías arriba
✅ Secciones de Cartucheras, Fundas, Estuches, Bolsos
✅ Placeholders (imágenes de ejemplo)

⚠️ Si ves errores, abre la consola (F12) y verifica qué dice

---

## 📸 Paso 2: Organiza tus fotos reales (5 min)

Tienes **35 fotos** en `fotos casi como ella/`

### 2.1 Clasifica manualmente

Abre la carpeta y mira cada foto:
- ¿Es cartuchera? → Muévela a `images/gallery/cartucheras/`
- ¿Es funda? → Muévela a `images/gallery/fundas/`
- ¿Es estuche? → Muévela a `images/gallery/estuches/`
- ¿Es bolso? → Muévela a `images/gallery/bolsos/`

### 2.2 Renombra las fotos

Cambia nombres de esto:
```
❌ WhatsApp Image 2026-02-06 at 20.15.28.jpeg
```

A esto:
```
✅ cartu-flores-rosa.jpg
✅ bolso-tote-primavera.jpg
✅ funda-laptop-vintage.jpg
```

**Tip:** Usa nombres descriptivos, sin espacios, todo en minúsculas.

---

## ⚙️ Paso 3: Actualiza galeria.json (3 min)

### 3.1 Abre data/galeria.json

### 3.2 Actualiza las rutas de las imágenes

**Antes (ejemplo):**
```json
{
  "src": "images/gallery/cartucheras/cartu-1.jpg",
  "alt": "Cartuchera artesanal floral",
  "titulo": "Cartuchera Flores"
}
```

**Después (con tus fotos reales):**
```json
{
  "src": "images/gallery/cartucheras/cartu-flores-rosa.jpg",
  "alt": "Cartuchera con flores rosas pintadas a mano",
  "titulo": "Cartuchera Jardín Rosa"
}
```

### 3.3 Agrega o quita imágenes según corresponda

Si tienes 10 fotos de bolsos, agrega 10 objetos en el array `imagenes` de bolsos.

---

## 🔄 Paso 4: Refresca y verifica (1 min)

### 4.1 Guarda galeria.json

### 4.2 Refresca la página (F5)

### 4.3 Verifica que:

- ✅ Las imágenes se cargan (pueden tardar unos segundos por lazy loading)
- ✅ Al hacer scroll, más imágenes aparecen
- ✅ Los filtros cambian entre categorías
- ✅ El botón 🔍 abre el modal con la imagen ampliada

---

## 🔗 Paso 5: Agrega enlace en menú (2 min)

Actualiza el menú de navegación en estos archivos:

### 5.1 index.html

Busca:
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html">Inicio</a></li>
    <li><a href="productos.html">Productos</a></li>
```

Agrega:
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html">Inicio</a></li>
    <li><a href="productos.html">Productos</a></li>
    <li><a href="galeria.html">Galería</a></li>  ← NUEVO
```

### 5.2 Repite en:
- ✅ productos.html
- ✅ sobre-mi.html
- ✅ faq.html
- ✅ carrito.html
- ✅ checkout.html

---

## ✅ Paso 6: Prueba final (2 min)

### 6.1 Desktop
- Abre `galeria.html`
- Verifica que veas 3 columnas
- Prueba los filtros
- Abre el modal

### 6.2 Móvil
- Reduce el tamaño de la ventana del navegador
- O abre desde tu teléfono
- Verifica que veas 1 columna
- Los botones deben ser táctiles (grandes)

---

## 🎉 ¡Listo!

Tu galería está funcionando. Ahora puedes:

### Personalizaciones opcionales:

**Cambiar colores:**
- Edita `css/galeria.css`
- Busca `:root { ... }`
- Cambia los colores

**Cambiar columnas:**
- Edita `data/galeria.json`
- En `gridColumns` cambia:
  ```json
  "desktop": 4  ← De 3 a 4 columnas
  ```

**Agregar categoría nueva:**
1. Crea carpeta: `images/gallery/mochilas/`
2. Agrega en `galeria.json`:
   ```json
   "mochilas": {
     "nombre": "Mochilas",
     "descripcion": "...",
     "imagenes": [...]
   }
   ```
3. Agrega botón en `galeria.html`

---

## 🆘 Problemas comunes

### "No se ven las imágenes"
→ Verifica que las rutas en `galeria.json` sean correctas
→ Verifica que los archivos existan en las carpetas

### "Errores en consola (F12)"
→ Verifica que `galeria.js` esté cargado
→ Verifica que `galeria.json` sea JSON válido (sin comas extras)

### "Lazy loading no funciona"
→ Normal, tarda unos segundos
→ Scroll hacia abajo para activarlo

### "Diseño roto en móvil"
→ Verifica que tengas:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

---

## 📚 ¿Necesitas más ayuda?

Lee la documentación completa:

- 📖 **GUIA-GALERIA.md** - Manual detallado paso a paso
- 📋 **ESTRUCTURA-GALERIA.md** - Resumen rápido
- 🔧 **SISTEMA-GALERIA.md** - Detalles técnicos
- 🏗️ **ARQUITECTURA-GALERIA.txt** - Diagrama visual del sistema

---

## ⏱️ Tiempo total estimado: 15 minutos

```
✅ Paso 1: Probar con datos ejemplo     1 min
✅ Paso 2: Organizar fotos reales       5 min
✅ Paso 3: Actualizar galeria.json      3 min
✅ Paso 4: Refrescar y verificar        1 min
✅ Paso 5: Agregar enlaces menú         2 min
✅ Paso 6: Prueba final                 2 min
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TOTAL                                14 min
```

---

## 🎯 Siguiente paso recomendado

Una vez que tu galería funcione, considera:

1. **Optimizar imágenes** (comprimirlas a <500KB)
2. **Agregar más fotos** constantemente
3. **Integrar en home** mostrando categorías destacadas
4. **Compartir en redes** con enlaces directos

---

<div align="center">

## ✨ ¡Disfruta tu galería profesional!

**Desarrollado para Casi como ella**

[Ver Galería](galeria.html) • [Ver Ejemplos](ejemplo-galeria.html)

</div>
