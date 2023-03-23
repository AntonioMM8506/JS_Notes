// Basic use of getter and setters
class Baby {
  private _age!: number // We add "!" if not strictPropertyInitialization will throw an error

  public get age(): number {
    return this._age
  }

  public set age(theAge: number) { // set can't have type annotation
    if (theAge <= 0 || theAge >= 200) throw new Error('The age is invalid')

    this._age = theAge
  }
}

let babyJack = new Baby()
babyJack.age = 3
//babyJack.age = 350
console.log(`Baby Jack is: ${babyJack.age} years old`)

// Other use of setters and getters
class BabyGirl {
  private _firstName!: string
  private _lastName!: string

  public get fullName() {
    return `${this._firstName} ${this._lastName}`
  }

  public set fullName(name: string) {
    let parts: Array<string> = name.split(' ')
    if (parts.length != 2) throw new Error('Invalid name format!')

    this._firstName = parts[0]
    this._lastName = parts[1]
  }
}

let babyLisa = new BabyGirl()
babyLisa.fullName = 'Lisa Golden Winston'
console.log(`Baby girl name is: ${babyLisa.fullName}`)