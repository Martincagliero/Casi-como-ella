## 🔧 SOLUCIÓN DE PROBLEMAS

### ❌ El sitio se traba o va lento

**SOLUCIONES:**

1. **Abre la Consola del Navegador (F12)**
   - Ve a la pestaña "Console"
   - Mira si hay errores en rojo
   - Envíame una captura si no entiendes

2. **Limpia la Caché**
   ```
   Ctrl + Shift + R (Windows)
   Cmd + Shift + R (Mac)
   ```

3. **Verifica que el servidor esté corriendo**
   ```powershell
   python -m http.server 8000
   ```

4. **Usa Chrome o Edge** (mejor rendimiento)

---

### 🖼️ Las imágenes no cargan

**SOLUCIÓN INMEDIATA:**
- Las imágenes tienen un placeholder automático
- El sitio funciona sin imágenes reales

**Para agregar tus imágenes:**
1. Coloca fotos en `images/products/`
2. Actualiza las rutas en `data/productos.json`

---

### 📦 Los productos no aparecen

**Verifica:**
1. Que `data/productos.json` exista
2. Abre la consola (F12) y busca errores
3. El archivo debe ser JSON válido (verifica en jsonlint.com)

**SOLUCIÓN AUTOMÁTICA:**
- Si falla la carga, usa productos de ejemplo automáticamente

---

### 🛒 El carrito no funciona

**Soluciones:**
1. No uses modo incógnito
2. Habilita cookies/localStorage
3. Limpia localStorage:
   ```javascript
   // En la consola del navegador (F12)
   localStorage.clear()
   ```

---

### ⚡ OPTIMIZACIONES YA APLICADAS:

✅ Timeout en carga de productos (5 segundos)
✅ Productos de ejemplo si falla la carga
✅ Lazy loading de imágenes optimizado
✅ Debounce en filtros (300ms)
✅ Manejo de errores mejorado
✅ Monitor de performance en desarrollo

---

### 🚀 TIPS PARA MEJOR RENDIMIENTO:

1. **Optimiza tus imágenes:**
   - Usa JPG para fotos
   - Máximo 1000x1000px
   - Comprime en: tinypng.com

2. **Usa Chrome DevTools:**
   - F12 → Network → Reload
   - Ve qué archivos tardan más

3. **Cierra otras apps pesadas**

---

### 🆘 REINICIO COMPLETO:

Si nada funciona:

```powershell
# 1. Detén el servidor (Ctrl + C)

# 2. Limpia todo
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# 3. Abre nuevamente
python -m http.server 8000

# 4. Abre en navegador
http://localhost:8000
```

---

### 📱 PROBADO EN:

✅ Chrome 120+
✅ Edge 120+
✅ Firefox 121+
✅ Safari 17+

**Mejor rendimiento:** Chrome y Edge

---

### 💡 VER CONSOLE LOGS:

Abre la consola (F12) y verás:
- 🚀 Información de inicio
- ⚡ Tiempos de carga
- ❌ Errores (si hay)

---

¿Sigues con problemas? Mira la consola (F12) y dime qué error ves.
