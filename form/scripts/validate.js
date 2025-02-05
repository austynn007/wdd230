// Password Matching Validation
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const message = document.querySelector("#formmessage");

confirmPassword.addEventListener("focusout", checkSame);

function checkSame() {
    if (password.value !== confirmPassword.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        confirmPassword.style.backgroundColor = "#fff0f3";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        confirmPassword.style.backgroundColor = "#fff";
        confirmPassword.style.color = "#000";
    }
}

// Display Range Value
const rating = document.querySelector("#rating");
const ratingValue = document.querySelector("#ratingValue");

rating.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    ratingValue.textContent = rating.value;
}