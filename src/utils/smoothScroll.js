import jump from 'jump.js';

const dataScrollElements = document.querySelectorAll('[data-scroll]');
const nav = document.querySelector('.nav');

const laptopView = window.matchMedia('screen and (min-width: 1024px)');

document.addEventListener('DOMContentLoaded', () => {
    const navHeight = nav.offsetHeight;
    dataScrollElements.forEach((element) => {
        const { target } = element.dataset;
        element.addEventListener('click', () => {
            jump(target, {
                offset: -navHeight,
            });
        });
    });
});
