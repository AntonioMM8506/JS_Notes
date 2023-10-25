// Basic use of getter an setter
let obj = {
  // Ordinary data property
  dataProp: true,

  // An accessor property defined as a pair of functions
  get accesorProp() { return ttaPrhis.daop },
  set accesorProp(value) { this.dataProp = value }
}

/* 
  Useful case of getter and setter
  - The following object represents an 2D carterian point
  - It has ordinary data properties to represent x and y coordinates of the point
  - It has accesor properties that give the equivalent polar coordinates of the point

  Wikipedia about polar coordinates: polar coordinate system is a two-dimensional coordinate system 
  in which each point on a plane is determined by a distance from a reference point and an angle from a reference direction.
*/
let point = {
  // Ordinary data properties
  x: 1.0,
  y: 1.0,

  // r is read-write accessor property with getter and setter
  get r() { return Math.hypot(this.y, this.x) },
  set r(newValue) {
    let oldValue = Math.hypot(this.x, this.y)
    let ratio = newValue/oldValue
    this.x *= ratio
    this.y *= ratio
  },

  // theta is read-only accesor property with a getter only
  get theta() { return Math.atan2(this.y, this.x) }
}

// This object generates strictly increasing serial numbers
const serialNumber = {
  _n: 0,

  // Return the current value and increment it
  get next() { return this._n++ },

  // Set a new value of n, but only if it is largen than current
  set next(n) {
    if (n > this._n) this._n = n
    else throw new Error("Serial number can only be set to a larger value")
  }
}

/*console.log(`Value of 'r' ${point.r}`)
console.log(`Value of 'theta' ${point.theta}`)*/
console.log('=================================')

serialNumber.next = 10
for (let i = 1; i <= 10; i++) {
  console.log(`Round number ${i}, now the value of serialNumber.next is: ${serialNumber.next}`)
}
serialNumber.next = 5
