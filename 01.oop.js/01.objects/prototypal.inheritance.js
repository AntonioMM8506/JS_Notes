let animal = {
  //__proto__: lion, // Circular reference
  eats: true,
  walk: () => {}
}

let feline = {
  __proto__: animal,
  isMammal: true
}

let lion = {
  legs: 4,
}
lion.__proto__ = feline

// Lets print some props from feline and lion objects
console.log(`Feline gets eats prop from animal: ${feline.eats}`)
console.log('=================================')
console.log(`Lion gets isMammal prop from feline: ${lion.isMammal}`)