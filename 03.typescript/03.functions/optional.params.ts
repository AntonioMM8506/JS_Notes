// Basic use of optional params
function multi(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c
  }
  
  return a * b
}

type user = {
  firstName: string,
  lastName?: string,
  hasChildren?: boolean
}

const customUser: user = { firstName: 'John' }
