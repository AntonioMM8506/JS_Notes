const logger = (message) => {
  console.log(message)
}

/* 
  ------------------------------------------------------------------------------------------------------------------
    Repeating setup
    If you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach hooks

    beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle 
    asynchronous code - they can either take a done parameter or return a promise.
  ------------------------------------------------------------------------------------------------------------------
*/
// Let's sync with the db before each test, and for this let's use beforeEach
/*beforeEach(() => {
  logger('Connectiong with database...')
})

// Let's clear db connection after each test, we will yse afteEach
afterEach(() => {
  logger('Cleaning database connection...')
})

// Let's run some test
test('1 + 2 = 3', () => {
  expect(1 + 2).toBe(3)
})

test('10 x 5 grater than 30', () => {
  expect(10 * 5).toBeGreaterThan(30)
})*/



/* 
  ------------------------------------------------------------------------------------------------------------------
    One-time setup
    In some cases, you only need to do setup once, at the beginning of a file. This can be especially 
    bothersome when the setup is asynchronous, so you can't do it inline. Jest provides beforeAll and afterAll 
    hooks to handle this situation
  ------------------------------------------------------------------------------------------------------------------
*/
// Let's run some code before we do our tests
/*beforeAll(() => {
  logger('Lets connect with our db before all the tests!')
})

// Let's run some code after all the test are done
afterAll(() => {
  logger('Now we are cleaning db connection')
})*/

// Let's run some test
test('1 + 10 = 11', () => {
  expect(1 + 10).toBe(11)
})

test('10 x 5 grater than 100', () => {
  expect(10 * 50).toBeGreaterThan(100)
})



/* 
  ------------------------------------------------------------------------------------------------------------------
    Scoping
    By default, the beforeAll and afterAll blocks apply to every test in a file. You can also group tests 
    together using a describe block. When they are inside a describe block, the beforeAll and afterAll blocks 
    only apply to the tests within that describe block
  ------------------------------------------------------------------------------------------------------------------
*/
describe('test regarding scoping tests', () => {
  // Let's log some info before running our tests
  beforeAll(() => {
    logger('Running test in describe block!')
  })

  test('1 + 14 = 15', () => {
    expect(1 + 14).toBe(15)
  })
})
