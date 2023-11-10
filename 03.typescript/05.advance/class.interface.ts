// Basic declaration of class interface
interface Json {
  toJson(): string
}

// Lets create a class that implements Json interface
class Milk implements Json {
  constructor(private brand: string,
      private price: number) {
  }
  
  toJson(): string {
    return JSON.stringify(this);
  }
}

let milky = new Milk('Milky', 1.28)
console.log(milky.toJson())