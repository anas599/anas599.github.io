const details = {
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Keeping track of hundreds of components',
  featuredImage: './Assets/Snapshoot.png',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],

};
const workContainer = document.getElementById('work-container');
workContainer.innerHTML = `
  <img src="${details.featuredImage}" alt="${details.description}">
  <h3 class="multi">${details.name}</h3>
  <p>${details.description}</p>
  <ul class="lang">${
  details.languages.map((language) => `<li>${language}</li>`).join('')
}
  </ul>`;