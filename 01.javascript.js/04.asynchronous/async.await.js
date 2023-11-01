// Let's create a basic example of async/await syntax
/*(async () => {
  async function sayHi() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hi there'), 1000)
    })
  }
  // Creating a new function to print a message
  console.log('Start code')
  const display = async () => {
    let result = await sayHi()
    console.log(result)
  }
  await display()
  console.log('End code')
})()*/
// The following code won't work
/*const errorDisplay = () => {
  let result = await sayHi()
  console.log(result)
}*/


/*
----------------------------------------------------------------------------------
  Error handling
----------------------------------------------------------------------------------
*/
async function getUser(userId) {
  await Promise.reject(new Error('Invalid User Id'))
}
// Let's handle the error
const showUsers = async () => {
  try {
    let user = await getUser()
  } catch (error) {
    console.error(error)
  }
}
showUsers()
