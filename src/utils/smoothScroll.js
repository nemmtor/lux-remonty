import jump from 'jump.js';

const dataScrollElements = document.querySelectorAll('[data-scroll]');

dataScrollElements.forEach((element) => {
    const { target } = element.dataset;
    element.addEventListener('click', () => {
        jump(target, {
            offset: -48,
        });
    });
});
