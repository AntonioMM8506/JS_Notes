// ES6 class syntax
class Person {
  // Class declaration
  // Use strict
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getGender() {
    return this.gender
  }
}