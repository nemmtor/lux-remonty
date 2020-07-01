import gsap from 'gsap';

const TIME_BETWEEN_SLIDES = 3;

const timeline = gsap.timeline({
    repeat: -1,
    defaults: {
        stagger: 1,
        duration: 1,
        delay: TIME_BETWEEN_SLIDES,
        ease: 'power1.in',
    },
});

timeline
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
