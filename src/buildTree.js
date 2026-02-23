import _ from 'lodash'

const isObject = (value) => _.isObject(value) && !Array.isArray(value)

export function buildTree(object1, object2) {
  const firstKeys = Object.keys(object1)
  const secondKeys = Object.keys(object2)
  const uniqueKeys = _.union(firstKeys, secondKeys).sort()
  const result = []
  
  for (let key of uniqueKeys) {
    const value1 = object1[key]
    const value2 = object2[key]
    
    if (Object.hasOwn(object1, key) && Object.hasOwn(object2, key)) {
      if (isObject(value1) && isObject(value2)) {
        const children = buildTree(value1, value2)
        result.push({
          key: key,
          type: 'nested',
          children: children
        })
      } else if (_.isEqual(value1, value2)) {
        result.push({
          key: key,
          type: 'unchanged',
          value: value1
        })
      } else {
        result.push({
          key: key,
          type: 'changed',
          oldValue: value1,
          newValue: value2
        })
      }
    } else if (Object.hasOwn(object1, key)) {
      result.push({
        key: key,
        type: 'removed',
        value: value1
      })
    } else if (Object.hasOwn(object2, key)) {
      result.push({
        key: key,
        type: 'added',
        value: value2
      })
    }
  }
  return result
}