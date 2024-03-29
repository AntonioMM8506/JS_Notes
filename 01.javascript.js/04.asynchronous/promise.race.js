// Creating two basic promise functions
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved')
      reject(10)
  }, 2 * 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has resolved')
      reject(20)
  }, 1 * 1000)
})

// Let's run the promises at the same time and we will get the result of the first promise to get resolved
Promise.race([p1, p2])
  .then(value => console.log(`Resolved: ${value}`))
  .catch(reason => console.log(`Rejected once: ${reason}`))
