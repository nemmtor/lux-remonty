import gsap from 'gsap';
import { throttle } from 'lodash';

const prev = document.querySelector('.opinions__prev');
const next = document.querySelector('.opinions__next');

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
    .addLabel(labels[1])
    .to('.opinion', { xPercent: -200 })
    .addLabel(labels[2])
    .to('.opinion', { xPercent: -300 })
    .addLabel(labels[3]);

const getOffsetLabel = (offset) => {
    const currentLabel = opinionsTimeline.currentLabel();
    return labels.indexOf(currentLabel) + offset;
};

const slideLeft = throttle(() => {
    const prevIndex = getOffsetLabel(-1);
    if (prevIndex === -1) {
        opinionsTimeline.seek(labels[3]);
        opinionsTimeline.tweenFromTo(labels[3], labels[2], {
            delay: 0,
            duration: 1,
            onComplete: () => {
                opinionsTimeline.resume();
            },
        });
    } else {
        const previousLabel = labels[prevIndex];
        opinionsTimeline.tweenTo(previousLabel, {
            delay: 0,
            duration: 1,
            onComplete: () => {
                opinionsTimeline.resume();
            },
        });
    }
}, 1000);

prev.addEventListener('click', () => {
    opinionsTimeline.pause();
    slideLeft();
});

const slideRight = throttle(() => {
    const nextIndex = getOffsetLabel(1);
    if (nextIndex === 4) {
        opinionsTimeline.seek(labels[0]);
        opinionsTimeline.tweenFromTo(labels[0], labels[1], {
            delay: 0,
            duration: 1,
            onComplete: () => {
                opinionsTimeline.resume();
            },
        });
    } else {
        const nextLabel = labels[nextIndex];
        opinionsTimeline.tweenTo(nextLabel, {
            delay: 0,
            duration: 1,
            onComplete: () => {
                opinionsTimeline.resume();
            },
        });
    }
}, 1000);

next.addEventListener('click', () => {
    opinionsTimeline.pause();
    slideRight();
});
