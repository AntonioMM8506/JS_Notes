// Basic implementation of an abstract class
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  // Declare an empty abstract method
  abstract getSalary(): number

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`
  }
}

// An abstract class can't create a new object from itself, this will throw an error
//const newEmployee = new Employee('Larry', 'Fines')

// We need to extend employee class into another class
class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
      super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
      super(firstName, lastName);
  }

  getSalary(): number {
      return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee('John', 'Doe', 12000)
let jane = new Contractor('Jane', 'Doe', 100, 160)

// Let's print how much money john and jane make
console.log(john.compensationStatement())
console.log(jane.compensationStatement())