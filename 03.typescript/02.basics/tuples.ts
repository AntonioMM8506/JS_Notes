// Basic tuple definition
let myTuple: [string, number]
myTuple = ['Programming', 5]

// Changing the type of the data is wrong, will mark error
//myTuple = [5, 'Programming']

// Optional tuple elements
let rbgColor: [number, number, number, number?] = [255,180, 0]

// We can loop a tuple like an array
for (let i: number = 0; i < rbgColor.length; i++) {
  console.log(`Tuple position: ${i} value: ${rbgColor[i]}`)
}