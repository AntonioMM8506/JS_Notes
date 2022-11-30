// Basic use of void
const log = (message: string): void => {
  console.log(message)
}
log('What a day!')

// TS infer func type
const infereLog = () => {
  console.log('Never mind!')
}

// If we use void in a var, the var can olny have undefined as value
let useless: void = undefined
//useless = 1