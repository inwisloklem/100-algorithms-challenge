// Check whether the given string is a subsequence of the plaintext alphabet.
function alphabetSubSequence (str) {
  const charValues = [...str].map(item => item.charCodeAt())
  const isUnique = arr => new Set(arr).size === arr.length

  if (!isUnique(charValues)) {
    return false
  }

  for (let i = 0; i < charValues.length; i += 1) {
    const current = charValues[i]
    const next = charValues[i + 1]

    if (next < current) {
      return false
    }
  }

  return true
}

module.exports = alphabetSubSequence
