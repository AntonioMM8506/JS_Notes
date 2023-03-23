// Basic use of void
const log = (message: string): void => {
  console.log(message)
}
log('What a day!')

// TS infer func type
const infereLog = (message: string) => {
  console.log(message)
}
infereLog('Never mind!')

// If we use void in a var, the var can olny have undefined as value
let useless: void = undefined
let myUseless: undefined = undefined
// useless = 1