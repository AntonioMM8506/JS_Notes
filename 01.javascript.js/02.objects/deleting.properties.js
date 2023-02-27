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

// Lets add a temporal props
book.temporalString = "Data to delete"
book.temporalNumber = 3
book.temporalBoolean = true

// Delete temporal props
delete book.temporalString
delete book['temporalNumber']

// Delete inherited props
delete book.toString

// Delete evaluates true
if (delete book.temporalBoolean) console.log('Delete completed!')
if (delete book.propDoesNotExist) console.log('Delete completed as well!')
