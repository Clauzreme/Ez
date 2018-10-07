const args = process.argv.slice(2)
const filePath = __dirname + '/../ez/' + args[0]

const fs = require('fs')
const readline = require('readline')
const instream = fs.createReadStream(filePath)
const outstream = new (require('stream'))()
const rl = readline.createInterface(instream, outstream)

const { lexer } = require('./lexer')

let data = []

rl.on('line', line => {
  data.push(line)
})

rl.on('close', () => {
  lexer.recieveData(data)
})
