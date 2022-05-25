class Person {
  constructor(name) {
    this.name = name;
    this.mood = 'frightened'
  }

  setMood(mood) {
    this.mood = mood;
  }
}



module.exports = Person;
