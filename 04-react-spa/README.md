# React Single-Page Application (SPA React)

Este folder contiene un ejemplo de aplicación de página única construida con React, representando el estado moderno del desarrollo web frontend.

## 📁 Archivos

- `index.html` - Aplicación React SPA con JSX usando Babel
- `server.js` - Servidor API con soporte CORS (puerto 3003)
- `package.json` - Configuración del proyecto y dependencias
- `node_modules/` - Dependencias de React (generado por npm install)

## 🎯 Concepto

Esta aplicación React demuestra:

- **Componentes reutilizables**: Arquitectura basada en componentes
- **Estado reactivo**: Manejo de estado con React Hooks
- **Efectos secundarios**: Peticiones API con useEffect
- **Manejo de errores**: Tratamiento robusto de errores
- **UX moderna**: Indicadores de carga y feedback visual

## 🚀 Instalación y configuración

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### Paso 1: Instalar dependencias
```bash
# Navega al directorio
cd 04-react-spa

# Instala las dependencias
npm install
```

### Paso 2: Iniciar el servidor
```bash
# Opción 1: Usar npm script
npm start

# Opción 2: Ejecutar directamente
node server.js
```

### Paso 3: Abrir la aplicación
```bash
# Visita en tu navegador
http://localhost:3003
```

## 🔍 Funcionalidades

### Interfaz de usuario
- Lista de productos con diseño moderno
- Botones para cargar y limpiar productos
- Indicadores de carga durante peticiones
- Manejo visual de errores
- Diseño responsivo y accesible

### Componentes React

#### `App`
- Componente principal que contiene toda la aplicación
- Proporciona la estructura general

#### `ProductList`
- Maneja el estado de los productos
- Controla la carga y visualización de datos
- Gestiona estados de carga y error

#### `Product`
- Componente de presentación para cada producto
- Recibe props y renderiza información del producto

### React Hooks utilizados

- `useState`: Para manejo de estado local
- `useEffect`: Para efectos secundarios (actualmente no usado pero disponible)

## 🌐 API Endpoints

El servidor proporciona:

### `GET /products`
Retorna lista de productos en formato JSON
```json
[
  {"id": 1, "name": "Laptop Gaming", "price": 1200},
  {"id": 2, "name": "Mouse Inalámbrico", "price": 25},
  {"id": 3, "name": "Teclado Mecánico", "price": 80},
  {"id": 4, "name": "Monitor 4K", "price": 350},
  {"id": 5, "name": "Auriculares Bluetooth", "price": 60}
]
```

### `GET /` o `GET /index.html`
Sirve la aplicación React SPA

### `POST /api/products/add`
Permite agregar nuevos productos (ejemplo de endpoint POST)

## 💡 Características técnicas

### Ventajas de esta implementación
- ✅ **No bundler**: Usa Babel standalone para simplicidad educativa
- ✅ **CDN**: React cargado desde CDN sin complejidad de build
- ✅ **CORS habilitado**: Permite peticiones cross-origin
- ✅ **Componentes modernos**: Usa React Hooks
- ✅ **Manejo de errores**: Tratamiento robusto de fallos

### Arquitectura
- **Frontend**: React con JSX transformado por Babel
- **Backend**: Node.js con módulos nativos
- **API**: RESTful endpoints con JSON
- **Styling**: CSS vanilla con diseño moderno

## 🎓 Conceptos de aprendizaje

### React específicos
- Componentes funcionales
- JSX syntax
- Props y prop drilling
- State hooks (useState)
- Event handling
- Conditional rendering

### JavaScript moderno
- Async/await para manejo de promesas
- Fetch API para peticiones HTTP
- Destructuring assignment
- Template literals
- Arrow functions

### Arquitectura web
- Separación de responsabilidades
- Component-based architecture
- Unidirectional data flow
- API-first design

## 🔄 Comparación con enfoques anteriores

| Aspecto | Vanilla SPA | React SPA |
|---------|-------------|-----------|
| **Estructura** | Procedural | Basada en componentes |
| **Reutilización** | Limitada | Alta reutilización |
| **Estado** | Manual | React Hooks |
| **Mantenimiento** | Complejo | Organizado |
| **Escalabilidad** | Difícil | Fácil |

## 🚀 Próximos pasos

Este ejemplo se puede extender con:

### Desarrollo
- **Build tools**: Webpack, Vite, o Create React App
- **TypeScript**: Para tipado estático
- **CSS-in-JS**: Styled-components o emotion
- **State management**: Redux, Zustand, o Context API

### Funcionalidades
- **Routing**: React Router para múltiples páginas
- **Forms**: Formularios controlados y validación
- **Authentication**: Login y manejo de sesiones
- **Real-time**: WebSockets para actualizaciones en tiempo real

### Testing
- **Unit tests**: Jest + React Testing Library
- **E2E tests**: Cypress o Playwright
- **Accessibility**: Testing de accesibilidad

### Deployment
- **Static hosting**: Netlify, Vercel
- **Docker**: Containerización
- **CI/CD**: Pipelines automatizados

## 🛠 Troubleshooting

### Problemas comunes

**Error de CORS**
- Asegúrate de que el servidor esté corriendo en puerto 3003
- Verifica que el CORS esté habilitado en server.js

**React no carga**
- Verifica conexión a internet para CDN
- Revisa la consola del navegador para errores

**Productos no cargan**
- Confirma que el servidor API esté activo
- Verifica el endpoint en la consola de red del navegador