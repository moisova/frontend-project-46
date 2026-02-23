import _ from 'lodash'

const stringify = (value, depth) => {
  if (value === null) return 'null'
  if (!_.isObject(value)) return String(value)

  const indent = ' '.repeat(depth * 4)
  const bracketIndent = ' '.repeat((depth - 1) * 4)
  const entries = Object.entries(value)

  if (entries.length === 0) return '{}'

  const lines = entries.map(([key, val]) => {
    const formattedValue = stringify(val, depth + 1)
    return `${indent}${key}: ${formattedValue}`
  })

  return `{\n${lines.join('\n')}\n${bracketIndent}}`
}

export const stylish = (diff, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 2)
  const bracketIndent = ' '.repeat((depth - 1) * 4)

  const lines = diff.map((node) => {
    const { key, type } = node

    switch (type) {
      case 'added':
        return `${indent}+ ${key}: ${stringify(node.value, depth + 1)}`
      case 'removed':
        return `${indent}- ${key}: ${stringify(node.value, depth + 1)}`
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(node.value, depth + 1)}`
      case 'changed':
        return [
          `${indent}- ${key}: ${stringify(node.oldValue, depth + 1)}`,
          `${indent}+ ${key}: ${stringify(node.newValue, depth + 1)}`,
        ].join('\n')
      case 'nested':
        return `${indent}  ${key}: ${stylish(node.children, depth + 1)}`
      default:
        throw new Error(`Unknown node type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n${bracketIndent}}`
}
