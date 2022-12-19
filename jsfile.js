const icon = document.querySelector('.icon i');
const x = document.getElementById('myLinks');

// eslint-disable-next-line no-unused-vars
function myFunction() {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    x.style.display = 'flex';
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    x.style.display = 'none';
  }
}