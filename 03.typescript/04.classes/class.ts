// Basic class declaration
class Person {
  age: number
  firstName: string
  lastName: string

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// Create a new Person instance
const male: Person = new Person(25, 'Jack', 'Lopez')
console.log(`Hi, my name is ${male.getFullName()}`)