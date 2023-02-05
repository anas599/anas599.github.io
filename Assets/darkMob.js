const darkButton2 = document.getElementById('darkMob');
const darkStyle2 = document.getElementById('style.css');

darkButton2.addEventListener('click', () => {
  if (darkStyle2.getAttribute('href') === 'style.css') {
    darkStyle2.setAttribute('href', 'darkMode.css');
  } else {
    darkStyle2.setAttribute('href', 'style.css');
  }
});
