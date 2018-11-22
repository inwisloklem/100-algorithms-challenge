// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
function almostIncreasingSequence (sequence) {
  let removals = 0

  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] <= sequence[i - 1]) {
      removals += 1

      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false
      }
    }
  }

  return removals <= 1
}

module.exports = almostIncreasingSequence
