const darkButton = document.getElementById('darkMode');
const darkStyle = document.getElementById('style.css');

darkButton.addEventListener('click', () => {
  if (darkStyle.getAttribute('href') === 'style.css') {
    darkStyle.setAttribute('href', 'darkMode.css');
  } else {
    darkStyle.setAttribute('href', 'style.css');
  }
});
