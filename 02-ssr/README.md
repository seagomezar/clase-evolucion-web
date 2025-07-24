# Server-Side Rendering (Renderizado del Lado del Servidor)

Este folder contiene ejemplos de renderizado del lado del servidor (SSR), donde el HTML se genera dinámicamente en el servidor.

## 📁 Archivos

- `server.js` - Servidor básico que sirve archivos HTML estáticos (puerto 80)
- `server2.js` - Servidor que genera HTML dinámicamente con datos (puerto 3001)
- `styles.css` - Hoja de estilos compartida

## 🎯 Concepto

El renderizado del lado del servidor genera contenido HTML en el servidor antes de enviarlo al cliente:

- El contenido se puede generar dinámicamente
- Los datos se insertan en el HTML antes del envío
- Cada petición puede mostrar contenido diferente
- Mejor para SEO y carga inicial

## 🚀 Cómo ejecutar

### Ejemplo 1: Servidor básico de archivos (`server.js`)
```bash
# Desde el directorio 02-ssr
node server.js

# Visita http://localhost (puerto 80)
# Nota: Puede requerir permisos de administrador para el puerto 80
```

### Ejemplo 2: Generación dinámica de contenido (`server2.js`)
```bash
# Desde el directorio 02-ssr
node server2.js

# Visita http://localhost:3001
```

## 🔍 Qué verás

### server.js
- Sirve el archivo `index.html` estático
- Demuestra un servidor HTTP básico de Node.js
- Mismo resultado visual que la versión estática

### server2.js
- Genera HTML dinámicamente usando template strings de JavaScript
- Incluye datos de productos directamente en el HTML
- La lista de productos se genera en el servidor

## 💡 Características

### Ventajas
- ✅ Contenido dinámico generado en el servidor
- ✅ Excelente para SEO
- ✅ Carga inicial rápida con contenido completo
- ✅ Funciona sin JavaScript en el cliente

### Limitaciones
- ❌ Requiere recarga completa de página para actualizaciones
- ❌ Mayor carga en el servidor
- ❌ Latencia por procesamiento del servidor

## 🎓 Conceptos de aprendizaje

- Servidor HTTP con Node.js
- Módulos `http`, `fs`, y `path` de Node.js
- Template strings para generación de HTML
- Diferencia entre contenido estático y dinámico
- Manejo de rutas básico
- Códigos de estado HTTP

## 🔄 Comparación con Static

| Aspecto | Static | SSR |
|---------|--------|-----|
| **Contenido** | Fijo | Dinámico |
| **Generación** | En desarrollo | En cada petición |
| **Servidor** | Opcional | Requerido |
| **Personalización** | No | Sí |