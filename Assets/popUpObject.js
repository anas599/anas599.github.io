const projectsInfo = [
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "./Assets/Snapshoot.png",
    featuredImageDesktop: "./Assets/Snapshoot Portfolio desktop.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://github.com/anas599/anas599.github.io",
    sourceLink: "https://anas599.github.io/",
  },
];

const projectsCont = document.getElementById('work-container');

projectsCont.innerHTML = projectsInfo
  .map(
    (project, i) => `
<article class="allw">
  <img src='${project.featuredImage}'>
  <h3>${project.name}</h3>
  <ul class='lang'>${project.technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join("")}</ul>
  <button id='see-project-btn' class='see' onclick='popUpFun()'>See Project</button>
</article>` //class='project${i}
  )
  .join("");

const seeProjectBtn = document.getElementById('see-project-btn');
const popUp = document.querySelector('.popUp');
const blurHead = document.getElementById('mainHead');

function popUpFun() {
  if(popUp.style.display = "none"){
  popUp.style.display = "flex";
    // if(popUp.style.display = "flex"){
    //   popUp.style.display = "none"
    // }
}
  // popUp.style.just
  blurHead.style.filter = "blur(20px) contrast(50%)";
}
function closePopUp1() {
    if(popUp.style.display = "flex"){
      popUp.style.display = "none"
      blurHead.style.filter = "none";

    }
}



popUp.innerHTML = `
<div id="imageCloseBtn">
  <button class="close-popUp fa fa-times"   onclick='closePopUp1()'></button>
  <img id="imagePopUp" src='${projectsInfo[1].featuredImageDesktop}'>
  </div>
<h3>${projectsInfo[0].name}</h3>
<ul class='lang'>${projectsInfo[0].technologies
  .map((tech) => `<li class='l1'>${tech}</li>`)
  .join("")}
</ul>
</ul>
<p style="width: 80vw">${projectsInfo[0].description}</p>
<div id="buttonsLive">
<button id='see-project-btnPop  ' class='see fa fa-arrow-circle-up' style='width: 150'>   See Source</button>
<button id='see-project-btnPop' class='see fa fa-github'style='width: 150 onclick="window.location.href='https://github.com'">See project</button></div>

`;