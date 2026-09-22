/* =========================================================
   영어 버전 사전
   HTML은 한국어를 그대로 두고, 화면의 글자만 바꿔 끼운다.
   키는 한국어 원문 자체다 — 원문이 바뀌면 여기 키도 같이 고칠 것.
   ========================================================= */

window.I18N_EN = {
  /* <br>이 들어가 통째로 갈아끼워야 하는 것 */
  html: {
    '다음에 만들 답을<br>기다리고 있습니다.': 'Waiting for the next<br>problem worth solving.',
    '박성연<span>_</span>': 'SUNGYEON<span>_</span>'
  },

  /* 문서 제목과 테마 버튼처럼 JS가 직접 넣는 글자 */
  ui: {
    title: 'Sungyeon Park | Portfolio',
    day: 'Day',
    night: 'Night'
  },

  text: {
    /* ── 머리말 ── */
    '프로젝트로 건너뛰기': 'Skip to projects',
    '프로젝트': 'Projects',
    '기록': 'Records',
    '연락처': 'Contact',

    /* ── 첫 화면 ── */
    '서비스 기획 · 비즈니스': 'SERVICE PLANNING · BUSINESS',
    '관찰하고,': 'Observe,',
    '설계하고,': 'design,',
    '끝까지 만듭니다.': 'and ship it.',
    '사용자가 어디서 멈추는지 찾아 서비스의 방향을 정합니다. 직접 만들어 본 경험이 있어 실현 가능한 범위로 기획하고, 데이터로 결과를 확인하는 박성연입니다.':
      'I find where users get stuck and decide where a service should go. Having built products myself, I scope plans that can actually ship and check the result against data.',
    '▶ 프로젝트 보기': '▶ View projects',
    '▼ 아래로 ▼': '▼ SCROLL ▼',

    /* ── 프로필 카드 ── */
    '프로필': 'Profile',
    '박성연': 'Sungyeon Park',
    '사용자가 이해하고 선택할 수 있는 서비스를 기획합니다.':
      'I plan services people can actually understand and choose.',
    '전공': 'MAJOR',
    '현재': 'NOW',
    '관심': 'FOCUS',
    '경영학(주) · 컴퓨터공학(복)': 'Business Admin · Computer Science',
    '삼성청년SW·AI아카데미': 'Samsung SW·AI Academy (SSAFY)',
    '기획 · 금융 · 데이터 · AI': 'Planning · Finance · Data · AI',

    /* ── 섹션 제목 ── */
    '만든 서비스 5개 · 카드를 누르면 상세가 열립니다': '5 services · tap a card for details',
    '수상': 'Awards',
    '3건 · 항목을 누르면 상세가 열립니다': '3 records · tap a row for details',
    '경력': 'Experience',
    '2건 · 항목을 누르면 상세가 열립니다': '2 records · tap a row for details',
    '대외활동': 'Activities',
    '4건': '4 records',
    '자격 · 어학': 'Certificates · Language',
    '학력 · 장학': 'Education · Scholarships',
    '학력 1건 · 장학 8건 · 누적 7,292,000원': '1 degree · 8 scholarships · KRW 7,292,000 total',

    /* ── 프로젝트 카드 ── */
    '금융 학습 · 모의투자': 'Finance learning · Mock investing',
    '주주 될래말래?': 'Will You Be a Shareholder?',
    '실제 주가 데이터를 게임처럼 배우고 경험하는 서비스':
      'Learn the market as a game, then invest with real price data',
    '원격 부동산 검수': 'Remote property inspection',
    '방방봐': 'BangBangBwa',
    '실시간 통신과 AI 하자 탐지를 결합한 서비스':
      'Live video paired with AI defect detection',
    '맞춤 청약 안내': 'Personalized housing guide',
    'AI 청약네비': 'AI Housing Navigator',
    '복잡한 자격 조건을 이해하기 쉽게 안내하는 서비스':
      'Turns complex eligibility rules into plain guidance',
    '반려식물 관리': 'Plant care',
    '정원지키미': 'Grow-Keeper',
    '식물 정보와 관리 기록을 연결한 서비스': 'Connects plant data with care records',
    '여행 계획': 'Trip planning',
    '부산투어리즘': 'Busan Tourism',
    '관광 정보 탐색과 계획을 한 흐름으로 만든 서비스': 'Search and plan a trip in one flow',
    '자세히 보기 ▶': 'View details ▶',

    /* 역할 태그 */
    '기획': 'Planning',
    '프론트': 'Frontend',
    '백엔드': 'Backend',
    '데이터': 'Data',

    /* ── 수상 ── */
    '삼성청년 SW·AI 아카데미 관통 프로젝트': 'SSAFY Capstone Project',
    '생성형 AI와 금융 데이터를 활용한 로보어드바이저 서비스 · 팀원':
      'Robo-advisor built with generative AI and financial data · Team member',
    '우수상': 'Excellence Award',
    '소프트웨어 모델링 경진대회': 'Software Modeling Competition',
    '신호등 상태와 동작을 객체 단위로 설계 · 팀장':
      'Modeled traffic-light states and behavior as objects · Team lead',
    '혁신창업스크립트 경진대회': 'Innovative Startup Script Competition',
    '기내 요청 키오스크 서비스 기획 · 팀장': 'In-flight request kiosk concept · Team lead',

    /* ── 경력 ── */
    '뉴발란스 코리아': 'New Balance Korea',
    '혼잡 시간대 역할 분담 방식을 제안해 매장 운영에 적용':
      'Proposed a peak-hour role split and saw it adopted in store',
    '아르바이트': 'Part-time',
    '화성시 동탄출장소 세무과': 'Hwaseong City Dongtan Branch, Tax Division',
    '취득세·지방세 행정 지원과 세무자료 관리 기준 정비':
      'Supported acquisition and local tax work; reorganized tax records',
    '인턴': 'Intern',

    /* ── 대외활동 ── */
    '삼성전자 · 고용노동부 주관 SW·AI 집중 교육 · 1,725시간 과정':
      'Intensive SW·AI program by Samsung Electronics and the Ministry of Employment and Labor · 1,725-hour course',
    '진행 중': 'In progress',
    '글로벌 경영실무자 양성과정': 'Global Business Practitioner Program',
    '한국산업인력공단': 'Human Resources Development Service of Korea',
    '이수': 'Completed',
    '영어 집중 교육 과정': 'Intensive English Program',
    'Jocson College ESL Center · 필리핀 현지 연수':
      'Jocson College ESL Center · On site in the Philippines',
    '200시간': '200 hrs',
    '경제·경영 동아리': 'Economics & Business Club',
    '우산대여사업 운영': 'Ran the campus umbrella rental service',
    '동아리': 'Club',

    /* ── 자격 · 어학 ── */
    'Google 애널리틱스 자격': 'Google Analytics Certification',
    '중급': 'Intermediate',
    'OPIc 영어': 'OPIc English',
    'ACTFL 주관 영어 말하기 평가': 'English speaking assessment by ACTFL',
    'MS Office 스페셜리스트 Excel 2016': 'MOS Excel 2016',
    'Microsoft 공인 자격': 'Microsoft certified',
    '엑스퍼트': 'Expert',
    '운전면허 2종 보통': "Driver's License (Class 2)",
    '경찰청': 'Korean National Police Agency',
    '취득': 'Licensed',

    /* ── 학력 · 장학 ── */
    '143학점 이수 · 학사 졸업': "143 credits · Bachelor's degree",
    '우수프로젝트장학금': 'Outstanding Project Scholarship',
    '교내 장학': 'University scholarship',
    '교수추천장학금': 'Professor Recommendation Scholarship',
    '장학포인트장학금': 'Scholarship Point Award',
    '성적장학금': 'Academic Merit Scholarship',
    '700,000원': 'KRW 700,000',
    '1,000,000원': 'KRW 1,000,000',
    '1,800,000원': 'KRW 1,800,000',
    '300,000원': 'KRW 300,000',
    '1,500,000원': 'KRW 1,500,000',
    '600,000원': 'KRW 600,000',
    '696,000원': 'KRW 696,000',

    /* ── 맺음 ── */
    '© 2026 박성연': '© 2026 Sungyeon Park',

    /* ── 상세 창 ── */
    '발표자료': 'Deck',
    '▶ 새 탭에서 크게 보기': '▶ Open in a new tab',
    '▶ 서비스 직접 보기': '▶ Visit the live service'
  },

  /* ── 상세 창 내용 ── */
  details: {
    stock: {
      label: 'Project 01',
      title: 'Will You Be a Shareholder?',
      sections: [
        ['Why we built it', 'Plenty of people put off investing entirely, because economics feels hard and investing feels risky. We tied the learning step and the doing step into one flow, so people could get a feel for it in an environment where they cannot lose money.'],
        ['The flow I designed', 'You answer quiz questions to earn coins, and those coins become the capital for mock investing — the reward is built so studying funds the next action rather than ending in itself. Around that sit an AI chatbot for investment terms, an AI-curated market briefing, a daily profit calendar and a ranking, closing the loop of learn → try → review.'],
        ['My role', 'I owned planning and QA, designing the service flow and screens and setting the coin reward structure and mock investing rules. I also worked on the frontend, backend and data, so the plan was carried through to the end.'],
        ['Outcome', 'Real market prices drive the buy, sell and return calculations, with a full trading day compressed into 15 minutes. After launch I connected Google Analytics to see which features people used and where they dropped off, and fed that back into the service.']
      ],
      meta: [
        ['Role', 'Planning · QA · Frontend · Backend · Data'],
        ['Stack', 'React · TypeScript · Phaser.js · Spring Boot · Java · Socket.IO · REST API']
      ]
    },
    room: {
      label: 'Project 02',
      title: 'BangBangBwa',
      sections: [
        ['Why we built it', 'Viewing a place means travelling a long way, and what you find often looks nothing like the photos. A plain video call is not enough to catch defects either — the problem came straight out of that everyday friction.'],
        ['The flow I designed', 'Booking → live viewing → AI defect inspection → result report, joined end to end. When a session ends the summary report is saved automatically, so comparing several places later is based on records rather than memory. Documents such as the property register are verified automatically and returned as a plain-language report, and the agent’s licence and identity are checked too.'],
        ['My role', 'I planned the whole flow and helped write the initial API spec. On the frontend I built the booking flow and main screens, and ran repeated feature tests to find where the flow broke.'],
        ['The hard part', 'The biggest wall was having no defect data to train on. We generated our own dataset with AI and collected photos from people living in real apartments, then labelled and trained on roughly 8,219 images of mould and wallpaper damage. Detection performance (mAP50) rose from 0.288 to 0.421. Deployment delays were solved by moving the domain to https and adding a WebRTC TURN server, and a session-termination bug by splitting the end API.'],
        ['Outcome', 'WebRTC live communication combined with AI defect detection, so a property can be assessed without going there.']
      ],
      meta: [
        ['Role', 'Planning · QA · Frontend · AI'],
        ['Stack', 'React · TypeScript · Vite · PostgreSQL · Socket.IO · WebRTC · Python · YOLOv11']
      ]
    },
    housing: {
      label: 'Project 03',
      title: 'AI Housing Navigator',
      sections: [
        ['Why we built it', 'Housing subscription notices and schedules are already public. The real problem is that eligibility rules are complex and the jargon is unfamiliar, so people cannot tell whether a given notice is one they can even apply to.'],
        ['The flow I designed', 'Enter income, cash on hand, debt and monthly savings, and the service scores the notices you can apply to. You check the location on a map, and for a chosen notice it works out the deposit and payment schedule — returning something concrete like “KRW 44m short of 52m; save KRW 2.49m a month and it works.” Jargon explanations, schedule tracking and an AI coach that lists what to do next all sit in the same flow.'],
        ['My role', 'I designed the whole service flow and the screens. I worked on the glossary and schedule features, and handled Django REST API design and data processing.'],
        ['Outcome', 'Rather than restating scattered information, the service structures it so a user can decide for themselves whether to apply.']
      ],
      meta: [
        ['Role', 'Planning · QA · Frontend · Backend · Data'],
        ['Stack', 'Python · Vue.js · Django · SQLite']
      ]
    },
    plant: {
      label: 'Project 04',
      title: 'Grow-Keeper',
      sections: [
        ['Why we built it', 'Plant information and care records live in separate places, so there is no trace of what was done and when. The service ties the two together.'],
        ['My role', 'I owned the backend: a Django REST API for plant records and care features, with user and plant data modelled in MySQL.'],
        ['Outcome', 'Built the APIs the frontend consumes, giving the service stable data exchange.']
      ],
      meta: [
        ['Role', 'Backend'],
        ['Stack', 'JavaScript · React · TypeScript · MySQL · Django']
      ]
    },
    busan: {
      label: 'Project 05',
      title: 'Busan Tourism',
      sections: [
        ['Why we built it', 'Looking up tourist information and planning the trip itself are usually separate chores; we wanted them in one flow.'],
        ['My role', 'I owned the frontend, building the information browsing and trip planning screens.'],
        ['Outcome', 'A web service for exploring Busan and putting an itinerary together.']
      ],
      meta: [
        ['Role', 'Frontend'],
        ['Stack', 'JavaScript · React · TypeScript · MySQL']
      ]
    },

    'award-ssafy': {
      label: 'Award',
      title: 'SSAFY Capstone Project',
      period: '2026.07.09 · Samsung Electronics',
      sections: [
        ['The problem', 'There is no shortage of financial products, but comparing them against your own investment style and picking one is genuinely hard.'],
        ['My role', 'As a team member I worked on service planning and feature implementation, shaping the layout and flow so recommendations and financial information were easy to read. I documented progress in Notion so the team could share work and merge features cleanly.'],
        ['Outcome', 'A robo-advisor that recommends products matched to an investment style using generative AI and financial data. The award recognised that it went beyond serving data — users could understand and compare products against their own situation.']
      ],
      meta: [['Role', 'Team member'], ['Result', 'Excellence Award']]
    },
    'award-model': {
      label: 'Award',
      title: 'Software Modeling Competition',
      period: '2024.05',
      sections: [
        ['The problem', 'A team project on how to structure traffic-light operation more efficiently.'],
        ['My role', 'As team lead I broke the lights’ states and behaviors into objects and designed the transition structure with the team. I split the work, wrote up the results and presented them.'],
        ['Outcome', 'Breaking the problem into functional units earned the Excellence Award.']
      ],
      meta: [['Role', 'Team lead'], ['Result', 'Excellence Award']]
    },
    'award-startup': {
      label: 'Award',
      title: 'Innovative Startup Script Competition',
      period: '2023.12',
      sections: [
        ['The problem', 'Calling a flight attendant over can feel like an imposition for passengers, while handling repeated individual requests is a burden for crew — a problem on both sides.'],
        ['My role', 'As team lead I developed the idea into an in-flight kiosk that lets passengers send what they need from their seat in one go, mapped the service flow and steered the pitch.'],
        ['Outcome', 'A concept that improved things for passengers and crew alike won the Excellence Award.']
      ],
      meta: [['Role', 'Team lead'], ['Result', 'Excellence Award']]
    },

    'career-nb': {
      label: 'Experience',
      title: 'New Balance Korea',
      sections: [
        ['What I did', 'Handled store sales end to end: customer service, product guidance, stock checks and payment.'],
        ['What I noticed', 'During busy weekends and events, staff kept moving between the stockroom, the floor and the register, which left customers unattended.'],
        ['What I proposed', 'I raised it with the manager and proposed splitting the work into stockroom, floor service and cashier roles — no extra headcount, just tidier movement, so it could be adopted straight away.'],
        ['Outcome', 'It was put into practice on the floor: less wasted movement, fewer gaps in service and fewer customers lost. Over a year there I saw the change settle in.']
      ],
      meta: [['Position', 'Part-time'], ['Scope', 'Sales · Store operations']]
    },
    'career-tax': {
      label: 'Experience',
      title: 'Hwaseong City Dongtan Branch, Tax Division',
      sections: [
        ['What I did', 'Supported acquisition and local tax administration through the standard local information system, cross-checking filed documents against registered records, flagging mismatches such as addresses and applying corrections after review.'],
        ['What I improved', 'Sorted unfiled tax records by year and document type under the existing standard and rebuilt the filing.'],
        ['Outcome', 'Records stayed accurate and documents became quick to retrieve, and I left the filing in a state where the same standard could be applied later. It taught me how much accurate records and consistent process matter.']
      ],
      meta: [['Position', 'Intern'], ['Scope', 'Tax division administration']]
    },

    'act-ssafy': {
      label: 'Activity',
      title: 'Samsung SW·AI Academy (SSAFY)',
      period: '2026.01.07 — 2026.12.01 · Samsung Electronics, Ministry of Employment and Labor',
      sections: [
        ['The program', 'Currently completing a 1,725-hour intensive SW and AI program run by Samsung Electronics and the Ministry of Employment and Labor.'],
        ['What I do', 'Building digital finance services on financial data, from service planning through to implementation.'],
        ['Outcome', 'Our first-semester project won an Excellence Award.']
      ],
      meta: [['Role', 'Trainee (in progress)'], ['Course', '1,725 hrs · scheduled to finish 2026.12']]
    },
    'act-global': {
      label: 'Activity',
      title: 'Global Business Practitioner Program',
      period: '2023.06 — 2024.12.12 · Human Resources Development Service of Korea',
      sections: [
        ['The program', 'Completed the Global Business Practitioner Program run by the Human Resources Development Service of Korea, over about a year and a half.'],
        ['What I took away', 'A long program covering business practice end to end, which gave me a chance to revisit what I had studied in my major from a working perspective.']
      ],
      meta: [['Host', 'HRD Korea'], ['Length', 'About 18 months']]
    },
    'act-club': {
      label: 'Activity',
      title: 'Economics & Business Club',
      period: '2023.03 — 2023.12',
      sections: [
        ['The activity', 'Part of the campus economics and business club, where we ran an umbrella rental service.'],
        ['What I did', 'We lent out umbrellas to students caught in the rain and handled their return. Small, but the first service I actually ran myself.']
      ],
      meta: [['Role', 'Club member'], ['Ran', 'Umbrella rental service']]
    },
    'act-english': {
      label: 'Activity',
      title: 'Intensive English Program',
      period: '2024.06.30 — 2024.07.27 · Jocson College ESL Center',
      sections: [
        ['The program', 'Completed roughly 200 hours of intensive English training on site in the Philippines.'],
        ['What I took away', 'Sharper communication, plus the experience of settling into an unfamiliar culture through daily life there and meeting people from different backgrounds.']
      ],
      meta: [['Hours', '200 hrs'], ['Location', 'Philippines']]
    }
  }
};
