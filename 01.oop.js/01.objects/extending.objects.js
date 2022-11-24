// Basic and old way to extend one object into another
let target = {
  x: 1
}

let source = {
  y: 2,
  z: 3
}

target = {
  ...target,
  ...source
}

console.log('Extending target with source: ')
console.log(target)
console.log('=================================')

// New and cool way to extend a few objects into another
let receiver = { a: 1 }
let pushyOne = { b: 2, c: 3 }, pushyTwo = { d: 4, e: 5, f: 6 }
Object.assign(receiver, pushyOne, pushyTwo)

console.log('Extending receiver with two other objects')
console.log(receiver)
