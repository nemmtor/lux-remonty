import jump from 'jump.js';
import { debounce } from 'lodash';

const dataScrollElements = document.querySelectorAll('[data-scroll]');
const nav = document.querySelector('.nav');

document.addEventListener('DOMContentLoaded', () => {
    const navHeight = nav.offsetHeight;

    const jumpDebounced = debounce((target) => {
        jump(target, {
            offset: -navHeight,
        });
    }, 500);

    dataScrollElements.forEach((element) => {
        const { target } = element.dataset;
        element.addEventListener('click', () => {
            jumpDebounced(target);
        });
    });
});
