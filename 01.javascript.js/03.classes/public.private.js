// Public fields and methods
class Rectangle {
  height
  width

  constructor(height, width) {
    this.height = height
    this.width = width
  }

  perimeter() {
    return 2 * (this.height + this.width)
  }
}

// Private fields
class PrivateRectangle {
  #height = 10
  #width = 5

  getPrivateWidth() {
    return this.#width
  }

  #perimeter() {
    return 2 * (this.#height + this.#width)
  }

  getPrivatePerimeter() {
    return this.#perimeter()
  }
}


const customRectangle = new Rectangle(10, 5)
console.log(`The height of the rectangle is: ${customRectangle.height}`)
console.log(`The perimeter of the rectangle is ${customRectangle.perimeter()}`)
console.log('=================================')

const customPrivateRectangle = new PrivateRectangle()
console.log(`The private width of the rectangle is ${customPrivateRectangle.getPrivateWidth()}`)
console.log(`The private perimeter is ${customPrivateRectangle.getPrivatePerimeter()}`)
//console.log(`Value of width: ${customPrivateRectangle.width}`)

