/*
----------------------------------------------------------------------------------
  All promises fulfilled example
----------------------------------------------------------------------------------
*/
/*const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 fulfilled')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled')
    resolve(2)
  }, 2000)
})
// Let's use Promise.any to execute both promises
const p = Promise.any([p1,p2])
// Now we need to print the result
p.then((value) => {
  console.log('Returned promise')
  console.log(`Promise resolved: ${value}`)
})*/
// First, create a new promise p1 that will resolve to a value 1 after one second.
// Second, create a new promise p2 that will resolve to a value 2 after two seconds.
// Third, use the Promise.any() method that uses two promises p1 and p2. The Promise.any() 
// returns a promise p that will resolve to the value 1 of the first fulfilled promise (p1) after one second.


/*
----------------------------------------------------------------------------------
  One promise rejected example
----------------------------------------------------------------------------------
*/
/*const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3 rejected')
    reject('error')
  }, 1000)
})
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 4 fulfilled')
    resolve(2)
  }, 2000)
})

const prom = Promise.any([p3, p4])
prom.then((value) => {
  console.log('Returned Promise')
  console.log(`Resolved promise: ${value}`)
})*/


/*
----------------------------------------------------------------------------------
  All promises rejected example
----------------------------------------------------------------------------------
*/
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected')
    reject('error1')
  }, 1000)
})
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 rejected')
    reject('error2')
  }, 2000)
})
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3 rejected')
    reject('error3')
  }, 3000)
})
const otherP = Promise.any([p5,p6,p7])
/*otherP.then().catch((e) => {
  console.log('Returned promise')
  console.log(e, e.errors)
})*/
otherP.then(() => {}, (e) => {
  console.log('Returned promise')
  console.log(e, e.errors)
})
