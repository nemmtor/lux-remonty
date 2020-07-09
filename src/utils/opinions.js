import gsap from 'gsap';

// const prev = document.querySelector('.opinions__prev');
// const next = document.querySelector('.opinions__next');

const TIME_BETWEEN_SLIDES = 2;
// const ROUND_TO = 1 / 3;

const opinionsTimeline = gsap.timeline({
    repeat: -1,
    defaults: {
        stagger: 1,
        duration: 1,
        delay: TIME_BETWEEN_SLIDES,
        ease: 'power4.inOut',
    },
});

// const duration = opinionsTimeline.duration();

opinionsTimeline
    .to(
        '.opinion',
        {
            xPercent: -100,
        },
        'opinion1',
    )
    .to(
        '.opinion',
        {
            xPercent: -200,
        },
        'opinion2',
    )
    .to(
        '.opinion',
        {
            xPercent: -300,
        },
        'opinion3',
    )
    .set('.opinion', {
        x: 0,
        delay: 0,
    });

const scrollTopTimeline = gsap.timeline({
    repeat: -1,
    ease: 'power3.inOut',
});

scrollTopTimeline
    .fromTo(
        '.footer__scroll-img',
        { yPercent: 100 },
        {
            yPercent: -100,
            duration: 2,
        },
    )
    .set('.footer__scroll-img', {
        yPercent: 100,
    });

// prev.addEventListener('click', () => {
//     console.log(opinionsTimeline.currentLabel());
//     // const time =
//     //     duration *
//     //     Math.round(opinionsTimeline.progress() / ROUND_TO) *
//     //     ROUND_TO;
//     // console.log(time);
//     // opinionsTimeline.tweenTo(time);
//     // opinionsTimeline.resume();
// });

// next.addEventListener('click', () => {
//     const time =
//         duration *
//         Math.round(opinionsTimeline.progress() / ROUND_TO) *
//         ROUND_TO;
//     opinionsTimeline.tweenTo(time);
//     opinionsTimeline.resume();
// });
