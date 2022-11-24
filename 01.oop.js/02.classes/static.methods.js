class Square {
  constructor(side) {
    this.side = side
  }

  findPerimeter() {
    return 4 * this.side
  }

  static comparePerimeter(square1, square2) {
    if (square1.side > square2.side) {
      return 'First square has more perimeter'
    } else if (square1.side < square2.side) {
      return 'Second square has more perimeter'
    } else {
      return 'Both have same perimeter.'
    }
  }
}

let firstClassInstance = new Square(3)
let secondClassInstance = new Square(7)
let thirdClassInstance = new Square(10)

/* 
  Let's try to use comparePerimeter method 
*/

// Incorrect way
//console.log(`Bigger perimeter?: ${ thirdClassInstance.comparePerimeter(firstClassInstance, secondClassInstance) }`)

// Correct way
//console.log(`Bigger perimeter?: ${Square.comparePerimeter(firstClassInstance, secondClassInstance)}`)
//console.log('=================================')

/*
  Example of how "this" keyword works in a static context
*/
class Chat {
  static checkThis() {
    return this === Chat
  }
}
//console.log(`Value of: ${Chat.checkThis()}`)

/* 
  Access static members from another static method 
*/
class User {
  static helloEmail = 'hello@company.com'

  static checkValidEmail(email) {
    console.log('=================================')
    console.log('Yes, this is a valid email!')
  }

  static logingHelloEmail() {
    this.checkValidEmail(this.helloEmail)
    //User.checkValidEmail(User.helloEmail)
  }
}
//User.logingHelloEmail()

/* 
  Access static members from a class constructor and non-static methods
*/
class Car {
  static carBrand = 'Toyota'

  static startEngineMessage() {
    return "Give me a minute, we are checking the engine!"
  }

  static carColor = 'red'

  constructor() {
    console.log('=================================')
    console.log(`This car is a: ${Car.carBrand}`)
    console.log(Car.startEngineMessage())
    // Bad way to call an static method
    //console.log(this.startEngineMessage())
  }

  displayCarColor() {
    console.log(`The car is color: ${Car.carColor}`)
  }
}

let myNewCar = new Car()
myNewCar.displayCarColor()
