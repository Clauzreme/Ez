class Lexer {
  constructor(data) {
    this.keywords = ['echo']
    this.tokens = []
    this.separators = []
    this.operators = []
    this.literals = []
    this.comment = []
  }

  tokenizer() {
    for (let row of this.preLexeredData) {
      console.log('char: ', char)
    }
  }

  recieveData(data) {
    this.preLexeredData = preLexeredData
    this.tokenizer()
  }
}

const lexer = new Lexer()

module.exports = { lexer }
