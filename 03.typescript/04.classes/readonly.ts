// Basic use of readonly
class Children {
  readonly birthDate: Date

  constructor(birthDate: Date) {
    this.birthDate = birthDate
  }
}

let kid: Children = new Children(new Date())
//kid.birthDate = new Date(1988, 12, 25)
