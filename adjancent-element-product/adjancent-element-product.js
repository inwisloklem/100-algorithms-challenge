// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementProduct (arr) {
  let max = arr[0] * arr[1]

  arr.shift()
  arr.forEach((current, i) => {
    if (typeof arr[i + 1] !== 'undefined' && current * arr[i + 1] > max) {
      max = current * arr[i + 1]
    }
  })

  return max
}

module.exports = adjacentElementProduct
