class  Victim {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  notAlive() {
    this.alive = false;
  }
}



module.exports = Victim;
