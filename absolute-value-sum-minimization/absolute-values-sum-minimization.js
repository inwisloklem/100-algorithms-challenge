// Given a sorted array of integers a, find an integer x from a such that the value of abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x) is the smallest possible.
// If there are several possible answers, output the smallest one.
function absoluteValueSumMinimization (arr) {
  const isEven = num => num % 2 === 0

  return isEven(arr.length)
    ? arr[arr.length / 2 - 1]
    : arr[Math.floor(arr.length / 2)]
}

module.exports = absoluteValueSumMinimization
