/**
 * PORTAFOLIO SERGIO PATÓN GARCÍA — LÓGICA DE INTERACCIÓN & INTERNACIONALIZACIÓN
 * Vanilla JavaScript puro, sin dependencias externas.
 */

let currentLang = 'es';
let currentCategory = 'all';
let currentTerminalScenario = 'architecture';

document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language or default to 'es'
  const savedLang = localStorage.getItem('portfolio_lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    currentLang = savedLang;
  }

  initLanguageSwitcher();
  initNavbar();
  setLanguage(currentLang);
  initAiderTerminal();
  initProjectsFilter();
  initModal();
});

/* ==========================================================================
   1. LANGUAGE SWITCHER & INTERNATIONALIZATION (I18N)
   ========================================================================== */
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-toggle-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update active data source
  PORTFOLIO_DATA = (lang === 'en') ? PORTFOLIO_DATA_EN : PORTFOLIO_DATA_ES;
  const texts = I18N_UI[lang] || I18N_UI.es;

  // Update active states on switcher buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update document title and meta description
  if (texts.metaTitle) document.title = texts.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && texts.metaDescription) {
    metaDesc.setAttribute('content', texts.metaDescription);
  }

  // Update static UI elements marked with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });

  // Update static UI elements marked with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (texts[key]) {
      el.innerHTML = texts[key];
    }
  });

  // Update CV download links and filenames
  const cvFile = texts.cvFile || ((lang === 'en') ? 'english_CV.pdf' : 'CV_Sergio_Paton.pdf');
  document.querySelectorAll('.cv-download-link, a[download]').forEach(link => {
    link.setAttribute('href', cvFile);
    link.setAttribute('download', cvFile);
    if (lang === 'en') {
      link.setAttribute('title', 'Download Resume (english_CV.pdf)');
    } else {
      link.setAttribute('title', 'Descargar Currículum (CV_Sergio_Paton.pdf)');
    }
  });

  // Re-render dynamic sections
  renderHeroStats();
  renderTerminalScenario(currentTerminalScenario);
  renderFilterButtons();
  renderProjects(currentCategory);
  renderSkills();

  // If modal is currently open, refresh its content
  const modal = document.getElementById('project-modal');
  if (modal && modal.classList.contains('active') && window.activeProjectId) {
    window.openProjectModal(window.activeProjectId);
  }
}

/* ==========================================================================
   2. NAVBAR & SCROLL BEHAVIOR
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.background = 'rgba(7, 9, 14, 0.98)';
      navMenu.style.padding = '1.5rem';
      navMenu.style.borderBottom = '1px solid var(--border-subtle)';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   3. HERO METRICS
   ========================================================================== */
function renderHeroStats() {
  const statsContainer = document.getElementById('hero-stats-row');
  if (!statsContainer) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.metrics.map(metric => `
    <div class="stat-item">
      <div class="stat-value">${metric.value}</div>
      <div class="stat-label">${metric.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. AIDER CLI INTERACTIVE TERMINAL SIMULATION
   ========================================================================== */
const AIDER_SCENARIOS = {
  es: {
    architecture: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --model openrouter/deepseek/deepseek-chat:free --architect</span></div>
<div class="term-line"><span class="term-comment">Aider v0.72.0 | Proveedor: OpenRouter (Free Models) | Repositorio git: ✓</span></div>
<div class="term-line"><span class="term-comment">Modo arquitecto activado. Sugerencias guiadas por Clean Architecture en 4 capas.</span></div>
<div class="term-line">&gt; <span class="term-highlight">Refactorizar caso de uso CreateUserUseCase desacoplándolo de FastAPI y aislando UserRepository en domain/</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-file">Editando app/domain/entities/user.py...</span></div>
<div class="term-line"><span class="term-file">Editando app/use_cases/user/interfaces.py (AbstractUserRepository)...</span></div>
<div class="term-line"><span class="term-file">Editando app/infrastructure/db/repositories/user_repo.py...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">✓ Clean Architecture respetada:</span></div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• domain/</span> -> 0 dependencias externas (dataclasses puras)</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• use_cases/</span> -> Puerto AbstractUserRepository definido</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• infrastructure/</span> -> SQLAlchemyUserRepository implementa puerto</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• api/v1/router.py</span> -> Inyección de dependencias limpia</div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`,
    testing: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --message "/test pytest backend/tests -v"</span></div>
<div class="term-line"><span class="term-comment">Ejecutando suite de pruebas automatizadas en backend/tests...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line">backend/tests/test_users.py::test_create_user_success <span class="term-success">PASSED [ 25%]</span></div>
<div class="term-line">backend/tests/test_users.py::test_duplicate_email_fails <span class="term-success">PASSED [ 50%]</span></div>
<div class="term-line">backend/tests/test_regulation.py::test_adaptive_load_service <span class="term-success">PASSED [ 75%]</span></div>
<div class="term-line">backend/tests/test_plans.py::test_prescription_matrix <span class="term-success">PASSED [100%]</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">============================== 4 passed in 0.42s ==============================</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/winowin/facturación$</span> <span class="term-cmd">npx playwright test tests/e2e</span></div>
<div class="term-line"><span class="term-comment">Running 6 tests using 2 workers</span></div>
<div class="term-line">[chromium] › e2e/verifactu-hash.spec.js:14:1 › SHA-256 hash chaining validation <span class="term-success">✓ passed (1.2s)</span></div>
<div class="term-line">[chromium] › e2e/xml-signature.spec.js:22:1 › XAdES-EPES cryptographic signature <span class="term-success">✓ passed (890ms)</span></div>
<div class="term-line"><span class="term-success">6 passed (2.3s)</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`,
    commit: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --commit</span></div>
<div class="term-line"><span class="term-comment">Generando commit estructurado siguiendo Conventional Commits...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-file">Modificados:</span></div>
<div class="term-line">&nbsp;&nbsp;M backend/app/services/adaptive_regulation_service.py</div>
<div class="term-line">&nbsp;&nbsp;M backend/app/schemas/regulation_log.py</div>
<div class="term-line">&nbsp;&nbsp;A backend/tests/test_regulation.py</div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">[main d3a9b12] feat(regulation): implement adaptive load regulation engine with rule validator</span></div>
<div class="term-line">&nbsp;3 files changed, 142 insertions(+), 8 deletions(-)</div>
<div class="term-line">&nbsp;create mode 100644 backend/tests/test_regulation.py</div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-comment">Commit realizado con éxito y firmado. Árbol de trabajo limpio.</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`
  },
  en: {
    architecture: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --model openrouter/deepseek/deepseek-chat:free --architect</span></div>
<div class="term-line"><span class="term-comment">Aider v0.72.0 | Provider: OpenRouter (Free Models) | Git repo: ✓</span></div>
<div class="term-line"><span class="term-comment">Architect mode enabled. Suggestions guided by 4-layer Clean Architecture.</span></div>
<div class="term-line">&gt; <span class="term-highlight">Refactor CreateUserUseCase decoupling from FastAPI and isolating UserRepository in domain/</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-file">Editing app/domain/entities/user.py...</span></div>
<div class="term-line"><span class="term-file">Editing app/use_cases/user/interfaces.py (AbstractUserRepository)...</span></div>
<div class="term-line"><span class="term-file">Editing app/infrastructure/db/repositories/user_repo.py...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">✓ Clean Architecture preserved:</span></div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• domain/</span> -> 0 external dependencies (pure dataclasses)</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• use_cases/</span> -> AbstractUserRepository port defined</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• infrastructure/</span> -> SQLAlchemyUserRepository implements port</div>
<div class="term-line">&nbsp;&nbsp;<span class="term-comment">• api/v1/router.py</span> -> Clean dependency injection</div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`,
    testing: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --message "/test pytest backend/tests -v"</span></div>
<div class="term-line"><span class="term-comment">Running automated test suite in backend/tests...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line">backend/tests/test_users.py::test_create_user_success <span class="term-success">PASSED [ 25%]</span></div>
<div class="term-line">backend/tests/test_users.py::test_duplicate_email_fails <span class="term-success">PASSED [ 50%]</span></div>
<div class="term-line">backend/tests/test_regulation.py::test_adaptive_load_service <span class="term-success">PASSED [ 75%]</span></div>
<div class="term-line">backend/tests/test_plans.py::test_prescription_matrix <span class="term-success">PASSED [100%]</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">============================== 4 passed in 0.42s ==============================</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/winowin/facturación$</span> <span class="term-cmd">npx playwright test tests/e2e</span></div>
<div class="term-line"><span class="term-comment">Running 6 tests using 2 workers</span></div>
<div class="term-line">[chromium] › e2e/verifactu-hash.spec.js:14:1 › SHA-256 hash chaining validation <span class="term-success">✓ passed (1.2s)</span></div>
<div class="term-line">[chromium] › e2e/xml-signature.spec.js:22:1 › XAdES-EPES cryptographic signature <span class="term-success">✓ passed (890ms)</span></div>
<div class="term-line"><span class="term-success">6 passed (2.3s)</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`,
    commit: `
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">aider --commit</span></div>
<div class="term-line"><span class="term-comment">Generating structured commit adhering to Conventional Commits...</span></div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-file">Modified:</span></div>
<div class="term-line">&nbsp;&nbsp;M backend/app/services/adaptive_regulation_service.py</div>
<div class="term-line">&nbsp;&nbsp;M backend/app/schemas/regulation_log.py</div>
<div class="term-line">&nbsp;&nbsp;A backend/tests/test_regulation.py</div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-success">[main d3a9b12] feat(regulation): implement adaptive load regulation engine with rule validator</span></div>
<div class="term-line">&nbsp;3 files changed, 142 insertions(+), 8 deletions(-)</div>
<div class="term-line">&nbsp;create mode 100644 backend/tests/test_regulation.py</div>
<div class="term-line">&nbsp;</div>
<div class="term-line"><span class="term-comment">Commit created and signed successfully. Working tree clean.</span></div>
<div class="term-line"><span class="term-prompt">sergio@dev-box:~/spg/fuerzabase$</span> <span class="term-cmd">_</span>
`
  }
};

function renderTerminalScenario(scenarioKey) {
  const terminalBody = document.getElementById('terminal-body');
  const actionButtons = document.querySelectorAll('.term-btn');
  if (!terminalBody) return;

  currentTerminalScenario = scenarioKey;
  const langScenarios = AIDER_SCENARIOS[currentLang] || AIDER_SCENARIOS.es;
  terminalBody.innerHTML = langScenarios[scenarioKey] || langScenarios.architecture;

  actionButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.scenario === scenarioKey);
  });
}

function initAiderTerminal() {
  const actionButtons = document.querySelectorAll('.term-btn');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderTerminalScenario(btn.dataset.scenario);
    });
  });

  renderTerminalScenario('architecture');
}

/* ==========================================================================
   5. PROJECTS SHOWCASE & FILTERING
   ========================================================================== */
function renderFilterButtons() {
  const filterContainer = document.getElementById('filter-container');
  if (!filterContainer) return;

  filterContainer.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button class="filter-btn ${cat.id === currentCategory ? 'active' : ''}" data-filter="${cat.id}">
      <span>${cat.label}</span>
      <span class="filter-count">${cat.count}</span>
    </button>
  `).join('');

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      renderProjects(currentCategory);
    });
  });
}

function initProjectsFilter() {
  renderFilterButtons();
  renderProjects(currentCategory);
}

function renderProjects(filterId) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  const btnDetailsText = (I18N_UI[currentLang] && I18N_UI[currentLang].projectBtnDetails) 
    ? I18N_UI[currentLang].projectBtnDetails 
    : 'Detalles Técnicos →';

  const filtered = PORTFOLIO_DATA.projects.filter(project => {
    if (filterId === 'all') return true;
    return project.categories.includes(filterId);
  });

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="project-card">
      <div>
        <div class="project-card-header">
          <span class="project-badge">${project.badge}</span>
        </div>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.shortDesc}</p>
        <div class="project-card-tags">
          ${project.tags.slice(0, 5).map(t => `<span class="project-tag">${t}</span>`).join('')}
          ${project.tags.length > 5 ? `<span class="project-tag">+${project.tags.length - 5}</span>` : ''}
        </div>
      </div>
      <div class="project-card-footer">
        <button class="btn-details" onclick="openProjectModal('${project.id}')">
          <span>${btnDetailsText}</span>
        </button>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   6. SKILLS & COMPETENCIES
   ========================================================================== */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-grid');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = PORTFOLIO_DATA.skillsGroup.map((group, idx) => `
    <div class="skill-category-card">
      <div class="skill-cat-header">
        <h3 class="skill-cat-title">${group.category}</h3>
        <span class="skill-cat-num">// 0${idx + 1}</span>
      </div>
      <div class="skill-list">
        ${group.skills.map(skill => `
          <div class="skill-item">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level-badge">${skill.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. PROJECT DETAILS MODAL
   ========================================================================== */
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    window.activeProjectId = null;
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProjectModal = function(projectId) {
    window.activeProjectId = projectId;
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-badge').textContent = project.badge;
    document.getElementById('modal-desc').textContent = project.fullDesc;
    document.getElementById('modal-arch').textContent = project.architecture;

    // AI Highlight if present
    const aiSection = document.getElementById('modal-ai-highlight');
    if (project.aiHighlight) {
      aiSection.style.display = 'block';
      document.getElementById('modal-ai-desc').textContent = project.aiHighlight;
    } else {
      aiSection.style.display = 'none';
    }

    // Highlights List
    const highlightsList = document.getElementById('modal-highlights');
    highlightsList.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tech-pill">${t}</span>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}
