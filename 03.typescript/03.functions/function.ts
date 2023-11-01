// Basic function definition
function add(a: number, b: number): number {
  return a + b
}

function studentsFunc(): string[] {
  return [
    'Leon',
    'Kary',
    'Li'
  ]
}

function promiseFunc(): Promise<string> {
  return new Promise((resolve) => {
    resolve('Hi, there!')
  })
}

// Function, in this case TS will infer the function type
type myAlias = number | string
function times(a: number, b: number): (myAlias) {
  return a * b
}

// New syntax
const customFunc = (): string => {
  return 'Hello world!'
}