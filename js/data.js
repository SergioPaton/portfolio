/**
 * Portafolio de Sergio Patón García
 * Datos estructurados de proyectos, tecnologías y trayectoria.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sergio Patón García",
    title: "Desarrollador Full Stack & Software Engineer",
    subtitle: "Especialista en APIs Asíncronas, Clean Architecture e IA Aplicada",
    location: "Mislata, Valencia, España",
    email: "sergio.97pg@gmail.com",
    phone: "(+34) 648 00 22 98",
    linkedin: "https://www.linkedin.com/in/sergio-patón-garcía-b43706242",
    github: "https://github.com/SergioPaton",
    status: "Disponible para nuevas oportunidades",
    summary: "Desarrollador Full Stack con formación técnica oficial en DAW y experiencia real en software empresarial, normativo y con inteligencia artificial. Destaco en el diseño de APIs asíncronas de alto rendimiento (FastAPI, Node.js, Spring Boot), implementación rigurosa de Clean Architecture / DDD, integración de LLMs (Gemini, Meta Graph API) y desarrollo ágil en consola con Aider (utilizando modelos gratuitos de OpenRouter)."
  },

  metrics: [
    { value: "09", label: "PROYECTOS_AUDITADOS", icon: "folder-check" },
    { value: "04", label: "NIVEL_ENTERPRISE", icon: "layers" },
    { value: "100%", label: "CLEAN_ARCHITECTURE", icon: "shield-check" },
    { value: "FREE", label: "AIDER_OPENROUTER", icon: "cpu" }
  ],

  categories: [
    { id: "all", label: "Todos", count: 9 },
    { id: "featured", label: "Destacados", count: 5 },
    { id: "ai", label: "IA & Aider", count: 4 },
    { id: "backend", label: "Backend & APIs", count: 6 },
    { id: "desktop", label: "Legal & Desktop", count: 3 },
    { id: "sports", label: "Deporte & Algoritmia", count: 3 }
  ],

  projects: [
    {
      id: "fuerza-base",
      title: "Fuerza Base",
      badge: "SaaS Deportivo & Alto Rendimiento",
      featured: true,
      categories: ["featured", "ai", "backend", "sports"],
      shortDesc: "Plataforma integral de prescripción y regulación adaptativa de cargas deportivas con arquitectura limpia estricta y desarrollo acelerado en consola mediante Aider con modelos gratuitos de OpenRouter.",
      fullDesc: "Fuerza Base es una plataforma SaaS diseñada para entrenadores y atletas que requieren prescripción matemática y regulación dinámica de entrenamientos de fuerza. Construida desde el primer día con Clean Architecture desacoplada en 4 capas concéntricas, garantizando independencia total del framework en el núcleo de dominio.",
      aiHighlight: "Desarrollado y refactorizado de forma iterativa utilizando Aider CLI conectado a modelos gratuitos a través de OpenRouter. Aider se integró como asistente de arquitectura en terminal para acelerar la creación de casos de uso desacoplados, generación de esquemas Pydantic v2 y cobertura de tests en pytest sin coste de API.",
      architecture: "Clean Architecture (Dominio puro con dataclasses -> Casos de uso con puertos/interfaces -> Infraestructura con SQLAlchemy -> Adaptadores HTTP con FastAPI v1/v2).",
      tags: ["Python 3.11", "FastAPI", "Aider (OpenRouter Free)", "SQLAlchemy", "React 18", "TanStack Query", "Tailwind CSS", "Alembic", "Pydantic v2", "PyTest"],
      highlights: [
        "Desarrollo ágil asistido por IA mediante Aider CLI aplicando Conventional Commits.",
        "Dominio puro sin dependencias de frameworks ni librerías ORM externas.",
        "Prescripción automática y regulación dinámica adaptativa de cargas según feedback del atleta.",
        "Frontend reactivo con React 18, Vite y TanStack Query v5 para sincronización de estado."
      ],
      color: "#6366f1",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "verifactu-desktop",
      title: "VeriFactu Desktop",
      badge: "Software Empresarial & Legal (RD 1007/2023)",
      featured: true,
      categories: ["featured", "backend", "desktop"],
      shortDesc: "Aplicación de escritorio multiplataforma para emisión y firma digital inalterable de facturas electrónicas adaptadas a la nueva normativa de la AEAT.",
      fullDesc: "Diseñado para la consultora Win o Win Consulting, este sistema de facturación electrónica da cumplimiento estricto al Real Decreto 1007/2023. Implementa encadenamiento inalterable de hashes criptográficos SHA-256 (blockchain-like chaining) para garantizar la inmutabilidad y trazabilidad de cada registro ante Hacienda.",
      architecture: "Arquitectura Desktop-Server desacoplada: proceso principal Electron + API REST local en Node.js/Express con Prisma ORM y almacenamiento seguro en SQLite cifrado.",
      tags: ["Electron", "Node.js", "Express", "Prisma ORM", "SQLite", "Criptografía SHA-256", "xml-crypto", "node-forge", "PDFKit", "Playwright E2E"],
      highlights: [
        "Encadenamiento criptográfico continuo de hashes SHA-256 entre facturas consecutivas.",
        "Generación y firma digital de XML (Facturae / XAdES-EPES) mediante node-forge.",
        "Renderizado automatizado de facturas PDF con código QR normativo de verificación.",
        "Batería exhaustiva de pruebas end-to-end automatizadas con Playwright."
      ],
      color: "#06b6d4",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "bot-ig-funnel",
      title: "Instagram Sales DM Funnel Engine",
      badge: "Agente Inteligente de Ventas & Meta API",
      featured: true,
      categories: ["featured", "ai", "backend"],
      shortDesc: "Agente de adquisición y ventas por mensajes directos (DMs) de Instagram con integración del SDK de Google Gemini y panel web reactivo.",
      fullDesc: "Sistema backend de automatización comercial que conecta la API oficial de Meta Graph con modelos de lenguaje de última generación (Google Gemini). El agente mantiene conversaciones contextuales con clientes potenciales, responde dudas comerciales, cualifica leads y los guía por el embudo de ventas automáticamente.",
      architecture: "Servidor asíncrono en FastAPI conectado a Webhooks de Meta, con cola de procesamiento conversacional y dashboard de control en React 19.",
      tags: ["FastAPI", "Python", "Google Gemini SDK", "Meta Graph API", "React 19", "Tailwind CSS v4", "Webhooks", "Vite", "Pydantic"],
      highlights: [
        "Procesamiento del lenguaje natural en tiempo real guiado por prompts de contexto comercial.",
        "Integración bidireccional con Instagram Direct Messages mediante Meta Graph API.",
        "Dashboard interactivo para supervisar conversaciones, tasas de conversión y leads cualificados.",
        "Gestión robusta de rate limits y reintentos automáticos."
      ],
      color: "#ec4899",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "api-geolocalizacion",
      title: "API de Geolocalización & Geofencing",
      badge: "GIS & Microservicio de Alto Rendimiento",
      featured: true,
      categories: ["featured", "backend"],
      shortDesc: "API asíncrona para control horario laboral mediante verificación espacial en tiempo real de coordenadas GPS contra polígonos perimetrales.",
      fullDesc: "Servicio backend desarrollado para verificar el registro de jornada y presencia física de operarios en obra. Aplica análisis geográfico avanzado (geofencing) para comprobar matemáticamente si las coordenadas recibidas caen dentro de las zonas delimitadas.",
      architecture: "Microservicio asíncrono con FastAPI y PostgreSQL/PostGIS a través de GeoAlchemy2 y Shapely, optimizado con capa de caché y rate-limiting en Redis.",
      tags: ["FastAPI", "PostgreSQL", "GeoAlchemy2", "Shapely (GIS)", "Redis", "Firebase Admin", "ReportLab", "PyTest"],
      highlights: [
        "Consultas espaciales de contención poligonal y cálculo de distancias con GeoAlchemy2 y Shapely.",
        "Caché asíncrona y protección frente a abusos mediante Redis.",
        "Notificaciones push automatizadas a través de Firebase Admin SDK.",
        "Generación de reportes de auditoría horaria y suite de pruebas en PyTest."
      ],
      color: "#10b981",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "running-tracker",
      title: "Running Tracker — Periodización Deportiva",
      badge: "Arquitectura Hexagonal & CQRS Lite",
      featured: true,
      categories: ["featured", "backend", "sports"],
      shortDesc: "Aplicación web integral para corredores con motor algorítmico de periodización deportiva (4 a 24 semanas) según umbral de lactato y pulso en reposo.",
      fullDesc: "Proyecto intermodular destacado de DAW. Desarrolla un motor matemático capaz de calcular zonas de entrenamiento (Z1 a Z5) y diseñar planes de entrenamiento completos estructurados en macrociclos, mesociclos y microciclos según la fecha de la carrera objetivo.",
      architecture: "Clean Hexagonal Architecture pura en Node.js/Express con CQRS Lite (separación entre comandos de modificación y queries de consulta) y persistencia modular.",
      tags: ["Node.js", "Express v5", "Vanilla JS ES6+", "HTML5 Semántico", "CSS3 Nativo", "Arquitectura Hexagonal", "CQRS Lite", "Jest"],
      highlights: [
        "Motor algorítmico propio para cálculo de ritmos y periodización deportiva personalizada.",
        "Arquitectura hexagonal estricta con independencia del motor de base de datos.",
        "Dashboard interactivo cliente sin dependencias pesadas, optimizado con Vite.",
        "Pruebas unitarias de cobertura con Jest asegurando la exactitud de los cálculos deportivos."
      ],
      color: "#f59e0b",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "cocina-paton",
      title: "Cocina Patón — Chef IA Anti-Desperdicio",
      badge: "Inteligencia Artificial Generativa & HTMX",
      featured: false,
      categories: ["ai", "backend"],
      shortDesc: "Chef personal digital que genera recetas creativas en tiempo real basadas únicamente en los ingredientes disponibles en el hogar.",
      fullDesc: "Aplicación web que ataca el problema del desperdicio alimentario. Analiza los alimentos que el usuario tiene en la despensa, sus alérgenos y tiempo disponible, solicitando a Google Gemini propuestas gastronómicas viables con estructura JSON tipada.",
      architecture: "Monolito modular ligero con FastAPI, Jinja2, HTMX y Alpine.js para lograr una experiencia altamente reactiva de Single-Page Application sin el peso de un framework JS complejo.",
      tags: ["FastAPI", "Google Gemini SDK", "Jinja2", "HTMX", "Alpine.js", "Tailwind CSS", "SQLite", "Alembic"],
      highlights: [
        "Respuestas de IA en JSON estructurado estricto para renderizado fiable.",
        "Frontend hiperreactivo sin JavaScript pesado gracias al binomio HTMX + Alpine.js.",
        "Bucle de retroalimentación que memoriza las preferencias culinarias del usuario.",
        "Impacto positivo directo en el ahorro del hogar y reducción del desperdicio de comida."
      ],
      color: "#8b5cf6",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "fantasy-manager",
      title: "Fantasy Manager Desktop",
      badge: "Computer Vision & Analítica Deportiva",
      featured: false,
      categories: ["ai", "desktop", "sports"],
      shortDesc: "Software de escritorio en Python para gestión y análisis financiero de equipos de LaLiga Fantasy / Biwenger con extracción óptica OCR.",
      fullDesc: "Herramienta que sustituye las hojas de cálculo manuales. Incorpora una zona de arrastrar y soltar (Drag & Drop) para soltar capturas de pantalla de la alineación y puntuaciones, extrayendo automáticamente los datos mediante OpenCV y Tesseract OCR.",
      architecture: "Aplicación de escritorio MVC nativa en Python 3.10+ con interfaz gráfica moderna CustomTkinter, motor de visión y base de datos SQLite embebida.",
      tags: ["Python", "CustomTkinter (GUI)", "OpenCV", "Tesseract OCR", "Pandas", "NumPy", "SQLite", "Matplotlib"],
      highlights: [
        "Procesamiento y binarización de imagen con OpenCV para lectura OCR fiable.",
        "Cálculo vectorial de métricas de rentabilidad (ROI, coste por punto, beneficio neto).",
        "Visualización gráfica embebida de tendencias de valor de mercado.",
        "Ejecución 100% local e independiente sin necesidad de servidores externos."
      ],
      color: "#14b8a6",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "md2pdf-cli",
      title: "MD2PDF Premium",
      badge: "Herramienta CLI & Automatización Editorial",
      featured: false,
      categories: ["desktop"],
      shortDesc: "Conversor de línea de comandos ultrarrápido para transformar documentos Markdown en PDFs de diseño editorial de alta calidad.",
      fullDesc: "Herramienta de automatización creada para maquetar currículums, memorias técnicas y documentación formal con tipografía cuidada (Inter), resaltado de sintaxis y soporte para temas CSS personalizados inyectables.",
      architecture: "Paquete global de consola en Node.js que orquesta un navegador headless (Google Chrome o Microsoft Edge) para renderizar HTML semántico a PDF vectorial perfecto.",
      tags: ["Node.js", "CLI", "Headless Chrome", "CSS3 Editorial", "Markdown Parser", "npm link"],
      highlights: [
        "Detección automática de navegadores locales instalados en Windows sin sobrecargar con Puppeteer.",
        "Sistema de capas de diseño: estructura semántica + tema base + CSS personalizado.",
        "Instalación global reutilizable en cualquier proyecto del sistema.",
        "Generación vectorial sin pérdida de resolución para impresión profesional."
      ],
      color: "#3b82f6",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    },
    {
      id: "websolutions-seo",
      title: "WebSolutions — Rendimiento & SEO SPA",
      badge: "Vanilla Web & Accesibilidad",
      featured: false,
      categories: ["backend"],
      shortDesc: "Showcase de arquitectura web nativa con router SPA en Vanilla JS, accesibilidad estricta WAI-ARIA y optimización SEO on-page completa.",
      fullDesc: "Demostración de maestría en tecnologías web estándar sin dependencias externas (`zero node_modules`). Incluye etiquetas meta dinámicas, protocolos Open Graph y Twitter Cards completos, y un sistema de navegación ultraligero que logra puntuación máxima de rendimiento.",
      architecture: "Arquitectura basada en estándares web puros: HTML5 semántico, CSS Vanilla con Custom Properties y Vanilla JS ES6+.",
      tags: ["HTML5 Semántico", "CSS3 Vanilla", "JavaScript ES6+", "SPA Router Nativo", "SEO On-Page", "WAI-ARIA"],
      highlights: [
        "Cero dependencias y tiempo de carga instantáneo.",
        "Enrutador cliente SPA que actualiza títulos y metaetiquetas dinámicamente.",
        "Accesibilidad WAI-ARIA integral compatible con lectores de pantalla.",
        "Diseño 100% responsivo y fluido mediante CSS Grid y Flexbox."
      ],
      color: "#f97316",
      links: {
        demo: "#",
        github: "https://github.com",
        docs: "#"
      }
    }
  ],

  skillsGroup: [
    {
      category: "Backend & Arquitectura",
      icon: "server",
      skills: [
        { name: "Python / FastAPI", level: "Avanzado" },
        { name: "Node.js (Express & Fastify)", level: "Avanzado" },
        { name: "Java (Spring Boot / JPA)", level: "Intermedio-Alto" },
        { name: "Clean Architecture & DDD", level: "Avanzado" },
        { name: "CQRS Lite & Hexagonal", level: "Avanzado" },
        { name: "Validación (Pydantic v2 / Zod)", level: "Avanzado" }
      ]
    },
    {
      category: "Inteligencia Artificial & GIS",
      icon: "bot",
      skills: [
        { name: "Aider CLI (OpenRouter Free Models)", level: "Avanzado" },
        { name: "Google Gemini SDK (Salidas JSON)", level: "Avanzado" },
        { name: "Meta Graph API (Instagram DMs)", level: "Avanzado" },
        { name: "GIS Espacial (GeoAlchemy2 / Shapely)", level: "Avanzado" },
        { name: "Computer Vision & OCR (OpenCV / Tesseract)", level: "Intermedio" },
        { name: "Automatización de Flujos (n8n)", level: "Intermedio-Alto" }
      ]
    },
    {
      category: "Bases de Datos & Persistencia",
      icon: "database",
      skills: [
        { name: "PostgreSQL & PostGIS", level: "Avanzado" },
        { name: "MySQL / MariaDB", level: "Avanzado" },
        { name: "SQLite (Bases Locales & Desktop)", level: "Avanzado" },
        { name: "Redis (Caché & Rate Limiting)", level: "Intermedio-Alto" },
        { name: "Prisma ORM (v5 & v6)", level: "Avanzado" },
        { name: "SQLAlchemy Async & Alembic", level: "Avanzado" }
      ]
    },
    {
      category: "Criptografía, Legal & Desktop",
      icon: "shield",
      skills: [
        { name: "Normativa VeriFactu (RD 1007/2023)", level: "Especialista" },
        { name: "Encadenamiento SHA-256 (Hash Chaining)", level: "Avanzado" },
        { name: "Firmas Digitales XAdES-EPES", level: "Avanzado" },
        { name: "Electron & Electron-Builder", level: "Avanzado" },
        { name: "CustomTkinter (GUI Python)", level: "Avanzado" },
        { name: "Testing E2E con Playwright", level: "Avanzado" }
      ]
    },
    {
      category: "Frontend & Diseño Web",
      icon: "layout",
      skills: [
        { name: "React 18 / 19 & TanStack Query", level: "Avanzado" },
        { name: "Tailwind CSS v3 & v4", level: "Avanzado" },
        { name: "JavaScript Vanilla ES6+ & TypeScript", level: "Avanzado" },
        { name: "HTML5 Semántico & CSS3 Avanzado", level: "Experto" },
        { name: "HTMX & Alpine.js", level: "Avanzado" },
        { name: "Empaquetadores (Vite)", level: "Avanzado" }
      ]
    },
    {
      category: "Testing, DevOps & Competencias Clave",
      icon: "terminal",
      skills: [
        { name: "PyTest (Testing Asíncrono)", level: "Avanzado" },
        { name: "Jest & Supertest (Node.js)", level: "Avanzado" },
        { name: "Git & Conventional Commits", level: "Avanzado" },
        { name: "Disciplina y Trabajo Bajo Presión", level: "Fortaleza Clave" },
        { name: "Liderazgo y Gestión de Equipos", level: "Fortaleza Clave" },
        { name: "Inglés Técnico (B1 Fluido)", level: "Competente" }
      ]
    }
  ],

  experience: [
    {
      period: "Marzo 2026 — Julio 2026",
      role: "Desarrollador Full Stack (Prácticas FCT - 500h)",
      company: "Win o Win Consulting",
      location: "Valencia, España",
      description: "Liderazgo técnico en la creación de soluciones críticas de software empresarial:",
      points: [
        "Desarrollo de la aplicación de escritorio homologada VeriFactu con Electron, Prisma y SQLite, garantizando inalterabilidad mediante encadenamiento SHA-256 y firma digital XAdES-EPES.",
        "Implementación del bot de ventas de Instagram con FastAPI, Google Gemini SDK y Meta Graph API.",
        "Diseño de la API asíncrona de geolocalización y fichaje perimetral (geofencing) con GeoAlchemy2, Shapely y Redis.",
        "Automatización de pruebas de interfaz y flujos E2E con Playwright y PyTest."
      ]
    },
    {
      period: "Octubre 2023 — Octubre 2024",
      role: "Recepcionista & Gestor de Operaciones",
      company: "Pádel A3",
      location: "Quart de Poblet, Valencia",
      description: "Gestión directa del público, coordinación operativa del club y fidelización de clientes:",
      points: [
        "Administración de tienda de material técnico, cafetería y cobros.",
        "Planificación y emparejamiento algorítmico y equilibrado de niveles deportivos en torneos.",
        "Gestión de redes sociales corporativas (Instagram) para captación de clientes y patrocinadores."
      ]
    },
    {
      period: "Enero 2016 — Enero 2019",
      role: "Monitor Deportivo & Entrenador de MMA / Wing Fight",
      company: "Autónomo",
      location: "Valencia",
      description: "Dirección de entrenamientos y clases deportivas para niños y adultos:",
      points: [
        "Desarrollo de alta disciplina, control emocional bajo presión, empatía y comunicación asertiva.",
        "Planificación personalizada de objetivos físicos y técnicos a medio y largo plazo."
      ]
    }
  ],

  education: [
    {
      degree: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
      institution: "Centro de Estudios Solvam & UCADEMY",
      year: "2024 — 2026",
      details: "Formación especializada en arquitectura de software, entornos cliente/servidor, bases de datos y despliegue de aplicaciones."
    },
    {
      degree: "Técnico Superior en Animación de Actividades Físicas y Deportivas (TAFAD)",
      institution: "IES Molí del Sol (Mislata, Valencia)",
      year: "2014 — 2016",
      details: "Metodología del entrenamiento, planificación de cargas físicas, anatomía funcional y dinámicas de grupo."
    },
    {
      degree: "Monitor Homologado de Wing Fight",
      institution: "Organización Wing Fight Gandía",
      year: "2016",
      details: "Certificación oficial para docencia técnica deportiva y artes marciales."
    }
  ]
};
