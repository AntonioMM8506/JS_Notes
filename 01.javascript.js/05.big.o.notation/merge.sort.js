// What is the Merge Sort Algorithm?

// Merge Sort is, you guessed it, a sorting algorithm that can be used to order the items of an array 
// from smallest to largest. It takes in an array, sorts it, then spits it out
// Merge Sort is an out-of-place, stable, and comparison-type sorting algorithm

// Out-of-place means that the algorithm requires additional data structures when sorting. 
// This is opposite to in-place sorting algorithms, where the input is simply overwritten and no extra data structures are required.

// Stable means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.

// And finally, a comparison sort is a sorting algorithm that only reads the list of elements through a single abstract 
// comparison operation (usually a “less than” or “equal to”) that determines which of the two elements should occur first 
// in the final sorted output array.



// We need a merge helper function
const merge = (left, right) => {
  let sortedArray = [] // the sorted items will go here

  while (left.length && right.length) {
    // Insert the smallest item into sortedArray
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArray, ...left, ...right]
}
// Our merge algorithm runs at O(n + m) where n and m are the lengths of the first and second arrays respectively. 
// This is because we iterate over each item in each array once. This just boils down to a Big O(n) => linear time complexity.

// Working on the merge sort function
const mergeSort = (arr) => {
  // Base case
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)

  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([3, 5, 8, 5, 99, 1]))
