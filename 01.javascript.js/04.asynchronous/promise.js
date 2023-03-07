// Defining a function, that retusn a list of user objects
// Lets delay the result for 1 sec
const getUsers = () => {
  let users = []

  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]
  }, 1000)

  return users
}

// Getting user by name, we ware of the result
const findUser = (userName) => {
  const users = getUsers()
  const user = users.find((user) => user.username === userName)
  return user
}
// This will throw an undefined
//console.log(findUser('john'))

// Refactoring the getUser function into a promise
const promiseGetUsers = () => {
  return new Promise((resolve, reject) => {
    // We set the timeout and then we will use the resolver to return the proper user info
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ])
    }, 1000)
  })
}
// Just for fun lest create a functoin that prints out the given user info
const onFulfilled = (users) => {
  console.log(users)
}
// Now, let's run the promise function
const promise = promiseGetUsers()
//console.log('Waiting for the promise to be fulfilled!')
// Using then method to print the users
//promise.then(onFulfilled)
// Another way to handle the promise result
/*promise.then((users) => {
  console.log(users[0])
})*/

/*
  ----------------------------------------------------------------------------------
    catch() method of the promise
  ----------------------------------------------------------------------------------
*/
// Change the value of success to see resolver (true) or reject (false)
let success = true

// Using the "same" promiseGetUsers function as a baseline, we will change the code a bit
const getStudents = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ])
      } else {
        reject('Failed to get the students!')
      }
    }, 1000)
  })
}

// Now we can handle the reject or resolve methods of the promise, check out the following code
const resultStudents = getStudents()
// As always we will use then to handle the resolve, but now, we will use also catch() to handle
// the reject method of the promise
/*resultStudents
  .then((students) => {
    console.log(students)
  })
  .catch((error) => {
    console.log(error)
  })*/

// If we remember we can hanlde error also in then method of the promise, like this:
resultStudents
  .then((success) => console.log(success), (error) => console.log(error))


/*
  ----------------------------------------------------------------------------------
    finally() method of the promise
  ----------------------------------------------------------------------------------
*/
// We will use the same function getStudents, remember finally always gets called
resultStudents
  .then(students => console.log(students))
  .catch(error => console.error(error))
  .finally(() => console.log('No matter what, I alway get rendered!'))
