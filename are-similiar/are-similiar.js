// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
function areSimiliar (arr1, arr2) {
  const areEqual = (arr1, arr2) => arr1.toString() === arr2.toString()

  if (areEqual(arr1, arr2)) {
    return true
  }

  const temp1 = []
  const temp2 = []

  arr1.forEach((_, i) => {
    if (arr1[i] !== arr2[i]) {
      temp1.push(arr1[i])
      temp2.push(arr2[i])
    }
  })

  if (temp1.length !== 2 || !areEqual(temp1, temp2.reverse())) {
    return false
  }

  return true
}

module.exports = areSimiliar
