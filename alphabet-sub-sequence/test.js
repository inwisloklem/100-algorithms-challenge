const alphabetSubSequence = require('./alphabet-sub-sequence')

test('alphabetSubSequence s a function.', () => {
  expect(typeof alphabetSubSequence).toEqual('function')
})

test(`For 'abc' the result of alphabetSubSequence should be true.`, () => {
  expect(alphabetSubSequence('abc')).toBe(true)
})

test(`For 'ace' the result of alphabetSubSequence should be true.`, () => {
  expect(alphabetSubSequence('ace')).toBe(true)
})

test(`For 'bxz' the result of alphabetSubSequence should be true.`, () => {
  expect(alphabetSubSequence('ace')).toBe(true)
})

test(`For 'zab' the result of alphabetSubSequence should be false.`, () => {
  expect(alphabetSubSequence('zab')).toBe(false)
})

test(`For 'effg' the result of alphabetSubSequence should be false.`, () => {
  expect(alphabetSubSequence('effg')).toBe(false)
})

test(`For 'cdce' the result of alphabetSubSequence should be false.`, () => {
  expect(alphabetSubSequence('cdce')).toBe(false)
})
