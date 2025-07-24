# Single-Page Application (Aplicación de Página Única)

Este folder contiene ejemplos de aplicaciones de página única (SPA), donde los datos se cargan dinámicamente sin recargar la página.

## 📁 Archivos

- `index_ajax.html` - Cliente SPA con funcionalidad AJAX
- `server3.js` - Servidor API que proporciona datos JSON (puerto 3002)

## 🎯 Concepto

Las aplicaciones de página única representan el enfoque moderno del desarrollo web:

- Los datos se cargan asincrónicamente via AJAX/Fetch
- La página no se recarga completamente
- Interactividad fluida y rápida
- Separación entre cliente y API

## 🚀 Cómo ejecutar

### Paso 1: Iniciar el servidor API
```bash
# Desde el directorio 03-spa
node server3.js

# El servidor API correrá en http://localhost:3002
```

### Paso 2: Servir el archivo HTML
```bash
# En otra terminal, desde el directorio 03-spa
python3 -m http.server 8080

# Visita http://localhost:8080/index_ajax.html
```

## 🔍 Qué verás

- Inicialmente, la página carga con una lista vacía
- Al hacer clic en el botón, se obtienen productos via AJAX
- La lista se llena sin recargar la página
- Demuestra carga asíncrona de datos

## 🌐 Endpoints de la API

El `server3.js` proporciona los siguientes endpoints:

- `GET /products` - Retorna array JSON de productos
- `GET /hola` - Sirve la página HTML del SPA

### Ejemplo de respuesta `/products`:
```json
[
  {"id": 1, "name": "Producto 1", "price": 100},
  {"id": 2, "name": "Producto 2", "price": 200},
  {"id": 3, "name": "Producto 3", "price": 300}
]
```

## 💡 Características

### Ventajas
- ✅ Experiencia de usuario fluida
- ✅ Actualizaciones parciales sin recarga
- ✅ Menor carga del servidor (después de la carga inicial)
- ✅ Interactividad rica
- ✅ Separación clara entre frontend y backend

### Limitaciones
- ❌ SEO requiere trabajo adicional
- ❌ Carga inicial puede ser más lenta
- ❌ Requiere JavaScript habilitado
- ❌ Mayor complejidad de desarrollo

## 🎓 Conceptos de aprendizaje

- API Fetch para peticiones HTTP
- Manipulación del DOM con JavaScript
- Manejo de promesas y async/await
- Arquitectura cliente-servidor separada
- Formato JSON para intercambio de datos
- Headers HTTP y Content-Type
- Manejo de errores en peticiones AJAX

## 🔄 Comparación con enfoques anteriores

| Aspecto | Static | SSR | SPA |
|---------|--------|-----|-----|
| **Carga de datos** | Hardcodeado | Generado en servidor | Obtenido via API |
| **Actualizaciones** | Recarga completa | Recarga completa | Actualizaciones parciales |
| **Carga del servidor** | Mínima | Moderada | Baja (después de inicial) |
| **Experiencia de usuario** | Básica | Buena | Excelente |
| **Complejidad** | Baja | Media | Alta |

## 🚀 Próximos pasos

Este ejemplo básico se puede extender con:
- Frameworks como React, Vue, o Angular
- Manejo de estado más robusto
- Ruteo del lado del cliente
- Autenticación y autorización
- Progressive Web App (PWA) features