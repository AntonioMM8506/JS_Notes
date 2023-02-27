/*
  ----------------------------------------------------------------------------------
    Array.slice()
  ----------------------------------------------------------------------------------
*/
let sliceArray = [1,2,3,4,5]
console.log(sliceArray.slice(0,3)) // [1,2,3]
console.log(sliceArray.slice(3) )// [4,5]
console.log(sliceArray.slice(1,-1)) // [2,3,4]
console.log(sliceArray.slice(-3,-2))// [3]
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.splice()
  ----------------------------------------------------------------------------------
*/
let spliceArray = [1,2,3,4,5,6,7,8]
console.log(spliceArray.splice(4)) // [5,6,7,8]
console.log(spliceArray.splice(1,2)) // [2,3]
console.log(spliceArray.splice(1,1)) // [4]
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.fill()
  ----------------------------------------------------------------------------------
*/
let fillArray = new Array(5)
console.log(fillArray.fill(0)) // [0,0,0,0,0]
console.log(fillArray.fill(9,1)) // [0,9,9,9,9] fill with 9 starting at index 1
console.log(fillArray.fill(8,2,-1)) // [0,9,8,8,9] fill with 8 at indexes 2, 3
console.log('---------------------------------------------')


/*
  ----------------------------------------------------------------------------------
    Array.copyWithin()
  ----------------------------------------------------------------------------------
*/
let copyArray = [1,2,3,4,5]
console.log(copyArray.copyWithin(1)) // copy array elements up 1
console.log(copyArray.copyWithin(2,3,5)) // copy last 2 elements to index 2
console.log(copyArray.copyWithin(0,-2)) // negative offset work, too
