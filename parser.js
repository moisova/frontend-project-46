const parseFile = (filepath) => {
  const parsedObject = JSON.parse(filepath)
  return parsedObject
}

module.exports = { parseFile }