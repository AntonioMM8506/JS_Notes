// The simplest kind of asynchrony is setTimeout function
const myCallback = () => {
  console.log('The time is up!')
}
// SetTimeout requires two arguments: 1 - time interval in miliseconds, 2 - custom callback
// The following lineas of code will run like this:
// First, you will see the message "Here we go!"
// Then you will see the message "The road ends here!"
// And last you will see the message "The time is up!"
/*console.log('Here we go!')
setTimeout(myCallback, 1000)
console.log('The road ends here!')*/

// Lets do another example of callback, now, we will check for updates every second for 10 seconds
/*let times = 1
let checkForUpdates = setInterval(() => {
  console.log(`Checking for updates (${times})`)
  times++

  if (times > 10) stopCheckingForUpdates()
}, 1000)

const stopCheckingForUpdates = () => clearInterval(checkForUpdates)*/


/*
  ------------------------------------------------------------------------------
    callbacks example using NodeJS
  ------------------------------------------------------------------------------
*/
const fs = require('fs')
const correctFile = 'dummy.json'
const incorrectFile = 'incorrect.json'

// Lets read a file and using callbacks, we will process the data
fs.readFile(incorrectFile, 'utf-8', (err, data) => {
  if (err) {
    // If there was an error, we display the error
    console.warn('Something went wrong!', err)
  }

  // We print the json object
  console.log(data)
})
