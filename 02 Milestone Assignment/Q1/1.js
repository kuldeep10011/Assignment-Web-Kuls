function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password matched. Password validation successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }