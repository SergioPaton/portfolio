# 🚀 Portafolio Web Profesional — Sergio Patón García

Sitio web de portafolio profesional de alto impacto para presentación ante empresas, reclutadores técnicos (CTOs) y perfiles de LinkedIn.

Desarrollado bajo estándares web nativos (**HTML5 Semántico, Vanilla CSS3 y Vanilla JavaScript ES6+**), sin dependencias de Node.js, compiladores ni gestores de paquetes externos (`zero dependencies`).

---

## ✨ Características Principales

1. **Estética Visual Premium (Obsidian Dark & Glassmorphism):**
   - Sistema de diseño cuidado con paleta oscura obsidian, acentos violeta/cian neón y transparencias con desenfoque de fondo (*backdrop-filter*).
   - Tipografía moderna cargada desde Google Fonts: *Outfit* (encabezados) e *Inter* (cuerpo) y *Fira Code* (código).
   - Animaciones fluidas, microinteracciones en tarjetas y badges dinámicos.

2. **Showcase Interactivo de Aider CLI (Modelos Gratuitos de OpenRouter):**
   - Módulo interactivo exclusivo que emula la terminal de **Aider** (utilizado en el proyecto **Fuerza Base**), mostrando cómo se aplica la Inteligencia Artificial al servicio de la **Clean Architecture**, la ejecución de tests automatizados (PyTest / Playwright) y la generación de commits convencionales.
   - Pestañas interactivas para alternar entre escenarios de arquitectura, testing y control de versiones.

3. **Catálogo Dinámico de Proyectos con Filtros en Vivo:**
   - 9 proyectos completos analizados del directorio de trabajo:
     1. **Fuerza Base** (SaaS Deportivo, Clean Architecture 4 capas, desarrollado con Aider y modelos gratuitos de OpenRouter).
     2. **VeriFactu Desktop** (Facturación legal RD 1007/2023, Electron, SHA-256 Hash Chaining, firmas digitales XAdES-EPES, Playwright).
     3. **Instagram Sales DM Funnel Engine** (Agente comercial con FastAPI, Google Gemini SDK y Meta Graph API).
     4. **API de Geolocalización y Geofencing** (Microservicio espacial con GeoAlchemy2, Shapely, Redis y PyTest).
     5. **Running Tracker** (Motor algorítmico de periodización deportiva con Arquitectura Hexagonal y CQRS Lite).
     6. **Cocina Patón** (Chef inteligente anti-desperdicio con Gemini SDK y HTMX/Alpine.js).
     7. **Fantasy Manager Desktop** (Analítica deportiva y Computer Vision / OCR con OpenCV y Tesseract).
     8. **MD2PDF Premium** (Herramienta CLI de maquetación y generación documental).
     9. **WebSolutions SEO** (Showcase de rendimiento extremo y accesibilidad WAI-ARIA en Vanilla JS).
   - Filtros instantáneos por categorías: *Todos*, *Destacados*, *Inteligencia Artificial & Aider*, *Backend & APIs*, *Desktop & Legal*, *Deporte & Algoritmia*.
   - **Modal de Detalles Técnicos**: Al hacer clic en *"Ver Detalles Técnicos"* se despliega un diálogo emergente con la arquitectura profunda, logros técnicos y tecnologías empleadas.

4. **Matriz de Competencias y Stack:**
   - Clasificación por bloques: Backend & Arquitectura, Inteligencia Artificial & GIS, Bases de Datos, Criptografía & Legal, Frontend y Testing.

5. **Línea de Tiempo de Experiencia y Educación:**
   - Trayectoria en Win o Win Consulting (FCT), gestión en Pádel A3, docencia deportiva (liderazgo y disciplina bajo presión) y formación técnica oficial DAW y TAFAD.

6. **Contacto Rápido y Descarga de CV:**
   - Botón de copiado con feedback visual (*Toast Notification*) para email y teléfono.
   - Enlace directo de descarga del currículum en PDF.

7. **Optimización SEO & Accesibilidad:**
   - Estructura semántica estricta con un único `<h1>`, atributos ARIA, etiquetas OpenGraph completas para previsualización enriquecida en LinkedIn y Twitter Cards.

---

## 📂 Estructura de Archivos

```text
portfolio/
├── index.html         # Documento principal con marcado HTML5 semántico y SEO
├── css/
│   └── style.css      # Sistema de diseño, layout responsive y estilos visuales
├── js/
│   ├── data.js        # Estructura de datos completa de proyectos, skills y experiencia
│   └── app.js         # Lógica interactiva (filtros, terminal, modal, navegación, toasts)
└── README.md          # Esta guía de documentación
```

---

## ⚡ Cómo Abrir o Desplegar

### 1. En local (sin instalación previa)
Haz doble clic directamente sobre el archivo `index.html` o ábrelo en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Brave, Firefox, etc.).

### 2. Con extensión Live Server (VS Code / Cursor / IDE)
Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

### 3. Despliegue en la nube gratuito en 1 minuto
Este proyecto es 100% estático. Puedes subirlo directamente a:
- **GitHub Pages**: Sube la carpeta a un repositorio y activa *Settings > Pages*.
- **Vercel / Netlify**: Arrastra la carpeta `portfolio/` y obtendrás una URL pública inmediata con certificado SSL para incluir en tu perfil de LinkedIn y CV.
