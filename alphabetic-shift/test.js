const alphabeticShift = require('./alphabetic-shift')

test('alphabeticShift is a function.', () => {
  expect(typeof alphabeticShift).toEqual('function')
})

test(`For 'crazy' the result of alhabeticShift should be 'dsbaz'.`, () => {
  expect(alphabeticShift('crazy')).toBe('dsbaz')
})

test(`For 'challenge' the result of alhabeticShift should be 'dibmmfohf'.`, () => {
  expect(alphabeticShift('challenge')).toBe('dibmmfohf')
})
