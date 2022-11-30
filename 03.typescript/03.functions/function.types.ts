// Basic function type declaration
let sum: (x: number, y: number) => number

sum = function (x: number, y: number) {
  return x + y
}

console.log(`5 + 10 = ${ sum(5, 10) }`)

// Assign the var with the type annotation and value
let multiply: (a: number, b: number) => number =
  function (x: number, y: number) {
    return x * y
  }
console.log(`5 x 10 = ${multiply(5, 10)}`)

// Inferring function types
let subs = function(x: number, y: number): number {
  return y - x
}
console.log(`10 - 5 = ${subs(5, 10)}`)