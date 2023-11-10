// Basic declaration of function interface
interface StringFormat {
  (str: string, isUpper: boolean): string
}
// Lets use the StringFormat interface
let format: StringFormat
format = (text: string, isUpper: boolean) => {
  return isUpper ? text.toLocaleUpperCase() : text.toLocaleLowerCase()
}
console.log(format('this is a small text', true))