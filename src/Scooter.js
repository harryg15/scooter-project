class Scooter{
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial;
    this.nextSerial = this.serial + 1;
    this.charge = 100;
    this.isBroken = false;
  }

  rent() {
    if (this.charge > 20 && this.isBroken == false) {
      console.log("confused what to enter into this function")
    }
  }
}


module.exports = Scooter
