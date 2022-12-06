// Basic way to implements intersection types
interface BusinessPartner {
  name: string
  credit: number
}

interface Identity {
  id: number
  name: string
}

interface Contact {
  email: string
  phone: string
}

// Lets create two intersection types
type Employee = Identity & Contact // You can add 2 or more interfaces
type Customer = BusinessPartner & Contact

// Lets use an object with Employee and Customer types
let emplo: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684'
}

let cust: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735'
}

