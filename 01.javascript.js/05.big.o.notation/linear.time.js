/*const print = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Hello world!')
  }
}
print(10)*/
// We can see that for n = 1 we called console.log once. For n = 10 we called console.log 
// 10 times and so on. Time required (number of operations) to complete all function cycles grows linearly.

const doublePrint = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Hello world!')
    console.log('Hello world!, Again!')
  } 
}
//doublePrint(10)
// We can see that the number of console.log calls doubled which implies print is faster that 
// doublePrint but the complexity in both cases is linear.
// It’s O(n) for print and O(2n) for doublePrint

// We can refactor doublePrint, to make it 0(n)
const refactoredDoublePrint = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Hello world!', 'Hello world!, Again!')
  }
}
refactoredDoublePrint(10)
