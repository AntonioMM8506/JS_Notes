// Basic use of constructor in a class
class Person {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`)
  }
}
const customPerson = new Person('Jhonny')
customPerson.sayHi()

// Basic use of super inside a constructor
class Lady extends Person {
  constructor(name, lastName) {
    super(name)

    this.name = name
    this.lastName = lastName
  }
}
const customLady = new Lady('Lorena', 'Garza')
customLady.sayHi()
