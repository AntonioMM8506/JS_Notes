// Basic use of never
const raiseError = (message: string): never => {
  throw new Error(message)
}

/*try {
  raiseError('Undefined error')
} catch (error) {
  console.error(error)
}*/

// Inferred type
function reject() {
  return raiseError('Rejected')
}

function neverOccur(): never {
  while(true) {}
}

// Infinite loop also is a never type
let loop = function forever(): never {
  while(true) {
    console.log('Hello')
  }
}

// We can use never type when a function not always return a value
// Thise function will throw an error because is type boolean
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true
  } else if (typeof a === 'number') {
    return false
  }

  return neverOccur()
}