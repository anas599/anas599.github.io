const myRecommendations = [
  {
    name: 'Gino Anderson Canales Medina',
    image: './images/recm/Gino.webp',
    role: 'Full-Stack Developer',
    dateWorked:
      'March 9, 2023, Gino Anderson worked with Anas on the same team',

    text: `I had the pleasure of working with Anas Al-Sammarraie on several software development projects during our time together at Microverse. Anas Al-Sammarraie was my coding partner and he consistently impressed me with his technical expertise and professionalism. Anas Al-Sammarraie has a deep understanding of programming languages and frameworks, and he was always willing to share his knowledge with me and the rest of our team. His contributions to our projects were crucial in delivering high-quality products on time.  Not only is Anas Al-Sammarraie an exceptional coder, but he is also a great team player. He always communicated clearly and effectively, and he was always willing to collaborate and brainstorm new ideas.  I highly recommend Anas Al-Sammarraie as a coding partner. He is a talented developer who would be an asset to any team. I have no doubt that he will continue to excel in his career'`,
  },
  {
    name: 'Roberto Andres Condezo Monge',
    image: './images/recm/Roberto.webp',
    role: 'Full-Stack Developer and Graphic Designer | Bridging Functionality',
    dateWorked:
      'June 29, 2023, Roberto Andres and Anas studied togetherJune 29, 2023, Roberto Andres and Anas studied together',

    text: `I had the pleasure of working closely with Anas AI-Sammarraie on a Full-stack bootcamp at Microverse. Throughout our collaboration, Anas consistently impressed me with his exceptional skills and dedication. Anas is an efficient, punctual, and responsible Full-stack developer who excels in meeting deadlines. He was always aware of project timelines and actively supported the team to ensure timely completion. .

Anas's standout qualities extend beyond his technical abilities. He is a great team player who communicates effectively and humbly accepts feedback. Anas actively shared his knowledge, collaborating with the team and contributing to our collective success. His professionalism and commitment to delivering high-quality results make him a valuable asset. Based on my experience working with Anas, I highly recommend him as a talented Full-stack developer who would be a valuable addition to any team.`,
  },
  {
    name: 'Jorge Sigüenza',
    image: './images/recm/Jorge.webp',
    role: 'Full-Stack Developer | MERN stack lover',
    dateWorked:
      'June 29, 2023, Jorge worked with Anas on the same teamJune 29, 2023, Jorge worked with Anas on the same team',

    text: `Anas AI-Sammarraie is a nice peer and an excellent team member to work with. I met him while working on a Full-stack capstone project at Microverse, and I had the opportunity to work alongside him for three weeks, and in that time we built an amazing React Tutories app using an API that we build using Ruby on Rails, he is efficient, punctual and responsible. He was really aware of the deadline and always helped the entire group to finish on time, he accepts feedback humbly and is always trying to excel in what he does. It was a great pleasure working with him, I sincerely recommend him as a Full-stack developer.`,
  },
];

const recommendationsContainer = document.querySelector('#recommendations');

myRecommendations.forEach((recommendation) => {
  const recommendationDiv = document.createElement('div');
  recommendationDiv.classList.add('recommendation');
  recommendationDiv.classList.add('glass');
  recommendationDiv.classList.add('w-auto');

  // Create an image element
  const imageElement = document.createElement('img');
  imageElement.src = recommendation.image;
  imageElement.alt = recommendation.name;
  imageElement.classList.add('rounded-circle');
  imageElement.classList.add('shadow-sm');
  imageElement.classList.add('pic-gradient');
  // Create a paragraph for the role
  const roleParagraph = document.createElement('p');
  roleParagraph.textContent = `Role: ${recommendation.role}`;
  roleParagraph.classList.add('role-paragraph');

  // Create a paragraph for the date worked
  const dateParagraph = document.createElement('p');
  dateParagraph.textContent = `Date Worked: ${recommendation.dateWorked}`;
  dateParagraph.classList.add('date-paragraph');

  const textContainer = document.createElement('div');
  textContainer.classList.add('d-flex');
  textContainer.classList.add('flex-column');
  textContainer.classList.add('align-items-center');
  const textParagraph = document.createElement('p');
  textParagraph.textContent = recommendation.text.substring(0, 200) + '...'; // Show the first 200 characters
  textParagraph.classList.add('px-4');

  // Create a "Show More" text (initially hidden)
  const showMoreText = document.createElement('span');
  showMoreText.textContent = 'Show More';
  showMoreText.classList.add('show-more');
  const headDiv = document.createElement('div');
  headDiv.classList.add('d-flex');
  headDiv.classList.add('align-items-start');
  headDiv.classList.add('m-2');
  headDiv.classList.add('gap-2');

  const bottomBorder = document.createElement('div');
  bottomBorder.classList.add('bottom-border-grad');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('d-flex');
  titleDiv.classList.add('flex-column');
  // Add an event listener to expand the text when clicked
  showMoreText.addEventListener('click', () => {
    textParagraph.textContent = recommendation.text;
    showMoreText.style.display = 'none';
  });

  // Append elements to the recommendationDiv
  headDiv.appendChild(imageElement);
  titleDiv.appendChild(roleParagraph);
  titleDiv.appendChild(dateParagraph);
  headDiv.appendChild(titleDiv);
  recommendationDiv.appendChild(headDiv);
  recommendationDiv.appendChild(bottomBorder);
  textContainer.appendChild(textParagraph);
  textContainer.appendChild(showMoreText);
  recommendationDiv.appendChild(textContainer);

  // Append the recommendation to the recommendations container
  recommendationsContainer.appendChild(recommendationDiv);
});
