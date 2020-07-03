const cookieWarning = document.querySelector('.cookies');
const cookieAccept = document.querySelector('.cookies__accept');

cookieAccept.addEventListener('click', () => {
    cookieWarning.style.display = 'none';
});
