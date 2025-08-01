const prompt = require('prompt-sync')();

let qtd = prompt("Digite a quantidade de maçãs compradas: ");
let valorUnidade;

if(qtd < 12){
    valorUnidade = 0.30;
} else {
    valorUnidade = 0.25;
}

let valorTotal = (valorUnidade * qtd).toFixed(2);

console.log(`Valor total da compra = R$ ${valorTotal}`);