/**
 * Portafolio de Sergio Patón García
 * Datos estructurados bilingües (Español / English) de proyectos, tecnologías y trayectoria.
 */

const PORTFOLIO_DATA_ES = {
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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
      links: { demo: "#", github: "https://github.com", docs: "#" }
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

const PORTFOLIO_DATA_EN = {
  profile: {
    name: "Sergio Patón García",
    title: "Full Stack Developer & Software Engineer",
    subtitle: "Specialized in Asynchronous APIs, Clean Architecture & Applied AI",
    location: "Mislata, Valencia, Spain",
    email: "sergio.97pg@gmail.com",
    phone: "(+34) 648 00 22 98",
    linkedin: "https://www.linkedin.com/in/sergio-patón-garcía-b43706242",
    github: "https://github.com/SergioPaton",
    status: "Available for new opportunities",
    summary: "Full Stack Developer with official technical credentials in Web Application Development (DAW) and hands-on experience in enterprise, regulatory, and artificial intelligence software. Specialized in designing high-performance asynchronous APIs (FastAPI, Node.js, Spring Boot), rigorous implementation of Clean Architecture / DDD, LLM integration (Gemini, Meta Graph API), and fast terminal workflow with Aider (leveraging free OpenRouter models)."
  },

  metrics: [
    { value: "09", label: "AUDITED_PROJECTS", icon: "folder-check" },
    { value: "04", label: "ENTERPRISE_LEVEL", icon: "layers" },
    { value: "100%", label: "CLEAN_ARCHITECTURE", icon: "shield-check" },
    { value: "FREE", label: "AIDER_OPENROUTER", icon: "cpu" }
  ],

  categories: [
    { id: "all", label: "All", count: 9 },
    { id: "featured", label: "Featured", count: 5 },
    { id: "ai", label: "AI & Aider", count: 4 },
    { id: "backend", label: "Backend & APIs", count: 6 },
    { id: "desktop", label: "Legal & Desktop", count: 3 },
    { id: "sports", label: "Sports & Algorithms", count: 3 }
  ],

  projects: [
    {
      id: "fuerza-base",
      title: "Fuerza Base",
      badge: "Sports SaaS & High Performance",
      featured: true,
      categories: ["featured", "ai", "backend", "sports"],
      shortDesc: "End-to-end sports load prescription and adaptive regulation platform with strict clean architecture and rapid terminal development using Aider with free OpenRouter models.",
      fullDesc: "Fuerza Base is a SaaS platform engineered for coaches and athletes who require mathematical prescription and dynamic regulation of strength training. Built from day one using decoupled Clean Architecture across 4 concentric layers, guaranteeing complete framework independence within the core domain.",
      aiHighlight: "Iteratively built and refactored using Aider CLI connected to free models via OpenRouter. Aider served as an in-terminal architecture assistant to accelerate decoupled use case creation, Pydantic v2 schema generation, and pytest test coverage with zero API costs.",
      architecture: "Clean Architecture (Pure domain with dataclasses -> Use cases with ports/interfaces -> Infrastructure with SQLAlchemy -> HTTP adapters with FastAPI v1/v2).",
      tags: ["Python 3.11", "FastAPI", "Aider (OpenRouter Free)", "SQLAlchemy", "React 18", "TanStack Query", "Tailwind CSS", "Alembic", "Pydantic v2", "PyTest"],
      highlights: [
        "AI-assisted agile development using Aider CLI adhering to Conventional Commits.",
        "Pure domain free of external framework and ORM library dependencies.",
        "Automated prescription and dynamic adaptive load regulation based on athlete feedback.",
        "Reactive frontend with React 18, Vite, and TanStack Query v5 for seamless state synchronization."
      ],
      color: "#6366f1",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "verifactu-desktop",
      title: "VeriFactu Desktop",
      badge: "Enterprise & Legal Software (RD 1007/2023)",
      featured: true,
      categories: ["featured", "backend", "desktop"],
      shortDesc: "Cross-platform desktop application for issuing and cryptographically signing tamper-proof electronic invoices compliant with Spanish AEAT regulations.",
      fullDesc: "Engineered for Win o Win Consulting, this electronic invoicing system ensures strict compliance with Royal Decree 1007/2023. Implements continuous SHA-256 cryptographic hash chaining (blockchain-like chaining) to guarantee audit-proof immutability and record traceability for tax authorities.",
      architecture: "Decoupled Desktop-Server architecture: Electron main process + local Node.js/Express REST API with Prisma ORM and secure encrypted SQLite storage.",
      tags: ["Electron", "Node.js", "Express", "Prisma ORM", "SQLite", "SHA-256 Cryptography", "xml-crypto", "node-forge", "PDFKit", "Playwright E2E"],
      highlights: [
        "Continuous SHA-256 cryptographic hash chaining between consecutive invoices.",
        "Generation and digital signing of XML (Facturae / XAdES-EPES) via node-forge.",
        "Automated PDF invoice rendering with regulatory verification QR code.",
        "Exhaustive automated end-to-end test suite using Playwright."
      ],
      color: "#06b6d4",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "bot-ig-funnel",
      title: "Instagram Sales DM Funnel Engine",
      badge: "Intelligent Sales Agent & Meta API",
      featured: true,
      categories: ["featured", "ai", "backend"],
      shortDesc: "Customer acquisition and sales agent for Instagram Direct Messages (DMs) powered by Google Gemini SDK and a reactive web control panel.",
      fullDesc: "Commercial automation backend connecting the official Meta Graph API with cutting-edge LLMs (Google Gemini). The agent conducts contextual customer conversations, handles sales inquiries, qualifies leads, and guides prospects through the sales funnel automatically.",
      architecture: "Asynchronous FastAPI server connected to Meta Webhooks, with conversational processing queue and React 19 real-time monitoring dashboard.",
      tags: ["FastAPI", "Python", "Google Gemini SDK", "Meta Graph API", "React 19", "Tailwind CSS v4", "Webhooks", "Vite", "Pydantic"],
      highlights: [
        "Real-time natural language processing guided by contextual business prompts.",
        "Bidirectional integration with Instagram Direct Messages via Meta Graph API.",
        "Interactive dashboard to monitor conversations, conversion rates, and qualified leads.",
        "Robust rate limit management and automated retry policies."
      ],
      color: "#ec4899",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "api-geolocalizacion",
      title: "Geolocation & Geofencing API",
      badge: "GIS & High-Performance Microservice",
      featured: true,
      categories: ["featured", "backend"],
      shortDesc: "Asynchronous API for worker attendance tracking through real-time spatial GPS verification against perimeter geofences.",
      fullDesc: "Backend service developed to verify employee workday logs and physical on-site presence. Applies advanced spatial geofencing algorithms to mathematically verify whether incoming coordinates lie within designated operational perimeters.",
      architecture: "Asynchronous microservice built with FastAPI and PostgreSQL/PostGIS using GeoAlchemy2 and Shapely, optimized with a Redis caching and rate-limiting layer.",
      tags: ["FastAPI", "PostgreSQL", "GeoAlchemy2", "Shapely (GIS)", "Redis", "Firebase Admin", "ReportLab", "PyTest"],
      highlights: [
        "Spatial containment queries and polygon distance computations with GeoAlchemy2 and Shapely.",
        "Asynchronous caching and abuse protection powered by Redis.",
        "Automated push notifications via Firebase Admin SDK.",
        "Time audit reporting engine and complete PyTest automated test suite."
      ],
      color: "#10b981",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "running-tracker",
      title: "Running Tracker — Athletic Periodization",
      badge: "Hexagonal Architecture & CQRS Lite",
      featured: true,
      categories: ["featured", "backend", "sports"],
      shortDesc: "Comprehensive web application for runners featuring an algorithmic athletic periodization engine (4 to 24 weeks) based on lactate threshold and resting heart rate.",
      fullDesc: "DAW intermodular flagship project. Implements a mathematical engine capable of computing training zones (Z1 to Z5) and synthesizing comprehensive training macrocycles, mesocycles, and microcycles based on the target race date.",
      architecture: "Pure Clean Hexagonal Architecture in Node.js/Express with CQRS Lite (command/query separation) and modular persistence.",
      tags: ["Node.js", "Express v5", "Vanilla JS ES6+", "Semantic HTML5", "Native CSS3", "Hexagonal Architecture", "CQRS Lite", "Jest"],
      highlights: [
        "Custom algorithmic engine for pace calculation and tailored athletic periodization.",
        "Strict hexagonal architecture with complete database independence.",
        "Lightweight, dependency-free client dashboard optimized with Vite.",
        "Unit test coverage with Jest ensuring mathematical precision in athletic calculations."
      ],
      color: "#f59e0b",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "cocina-paton",
      title: "Cocina Patón — Zero-Waste AI Chef",
      badge: "Generative AI & HTMX",
      featured: false,
      categories: ["ai", "backend"],
      shortDesc: "Personal digital chef generating creative, real-time recipes exclusively based on ingredients available in the user's pantry.",
      fullDesc: "Web application targeting food waste reduction. Analyzes ingredients in the user's pantry, allergens, and available cooking time, prompting Google Gemini for viable culinary proposals with strictly typed JSON schemas.",
      architecture: "Lightweight modular monolith with FastAPI, Jinja2, HTMX, and Alpine.js providing a reactive SPA-like user experience without heavy JS framework overhead.",
      tags: ["FastAPI", "Google Gemini SDK", "Jinja2", "HTMX", "Alpine.js", "Tailwind CSS", "SQLite", "Alembic"],
      highlights: [
        "AI responses enforced with strict JSON schemas for dependable rendering.",
        "Hyper-reactive frontend without heavy JavaScript via HTMX + Alpine.js.",
        "Feedback loop that learns and remembers user culinary preferences.",
        "Direct positive impact on household grocery savings and food waste minimization."
      ],
      color: "#8b5cf6",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "fantasy-manager",
      title: "Fantasy Manager Desktop",
      badge: "Computer Vision & Sports Analytics",
      featured: false,
      categories: ["ai", "desktop", "sports"],
      shortDesc: "Python desktop application for financial and performance management of LaLiga Fantasy / Biwenger teams featuring optical OCR extraction.",
      fullDesc: "Desktop tool replacing manual spreadsheets. Features a drag-and-drop zone to drop lineup and score screenshots, automatically extracting data using OpenCV and Tesseract OCR.",
      architecture: "Native MVC desktop application in Python 3.10+ with modern CustomTkinter GUI, vision pipeline, and embedded SQLite database.",
      tags: ["Python", "CustomTkinter (GUI)", "OpenCV", "Tesseract OCR", "Pandas", "NumPy", "SQLite", "Matplotlib"],
      highlights: [
        "Image preprocessing and binarization with OpenCV for reliable OCR extraction.",
        "Vectorized financial metric computations (ROI, cost per point, net profit).",
        "Embedded graphical visualization of market value trends.",
        "100% local, offline execution without external server dependencies."
      ],
      color: "#14b8a6",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "md2pdf-cli",
      title: "MD2PDF Premium",
      badge: "CLI Tool & Editorial Automation",
      featured: false,
      categories: ["desktop"],
      shortDesc: "Ultra-fast command-line converter transforming Markdown documents into high-quality, publication-ready vector PDFs.",
      fullDesc: "Automation utility engineered to format resumes, technical briefs, and formal documentation with refined typography (Inter), syntax highlighting, and injectable custom CSS stylesheets.",
      architecture: "Global Node.js CLI package orchestrating a headless browser (Google Chrome or Microsoft Edge) to render semantic HTML into pristine vector PDFs.",
      tags: ["Node.js", "CLI", "Headless Chrome", "Editorial CSS3", "Markdown Parser", "npm link"],
      highlights: [
        "Automatic detection of locally installed Windows browsers without Puppeteer bloat.",
        "Layered design system: semantic markup + base typography + custom CSS overrides.",
        "Reusable global CLI installation across system projects via npm link.",
        "Lossless vector output optimized for high-resolution professional printing."
      ],
      color: "#3b82f6",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    },
    {
      id: "websolutions-seo",
      title: "WebSolutions — High-Performance & SEO SPA",
      badge: "Vanilla Web & Accessibility",
      featured: false,
      categories: ["backend"],
      shortDesc: "Native web architecture showcase featuring a custom Vanilla JS SPA router, strict WAI-ARIA accessibility, and comprehensive on-page SEO.",
      fullDesc: "Mastery showcase of modern web standards with zero external dependencies (`zero node_modules`). Includes dynamic meta tags, full Open Graph and Twitter Card protocols, and a blazing-fast router achieving perfect lighthouse scores.",
      architecture: "Pure web standards architecture: semantic HTML5, Vanilla CSS with custom properties, and modern ES6+ JavaScript.",
      tags: ["Semantic HTML5", "Vanilla CSS3", "JavaScript ES6+", "Native SPA Router", "On-Page SEO", "WAI-ARIA"],
      highlights: [
        "Zero dependencies and instant load performance.",
        "Client-side SPA router dynamically updating document titles and meta tags.",
        "Comprehensive WAI-ARIA accessibility compatible with screen readers.",
        "Fluid, 100% responsive layout powered by CSS Grid and Flexbox."
      ],
      color: "#f97316",
      links: { demo: "#", github: "https://github.com", docs: "#" }
    }
  ],

  skillsGroup: [
    {
      category: "Backend & Architecture",
      icon: "server",
      skills: [
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "Node.js (Express & Fastify)", level: "Advanced" },
        { name: "Java (Spring Boot / JPA)", level: "Upper-Intermediate" },
        { name: "Clean Architecture & DDD", level: "Advanced" },
        { name: "CQRS Lite & Hexagonal", level: "Advanced" },
        { name: "Validation (Pydantic v2 / Zod)", level: "Advanced" }
      ]
    },
    {
      category: "Artificial Intelligence & GIS",
      icon: "bot",
      skills: [
        { name: "Aider CLI (OpenRouter Free Models)", level: "Advanced" },
        { name: "Google Gemini SDK (Structured JSON)", level: "Advanced" },
        { name: "Meta Graph API (Instagram DMs)", level: "Advanced" },
        { name: "Spatial GIS (GeoAlchemy2 / Shapely)", level: "Advanced" },
        { name: "Computer Vision & OCR (OpenCV / Tesseract)", level: "Intermediate" },
        { name: "Workflow Automation (n8n)", level: "Upper-Intermediate" }
      ]
    },
    {
      category: "Databases & Persistence",
      icon: "database",
      skills: [
        { name: "PostgreSQL & PostGIS", level: "Advanced" },
        { name: "MySQL / MariaDB", level: "Advanced" },
        { name: "SQLite (Local & Desktop DBs)", level: "Advanced" },
        { name: "Redis (Caching & Rate Limiting)", level: "Upper-Intermediate" },
        { name: "Prisma ORM (v5 & v6)", level: "Advanced" },
        { name: "SQLAlchemy Async & Alembic", level: "Advanced" }
      ]
    },
    {
      category: "Cryptography, Legal & Desktop",
      icon: "shield",
      skills: [
        { name: "VeriFactu Compliance (RD 1007/2023)", level: "Specialist" },
        { name: "SHA-256 Hash Chaining", level: "Advanced" },
        { name: "XAdES-EPES Digital Signatures", level: "Advanced" },
        { name: "Electron & Electron-Builder", level: "Advanced" },
        { name: "CustomTkinter (GUI Python)", level: "Advanced" },
        { name: "E2E Testing with Playwright", level: "Advanced" }
      ]
    },
    {
      category: "Frontend & Web Design",
      icon: "layout",
      skills: [
        { name: "React 18 / 19 & TanStack Query", level: "Advanced" },
        { name: "Tailwind CSS v3 & v4", level: "Advanced" },
        { name: "Vanilla JS ES6+ & TypeScript", level: "Advanced" },
        { name: "Semantic HTML5 & Advanced CSS3", level: "Expert" },
        { name: "HTMX & Alpine.js", level: "Advanced" },
        { name: "Bundlers (Vite)", level: "Advanced" }
      ]
    },
    {
      category: "Testing, DevOps & Core Competencies",
      icon: "terminal",
      skills: [
        { name: "PyTest (Async Testing)", level: "Advanced" },
        { name: "Jest & Supertest (Node.js)", level: "Advanced" },
        { name: "Git & Conventional Commits", level: "Advanced" },
        { name: "Discipline & High-Pressure Execution", level: "Key Strength" },
        { name: "Leadership & Team Management", level: "Key Strength" },
        { name: "Technical English (B1 Fluent)", level: "Proficient" }
      ]
    }
  ],

  experience: [
    {
      period: "March 2026 — July 2026",
      role: "Full Stack Developer (Internship - 500h)",
      company: "Win o Win Consulting",
      location: "Valencia, Spain",
      description: "Technical leadership in developing mission-critical enterprise software solutions:",
      points: [
        "Development of the certified VeriFactu desktop application using Electron, Prisma, and SQLite, ensuring immutability through SHA-256 hash chaining and XAdES-EPES digital signatures.",
        "Implementation of the Instagram sales automation bot with FastAPI, Google Gemini SDK, and Meta Graph API.",
        "Design of the asynchronous geolocation and perimeter geofencing API with GeoAlchemy2, Shapely, and Redis.",
        "Interface and end-to-end workflow test automation with Playwright and PyTest."
      ]
    },
    {
      period: "October 2023 — October 2024",
      role: "Operations Manager & Front Desk",
      company: "Pádel A3",
      location: "Quart de Poblet, Valencia",
      description: "Customer experience management, operational facility coordination, and client retention:",
      points: [
        "Administration of technical equipment pro shop, café area, and financial reconciliations.",
        "Algorithmic scheduling and balanced ranking matchmaking in regional sports tournaments.",
        "Corporate social media management (Instagram) for brand engagement and sponsor acquisition."
      ]
    },
    {
      period: "January 2016 — January 2019",
      role: "Sports Instructor & MMA / Wing Fight Coach",
      company: "Self-Employed",
      location: "Valencia",
      description: "Led coaching sessions and technical athletic training for children and adults:",
      points: [
        "Cultivated rigorous discipline, high-pressure emotional control, active empathy, and assertive communication.",
        "Custom mid-term and long-term athletic and technical development roadmaps."
      ]
    }
  ],

  education: [
    {
      degree: "Higher Technical Degree in Web Application Development (DAW)",
      institution: "Centro de Estudios Solvam & UCADEMY",
      year: "2024 — 2026",
      details: "Specialized training in software architecture, client/server environments, relational/non-relational databases, and production deployments."
    },
    {
      degree: "Higher Technical Degree in Physical Activities and Sports Animation (TAFAD)",
      institution: "IES Molí del Sol (Mislata, Valencia)",
      year: "2014 — 2016",
      details: "Training methodology, athletic load planning, functional anatomy, and group dynamics."
    },
    {
      degree: "Certified Wing Fight Instructor",
      institution: "Organización Wing Fight Gandía",
      year: "2016",
      details: "Official coaching certification for sports pedagogy, self-defense, and martial arts."
    }
  ]
};

// Default portfolio data pointer (will be set according to active language)
let PORTFOLIO_DATA = PORTFOLIO_DATA_ES;

// Interface Translations Dictionary
const I18N_UI = {
  es: {
    metaTitle: "Sergio Patón García — Software Engineer & Applied Architectures",
    metaDescription: "Portafolio profesional de Sergio Patón García. Desarrollador Full Stack especializado en APIs asíncronas de alto rendimiento (FastAPI, Node.js, Spring Boot), Clean Architecture, desarrollo asistido por IA (Aider CLI con modelos gratuitos de OpenRouter) y cumplimiento normativo (VeriFactu).",
    navHome: "Inicio",
    navAider: "Aider & IA",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navCv: "CV.pdf ↓",
    brandRole: "Software Engineer",
    heroStatus: "SYS_STATUS: OPERATIONAL // FULL_STACK_ENGINEER",
    heroTitle: "Arquitectura Limpia & Software de Alto Rendimiento.",
    heroSubtitle: "Hola, soy <strong>Sergio Patón García</strong>. Especializado en APIs asíncronas (<strong>FastAPI, Node.js, Spring Boot</strong>), Clean Architecture e ingeniería asistida por IA con <strong>Aider CLI &amp; OpenRouter</strong>.",
    heroDescription: "Formación técnica oficial en <strong>Desarrollo de Aplicaciones Web (DAW)</strong> con experiencia práctica en software de cumplimiento normativo (<strong>VeriFactu</strong>), geoprocesamiento espacial (<strong>GIS</strong>) y agentes autónomos de Inteligencia Artificial.",
    heroBtnProjects: "Explorar Proyectos →",
    heroBtnAider: "Ver Flujo Aider & IA",
    heroBtnCv: "CV.pdf ↓",
    profileStatus: "DISPONIBLE_PARA_RETOS",
    profileQuote: "\"Ingeniería de software con Clean Architecture desacoplada, tipado estricto y aceleración en terminal con Aider.\"",
    aiderTag: "// 01_METODOLOGÍA_AI_FIRST",
    aiderTitle: "Desarrollo Acelerado con Aider & OpenRouter",
    aiderSubtitle: "En el proyecto <strong>Fuerza Base</strong>, integro <strong>Aider CLI</strong> directamente en terminal conectado a modelos gratuitos de <strong>OpenRouter</strong>. Esto permite aplicar Clean Architecture estricta y tests automatizados con máxima velocidad y cero costes de API.",
    aiderTabArch: "clean_architecture.py",
    aiderTabTest: "test_suite.py",
    aiderTabCommit: "git_commit.sh",
    benefit1Num: "// 01 ARQUITECTURA",
    benefit1Title: "Dominio Puro & Desacoplado",
    benefit1Desc: "Aider respeta la regla de dependencia de Clean Architecture: el dominio permanece 100% aislado de frameworks y base de datos.",
    benefit2Num: "// 02 EFICIENCIA",
    benefit2Title: "Velocidad x3 con Rigor",
    benefit2Desc: "Inferencia rápida con modelos gratuitos a través de OpenRouter para generar esquemas Pydantic v2 y puertos abstractos sin coste de API.",
    benefit3Num: "// 03 VERIFICACIÓN",
    benefit3Title: "Testing & Cobertura",
    benefit3Desc: "Bucle de retroalimentación inmediata: los tests asíncronos en PyTest y Playwright validan cada componente antes de cualquier commit.",
    projectsTag: "// 02_PORTFOLIO_ENGINEERING",
    projectsTitle: "Proyectos Destacados de Ingeniería",
    projectsSubtitle: "Sistemas analizados y construidos: desde facturación criptográfica homologada (VeriFactu) hasta microservicios espaciales GIS y SaaS deportivos.",
    projectBtnDetails: "Detalles Técnicos →",
    skillsTag: "// 03_TECHNICAL_STACK",
    skillsTitle: "Competencias y Especialidades",
    skillsSubtitle: "Inventario técnico consolidado en formación reglada DAW y entornos empresariales de producción.",
    modalSpec: "// PROJECT_SPEC",
    modalClose: "ESC ✕",
    modalSec1: "// 01_DESCRIPCION_TECNICA",
    modalSec2: "// 02_INTEGRACION_AIDER_OPENROUTER",
    modalSec3: "// 03_ARQUITECTURA_Y_PATRONES",
    modalSec4: "// 04_LOGROS_CLAVE",
    modalSec5: "// 05_STACK_TECNOLOGICO",
    footerStatus: "SYS_STATUS: ALL SYSTEMS NOMINAL — © 2026 SERGIO PATÓN GARCÍA",
    footerHome: "↑ INICIO",
    footerCv: "CV.PDF ↓",
    cvFile: "CV_Sergio_Paton.pdf"
  },
  en: {
    metaTitle: "Sergio Patón García — Software Engineer & Applied Architectures",
    metaDescription: "Professional portfolio of Sergio Patón García. Full Stack Developer specialized in high-performance asynchronous APIs (FastAPI, Node.js, Spring Boot), Clean Architecture, AI-assisted development (Aider CLI with free OpenRouter models), and regulatory compliance (VeriFactu).",
    navHome: "Home",
    navAider: "Aider & AI",
    navProjects: "Projects",
    navSkills: "Skills",
    navCv: "CV.pdf ↓",
    brandRole: "Software Engineer",
    heroStatus: "SYS_STATUS: OPERATIONAL // FULL_STACK_ENGINEER",
    heroTitle: "Clean Architecture & High-Performance Software.",
    heroSubtitle: "Hi, I'm <strong>Sergio Patón García</strong>. Specialized in asynchronous APIs (<strong>FastAPI, Node.js, Spring Boot</strong>), Clean Architecture, and AI-assisted engineering with <strong>Aider CLI &amp; OpenRouter</strong>.",
    heroDescription: "Official technical degree in <strong>Web Application Development (DAW)</strong> with hands-on experience in regulatory compliance software (<strong>VeriFactu</strong>), spatial geoprocessing (<strong>GIS</strong>), and autonomous AI agents.",
    heroBtnProjects: "Explore Projects →",
    heroBtnAider: "View Aider & AI Flow",
    heroBtnCv: "CV.pdf ↓",
    profileStatus: "OPEN_TO_OPPORTUNITIES",
    profileQuote: "\"Software engineering with decoupled Clean Architecture, strict typing, and terminal acceleration with Aider.\"",
    aiderTag: "// 01_AI_FIRST_METHODOLOGY",
    aiderTitle: "Accelerated Development with Aider & OpenRouter",
    aiderSubtitle: "In the <strong>Fuerza Base</strong> project, I integrate <strong>Aider CLI</strong> directly in the terminal connected to free <strong>OpenRouter</strong> models. This enables strict Clean Architecture and automated testing with maximum speed and zero API costs.",
    aiderTabArch: "clean_architecture.py",
    aiderTabTest: "test_suite.py",
    aiderTabCommit: "git_commit.sh",
    benefit1Num: "// 01 ARCHITECTURE",
    benefit1Title: "Pure & Decoupled Domain",
    benefit1Desc: "Aider adheres to Clean Architecture dependency rules: the domain remains 100% isolated from frameworks and databases.",
    benefit2Num: "// 02 EFFICIENCY",
    benefit2Title: "3x Velocity with Rigor",
    benefit2Desc: "Fast inference with free models via OpenRouter to generate Pydantic v2 schemas and abstract ports without API costs.",
    benefit3Num: "// 03 VERIFICATION",
    benefit3Title: "Testing & Coverage",
    benefit3Desc: "Immediate feedback loop: asynchronous PyTest and Playwright tests validate every component prior to any commit.",
    projectsTag: "// 02_PORTFOLIO_ENGINEERING",
    projectsTitle: "Featured Engineering Projects",
    projectsSubtitle: "Systems designed and built: from certified cryptographic invoicing (VeriFactu) to GIS spatial microservices and athletic SaaS platforms.",
    projectBtnDetails: "Technical Details →",
    skillsTag: "// 03_TECHNICAL_STACK",
    skillsTitle: "Skills & Technical Stack",
    skillsSubtitle: "Consolidated technical skill set from official DAW education and enterprise production environments.",
    modalSpec: "// PROJECT_SPEC",
    modalClose: "ESC ✕",
    modalSec1: "// 01_TECHNICAL_DESCRIPTION",
    modalSec2: "// 02_AIDER_OPENROUTER_INTEGRATION",
    modalSec3: "// 03_ARCHITECTURE_AND_PATTERNS",
    modalSec4: "// 04_KEY_ACHIEVEMENTS",
    modalSec5: "// 05_TECH_STACK",
    footerStatus: "SYS_STATUS: ALL SYSTEMS NOMINAL — © 2026 SERGIO PATÓN GARCÍA",
    footerHome: "↑ HOME",
    footerCv: "CV.PDF ↓",
    cvFile: "english_CV.pdf"
  }
};
