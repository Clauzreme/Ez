import fs from 'fs'

import lexer from './lexer'

const args = process.argv.slice(2)

console.log(args)

const filePath = __dirname + '/' + args[0]

let data

fs.readFile(filePath, (err, chunk) => {
  if (!err) {
    data = chunk.toString('utf8')
    console.log('data => ', data)
  } else {
    console.log(err)
  }
})

lexer.recieveData(data)

console.log('TOkens: ')

console.log(lexer.tokens)
