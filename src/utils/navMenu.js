import gsap from 'gsap';

const burger = document.querySelector('.nav__burger-container');

const navItems = document.querySelectorAll('.nav__menu-item');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burger.classList.toggle('closed');
    const isActive = burger.classList.contains('active');
    if (isActive) {
        gsap.to('.nav__menu', {
            yPercent: 100,
            duration: 0.5,
            ease: 'power3.out',
        });
    } else {
        gsap.to('.nav__menu', {
            yPercent: 0,
            duration: 0.3,
            ease: 'power3.in',
        });
    }
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        burger.classList.remove('active');
        burger.classList.add('closed');
        gsap.to('.nav__menu', {
            yPercent: 0,
            duration: 0.3,
            ease: 'power3.in',
        });
    });
});
