// You are given a two-digit integer n. Return the sum of its digits.
function addTwoDigits (n) {
  return [...n.toString()]
    .reduce((result, current) => Number(result) + Number(current))
}

module.exports = addTwoDigits
