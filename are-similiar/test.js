const areSimiliar = require('./are-similiar')

test('areSimiliar is a function.', () => {
  expect(typeof areSimiliar).toEqual('function')
})

test('For [1, 2, 3], [1, 2, 3] the result of areSimiliar should be true.', () => {
  expect(areSimiliar([1, 2, 3], [1, 2, 3])).toBe(true)
})

test('For [1, 2, 3], [2, 1, 3] the result of areSimiliar should be true.', () => {
  expect(areSimiliar([1, 2, 3], [2, 1, 3])).toBe(true)
})

test('For [1, 2, 2], [2, 1, 1] the result of areSimiliar should be false.', () => {
  expect(areSimiliar([1, 2, 2], [2, 1, 1])).toBe(false)
})
