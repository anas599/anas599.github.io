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
  <button id='see-project-btn' class='${i}' onclick='popUpFun()'>See Project</button>
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

let index = seeProjectBtn.classList[0];
console.log(index);
popUp.innerHTML = `<button class="close-popUp" onclick="close()">X</button>
  <img style='width: 20%' src='${projectsInfo[index].featuredImage}'>
  <h1>${projectsInfo[index].name}</h1>
  <ul>${projectsInfo[0].technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}
  </ul>
  <p>${projectsInfo[0].description}`;
