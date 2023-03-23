const printMemberName = (target: any, memberName: string) => {
  console.log(memberName)
}

class PersonB {
  //@printMemberName
  name: string = 'Jhon'
}

/*
  - How to override the property beign decorated.
*/
const allowList = ["Jon", "Peter", "Jane"]

const allowlistOnly = (target: any, memberName: string) => {
  let currentValue: any = target[memberName]

  Object.defineProperty(target, memberName, {
    set: (newValue: any) => {
      if (!allowList.includes(newValue)) {
        return
      }
      currentValue = newValue
    },
    get: () => currentValue
  })
}

class PersonC {
  @allowlistOnly
  name: string = 'Jon'

  age: number = 18
}

const person = new PersonC()
//console.log(person.name)

person.name = 'Juan'
console.log(person.name)

person.name = 'Jane'
console.log(person.name)