class Lexer {
  constructor(data) {
    this.keywords = ['echo']
    this.tokens = []
    this.separators = []
    this.operators = []
    this.literals = []
    this.comment = []
    this.stingCapsulators = ["'", '"', '`']
  }

  tokenizer() {
    for (let row of this.data) {
      console.log('row => ', row)

      let value = []
      let type = ''

      for (let char of row) {
        console.log('char => ', char)
        if (char === `'` && type === '') {
          type = 'string'
          value = []
        } else if (char === `'` && type === 'string') {
          this.tokens.push({ type, value: value.join('') })
          value = []
          type = ''
        } else if (char === ` ` && type !== 'string') {
          if (type !== '') {
            this.tokens.push({ type, value: value.join('') })
          }
        } else {
          value.push(char)
        }
      }
    }

    console.log(this.tokens)
  }

  recieveData(data) {
    this.data = data
    this.tokenizer()
  }
}

const lexer = new Lexer()

module.exports = { lexer }
