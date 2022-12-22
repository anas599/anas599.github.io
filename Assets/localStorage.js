const nameLc = document.getElementById('name');
const emailLc = document.getElementById('email');
const msgLc = document.getElementById('message');
const ev = document.getElementsByClassName('formInput');
let retData = JSON.parse(localStorage.formData);

for (let i = 0; i < ev.length; i++) {
  ev[i].addEventListener('input', function localS() {
    localStorage.setItem(
      'formData',
      JSON.stringify({
        name: nameLc.value,
        email: emailLc.value,
        message: msgLc.value,
      })
    );
  });
}

window.onload = () => {
  nameLc.value = retData.name;
  emailLc.value = retData.email;
  msgLc.value = retData.message;
};