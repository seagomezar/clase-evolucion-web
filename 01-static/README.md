# Static Websites (Sitios Web Estáticos)

Este folder contiene ejemplos de sitios web estáticos, la forma más básica de desarrollo web.

## 📁 Archivos

- `index.html` - Página principal con contenido estático
- `about.html` - Página secundaria simple
- `styles.css` - Hoja de estilos compartida

## 🎯 Concepto

Los sitios web estáticos representan la forma más temprana del desarrollo web donde:

- El contenido está escrito directamente en HTML
- No requiere procesamiento del lado del servidor
- Carga rápidamente y es simple de implementar
- Interactividad limitada (solo JavaScript del lado del cliente)

## 🚀 Cómo ejecutar

### Opción 1: Abrir directamente en el navegador
```bash
# Navega al directorio
cd 01-static

# Abre el archivo en tu navegador
open index.html
# o en Linux/Windows:
xdg-open index.html
```

### Opción 2: Usar un servidor HTTP simple
```bash
# Desde el directorio 01-static
python3 -m http.server 8000

# Luego visita http://localhost:8000
```

## 🔍 Qué verás

- Una página simple con un encabezado, lista y botón
- Al hacer clic en el botón se muestra una alerta de JavaScript
- Estilo azul aplicado al encabezado mediante CSS

## 💡 Características

### Ventajas
- ✅ Muy rápido de cargar
- ✅ Fácil de implementar
- ✅ Excelente para SEO
- ✅ Funciona sin servidor

### Limitaciones
- ❌ Contenido fijo para todos los usuarios
- ❌ No puede acceder a bases de datos
- ❌ Interactividad limitada
- ❌ Difícil mantener sitios grandes

## 🎓 Conceptos de aprendizaje

- HTML semántico básico
- CSS para estilos
- JavaScript básico para interactividad
- Estructura de archivos web