class Hobbit {
  constructor({name}) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    }

    timeTravel(num, hobbit){
      for (var i = 0; i < num; i++){
        hobbit.celebrateBirthday();
        }
      }

    celebrateBirthday(){
      this.age++
      if (this.age >= 33 && this.age <= 100) {
        this.adult = true;
      } else if (this.age > 100) {
        this.old = true;
      }
    }
      getRing() {
        if (this.name === 'Frodo') {
          this.hasRing = true;
          return 'Here is the ring!'
        } else {
          this.hasRing = false;
          return 'You can\'t have it!'
        }
      }
    }


module.exports = Hobbit;
