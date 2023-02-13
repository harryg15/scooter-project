class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password == this.password) {
      this.loggedIn = true;
      console.log("user has been logged in")
    } else {
      throw new Error("incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User
