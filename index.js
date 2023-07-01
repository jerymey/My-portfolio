/* eslint-disable no-unused-vars */
const projects = [
  {
    id: 1,
    title: 'Topic',
    name: 'CANOPY',
    back: 'Back End Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/My-portfolio/',
    years: '2015',
    Image: 'images/art.png',
    descrip: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    name: 'FACEBOOK',
    back: 'Full Stack Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/My-portfolio/',
    years: '2015',
    Image: 'images/tonic.png',
    descrip: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },
  {
    id: 3,
    title: 'Facebook 360',
    name: 'FACEBOOK',
    back: 'Full Stack Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/My-portfolio/',
    years: '2015',
    Image: 'images/yoga.png',
    descrip: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",

  },
  {
    id: 4,
    title: 'Uber Navigation',
    name: 'Uber',
    back: 'Lead Developer',
    SourceLink: '[@githubhandle](https://github.com/jerymey)',
    LiveLink: 'https://jerymey.github.io/My-portfolio/',
    years: '2018',
    Image: 'images/yoga.png',
    descrip: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  },
];
document.getElementById('work').innerHTML = projects.map((item) => `  
    <li class="works__card flex bg-white">
    <div class="works__card__img">
      <img src="${item.Image}" alt="professional art printing project" />
    </div>
    <div class="works__card__text">
      <h2 class="works__card__title fw-700 fz-32 lh-44 ctr-200">
       ${item.title}
      </h2>
      <div class="works__card__subtitle flex">
        <p class="works__card__subtitle-1 fw-600 fz-13 lh-16 clr-n-600">
         ${item.name}
        </p>
        <ul class="works__card__subtitle-ul flex">
          <li class="works__card__subtitle-li fw-600 fz-13 lh-16 clr-n-500">
           ${item.back}
          </li>
          <li class="works__card__subtitle-li fw-600 fz-13 lh-16 clr-n-500">
          ${item.years}
          </li>
        </ul>
      </div>
      <p class="works__card__dsc fw-400 fz-15 lh-24 clr-n-600">
       ${item.descrip}
      </p>
      <div class="works__card__topics flex">
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          html
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          Ruby on rails
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          css
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          javascript
        </p>
      </div>
      <div class="works__card__btn">
        <button type="button" class="btn fw-500 fz-17 lh-24 clr-p-500 bg-white" onclick="display(${item.id})">
          See Project
        </button>
      </div>
    </div>
  </li>
    <div class="popup-window" id="element-${item.id}">
    <div class="popup">
    <i class="fa fa-times" aria-hidden="true" onclick="undisplay(${item.id})">close-icon</i>
    <h1>${item.name}</h1>
    <div class="works__card__subtitle flex">
          <p class="works__card__subtitle-1 fw-600 fz-13 lh-16 clr-n-600">
            CANOPY
          </p>
          <ul class="works__card__subtitle-ul flex">
            <li class="works__card__subtitle-li fw-600 fz-13 lh-16 clr-n-500">
              Back End Dev
            </li>
            <li class="works__card__subtitle-li fw-600 fz-13 lh-16 clr-n-500">
              2015
            </li>
          </ul>
        </div>
        <div class="popup-image-container">
        <img src="${item.Image}" alt="tonic project" />
      </div>
      <div class="flex-text">
      <div class="text-section">
      <p>${item.descrip}</p>
      </div>
      <div class="button-section">
      <div class="works__card__topics flex">
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          html
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          Ruby on rails
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          css
        </p>
        <p class="works__card__topics__text fw-500 fz-12 lh-16 clr-p-400 bg-p-50">
          javascript
        </p>
      </div>
      <div class="btn">
      <button><a href="${item.LiveLink}">See Live</a></button>
      <button><a href="${item.SourceLink}">See Source</a></button>
      </div>
      </div>
      </div>
    </div>
    </div>
    `).join('');

const display = (index) => {
  const obj = document.getElementById(`element-${index}`);
  obj.style.display = 'block';
  console.log('hi');
};

function undisplay(index) {
  const obj = document.getElementById(`element-${index}`);
  obj.style.display = 'none';
}

// contact form
