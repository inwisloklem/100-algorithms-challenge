const almostIncreasingSequence = require('./almost-increasing-sequence')

test('almostIncreasingSequence is a function.', () => {
  expect(typeof almostIncreasingSequence).toEqual('function')
})

test('For [1, 3, 2, 1] the result of almostIncreasingSequence should be false.', () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false)
})

test('For [1, 3, 2] the result of almostIncreasingSequence should be true.', () => {
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true)
})

test('For [1, 2, 1, 1] the result of almostIncreasingSequence should be false.', () => {
  expect(almostIncreasingSequence([1, 2, 1, 1])).toBe(false)
})

test('For [2, 1, 2, 3] the result of almostIncreasingSequence should be true.', () => {
  expect(almostIncreasingSequence([2, 1, 2, 3])).toBe(true)
})
