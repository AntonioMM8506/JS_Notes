const print = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    for (let j = iterations; j >= 1; j = j / 2) {
      console.log('Hello World!')
    }
  }
}
print(10)
// We can see immediately, this is much more complex code (pseudo-algorithm) 
// that will take more time to complete as there are actually two loops now.

// We could benchmark this and see the output:
/*
+-----+-------------+
|   n | console.log |
+-----+-------------+
|   1 |           1 |
|   2 |           4 |
|   5 |          15 |
|  10 |          40 |
|  20 |         100 |
|  50 |         300 |
| 100 |         700 |
| 200 |        1600 |
| 500 |        4500 |
+-----+-------------+
*/
