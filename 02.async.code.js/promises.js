// Fetch some products dummy data
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//const fetchPromise = fetch('https://mdn.github222.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

/*
  - A promise can be in one of three states: pending, fulfilled, rejected
*/
//console.log(fetchPromise)

/*
  - A promise have 3 basic methods: (Then, Catch and Finally)
*/
/*fetchPromise.then((response) => {
  console.log(response.status)
}).catch((err) => {
  console.warn('This is my custom error message!')
}).finally(() => {
  console.log('Now we are done!')
}*/

// Promises chaining
/*fetchPromise.then((response) => {
  const jsonPromise = response.json()
  jsonPromise.then((data) => {
    console.log(data)
  })
})*/

// then() returns a promise, let's rewrite the above code in a more elegant way
/*fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })*/

// Combining multiple promises
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

/*Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`)
    }
  })
  .catch((err) => {
    console.log(`Failed to fetch: ${err}`)
  })*/

  // Promise race, gets the first result of two or more promises
  Promise.race([fetchPromise1, fetchPromise3])
    .then((response) => {
      console.log(`${response.url} : ${response.status}`)
    })
    .catch((err) => {
      console.warn(err)
    })