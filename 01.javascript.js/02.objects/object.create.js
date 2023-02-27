// object creation using create()
let o1 = Object.create({
  x: 1,
  y: 2
})

// Object creation with no prototype (no props / no methods)
let o2 = Object.create(null)

// Empty object creation
let o3 = Object.create(Object.prototype)

// Practical use of Object.create()
let o4 = {
  x: "don't change this values"
}
library.function(Object.create(o4))