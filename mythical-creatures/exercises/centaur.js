class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = 'Palomino';
    this.cranky = false;
    this.standing = true;
    this.actions = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.actions++
    if (this.actions === 3) {
      this.cranky = true;
      return 'Twang!!!';
  } else if (this.cranky  === true || this.layingDown === true) {
    return 'NO!';
  } else {
      return 'Twang!!!'
      }
    };

  run() {
    this.actions++
    if (this.actions === 3) {
      this.cranky = true;
      return 'Clop clop clop clop!!!';
  } else if (this.cranky === true || this.layingDown === true) {
      return 'NO!';
  } else {
      return 'Clop clop clop clop!!!'
    }
  };

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.cranky = false;
    return 'ZZZZ'
    }
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;

  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur;
