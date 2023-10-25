const book = {
  title: "JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  isOnSale: false,
  price: 18.50,
  author: {
    firstName: "Jhon",
    lastName: "Doe"
  }
}

let stringified = JSON.stringify(book)
/*console.log(`Value of a stringified variable: ${ stringified }`)
console.log('============================')
console.log(`Other way to stringifying an object ${JSON.stringify(book)}`)*/

/*let parsed = JSON.parse(stringified)
console.log(`Value of a parsed variable:`) // 'Variable of parsed variable: ' + JSON.stringify(parsed)
console.log(parsed)*/

const price = book.price.toString()
