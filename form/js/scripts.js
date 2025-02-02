document.querySelector('input[type="email"]').addEventListener('input', function () {
    const emailInput = this.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailInput)) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('Please enter a valid email address.');
    }
});