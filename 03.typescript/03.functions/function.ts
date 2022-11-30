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
  return new Promise((resolver) => {
    return 'Hi, there!'
  })
}

// Function, in this case TS will infer the function type
function times(a: number, b: number): (number | string) {
  return a * b
}

// New syntax
const customFunc = (): string => {
  return 'Hello world!'
}