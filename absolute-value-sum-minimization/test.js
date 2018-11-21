const absoluteValueSumMinimization = require('./absolute-value-sum-minimization')

test('absoluteValueSumMinimization is a function.', () => {
  expect(typeof absoluteValuesSumMinimization).toEqual('function')
})

test('For [2, 4, 7] the result of absoluteValueSumMinimization should be 4.', () => {
  expect(absoluteValueSumMinimization([2, 4, 7])).toBe(4)
})

test('For [2, 4, 6, 7] the result of absoluteValueSumMinimization should be 4.', () => {
  expect(absoluteValueSumMinimization([2, 4, 6, 7])).toBe(4)
})

test('For [2, 4, 6, 7, 8] the result of absoluteValueSumMinimization should be 6.', () => {
  expect(absoluteValueSumMinimization([2, 4, 6, 7, 8])).toBe(6)
})

test('For [2, 4, 5, 6, 7, 8] the result of absoluteValueSumMinimization should be 5.', () => {
  expect(absoluteValueSumMinimization([2, 4, 5, 6, 7, 8])).toBe(5)
})
