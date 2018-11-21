// 1. Write a function that returns the sum of two numbers.
// 2. Write a function that returns the sum of all numbers regardless of # of params.

function add (...args) {
  return args.reduce(function sum (result, current) {
    return result + current
  })
}

module.exports = add
