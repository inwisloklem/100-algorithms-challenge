// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings (arr) {
  let max = 0

  arr.forEach(item => {
    if (item.length > max) {
      max = item.length
    }
  })

  return arr.filter(item => item.length === max)
}

module.exports = allLongestStrings
