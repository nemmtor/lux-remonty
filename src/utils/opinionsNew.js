import gsap from 'gsap';
import { throttle } from 'lodash';

const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

const opinionsTimeline = gsap.timeline({
    repeat: -1,
    defaults: {
        duration: 0.5,
        delay: 3,
        ease: 'power1.out',
    },
});

const labels = ['opinion1', 'opinion2', 'opinion3', 'opinion4'];

opinionsTimeline
    .addLabel(labels[0])
    .to('.opinion', { xPercent: -100 })
    .to('.slider__indicator', { opacity: 0.3, scaleY: 1 }, '-=3.5')
    .to(
        '.slider__indicator--2',
        { opacity: 0.6, scaleY: 2, transformOrigin: 'bottom' },
        '-=3.5',
    )
    .addLabel(labels[1])
    .to('.opinion', { xPercent: -200 })
    .to('.slider__indicator', { opacity: 0.3, scaleY: 1 }, '-=3.5')
    .to(
        '.slider__indicator--3',
        { opacity: 0.6, scaleY: 2, transformOrigin: 'bottom' },
        '-=3.5',
    )
    .addLabel(labels[2])
    .to('.opinion', { xPercent: -300 })
    .addLabel(labels[3])
    .to('.slider__indicator', { opacity: 0.3, scaleY: 1 }, '-=3.5')
    .to(
        '.slider__indicator--1',
        { opacity: 0.6, scaleY: 2, transformOrigin: 'bottom' },
        '-=3.5',
    );

const getOffsetLabel = (offset) => {
    const currentLabel = opinionsTimeline.currentLabel();
    return labels.indexOf(currentLabel) + offset;
};

const slideLeft = (options) => {
    const prevIndex = getOffsetLabel(-1);
    if (prevIndex === -1) {
        opinionsTimeline.seek(labels[3]);
        opinionsTimeline.tweenFromTo(labels[3], labels[2], options);
    } else {
        const previousLabel = labels[prevIndex];
        opinionsTimeline.tweenTo(previousLabel, options);
    }
};

const slideRight = (options) => {
    const nextIndex = getOffsetLabel(1);
    if (nextIndex === 4) {
        opinionsTimeline.seek(labels[0]);
        opinionsTimeline.tweenFromTo(labels[0], labels[1], options);
    } else {
        const nextLabel = labels[nextIndex];
        opinionsTimeline.tweenTo(nextLabel, options);
    }
};

const slide = throttle((isBackwards = false) => {
    const options = {
        delay: 0,
        duration: 1,
        onComplete: () => {
            opinionsTimeline.resume();
        },
    };
    if (isBackwards) {
        slideLeft(options);
    } else {
        slideRight(options);
    }
}, 1000);

prev.addEventListener('click', () => {
    opinionsTimeline.pause();
    slide(true);
});

next.addEventListener('click', () => {
    opinionsTimeline.pause();
    slide();
});
