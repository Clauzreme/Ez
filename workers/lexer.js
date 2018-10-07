class Lexer {
  constructor() {
    this.keywords = ['while', 'for', 'if', 'else']
    this.tokens = []
    this.separators = []
    this.operators = ['+', '-', '*', '/', '%']
    this.stingCapsulators = ["'", '"', '`']
  }

  tokenizer() {
    for (let row of this.data) {
      console.log('row => ', row)

      let value = []
      let type = ''
      let token = ''

      for (let char of row) {
        console.log('char => ', char)
        if (char === `'` && type === '') {
          type = 'string'
          token = 'literal'
          value = []
        } else if (char === `'` && type === 'string') {
          this.tokens.push({ type, token, value: value.join('') })
          value = []
          type = ''
          token = ''
        } else if (this.keywords.includes(value.join(''))) {
          this.tokens.push({
            type: value.join(''),
            token: 'keyword',
            value: value.join(''),
          })
          value = []
          type = ''
          token = ''
        } else if (char === ` ` && type !== 'string') {
          if (type !== '') {
            this.tokens.push({ type, token, value: value.join('') })
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
