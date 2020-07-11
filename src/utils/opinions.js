import gsap from 'gsap';

const prev = document.querySelector('.opinions__prev');
const next = document.querySelector('.opinions__next');

const opinionsTimeline = gsap.timeline({
    repeat: -1,
    defaults: {
        stagger: 1,
        duration: 0.5,
        delay: 3,
        ease: 'power4.inOut',
    },
});

opinionsTimeline
    .addLabel('1')
    .to('.opinion', {
        xPercent: -100,
    })
    .addLabel('2')
    .to('.opinion', {
        xPercent: -200,
    })
    .addLabel('3')
    .to('.opinion', {
        xPercent: -300,
    })
    .addLabel('4')
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

prev.addEventListener('click', () => {
    const currentLabel = opinionsTimeline.currentLabel();
    if (typeof currentLabel === 'undefined') {
        opinionsTimeline.seek('3');
    } else {
        const nextLabel = parseInt(currentLabel, 10) - 1;
        if (nextLabel === 0) {
            opinionsTimeline.seek('3');
        } else {
            opinionsTimeline.seek(nextLabel.toString());
        }
    }
});

next.addEventListener('click', () => {
    const currentLabel = opinionsTimeline.currentLabel();
    if (typeof currentLabel === 'undefined') {
        opinionsTimeline.seek('2');
    } else {
        const nextLabel = parseInt(currentLabel, 10) + 1;
        if (nextLabel === 4) {
            opinionsTimeline.seek('1');
        } else {
            opinionsTimeline.seek(nextLabel.toString());
        }
    }
});
