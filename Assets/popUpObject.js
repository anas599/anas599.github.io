/* eslint-disable no-unused-vars */
const projectsInfo = [
  {
    name: "Space-Travelers",
    namePop: "Space-Travelers",
    description:
      "Space-Travelers a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    featuredImage: "./Assets/SpaceTravelers/Rockets-ScreenShot.webp",
    featuredImageDesktop: "./Assets/SpaceTravelers/Rockets-ScreenShot.webp",
    technologies: ["React", "CSS", "JavaScript", "Redux", "API"],
    liveLink: "https://anasdev.com/Bookstore/",
    sourceLink: "https://github.com/anas599/crypto-price",
  },
  {
    name: "Crypto Prices",
    namePop: "Crypto Prices",
    description:
      "Crypto Prices is a React.js and Redux web application that displays real-time market prices of cryptocurrencies fetched from the Coin Gecko API. Features include price history, currency conversion, and a user-friendly interface.",
    featuredImage: ".Assets/CryptoPrice/cryptoScreenShot.webp",
    featuredImageDesktop: ".Assets/CryptoPrice/cryptoScreenShot.webp",
    technologies: ["React", "CSS", "JavaScript", "Redux"],
    liveLink: "https://crypto-prices-reactjs.netlify.app/",
    sourceLink: "https://github.com/anas599/crypto-price",
  },
  {
    name: "BookStore",
    namePop: "BookStore",
    description:
      "Bookstore is a professional-grade web application built using React and Redux, aimed at creating an online platform for buying and selling books. With its user-friendly interface and seamless user experience, Bookstore allows users to browse and purchase books, manage their orders, and track their reading progress.",
    featuredImage: "./Assets/Bookstore/Bookstore.png",
    featuredImageDesktop: "./Assets/Bookstore/Bookstore.png",
    technologies: ["React", "CSS", "JavaScript", "Redux"],
    liveLink: "https://anasdev.com/Bookstore/",
    sourceLink: "https://github.com/anas599/Bookstore",
  },
  {
    name: "Leaderboard for games",
    namePop: "Leaderboard for games",
    description:
      "Leaderboard, a dynamic and interactive web project built with the latest web technologies including Webpack, JavaScript, HTML, and CSS. Our platform provides real-time ranking and score tracking for various competitions and games. With its user-friendly interface, you can easily keep track of your progress and compete with other players to reach the top of the leaderboard. Experience fast and seamless navigation, stunning graphics, and exciting gameplay with Leaderboard",
    featuredImage: "./Assets/Leaderboard/leaderboardsnap.png",
    featuredImageDesktop: "./Assets/Leaderboard/leaderboardsnap.png",
    technologies: ["WebPack", "CSS", "JavaScript", "HTML"],
    liveLink: "https://anas599.github.io/Leaderboard/dist/",
    sourceLink: "https://github.com/anas599/Leaderboard",
  },
  {
    name: "Calculator",
    namePop: "Calculator",
    description:
      "Calculator - A simple and efficient calculator built using React. This project provides a clean and user-friendly interface for performing basic mathematical operations like addition, subtraction, multiplication, and division, as well as advanced features like percentage and square root calculations.",
    featuredImage: "./Assets/Calculator/calculator.png",
    featuredImageDesktop: "./Assets/Calculator/calculator.png",
    technologies: ["React", "CSS", "JavaScript", "HTML"],
    liveLink: "http://anasdev.com/Math-magicians/",
    sourceLink: "https://github.com/anas599/Math-magicians",
  },
  {
    name: "TV-Maze",
    namePop: "TV-Maze",
    description: `
    The "tv maze" project is a web application built with JavaScript, HTML, and CSS and uses Webpack as its build tool. The project makes API calls to fetch movie information and allows users to add likes and comments, which are then stored back to the API. The application has the ability to retrieve this information, providing a dynamic and interactiv`,
    featuredImage: "./Assets/TV-Maze/tv-maze.png",
    featuredImageDesktop: "./Assets/TV-Maze/tv-maze.png",
    technologies: ["WebPack", "CSS", "JavaScript", "HTML"],
    liveLink: "https://anasdev.com/TV-Maze/dist/",
    sourceLink: "https://github.com/anas599/TV-Maze",
  },
  {
    name: "Awsome Books",
    namePop: "Awsome Books",
    description:
      'Awesome Books" is a website that allows users to enter the author and title of their favorite books and save them to a list. The site has a simple and easy-to-use interface, allowing users to quickly and easily add new books to their list. The list can be viewed and edited at any time, and users can also search for specific books in the list.',
    featuredImage: "./Assets/awsomeBooksPics/awb1resize.png",
    featuredImageDesktop: "./Assets/awsomeBooksPics/awb1resize.png",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://anas599.github.io/Awsome-Books/",
    sourceLink: "https://github.com/anas599/Awsome-Books",
  },
  {
    name: "To Do List",
    namePop: "To Do",
    description:
      '"To-Do List" is a web-based project that was built using webpack. It allows users to create and manage a list of tasks, with the ability to add new tasks and mark them as complete. The tasks are saved in local storage, so they will persist even if the user closes the browser or turns off their computer. The website has a clean and simple interface',
    featuredImage: "./Assets/toDoPics/Screenshot 2023-01-24 at 1.29.50 PM.png",
    featuredImageDesktop:
      "./Assets/toDoPics/Screenshot 2023-01-24 at 1.29.50 PM.png",
    technologies: ["WebPack", "CSS", "JavaScript", "HTML"],
    liveLink: "https://anas599.github.io/To-Do-List/webpack-demo/dist/",
    sourceLink: "https://github.com/anas599/To-Do-List",
  },
  {
    name: "Rebellion Makeup Nova",
    namePop: "Rebellion Makeup Nova",
    description:
      "The \"Rebellion Makeup\" Capstone project is a website redesign for a brand of the same name. The website was built using HTML, CSS, and JavaScript, and it features a sleek and modern design that reflects the brand's aesthetic. The website includes information about the brand's products, including makeup tutorials, reviews and a section to purchase.",
    featuredImage: "./Assets/novaRebellion/novaSnapshoot.png",
    featuredImageDesktop: "./Assets/novaRebellion/novaSnapshoot.png",
    technologies: ["WebPack", "CSS", "JavaScript", "HTML"],
    liveLink: "https://anas599.github.io/Capstone-project",
    sourceLink: "https://github.com/anas599/Capstone-project",
  },
];

const projectsCont = document.getElementById('work-container');
projectsCont.innerHTML = projectsInfo
  .map(
    (project, index) => `
<article class="allw scroll">
  <img id='awbooks' src='${project.featuredImage}'>
  <h3>${project.name}</h3>
  <ul class='lang'>${project.technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}</ul>
  <button id='see-project-btn' class='see' onclick='popUpFun(${index})'>See Project</button>
</article>`,
  )
  .join('');

const seeProjectBtn = document.getElementById('see-project-btn');
const popUp = document.querySelector('.popUp');
const blurHead = document.getElementById('mainHead');
const navDt = document.getElementById('topNavDTID');

function popUpFun(index) {
  // eslint-disable-next-line no-cond-assign, no-constant-condition
  if ((popUp.style.display = 'none')) {
    popUp.style.display = 'grid';
    navDt.style.filter = 'blur(20px) contrast(50%)';
  }
  blurHead.style.filter = 'blur(20px) contrast(50%)';
  popUp.innerHTML = `
  <div id="imageCloseBtn">
  <button class="close-popUp fa fa-times "   onclick='closePopUp1()'></button>
  <img class="projectImage" src='${projectsInfo[index].featuredImageDesktop}'>
  </div>

    <div class="rest">
    <div class="h3">
  <h3 class="h33">${projectsInfo[index].namePop}</h3>
  <ul class='languagesPopW'>${projectsInfo[index].technologies
    .map((tech) => `<li class='l1'>${tech}</li>`)
    .join('')}
  </ul>
  </div>

  <p class="p">${projectsInfo[index].description}</p>
  <div id="buttonsLive" class="buttonsLive">

  <a  class="noUline" href="${projectsInfo[index].liveLink}" target="_blank">
  <button class='seeLivebtn'> See Live</button></a>

  <a  class="noUline" href="${projectsInfo[index].sourceLink}" target="_blank">
  <button class='seeSourcebtn'> See Source</button></a>

  </div>
  `;
}
function closePopUp1() {
  // eslint-disable-next-line no-constant-condition, no-cond-assign
  if ((popUp.style.display = 'flex')) {
    popUp.style.display = 'none';
    blurHead.style.filter = 'none';
    navDt.style.filter = 'none';
  }
}
