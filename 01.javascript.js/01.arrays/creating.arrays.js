/*
  ----------------------------------------------------------------------------------
    Array literals
  ----------------------------------------------------------------------------------
*/
let emptyArray = []
let primes = [2, 3, 5, 7, 11]
let misc = [true, 'ufo', 13.80, ] // 3 elements of various types + trailing comma

// An array literal can have expressions as item value
let base = 1024
let table = [base, base * 2, base * 4]

// Nested array literal
let b = [[1, { x: -1, y: 10 }], [2, { student: 'Jhon Doe' }]] // In this case we have an array literal and object literal in the array

// Sparse array literal
let count = [1,,3] // Elements at indexes 0 and 2. No element at index 1
let undefs = [,,] // An array with no elements but a length of 2


/*
  ----------------------------------------------------------------------------------
    The spread operator
  ----------------------------------------------------------------------------------
*/
let a = [1, 2, 3]
let c = [0, ...a, 4] // Now the array "c" has: 0, 1, 2, 3, 4 elements

// Let create a copy of an array using the spread operator
let original = [1, 2, 3]
let copy = [ ...original ]
copy[0] = 0
// Lets print element 1 of each array
//console.log(`First element of original array ${original[0]}`)
//console.log(`First element of copy array ${copy[0]}`)

// Using spread operator with an iterable object, in this case lets convert a string into array
let letters = [...'Workable']
// Here is a easy way to remove duplicate elements from an array
// We need to convert the array to a set and the inmediately convert the set back to an array
let message = 'Hello world!'
let messageArray = [...new Set(message)]
//console.log('Print messageArray = ', messageArray)


/*
  ----------------------------------------------------------------------------------
    The Array() constructor
  ----------------------------------------------------------------------------------
*/
// Call it with no arguments
let noArgs = new Array() // []

// Call it with a single numeric argument
let oneSingleNumericArg = new Array(10)

// Explicitly specify the elements
let arrayWithArgs = new Array(10, 20, 'Jhon Doe', false)
//console.log(arrayWithArgs)

/*
  ----------------------------------------------------------------------------------
    The Array.of() and Array.from()
  ----------------------------------------------------------------------------------
*/
// Using Array.of() to create new arrays
let ofEmptyArray = Array.of() // new Array()
let ofOneArg = Array.of(10)
let ofArray = Array.of(1,2,3)
//console.log(ofArray)

// Crearing an array copy using Array.from()
let fromCopy = Array.from(original)
console.log(fromCopy)
