// Lets define an one element array
const simpleArray = ['world']

// Use the [] operator to read or modify an array element
console.log(`The first element of the array is "${simpleArray[0]}"`)

// Adding a new element to the array
simpleArray[1] = 3.14

// We can use a variable to set the index of a new element in the array
let i = 2
simpleArray[i] = false
simpleArray[i + 1] = 'new word'

// Also we can use the same variable to read an array element
console.log(`The element with the index ${i} is ${simpleArray[i]}`)

// We can also use negative numbers as index to add or read array elements
simpleArray[-1.23] = 'yeah!'
console.log(simpleArray['-1.23'])