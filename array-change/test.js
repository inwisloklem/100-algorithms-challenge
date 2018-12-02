const arrayChange = require('./array-change')

test('arrayChange is a function.', () => {
  expect(typeof arrayChange).toEqual('function')
})

test('For [1, 1, 1, 1]  the result of areSimiliar should be 6.', () => {
  expect(arrayChange([1, 1, 1, 1])).toBe(6)
})

test('For [1, 2, 1, 3, 5]  the result of areSimiliar should be 3.', () => {
  expect(arrayChange([1, 2, 1, 3, 5])).toBe(3)
})
