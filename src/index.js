import fs from 'fs'
import { parseFile } from './parsers.js'
import { buildTree } from './buildTree.js'
import format from './formatters/format.js'

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = fs.readFileSync(filepath1, 'utf-8')
  const content2 = fs.readFileSync(filepath2, 'utf-8')

  const data1 = parseFile(content1, filepath1)
  const data2 = parseFile(content2, filepath2)

  const diff = buildTree(data1, data2)
  return format(diff, formatName)
}

export default genDiff
