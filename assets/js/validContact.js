function validateForm() {
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');
	const emailPattern = /^\S+@\S+\.\S+$/;

	if (
		nameInput.value.trim() === ''
    || emailInput.value.trim() === ''
    || messageInput.value.trim() === ''
	) {
		alert('Please fill in all the fields.');
		return false;
	}

	if (!emailPattern.test(emailInput.value)) {
		alert('Please enter a valid email address.');
		return false;
	}

	return true;
}
