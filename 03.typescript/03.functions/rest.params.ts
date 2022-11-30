// Use of rest params
function getTotal(...numbers: number[]): number {
  let total = 0
  numbers.forEach((num) => total += num)
  return total
}

console.log(`The sum of 10 + 50 + 25 + 100 = ${getTotal(10, 50, 25, 100)}`)