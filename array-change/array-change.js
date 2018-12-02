// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
function arrayChange (arr) {
  let moves = 0

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i - 1]) {
      while (arr[i] !== (arr[i - 1] + 1)) {
        moves += 1
        arr[i] += 1
      }
    }
  }

  return moves
}

module.exports = arrayChange
