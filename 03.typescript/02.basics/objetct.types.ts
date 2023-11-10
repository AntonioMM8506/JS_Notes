// Basic object definition
let employee: object // Object

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
}
//console.log(employee)

// You will get an error if you try to reassign any primitive value to an object
//employee = 'Jane'

// If you try to access a property that does not exists, you will get an error
//console.log(employee.hireDate)

// Explicitly specify properties of an oject, declare the object first
let teacher: {
  firstName: string,
  lastName: string,
  age: number
}

teacher = {
  firstName: 'Jane',
  lastName: 'Gomez',
  age: 25
}

// Let's combine both syntaxes
let car: {
  brand: string,
  wheels: number,
  isSport: boolean
} = {
  brand: 'Toyota',
  wheels: 4,
  isSport: false
}

type myProps = {
  propOne: boolean,
  propTwo: number
}

let objectCustom: myProps = {
  propOne: true,
  propTwo: 18
}