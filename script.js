const hamIcon = document.getElementById('ham-icon');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('close-icon');

function openMenu() {
  hamIcon.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}
function closeMenu() {
  hamIcon.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}
hamIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

// import { createModal, projects } from './js folder/popup';

// menuIconMobile.addEventListener('click', openMenu);
// menuLinks.forEach((menuLink) => {
//   menuLink.addEventListener('click', closeMenu);
// });

const popup = document.querySelector('#popup');
const cardsContainer = document.querySelector('#work');


function ScreenPop() {
  popup.style.display = 'none';
}

const projectList = [
  {
    id: 0,
    title: 'TONIC',
    desc: 'Introducing EduQuest - an interactive educational platform showcased in an engaging project popup card. Immerse yourself in a world of knowledge as EduQuest offers engaging courses and collaborative learning experiences.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-1.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 1,
    title: 'TONIC',
    desc: 'Discover TravelMates - a user-friendly travel planning website. Get inspired by its captivating features showcased in a project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-2.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 2,
    title: 'TONIC',
    desc: 'Immerse in EduQuest - an interactive educational platform empowering learners. Explore its engaging courses and collaborative experiences through a project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-3.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 3,
    title: 'TONIC',
    desc: 'Introducing MarketPro - a cutting-edge e-commerce solution. Experience its seamless user interface and advanced features showcased in a dynamic project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
];

let cardsGenerator = '';

projectList.forEach((project) => {
  cardsGenerator += `
  <!-- card ${project.id} -->
    <div class="work-first">
      <div class="work-img">
        <img src="${project.imgUrl}" alt="${project.title}" />
      </div>
      <div class="work-description">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-items"> 
         ${project.tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')} 
        </ul>
        <p class="project-desc">${project.desc}</p>
        <ul class="tech-items"> 
         ${project.tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="see-project-btn" onclick="popupW(${project.id
})">See Project</button>
        </div>
      </div>
  </div>
  `;
});

cardsContainer.innerHTML = cardsGenerator;

function ScreenPop(id) {
  const popupHtmlGenerator = `
  <div class="popup-wrapper">
   <div class="popup-inner">
    <div class="popup-primary-text">
    <div class="popup-title-container">
      <h3 class="popup-title">${projectList[id].title}</h3>
      <button class="popup-cancel" onclick="popupWC()">
      <img src="img/Icon-cross.png" alt="icon cancel" class="popup-cancle-icon" />
  </button>
      </div>
    </div>
    <ul class="card-list">${projectList[id].tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')}</ul>
  </div>
    <div class="img-container">
      <div class="popup-img-box"> 
      <img src="${projectList[id].imgUrl}" alt="${projectList[id].title}" />
      </div>
    </div>
    <div class="popup-bottom">
      <div class="popup-desc">
        <p>${projectList[id].desc}</p>
      </div>
      <div class="pop-right">
      <ul class="technologies">${projectList[id].tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')}</ul>
      <img src='img/Vector4.png'>
      <div class="popup-action">
        <div class="acton-inside">
          <a href="${projectList[id].live}" target="_blank" class="popup-action-btn">See Live <img src="img/Icon-live.png" class="popup-action-btn-icon" alt="see live project icon" /></a>
        </div>
        <div class="acton-inside">
          <a href="${projectList[id].source}" target="_blank" class="popup-action-btn">See Source <img src="img/Icon-GitHub.png" class="popup-action-btn-icon" alt="github" /></a>
        </div>
      </div>
      </div>
  </div>
</div>`;
  popup.innerHTML = popupHtmlGenerator;
  popup.style.display = 'flex';
}
const x = 0;
if (x === 1) {
  popupWC();
  popupW();
}
