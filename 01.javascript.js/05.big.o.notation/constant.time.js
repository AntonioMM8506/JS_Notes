// Constant time algorithm 0(1) - Order 1 example
const array = ['a', 'b', 'c', 'd', 'e', 'f']

// Lets do a basic benchmarking of the following code
const t0 = performance.now()
const first  = array[0]   // one operation, x time needed
const last   = array[5]   // one operation, x time needed
const random = array[1]   // one operation, x time needed
const t1 = performance.now()

// Same for functions constant time
const print = () => {
  console.log('Hello world!')
}
print() // console.log function called once, y time needed
print() // console.log function called once, y time needed

console.log(`Time it takes to run the code: ${t1 - t0} ms`)
