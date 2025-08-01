// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
  { nome: "Notebook", preco: 3500.00 },
  { nome: "Smartphone", preco: 2300.00 },
  { nome: "Fone de Ouvido", preco: 250.00 },
  { nome: "Monitor", preco: 900.00 },
  { nome: "Teclado Mecânico", preco: 450.00 }
];

function ordenador(produtos){
    return produtos
            .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
            .map(produto => produto.nome); // extrai os nomes
};

console.log(ordenador(produtos));