/* eslint-disable no-unused-vars */
const projectsInfo = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    namePop: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    featuredImageDesktop: './Assets/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
];

const projectsCont = document.getElementById('work-container');
projectsCont.innerHTML = projectsInfo
  .map(
    (project) => `
<article class="allw scroll">
  <img src='${project.featuredImage}'>
  <h3>${project.name}</h3>
  <ul class='lang'>${project.technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}</ul>
  <button id='see-project-btn' class='see ' onclick='popUpFun()'>See Project</button>
</article>`,
  )
  .join('');

const seeProjectBtn = document.getElementById('see-project-btn');
const popUp = document.querySelector('.popUp');
const blurHead = document.getElementById('mainHead');

function popUpFun() {
  // eslint-disable-next-line no-cond-assign, no-constant-condition
  if ((popUp.style.display = 'none')) {
    popUp.style.display = 'grid';
  }
  blurHead.style.filter = 'blur(20px) contrast(50%)';
}
function closePopUp1() {
  // eslint-disable-next-line no-constant-condition, no-cond-assign
  if ((popUp.style.display = 'flex')) {
    popUp.style.display = 'none';
    blurHead.style.filter = 'none';
  }
}

popUp.innerHTML = `
<div id="imageCloseBtn">
<button class="close-popUp fa fa-times "   onclick='closePopUp1()'></button>
<img class="projectImage" src='${projectsInfo[1].featuredImageDesktop}'>
</div>

  <div class="rest">
  <div class="h3">
<h3 class="h33">${projectsInfo[0].namePop}</h3>
<ul class='languagesPopW'>${projectsInfo[0].technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}
</ul>
</div>

<p class="p">${projectsInfo[0].description}</p>
<div id="buttonsLive" class="buttonsLive">

<a  class="noUline" href="https://anas599.github.io">
<button class='seeLivebtn'> See Live</button></a>

<a  class="noUline" href="https://github.com/anas599/anas599.github.io">
<button class='seeSourcebtn'> See Source</button></a>

</div>
`;
