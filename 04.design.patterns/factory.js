// Basic Factory pattern implementation
class Hardware {
  ram
  hdd
  name

  printRam() {
    console.log(`Hardware ram: ${ram}`)
  }
}

class Laptop extends Hardware {
  constructor(ram, hdd, name) {
    super()

    this.ram = ram
    this.hdd = hdd
    this.name = name
  }
}

class PC extends Hardware {
  constructor(ram, name) {
    super()
    this.ram = ram
    this.name = name
  }
}
