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

// book.subTitle does not exist
console.log(`The value of book.subTitle is: ${book.subTitle}`)

// TypeError: undefined does not have length
//const len = book.subTitle.length

/*
  Guards to check if a prop exists 
*/

// Explicit technique
let lastName = undefined
let tempo1 = undefined
if (book) {
  if (book.author) {
    lastName = book.author.lastName
  }
}

// Concise and idiomatic way to gett lastName
lastName = book && book.author && book.author.lastName
tempo1 = book?.author?.subTitle // Conditional property access or Optional chaining
console.log(tempo1)

// Set a property on undefined
book.temporal.var = 2