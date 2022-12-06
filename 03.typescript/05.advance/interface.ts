// Basic interface declaration
interface Country {
  name: string
  population: number
}

// Using interface in a function
const americanCountry = (country: Country) => {
  return `The population of ${ country.name } is ${country.population}`
}
console.log(americanCountry({name: 'Mexico', population: 120000000}))
// Lets declare an object, because we have a name and population with the correct type, ts does not care about extra properties
let mexico = {
  name: 'Mexico',
  population: 120000000,
  states: 32,
  currency: 'Mexican Peso $'
}
console.log(americanCountry(mexico))

// Optional and readonly properties
interface EuropeanCountry {
  name: string,
  population: number,
  currency?: string,
  readonly continent: string
}
// Create an object with the EuropeanCountry interface
const germany: EuropeanCountry = {
  name: 'Germany',
  population: 80000000,
  continent: 'Euriope'
}
// Let's try to reassign value in our germany object
germany.population = 90000000
//germany.continent = 'America'
germany.currency = 'Euro'