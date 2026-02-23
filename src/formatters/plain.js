import _ from 'lodash'

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

export const plain = (diff, path = '') => {
  const lines = diff
    .filter((node) => node.type !== 'unchanged')
    .flatMap((node) => {
      const currentPath = path ? `${path}.${node.key}` : node.key

      switch (node.type) {
        case 'nested':
          return plain(node.children, currentPath)
        
        case 'added':
          return `Property '${currentPath}' was added with value: ${stringify(node.value)}`
        
        case 'removed':
          return `Property '${currentPath}' was removed`
        
        case 'changed':
          return `Property '${currentPath}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`
        
        default:
          return []
      }
    })

  return lines.join('\n')
};

