import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

const burger = document.querySelector('.nav__burger-container');
const navItems = document.querySelectorAll('.nav__menu-item');
const navMenu = document.querySelector('.nav__menu');

// Animate burger on page load
gsap.to('.nav__burger-container', {
    x: 0,
    duration: 0.5,
});

// Nav menu animation
const navTimeline = gsap.timeline({ paused: true });

// Need to wrap it inside DOMContentLoaded because ::after is not ready before dom is loaded
document.addEventListener('DOMContentLoaded', () => {
    navTimeline
        .to('.nav__menu', {
            yPercent: 100,
            duration: 0.5,
            ease: 'power3.out',
        })
        .to(
            '.nav__menu-item',
            {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                y: 0,
            },
            '-=0.2',
        )
        .to(CSSRulePlugin.getRule('.nav__menu::after'), {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
        });
});

const mobileView = window.matchMedia('screen and (max-width: 768px)');

if (mobileView.matches) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burger.classList.toggle('closed');
        const isActive = burger.classList.contains('active');
        if (isActive) {
            navTimeline.timeScale(1).play();
        } else {
            navTimeline.timeScale(3).reverse();
        }
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            burger.classList.remove('active');
            burger.classList.add('closed');
            navTimeline.timeScale(3).reverse();
        });
    });

    window.addEventListener('click', (e) => {
        if (
            !navMenu.contains(e.target) &&
            !navTimeline.isActive() &&
            !burger.classList.contains('closed')
        ) {
            burger.classList.toggle('active');
            burger.classList.toggle('closed');
            navTimeline.timeScale(3).reverse();
        }
    });
}
