/**
 * PORTAFOLIO SERGIO PATÓN GARCÍA — LÓGICA DE INTERACCIÓN (VANILLA JAVASCRIPT)
 * Sin dependencias de Node.js ni librerías pesadas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHeroStats();
  initAiderTerminal();
  initProjectsFilter();
  renderSkills();
  initModal();
});

/* ==========================================================================
   1. NAVBAR & SCROLL BEHAVIOR
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
  }
}

/* ==========================================================================
   2. HERO METRICS
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
   3. AIDER CLI INTERACTIVE TERMINAL SIMULATION
   ========================================================================== */
const AIDER_SCENARIOS = {
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
};

function initAiderTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const actionButtons = document.querySelectorAll('.term-btn');
  if (!terminalBody) return;

  function loadScenario(scenarioKey) {
    terminalBody.innerHTML = AIDER_SCENARIOS[scenarioKey] || AIDER_SCENARIOS.architecture;
    actionButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.scenario === scenarioKey);
    });
  }

  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      loadScenario(btn.dataset.scenario);
    });
  });

  // Load initial scenario
  loadScenario('architecture');
}

/* ==========================================================================
   4. PROJECTS SHOWCASE & FILTERING
   ========================================================================== */
function initProjectsFilter() {
  const filterContainer = document.getElementById('filter-container');
  const projectsGrid = document.getElementById('projects-grid');
  if (!filterContainer || !projectsGrid) return;

  // Render Filter Buttons
  filterContainer.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
      <span>${cat.label}</span>
      <span class="filter-count">${cat.count}</span>
    </button>
  `).join('');

  // Initial Render of All Projects
  renderProjects('all');

  // Filter Click Handler
  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filterId) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

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
          <span>Detalles Técnicos →</span>
        </button>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   5. SKILLS & COMPETENCIES
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
   6. EXPERIENCE & EDUCATION TIMELINE
   ========================================================================== */
function renderExperienceAndEducation() {
  const expContainer = document.getElementById('experience-timeline');
  const eduContainer = document.getElementById('education-timeline');

  if (expContainer) {
    expContainer.innerHTML = PORTFOLIO_DATA.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period">${item.period}</div>
          <h4 class="timeline-role">${item.role}</h4>
          <div class="timeline-company">${item.company} • ${item.location}</div>
          <p style="font-size: 0.88rem; margin-bottom: 0.6rem;">${item.description}</p>
          <ul class="timeline-bullets">
            ${item.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period">${item.year}</div>
          <h4 class="timeline-role">${item.degree}</h4>
          <div class="timeline-company">${item.institution}</div>
          <p style="font-size: 0.88rem;">${item.details}</p>
        </div>
      </div>
    `).join('');
  }
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

/* ==========================================================================
   8. CONTACT ACTIONS & TOAST
   ========================================================================== */
function initContactActions() {
  const copyButtons = document.querySelectorAll('.btn-copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copiado al portapapeles: ${textToCopy}`);
        btn.textContent = '¡Copiado!';
        setTimeout(() => {
          btn.textContent = 'Copiar';
        }, 2000);
      }).catch(() => {
        showToast('Error al copiar');
      });
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('form-email').value;
      const name = document.getElementById('form-name').value;
      showToast(`¡Gracias ${name}! Tu mensaje ha sido registrado.`);
      contactForm.reset();
    });
  }
}

function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
