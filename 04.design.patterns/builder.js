// Basic use of builder desing patter
class Car {
  constructor(make, model, year, isForSale = true, isInStock = true) {
    this.make = make
    this.model = model
    this.year = year
    this.isForSale = isForSale
    this.isInStock = isInStock
  }

  toString() {
    return console.log(JSON.stringify(this))
  }
}

class CarBuilder {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  notForSale() {
    this.isForSale = false

    return this
  }

  addInStock() {
    this.isInStock = true

    return this
  }

  build() {
    return new Car(this.make, this.model, this.year, this.isForSale, this.isInStock)
  }
}

module.exports = CarBuilder

// The correct way to use builder pattern
//const bmw = new CarBuilder('bmw', 'x6', 2020).addInStock().build()
const audi = new CarBuilder('audi', 'a8', 2021).notForSale().build()
const mercedes = new CarBuilder('mercedes-benz', 'c-class', 2019).build()

// Here we can have an error, that's why we use builder pattern
const bmw = new CarBuilder('bmw', 'x6', 2020, true, true)