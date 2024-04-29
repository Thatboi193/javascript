function validateForm() {

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let numberInput = document.getElementById("number");
let passwordInput = document.getElementById("password");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let numberError = document.getElementById("numberError");
let passwordError = document.getElementById("passwordError");
let isValid = true;

nameError.textContent = "";
emailError.textContent = "";
numberError.textContent = "";
passwordError.textContent = "";

if (nameInput.value.trim() == "") {
    nameError.textContent = "Name is required";
    isValid = false;
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email adress";
    isValid = false;
}

if (isNaN(numberInput.value) || numberInput.value.trim() === "") {
    numberError.textContent = "Number is required";
    isValid = false;
}

if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
}

return isValid;
};


function showPass() {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";

    } else {
        password.type = "password";
    }
};
