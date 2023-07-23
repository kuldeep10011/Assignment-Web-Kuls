class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  const user1 = new User("john_doe", "OldPassword");
  
  console.log(user1.password); 
  
  user1.password = "NewPass123";
  
  console.log(user1.password); 
  
  user1.password = "invalid";
  