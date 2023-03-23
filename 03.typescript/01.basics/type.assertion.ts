let str = "1" // : string
let str2: number = <number> <any> str // str is now of type number
let str3: number = parseInt(str) // Casting

console.log(typeof str)