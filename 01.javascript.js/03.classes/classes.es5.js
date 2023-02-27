// ES5 and before class syntax
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.getName = function() {
  return this.name
}

Person.prototype.getAge = function() {
  return this.age
}

Person.prototype.gender = function() {
  return this.gender
}
