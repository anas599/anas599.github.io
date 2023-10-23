const projectsInfo = [
  {
    name: 'Supplement Register',
    namePop: 'Supplement Register',
    description:
      'Manage your supplement store effortlessly with this Next.js 13, Prisma, and MySQL-powered app. It handles inventory, invoices, and daily sales tracking. using AWS S3 bucket for uploading images and RDS PSQL as database Plus, it is packaged with Electron Forge for Windows and Mac compatibility',
    featuredImage: './images/work/Supp-register.webp',
    featuredImageDesktop: './images/work/Supp-register.webp',
    technologies: ['Nextjs', 'Tailwind', 'PSQL', 'S3', 'Prisma', 'API'],
    liveLink: 'https://dev--supplements-register.netlify.app/',
    sourceLink: 'https://github.com/anas599/Supplement-register',
  },
  {
    name: 'Crypto blog',
    namePop: 'Crypto blog',
    description:
      'Crypto Blog: A Next.js web app with Prisma adapter for real-time cryptocurrency data. Engage in community-driven discussions, add predictions, and vote on comments. NextAuth ensures secure authentication. Stay informed and join the crypto community! styled using tailwind css with RDS PSQL deployed on AWS',
    featuredImage: './images/work/crypto-blog.webp',
    featuredImageDesktop: './images/work/crypto-blog.webp',
    technologies: ['Nextjs', 'Tailwind', 'PSQL', 'API', 'Prisma'],
    liveLink: 'https://crypto-blog-nextjs.netlify.app/',
    sourceLink: 'https://github.com/anas599/Crypto-blog',
  },

  {
    name: 'Vejetree',
    namePop: 'Vejetree',
    description:
      `Vejetree successfully encapsulates the brand's essence, offering an enticing and informative experience for visitors. It showcases the product line effectively and ensures a user-friendly journey. This project demonstrates my proficiency in React.js, Bootstrap, MUI, and Framer.`,
    featuredImage: './images/vejetree-screenshot.webp',
    featuredImageDesktop: './images/vejetree-screenshot.webp',
    technologies: ['ReactJS', 'mui', 'Bootstrap', 'Framer.motion', 'SCSS'],
    liveLink: 'https://vejetree.com/',
    sourceLink: 'https://github.com/anas599/',
  },
  {
    name: 'Budget-App',
    namePop: 'Budget-App',
    description:
      'BudgetApp: A Ruby on Rails app for managing personal finances with pSQL and Bootstrap. built for iOS to Track your expenses, set budget goals, and gain insights into your spending habits. Stay on top of your finances with this user-friendly budgeting tool.',
    featuredImage: './images/work/budget-macos.webp',
    featuredImageDesktop: './images/work/budget-macos.webp',
    technologies: ['Ruby on Rails', 'PSQL', 'Bootstrap', 'API', 'Devise'],
    liveLink: 'https://mysite-7fzl.onrender.com/',
    sourceLink: 'https://github.com/anas599/Budget-app',
  },
  {
    name: 'Recipe-App',
    namePop: 'Recipe-App',
    description:
      'Recipe App is a robust and user-friendly recipe application built using Ruby on Rails, leveraging the power of Bootstrap, Devise, and Capybara gems. Seamlessly create, discover, and share recipes with it.',
    featuredImage: './images/work/Recipe-app.webp',
    featuredImageDesktop: './images/work/Recipe-app.webp',
    technologies: ['Ruby on Rails', 'PSQL', 'Bootstrap', 'API', 'Devise'],
    liveLink: 'https://mysite-uoec.onrender.com/',
    sourceLink: 'https://github.com/anas599/Recipe-app',
  },
  {
    name: 'Blog App',
    namePop: 'Blog App',
    description:
      'Blog Build is a Ruby on Rails web app with PostgreSQL database that enables users to publish blog posts, like and comment on other posts, and manage their profiles.',
    featuredImage: './images/work/blog2.webp',
    featuredImageDesktop: './images/work/blog2.webp',
    technologies: ['Ruby on Rails', 'PSQL', 'Bootstrap', 'API'],
    liveLink: 'https://github.com/anas599/blog',
    sourceLink: 'https://github.com/anas599/blog',
  },
  {
    name: 'Space-Travelers',
    namePop: 'Space-Travelers',
    description:
      'Space-Travelers a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    featuredImage: './images/work/space.webp',
    featuredImageDesktop: './images/work/space.webp',
    technologies: ['React', 'CSS3', 'JS', 'Redux', 'API'],
    liveLink: 'https://space-travelers-reactjs.netlify.app/',
    sourceLink: 'https://github.com/anas599/space-travelers-hub',
  },
  {
    name: 'Crypto Prices',
    namePop: 'Crypto Prices',
    description:
      'Crypto Prices is a React.js and Redux web application that displays real-time market prices of cryptocurrencies fetched from the Coin Gecko API. Features include price history, currency conversion, and a user-friendly interface.',
    featuredImage: './images/work/cryptoprice.webp',
    featuredImageDesktop: './images/work/cryptoprice.webp',
    technologies: ['React', 'CSS3', 'JS', 'Redux', 'API'],
    liveLink: 'https://crypto-prices-reactjs.netlify.app/',
    sourceLink: 'https://github.com/anas599/crypto-price',
  },
  // {
  //   name: 'BookStore',
  //   namePop: 'BookStore',
  //   description:
  //     'Bookstore is a professional-grade web application built using React and Redux, aimed at creating an online platform for buying and selling books. With its user-friendly interface and seamless user experience, Bookstore allows users to browse and purchase books, manage their orders, and track their reading progress.',
  //   featuredImage: './images/work/bookstore.webp',
  //   featuredImageDesktop: './images/work/bookstore.webp',
  //   technologies: ['React', 'CSS3', 'JS', 'Redux', 'API'],
  //   liveLink: 'https://anasdev.com/Bookstore/',
  //   sourceLink: 'https://github.com/anas599/Bookstore',
  // },
  // {
  //   name: "Leaderboard for games",
  //   namePop: "Leaderboard for games",
  //   description:
  //     "Leaderboard is a dynamic and interactive web project built using the latest web technologies, including Webpack, JavaScript, HTML, and CSS3. It provides real-time ranking and score tracking for various competitions and games with a user-friendly interface. Enjoy fast navigation, stunning graphics.",
  //   featuredImage: "./images/work/leaderboard.webp",
  //   featuredImageDesktop: "./images/work/leaderboard.webp",
  //   technologies: ["WebPack", "CSS3", "JS", "HTML5", "API"],
  //   liveLink: "https://anas599.github.io/Leaderboard/dist/",
  //   sourceLink: "https://github.com/anas599/Leaderboard",
  // },
  // {
  //   name: 'Math-magicians',
  //   namePop: 'Math-magicians',
  //   description:
  //     'Math-magicians - A simple and efficient calculator built using React. This project provides a clean and user-friendly interface for performing basic mathematical operations like addition, subtraction, multiplication, and division, as well as advanced features like percentage and square root calculations.',
  //   featuredImage: './images/work/math-magicians.webp',
  //   featuredImageDesktop: './images/work/math-magicians.webp',
  //   technologies: ['React', 'CSS3', 'JS', 'HTML5'],
  //   liveLink: 'https://math-magicians-react-js.netlify.app/',
  //   sourceLink: 'https://github.com/anas599/Math-magicians',
  // },
  // {
  // 	name: 'TV-Maze',
  // 	namePop: 'TV-Maze',
  // 	description: `
  // The "tv maze" project is a web application built with JavaScript, HTML, and CSS3 and uses Webpack as its build tool. The project makes API calls to fetch movie information and allows users to add likes and comments, which are then stored back to the API. The application has the ability to retrieve this information, providing a dynamic and interactiv`,
  // 	featuredImage: './images/work/tvmaze.webp',
  // 	featuredImageDesktop: './images/work/tvmaze.webp',
  // 	technologies: ['WebPack', 'CSS3', 'JS', 'HTML5', 'API'],
  // 	liveLink: 'https://anasdev.com/TV-Maze/dist/',
  // 	sourceLink: 'https://github.com/anas599/TV-Maze',
  // },
  // {
  //   name: "Awsome Books",
  //   namePop: "Awsome Books",
  //   description:
  //     'Awesome Books" is a website that allows users to enter the author and title of their favorite books and save them to a list. The site has a simple and easy-to-use interface, allowing users to quickly and easily add new books to their list. The list can be viewed and edited at any time, and users can also search for specific books in the list.',
  //   featuredImage: "./Assets/awsomeBooksPics/awb1resize.png",
  //   featuredImageDesktop: "./Assets/awsomeBooksPics/awb1resize.png",
  //   technologies: ["Ruby on rails", "CSS3", "JS", "HTML5"],
  //   liveLink: "https://anas599.github.io/Awsome-Books/",
  //   sourceLink: "https://github.com/anas599/Awsome-Books",
  // },
  // {
  //   name: 'To Do List',
  //   namePop: 'To Do',
  //   description:
  //     '"To-Do List" is a web-based project that was built using webpack. It allows users to create and manage a list of tasks, with the ability to add new tasks and mark them as complete. The tasks are saved in local storage, so they will persist even if the user closes the browser or turns off their computer. The website has a clean and simple interface',
  //   featuredImage: './images/work/todo-js.webp',
  //   featuredImageDesktop: './images/work/todo-js.webp',
  //   technologies: ['WebPack', 'CSS3', 'JS', 'HTML5'],
  //   liveLink: 'https://anas599.github.io/To-Do-List/webpack-demo/dist/',
  //   sourceLink: 'https://github.com/anas599/To-Do-List',
  // },
  // {
  //   name: 'Rebellion Makeup Nova',
  //   namePop: 'Rebellion Makeup Nova',
  //   description:
  //     'The "Rebellion Makeup" Capstone project is a website redesign for a brand of the same name. The website was built using HTML, CSS3, and JavaScript, and it features a sleek and modern design that reflects the brand\'s aesthetic. The website includes information about the brand\'s products, including makeup tutorials, reviews and a section to purchase.',
  //   featuredImage: './images/work/nova.webp',
  //   featuredImageDesktop: './images/work/nova.webp',
  //   technologies: ['WebPack', 'CSS3', 'JS', 'HTML5'],
  //   liveLink: 'https://anas599.github.io/Capstone-project',
  //   sourceLink: 'https://github.com/anas599/Capstone-project',
  // },
];
const container = document.querySelector('#work');

projectsInfo.forEach((project) => {
  // Create elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardBody = document.createElement('div');
  const title = document.createElement('h5');
  const technologies = document.createElement('div');
  const description = document.createElement('p');
  const links = document.createElement('div');
  const liveLink = document.createElement('a');
  const sourceLink = document.createElement('a');
  // Const moerBtn = document.createElement("button");
  const workHeader = document.createElement('h2');

  // Set attributes
  card.classList.add('card', 'glass', 'scroll');
  img.src = project.featuredImage;
  img.classList.add('card-img-top');
  img.alt = project.name;
  img.loading = 'lazy';
  title.classList.add('card-title');
  cardBody.classList.add('card-body');
  title.textContent = project.name;
  technologies.classList.add('mb-2');
  // MoerBtn.classList.add("btn", "btn-light");
  // moerBtn.id = "moreBtn";
  // moerBtn.innerHTML = `See More <i class="fas fa-external-link-alt"></i>`;
  project.technologies.forEach((tech) => {
    const badge = document.createElement('span');
    badge.classList.add(
      'badge',
      'badge-primary',
      'rounded-pill',
      'py-2',
      'px-3',
      'mb-2',
    );
    badge.innerHTML = `<i class="fab fa-${tech.toLowerCase()}"></i>${tech}`;
    technologies.appendChild(badge);
  });
  description.classList.add('card-text');
  description.textContent = project.description;
  liveLink.href = project.liveLink;
  liveLink.target = '_blank';
  liveLink.classList.add('btn', 'btn-light');
  liveLink.innerHTML = 'See Live <i class="fas fa-external-link-alt"></i>';
  sourceLink.href = project.sourceLink;
  sourceLink.target = '_blank';
  sourceLink.classList.add('btn', 'btn-light');
  sourceLink.innerHTML = 'See Source <i class="fab fa-github"></i>';
  workHeader.classList.add('work-header');
  workHeader.textContent = 'My Recent Work';
  // Technologies.innerHTML = project.technologies

  // Append elements
  container.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(technologies);
  cardBody.appendChild(description);
  cardBody.appendChild(links);
  links.appendChild(liveLink);
  links.appendChild(sourceLink);
  // Links.appendChild(moerBtn);
});

// Make myfunction to act as popup and
// function myFunction(id) {

//   popup=document.getElementById("myPopup");
//   head=document.getElementById("header");
//   main1=document.getElementById("main1");
//   work=document.getElementById("work");
//   popup.classList.toggle("show");
//   work.style.display="none";
//   head.style.display="none";
//   main1.style.display="none";

// }

// const container = document.querySelector("#work");

// projectsInfo.forEach((project) => {
//   // Create elements
//   const card = document.createElement("div");
//   const img = document.createElement("img");
//   const cardBody = document.createElement("div");
//   const title = document.createElement("h5");
//   const technologies = document.createElement("div");
//   const description = document.createElement("p");
//   const links = document.createElement("div");
//   const liveLink = document.createElement("a");
//   const sourceLink = document.createElement("a");
//   const moerBtn = document.createElement("button");

//   // Set attributes
//   card.classList.add("card", "glass");
//   img.src = project.featuredImage;
//   img.classList.add("card-img-top");
//   img.alt = project.name;
//   title.classList.add("card-title");
//   cardBody.classList.add("card-body");
//   title.textContent = project.name;
//   technologies.classList.add("mb-2");
//   moerBtn.classList.add("btn", "btn-light");
//   moerBtn.id = "moreBtn";
//   moerBtn.innerHTML = `See More <i class="fas fa-external-link-alt"></i>`;
//   project.technologies.forEach((tech) => {
//     const badge = document.createElement("span");
//     badge.classList.add(
//       "badge",
//       "badge-primary",
//       "rounded-pill",
//       "py-2",
//       "px-3",
//       "mb-2"
//     );
//     badge.innerHTML = `<i class="fab fa-${tech.toLowerCase()}"></i>${tech}`;
//     technologies.appendChild(badge);
//   });
// description.classList.add("card-text");
// description.textContent = project.description;
// liveLink.href = project.liveLink;
// liveLink.target = "_blank";
// liveLink.classList.add("btn", "btn-light");
// liveLink.innerHTML = `See Live <i class="fas fa-external-link-alt"></i>`;
// sourceLink.href = project.sourceLink;
// sourceLink.target = "_blank";
// sourceLink.classList.add("btn", "btn-light");
// sourceLink.innerHTML = `See Source <i class="fab fa-github"></i>`;

// });
