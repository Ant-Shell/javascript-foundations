class Pirate {
  constructor(name, job = 'scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    if (this.booty < 500) {
    this.booty = this.booty + 100;
    return 'YAARRR!'
  } else if (this.booty >= 500) {
    this.cursed = true;
    return 'ARG! I\'ve been cursed!'
    }
  }

  liftCurse() {
    if (this.booty === 500) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return 'Your curse has been lifted!'
    } else if (this.booty < 500) {
      return 'You don\'t need to lift a curse!';
    }
  }
}

module.exports = Pirate;
