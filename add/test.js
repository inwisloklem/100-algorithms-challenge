const add = require('./add')

test('add is a function.', () => {
  expect(typeof add).toEqual('function')
})

test('For 1, 2 the result of add should be 3.', () => {
  expect(add(1, 2)).toBe(3)
})

test('For 1, 2, 4 the result of add should be 7.', () => {
  expect(add(1, 2, 4)).toBe(7)
})

test('For 1, 2, 4, 15 the result of add should be 22.', () => {
  expect(add(1, 2, 4, 15)).toBe(22)
})
