/* =========================================================
   Data
   ========================================================= */
const CARDS = [
  {
    id: 'mercury', cat: 'Engineering', areas: ['Frontend', 'AI/ML'], title: 'Support Copilot, built from scratch', org: 'Mercury · 2026',
    kind: 'stat', bg: '#E9EAF0', fg: '#141414', kicker: 'Copilot · Command', big: '450K+', sub: 'customers served by the support tools',
    summary: 'A new Copilot interface for Mercury’s customer support team, designed and built from scratch to bring AI-powered workflows into support and modernize legacy Zendesk functionality.',
    points: [
      'Designed and built the Copilot interface from scratch in React and TypeScript, working with engineers on AI-powered support workflows',
      'Modernized legacy Zendesk functionality supporting Mercury’s 450K+ customers',
      'Built AI-powered shortcut recommendations in Command so agents reach the right support action faster',
      'Engineered and optimized customer-facing UI components, debugging frontend issues to improve reliability and consistency'
    ],
    stack: ['React', 'TypeScript', 'AI workflows', 'Zendesk'],
    url: 'https://mercury.com/command', linkLabel: 'About Command'
  },
  {
    id: 'datadog', cat: 'Engineering', areas: ['Full-stack'], title: 'ROI analytics for AI agents', org: 'Datadog · 2026',
    kind: 'stat', bg: '#141414', fg: '#FAFAF8', kicker: 'Agent Console', big: '8K+', sub: 'metrics a day, event-driven',
    summary: 'A full-stack ROI feature in Datadog’s Agent Console that turns Jira and GitHub activity into productivity analytics for engineering AI agents.',
    points: [
      'Go microservice ingesting Jira webhooks through Kafka consumers, generating 8K+ daily metrics',
      'Modular React dashboards built from reusable components',
      'Kubernetes + gRPC services in production; user fetching 18% faster',
      'Helped ship the Agent Console demo for the DASH keynote'
    ],
    stack: ['Go', 'React', 'Kafka', 'Kubernetes', 'gRPC', 'PostgreSQL'],
    url: 'https://docs.datadoghq.com/ai_agents_console/', linkLabel: 'About Agent Console'
  },
  {
    id: 'kdd', cat: 'Research', areas: ['AI/ML'], title: 'Time-series transformers for battery life', org: 'KDD MILETS ’26',
    kind: 'stat', bg: '#ECECE7', fg: '#141414', kicker: 'Published paper', big: '99%', sub: 'improvement over the ridge baseline',
    summary: 'Forecasting the remaining useful life of lithium-ion batteries with transformer-based time-series models and meta-learning, at the Stony Brook AI Innovation Institute.',
    points: [
      'Transformer-based model for forecasting and anomaly detection',
      'Meta-learning applied to foundation time-series models',
      '99% better than ridge regression, 88% better than the foundation-model baseline'
    ],
    stack: ['Transformers', 'Python', 'Meta-learning', 'Time series'],
    url: 'https://kdd-milets.github.io/milets2026/accepted%20papers/23Time-Series%20Transformers%20for%20Battery%20Life%20Estimation%20(4).pdf',
    linkLabel: 'Read the paper'
  },
  {
    id: 'split', cat: 'Projects', areas: ['Full-stack', 'Mobile'], title: 'SplitABill', org: 'Mobile app', kind: 'cover',
    summary: 'A full-stack mobile app that makes splitting party bills painless, with the Google Gemini API providing intelligent assistance and automation.',
    points: [],
    stack: ['React Native', 'Express.js', 'Node.js', 'MongoDB', 'Gemini API', 'JWT'],
    url: 'https://github.com/Xinyue519/SplitABill', linkLabel: 'View on GitHub'
  },
  {
    id: 'jpmc', cat: 'Engineering', areas: ['AI/ML', 'Frontend'], title: 'AI investment chatbot', org: 'JPMorgan Chase',
    kind: 'stat', bg: '#F3F0EA', fg: '#141414', kicker: 'AI Fellowship · team lead', big: '93%', sub: 'prediction accuracy on 14K+ deals',
    summary: 'Led a team of 4 building a chatbot that helps investors find high-potential startups, backed by a neural network trained on historical investment data.',
    points: [
      'Neural-network pipeline over 14,000+ startup investments',
      'React + Node.js chatbot front end',
      'Helped investors surface fitting opportunities from historical data'
    ],
    stack: ['React', 'Node.js', 'Neural networks'],
    url: 'https://www.jpmorganchase.com/', linkLabel: 'JPMorgan Chase'
  },
  {
    id: 'adhd', cat: 'Research', areas: ['AI/ML'], title: 'ADHD prediction from neuroimaging', org: 'Top 0.03% Kaggle', kind: 'cover',
    summary: 'A neural network predicting ADHD and sex classification from neuroimaging data for the WiDS Datathon 2025.',
    points: ['Ranked top 0.03% on Kaggle', '#1 across Break Through Tech’s Cornell, MIT and UCLA cohorts'],
    stack: ['TensorFlow', 'Python', 'NumPy', 'Pandas'],
    url: 'https://github.com/wids-teamConscious/WIDS-Datathon-2025', linkLabel: 'View on GitHub'
  },
  {
    id: 'nutri', cat: 'Projects', areas: ['Full-stack', 'AI/ML'], title: 'NutriBot', org: 'AI meal planner', kind: 'cover',
    summary: 'An AI meal-planning assistant that recommends recipes based on your input.',
    points: [],
    stack: ['React', 'FastAPI', 'Python', 'Qdrant', 'Redis', 'OpenAI API'],
    url: 'https://github.com/Xinyue519/meal_planner', linkLabel: 'View on GitHub'
  },
  {
    id: 'hopper', cat: 'Projects', areas: ['Game dev'], title: 'Captain Hopper', org: 'Unity · Hackathon', kind: 'cover',
    summary: 'A desktop study-buddy pomodoro with an engaging reward system.',
    points: [],
    stack: ['C#', 'Unity'],
    url: 'https://devpost.com/software/captain-hopper', linkLabel: 'View on Devpost'
  },
  {
    id: 'airbnb', cat: 'Research', areas: ['AI/ML'], title: 'Airbnb price predictor', org: 'ML model', kind: 'cover',
    summary: 'A machine-learning model predicting New York Airbnb prices from historical listing data.',
    points: [],
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Seaborn'],
    url: 'https://github.com/Xinyue519/Airbnb-Price-Predictor', linkLabel: 'View on GitHub'
  }
];

const EXPS = [
  { id: 'mercury', areas: ['Frontend', 'AI/ML'], domain: 'mercury.com', org: 'Mercury', title: 'Software Engineer Intern', dates: 'Sep 2026 – Now', url: 'https://mercury.com/',
    bullets: [
      'Designed and built a new Copilot interface from scratch using React and TypeScript, collaborating with engineers to develop AI-powered support workflows and modernize legacy Zendesk functionality supporting Mercury’s 450K+ customer base',
      'Engineered and optimized customer-facing UI components using React and TypeScript, debugging frontend issues and improving application reliability and consistency across Mercury’s fintech platform',
      'Developed AI-powered shortcut recommendation actions in Command, streamlining agent workflows and accelerating access to relevant support actions'
    ] },
  { id: 'datadog', areas: ['Full-stack'], domain: 'datadoghq.com', org: 'Datadog', title: 'Software Engineer Intern', dates: 'May 2026 – Aug 2026', url: 'https://www.datadoghq.com/',
    bullets: ['Full-stack ROI analytics for AI agents in Agent Console (Go, React, Kubernetes, PostgreSQL)', 'Kafka-based Go microservice generating 8K+ daily metrics', 'gRPC + Kubernetes services; user fetching 18% faster'] },
  { id: 'sbuai', areas: ['AI/ML', 'Research'], domain: 'stonybrook.edu', org: 'Stony Brook AI Innovation Institute', title: 'Deep Learning Researcher', dates: 'Aug 2025 – Jun 2026', url: 'https://ai.stonybrook.edu/',
    bullets: ['Paper accepted to KDD MILETS ’26', 'Transformer + meta-learning models for battery remaining useful life'] },
  { id: 'eyecando', areas: ['Frontend'], domain: 'eyecando.org', logo: 'img/logos/eyecando.png', org: 'EyeCanDo', title: 'Front-end Developer', dates: 'Feb 2025 – May 2025', url: 'https://eyecando.org/',
    bullets: ['Redesigned the lab website', 'Improved page load by 30%, achieved better accessibility and mobile support'] },
  { id: 'jpmc', areas: ['AI/ML', 'Frontend'], domain: 'jpmorganchase.com', org: 'JPMorgan Chase', title: 'AI Fellow', dates: 'Aug 2024 – Dec 2024', url: 'https://www.jpmorganchase.com/',
    bullets: ['Led a team of 4 on an AI investment chatbot recommending startups', '93% prediction accuracy on 14K+ investments Kaggle data'] },
  { id: 'btai', areas: ['AI/ML'], domain: 'tech.cornell.edu', org: 'Cornell Tech', title: 'AI/ML Research Fellow', dates: 'May 2024 – May 2025', url: 'https://tech.cornell.edu/',
    bullets: ['Selected from 3,000+ applicants', 'Scalable ML pipelines with testing and validation for reproducibility'] },
  { id: 'elitelink', areas: ['AI/ML'], domain: 'elitelinkadmission.com', org: 'EliteLink', title: 'Research Assistant', dates: 'Jul 2023 – Jul 2024', url: 'https://www.elitelinkadmission.com/',
    bullets: ['Trends and applications of Al in education', 'Guest speaker at Rider University and Beijing Normal University'] }
];

const FILTERS = [['all', 'All projects'], ['Full-stack', 'Full-stack'], ['Frontend', 'Frontend'], ['Backend', 'Backend'], ['AI/ML', 'AI / ML']];

/* Full-stack work counts toward both Frontend and Backend. */
const FILTER_MATCH = { 'Frontend': ['Frontend', 'Full-stack'], 'Backend': ['Backend', 'Full-stack'] };

const areasHTML =(areas, cls) => `<span class="${cls}">${areas.map((a) => `<span>${esc(a)}</span>`).join('')}</span>`;
const EMAIL = 'xysu05@gmail.com';

/* =========================================================
   Helpers
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Designed covers — swap any of these for a real <img> once you have screenshots. */
function coverHTML(id) {
  switch (id) {
    case 'split': {
      const people = [['Ana', '#1F4A50'], ['Ben', '#C8664A'], ['Kai', '#4B4FC4'], ['Mo', '#3F5A34']];
      return `<div class="cv cv-split" role="img" aria-label="SplitABill mockup: a dinner bill split between four friends">
        <div class="ghost" aria-hidden="true"></div>
        <div class="cv-card bill">
          <div class="row"><b style="font-size:calc(17 * var(--u))">Friday dinner</b><span class="mono" style="font-size:calc(12 * var(--u));color:#4F5B5D">$186.40</span></div>
          <div class="toggle"><span class="on">Even</span><span>By item</span></div>
          ${people.map(([n, c]) => `<div class="person"><span class="av" style="background:${c}">${n[0]}</span><span class="name">${n}</span><span class="mono" style="font-size:calc(13 * var(--u))">$46.60</span></div>`).join('')}
          <div class="ai"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Ask Gemini: who had the wine?</div>
        </div>
      </div>`;
    }
    case 'nutri':
      return `<div class="cv cv-nutri" role="img" aria-label="NutriBot mockup: a chat asking for recipes from ingredients">
        <div class="chat">
          <div class="me">I have chicken, spinach and rice. Dinner ideas?</div>
          <div class="bot-row"><span class="bot-av">NB</span>
            <div class="cv-card bot">Here are two that use everything:
              <div class="recipe"><span class="thumb" style="background:#8FA97C"></span><span><b>Garlic spinach chicken bowl</b><small>25 MIN · 1 PAN</small></span></div>
              <div class="recipe"><span class="thumb" style="background:#E2A65B"></span><span><b>Chicken fried rice</b><small>20 MIN · LEFTOVER RICE</small></span></div>
            </div>
          </div>
        </div>
      </div>`;
    case 'adhd': {
      let cells = '';
      for (let i = 0; i < 12; i++) for (let j = 0; j < 12; j++) {
        const t = i === j ? 1 : Math.abs(Math.sin((i + 1) * (j + 1) * 0.37) * Math.cos((i - j) * 0.6));
        const c = t > 0.86 ? '#C8664A' : t > 0.62 ? '#3F5A34' : t > 0.38 ? '#8FA97C' : t > 0.18 ? '#C9D8B6' : '#EEF2E6';
        cells += `<span style="background:${c}"></span>`;
      }
      return `<div class="cv cv-adhd" role="img" aria-label="ADHD prediction cover: a brain connectivity matrix feeding two predictions">
        <div class="flow">
          <div class="left"><span class="label">Connectome</span><div class="matrix">${cells}</div></div>
          <svg class="arrow-svg" viewBox="0 0 34 20" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 10h28M23 3l7 7-7 7"/></svg>
          <div class="tasks">
            <div class="task"><small>TASK 1</small><b>ADHD</b></div>
            <div class="task"><small>TASK 2</small><b>Sex</b></div>
            <span class="rank">top 0.03%</span>
          </div>
        </div>
      </div>`;
    }
    case 'hopper':
      return `<div class="cv cv-hopper" role="img" aria-label="Captain Hopper cover: a pomodoro focus timer with reward progress">
        <div class="ring">
          <svg viewBox="0 0 190 190" aria-hidden="true">
            <circle cx="95" cy="95" r="80" fill="#FFFFFF" stroke="#E4E5F8" stroke-width="14"/>
            <circle cx="95" cy="95" r="80" fill="none" stroke="#4B4FC4" stroke-width="14" stroke-linecap="round" stroke-dasharray="503" stroke-dashoffset="141" transform="rotate(-90 95 95)"/>
          </svg>
          <div class="time"><b>18:00</b><small>Focus</small></div>
        </div>
        <div class="pips"><i class="pip"></i><i class="pip"></i><i class="pip"></i><i class="pip off"></i><span>Session 3 of 4 · reward next</span></div>
      </div>`;
    case 'airbnb': {
      const actual = [92, 80, 86, 64, 70, 52, 58, 44, 50, 36, 42, 30];
      const pred = [88, 84, 80, 68, 66, 56, 54, 48, 46, 40, 38, 33];
      const path = (a) => a.map((y, i) => (i ? 'L' : 'M') + (8 + i * 27.6).toFixed(1) + ' ' + (y + 10)).join(' ');
      return `<div class="cv cv-airbnb" role="img" aria-label="Airbnb price predictor cover: predicted versus actual nightly price chart">
        <div class="cv-card chart">
          <div class="head"><b>NYC nightly price</b><span class="legend"><span><i style="background:#BDBDB5"></i>Actual</span><span><i style="background:#D9534F"></i>Predicted</span></span></div>
          <svg viewBox="0 0 320 150" width="100%" aria-hidden="true" style="display:block">
            <line x1="0" y1="140" x2="320" y2="140" stroke="#E6E6E0"/><line x1="0" y1="95" x2="320" y2="95" stroke="#F0F0EA"/><line x1="0" y1="50" x2="320" y2="50" stroke="#F0F0EA"/>
            <path d="${path(actual)}" fill="none" stroke="#BDBDB5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="${path(pred)}" fill="none" stroke="#D9534F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="tags"><span class="on">Manhattan</span><span>Brooklyn</span><span>Queens</span><span>Bronx</span></div>
        </div>
      </div>`;
    }
    default: return '';
  }
}

function mediaHTML(c) {
  if (c.kind === 'stat') {
    return `<div class="stat" style="background:${c.bg};color:${c.fg}">
      <div class="stat-top"><span class="stat-kicker">${esc(c.kicker)}</span>${areasHTML(c.areas, 'areas')}</div>
      <div><span class="stat-big">${esc(c.big)}</span><span class="stat-sub">${esc(c.sub)}</span></div>
    </div>`;
  }
  const inner = c.kind === 'img'
    ? `<img src="${esc(c.img)}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`
    : coverHTML(c.id);
  return inner + areasHTML(c.areas, 'areas media-areas');
}

/* =========================================================
   Tabs (hash-routed so each tab has its own link)
   ========================================================= */
const TABS = ['projects', 'experience', 'about'];

function showTab(name, { scroll = true } = {}) {
  if (name === 'work') name = 'projects'; // old links
  if (!TABS.includes(name)) name = 'projects';
  document.querySelectorAll('[data-panel]').forEach((p) => {
    const on = p.dataset.panel === name;
    p.hidden = !on;
    if (on) { p.classList.remove('panel-in'); void p.offsetWidth; p.classList.add('panel-in'); }
  });
  document.querySelectorAll('.tab').forEach((t) => {
    if (t.dataset.tab === name) t.setAttribute('aria-current', 'page');
    else t.removeAttribute('aria-current');
  });
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  // Panels measure 0 while hidden; let widgets like the carousel re-measure.
  requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
}

window.addEventListener('hashchange', () => showTab(location.hash.slice(1)));

/* =========================================================
   Work grid
   ========================================================= */
let filter = 'all';

function renderFilters() {
  $('#filters').innerHTML = FILTERS.map(([id, label]) =>
    `<button type="button" class="chip" data-filter="${id}" aria-pressed="${filter === id}">${label}</button>`).join('');
}

function cardHTML(c) {
  return `<button type="button" class="card reveal" data-open="${c.id}" aria-label="Open ${esc(c.title)}">
    <div class="media">${mediaHTML(c)}</div>
    <div class="card-meta">
      <span class="card-title">${esc(c.title)} <span class="go" aria-hidden="true">→</span></span>
      <span class="card-org">${esc(c.org)}</span>
    </div>
  </button>`;
}

function renderCards() {
  const list = CARDS.filter((c) => filter === 'all' || (FILTER_MATCH[filter] || [filter]).some((a) => c.areas.includes(a)));
  const left = list.filter((_, i) => i % 2 === 0);
  const right = list.filter((_, i) => i % 2 === 1);
  $('#cards').innerHTML =
    `<div class="col">${left.map(cardHTML).join('')}</div>` +
    `<div class="col offset">${right.map(cardHTML).join('')}</div>`;
}

$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  filter = b.dataset.filter;
  renderFilters();
  renderCards();
});

/* =========================================================
   Project dialog
   ========================================================= */
const backdrop = $('#backdrop');
let lastFocus = null;

function openProject(id) {
  const c = CARDS.find((x) => x.id === id);
  if (!c) return;
  lastFocus = document.activeElement;
  $('#sheet-media').innerHTML = mediaHTML(c);
  $('#sheet-media').style.background = c.bg || '';
  $('#sheet-meta').textContent = `${c.org} · ${c.cat}`;
  $('#sheet-title').textContent = c.title;
  $('#sheet-summary').textContent = c.summary;
  $('#sheet-points').innerHTML = c.points.map((p) => `<li>${esc(p)}</li>`).join('');
  $('#sheet-stack').innerHTML = c.stack.map((s) => `<span>${esc(s)}</span>`).join('');
  const link = $('#sheet-link');
  link.href = c.url;
  link.textContent = `${c.linkLabel} ↗`;
  backdrop.hidden = false;
  document.body.classList.add('no-scroll');
  $('#sheet-close').focus();
}

function closeProject() {
  backdrop.hidden = true;
  document.body.classList.remove('no-scroll');
  if (lastFocus) lastFocus.focus();
}

$('#cards').addEventListener('click', (e) => {
  const card = e.target.closest('[data-open]');
  if (card) openProject(card.dataset.open);
});
$('#sheet-close').addEventListener('click', closeProject);
backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeProject(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !backdrop.hidden) closeProject(); });

/* =========================================================
   Experience accordion
   ========================================================= */
let openExp = 'mercury';

/* Company logos: uses e.logo if set (e.g. 'img/logos/mercury.svg'),
   otherwise the company's favicon via Google's favicon service.
   Falls back to the company's initial if the image can't load. */
function logoHTML(e) {
  const src = e.logo || `https://www.google.com/s2/favicons?domain=${encodeURIComponent(e.domain)}&sz=128`;
  return `<span class="exp-logo" data-initial="${esc(e.org[0])}"><img src="${src}" alt="" width="28" height="28" loading="lazy" onerror="this.remove()"></span>`;
}

function renderExp() {
  $('#exp-list').innerHTML = EXPS.map((e) => {
    const open = e.id === openExp;
    return `<div class="exp">
      <button type="button" class="exp-row" data-exp="${e.id}" aria-expanded="${open}">
        <span class="exp-org">${logoHTML(e)}<span>${esc(e.org)}</span></span>
        <span class="exp-title">${esc(e.title)}</span>
        ${areasHTML(e.areas, 'areas exp-areas')}
        <span class="exp-dates">${esc(e.dates)}</span>
        <span class="exp-sign" aria-hidden="true">${open ? '−' : '+'}</span>
      </button>
      ${open ? `<div class="exp-body">
        <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        <a class="u mono-link" href="${e.url}" target="_blank" rel="noopener">Visit ${esc(e.org)} ↗</a>
      </div>` : ''}
    </div>`;
  }).join('');
}

$('#exp-list').addEventListener('click', (e) => {
  const b = e.target.closest('[data-exp]');
  if (!b) return;
  openExp = openExp === b.dataset.exp ? null : b.dataset.exp;
  renderExp();
});

/* =========================================================
   Footer: email (opens mail + copies), back to top
   ========================================================= */
let copyTimer;
$('#email-link').addEventListener('click', () => {
  // Let the mailto: open, and copy the address too.
  const note = $('#copied');
  const done = () => {
    note.textContent = 'Copied to clipboard ✓';
    note.classList.remove('show'); void note.offsetWidth; note.classList.add('show');
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { note.textContent = ''; }, 2200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(EMAIL).then(done).catch(() => {});
  }
});

$('#to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =========================================================
   About: photo carousel
   Add photos to img/ and list them here, e.g.
   { src: 'img/hike.jpg', alt: 'Hiking in the Catskills', caption: 'Catskills, 2026' }
   Entries with an empty src show a placeholder tile.
   ========================================================= */
const PHOTOS = [
  { src: 'img/carousel/1.JPG'},
  { src: 'img/carousel/2.JPG'},    
  { src: 'img/carousel/3.JPG'},    
  { src: 'img/carousel/4.JPG'},    
  { src: 'img/carousel/5.JPG'},    
  { src: 'img/carousel/6.JPG'},    
  { src: 'img/carousel/7.jpg'},
  { src: 'img/carousel/8.JPG'},
  { src: 'img/carousel/9.jpg'},
  { src: 'img/carousel/10.PNG'},
  { src: 'img/carousel/11.JPG'},
  { src: 'img/carousel/12.jpg'},
];

function initCarousel() {
  const track = $('#car-track');
  if (!track || !PHOTOS.length) return;

  const slide = (p, dup) => `
    <figure class="slide"${dup ? ' aria-hidden="true"' : ''}>
      <div class="slide-media">
        ${p.src
          ? `<img src="${esc(p.src)}" alt="${dup ? '' : esc(p.alt || p.caption || '')}" loading="lazy">`
          : `<div class="slide-empty"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg>Photo coming soon</div>`}
      </div>
      ${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ''}
    </figure>`;

  // Two copies back to back so the loop is seamless; the second is hidden from screen readers.
  track.innerHTML = PHOTOS.map((p) => slide(p, false)).join('') + PHOTOS.map((p) => slide(p, true)).join('');
  // Keep the speed steady (~6s per photo) no matter how many photos there are.
  track.style.setProperty('--duration', `${PHOTOS.length * 6}s`);
}

/* =========================================================
   Init
   ========================================================= */
renderFilters();
renderCards();
renderExp();
initCarousel();
showTab(location.hash.slice(1) || 'projects', { scroll: false });
