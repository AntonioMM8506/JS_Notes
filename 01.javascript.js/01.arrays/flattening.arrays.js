// Lets do some examples of flatting
const flattenedArray = [1, [2, 3]].flat() // [1, 2, 3]
//console.log(flattenedArray)

const otherFlattenedArray = [1, [2, [3]]].flat() // [1, 2, [3]]
//console.log(otherFlattenedArray)

// Now we will pass the nesting level of flattening
const arrayOne = [1, [2, [3, [4]]]]
console.log(arrayOne.flat(1))
console.log(arrayOne.flat(2))
console.log(arrayOne.flat(3))
console.log(arrayOne.flat(4))


/*
  ----------------------------------------------------------------------------------
    Array.flatMap()
  ----------------------------------------------------------------------------------
*/
let phrases = [
  "hello world",
  "the definitive guide"
]
let words = phrases.flatMap(phrase => phrase.split(" "))
// Let's print the array
console.log(words)

// Map non-negative numbers to their square roots
const squareRoots = [-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))
console.log(squareRoots)
