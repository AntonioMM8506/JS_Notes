// object creation using create()
let o1 = Object.create({
  x: 1,
  y: 2
})

// Object creation with no prototype (no props / no methods)
let o2 = Object.create(null)
//console.log(o2)

// Empty object creation
let o3 = Object.create(Object.prototype)
//console.log(o3)

// Practical use of Object.create()
let o4 = {
  x: "don't change this values"
}
//library.function(Object.create(o4))