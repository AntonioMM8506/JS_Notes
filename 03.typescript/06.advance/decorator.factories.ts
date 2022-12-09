// Basic implementation of decorator factories
const decoratorA = (someBooleanFlag: boolean) => {
  return (target: Function) => {}
}

@decoratorA(false)
//@decoratorA // Whitout params
class PersonDecA {}