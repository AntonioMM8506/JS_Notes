// Basic declaration of type any
let anything: any
anything = 'Could be a string'
anything = true
anything = null
anything = {}
anything = () => {}

// any vs object
let result: any
result = 10.123
// Won't throw an error, because we set the type as any
console.log(result.toFixed())
//result.willExist()