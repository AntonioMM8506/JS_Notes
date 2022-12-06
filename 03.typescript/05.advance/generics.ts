// Basic way to create a generic type
/*
  - The T allows you to capture the type that is provided at the time of calling the function.
  - The function uses the T type variable as its return type
*/
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

// Lets call a generic function
let numbers: number[] = [1, 5, 6, 2, 10]
let booleans: boolean[] = [true, false]
//console.log(`The random element from numbers is: ${ getRandomElement(numbers) }`)
//console.log(`The random element from booleans is: ${ getRandomElement(booleans) }`)

// You can have a generic with multiple types
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  }
}
const myObj1 = {
  name: 'Justin',
  age: 22
}
const myObj2 = {
  gender: 'male',
  children: false
}
console.log(merge(myObj1, myObj2))