# 🎨 Casi como ella - Ecommerce Artesanal

## 📋 Descripción

Ecommerce completo y funcional para "Casi como ella", un emprendimiento artesanal de arte en telas. 
Diseñado con estética femenina, delicada y profesional.

## ✨ Características

### Funcionalidades Implementadas
- ✅ **Home page** con banner, productos destacados e historia de marca
- ✅ **Catálogo de productos** con filtros y ordenamiento
- ✅ **Páginas de producto individual** con galería de imágenes y variantes
- ✅ **Carrito de compras** funcional con localStorage
- ✅ **Checkout completo** con validación de formularios
- ✅ **Integración con WhatsApp** para pedidos
- ✅ **Página "Sobre mí"** con historia y proceso creativo
- ✅ **FAQ** con preguntas frecuentes
- ✅ **Diseño responsive** (mobile first)
- ✅ **Botón flotante de WhatsApp**
- ✅ **Notificaciones visuales**

### Métodos de Pago
- Mercado Pago (preparado para integración)
- Transferencia bancaria

### Opciones de Envío
- Envío a domicilio
- Retiro en persona (Zona Sur, Buenos Aires)

## 📁 Estructura del Proyecto

```
casi como ella/
│
├── index.html              # Página principal
├── productos.html          # Catálogo de productos
├── producto.html           # Detalle de producto
├── carrito.html            # Carrito de compras
├── checkout.html           # Finalización de compra
├── sobre-mi.html           # Historia de la marca
├── faq.html                # Preguntas frecuentes
│
├── css/
│   ├── main.css           # Estilos generales
│   ├── home.css           # Estilos del home
│   ├── productos.css      # Estilos de productos
│   └── carrito.css        # Estilos de carrito/checkout
│
├── js/
│   ├── main.js            # Funcionalidad general
│   ├── productos.js       # Gestión de productos
│   ├── carrito.js         # Gestión del carrito
│   └── checkout.js        # Proceso de checkout
│
├── data/
│   └── productos.json     # Base de datos de productos
│
├── images/                # Imágenes del sitio
│   ├── products/          # Fotos de productos
│   ├── instagram/         # Posts de Instagram
│   ├── behind/            # Behind the scenes
│   └── placeholder.jpg    # Imagen por defecto
│
└── README.md              # Este archivo
```

## 🚀 Instalación y Configuración

### 1. Configuración Básica

**Editar información de contacto en `js/main.js`:**

```javascript
const CONFIG = {
    whatsappNumber: '5491XXXXXXXXX', // ⚠️ CAMBIAR por tu número
    email: 'contacto@casicomoella.com',
    instagram: '@casi.como.ella',
    mercadoPagoPublicKey: 'TU_PUBLIC_KEY_DE_MERCADOPAGO'
};
```

### 2. Configurar WhatsApp

Reemplaza `5491XXXXXXXXX` con tu número de WhatsApp en formato internacional:
- Argentina: `54911XXXXXXXX` (sin el 15)
- Ejemplo: `5491134567890`

Los botones de WhatsApp están en:
- Botón flotante (todas las páginas)
- Footer
- Página de producto
- FAQ

### 3. Agregar Productos

Edita el archivo `data/productos.json`:

```json
{
  "id": 11,
  "name": "Nombre del producto",
  "category": "Cuadros", // Opciones: Cuadros, Almohadones, Bolsos, Personalizados
  "price": 15000,
  "oldPrice": null, // o precio anterior si está en oferta
  "shortDescription": "Descripción corta",
  "description": "Descripción larga y detallada",
  "images": ["ruta/imagen1.jpg", "ruta/imagen2.jpg"],
  "featured": true, // true para destacados, false para normales
  "new": false, // true para productos nuevos
  "sale": false, // true para productos en oferta
  "variants": {
    "sizes": ["30x40cm", "40x50cm"], // opcional
    "colors": [{"name": "Rosa", "hex": "#f8bbd0"}] // opcional
  },
  "reviews": 10,
  "createdAt": "2026-02-06"
}
```

### 4. Agregar Imágenes

Coloca las imágenes de productos en la carpeta `images/products/`:
- Formato recomendado: JPG o PNG
- Tamaño recomendado: 1000x1000px (cuadradas)
- Nombres descriptivos: `cuadro-flores-1.jpg`, etc.

Para otras imágenes:
- **Instagram**: `images/instagram/postX.jpg`
- **Behind the scenes**: `images/behind/tallerX.jpg`
- **Hero/Banner**: `images/hero-bg.jpg`
- **Sobre mí**: `images/marisol-trabajando.jpg`

### 5. Personalizar Colores

Edita las variables CSS en `css/main.css`:

```css
:root {
    --rosa-pastel: #fce4ec;
    --lila: #e1bee7;
    --celeste: #bbdefb;
    --beige: #f5f5dc;
    --acento: #d81b60;
    /* ... más colores */
}
```

## 💳 Integración con Mercado Pago

### Pasos para integrar Mercado Pago:

1. **Crear cuenta en Mercado Pago Developers**
   - Ve a: https://www.mercadopago.com.ar/developers

2. **Obtener credenciales**
   - Public Key (para el frontend)
   - Access Token (para el backend)

3. **Agregar el SDK de Mercado Pago**

En `checkout.html`, antes de `</body>`:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

4. **Configurar en `js/checkout.js`**

```javascript
// Inicializar Mercado Pago
const mp = new MercadoPago('TU_PUBLIC_KEY', {
    locale: 'es-AR'
});

// Crear preferencia de pago
async function processMercadoPago(orderData) {
    const response = await fetch('/api/create_preference', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderData)
    });
    
    const preference = await response.json();
    mp.checkout({
        preference: {
            id: preference.id
        }
    });
}
```

5. **Backend necesario** (Node.js ejemplo):

```javascript
// server.js
const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TU_ACCESS_TOKEN'
});

app.post('/api/create_preference', async (req, res) => {
    const preference = {
        items: req.body.items.map(item => ({
            title: item.name,
            unit_price: item.price,
            quantity: item.quantity
        })),
        back_urls: {
            success: 'https://tudominio.com/success',
            failure: 'https://tudominio.com/failure',
            pending: 'https://tudominio.com/pending'
        },
        auto_return: 'approved'
    };
    
    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
});
```

## 📱 Redes Sociales

### Configurar enlaces de redes sociales:

En el footer y otras secciones, actualiza:

```html
<!-- Instagram -->
<a href="https://instagram.com/casi.como.ella" target="_blank">

<!-- Facebook -->
<a href="https://facebook.com/casi.como.ella" target="_blank">

<!-- Email -->
<a href="mailto:contacto@casicomoella.com">
```

## 🌐 Despliegue

### Opciones para publicar tu sitio:

#### 1. **GitHub Pages** (Gratis)
```bash
# Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/casi-como-ella.git
git push -u origin main

# Activar GitHub Pages en la configuración del repo
# Tu sitio estará en: https://tu-usuario.github.io/casi-como-ella
```

#### 2. **Netlify** (Gratis)
- Arrastra la carpeta del proyecto a netlify.com
- O conecta tu repositorio de GitHub
- URL personalizada disponible

#### 3. **Vercel** (Gratis)
- Conecta tu repositorio
- Deploy automático con cada commit

#### 4. **Hosting tradicional**
- Sube los archivos por FTP
- Necesitas dominio y hosting

## 📧 Configurar Emails de Confirmación

Para enviar emails automáticos necesitas un servicio como EmailJS:

1. Crea cuenta en https://emailjs.com
2. Configura un template de email
3. Agrega en `checkout.html`:

```javascript
// Después de confirmar pedido
emailjs.send('service_id', 'template_id', {
    to_email: orderData.customer.email,
    customer_name: orderData.customer.nombre,
    order_details: '...'
});
```

## 🎨 Personalización Avanzada

### Cambiar fuentes:

En `index.html` y otros archivos HTML, reemplaza:

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap">
```

Y en `css/main.css`:
```css
--font-heading: 'Tu Fuente', serif;
--font-body: 'Tu Fuente', sans-serif;
```

### Agregar más páginas:

1. Copia la estructura de cualquier HTML existente
2. Actualiza el menú de navegación en todos los archivos
3. Crea los estilos específicos si es necesario

## 🔍 SEO Básico

Ya implementado:
- Meta descriptions
- Titles descriptivos
- Estructura semántica HTML5
- Alt text en imágenes (recuerda completarlos)

Para mejorar:
- Agrega un `sitemap.xml`
- Configura Google Analytics
- Registra en Google Search Console

## 📱 Testing

Prueba el sitio en:
- ✅ Chrome (Desktop)
- ✅ Firefox (Desktop)
- ✅ Safari (Desktop)
- ✅ Chrome (Mobile)
- ✅ Safari iOS
- ✅ Diferentes tamaños de pantalla

## 🐛 Solución de Problemas

### Las imágenes no cargan:
- Verifica las rutas en `productos.json`
- Asegúrate de que las imágenes existan en `images/products/`
- Usa rutas relativas correctas

### El carrito no funciona:
- Abre la consola del navegador (F12)
- Verifica que `localStorage` esté habilitado
- Revisa errores en la consola

### Los productos no se muestran:
- Verifica que `productos.json` tenga formato válido
- Usa un validador JSON online
- Revisa la consola del navegador

## 📞 Soporte

Para consultas sobre el código:
- Revisa la documentación en los comentarios del código
- Consulta la consola del navegador para errors

## 📝 Próximas Mejoras Sugeridas

- [ ] Sistema de reviews/opiniones
- [ ] Blog de contenido
- [ ] Newsletter
- [ ] Cupones de descuento
- [ ] Panel de administración
- [ ] Base de datos real (Firebase/MongoDB)
- [ ] Autenticación de usuarios
- [ ] Historial de pedidos

## 📄 Licencia

Este proyecto fue creado para "Casi como ella". 

---

**¡Tu ecommerce está listo para funcionar! 🚀**

Recuerda actualizar:
1. ✅ Número de WhatsApp
2. ✅ Emails de contacto
3. ✅ Links de redes sociales
4. ✅ Imágenes de productos
5. ✅ Datos de productos en `productos.json`
6. ✅ Credenciales de Mercado Pago (cuando integres)

**Cualquier duda, revisá los comentarios en el código - todo está documentado! 💜**
