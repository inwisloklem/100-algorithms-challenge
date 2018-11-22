const allLongestStrings = require('./all-longest-strings')

test('allLongestStrings is a function.', () => {
  expect(typeof allLongestStrings).toEqual('function')
})

test(`For ['aba', 'aa', 'ad', 'vcd', 'aba'] the result of adjacentElementProduct should be ['aba', 'vcd', 'aba'].`, () => {
  expect(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba'])).toEqual(['aba', 'vcd', 'aba'])
})

test(`For ['abcde', 'abac', 'aefo', 'ighkl', 'xyz'] the result of adjacentElementProduct should be ['abcde', 'ighkl'].`, () => {
  expect(allLongestStrings(['abcde', 'abac', 'aefo', 'ighkl', 'xyz'])).toEqual(['abcde', 'ighkl'])
})
