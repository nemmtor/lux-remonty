const phoneDetail = document.querySelector('.contact__detail--phone');
const mailDetail = document.querySelector('.contact__detail--mail');
const fbDetail = document.querySelector('.contact__detail--fb');

const details = [
    {
        selector: phoneDetail,
        href: 'tel:691694580',
    },
    {
        selector: mailDetail,
        href: 'mailto:kontakt@lux-remonty.pl',
    },
    {
        selector: fbDetail,
        href: 'https://facebook.com/luxadamjankowski',
    },
];

details.forEach(({ selector, href }) => {
    selector.addEventListener('click', () => {
        window.location.href = href;
    });
});
