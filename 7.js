const produtos = [];

const produto = (nome, preco) => ({
    nome: nome, 
    preco: preco
})

produtos.push(produto('Notebook', 2500));
produtos.push(produto('Celular', 1500));
produtos.push(produto('Tablet', 800));

const produtos_ordenados = produtos.sort((a, b) => a.preco - b.preco);

const nomes_por_preco = produtos_ordenados.map( produto => produto.nome);

console.log(nomes_por_preco);