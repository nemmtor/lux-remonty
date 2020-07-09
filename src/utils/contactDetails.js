const phoneDetail = document.querySelector('.contact__detail--phone');
const mailDetail = document.querySelector('.contact__detail--mail');
const fbDetail = document.querySelector('.contact__detail--fb');

phoneDetail.addEventListener('click', () => {
    window.location.href = 'tel:691694580';
});

mailDetail.addEventListener('click', () => {
    window.location.href = 'mailto:kontakt@lux-remonty.pl';
});

fbDetail.addEventListener('click', () => {
    window.location.href = 'https://facebook.com/luxadamjankowski';
});
