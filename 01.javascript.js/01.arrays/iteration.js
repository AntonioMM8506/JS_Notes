let letters = [..."Hello world!"]
const numericArray = [1,2,3,4,5,6,7,8,9,10]

// Iterating array elements using for/of loop
for (let letter of letters) {
  //console.log(letter)
}

// Iterating array elements and we need to get the index of the element using for/of loop
for (let [index, letter] of letters.entries()) {
  //console.log(`The letter "${letter}" has an index of ${index}`)
}

// Now lets iterate the array using forEach method
letters.forEach(( letter, index ) => {
  //console.log(letter)
})

// Using old good-fashioned for loop to iterate over an array
// This has the best performance to iterate over an array
for (let i = 0; i < letters.length; i++) {
  //console.log(letters[i])
}

// Lets use map to iterate over an array
let multi = numericArray.map( item => item * 2 )
//console.log(multi)

// Using filter to get the odd numbers
const oddNumbers = numericArray.filter( item => item%2 !== 0)
//console.log(oddNumbers)

// Lets find an even number
const firstEvenNumber = numericArray.find( item => item%2 === 0)
//console.log(firstEvenNumber)

// Now lets find the index of the first odd number
const firstOddNumber = numericArray.findIndex( item => item%2 !== 0)
//console.log(firstOddNumber)

// Working example of every
//console.log(numericArray.every( item => item < 11)) // Should be true
//console.log(numericArray.every( item => item < 6)) // Should be false

// Working example of some
console.log(numericArray.some( item => item > 11)) // Should be false
console.log(numericArray.some( item => item < 6)) // Should be true

