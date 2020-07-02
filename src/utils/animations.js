import gsap from 'gsap';

const TIME_BETWEEN_SLIDES = 2;

const opinionsTimeline = gsap.timeline({
    repeat: -1,
    defaults: {
        stagger: 1,
        duration: 1,
        delay: TIME_BETWEEN_SLIDES,
        ease: 'power4.inOut',
    },
});

opinionsTimeline
    .to('.opinion', {
        xPercent: -100,
    })
    .to('.opinion', {
        xPercent: -200,
    })
    .to('.opinion', {
        xPercent: -300,
    })
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
