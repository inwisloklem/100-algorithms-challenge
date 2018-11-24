const areEquallyStrong = require('./are-equally-strong')

test('areEquallyStrong is a function.', () => {
  expect(typeof areEquallyStrong).toEqual('function')
})

test('For 10, 15, 15, 10 the result of alternatingSums should be true.', () => {
  expect(areEquallyStrong(10, 15, 15, 10)).toBe(true)
})

test('For 15, 10, 15, 10 the result of alternatingSums should be true.', () => {
  expect(areEquallyStrong(15, 10, 15, 10)).toBe(true)
})

test('For 15, 10, 15, 9 the result of alternatingSums should be false.', () => {
  expect(areEquallyStrong(15, 10, 15, 9)).toBe(false)
})
