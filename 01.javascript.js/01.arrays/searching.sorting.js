/*
  ----------------------------------------------------------------------------------
    Array.indexOf() and Array.lastIndexOf()
  ----------------------------------------------------------------------------------
*/
let indexArray = [0,1,2,1,0]
console.log(indexArray.indexOf(1))
console.log(indexArray.lastIndexOf(1))
console.log(indexArray.indexOf(3))

// Find all occurrences of a value x in an array a and return an array of matching indexes
function findAll(a, x) {
  let results = []
  let len = a.length
  let pos = 0

  while (pos < len) {
    pos = a.indexOf(x, pos)
    if (pos === -1) break
    results.push(pos)
    pos = pos + 1
  }

  return results
}
const searching = findAll(['hello', 'green', 'red', 'beer', 'hello', 'yeah'], 'hello')
console.log(`We found: [${searching}]`)
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.includes()
  ----------------------------------------------------------------------------------
*/
let includeArray = [1,true, 3, NaN]
console.log(includeArray.includes(true)) // true
console.log(includeArray.includes(2)) // false
console.log(includeArray.includes(NaN)) // true
console.log(includeArray.indexOf(NaN)) // -1, indexOf cant find NaN
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.sort()
  ----------------------------------------------------------------------------------
*/
let fruits = ['banana', 'cherry', 'apple']
console.log(fruits.sort()) // [apple, banana, cherry]

let integers = [33, 4, 1111, 222]
console.log(integers.sort()) // [1111, 222, 33, 4] alphabetical order

// Passing a comparator function, we will return numerical order
console.log(integers.sort((a,b) => {
  return a-b
}))
console.log(integers.sort((a,b) => a-b))
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.reverse()
  ----------------------------------------------------------------------------------
*/
let revertArray = [1,2,3]
console.log(revertArray.reverse())
