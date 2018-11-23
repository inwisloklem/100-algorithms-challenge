// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
function alphabeticShift (str) {
  const alphabet = 'abcdefghijklmnopqrstvuwxyz'

  return [...str].map(elem => {
    const i = alphabet.indexOf(elem)

    return i === alphabet.length - 1
      ? alphabet[0]
      : alphabet[i + 1]
  }).join('')
}

module.exports = alphabeticShift
