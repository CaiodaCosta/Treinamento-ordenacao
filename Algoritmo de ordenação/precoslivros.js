const livros = require("./listaLivros")

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
    //o que acontece aqui é que o loop verifica se a variavel 'atual' é menor que o parametro atual do preço
    //o codigo vai rodando e verificando os preços e mudando a posição deles caso sejam mais baixos que o preço atual
    //basicamente se lê assim:
    // se o preço na posição atual é menor que o preço na posição mais barata atual é atribuido a maisbarato
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorValor

