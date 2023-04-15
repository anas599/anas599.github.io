const observer = new IntersectionObserver(entries => {
	entries.forEach(x => {
		if (x.isIntersecting) {
			x.target.classList.add('showScroll');
		} else {
			x.target.classList.remove('showScroll');
		}
	});
});
const hiddenElements = document.querySelectorAll('.scroll');
hiddenElements.forEach(el => observer.observe(el));
