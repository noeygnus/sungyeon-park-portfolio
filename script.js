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
    sections: [
      ['기획 의도', '경제는 어렵고 투자는 무섭다는 인식 때문에 시작 자체를 미루는 사람이 많습니다. 배우는 단계와 해보는 단계가 따로 떨어져 있는 것이 원인이라고 보고, 돈을 잃지 않는 환경에서 학습과 투자를 하나의 흐름으로 잇는 것을 목표로 잡았습니다.'],
      ['설계한 흐름', '퀴즈를 풀어 코인을 얻고, 그 코인이 곧 모의투자의 자금이 됩니다. 공부가 다음 행동의 밑천이 되도록 보상을 설계해, 학습이 학습으로 끝나지 않게 만들었습니다. 여기에 투자 용어를 물어보면 답하는 AI 챗봇, AI가 선별한 실시간 시장 브리핑, 일별 손익 캘린더와 투자 랭킹을 붙여 배우고 → 해보고 → 돌아보는 순환을 완성했습니다.'],
      ['내 역할', '기획과 품질검증을 맡아 서비스 흐름과 화면을 설계하고, 코인 보상 구조와 모의투자 규칙을 정했습니다. 프론트엔드·백엔드·데이터 구현에도 직접 참여해 기획한 내용을 끝까지 따라갔습니다.'],
      ['결과', 'KOSPI·KOSDAQ 실제 과거 주가로 매수·매도와 평가금액, 수익률을 계산하고, 하루치 주가 흐름을 15분으로 압축해 경험하도록 구현했습니다. 배포 후에는 Google Analytics를 연동해 페이지 방문과 기능 이용, 행동 흐름을 수집하고, 어떤 기능을 많이 쓰고 어느 단계에서 이탈하는지 확인해 개선에 반영했습니다.']
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
    sections: [
      ['기획 의도', '집을 보러 매번 먼 거리를 이동해야 하고, 막상 가보면 사진과 실제가 다른 일이 잦습니다. 영상통화로 대신하기에는 하자를 제대로 확인하기 어렵다는 점까지, 실제 생활 속 불편에서 문제를 정의했습니다. 세입자가 직접 가지 않아도 매물 상태를 확인할 수 있어야 한다는 것이 출발점이었습니다.'],
      ['설계한 흐름', '예약 → 실시간 매물 확인 → AI 하자 검수 → 결과 리포트까지 한 번에 이어지도록 서비스를 구성했습니다. 라이브가 끝나면 요약 리포트가 자동으로 저장돼, 여러 매물을 본 뒤 기억이 흐려지는 문제까지 기록으로 해결했습니다. 등기부등본 같은 서류를 자동 검증해 쉬운 리포트로 돌려주고, 공인중개사 자격과 신원도 확인하도록 했습니다.'],
      ['내 역할', '전체 흐름을 기획하고 초기 API 명세 작성에 참여했습니다. 프론트엔드에서 예약 흐름과 주요 화면을 구현했고, 기능별 테스트와 오류 확인을 반복하며 흐름이 끊기는 지점을 찾아 고쳤습니다.'],
      ['어려움과 해결', '학습에 쓸 하자 데이터가 없다는 것이 가장 큰 벽이었습니다. AI로 자체 데이터셋을 만들고 실제 거주 중인 지인들에게 사진을 제보받아, 곰팡이·벽지 손상 약 8,219장을 직접 라벨링해 학습시켰습니다. 그 결과 탐지 성능(mAP50)이 0.288에서 0.421로 올랐습니다. 이 밖에 배포 지연은 도메인을 https로 바꾸고 WebRTC 턴서버를 추가해, 세션 종료 버그는 종료 API를 분리해 해결했습니다.'],
      ['결과', 'WebRTC 실시간 통신과 AI 하자 탐지를 결합해, 직접 가지 않아도 매물 상태를 확인하고 기록으로 남길 수 있는 서비스를 완성했습니다.']
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
    sections: [
      ['기획 의도', '청약 공고와 일정은 이미 충분히 공개되어 있습니다. 문제는 자격 조건이 복잡하고 용어가 생소해서, 정작 "내가 넣을 수 있는 공고인지"를 판단하지 못한다는 데 있었습니다. 정보를 더 모으는 것이 아니라 판단을 돕는 것이 필요하다고 봤습니다.'],
      ['설계한 흐름', '소득·보유 현금·부채·월 저축액 같은 조건을 입력하면, 신청 가능한 공고를 점수로 환산해 보여줍니다. 지도에서 위치를 확인하고, 고른 공고의 계약금과 납부 일정을 계산해 "5,200만원 중 4,400만원 부족, 월 249만원씩 모으면 가능"처럼 구체적인 자금 계획으로 돌려줍니다. 생소한 용어 설명과 일정 관리, 다음에 할 일을 정리해 주는 AI 코치까지 한 흐름에 담았습니다.'],
      ['내 역할', '전체 서비스 흐름과 화면을 설계했습니다. 용어 설명과 일정 관리 기능 구현에 참여했고, Django 기반 REST API 설계와 데이터 처리도 맡았습니다.'],
      ['결과', '흩어진 정보를 그대로 보여주는 데 그치지 않고, 사용자가 신청 여부와 필요한 자금을 스스로 판단할 수 있는 형태로 정보를 구조화했습니다.']
    ],
    meta: [
      ['담당 역할', '기획 · QA · 프론트엔드 · 백엔드 · 데이터'],
      ['사용 기술', 'Python · Vue.js · Django · SQLite']
    ],
    media: [
      { src: 'assets/projects/housing/conditions.jpg', alt: '소득·자금 조건을 입력하는 화면' },
      { src: 'assets/projects/housing/map-light.jpg', alt: '지도에서 청약 공고를 찾는 화면' },
      { src: 'assets/projects/housing/roadmap.jpg', alt: '계약금과 납부 일정을 계산한 자금 로드맵 화면' },
      { src: 'assets/projects/housing/coach.jpg', alt: '해야 할 일을 정리해 주는 AI 코치 화면' }
    ]
  },
  plant: {
    label: '프로젝트 04',
    title: '정원지키미 (Grow-Keeper)',
    period: '2026.04.12 — 2026.04.20',
    sections: [
      ['기획 의도', '식물 정보와 관리 기록이 따로 흩어져 있어, 언제 무엇을 했는지 남지 않는다는 점에서 출발한 반려식물 관리 서비스입니다.'],
      ['내 역할', '백엔드를 맡아 Django 기반 REST API로 식물 정보와 관리 기능을 구현하고, MySQL로 사용자·식물 데이터를 설계했습니다.'],
      ['결과', '프론트엔드와 연동되는 API를 개발해 안정적인 데이터 통신 환경을 구축했습니다. 9일이라는 짧은 기간에 기능을 좁혀 완성까지 가져갔습니다.']
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
    sections: [
      ['기획 의도', '관광 정보를 찾는 일과 여행 계획을 세우는 일이 따로 노는 불편을 하나의 흐름으로 합치려 했습니다.'],
      ['내 역할', '프론트엔드를 맡아 관광 정보 조회와 여행 계획 화면을 구현했습니다. 개발을 처음 접한 시기에 맡은 첫 팀 프로젝트였습니다.'],
      ['결과', '부산 관광 정보를 탐색하고 일정을 세울 수 있는 웹 서비스를 완성했습니다.']
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
    sections: [
      ['문제 정의', '금융상품은 많지만 자신의 투자 성향에 맞는 상품을 직접 비교하고 고르기는 어렵다는 점에 주목했습니다. 정보가 부족해서가 아니라 비교 기준이 없어서 못 고른다고 봤습니다.'],
      ['내 역할', '팀원으로 서비스 기획과 기능 구현에 참여했고, 추천 결과와 금융정보를 쉽게 확인할 수 있도록 화면 구성과 흐름을 구체화했습니다. 기능별 테스트와 팀원 간 결과물 통합에 참여했고, Notion으로 진행 내용을 문서화하며 개발 내용을 공유했습니다.'],
      ['결과', '생성형 AI와 금융 데이터로 투자 성향에 맞는 상품을 제안하는 로보어드바이저를 완성했습니다. 정보를 제공하는 데 그치지 않고 사용자가 자기 상황에 맞춰 이해하고 비교하도록 구현한 점을 인정받아 우수상을 받았습니다.']
    ],
    meta: [['역할', '팀원'], ['결과', '우수상']]
  },
  'award-model': {
    label: '수상',
    title: '소프트웨어 모델링 경진대회',
    period: '2024.05',
    sections: [
      ['문제 정의', '신호등 운영을 더 효율적으로 구성하는 방법을 주제로 팀 프로젝트를 진행했습니다.'],
      ['내 역할', '팀장을 맡아 신호등의 상태와 동작을 객체 단위로 나누고, 상황에 따라 신호가 전환되는 구조를 팀원들과 설계했습니다. 역할을 배분하고 결과를 정리해 발표까지 맡았습니다.'],
      ['결과', '복잡한 동작을 기능 단위로 쪼개 구조화한 접근을 인정받아 우수상을 받았습니다. 큰 문제를 다룰 수 있는 크기로 나누는 방식을 이때 익혔습니다.']
    ],
    meta: [['역할', '팀장'], ['결과', '우수상']]
  },
  'award-startup': {
    label: '수상',
    title: '혁신창업스크립트 경진대회',
    period: '2023.12',
    sections: [
      ['문제 정의', '기내에서 승무원을 직접 부르는 일이 승객에게는 부담이고, 승무원에게는 반복 요청 처리가 불편합니다. 한쪽만 편해지는 해결책으로는 실제로 쓰이지 않겠다고 보고, 양쪽의 문제를 같이 풀 방법을 찾았습니다.'],
      ['내 역할', '팀장을 맡아 아이디어를 구체화하고, 승객이 좌석에서 필요한 요청을 한 번에 전달하는 기내 키오스크 서비스를 기획했습니다. 이용 흐름을 정리하고 발표 방향을 조율했습니다.'],
      ['결과', '승객의 부담과 승무원의 반복 업무를 동시에 줄이는 기획으로 우수상을 받았습니다.']
    ],
    meta: [['역할', '팀장'], ['결과', '우수상']]
  },

  /* --- 경력 --- */
  'career-nb': {
    label: '경력',
    title: '뉴발란스 코리아',
    period: '2025.01.07 — 2026.01.03',
    sections: [
      ['담당 업무', '고객 응대부터 상품 안내, 재고 확인, 결제까지 매장 판매 업무 전반을 맡았습니다.'],
      ['발견한 문제', '주말과 행사처럼 혼잡한 시간대에 직원들이 창고와 매장, 계산대를 반복해서 오갔습니다. 그 사이 응대가 비면서 기다리다 돌아가는 고객이 생긴다는 것을 현장에서 확인했습니다.'],
      ['제안', '매니저에게 창고·매장 응대·캐셔로 역할을 나누는 운영 방식을 제안했습니다. 인력을 늘리지 않고 같은 인원으로 동선만 정리하는 방법이라 바로 적용할 수 있었습니다.'],
      ['결과', '실제 매장 운영에 적용됐고, 불필요한 동선이 줄면서 응대 공백과 놓치는 고객이 줄었습니다. 1년간 근무하며 제안이 자리 잡는 과정까지 지켜봤습니다.']
    ],
    meta: [['직위', '아르바이트'], ['담당', '판매 · 매장 운영']]
  },
  'career-tax': {
    label: '경력',
    title: '화성시 동탄출장소 세무과',
    period: '2023.02.02 — 2023.02.28',
    sections: [
      ['담당 업무', '표준지방정보시스템으로 취득세·지방세 관련 행정 업무를 지원했습니다. 신고서류와 전산 등록 정보를 대조해 주소 등 불일치 항목을 확인하고, 담당자 검토를 거쳐 시스템에 반영했습니다.'],
      ['개선한 것', '미정리 세무자료가 쌓여 필요한 문서를 찾는 데 시간이 걸렸습니다. 기존 관리 기준에 따라 연도와 문서 종류별로 분류하고 파일철을 다시 정비했습니다.'],
      ['결과', '자료의 정확성을 유지하면서 필요한 문서를 빠르게 찾을 수 있게 했고, 이후에도 같은 기준으로 관리되도록 상태를 정리해 두었습니다. 공공 행정에서 기준에 따른 처리와 정확한 기록이 왜 중요한지를 배웠습니다.']
    ],
    meta: [['직위', '인턴'], ['담당', '세무과 행정 지원']]
  },

  /* --- 대외활동 --- */
  'act-ssafy': {
    label: '대외활동',
    title: '삼성청년SW·AI아카데미 (SSAFY)',
    period: '2026.01.07 — 2026.12.01 · 삼성전자, 고용노동부',
    sections: [
      ['과정', '삼성전자와 고용노동부가 주관하는 1,725시간 SW·AI 집중 교육 과정을 이수하는 중입니다.'],
      ['한 일', '금융 데이터를 활용한 디지털 금융 서비스 프로젝트를 서비스 기획부터 구현까지 직접 수행하고 있습니다. 한 학기마다 팀을 새로 꾸려 주제 선정과 기획, 개발, 발표를 반복합니다.'],
      ['결과', '1학기 프로젝트로 우수상을 받았습니다. 짧은 주기로 기획을 검증받는 경험을 쌓고 있습니다.']
    ],
    meta: [['역할', '교육생 (진행 중)'], ['과정 분량', '1,725시간 · 2026.12 수료 예정']]
  },
  'act-english': {
    label: '대외활동',
    title: '영어 집중 교육 과정',
    period: '2024.06.30 — 2024.07.27 · Jocson College ESL Center',
    sections: [
      ['과정', '필리핀 현지에서 약 200시간의 영어 집중 교육을 이수했습니다.'],
      ['남은 것', '의사소통 능력을 끌어올렸고, 현지 생활과 다양한 사람들과의 교류를 통해 낯선 환경에 적응하는 경험을 쌓았습니다. 이후 OPIc IH를 취득했습니다.']
    ],
    meta: [['이수 시간', '200시간'], ['장소', '필리핀']]
  },
  'act-global': {
    label: '대외활동',
    title: '글로벌 경영실무자 양성과정',
    period: '2023.06 — 2024.12.12 · 한국산업인력공단',
    sections: [
      ['과정', '한국산업인력공단이 주관하는 글로벌 경영실무자 양성과정을 1년 6개월에 걸쳐 이수했습니다.'],
      ['배운 것', '경영 실무 전반을 다루는 장기 과정으로, 전공에서 배운 경영학을 실무 관점에서 다시 정리하는 계기가 됐습니다.']
    ],
    meta: [['주관', '한국산업인력공단'], ['기간', '약 1년 6개월']]
  },
  'act-club': {
    label: '대외활동',
    title: '경제·경영 동아리',
    period: '2023.03 — 2023.12',
    sections: [
      ['활동', '교내 경제·경영 동아리에서 활동하며 우산대여사업을 운영했습니다.'],
      ['한 일', '비 오는 날 우산이 없어 곤란을 겪는 학생들을 위해 우산을 대여하고 회수하는 과정을 운영했습니다. 작지만 직접 굴려 본 첫 서비스였습니다.']
    ],
    meta: [['역할', '동아리원'], ['운영', '우산대여사업']]
  }
};
const root = document.documentElement;
let lang = 'ko';              /* applyTheme 이 먼저 호출되므로 위에서 선언한다 */
let lastDetailKey = null;
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
  const base = details[key];
  if (!base) return;
  /* 영어일 때는 번역본을 덮어쓴다 (없는 항목은 한국어 그대로) */
  const item = lang === 'en' ? { ...base, ...(window.I18N_EN?.details?.[key] || {}) } : base;
  lastDetailKey = key;

  modal.querySelector('.modal-label').textContent = item.label;
  modal.querySelector('h2').textContent = item.title;
  modal.querySelector('.modal-period').textContent = item.period || '';

  /* 기획 의도 · 내 역할 · 결과처럼 꼬리표를 붙여 나눠 보여준다 */
  const body = modal.querySelector('.modal-body');
  body.replaceChildren();
  (item.sections || []).forEach(([label, text]) => {
    const block = document.createElement('div');
    block.className = 'body-block';
    const head = document.createElement('h3');
    head.className = 'body-label';
    head.textContent = label;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    block.append(head, paragraph);
    body.append(block);
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
  const ui = window.I18N_EN?.ui;
  const dayNight = lang === 'en' ? [ui?.night || 'Night', ui?.day || 'Day'] : ['밤', '낮'];
  themeButton.lastChild.textContent = theme === 'light' ? dayNight[0] : dayNight[1];
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

/* =========================================================
   언어 전환 — HTML은 한국어 그대로 두고 화면 글자만 바꿔 끼운다
   ========================================================= */
const langButton = document.querySelector('.lang-toggle');
const TRANSLATABLE = [
  '.skip-link', '.wordmark', 'nav a', '.tag', '.hero h1 .l b', '.lead', '.btn', '.scroll-cue',
  '.win-bar span:not(.modal-label)', '.player-head strong', '.player-focus', '.player dt', '.player dd',
  '.stage-head h2', '.stage-sub',
  '.card-kind', '.card h3', '.card-desc', '.tags li', '.card-go',
  '.row h3', '.row p', '.badge',
  '.ending .chip', '.ending h2', 'footer',
  '.deck-label', '.deck-link', '.project-link'
].join(',');


function applyLang(next) {
  const dict = window.I18N_EN || { text: {}, html: {} };
  lang = next;
  root.lang = next === 'en' ? 'en' : 'ko';

  document.querySelectorAll(TRANSLATABLE).forEach(el => {
    /* 원문은 한 번만 저장해 둔다 */
    if (el.dataset.ko === undefined) el.dataset.ko = el.innerHTML.trim();
    const ko = el.dataset.ko;
    if (next === 'ko') {
      el.innerHTML = ko;
      return;
    }
    const asHtml = dict.html?.[ko];
    if (asHtml) { el.innerHTML = asHtml; return; }
    const asText = dict.text?.[ko];
    if (asText) el.textContent = asText;
  });

  document.title = next === 'en' ? (dict.ui?.title || document.title) : '박성연 | 포트폴리오';
  applyTheme(currentTheme);          /* 테마 버튼 글자도 언어를 따른다 */
  /* textContent 를 쓰면 안의 아이콘이 지워진다 — 텍스트 노드만 바꾼다 */
  langButton.lastChild.textContent = next === 'en' ? '한국어' : 'EN';
  /* 열려 있는 상세 창도 같이 바꾼다 */
  if (modal.open && lastDetailKey) showDetail(lastDetailKey);
  try { localStorage.setItem('lang', next); } catch (e) { /* 저장 못 해도 동작에는 지장 없다 */ }
}

let savedLang = 'ko';
try { if (localStorage.getItem('lang') === 'en') savedLang = 'en'; } catch (e) {}
applyLang(savedLang);

langButton.addEventListener('click', () => applyLang(lang === 'en' ? 'ko' : 'en'));
