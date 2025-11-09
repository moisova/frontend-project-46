import { describe, expect, test } from '@jest/globals'
import { compare  } from '../comparer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { parseFile } from '../parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const expected1 = 
`- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true`

const expected2 = 
`  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50`

const expected3 = 
`- follow: false
- host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50`


const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename)

const readJson = (filename) => 
  parseFile(readFileSync(getFixturePath(filename), 'utf-8'))

const readFile1 = () => readJson('file1.json')
const readFile2 = () => readJson('file2.json') 
const readEmpty = () => readJson('emptyFile.json')

describe('compare function', () => {
  test('compares files with differences', () => {
    const obj1 = readFile1()
    const obj2 = readFile2()
    expect(compare(obj1, obj2)).toBe(expected1)
  })
  test('returns formatted output for identical files', () => {
    const obj1 = readFile1()
    const obj2 = readFile1()
    expect(compare(obj1, obj2)).toBe(expected2)
  })
  test('shows all keys as removed when second file is empty', () => {
    const obj1 = readFile1()
    const obj2 = readEmpty()
    expect(compare(obj1, obj2)).toBe(expected3)
  })
  test ('returns empty string for both empty files', () => {
    const obj1 = readEmpty()
    const obj2 = readEmpty()
    expect(compare(obj1, obj2)).toBe(``)

  })
})