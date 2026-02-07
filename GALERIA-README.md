# 📸 Sistema de Galería de Fotos - Casi como ella

> Sistema profesional de galería de productos organizado por categorías con diseño boutique/artesanal

![Estado](https://img.shields.io/badge/Estado-Completo-brightgreen)
![Responsive](https://img.shields.io/badge/Responsive-Sí-blue)
![Lazy Loading](https://img.shields.io/badge/Lazy%20Loading-Activado-orange)

---

## 🎯 ¿Qué es esto?

Un sistema completo para mostrar fotos de productos organizadas automáticamente en categorías:
- **Cartucheras**
- **Fundas**
- **Estuches**
- **Bolsos**

Con diseño responsive, lazy loading y estética artesanal perfecta para tu marca.

---

## ✨ Características

| Característica | Descripción |
|----------------|-------------|
| 📱 **Responsive** | Se adapta a móvil, tablet y desktop |
| 🚀 **Lazy Loading** | Carga imágenes solo cuando son visibles |
| 🎨 **Diseño Boutique** | Paleta artesanal beige/marrón con tipografías elegantes |
| 🔍 **Modal** | Ver imágenes ampliadas con un clic |
| 🎯 **Filtros** | Navega entre categorías fácilmente |
| ⚡ **Sin dependencias** | Vanilla JavaScript puro, sin frameworks |
| 📦 **Extensible** | Agrega categorías sin modificar código |

---

## 📂 Estructura de Archivos

```
casi como ella/
│
├── 📄 galeria.html              ← Página principal de galería
├── 📄 ejemplo-galeria.html      ← Ejemplos de integración
│
├── 🎨 css/
│   └── galeria.css              ← Estilos responsive (639 líneas)
│
├── ⚙️ js/
│   └── galeria.js               ← Handler principal (444 líneas)
│
├── 📋 data/
│   └── galeria.json             ← Configuración de imágenes
│
├── 🖼️ images/gallery/
│   ├── cartucheras/             ← Fotos de cartucheras
│   ├── fundas/                  ← Fotos de fundas
│   ├── estuches/                ← Fotos de estuches
│   └── bolsos/                  ← Fotos de bolsos
│
├── 📚 Documentación/
│   ├── GUIA-GALERIA.md          ← Manual completo
│   ├── ESTRUCTURA-GALERIA.md    ← Resumen rápido
│   └── SISTEMA-GALERIA.md       ← Overview técnico
│
└── 🔧 Utilidades/
    ├── migrar-fotos.js          ← Script de migración
    └── validar-galeria.js       ← Validar instalación
```

---

## 🚀 Inicio Rápido

### Paso 1: Organiza tus fotos

Mueve tus fotos a las carpetas correspondientes:

```bash
images/gallery/cartucheras/  ← Fotos de cartucheras aquí
images/gallery/fundas/       ← Fotos de fundas aquí
images/gallery/estuches/     ← Fotos de estuches aquí
images/gallery/bolsos/       ← Fotos de bolsos aquí
```

### Paso 2: Actualiza la configuración

Edita `data/galeria.json`:

```json
{
  "categorias": {
    "bolsos": {
      "nombre": "Bolsos",
      "descripcion": "Bolsos artesanales que cuentan una historia",
      "imagenes": [
        {
          "src": "images/gallery/bolsos/bolso-flores.jpg",
          "alt": "Bolso con flores pintadas a mano",
          "titulo": "Bolso Jardín"
        }
      ]
    }
  }
}
```

### Paso 3: Abre la galería

Abre `galeria.html` en tu navegador. ¡Listo! 🎉

---

## 💻 Uso en el Código

### Renderizar una categoría

```html
<div id="misCartucheras"></div>

<script src="js/galeria.js"></script>
<script>
    galeria.init().then(() => {
        galeria.renderizarCategoria('cartucheras', 'misCartucheras');
    });
</script>
```

### Renderizar todas las categorías

```javascript
galeria.init().then(() => {
    galeria.renderizarTodasCategorias('contenedor');
});
```

### Con opciones personalizadas

```javascript
galeria.renderizarCategoria('bolsos', 'contenedor', {
    mostrarTitulo: true,
    mostrarDescripcion: false,
    animaciones: true
});
```

---

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `css/galeria.css`:

```css
:root {
    --galeria-spacing: 2rem;
    --galeria-gap: 1.5rem;
    --galeria-border-radius: 12px;
}
```

### Cambiar grid (columnas)

Edita `data/galeria.json`:

```json
"gridColumns": {
    "mobile": 1,    ← Columnas en móvil
    "tablet": 2,    ← Columnas en tablet
    "desktop": 3    ← Columnas en desktop
}
```

### Desactivar lazy loading

En `data/galeria.json`:

```json
"lazyLoading": false
```

---

## 📱 Responsive Design

| Dispositivo | Columnas | Breakpoint |
|-------------|----------|------------|
| 📱 Móvil | 1 columna | ≤ 480px |
| 📱 Tablet | 2 columnas | 481-768px |
| 💻 Desktop | 3 columnas | > 769px |

---

## 🔧 API del Handler

```javascript
// Inicialización
await galeria.init()

// Obtener datos
galeria.obtenerCategorias()           // ['cartucheras', 'fundas', ...]
galeria.obtenerCategoria('bolsos')    // { nombre, descripcion, imagenes }

// Renderizado
galeria.renderizarCategoria(nombre, contenedorId, opciones)
galeria.renderizarTodasCategorias(contenedorId, opciones)

// Gestión dinámica
galeria.agregarCategoria(nombre, datos)
galeria.agregarImagenesACategoria(nombre, imagenes)

// Búsqueda
galeria.buscarImagenes('flores')      // Busca en títulos y descripciones
```

---

## 📚 Documentación

| Archivo | Descripción |
|---------|-------------|
| [GUIA-GALERIA.md](GUIA-GALERIA.md) | 📖 Manual completo de uso |
| [ESTRUCTURA-GALERIA.md](ESTRUCTURA-GALERIA.md) | 📋 Resumen rápido |
| [SISTEMA-GALERIA.md](SISTEMA-GALERIA.md) | 🔧 Overview técnico |

---

## 🛠️ Utilidades Incluidas

### migrar-fotos.js

Script para ayudarte a organizar tus fotos actuales:

```bash
node migrar-fotos.js
```

### validar-galeria.js

Valida que todo esté correctamente instalado:

```bash
node validar-galeria.js
```

---

## ✅ Checklist de Instalación

- [ ] Todas las carpetas en `images/gallery/` creadas
- [ ] Archivo `data/galeria.json` configurado
- [ ] Fotos organizadas en carpetas por categoría
- [ ] Enlace a galería agregado en el menú
- [ ] Probado en navegador (sin errores en consola)
- [ ] Probado en móvil y desktop
- [ ] Lazy loading funcionando
- [ ] Modal de vista ampliada funciona

---

## 🆘 Solución de Problemas

| Problema | Solución |
|----------|----------|
| Imágenes no aparecen | Verifica rutas en `galeria.json` |
| Lazy loading no funciona | Llama `galeria.init()` antes de renderizar |
| Modal no abre | Revisa consola (F12) por errores |
| Diseño roto en móvil | Verifica viewport meta tag |
| Filtros no cambian | Nombres en botones deben coincidir con JSON |

---

## 📊 Estadísticas del Proyecto

```
📝 Líneas de código:        ~1,300 líneas
📄 Archivos creados:        10 archivos
🎨 Variables CSS:           10+ custom properties
⚙️ Métodos JavaScript:      15+ funciones
📱 Breakpoints:             3 (móvil, tablet, desktop)
📚 Documentación:           ~2,000 palabras
```

---

## 🎯 Próximos Pasos

1. **Organiza tus fotos** (las 35 de `fotos casi como ella/`)
2. **Actualiza** `data/galeria.json` con rutas reales
3. **Optimiza** las imágenes (< 500KB cada una)
4. **Agrega** el enlace de galería en todos los menús
5. **Prueba** en diferentes dispositivos
6. **Disfruta** tu galería profesional ✨

---

## 🎨 Paleta de Colores

```css
#6b4423  →  🟤 Marrón artesanal (títulos)
#d4a574  →  🟨 Dorado suave (acentos)
#fdfbf7  →  ⬜ Beige claro (fondos)
#8b6f47  →  🟫 Marrón medio (textos)
#e8d5c4  →  🟧 Beige oscuro (bordes)
```

---

## 🌟 Características Avanzadas

- ✅ Intersection Observer para lazy loading eficiente
- ✅ Placeholder animado con shimmer effect
- ✅ Modal con navegación por teclado (ESC para cerrar)
- ✅ Animaciones CSS3 suaves
- ✅ Respeta `prefers-reduced-motion`
- ✅ Fallback a placeholder en caso de error
- ✅ Sistema modular y reutilizable

---

## 📞 Ayuda

¿Necesitas ayuda? Consulta:

1. 📖 [GUIA-GALERIA.md](GUIA-GALERIA.md) - Manual completo
2. 🔍 Consola del navegador (F12) - Ver errores
3. 📋 [ESTRUCTURA-GALERIA.md](ESTRUCTURA-GALERIA.md) - Resumen

---

## ✨ Créditos

**Sistema de Galería Profesional**
Desarrollado para **Casi como ella**
Diseño boutique/artesanal optimizado para productos hechos a mano

---

## 📄 Licencia

MIT License - Libre para usar y modificar

---

<div align="center">

**¡Tu galería profesional está lista! 🎉**

[Ver Galería](galeria.html) • [Ver Ejemplos](ejemplo-galeria.html) • [Leer Documentación](GUIA-GALERIA.md)

</div>
