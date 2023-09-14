const mySkills = [
  {
    name: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'SQL'],
    icons: [
      '<i class="fab fa-html5"></i>',
      '<i class="fab fa-css3-alt"></i>',
      '<i class="fab fa-js-square"></i>',
      '<i class="fas fa-gem"></i>',
      '<i class="fas fa-database"></i>',
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      'Reactjs',
      'Nextjs',
      'Ruby on Rails',
      'CapyBara',
      'Cypress',
      'Rspec',
      'Jest',
      'Bootstrap',
      'Tailwind CSS',
      'Sass',
    ],
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VSCode',
      'AWS Cloud computing',
      'Postman',
      'Heroku',
      'Netlify',
      'RSpec',
      'TDD',
      'Linux',
      'Agile',
    ],
  },
];
const skills = document.querySelector('#skillsSection');

mySkills.forEach((skill) => {
  const skillDiv = document.createElement('div');
  skillDiv.classList.add('card');
  skillDiv.classList.add('glass');
  skillDiv.classList.add('d-flex');
  skillDiv.classList.add('h-w-15rem');
  skillDiv.classList.add('align-items-center');
  skillDiv.innerHTML = `
            <h3 class="major">${skill.name}</h3>
            <ul class="skills-pill-container">
                ${skill.skills
                  .map(
                    (skill) =>
                      `<li class="badge badge-primary rounded-pill py-2 px-3 mb-2 fab ">${skill}</li>

					  `,
                  )
                  .join('')}
            </ul>
        `;
  skills.appendChild(skillDiv);
});
