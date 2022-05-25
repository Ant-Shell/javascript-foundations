var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(medusa) {
    this.name = medusa;
    this.statues = []
      }

gazeAtVictim(person) {
  var statue = new Statue(person.name)
  if (this.statues.length < 3) {
    this.statues.push(statue);
  } else {
    var freedStatue = this.statues.shift(this.statues);
    this.statues.push(statue);
    var restoredPerson = new Person(freedStatue.name);
    restoredPerson.setMood('relieved')
    return restoredPerson;
    }
  }
};
// console.log(this.statues)


 // pass in a victim (person)
 // add victim to statues array
 // for (var i =0; i < this.statues.length; i++) {
 //   console.log(this.statues[0])
 //   console.log(this.statues[1])


module.exports = Medusa;
