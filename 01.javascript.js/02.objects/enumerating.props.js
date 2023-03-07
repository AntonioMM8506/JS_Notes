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

// Basic and "old" way to enumerate props
const temporalBook = Object.create(book)
temporalBook.propertyIsEnumerable("toString")
for (let prop in temporalBook) {
  //console.log(prop)
}
console.log('=================================')

// Enumerating properties using Object.keys
console.log('Object.keys returns an array:')
console.log(Object.keys(book))
console.log('=================================')
