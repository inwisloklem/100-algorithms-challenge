const adjacentElementProduct = require('./adjancent-element-product')

test('adjacentElementProduct is a function.', () => {
  expect(typeof adjacentElementProduct).toEqual('function')
})

test('For [6, -2, 3]) the result of adjacentElementProduct should be -6.', () => {
  expect(adjacentElementProduct([6, -2, 3])).toBe(-6)
})

test('For [3, 6, -2, -5, 7, 3] the result of adjacentElementProduct should be 21.', () => {
  expect(adjacentElementProduct([3, 6, -2, -5, 7, 3])).toBe(21)
})
