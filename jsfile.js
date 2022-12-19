const icon = document.querySelector('.icon i');
const x = document.getElementById('myLinks');
const mobileMenuOptions = document.querySelectorAll('.mobile-menu-option');

// eslint-disable-next-line no-unused-vars
function myFunction() {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    x.style.display = 'flex';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    x.style.display = 'none';
  }

  mobileMenuOptions.forEach((option) => {
    option.addEventListener('click', () => {
      x.style.display = 'none';
      icon.classList.replace('fa-times', 'fa-bars');
    });
  });
}
