function newTopNav() {
	const neonBtns = document.querySelectorAll('.neon-button__6');
	const topNav = document.querySelector('.top-nav');
	const navBtn = document.getElementById('navButton');
	const icon = navBtn.querySelector('i');
	const line1 = document.querySelector('.line-start');
	const line2 = document.querySelector('.line-end');
	function toggleNav() {
		topNav.classList.toggle('top-nav--open');
		neonBtns.forEach(neonBtn => {
			neonBtn.classList.toggle('neon-button__6--open');
		});

		// Toggle the icon based on the open/closed state
		if (topNav.classList.contains('top-nav--open')) {
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			line1.style.display = 'flex';
			line2.style.display = 'flex';
		} else {
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
			line1.style.display = 'none';
			line2.style.display = 'none';
		}
	}

	if (neonBtns) {
		neonBtns.forEach(neonBtn => {
			neonBtn.addEventListener('click', toggleNav);
		});
	}

	navBtn.addEventListener('click', toggleNav);
}

newTopNav();
