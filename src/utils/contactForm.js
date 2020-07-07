const form = document.querySelector('form');
const formSubmit = document.querySelector('.form__submit');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formSubmit.disabled = true;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const msg = e.target.msg.value;
    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('phone', phone);
    formdata.append('msg', msg);
    form.classList.add('form--loading');
    await fetch('/php/contactform.php', {
        method: 'post',
        body: formdata,
    });
    form.classList.remove('form--loading');
    form.classList.add('form--success');
});
