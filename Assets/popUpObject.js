let projectsInfo = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
];

let projectsCont = document.getElementById('work-container');

projectsCont.innerHTML = projectsInfo
  .map(
    (project, i) => `
<article>
  <img src='${project.featuredImage}'>
  <h1>${project.name}</h1>
  <ul class='lang'>${project.technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}</ul>
  <button id='see-project-btn' class='project${i}' onclick='popUpFun()'>See Project</button>
</article>`
  )
  .join('');

let seeProjectBtn = document.getElementById('see-project-btn');
const popUp = document.querySelector('.popUp');

function popUpFun() {
  popUp.style.display = 'flex';
}

let closePopUp = document.querySelector('.close-popUp');

function close() {
  popUp.style.display = 'none';
}

closePopUp.addEventListener('click', close);
popUp = document.getElementById('popup');
popUp.innerHTML = `
  <img src="${details.featuredImage}" alt="${details.description}">
  <h3 class="multi">${details.name}</h3>
  <p>${details.description}</p>
  <ul class="lang">${details.languages
    .map((language) => `<li class="l1">${language}</li>`)
    .join('')}</ul>
`;

// popUp.innerHTML = `<div>
// <img src='${projectsInfofeaturedImage}'>
//   <h1>${projectsInfo[0].name}</h1>
//   <ul class='lang'>${projectsInfo.project.technologies
//     .map((tech) => `<li class='l1'>${tech}</li>`)
//     .join('')}</ul>
// </div>`;
