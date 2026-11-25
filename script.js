/* =========================================================
   박성연 포트폴리오 — 픽셀 테마
   · 항목을 누르면 상세 창이 열린다
   ========================================================= */

/* ---------- 상세 내용 ---------- */
const details = {
  /* --- 프로젝트 --- */
  stock: {
    label: '프로젝트 02',
    title: '주주 될래말래?',
    period: '2026.07 — 2026.08',
    sections: [
      ['프로젝트 소개', '경제 퀴즈와 모의투자를 결합한 금융 학습 서비스입니다. 퀴즈로 익힌 경제 개념과 획득 재화를 실제 주가 데이터 기반의 모의투자로 이어지게 설계했습니다.'],
      ['담당 역할', 'React 기반 모의투자 화면과 Phaser.js 기반 경제 퀴즈 게임을 구현했습니다. 실제 주가 데이터를 수집·압축해 투자 경험에 적용하고, GA4 지표 분석 뒤 자체 제작 굿즈(클리커) 이벤트를 운영해 참여율을 높였습니다.'],
      ['결과', '분석 결과 뉴스 클릭률 1.5%를 확인해 뉴스 콘텐츠의 보상·랭킹 요소를 강화하는 개선 방향을 도출했습니다. 이 과정을 인정받아 프로젝트 우수상을 수상했습니다.']
    ],
    meta: [
      ['담당 역할', '프론트엔드 · 게임 구현 · 데이터 처리 · GA4 분석'],
      ['기술 스택', 'React · TypeScript · Phaser.js · Socket.IO · PostgreSQL · GA4']
    ],
    media: [
      { src: 'assets/projects/stock/image%2029.png', alt: '주주 될래말래 메인 화면' },
      { src: 'assets/projects/stock/%EC%A3%BC%EC%8B%9D%EB%AA%A9%EB%A1%9D.png', alt: '실시간 주식 목록 화면' },
      { src: 'assets/projects/stock/%EB%9E%AD%ED%82%B9.png', alt: '투자 랭킹 화면' },
      { src: 'assets/projects/stock/image%2039.png', alt: '게임 진행 화면' }
    ]
  },
  room: {
    label: '프로젝트 03',
    title: '방방봐 (방을 방송으로 봐)',
    period: '와이그램 외주 프로젝트',
    sections: [
      ['프로젝트 소개', '원격으로 매물을 확인하려는 사회초년생을 위한 라이브 매물 투어 서비스입니다. WebRTC 실시간 투어와 체크리스트 동기화, AI 하자 탐지, 등기부등본·건축물대장 요약 기능을 제공합니다.'],
      ['담당 역할', '프론트엔드와 AI를 맡아 원격 투어·체크리스트 화면을 구현하고, 하자 이미지 탐지를 위한 YOLOv11 모델 학습과 성능 개선을 진행했습니다.'],
      ['결과', '하자 탐지 모델의 mAP50을 초기 0.2대에서 0.508까지 개선했습니다. 방문 전에는 알기 어려운 정보를 보완해 더 정확한 매물 선택을 돕습니다.']
    ],
    meta: [
      ['담당 역할', '프론트엔드 · AI 모델 학습'],
      ['기술 스택', 'React · TypeScript · Vite · PostgreSQL · Socket.IO · WebRTC · Python · YOLOv11']
    ],
    media: [
      { src: 'assets/projects/bangbangbwa/1-trimmed.png', alt: '방방봐 매물 탐색과 상세 화면', contain: true, wide: true },
      { src: 'assets/projects/bangbangbwa/2-trimmed.png', alt: '방방봐 예약 화면', contain: true, wide: true },
      { src: 'assets/projects/bangbangbwa/3-trimmed.png', alt: '방방봐 실시간 방송 화면', contain: true, wide: true },
      { src: 'assets/projects/bangbangbwa/4-trimmed.png', alt: '방방봐 AI 하자 검수 화면', contain: true, wide: true }
    ],
    deck: {
      embed: 'https://www.canva.com/design/DAHReT0M3sY/wtv3jj2lyr-QDYfz_xbOlg/view?embed',
      url: 'https://www.canva.com/design/DAHReT0M3sY/wtv3jj2lyr-QDYfz_xbOlg/view'
    }
  },
  housing: {
    label: '프로젝트 04',
    title: 'AI 청약네비',
    period: '2026.08 — 2026.09',
    sections: [
      ['프로젝트 소개', '복잡한 청약 자격과 공고 내용을 쉽게 확인하도록 돕는 청약 정보 서비스입니다. 사용자 조건에 맞는 공고 선별, 용어 설명, 일정 관리 기능을 제공합니다.'],
      ['담당 역할', '프론트엔드와 백엔드 개발을 맡아 사용자 조건 입력, 청약 공고 조회, 공고 데이터 처리와 화면 연동을 구현했습니다.'],
      ['결과', '청약 정보를 사용자 조건에 맞춰 확인할 수 있도록 구현해, SSAFY 1학기 프로젝트 우수상을 수상했습니다.']
    ],
    meta: [
      ['담당 역할', '프론트엔드 · 백엔드 개발'],
      ['기술 스택', 'Vue · Vite · Pinia · Tailwind CSS · Django REST Framework · SQLite · pypdf']
    ],
    media: [
      { src: 'assets/projects/housing/conditions.jpg', alt: '소득·자금 조건을 입력하는 화면' },
      { src: 'assets/projects/housing/map-light.jpg', alt: '지도에서 청약 공고를 찾는 화면' },
      { src: 'assets/projects/housing/roadmap.jpg', alt: '계약금과 납부 일정을 계산한 자금 로드맵 화면' },
      { src: 'assets/projects/housing/coach.jpg', alt: '해야 할 일을 정리해 주는 AI 코치 화면' }
    ]
  },
  plant: {
    label: '프로젝트 05',
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
    label: '프로젝트 06',
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
  wigram: {
    label: '프로젝트 01 · CLIENT WORK',
    title: '안바름을 이겨라',
    period: '2026.10 — 2026.11 · 와이그램 기업 외주 개발 프로젝트',
    sections: [
      ['프로젝트 소개', '와이그램으로부터 안바름 캐릭터 IP를 활용한 AI 음성 알람 앱 개발을 의뢰받아 진행한 기업 외주 프로젝트입니다. EBS 방영 연계, MZ세대 타깃, B급 감성과 최신 밈을 활용한 애플리케이션을 요청받았습니다.'],
      ['담당 역할', '팀장으로서 Flutter 앱의 주요 화면을 구현하고 매주 기업 미팅을 주도했습니다. 목소리 IP 기반 AI 모델 제작과 최신 밈·노래를 접목한 콘텐츠 구현에도 참여했습니다.'],
      ['결과', '기업으로부터 긍정적인 평가를 받았으며, 실제 서비스 출시를 위한 앱 배포 준비가 진행 중입니다.']
    ],
    meta: [['프로젝트 유형', '기업 외주 개발'], ['클라이언트', '와이그램'], ['기술 스택', 'Flutter · STT/TTS · LLM · Firebase · FCM'], ['담당 역할', '팀장 · Flutter 주요 화면 · 기업 미팅']],
    gallery: 'mobile',
    media: [
      { src: 'assets/projects/anbarum/alram1.png', alt: '안바름을 이겨라 로그인 화면', contain: true },
      { src: 'assets/projects/anbarum/alram2.png', alt: '안바름을 이겨라 닉네임 설정 화면', contain: true },
      { src: 'assets/projects/anbarum/alram3.png', alt: '안바름을 이겨라 알람 설정 화면', contain: true },
      { src: 'assets/projects/anbarum/%EC%95%8C%EB%9E%8C%20%EB%93%B1%EB%A1%9D%20%28%EB%AF%B8%EC%85%98%20%EC%84%A4%EC%A0%95%29.png', alt: '안바름을 이겨라 미션 설정 화면', contain: true },
      { src: 'assets/projects/anbarum/%EB%AF%B8%EC%85%98%20%28%ED%9E%8C%ED%8A%B8%EA%B6%8C%29.png', alt: '안바름을 이겨라 상식 퀴즈 미션 화면', contain: true },
      { src: 'assets/projects/anbarum/%EC%8A%A4%ED%8A%B8%EB%A6%AD.png', alt: '안바름을 이겨라 스트릭 기록 화면', contain: true },
      { src: 'assets/projects/anbarum/%EA%B7%B8%EB%A3%B9%EB%B0%A9%20%EB%A9%94%EC%9D%B8.png', alt: '안바름을 이겨라 그룹방 메인 화면', contain: true }
    ]
  },

  /* --- 수상 --- */
  'award-ssafy': {
    label: '수상',
    title: '삼성청년 SW·AI 아카데미 특화 프로젝트 「주주 될래말래」',
    period: '2026.09.28 · 삼성전자',
    sections: [
      ['수상 프로젝트', '경제 퀴즈의 보상을 실데이터 기반 모의투자 자산으로 전환하는 금융 학습 서비스 「주주 될래말래?」입니다.'],
      ['기여', 'React 모의투자 화면과 Phaser.js 퀴즈 게임을 구현하고, 주가 데이터 처리와 GA4 기반 사용자 반응 분석·개선 이벤트 운영에 참여했습니다.'],
      ['성과', '뉴스 클릭률 1.5% 분석을 바탕으로 보상과 랭킹 개선 방향을 도출한 점을 포함해 서비스 완성도를 인정받아 우수상을 수상했습니다.']
    ],
    meta: [['수상', '우수상'], ['주관', '삼성전자'], ['역할', '기획 · QA · 구현 참여']],
    media: [
      { src: 'assets/projects/stock/lobby.jpg', alt: '수상 프로젝트 주주 될래말래 게임 로비 화면' },
      { src: 'assets/projects/stock/briefing.jpg', alt: '수상 프로젝트 주주 될래말래 시장 브리핑 화면' }
    ]
  },
  'award-ssafy-progress': {
    label: '수상',
    title: '삼성청년 SW·AI 아카데미 1학기 프로젝트 「AI 청약네비」',
    period: '2026.07.09 · 삼성전자',
    sections: [
      ['수상 프로젝트', '사용자 조건에 맞는 청약 공고를 선별하고, 신청 자격·용어·일정을 확인할 수 있도록 구성한 청약 정보 서비스입니다.'],
      ['기여', 'Vue 기반 화면과 Django REST Framework 기반 데이터 처리를 연결해 조건 입력과 청약 공고 조회 기능을 구현했습니다.'],
      ['성과', '복잡한 청약 정보를 개인 조건에 맞춰 확인하게 만든 서비스 완성도를 인정받아 1학기 프로젝트 우수상을 받았습니다.']
    ],
    meta: [['수상', '우수상'], ['주관', '삼성전자'], ['역할', '기획 · 구현 참여']],
    media: [
      { src: 'assets/projects/housing/conditions.jpg', alt: 'AI 청약네비 조건 입력 화면' },
      { src: 'assets/projects/housing/map-light.jpg', alt: 'AI 청약네비 공고 탐색 화면' },
      { src: 'assets/projects/housing/roadmap.jpg', alt: 'AI 청약네비 자금 로드맵 화면' },
      { src: 'assets/projects/housing/coach.jpg', alt: 'AI 청약네비 AI 코치 화면' }
    ]
  },
  'award-model': {
    label: '수상',
    title: '소프트웨어 모델링 경진대회',
    period: '2024.05',
    sections: [
      ['수상 프로젝트', '신호등의 상태와 동작을 객체 단위로 나누어 운영 흐름을 구조화한 소프트웨어 모델링 프로젝트입니다.'],
      ['기여', '팀장으로서 모델링 방향을 정하고 역할을 조율했으며, 상태 전환 구조 설계와 결과 발표를 맡았습니다.'],
      ['성과', '복잡한 동작을 기능 단위로 분해해 이해하기 쉬운 구조로 만든 점을 인정받아 우수상을 받았습니다.']
    ],
    meta: [['수상', '우수상'], ['역할', '팀장'], ['분야', '객체지향 모델링']]
  },
  'award-startup': {
    label: '수상',
    title: '혁신창업스크립트 경진대회',
    period: '2023.12',
    sections: [
      ['수상 프로젝트', '기내에서 승객이 좌석에서 필요한 요청을 간편하게 전달하고, 승무원은 요청을 효율적으로 확인할 수 있도록 기획한 기내 키오스크 서비스입니다.'],
      ['기여', '팀장으로서 아이디어를 구체화하고 사용자 이용 흐름과 발표 방향을 정리하며 팀 작업을 조율했습니다.'],
      ['성과', '승객의 요청 부담과 승무원의 반복 업무를 함께 줄이는 서비스 기획으로 우수상을 받았습니다.']
    ],
    meta: [['수상', '우수상'], ['역할', '팀장'], ['분야', '서비스 기획']]
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

  /* --- 교육 내역 --- */
  'act-ssafy': {
    label: '교육 내역',
    title: '삼성청년SW·AI아카데미 (SSAFY)',
    period: '2026.01 — 2026.12 · 삼성전자',
    sections: [
      ['과정', '삼성전자가 운영하는 약 1년의 실무형 SW·AI 교육 프로그램 15기에 참여해 데이터 처리·분석과 AI 활용 역량을 집중적으로 쌓고 있습니다.'],
      ['학습', '팀 프로젝트를 반복하며 서비스 기획부터 구현·검증까지 경험하고, 데이터와 AI를 실제 문제 해결에 연결하는 방식을 익혔습니다.'],
      ['성과', '프로젝트 우수상 2회와 베스트 멤버 2회 선정으로 학습 성과와 협업 역량을 인정받았습니다.']
    ],
    meta: [['기관', '삼성전자'], ['과정', 'SW·AI 실무 교육 15기'], ['상태', '2026.12 수료 예정']]
  },
  'act-english': {
    label: '교육 내역',
    title: 'English Proficiency Course',
    period: '2024.06 — 2024.07 · Jocson College ESL Center',
    sections: [
      ['과정', '필리핀 ESL 센터에서 약 200시간 동안 회화와 비즈니스 커뮤니케이션 중심의 영어 교육을 이수했습니다.'],
      ['경험', '현지 생활과 다국적 학습자들과의 교류를 통해 실전 의사소통 능력과 낯선 환경에 적응하는 감각을 함께 키웠습니다.']
    ],
    meta: [['기관', 'Jocson College ESL Center'], ['이수 시간', '약 200시간'], ['장소', '필리핀']]
  },
  'act-global': {
    label: '교육 내역',
    title: '글로벌 경영 실무자 양성과정',
    period: '2023.06 — 2024.12 · 한국산업인력공단',
    sections: [
      ['과정', '한국산업인력공단의 글로벌 경영 실무자 양성과정에 참여해 장기간 글로벌 비즈니스와 경영 실무를 학습했습니다.'],
      ['성장', '국제 비즈니스 환경을 바라보는 시야와 실무 감각을 넓혔고, 미국 기업 3곳의 최종 합격이라는 결과로 이어졌습니다.']
    ],
    meta: [['기관', '한국산업인력공단'], ['기간', '약 1년 6개월'], ['성과', '미국 기업 3곳 최종 합격']]
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

/* ---------- PDF 인쇄 전용: 접혀 있던 상세 내용을 한 문서로 펼친다 ---------- */
function buildPrintPortfolio() {
  const printRoot = document.createElement('main');
  printRoot.id = 'print-portfolio';

  const cover = document.createElement('section');
  cover.className = 'print-cover';
  cover.innerHTML = '<p>PORTFOLIO</p><h1>박성연</h1><strong>서비스 기획 · 게임 · 비즈니스</strong><span>기획 · 게임 · 개발 · 데이터 · AI</span>';
  printRoot.append(cover);

  const groups = [
    ['프로젝트', ['wigram', 'stock', 'room', 'housing', 'plant', 'busan']],
    ['수상', ['award-ssafy', 'award-ssafy-progress', 'award-model', 'award-startup']],
    ['경력', ['career-nb', 'career-tax']],
    ['교육 내역', ['act-ssafy', 'act-global', 'act-english']]
  ];

  groups.forEach(([heading, keys]) => {
    const section = document.createElement('section');
    section.className = 'print-section';
    const title = document.createElement('h2');
    title.textContent = heading;
    section.append(title);

    keys.forEach(key => {
      const item = details[key];
      if (!item) return;
      const entry = document.createElement('article');
      entry.className = 'print-entry';
      const entryTitle = document.createElement('h3');
      entryTitle.textContent = item.title;
      const period = document.createElement('p');
      period.className = 'print-period';
      period.textContent = item.period || '';
      entry.append(entryTitle, period);

      (item.sections || []).forEach(([label, copy]) => {
        const block = document.createElement('div');
        const blockTitle = document.createElement('h4');
        const paragraph = document.createElement('p');
        blockTitle.textContent = label;
        paragraph.textContent = copy;
        block.append(blockTitle, paragraph);
        entry.append(block);
      });

      if (item.media?.length) {
        const gallery = document.createElement('div');
        gallery.className = item.gallery === 'mobile' ? 'print-gallery print-gallery-mobile' : 'print-gallery';
        item.media.forEach(shot => {
          const image = document.createElement('img');
          image.src = shot.src;
          image.alt = shot.alt;
          gallery.append(image);
        });
        entry.append(gallery);
      }

      if (item.meta?.length) {
        const meta = document.createElement('dl');
        meta.className = 'print-meta';
        item.meta.forEach(([name, value]) => {
          const wrap = document.createElement('div');
          const dt = document.createElement('dt');
          const dd = document.createElement('dd');
          dt.textContent = name;
          dd.textContent = value;
          wrap.append(dt, dd);
          meta.append(wrap);
        });
        entry.append(meta);
      }
      section.append(entry);
    });
    printRoot.append(section);
  });

  const credentials = document.createElement('section');
  credentials.className = 'print-section';
  credentials.innerHTML = '<h2>자격 · 어학</h2><article class="print-entry"><h3>보유 자격 및 어학</h3><p class="print-period">ADsP · Google Analytics Individual Qualification · OPIc IH · MOS Excel Expert · 운전면허 2종 보통</p></article><h2>학력 · 장학</h2><article class="print-entry"><h3>경영학(주) · 컴퓨터공학(복)</h3><p class="print-period">2021.03 — 2025.02 · 143학점 이수 · 학사 졸업 · 3.83 / 4.5</p><p>교내 장학 8건, 누적 7,292,000원</p></article>';
  printRoot.append(credentials);
  document.body.append(printRoot);
}

function buildProfilePrint() {
  const printRoot = document.createElement('main');
  printRoot.id = 'print-portfolio';
  printRoot.innerHTML = '<article class="profile-print-card"><div class="profile-print-head"><i></i><span>PROFILE / PORTFOLIO</span></div><div class="profile-print-body"><h1>박성연</h1><strong>서비스 기획 · 게임 · 비즈니스</strong><p>사용자의 맥락을 발견하고, 실행 가능한 경험으로 만드는 서비스 기획자입니다.</p><div class="profile-print-info"><div><b>전공</b><span>경영학(주) · 컴퓨터공학(복)</span></div><div><b>현재</b><span>삼성청년SW·AI아카데미</span></div><div><b>관심</b><span>기획 · 게임 · 개발 · 데이터 · AI</span></div></div><p class="profile-print-invite">더 많은 프로젝트와 기록은 포트폴리오에서 확인해보세요.</p><a class="profile-print-link" href="https://sungyeon-park.site">↗ 포트폴리오 보러가기</a><a class="profile-print-url" href="https://sungyeon-park.site">https://sungyeon-park.site</a></div></article>';
  document.body.append(printRoot);
}

const printType = new URLSearchParams(window.location.search).get('print');
const isPrintMode = Boolean(printType);
if (isPrintMode) {
  document.body.classList.add('print-mode');
  if (printType === 'profile') buildProfilePrint();
  else buildPrintPortfolio();
}

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
  gallery.classList.toggle('mobile-gallery', item.gallery === 'mobile');
  (item.media || []).forEach(shot => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = shot.src;
    img.alt = shot.alt;
    img.loading = 'lazy';
    if (shot.contain) figure.classList.add('contain');
    if (shot.wide) figure.classList.add('wide');
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

const credentialNotes = {
  adsp: ['데이터를 읽고, 다음 경험을 설계합니다.', 'ADsP는 데이터 이해와 분석 기획 역량을 갖췄다는 자격입니다. 데이터 관점으로 제품 개선의 질문을 설계하는 기반으로 활용합니다.'],
  ga: ['행동 데이터를 제품의 언어로 번역합니다.', 'Google Analytics 자격을 기반으로 유입부터 전환까지의 흐름을 살피고, 다음 실험을 위한 가설을 정리합니다.'],
  opic: ['명확한 언어로 팀과 고객을 연결합니다.', 'OPIc IH는 영어 커뮤니케이션 역량을 보여주는 자격입니다. 다양한 배경의 구성원과도 맥락을 맞추며 협업할 수 있는 기반을 보여줍니다.'],
  excel: ['복잡한 정보를 실행 가능한 표로 정리합니다.', 'MOS Excel Expert는 도구 활용 역량을 보여주는 자격입니다. 산재한 정보를 빠르게 구조화하고, 팀이 판단할 수 있는 형태로 정리합니다.'],
  license: ['필요한 순간, 현장으로 먼저 갑니다.', '운전면허 2종 보통은 현장 이동과 업무 환경에 유연하게 대응할 수 있는 자격입니다.']
};
const credentialCards = document.querySelectorAll('.credential-card');
const credentialScreen = document.querySelector('.credential-screen');
if (credentialCards.length && credentialScreen) {
  credentialCards.forEach(card => card.addEventListener('click', () => {
    const [title, copy] = credentialNotes[card.dataset.credential];
    credentialCards.forEach(item => { item.classList.toggle('is-active', item === card); item.setAttribute('aria-pressed', String(item === card)); });
    credentialScreen.querySelector('.credential-title').textContent = title;
    credentialScreen.querySelector('.credential-copy').textContent = copy;
  }));
}

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
