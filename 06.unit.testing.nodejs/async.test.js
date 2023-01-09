// This following example with throw a false/positive
/*test("this shouldn't pass", () => {
  setTimeout(() => {
    // this should fail:
    expect(false).toBe(true)
  })
})*/


/* 
  ------------------------------------------------------------------------------------------------------------------
    Callbacks:
  ------------------------------------------------------------------------------------------------------------------
*/
function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b
    callback(result)
  }, 500)
}

// Let's test async add function using done() for callbacks
test('add numbers async', done => {
  addAsync(10, 5, result => {
    expect(result).toBe(15);
    done();
  })
})



/* 
  ------------------------------------------------------------------------------------------------------------------
    Promises:
  ------------------------------------------------------------------------------------------------------------------
*/
// This following test should fail
// test will incorrectly pass because Jest is not aware that we are doing an asynchronous operation.
/*test('should not pass', () => {
  const p = Promise.resolve(false);

  p.then(value => {
    expect(value).toBe(true);
  })
})*/

// This is the correct way we can test a promise
// We are using the "then" callback
const somePromise = new Promise((resolve, reject) => {
  resolve(true)
})

test('properly test a Promise', () => {
  return somePromise.then(value => {
    expect(value).toBeTruthy()
  })
})

// Test resolves and reject in a promise
test('should resolve to some value', () => {
  const p = Promise.resolve('some value')
  return expect(p).resolves.toBe('some value')
})

test('should reject to error', () => {
  const p = Promise.reject('error')
  return expect(p).rejects.toBe('error')
})



/* 
  ------------------------------------------------------------------------------------------------------------------
    Async/Await:
  ------------------------------------------------------------------------------------------------------------------
*/
// we can wait for the resolved Promise value and assert it.
test('shows how async / await works', async () => {
  const value = await Promise.resolve(true)
  expect(value).toBe(true)
})
