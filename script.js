const projects = {
  stock: { count:'01 / 05', title:'주주 될래말래?', period:'2026.08.18 — 2026.09.28', tags:['Fintech','Game','Data'], role:'기획 · QA · 프론트엔드 · 백엔드 · 데이터', stack:'React · TypeScript · Phaser.js · Spring Boot · Java · Socket.IO · REST API', description:'경제 지식을 러닝 퀴즈 게임으로 학습하고, 획득한 코인으로 실제 주가 데이터를 활용한 모의투자까지 경험하는 금융 학습 서비스입니다. KOSPI·KOSDAQ의 과거 데이터를 적용해 매수, 매도, 평가금액, 수익률을 계산하고 15분 동안 하루의 주가 흐름을 압축해 경험하도록 구현했습니다. 배포 후 Google Analytics로 방문과 주요 기능 이용, 이탈 흐름을 수집해 서비스 개선에 활용했습니다.' },
  room: { count:'02 / 05', title:'방방봐', period:'2026.07.13 — 2026.08.14', tags:['Proptech','AI','Realtime'], role:'기획 · QA · 프론트엔드 · AI', stack:'React · TypeScript · Vite · PostgreSQL · Socket.IO · Python · YOLOv11 · WebRTC', description:'장거리 이동의 부담과 영상통화만으로 하자를 확인하기 어렵다는 문제에서 출발한 원격 부동산 검수 서비스입니다. 예약부터 실시간 매물 확인, AI 하자 검수, 결과 확인까지의 흐름을 기획했습니다. API 명세 작성과 예약 UI 구현, 반복 테스트에 참여하고 WebRTC와 AI 탐지를 결합해 비대면 환경에서도 매물 상태를 확인할 수 있게 했습니다.' },
  housing: { count:'03 / 05', title:'AI 청약네비', period:'2026.05.01 — 2026.06.28', tags:['Govtech','Recommendation','Data'], role:'기획 · QA · 프론트엔드 · 백엔드 · 데이터', stack:'Python · Vue.js · Django · SQLite · REST API', description:'복잡한 자격 조건과 어려운 용어 때문에 사용자가 자신에게 해당하는 공고를 판단하기 어렵다는 문제에서 출발했습니다. 조건에 맞는 공고 확인, 용어 설명, 주요 일정 관리 흐름을 설계하고 구현했습니다. Django 기반 REST API와 데이터 처리에도 참여해 흩어진 정보를 실제 신청 여부를 판단할 수 있는 구조로 바꿨습니다.' },
  plant: { count:'04 / 05', title:'정원지키미', period:'2026.04.12 — 2026.04.20', tags:['Backend','REST API','Lifestyle'], role:'백엔드', stack:'JavaScript · React · TypeScript · MySQL · Django', description:'Django 기반 REST API로 반려식물 정보와 관리 기능을 구현했습니다. MySQL을 활용해 사용자와 식물 데이터를 설계·관리하고 CRUD 기능을 개발했으며, React·TypeScript 프론트엔드와 안정적으로 통신하는 API 환경을 구축했습니다.' },
  busan: { count:'05 / 05', title:'부산투어리즘', period:'2023.05.02 — 2023.06.17', tags:['Travel','Frontend'], role:'프론트엔드', stack:'JavaScript · React · TypeScript · MySQL', description:'부산 관광 정보를 탐색하고 여행 계획을 세울 수 있는 웹 서비스입니다. React와 TypeScript를 활용해 관광 정보 조회와 계획 수립 화면을 구현하며 프론트엔드 개발 경험을 쌓았습니다.' }
};

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const progress = document.querySelector('.scroll-progress span');
const parallaxEls = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? scrollY / max * 100 : 0}%`;
  parallaxEls.forEach((el) => el.style.transform = `translateY(${scrollY * Number(el.dataset.parallax)}px)`);
}, { passive:true });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.classList.toggle('open'); nav.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }));

const modal = document.querySelector('.project-modal');
function openProject(key){ const data=projects[key]; if(!data)return; modal.querySelector('.modal-count').textContent=data.count; modal.querySelector('#modal-title').textContent=data.title; modal.querySelector('.modal-period').textContent=data.period; modal.querySelector('.modal-description').textContent=data.description; modal.querySelector('.modal-role').textContent=data.role; modal.querySelector('.modal-stack').textContent=data.stack; modal.querySelector('.modal-tags').innerHTML=data.tags.map(tag=>`<span>${tag}</span>`).join(''); modal.showModal(); document.body.style.overflow='hidden'; }
document.querySelectorAll('.project-card').forEach((card)=>{ card.addEventListener('click',()=>openProject(card.dataset.project)); card.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(card.dataset.project)}}); });
function closeModal(){modal.close();document.body.style.overflow=''}
modal.querySelector('.modal-close').addEventListener('click',closeModal); modal.addEventListener('click',(e)=>{if(e.target===modal)closeModal()}); modal.addEventListener('close',()=>document.body.style.overflow='');

document.querySelectorAll('.archive-tabs button').forEach((button)=>button.addEventListener('click',()=>{ document.querySelectorAll('.archive-tabs button').forEach((b)=>b.classList.remove('active')); document.querySelectorAll('.tab-panel').forEach((panel)=>panel.classList.remove('active')); button.classList.add('active'); document.getElementById(button.dataset.tab).classList.add('active'); }));
