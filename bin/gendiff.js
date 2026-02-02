#!/usr/bin/env node
import { Command } from 'commander'
import { readFileSync } from 'node:fs'
import path from 'path'
import { parseFile } from '../src/parsers.js'

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
  const absolutePath1 = path.resolve(filepath1)
  const absolutePath2 = path.resolve(filepath2)
  const file1 = readFileSync(absolutePath1, 'utf-8')
  const file2 = readFileSync(absolutePath2, 'utf-8')
  const obj1 = parseFile(file1, filepath1)
  const obj2 = parseFile(file2, filepath2)
  console.log(obj1, obj2)
  })

program.parse()