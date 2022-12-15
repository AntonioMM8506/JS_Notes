// Basic Factory pattern implementation

import Motorvehicle from './motorvehicle'
import Aircraft from './aircraft'
import Railvehicle from './railvehicle'

const VehicleFactory = (type, make, model, year) => {
  switch(type) {
    case 'car':
      return new Motorvehicle('car', make, model, year)
      break
    case 'airplane':
      return new Aircraft('airplane', make, model, year)
      break
    case 'helicopter':
      return new Aircraft('helicopter', make, model, year)
      break
    default:
      return new Railvehicle('train', make, model, year)
      break
  }
}

module.exports = VehicleFactory

// Correct way to use VehicleFactory
const audiAllRoad = VehicleFactory('car', 'Audi', 'A6 Allroad', '2020')
