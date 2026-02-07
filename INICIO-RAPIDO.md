# 🚀 Inicio Rápido - Casi como ella

## ✅ ¡Tu ecommerce está listo!

Este proyecto incluye todo lo necesario para tener tu tienda online funcionando.

---

## 📋 Configuración en 5 Pasos

### 1. 📱 Configurar WhatsApp (IMPORTANTE)

**Archivo:** `js/main.js` (línea ~15)

```javascript
const CONFIG = {
    whatsappNumber: '5491XXXXXXXXX', // ⚠️ CAMBIAR AQUI
    // ...
};
```

**Formato del número:**
- Argentina: `54911XXXXXXXX`
- Ejemplo: `5491134567890`
- **SIN** el 0 del código de área
- **SIN** el 15

**También actualiza en:**
- Botón flotante (busca `5491XXXXXXXXX` en todos los archivos HTML)
- Footer de todas las páginas

---

### 2. 📧 Configurar Email

**Archivos:** Todos los HTML + `js/main.js`

Reemplaza:
- `contacto@casicomoella.com` → tu email real

---

### 3. 📸 Agregar tus Productos

**Archivo:** `data/productos.json`

Ejemplo de producto:
```json
{
  "id": 11,
  "name": "Tu Producto",
  "category": "Cuadros",
  "price": 15000,
  "shortDescription": "Descripción corta",
  "description": "Descripción detallada...",
  "images": ["images/products/tu-producto.jpg"],
  "featured": true,
  "new": true
}
```

**Categorías disponibles:**
- `Cuadros`
- `Almohadones`
- `Bolsos`
- `Personalizados`

---

### 4. 🖼️ Subir Imágenes

Coloca tus fotos en:

```
images/
├── products/          ← Fotos de productos
├── instagram/         ← Posts de Instagram
├── behind/            ← Behind the scenes
├── hero-bg.jpg        ← Banner principal
└── about-preview.jpg  ← Foto "Sobre mí"
```

**Recomendaciones:**
- Formato: JPG o PNG
- Tamaño: 1000x1000px (productos)
- Peso: menos de 500KB por imagen

---

### 5. 🌐 Redes Sociales

Actualiza en **todos los archivos HTML**:

- Instagram: `https://instagram.com/casi.como.ella`
- Facebook: `https://facebook.com/casi.como.ella`

---

## 🖥️ Cómo Ver tu Sitio

### Opción 1: Doble Click
Abre `index.html` directamente en tu navegador

### Opción 2: Servidor Local (Recomendado)

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

**Con Node.js:**
```bash
npx serve .
# o
npm start
```

**Con VS Code:**
- Instala extensión "Live Server"
- Click derecho en index.html → "Open with Live Server"

---

## 📝 Textos que DEBES Personalizar

### En `index.html`:
- [ ] Frase del hero: "Arte en telas hecho a mano"
- [ ] Texto de "Sobre mí"

### En `sobre-mi.html`:
- [ ] Tu historia personal
- [ ] Tu proceso creativo
- [ ] Tus valores

### En `faq.html`:
- [ ] Información de envíos (zona, costos)
- [ ] Tiempos de entrega
- [ ] Políticas de devolución

### En FOOTER (todos los archivos):
- [ ] Teléfono: `+54 9 11 XXXX-XXXX`
- [ ] Dirección: "Zona Sur, Buenos Aires"

---

## 🎨 Personalizar Colores

**Archivo:** `css/main.css` (líneas 10-20)

```css
:root {
    --rosa-pastel: #fce4ec;
    --lila: #e1bee7;
    --celeste: #bbdefb;
    --acento: #d81b60;  ← Color de botones
}
```

---

## ✅ Checklist Pre-Lanzamiento

Antes de publicar tu sitio, verifica:

- [ ] ✅ Número de WhatsApp actualizado
- [ ] ✅ Email de contacto actualizado
- [ ] ✅ Links de Instagram/Facebook funcionando
- [ ] ✅ Al menos 5 productos con fotos reales
- [ ] ✅ Foto de perfil en "Sobre mí"
- [ ] ✅ Texto personalizado en "Sobre mí"
- [ ] ✅ FAQ con información real
- [ ] ✅ Probado en celular
- [ ] ✅ Carrito funciona correctamente
- [ ] ✅ WhatsApp se abre con el mensaje correcto
- [ ] ✅ Todas las imágenes cargan

---

## 🌍 Publicar tu Sitio

### GitHub Pages (Gratis y Fácil)

1. Crea cuenta en GitHub.com
2. Crea un nuevo repositorio
3. Sube todos los archivos
4. Ve a Settings → Pages
5. Selecciona rama "main"
6. ¡Listo! Tu sitio estará en: `tu-usuario.github.io/casi-como-ella`

### Netlify (Super Fácil)

1. Ve a netlify.com
2. Arrastra la carpeta del proyecto
3. ¡Listo! Te dan una URL automática
4. Opcional: conecta tu dominio propio

### Vercel (Recomendado)

1. Ve a vercel.com
2. Importa desde GitHub
3. Deploy automático
4. URL personalizada gratis

---

## 🆘 Problemas Comunes

### "Las imágenes no cargan"
- ✅ Verifica que las rutas en `productos.json` sean correctas
- ✅ Asegúrate de que los archivos existan

### "WhatsApp no funciona"
- ✅ Verifica el formato del número (sin espacios, ni guiones)
- ✅ Debe empezar con código de país (54 para Argentina)

### "Los productos no aparecen"
- ✅ Verifica que `productos.json` sea un JSON válido
- ✅ Usa jsonlint.com para validar
- ✅ Abre la consola del navegador (F12) para ver errores

### "El carrito no guarda productos"
- ✅ Verifica que las cookies/localStorage estén habilitados
- ✅ No uses "modo incógnito"

---

## 💡 Próximos Pasos

Una vez que tu sitio esté funcionando:

1. **Agregar más productos** en `datos/productos.json`
2. **Subir fotos de calidad** de tus productos
3. **Completar sección Instagram** con tus posts
4. **Configurar Mercado Pago** (ver README.md)
5. **Agregar Google Analytics** para estadísticas
6. **Promocionar en redes sociales**

---

## 📚 Documentación Completa

Para configuración avanzada, consulta:
- `README.md` - Documentación completa
- `CONFIGURACION.txt` - Guía de configuración detallada

---

## 🎉 ¡Todo Listo!

Tu ecommerce está **100% funcional** y listo para recibir pedidos.

Solo necesitas:
1. Actualizar el número de WhatsApp ✅
2. Agregar tus productos ✅
3. Subir tus fotos ✅
4. ¡Publicar! 🚀

**¿Preguntas?** Revisa los comentarios en el código, todo está documentado.

---

**¡Mucho éxito con tu emprendimiento! 💜**

*Casi como ella - Arte en telas hecho a mano*
