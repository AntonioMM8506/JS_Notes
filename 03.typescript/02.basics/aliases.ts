// Basic alias declaration
type myCustomType = string

let message: myCustomType = 'Hello world!'

// Useful way to uses aliases
type alphanumeric = string | number
let input: alphanumeric
input = 'Hi'
input = 100