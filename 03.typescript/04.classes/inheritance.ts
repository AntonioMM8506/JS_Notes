// Basic use of inheritance in TS
class Owner {
  constructor(private firstName: string, private lastName: string) {}

  private get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  describe(): string {
    return `This is ${this.fullName}.`
  }
}

class CarOwner extends Owner {
  constructor(firstName: string, lastName: string, private car: string) {
    super(firstName, lastName)
  }

  // Method overriding
  describe(): string {
    return `${super.describe()} and his car is a: ${this.car}`
  }
}

const george: CarOwner = new CarOwner('George', 'Brown', 'Sentra')
console.log(george.describe())
