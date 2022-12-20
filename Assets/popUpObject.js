const details = {
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Keeping track of hundreds of components',
  featuredImage: './Assets/Snapshoot.png',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  button: 'See Project',

};
const workContainer = document.getElementById('work-container');
workContainer.innerHTML = `
  <img src="${details.featuredImage}" alt="${details.description}">
  <h3 class="multi">${details.name}</h3>
  <p>${details.description}</p>
  <ul class="lang">${details.languages
    .map((language) => `<li class="l1">${language}</li>`)
    .join('')}</ul>
<button type="button" class="see"></button>
`;