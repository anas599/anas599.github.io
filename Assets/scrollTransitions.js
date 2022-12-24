const observer = new IntersectionObserver((entries) => {
  entries.forEach((x) => {
    if (x.isIntersecting) {
      x.target.classList.add('show');
    } else {
      x.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.scroll');
hiddenElements.forEach((el) => observer.observe(el));