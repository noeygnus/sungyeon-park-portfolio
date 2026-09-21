/* =========================================================
   박성연 포트폴리오 — 픽셀 테마
   · 항목을 누르면 상세 창이 열린다
   ========================================================= */

/* ---------- 상세 내용 ---------- */
const details = {
  /* --- 프로젝트 --- */
  stock: {
    label: '프로젝트 01',
    title: '주주 될래말래?',
    period: '2026.08.18 — 2026.09.28',
    body: [
      '경제 지식을 러닝 퀴즈 게임으로 학습하고, 게임에서 획득한 코인으로 실제 주가 데이터를 활용한 모의투자까지 경험할 수 있는 금융 학습 서비스입니다.',
      'React와 TypeScript 기반으로 서비스를 구현하고 Phaser.js를 활용해 웹에서 바로 실행되는 게임 환경을 구성했습니다. 모의투자에는 KOSPI와 KOSDAQ의 실제 과거 주가 데이터를 적용해 매수와 매도, 평가금액, 수익률을 계산할 수 있도록 했으며, 15분 동안 실제 하루의 주가 흐름을 압축해 경험할 수 있도록 구현했습니다.',
      '개발 완료 후 실제 사용자를 대상으로 서비스를 배포하고 Google Analytics를 연동해 페이지 방문, 주요 기능 이용, 사용자 행동 흐름 등의 데이터를 수집했습니다. 이를 바탕으로 사용자가 어떤 기능을 많이 이용하는지와 어느 단계에서 이탈하는지를 확인하며 서비스 개선에 활용했습니다.'
    ],
    meta: [
      ['담당 역할', '기획 · QA · 프론트엔드 · 백엔드 · 데이터'],
      ['사용 기술', 'React · TypeScript · Phaser.js · Spring Boot · Java · Socket.IO · REST API']
    ],
    media: [
      { src: 'assets/projects/stock/lobby.jpg', alt: '게임 로비 화면' },
      { src: 'assets/projects/stock/quiz.jpg', alt: '경제 지식을 묻는 러닝 퀴즈 게임 화면' },
      { src: 'assets/projects/stock/home.jpg', alt: '자산 요약과 실시간 종목 순위가 보이는 홈 화면' },
      { src: 'assets/projects/stock/briefing.jpg', alt: 'AI가 선별한 실시간 시장 브리핑 화면' },
      { src: 'assets/projects/stock/assets.jpg', alt: '보유 자산과 일별 손익 캘린더 화면' },
      { src: 'assets/projects/stock/chat.jpg', alt: '투자 용어를 물어보면 답해주는 AI 챗봇 투투 화면' }
    ],
    url: 'https://j15a401.p.ssafy.io/'
  },
  room: {
    label: '프로젝트 02',
    title: '방방봐 (방을 방송으로 봐)',
    period: '2026.07.13 — 2026.08.14',
    body: [
      '직접 방문 중심의 부동산 확인 과정에서 발생하는 장거리 이동과 시간 부담, 영상통화만으로는 하자를 충분히 확인하기 어렵다는 실제 생활 속 불편에서 문제를 정의했습니다.',
      '이를 바탕으로 예약부터 실시간 매물 확인, 하자 검수, 결과 확인까지 이어지는 원격 부동산 검수 서비스를 기획하고 개발했습니다. 초기 API 명세 작성에 참여하고, 프론트엔드에서는 예약 흐름과 주요 UI 구현을 담당했습니다.',
      '또한 기능별 테스트와 오류 확인을 반복하며 서비스 흐름을 점검했으며, WebRTC 기반 실시간 통신과 AI 하자 탐지 기능을 결합해 비대면 환경에서도 매물 상태를 확인할 수 있도록 구현했습니다.'
    ],
    meta: [
      ['담당 역할', '기획 · QA · 프론트엔드 · AI'],
      ['사용 기술', 'React · TypeScript · Vite · PostgreSQL · Socket.IO · WebRTC · Python · YOLOv11']
    ],
    deck: {
      embed: 'https://www.canva.com/design/DAHReT0M3sY/wtv3jj2lyr-QDYfz_xbOlg/view?embed',
      url: 'https://www.canva.com/design/DAHReT0M3sY/wtv3jj2lyr-QDYfz_xbOlg/view'
    }
  },
  housing: {
    label: '프로젝트 03',
    title: 'AI 청약네비',
    period: '2026.05.01 — 2026.06.28',
    body: [
      '청약 공고와 일정 정보는 충분히 제공되고 있지만, 복잡한 자격 조건과 어려운 용어로 인해 사용자가 자신에게 해당하는 공고를 판단하기 어렵다는 문제에서 출발했습니다.',
      '사용자가 자신의 조건을 입력하면 신청 가능한 공고를 확인하고, 생소한 청약 용어를 쉽게 이해하며, 주요 일정을 관리할 수 있도록 서비스 흐름을 기획했습니다. 화면과 사용자 흐름을 설계하고 용어 설명 및 일정 관리 기능 구현에 참여했으며, Django 기반 REST API 설계와 데이터 처리 업무도 수행했습니다.',
      '흩어진 정보를 단순히 보여주는 데 그치지 않고, 사용자가 실제 신청 여부를 판단할 수 있도록 정보를 구조화하는 데 중점을 두었습니다.'
    ],
    meta: [
      ['담당 역할', '기획 · QA · 프론트엔드 · 백엔드 · 데이터'],
      ['사용 기술', 'Python · Vue.js · Django · SQLite']
    ],
    media: [
      { src: 'assets/projects/housing/map.jpg', alt: '청약 지역 검색 화면' },
      { src: 'assets/projects/housing/recommendations.jpg', alt: '맞춤 주택 추천 결과 화면' }
    ]
  },
  plant: {
    label: '프로젝트 04',
    title: '정원지키미 (Grow-Keeper)',
    period: '2026.04.12 — 2026.04.20',
    body: [
      'Django 기반 REST API를 개발하여 반려식물 정보 및 관리 기능을 구현했습니다.',
      'MySQL을 활용해 사용자와 식물 데이터를 설계·관리하고 CRUD 기능을 구현했습니다.',
      '프론트엔드(React, TypeScript)와 연동되는 API를 개발하여 안정적인 데이터 통신 환경을 구축했습니다.'
    ],
    meta: [
      ['담당 역할', '백엔드'],
      ['사용 기술', 'JavaScript · React · TypeScript · MySQL · Django']
    ]
  },
  busan: {
    label: '프로젝트 05',
    title: '부산투어리즘',
    period: '2023.05.02 — 2023.06.17',
    body: [
      'React, TypeScript, JavaScript를 활용하여 부산 관광 정보 조회 및 여행 계획 웹 서비스를 개발했습니다.'
    ],
    meta: [
      ['담당 역할', '프론트엔드'],
      ['사용 기술', 'JavaScript · React · TypeScript · MySQL']
    ]
  },

  /* --- 수상 --- */
  'award-ssafy': {
    label: '수상',
    title: '삼성청년 SW·AI 아카데미 관통 프로젝트',
    period: '2026.07.09 · 삼성전자',
    body: [
      '다양한 금융상품 중에서 사용자가 자신의 투자 성향에 맞는 상품을 직접 비교하고 선택하기 어렵다는 점에 주목해 프로젝트를 시작했고, 이를 바탕으로 생성형 AI와 금융 데이터를 활용하여 사용자의 투자 성향에 맞는 금융상품을 제안하는 로보어드바이저 서비스를 개발했습니다.',
      '팀원으로 참여해 서비스 기획과 기능 구현 과정에 함께했으며, 사용자가 추천 결과와 금융정보를 쉽게 확인할 수 있도록 화면 구성과 서비스 흐름을 구체화했습니다.',
      '또한 기능별 테스트와 팀원 간 결과물 통합 과정에 참여하며 서비스 완성도를 높였습니다. Notion을 활용해 프로젝트 내용을 문서화하고 관리하며 팀원들과 개발 내용을 공유하고 기능을 통합했습니다. 금융정보를 단순히 제공하는 데 그치지 않고 사용자가 자신의 상황에 맞는 상품을 이해하고 비교할 수 있도록 구현한 점을 인정받아 우수상을 수상했습니다.'
    ],
    meta: [['역할', '팀원'], ['결과', '우수상']]
  },
  'award-model': {
    label: '수상',
    title: '소프트웨어 모델링 경진대회',
    period: '2024.05',
    body: [
      '신호등 운영을 보다 효율적으로 구성하는 방법을 주제로 팀 프로젝트를 진행했습니다.',
      '팀장을 맡아 신호등의 상태와 동작을 객체 단위로 구분하고, 상황에 따라 신호가 전환되는 구조를 팀원들과 함께 설계했습니다. 역할을 나누어 모델링 결과를 정리하고 발표까지 진행했으며, 문제를 기능 단위로 나누어 구조화한 점을 바탕으로 우수상을 수상했습니다.'
    ],
    meta: [['역할', '팀장'], ['결과', '우수상']]
  },
  'award-startup': {
    label: '수상',
    title: '혁신창업스크립트 경진대회',
    period: '2023.12',
    body: [
      '기내에서 승무원을 직접 호출해야 하는 상황이 승객에게는 부담이 될 수 있고, 승무원 입장에서도 반복적인 개별 요청을 처리하는 데 불편이 있을 수 있다는 점에서 아이디어를 출발했습니다.',
      '이를 해결하기 위해 승객이 좌석에서 필요한 요청을 한 번에 전달할 수 있는 기내 키오스크 서비스를 기획했습니다. 팀장을 맡아 아이디어 구체화와 서비스 이용 흐름을 정리하고 발표 방향을 조율했으며, 승객과 승무원 모두의 편의성을 높일 수 있는 서비스 아이디어로 우수상을 수상했습니다.'
    ],
    meta: [['역할', '팀장'], ['결과', '우수상']]
  },

  /* --- 경력 --- */
  'career-nb': {
    label: '경력',
    title: '뉴발란스 코리아',
    period: '2025.01.07 — 2026.01.03',
    body: [
      '고객 응대부터 상품 안내, 재고 확인, 결제까지 전반적인 판매 업무를 수행했습니다.',
      '주말 및 행사 등 혼잡 시간대에 직원들이 창고와 매장, 계산대를 반복 이동하면서 응대 공백이 발생하는 문제를 발견하고, 매니저에게 창고·매장 응대·캐셔 역할을 분담하는 운영 방식을 제안하여 실제 매장 운영에 적용했습니다.',
      '적용 후 불필요한 이동이 줄고 고객 응대 공백 및 고객을 놓치는 경우가 감소하는 등 원활한 매장 운영에 기여했습니다.'
    ],
    meta: [['직위', '아르바이트'], ['담당', '판매 · 매장 운영']]
  },
  'career-tax': {
    label: '경력',
    title: '화성시 동탄출장소 세무과',
    period: '2023.02.02 — 2023.02.28',
    body: [
      '표준지방정보시스템을 활용해 취득세 및 지방세 관련 행정 업무를 지원했습니다. 신고서류와 전산 등록 정보를 대조해 주소 등 불일치 항목을 확인하고, 담당자 검토 후 시스템에 반영했습니다.',
      '또한 미정리된 세무자료를 기존 관리 기준에 따라 연도와 문서 종류별로 분류하고 파일철을 정비했습니다. 이를 통해 행정자료의 정확성을 유지하고 필요한 자료를 빠르게 확인할 수 있도록 지원했습니다.',
      '이후 업무에서도 동일한 기준으로 자료를 활용할 수 있도록 문서 관리 상태를 정리하며, 정확한 정보 관리와 기준에 따른 업무 처리의 중요성을 익혔습니다.'
    ],
    meta: [['직위', '인턴'], ['부서', '세무과']]
  },

  /* --- 대외활동 --- */
  'act-ssafy': {
    label: '대외활동',
    title: '삼성청년SW·AI아카데미 (SSAFY)',
    period: '2026.01.07 — 2026.12.01 · 삼성전자, 고용노동부',
    body: [
      'SW·AI 집중 교육을 이수하며 금융 데이터를 활용한 디지털 금융 서비스 프로젝트를 수행하였습니다.',
      '서비스 기획부터 구현까지 경험했으며 1학기 프로젝트 우수상을 수상하였습니다.'
    ],
    meta: [['역할', '교육생'], ['이수 시간', '1,725시간']]
  },
  'act-english': {
    label: '대외활동',
    title: '영어 집중 교육 과정',
    period: '2024.06.30 — 2024.07.27 · Jocson College ESL Center',
    body: [
      '필리핀 현지에서 약 200시간의 영어 집중 교육을 이수하며 의사소통 능력을 높였습니다.',
      '현지 생활과 다양한 사람들과의 교류를 통해 새로운 문화와 환경에 적응하는 경험을 쌓았습니다.'
    ],
    meta: [['이수 시간', '200시간'], ['장소', '필리핀']]
  }
};

const root = document.documentElement;
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/* =========================================================
   성단 — 저해상도 캔버스에 픽셀 알갱이로 찍는다
   중심으로 갈수록 빽빽한 구형 분포. 스크롤하면 안쪽으로 들어간다.
   ========================================================= */
const canvas = document.querySelector('.galaxy');
const ctx = canvas.getContext('2d');

const PIXEL = 4;      // 알갱이 한 변 (CSS px)
const FOV = 240;
/* 같은 성단을 테마에 맞춰 밝게 / 어둡게 찍는다 */
const PALETTES = {
  dark:  ['#ffffff', '#cfe0ff', '#9db4ff', '#ffe6b0', '#ffb98a'],
  light: ['#2f3a68', '#3f4c85', '#5a68a8', '#8a6a35', '#96543f']
};
const ALPHA = { dark: [0.22, 0.48, 0.8], light: [0.18, 0.4, 0.72] };

let W = 0, H = 0, R = 150;
let stars = [];

function makeStar(x, y, z) {
  const bright = Math.random();
  const roll = Math.random();
  return {
    x, y, z, bright,
    ci: roll < 0.46 ? 0 : roll < 0.74 ? 1 : roll < 0.88 ? 2 : roll < 0.96 ? 3 : 4,
    big: bright > 0.93,
    rate: 0.25 + Math.random() * 0.9,
    phase: Math.random() * Math.PI * 2
  };
}

function buildStars() {
  const budget = Math.round(clamp((W * H) / 210, 180, 620));
  const core = Math.round(budget * 0.46);   /* 성단 비중을 낮추고 */
  stars = [];

  /* 구상성단: 반지름을 눌러 중심을 빽빽하게 */
  for (let i = 0; i < core; i++) {
    const r = R * Math.pow(Math.random(), 1.5);   /* 중심 쏠림도 완화 */
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const ring = Math.sqrt(1 - u * u);
    stars.push(makeStar(r * ring * Math.cos(theta), r * ring * Math.sin(theta) * 0.92, r * u));
  }
  /* 바깥에 흩어진 별 */
  for (let i = core; i < budget; i++) {
    stars.push(makeStar((Math.random() - 0.5) * W * 3.4, (Math.random() - 0.5) * H * 3.4, (Math.random() - 0.5) * 900));
  }
}

function resizeCanvas() {
  W = Math.ceil(window.innerWidth / PIXEL);
  H = Math.ceil(window.innerHeight / PIXEL);
  /* 좁은 화면에서 성단이 글자를 덮지 않도록 */
  R = Math.min(260, W * 0.62);
  canvas.width = W;
  canvas.height = H;
  ctx.imageSmoothingEnabled = false;
  buildStars();
}

function drawStars(time, progress) {
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;
  const cy = H * 0.44;
  const cam = 470 - progress * 150;          // 스크롤할수록 성단 안으로
  const yaw = progress * 0.7 + time * 0.000018;
  const cos = Math.cos(yaw), sin = Math.sin(yaw);
  const theme = root.dataset.theme === 'light' ? 'light' : 'dark';
  const palette = PALETTES[theme];
  const alpha = ALPHA[theme];

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    const x1 = s.x * cos - s.z * sin;
    const z = s.x * sin + s.z * cos + cam;
    if (z < 26) continue;

    const k = FOV / z;
    const sx = (cx + x1 * k) | 0;
    const sy = (cy + s.y * k) | 0;
    if (sx < 0 || sx >= W || sy < 0 || sy >= H) continue;

    /* 밝기는 단계로만 끊는다 — 그래야 픽셀답다 */
    const wave = Math.sin(time * 0.0006 * s.rate + s.phase);
    const depth = clamp(k * 1.2, 0, 1) * (0.4 + s.bright * 0.6);
    const level = depth * (wave > 0.55 ? 1 : wave > -0.4 ? 0.7 : 0.45);
    if (level < 0.15) continue;

    ctx.globalAlpha = level < 0.4 ? alpha[0] : level < 0.72 ? alpha[1] : alpha[2];
    ctx.fillStyle = palette[s.ci];
    const size = s.big && k > 0.7 ? 2 : 1;
    ctx.fillRect(sx, sy, size, size);
  }
  ctx.globalAlpha = 1;
}

let frame = 0;
let lastProgress = -1, lastBeat = -1;

function tick(time) {
  const progress = scrollProgress();
  const beat = Math.floor(time / 700);
  if (Math.abs(progress - lastProgress) > 0.0005 || beat !== lastBeat) {
    drawStars(time, progress);
    lastProgress = progress;
    lastBeat = beat;
  }
  frame = requestAnimationFrame(tick);
}

function startStars() {
  if (!frame) frame = requestAnimationFrame(tick);
}

function stopStars() {
  cancelAnimationFrame(frame);
  frame = 0;
}

/* =========================================================
   스크롤 진행 게이지
   ========================================================= */
function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? clamp(window.scrollY / max) : 0;
}

function updateProgress() {
  root.style.setProperty('--sp', scrollProgress().toFixed(4));
  document.body.classList.toggle('scrolled', window.scrollY > 20);
}

let queued = false;
window.addEventListener('scroll', () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => {
    updateProgress();
    queued = false;
  });
}, { passive: true });
window.addEventListener('resize', () => {
  resizeCanvas();
  updateProgress();
});
updateProgress();

resizeCanvas();
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  drawStars(0, scrollProgress());
} else {
  startStars();
  document.addEventListener('visibilitychange', () => (document.hidden ? stopStars() : startStars()));
}

/* =========================================================
   등장 / 현재 섹션 표시
   ========================================================= */
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      /* 같은 목록 안에서는 한 칸씩 늦게 나타난다 */
      const siblings = [...entry.target.parentElement.children];
      const delay = Math.min(siblings.indexOf(entry.target), 5) * 0.07;
      entry.target.style.transitionDelay = `${delay}s`;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8%' });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  const navLinks = [...document.querySelectorAll('nav a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { threshold: 0.35 });
  ['projects', 'awards', 'contact'].forEach(id => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

requestAnimationFrame(() => document.body.classList.add('ready'));

/* =========================================================
   상세 창
   ========================================================= */
const modal = document.querySelector('.detail-modal');

function showDetail(key) {
  const item = details[key];
  if (!item) return;

  modal.querySelector('.modal-label').textContent = item.label;
  modal.querySelector('h2').textContent = item.title;
  modal.querySelector('.modal-period').textContent = item.period || '';

  const body = modal.querySelector('.modal-body');
  body.replaceChildren();
  (item.body || []).forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    body.append(paragraph);
  });

  const gallery = modal.querySelector('.project-gallery');
  gallery.replaceChildren();
  (item.media || []).forEach(shot => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = shot.src;
    img.alt = shot.alt;
    img.loading = 'lazy';
    if (shot.contain) figure.className = 'contain';
    figure.append(img);
    gallery.append(figure);
  });
  gallery.hidden = !item.media?.length;

  const link = modal.querySelector('.project-link');
  link.hidden = !item.url;
  if (item.url) link.href = item.url;

  /* 발표자료는 창을 열 때만 불러온다 */
  const deck = modal.querySelector('.modal-deck');
  const frame = deck.querySelector('iframe');
  deck.hidden = !item.deck;
  if (item.deck) {
    frame.src = item.deck.embed;
    deck.querySelector('.deck-link').href = item.deck.url;
  } else {
    frame.removeAttribute('src');
  }

  const meta = modal.querySelector('.modal-meta');
  meta.replaceChildren();
  (item.meta || []).forEach(([name, value]) => {
    const wrap = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = name;
    dd.textContent = value;
    wrap.append(dt, dd);
    meta.append(wrap);
  });
  meta.hidden = !item.meta?.length;

  modal.showModal();
  document.body.style.overflow = 'hidden';
}

document.querySelectorAll('[data-detail]').forEach(el => {
  el.addEventListener('click', () => showDetail(el.dataset.detail));
  el.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    showDetail(el.dataset.detail);
  });
});

modal.querySelector('.close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
  if (e.target === modal) modal.close();
});
modal.addEventListener('close', () => {
  document.body.style.overflow = '';
  modal.querySelector('.modal-deck iframe').removeAttribute('src');
});

/* =========================================================
   화면 밝기 전환 — 선택은 브라우저에 남는다
   ========================================================= */
const themeButton = document.querySelector('.theme-toggle');

function applyTheme(theme) {
  if (theme === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  themeButton.lastChild.textContent = theme === 'light' ? '밤' : '낮';
  lastProgress = -1;   /* 새 팔레트로 다시 그리게 한다 */
  startStars();
  try { localStorage.setItem('theme', theme); } catch (e) { /* 저장 못 해도 동작에는 지장 없다 */ }
}

let currentTheme = 'dark';
try { if (localStorage.getItem('theme') === 'light') currentTheme = 'light'; } catch (e) {}
applyTheme(currentTheme);

themeButton.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
});
