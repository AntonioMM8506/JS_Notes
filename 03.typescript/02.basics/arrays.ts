// Basic array definition
const students: string[] = ['Ana', 'Jorge', 'Maria']
let numberArray: number[] = [100, 3.1416, -546, 0b100, 0XA, 0o10] // Int, Float, Bin, Hexa, Octal

// Add more elements to an array
students[3] = 'Joshua'
students.push('Leonora')
//students.push(1050)

// Array element type inference
let student = students[2]
//console.log(typeof student)

// TS arrays have the same properties and methos of JS arrays
//console.log(students.length)

let series: number[]
series = [1, 2, 3, 4]
let doubleIt = series.map(e => e*2)
//console.log(doubleIt)

// Union types in arrays
const mixinData: (string | boolean)[] = ['Football', false, true]