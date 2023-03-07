const book = {
  title: "JavaScript",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  isOnSale: false,
  price: 18.50,
  author: {
    firstName: "Jhon",
    lastName: "Doe"
  },
  boolean1: true,
  boolean2: false,
  boolean3: false
}

// Querying props from book object
let author = book.author
let bookTitle = book[`title`]

for (let i = 4; i <= 6; i++) {
  book[`boolean${i}`] = true
}

// Adding props to the book object
book.edition = 7
book['publishDate'] = new Date().toDateString()

// Setting props to the book object
book.price = 20.99
book['title'] = 'JavaScript for begginers'

console.log(book)