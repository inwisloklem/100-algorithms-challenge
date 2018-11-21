const addTwoDigits = require('./add-two-digits')

test('addTwoDigits is a function.', () => {
  expect(typeof addTwoDigits).toEqual('function')
})

test('For 12 the result of addTwoDigits should be 3.', () => {
  expect(addTwoDigits(12)).toBe(3)
})

test('For 29 the result of addTwoDigits should be 11.', () => {
  expect(addTwoDigits(29)).toBe(11)
})

test('For 87 the result of addTwoDigits should be 15.', () => {
  expect(addTwoDigits(87)).toBe(15)
})
