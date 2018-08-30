class Lexer {
  constructor(data) {
    this.keywords = ['echo']
    this.tokens = []
  }

  tokenizer() {}

  recieveData(data) {
    this.data = data
    console.log(data)
  }
}

const lexer = new Lexer()

export default lexer
