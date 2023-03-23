// Basic way to extend class into a interface
class Control {
  private state: boolean = true
}

interface StatefulControl extends Control {
  enable(): void
}

// Correct way to implement an extended interface with a class
class Button extends Control implements StatefulControl {
  enable() {} // Blank method
}

// Incorrect way to implement
/*class Chart implements StatefulControl {
  enable() {}
}*/