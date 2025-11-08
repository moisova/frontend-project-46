const _ = require('lodash')

function compare(firstObj, secondObj) {
  const firstKeys = Object.keys(firstObj)
  const secondKeys = Object.keys(secondObj)
  const uniqueKeys = _.union(firstKeys, secondKeys).sort()
  const result = []
  for (let key of uniqueKeys) {
    if (Object.hasOwn(firstObj, key)) {
      if (Object.hasOwn(secondObj, key)) {
        if (firstObj[key] === secondObj[key]) {
          result.push(`  ${key}: ${firstObj[key]}`)
        } 
        else {
          result.push(`- ${key}: ${firstObj[key]}`)
          result.push(`+ ${key}: ${secondObj[key]}`)
        }
      }
      else {
        result.push(`- ${key}: ${firstObj[key]}`)
      }
    }
    else if (Object.hasOwn(secondObj, key)) {
      result.push(`+ ${key}: ${secondObj[key]}`)
    }
  }
  return result.join('\n')
}

module.exports = { compare }