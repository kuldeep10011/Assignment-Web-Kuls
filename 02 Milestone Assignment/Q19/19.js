document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const messageElement = document.getElementById("message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;
  
      const isValidEmail = validateEmail(emailValue);
      const isValidPassword = validatePassword(passwordValue);
  
      if (isValidEmail && isValidPassword) {
        showMessage("Valid email and password!", "success");
      } else {
        showMessage("Invalid email or password!", "error");
      }
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    function showMessage(message, type) {
      messageElement.textContent = message;
      messageElement.className = type;
      messageElement.classList.remove("hidden");
    }
  });