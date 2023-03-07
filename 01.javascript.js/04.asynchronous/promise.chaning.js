// Let's create a simple promise function
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  },3 * 100)
})

// Using the p promise function
p.then((result) => {
  /*console.log(result)
  return result * 2*/
})

// Because the then() method returns a new Promise with a value resolved to a value, 
// you can call the then() method on the return Promise like this:
/*p.then((result) => {
  console.log(result)
  return result * 2
}).then((result) => {
  console.log(result)
  return result * 3
}).then((result) => {
  console.log(result)
  return result * 4
})*/
//  You can keep calling the then() method successively


/*
  ----------------------------------------------------------------------------------
    the following is NOT promise chaining
  ----------------------------------------------------------------------------------
*/
/*p.then((result) => {
  console.log(result)
  return result * 2
})

p.then((result) => {
  console.log(result)
  return result * 3
})

p.then((result) => {
  console.log(result)
  return result * 4
})*/


/*
  ----------------------------------------------------------------------------------
    Returning a promise
  ----------------------------------------------------------------------------------
*/
// You can return a new promise in the then()
/*p.then(result => {
  console.log(result)
  // New promise to be returned
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2)
    }, 3 * 1000)
  })
}).then((result) => {
  console.log(result)
  // Just for fun, lets return another promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 3)
    }, 3 * 1000)
  })
}).then(result => console.log(result))*/


/*
----------------------------------------------------------------------------------
  Promise chaining syntax
----------------------------------------------------------------------------------
*/
// Lets simulte some API calls
// First, get the user from the database.
// Second, get the services of the selected user.
// Third, calculate the service cost from the user’s services.
const getUser = (userId) => {
  return new Promise((resolve, reject) => {
      console.log('Get the user from the database.')
      setTimeout(() => {
          resolve({
              userId: userId,
              username: 'admin'
          })
      }, 1000)
  })
}

const getServices = (user) => {
  return new Promise((resolve, reject) => {
      console.log(`Get the services of ${user.username} from the API.`)
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN'])
      }, 3 * 1000)
  });
}

const getServiceCost = (services) => {
  return new Promise((resolve, reject) => {
      console.log(`Calculate the service cost of ${services}.`)
      setTimeout(() => {
          resolve(services.length * 100)
      }, 2 * 1000)
  });
}

// Now we can use the promises to serialize the sequence:
getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then(console.log)
