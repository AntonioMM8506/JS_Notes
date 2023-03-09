// Let's create a basic example of async/await syntax
function sayHi() {
  return Promise.resolve('Hi, there!')
}
// Creating a new function to print a message
/*const display = async () => {
  let result = await sayHi()
  console.log(result)
}
display()*/
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
