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

// Querying props from book object
let author = book.author
let bookTitle = book[`title`]

// Adding props to the book object
book.edition = 7
book['publishDate'] = new Date().toDateString()

// Setting props to the book object
book.price = 20.99
book['title'] = 'JavaScript for begginers'