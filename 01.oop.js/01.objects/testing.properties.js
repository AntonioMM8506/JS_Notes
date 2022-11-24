const obj = {
  x: 1
}

// In operator examples
console.log(`Property 'x' exists in obj using 'in' ${"x" in obj}`)
console.log(`Property 'y' exists in obj using 'in' ${"y" in obj}`)
console.log('=================================')

// hasOwnProperty() method examples
console.log(`Property 'x' exists in obj using 'hasOwnProperty()' ${obj.hasOwnProperty('x')}`)
console.log(`Property 'y' exists in obj using 'hasOwnProperty()' ${obj.hasOwnProperty('y')}`)
console.log('=================================')

// propertyIsEnuramble() method examples
console.log(`Property 'x' exists in obj using 'propertyIsEnumerable()' ${obj.propertyIsEnumerable('x')}`)
console.log(`Property 'y' exists in obj using 'propertyIsEnumerable()' ${obj.propertyIsEnumerable('y')}`)
console.log('=================================')