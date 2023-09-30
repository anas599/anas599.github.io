const mySkills = [
  {
    name: 'Languages',
    skills: ['HTML', 'JavaScript', 'CSS', 'Ruby', 'SQL'],
    icons: [
      'https://cdn.worldvectorlogo.com/logos/html-1.svg',
      'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      'https://cdn.worldvectorlogo.com/logos/ruby.svg',
      'https://cdn.worldvectorlogo.com/logos/mysql-logo.svg',
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      'Reactjs',
      'Nextjs',
      'Ruby on Rails',
      'Jest',
      'Bootstrap',
      'Tailwind CSS',
      'Sass',
    ],

    icons: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      'https://cdn.worldvectorlogo.com/logos/rails-1.svg',
      'https://iconape.com/wp-content/files/dx/352988/svg/jest-seeklogo.com.svg',
      'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
      'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
      'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
    ],
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VSCode',
      'AWS ',
      'Postman',
      'Heroku',
      'RSpec',
      'Cypress',
      'CapyBara',
      'Linux',
    ],

    icons: [
      'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
      'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
      'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
      'https://cdn.worldvectorlogo.com/logos/postman.svg',
      'https://cdn.worldvectorlogo.com/logos/heroku-4.svg',
      'https://iconape.com/wp-content/files/ss/347290/svg/347290.svg',
      'https://www.cypress.io/_astro/navbar-brand.0d71ff96.svg',
      'https://www.mailslurp.com/assets/brands/capybara.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1024px-Icons8_flat_linux.svg.png',
    ],
  },
];

const skills = document.querySelector('#skillsSection');

mySkills.forEach((skill) => {
  const skillDiv = document.createElement('div');
  skillDiv.classList.add(
    'card',
    'glass',
    'd-flex',
    'h-w-15rem',
    'align-items-center',
  );

  const skillNameHeader = document.createElement('h3');
  skillNameHeader.classList.add('major');
  skillNameHeader.textContent = skill.name;
  skillDiv.appendChild(skillNameHeader);

  const skillList = document.createElement('ul');
  skillList.classList.add('skills-pill-container');

  skill.skills.forEach((skillName, index) => {
    const skillItem = document.createElement('li');
    skillItem.classList.add(
      'badge',
      'badge-primary',
      'back-glow-yellow',
      'mb-2',
      'pill-icon',
      'w-fit-content',
    );
    skillItem.textContent = skillName;

    const skillIcon = document.createElement('img');
    skillIcon.src = skill.icons[index];
    // skillIcon.classList.add('pill-icon');
    skillIcon.style.width = '2rem';
    const bottomBorder = document.createElement('div');
    // bottomBorder.classList.add('bottom-border-grad-sm');
    skillDiv.appendChild(skillNameHeader);

    skillItem.appendChild(skillIcon);

    skillList.appendChild(skillItem);
    skillItem.appendChild(bottomBorder);
    // skillList.appendChild(bottomBorder);
  });

  skillDiv.appendChild(skillList);
  skills.appendChild(skillDiv);
});
