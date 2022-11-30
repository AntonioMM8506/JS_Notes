// Basic use of optional params
function multi(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c
  }
  
  return a * b
}