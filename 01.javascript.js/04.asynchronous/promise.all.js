// The following promises resolve to 10, 20, and 30 after 1, 2, and 3 seconds. 
// We use the setTimeout() to simulate the asynchronous operations
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved')
    resolve(20)
  }, 2 * 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved')
    resolve(30)
  }, 3 * 1000)
})

// Now lets use Promise.all to run all the promises at the same time
/*Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p,c) => p + c) // We just calculate all the resolved values for each promise

  // Printing some info, related to the promises
  console.log(`Results: ${results}`)
  console.log(`Total: ${total}`)
})*/


/*
----------------------------------------------------------------------------------
  Reject promise
----------------------------------------------------------------------------------
*/
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved')
      resolve(10)
  }, 1 * 1000)
})
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected')
      reject('Failed')
  }, 2 * 1000)
})
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The third promise has resolved')
      resolve(30)
  }, 3 * 1000)
})

// Running all the promises at the same time
Promise.all([p4, p5, p6])
  .then(console.log) // never execute
  .catch(console.log)
