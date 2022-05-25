class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || 'top hat';
    this.clothing = magician.clothing;
    this.incantation = magician.incantation;
    this.confidencePercentage = 10;
    }

    performIncantation(incantation) {
      return `${incantation.toUpperCase()}!`
    };

    performTrick() {
      this.confidencePercentage = this.confidencePercentage + 10;
      if (this.favoriteAccessory === 'top hat') {
        return ("PULL RABBIT FROM TOP HAT")
    } else {
      return ("PULL DOVE FROM SLEEVE")
    }
  }

    performShowStopper() {
      if (this.confidencePercentage < 100 || this.assistant === false) {
        return "Oh no, this trick is not ready!"
      } else if (this.confidencePercentage >= 100 && this.assistant === true ){
        return "WOW! The magician totally just sawed that person in half!"
      }
    }
  }


module.exports = Magician;
