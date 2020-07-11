import jump from 'jump.js';
import { debounce } from 'lodash';

const dataScrollElements = document.querySelectorAll('[data-scroll]');
const nav = document.querySelector('.nav');

const jumpDebounced = debounce(
    (target, offset) => {
        jump(target, {
            duration: 1000,
            offset,
        });
    },
    200,
    { leading: true, trailing: false },
);

// Need to wrap it inside DOMContentLoaded because
// only then I can get proper navHeight
document.addEventListener('DOMContentLoaded', () => {
    const navHeight = nav.offsetHeight;

    dataScrollElements.forEach((element) => {
        const { target } = element.dataset;
        element.addEventListener('click', () => {
            jumpDebounced(target, -navHeight);
        });
    });
});
