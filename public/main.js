if (typeof document !== 'undefined' && typeof window !== 'undefined') {
	/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
	const hamburger = document.getElementById('hamburger');
	const navMenu = document.getElementById('nav-menu');
	const closeIcon = document.getElementById('nav-close');
	const navLink = document.querySelectorAll('.nav-link');

	navLink?.forEach((link) =>
		link.addEventListener('click', () => {
			if (navMenu) {
				navMenu.classList.add('hidden');
			}
		})
	);

	// if (hamburger && navMenu) {
	hamburger.addEventListener('click', () => {
		navMenu.classList.remove('hidden');
	});
	// }

	/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
	const html = document.querySelector('html');
	const themeBtn = document.getElementById('theme-toggle');

	if (themeBtn) {
		if (localStorage.getItem('mode') === 'dark') {
			darkMode();
		} else {
			lightMode();
		}

		themeBtn.addEventListener('click', () => {
			if (localStorage.getItem('mode') === 'light') {
				darkMode();
			} else {
				lightMode();
			}
		});
	}

	function darkMode() {
		if (html) {
			html.classList.add('dark');
		}
		if (themeBtn) {
			themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
		}
		localStorage.setItem('mode', 'dark');
	}

	function lightMode() {
		if (html) {
			html.classList.remove('dark');
		}
		if (themeBtn) {
			themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
		}
		localStorage.setItem('mode', 'light');
	}

	/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
	let tabs = document.querySelectorAll('.tab2');
	let indicator = document.querySelector('.indicator');
	const all = document.querySelectorAll('.work_card');
	const uiuxs = document.querySelectorAll('.uiux');
	const apps = document.querySelectorAll('.app');
	const brandings = document.querySelectorAll('.branding');
	if (tabs.length > 0 && indicator) {
		indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
		indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';
		tabs.forEach((tab) => {
			tab.addEventListener('click', () => {
				indicator.style.width = tab.getBoundingClientRect().width + 'px';
				indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';
				tabs.forEach((t) => t.classList.remove('text-whiteColor'));
				tab.classList.add('text-whiteColor');

				const tabval = tab.getAttribute('data-tabs');

				all.forEach((item) => {
					item.style.display = 'none';
				});

				if (tabval === 'uiux') {
					uiuxs.forEach((item) => {
						item.style.display = 'block';
					});
				} else if (tabval === 'branding') {
					brandings.forEach((item) => {
						item.style.display = 'block';
					});
				} else if (tabval === 'app') {
					apps.forEach((item) => {
						item.style.display = 'block';
					});
				} else {
					all.forEach((item) => {
						item.style.display = 'block';
					});
				}
			});
		});
	}

	/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
	const scrollHeader = () => {
		const navbar = document.getElementById('navbar');
		const aTag = document.querySelectorAll('nav ul li a');
		const themeToggle = document.getElementById('theme-toggle');
		const hamburger = document.getElementById('hamburger');
		const goldLogo = document.getElementById('gold-logo');
		const whiteLogo = document.getElementById('white-logo');

		// if (goldLogo && whiteLogo) {
		if (window.scrollY >= 200) {
			navbar?.classList.add('bg-primaryColor');
			aTag.forEach((item) => {
				item.classList.add('text-whiteColor');
			});
			[themeToggle, hamburger].forEach((el) => el?.classList.add('text-whiteColor'));
			// goldLogo?.classList.add('hidden');
			// whiteLogo?.classList.remove('hidden');
		} else {
			navbar?.classList.remove('bg-primaryColor');
			aTag.forEach((item) => {
				item.classList.remove('text-whiteColor');
			});
			[themeToggle, hamburger].forEach((el) => el?.classList.remove('text-whiteColor'));
			// goldLogo?.classList.remove('hidden');
			// whiteLogo?.classList.add('hidden');
		}
		// }
	};
	window.addEventListener('scroll', scrollHeader);

	/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
	const scrollUp = () => {
		const scrollUpBtn = document.getElementById('scroll-up');
		if (scrollUpBtn) {
			if (window.scrollY >= 250) {
				scrollUpBtn.classList.remove('-bottom-1/2');
				scrollUpBtn.classList.add('bottom-4');
			} else {
				scrollUpBtn.classList.add('-bottom-1/2');
				scrollUpBtn.classList.remove('bottom-4');
			}
		}
	};
	window.addEventListener('scroll', scrollUp);

	/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
	const activeLink = () => {
		const sections = document.querySelectorAll('section');
		const navLinks = document.querySelectorAll('.nav-link');
		let current = 'hero';

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;

			if (window.scrollY >= sectionTop - 60) {
				current = section.getAttribute('id');
			}
		});

		navLinks.forEach((item) => {
			item.classList.remove('active');
			if (item.href.includes(current)) {
				item.classList.add('active');
			}
		});
	};
	window.addEventListener('scroll', activeLink);

	/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
	if (typeof ScrollReveal !== 'undefined') {
		const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

		if (!isMobile) {
			const sr = ScrollReveal({
				origin: 'top',
				distance: '60px',
				duration: 2500,
				delay: 200,
			});

			sr.reveal('.hero__image');
			sr.reveal('.hero__content', { origin: 'bottom' });
			sr.reveal('.hero__footer', { origin: 'bottom', delay: 800 });

			sr.reveal('.service_top', { origin: 'bottom' });
			sr.reveal('.service_item', { origin: 'bottom', interval: 200 });

			sr.reveal('.recent_works_top', { origin: 'bottom' });
			sr.reveal('.recent_works_tabs', { origin: 'bottom', delay: 600 });
			sr.reveal('.work_card', { origin: 'bottom', delay: 800 });

			sr.reveal('.exp_top', { origin: 'top' });
			sr.reveal('.exp_card', { origin: 'left', interval: 200 });

			sr.reveal('.edu_top', { origin: 'top' });
			sr.reveal('.edu_card', { origin: 'right', interval: 200 });

			sr.reveal('.skills_top', { origin: 'bottom' });
			sr.reveal('.skills_card', { origin: 'bottom', interval: 200 });

			sr.reveal('.blog_top', { origin: 'top' });
			sr.reveal('.blog_card', { origin: 'top', interval: 200 });

			sr.reveal('.contact_form', { origin: 'left' });
			sr.reveal('.contact_item', { origin: 'right', interval: 200 });
		}
	}
}
