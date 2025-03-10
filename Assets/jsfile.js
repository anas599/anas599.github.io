const logo = document.querySelector('.active');
const icon = document.querySelector('.icon i');
const x = document.getElementById('myLinks');
const mobileMenuOptions = document.querySelectorAll('.mobile-menu-option');
const darkMobButn = document.getElementById('darkMob');

// eslint-disable-next-line no-unused-vars
function myFunction() {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    x.style.display = 'flex';
    logo.style.display = 'none';
    darkMobButn.style.display = 'none';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    x.style.display = 'none';
    logo.style.display = 'flex';
    darkMobButn.style.display = 'block';
  }

  mobileMenuOptions.forEach((option) => {
    option.addEventListener('click', () => {
      x.style.display = 'none';
      icon.classList.replace('fa-times', 'fa-bars');
    });
  });
}