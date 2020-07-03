const form = document.querySelector('form');
const formSubmit = document.querySelector('.form__submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit.disabled = true;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const msg = e.target.msg.value;
    form.classList.add('form--loading');

    setTimeout(() => {
        form.reset();
        form.classList.remove('form--loading');
        form.classList.add('form--success');
    }, 1500);
});
