// Basic decoration creation
@sealed
class PersonDeco {}

function sealed(target: Function) {
  Object.seal(target)
  Object.seal(target.prototype)
  console.log('Estoy adentro')
}