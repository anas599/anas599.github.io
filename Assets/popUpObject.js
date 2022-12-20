let projectsInfo = [
  Project1: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  },
  Project2: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  },
  Project3: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  },
  Project4: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  },
  Project5: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  },
  Project6: {
    name: 'Multi-Post Stories Gain+Glory',
    description: './Assets/desc1.txt',
    featuredImage: './Assets/Snapshoot.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: 'https://github.com/anas599/anas599.github.io',
    sourceLink: 'https://anas599.github.io/'
  }
]
const workContainer = document.getElementById('work-container');
workContainer.innerHTML = projectsInfo.forEach((project, i) => {return `
  <article>
  <img src="${project.featuredImage}" alt="${projectsInfo[project].description}">
  <h3>${projectsInfo[project].name}</h3>
  <p>${projectsInfo[project].description}</p>
  <ul>${projectsInfo[project].technologies}</ul>
  </article>`});