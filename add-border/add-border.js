// Given a rectangular matrix of characters, add a border of asterisks (*) to it.
function addBorder (picture) {
  const border = '*'.repeat(picture[0].length + 2)

  return [
    border,
    ...picture.map(item => `*${item}*`),
    border
  ]
}

module.exports = addBorder
