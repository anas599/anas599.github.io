const nameLc = document.getElementById('name');
const emailLc = document.getElementById('email');
const msgLc = document.getElementById('message');
const ev = document.getElementsByClassName('formInput');

for (let i = 0; i < ev.length; i += 1) {
  ev[i].addEventListener('input', () => {
    localStorage.setItem(
      'formData',
      JSON.stringify({
        name: nameLc.value,
        email: emailLc.value,
        message: msgLc.value,
      }),
    );
  });
}

const retData = localStorage.formData ? JSON.parse(localStorage.formData) : {};
window.onload = () => {
  if (nameLc) nameLc.value = retData.name || '';
  if (emailLc) emailLc.value = retData.email || '';
  if (msgLc) msgLc.value = retData.message || '';
};