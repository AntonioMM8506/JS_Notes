// Three positive numbers are given: a, b and c. Return true if at least two of the numbers have the same last digit.
/*
  a = 85
  b = 95
  c = 1205
*/

function lastButNotLeast(a, b, c) {
  const res1 = a % 10
  const res2 = b % 10
  const res3 = c % 10
  
  if (res1 === res2 || res1 === res3 || res2 === res3) return true
  
  return false
}
