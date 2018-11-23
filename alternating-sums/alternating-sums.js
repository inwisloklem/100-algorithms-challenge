function alternatingSums (arr) {
  const isEven = num => num % 2 === 0

  return arr.reduce((result, current, i) =>
    isEven(i)
      ? [result[0] + current, result[1]]
      : [result[0], result[1] + current],
  [0, 0])
}

module.exports = alternatingSums
