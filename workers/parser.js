class Parser {
  constructor() {}

  build_AST() {}

  recieveData(tokens) {
    this.tokens = tokens
    this.build_AST()
  }
}

const parser = new Parser()

module.exports = { parser }
