document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        return;
    }

    
    let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]${6,}/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters, include uppercase, lowercase, number, and special character.";
        return;
    }

    successMessage.textContent = "Login successful!";
});
document.addEventListener("DOMContentLoaded", function() {
    const UsernameInput = document.getElementById("email");
    const rememberMeCheckbox = document.getElementById("rememberMe");
    if (localStorage.getItem("rememberedUsername")) {
        UsernameInput.value = localStorage.getItem("rememberedUsername");
        rememberMeCheckbox.checked = true;

    }
})

