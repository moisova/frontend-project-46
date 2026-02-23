
import { describe, expect, test } from '@jest/globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { parseFile } from '../src/parsers'
import { buildTree } from '../src/buildTree'
import { stylish } from '../src/formatters/stylish'
import { plain } from '../src/formatters/plain'
import json from '../src/formatters/json'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename)
const readExpected = (name) => readFileSync(getFixturePath(`expected/${name}.txt`), 'utf-8')

describe.each(['json', 'yaml'])('compare function for %s', (format) => {
  const readFile = (name) => parseFile(readFileSync(getFixturePath(`${name}.${format}`), 'utf-8'), `${name}.${format}`)
  test('test stylish formatter', () => {
    const obj1 = readFile('file1')
    const obj2 = readFile('file2')
    const diffTree = buildTree(obj1, obj2)
    expect(stylish(diffTree)).toEqual(readExpected('stylish'))
  })
})

describe.each(['json', 'yaml'])('compare function for %s', (format) => {
  const readFile = (name) => parseFile(readFileSync(getFixturePath(`${name}.${format}`), 'utf-8'), `${name}.${format}`)
  test('test plain formatter', () => {
    const obj1 = readFile('file1')
    const obj2 = readFile('file2')
    const diffTree = buildTree(obj1, obj2)
    expect(plain(diffTree)).toEqual(readExpected('plain'))
  })
})

describe.each(['json', 'yaml'])('compare function for %s', (format) => {
  const readFile = (name) => parseFile(readFileSync(getFixturePath(`${name}.${format}`), 'utf-8'), `${name}.${format}`)
  test('test json formatter', () => {
    const obj1 = readFile('file1')
    const obj2 = readFile('file2')
    const diffTree = buildTree(obj1, obj2)
    expect(json(diffTree)).toEqual(readExpected('json'))
  })
})