const sum = require('./sum')

// Basic unit test code
describe('Sum function', () => {
  test('adds 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('adds 10 + 20 equal to 30', () => {
    expect(sum(10, 20)).toBe(30)
  })
})