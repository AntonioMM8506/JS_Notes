// What is  quicksort?

// Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts 
// based on some condition and performing the sort operations on those divided smaller parts. 
// Hence, it works well for large datasets




// How does quicksort work?

//1.- First find the “pivot” element in the array.
//2.- Start the left pointer at first element of the array.
//3.-Start the right pointer at last element of the array.
//4.- Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
//5.- Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
//6.- Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
//7.- Increment the left pointer and decrement the right pointer.
//8.- If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.




// Creating the swap two numbers in JS
const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

// Code to perform the partition
const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)] // Getting the middle element
  let i = left // letf pointer
  let j = right // right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

// Creating the quickSort function
const quickSort = (items, left, right) => {
  let index

  if (items.length > 1) {
    index = partition(items, left, right) // index returned from partition

    if (left < index - 1) { // more elements on the left side of the pivot
      quickSort(items, left, index - 1)
    }

    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right)
    }
  }
  return items
}

// Let's run the quickSort function
const items = [5,3,7,6,2,9,1000000]
console.log(quickSort(items, 0, items.length - 1))
