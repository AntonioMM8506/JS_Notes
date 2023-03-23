// Explicit type assignment
let firstName: string = "Jhon"
//firstName = 33 // attempts to re-assign the value to a different type

// Implicit type assignment
let lastName = "Doe" // : string
//lastName = 44 // attempts to re-assign the value to a different type

// Unable to infer
const json = JSON.parse("55")
console.log(typeof json) // could be a string or number