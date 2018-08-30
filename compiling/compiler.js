import fs from 'fs'

import lexer from 'lexer'

const args = process.argv.slice(2)

const filePath = args[0]

let data

fs.readFile(filePath, (err, data) => {
  if (!err) {
    data = data
  } else {
    console.log(err)
  }
})

console.log(args)

lexer.recieveData(data)

console.log('TOkens: ')

console.log(lexer.tokens)
