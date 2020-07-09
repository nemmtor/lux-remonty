import jump from 'jump.js';

const dataScrollElements = document.querySelectorAll('[data-scroll]');
const nav = document.querySelector('.nav');

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
