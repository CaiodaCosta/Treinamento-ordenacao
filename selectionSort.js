const livros = require('./listaLivros');
const menorValor = require('./precoslivros');
// o loop se repete enquanto não rodar exatamente o tamanho da variavel "livros" que é o objeto
for(let atual = 0; atual < livros.length; atual++){
    //"menor" puxa a função menor valor do arquivo precos livros
let menor = menorValor(livros, atual)
let livroAtual = livros[atual];
let livroMenorPreco = livros[menor];
livros[atual] = livroMenorPreco
livros[menor] = livroAtual
}
console.log(livros)
