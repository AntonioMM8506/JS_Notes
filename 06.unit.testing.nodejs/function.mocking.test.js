/* 
  ------------------------------------------------------------------------------------------------------------------
    jest.fn()
  ------------------------------------------------------------------------------------------------------------------
*/
it("returns undefined and has been called correct number of times", () => {
  const mock = jest.fn()

  const result = mock()

  expect(result).toBeUndefined()
  expect(mock).toHaveBeenCalledTimes(1)
  expect(mock).toHaveBeenCalledWith()
})

it("has been called with correct arguments and returns a correct value", () => {
  const mock = jest
    .fn()
    .mockReturnValueOnce("first return")
    .mockReturnValueOnce("second return")

  const resultFirst = mock("first call")
  const resultSecond = mock("second call")

  expect(resultFirst).toBe("first return")
  expect(resultSecond).toBe("second return")
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).toHaveBeenNthCalledWith(1, "first call")
  expect(mock).toHaveBeenNthCalledWith(2, "second call")
})



/* 
  ------------------------------------------------------------------------------------------------------------------
    jest.spyOn()
  ------------------------------------------------------------------------------------------------------------------
*/
const helpers = require("./helpers")

it("returns correct result", () => {
  const addMock = jest.spyOn(helpers, "add")

  const result = addMock(1, 2)

  // look, in contrast to jest.fn() that returns undefined by default
  // jest.spyOn() calls original implementation
  expect(result).toBe(3)
})

it("returns mocked and original result", () => {
  const addMock = jest.spyOn(helpers, "add")
  addMock.mockImplementation(() => 4)

  // redefined implementation
  expect(helpers.add()).toBe(4)

  addMock.mockRestore()

  // original implementation
  expect(helpers.add(1, 2)).toBe(3)
});



/* 
  ------------------------------------------------------------------------------------------------------------------
    jest.mock()
  ------------------------------------------------------------------------------------------------------------------
*/
it("mocks entire module", () => {
  helpers.add = jest.fn()
  helpers.sub = jest.fn()

  expect(helpers.add.mock).toBeTruthy()
  expect(helpers.sub.mock).toBeTruthy()
})
