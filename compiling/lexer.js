class Lexer {
  constructor(data) {
    this.keywords = ['echo']
    this.tokens = []
  }

  tokenizer() {}

  recieveData(data) {
    this.data = data
    for (let char of data) {
      console.log('char: ', char)
    }
  }
}

const lexer = new Lexer()

export default lexer
