#!/usr/bin/env node
import { parseFile } from './parser.js'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { Command } from 'commander'
import { compare } from './comparer.js'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('output the version number')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1)
    const absolutePath2 = path.resolve(filepath2)
    const file1 = readFileSync(absolutePath1, 'utf-8')
    const file2 = readFileSync(absolutePath2, 'utf-8')
    const obj1 = parseFile(file1)
    const obj2 = parseFile(file2)
    const compared = compare(obj1, obj2)
    console.log(compared)
  })
  .option('-f, --format [type]', 'output format')
  .parse(process.argv)
