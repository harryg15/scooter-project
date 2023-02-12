const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {kingsCross: [], londonBridge: [], marleybone: []}
    this.registeredUsers = {}
  }

  registerUser(username, password, age) {
    if (this.registeredUsers.hasOwnProperty(username) == false && age >= 18) {
      this.registeredUsers[username] = password;
      console.log("user has been registered");

    } else if (age < 18) {
      throw new Error("too young to register");

    } else {
      throw new Error("already registered");

    }
  }

  loginUser(username, password) {
      if (this.registeredUsers[username] == password) {
        User.login(password)

      } else {
        throw new Error("Username or password is incorrect");

      }
  }

  logoutUser(username) {
    if (this.registeredUsers.hasOwnProperty(username)) {
      User.logout()
      console.log("user is logged out");

    } else {
      throw new Error("no such user is logged in");

    }
  }

  createScooter(station) {
    if (this.stations.hasOwnProperty(station) == false) {
      throw new Error("no such station");
    } else {
        let scooter = Object.create(Scooter);
        let newScooter = this.stations[station].push(scooter);
        console.log("created new scooter");
        return newScooter;
    }
  }

  dockScooter(scooter, station) {
    if (this.stations.hasOwnProperty(station) == false) {
      throw new Error("no such station");
    } else if (this.stations[station].includes(scooter)) {
      throw new Error("scooter already at station")
    } else {
      this.stations[station].push(scooter)
      this.user = null;
      console.log("scooter is docked")
    }
  }

  rentScooter(scooter, user) {
    if (this.user !== null) {
      throw new Error("scooter already rented")
    } else {
        for (let station in this.stations) {
          if (this.stations[station].includes(scooter)) {
            let index = this.stations[station].indexOf(scooter)
            this.stations[station].splice(index, 1)
            this.user = user;
            console.log("scooter is rented")
          } 
        }
      }
    }

  print() {
    console.log(this.registeredUsers)
    console.log(this.stations)
  }
  } 


module.exports = ScooterApp
