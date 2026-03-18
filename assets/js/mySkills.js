const mySkills = [
  {
    name: "Languages",
    skills: ["HTML", "JavaScript", "CSS", "Ruby", "SQL"],
    icons: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/ruby.svg",
      "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg",
    ],
  },
  {
    name: "Frameworks",
    skills: [
      "Reactjs",
      "Nextjs",
      "Ruby on Rails",
      "Jest",
      "Bootstrap",
      "Tailwind CSS",
      "Sass",
    ],

    icons: [
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
      "https://iconape.com/wp-content/files/dx/352988/svg/jest-seeklogo.com.svg",
      "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
      "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
      "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VSCode",
      "AWS ",
      "Postman",
      "Heroku",
      "RSpec",
      "Cypress",
      "CapyBara",
      "Linux",
    ],

    icons: [
      "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
      "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
      "https://cdn.worldvectorlogo.com/logos/postman.svg",
      "https://cdn.worldvectorlogo.com/logos/heroku-4.svg",
      "https://iconape.com/wp-content/files/ss/347290/svg/347290.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cypress.svg",
      "https://www.mailslurp.com/assets/brands/capybara.png",
      "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
    ],
  },
  {
    name: "Health Informatics",
    skills: [
      "FHIR",
      "HL7",
      "DICOM",
      "SNOMED CT",
      "LOINC",
      "EHR",
      "EMR",
      "PACS",
    ],
    icons: [
      "https://www.cyber-media.co.uk/wp-content/uploads/2023/05/fhir-logo.png",
      "https://www.cyber-media.co.uk/wp-content/uploads/2023/05/fhir-logo.png",
      "https://www.dicomstandard.org/images/librariesprovider2/default-album/dicom-logo.jpg?sfvrsn=7e5f288b_2",
      "https://icons.duckduckgo.com/ip3/snomed.org.ico",
      "https://icons.duckduckgo.com/ip3/loinc.org.ico",
      "https://icons.duckduckgo.com/ip3/athenahealth.com.ico",
      "https://icons.duckduckgo.com/ip3/meditech.com.ico",
      "https://img.icons8.com/ios-filled/50/00bfff/ultrasound.png",
    ],
  },
];

const skills = document.querySelector("#skillsSection");

mySkills.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add(
    "card",
    "glass",
    "d-flex",
    "h-w-15rem",
    "align-items-center",
  );

  const skillNameHeader = document.createElement("h3");
  skillNameHeader.classList.add("major");
  skillNameHeader.textContent = skill.name;
  skillDiv.appendChild(skillNameHeader);

  const skillList = document.createElement("ul");
  skillList.classList.add("skills-pill-container");

  skill.skills.forEach((skillName, index) => {
    const skillItem = document.createElement("li");
    skillItem.classList.add(
      "badge",
      "badge-primary",
      "back-glow-yellow",
      "mb-2",
      "pill-icon",
      "w-fit-content",
    );
    skillItem.textContent = skillName;

    const skillIconUrl = skill.icons?.[index];
    if (skillIconUrl) {
      const skillIcon = document.createElement("img");
      skillIcon.src = skillIconUrl;
      skillIcon.style.width = "2rem";
      skillItem.appendChild(skillIcon);
    }

    const bottomBorder = document.createElement("div");
    // bottomBorder.classList.add('bottom-border-grad-sm');

    skillList.appendChild(skillItem);
    skillItem.appendChild(bottomBorder);
    // skillList.appendChild(bottomBorder);
  });

  skillDiv.appendChild(skillList);
  skills.appendChild(skillDiv);
});
