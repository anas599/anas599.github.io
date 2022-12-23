const form = document.querySelector('form');
// eslint-disable-next-line no-use-before-define
form.addEventListener('submit', validateForm);
function validateForm(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  if (email.toLowerCase() !== email) {
    const errorMsg = document.querySelector('#errorMsg');
    errorMsg.textContent = 'Email must be in lower case!';
    return;
  }
  form.submit();
}
