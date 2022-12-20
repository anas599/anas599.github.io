const projectsInfo = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/',
  },
];

const workContainer = document.getElementById('work-container');
workContainer.innerHTML = projectsInfo
  .map((project) => `
  <article>
  <img src="${project.featuredImage}" alt="${project.description}">
  <h3>${project.name}</h3>
  <p>${project.description}</p>
  <ul class="lang">${project.technologies} </ul>
  </article>`)
  .join('');
