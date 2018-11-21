const addBorder = require('./add-border')

test('addBorder is a function.', () => {
  expect(typeof addBorder).toEqual('function')
})

test(`For ['abc', 'def'] the result of addBorder should be ['*****', '*abc*', '*def*', '*****'].`, () => {
  expect(addBorder(['abc', 'def'])).toEqual(['*****', '*abc*', '*def*', '*****'])
})

test(`For ['abcd', 'efgh', 'ijkl'] the result of addBorder should be ['******', '*abcd*', '*efgh*', '*ijkl*', '******'].`, () => {
  expect(addBorder(['abcd', 'efgh', 'ijkl'])).toEqual(['******', '*abcd*', '*efgh*', '*ijkl*', '******'])
})
