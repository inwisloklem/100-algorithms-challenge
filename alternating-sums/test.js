const alternatingSums = require('./alternating-sums')

test('alternatingSums is a function.', () => {
  expect(typeof alternatingSums).toEqual('function')
})

test('For [5, 10, 15, 20] the result of alternatingSums should be [20, 30].', () => {
  expect(alternatingSums([5, 10, 15, 20])).toEqual([20, 30])
})

test('For [50, 60, 60, 45, 70] the result of alternatingSums should be [180, 105].', () => {
  expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105])
})
