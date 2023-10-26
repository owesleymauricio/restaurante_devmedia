// Importa um objeto chamado "produtos" de um arquivo localizado em '../data/Data'.
import { produtos } from '../data/Data';


// Função para buscar produtos com base em um texto digitado.
export const BuscarProdutos = (textoDigitado) => {
    // Utiliza o método "filter" para criar um novo array contendo apenas os produtos
    // cujos nomes ou descrições contenham o texto digitado (ignorando maiúsculas e minúsculas).
    return produtos.filter(
        (produto) =>
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}
// Função para filtrar produtos com base em uma categoria.
export const filtrarProdutos = (categoria) => {
    // Utiliza o método "filter" para criar um novo array contendo apenas os produtos
    // que tenham a categoria especificada.
    return produtos.filter((produto) => produto.categoria === categoria);
};
// Filtra os produtos da categoria "Entradas" e atribui o 
//      resultado a uma variável chamada "produtosEntradas".
export const produtosEntradas = filtrarProdutos("Entradas");