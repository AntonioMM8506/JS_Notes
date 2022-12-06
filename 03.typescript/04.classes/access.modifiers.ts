/*
  - Basic use of private access modifier
*/
class PrivatePerson {
  private age: number
  private firstName: string
  private lastName: string

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
  }

  private getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// Let's print the full name
const newPrivatePerson: PrivatePerson = new PrivatePerson(30, 'Jack', 'Lopez')
//console.log(`Hi, my name is ${newPrivatePerson.firstName}`) // Try to use class prperties
//console.log(`Hi, my name is ${newPrivatePerson.getFullName()}`) // Try to use class method

/*
  - Basic use of public access modifier
*/
class PublicPerson {
  age: number
  public firstName: string
  lastName: string

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// Let's print the full name
const newPublicPerson: PublicPerson = new PublicPerson(30, 'Jack', 'Lopez')
//console.log(`Hi, my name is ${newPublicPerson.firstName} ${newPublicPerson.lastName}`) // Try to use class prperties
//console.log(`Hi, my name is ${newPublicPerson.getFullName()}`) // Try to use class method

/*
  - Basic use of protected access modifier
*/
class ProtectedPerson {
  constructor(public age: number, protected firstName: string, protected lastName: string) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
  }

  protected getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  printFullName(): string {
    return this.getFullName()
  }
}

const newProtectedPerson: ProtectedPerson = new ProtectedPerson(28, 'Jack', 'Lopez')
//console.log(`Hi, my name is ${newProtectedPerson.firstName}`) // Try to use class prperties
//console.log(`Hi, my name is ${newProtectedPerson.getFullName()}`) // Try to use class method
// console.log(`Hi, my name is ${newProtectedPerson.printFullName()}`) // Try to use class method

